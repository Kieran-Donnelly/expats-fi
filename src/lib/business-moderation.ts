import type { Business, BusinessSubmission } from '@/payload-types'
import type { Payload } from 'payload'

export const businessSubmissionActions = {
  approve: 'approved',
  'needs-changes': 'needs-changes',
  decline: 'declined',
} as const

export type BusinessSubmissionAction = keyof typeof businessSubmissionActions

export function isBusinessSubmissionAction(value: unknown): value is BusinessSubmissionAction {
  return typeof value === 'string' && value in businessSubmissionActions
}

export function normalizeBusinessWebsite(value: string | null | undefined): string {
  const input = value?.trim() || ''
  if (!input) return ''

  try {
    const url = new URL(input)
    const host = url.hostname.toLowerCase().replace(/^www\./, '')
    const path = url.pathname.replace(/\/+$/, '')
    return `${host}${path}`
  } catch {
    return input
      .toLowerCase()
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .replace(/[?#].*$/, '')
      .replace(/\/+$/, '')
  }
}

export function slugifyBusinessName(value: string): string {
  const slug = value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)

  return slug || 'business'
}

export function businessSummary(value: string, maxLength = 240): string {
  const text = value.trim()
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength - 1).trimEnd()}…`
}

async function uniqueBusinessSlug(payload: Payload, businessName: string): Promise<string> {
  const base = slugifyBusinessName(businessName)
  let candidate = base

  for (let suffix = 2; suffix < 1000; suffix += 1) {
    const existing = await payload.find({
      collection: 'businesses',
      depth: 0,
      limit: 1,
      pagination: false,
      overrideAccess: true,
      where: { slug: { equals: candidate } },
    })
    if (!existing.totalDocs) return candidate
    candidate = `${base}-${suffix}`
  }

  throw new Error('Could not find a unique business slug.')
}

function verificationUpdate(existing: Business, submission: BusinessSubmission, reviewerId?: number): Partial<Business> {
  const update: Partial<Business> = {
    sourceSubmission: submission.id,
    verificationStatus: existing.verificationStatus === 'owner-verified' ? 'owner-verified' : 'reviewed',
    verifiedAt: existing.verifiedAt || new Date().toISOString(),
  }

  if (typeof reviewerId === 'number') update.verifiedBy = reviewerId
  if (!existing.verificationNotes) update.verificationNotes = `Approved from member submission #${submission.id}.`
  return update
}

/**
 * Turn an approved member submission into a published directory record. The
 * source submission and normalised website checks make this operation safe to
 * run again when an administrator edits an already-approved submission.
 */
export async function promoteApprovedSubmission({
  payload,
  reviewerId,
  submission,
}: {
  payload: Payload
  reviewerId?: number
  submission: BusinessSubmission
}): Promise<Business> {
  const linked = await payload.find({
    collection: 'businesses',
    depth: 0,
    limit: 1,
    pagination: false,
    overrideAccess: true,
    where: { sourceSubmission: { equals: submission.id } },
  })
  let existing = linked.docs[0] as Business | undefined

  if (!existing) {
    const allBusinesses = await payload.find({
      collection: 'businesses',
      depth: 0,
      limit: 500,
      pagination: false,
      overrideAccess: true,
      sort: 'id',
    })
    const website = normalizeBusinessWebsite(submission.website)
    existing = website
      ? allBusinesses.docs.find((business) => normalizeBusinessWebsite(business.website) === website) as Business | undefined
      : undefined
  }

  if (existing) {
    return payload.update({
      collection: 'businesses',
      id: existing.id,
      data: verificationUpdate(existing, submission, reviewerId),
      depth: 0,
      overrideAccess: true,
    })
  }

  const now = new Date().toISOString()
  const business = await payload.create({
    collection: 'businesses',
    data: {
      name: submission.businessName,
      slug: await uniqueBusinessSlug(payload, submission.businessName),
      summary: businessSummary(submission.description),
      description: submission.description,
      categories: [{ label: submission.category }],
      locations: [{ label: submission.location }],
      address: submission.location,
      website: submission.website,
      featured: false,
      status: 'published',
      verificationStatus: 'reviewed',
      verifiedAt: now,
      ...(typeof reviewerId === 'number' ? { verifiedBy: reviewerId } : {}),
      sourceSubmission: submission.id,
      verificationNotes: `Approved from member submission #${submission.id}.`,
    },
    depth: 0,
    overrideAccess: true,
  })

  return business
}

import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { canManageContent } from '@/lib/admin-access'
import { businessSubmissionActions, isBusinessSubmissionAction } from '@/lib/business-moderation'
import { isSameOrigin } from '@/lib/request-origin'

type RouteContext = { params: Promise<{ id: string }> }

function json(data: Record<string, unknown>, status = 200) {
  return Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } })
}

function text(value: unknown, maxLength: number): string | undefined {
  if (typeof value !== 'string') return undefined
  const result = value.trim().slice(0, maxLength)
  return result || undefined
}

export async function POST(request: Request, { params }: RouteContext) {
  if (!isSameOrigin(request)) return json({ message: 'Invalid request origin.' }, 403)

  const payload = await getPayload({ config: configPromise })
  const auth = await payload.auth({ headers: request.headers })
  const admin = auth.user
  if (!canManageContent(admin)) return json({ message: 'Administrator access is required.' }, 403)

  const { id: rawId } = await params
  const id = Number(rawId)
  if (!Number.isInteger(id) || id < 1) return json({ message: 'Invalid submission id.' }, 400)

  const body = await request.json().catch(() => null) as Record<string, unknown> | null
  if (!isBusinessSubmissionAction(body?.action)) return json({ message: 'Choose a valid moderation action.' }, 400)

  const now = new Date().toISOString()
  const reviewerNotes = text(body?.reviewerNotes, 2000)
  const updated = await payload.update({
    collection: 'business-submissions',
    id,
    data: {
      status: businessSubmissionActions[body.action],
      reviewedAt: now,
      reviewedByEmail: admin.email,
      ...(reviewerNotes ? { reviewerNotes } : {}),
    },
    depth: 0,
    overrideAccess: true,
  })

  // The collection hook creates or links the business. If the update was
  // made through this custom endpoint, attach the authenticated reviewer to
  // that record as well (the hook cannot receive a Next Request as `req`).
  let businessId: number | undefined
  if (body.action === 'approve') {
    const linked = await payload.find({
      collection: 'businesses',
      depth: 0,
      limit: 1,
      pagination: false,
      overrideAccess: true,
      where: { sourceSubmission: { equals: updated.id } },
    })
    const business = linked.docs[0]
    if (business) {
      businessId = business.id
      await payload.update({
        collection: 'businesses',
        id: business.id,
        data: {
          verifiedBy: admin.id,
          verifiedAt: business.verifiedAt || now,
          ...(business.verificationStatus === 'owner-verified' ? {} : { verificationStatus: 'reviewed' }),
        },
        depth: 0,
        overrideAccess: true,
      })
    }
  }

  return json({ ok: true, id: updated.id, status: updated.status, businessId })
}

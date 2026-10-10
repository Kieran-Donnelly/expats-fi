import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

import { businessDrafts } from '../data/business-drafts'

const slug = 'hima-holistic'
const website = 'https://himaholistic.com/'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const business = businessDrafts.find((candidate) => candidate.slug === slug)
  if (!business) throw new Error('Hima Holistic business profile is missing')

  const submissions = await payload.find({
    collection: 'business-submissions',
    depth: 0,
    limit: 1,
    overrideAccess: true,
    req,
    where: {
      or: [
        { website: { equals: website } },
        { businessName: { equals: business.name } },
      ],
    },
  })
  const submission = submissions.docs[0]

  if (submission && submission.status !== 'approved') {
    await payload.update({
      collection: 'business-submissions',
      id: submission.id,
      data: {
        status: 'approved',
        reviewerNotes: 'Approved after an Expats.fi details check. A licensed stock image is in place while preferred owner photos and a logo are requested.',
        reviewedAt: '2026-10-10T06:00:00.000Z',
        reviewedByEmail: 'moi@expats.fi',
      },
      depth: 0,
      overrideAccess: true,
      req,
    })
  }

  const existing = await payload.find({
    collection: 'businesses',
    depth: 0,
    limit: 1,
    overrideAccess: true,
    req,
    where: { slug: { equals: slug } },
  })

  const data = {
    ...business,
    categories: business.categories.map((label) => ({ label })),
    featured: false,
    locations: business.locations.map((label) => ({ label })),
    verificationStatus: 'reviewed' as const,
    verifiedAt: '2026-10-10T06:00:00.000Z',
    ...(submission ? { sourceSubmission: submission.id } : {}),
    verificationNotes: 'Approved from the Hima Holistic member submission after checking the business website and public contact details. Temporary licensed stock image used while owner imagery is requested.',
  }

  if (existing.totalDocs) {
    await payload.update({
      collection: 'businesses',
      id: existing.docs[0].id,
      data,
      overrideAccess: true,
      req,
    })
    return
  }

  await payload.create({
    collection: 'businesses',
    data,
    overrideAccess: true,
    req,
  })
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.delete({
    collection: 'businesses',
    overrideAccess: true,
    req,
    where: { slug: { equals: slug } },
  })

  const submissions = await payload.find({
    collection: 'business-submissions',
    depth: 0,
    limit: 1,
    overrideAccess: true,
    req,
    where: {
      or: [
        { website: { equals: website } },
        { businessName: { equals: 'Hima Holistic' } },
      ],
    },
  })

  if (submissions.docs[0]?.status === 'approved') {
    await payload.update({
      collection: 'business-submissions',
      id: submissions.docs[0].id,
      data: {
        status: 'pending',
        reviewerNotes: null,
        reviewedAt: null,
        reviewedByEmail: null,
      },
      depth: 0,
      overrideAccess: true,
      req,
    })
  }
}

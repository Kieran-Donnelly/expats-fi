import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

import { businessDrafts } from '../data/business-drafts'

const slug = 'inka-roastery'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const business = businessDrafts.find((candidate) => candidate.slug === slug)
  if (!business) throw new Error('Inka Roastery business profile is missing')

  const existing = await payload.find({
    collection: 'businesses',
    limit: 1,
    overrideAccess: true,
    req,
    where: { slug: { equals: slug } },
  })
  if (existing.totalDocs) return

  await payload.create({
    collection: 'businesses',
    data: {
      ...business,
      categories: business.categories.map((label) => ({ label })),
      featured: false,
      locations: business.locations.map((label) => ({ label })),
      verificationStatus: 'owner-verified',
      verifiedAt: '2026-09-02T00:00:00.000Z',
    },
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
}

import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

import { businessDrafts } from '../data/business-drafts'

const approvedSlugs = ['arkadia-international-bookshop', 'lazy-fox']

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  for (const business of businessDrafts.filter(({ slug }) => approvedSlugs.includes(slug))) {
    const existing = await payload.find({
      collection: 'businesses',
      limit: 1,
      overrideAccess: true,
      req,
      where: { slug: { equals: business.slug } },
    })
    if (existing.totalDocs) continue

    await payload.create({
      collection: 'businesses',
      data: {
        ...business,
        categories: business.categories.map((label) => ({ label })),
        featured: false,
        locations: business.locations.map((label) => ({ label })),
      },
      overrideAccess: true,
      req,
    })
  }
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.delete({
    collection: 'businesses',
    overrideAccess: true,
    req,
    where: { slug: { in: approvedSlugs } },
  })
}

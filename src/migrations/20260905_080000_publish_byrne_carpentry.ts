import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

import { businessDrafts } from '../data/business-drafts'

const slug = 'byrne-carpentry'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "businesses" ALTER COLUMN "website" DROP NOT NULL;
    ALTER TABLE "businesses" ADD COLUMN IF NOT EXISTS "email" varchar;
  `)

  const business = businessDrafts.find((candidate) => candidate.slug === slug)
  if (!business) throw new Error('Byrne Carpentry business profile is missing')

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
      verificationStatus: 'reviewed',
      verifiedAt: '2026-09-05T00:00:00.000Z',
    },
    overrideAccess: true,
    req,
  })
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await payload.delete({
    collection: 'businesses',
    overrideAccess: true,
    req,
    where: { slug: { equals: slug } },
  })

  await db.execute(sql`
    ALTER TABLE "businesses" DROP COLUMN IF EXISTS "email";
    ALTER TABLE "businesses" ALTER COLUMN "website" SET NOT NULL;
  `)
}

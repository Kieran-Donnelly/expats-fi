import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

import { originalGuides } from '../data/original-guides'

const employmentSlugs = new Set([
  'guide-employment-foreign-qualifications',
  'guide-employment-finding-work',
  'guide-employment-finnish-labour-market',
  'guide-employment-employment-services',
  'guide-employment-eures-employment-service',
  'guide-employment-wages-conditions',
  'guide-employment-employment-contract',
  'guide-employment-employment-law-and-disputes',
  'guide-employment-unions',
])

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  for (const guide of originalGuides.filter(({ slug }) => employmentSlugs.has(slug))) {
    const existing = await payload.find({
      collection: 'articles',
      limit: 1,
      overrideAccess: true,
      req,
      where: { slug: { equals: guide.slug } },
    })

    if (!existing.docs[0]) continue

    await payload.update({
      collection: 'articles',
      id: existing.docs[0].id,
      data: { title: guide.title },
      draft: false,
      overrideAccess: true,
      req,
    })
  }
}

// This editorial title correction is intentionally forward-only.
export async function down(_args: MigrateDownArgs): Promise<void> {}

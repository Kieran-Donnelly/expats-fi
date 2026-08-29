import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

import { businesses } from '../data/businesses'

const refreshedSlugs = ['home-chef-mark', 'aussie-bar', 'alstudio-barbershop']

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  for (const business of businesses.filter(({ slug }) => refreshedSlugs.includes(slug))) {
    const data = {
      address: business.address,
      categories: business.categories.map((label) => ({ label })),
      description: business.description,
      featured: Boolean(business.featured),
      imageAlt: business.imageAlt,
      imagePath: business.imagePath,
      locations: business.locations.map((label) => ({ label })),
      logoAlt: business.logoAlt,
      logoPath: business.logoPath,
      name: business.name,
      phone: business.phone,
      slug: business.slug,
      status: 'published' as const,
      summary: business.summary,
      website: business.website,
    }
    const existing = await payload.find({
      collection: 'businesses',
      limit: 1,
      overrideAccess: true,
      req,
      where: { slug: { equals: business.slug } },
    })

    if (existing.docs[0]) {
      await payload.update({
        collection: 'businesses',
        id: existing.docs[0].id,
        data,
        overrideAccess: true,
        req,
      })
    } else {
      await payload.create({ collection: 'businesses', data, overrideAccess: true, req })
    }
  }
}

// This content refresh is intentionally forward-only. The previous profile
// copy remains available in git history if it is ever needed.
export async function down(_args: MigrateDownArgs): Promise<void> {}

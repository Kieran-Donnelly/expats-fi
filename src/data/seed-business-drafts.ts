import type { Payload, PayloadRequest } from 'payload'

import { businessDrafts } from './business-drafts'

export async function seedBusinessDrafts(payload: Payload, req?: PayloadRequest): Promise<void> {
  for (const business of businessDrafts) {
    const existing = await payload.find({
      collection: 'businesses',
      limit: 1,
      overrideAccess: true,
      req,
      where: { slug: { equals: business.slug } },
    })
    const data = {
      ...business,
      categories: business.categories.map((label) => ({ label })),
      featured: false,
      locations: business.locations.map((label) => ({ label })),
    }

    if (existing.docs[0]) {
      await payload.update({
        collection: 'businesses',
        id: existing.docs[0].id,
        data,
        overrideAccess: true,
        req,
      })
      continue
    }

    await payload.create({
      collection: 'businesses',
      data,
      overrideAccess: true,
      req,
    })
  }
}

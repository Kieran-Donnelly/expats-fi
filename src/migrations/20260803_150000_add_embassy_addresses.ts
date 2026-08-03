import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

import { embassyAddresses } from '../data/embassy-addresses'

const directoryUrl = 'https://um.fi/representation-of-foreign-states-in-finland-or-in-the-nearest-country-to-finland?contentlan=2&culture=en-us&nodeid=49157'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const current = await payload.find({
    collection: 'embassies',
    limit: 250,
    overrideAccess: true,
    pagination: false,
    req,
  })
  const existingByCode = new Map(current.docs.map((embassy) => [embassy.countryCode, embassy]))

  const entries = Object.entries(embassyAddresses)
  for (let index = 0; index < entries.length; index += 20) {
    const batch = entries.slice(index, index + 20)
    await Promise.all(batch.map(([countryCode, contact]) => {
      const existing = existingByCode.get(countryCode)
      if (!existing) return Promise.resolve()

      return payload.update({
        collection: 'embassies',
        id: existing.id,
        data: {
          address: contact.address,
          sourceUrl: contact.sourceUrl,
          ...(countryCode === 'ME' ? { city: 'Copenhagen', hostCountry: 'Denmark' } : {}),
        },
        overrideAccess: true,
        req,
      })
    }))
  }
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  const current = await payload.find({
    collection: 'embassies',
    limit: 250,
    overrideAccess: true,
    pagination: false,
    req,
    where: { countryCode: { in: Object.keys(embassyAddresses) } },
  })

  for (let index = 0; index < current.docs.length; index += 20) {
    const batch = current.docs.slice(index, index + 20)
    await Promise.all(batch.map((embassy) => payload.update({
      collection: 'embassies',
      id: embassy.id,
      data: {
        address: null,
        sourceUrl: directoryUrl,
        ...(embassy.countryCode === 'ME' ? { city: 'Podgorica', hostCountry: 'Montenegro' } : {}),
      },
      overrideAccess: true,
      req,
    })))
  }
}


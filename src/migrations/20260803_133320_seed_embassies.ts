import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

import { embassySeeds } from '../data/embassies'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const current = await payload.find({ collection: 'embassies', limit: 250, overrideAccess: true, pagination: false, req })
  const existingByCode = new Map(current.docs.map((embassy) => [embassy.countryCode, embassy]))

  for (let index = 0; index < embassySeeds.length; index += 20) {
    const batch = embassySeeds.slice(index, index + 20)
    await Promise.all(batch.map((embassy) => {
      const existing = existingByCode.get(embassy.countryCode)
      if (existing) {
        return payload.update({ collection: 'embassies', id: existing.id, data: embassy, overrideAccess: true, req })
      }
      return payload.create({ collection: 'embassies', data: embassy, overrideAccess: true, req })
    }))
  }
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.delete({
    collection: 'embassies',
    overrideAccess: true,
    req,
    where: { countryCode: { in: embassySeeds.map((embassy) => embassy.countryCode) } },
  })
}

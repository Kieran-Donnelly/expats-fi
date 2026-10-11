import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

const slug = 'hima-holistic'

async function findBusiness(payload: MigrateUpArgs['payload'], req: MigrateUpArgs['req']) {
  const existing = await payload.find({
    collection: 'businesses',
    depth: 0,
    limit: 1,
    overrideAccess: true,
    req,
    where: { slug: { equals: slug } },
  })

  return existing.docs[0]
}

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const business = await findBusiness(payload, req)
  if (!business) throw new Error(`Cannot correct missing business ${slug}`)

  await payload.update({
    collection: 'businesses',
    id: business.id,
    data: {
      email: null,
      verificationNotes: 'Approved from the Hima Holistic member submission after checking the business website and public details. The published .fi email domain does not exist, so the email has been withheld until the owner confirms a working address. Temporary licensed stock image used while owner imagery is requested.',
    },
    depth: 0,
    overrideAccess: true,
    req,
  })
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  const business = await findBusiness(payload, req)
  if (!business) return

  await payload.update({
    collection: 'businesses',
    id: business.id,
    data: { email: 'info@himaholistic.fi' },
    depth: 0,
    overrideAccess: true,
    req,
  })
}

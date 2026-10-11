import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

const slug = 'hima-holistic'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const existing = await payload.find({
    collection: 'businesses',
    depth: 0,
    limit: 1,
    overrideAccess: true,
    req,
    where: { slug: { equals: slug } },
  })

  if (!existing.docs[0]) throw new Error(`Cannot correct missing business ${slug}`)

  await payload.update({
    collection: 'businesses',
    id: existing.docs[0].id,
    data: {
      email: 'info@himaholistic.com',
      verificationNotes: 'Approved from the Hima Holistic member submission after checking the business website and public contact details. The email domain was corrected from the non-existent .fi domain to the business website\'s active .com domain. Temporary licensed stock image used while owner imagery is requested.',
    },
    depth: 0,
    overrideAccess: true,
    req,
  })
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  const existing = await payload.find({
    collection: 'businesses',
    depth: 0,
    limit: 1,
    overrideAccess: true,
    req,
    where: { slug: { equals: slug } },
  })

  if (!existing.docs[0]) return

  await payload.update({
    collection: 'businesses',
    id: existing.docs[0].id,
    data: { email: 'info@himaholistic.fi' },
    depth: 0,
    overrideAccess: true,
    req,
  })
}

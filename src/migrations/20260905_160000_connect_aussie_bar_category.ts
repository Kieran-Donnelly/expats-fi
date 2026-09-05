import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

const slug = 'aussie-bar'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.update({
    collection: 'businesses',
    data: {
      categories: [{ label: 'Bars & restaurants' }, { label: 'Food & drink' }],
    },
    overrideAccess: true,
    req,
    where: { slug: { equals: slug } },
  })
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.update({
    collection: 'businesses',
    data: {
      categories: [{ label: 'Bars & restaurants' }],
    },
    overrideAccess: true,
    req,
    where: { slug: { equals: slug } },
  })
}

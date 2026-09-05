import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

const slug = 'alstudio-barbershop'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.update({
    collection: 'businesses',
    data: {
      imagePath: '/businesses/alstudio-barbershop/barber-tools-close-up.webp',
      imageAlt: 'Professional clippers, trimmers and scissors laid out for a haircut',
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
      imagePath: '/businesses/alstudio-barbershop/fade-haircut-close-up.webp',
      imageAlt: 'Close-up detail of clippers shaping a fade haircut',
    },
    overrideAccess: true,
    req,
    where: { slug: { equals: slug } },
  })
}

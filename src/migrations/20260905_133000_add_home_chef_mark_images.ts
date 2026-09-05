import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

const slug = 'home-chef-mark'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.update({
    collection: 'businesses',
    data: {
      imagePath: '/businesses/home-chef-mark/mark-in-pizza-trailer.webp',
      imageAlt: 'Home Chef Mark smiling from the serving window of his mobile pizza trailer',
      logoPath: '/businesses/home-chef-mark/logo.webp',
      logoAlt: 'Illustrated Home Chef Mark logo',
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
      imagePath: null,
      imageAlt: null,
      logoPath: null,
      logoAlt: null,
    },
    overrideAccess: true,
    req,
    where: { slug: { equals: slug } },
  })
}

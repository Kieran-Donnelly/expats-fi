import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

import { businessDrafts } from '../data/business-drafts'
import { seedBusinessDrafts } from '../data/seed-business-drafts'

const businessSlugs = businessDrafts.map((business) => business.slug)

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "businesses" ADD COLUMN "instagram_handle" varchar;
    ALTER TABLE "businesses" ADD COLUMN "newsletter_url" varchar;
    ALTER TABLE "businesses" ADD COLUMN "instagram" varchar;
    ALTER TABLE "businesses" ADD COLUMN "facebook" varchar;
    ALTER TABLE "businesses" ADD COLUMN "youtube" varchar;
    ALTER TABLE "businesses" ADD COLUMN "tiktok" varchar;
    ALTER TABLE "businesses" ADD COLUMN "booking_url" varchar;
    ALTER TABLE "businesses" ADD COLUMN "whatsapp" varchar;
    ALTER TABLE "businesses" ADD COLUMN "current_offer" varchar;
    ALTER TABLE "businesses" ADD COLUMN "current_offer_ends_at" timestamp(3) with time zone;
    ALTER TABLE "businesses" ADD COLUMN "image_path" varchar;
    ALTER TABLE "businesses" ADD COLUMN "image_alt" varchar;
    ALTER TABLE "businesses" ADD COLUMN "logo_path" varchar;
    ALTER TABLE "businesses" ADD COLUMN "logo_alt" varchar;
  `)

  await seedBusinessDrafts(payload, req)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await payload.delete({
    collection: 'businesses',
    overrideAccess: true,
    req,
    where: { slug: { in: businessSlugs } },
  })

  await db.execute(sql`
    ALTER TABLE "businesses" DROP COLUMN "instagram_handle";
    ALTER TABLE "businesses" DROP COLUMN "newsletter_url";
    ALTER TABLE "businesses" DROP COLUMN "instagram";
    ALTER TABLE "businesses" DROP COLUMN "facebook";
    ALTER TABLE "businesses" DROP COLUMN "youtube";
    ALTER TABLE "businesses" DROP COLUMN "tiktok";
    ALTER TABLE "businesses" DROP COLUMN "booking_url";
    ALTER TABLE "businesses" DROP COLUMN "whatsapp";
    ALTER TABLE "businesses" DROP COLUMN "current_offer";
    ALTER TABLE "businesses" DROP COLUMN "current_offer_ends_at";
    ALTER TABLE "businesses" DROP COLUMN "image_path";
    ALTER TABLE "businesses" DROP COLUMN "image_alt";
    ALTER TABLE "businesses" DROP COLUMN "logo_path";
    ALTER TABLE "businesses" DROP COLUMN "logo_alt";
  `)
}

import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "members" ADD COLUMN "terms_accepted_at" timestamp(3) with time zone;
    ALTER TABLE "members" ADD COLUMN "terms_version" varchar;
    ALTER TABLE "members" ADD COLUMN "age_confirmed_at" timestamp(3) with time zone;
    ALTER TABLE "members" ADD COLUMN "email_consent_updated_at" timestamp(3) with time zone;
    CREATE INDEX "members_terms_accepted_at_idx" ON "members" USING btree ("terms_accepted_at");
    CREATE INDEX "members_age_confirmed_at_idx" ON "members" USING btree ("age_confirmed_at");

    ALTER TABLE "business_submissions" ADD COLUMN "rights_confirmed_at" timestamp(3) with time zone;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "business_submissions" DROP COLUMN "rights_confirmed_at";
    DROP INDEX "members_age_confirmed_at_idx";
    DROP INDEX "members_terms_accepted_at_idx";
    ALTER TABLE "members" DROP COLUMN "email_consent_updated_at";
    ALTER TABLE "members" DROP COLUMN "age_confirmed_at";
    ALTER TABLE "members" DROP COLUMN "terms_version";
    ALTER TABLE "members" DROP COLUMN "terms_accepted_at";
  `)
}

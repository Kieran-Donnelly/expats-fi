import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TYPE "public"."enum_businesses_verification_status" AS ENUM('unverified', 'reviewed', 'owner-verified');

    ALTER TABLE "businesses" ADD COLUMN "verification_status" "enum_businesses_verification_status" DEFAULT 'unverified' NOT NULL;
    ALTER TABLE "businesses" ADD COLUMN "verified_at" timestamp(3) with time zone;
    ALTER TABLE "businesses" ADD COLUMN "verified_by_id" integer;
    ALTER TABLE "businesses" ADD COLUMN "source_submission_id" integer;
    ALTER TABLE "businesses" ADD COLUMN "verification_notes" varchar;
    ALTER TABLE "businesses" ADD CONSTRAINT "businesses_verified_by_id_users_id_fk" FOREIGN KEY ("verified_by_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
    ALTER TABLE "businesses" ADD CONSTRAINT "businesses_source_submission_id_business_submissions_id_fk" FOREIGN KEY ("source_submission_id") REFERENCES "public"."business_submissions"("id") ON DELETE set null ON UPDATE no action;
    CREATE INDEX "businesses_verification_status_idx" ON "businesses" USING btree ("verification_status");
    CREATE INDEX "businesses_verified_at_idx" ON "businesses" USING btree ("verified_at");
    CREATE INDEX "businesses_verified_by_idx" ON "businesses" USING btree ("verified_by_id");
    CREATE INDEX "businesses_source_submission_idx" ON "businesses" USING btree ("source_submission_id");

    ALTER TABLE "business_submissions" ADD COLUMN "reviewed_at" timestamp(3) with time zone;
    ALTER TABLE "business_submissions" ADD COLUMN "reviewed_by_email" varchar;
    CREATE INDEX "business_submissions_reviewed_at_idx" ON "business_submissions" USING btree ("reviewed_at");

    UPDATE "businesses"
    SET "verification_status" = 'reviewed', "verified_at" = COALESCE("verified_at", CURRENT_TIMESTAMP)
    WHERE "status" = 'published';
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "businesses" DROP CONSTRAINT "businesses_source_submission_id_business_submissions_id_fk";
    ALTER TABLE "businesses" DROP CONSTRAINT "businesses_verified_by_id_users_id_fk";
    DROP INDEX "businesses_source_submission_idx";
    DROP INDEX "businesses_verified_by_idx";
    DROP INDEX "businesses_verified_at_idx";
    DROP INDEX "businesses_verification_status_idx";
    ALTER TABLE "businesses" DROP COLUMN "verification_notes";
    ALTER TABLE "businesses" DROP COLUMN "source_submission_id";
    ALTER TABLE "businesses" DROP COLUMN "verified_by_id";
    ALTER TABLE "businesses" DROP COLUMN "verified_at";
    ALTER TABLE "businesses" DROP COLUMN "verification_status";
    DROP TYPE "public"."enum_businesses_verification_status";

    DROP INDEX "business_submissions_reviewed_at_idx";
    ALTER TABLE "business_submissions" DROP COLUMN "reviewed_by_email";
    ALTER TABLE "business_submissions" DROP COLUMN "reviewed_at";
  `)
}

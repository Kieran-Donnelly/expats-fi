import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TYPE "public"."enum_members_arrival_stage" AS ENUM('planning', 'new-arrival', 'settling-in', 'established');
    CREATE TYPE "public"."enum_business_submissions_status" AS ENUM('pending', 'approved', 'needs-changes', 'declined');

    ALTER TABLE "members" ADD COLUMN "city" varchar;
    ALTER TABLE "members" ADD COLUMN "languages" varchar;
    ALTER TABLE "members" ADD COLUMN "arrival_stage" "enum_members_arrival_stage";
    ALTER TABLE "members" ADD COLUMN "interests" jsonb;
    ALTER TABLE "members" ADD COLUMN "email_updates" boolean DEFAULT false;
    ALTER TABLE "members" ADD COLUMN "newsletter" boolean DEFAULT false;

    ALTER TABLE "members_rels" ADD COLUMN "businesses_id" integer;
    ALTER TABLE "members_rels" ADD CONSTRAINT "members_rels_businesses_fk" FOREIGN KEY ("businesses_id") REFERENCES "public"."businesses"("id") ON DELETE cascade ON UPDATE no action;
    CREATE INDEX "members_rels_businesses_id_idx" ON "members_rels" USING btree ("businesses_id");

    CREATE TABLE "business_submissions" (
      "id" serial PRIMARY KEY NOT NULL,
      "submitted_by_id" integer NOT NULL,
      "business_name" varchar NOT NULL,
      "website" varchar NOT NULL,
      "location" varchar NOT NULL,
      "category" varchar NOT NULL,
      "description" varchar NOT NULL,
      "contact_name" varchar NOT NULL,
      "contact_email" varchar NOT NULL,
      "status" "enum_business_submissions_status" DEFAULT 'pending' NOT NULL,
      "reviewer_notes" varchar,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    ALTER TABLE "business_submissions" ADD CONSTRAINT "business_submissions_submitted_by_id_members_id_fk" FOREIGN KEY ("submitted_by_id") REFERENCES "public"."members"("id") ON DELETE set null ON UPDATE no action;
    CREATE INDEX "business_submissions_submitted_by_idx" ON "business_submissions" USING btree ("submitted_by_id");
    CREATE INDEX "business_submissions_status_idx" ON "business_submissions" USING btree ("status");
    CREATE INDEX "business_submissions_updated_at_idx" ON "business_submissions" USING btree ("updated_at");
    CREATE INDEX "business_submissions_created_at_idx" ON "business_submissions" USING btree ("created_at");

    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "business_submissions_id" integer;
    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_business_submissions_fk" FOREIGN KEY ("business_submissions_id") REFERENCES "public"."business_submissions"("id") ON DELETE cascade ON UPDATE no action;
    CREATE INDEX "payload_locked_documents_rels_business_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("business_submissions_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_business_submissions_fk";
    DROP INDEX "payload_locked_documents_rels_business_submissions_id_idx";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "business_submissions_id";
    DROP TABLE "business_submissions" CASCADE;

    ALTER TABLE "members_rels" DROP CONSTRAINT "members_rels_businesses_fk";
    DROP INDEX "members_rels_businesses_id_idx";
    ALTER TABLE "members_rels" DROP COLUMN "businesses_id";

    ALTER TABLE "members" DROP COLUMN "city";
    ALTER TABLE "members" DROP COLUMN "languages";
    ALTER TABLE "members" DROP COLUMN "arrival_stage";
    ALTER TABLE "members" DROP COLUMN "interests";
    ALTER TABLE "members" DROP COLUMN "email_updates";
    ALTER TABLE "members" DROP COLUMN "newsletter";
    DROP TYPE "public"."enum_members_arrival_stage";
    DROP TYPE "public"."enum_business_submissions_status";
  `)
}

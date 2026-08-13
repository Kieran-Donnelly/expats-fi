import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

import { events } from '../data/events'
import { learningPaths, learningResources, practiceGroups, ykiResources } from '../data/finnishLearning'
import { superAdminEmails } from '../lib/admin-access'

const reviewDate = '2026-08-04'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TYPE "public"."enum_users_role" AS ENUM('super-admin', 'editor');
    ALTER TABLE "users" ADD COLUMN "role" "enum_users_role" DEFAULT 'editor' NOT NULL;

    CREATE TYPE "public"."enum_events_category" AS ENUM('Music & nightlife', 'Arts & culture', 'Food & markets', 'Community & free', 'Sports & outdoors');
    CREATE TYPE "public"."enum_events_status" AS ENUM('draft', 'published');
    CREATE TABLE "events" (
      "id" serial PRIMARY KEY NOT NULL,
      "title" varchar NOT NULL,
      "slug" varchar NOT NULL,
      "category" "enum_events_category" NOT NULL,
      "start_date" timestamp(3) with time zone NOT NULL,
      "end_date" timestamp(3) with time zone NOT NULL,
      "date_label" varchar NOT NULL,
      "time_label" varchar NOT NULL,
      "location" varchar NOT NULL,
      "address" varchar NOT NULL,
      "district" varchar NOT NULL,
      "coordinates" jsonb,
      "blurb" varchar NOT NULL,
      "description" jsonb NOT NULL,
      "price" varchar NOT NULL,
      "free" boolean DEFAULT false,
      "family_friendly" boolean DEFAULT false,
      "age_note" varchar,
      "booking_note" varchar NOT NULL,
      "source_name" varchar NOT NULL,
      "source_url" varchar NOT NULL,
      "last_checked" varchar NOT NULL,
      "transport" jsonb NOT NULL,
      "featured" boolean DEFAULT false,
      "status" "enum_events_status" DEFAULT 'published' NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TYPE "public"."enum_learning_paths_status" AS ENUM('draft', 'published');
    CREATE TABLE "learning_paths" (
      "id" serial PRIMARY KEY NOT NULL,
      "title" varchar NOT NULL,
      "level" varchar NOT NULL,
      "recipe" varchar NOT NULL,
      "links" jsonb NOT NULL,
      "last_reviewed_at" timestamp(3) with time zone NOT NULL,
      "status" "enum_learning_paths_status" DEFAULT 'published' NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TYPE "public"."enum_learning_resources_category" AS ENUM('Free foundations', 'Courses & teachers', 'Apps & tools', 'Listen & watch');
    CREATE TYPE "public"."enum_learning_resources_cost" AS ENUM('Free', 'Freemium', 'Paid', 'Free & paid');
    CREATE TYPE "public"."enum_learning_resources_status" AS ENUM('draft', 'published');
    CREATE TABLE "learning_resources" (
      "id" serial PRIMARY KEY NOT NULL,
      "name" varchar NOT NULL,
      "category" "enum_learning_resources_category" NOT NULL,
      "cost" "enum_learning_resources_cost" NOT NULL,
      "level" varchar NOT NULL,
      "format" varchar NOT NULL,
      "url" varchar NOT NULL,
      "description" varchar NOT NULL,
      "best_for" varchar NOT NULL,
      "note" varchar,
      "featured" boolean DEFAULT false,
      "last_reviewed_at" timestamp(3) with time zone NOT NULL,
      "status" "enum_learning_resources_status" DEFAULT 'published' NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TYPE "public"."enum_practice_groups_status" AS ENUM('draft', 'published');
    CREATE TABLE "practice_groups" (
      "id" serial PRIMARY KEY NOT NULL,
      "name" varchar NOT NULL,
      "location" varchar NOT NULL,
      "schedule" varchar NOT NULL,
      "cost" varchar NOT NULL,
      "url" varchar NOT NULL,
      "description" varchar NOT NULL,
      "check_first" varchar NOT NULL,
      "last_reviewed_at" timestamp(3) with time zone NOT NULL,
      "status" "enum_practice_groups_status" DEFAULT 'published' NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TYPE "public"."enum_yki_resources_status" AS ENUM('draft', 'published');
    CREATE TABLE "yki_resources" (
      "id" serial PRIMARY KEY NOT NULL,
      "name" varchar NOT NULL,
      "url" varchar NOT NULL,
      "description" varchar NOT NULL,
      "last_reviewed_at" timestamp(3) with time zone NOT NULL,
      "status" "enum_yki_resources_status" DEFAULT 'published' NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "events_id" integer;
    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "learning_paths_id" integer;
    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "learning_resources_id" integer;
    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "practice_groups_id" integer;
    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "yki_resources_id" integer;

    CREATE UNIQUE INDEX "events_slug_idx" ON "events" USING btree ("slug");
    CREATE INDEX "events_category_idx" ON "events" USING btree ("category");
    CREATE INDEX "events_start_date_idx" ON "events" USING btree ("start_date");
    CREATE INDEX "events_end_date_idx" ON "events" USING btree ("end_date");
    CREATE INDEX "events_location_idx" ON "events" USING btree ("location");
    CREATE INDEX "events_district_idx" ON "events" USING btree ("district");
    CREATE INDEX "events_status_idx" ON "events" USING btree ("status");
    CREATE INDEX "events_updated_at_idx" ON "events" USING btree ("updated_at");
    CREATE INDEX "events_created_at_idx" ON "events" USING btree ("created_at");
    CREATE INDEX "learning_paths_last_reviewed_at_idx" ON "learning_paths" USING btree ("last_reviewed_at");
    CREATE INDEX "learning_paths_status_idx" ON "learning_paths" USING btree ("status");
    CREATE INDEX "learning_paths_updated_at_idx" ON "learning_paths" USING btree ("updated_at");
    CREATE INDEX "learning_paths_created_at_idx" ON "learning_paths" USING btree ("created_at");
    CREATE INDEX "learning_resources_category_idx" ON "learning_resources" USING btree ("category");
    CREATE INDEX "learning_resources_last_reviewed_at_idx" ON "learning_resources" USING btree ("last_reviewed_at");
    CREATE INDEX "learning_resources_status_idx" ON "learning_resources" USING btree ("status");
    CREATE INDEX "learning_resources_updated_at_idx" ON "learning_resources" USING btree ("updated_at");
    CREATE INDEX "learning_resources_created_at_idx" ON "learning_resources" USING btree ("created_at");
    CREATE INDEX "practice_groups_last_reviewed_at_idx" ON "practice_groups" USING btree ("last_reviewed_at");
    CREATE INDEX "practice_groups_status_idx" ON "practice_groups" USING btree ("status");
    CREATE INDEX "practice_groups_updated_at_idx" ON "practice_groups" USING btree ("updated_at");
    CREATE INDEX "practice_groups_created_at_idx" ON "practice_groups" USING btree ("created_at");
    CREATE INDEX "yki_resources_last_reviewed_at_idx" ON "yki_resources" USING btree ("last_reviewed_at");
    CREATE INDEX "yki_resources_status_idx" ON "yki_resources" USING btree ("status");
    CREATE INDEX "yki_resources_updated_at_idx" ON "yki_resources" USING btree ("updated_at");
    CREATE INDEX "yki_resources_created_at_idx" ON "yki_resources" USING btree ("created_at");

    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_learning_paths_fk" FOREIGN KEY ("learning_paths_id") REFERENCES "public"."learning_paths"("id") ON DELETE cascade ON UPDATE no action;
    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_learning_resources_fk" FOREIGN KEY ("learning_resources_id") REFERENCES "public"."learning_resources"("id") ON DELETE cascade ON UPDATE no action;
    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_practice_groups_fk" FOREIGN KEY ("practice_groups_id") REFERENCES "public"."practice_groups"("id") ON DELETE cascade ON UPDATE no action;
    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_yki_resources_fk" FOREIGN KEY ("yki_resources_id") REFERENCES "public"."yki_resources"("id") ON DELETE cascade ON UPDATE no action;
    CREATE INDEX "payload_locked_documents_rels_events_id_idx" ON "payload_locked_documents_rels" USING btree ("events_id");
    CREATE INDEX "payload_locked_documents_rels_learning_paths_id_idx" ON "payload_locked_documents_rels" USING btree ("learning_paths_id");
    CREATE INDEX "payload_locked_documents_rels_learning_resources_id_idx" ON "payload_locked_documents_rels" USING btree ("learning_resources_id");
    CREATE INDEX "payload_locked_documents_rels_practice_groups_id_idx" ON "payload_locked_documents_rels" USING btree ("practice_groups_id");
    CREATE INDEX "payload_locked_documents_rels_yki_resources_id_idx" ON "payload_locked_documents_rels" USING btree ("yki_resources_id");
  `)

  const currentUsers = await payload.find({ collection: 'users', limit: 100, pagination: false, overrideAccess: true })
  for (const user of currentUsers.docs) {
    if (superAdminEmails.includes(user.email.trim().toLowerCase() as (typeof superAdminEmails)[number])) {
      await payload.update({ collection: 'users', id: user.id, data: { role: 'super-admin' }, overrideAccess: true, req })
    }
  }

  for (const event of events) {
    const existing = await payload.find({ collection: 'events', where: { slug: { equals: event.slug } }, limit: 1, overrideAccess: true, req })
    if (!existing.totalDocs) {
      await payload.create({
        collection: 'events',
        data: { ...event, status: 'published' },
        overrideAccess: true,
        req,
      })
    }
  }

  for (const path of learningPaths) {
    const existing = await payload.find({ collection: 'learning-paths', where: { title: { equals: path.title } }, limit: 1, overrideAccess: true, req })
    if (!existing.totalDocs) await payload.create({ collection: 'learning-paths', data: { ...path, links: [...path.links], lastReviewedAt: reviewDate, status: 'published' }, overrideAccess: true, req })
  }
  for (const resource of learningResources) {
    const existing = await payload.find({ collection: 'learning-resources', where: { name: { equals: resource.name } }, limit: 1, overrideAccess: true, req })
    if (!existing.totalDocs) await payload.create({ collection: 'learning-resources', data: { ...resource, lastReviewedAt: reviewDate, status: 'published' }, overrideAccess: true, req })
  }
  for (const group of practiceGroups) {
    const existing = await payload.find({ collection: 'practice-groups', where: { name: { equals: group.name } }, limit: 1, overrideAccess: true, req })
    if (!existing.totalDocs) await payload.create({ collection: 'practice-groups', data: { ...group, lastReviewedAt: reviewDate, status: 'published' }, overrideAccess: true, req })
  }
  for (const resource of ykiResources) {
    const existing = await payload.find({ collection: 'yki-resources', where: { name: { equals: resource.name } }, limit: 1, overrideAccess: true, req })
    if (!existing.totalDocs) await payload.create({ collection: 'yki-resources', data: { ...resource, lastReviewedAt: reviewDate, status: 'published' }, overrideAccess: true, req })
  }
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await payload.delete({ collection: 'events', where: {}, overrideAccess: true, req })
  await payload.delete({ collection: 'learning-paths', where: {}, overrideAccess: true, req })
  await payload.delete({ collection: 'learning-resources', where: {}, overrideAccess: true, req })
  await payload.delete({ collection: 'practice-groups', where: {}, overrideAccess: true, req })
  await payload.delete({ collection: 'yki-resources', where: {}, overrideAccess: true, req })

  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_events_fk";
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_learning_paths_fk";
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_learning_resources_fk";
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_practice_groups_fk";
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_yki_resources_fk";
    DROP INDEX "payload_locked_documents_rels_events_id_idx";
    DROP INDEX "payload_locked_documents_rels_learning_paths_id_idx";
    DROP INDEX "payload_locked_documents_rels_learning_resources_id_idx";
    DROP INDEX "payload_locked_documents_rels_practice_groups_id_idx";
    DROP INDEX "payload_locked_documents_rels_yki_resources_id_idx";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "events_id";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "learning_paths_id";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "learning_resources_id";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "practice_groups_id";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "yki_resources_id";
    DROP TABLE "events" CASCADE;
    DROP TABLE "learning_paths" CASCADE;
    DROP TABLE "learning_resources" CASCADE;
    DROP TABLE "practice_groups" CASCADE;
    DROP TABLE "yki_resources" CASCADE;
    ALTER TABLE "users" DROP COLUMN "role";
    DROP TYPE "public"."enum_users_role";
    DROP TYPE "public"."enum_events_category";
    DROP TYPE "public"."enum_events_status";
    DROP TYPE "public"."enum_learning_paths_status";
    DROP TYPE "public"."enum_learning_resources_category";
    DROP TYPE "public"."enum_learning_resources_cost";
    DROP TYPE "public"."enum_learning_resources_status";
    DROP TYPE "public"."enum_practice_groups_status";
    DROP TYPE "public"."enum_yki_resources_status";
  `)
}

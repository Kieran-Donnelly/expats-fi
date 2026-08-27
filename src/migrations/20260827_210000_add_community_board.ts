import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TYPE "public"."enum_community_posts_topic" AS ENUM('general', 'housing', 'work-money', 'everyday-life', 'finnish', 'family', 'culture-events');
    CREATE TYPE "public"."enum_community_posts_status" AS ENUM('published', 'hidden');
    CREATE TYPE "public"."enum_community_comments_status" AS ENUM('published', 'hidden');
    CREATE TYPE "public"."enum_community_reports_target_type" AS ENUM('post', 'comment');
    CREATE TYPE "public"."enum_community_reports_reason" AS ENUM('spam', 'harassment', 'misinformation', 'other');
    CREATE TYPE "public"."enum_community_reports_status" AS ENUM('pending', 'resolved', 'dismissed');

    CREATE TABLE "community_posts" (
      "id" serial PRIMARY KEY NOT NULL,
      "title" varchar NOT NULL,
      "slug" varchar NOT NULL,
      "body" varchar NOT NULL,
      "topic" "enum_community_posts_topic" DEFAULT 'general' NOT NULL,
      "author_id" integer NOT NULL,
      "status" "enum_community_posts_status" DEFAULT 'published' NOT NULL,
      "last_activity_at" timestamp(3) with time zone,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    ALTER TABLE "community_posts" ADD CONSTRAINT "community_posts_author_id_members_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."members"("id") ON DELETE set null ON UPDATE no action;
    CREATE UNIQUE INDEX "community_posts_slug_idx" ON "community_posts" USING btree ("slug");
    CREATE INDEX "community_posts_topic_idx" ON "community_posts" USING btree ("topic");
    CREATE INDEX "community_posts_author_idx" ON "community_posts" USING btree ("author_id");
    CREATE INDEX "community_posts_status_idx" ON "community_posts" USING btree ("status");
    CREATE INDEX "community_posts_last_activity_at_idx" ON "community_posts" USING btree ("last_activity_at");
    CREATE INDEX "community_posts_updated_at_idx" ON "community_posts" USING btree ("updated_at");
    CREATE INDEX "community_posts_created_at_idx" ON "community_posts" USING btree ("created_at");

    CREATE TABLE "community_comments" (
      "id" serial PRIMARY KEY NOT NULL,
      "post_id" integer NOT NULL,
      "author_id" integer NOT NULL,
      "body" varchar NOT NULL,
      "status" "enum_community_comments_status" DEFAULT 'published' NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    ALTER TABLE "community_comments" ADD CONSTRAINT "community_comments_post_id_community_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."community_posts"("id") ON DELETE set null ON UPDATE no action;
    ALTER TABLE "community_comments" ADD CONSTRAINT "community_comments_author_id_members_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."members"("id") ON DELETE set null ON UPDATE no action;
    CREATE INDEX "community_comments_post_idx" ON "community_comments" USING btree ("post_id");
    CREATE INDEX "community_comments_author_idx" ON "community_comments" USING btree ("author_id");
    CREATE INDEX "community_comments_status_idx" ON "community_comments" USING btree ("status");
    CREATE INDEX "community_comments_updated_at_idx" ON "community_comments" USING btree ("updated_at");
    CREATE INDEX "community_comments_created_at_idx" ON "community_comments" USING btree ("created_at");

    CREATE TABLE "community_reports" (
      "id" serial PRIMARY KEY NOT NULL,
      "reporter_id" integer NOT NULL,
      "target_type" "enum_community_reports_target_type" NOT NULL,
      "post_id" integer,
      "comment_id" integer,
      "reason" "enum_community_reports_reason" NOT NULL,
      "details" varchar,
      "status" "enum_community_reports_status" DEFAULT 'pending' NOT NULL,
      "reviewed_at" timestamp(3) with time zone,
      "reviewed_by_email" varchar,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    ALTER TABLE "community_reports" ADD CONSTRAINT "community_reports_reporter_id_members_id_fk" FOREIGN KEY ("reporter_id") REFERENCES "public"."members"("id") ON DELETE set null ON UPDATE no action;
    ALTER TABLE "community_reports" ADD CONSTRAINT "community_reports_post_id_community_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."community_posts"("id") ON DELETE set null ON UPDATE no action;
    ALTER TABLE "community_reports" ADD CONSTRAINT "community_reports_comment_id_community_comments_id_fk" FOREIGN KEY ("comment_id") REFERENCES "public"."community_comments"("id") ON DELETE set null ON UPDATE no action;
    CREATE INDEX "community_reports_reporter_idx" ON "community_reports" USING btree ("reporter_id");
    CREATE INDEX "community_reports_target_type_idx" ON "community_reports" USING btree ("target_type");
    CREATE INDEX "community_reports_post_idx" ON "community_reports" USING btree ("post_id");
    CREATE INDEX "community_reports_comment_idx" ON "community_reports" USING btree ("comment_id");
    CREATE INDEX "community_reports_reason_idx" ON "community_reports" USING btree ("reason");
    CREATE INDEX "community_reports_status_idx" ON "community_reports" USING btree ("status");
    CREATE INDEX "community_reports_reviewed_at_idx" ON "community_reports" USING btree ("reviewed_at");
    CREATE INDEX "community_reports_updated_at_idx" ON "community_reports" USING btree ("updated_at");
    CREATE INDEX "community_reports_created_at_idx" ON "community_reports" USING btree ("created_at");

    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "community-postsID" integer;
    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "community-commentsID" integer;
    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "community-reportsID" integer;
    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_community_posts_fk" FOREIGN KEY ("community-postsID") REFERENCES "public"."community_posts"("id") ON DELETE cascade ON UPDATE no action;
    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_community_comments_fk" FOREIGN KEY ("community-commentsID") REFERENCES "public"."community_comments"("id") ON DELETE cascade ON UPDATE no action;
    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_community_reports_fk" FOREIGN KEY ("community-reportsID") REFERENCES "public"."community_reports"("id") ON DELETE cascade ON UPDATE no action;
    CREATE INDEX "payload_locked_documents_rels_community_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("community-postsID");
    CREATE INDEX "payload_locked_documents_rels_community_comments_id_idx" ON "payload_locked_documents_rels" USING btree ("community-commentsID");
    CREATE INDEX "payload_locked_documents_rels_community_reports_id_idx" ON "payload_locked_documents_rels" USING btree ("community-reportsID");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_community_reports_fk";
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_community_comments_fk";
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_community_posts_fk";
    DROP INDEX "payload_locked_documents_rels_community_reports_id_idx";
    DROP INDEX "payload_locked_documents_rels_community_comments_id_idx";
    DROP INDEX "payload_locked_documents_rels_community_posts_id_idx";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "community-reportsID";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "community-commentsID";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "community-postsID";

    DROP TABLE "community_reports" CASCADE;
    DROP TABLE "community_comments" CASCADE;
    DROP TABLE "community_posts" CASCADE;
    DROP TYPE "public"."enum_community_reports_status";
    DROP TYPE "public"."enum_community_reports_reason";
    DROP TYPE "public"."enum_community_reports_target_type";
    DROP TYPE "public"."enum_community_comments_status";
    DROP TYPE "public"."enum_community_posts_status";
    DROP TYPE "public"."enum_community_posts_topic";
  `)
}

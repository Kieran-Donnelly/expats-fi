import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TYPE "public"."enum_news_stories_category" AS ENUM('Helsinki', 'Finland', 'Work & money', 'Life admin', 'Culture & community');
    CREATE TYPE "public"."enum_news_stories_status" AS ENUM('draft', 'published');
    CREATE TABLE "news_stories" (
      "id" serial PRIMARY KEY NOT NULL,
      "title" varchar NOT NULL,
      "slug" varchar NOT NULL,
      "standfirst" varchar NOT NULL,
      "category" "enum_news_stories_category" NOT NULL,
      "published_at" timestamp(3) with time zone NOT NULL,
      "reading_minutes" numeric NOT NULL,
      "featured" boolean DEFAULT false,
      "practical_summary" varchar NOT NULL,
      "content" jsonb NOT NULL,
      "sources" jsonb NOT NULL,
      "source_checked_at" timestamp(3) with time zone NOT NULL,
      "status" "enum_news_stories_status" DEFAULT 'draft' NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "news_stories_id" integer;
    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_news_stories_fk" FOREIGN KEY ("news_stories_id") REFERENCES "public"."news_stories"("id") ON DELETE cascade ON UPDATE no action;

    CREATE UNIQUE INDEX "news_stories_slug_idx" ON "news_stories" USING btree ("slug");
    CREATE INDEX "news_stories_category_idx" ON "news_stories" USING btree ("category");
    CREATE INDEX "news_stories_published_at_idx" ON "news_stories" USING btree ("published_at");
    CREATE INDEX "news_stories_source_checked_at_idx" ON "news_stories" USING btree ("source_checked_at");
    CREATE INDEX "news_stories_status_idx" ON "news_stories" USING btree ("status");
    CREATE INDEX "news_stories_updated_at_idx" ON "news_stories" USING btree ("updated_at");
    CREATE INDEX "news_stories_created_at_idx" ON "news_stories" USING btree ("created_at");
    CREATE INDEX "payload_locked_documents_rels_news_stories_id_idx" ON "payload_locked_documents_rels" USING btree ("news_stories_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_news_stories_fk";
    DROP INDEX "payload_locked_documents_rels_news_stories_id_idx";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "news_stories_id";
    DROP TABLE "news_stories" CASCADE;
    DROP TYPE "public"."enum_news_stories_category";
    DROP TYPE "public"."enum_news_stories_status";
  `)
}

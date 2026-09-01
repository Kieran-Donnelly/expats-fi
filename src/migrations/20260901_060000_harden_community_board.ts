import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TYPE "public"."enum_members_community_trust" AS ENUM('new', 'trusted', 'restricted');
    CREATE TYPE "public"."enum_community_posts_screening_status" AS ENUM('unreviewed', 'clear', 'attention');
    CREATE TYPE "public"."enum_community_posts_editorial_status" AS ENUM('none', 'watch', 'article', 'event', 'site-improvement', 'actioned');
    CREATE TYPE "public"."enum_community_comments_screening_status" AS ENUM('unreviewed', 'clear', 'attention');

    ALTER TABLE "members" ADD COLUMN "email_verified_at" timestamp(3) with time zone;
    ALTER TABLE "members" ADD COLUMN "community_trust" "enum_members_community_trust" DEFAULT 'new' NOT NULL;
    ALTER TABLE "members" ADD COLUMN "community_rules_accepted_at" timestamp(3) with time zone;
    ALTER TABLE "members" ADD COLUMN "community_restriction_reason" varchar;
    UPDATE "members" SET "email_verified_at" = "created_at" WHERE "provider" IN ('google', 'both') AND "email_verified_at" IS NULL;
    CREATE INDEX "members_email_verified_at_idx" ON "members" USING btree ("email_verified_at");
    CREATE INDEX "members_community_trust_idx" ON "members" USING btree ("community_trust");
    CREATE INDEX "members_community_rules_accepted_at_idx" ON "members" USING btree ("community_rules_accepted_at");

    ALTER TABLE "community_posts" ALTER COLUMN "status" DROP DEFAULT;
    ALTER TYPE "public"."enum_community_posts_status" RENAME TO "enum_community_posts_status_old";
    CREATE TYPE "public"."enum_community_posts_status" AS ENUM('pending', 'published', 'flagged', 'hidden', 'rejected');
    ALTER TABLE "community_posts" ALTER COLUMN "status" TYPE "public"."enum_community_posts_status" USING "status"::text::"public"."enum_community_posts_status";
    ALTER TABLE "community_posts" ALTER COLUMN "status" SET DEFAULT 'pending';
    DROP TYPE "public"."enum_community_posts_status_old";
    ALTER TABLE "community_posts" ADD COLUMN "screening_status" "enum_community_posts_screening_status" DEFAULT 'unreviewed' NOT NULL;
    ALTER TABLE "community_posts" ADD COLUMN "screening_signals" jsonb;
    ALTER TABLE "community_posts" ADD COLUMN "screened_at" timestamp(3) with time zone;
    ALTER TABLE "community_posts" ADD COLUMN "reviewed_at" timestamp(3) with time zone;
    ALTER TABLE "community_posts" ADD COLUMN "reviewed_by_email" varchar;
    ALTER TABLE "community_posts" ADD COLUMN "editorial_status" "enum_community_posts_editorial_status" DEFAULT 'none' NOT NULL;
    ALTER TABLE "community_posts" ADD COLUMN "editorial_notes" varchar;
    CREATE INDEX "community_posts_screening_status_idx" ON "community_posts" USING btree ("screening_status");
    CREATE INDEX "community_posts_screened_at_idx" ON "community_posts" USING btree ("screened_at");
    CREATE INDEX "community_posts_reviewed_at_idx" ON "community_posts" USING btree ("reviewed_at");
    CREATE INDEX "community_posts_editorial_status_idx" ON "community_posts" USING btree ("editorial_status");

    ALTER TABLE "community_comments" ALTER COLUMN "status" DROP DEFAULT;
    ALTER TYPE "public"."enum_community_comments_status" RENAME TO "enum_community_comments_status_old";
    CREATE TYPE "public"."enum_community_comments_status" AS ENUM('pending', 'published', 'flagged', 'hidden', 'rejected');
    ALTER TABLE "community_comments" ALTER COLUMN "status" TYPE "public"."enum_community_comments_status" USING "status"::text::"public"."enum_community_comments_status";
    ALTER TABLE "community_comments" ALTER COLUMN "status" SET DEFAULT 'pending';
    DROP TYPE "public"."enum_community_comments_status_old";
    ALTER TABLE "community_comments" ADD COLUMN "screening_status" "enum_community_comments_screening_status" DEFAULT 'unreviewed' NOT NULL;
    ALTER TABLE "community_comments" ADD COLUMN "screening_signals" jsonb;
    ALTER TABLE "community_comments" ADD COLUMN "screened_at" timestamp(3) with time zone;
    ALTER TABLE "community_comments" ADD COLUMN "reviewed_at" timestamp(3) with time zone;
    ALTER TABLE "community_comments" ADD COLUMN "reviewed_by_email" varchar;
    CREATE INDEX "community_comments_screening_status_idx" ON "community_comments" USING btree ("screening_status");
    CREATE INDEX "community_comments_screened_at_idx" ON "community_comments" USING btree ("screened_at");
    CREATE INDEX "community_comments_reviewed_at_idx" ON "community_comments" USING btree ("reviewed_at");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    UPDATE "community_posts" SET "status" = 'hidden' WHERE "status" NOT IN ('published', 'hidden');
    ALTER TABLE "community_posts" ALTER COLUMN "status" DROP DEFAULT;
    ALTER TYPE "public"."enum_community_posts_status" RENAME TO "enum_community_posts_status_new";
    CREATE TYPE "public"."enum_community_posts_status" AS ENUM('published', 'hidden');
    ALTER TABLE "community_posts" ALTER COLUMN "status" TYPE "public"."enum_community_posts_status" USING "status"::text::"public"."enum_community_posts_status";
    ALTER TABLE "community_posts" ALTER COLUMN "status" SET DEFAULT 'published';
    DROP TYPE "public"."enum_community_posts_status_new";
    DROP INDEX "community_posts_screening_status_idx";
    DROP INDEX "community_posts_screened_at_idx";
    DROP INDEX "community_posts_reviewed_at_idx";
    DROP INDEX "community_posts_editorial_status_idx";
    ALTER TABLE "community_posts" DROP COLUMN "screening_status";
    ALTER TABLE "community_posts" DROP COLUMN "screening_signals";
    ALTER TABLE "community_posts" DROP COLUMN "screened_at";
    ALTER TABLE "community_posts" DROP COLUMN "reviewed_at";
    ALTER TABLE "community_posts" DROP COLUMN "reviewed_by_email";
    ALTER TABLE "community_posts" DROP COLUMN "editorial_status";
    ALTER TABLE "community_posts" DROP COLUMN "editorial_notes";

    UPDATE "community_comments" SET "status" = 'hidden' WHERE "status" NOT IN ('published', 'hidden');
    ALTER TABLE "community_comments" ALTER COLUMN "status" DROP DEFAULT;
    ALTER TYPE "public"."enum_community_comments_status" RENAME TO "enum_community_comments_status_new";
    CREATE TYPE "public"."enum_community_comments_status" AS ENUM('published', 'hidden');
    ALTER TABLE "community_comments" ALTER COLUMN "status" TYPE "public"."enum_community_comments_status" USING "status"::text::"public"."enum_community_comments_status";
    ALTER TABLE "community_comments" ALTER COLUMN "status" SET DEFAULT 'published';
    DROP TYPE "public"."enum_community_comments_status_new";
    DROP INDEX "community_comments_screening_status_idx";
    DROP INDEX "community_comments_screened_at_idx";
    DROP INDEX "community_comments_reviewed_at_idx";
    ALTER TABLE "community_comments" DROP COLUMN "screening_status";
    ALTER TABLE "community_comments" DROP COLUMN "screening_signals";
    ALTER TABLE "community_comments" DROP COLUMN "screened_at";
    ALTER TABLE "community_comments" DROP COLUMN "reviewed_at";
    ALTER TABLE "community_comments" DROP COLUMN "reviewed_by_email";

    DROP INDEX "members_email_verified_at_idx";
    DROP INDEX "members_community_trust_idx";
    DROP INDEX "members_community_rules_accepted_at_idx";
    ALTER TABLE "members" DROP COLUMN "email_verified_at";
    ALTER TABLE "members" DROP COLUMN "community_trust";
    ALTER TABLE "members" DROP COLUMN "community_rules_accepted_at";
    ALTER TABLE "members" DROP COLUMN "community_restriction_reason";

    DROP TYPE "public"."enum_community_comments_screening_status";
    DROP TYPE "public"."enum_community_posts_editorial_status";
    DROP TYPE "public"."enum_community_posts_screening_status";
    DROP TYPE "public"."enum_members_community_trust";
  `)
}

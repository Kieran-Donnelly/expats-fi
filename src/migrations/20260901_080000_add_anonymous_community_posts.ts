import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "community_posts" ADD COLUMN "anonymous" boolean DEFAULT false;
    ALTER TABLE "community_posts" ADD COLUMN "anonymous_alias" varchar;
    ALTER TABLE "community_comments" ADD COLUMN "anonymous" boolean DEFAULT false;
    ALTER TABLE "community_comments" ADD COLUMN "anonymous_alias" varchar;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "community_comments" DROP COLUMN "anonymous_alias";
    ALTER TABLE "community_comments" DROP COLUMN "anonymous";
    ALTER TABLE "community_posts" DROP COLUMN "anonymous_alias";
    ALTER TABLE "community_posts" DROP COLUMN "anonymous";
  `)
}

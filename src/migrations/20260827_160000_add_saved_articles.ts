import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE "members_rels" (
      "id" serial PRIMARY KEY NOT NULL,
      "order" integer,
      "parent_id" integer NOT NULL,
      "path" varchar NOT NULL,
      "articles_id" integer
    );

    ALTER TABLE "members_rels" ADD CONSTRAINT "members_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."members"("id") ON DELETE cascade ON UPDATE no action;
    ALTER TABLE "members_rels" ADD CONSTRAINT "members_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;

    CREATE INDEX "members_rels_order_idx" ON "members_rels" USING btree ("order");
    CREATE INDEX "members_rels_parent_idx" ON "members_rels" USING btree ("parent_id");
    CREATE INDEX "members_rels_path_idx" ON "members_rels" USING btree ("path");
    CREATE INDEX "members_rels_articles_id_idx" ON "members_rels" USING btree ("articles_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE "members_rels" CASCADE;
  `)
}

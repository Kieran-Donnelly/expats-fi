import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_embassies_region" AS ENUM('Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania');
  CREATE TYPE "public"."enum_embassies_representation_type" AS ENUM('resident-embassy', 'representative-office', 'non-resident-embassy', 'honorary-consulate', 'foreign-ministry');
  CREATE TABLE "embassies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"country" varchar NOT NULL,
  	"country_code" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"region" "enum_embassies_region" NOT NULL,
  	"representation_type" "enum_embassies_representation_type" NOT NULL,
  	"mission_name" varchar NOT NULL,
  	"city" varchar NOT NULL,
  	"host_country" varchar NOT NULL,
  	"website" varchar,
  	"phone" varchar,
  	"email" varchar,
  	"address" varchar,
  	"source_url" varchar NOT NULL,
  	"notes" varchar,
  	"last_verified_at" timestamp(3) with time zone NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "embassies_id" integer;
  CREATE INDEX "embassies_country_idx" ON "embassies" USING btree ("country");
  CREATE UNIQUE INDEX "embassies_country_code_idx" ON "embassies" USING btree ("country_code");
  CREATE UNIQUE INDEX "embassies_slug_idx" ON "embassies" USING btree ("slug");
  CREATE INDEX "embassies_region_idx" ON "embassies" USING btree ("region");
  CREATE INDEX "embassies_representation_type_idx" ON "embassies" USING btree ("representation_type");
  CREATE INDEX "embassies_city_idx" ON "embassies" USING btree ("city");
  CREATE INDEX "embassies_host_country_idx" ON "embassies" USING btree ("host_country");
  CREATE INDEX "embassies_last_verified_at_idx" ON "embassies" USING btree ("last_verified_at");
  CREATE INDEX "embassies_updated_at_idx" ON "embassies" USING btree ("updated_at");
  CREATE INDEX "embassies_created_at_idx" ON "embassies" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_embassies_fk" FOREIGN KEY ("embassies_id") REFERENCES "public"."embassies"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_embassies_id_idx" ON "payload_locked_documents_rels" USING btree ("embassies_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "embassies" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "embassies" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_embassies_fk";
  
  DROP INDEX "payload_locked_documents_rels_embassies_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "embassies_id";
  DROP TYPE "public"."enum_embassies_region";
  DROP TYPE "public"."enum_embassies_representation_type";`)
}

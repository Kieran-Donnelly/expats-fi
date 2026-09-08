import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { events } from '../data/events'

const slugs = new Set(['relaxed-basketball-puistola-2026', 'kallio-rolling-rainbow-open-skate-2026'])

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  for (const event of events.filter(event => slugs.has(event.slug))) {
    const existing = await payload.find({ collection: 'events', where: { slug: { equals: event.slug } }, limit: 1, overrideAccess: true, req })
    // Preserve existing editor decisions, including unpublished records.
    if (existing.totalDocs) continue
    await payload.create({ collection: 'events', data: { ...event, status: 'published' }, overrideAccess: true, req })
  }
}

export async function down(_args: MigrateDownArgs): Promise<void> {
  // Keep restored content and its stable URLs on rollback.
}

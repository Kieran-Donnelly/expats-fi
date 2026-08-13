import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

import { events } from '../data/events'
import { learningPaths, learningResources, practiceGroups, ykiResources } from '../data/finnishLearning'

const reviewDate = '2026-08-04'

/**
 * Seed the new admin-managed collections after their schema migration has
 * committed. Keeping this separate from the DDL migration avoids holding
 * schema locks while Payload performs its normal collection queries.
 */
export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
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
    if (!existing.totalDocs) {
      await payload.create({
        collection: 'learning-paths',
        data: { ...path, links: [...path.links], lastReviewedAt: reviewDate, status: 'published' },
        overrideAccess: true,
        req,
      })
    }
  }

  for (const resource of learningResources) {
    const existing = await payload.find({ collection: 'learning-resources', where: { name: { equals: resource.name } }, limit: 1, overrideAccess: true, req })
    if (!existing.totalDocs) {
      await payload.create({
        collection: 'learning-resources',
        data: { ...resource, lastReviewedAt: reviewDate, status: 'published' },
        overrideAccess: true,
        req,
      })
    }
  }

  for (const group of practiceGroups) {
    const existing = await payload.find({ collection: 'practice-groups', where: { name: { equals: group.name } }, limit: 1, overrideAccess: true, req })
    if (!existing.totalDocs) {
      await payload.create({
        collection: 'practice-groups',
        data: { ...group, lastReviewedAt: reviewDate, status: 'published' },
        overrideAccess: true,
        req,
      })
    }
  }

  for (const resource of ykiResources) {
    const existing = await payload.find({ collection: 'yki-resources', where: { name: { equals: resource.name } }, limit: 1, overrideAccess: true, req })
    if (!existing.totalDocs) {
      await payload.create({
        collection: 'yki-resources',
        data: { ...resource, lastReviewedAt: reviewDate, status: 'published' },
        overrideAccess: true,
        req,
      })
    }
  }
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.delete({ collection: 'events', where: {}, overrideAccess: true, req })
  await payload.delete({ collection: 'learning-paths', where: {}, overrideAccess: true, req })
  await payload.delete({ collection: 'learning-resources', where: {}, overrideAccess: true, req })
  await payload.delete({ collection: 'practice-groups', where: {}, overrideAccess: true, req })
  await payload.delete({ collection: 'yki-resources', where: {}, overrideAccess: true, req })
}

import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'
import { convertHTMLToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import { JSDOM } from 'jsdom'

import { seedNewsStories } from '../data/news-stories'

const newStorySlug = 'english-language-upper-secondary-finland-2026'
const storySlugs = [newStorySlug, 'finland-economy-wages-jobs-august-2026']

export async function up({ payload, req, db }: MigrateUpArgs): Promise<void> {
  // The community-board migration created dashed relation columns in one
  // production database. Payload expects the underscore form when checking
  // document locks, so repair those columns before touching any documents.
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels"
      ADD COLUMN IF NOT EXISTS "community_posts_id" integer;
    ALTER TABLE "payload_locked_documents_rels"
      ADD COLUMN IF NOT EXISTS "community_comments_id" integer;
    ALTER TABLE "payload_locked_documents_rels"
      ADD COLUMN IF NOT EXISTS "community_reports_id" integer;
  `)

  const editorConfig = await editorConfigFactory.default({ config: payload.config })

  for (const story of seedNewsStories.filter(({ slug }) => storySlugs.includes(slug))) {
    const existing = await payload.find({
      collection: 'news-stories',
      limit: 1,
      overrideAccess: true,
      req,
      where: { slug: { equals: story.slug } },
    })

    const data = {
      category: story.category,
      content: convertHTMLToLexical({ editorConfig, html: story.html, JSDOM }),
      featured: story.featured,
      practicalSummary: story.practicalSummary,
      publishedAt: story.publishedAt,
      readingMinutes: story.readingMinutes,
      slug: story.slug,
      sourceCheckedAt: '2026-08-30T09:11:27.826Z',
      sources: story.sources,
      standfirst: story.standfirst,
      status: 'published' as const,
      title: story.title,
    }

    if (existing.docs[0]) {
      await payload.update({
        collection: 'news-stories',
        id: existing.docs[0].id,
        data,
        overrideAccess: true,
        req,
      })
    } else {
      await payload.create({
        collection: 'news-stories',
        data,
        overrideAccess: true,
        req,
      })
    }
  }
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.delete({
    collection: 'news-stories',
    overrideAccess: true,
    req,
    where: { slug: { equals: newStorySlug } },
  })
}

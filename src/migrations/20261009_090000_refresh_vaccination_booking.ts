import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { convertHTMLToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import { JSDOM } from 'jsdom'

import { septemberTwentySixStories } from '../data/news-september-twenty-six'

const slug = 'helsinki-autumn-vaccinations-2026'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const story = septemberTwentySixStories.find((item) => item.slug === slug)
  if (!story) throw new Error(`Missing news story data for ${slug}`)

  const existing = await payload.find({
    collection: 'news-stories',
    limit: 1,
    overrideAccess: true,
    req,
    where: { slug: { equals: slug } },
  })

  if (!existing.docs[0]) throw new Error(`Cannot refresh missing news story ${slug}`)

  const editorConfig = await editorConfigFactory.default({ config: payload.config })

  await payload.update({
    collection: 'news-stories',
    id: existing.docs[0].id,
    data: {
      content: convertHTMLToLexical({ editorConfig, html: story.html, JSDOM }),
      practicalSummary: story.practicalSummary,
      sourceCheckedAt: '2026-10-09T06:00:00.000Z',
      sources: story.sources,
      standfirst: story.standfirst,
      title: story.title,
    },
    overrideAccess: true,
    req,
  })
}

export async function down(_args: MigrateDownArgs): Promise<void> {
  // Content corrections are intentionally retained on rollback.
}

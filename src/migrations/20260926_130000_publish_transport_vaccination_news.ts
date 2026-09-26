import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { convertHTMLToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import { JSDOM } from 'jsdom'

import { septemberTwentySixStories } from '../data/news-september-twenty-six'

const storySlugs = septemberTwentySixStories.map(({ slug }) => slug)

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const editorConfig = await editorConfigFactory.default({ config: payload.config })

  for (const story of septemberTwentySixStories) {
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
      sourceCheckedAt: '2026-09-26T09:00:00.000Z',
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
      await payload.create({ collection: 'news-stories', data, overrideAccess: true, req })
    }
  }
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.delete({
    collection: 'news-stories',
    overrideAccess: true,
    req,
    where: { slug: { in: storySlugs } },
  })
}

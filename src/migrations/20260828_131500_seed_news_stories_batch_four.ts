import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { convertHTMLToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import { JSDOM } from 'jsdom'

import { seedNewsStories } from '../data/news-stories'

const batchSlugs = ['helsinki-design-week-2026-useful-guide']

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const editorConfig = await editorConfigFactory.default({ config: payload.config })

  for (const story of seedNewsStories.filter(({ slug }) => batchSlugs.includes(slug))) {
    const existing = await payload.find({
      collection: 'news-stories',
      limit: 1,
      overrideAccess: true,
      req,
      where: { slug: { equals: story.slug } },
    })
    if (existing.totalDocs) continue

    await payload.create({
      collection: 'news-stories',
      data: {
        category: story.category,
        content: convertHTMLToLexical({ editorConfig, html: story.html, JSDOM }),
        featured: story.featured,
        practicalSummary: story.practicalSummary,
        publishedAt: story.publishedAt,
        readingMinutes: story.readingMinutes,
        slug: story.slug,
        sourceCheckedAt: '2026-08-28T10:15:00.000Z',
        sources: story.sources,
        standfirst: story.standfirst,
        status: 'published',
        title: story.title,
      },
      overrideAccess: true,
      req,
    })
  }
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.delete({
    collection: 'news-stories',
    overrideAccess: true,
    req,
    where: { slug: { in: batchSlugs } },
  })
}

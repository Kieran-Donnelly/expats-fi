import { convertHTMLToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import { JSDOM } from 'jsdom'
import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

import { originalGuides } from '../data/original-guides'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const editorConfig = await editorConfigFactory.default({ config: payload.config })

  for (const guide of originalGuides) {
    const existing = await payload.find({
      collection: 'articles',
      limit: 1,
      overrideAccess: true,
      req,
      where: { slug: { equals: guide.slug } },
    })
    if (existing.totalDocs) continue

    await payload.create({
      collection: 'articles',
      data: {
        _status: 'published',
        category: guide.category,
        content: convertHTMLToLexical({ editorConfig, html: guide.html, JSDOM }),
        description: guide.description,
        featured: guide.featured,
        publishedAt: new Date(`${guide.publishedAt}T12:00:00.000Z`).toISOString(),
        readingMinutes: guide.readingMinutes,
        slug: guide.slug,
        title: guide.title,
      },
      draft: false,
      overrideAccess: true,
      req,
    })
  }
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.delete({
    collection: 'articles',
    overrideAccess: true,
    req,
    where: { slug: { in: originalGuides.map((guide) => guide.slug) } },
  })
}


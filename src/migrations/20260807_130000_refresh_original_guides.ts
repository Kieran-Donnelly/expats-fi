import { convertHTMLToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import { JSDOM } from 'jsdom'
import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

import { originalGuides } from '../data/original-guides'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const editorConfig = await editorConfigFactory.default({ config: payload.config })

  for (const guide of originalGuides) {
    const content = convertHTMLToLexical({ editorConfig, html: guide.html, JSDOM })
    const data = {
      _status: 'published' as const,
      category: guide.category,
      content,
      description: guide.description,
      featured: guide.featured,
      publishedAt: new Date(guide.publishedAt + 'T12:00:00.000Z').toISOString(),
      readingMinutes: guide.readingMinutes,
      slug: guide.slug,
      title: guide.title,
    }
    const existing = await payload.find({
      collection: 'articles',
      limit: 1,
      overrideAccess: true,
      req,
      where: { slug: { equals: guide.slug } },
    })

    if (existing.docs[0]) {
      await payload.update({
        collection: 'articles',
        id: existing.docs[0].id,
        data,
        draft: false,
        overrideAccess: true,
        req,
      })
    } else {
      await payload.create({
        collection: 'articles',
        data,
        draft: false,
        overrideAccess: true,
        req,
      })
    }
  }
}

// The previous copy cannot be restored automatically; the migration is
// intentionally forward-only and the source data remains in git history.
export async function down(_args: MigrateDownArgs): Promise<void> {}

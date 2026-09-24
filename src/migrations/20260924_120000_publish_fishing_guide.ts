import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { convertHTMLToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import { JSDOM } from 'jsdom'

import { fishingGuide } from '../data/fishing-guide'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const existing = await payload.find({ collection: 'articles', limit: 1, overrideAccess: true, req, where: { slug: { equals: fishingGuide.slug } } })
  if (existing.totalDocs) return
  const editorConfig = await editorConfigFactory.default({ config: payload.config })
  await payload.create({
    collection: 'articles',
    data: { _status: 'published', category: fishingGuide.category, content: convertHTMLToLexical({ editorConfig, html: fishingGuide.html, JSDOM }), description: fishingGuide.description, featured: fishingGuide.featured, publishedAt: fishingGuide.publishedAt, readingMinutes: fishingGuide.readingMinutes, slug: fishingGuide.slug, sourceUrl: fishingGuide.sourceUrl, title: fishingGuide.title },
    draft: false,
    overrideAccess: true,
    req,
  })
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.delete({ collection: 'articles', overrideAccess: true, req, where: { slug: { equals: fishingGuide.slug } } })
}

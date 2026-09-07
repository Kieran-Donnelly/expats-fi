import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { convertHTMLToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import { JSDOM } from 'jsdom'
import { septemberSevenStories } from '../data/news-september-seven'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const editorConfig = await editorConfigFactory.default({ config: payload.config })
  for (const story of septemberSevenStories) {
    const existing = await payload.find({ collection: 'news-stories', limit: 1, overrideAccess: true, req, where: { slug: { equals: story.slug } } })
    // Never overwrite a story an editor has already created or revised.
    if (existing.docs.length) continue
    const { html, ...fields } = story
    await payload.create({ collection: 'news-stories', overrideAccess: true, req, data: {
      ...fields, content: convertHTMLToLexical({ editorConfig, html, JSDOM }),
      sourceCheckedAt: '2026-09-07T05:40:00.000Z', status: 'published',
    } })
  }
}

export async function down(_args: MigrateDownArgs): Promise<void> {
  // Published editorial content is deliberately preserved on rollback.
}

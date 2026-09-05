import { convertHTMLToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import { JSDOM } from 'jsdom'
import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

import { originalGuides } from '../data/original-guides'

const slugs = new Set([
  'guide-moving-to-finland-address-and-postal-services',
  'guide-shopping-in-finland-online-shopping',
])

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const editorConfig = await editorConfigFactory.default({ config: payload.config })

  for (const guide of originalGuides.filter(({ slug }) => slugs.has(slug))) {
    const existing = await payload.find({
      collection: 'articles',
      limit: 1,
      overrideAccess: true,
      req,
      where: { slug: { equals: guide.slug } },
    })

    if (!existing.docs[0]) continue

    await payload.update({
      collection: 'articles',
      id: existing.docs[0].id,
      data: {
        content: convertHTMLToLexical({ editorConfig, html: guide.html, JSDOM }),
      },
      draft: false,
      overrideAccess: true,
      req,
    })
  }
}

// This content-only correction is intentionally forward-only.
export async function down(_args: MigrateDownArgs): Promise<void> {}

import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { convertHTMLToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import { JSDOM } from 'jsdom'

import articles from '../data/articles.json' with { type: 'json' }
import { businesses } from '../data/businesses'

const articleSlugs = articles.map((article) => article.slug)
const businessSlugs = businesses.map((business) => business.slug)

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const editorConfig = await editorConfigFactory.default({ config: payload.config })

  for (const [index, article] of articles.entries()) {
    const existing = await payload.find({
      collection: 'articles',
      limit: 1,
      overrideAccess: true,
      req,
      where: { slug: { equals: article.slug } },
    })
    if (existing.totalDocs) continue

    await payload.create({
      collection: 'articles',
      data: {
        _status: 'published',
        category: article.category as 'Immigration & permits' | 'Work & money' | 'Housing' | 'Health & wellbeing' | 'Getting around' | 'Family' | 'Everyday life',
        content: convertHTMLToLexical({ editorConfig, html: article.html, JSDOM }),
        description: article.description,
        featured: index < 3,
        publishedAt: new Date(`${article.publishedAt}T12:00:00.000Z`).toISOString(),
        readingMinutes: article.readingMinutes,
        slug: article.slug,
        sourceUrl: article.sourceUrl,
        title: article.title,
      },
      draft: false,
      overrideAccess: true,
      req,
    })
  }

  for (const business of businesses) {
    const existing = await payload.find({
      collection: 'businesses',
      limit: 1,
      overrideAccess: true,
      req,
      where: { slug: { equals: business.slug } },
    })
    if (existing.totalDocs) continue

    await payload.create({
      collection: 'businesses',
      data: {
        address: business.address,
        categories: business.categories.map((label) => ({ label })),
        description: business.description,
        featured: Boolean(business.featured),
        locations: business.locations.map((label) => ({ label })),
        name: business.name,
        phone: business.phone,
        slug: business.slug,
        status: 'published',
        summary: business.summary,
        website: business.website,
      },
      overrideAccess: true,
      req,
    })
  }
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.delete({ collection: 'articles', overrideAccess: true, req, where: { slug: { in: articleSlugs } } })
  await payload.delete({ collection: 'businesses', overrideAccess: true, req, where: { slug: { in: businessSlugs } } })
}

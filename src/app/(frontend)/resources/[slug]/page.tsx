import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { SaveArticleButton } from '@/components/SaveArticleButton'
import { JsonLd } from '@/components/JsonLd'
import { ShareButton } from '@/components/ShareButton'
import { getArticle } from '@/lib/content'
import { getCurrentMember } from '@/lib/member-auth'
import { demoteEmbeddedH1Headings } from '@/lib/rich-text'
import { getSavedArticleIds } from '@/lib/saved-articles'
import { absoluteUrl, breadcrumbJsonLd, defaultSocialImage, publisher } from '@/lib/seo'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/resources/${article.slug}/` },
    openGraph: { title: article.title, description: article.description, type: 'article', url: `/resources/${article.slug}/`, publishedTime: article.publishedAt, modifiedTime: article.updatedAt, images: [defaultSocialImage] },
    twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [defaultSocialImage] },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()
  const member = await getCurrentMember(await headers())
  const saved = member ? (await getSavedArticleIds(member.id)).has(article.id) : false
  const dateFormatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Helsinki' })
  const publishedDate = dateFormatter.format(new Date(article.publishedAt))
  const updatedDate = dateFormatter.format(new Date(article.updatedAt))
  const wasUpdated = publishedDate !== updatedDate

  return (
    <main id="main"><div className="shell detail-shell article-page">
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description, datePublished: article.publishedAt, dateModified: article.updatedAt, articleSection: article.category, mainEntityOfPage: absoluteUrl(`/resources/${article.slug}/`), author: publisher, publisher, image: defaultSocialImage, inLanguage: 'en', isAccessibleForFree: true },
        breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Guides', path: '/resources/' }, { name: article.title, path: `/resources/${article.slug}/` }]),
      ]} />
      <Link className="back-link" href="/resources/">← All Finland guides</Link>
      <header className="article-page__header"><p className="eyebrow">{article.category}</p><h1>{article.title}</h1><p className="article-page__description">{article.description}</p><div className="article-page__meta"><span>Published {publishedDate}</span>{wasUpdated && <span>Updated {updatedDate}</span>}<span>{article.readingMinutes} min read</span><span>General guidance</span></div><div className="article-page__actions"><SaveArticleButton articleSlug={article.slug} initialSaved={saved} /><ShareButton contentType="guide" path={`/resources/${article.slug}/`} title={article.title} text={article.description} /></div></header>
      <div className="article-page__layout">
        <article className="prose"><RichText data={demoteEmbeddedH1Headings(article.content) as SerializedEditorState} /></article>
        <aside className="article-aside"><div><strong>About this guide</strong><p>{article.sourceUrl?.includes('expats.fi') ? 'This is part of the original Expats.fi guide library, kept here and updated as the practical details change.' : 'This is an original Expats.fi editorial guide, written as a practical starting point for life in Finland.'}</p></div><div><strong>Check before acting</strong><p>Immigration, tax and benefit rules can change. Confirm decisions with the relevant Finnish authority.</p></div></aside>
      </div>
    </div></main>
  )
}

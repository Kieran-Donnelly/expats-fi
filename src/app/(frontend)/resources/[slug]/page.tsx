import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { notFound, permanentRedirect } from 'next/navigation'

import { ArticleCard } from '@/components/ArticleCard'
import { SaveArticleButton } from '@/components/SaveArticleButton'
import { JsonLd } from '@/components/JsonLd'
import { ReadingProgress } from '@/components/ReadingProgress'
import { ShareButton } from '@/components/ShareButton'
import { getArticle, getArticles } from '@/lib/content'
import { getCurrentMember } from '@/lib/member-auth'
import { demoteEmbeddedH1Headings } from '@/lib/rich-text'
import { getSavedArticleIds } from '@/lib/saved-articles'
import { articleJourneyLinks, articleSeoTitle } from '@/lib/article-journeys'
import { retiredArticleDestination } from '@/lib/article-lifecycle'
import { absoluteUrl, breadcrumbJsonLd, publisher, seoDescription } from '@/lib/seo'

export const dynamic = 'force-dynamic'
const resourceSocialImage = absoluteUrl('/images/heroes/resources-documents-laptop.webp')

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const replacement = retiredArticleDestination(slug)
  if (replacement) permanentRedirect(replacement)
  const article = await getArticle(slug)
  if (!article) return {}
  const title = articleSeoTitle(article.slug, article.title)
  const description = seoDescription(article.description)
  return {
    title,
    description,
    alternates: { canonical: `/resources/${article.slug}/` },
    openGraph: { title, description, type: 'article', url: `/resources/${article.slug}/`, publishedTime: article.publishedAt, modifiedTime: article.updatedAt, images: [resourceSocialImage] },
    twitter: { card: 'summary_large_image', title, description, images: [resourceSocialImage] },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const replacement = retiredArticleDestination(slug)
  if (replacement) permanentRedirect(replacement)
  const article = await getArticle(slug)
  if (!article) notFound()
  const title = articleSeoTitle(article.slug, article.title)
  const member = await getCurrentMember(await headers())
  const saved = member ? (await getSavedArticleIds(member.id)).has(article.id) : false
  const dateFormatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Helsinki' })
  const publishedDate = dateFormatter.format(new Date(article.publishedAt))
  const updatedDate = dateFormatter.format(new Date(article.updatedAt))
  const wasUpdated = publishedDate !== updatedDate
  const categoryArticles = await getArticles({ category: article.category })
  const currentIndex = categoryArticles.findIndex((candidate) => candidate.slug === article.slug)
  const relatedArticles = currentIndex < 0
    ? categoryArticles.filter((candidate) => candidate.slug !== article.slug).slice(0, 3)
    : Array.from({ length: Math.min(3, categoryArticles.length - 1) }, (_, offset) =>
        categoryArticles[(currentIndex + offset + 1) % categoryArticles.length],
      )
  const journeyLinks = articleJourneyLinks[article.slug] ?? []

  return (
    <main id="main">
      <ReadingProgress />
      <div className="shell detail-shell article-page">
        <JsonLd data={[
          { '@context': 'https://schema.org', '@type': 'Article', headline: title, description: article.description, datePublished: article.publishedAt, dateModified: article.updatedAt, articleSection: article.category, mainEntityOfPage: absoluteUrl(`/resources/${article.slug}/`), author: publisher, publisher, image: resourceSocialImage, inLanguage: 'en', isAccessibleForFree: true },
          breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Guides', path: '/resources/' }, { name: title, path: `/resources/${article.slug}/` }]),
        ]} />
        <Link className="back-link" href="/resources/">← All Finland guides</Link>
        <header className="article-page__header"><p className="eyebrow">{article.category}</p><h1>{title}</h1><p className="article-page__description">{article.description}</p><div className="article-page__meta"><span>Published {publishedDate}</span>{wasUpdated && <span>Updated {updatedDate}</span>}<span>{article.readingMinutes} min read</span><span>General guidance</span></div><div className="article-page__actions"><SaveArticleButton articleSlug={article.slug} initialSaved={saved} /><ShareButton contentType="guide" path={`/resources/${article.slug}/`} title={title} text={article.description} /></div></header>
        <div className="article-page__layout">
          <article className="prose"><RichText data={demoteEmbeddedH1Headings(article.content) as SerializedEditorState} /></article>
          <aside className="article-aside"><div><strong>About this guide</strong><p>{article.sourceUrl?.includes('expats.fi') ? 'This is part of the original Expats.fi guide library, kept here and updated as the practical details change.' : 'This is an original Expats.fi editorial guide, written as a practical starting point for life in Finland.'}</p></div>{journeyLinks.length > 0 && <nav className="article-next-steps" aria-label="Next useful steps"><strong>Next useful steps</strong>{journeyLinks.map((item) => <Link href={item.href} key={item.href}><span>{item.title}</span><small>{item.description}</small></Link>)}</nav>}<div><strong>Check before acting</strong><p>Immigration, tax and benefit rules can change. Confirm decisions with the relevant Finnish authority.</p></div></aside>
        </div>
      </div>
      {relatedArticles.length > 0 && (
        <section className="detail-related" aria-labelledby="related-guides-heading">
          <div className="shell section">
            <div className="section-heading">
              <div><p className="eyebrow">Keep going</p><h2 id="related-guides-heading">More help with {article.category.toLowerCase()}.</h2></div>
              <Link className="text-link" href="/resources/">Browse every guide <span aria-hidden="true">→</span></Link>
            </div>
            <div className="article-grid">{relatedArticles.map((relatedArticle) => <ArticleCard article={relatedArticle} key={relatedArticle.slug} />)}</div>
          </div>
        </section>
      )}
    </main>
  )
}

import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { SaveArticleButton } from '@/components/SaveArticleButton'
import { getArticle } from '@/lib/content'
import { getCurrentMember } from '@/lib/member-auth'
import { getSavedArticleIds } from '@/lib/saved-articles'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/resources/${article.slug}/` },
    openGraph: { title: article.title, description: article.description, type: 'article' },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()
  const member = await getCurrentMember(await headers())
  const saved = member ? (await getSavedArticleIds(member.id)).has(article.id) : false
  const date = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(article.publishedAt))

  return (
    <main id="main"><div className="shell detail-shell article-page">
      <Link className="back-link" href="/resources/">← All Finland guides</Link>
      <header className="article-page__header"><p className="eyebrow">{article.category}</p><h1>{article.title}</h1><p className="article-page__description">{article.description}</p><div className="article-page__meta"><span>{date}</span><span>{article.readingMinutes} min read</span><span>General guidance</span></div><div className="article-page__actions"><SaveArticleButton articleSlug={article.slug} initialSaved={saved} /></div></header>
      <div className="article-page__layout">
        <article className="prose"><RichText data={article.content as SerializedEditorState} /></article>
        <aside className="article-aside"><div><strong>About this guide</strong><p>{article.sourceUrl?.includes('expats.fi') ? 'This guide was migrated from the existing Expats.fi library and can now be reviewed and updated in Payload.' : 'This is an original Expats.fi editorial guide, written as a practical starting point for life in Finland.'}</p></div><div><strong>Check before acting</strong><p>Immigration, tax and benefit rules can change. Confirm decisions with the relevant Finnish authority.</p></div></aside>
      </div>
    </div></main>
  )
}

import Link from 'next/link'
import type { Article } from '@/payload-types'

import { SaveArticleButton } from './SaveArticleButton'

export function ArticleCard({
  article,
  featured = false,
  saved = false,
  showSave = false,
}: {
  article: Article
  featured?: boolean
  saved?: boolean
  showSave?: boolean
}) {
  return (
    <article className="article-card" data-featured={featured || undefined}>
      <div className="article-card__meta"><span>{article.category}</span><span>{article.readingMinutes} min read</span></div>
      <h3><Link href={`/resources/${article.slug}/`} data-analytics-event="guide_opened" data-analytics-label={article.slug} data-analytics-position="title">{article.title}</Link></h3>
      <p>{article.description}</p>
      <div className="article-card__actions">
        <Link className="text-link" href={`/resources/${article.slug}/`} data-analytics-event="guide_opened" data-analytics-label={article.slug} data-analytics-position="card_cta">Read the guide <span aria-hidden="true">→</span></Link>
        {showSave && <SaveArticleButton articleSlug={article.slug} initialSaved={saved} compact />}
      </div>
    </article>
  )
}

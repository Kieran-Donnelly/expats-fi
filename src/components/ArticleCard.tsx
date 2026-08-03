import Link from 'next/link'
import type { Article } from '@/payload-types'

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <article className="article-card" data-featured={featured || undefined}>
      <div className="article-card__meta"><span>{article.category}</span><span>{article.readingMinutes} min read</span></div>
      <h3><Link href={`/resources/${article.slug}/`}>{article.title}</Link></h3>
      <p>{article.description}</p>
      <Link className="text-link" href={`/resources/${article.slug}/`}>Read the guide <span aria-hidden="true">→</span></Link>
    </article>
  )
}

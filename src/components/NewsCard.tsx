import Link from 'next/link'

import type { NewsStory } from '@/payload-types'

function storyDate(value: string): string {
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', timeZone: 'Europe/Helsinki' }).format(new Date(value))
}

export function NewsCard({ story, compact = false }: { story: NewsStory; compact?: boolean }) {
  return (
    <article className="news-card" data-compact={compact || undefined}>
      <div className="news-card__meta"><span>{story.category}</span><time dateTime={story.publishedAt}>{storyDate(story.publishedAt)}</time></div>
      <h2><Link href={`/news/${story.slug}/`}>{story.title}</Link></h2>
      <p>{story.standfirst}</p>
      <div className="news-card__footer"><span>{story.readingMinutes} min read</span><Link href={`/news/${story.slug}/`}>Read the story <span aria-hidden="true">→</span></Link></div>
    </article>
  )
}

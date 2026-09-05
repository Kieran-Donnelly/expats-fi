import Link from 'next/link'
import Image from 'next/image'

import { getNewsImage } from '@/lib/news-images'
import type { NewsStory } from '@/payload-types'

function storyDate(value: string): string {
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', timeZone: 'Europe/Helsinki' }).format(new Date(value))
}

export function NewsCard({ story, compact = false }: { story: NewsStory; compact?: boolean }) {
  const image = getNewsImage(story.slug)

  return (
    <article className="news-card" data-compact={compact || undefined}>
      <Link className="news-card__image" href={`/news/${story.slug}/`} aria-label={`Read ${story.title}`}>
        <Image src={image.src} alt={image.alt} width={1600} height={900} sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" />
      </Link>
      <div className="news-card__meta"><span>{story.category}</span><time dateTime={story.publishedAt}>{storyDate(story.publishedAt)}</time></div>
      <h2><Link href={`/news/${story.slug}/`}>{story.title}</Link></h2>
      <p>{story.standfirst}</p>
      <div className="news-card__footer"><span>{story.readingMinutes} min read</span><Link href={`/news/${story.slug}/`}>Read the story <span aria-hidden="true">→</span></Link></div>
    </article>
  )
}

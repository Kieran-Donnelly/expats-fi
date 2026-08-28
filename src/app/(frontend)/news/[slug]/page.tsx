import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getNewsStory } from '@/lib/content'

export const dynamic = 'force-dynamic'

type Source = { name: string; url: string }

function sourcesFrom(value: unknown): Source[] {
  if (!Array.isArray(value)) return []
  return value.filter((item): item is Source => {
    if (!item || typeof item !== 'object') return false
    const source = item as Partial<Source>
    return typeof source.name === 'string' && typeof source.url === 'string'
  })
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const story = await getNewsStory(slug)
  if (!story) return {}
  return {
    title: story.title,
    description: story.standfirst,
    alternates: { canonical: `/news/${story.slug}/` },
    openGraph: { title: story.title, description: story.standfirst, type: 'article', publishedTime: story.publishedAt },
  }
}

export default async function NewsStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const story = await getNewsStory(slug)
  if (!story) notFound()

  const date = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Helsinki' }).format(new Date(story.publishedAt))
  const checked = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Helsinki' }).format(new Date(story.sourceCheckedAt))
  const sources = sourcesFrom(story.sources)

  return (
    <main id="main" className="news-story-page">
      <article className="shell news-story">
        <Link className="back-link" href="/news/">← All news</Link>
        <header className="news-story__header">
          <p className="eyebrow">{story.category}</p>
          <h1>{story.title}</h1>
          <p className="news-story__standfirst">{story.standfirst}</p>
          <div className="news-story__meta"><span>{date}</span><span>{story.readingMinutes} min read</span><span>By Expats.fi</span></div>
        </header>

        <div className="news-story__layout">
          <div>
            <aside className="news-story__takeaway"><span>The useful bit</span><p>{story.practicalSummary}</p></aside>
            <div className="prose news-story__prose"><RichText data={story.content as SerializedEditorState} /></div>
          </div>
          <aside className="news-story__aside">
            <div><span>Source check</span><strong>Checked {checked}</strong><p>Details can change after publication. We link the material used so you can confirm anything important.</p></div>
            <div><span>Sources</span><ul>{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.name} <span aria-hidden="true">↗</span></a></li>)}</ul></div>
            <div><span>Something changed?</span><p>Spotted an update or a detail we missed?</p><a href="mailto:hello@expats.fi?subject=News%20story%20update">Give us a heads-up</a></div>
          </aside>
        </div>
      </article>
    </main>
  )
}

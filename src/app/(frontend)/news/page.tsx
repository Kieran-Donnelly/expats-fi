import type { Metadata } from 'next'
import Link from 'next/link'

import { NewsCard } from '@/components/NewsCard'
import { HeroBackdrop } from '@/components/HeroBackdrop'
import { getNewsStories } from '@/lib/content'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'News from Finland, minus the waffle',
  description: 'Warm, original news and explainers about Helsinki and Finland, with proper context for international residents.',
  alternates: { canonical: '/news/' },
}

const categories = ['Helsinki', 'Finland', 'Work & money', 'Life admin', 'Culture & community']

export default async function NewsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category = '' } = await searchParams
  const stories = await getNewsStories({ category: category || undefined })
  const featured = stories.find((story) => story.featured) || stories[0]
  const latest = stories.filter((story) => story.id !== featured?.id)

  return (
    <main id="main" className="news-page">
      <header className="news-hero photo-hero photo-hero--dark">
        <HeroBackdrop src="/images/heroes/news-phone-coffee.webp" position="center 42%" />
        <div className="shell news-hero__inner">
          <div>
            <p className="eyebrow">Expats.fi News</p>
            <h1>News from Finland, minus the waffle.</h1>
            <p>We follow the stories that affect life here, dig into the useful bits and explain them like a mate who has already fought through the official paperwork.</p>
          </div>
          <aside className="news-hero__note">
            <span>Our promise</span>
            <strong>Context before clicks.</strong>
            <p>Original writing, clearly linked sources and a straight answer to what each story actually means for you.</p>
          </aside>
        </div>
      </header>

      <nav className="news-topics" aria-label="News topics">
        <div className="shell">
          <Link href="/news/" aria-current={!category ? 'page' : undefined}>All news</Link>
          {categories.map((item) => <Link key={item} href={`/news/?category=${encodeURIComponent(item)}`} aria-current={category === item ? 'page' : undefined}>{item}</Link>)}
        </div>
      </nav>

      <section className="shell news-lead-section" aria-label="Leading story">
        {featured ? (
          <article className="news-lead">
            <div className="news-lead__stamp" aria-hidden="true"><span>FI</span><b>News</b></div>
            <div className="news-lead__copy">
              <div className="news-lead__meta"><span>{featured.category}</span><span>{featured.readingMinutes} min read</span></div>
              <h2><Link href={`/news/${featured.slug}/`}>{featured.title}</Link></h2>
              <p>{featured.standfirst}</p>
              <Link className="news-lead__link" href={`/news/${featured.slug}/`}>Get the full story <span aria-hidden="true">→</span></Link>
            </div>
          </article>
        ) : (
          <div className="empty-state"><h2>No stories in this topic yet</h2><p>We are working through the useful stuff. Try all news for now.</p></div>
        )}
      </section>

      {latest.length > 0 && (
        <section className="shell news-latest section" aria-labelledby="latest-news-heading">
          <div className="section-heading"><div><p className="eyebrow">The latest</p><h2 id="latest-news-heading">Worth knowing about</h2></div><p>Not every headline needs a panic. These are the ones worth a proper read.</p></div>
          <div className="news-grid">{latest.map((story) => <NewsCard key={story.id} story={story} />)}</div>
        </section>
      )}

      <section className="news-method">
        <div className="shell news-method__inner">
          <div><p className="eyebrow">How we cover Finland</p><h2>We do not just swap a few words around.</h2></div>
          <div className="news-method__steps">
            <article><span>01</span><strong>Check the facts</strong><p>We begin with official information and reliable reporting, then link the sources so you can inspect them yourself.</p></article>
            <article><span>02</span><strong>Add the missing context</strong><p>What led here, who is affected and what the headline leaves unexplained.</p></article>
            <article><span>03</span><strong>Make it useful</strong><p>The deadline, next step, journey change or awkward Finnish system detail you actually need.</p></article>
          </div>
        </div>
      </section>

      <section className="shell news-letter section" aria-label="Newsletter preview">
        <div><p className="eyebrow">Coming next</p><h2>The Finland catch-up, straight to your inbox.</h2><p>A friendly round-up of the week’s useful stories, upcoming happenings and things people new to Finland often discover six months too late.</p></div>
        <div className="news-letter__status"><span>Newsletter</span><strong>We are getting the first edition ready.</strong><p>No spam, no daily shouting and no selling your details. The signup will open here once the mailing list is connected.</p></div>
      </section>
    </main>
  )
}

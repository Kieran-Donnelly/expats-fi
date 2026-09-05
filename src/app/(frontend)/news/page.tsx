import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { NewsCard } from '@/components/NewsCard'
import { HeroBackdrop } from '@/components/HeroBackdrop'
import { getNewsStories } from '@/lib/content'
import { getNewsImage } from '@/lib/news-images'

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
  const featuredImage = featured ? getNewsImage(featured.slug) : null

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
          <Link href="/news/#news-results" aria-current={!category ? 'page' : undefined}>All news</Link>
          {categories.map((item) => <Link key={item} href={`/news/?category=${encodeURIComponent(item)}#news-results`} aria-current={category === item ? 'page' : undefined}>{item}</Link>)}
        </div>
      </nav>

      <section className="shell news-lead-section filter-target" id="news-results" aria-label={category ? `${category} news` : 'Leading story'}>
        {featured ? (
          <article className="news-lead">
            {featuredImage && <Link className="news-lead__image" href={`/news/${featured.slug}/`} aria-label={`Read ${featured.title}`}><Image src={featuredImage.src} alt={featuredImage.alt} width={1600} height={900} sizes="(max-width: 760px) 100vw, 42vw" /><span aria-hidden="true">FI News</span></Link>}
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
        <div><p className="eyebrow">Monthly newsletter in the works</p><h2>The Finland catch-up, straight to your inbox.</h2><p>One friendly monthly wrap of what happened, the useful bits you may have missed and what is worth having on the radar for the month ahead.</p></div>
        <div className="news-letter__status"><span>Get on the list</span><strong>Switch it on in your Expats.fi account.</strong><p>We are still connecting the delivery side. Create a free account, choose the monthly newsletter in your preferences and you will be ready when the first edition goes out.</p><div className="news-letter__actions"><Link href="/register/">Create an account</Link><Link href="/account/">Newsletter preferences</Link></div></div>
      </section>
    </main>
  )
}

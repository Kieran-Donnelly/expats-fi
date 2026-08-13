import Link from 'next/link'

import { ArticleCard } from '@/components/ArticleCard'
import { BusinessCard } from '@/components/BusinessCard'
import { EventCard } from '@/components/EventCard'
import { getArticles, getBusinesses, getEvents } from '@/lib/content'

export const dynamic = 'force-dynamic'

const quickLinks = [
  ['Find Housing', 'Housing', 'home'],
  ['Residence Permit', 'Immigration & permits', 'document'],
  ['Get a Job', 'Work & money', 'case'],
  ['Sort Your Finances', 'Work & money', 'wallet'],
  ['Family in Finland', 'Family', 'people'],
  ['Explore Daily Life', 'Everyday life', 'map'],
] as const

function QuickIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    home: <><path d="m3 11 9-7 9 7v9H3Z" /><path d="M9 20v-6h6v6" /></>,
    document: <><path d="M6 3h9l4 4v14H6Z" /><path d="M15 3v5h5M9 13h7M9 17h5" /></>,
    case: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V4h8v3M3 12h18" /></>,
    wallet: <><path d="M4 6h15v14H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13" /><path d="M15 11h6v5h-6Z" /></>,
    people: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2" /><path d="M3 20c0-4 2-6 6-6s6 2 6 6M15 15c4 0 6 2 6 5" /></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3Z" /><path d="M9 3v15M15 6v15" /></>,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>
}

export default async function HomePage() {
  const [articles, businesses, upcoming] = await Promise.all([
    getArticles({ limit: 6 }),
    getBusinesses({ limit: 3 }),
    getEvents({ upcoming: true }),
  ])
  const upcomingEvents = upcoming.slice(0, 3)
  const lead = articles[0]
  const secondary = articles.slice(1, 3)

  return (
    <main id="main">
      <section className="home-hero">
        <div className="shell home-hero__inner">
          <div className="home-hero__copy">
            <p className="trust-pill"><span />Independent · Practical · Free to read</p>
            <h1>Everything you need to know about living in Finland.</h1>
            <p className="home-hero__lede">Trusted guides, useful local advice and clear next steps to help you settle in Finland with confidence.</p>
          </div>
          <form className="search-box" action="/resources/" method="get" role="search">
            <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5" /><path d="m13 13 4 4" /></svg>
            <label className="sr-only" htmlFor="home-search">Search guides</label>
            <input id="home-search" name="q" placeholder="What are you looking for?" />
            <button type="submit">Search</button>
          </form>
          <div className="popular-links"><span>Popular right now</span><Link href="/resources/?q=residence+permit">residence permit</Link><Link href="/learn-finnish/">learning Finnish</Link><Link href="/embassies/">find my embassy</Link><Link href="/businesses/">expat businesses</Link></div>
          <div className="quick-grid">
            {quickLinks.map(([label, category, icon]) => (
              <Link key={label} href={`/resources/?category=${encodeURIComponent(category)}`}>
                <QuickIcon name={icon} /><span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {lead && (
        <section className="section shell" aria-labelledby="start-heading">
          <div className="section-heading">
            <div><p className="eyebrow">Start here</p><h2 id="start-heading">Clear answers for your next step</h2></div>
            <Link className="text-link" href="/resources/">Browse all guides <span aria-hidden="true">→</span></Link>
          </div>
          <div className="featured-guides">
            <article className="lead-guide">
              <span className="lead-guide__category">{lead.category}</span>
              <h3><Link href={`/resources/${lead.slug}/`}>{lead.title}</Link></h3>
              <p>{lead.description}</p>
              <div><span>{lead.readingMinutes} min read</span><Link href={`/resources/${lead.slug}/`}>Read guide →</Link></div>
            </article>
            <div className="secondary-guides">
              {secondary.map((article) => <ArticleCard article={article} key={article.id} />)}
            </div>
          </div>
        </section>
      )}

      <section className="business-preview">
        <div className="shell section">
          <div className="section-heading">
            <div><p className="eyebrow">Expat-owned in Finland</p><h2>Spend local. Meet the people building here.</h2></div>
            <Link className="text-link" href="/businesses/">Open the directory <span aria-hidden="true">→</span></Link>
          </div>
          <div className="business-grid">{businesses.map((business) => <BusinessCard business={business} key={business.id} />)}</div>
          <div className="directory-callout"><div><strong>Know a business we should include?</strong><p>Help us grow the directory beyond the capital region.</p></div><Link className="button" href="/submit-business/">List a business for free</Link></div>
        </div>
      </section>

      <section className="section shell home-events" aria-labelledby="home-events-heading">
        <div className="section-heading">
          <div><p className="eyebrow">Helsinki, right now</p><h2 id="home-events-heading">A reason to leave the apartment.</h2></div>
          <Link className="text-link" href="/events/">Explore all events <span aria-hidden="true">→</span></Link>
        </div>
        <div className="event-grid">{upcomingEvents.map((event) => <EventCard event={event} key={event.slug} />)}</div>
      </section>

      <section className="section shell" aria-labelledby="latest-heading">
        <div className="section-heading"><div><p className="eyebrow">Latest guidance</p><h2 id="latest-heading">Practical reading for life in Finland</h2></div></div>
        <div className="article-grid">{articles.slice(3).map((article) => <ArticleCard article={article} key={article.id} />)}</div>
      </section>
    </main>
  )
}

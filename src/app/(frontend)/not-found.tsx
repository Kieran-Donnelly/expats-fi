import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

const waysBack = [
  { number: '01', title: 'Start with the basics', detail: 'Your first 90 days and the systems worth sorting first.', href: '/start-here/' },
  { number: '02', title: 'Find a practical guide', detail: 'Permits, housing, work, money, family life and more.', href: '/resources/#resource-library' },
  { number: '03', title: 'See what is happening', detail: 'Events, places, neighbourhoods and reasons to head out.', href: '/explore/' },
  { number: '04', title: 'Find your people', detail: 'Community groups, sports and expat-owned businesses.', href: '/community/' },
] as const

export default function NotFound() {
  return (
    <main id="main" className="status-page">
      <section className="shell status-page__hero" aria-labelledby="not-found-heading">
        <div className="status-page__code" aria-hidden="true">404</div>
        <div className="status-page__copy">
          <p className="eyebrow">Well, this is awkward</p>
          <h1 id="not-found-heading">That page has wandered off.</h1>
          <p>The link may be old, the page may have moved, or Finland has quietly filed it somewhere sensible without telling either of us.</p>
          <form className="status-page__search" action="/resources/#resource-library" method="get" role="search">
            <label htmlFor="missing-page-search">What were you trying to find?</label>
            <div><input id="missing-page-search" name="q" placeholder="Housing, Kela, events, Finnish…" /><button type="submit">Search the site</button></div>
          </form>
        </div>
      </section>

      <section className="shell status-page__routes" aria-labelledby="ways-back-heading">
        <div className="status-page__routes-heading"><p className="eyebrow">A few reliable ways back</p><h2 id="ways-back-heading">Pick up somewhere useful.</h2></div>
        <div className="status-page__grid">
          {waysBack.map((route) => (
            <Link href={route.href} key={route.title}>
              <span>{route.number}</span><strong>{route.title}</strong><small>{route.detail}</small><i aria-hidden="true">→</i>
            </Link>
          ))}
        </div>
        <p className="status-page__help">Certain the page should exist? <a href="mailto:hello@expats.fi?subject=Missing%20page%20on%20Expats.fi">Give us a heads-up</a> and we will have a look.</p>
      </section>
    </main>
  )
}

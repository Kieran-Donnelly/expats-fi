import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getSportsListing, sportsListings } from '@/data/sports'

export function generateStaticParams() {
  return sportsListings.map((listing) => ({ slug: listing.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const listing = getSportsListing(slug)
  if (!listing) return {}
  return { title: listing.name, description: listing.blurb, alternates: { canonical: `/sports/${listing.slug}/` } }
}

export default async function SportsListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const listing = getSportsListing(slug)
  if (!listing) notFound()

  return (
    <main id="main">
      <div className="shell detail-shell sports-profile">
        <Link className="back-link" href="/sports/">← All sports and activities</Link>
        <header className="sports-profile__header">
          <div>
            <div className="event-detail__kicker"><span>{listing.type}</span><span>{listing.category}</span>{listing.beginnerFriendly && <span>Beginner-friendly</span>}{listing.familyFriendly && <span>Family-friendly</span>}</div>
            <h1>{listing.name}</h1>
            <p>{listing.blurb}</p>
          </div>
          <div className="sports-profile__sport-list"><small>What’s here</small>{listing.sports.map((sport) => <strong key={sport}>{sport}</strong>)}</div>
        </header>

        <div className="sports-profile__layout">
          <article className="sports-profile__story">
            <h2>Why it could be a good fit</h2>
            {listing.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

            <section className="sports-profile__highlights">
              <p className="eyebrow">Good to know</p>
              <h2>The useful bits</h2>
              <ul>{listing.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </section>

            <section className="sports-profile__start">
              <p className="eyebrow">Your first move</p>
              <h2>How to get started</h2>
              <p>{listing.gettingStarted}</p>
              <a className="button" href={listing.website} target="_blank" rel="noreferrer">Open official information ↗</a>
            </section>

            <section className="event-detail__transport">
              <p className="eyebrow">Getting there</p><h2>Choose your route</h2>
              <div>{listing.transport.map((option) => <section key={option.mode}><strong>{option.mode}</strong><p>{option.advice}</p></section>)}</div>
              <a className="text-link" href="https://www.hsl.fi/en/journey-planner" target="_blank" rel="noreferrer">Open the HSL Journey Planner <span aria-hidden="true">↗</span></a>
            </section>
          </article>

          <aside className="sports-profile__aside">
            <div className="facts sports-profile__facts">
              <div><strong>Level</strong><span>{listing.level}</span></div>
              <div><strong>Who it suits</strong><span>{listing.audience}</span></div>
              <div><strong>Language</strong><span>{listing.languages.join(' · ')}</span></div>
              <div><strong>When</strong><span>{listing.schedule}</span></div>
              <div><strong>Cost</strong><span>{listing.cost}</span></div>
              <div><strong>Where</strong><span>{listing.location}<br />{listing.address}</span></div>
              {listing.contact && <div><strong>Contact</strong><a href={`mailto:${listing.contact}`}>{listing.contact}</a></div>}
              <a className="button" href={listing.website} target="_blank" rel="noreferrer">Visit official website ↗</a>
            </div>
            <div className="sports-verification" data-official={listing.verification === 'Official source' || undefined}>
              <strong>{listing.verification === 'Official source' ? 'Official source checked' : 'Organisation confirmation pending'}</strong>
              <p>{listing.verification === 'Official source' ? 'This practical information comes from the operator’s official page.' : 'We built this independent community listing from the organisation’s public information and have not presented it as an endorsement.'}</p>
              <small>Source: {listing.sourceName}<br />Checked {listing.lastChecked}</small>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

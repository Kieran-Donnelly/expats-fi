import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { exploreListings, getExploreListing } from '@/data/explore'
import { ShareButton } from '@/components/ShareButton'

export function generateStaticParams() {
  return exploreListings.map((listing) => ({ slug: listing.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const listing = getExploreListing(slug)
  if (!listing) return {}
  return { title: `${listing.name} | Things to do`, description: listing.blurb, alternates: { canonical: `/explore/${listing.slug}/` } }
}

export default async function ExploreListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const listing = getExploreListing(slug)
  if (!listing) notFound()

  return (
    <main id="main">
      <div className="shell detail-shell explore-profile">
        <Link className="back-link" href="/explore/">← All things to do</Link>
        <header className="explore-profile__header">
          <div><div className="event-detail__kicker"><span>{listing.category}</span><span>{listing.area}</span>{listing.familyFriendly && <span>Family-friendly</span>}</div><h1>{listing.name}</h1><p>{listing.blurb}</p><div className="detail-share"><ShareButton contentType="place" path={`/explore/${listing.slug}/`} title={listing.name} text={listing.blurb} /></div></div>
          <aside><span>{listing.access}</span><strong>{listing.priceNote}</strong>{listing.freeTip && <p><b>Free tip:</b> {listing.freeTip}</p>}</aside>
        </header>

        <div className="explore-profile__layout">
          <article className="explore-profile__story">
            <p className="eyebrow">Why go</p><h2>What makes it worth your time</h2>
            {listing.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

            <section className="explore-profile__highlights"><p className="eyebrow">The useful bits</p><h2>Good to know before you go</h2><ul>{listing.highlights.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section className="explore-profile__visit"><p className="eyebrow">Your first move</p><h2>How to visit</h2><p>{listing.howToVisit}</p><div><strong>One more thing</strong><p>{listing.goodToKnow}</p></div><a className="button" href={listing.website} target="_blank" rel="noreferrer">Open official information ↗</a></section>
            <section className="event-detail__transport"><p className="eyebrow">Getting there</p><h2>Choose your route</h2><div>{listing.transport.map((option) => <section key={option.mode}><strong>{option.mode}</strong><p>{option.advice}</p></section>)}</div><a className="text-link" href="https://www.hsl.fi/en" target="_blank" rel="noreferrer">Open the HSL Journey Planner <span aria-hidden="true">↗</span></a></section>
          </article>
          <aside className="explore-profile__aside">
            <div className="facts"><div><strong>Access</strong><span>{listing.access}</span></div><div><strong>Price</strong><span>{listing.priceNote}</span></div><div><strong>Where</strong><span>{listing.area}<br />{listing.address}</span></div><div><strong>Setting</strong><span>{listing.indoor ? 'Indoor or mostly indoor' : 'Outdoor or mostly outdoor'}</span></div><div><strong>Season</strong><span>{listing.allYear ? 'Available all year' : 'Seasonal or weather dependent'}</span></div><a className="button" href={listing.website} target="_blank" rel="noreferrer">Visit official website ↗</a></div>
            <div className="explore-verification"><strong>Official source checked</strong><p>This independent guide was built from the venue or responsible city service&apos;s current information.</p><small>Source: {listing.sourceName}<br />Checked {listing.lastChecked}</small></div>
          </aside>
        </div>
      </div>
    </main>
  )
}

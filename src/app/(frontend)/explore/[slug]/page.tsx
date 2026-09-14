import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { exploreListings, getExploreListing } from '@/data/explore'
import { JsonLd } from '@/components/JsonLd'
import { ShareButton } from '@/components/ShareButton'
import { absoluteUrl, breadcrumbJsonLd, socialMetadata } from '@/lib/seo'

const seoOverrides: Record<string, { title: string; description: string }> = {
  kiasma: {
    title: 'Kiasma Helsinki: free entry, tickets and visiting',
    description: 'Plan a visit to Kiasma in Helsinki, including first-Friday free entry, ticket options, opening information, English tours and how to get there.',
  },
  sompasauna: {
    title: 'Sompasauna Helsinki: free sauna, rules and visiting',
    description: 'How to visit Helsinki’s free volunteer-run Sompasauna, including its Mustikkamaa location, what to bring, sauna etiquette, sea swimming and transport.',
  },
  'riviera-cinemas': {
    title: 'Riviera cinemas in Helsinki: tickets, locations and films',
    description: 'A practical guide to Riviera’s Helsinki cinemas, including Kallio and Punavuori locations, tickets, food, drinks and what to check before booking.',
  },
  loyly: {
    title: 'Löyly Helsinki: sauna price, booking and what to expect',
    description: 'Plan a visit to Löyly in Helsinki, including public sauna prices, booking, swimwear, towels, sea swimming and transport to Hernesaari.',
  },
  'helsinki-playground-network': {
    title: 'Helsinki playgrounds: free activities and family houses',
    description: 'Find Helsinki’s staffed playgrounds and family houses, including free activities, indoor rooms, playground clubs, Edlevo applications and the city map.',
  },
  'korkeasaari-zoo': {
    title: 'Korkeasaari Zoo Helsinki: tickets, transport and free days',
    description: 'Plan a family visit to Korkeasaari Zoo, including tickets, seasonal free Mondays, tram and walking routes, opening information and practical tips.',
  },
  'finnkino-helsinki': {
    title: 'Finnkino Helsinki: English-language films and cinemas',
    description: 'Find English-language films at Finnkino cinemas in Helsinki, including Tennispalatsi and Itis, audio and subtitle filters, tickets and family screenings.',
  },
  pihlajasaari: {
    title: 'Pihlajasaari Helsinki: ferry, beaches and island guide',
    description: 'Plan a summer trip to Pihlajasaari, including waterbus routes, beaches, picnic shelters, seasonal services, prices and what to bring.',
  },
  kuusijarvi: {
    title: 'Kuusijärvi: lake, smoke sauna and transport from Helsinki',
    description: 'Visit Kuusijärvi in Vantaa for swimming, smoke saunas and Sipoonkorpi trails, with bus information, prices, family facilities and practical tips.',
  },
  oodi: {
    title: 'Oodi Helsinki: library services, rooms and things to do',
    description: 'A practical guide to Oodi Central Library, including free entry, workspaces, children’s areas, studios, makerspace equipment, booking and Kino Regina.',
  },
}

export function generateStaticParams() {
  return exploreListings.map((listing) => ({ slug: listing.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const listing = getExploreListing(slug)
  if (!listing) return {}
  const seo = seoOverrides[listing.slug]
  return socialMetadata({ title: seo?.title || `${listing.name} | Things to do`, description: seo?.description || listing.blurb, path: `/explore/${listing.slug}/`, image: '/images/heroes/explore-suomenlinna.webp' })
}

export default async function ExploreListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const listing = getExploreListing(slug)
  if (!listing) notFound()

  return (
    <main id="main">
      <JsonLd data={[
        {
          '@context': 'https://schema.org',
          '@type': 'Place',
          name: listing.name,
          description: listing.blurb,
          url: absoluteUrl(`/explore/${listing.slug}/`),
          address: listing.address,
          sameAs: listing.website,
        },
        breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Things to do in Helsinki', path: '/explore/' },
          { name: listing.name, path: `/explore/${listing.slug}/` },
        ]),
      ]} />
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
            {listing.slug === 'oodi' && <section className="explore-profile__visit"><p className="eyebrow">Looking for the cinema?</p><h2>Kino Regina is inside Oodi.</h2><p>The National Audiovisual Institute runs the cinema separately from the library. Check the individual film language and subtitle details before booking.</p><Link className="text-link" href="/explore/kino-regina/">Open the Kino Regina guide <span aria-hidden="true">→</span></Link></section>}
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

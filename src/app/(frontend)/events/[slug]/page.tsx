import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { EventLocationMap } from '@/components/EventsMap'
import { JsonLd } from '@/components/JsonLd'
import { ShareButton } from '@/components/ShareButton'
import { getEvent } from '@/lib/content'
import { absoluteUrl, breadcrumbJsonLd, defaultSocialImage } from '@/lib/seo'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const event = await getEvent(slug)
  if (!event) return {}
  return {
    title: event.title,
    description: event.blurb,
    alternates: { canonical: `/events/${event.slug}/` },
    openGraph: { title: event.title, description: event.blurb, type: 'website', url: `/events/${event.slug}/`, images: [defaultSocialImage] },
    twitter: { card: 'summary_large_image', title: event.title, description: event.blurb, images: [defaultSocialImage] },
  }
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = await getEvent(slug)
  if (!event) notFound()

  return (
    <main id="main"><div className="shell detail-shell event-detail">
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'Event', name: event.title, description: event.blurb, startDate: event.startDate, endDate: event.endDate, eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode', eventStatus: 'https://schema.org/EventScheduled', url: absoluteUrl(`/events/${event.slug}/`), image: defaultSocialImage, location: { '@type': 'Place', name: event.location, address: { '@type': 'PostalAddress', streetAddress: event.address, addressLocality: 'Helsinki', addressCountry: 'FI' } }, organizer: { '@type': 'Organization', name: event.sourceName, url: event.sourceUrl }, ...(event.free ? { offers: { '@type': 'Offer', price: 0, priceCurrency: 'EUR', availability: 'https://schema.org/InStock', url: event.sourceUrl } } : {}) },
        breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Events', path: '/events/' }, { name: event.title, path: `/events/${event.slug}/` }]),
      ]} />
      <Link className="back-link" href="/events/">← All Helsinki events</Link>
      <header className="event-detail__header">
        <div><div className="event-detail__kicker"><span>{event.category}</span>{event.free && <span>Free</span>}{event.familyFriendly && <span>Family-friendly</span>}</div><h1>{event.title}</h1><p>{event.blurb}</p><div className="detail-share"><ShareButton contentType="event" path={`/events/${event.slug}/`} title={event.title} text={event.blurb} /></div></div>
        <div className="event-detail__when"><strong>{event.dateLabel}</strong><span>{event.timeLabel}</span></div>
      </header>
      <div className="event-detail__layout">
        <article className="event-detail__story">
          <h2>Why it’s worth going</h2>
          {event.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="event-detail__transport"><p className="eyebrow">Getting there</p><h2>Choose your route</h2><div>{event.transport.map((option) => <section key={option.mode}><strong>{option.mode}</strong><p>{option.advice}</p></section>)}</div><a className="text-link" href="https://www.hsl.fi/en/journey-planner" target="_blank" rel="noreferrer">Open the HSL Journey Planner <span aria-hidden="true">↗</span></a></div>
        </article>
        <aside className="event-detail__aside">
          <EventLocationMap event={event} />
          <div className="event-detail__facts">
            <div><strong>When</strong><span>{event.dateLabel}<br />{event.timeLabel}</span></div>
            <div><strong>Where</strong><span>{event.location}<br />{event.address}</span></div>
            <div><strong>Cost</strong><span>{event.price}</span></div>
            {event.ageNote && <div><strong>Age guidance</strong><span>{event.ageNote}</span></div>}
            <div><strong>Before you go</strong><span>{event.bookingNote}</span></div>
            <a className="button" href={event.sourceUrl} target="_blank" rel="noreferrer">Check official details ↗</a>
            <small>Source: {event.sourceName}<br />Checked {event.lastChecked}</small>
          </div>
        </aside>
      </div>
    </div></main>
  )
}

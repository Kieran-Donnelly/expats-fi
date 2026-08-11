import type { Metadata } from 'next'
import Link from 'next/link'

import { EventCard } from '@/components/EventCard'
import { eventCategories, getUpcomingEvents } from '@/data/events'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'What’s on in Helsinki',
  description: 'Discover upcoming events, festivals, markets and gatherings in Helsinki—with clear practical details and transport tips.',
}

export default async function EventsPage({ searchParams }: { searchParams: Promise<{ category?: string; cost?: string; q?: string }> }) {
  const { category = '', cost = '', q = '' } = await searchParams
  const allEvents = getUpcomingEvents()
  const query = q.trim().toLocaleLowerCase('en')
  const filteredEvents = allEvents.filter((event) => {
    if (category && event.category !== category) return false
    if (cost === 'free' && !event.free) return false
    if (cost === 'family' && !event.familyFriendly) return false
    if (query && !`${event.title} ${event.blurb} ${event.location} ${event.district} ${event.category}`.toLocaleLowerCase('en').includes(query)) return false
    return true
  })
  const featured = allEvents.find((event) => event.featured) || allEvents[0]
  const branches = [
    ...eventCategories.map((item) => ({
      count: allEvents.filter((event) => event.category === item).length,
      href: `/events/?category=${encodeURIComponent(item)}`,
      label: item,
    })),
    {
      count: allEvents.filter((event) => event.familyFriendly).length,
      href: '/events/?cost=family',
      label: 'Family-friendly',
    },
  ]

  return (
    <main id="main">
      <header className="events-hero">
        <div className="shell events-hero__inner">
          <div><p className="eyebrow">Helsinki, right now</p><h1>Go somewhere. Meet someone. Find your Helsinki.</h1><p>Fresh picks for festivals, gatherings, markets and memorable nights—with the practical details you need before leaving home.</p></div>
          {featured && <div className="events-hero__spotlight"><span>Coming up</span><strong>{featured.title}</strong><p>{featured.dateLabel} · {featured.location}</p><Link href={`/events/${featured.slug}/`}>See the plan →</Link></div>}
        </div>
      </header>

      <section className="shell event-branches" aria-labelledby="browse-events-heading">
        <div className="section-heading"><div><p className="eyebrow">Choose your mood</p><h2 id="browse-events-heading">What sounds good?</h2></div></div>
        <div className="event-branch-grid">
          {branches.map((item) => <Link key={item.label} href={item.href}><strong>{item.label}</strong><span>{item.count} upcoming {item.count === 1 ? 'pick' : 'picks'} →</span></Link>)}
        </div>
      </section>

      <section className="shell events-listing" aria-label="Upcoming Helsinki events">
        <form className="filter-form events-filter" action="/events/" method="get" role="search">
          <label>Search<input name="q" defaultValue={q} placeholder="Music, market, Malmi…" /></label>
          <label>Category<select name="category" defaultValue={category}><option value="">All categories</option>{eventCategories.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label>Good for<select name="cost" defaultValue={cost}><option value="">Everyone</option><option value="free">Free entry</option><option value="family">Families</option></select></label>
          <button type="submit">Find events</button>
        </form>
        <div className="events-listing__heading"><div><p className="eyebrow">Curated and checked</p><h2>Upcoming in Helsinki</h2></div><p>{filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found</p></div>
        {filteredEvents.length ? <div className="event-grid">{filteredEvents.map((event) => <EventCard event={event} key={event.slug} />)}</div> : <div className="empty-state"><h2>No events match those filters</h2><p>Try another category or remove a filter.</p></div>}
        <div className="event-source-note"><strong>Plans can change.</strong><p>We link every listing to its organiser or a trusted city source. Check the official page before travelling or buying a ticket.</p></div>
      </section>
    </main>
  )
}

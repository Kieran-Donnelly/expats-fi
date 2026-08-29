import type { Metadata } from 'next'
import Link from 'next/link'

import { EventCard } from '@/components/EventCard'
import { EventsMap } from '@/components/EventsMap'
import { HeroBackdrop } from '@/components/HeroBackdrop'
import { eventCategories } from '@/data/events'
import { getEvents } from '@/lib/content'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'What’s on in Helsinki',
  description: 'Discover upcoming events, festivals, markets and gatherings in Helsinki, with clear practical details and transport tips.',
}

export default async function EventsPage({ searchParams }: { searchParams: Promise<{ category?: string; cost?: string; q?: string }> }) {
  const { category = '', cost = '', q = '' } = await searchParams
  const allEvents = await getEvents({ upcoming: true })
  const query = q.trim().toLocaleLowerCase('en')
  const filteredEvents = allEvents.filter((event) => {
    if (category && event.category !== category) return false
    if (cost === 'free' && !event.free) return false
    if (cost === 'family' && !event.familyFriendly) return false
    if (query && !`${event.title} ${event.blurb} ${event.location} ${event.district} ${event.category}`.toLocaleLowerCase('en').includes(query)) return false
    return true
  })
  const featured = allEvents.find((event) => event.featured) || allEvents[0]
  const resultCopy = category
    ? { eyebrow: category, title: `${category} coming up in Helsinki`, intro: 'A focused look at what is happening, with the location and practical details ready.' }
    : cost === 'family'
      ? { eyebrow: 'Family-friendly', title: 'Events that work with the kids', intro: 'Days out and happenings where bringing the younger crew makes sense.' }
      : cost === 'free'
        ? { eyebrow: 'Free entry', title: 'Good plans that cost nothing to enter', intro: 'Markets, gatherings and city happenings without the ticket price.' }
        : q
          ? { eyebrow: 'Search results', title: `Matches for “${q}”`, intro: 'The closest matches from the current Helsinki calendar.' }
          : { eyebrow: 'Curated and checked', title: 'Upcoming in Helsinki', intro: 'Browse everything coming up or choose a category that suits the day.' }
  const hasFilters = Boolean(category || cost || q)
  const branches = [
    ...eventCategories.map((item) => ({
      count: allEvents.filter((event) => event.category === item).length,
      href: `/events/?category=${encodeURIComponent(item)}#events-listing`,
      label: item,
      active: category === item,
    })),
    {
      count: allEvents.filter((event) => event.familyFriendly).length,
      href: '/events/?cost=family#events-listing',
      label: 'Family-friendly',
      active: cost === 'family',
    },
  ]

  return (
    <main id="main">
      <header className="events-hero photo-hero photo-hero--dark">
        <HeroBackdrop src="/images/heroes/events-evening-gathering.webp" position="center 48%" />
        <div className="shell events-hero__inner">
          <div><p className="eyebrow">Helsinki, right now</p><h1>Go somewhere. Meet someone. Find your Helsinki.</h1><p>Fresh picks for festivals, gatherings, markets and memorable nights, with the practical details you need before leaving home.</p></div>
          {featured && <div className="events-hero__spotlight"><span>Coming up</span><strong>{featured.title}</strong><p>{featured.dateLabel} · {featured.location}</p><Link href={`/events/${featured.slug}/`}>See the plan →</Link></div>}
        </div>
      </header>

      <section className="shell event-branches" aria-labelledby="browse-events-heading">
        <div className="section-heading"><div><p className="eyebrow">Choose your mood</p><h2 id="browse-events-heading">What sounds good?</h2></div></div>
        <div className="event-branch-grid">
          {branches.map((item) => <Link key={item.label} href={item.href} aria-current={item.active ? 'page' : undefined}><strong>{item.label}</strong><span>{item.count} upcoming {item.count === 1 ? 'pick' : 'picks'} →</span></Link>)}
        </div>
      </section>

      <section className="shell events-listing filter-target" id="events-listing" aria-label="Upcoming Helsinki events">
        <div className="events-listing__heading"><div className="filter-results-copy"><p className="eyebrow">{resultCopy.eyebrow}</p><h2>{resultCopy.title}</h2><p>{resultCopy.intro}</p></div><div className="filter-results-status"><p aria-live="polite">{filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found</p>{hasFilters && <Link href="/events/#events-listing">Show everything</Link>}</div></div>
        <form className="filter-form events-filter" action="/events/#events-listing" method="get" role="search">
          <label>Search<input name="q" defaultValue={q} placeholder="Music, market, Malmi…" /></label>
          <label>Category<select name="category" defaultValue={category}><option value="">All categories</option>{eventCategories.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label>Good for<select name="cost" defaultValue={cost}><option value="">Everyone</option><option value="free">Free entry</option><option value="family">Families</option></select></label>
          <button type="submit">Find events</button>
        </form>
        <EventsMap events={filteredEvents} />
        {filteredEvents.length ? <div className="event-grid">{filteredEvents.map((event) => <EventCard event={event} key={event.slug} />)}</div> : <div className="empty-state"><h2>No events match those filters</h2><p>Try another category or remove a filter.</p></div>}
        <div className="event-source-note"><strong>Plans can change.</strong><p>We link every listing to its organiser or a trusted city source. Check the official page before travelling or buying a ticket.</p></div>
      </section>
    </main>
  )
}

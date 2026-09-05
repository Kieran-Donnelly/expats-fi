import type { Metadata } from 'next'
import Link from 'next/link'

import { EventCard } from '@/components/EventCard'
import { HeroBackdrop } from '@/components/HeroBackdrop'
import { RelatedBusinesses } from '@/components/RelatedBusinesses'
import { SportsCard } from '@/components/SportsCard'
import { SportsMap } from '@/components/SportsMap'
import { sportsCategories, sportsListings, sportsListingTypes } from '@/data/sports'
import { getEvents } from '@/lib/content'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Sports and activities in Helsinki',
  description: 'Find international sports clubs, beginner-friendly sessions, courses and places to get active around Helsinki.',
  alternates: { canonical: '/sports/' },
}

export default async function SportsPage({ searchParams }: { searchParams: Promise<{ type?: string; sport?: string; fit?: string; q?: string }> }) {
  const [{ type = '', sport = '', fit = '', q = '' }, upcomingEvents] = await Promise.all([
    searchParams,
    getEvents({ upcoming: true }),
  ])
  const query = q.trim().toLocaleLowerCase('en')
  const filteredListings = sportsListings.filter((listing) => {
    if (type && listing.type !== type) return false
    if (sport && listing.category !== sport) return false
    if (fit === 'beginner' && !listing.beginnerFriendly) return false
    if (fit === 'family' && !listing.familyFriendly) return false
    const searchable = `${listing.name} ${listing.type} ${listing.category} ${listing.sports.join(' ')} ${listing.area} ${listing.blurb}`.toLocaleLowerCase('en')
    if (query && !searchable.includes(query)) return false
    return true
  })
  const sportsEvents = upcomingEvents.filter((event) => event.category === 'Sports & outdoors').slice(0, 6)
  const resultCopy = type === 'Club & team'
    ? { eyebrow: 'Clubs & teams', title: 'Find a team to train with', intro: 'Regular training, familiar faces and a proper reason to get out of the house each week.' }
    : type === 'Social session'
      ? { eyebrow: 'Social sessions', title: 'Move first. Meet people naturally.', intro: 'Relaxed runs, games and weekly sessions where turning up matters more than already being brilliant.' }
      : type === 'Course & training'
        ? { eyebrow: 'Classes & training', title: 'Learn something properly', intro: 'Coached sessions and courses for building confidence, technique and a new weekly routine.' }
        : type === 'Venue & facility'
          ? { eyebrow: 'Places to play', title: 'Find somewhere to get moving', intro: 'Pools, pitches, courts, climbing walls and public facilities around Helsinki.' }
          : fit === 'family'
            ? { eyebrow: 'Family & children', title: 'Get the younger crew moving', intro: 'Clubs, classes and places that make sport easier to enjoy as a family.' }
            : fit === 'beginner'
              ? { eyebrow: 'Easy starts', title: 'Beginner-friendly ways to join in', intro: 'Options with a proper first-timer welcome, a trial session or equipment you can borrow.' }
              : sport
                ? { eyebrow: sport, title: `${sport} around Helsinki`, intro: 'Clubs, sessions and places to play, collected in one useful spot.' }
                : q
                  ? { eyebrow: 'Search results', title: `Matches for “${q}”`, intro: 'The closest matches from our growing sports directory.' }
                  : { eyebrow: 'A growing Helsinki directory', title: 'What do you fancy?', intro: 'Browse the full collection or use the filters to find something that fits your level and week.' }
  const hasFilters = Boolean(type || sport || fit || q)
  const branches = [
    { label: 'Clubs & teams', detail: 'Train regularly and find your people', href: '/sports/?type=Club%20%26%20team#sports-directory', active: type === 'Club & team' },
    { label: 'Social sessions', detail: 'Move first, make friends naturally', href: '/sports/?type=Social%20session#sports-directory', active: type === 'Social session' },
    { label: 'Classes & training', detail: 'Learn properly from the beginning', href: '/sports/?type=Course%20%26%20training#sports-directory', active: type === 'Course & training' },
    { label: 'Places to play', detail: 'Pools, parks, walls and facilities', href: '/sports/?type=Venue%20%26%20facility#sports-directory', active: type === 'Venue & facility' },
    { label: 'Family & children', detail: 'Options that work for younger movers', href: '/sports/?fit=family#sports-directory', active: fit === 'family' },
    { label: 'Sports events', detail: 'Try, watch or join something upcoming', href: '/events/?category=Sports%20%26%20outdoors#events-listing', active: false },
  ]

  return (
    <main id="main">
      <header className="sports-hero photo-hero photo-hero--dark">
        <HeroBackdrop src="/images/heroes/sports-rugby-team-v2.webp" position="center 48%" />
        <div className="shell sports-hero__inner">
          <div>
            <p className="eyebrow">Sports & activities</p>
            <h1>Find your team. Try something new. Get moving.</h1>
            <p>Helsinki clubs, social sessions, classes and places to play, with honest notes on language, level, cost and what to do before turning up.</p>
          </div>
          <aside className="sports-hero__starter">
            <span>New to the city?</span>
            <strong>Start where beginners are expected.</strong>
            <p>We have marked the options where borrowed equipment, a free trial or a proper first-timer welcome makes joining less awkward.</p>
            <Link href="/sports/?fit=beginner#sports-directory">Show me the easy starts →</Link>
          </aside>
        </div>
      </header>

      <section className="shell sports-branches" aria-labelledby="sports-branches-heading">
        <div className="section-heading">
          <div><p className="eyebrow">Choose your way in</p><h2 id="sports-branches-heading">More than a list of clubs</h2></div>
          <p className="sports-branches__intro">Some people want a team. Others just want a pool, a weekly run or somewhere the kids can burn off steam.</p>
        </div>
        <div className="sports-branch-grid">
          {branches.map((branch, index) => (
            <Link key={branch.label} href={branch.href} aria-current={branch.active ? 'page' : undefined}>
              <span>0{index + 1}</span><strong>{branch.label}</strong><small>{branch.detail}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="sports-directory filter-target" id="sports-directory" aria-label="Sports and activities directory">
        <div className="shell section">
          <div className="section-heading sports-directory__heading">
            <div className="filter-results-copy"><p className="eyebrow">{resultCopy.eyebrow}</p><h2>{resultCopy.title}</h2><p>{resultCopy.intro}</p></div>
            <div className="filter-results-status"><p aria-live="polite">{filteredListings.length} {filteredListings.length === 1 ? 'option' : 'options'} found</p>{hasFilters && <Link href="/sports/#sports-directory">Show everything</Link>}</div>
          </div>
          <form className="filter-form sports-filter" action="/sports/#sports-directory" method="get" role="search" data-analytics-event="search_submitted" data-analytics-section="sports">
            <label>Search<input name="q" defaultValue={q} placeholder="Rugby, running, swimming…" /></label>
            <label>Kind<select name="type" defaultValue={type}><option value="">Everything</option>{sportsListingTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>Sport<select name="sport" defaultValue={sport}><option value="">All sports</option>{sportsCategories.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>Good for<select name="fit" defaultValue={fit}><option value="">Everyone</option><option value="beginner">Beginners</option><option value="family">Families</option></select></label>
            <button type="submit">Find a fit</button>
          </form>
          <SportsMap listings={filteredListings} />
          {filteredListings.length ? <div className="sports-grid">{filteredListings.map((listing) => <SportsCard key={listing.slug} listing={listing} />)}</div> : <div className="empty-state"><h2>No exact match yet</h2><p>Try removing one filter. We are starting in Helsinki and will keep adding more sports, clubs and areas.</p></div>}
          <div className="sports-source-note">
            <div><strong>{sportsListings.length} ways to get moving, and growing.</strong><p>Official facilities and public events are checked against their organisers. Club details come from each club’s current information, with clear notes where English support should be confirmed before joining.</p></div>
            <a href="mailto:hello@expats.fi?subject=Sports%20listing%20for%20Expats.fi">Suggest a club or correction</a>
          </div>
        </div>
      </section>

      <RelatedBusinesses
        eyebrow="Expat-owned training"
        title="Prefer a coach who understands the newcomer bit too?"
        intro="Meet international founders building welcoming places to train, move and find a regular crew in Helsinki."
        categories={['Fitness & training', 'Gyms']}
        directoryCategory="Health & wellbeing"
      />

      {sportsEvents.length > 0 && (
        <section className="section shell home-events" aria-labelledby="sports-events-heading">
          <div className="section-heading">
            <div><p className="eyebrow">Coming up</p><h2 id="sports-events-heading">Try it, watch it or cheer loudly.</h2></div>
            <Link className="text-link" href="/events/?category=Sports%20%26%20outdoors#events-listing">All sports events <span aria-hidden="true">→</span></Link>
          </div>
          <div className="event-grid">{sportsEvents.map((event) => <EventCard event={event} key={event.slug} />)}</div>
        </section>
      )}
    </main>
  )
}

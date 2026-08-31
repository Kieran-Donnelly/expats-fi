import type { Metadata } from 'next'
import Link from 'next/link'

import { ExploreCard } from '@/components/ExploreCard'
import { HeroBackdrop } from '@/components/HeroBackdrop'
import { exploreCategories, exploreFreeDates, exploreListings, exploreMemberships } from '@/data/explore'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Things to do in Helsinki',
  description: 'Find museums, family attractions, cinemas, beaches, islands, saunas, libraries and free days around Helsinki, with clear transport and joining advice.',
  alternates: { canonical: '/explore/' },
}

export default async function ExplorePage({ searchParams }: { searchParams: Promise<{ category?: string; cost?: string; fit?: string; setting?: string; q?: string }> }) {
  const { category = '', cost = '', fit = '', setting = '', q = '' } = await searchParams
  const query = q.trim().toLocaleLowerCase('en')
  const filtered = exploreListings.filter((listing) => {
    if (category && listing.category !== category) return false
    if (cost === 'free' && listing.access !== 'Free' && listing.access !== 'Free option') return false
    if (fit === 'family' && !listing.familyFriendly) return false
    if (setting === 'indoor' && !listing.indoor) return false
    if (setting === 'outdoor' && listing.indoor) return false
    const searchable = `${listing.name} ${listing.category} ${listing.area} ${listing.tags.join(' ')} ${listing.blurb}`.toLocaleLowerCase('en')
    return !query || searchable.includes(query)
  })
  const activeBranch = branchesForCopy(category)
  const resultCopy = category
    ? { eyebrow: category, title: `${category} around Helsinki`, intro: activeBranch?.note || 'Useful places, checked details and a clear reason to go.' }
    : cost === 'free'
      ? { eyebrow: 'Free things to do', title: 'A good Helsinki day without the admission fee', intro: 'Always-free places and attractions with a genuine free option.' }
      : fit === 'family'
        ? { eyebrow: 'Family favourites', title: 'Days out that work with the kids', intro: 'Places where younger visitors are expected and the practical bits are easier.' }
        : setting === 'indoor'
          ? { eyebrow: 'Indoors', title: 'Good plans for less-than-perfect weather', intro: 'Museums, libraries, culture and places where the forecast cannot ruin the day.' }
          : setting === 'outdoor'
            ? { eyebrow: 'Outdoors', title: 'Get outside and see more of Helsinki', intro: 'Islands, beaches, nature and open-air places worth leaving the sofa for.' }
            : q
              ? { eyebrow: 'Search results', title: `Matches for “${q}”`, intro: 'The closest matches from our growing Helsinki guide.' }
              : { eyebrow: 'Checked against official sources', title: 'Find somewhere worth going', intro: 'Browse the full collection or narrow it down by mood, price and setting.' }
  const hasFilters = Boolean(category || cost || fit || setting || q)
  const branches = [
    { label: 'Museums & art', note: 'Free days, classics and big ideas' },
    { label: 'Family favourites', note: 'Zoos, rides and places to play' },
    { label: 'Islands & nature', note: 'Boats, lakes and proper forest' },
    { label: 'Public saunas', note: 'Free DIY löyly to design saunas' },
    { label: 'Beaches & swimming', note: 'Sea, sand and freshwater dips' },
    { label: 'Libraries & culture', note: 'Free spaces that do far more' },
  ] as const

  return (
    <main id="main">
      <header className="explore-hero photo-hero">
        <HeroBackdrop src="/images/heroes/explore-suomenlinna.webp" position="center 48%" />
        <div className="shell explore-hero__inner">
          <div>
            <p className="eyebrow">Helsinki, beyond the paperwork</p>
            <h1>Go out. Look around. Make this place yours.</h1>
            <p>Museums, islands, cinemas, beaches, saunas, playgrounds and brilliant public spaces, with the price, free days and transport explained before you leave home.</p>
          </div>
          <aside className="explore-hero__aside">
            <span>Best free first day</span>
            <strong>City Museum → Senate Square → Oodi</strong>
            <p>Three central stops, no admission cost and enough indoor shelter to survive a very Helsinki weather forecast.</p>
            <Link href="/explore/?cost=free#browse">Show all free options →</Link>
          </aside>
        </div>
      </header>

      <nav className="explore-jump" aria-label="Explore page sections">
        <div className="shell"><strong>Jump to</strong><a href="#day-trips">Day trips</a><a href="#browse">Browse places</a><a href="#free-days">Free days</a><a href="#join">Cards & joining</a></div>
      </nav>

      <section className="shell explore-day-trip-callout" id="day-trips" aria-labelledby="day-trip-callout-heading">
        <div>
          <p className="eyebrow">Need a change of scene?</p>
          <h2 id="day-trip-callout-heading">Leave Helsinki for a few hours.</h2>
          <p>Car-free routes to forest, islands, old towns and the coast, with the realistic travel time and the awkward bits explained first.</p>
        </div>
        <Link href="/explore/day-trips/">Open the day-trip guide →</Link>
      </section>

      <section className="shell explore-branches" aria-labelledby="explore-branches-heading">
        <div className="section-heading"><div><p className="eyebrow">Choose a direction</p><h2 id="explore-branches-heading">What kind of day are we having?</h2></div><p>Start with a mood. The filters below handle the practical details.</p></div>
        <div className="explore-branch-grid">
          {branches.map((branch, index) => <Link key={branch.label} href={`/explore/?category=${encodeURIComponent(branch.label)}#browse`} aria-current={category === branch.label ? 'page' : undefined}><span>0{index + 1}</span><strong>{branch.label}</strong><small>{branch.note}</small></Link>)}
        </div>
      </section>

      <section className="explore-directory" id="browse" aria-label="Helsinki attractions directory">
        <div className="shell section">
          <div className="section-heading"><div className="filter-results-copy"><p className="eyebrow">{resultCopy.eyebrow}</p><h2>{resultCopy.title}</h2><p>{resultCopy.intro}</p></div><div className="filter-results-status"><p className="explore-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'place' : 'places'} found</p>{hasFilters && <Link href="/explore/#browse">Show everything</Link>}</div></div>
          <form className="filter-form explore-filter" action="/explore/#browse" method="get" role="search" data-analytics-event="search_submitted" data-analytics-section="explore">
            <label>Search<input name="q" defaultValue={q} placeholder="Sauna, island, museum…" /></label>
            <label>Category<select name="category" defaultValue={category}><option value="">Everything</option>{exploreCategories.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>Cost<select name="cost" defaultValue={cost}><option value="">Any price</option><option value="free">Free or has a free option</option></select></label>
            <label>Good for<select name="fit" defaultValue={fit}><option value="">Everyone</option><option value="family">Families</option></select></label>
            <label>Setting<select name="setting" defaultValue={setting}><option value="">Any setting</option><option value="indoor">Indoors</option><option value="outdoor">Outdoors</option></select></label>
            <button type="submit">Find a plan</button>
          </form>
          {filtered.length ? <div className="explore-grid">{filtered.map((listing) => <ExploreCard key={listing.slug} listing={listing} />)}</div> : <div className="empty-state"><h2>No exact match yet</h2><p>Try removing one filter or searching by a broader word such as museum, beach or family.</p></div>}
          <div className="explore-source-note"><strong>Prices and schedules move.</strong><p>Every listing links to an official venue or city source. Check that page before travelling, especially for ferries, swimming conditions, seasonal attractions and free days.</p></div>
        </div>
      </section>

      <section className="shell explore-free section" id="free-days" aria-labelledby="free-days-heading">
        <div className="explore-free__intro"><p className="eyebrow">Save the dates</p><h2 id="free-days-heading">Upcoming free days in 2026</h2><p>These are the useful dates still ahead this year. Regular always-free places are in the main directory.</p></div>
        <div className="explore-free__list">{exploreFreeDates.map((item) => <article key={`${item.date}-${item.place}`}><time>{item.date}</time><div><strong>{item.place}</strong><p>{item.detail}</p></div></article>)}</div>
      </section>

      <section className="explore-memberships" id="join" aria-labelledby="memberships-heading">
        <div className="shell section">
          <div className="explore-memberships__heading"><div><p className="eyebrow">How to actually join</p><h2 id="memberships-heading">Cards, passes and the bits nobody explains</h2></div><p>A library card is for residents. A Helsinki Card is mainly for concentrated sightseeing. Kaikukortti is not a general discount card. Here is what each one really does.</p></div>
          <div className="membership-grid">{exploreMemberships.map((item, index) => <article key={item.name}><span className="membership-grid__number">0{index + 1}</span><p>{item.cost}</p><h3>{item.name}</h3><strong>Best for</strong><p>{item.bestFor}</p><ol>{item.steps.map((step) => <li key={step}>{step}</li>)}</ol><small>{item.note}</small><a href={item.website} target="_blank" rel="noreferrer">Open official instructions <span>↗</span></a></article>)}</div>
        </div>
      </section>
    </main>
  )
}

function branchesForCopy(category: string) {
  const notes: Record<string, string> = {
    'Museums & art': 'Free days, Helsinki classics and big ideas, all with the practical details attached.',
    'Family favourites': 'Zoos, rides, play spaces and days out that work with younger visitors.',
    'Islands & nature': 'Boats, lakes, proper forest and easy ways to get beyond the city streets.',
    'Public saunas': 'From free DIY löyly to design saunas with everything laid on.',
    'Beaches & swimming': 'Sea, sand, freshwater dips and places to swim through the seasons.',
    'Libraries & culture': 'Free public spaces that do much more than lend books.',
  }
  return category ? { note: notes[category] } : undefined
}

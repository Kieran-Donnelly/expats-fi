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
            <Link href="/explore/?cost=free">Show all free options →</Link>
          </aside>
        </div>
      </header>

      <nav className="explore-jump" aria-label="Explore page sections">
        <div className="shell"><strong>Jump to</strong><a href="#browse">Browse places</a><a href="#free-days">Free days</a><a href="#join">Cards & joining</a></div>
      </nav>

      <section className="shell explore-branches" aria-labelledby="explore-branches-heading">
        <div className="section-heading"><div><p className="eyebrow">Choose a direction</p><h2 id="explore-branches-heading">What kind of day are we having?</h2></div><p>Start with a mood. The filters below handle the practical details.</p></div>
        <div className="explore-branch-grid">
          {branches.map((branch, index) => <Link key={branch.label} href={`/explore/?category=${encodeURIComponent(branch.label)}`}><span>0{index + 1}</span><strong>{branch.label}</strong><small>{branch.note}</small></Link>)}
        </div>
      </section>

      <section className="explore-directory" id="browse" aria-label="Helsinki attractions directory">
        <div className="shell section">
          <div className="section-heading"><div><p className="eyebrow">Checked against official sources</p><h2>Find somewhere worth going</h2></div><p className="explore-count">{filtered.length} {filtered.length === 1 ? 'place' : 'places'} found</p></div>
          <form className="filter-form explore-filter" action="/explore/" method="get" role="search">
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
        <div className="explore-free__intro"><p className="eyebrow">Save the dates</p><h2 id="free-days-heading">Upcoming free days in 2026</h2><p>These are the useful ones still ahead from 24 August. Regular always-free places are in the main directory.</p></div>
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

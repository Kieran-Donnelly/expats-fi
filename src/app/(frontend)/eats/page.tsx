import type { Metadata } from 'next'
import Link from 'next/link'

import { EatsCard } from '@/components/EatsCard'
import { EatsMap } from '@/components/EatsMap'
import { SectionHero } from '@/components/SectionHero'
import { eatAreas, eatKinds, eatMoods, eatSpots } from '@/data/eats'
import { finlandFoodGuides } from '@/data/finland-food-guides'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Food and drink in Finland: local dishes, recipes and Helsinki favourites',
  description: 'A warm guide to Finnish food, seasonal favourites, practical recipes and places to eat around Helsinki.',
  alternates: { canonical: '/eats/' },
}

type EatsSearch = { area?: string; kind?: string; mood?: string; price?: string; q?: string }

export default async function EatsPage({ searchParams }: { searchParams: Promise<EatsSearch> }) {
  const { area = '', kind = '', mood = '', price = '', q = '' } = await searchParams
  const query = q.trim().toLocaleLowerCase('en')
  const filtered = eatSpots.filter((spot) => {
    if (area && spot.area !== area) return false
    if (kind && spot.kind !== kind) return false
    if (mood && !spot.moods.includes(mood as (typeof eatMoods)[number])) return false
    if (price && spot.price !== price) return false
    const searchable = `${spot.name} ${spot.area} ${spot.neighbourhood} ${spot.kind} ${spot.moods.join(' ')} ${spot.blurb}`.toLocaleLowerCase('en')
    return !query || searchable.includes(query)
  })

  const resultCopy = mood
    ? { eyebrow: mood, title: `${mood} around Helsinki`, intro: 'A focused shortlist with the address, price and honest reason each place made the guide.' }
    : area
      ? { eyebrow: area, title: `Good food around ${area}`, intro: 'Places worth knowing when you are already in the neighbourhood.' }
      : kind
        ? { eyebrow: kind, title: `${kind} spots worth a look`, intro: 'A useful shortlist from our growing food and drink guide.' }
        : q
          ? { eyebrow: 'Search results', title: `Matches for “${q}”`, intro: 'The closest matches from our current Helsinki collection.' }
          : { eyebrow: 'The first collection', title: 'Find a place that fits the day.', intro: 'Browse everything or narrow the list by area, mood, kind and budget.' }
  const hasFilters = Boolean(area || kind || mood || price || q)

  const starts = [
    { label: 'Cute café', note: 'Coffee, cake and somewhere worth staying', href: '/eats/?mood=Coffee%20%26%20something%20sweet#helsinki-food', active: mood === 'Coffee & something sweet' },
    { label: 'Brunch', note: 'For slow starts and breakfast becoming lunch', href: '/eats/?mood=Breakfast%20%26%20brunch#helsinki-food', active: mood === 'Breakfast & brunch' },
    { label: 'Cheap-ish and quick', note: 'Good food without turning it into an occasion', href: '/eats/?mood=Quick%20bite&price=%E2%82%AC#helsinki-food', active: mood === 'Quick bite' && price === '€' },
    { label: 'Proper dinner', note: 'A meal you plan the evening around', href: '/eats/?mood=Proper%20dinner#helsinki-food', active: mood === 'Proper dinner' },
    { label: 'Finnish flavours', note: 'A better answer than sending everyone for salmon soup', href: '/eats/?mood=Finnish%20flavours#helsinki-food', active: mood === 'Finnish flavours' },
    { label: 'With the kids', note: 'Places where the whole operation feels manageable', href: '/eats/?mood=Family%20friendly#helsinki-food', active: mood === 'Family friendly' },
  ] as const

  return (
    <main id="main" className="eats-page">
      <SectionHero
        eyebrow="Food & Drink"
        title="Taste Finland. Find your next favourite."
        intro="Finnish classics, seasonal favourites, recipes worth keeping, cute cafés and neighbourhood places worth getting on a tram for. Start with the food itself or find somewhere good around Helsinki."
        noteLabel="The honest version"
        noteTitle="Not a ranking. Not a pay-to-play list."
        noteBody="These are independent editorial suggestions with a clear reason for each one. If a meal or visit is invited, we will say so plainly."
        tone="dark"
        image={{ src: '/images/heroes/food-main-herring.webp', position: 'center 50%' }}
      />

      <section className="shell eats-starts" aria-labelledby="eats-starts-heading">
        <div className="section-heading"><div><p className="eyebrow">Start with the mood</p><h2 id="eats-starts-heading">What sounds good right now?</h2></div><Link className="text-link" href="/areas/">Browse by neighbourhood <span aria-hidden="true">→</span></Link></div>
        <div className="eats-start-grid">{starts.map((item, index) => <Link href={item.href} key={item.label} aria-current={item.active ? 'page' : undefined}><span>0{index + 1}</span><strong>{item.label}</strong><small>{item.note}</small></Link>)}</div>
      </section>

      <section className="finland-plate" aria-labelledby="finland-plate-heading">
        <div className="shell section">
          <div className="section-heading"><div><p className="eyebrow">Finland on a Plate</p><h2 id="finland-plate-heading">The food makes more sense when you know the story.</h2></div><div><p>Classics, seasonal favourites, supermarket survival and recipes you can actually make.</p><Link className="text-link" href="/eats/finland-on-a-plate/">Open the full collection <span aria-hidden="true">→</span></Link></div></div>
          <div className="plate-guide-grid">{finlandFoodGuides.map((guide) => <article className="plate-guide-card" key={guide.slug}><div><span>{guide.number}</span><small>{guide.label}</small></div><h3><Link href={`/eats/finland-on-a-plate/${guide.slug}/`}>{guide.title}</Link></h3><p>{guide.summary}</p><Link className="text-link" href={`/eats/finland-on-a-plate/${guide.slug}/`}>Read the guide <span aria-hidden="true">→</span></Link></article>)}</div>
        </div>
      </section>

      <section className="eats-directory" id="helsinki-food" aria-label="Helsinki places to eat">
        <div className="shell section">
          <div className="section-heading eats-directory__heading">
            <div className="filter-results-copy"><p className="eyebrow">{resultCopy.eyebrow}</p><h2>{resultCopy.title}</h2><p>{resultCopy.intro}</p></div>
            <div className="filter-results-status"><p aria-live="polite">{filtered.length} {filtered.length === 1 ? 'place' : 'places'} found</p>{hasFilters && <Link href="/eats/#helsinki-food">Show everything</Link>}</div>
          </div>
          <form className="filter-form eats-filter" action="/eats/#helsinki-food" method="get" role="search" data-analytics-event="search_submitted" data-analytics-section="eats">
            <label>Search<input name="q" defaultValue={q} placeholder="Coffee, pizza, date night…" /></label>
            <label>Area<select name="area" defaultValue={area}><option value="">All areas</option>{eatAreas.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>Kind<select name="kind" defaultValue={kind}><option value="">Everything</option>{eatKinds.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>Mood<select name="mood" defaultValue={mood}><option value="">Any mood</option>{eatMoods.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>Spend<select name="price" defaultValue={price}><option value="">Any budget</option><option value="€">€</option><option value="€€">€€</option><option value="€€€">€€€</option></select></label>
            <button type="submit">Find food</button>
          </form>
          {filtered.length ? <><EatsMap spots={filtered} /><div className="eats-grid">{filtered.map((spot) => <EatsCard key={spot.slug} spot={spot} />)}</div></> : <div className="empty-state"><h2>Nothing matches every filter</h2><p>Try dropping one filter. The guide is growing, but there should still be something good nearby.</p></div>}
          <div className="eats-source-note"><div><strong>{eatSpots.length} researched places and plenty more to come.</strong><p>Hours, menus and prices change. We link you to the place or the trusted current source we used, so have a quick check before crossing town.</p></div><a href="mailto:hello@expats.fi?subject=Food%20and%20Drink%20suggestion">Suggest a place or correction</a></div>
        </div>
      </section>

      <section className="shell family-local-note">
        <div><p className="eyebrow">Food & Drink versus the directory</p><h2>Recommendations and business stories do different jobs.</h2></div>
        <p>Food & Drink is our independent guide to Finnish food and places we think are useful or interesting. The <Link className="text-link" href="/businesses/#business-directory">business directory</Link> is the opt-in home for approved profiles, founder stories and expat-owned businesses. A place can belong in either or both.</p>
      </section>
    </main>
  )
}

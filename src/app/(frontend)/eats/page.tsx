import type { Metadata } from 'next'
import Link from 'next/link'

import { EatsCard } from '@/components/EatsCard'
import { EatsMap } from '@/components/EatsMap'
import { eatAreas, eatKinds, eatMoods, eatSpots } from '@/data/eats'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Where to eat in Helsinki: cafés, cheap eats and proper dinners',
  description: 'A warm, useful Helsinki food guide for coffee, breakfast, quick bites, Finnish flavours, family meals, date nights and neighbourhood favourites.',
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

  const starts = [
    { label: 'Cute café', note: 'Coffee, cake and somewhere worth staying', href: '/eats/?mood=Coffee%20%26%20something%20sweet' },
    { label: 'Brunch', note: 'For slow starts and breakfast becoming lunch', href: '/eats/?mood=Breakfast%20%26%20brunch' },
    { label: 'Cheap-ish and quick', note: 'Good food without turning it into an occasion', href: '/eats/?mood=Quick%20bite&price=%E2%82%AC' },
    { label: 'Proper dinner', note: 'A meal you plan the evening around', href: '/eats/?mood=Proper%20dinner' },
    { label: 'Finnish flavours', note: 'A better answer than sending everyone for salmon soup', href: '/eats/?mood=Finnish%20flavours' },
    { label: 'With the kids', note: 'Places where the whole operation feels manageable', href: '/eats/?mood=Family%20friendly' },
  ] as const

  return (
    <main id="main" className="eats-page">
      <header className="eats-hero">
        <div className="shell eats-hero__inner">
          <div><p className="eyebrow">Helsinki Eats</p><h1>Where should we eat?</h1><p>Cute cafés, quick lunches, Finnish classics, lively dinners and neighbourhood places worth getting on a tram for. Pick by craving or see what is close to the bit of Helsinki you are already exploring.</p></div>
          <aside><span>The honest version</span><strong>Not a ranking. Not a pay-to-play list.</strong><p>These are independent editorial suggestions with a clear reason for each one. If a meal or visit is invited, we will say so plainly.</p></aside>
        </div>
      </header>

      <section className="shell eats-starts" aria-labelledby="eats-starts-heading">
        <div className="section-heading"><div><p className="eyebrow">Start with the mood</p><h2 id="eats-starts-heading">What sounds good right now?</h2></div><Link className="text-link" href="/areas/">Browse by neighbourhood <span aria-hidden="true">→</span></Link></div>
        <div className="eats-start-grid">{starts.map((item, index) => <Link href={item.href} key={item.label}><span>0{index + 1}</span><strong>{item.label}</strong><small>{item.note}</small></Link>)}</div>
      </section>

      <section className="eats-directory" aria-label="Helsinki places to eat">
        <div className="shell section">
          <div className="section-heading eats-directory__heading">
            <div><p className="eyebrow">The first collection</p><h2>Find a place that fits the day.</h2></div>
            <p>{filtered.length} {filtered.length === 1 ? 'place' : 'places'} found</p>
          </div>
          <form className="filter-form eats-filter" action="/eats/" method="get" role="search">
            <label>Search<input name="q" defaultValue={q} placeholder="Coffee, pizza, date night…" /></label>
            <label>Area<select name="area" defaultValue={area}><option value="">All areas</option>{eatAreas.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>Kind<select name="kind" defaultValue={kind}><option value="">Everything</option>{eatKinds.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>Mood<select name="mood" defaultValue={mood}><option value="">Any mood</option>{eatMoods.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>Spend<select name="price" defaultValue={price}><option value="">Any budget</option><option value="€">€</option><option value="€€">€€</option><option value="€€€">€€€</option></select></label>
            <button type="submit">Find food</button>
          </form>
          {filtered.length ? <><EatsMap spots={filtered} /><div className="eats-grid">{filtered.map((spot) => <EatsCard key={spot.slug} spot={spot} />)}</div></> : <div className="empty-state"><h2>Nothing matches every filter</h2><p>Try dropping one filter. The guide is growing, but there should still be something good nearby.</p></div>}
          <div className="eats-source-note"><div><strong>{eatSpots.length} researched places and plenty more to come.</strong><p>Hours, menus and prices change. We link you to the place or the trusted current source we used, so have a quick check before crossing town.</p></div><a href="mailto:listings@expats.fi?subject=Helsinki%20Eats%20suggestion">Suggest a place or correction</a></div>
        </div>
      </section>

      <section className="shell family-local-note">
        <div><p className="eyebrow">Eats versus the directory</p><h2>Recommendations and business stories do different jobs.</h2></div>
        <p>Eats is our independent guide to places we think are useful or interesting. The <Link className="text-link" href="/businesses/">business directory</Link> is the opt-in home for approved profiles, founder stories and expat-owned businesses. A place can belong in either or both.</p>
      </section>
    </main>
  )
}

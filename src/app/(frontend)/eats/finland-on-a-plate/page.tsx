import type { Metadata } from 'next'
import Link from 'next/link'

import { SectionHero } from '@/components/SectionHero'
import { finlandFoodGuides } from '@/data/finland-food-guides'

export const metadata: Metadata = {
  title: 'Finland on a Plate: Finnish food, seasons and recipes',
  description: 'A warm guide to Finnish dishes, seasonal food, supermarket essentials and straightforward recipes for salmon soup, oven pancake and bilberry pie.',
  alternates: { canonical: '/eats/finland-on-a-plate/' },
}

export default function FinlandOnAPlatePage() {
  return (
    <main id="main" className="family-hub finland-plate-hub">
      <SectionHero
        eyebrow="Finland on a Plate"
        title="Local favourites, ready-made classics and recipes worth keeping."
        intro="The food Finns wait all year for, the supermarket words that save dinner and a few proper dishes you can make without ringing somebody's grandmother."
        noteLabel="Our approach"
        noteTitle="Context first, food snobbery nowhere."
        noteBody="Traditions vary by region and family. We explain the useful starting point, link the source and leave room for the version people actually cook at home."
        tone="dark"
        image={{ src: '/images/heroes/food-hub-nordic-breakfast.webp', position: 'center 52%' }}
      />

      <section className="shell family-stages" aria-labelledby="plate-start-heading">
        <div className="section-heading"><div><p className="eyebrow">Choose your way in</p><h2 id="plate-start-heading">Start with whatever is currently in your basket.</h2></div><p>Try the classics, follow the food year, decode the supermarket or cook something properly Finnish tonight.</p></div>
        <div className="family-stage-grid">{finlandFoodGuides.map((guide) => <Link href={`/eats/finland-on-a-plate/${guide.slug}/`} key={guide.slug}><span>{guide.number}</span><strong>{guide.label}</strong><small>{guide.title}</small><i aria-hidden="true">→</i></Link>)}</div>
      </section>

      <section className="shell section family-guides" aria-labelledby="plate-guides-heading">
        <div className="section-heading"><div><p className="eyebrow">More than salmon soup</p><h2 id="plate-guides-heading">Finland served with the backstory.</h2></div><p>Friendly, researched guides that connect the dish to the season, region and ordinary life around it.</p></div>
        <div className="family-guide-grid">{finlandFoodGuides.map((guide) => <article className="family-guide-card" key={guide.slug}><div><span>{guide.number}</span><small>{guide.label}</small></div><h3><Link href={`/eats/finland-on-a-plate/${guide.slug}/`}>{guide.title}</Link></h3><p>{guide.summary}</p>{guide.tags && <div className="explore-card__tags">{guide.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}<Link className="text-link" href={`/eats/finland-on-a-plate/${guide.slug}/`}>Open the guide <span aria-hidden="true">→</span></Link></article>)}</div>
      </section>

      <section className="shell family-local-note"><div><p className="eyebrow">Ready to eat instead?</p><h2>Find the real thing around Helsinki.</h2></div><p>Use <Link className="text-link" href="/eats/?mood=Finnish%20flavours#helsinki-food">our Helsinki food guide</Link> for market halls, cafés and restaurants where somebody else can handle the washing up.</p></section>
    </main>
  )
}

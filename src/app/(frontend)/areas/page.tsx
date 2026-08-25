import type { Metadata } from 'next'
import Link from 'next/link'

import { areaGuides } from '@/data/areas'

export const metadata: Metadata = {
  title: 'Helsinki neighbourhood guides: where to eat, wander and live',
  description: 'Warm, practical guides to Helsinki neighbourhoods, with good eats, cafés, free places, easy local routes and honest notes about living there.',
  alternates: { canonical: '/areas/' },
}

const quickRoutes = [
  { label: 'Food and late nights', name: 'Kallio & Hakaniemi', detail: 'Market breakfast, bakeries, neighbourhood restaurants and excellent transport', href: '/areas/kallio-and-hakaniemi/' },
  { label: 'Design and a long wander', name: 'Punavuori', detail: 'Small shops, galleries, breakfast, quick lunches and dinner worth booking', href: '/areas/punavuori-and-the-design-district/' },
  { label: 'Culture and calm', name: 'Töölö', detail: 'Museums, parks, sport, sea air and strong café options', href: '/areas/toolo/' },
  { label: 'History and harbour', name: 'Kruununhaka & Katajanokka', detail: 'Free museums, old streets, markets, architecture and waterfront food', href: '/areas/kruununhaka-and-katajanokka/' },
  { label: 'Green and properly local', name: 'Herttoniemi & Roihuvuori', detail: 'Metro life, shoreline walks, cherry trees and neighbourhood favourites', href: '/areas/herttoniemi-and-roihuvuori/' },
  { label: 'Central and weather-proof', name: 'Kamppi & Kluuvi', detail: 'Oodi, museums, old parks and food for both rushed days and proper evenings', href: '/areas/kamppi-and-kluuvi/' },
  { label: 'Wooden and creative', name: 'Vallila & Konepaja', detail: 'Puu-Vallila, railway workshops, local cafés, films and changing events', href: '/areas/vallila-and-konepaja/' },
  { label: 'Beach and island life', name: 'Lauttasaari', detail: 'Metro convenience, coastal paths, local cafés and family beaches', href: '/areas/lauttasaari/' },
  { label: 'A proper nature day', name: 'Vuosaari & Uutela', detail: 'Metro-accessible forest, sea cliffs, family trails and harbour coffee', href: '/areas/vuosaari-and-uutela/' },
] as const

const guideGroups = [
  {
    eyebrow: 'Start central',
    title: 'Culture, streets and the easiest first wanders',
    description: 'Good when you are new, showing somebody around or want a full day without wrestling with transport.',
    slugs: ['kamppi-and-kluuvi', 'punavuori-and-the-design-district', 'toolo', 'kruununhaka-and-katajanokka'],
  },
  {
    eyebrow: 'Neighbourhood rhythm',
    title: 'Places that feel properly lived in',
    description: 'Independent cafés, local routines, handsome streets and a clearer idea of what daily life could feel like.',
    slugs: ['kallio-and-hakaniemi', 'vallila-and-konepaja', 'eira-and-ullanlinna', 'lauttasaari'],
  },
  {
    eyebrow: 'Go greener',
    title: 'Metro trips, shoreline and room to breathe',
    description: 'The areas to open when you need forest, water, family trails or a reminder that Helsinki stretches well beyond the centre.',
    slugs: ['herttoniemi-and-roihuvuori', 'arabia-and-vanhakaupunki', 'vuosaari-and-uutela'],
  },
] as const

export default function AreasPage() {
  return (
    <main id="main" className="family-hub">
      <header className="page-hero">
        <div className="shell page-hero__inner">
          <p className="eyebrow">Helsinki neighbourhoods</p>
          <h1>Good areas, good eats and a reason to get off at a different stop.</h1>
          <p>Neighbourhood guides for people who live here, have just arrived or want to show somebody around without repeating the same three places in the centre.</p>
        </div>
      </header>

      <section className="family-systems" aria-labelledby="area-mood-heading">
        <div className="shell section">
          <div className="section-heading family-systems__heading">
            <div><p className="eyebrow">Choose by mood</p><h2 id="area-mood-heading">What kind of Helsinki day do you need?</h2></div>
            <p>No definitive top-ten nonsense. Pick an area that suits the weather, budget and energy you actually have.</p>
          </div>
          <div className="family-system-grid">
            {quickRoutes.map((route) => (
              <Link href={route.href} key={route.name}>
                <small>{route.label}</small><strong>{route.name}</strong><p>{route.detail}</p><span>Open the local guide →</span>
              </Link>
            ))}
          </div>
          <div className="family-maisa-tip">
            <span>How we choose places</span>
            <div><strong>Independent suggestions, never a secret advert.</strong><p>We check that places are still operating and tell you why they may be worth your time. Paid or invited visits will always be labelled.</p></div>
            <Link href="/eats/">Browse all Helsinki Eats →</Link>
          </div>
        </div>
      </section>

      <section className="shell section family-guides" aria-labelledby="area-guides-heading">
        <div className="section-heading">
          <div><p className="eyebrow">The local guides</p><h2 id="area-guides-heading">Eleven neighbourhoods, properly explored.</h2></div>
          <p>Each guide has food for different budgets, things worth doing, a half-day route and an honest look at what living there can feel like.</p>
        </div>
        {guideGroups.map((group) => {
          const guides = group.slugs.map((slug) => areaGuides.find((guide) => guide.slug === slug)).filter(Boolean)
          const headingId = `area-group-${group.eyebrow.replaceAll(' ', '-').toLowerCase()}`
          return (
            <section className="area-guide-group" key={group.title} aria-labelledby={headingId}>
              <div className="area-guide-group__heading">
                <div><p className="eyebrow">{group.eyebrow}</p><h3 id={headingId}>{group.title}</h3></div>
                <p>{group.description}</p>
              </div>
              <div className="family-guide-grid">
                {guides.map((guide) => guide && (
                  <article className="family-guide-card" key={guide.slug}>
                    <div><span>{guide.number}</span><small>{guide.label}</small></div>
                    <h3><Link href={`/areas/${guide.slug}/`}>{guide.title}</Link></h3>
                    <p>{guide.summary}</p>
                    {guide.tags && <div className="explore-card__tags">{guide.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
                    <Link className="text-link" href={`/areas/${guide.slug}/`}>Open the guide <span aria-hidden="true">→</span></Link>
                  </article>
                ))}
              </div>
            </section>
          )
        })}
      </section>

      <section className="shell family-local-note">
        <div><p className="eyebrow">A useful distinction</p><h2>Featured is not the same as partnered.</h2></div>
        <p>These are independent editorial recommendations based on current research, trusted local sources and what makes an area useful. We do not need a business’s permission to mention publicly available details. We do ask before using its photographs, logo or supplied story.<br /><Link className="text-link" href="/explore/">Browse individual places and attractions →</Link></p>
      </section>
    </main>
  )
}

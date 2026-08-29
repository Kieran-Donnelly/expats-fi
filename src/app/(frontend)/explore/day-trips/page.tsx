import type { Metadata } from 'next'
import Link from 'next/link'

import { SectionHero } from '@/components/SectionHero'
import { dayTripGroups, dayTrips } from '@/data/day-trips'

export const metadata: Metadata = {
  title: 'Easy day trips and hidden Helsinki',
  description: 'Car-free day trips from Helsinki, nearby nature escapes and honest transport notes for Porvoo, Nuuksio, Hanko, Fiskars and more.',
  alternates: { canonical: '/explore/day-trips/' },
}

const groupCopy = {
  'Still in Helsinki': {
    id: 'nearby',
    eyebrow: 'Two hours is enough',
    title: 'A change of scene without properly leaving town.',
    intro: 'For the afternoon when you need trees, water or sea air but cannot be bothered organising a military operation.',
  },
  'Easy full day': {
    id: 'full-day',
    eyebrow: 'The sweet spot',
    title: 'Far enough to feel different. Easy enough to come home.',
    intro: 'The reliable full-day choices, with straightforward public transport and enough to do once you arrive.',
  },
  'Worth the longer ride': {
    id: 'further',
    eyebrow: 'Leave a little earlier',
    title: 'The trip is longer, but so is the reset.',
    intro: 'Coastal towns and creative villages that reward a proper day, as long as you respect the last connection home.',
  },
} as const

const quickRoutes = [
  { number: '01', label: 'A free afternoon', detail: 'Lammassaari or Seurasaari', href: '#nearby' },
  { number: '02', label: 'First proper day trip', detail: 'Porvoo, Nuuksio or Sipoonkorpi', href: '#full-day' },
  { number: '03', label: 'Culture and small towns', detail: 'Lake Tuusula, Fiskars or Tammisaari', href: '#full-day' },
  { number: '04', label: 'Make a day of it', detail: 'Hanko and the western coast', href: '#further' },
]

export default function DayTripsPage() {
  return (
    <main id="main" className="family-hub escape-hub">
      <SectionHero
        eyebrow="Easy escapes from Helsinki"
        title="Leave town for the day. Come back liking Helsinki again."
        intro="Forest, islands, old towns, beaches and quieter corners, with honest travel times and routes that do not quietly assume you own a car."
        noteLabel="No car? No problem"
        noteTitle="Start with the connection home."
        noteBody="Find the final sensible return before you leave. Then build the nice part of the day around it."
        tone="blue"
        image={{ src: '/images/heroes/day-trips-porvoo.jpg', position: 'center 52%' }}
      />

      <nav className="explore-jump" aria-label="Day-trip page sections">
        <div className="shell">
          <strong>Jump to</strong>
          <a href="#nearby">Stay nearby</a>
          <a href="#full-day">Full-day trips</a>
          <a href="#further">Go further</a>
          <a href="#trip-planner">Plan it properly</a>
        </div>
      </nav>

      <section className="shell family-stages escape-chooser" aria-labelledby="escape-chooser-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">How much day have you got?</p>
            <h2 id="escape-chooser-heading">Pick the effort level first.</h2>
          </div>
          <p>A good day trip should clear your head, not leave you stranded at a rural bus stop with four percent battery.</p>
        </div>
        <div className="family-stage-grid">
          {quickRoutes.map((route) => (
            <a key={route.number} href={route.href}>
              <span>{route.number}</span>
              <strong>{route.label}</strong>
              <small>{route.detail}</small>
              <i aria-hidden="true">↓</i>
            </a>
          ))}
        </div>
      </section>

      {dayTripGroups.map((group) => {
        const copy = groupCopy[group]
        const trips = dayTrips.filter((trip) => trip.group === group)
        return (
          <section key={group} className="escape-group" id={copy.id} aria-labelledby={`${copy.id}-heading`}>
            <div className="shell section">
              <div className="section-heading escape-group__heading">
                <div>
                  <p className="eyebrow">{copy.eyebrow}</p>
                  <h2 id={`${copy.id}-heading`}>{copy.title}</h2>
                </div>
                <p>{copy.intro}</p>
              </div>

              <div className="escape-list">
                {trips.map((trip, tripIndex) => (
                  <article className="escape-card" id={trip.id} key={trip.id}>
                    <div className="escape-card__facts">
                      <span className="escape-card__number">0{tripIndex + 1}</span>
                      <dl>
                        <div><dt>Where</dt><dd>{trip.location}</dd></div>
                        <div><dt>Allow</dt><dd>{trip.time}</dd></div>
                        <div><dt>Getting there</dt><dd>{trip.transport}</dd></div>
                        <div><dt>Without a car</dt><dd>{trip.carFree}</dd></div>
                        <div><dt>Best time</dt><dd>{trip.season}</dd></div>
                      </dl>
                    </div>
                    <div className="escape-card__story">
                      <p className="eyebrow">{trip.mood}</p>
                      <h3>{trip.name}</h3>
                      <p className="escape-card__summary">{trip.summary}</p>
                      <div className="escape-card__plan">
                        <strong>A simple way to do it</strong>
                        <ol>{trip.plan.map((step) => <li key={step}>{step}</li>)}</ol>
                      </div>
                      <aside className="escape-card__honest">
                        <span>The honest bit</span>
                        <p>{trip.realityCheck}</p>
                      </aside>
                      <div className="escape-card__links">
                        <a href={trip.officialUrl} target="_blank" rel="noreferrer">{trip.officialLabel} ↗</a>
                        {trip.internalUrl && <Link href={trip.internalUrl}>Read our local guide →</Link>}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="escape-planner" id="trip-planner" aria-labelledby="trip-planner-heading">
        <div className="shell section escape-planner__inner">
          <div>
            <p className="eyebrow">Before you walk out the door</p>
            <h2 id="trip-planner-heading">Five checks save a surprisingly large amount of nonsense.</h2>
            <p>Rural and seasonal transport is less forgiving than an HSL tram. Give the return journey the same attention as the nice café you found on Instagram.</p>
          </div>
          <ol>
            <li><span>01</span><div><strong>Use the exact entrance or station</strong><p>“Nuuksio” and “Raseborg” are areas, not useful destinations for a route planner.</p></div></li>
            <li><span>02</span><div><strong>Find the final sensible return</strong><p>Not simply the very last one. Leave yourself one backup.</p></div></li>
            <li><span>03</span><div><strong>Check the right ticket system</strong><p>HSL, VR and Matkahuolto are separate. One app does not cover every journey.</p></div></li>
            <li><span>04</span><div><strong>Respect daylight and weather</strong><p>A short forest trail feels rather different after dark or in freezing rain.</p></div></li>
            <li><span>05</span><div><strong>Bring the boring essentials</strong><p>Water, a snack, a charged phone, one extra layer and an offline route.</p></div></li>
          </ol>
          <div className="escape-planner__links" aria-label="Official journey planning links">
            <a href="https://www.hsl.fi/en" target="_blank" rel="noreferrer">HSL Journey Planner ↗</a>
            <a href="https://www.vr.fi/en" target="_blank" rel="noreferrer">VR trains ↗</a>
            <a href="https://www.matkahuolto.fi/passengers" target="_blank" rel="noreferrer">Matkahuolto buses ↗</a>
            <a href="https://www.luontoon.fi/en" target="_blank" rel="noreferrer">Luontoon trail information ↗</a>
          </div>
        </div>
      </section>
    </main>
  )
}

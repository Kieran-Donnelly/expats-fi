import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { EventCard } from '@/components/EventCard'
import { JsonLd } from '@/components/JsonLd'
import { SectionHero } from '@/components/SectionHero'
import type { CityEvent } from '@/data/events'
import { exploreListings, type ExploreListing } from '@/data/explore'
import { getEvents } from '@/lib/content'
import { breadcrumbJsonLd, collectionPageJsonLd, socialMetadata } from '@/lib/seo'

export const dynamic = 'force-dynamic'

const pagePath = '/family/things-to-do-with-kids/'

export const metadata: Metadata = socialMetadata({
  title: 'Things to do with kids in Helsinki',
  description: 'Family-friendly events and reliable days out in Helsinki, with free ideas, rainy-day options, places to burn energy and practical parent notes.',
  path: pagePath,
  image: '/images/family-kids/hero-family-day-out.webp',
})

const placeImages: Record<string, { src: string; alt: string; position?: string }> = {
  'helsinki-city-museum': { src: '/images/family-kids/helsinki-city-museum-kids.webp', alt: 'A child exploring a colourful interactive exhibition' },
  'tram-museum': { src: '/images/family-kids/tram-museum-helsinki.webp', alt: 'A Helsinki tram travelling along a rain-washed city street' },
  'playground-loru': { src: '/images/family-kids/playground-loru-library.webp', alt: 'A family reading together in a children’s library' },
  'helsinki-playground-network': { src: '/images/family-kids/helsinki-playgrounds.webp', alt: 'Children playing together at an outdoor playground' },
  oodi: { src: '/images/family-kids/oodi-helsinki.webp', alt: 'The sweeping wooden exterior of Oodi Central Library in Helsinki' },
  annantalo: { src: '/images/family-kids/annantalo-art-workshop.webp', alt: 'Children painting together during an art workshop' },
  'finnkino-helsinki': { src: '/images/family-kids/finnkino-family-cinema.webp', alt: 'A cinema visitor holding popcorn in front of red theatre seats' },
  'helsinki-cultural-centres': { src: '/images/family-kids/helsinki-cultural-centres-children.webp', alt: 'An audience watching children perform on stage' },
  'oittaa-lake-bodom': { src: '/images/family-kids/oittaa-family-lake.webp', alt: 'A family sharing a picnic beside a lake' },
  kuusijarvi: { src: '/images/family-kids/kuusijarvi-smoke-sauna.webp', alt: 'A traditional smoke sauna among Finnish lakeside trees' },
  'aurinkolahti-beach': { src: '/images/family-kids/aurinkolahti-family-beach.webp', alt: 'A family playing together on a sandy beach' },
  palettilampi: { src: '/images/family-kids/palettilampi-lake-swimming.webp', alt: 'Children running into clear lake water' },
  'korkeasaari-zoo': { src: '/images/family-kids/korkeasaari-tiger.webp', alt: 'A close view of a tiger’s striped coat' },
  suomenlinna: { src: '/images/family-kids/suomenlinna-family-day.webp', alt: 'A sailboat passing Suomenlinna across the Helsinki sea' },
  'nuuksio-and-haltia': { src: '/images/family-kids/nuuksio-lake.webp', alt: 'A quiet forest lake in Nuuksio National Park' },
  linnanmaki: { src: '/images/family-kids/linnanmaki-ferris-wheel.webp', alt: 'The colourful Rinkeli Ferris wheel at Linnanmäki' },
}

const eventImages: Record<string, { src: string; alt: string }> = {
  'relaxed-basketball-puistola-2026': { src: '/images/family-kids/event-relaxed-basketball.webp', alt: 'Young people playing basketball together in a gym' },
  'sense-of-some-place-exhibition-2026': { src: '/images/family-kids/event-sense-of-place.webp', alt: 'Colourful paintings displayed inside a contemporary gallery' },
  'espoo-kids-minimarathon-2026': { src: '/images/family-kids/event-kids-minimarathon.webp', alt: 'Children racing together across a grassy field' },
  'espoo-rantamaraton-2026': { src: '/images/family-kids/event-rantamaraton.webp', alt: 'A runner training beside the waterfront' },
  'hjk-women-gnistan-2026': { src: '/images/family-kids/event-womens-football.webp', alt: 'A group playing football together on a sunny field' },
  'helsinki-international-grand-market-2026': { src: '/images/family-kids/event-international-market.webp', alt: 'Colourful dishes laid out at a busy outdoor food market' },
}

const groups = [
  {
    id: 'free-and-easy',
    number: '01',
    label: 'Free and easy',
    title: 'Low-fuss plans that do not need a family meeting.',
    intro: 'Good for an ordinary afternoon, a tight budget or the point where everybody simply needs to leave the house.',
    slugs: ['helsinki-city-museum', 'tram-museum', 'playground-loru', 'helsinki-playground-network'],
  },
  {
    id: 'rainy-day',
    number: '02',
    label: 'Rain-proof',
    title: 'Warm, indoor and still worth putting shoes on for.',
    intro: 'Reliable saves for sleet, sideways rain and those long grey afternoons when home has started feeling very small.',
    slugs: ['oodi', 'annantalo', 'finnkino-helsinki', 'helsinki-cultural-centres'],
  },
  {
    id: 'burn-off-energy',
    number: '03',
    label: 'Burn off some energy',
    title: 'Space to run, climb, swim and come home properly tired.',
    intro: 'A mix of easy city options and bigger outdoor shouts for children who have already bounced off every available wall.',
    slugs: ['oittaa-lake-bodom', 'kuusijarvi', 'aurinkolahti-beach', 'palettilampi'],
  },
  {
    id: 'proper-day-out',
    number: '04',
    label: 'A proper day out',
    title: 'The plans that earn a place on the family calendar.',
    intro: 'Bigger Helsinki favourites and nearby adventures when you have the time, snacks and collective patience for a proper mission.',
    slugs: ['korkeasaari-zoo', 'suomenlinna', 'nuuksio-and-haltia', 'linnanmaki'],
  },
] as const

function picksFor(slugs: readonly string[]) {
  return slugs.map((slug) => exploreListings.find((listing) => listing.slug === slug)).filter((listing): listing is ExploreListing => Boolean(listing))
}

function KidsPlaceCard({ place }: { place: ExploreListing }) {
  const setting = place.indoor ? (place.allYear ? 'Indoors · all year' : 'Indoors') : (place.allYear ? 'Outdoors · all year' : 'Outdoors · seasonal')
  const image = placeImages[place.slug]

  return (
    <article className="kids-place-card">
      {image && (
        <div className="kids-place-card__media">
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 720px) 100vw, 50vw" style={{ objectPosition: image.position ?? 'center' }} />
        </div>
      )}
      <div className="kids-place-card__body">
        <div className="kids-place-card__meta"><span>{place.area}</span><span>{setting}</span></div>
        <h3><Link href={`/explore/${place.slug}/`}>{place.name}</Link></h3>
        <p>{place.blurb}</p>
        <dl>
          <div><dt>Cost</dt><dd>{place.priceNote}</dd></div>
          <div><dt>Good to know</dt><dd>{place.goodToKnow}</dd></div>
        </dl>
        <Link className="text-link" href={`/explore/${place.slug}/`}>Plan this one <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  )
}

function KidsEventCard({ event }: { event: CityEvent }) {
  const image = eventImages[event.slug]

  return (
    <div className="kids-event-card">
      {image && (
        <div className="kids-event-card__media">
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 720px) 100vw, 33vw" />
        </div>
      )}
      <EventCard event={event} />
    </div>
  )
}

export default async function ThingsToDoWithKidsPage() {
  const allEvents = await getEvents({ upcoming: true })
  const familyEvents = allEvents.filter((event) => event.familyFriendly).slice(0, 6)
  const allPicks = groups.flatMap((group) => picksFor(group.slugs))

  return (
    <main id="main" className="family-hub kids-hub" data-hub-tone="warm">
      <JsonLd data={[
        collectionPageJsonLd({
          name: 'Things to do with kids in Helsinki',
          description: 'Current family-friendly events, free ideas, rainy-day options and reliable days out in and around Helsinki.',
          path: pagePath,
          items: [
            ...familyEvents.map((event) => ({ name: event.title, path: `/events/${event.slug}/` })),
            ...allPicks.map((place) => ({ name: place.name, path: `/explore/${place.slug}/` })),
          ],
        }),
        breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Family', path: '/family/' },
          { name: 'Things to do with kids', path: pagePath },
        ]),
      ]} />

      <SectionHero
        eyebrow="Helsinki with kids"
        title="Good shouts for getting everybody out of the house."
        intro="Fresh family-friendly events, rainy-day rescues, free fallbacks and bigger days out, with the costs, setting and practical bits pulled together before you promise anything to the children."
        noteLabel="Start here"
        noteTitle="Pick the day you actually have."
        noteBody="Ten spare minutes, a wet afternoon and a full Saturday are three different jobs. Choose a lane below, then check the linked organiser before setting off."
        tone="warm"
        image={{ src: '/images/family-kids/hero-family-day-out.webp', position: 'center 46%' }}
      />

      <nav className="kids-jump" aria-label="Things to do with kids sections">
        <div className="shell">
          <Link href="/explore/helsinki-playground-network/">Playground map</Link>
          {groups.map((group) => <a key={group.id} href={`#${group.id}`}>{group.label}</a>)}
          <a href="#coming-up">Coming up</a>
        </div>
      </nav>

      <section className="kids-playground-shortcut" aria-label="Helsinki playground map">
        <div className="shell">
          <div><span>Interactive playground map</span><strong>Find all 62 staffed playgrounds across Helsinki.</strong></div>
          <p>Search by playground, street or area, then check facilities and official details before heading out.</p>
          <Link href="/explore/helsinki-playground-network/">Open the playground map <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="shell section" aria-labelledby="kids-choose-heading">
        <div className="section-heading">
          <div><p className="eyebrow">Choose your day</p><h2 id="kids-choose-heading">What sort of mission are we talking?</h2></div>
          <p>No endless catalogue. Just useful starting points grouped around the decision parents are actually making.</p>
        </div>
        <div className="kids-choice-grid">
          {groups.map((group) => (
            <a href={`#${group.id}`} key={group.id}>
              <span>{group.number}</span><strong>{group.label}</strong><small>{group.title}</small><i aria-hidden="true">↓</i>
            </a>
          ))}
        </div>
      </section>

      <section className="kids-events" id="coming-up" aria-labelledby="kids-events-heading">
        <div className="shell section">
          <div className="section-heading">
            <div><p className="eyebrow">Coming up</p><h2 id="kids-events-heading">Family-friendly events already on the calendar.</h2></div>
            <p>These move quickly, so we surface the next useful options here and keep the full event guide one click away.</p>
          </div>
          {familyEvents.length > 0 ? (
            <div className="kids-events__grid">
              {familyEvents.map((event) => <KidsEventCard event={event} key={event.slug} />)}
            </div>
          ) : (
            <div className="kids-events__empty"><strong>No fresh family events are confirmed just now.</strong><p>The evergreen ideas below still have your afternoon covered.</p></div>
          )}
          <div className="kids-events__more"><Link className="button button--secondary" href="/events/?cost=family#events-listing">See every family-friendly event</Link></div>
        </div>
      </section>

      {groups.map((group) => (
        <section className="kids-pick-group" id={group.id} key={group.id} aria-labelledby={`${group.id}-heading`}>
          <div className="shell section">
            <div className="kids-pick-group__heading">
              <div><span>{group.number}</span><p className="eyebrow">{group.label}</p><h2 id={`${group.id}-heading`}>{group.title}</h2></div>
              <p>{group.intro}</p>
            </div>
            <div className="kids-place-grid">
              {picksFor(group.slugs).map((place) => <KidsPlaceCard place={place} key={place.slug} />)}
            </div>
          </div>
        </section>
      ))}

      <section className="kids-checklist" aria-labelledby="kids-checklist-heading">
        <div className="shell section">
          <div><p className="eyebrow">Before the shoes go on</p><h2 id="kids-checklist-heading">A thirty-second parent check.</h2><p>Because discovering the café is shut or the session needed booking is considerably less charming with three coats already zipped.</p></div>
          <ol>
            <li><span>01</span><strong>Recheck the date and opening time.</strong></li>
            <li><span>02</span><strong>Look for the language and intended age.</strong></li>
            <li><span>03</span><strong>Confirm the price and whether booking is required.</strong></li>
            <li><span>04</span><strong>Check prams, toilets, food and accessibility if they matter today.</strong></li>
            <li><span>05</span><strong>Keep one tiny fallback nearby. Finland’s weather enjoys creative direction.</strong></li>
          </ol>
        </div>
      </section>

      <section className="shell kids-more">
        <div><p className="eyebrow">Keep exploring</p><h2>Need more than the short list?</h2><p>Browse every family-friendly place we have checked, or head back to the Family hub for daycare, schools, healthcare and the serious stuff.</p></div>
        <div><Link className="button" href="/explore/?category=Family%20favourites#browse">All family favourites</Link><Link className="button button--secondary" href="/family/">Back to Family life</Link></div>
      </section>
    </main>
  )
}

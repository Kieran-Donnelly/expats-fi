import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { JsonLd } from '@/components/JsonLd'
import { PlaygroundsMap, type PlaygroundMapItem } from '@/components/PlaygroundsMap'
import { SectionHero } from '@/components/SectionHero'
import { helsinkiPlaygrounds, playgroundGoogleMapsUrl, playgroundHslRouteUrl, playgroundOfficialUrl } from '@/data/helsinki-playgrounds'
import { absoluteUrl, breadcrumbJsonLd, socialMetadata } from '@/lib/seo'

const pagePath = '/explore/helsinki-playground-network/'

export const metadata: Metadata = socialMetadata({
  title: 'Helsinki playground map: all 62 staffed playgrounds',
  description: 'Search and map every staffed Helsinki playground, then use our deeper family notes to choose by equipment, indoor backup, transport and accessibility.',
  path: pagePath,
  image: '/images/playgrounds/hero-helsinki-playgrounds.webp',
})

const playgrounds = [
  {
    id: 'loru',
    number: '01',
    name: 'Playground Loru',
    area: 'City centre',
    address: 'Töölönlahdenkatu 4, 00100 Helsinki',
    coordinates: { latitude: 60.1739404, longitude: 24.9379816 },
    bestFor: 'Oodi days and bad-weather backup',
    image: '/images/family-kids/oodi-helsinki.webp',
    imageAlt: 'Oodi Central Library beside Kansalaistori in central Helsinki',
    intro: 'The easiest central option when you are already near the station, Oodi or Töölönlahti.',
    why: 'Loru’s activity space is on Oodi’s third floor, while the outdoor play area sits beside Kansalaistori. That indoor-outdoor combination makes it especially handy when the weather cannot make up its mind.',
    useful: ['Indoor activity space inside Oodi', 'Smooth approach for prams and wheelchairs', 'Outdoor area is not gated', 'Official page lists Finnish and Swedish service'],
    note: 'The indoor room follows staffed opening hours. Treat the library and playground as one flexible plan, but check the day’s programme before promising an organised activity.',
    officialUrl: 'https://www.hel.fi/en/childhood-and-education/playground-loru-0',
  },
  {
    id: 'ruoholahti',
    number: '02',
    name: 'Playground Ruoholahti',
    area: 'Ruoholahti',
    address: 'Laivapojankatu 8, 00180 Helsinki',
    coordinates: { latitude: 60.1607553, longitude: 24.9185486 },
    bestFor: 'Big equipment choice and easy transport',
    image: '/images/playgrounds/taivallahti-family-swings.webp',
    imageAlt: 'Parents helping their children on swings outdoors',
    intro: 'A well-equipped, computer-themed park that gives different ages plenty to get stuck into.',
    why: 'There is a separate small-child yard, football and basketball space, table tennis, floorball equipment, trampolines and distinctive computer-themed play equipment. The metro and tram connections make this a practical cross-city meeting point.',
    useful: ['Separate fenced area for smaller children', 'Trampolines and themed equipment', 'Indoor facilities and baby changing', 'Detailed accessibility information available'],
    note: 'It is a strong all-rounder, but some thresholds and the accessible toilet dimensions are imperfect. Read the city’s accessibility notes if step-free use is important today.',
    officialUrl: 'https://www.hel.fi/en/childhood-and-education/playground-ruoholahti',
  },
  {
    id: 'brahe',
    number: '03',
    name: 'Playground Brahe',
    area: 'Kallio',
    address: 'Porvoonkatu 4, 00510 Helsinki',
    coordinates: { latitude: 60.1889272, longitude: 24.9499005 },
    bestFor: 'Toddlers, ball games and seasonal variety',
    image: '/images/playgrounds/brahe-sandbox.webp',
    imageAlt: 'Young children playing together with sand in a leafy park',
    intro: 'Helsinki’s oldest staffed playground still earns its place by being genuinely useful for a wide spread of ages.',
    why: 'Brahe combines indoor rooms with a separate fenced toddler area, artificial turf, football and floorball space, table tennis and table football. Summer brings water play and a paddling pool, while winter can bring an ice rink.',
    useful: ['Near Sörnäinen metro', 'Separate area for smaller children', 'Paddling pool and water play in summer', 'Ice rink in winter when conditions allow'],
    note: 'The seasonal features are the attraction, but they are also the bit most likely to change with weather and maintenance. Check the official page or contact the playground before making them the whole plan.',
    officialUrl: 'https://www.hel.fi/en/childhood-and-education/playground-brahe',
  },
  {
    id: 'taivallahti',
    number: '04',
    name: 'Playground Taivallahti',
    area: 'Töölö',
    address: 'Pohjoinen Hesperiankatu 22, 00260 Helsinki',
    coordinates: { latitude: 60.1766549, longitude: 24.9193143 },
    bestFor: 'A fenced central park with a toddler zone',
    image: '/images/playgrounds/loru-nest-swing.webp',
    imageAlt: 'Children playing together on a large nest swing',
    intro: 'A reassuringly contained option near the centre, especially when one child is quicker than the adult holding the snacks.',
    why: 'The main playground is fully fenced and includes a separate small-child yard, climbing equipment, ball play and summer water features. The building has a ramp and accessible toilet, and there is space around several pieces of equipment for wheelchairs or prams.',
    useful: ['Fully fenced playground', 'Separate small-child yard', 'Summer water play', 'Accessible toilet in the playground building'],
    note: 'Nearby parking is paid street parking rather than dedicated customer spaces. Public transport or a pram walk through Töölö will often be the calmer arrival.',
    officialUrl: 'https://www.hel.fi/en/childhood-and-education/playground-taivallahti',
  },
  {
    id: 'maunula',
    number: '05',
    name: 'Playground Maunula',
    area: 'Maunula',
    address: 'Kuusikkotie 2a, 00630 Helsinki',
    coordinates: { latitude: 60.2310812, longitude: 24.9286428 },
    bestFor: 'Mixed ages and children who need movement',
    image: '/images/playgrounds/maunula-monkey-bars.webp',
    imageAlt: 'A group of children climbing together outdoors',
    intro: 'A recently renewed yard with enough going on that older children are less likely to declare themselves finished after six minutes.',
    why: 'Alongside the toddler yard and usual swings and climbing frames, Maunula has football areas, table tennis, floorball equipment and a skate park. In summer there is a paddling pool, and Jokeri Light Rail runs close by.',
    useful: ['Recently renovated yard', 'Skate park and ball-game space', 'Paddling pool in summer', 'Many wheelchair-friendly paths and features'],
    note: 'The city rates this as a well-equipped playground, although the drop-off point is some distance from the gate and the building’s exterior door can be heavy.',
    officialUrl: 'https://www.hel.fi/en/childhood-and-education/playground-maunula',
  },
  {
    id: 'mellunmaki',
    number: '06',
    name: 'Playground Mellunmäki',
    area: 'Mellunmäki',
    address: 'Pyhätunturintie 2, 00970 Helsinki',
    coordinates: { latitude: 60.2365626, longitude: 25.1231714 },
    bestFor: 'Water play, football and a quieter local feel',
    image: '/images/playgrounds/mellunmaki-climbing.webp',
    imageAlt: 'A child climbing and playing outdoors',
    intro: 'A calmer residential option with a broad mix of play, sport and nearby nature.',
    why: 'The park has a separate small-child yard, artificial-turf football, basketball and floorball equipment, table tennis and summer water play. A nearby gravel pitch becomes an ice rink in winter when conditions cooperate.',
    useful: ['Separate small-child area', 'Artificial-turf football space', 'Water play and paddling pool in summer', 'Nearby pitch or winter ice rink'],
    note: 'The approach and entrance include a step as well as a short ramp, and there are some high thresholds inside. Check the detailed accessibility information if that affects your visit.',
    officialUrl: 'https://www.hel.fi/en/childhood-and-education/playground-mellunmaki',
  },
  {
    id: 'rusthollari',
    number: '07',
    name: 'Playground Rusthollari',
    area: 'Puotila',
    address: 'Rusthollarintie 15, 00910 Helsinki',
    coordinates: { latitude: 60.2125231, longitude: 25.1000619 },
    bestFor: 'A nature-backed local day with seasonal play',
    image: '/images/family-kids/helsinki-playgrounds.webp',
    imageAlt: 'A child enjoying outdoor play',
    intro: 'A neighbourhood playground surrounded by nature, with the metro close enough to keep the journey manageable.',
    why: 'Rusthollari has indoor rooms, climbing equipment, a separate small-child yard, summer water play and a winter ice rink when conditions allow. The building entrance has a ramp and the city lists an accessible toilet.',
    useful: ['Nature around the playground', 'Water play in summer', 'Ice rink in winter when available', 'Ramp and accessible toilet'],
    note: 'This is a good unhurried local choice rather than a giant destination park. That can be precisely the point when the family needs fresh air, not an expedition.',
    officialUrl: 'https://www.hel.fi/en/childhood-and-education/playground-rusthollari',
  },
  {
    id: 'lohikaarmepuisto',
    number: '08',
    name: 'Playground Lohikäärmepuisto',
    area: 'Vuosaari',
    address: 'Lohikäärmeenpolku 3, 00980 Helsinki',
    coordinates: { latitude: 60.2115759, longitude: 25.1394754 },
    bestFor: 'Imaginative play near the metro',
    image: '/images/playgrounds/lohikaarmepuisto-swing.webp',
    imageAlt: 'Two children playing together on a large swing',
    intro: 'A peaceful Vuosaari option with a bit more personality than another anonymous set of swings.',
    why: 'The small cowshed, wooden animals and playhouse give younger children an easy make-believe world, alongside the usual swings, climbing and a summer paddling pool. It is a short walk from Vuosaari metro.',
    useful: ['Short walk from Vuosaari metro', 'Wooden animals, cowshed and playhouse', 'Separate small-child yard', 'Paddling pool in summer'],
    note: 'The official page currently lists daily hours, unlike most staffed playgrounds. Recheck them before relying on indoor access or an organised session.',
    officialUrl: 'https://www.hel.fi/en/childhood-and-education/playground-lohikaarmepuisto',
  },
] as const

const featuredDirectoryIds: Record<string, string> = {
  'loru-0': 'loru',
  ruoholahti: 'ruoholahti',
  brahe: 'brahe',
  taivallahti: 'taivallahti',
  maunula: 'maunula',
  mellunmaki: 'mellunmaki',
  rusthollari: 'rusthollari',
  lohikaarmepuisto: 'lohikaarmepuisto',
}

const featuredBestFor = Object.fromEntries(playgrounds.map((playground) => [
  playground.id === 'loru' ? 'loru-0' : playground.id,
  playground.bestFor,
]))

const featuredImages = Object.fromEntries(playgrounds.map((playground) => [
  playground.id === 'loru' ? 'loru-0' : playground.id,
  { src: playground.image, alt: playground.imageAlt },
]))

function playgroundRegion(latitude: number, longitude: number): PlaygroundMapItem['region'] {
  if (longitude < 24.91) return 'West'
  if (latitude < 60.215 && longitude < 25.02) return 'Central'
  if (latitude >= 60.225 && longitude < 25.06) return 'North'
  return 'East'
}

const playgroundMapItems: readonly PlaygroundMapItem[] = helsinkiPlaygrounds.map((playground) => ({
  id: playground.id,
  name: playground.name,
  region: playgroundRegion(playground.latitude, playground.longitude),
  address: playground.address,
  bestFor: featuredBestFor[playground.id],
  detailId: featuredDirectoryIds[playground.id],
  officialUrl: playgroundOfficialUrl(playground.id),
  image: featuredImages[playground.id],
  coordinates: { latitude: playground.latitude, longitude: playground.longitude },
}))

export default function HelsinkiPlaygroundsPage() {
  return (
    <main id="main" className="playground-hub family-hub" data-hub-tone="warm">
      <JsonLd data={[
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Helsinki playgrounds for families',
          description: 'A complete map and directory of Helsinki staffed playgrounds, with deeper practical notes on eight particularly useful options.',
          url: absoluteUrl(pagePath),
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: helsinkiPlaygrounds.length,
            itemListElement: helsinkiPlaygrounds.map((playground, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: playground.name,
              url: playgroundOfficialUrl(playground.id),
            })),
          },
        },
        breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Explore Helsinki', path: '/explore/' },
          { name: 'Helsinki playgrounds', path: pagePath },
        ]),
      ]} />

      <SectionHero
        eyebrow="Helsinki playgrounds"
        title="Find your next playground."
        intro="All 62 staffed Helsinki playgrounds on one searchable map, plus eight deeper recommendations with the equipment, indoor backup, transport and parent-level practicalities that matter once everybody has their shoes on."
        noteLabel="The important bit"
        noteTitle="The outdoor yard and staffed service are not the same thing."
        noteBody="Opening hours usually describe the building, staff and organised activities. Recheck the official page if you need indoor access, water play, a club or a particular session."
        tone="warm"
        image={{ src: '/images/playgrounds/hero-helsinki-playgrounds.webp', position: 'center 52%' }}
      />

      <nav className="playground-jump" aria-label="Playgrounds on this page">
        <div className="shell">
          <a href="#playground-map-heading">Search the map</a>
          <a href="#featured-playgrounds">Eight deeper picks</a>
          <a href="#all-playgrounds">All 62 playgrounds</a>
          <a href="#how-the-system-works">How it works</a>
        </div>
      </nav>

      <section className="shell section playground-intro" aria-labelledby="playground-intro-heading">
        <div>
          <p className="eyebrow">First, a useful translation</p>
          <h2 id="playground-intro-heading">A Finnish <em>leikkipuisto</em> is more than a few swings.</h2>
        </div>
        <div>
          <p>This page includes all 62 playgrounds in Helsinki’s current staffed playground directory. Many combine a free outdoor yard with weekday indoor rooms, toilets, toys and guided activities. Families can meet other parents, heat food and find something to do without buying a ticket every time.</p>
          <p>Organised activities are generally in Finnish. That does not mean international families should stay away. Ordinary play needs no translation, and the city specifically runs <em>Tänään tavataan</em> cafés where families from different language backgrounds can meet and practise everyday Finnish.</p>
          <p>Helsinki also has more than 200 smaller, unstaffed play areas. They are useful local stops, but they do not necessarily have toilets, indoor rooms or organised sessions, so we keep them clearly separate from the staffed network below.</p>
        </div>
      </section>

      <section className="playground-quick-picks" aria-labelledby="playground-quick-heading">
        <div className="shell section">
          <div className="section-heading">
            <div><p className="eyebrow">Choose quickly</p><h2 id="playground-quick-heading">A few good places to start.</h2></div>
            <p>Four useful options for different family days, from indoor backup and fenced spaces to room for older children to move.</p>
          </div>
          <div className="playground-quick-grid">
            <a href="#loru"><span>Central and rain-safe</span><strong>Loru</strong><small>Pair the outdoor yard with Oodi’s indoor space.</small></a>
            <a href="#taivallahti"><span>Fenced and reassuring</span><strong>Taivallahti</strong><small>A contained yard with a separate toddler area.</small></a>
            <a href="#maunula"><span>Older children too</span><strong>Maunula</strong><small>Football, table tennis, skating and room to move.</small></a>
            <a href="#lohikaarmepuisto"><span>Imaginative play</span><strong>Lohikäärmepuisto</strong><small>Wooden animals and a playhouse near the metro.</small></a>
          </div>
        </div>
      </section>

      <section className="playground-map-section" aria-label="Playground map">
        <PlaygroundsMap playgrounds={playgroundMapItems} />
      </section>

      <section className="shell section playground-directory" id="featured-playgrounds" aria-labelledby="playground-directory-heading">
        <div className="section-heading">
          <div><p className="eyebrow">Eight deeper picks</p><h2 id="playground-directory-heading">Find one that earns the journey.</h2></div>
          <p>Every practical detail below was checked against the City of Helsinki. Photos are licensed illustrations, not pictures of the named playgrounds.</p>
        </div>
        <div className="playground-grid">
          {playgrounds.map((playground) => (
            <article className="playground-card" id={playground.id} key={playground.id}>
              <div className="playground-card__media">
                <Image src={playground.image} alt={playground.imageAlt} fill sizes="(max-width: 720px) 100vw, 50vw" />
                <span>{playground.number}</span>
              </div>
              <div className="playground-card__body">
                <div className="playground-card__meta"><span>{playground.area}</span><span>Free to visit</span></div>
                <h3>{playground.name}</h3>
                <p className="playground-card__address">{playground.address}</p>
                <strong className="playground-card__best">Best for: {playground.bestFor}</strong>
                <p>{playground.intro}</p>
                <p>{playground.why}</p>
                <ul>{playground.useful.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="playground-card__note"><strong>Parent note</strong><p>{playground.note}</p></div>
                <a className="text-link" href={playground.officialUrl} target="_blank" rel="noreferrer" aria-label={`Check today’s details for ${playground.name} with Helsinki`}>Check today’s details with Helsinki <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="playground-all" id="all-playgrounds" aria-labelledby="all-playgrounds-heading">
        <div className="shell section">
          <div className="section-heading">
            <div><p className="eyebrow">The full staffed network</p><h2 id="all-playgrounds-heading">Every Helsinki playground in the city directory.</h2></div>
            <p>All 62 are listed alphabetically. Open the official page for current hours and activities, plan a public-transport journey with HSL or open the destination in Google Maps.</p>
          </div>
          <ol className="playground-all-grid">
            {helsinkiPlaygrounds.map((playground, index) => (
              <li className="playground-all-card" id={`directory-${playground.id}`} key={playground.id}>
                <span className="playground-all-card__number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <span className="playground-all-card__type">{featuredDirectoryIds[playground.id] ? 'Full note above' : 'City playground'}</span>
                  <h3>{playground.name.replace(/^Playground /, '')}</h3>
                  <p>{playground.address}</p>
                </div>
                <div className="playground-all-card__links">
                  {featuredDirectoryIds[playground.id] && <a href={`#${featuredDirectoryIds[playground.id]}`}>Our note ↓</a>}
                  <a href={playgroundOfficialUrl(playground.id)} target="_blank" rel="noreferrer" aria-label={`Official details for ${playground.name}`}>Official details ↗</a>
                  <a href={playgroundHslRouteUrl(playground.name, playground.address, playground.latitude, playground.longitude)} target="_blank" rel="noreferrer" aria-label={`Plan an HSL route to ${playground.name}`}>HSL route ↗</a>
                  <a href={playgroundGoogleMapsUrl(playground.latitude, playground.longitude)} target="_blank" rel="noreferrer" aria-label={`Open ${playground.name} in Google Maps`}>Google Maps ↗</a>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="playground-system" id="how-the-system-works" aria-labelledby="playground-system-heading">
        <div className="shell section playground-system__inner">
          <div><p className="eyebrow">How the system works</p><h2 id="playground-system-heading">The free bits parents often discover too late.</h2><p>The city’s playground network is one of Helsinki’s genuinely brilliant family services. It is also spread across enough pages and Finnish terminology to be easy to miss when you have just arrived.</p></div>
          <ol>
            <li><span>01</span><div><strong>Drop-in play and guided mornings</strong><p>Many playgrounds run free indoor and outdoor activities for babies and young children. Most drop-in sessions do not require advance registration.</p></div></li>
            <li><span>02</span><div><strong>Playground clubs for ages 2 to 4</strong><p>Free clubs meet a few times a week for children cared for at home. Places require an application and activities are in Finnish.</p></div></li>
            <li><span>03</span><div><strong>A gentle Finnish-language doorway</strong><p><em>Tänään tavataan</em> cafés use everyday Finnish through play, songs and conversation while families meet one another.</p></div></li>
            <li><span>04</span><div><strong>Summer changes the offer</strong><p>Water play, paddling pools, camps and the city’s summer meal programme are seasonal. The participating parks and dates change each year.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="shell playground-links">
        <div><p className="eyebrow">Go wider</p><h2>Need an ordinary neighbourhood play area?</h2><p>The 62 places above are the staffed playground network. Helsinki’s Service Map also covers more than 200 smaller play areas, while the city finder is the final word on live playground programmes and opening arrangements.</p></div>
        <div>
          <a className="button" href="https://www.hel.fi/en/childhood-and-education/playgrounds-and-family-houses/find-playgrounds-and-family-houses" target="_blank" rel="noreferrer">Check the city finder ↗</a>
          <Link className="button button--secondary" href="/family/things-to-do-with-kids/">More things to do with kids</Link>
        </div>
      </section>
    </main>
  )
}

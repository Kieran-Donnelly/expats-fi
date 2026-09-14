import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { JsonLd } from '@/components/JsonLd'
import { SectionHero } from '@/components/SectionHero'
import { absoluteUrl, breadcrumbJsonLd, socialMetadata } from '@/lib/seo'

const pagePath = '/explore/helsinki-playground-network/'

export const metadata: Metadata = socialMetadata({
  title: 'Helsinki playgrounds: eight good parks for families',
  description: 'Choose a Helsinki playground by area and what your family needs, with indoor spaces, water play, equipment, accessibility and official links.',
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
    bestFor: 'Oodi days and bad-weather backup',
    image: '/images/playgrounds/loru-nest-swing.webp',
    imageAlt: 'Two children sharing a large nest swing in a sandy playground',
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
    bestFor: 'Big equipment choice and easy transport',
    image: '/images/playgrounds/ruoholahti-colourful-playground.webp',
    imageAlt: 'Bright red and green playground equipment beneath leafy trees',
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
    bestFor: 'A fenced central park with a toddler zone',
    image: '/images/playgrounds/taivallahti-family-swings.webp',
    imageAlt: 'Parents helping children enjoy playground swings on a sunny day',
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
    bestFor: 'Mixed ages and children who need movement',
    image: '/images/playgrounds/maunula-monkey-bars.webp',
    imageAlt: 'A group of children climbing together on outdoor monkey bars',
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
    bestFor: 'Water play, football and a quieter local feel',
    image: '/images/playgrounds/mellunmaki-climbing.webp',
    imageAlt: 'A young child climbing confidently on colourful playground equipment',
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
    bestFor: 'A nature-backed local day with seasonal play',
    image: '/images/playgrounds/rusthollari-playground.webp',
    imageAlt: 'An empty playground with climbing frames and slides in a green park',
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
    bestFor: 'Imaginative play near the metro',
    image: '/images/playgrounds/lohikaarmepuisto-swing.webp',
    imageAlt: 'Two children laughing and sharing a playground swing outdoors',
    intro: 'A peaceful Vuosaari option with a bit more personality than another anonymous set of swings.',
    why: 'The small cowshed, wooden animals and playhouse give younger children an easy make-believe world, alongside the usual swings, climbing and a summer paddling pool. It is a short walk from Vuosaari metro.',
    useful: ['Short walk from Vuosaari metro', 'Wooden animals, cowshed and playhouse', 'Separate small-child yard', 'Paddling pool in summer'],
    note: 'The official page currently lists daily hours, unlike most staffed playgrounds. Recheck them before relying on indoor access or an organised session.',
    officialUrl: 'https://www.hel.fi/en/childhood-and-education/playground-lohikaarmepuisto',
  },
] as const

export default function HelsinkiPlaygroundsPage() {
  return (
    <main id="main" className="playground-hub family-hub" data-hub-tone="warm">
      <JsonLd data={[
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Helsinki playgrounds for families',
          description: 'A practical guide to eight useful playgrounds across Helsinki, with equipment, indoor spaces, accessibility and official links.',
          url: absoluteUrl(pagePath),
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: playgrounds.length,
            itemListElement: playgrounds.map((playground, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: playground.name,
              url: playground.officialUrl,
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
        title="Pick the park that suits the day you are actually having."
        intro="Eight genuinely useful playgrounds across Helsinki, sorted with the equipment, indoor backup, transport and parent-level practicalities that matter once everybody has their shoes on."
        noteLabel="The important bit"
        noteTitle="The outdoor yard and staffed service are not the same thing."
        noteBody="Opening hours usually describe the building, staff and organised activities. Recheck the official page if you need indoor access, water play, a club or a particular session."
        tone="warm"
        image={{ src: '/images/playgrounds/hero-helsinki-playgrounds.webp', position: 'center 52%' }}
      />

      <nav className="playground-jump" aria-label="Playgrounds on this page">
        <div className="shell">
          {playgrounds.map((playground) => <a key={playground.id} href={`#${playground.id}`}>{playground.area}</a>)}
          <a href="#how-the-system-works">How it works</a>
        </div>
      </nav>

      <section className="shell section playground-intro" aria-labelledby="playground-intro-heading">
        <div>
          <p className="eyebrow">First, a useful translation</p>
          <h2 id="playground-intro-heading">A Finnish <em>leikkipuisto</em> is more than a few swings.</h2>
        </div>
        <div>
          <p>Helsinki has more than 60 staffed playgrounds and family houses. Many combine a free outdoor yard with weekday indoor rooms, toilets, toys and guided activities. Families can meet other parents, heat food and find something to do without buying a ticket every time.</p>
          <p>Organised activities are generally in Finnish. That does not mean international families should stay away. Ordinary play needs no translation, and the city specifically runs <em>Tänään tavataan</em> cafés where families from different language backgrounds can meet and practise everyday Finnish.</p>
        </div>
      </section>

      <section className="playground-quick-picks" aria-labelledby="playground-quick-heading">
        <div className="shell section">
          <div className="section-heading">
            <div><p className="eyebrow">Choose quickly</p><h2 id="playground-quick-heading">If nobody has the patience for research.</h2></div>
            <p>These are not rankings. They are the shortest route from today’s problem to a sensible first option.</p>
          </div>
          <div className="playground-quick-grid">
            <a href="#loru"><span>Central and rain-safe</span><strong>Loru</strong><small>Pair the outdoor yard with Oodi’s indoor space.</small></a>
            <a href="#taivallahti"><span>Fenced and reassuring</span><strong>Taivallahti</strong><small>A contained yard with a separate toddler area.</small></a>
            <a href="#maunula"><span>Older children too</span><strong>Maunula</strong><small>Football, table tennis, skating and room to move.</small></a>
            <a href="#lohikaarmepuisto"><span>Imaginative play</span><strong>Lohikäärmepuisto</strong><small>Wooden animals and a playhouse near the metro.</small></a>
          </div>
        </div>
      </section>

      <section className="shell section playground-directory" aria-labelledby="playground-directory-heading">
        <div className="section-heading">
          <div><p className="eyebrow">Eight good shouts</p><h2 id="playground-directory-heading">Find one that earns the journey.</h2></div>
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
                <a className="text-link" href={playground.officialUrl} target="_blank" rel="noreferrer">Check today’s details with Helsinki <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
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
        <div><p className="eyebrow">Go wider</p><h2>There are dozens more near home.</h2><p>Use Helsinki’s complete finder when proximity matters more than making a special trip. Then come back to our family guide for events, rainy-day ideas and bigger days out.</p></div>
        <div>
          <a className="button" href="https://www.hel.fi/en/childhood-and-education/playgrounds-and-family-houses/find-playgrounds-and-family-houses" target="_blank" rel="noreferrer">Find every city playground ↗</a>
          <Link className="button button--secondary" href="/family/things-to-do-with-kids/">More things to do with kids</Link>
        </div>
      </section>
    </main>
  )
}

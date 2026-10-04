import type { Metadata } from 'next'
import Image from 'next/image'

import { HikesMap } from '@/components/HikesMap'
import { HubStructuredData } from '@/components/HubStructuredData'
import { SectionHero } from '@/components/SectionHero'
import { hikeGoogleMapsUrl, hikeGuides, hikeHslUrl } from '@/data/hikes'
import { socialMetadata } from '@/lib/seo'

export const metadata: Metadata = socialMetadata({
  title: 'Walks and hikes near Helsinki',
  description: 'Plan nature walks and hiking days around Helsinki, Espoo, Vantaa and Sipoo with routes, transport, grill places, toilets, swimming and honest practical notes.',
  path: '/explore/walks-and-hikes/',
  image: '/images/family-kids/nuuksio-lake.webp',
})

export default function WalksAndHikesPage() {
  return (
    <main id="main" className="hikes-hub">
      <HubStructuredData
        name="Walks and hikes near Helsinki"
        description="Nature walks and hiking days around the capital region, with routes, public transport, grill places, toilets and swimming information."
        path="/explore/walks-and-hikes/"
        items={hikeGuides.map((hike) => ({ name: hike.name, path: `/explore/walks-and-hikes/#${hike.slug}` }))}
      />
      <SectionHero
        eyebrow="Walks, hikes and nature days"
        title="Find the trail. Pack the sausages. Get outside."
        intro="Lakes, forest, sea cliffs and easy city escapes, with the starting point, transport, grill facilities and honest practical details sorted before you leave home."
        noteLabel="The rule worth knowing"
        noteTitle="A fire is not part of everyman’s rights."
        noteBody="Use an official fire site, follow its instructions and check the wildfire warning every time. A disposable barbecue counts as an open fire."
        tone="dark"
        image={{ src: '/images/family-kids/nuuksio-lake.webp', position: 'center 54%' }}
      />

      <nav className="explore-jump" aria-label="Walks and hikes page sections">
        <div className="shell"><strong>Jump to</strong><a href="#map">Map and filters</a><a href="#guides">Place guides</a><a href="#fire-safety">Fire rules</a><a href="#before-you-go">Before you go</a></div>
      </nav>

      <section className="shell section" id="map">
        <div className="section-heading hike-page-heading"><div><p className="eyebrow">Nine good starting points</p><h2>Choose by place, time or facilities.</h2></div><p>This first collection stays close enough to Helsinki for a realistic day out. More Uusimaa routes will follow once their practical details have been checked properly.</p></div>
        <HikesMap hikes={hikeGuides} />
      </section>

      <section className="hike-guides" id="guides" aria-labelledby="hike-guides-heading">
        <div className="shell section">
          <div className="section-heading hike-page-heading"><div><p className="eyebrow">Know what you are walking into</p><h2 id="hike-guides-heading">The useful details for each place.</h2></div><p>These are starting guides, not promises that every toilet is open or every shelter has wood. Always open the official source before travelling.</p></div>
          <div className="hike-guide-list">
            {hikeGuides.map((hike, index) => (
              <article className="hike-guide" id={hike.slug} key={hike.slug}>
                {hike.image && <div className="hike-guide__image"><Image src={hike.image.src} alt={hike.image.alt} fill sizes="(max-width: 800px) 100vw, 38vw" style={{ objectPosition: hike.image.position ?? 'center' }} /></div>}
                <div className="hike-guide__body">
                  <div className="hike-guide__title"><span>{String(index + 1).padStart(2, '0')}</span><div><p className="eyebrow">{hike.area} · {hike.landscape}</p><h3>{hike.name}</h3></div></div>
                  <p className="hike-guide__summary">{hike.summary}</p>
                  <dl className="hike-guide__facts">
                    <div><dt>Start here</dt><dd>{hike.start}</dd></div>
                    <div><dt>Allow</dt><dd>{hike.duration}</dd></div>
                    <div><dt>Difficulty</dt><dd>{hike.difficulty}</dd></div>
                    <div><dt>Without a car</dt><dd>{hike.carFree}</dd></div>
                  </dl>
                  <div className="hike-guide__route"><strong>A sensible plan</strong><p>{hike.route}</p></div>
                  <div className="hike-guide__practical">
                    <section><span>Fire and food</span><p>{hike.grill}</p></section>
                    <section><span>Toilets and water</span><p>{hike.toilets} {hike.water}</p></section>
                    <section><span>Families</span><p>{hike.family}</p></section>
                    <section><span>Winter</span><p>{hike.winter}</p></section>
                    <section><span>Getting there</span><p>{hike.transport}</p></section>
                  </div>
                  <aside className="hike-guide__honest"><strong>The honest bit</strong><p>{hike.honest}</p></aside>
                  <div className="hike-guide__links">
                    <a href={hike.officialUrl} target="_blank" rel="noreferrer">{hike.officialLabel} ↗</a>
                    <a href={hikeHslUrl(hike)} target="_blank" rel="noreferrer">Plan with HSL ↗</a>
                    <a href={hikeGoogleMapsUrl(hike)} target="_blank" rel="noreferrer">Driving directions ↗</a>
                  </div>
                  <small className="hike-guide__checked">Details checked {hike.lastChecked}. Conditions and services can change.</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hike-fire" id="fire-safety" aria-labelledby="fire-safety-heading">
        <div className="shell section hike-fire__inner">
          <div><p className="eyebrow">Before the sausages come out</p><h2 id="fire-safety-heading">Four fire rules that prevent a very Finnish telling-off.</h2><p>Rules belong to the specific landowner and nature area. “There was already a circle of stones” does not make it an official campfire site.</p></div>
          <ol>
            <li><span>01</span><div><strong>Use a designated fire site</strong><p>Open fire requires the landowner’s permission. Use the maintained shelter or fireplace shown by the official area information.</p></div></li>
            <li><span>02</span><div><strong>Check the warning</strong><p>Open <a href="https://en.ilmatieteenlaitos.fi/warnings" target="_blank" rel="noreferrer">the Finnish Meteorological Institute warning map</a> on the day. Restrictions can override the nice plan.</p></div></li>
            <li><span>03</span><div><strong>A disposable grill is still an open fire</strong><p>It does not become harmless because it came from the supermarket wrapped in foil.</p></div></li>
            <li><span>04</span><div><strong>Bring what the site requires</strong><p>Some shelters provide wood and others expect your own wood or charcoal. Never strip branches or collect dead wood without permission.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="shell section hike-checklist" id="before-you-go" aria-labelledby="hike-checklist-heading">
        <div><p className="eyebrow">Five minutes before leaving</p><h2 id="hike-checklist-heading">The boring checks make the good day possible.</h2></div>
        <ul>
          <li><strong>Exact starting point</strong><span>Large nature areas have several entrances that do not conveniently connect.</span></li>
          <li><strong>Return connection</strong><span>Save one backup bus and remember that rural Sunday service is not metro service.</span></li>
          <li><strong>Daylight and weather</strong><span>Autumn darkness and freezing rain can turn a short route into a navigation problem.</span></li>
          <li><strong>Offline map and battery</strong><span>Download the route and do not spend the last ten percent filming the lake.</span></li>
          <li><strong>Water, food and one extra layer</strong><span>Cafés, kiosks and taps are helpful extras, not a hiking plan.</span></li>
          <li><strong>Leave no trace</strong><span>Carry rubbish out, keep dogs controlled and follow reserve-specific rules.</span></li>
        </ul>
      </section>
    </main>
  )
}

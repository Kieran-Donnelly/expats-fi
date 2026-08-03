import type { Metadata } from 'next'

import { EmbassyCard } from '@/components/EmbassyCard'
import { representationLabels } from '@/lib/embassies'
import { getEmbassies } from '@/lib/content'
import type { Embassy } from '@/payload-types'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Embassies and consulates for every country in Finland',
  description: 'Find the embassy, accredited mission, honorary consulate or best official contact for every country while living in Finland.',
}

const regions: Embassy['region'][] = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania']
const representationTypes: Embassy['representationType'][] = ['resident-embassy', 'representative-office', 'non-resident-embassy', 'honorary-consulate', 'foreign-ministry']

export default async function EmbassiesPage({ searchParams }: { searchParams: Promise<{ q?: string; region?: string; type?: string }> }) {
  const { q = '', region = '', type = '' } = await searchParams
  const [embassies, allEmbassies] = await Promise.all([
    getEmbassies({ query: q || undefined, region: region || undefined, representationType: type || undefined }),
    getEmbassies(),
  ])
  const residentCount = allEmbassies.filter((embassy) => embassy.representationType === 'resident-embassy' || embassy.representationType === 'representative-office').length
  const accreditedCount = allEmbassies.filter((embassy) => embassy.representationType === 'non-resident-embassy').length
  const otherOfficialContacts = allEmbassies.length - residentCount - accreditedCount

  return (
    <main id="main">
      <header className="page-hero embassy-hero">
        <div className="shell page-hero__inner">
          <p className="eyebrow">Diplomatic directory</p>
          <h1>Find your country’s representation in Finland.</h1>
          <p>Every country is included. Where there is no embassy in Finland, we show the accredited embassy abroad, an honorary consulate, or the best official fallback.</p>
          <div className="coverage-summary" aria-label="Directory coverage">
            <strong>{allEmbassies.length} countries covered</strong>
            <span>{residentCount} embassies and offices in Helsinki · {accreditedCount} non-resident embassies · {otherOfficialContacts} other official contacts</span>
          </div>
        </div>
      </header>
      <section className="shell listing-section" aria-label="Embassy directory">
        <div className="source-notice"><strong>Official starting point</strong><p>Representation details can change. Records were checked against the Finnish Ministry for Foreign Affairs’ Helsinki Diplomatic List on 3 August 2026.</p><a href="https://um.fi/the-helsinki-diplomatic-list" target="_blank" rel="noreferrer">Open the official diplomatic list ↗</a></div>
        <form className="filter-form embassy-filter" action="/embassies/" method="get" role="search">
          <label>Country or city<input name="q" defaultValue={q} placeholder="India, Helsinki, Stockholm…" /></label>
          <label>Region<select name="region" defaultValue={region}><option value="">All regions</option>{regions.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label>Representation<select name="type" defaultValue={type}><option value="">All types</option>{representationTypes.map((item) => <option key={item} value={item}>{representationLabels[item]}</option>)}</select></label>
          <button type="submit">Find a mission</button>
        </form>
        <p className="results-note">{embassies.length} {embassies.length === 1 ? 'country' : 'countries'} found</p>
        {embassies.length ? <div className="embassy-grid">{embassies.map((embassy) => <EmbassyCard embassy={embassy} key={embassy.id} />)}</div> : <div className="empty-state"><h2>No countries match those filters</h2><p>Try a country name, capital, or remove one of the filters.</p></div>}
      </section>
    </main>
  )
}

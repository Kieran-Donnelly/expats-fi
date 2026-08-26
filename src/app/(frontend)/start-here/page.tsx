import type { Metadata } from 'next'
import Link from 'next/link'

import { SectionHero } from '@/components/SectionHero'
import { settlingGuides } from '@/data/settling'

export const metadata: Metadata = {
  title: 'Start here: your first months in Finland',
  description: 'A practical route through permits, registration, banking, tax, Kela, healthcare and digital services during your first 90 days in Finland.',
  alternates: { canonical: '/start-here/' },
}

const arrivalStages = [
  { number: '01', title: 'Before you arrive', detail: 'Legal route, documents, money buffer and medication', href: '/start-here/first-90-days-in-finland/' },
  { number: '02', title: 'The first two weeks', detail: 'Daily life, Migri, DVV, your address and tax', href: '/start-here/first-90-days-in-finland/' },
  { number: '03', title: 'The first month', detail: 'Banking, identification, Kela, healthcare and home services', href: '/start-here/first-90-days-in-finland/' },
  { number: '04', title: 'By day 90', detail: 'Language, community, family, work and a routine that sticks', href: '/start-here/first-90-days-in-finland/' },
] as const

const systems = [
  { label: 'Permission to stay', name: 'Migri', description: 'Residence permits, EU registration and immigration applications.', url: 'https://migri.fi/en/permits-and-citizenship' },
  { label: 'Your official details', name: 'DVV', description: 'Personal data, identity code, address and municipality of residence.', url: 'https://dvv.fi/en/foreigner-registration' },
  { label: 'Tax and tax cards', name: 'Vero', description: 'Tax cards, tax residency, MyTax and working in Finland.', url: 'https://www.vero.fi/en/individuals/tax-cards-and-tax-returns/arriving_in_finland/' },
  { label: 'Benefits', name: 'Kela', description: 'Benefit eligibility, Kela cards and notifying Kela of your move.', url: 'https://www.kela.fi/moving-to-finland' },
] as const

export default function StartHerePage() {
  return (
    <main id="main" className="family-hub">
      <SectionHero
        eyebrow="Start here"
        title="Your first months in Finland, without doing everything twice."
        intro="One calm route through the authorities, accounts and ordinary jobs that turn arriving in Finland into actually living here."
        noteLabel="Start here first"
        noteTitle="One job at a time."
        noteBody="Open the 90-day route, find the step that applies today and keep a note of what each office still needs."
      />

      <section className="shell family-stages" aria-labelledby="arrival-stages-heading">
        <div className="section-heading"><div><p className="eyebrow">Follow the timeline</p><h2 id="arrival-stages-heading">Do what matters now. Let the rest wait.</h2></div><p>The exact route changes by citizenship and life situation, but the order below will stop six separate systems becoming one giant blur.</p></div>
        <div className="family-stage-grid">{arrivalStages.map((stage) => <Link href={stage.href} key={stage.number}><span>{stage.number}</span><strong>{stage.title}</strong><small>{stage.detail}</small><i aria-hidden="true">→</i></Link>)}</div>
      </section>

      <section className="family-systems" aria-labelledby="arrival-systems-heading">
        <div className="shell section">
          <div className="section-heading family-systems__heading"><div><p className="eyebrow">Four separate decisions</p><h2 id="arrival-systems-heading">The offices are connected. They are not interchangeable.</h2></div><p>An identity code is not a residence permit. A municipality of residence is not Kela approval. Knowing who owns each decision makes the entire move calmer.</p></div>
          <div className="family-system-grid">{systems.map((system) => <a href={system.url} target="_blank" rel="noreferrer" key={system.name}><small>{system.label}</small><strong>{system.name}</strong><p>{system.description}</p><span>Official starting point ↗</span></a>)}</div>
          <div className="family-maisa-tip"><span>Worth knowing</span><div><strong>Progress in one system does not always complete another.</strong><p>Keep the reference number, date and next action for every application. Ask each office whether you must contact the next one yourself.</p></div><Link href="/start-here/first-90-days-in-finland/">Open the full pathway →</Link></div>
        </div>
      </section>

      <section className="shell section family-guides" aria-labelledby="settling-guides-heading">
        <div className="section-heading"><div><p className="eyebrow">The properly useful guides</p><h2 id="settling-guides-heading">Start with the route, then learn the digital keys.</h2></div><p>Both guides are designed to be followed, bookmarked and returned to as each new piece comes online.</p></div>
        <div className="family-guide-grid">{settlingGuides.map((guide) => <article className="family-guide-card" key={guide.slug}><div><span>{guide.number}</span><small>{guide.label}</small></div><h3><Link href={`/start-here/${guide.slug}/`}>{guide.title}</Link></h3><p>{guide.summary}</p><Link className="text-link" href={`/start-here/${guide.slug}/`}>Open the guide <span aria-hidden="true">→</span></Link></article>)}</div>
      </section>

      <section className="family-real-life" aria-labelledby="arrival-habits-heading">
        <div className="shell family-real-life__inner"><div className="family-real-life__copy"><p className="eyebrow">The habits that help</p><h2 id="arrival-habits-heading">You do not need to sort everything in your first week.</h2><p>Finland will still be here if the bank appointment takes another week. Keep moving one dependency at a time.</p></div><ol className="family-real-life__list"><li><span>01</span><div><strong>Book scarce appointments early.</strong><p>You can keep researching while the appointment date approaches.</p></div></li><li><span>02</span><div><strong>Use one exact version of your name.</strong><p>Match your identity document unless an authority tells you otherwise.</p></div></li><li><span>03</span><div><strong>Keep a tiny application timeline.</strong><p>Date, office, reference number, missing item and next follow-up.</p></div></li><li><span>04</span><div><strong>Do not share bank credentials.</strong><p>Use proper authorisations when a partner or trusted person helps.</p></div></li><li><span>05</span><div><strong>Build one recurring human routine.</strong><p>A class, club, café or group helps the country feel like somewhere you live.</p></div></li></ol></div>
      </section>
    </main>
  )
}

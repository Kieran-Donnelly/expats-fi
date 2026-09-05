import type { Metadata } from 'next'
import Link from 'next/link'

import { RelatedBusinesses } from '@/components/RelatedBusinesses'
import { SectionHero } from '@/components/SectionHero'
import { housingGuides } from '@/data/housing'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Housing in Finland: finding, renting and running your home',
  description: 'Warm, practical guides to finding a rental home, understanding Finnish leases, setting up utilities and solving housing problems.',
  alternates: { canonical: '/housing/' },
}

const housingStages = [
  { number: '01', title: 'I need a home', detail: 'Search routes, applications, viewings and scam checks', href: '/housing/finding-a-rental-home-in-finland/' },
  { number: '02', title: 'I have been offered one', detail: 'Lease type, deposit, extra costs and move-in evidence', href: '/housing/lease-deposit-and-moving-in/' },
  { number: '03', title: 'I have the keys', detail: 'Electricity, insurance, internet, water and maintenance', href: '/housing/setting-up-and-running-your-home/' },
  { number: '04', title: 'Something has gone wrong', detail: 'Repairs, rent trouble, complaints and moving out', href: '/housing/repairs-rent-trouble-and-moving-out/' },
] as const

const monthlyCosts = [
  { label: 'The main payment', name: 'Rent', description: 'Check the due date and the written basis for any future review.', href: '/housing/lease-deposit-and-moving-in/' },
  { label: 'Often separate', name: 'Water', description: 'May be fixed per resident, included or adjusted using a meter.', href: '/housing/setting-up-and-running-your-home/' },
  { label: 'Usually your contract', name: 'Electricity', description: 'Compare the seller’s terms and remember the local distribution charge.', href: '/housing/setting-up-and-running-your-home/' },
  { label: 'Easy to miss', name: 'The extras', description: 'Insurance, internet, parking, sauna, laundry and heating can change the total.', href: '/housing/setting-up-and-running-your-home/' },
] as const

export default function HousingPage() {
  return (
    <main id="main" className="family-hub">
      <SectionHero
        eyebrow="Housing in Finland"
        title="Find a home, understand the paperwork and know who to call."
        intro="A practical route from the first rental search to getting your deposit back, including the bits that are easy to miss when everything is in Finnish."
        noteLabel="Before you apply"
        noteTitle="Get your paperwork into one folder."
        noteBody="Keep your ID, income details, references and a short introduction ready. Good rentals can move quickly."
        image={{ src: '/images/heroes/housing-helsinki-apartments.webp', position: 'center 52%' }}
      />

      <section className="shell family-stages" aria-labelledby="housing-stages-heading">
        <div className="section-heading"><div><p className="eyebrow">Start with where you are</p><h2 id="housing-stages-heading">What are you trying to sort out today?</h2></div><p>Finding the flat, signing for it, running it and solving a problem are different jobs. Jump straight to the one in front of you.</p></div>
        <div className="family-stage-grid">{housingStages.map((stage) => <Link href={stage.href} key={stage.number}><span>{stage.number}</span><strong>{stage.title}</strong><small>{stage.detail}</small><i aria-hidden="true">→</i></Link>)}</div>
      </section>

      <section className="family-systems" aria-labelledby="housing-costs-heading">
        <div className="shell section">
          <div className="section-heading family-systems__heading"><div><p className="eyebrow">The real monthly total</p><h2 id="housing-costs-heading">The headline rent is only the first number.</h2></div><p>Ask what is included before comparing two homes. Water, heating and building services can make similar rents behave very differently.</p></div>
          <div className="family-system-grid">{monthlyCosts.map((cost) => <Link href={cost.href} key={cost.name}><small>{cost.label}</small><strong>{cost.name}</strong><p>{cost.description}</p><span>Understand this cost →</span></Link>)}</div>
          <div className="family-maisa-tip"><span>Worth doing</span><div><strong>Photograph the empty home before the boxes arrive.</strong><p>Record every existing mark, supplied appliance, key and meter reading. Send the condition report through a traceable channel.</p></div><Link href="/housing/lease-deposit-and-moving-in/">Open the move-in guide →</Link></div>
        </div>
      </section>

      <section className="shell section family-guides" aria-labelledby="housing-guides-heading">
        <div className="section-heading"><div><p className="eyebrow">The housing guides</p><h2 id="housing-guides-heading">Four stages, properly explained.</h2></div><p>Each guide gives you the order, the evidence worth keeping and the official place to check the current answer.</p></div>
        <div className="family-guide-grid">{housingGuides.map((guide) => <article className="family-guide-card" key={guide.slug}><div><span>{guide.number}</span><small>{guide.label}</small></div><h3><Link href={`/housing/${guide.slug}/`}>{guide.title}</Link></h3><p>{guide.summary}</p>{guide.tags && <div className="explore-card__tags">{guide.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}<Link className="text-link" href={`/housing/${guide.slug}/`}>Open the guide <span aria-hidden="true">→</span></Link></article>)}</div>
      </section>

      <RelatedBusinesses
        eyebrow="Expat-owned home help"
        title="Need somebody to work on the actual home?"
        intro="Meet English-speaking people from our directory who can help with repairs, carpentry, building work and renovations."
        categories={['Carpentry & building', 'Renovations']}
        directoryCategory="Trades"
      />

      <section className="shell family-local-note"><div><p className="eyebrow">When it feels urgent</p><h2>Ask for housing help early.</h2></div><p>Helsinki housing counselling can help residents with applications, rental agreements, rent-payment problems and other housing difficulties. A conversation after the first missed payment is far easier than one after several.<br /><a className="text-link" href="https://www.hel.fi/en/health-and-social-services/social-support-and-financial-assistance/guidance-and-advice/housing-counselling" target="_blank" rel="noreferrer">Open Helsinki housing counselling ↗</a></p></section>
    </main>
  )
}

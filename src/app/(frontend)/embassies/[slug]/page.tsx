import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { representationLabels, representationSummary } from '@/lib/embassies'
import { getEmbassy } from '@/lib/content'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const embassy = await getEmbassy((await params).slug)
  if (!embassy) return {}
  return {
    title: `${embassy.country} embassy or official representation for Finland`,
    description: representationSummary(embassy),
  }
}

export default async function EmbassyPage({ params }: { params: Promise<{ slug: string }> }) {
  const embassy = await getEmbassy((await params).slug)
  if (!embassy) notFound()

  return (
    <main id="main" className="shell detail-shell embassy-profile">
      <Link className="back-link" href="/embassies/">← All embassies and missions</Link>
      <header className="embassy-profile__header">
        <div>
          <p className="eyebrow">{embassy.region} · {embassy.countryCode}</p>
          <h1>{embassy.country}</h1>
          <p className="embassy-profile__summary">{representationSummary(embassy)}</p>
        </div>
        <span className={`fi fi-${embassy.countryCode.toLowerCase()} country-flag country-flag--large`} aria-hidden="true" />
      </header>
      <div className="embassy-profile__body">
        <section>
          <span className={`representation-badge representation-badge--${embassy.representationType}`}>{representationLabels[embassy.representationType]}</span>
          <h2>{embassy.missionName}</h2>
          <p>{embassy.notes}</p>
          <div className="verification-callout"><strong>Check before you visit or send documents</strong><p>Opening hours, appointment rules, addresses and consular responsibilities change. Confirm the current details with the mission or the Finnish diplomatic directory first.</p></div>
        </section>
        <aside className="facts embassy-facts">
          <div><strong>Based in</strong><span>{embassy.city}, {embassy.hostCountry}</span></div>
          <div><strong>Representation</strong><span>{representationLabels[embassy.representationType]}</span></div>
          <div><strong>Last checked</strong><span>{new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(new Date(embassy.lastVerifiedAt))}</span></div>
          {embassy.website && <div><strong>Mission website</strong><a href={embassy.website} target="_blank" rel="noreferrer">Open official website ↗</a></div>}
          {embassy.phone && <div><strong>Phone</strong><a href={`tel:${embassy.phone}`}>{embassy.phone}</a></div>}
          {embassy.email && <div><strong>Email</strong><a href={`mailto:${embassy.email}`}>{embassy.email}</a></div>}
          {embassy.address && <div><strong>Address</strong><span>{embassy.address}</span></div>}
          <a className="button" href={embassy.sourceUrl} target="_blank" rel="noreferrer">Verify in official directory</a>
        </aside>
      </div>
    </main>
  )
}

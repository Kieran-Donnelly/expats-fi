import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getBusiness, labels } from '@/lib/content'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const business = await getBusiness(slug)
  if (!business) return {}
  return { title: business.name, description: business.summary, alternates: { canonical: `/businesses/${business.slug}/` } }
}

export default async function BusinessPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const business = await getBusiness(slug)
  if (!business) notFound()
  const categories = labels(business.categories)
  const locations = labels(business.locations)

  return (
    <main id="main"><div className="shell detail-shell business-profile">
      <Link className="back-link" href="/businesses/">← Business directory</Link>
      <header className="business-profile__header"><div><p className="eyebrow">{categories.join(' · ')}</p><h1>{business.name}</h1><p className="business-profile__summary">{business.summary}</p></div><div className="business-profile__mark" aria-hidden="true">{business.name.slice(0, 1)}</div></header>
      <div className="business-profile__body"><article><h2>About {business.name}</h2><p>{business.description}</p></article><aside className="facts"><div><strong>Locations</strong><span>{locations.join(', ')}</span></div><div><strong>Address or service area</strong><span>{business.address}</span></div>{business.phone && <div><strong>Phone</strong><a href={`tel:${business.phone.replace(/\s/g, '')}`}>{business.phone}</a></div>}<div><strong>Website</strong><a href={business.website} target="_blank" rel="noreferrer">Visit {business.name} ↗</a></div></aside></div>
    </div></main>
  )
}

import Link from 'next/link'
import type { Business } from '@/payload-types'
import { labels } from '@/lib/content'

export function BusinessCard({ business }: { business: Business }) {
  const categories = labels(business.categories)
  const locations = labels(business.locations)
  return (
    <article className="business-card">
      <div className="business-card__mark" aria-hidden="true">{business.name.slice(0, 1)}</div>
      <div className="business-card__meta"><span>{categories[0]}</span><span>{locations.join(' · ')}</span></div>
      <h3><Link href={`/businesses/${business.slug}/`}>{business.name}</Link></h3>
      <p>{business.summary}</p>
      <Link className="text-link" href={`/businesses/${business.slug}/`}>View business <span aria-hidden="true">→</span></Link>
    </article>
  )
}

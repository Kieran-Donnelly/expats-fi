import Link from 'next/link'

import type { ExploreListing } from '@/data/explore'

export function ExploreCard({ listing }: { listing: ExploreListing }) {
  const accessClass = listing.access === 'Free' ? ' explore-badge--free' : listing.access === 'Temporarily closed' ? ' explore-badge--closed' : ''

  return (
    <article className="explore-card">
      <div className="explore-card__topline"><span>{listing.category}</span><span>{listing.area}</span></div>
      <div className="explore-card__tags">{listing.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
      <h3><Link href={`/explore/${listing.slug}/`}>{listing.name}</Link></h3>
      <p>{listing.blurb}</p>
      <div className="explore-card__access">
        <span className={`explore-badge${accessClass}`}>{listing.access}</span>
        <p>{listing.priceNote}</p>
      </div>
      {listing.freeTip && <div className="explore-card__free"><strong>Free tip</strong><span>{listing.freeTip}</span></div>}
      <div className="explore-card__footer">
        <span>{listing.familyFriendly ? 'Family-friendly' : listing.indoor ? 'Indoor option' : 'Outdoor pick'}</span>
        <Link className="text-link" href={`/explore/${listing.slug}/`}>Plan the visit <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  )
}

import Link from 'next/link'

import type { SportsListing } from '@/data/sports'

export function SportsCard({ listing }: { listing: SportsListing }) {
  return (
    <article className="sports-card">
      <div className="sports-card__topline">
        <span>{listing.type}</span>
        <span>{listing.area}</span>
      </div>
      <div className="sports-card__sports">{listing.sports.slice(0, 3).map((sport) => <span key={sport}>{sport}</span>)}</div>
      <h3><Link href={`/sports/${listing.slug}/`}>{listing.name}</Link></h3>
      <p>{listing.blurb}</p>
      <dl className="sports-card__facts">
        <div><dt>Level</dt><dd>{listing.level}</dd></div>
        <div><dt>Cost</dt><dd>{listing.cost}</dd></div>
      </dl>
      <div className="sports-card__footer">
        {listing.beginnerFriendly ? <span className="sports-badge">Beginner-friendly</span> : <span className="sports-badge sports-badge--neutral">Check your level</span>}
        <Link className="text-link" href={`/sports/${listing.slug}/`}>See how to join <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  )
}

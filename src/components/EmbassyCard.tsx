import Link from 'next/link'

import { representationLabels, representationSummary } from '@/lib/embassies'
import type { Embassy } from '@/payload-types'

export function EmbassyCard({ embassy }: { embassy: Embassy }) {
  return (
    <article className="embassy-card">
      <div className="embassy-card__top">
        <span className={`fi fi-${embassy.countryCode.toLowerCase()} country-flag`} aria-hidden="true" />
        <span className={`representation-badge representation-badge--${embassy.representationType}`}>{representationLabels[embassy.representationType]}</span>
      </div>
      <p className="embassy-card__region">{embassy.region}</p>
      <h2><Link href={`/embassies/${embassy.slug}/`}>{embassy.country}</Link></h2>
      <p>{representationSummary(embassy)}</p>
      <div className="embassy-card__location"><span aria-hidden="true">⌖</span><span>{embassy.city}, {embassy.hostCountry}</span></div>
      <Link className="text-link" href={`/embassies/${embassy.slug}/`}>View representation <span aria-hidden="true">→</span></Link>
    </article>
  )
}

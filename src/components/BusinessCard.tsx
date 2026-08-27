import Image from 'next/image'
import Link from 'next/link'
import type { Business } from '@/payload-types'
import { labels } from '@/lib/content'

import { SaveBusinessButton } from './SaveBusinessButton'

function businessImage(business: Business): { src: string; alt: string; unoptimized: boolean } | null {
  const media = business.image && typeof business.image === 'object' ? business.image : null
  const src = media?.url || media?.thumbnailURL || business.imagePath || ''
  if (!src) return null

  return {
    src,
    alt: media?.alt || business.imageAlt || business.name,
    unoptimized: /^https?:\/\//.test(src),
  }
}

export function BusinessCard({ business, saved = false, showSave = false }: { business: Business; saved?: boolean; showSave?: boolean }) {
  const categories = labels(business.categories)
  const locations = labels(business.locations)
  const image = businessImage(business)
  const href = `/businesses/${business.slug}/`

  return (
    <article className="business-card">
      {image ? (
        <Link className="business-card__image" href={href} aria-label={`View ${business.name}`}>
          <Image
            src={image.src}
            alt={image.alt}
            width={960}
            height={600}
            sizes="(max-width: 720px) calc(100vw - 2.5rem), (max-width: 1100px) 50vw, 33vw"
            unoptimized={image.unoptimized}
          />
        </Link>
      ) : (
        <div className="business-card__mark" aria-hidden="true">{business.name.slice(0, 1)}</div>
      )}
      <div className="business-card__meta"><span>{categories[0]}</span><span>{locations.join(' · ')}</span></div>
      <h3><Link href={href}>{business.name}</Link></h3>
      <p>{business.summary}</p>
      <div className="business-card__actions">
        <Link className="text-link" href={href}>View business <span aria-hidden="true">→</span></Link>
        {showSave && <SaveBusinessButton businessSlug={business.slug} initialSaved={saved} compact />}
      </div>
    </article>
  )
}

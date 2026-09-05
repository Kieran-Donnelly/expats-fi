import Link from 'next/link'

import { getBusinesses, labels } from '@/lib/content'

import { BusinessCard } from './BusinessCard'

type RelatedBusinessesProps = {
  eyebrow: string
  title: string
  intro: string
  categories?: string[]
  slugs?: string[]
  directoryCategory?: string
  limit?: number
}

export async function RelatedBusinesses({
  eyebrow,
  title,
  intro,
  categories = [],
  slugs = [],
  directoryCategory,
  limit = 3,
}: RelatedBusinessesProps) {
  const allBusinesses = await getBusinesses({ limit: 100 })
  const slugOrder = new Map(slugs.map((slug, index) => [slug, index]))
  const businesses = allBusinesses
    .filter((business) => (
      slugs.includes(business.slug) ||
      labels(business.categories).some((category) => categories.includes(category))
    ))
    .sort((left, right) => {
      const leftOrder = slugOrder.get(left.slug) ?? Number.MAX_SAFE_INTEGER
      const rightOrder = slugOrder.get(right.slug) ?? Number.MAX_SAFE_INTEGER
      return leftOrder - rightOrder || left.name.localeCompare(right.name)
    })
    .slice(0, limit)

  if (!businesses.length) return null

  const directoryHref = directoryCategory
    ? `/businesses/?category=${encodeURIComponent(directoryCategory)}#business-directory`
    : '/businesses/#business-directory'

  return (
    <section className="related-businesses" aria-label={`${title} from the business directory`}>
      <div className="shell section">
        <div className="section-heading related-businesses__heading">
          <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{intro}</p></div>
          <Link className="text-link" href={directoryHref}>Browse the directory <span aria-hidden="true">→</span></Link>
        </div>
        <div className="business-grid related-business-grid" data-count={businesses.length}>
          {businesses.map((business) => <BusinessCard business={business} key={business.id} />)}
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EditorialGuideDetail } from '@/components/EditorialGuideDetail'
import { AreaEatsSection } from '@/components/AreaEatsSection'
import { RelatedBusinesses } from '@/components/RelatedBusinesses'
import { areaGuides, getAreaGuide } from '@/data/areas'
import { areaBusinessSlugs } from '@/data/business-area-connections'
import { socialMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return areaGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getAreaGuide(slug)
  if (!guide) return {}
  return socialMetadata({ title: guide.title, description: guide.summary, path: `/areas/${guide.slug}/`, image: '/images/heroes/areas-helsinki-street.webp' })
}

export default async function AreaGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getAreaGuide(slug)
  if (!guide) notFound()
  const businessSlugs = areaBusinessSlugs[guide.slug] || []

  return (
    <EditorialGuideDetail
      guide={guide}
      guides={areaGuides}
      hubHref="/areas/"
      hubLabel="Helsinki neighbourhoods"
      relatedHeading="Try another part of Helsinki"
      reviewedAt="25 August 2026"
      extraSection={(
        <>
          <AreaEatsSection area={guide.label} />
          {businessSlugs.length > 0 && (
            <RelatedBusinesses
              eyebrow="From the neighbourhood directory"
              title={`Expat-owned places in ${guide.label}.`}
              intro="These businesses have chosen to join our directory. Open a profile for the fuller founder story, practical details and the best way to get in touch."
              slugs={businessSlugs}
              limit={3}
            />
          )}
        </>
      )}
    />
  )
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EditorialGuideDetail } from '@/components/EditorialGuideDetail'
import { AreaEatsSection } from '@/components/AreaEatsSection'
import { RelatedBusinesses } from '@/components/RelatedBusinesses'
import { areaGuides, getAreaGuide } from '@/data/areas'
import { areaBusinessSlugs } from '@/data/business-area-connections'
import { socialMetadata } from '@/lib/seo'

const seoOverrides: Record<string, { title: string; description: string }> = {
  'vallila-and-konepaja': {
    title: 'Vallila and Konepaja Helsinki: neighbourhood guide',
    description: 'Explore Vallila and Konepaja in Helsinki, including wooden streets, cafés, restaurants, culture, events, transport and honest notes about living locally.',
  },
}

const guideImages: Record<string, {
  src: string
  position: string
  credit?: { label: string; href: string }
}> = {
  'kallio-and-hakaniemi': { src: '/images/heroes/areas-kallio.jpg', position: 'center 52%' },
  'punavuori-and-the-design-district': { src: '/images/heroes/areas-punavuori.jpg', position: 'center 54%' },
  toolo: { src: '/images/heroes/areas-toolo.jpg', position: 'center 46%' },
  'kruununhaka-and-katajanokka': { src: '/images/heroes/areas-kruununhaka.jpg', position: 'center 48%' },
  'herttoniemi-and-roihuvuori': { src: '/images/heroes/areas-roihuvuori.jpg', position: 'center 58%' },
  'kamppi-and-kluuvi': { src: '/images/heroes/areas-kamppi.jpg', position: 'center 48%' },
  'eira-and-ullanlinna': { src: '/images/heroes/areas-eira.jpg', position: 'center 50%' },
  'vallila-and-konepaja': { src: '/images/heroes/areas-vallila.jpg', position: 'center 52%' },
  'arabia-and-vanhakaupunki': { src: '/images/heroes/areas-arabia-vanhakaupunki.jpg', position: 'center 52%' },
  lauttasaari: {
    src: '/images/heroes/areas-lauttasaari.jpg',
    position: 'center 54%',
    credit: {
      label: 'Giuseppe Milo, CC BY 3.0',
      href: 'https://commons.wikimedia.org/wiki/File:A_Sunset_In_Lauttasaari_Helsinki_Finland_Seascape_Photography_(153009409).jpeg',
    },
  },
  'vuosaari-and-uutela': {
    src: '/images/heroes/areas-vuosaari-uutela.jpg',
    position: 'center 48%',
    credit: {
      label: 'Timo Newton-Syms, CC BY-SA 2.0',
      href: 'https://commons.wikimedia.org/wiki/File:Uutela_(7585301066).jpg',
    },
  },
}

export function generateStaticParams() {
  return areaGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getAreaGuide(slug)
  if (!guide) return {}
  const seo = seoOverrides[guide.slug]
  return socialMetadata({ title: seo?.title || guide.title, description: seo?.description || guide.summary, path: `/areas/${guide.slug}/`, image: guideImages[guide.slug]?.src || '/images/heroes/areas-helsinki-street.webp' })
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
      reviewedAt="2026-08-25"
      heroImage={guideImages[guide.slug]}
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

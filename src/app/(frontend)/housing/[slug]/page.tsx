import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EditorialGuideDetail } from '@/components/EditorialGuideDetail'
import { getHousingGuide, housingGuides } from '@/data/housing'
import { socialMetadata } from '@/lib/seo'

const guideImages: Record<string, { src: string; position: string }> = {
  'lease-deposit-and-moving-in': { src: '/images/heroes/housing-lease-keys.avif', position: 'center 50%' },
}

export function generateStaticParams() {
  return housingGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getHousingGuide(slug)
  if (!guide) return {}
  return socialMetadata({
    title: guide.title,
    description: guide.summary,
    path: `/housing/${guide.slug}/`,
    image: guideImages[guide.slug]?.src || '/images/heroes/housing-helsinki-apartments.webp',
  })
}

export default async function HousingGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getHousingGuide(slug)
  if (!guide) notFound()
  return <EditorialGuideDetail guide={guide} guides={housingGuides} hubHref="/housing/" hubLabel="The Housing hub" relatedHeading="More help with your home" reviewedAt="2026-08-25" heroImage={guideImages[guide.slug]} />
}

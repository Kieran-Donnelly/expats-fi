import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EditorialGuideDetail } from '@/components/EditorialGuideDetail'
import { getSettlingGuide, settlingGuides } from '@/data/settling'
import { socialMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return settlingGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getSettlingGuide(slug)
  if (!guide) return {}
  const title = guide.slug === 'first-90-days-in-finland'
    ? 'First 90 days in Finland: what to do after you arrive'
    : guide.slug === 'digital-finland-survival-kit'
      ? 'Strong identification and online services in Finland'
    : guide.title
  return socialMetadata({ title, description: guide.summary, path: `/start-here/${guide.slug}/`, image: '/images/heroes/start-here-helsinki-station.webp' })
}

export default async function SettlingGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getSettlingGuide(slug)
  if (!guide) notFound()
  return (
    <EditorialGuideDetail
      guide={guide}
      guides={settlingGuides}
      hubHref="/start-here/"
      hubLabel="The Start Here hub"
      relatedHeading="Keep getting settled"
      reviewedAt="2026-08-25"
      heroImage={guide.slug === 'first-90-days-in-finland' ? { src: '/images/heroes/start-here-helsinki-station.webp', position: 'center 58%' } : undefined}
    />
  )
}

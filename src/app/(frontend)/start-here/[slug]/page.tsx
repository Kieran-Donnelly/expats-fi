import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EditorialGuideDetail } from '@/components/EditorialGuideDetail'
import { getSettlingGuide, settlingGuides } from '@/data/settling'

export function generateStaticParams() {
  return settlingGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getSettlingGuide(slug)
  if (!guide) return {}
  return { title: guide.title, description: guide.summary, alternates: { canonical: `/start-here/${guide.slug}/` } }
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
      reviewedAt="25 August 2026"
      heroImage={guide.slug === 'first-90-days-in-finland' ? { src: '/images/heroes/start-here-helsinki-station.webp', position: 'center 58%' } : undefined}
    />
  )
}

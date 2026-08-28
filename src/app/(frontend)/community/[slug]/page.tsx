import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EditorialGuideDetail } from '@/components/EditorialGuideDetail'
import { communityGuides, getCommunityGuide } from '@/data/community'

export function generateStaticParams() {
  return communityGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getCommunityGuide(slug)
  if (!guide) return {}
  return { title: guide.title, description: guide.summary, alternates: { canonical: `/community/${guide.slug}/` } }
}

export default async function CommunityGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getCommunityGuide(slug)
  if (!guide) notFound()
  return <EditorialGuideDetail guide={guide} guides={communityGuides} hubHref="/community/" hubLabel="The Meet People hub" relatedHeading="More ways to find your people" reviewedAt="25 August 2026" />
}

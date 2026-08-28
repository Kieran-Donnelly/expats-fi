import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EditorialGuideDetail } from '@/components/EditorialGuideDetail'
import { getHousingGuide, housingGuides } from '@/data/housing'

export function generateStaticParams() {
  return housingGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getHousingGuide(slug)
  if (!guide) return {}
  return { title: guide.title, description: guide.summary, alternates: { canonical: `/housing/${guide.slug}/` } }
}

export default async function HousingGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getHousingGuide(slug)
  if (!guide) notFound()
  return <EditorialGuideDetail guide={guide} guides={housingGuides} hubHref="/housing/" hubLabel="The Housing hub" relatedHeading="More help with your home" reviewedAt="25 August 2026" />
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EditorialGuideDetail } from '@/components/EditorialGuideDetail'
import { cultureGuides, getCultureGuide } from '@/data/culture'

export function generateStaticParams() {
  return cultureGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getCultureGuide(slug)
  if (!guide) return {}
  return { title: guide.title, description: guide.summary, alternates: { canonical: `/culture/${guide.slug}/` } }
}

export default async function CultureGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getCultureGuide(slug)
  if (!guide) notFound()
  return <EditorialGuideDetail guide={guide} guides={cultureGuides} hubHref="/culture/" hubLabel="How Finland actually works" relatedHeading="More of the cultural bits" />
}

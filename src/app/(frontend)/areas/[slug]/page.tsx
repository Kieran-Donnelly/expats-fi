import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EditorialGuideDetail } from '@/components/EditorialGuideDetail'
import { AreaEatsSection } from '@/components/AreaEatsSection'
import { areaGuides, getAreaGuide } from '@/data/areas'

export function generateStaticParams() {
  return areaGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getAreaGuide(slug)
  if (!guide) return {}
  return { title: guide.title, description: guide.summary, alternates: { canonical: `/areas/${guide.slug}/` } }
}

export default async function AreaGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getAreaGuide(slug)
  if (!guide) notFound()
  return <EditorialGuideDetail guide={guide} guides={areaGuides} hubHref="/areas/" hubLabel="Helsinki neighbourhoods" relatedHeading="Try another part of Helsinki" reviewedAt="25 August 2026" extraSection={<AreaEatsSection area={guide.label} />} />
}

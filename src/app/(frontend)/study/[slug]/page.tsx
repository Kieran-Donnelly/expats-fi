import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EditorialGuideDetail } from '@/components/EditorialGuideDetail'
import { getStudyGuide, studyGuides } from '@/data/study'

export function generateStaticParams() {
  return studyGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getStudyGuide(slug)
  if (!guide) return {}
  return { title: guide.title, description: guide.summary, alternates: { canonical: `/study/${guide.slug}/` } }
}

export default async function StudyGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getStudyGuide(slug)
  if (!guide) notFound()
  return <EditorialGuideDetail guide={guide} guides={studyGuides} hubHref="/study/" hubLabel="The Study in Finland hub" relatedHeading="More ways into Finnish education" reviewedAt="28 August 2026" />
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EditorialGuideDetail } from '@/components/EditorialGuideDetail'
import { familyGuides, getFamilyGuide } from '@/data/family'

export function generateStaticParams() {
  return familyGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getFamilyGuide(slug)
  if (!guide) return {}
  return { title: guide.title, description: guide.summary, alternates: { canonical: `/family/${guide.slug}/` } }
}

export default async function FamilyGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getFamilyGuide(slug)
  if (!guide) notFound()
  return <EditorialGuideDetail guide={guide} guides={familyGuides} hubHref="/family/" hubLabel="The Family hub" relatedHeading="More family life, made clearer" reviewedAt="25 August 2026" tone="warm" />
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EditorialGuideDetail } from '@/components/EditorialGuideDetail'
import { familyGuides, getFamilyGuide } from '@/data/family'
import { socialMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return familyGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getFamilyGuide(slug)
  if (!guide) return {}
  return socialMetadata({ title: guide.title, description: guide.summary, path: `/family/${guide.slug}/`, image: '/images/heroes/family-parents-and-children.webp' })
}

export default async function FamilyGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getFamilyGuide(slug)
  if (!guide) notFound()
  return <EditorialGuideDetail guide={guide} guides={familyGuides} hubHref="/family/" hubLabel="The Family hub" relatedHeading="More family life, made clearer" reviewedAt="25 August 2026" tone="warm" />
}

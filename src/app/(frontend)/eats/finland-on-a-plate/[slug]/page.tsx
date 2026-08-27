import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EditorialGuideDetail } from '@/components/EditorialGuideDetail'
import { finlandFoodGuides, getFinlandFoodGuide } from '@/data/finland-food-guides'

export function generateStaticParams() {
  return finlandFoodGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getFinlandFoodGuide(slug)
  if (!guide) return {}
  return { title: guide.title, description: guide.summary, alternates: { canonical: `/eats/finland-on-a-plate/${guide.slug}/` } }
}

export default async function FinlandFoodGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getFinlandFoodGuide(slug)
  if (!guide) notFound()
  return <EditorialGuideDetail guide={guide} guides={finlandFoodGuides} hubHref="/eats/finland-on-a-plate/" hubLabel="Finland on a Plate" relatedHeading="Keep tasting your way around Finland" tone="warm" />
}

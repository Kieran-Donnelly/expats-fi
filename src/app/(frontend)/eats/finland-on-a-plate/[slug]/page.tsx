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
  const heroImage = slug === 'finnish-dishes-worth-trying'
    ? { src: '/images/heroes/eats-cafe.webp', position: 'center 42%' }
    : slug === 'finnish-food-calendar'
      ? { src: '/images/heroes/areas-helsinki-street.webp', position: 'center 52%' }
      : slug === 'finnish-supermarket-starter-pack'
        ? { src: '/images/heroes/resources-documents-laptop.webp', position: 'center 48%' }
        : { src: '/images/heroes/family-together.webp', position: 'center 44%' }
  return <EditorialGuideDetail guide={guide} guides={finlandFoodGuides} hubHref="/eats/finland-on-a-plate/" hubLabel="Finland on a Plate" relatedHeading="Keep tasting your way around Finland" tone="warm" heroImage={heroImage} />
}

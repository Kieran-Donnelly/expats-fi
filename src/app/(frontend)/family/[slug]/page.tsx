import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EditorialGuideDetail } from '@/components/EditorialGuideDetail'
import { familyGuides, getFamilyGuide } from '@/data/family'
import { socialMetadata } from '@/lib/seo'

const guideImages: Record<string, { src: string; position: string }> = {
  'healthcare-and-maisa': {
    src: '/images/heroes/family-healthcare-maisa.avif',
    position: 'center 42%',
  },
  'babies-and-neuvola': {
    src: '/images/heroes/family-neuvola-baby.avif',
    position: 'center 58%',
  },
  'daycare-and-preschool': {
    src: '/images/heroes/family-daycare-crafts.jpg',
    position: 'center 46%',
  },
}

const seoOverrides: Record<string, { title: string; description: string }> = {
  'babies-and-neuvola': {
    title: 'Neuvola in Helsinki: pregnancy and baby clinics',
    description: 'How Helsinki neuvola services work, including maternity appointments, baby checks, vaccinations, English-language support and how to contact a clinic.',
  },
  'daycare-and-preschool': {
    title: 'Daycare and preschool in Helsinki: applications and fees',
    description: 'How daycare and preschool work in Helsinki, including the four-month application rule, Edlevo, fees, multilingual support and applying before moving.',
  },
}

export function generateStaticParams() {
  return familyGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getFamilyGuide(slug)
  if (!guide) return {}
  const seo = seoOverrides[guide.slug]
  return socialMetadata({
    title: seo?.title || guide.title,
    description: seo?.description || guide.summary,
    path: `/family/${guide.slug}/`,
    image: guideImages[guide.slug]?.src || '/images/heroes/family-parents-and-children.webp',
  })
}

export default async function FamilyGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getFamilyGuide(slug)
  if (!guide) notFound()
  return <EditorialGuideDetail guide={guide} guides={familyGuides} hubHref="/family/" hubLabel="The Family hub" relatedHeading="More family life, made clearer" reviewedAt="2026-08-25" tone="warm" heroImage={guideImages[guide.slug]} />
}

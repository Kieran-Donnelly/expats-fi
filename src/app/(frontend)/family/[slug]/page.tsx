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
  'schooling-in-helsinki': {
    src: '/images/heroes/family-schooling-supplies.jpg',
    position: 'center 58%',
  },
  'teenagers-and-next-steps': {
    src: '/images/heroes/family-teen-next-steps.jpg',
    position: 'center 52%',
  },
  'benefits-and-family-money': {
    src: '/images/heroes/family-benefits-budget.jpg',
    position: 'center 54%',
  },
  'social-services-and-family-support': {
    src: '/images/heroes/family-social-support.jpg',
    position: 'center 68%',
  },
  'community-and-support-groups': {
    src: '/images/heroes/family-community-groups.jpg',
    position: 'center 48%',
  },
  'urgent-help-and-safety': {
    src: '/images/heroes/family-urgent-help.jpg',
    position: 'center 45%',
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

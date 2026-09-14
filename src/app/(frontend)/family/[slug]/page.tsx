import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EditorialGuideDetail } from '@/components/EditorialGuideDetail'
import { familyGuides, getFamilyGuide } from '@/data/family'
import { socialMetadata } from '@/lib/seo'

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
  return socialMetadata({ title: seo?.title || guide.title, description: seo?.description || guide.summary, path: `/family/${guide.slug}/`, image: '/images/heroes/family-parents-and-children.webp' })
}

export default async function FamilyGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getFamilyGuide(slug)
  if (!guide) notFound()
  return <EditorialGuideDetail guide={guide} guides={familyGuides} hubHref="/family/" hubLabel="The Family hub" relatedHeading="More family life, made clearer" reviewedAt="2026-08-25" tone="warm" />
}

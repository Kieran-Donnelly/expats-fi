import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EditorialGuideDetail } from '@/components/EditorialGuideDetail'
import { getStudyGuide, studyGuides } from '@/data/study'
import { socialMetadata } from '@/lib/seo'

const seoOverrides: Record<string, { title: string; description: string }> = {
  'universities-and-universities-of-applied-sciences': {
    title: 'Universities of applied sciences in Finland: UAS guide',
    description: 'Compare Finnish universities and universities of applied sciences, then understand UAS degrees, English programmes, applications, admissions and fees.',
  },
}

const guideImages: Record<string, { src: string; position: string }> = {
  'choosing-the-right-study-route': { src: '/images/heroes/study-oodi-library.avif', position: 'center 55%' },
  'universities-and-universities-of-applied-sciences': { src: '/images/heroes/study-aalto-lecture.avif', position: 'center 50%' },
  'vocational-study-and-apprenticeships': { src: '/images/heroes/study-vocational-workshop.avif', position: 'center 52%' },
  'integration-training-and-finnish-for-working-life': { src: '/images/heroes/study-integration-discussion.avif', position: 'center 50%' },
  'open-university-online-and-flexible-study': { src: '/images/heroes/study-uas-collaboration.avif', position: 'center 50%' },
  'tuition-fees-permits-and-paying-for-study': { src: '/images/heroes/study-fees-budget.avif', position: 'center 48%' },
}

export function generateStaticParams() {
  return studyGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getStudyGuide(slug)
  if (!guide) return {}
  const seo = seoOverrides[guide.slug]
  return socialMetadata({
    title: seo?.title || guide.title,
    description: seo?.description || guide.summary,
    path: `/study/${guide.slug}/`,
    image: guideImages[guide.slug]?.src || '/images/heroes/study-finland-students.webp',
  })
}

export default async function StudyGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getStudyGuide(slug)
  if (!guide) notFound()
  return <EditorialGuideDetail guide={guide} guides={studyGuides} hubHref="/study/" hubLabel="The Study in Finland hub" relatedHeading="More ways into Finnish education" reviewedAt="2026-08-28" heroImage={guideImages[guide.slug]} />
}

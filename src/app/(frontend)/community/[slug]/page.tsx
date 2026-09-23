import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EditorialGuideDetail } from '@/components/EditorialGuideDetail'
import { communityGuides, getCommunityGuide } from '@/data/community'
import { socialMetadata } from '@/lib/seo'

const guideImages: Record<string, { src: string; position: string }> = {
  'where-to-start-when-you-know-nobody': {
    src: '/images/heroes/community-starting-alone.jpg',
    position: 'center 52%',
  },
  'language-cafes-and-international-communities': {
    src: '/images/heroes/community-language-cafe.jpg',
    position: 'center 48%',
  },
  'hobbies-sport-volunteering-and-work-connections': {
    src: '/images/heroes/community-hobbies-volunteer.jpg',
    position: 'center 52%',
  },
  'parents-families-and-meeting-locally': {
    src: '/images/heroes/community-families-local.jpg',
    position: 'center 52%',
  },
  'how-to-host-a-small-meetup-safely': {
    src: '/images/heroes/community-host-meetup.jpg',
    position: 'center 58%',
  },
}

export function generateStaticParams() {
  return communityGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getCommunityGuide(slug)
  if (!guide) return {}
  return socialMetadata({ title: guide.title, description: guide.summary, path: `/community/${guide.slug}/`, image: guideImages[guide.slug]?.src || '/images/heroes/community-city-friends.webp' })
}

export default async function CommunityGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getCommunityGuide(slug)
  if (!guide) notFound()
  return <EditorialGuideDetail guide={guide} guides={communityGuides} hubHref="/community/" hubLabel="The Meet People hub" relatedHeading="More ways to find your people" reviewedAt="2026-08-25" heroImage={guideImages[guide.slug]} />
}

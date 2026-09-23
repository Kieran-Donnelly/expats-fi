import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EditorialGuideDetail } from '@/components/EditorialGuideDetail'
import { ContinueExploring } from '@/components/ContinueExploring'
import { cultureGuides, getCultureGuide } from '@/data/culture'
import { socialMetadata } from '@/lib/seo'

const seoOverrides: Record<string, { title: string; description: string }> = {
  'eating-drinking-and-ordering-in-finland': {
    title: 'Eating out in Finland: lunch, tipping, bills and Alko',
    description: 'Understand restaurant and café customs in Finland, including early lunch, tipping, separate bills, counter service, tap water, dietary needs and Alko.',
  },
}

const guideImages: Record<string, { src: string; position: string }> = {
  'directness-silence-and-making-plans': { src: '/images/heroes/culture-directness-conversation.jpg', position: 'center 50%' },
  'invited-to-a-finnish-home': { src: '/images/heroes/culture-invited-home.jpg', position: 'center 48%' },
  'finnish-sauna-without-the-panic': { src: '/images/heroes/culture-sauna.jpg', position: 'center 52%' },
  'finnish-workplace-culture': { src: '/images/heroes/culture-workplace.jpg', position: 'center 50%' },
  'eating-drinking-and-ordering-in-finland': { src: '/images/heroes/culture-eating-ordering.jpg', position: 'center 48%' },
  'finnish-year-holidays-and-closures': { src: '/images/heroes/culture-year-holidays.jpg', position: 'center 52%' },
  'public-transport-queues-laundry-and-recycling': { src: '/images/heroes/culture-everyday-etiquette.jpg', position: 'center 52%' },
  'making-friends-and-finding-your-people': { src: '/images/heroes/culture-making-friends.jpg', position: 'center 50%' },
  'finland-in-twelve-turning-points': { src: '/images/heroes/culture-turning-points-senate-square.webp', position: 'center 52%' },
  'finnish-names-worth-knowing': { src: '/images/heroes/culture-names-sibelius.webp', position: 'center 48%' },
  'historic-finland-you-can-visit': { src: '/images/heroes/culture-historic-olavinlinna.webp', position: 'center 50%' },
}

export function generateStaticParams() {
  return cultureGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = getCultureGuide(slug)
  if (!guide) return {}
  const seo = seoOverrides[guide.slug]
  return socialMetadata({ title: seo?.title || guide.title, description: seo?.description || guide.summary, path: `/culture/${guide.slug}/`, image: guideImages[guide.slug]?.src || '/images/heroes/culture-coffee-conversation.webp' })
}

export default async function CultureGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getCultureGuide(slug)
  if (!guide) notFound()
  const heroImage = guideImages[slug]
  const extraSection = slug === 'eating-drinking-and-ordering-in-finland'
    ? <ContinueExploring
        title="Now find somewhere good to put it into practice."
        intro="Move from the customs to the food itself, or choose a Helsinki neighbourhood and make a day of it."
        links={[
          { eyebrow: 'Food and drink', title: 'Find somewhere good to eat', description: 'Browse cafés, quick bites, Finnish flavours and proper dinners by mood and area.', href: '/eats/' },
          { eyebrow: 'Finland on a Plate', title: 'Understand the food itself', description: 'Finnish classics, seasonal favourites, supermarket basics and recipes worth keeping.', href: '/eats/finland-on-a-plate/' },
          { eyebrow: 'Neighbourhoods', title: 'Choose an area first', description: 'Local guides connecting good food with walks, culture and the character of each part of Helsinki.', href: '/areas/' },
        ]}
      />
    : undefined
  return <EditorialGuideDetail guide={guide} guides={cultureGuides} hubHref="/culture/" hubLabel="How Finland actually works" relatedHeading="More of the cultural bits" reviewedAt="2026-08-27" heroImage={heroImage} extraSection={extraSection} />
}

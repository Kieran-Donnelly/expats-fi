import type { MetadataRoute } from 'next'
import { areaGuides } from '@/data/areas'
import { communityGuides } from '@/data/community'
import { cultureGuides } from '@/data/culture'
import { exploreListings } from '@/data/explore'
import { familyGuides } from '@/data/family'
import { finlandFoodGuides } from '@/data/finland-food-guides'
import { housingGuides } from '@/data/housing'
import { settlingGuides } from '@/data/settling'
import { sportsListings } from '@/data/sports'
import { studyGuides } from '@/data/study'
import { getArticles, getBusinesses, getEmbassies, getEvents, getNewsStories } from '@/lib/content'

export const dynamic = 'force-dynamic'

function checkedDate(value: string): Date {
  const date = new Date(`${value} UTC`)
  if (Number.isNaN(date.getTime())) throw new Error(`Invalid sitemap review date: ${value}`)
  return date
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, businesses, embassies, events, newsStories] = await Promise.all([getArticles(), getBusinesses(), getEmbassies(), getEvents({ upcoming: true }), getNewsStories()])
  const reviewed25August = new Date('2026-08-25T00:00:00.000Z')
  const reviewed27August = new Date('2026-08-27T00:00:00.000Z')
  const reviewed28August = new Date('2026-08-28T00:00:00.000Z')
  const entries: MetadataRoute.Sitemap = [
    { url: 'https://expats.fi/', priority: 1 },
    { url: 'https://expats.fi/about/', priority: .7 },
    { url: 'https://expats.fi/start-here/', priority: 1 },
    { url: 'https://expats.fi/culture/', priority: .9 },
    { url: 'https://expats.fi/community/', priority: .9 },
    { url: 'https://expats.fi/community/board/', priority: .8 },
    { url: 'https://expats.fi/privacy/', priority: .3 },
    { url: 'https://expats.fi/housing/', priority: .9 },
    { url: 'https://expats.fi/help/', priority: .9 },
    { url: 'https://expats.fi/resources/', priority: .9 },
    { url: 'https://expats.fi/family/', priority: .9 },
    { url: 'https://expats.fi/learn-finnish/', priority: .9 },
    { url: 'https://expats.fi/study/', priority: .9 },
    { url: 'https://expats.fi/news/', priority: .9 },
    { url: 'https://expats.fi/areas/', priority: .9 },
    { url: 'https://expats.fi/eats/', priority: .9 },
    { url: 'https://expats.fi/explore/', priority: .9 },
    { url: 'https://expats.fi/explore/day-trips/', priority: .85 },
    { url: 'https://expats.fi/events/', priority: .9 },
    { url: 'https://expats.fi/sports/', priority: .9 },
    { url: 'https://expats.fi/businesses/', priority: .9 },
    { url: 'https://expats.fi/embassies/', priority: .9 },
    ...articles.map((article) => ({ url: `https://expats.fi/resources/${article.slug}/`, lastModified: new Date(article.updatedAt), priority: .7 })),
    ...newsStories.map((story) => ({ url: `https://expats.fi/news/${story.slug}/`, lastModified: new Date(story.updatedAt), priority: .8 })),
    ...areaGuides.map((guide) => ({ url: `https://expats.fi/areas/${guide.slug}/`, lastModified: reviewed25August, priority: .8 })),
    ...events.map((event) => ({ url: `https://expats.fi/events/${event.slug}/`, lastModified: checkedDate(event.lastChecked), priority: .7 })),
    ...exploreListings.map((listing) => ({ url: `https://expats.fi/explore/${listing.slug}/`, lastModified: checkedDate(listing.lastChecked), priority: .7 })),
    ...sportsListings.map((listing) => ({ url: `https://expats.fi/sports/${listing.slug}/`, lastModified: checkedDate(listing.lastChecked), priority: .7 })),
    ...familyGuides.map((guide) => ({ url: `https://expats.fi/family/${guide.slug}/`, lastModified: reviewed25August, priority: .8 })),
    ...studyGuides.map((guide) => ({ url: `https://expats.fi/study/${guide.slug}/`, lastModified: reviewed28August, priority: .8 })),
    ...housingGuides.map((guide) => ({ url: `https://expats.fi/housing/${guide.slug}/`, lastModified: reviewed25August, priority: .8 })),
    ...settlingGuides.map((guide) => ({ url: `https://expats.fi/start-here/${guide.slug}/`, lastModified: reviewed25August, priority: .9 })),
    ...cultureGuides.map((guide) => ({ url: `https://expats.fi/culture/${guide.slug}/`, lastModified: reviewed27August, priority: .8 })),
    { url: 'https://expats.fi/eats/finland-on-a-plate/', priority: .85 },
    ...finlandFoodGuides.map((guide) => ({ url: `https://expats.fi/eats/finland-on-a-plate/${guide.slug}/`, lastModified: reviewed27August, priority: .8 })),
    ...communityGuides.map((guide) => ({ url: `https://expats.fi/community/${guide.slug}/`, lastModified: reviewed25August, priority: .8 })),
    ...businesses.map((business) => ({ url: `https://expats.fi/businesses/${business.slug}/`, lastModified: new Date(business.updatedAt), priority: .7 })),
    ...embassies.map((embassy) => ({ url: `https://expats.fi/embassies/${embassy.slug}/`, lastModified: new Date(embassy.updatedAt), priority: .65 })),
  ]

  return entries
}

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, businesses, embassies, events, newsStories] = await Promise.all([getArticles(), getBusinesses(), getEmbassies(), getEvents({ upcoming: true }), getNewsStories()])
  // Update this when the guides and other file-backed content receive a material edit.
  // CMS-backed entries below keep their own real update dates.
  const staticLastModified = new Date('2026-09-05T00:00:00.000Z')
  const entries: MetadataRoute.Sitemap = [
    { url: 'https://expats.fi/', lastModified: staticLastModified, priority: 1 },
    { url: 'https://expats.fi/start-here/', lastModified: staticLastModified, priority: 1 },
    { url: 'https://expats.fi/culture/', lastModified: staticLastModified, priority: .9 },
    { url: 'https://expats.fi/community/', lastModified: staticLastModified, priority: .9 },
    { url: 'https://expats.fi/community/board/', lastModified: staticLastModified, priority: .8 },
    { url: 'https://expats.fi/privacy/', lastModified: staticLastModified, priority: .3 },
    { url: 'https://expats.fi/housing/', lastModified: staticLastModified, priority: .9 },
    { url: 'https://expats.fi/help/', lastModified: staticLastModified, priority: .9 },
    { url: 'https://expats.fi/resources/', lastModified: staticLastModified, priority: .9 },
    { url: 'https://expats.fi/family/', lastModified: staticLastModified, priority: .9 },
    { url: 'https://expats.fi/learn-finnish/', lastModified: staticLastModified, priority: .9 },
    { url: 'https://expats.fi/study/', lastModified: staticLastModified, priority: .9 },
    { url: 'https://expats.fi/news/', lastModified: staticLastModified, priority: .9 },
    { url: 'https://expats.fi/areas/', lastModified: staticLastModified, priority: .9 },
    { url: 'https://expats.fi/eats/', lastModified: staticLastModified, priority: .9 },
    { url: 'https://expats.fi/explore/', lastModified: staticLastModified, priority: .9 },
    { url: 'https://expats.fi/explore/day-trips/', lastModified: staticLastModified, priority: .85 },
    { url: 'https://expats.fi/events/', lastModified: staticLastModified, priority: .9 },
    { url: 'https://expats.fi/sports/', lastModified: staticLastModified, priority: .9 },
    { url: 'https://expats.fi/businesses/', lastModified: staticLastModified, priority: .9 },
    { url: 'https://expats.fi/embassies/', lastModified: staticLastModified, priority: .9 },
    ...articles.map((article) => ({ url: `https://expats.fi/resources/${article.slug}/`, lastModified: new Date(article.updatedAt), priority: .7 })),
    ...newsStories.map((story) => ({ url: `https://expats.fi/news/${story.slug}/`, lastModified: new Date(story.updatedAt), priority: .8 })),
    ...areaGuides.map((guide) => ({ url: `https://expats.fi/areas/${guide.slug}/`, lastModified: staticLastModified, priority: .8 })),
    ...events.map((event) => ({ url: `https://expats.fi/events/${event.slug}/`, lastModified: staticLastModified, priority: .7 })),
    ...exploreListings.map((listing) => ({ url: `https://expats.fi/explore/${listing.slug}/`, lastModified: staticLastModified, priority: .7 })),
    ...sportsListings.map((listing) => ({ url: `https://expats.fi/sports/${listing.slug}/`, lastModified: staticLastModified, priority: .7 })),
    ...familyGuides.map((guide) => ({ url: `https://expats.fi/family/${guide.slug}/`, lastModified: staticLastModified, priority: .8 })),
    ...studyGuides.map((guide) => ({ url: `https://expats.fi/study/${guide.slug}/`, lastModified: staticLastModified, priority: .8 })),
    ...housingGuides.map((guide) => ({ url: `https://expats.fi/housing/${guide.slug}/`, lastModified: staticLastModified, priority: .8 })),
    ...settlingGuides.map((guide) => ({ url: `https://expats.fi/start-here/${guide.slug}/`, lastModified: staticLastModified, priority: .9 })),
    ...cultureGuides.map((guide) => ({ url: `https://expats.fi/culture/${guide.slug}/`, lastModified: staticLastModified, priority: .8 })),
    { url: 'https://expats.fi/eats/finland-on-a-plate/', lastModified: staticLastModified, priority: .85 },
    ...finlandFoodGuides.map((guide) => ({ url: `https://expats.fi/eats/finland-on-a-plate/${guide.slug}/`, lastModified: staticLastModified, priority: .8 })),
    ...communityGuides.map((guide) => ({ url: `https://expats.fi/community/${guide.slug}/`, lastModified: staticLastModified, priority: .8 })),
    ...businesses.map((business) => ({ url: `https://expats.fi/businesses/${business.slug}/`, lastModified: new Date(business.updatedAt), priority: .7 })),
    ...embassies.map((embassy) => ({ url: `https://expats.fi/embassies/${embassy.slug}/`, lastModified: new Date(embassy.updatedAt), priority: .65 })),
  ]

  return entries
}

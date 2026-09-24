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

function latestDate(values: Date[], fallback: Date): Date {
  if (values.length === 0) return fallback
  return new Date(Math.max(...values.map((value) => value.getTime())))
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, businesses, embassies, events, newsStories] = await Promise.all([getArticles(), getBusinesses(), getEmbassies(), getEvents({ upcoming: true }), getNewsStories()])
  const reviewed25August = new Date('2026-08-25T00:00:00.000Z')
  const reviewed27August = new Date('2026-08-27T00:00:00.000Z')
  const reviewed28August = new Date('2026-08-28T00:00:00.000Z')
  const updated14September = new Date('2026-09-14T05:43:45.000Z')
  const updated15September = new Date('2026-09-15T05:37:38.000Z')
  const updated15SeptemberStartHere = new Date('2026-09-15T12:22:09.000Z')
  const updated23September = new Date('2026-09-23T10:10:52.000Z')
  const updated24September = new Date('2026-09-24T00:00:00.000Z')
  const latestArticle = latestDate(articles.map((article) => new Date(article.updatedAt)), updated14September)
  const latestNewsStory = latestDate(newsStories.map((story) => new Date(story.updatedAt)), updated14September)
  const latestEvent = latestDate(events.map((event) => checkedDate(event.lastChecked)), updated14September)
  const latestExploreListing = latestDate(exploreListings.map((listing) => checkedDate(listing.lastChecked)), updated14September)
  const latestSportsListing = latestDate(sportsListings.map((listing) => checkedDate(listing.lastChecked)), updated14September)
  const latestBusiness = latestDate(businesses.map((business) => new Date(business.updatedAt)), updated14September)
  const latestEmbassy = latestDate(embassies.map((embassy) => new Date(embassy.updatedAt)), updated14September)
  const entries: MetadataRoute.Sitemap = [
    { url: 'https://expats.fi/', lastModified: latestDate([updated23September, latestNewsStory, latestEvent], updated23September), priority: 1 },
    { url: 'https://expats.fi/about/', lastModified: updated14September, priority: .7 },
    { url: 'https://expats.fi/start-here/', lastModified: updated15SeptemberStartHere, priority: 1 },
    { url: 'https://expats.fi/culture/', lastModified: updated14September, priority: .9 },
    { url: 'https://expats.fi/community/', lastModified: updated14September, priority: .9 },
    { url: 'https://expats.fi/community/board/', lastModified: updated24September, priority: .8 },
    { url: 'https://expats.fi/privacy/', priority: .3 },
    { url: 'https://expats.fi/housing/', lastModified: updated14September, priority: .9 },
    { url: 'https://expats.fi/help/', lastModified: updated14September, priority: .9 },
    { url: 'https://expats.fi/resources/', lastModified: latestArticle, priority: .9 },
    { url: 'https://expats.fi/family/', lastModified: updated15September, priority: .9 },
    { url: 'https://expats.fi/family/things-to-do-with-kids/', lastModified: updated15September, priority: .85 },
    { url: 'https://expats.fi/learn-finnish/', lastModified: updated14September, priority: .9 },
    { url: 'https://expats.fi/study/', lastModified: updated14September, priority: .9 },
    { url: 'https://expats.fi/news/', lastModified: latestNewsStory, priority: .9 },
    { url: 'https://expats.fi/areas/', lastModified: updated14September, priority: .9 },
    { url: 'https://expats.fi/eats/', lastModified: updated14September, priority: .9 },
    { url: 'https://expats.fi/explore/', lastModified: latestExploreListing, priority: .9 },
    { url: 'https://expats.fi/explore/day-trips/', lastModified: updated24September, priority: .85 },
    { url: 'https://expats.fi/events/', lastModified: latestEvent, priority: .9 },
    { url: 'https://expats.fi/sports/', lastModified: latestSportsListing, priority: .9 },
    { url: 'https://expats.fi/businesses/', lastModified: latestBusiness, priority: .9 },
    { url: 'https://expats.fi/embassies/', lastModified: latestEmbassy, priority: .9 },
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
    { url: 'https://expats.fi/eats/finland-on-a-plate/', lastModified: updated24September, priority: .85 },
    ...finlandFoodGuides.map((guide) => ({ url: `https://expats.fi/eats/finland-on-a-plate/${guide.slug}/`, lastModified: reviewed27August, priority: .8 })),
    ...communityGuides.map((guide) => ({ url: `https://expats.fi/community/${guide.slug}/`, lastModified: reviewed25August, priority: .8 })),
    ...businesses.map((business) => ({ url: `https://expats.fi/businesses/${business.slug}/`, lastModified: new Date(business.updatedAt), priority: .7 })),
    ...embassies.map((embassy) => ({ url: `https://expats.fi/embassies/${embassy.slug}/`, lastModified: new Date(embassy.updatedAt), priority: .65 })),
  ]

  return entries
}

import type { MetadataRoute } from 'next'
import { events } from '@/data/events'
import { getArticles, getBusinesses, getEmbassies } from '@/lib/content'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, businesses, embassies] = await Promise.all([getArticles(), getBusinesses(), getEmbassies()])
  const now = new Date()
  return [
    { url: 'https://expats.fi/', lastModified: now, priority: 1 },
    { url: 'https://expats.fi/resources/', lastModified: now, priority: .9 },
    { url: 'https://expats.fi/learn-finnish/', lastModified: now, priority: .9 },
    { url: 'https://expats.fi/events/', lastModified: now, priority: .9 },
    { url: 'https://expats.fi/businesses/', lastModified: now, priority: .9 },
    { url: 'https://expats.fi/embassies/', lastModified: now, priority: .9 },
    { url: 'https://expats.fi/submit-business/', lastModified: now, priority: .6 },
    ...articles.map((article) => ({ url: `https://expats.fi/resources/${article.slug}/`, lastModified: new Date(article.updatedAt), priority: .7 })),
    ...events.map((event) => ({ url: `https://expats.fi/events/${event.slug}/`, lastModified: now, priority: .7 })),
    ...businesses.map((business) => ({ url: `https://expats.fi/businesses/${business.slug}/`, lastModified: new Date(business.updatedAt), priority: .7 })),
    ...embassies.map((embassy) => ({ url: `https://expats.fi/embassies/${embassy.slug}/`, lastModified: new Date(embassy.updatedAt), priority: .65 })),
  ]
}

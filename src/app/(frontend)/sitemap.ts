import type { MetadataRoute } from 'next'
import { getArticles, getBusinesses } from '@/lib/content'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, businesses] = await Promise.all([getArticles(), getBusinesses()])
  const now = new Date()
  return [
    { url: 'https://expats.fi/', lastModified: now, priority: 1 },
    { url: 'https://expats.fi/resources/', lastModified: now, priority: .9 },
    { url: 'https://expats.fi/businesses/', lastModified: now, priority: .9 },
    { url: 'https://expats.fi/submit-business/', lastModified: now, priority: .6 },
    ...articles.map((article) => ({ url: `https://expats.fi/resources/${article.slug}/`, lastModified: new Date(article.updatedAt), priority: .7 })),
    ...businesses.map((business) => ({ url: `https://expats.fi/businesses/${business.slug}/`, lastModified: new Date(business.updatedAt), priority: .7 })),
  ]
}

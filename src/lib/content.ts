import config from '@payload-config'
import { getPayload, type Where } from 'payload'

import type { Article, Business } from '@/payload-types'

export async function getArticles({
  category,
  featured,
  limit = 100,
  query,
}: {
  category?: string
  featured?: boolean
  limit?: number
  query?: string
} = {}): Promise<Article[]> {
  const payload = await getPayload({ config })
  const and: Where[] = []

  if (category) and.push({ category: { equals: category } })
  if (typeof featured === 'boolean') and.push({ featured: { equals: featured } })
  if (query) {
    and.push({
      or: [
        { title: { contains: query } },
        { description: { contains: query } },
        { category: { contains: query } },
      ],
    })
  }

  const result = await payload.find({
    collection: 'articles',
    depth: 1,
    limit,
    overrideAccess: false,
    pagination: false,
    sort: '-publishedAt',
    where: and.length ? { and } : undefined,
  })

  return result.docs
}

export async function getArticle(slug: string): Promise<Article | null> {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'articles',
    depth: 1,
    limit: 1,
    overrideAccess: false,
    where: { slug: { equals: slug } },
  })
  return result.docs[0] || null
}

export async function getBusinesses({
  category,
  featured,
  limit = 100,
  location,
  query,
}: {
  category?: string
  featured?: boolean
  limit?: number
  location?: string
  query?: string
} = {}): Promise<Business[]> {
  const payload = await getPayload({ config })
  const and: Where[] = []

  if (category) and.push({ 'categories.label': { equals: category } })
  if (location) and.push({ 'locations.label': { equals: location } })
  if (typeof featured === 'boolean') and.push({ featured: { equals: featured } })
  if (query) {
    and.push({
      or: [
        { name: { contains: query } },
        { summary: { contains: query } },
        { 'categories.label': { contains: query } },
        { 'locations.label': { contains: query } },
      ],
    })
  }

  const result = await payload.find({
    collection: 'businesses',
    depth: 1,
    limit,
    overrideAccess: false,
    pagination: false,
    sort: 'name',
    where: and.length ? { and } : undefined,
  })

  return result.docs
}

export async function getBusiness(slug: string): Promise<Business | null> {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'businesses',
    depth: 1,
    limit: 1,
    overrideAccess: false,
    where: { slug: { equals: slug } },
  })
  return result.docs[0] || null
}

export function labels(items?: null | { label: string }[]): string[] {
  return items?.map((item) => item.label).filter(Boolean) || []
}

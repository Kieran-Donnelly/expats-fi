import config from '@payload-config'
import { getPayload, type Where } from 'payload'

import { eventAdditions } from '@/data/event-additions'
import type { CityEvent, EventTransport } from '@/data/events'
import type { LearningResource, PracticeGroup } from '@/data/finnishLearning'
import type { Article, Business, Embassy } from '@/payload-types'

export async function getArticles({
  category,
  featured,
  limit = 250,
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

export async function getEmbassies({
  query,
  region,
  representationType,
}: {
  query?: string
  region?: string
  representationType?: string
} = {}): Promise<Embassy[]> {
  const payload = await getPayload({ config })
  const and: Where[] = []

  if (region) and.push({ region: { equals: region } })
  if (representationType) and.push({ representationType: { equals: representationType } })
  if (query) {
    and.push({
      or: [
        { country: { contains: query } },
        { missionName: { contains: query } },
        { city: { contains: query } },
        { hostCountry: { contains: query } },
      ],
    })
  }

  const result = await payload.find({
    collection: 'embassies',
    limit: 250,
    overrideAccess: false,
    pagination: false,
    sort: 'country',
    where: and.length ? { and } : undefined,
  })

  return result.docs
}

export async function getEmbassy(slug: string): Promise<Embassy | null> {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'embassies',
    limit: 1,
    overrideAccess: false,
    where: { slug: { equals: slug } },
  })
  return result.docs[0] || null
}

export function labels(items?: null | { label: string }[]): string[] {
  return items?.map((item) => item.label).filter(Boolean) || []
}

function dateOnly(value: unknown): string {
  if (typeof value !== 'string' && !(value instanceof Date)) return ''
  return new Date(value).toISOString().slice(0, 10)
}

function stringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return []
  return value.filter((item): item is string => typeof item === 'string')
}

function eventTransport(value: unknown): EventTransport[] {
  if (!Array.isArray(value)) return []
  return value.filter((item): item is EventTransport => {
    if (!item || typeof item !== 'object') return false
    const candidate = item as Partial<EventTransport>
    return typeof candidate.mode === 'string' && typeof candidate.advice === 'string'
  })
}

function eventCoordinates(value: unknown): CityEvent['coordinates'] {
  if (!value || typeof value !== 'object') return undefined
  const candidate = value as { latitude?: unknown; longitude?: unknown }
  if (typeof candidate.latitude !== 'number' || typeof candidate.longitude !== 'number') return undefined
  return { latitude: candidate.latitude, longitude: candidate.longitude }
}

function mapEvent(record: Record<string, unknown>): CityEvent {
  return {
    slug: String(record.slug || ''),
    title: String(record.title || ''),
    category: record.category as CityEvent['category'],
    startDate: dateOnly(record.startDate),
    endDate: dateOnly(record.endDate),
    dateLabel: String(record.dateLabel || ''),
    timeLabel: String(record.timeLabel || ''),
    location: String(record.location || ''),
    address: String(record.address || ''),
    district: String(record.district || ''),
    coordinates: eventCoordinates(record.coordinates),
    blurb: String(record.blurb || ''),
    description: stringArray(record.description),
    price: String(record.price || ''),
    free: Boolean(record.free),
    familyFriendly: Boolean(record.familyFriendly),
    ageNote: typeof record.ageNote === 'string' ? record.ageNote : undefined,
    bookingNote: String(record.bookingNote || ''),
    sourceName: String(record.sourceName || ''),
    sourceUrl: String(record.sourceUrl || ''),
    lastChecked: String(record.lastChecked || ''),
    featured: Boolean(record.featured),
    transport: eventTransport(record.transport),
  }
}

export async function getEvents({ upcoming = false }: { upcoming?: boolean } = {}): Promise<CityEvent[]> {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'events',
    limit: 250,
    pagination: false,
    overrideAccess: false,
    sort: 'startDate',
    where: { status: { equals: 'published' } },
  })
  const mapped = result.docs.map((record) => mapEvent(record as unknown as Record<string, unknown>))
  const mappedSlugs = new Set(mapped.map((event) => event.slug))
  const combined = [
    ...mapped,
    ...eventAdditions.filter((event) => !mappedSlugs.has(event.slug)),
  ].sort((a, b) => a.startDate.localeCompare(b.startDate))
  if (!upcoming) return combined

  const today = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Helsinki',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date())
  return combined.filter((event) => event.endDate >= today)
}

export async function getEvent(slug: string): Promise<CityEvent | null> {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'events',
    limit: 1,
    pagination: false,
    overrideAccess: false,
    where: { and: [{ slug: { equals: slug } }, { status: { equals: 'published' } }] },
  })
  const record = result.docs[0]
  return record ? mapEvent(record as unknown as Record<string, unknown>) : eventAdditions.find((event) => event.slug === slug) || null
}

function reviewDate(value: unknown): string {
  const raw = dateOnly(value)
  if (!raw) return ''
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${raw}T00:00:00Z`))
}

export async function getLearningPageData(): Promise<{
  learningPaths: Array<{ title: string; level: string; recipe: string; links: string[] }>
  learningResources: LearningResource[]
  practiceGroups: PracticeGroup[]
  ykiResources: Array<{ name: string; url: string; description: string }>
  lastLearningReview: string
}> {
  const payload = await getPayload({ config })
  const [paths, resources, groups, yki] = await Promise.all([
    payload.find({ collection: 'learning-paths', limit: 100, pagination: false, overrideAccess: false, sort: 'title', where: { status: { equals: 'published' } } }),
    payload.find({ collection: 'learning-resources', limit: 100, pagination: false, overrideAccess: false, sort: 'name', where: { status: { equals: 'published' } } }),
    payload.find({ collection: 'practice-groups', limit: 100, pagination: false, overrideAccess: false, sort: 'name', where: { status: { equals: 'published' } } }),
    payload.find({ collection: 'yki-resources', limit: 100, pagination: false, overrideAccess: false, sort: 'name', where: { status: { equals: 'published' } } }),
  ])

  const pathRecords = paths.docs as unknown as Array<Record<string, unknown>>
  const resourceRecords = resources.docs as unknown as Array<Record<string, unknown>>
  const groupRecords = groups.docs as unknown as Array<Record<string, unknown>>
  const ykiRecords = yki.docs as unknown as Array<Record<string, unknown>>
  const reviews = [...pathRecords, ...resourceRecords, ...groupRecords, ...ykiRecords]
    .map((record) => dateOnly(record.lastReviewedAt))
    .filter(Boolean)
    .sort()

  return {
    learningPaths: pathRecords.map((record) => ({ title: String(record.title || ''), level: String(record.level || ''), recipe: String(record.recipe || ''), links: stringArray(record.links) })),
    learningResources: resourceRecords.map((record) => ({
      name: String(record.name || ''),
      category: record.category as LearningResource['category'],
      cost: record.cost as LearningResource['cost'],
      level: String(record.level || ''),
      format: String(record.format || ''),
      url: String(record.url || ''),
      description: String(record.description || ''),
      bestFor: String(record.bestFor || ''),
      note: typeof record.note === 'string' ? record.note : undefined,
      featured: Boolean(record.featured),
    })),
    practiceGroups: groupRecords.map((record) => ({
      name: String(record.name || ''),
      location: String(record.location || ''),
      schedule: String(record.schedule || ''),
      cost: String(record.cost || ''),
      url: String(record.url || ''),
      description: String(record.description || ''),
      checkFirst: String(record.checkFirst || ''),
    })),
    ykiResources: ykiRecords.map((record) => ({ name: String(record.name || ''), url: String(record.url || ''), description: String(record.description || '') })),
    lastLearningReview: reviews.length ? reviewDate(reviews[reviews.length - 1]) : 'Not reviewed yet',
  }
}

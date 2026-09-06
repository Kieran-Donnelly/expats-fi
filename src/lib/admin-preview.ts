import { siteUrl } from './seo'

type PublicationField = '_status' | 'status' | null

export function publicPreview(prefix: string, publicationField: PublicationField = 'status') {
  return (document: Record<string, unknown>): string | null => {
    const slug = typeof document.slug === 'string' ? document.slug.trim() : ''
    if (!slug || (publicationField && document[publicationField] !== 'published')) return null

    return new URL(`${prefix}/${encodeURIComponent(slug)}/`, siteUrl).toString()
  }
}

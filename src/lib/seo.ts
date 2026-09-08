import type { Metadata } from 'next'

export const siteUrl = 'https://expats.fi'
export const defaultSocialImage = `${siteUrl}/images/heroes/home-helsinki-cathedral-v2.webp`

export const publisher = {
  '@type': 'Organization',
  name: 'Expats.fi',
  url: siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${siteUrl}/apple-touch-icon-expats-mark.png`,
  },
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).toString()
}

export function seoDescription(value: string, maxLength = 160): string {
  const description = value.replace(/\s+/g, ' ').trim()
  if (description.length <= maxLength) return description

  const shortened = description.slice(0, maxLength - 1)
  const lastSpace = shortened.lastIndexOf(' ')
  const cleanCut = lastSpace >= Math.floor(maxLength * 0.7)
    ? shortened.slice(0, lastSpace)
    : shortened

  return `${cleanCut.replace(/[,:;.!?\s]+$/, '')}…`
}

export function socialMetadata({ title, description, path, image = defaultSocialImage }: {
  title: string
  description: string
  path: string
  image?: string
}): Metadata {
  const imageUrl = absoluteUrl(image)
  const searchDescription = seoDescription(description)

  return {
    title,
    description: searchDescription,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: searchDescription,
      type: 'website',
      url: path,
      images: [{ url: imageUrl, alt: `${title} on Expats.fi` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: searchDescription,
      images: [imageUrl],
    },
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

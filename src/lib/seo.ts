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

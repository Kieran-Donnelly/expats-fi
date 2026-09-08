import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import articles from './src/data/articles.json' with { type: 'json' }

const projectRoot = path.dirname(fileURLToPath(import.meta.url))
const businessSlugs = ['home-chef-mark', 'aussie-bar', 'alstudio-barbershop']

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  experimental: {
    globalNotFound: true,
  },
  turbopack: {
    root: projectRoot,
  },
  images: {
    localPatterns: [
      { pathname: '/api/media/file/**' },
      { pathname: '/businesses/**' },
      { pathname: '/images/**' },
    ],
  },
  async redirects() {
    return [
      // Preserve useful links from the former WordPress site. Do not redirect
      // retired system endpoints or unknown URLs to unrelated home-page content.
      { source: '/privacy-policy', destination: '/privacy/', permanent: true },
      { source: '/contact', destination: '/about/#about-invitation-heading', permanent: true },
      { source: '/list-your-business', destination: '/submit-business/', permanent: true },
      ...Object.entries({
        catering: 'Catering',
        'food-beverage': 'Food & drink',
        trades: 'Trades',
        'bars-restaurants': 'Bars & restaurants',
        'professional-services': '',
      }).map(([slug, category]) => ({
        source: `/business-category/${slug}`,
        destination: category ? `/businesses/?category=${encodeURIComponent(category)}#business-directory` : '/businesses/#business-directory',
        permanent: true,
      })),
      ...['Helsinki', 'Espoo', 'Vantaa'].map((city) => ({
        source: `/business-location/${city.toLowerCase()}`,
        destination: `/businesses/?location=${city}#business-directory`,
        permanent: true,
      })),
      ...articles.map((article) => ({
        source: `/${article.slug}`,
        destination: `/resources/${article.slug}/`,
        permanent: true,
      })),
      ...businessSlugs.map((slug) => ({
        source: `/business/${slug}`,
        destination: `/businesses/${slug}/`,
        permanent: true,
      })),
    ]
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })

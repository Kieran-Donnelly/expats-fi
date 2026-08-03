import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import articles from './src/data/articles.json' with { type: 'json' }

const projectRoot = path.dirname(fileURLToPath(import.meta.url))
const businessSlugs = ['home-chef-mark', 'aussie-bar', 'alstudio-barbershop']

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  images: {
    localPatterns: [{ pathname: '/api/media/file/**' }],
  },
  async redirects() {
    return [
      ...articles.map((article) => ({
        source: `/${article.slug}`,
        destination: `/resources/${article.slug}`,
        permanent: true,
      })),
      ...businessSlugs.map((slug) => ({
        source: `/business/${slug}`,
        destination: `/businesses/${slug}`,
        permanent: true,
      })),
    ]
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })

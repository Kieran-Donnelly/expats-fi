import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import articles from './src/data/articles.json' with { type: 'json' };

const legacyArticleRedirects = Object.fromEntries(
  articles.map((article) => [`/${article.slug}/`, `/resources/${article.slug}/`]),
);

export default defineConfig({
  site: 'https://expats.fi',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap()],
  redirects: {
    ...legacyArticleRedirects,
    '/business/home-chef-mark/': '/businesses/home-chef-mark/',
    '/business/aussie-bar/': '/businesses/aussie-bar/',
    '/business/alstudio-barbershop/': '/businesses/alstudio-barbershop/',
  },
  trailingSlash: 'always',
  compressHTML: true,
});

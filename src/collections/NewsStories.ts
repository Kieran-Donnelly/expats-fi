import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

import { canManageContent } from '@/lib/admin-access'

export const newsCategories = [
  'Helsinki',
  'Finland',
  'Work & money',
  'Life admin',
  'Culture & community',
]

export const NewsStories: CollectionConfig = {
  slug: 'news-stories',
  labels: { singular: 'News story', plural: 'News stories' },
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedAt', 'status'],
    description: 'Original Expats.fi reporting and explainers. Keep the source list and checked date current.',
  },
  access: {
    read: ({ req: { user } }) => canManageContent(user) || { status: { equals: 'published' } },
    create: ({ req: { user } }) => canManageContent(user),
    update: ({ req: { user } }) => canManageContent(user),
    delete: ({ req: { user } }) => canManageContent(user),
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true, admin: { position: 'sidebar' } },
    { name: 'standfirst', type: 'textarea', required: true, admin: { description: 'A warm, useful summary for the News page and search results.' } },
    { name: 'category', type: 'select', required: true, index: true, options: newsCategories, admin: { position: 'sidebar' } },
    { name: 'publishedAt', type: 'date', required: true, index: true, admin: { date: { pickerAppearance: 'dayAndTime' }, position: 'sidebar' } },
    { name: 'readingMinutes', type: 'number', required: true, min: 1, admin: { position: 'sidebar' } },
    { name: 'featured', type: 'checkbox', defaultValue: false, admin: { position: 'sidebar' } },
    { name: 'practicalSummary', type: 'textarea', required: true, admin: { description: 'The plain-English answer to: what does this mean for somebody living here?' } },
    { name: 'content', type: 'richText', editor: lexicalEditor(), required: true },
    { name: 'sources', type: 'json', required: true, admin: { description: 'An array of source objects: [{ "name": "City of Helsinki", "url": "https://..." }].' } },
    { name: 'sourceCheckedAt', type: 'date', required: true, index: true, admin: { date: { pickerAppearance: 'dayOnly' }, position: 'sidebar' } },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: ['draft', 'published'],
      index: true,
      admin: { position: 'sidebar' },
    },
  ],
}

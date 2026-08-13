import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

import { canManageContent } from '@/lib/admin-access'

const articleCategories = [
  'Immigration & permits',
  'Work & money',
  'Housing',
  'Health & wellbeing',
  'Getting around',
  'Family',
  'Everyday life',
]

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedAt', '_status'],
  },
  access: {
    read: ({ req: { user } }) => canManageContent(user) || { _status: { equals: 'published' } },
    create: ({ req: { user } }) => canManageContent(user),
    update: ({ req: { user } }) => canManageContent(user),
    delete: ({ req: { user } }) => canManageContent(user),
  },
  versions: {
    drafts: {
      autosave: true,
      schedulePublish: true,
    },
    maxPerDoc: 20,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      index: true,
      options: articleCategories,
      admin: { position: 'sidebar' },
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      index: true,
      admin: {
        date: { pickerAppearance: 'dayAndTime' },
        position: 'sidebar',
      },
    },
    {
      name: 'readingMinutes',
      type: 'number',
      required: true,
      min: 1,
      admin: { position: 'sidebar' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor(),
      required: true,
    },
    {
      name: 'sourceUrl',
      type: 'text',
      admin: {
        description: 'Original URL retained for migration provenance.',
        position: 'sidebar',
      },
    },
  ],
}

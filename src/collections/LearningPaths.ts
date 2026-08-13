import type { CollectionConfig } from 'payload'

import { canManageContent } from '@/lib/admin-access'

export const LearningPaths: CollectionConfig = {
  slug: 'learning-paths',
  admin: { group: 'Learning', useAsTitle: 'title', defaultColumns: ['title', 'level', 'status', 'lastReviewedAt'] },
  access: {
    read: ({ req: { user } }) => canManageContent(user) || { status: { equals: 'published' } },
    create: ({ req: { user } }) => canManageContent(user),
    update: ({ req: { user } }) => canManageContent(user),
    delete: ({ req: { user } }) => canManageContent(user),
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'level', type: 'text', required: true },
    { name: 'recipe', type: 'textarea', required: true },
    { name: 'links', type: 'json', required: true, admin: { description: 'An array of related resource names.' } },
    { name: 'lastReviewedAt', type: 'date', required: true, index: true, admin: { position: 'sidebar', date: { pickerAppearance: 'dayOnly' } } },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'published',
      options: ['draft', 'published'],
      index: true,
      admin: { position: 'sidebar' },
    },
  ],
}

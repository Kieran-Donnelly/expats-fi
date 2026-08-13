import type { CollectionConfig } from 'payload'

import { canManageContent } from '@/lib/admin-access'

export const YkiResources: CollectionConfig = {
  slug: 'yki-resources',
  admin: { group: 'Learning', useAsTitle: 'name', defaultColumns: ['name', 'status', 'lastReviewedAt'] },
  access: {
    read: ({ req: { user } }) => canManageContent(user) || { status: { equals: 'published' } },
    create: ({ req: { user } }) => canManageContent(user),
    update: ({ req: { user } }) => canManageContent(user),
    delete: ({ req: { user } }) => canManageContent(user),
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'url', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
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

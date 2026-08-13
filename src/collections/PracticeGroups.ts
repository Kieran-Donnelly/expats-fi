import type { CollectionConfig } from 'payload'

import { canManageContent } from '@/lib/admin-access'

export const PracticeGroups: CollectionConfig = {
  slug: 'practice-groups',
  admin: { group: 'Learning', useAsTitle: 'name', defaultColumns: ['name', 'location', 'cost', 'status'] },
  access: {
    read: ({ req: { user } }) => canManageContent(user) || { status: { equals: 'published' } },
    create: ({ req: { user } }) => canManageContent(user),
    update: ({ req: { user } }) => canManageContent(user),
    delete: ({ req: { user } }) => canManageContent(user),
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'location', type: 'text', required: true },
    { name: 'schedule', type: 'text', required: true },
    { name: 'cost', type: 'text', required: true, admin: { position: 'sidebar' } },
    { name: 'url', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
    { name: 'checkFirst', type: 'textarea', required: true },
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

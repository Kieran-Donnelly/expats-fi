import type { CollectionConfig } from 'payload'

import { canManageContent } from '@/lib/admin-access'

const resourceCategories = ['Free foundations', 'Courses & teachers', 'Apps & tools', 'Listen & watch']
const resourceCosts = ['Free', 'Freemium', 'Paid', 'Free & paid']

export const LearningResources: CollectionConfig = {
  slug: 'learning-resources',
  admin: { group: 'Learning', useAsTitle: 'name', defaultColumns: ['name', 'category', 'level', 'featured', 'status'] },
  access: {
    read: ({ req: { user } }) => canManageContent(user) || { status: { equals: 'published' } },
    create: ({ req: { user } }) => canManageContent(user),
    update: ({ req: { user } }) => canManageContent(user),
    delete: ({ req: { user } }) => canManageContent(user),
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'category', type: 'select', required: true, options: resourceCategories, index: true, admin: { position: 'sidebar' } },
    { name: 'cost', type: 'select', required: true, options: resourceCosts, admin: { position: 'sidebar' } },
    { name: 'level', type: 'text', required: true, admin: { position: 'sidebar' } },
    { name: 'format', type: 'text', required: true },
    { name: 'url', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
    { name: 'bestFor', type: 'textarea', required: true },
    { name: 'note', type: 'textarea' },
    { name: 'featured', type: 'checkbox', defaultValue: false, admin: { position: 'sidebar' } },
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

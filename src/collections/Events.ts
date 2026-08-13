import type { CollectionConfig } from 'payload'

import { canManageContent } from '@/lib/admin-access'

const eventCategories = ['Music & nightlife', 'Arts & culture', 'Food & markets', 'Community & free', 'Sports & outdoors']

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    group: 'Community',
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'startDate', 'location', 'status'],
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
    { name: 'category', type: 'select', required: true, options: eventCategories, index: true, admin: { position: 'sidebar' } },
    { name: 'startDate', type: 'date', required: true, index: true, admin: { position: 'sidebar', date: { pickerAppearance: 'dayOnly' } } },
    { name: 'endDate', type: 'date', required: true, index: true, admin: { position: 'sidebar', date: { pickerAppearance: 'dayOnly' } } },
    { name: 'dateLabel', type: 'text', required: true },
    { name: 'timeLabel', type: 'text', required: true },
    { name: 'location', type: 'text', required: true, index: true },
    { name: 'address', type: 'text', required: true },
    { name: 'district', type: 'text', required: true, index: true },
    { name: 'coordinates', type: 'json', admin: { description: 'Optional map coordinates: { "latitude": 60.17, "longitude": 24.94 }.' } },
    { name: 'blurb', type: 'textarea', required: true },
    { name: 'description', type: 'json', required: true, admin: { description: 'An array of story paragraphs.' } },
    { name: 'price', type: 'text', required: true },
    { name: 'free', type: 'checkbox', defaultValue: false, admin: { position: 'sidebar' } },
    { name: 'familyFriendly', type: 'checkbox', defaultValue: false, admin: { position: 'sidebar' } },
    { name: 'ageNote', type: 'text' },
    { name: 'bookingNote', type: 'textarea', required: true },
    { name: 'sourceName', type: 'text', required: true },
    { name: 'sourceUrl', type: 'text', required: true },
    { name: 'lastChecked', type: 'text', required: true, admin: { description: 'Human-readable date shown to visitors.' } },
    { name: 'transport', type: 'json', required: true, admin: { description: 'An array of { mode, advice } route tips.' } },
    { name: 'featured', type: 'checkbox', defaultValue: false, admin: { position: 'sidebar' } },
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

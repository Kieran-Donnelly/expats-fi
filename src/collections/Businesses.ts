import type { CollectionConfig } from 'payload'

import { canManageContent } from '@/lib/admin-access'

export const Businesses: CollectionConfig = {
  slug: 'businesses',
  admin: {
    group: 'Directory',
    useAsTitle: 'name',
    defaultColumns: ['name', 'categories', 'locations', 'status'],
  },
  access: {
    read: ({ req: { user } }) => canManageContent(user) || { status: { equals: 'published' } },
    create: ({ req: { user } }) => canManageContent(user),
    update: ({ req: { user } }) => canManageContent(user),
    delete: ({ req: { user } }) => canManageContent(user),
  },
  fields: [
    {
      name: 'name',
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
      name: 'summary',
      type: 'textarea',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'categories',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [{ name: 'label', type: 'text', required: true }],
    },
    {
      name: 'locations',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [{ name: 'label', type: 'text', required: true }],
    },
    { name: 'address', type: 'text', required: true },
    { name: 'website', type: 'text', required: true },
    { name: 'newsletterUrl', type: 'text' },
    { name: 'phone', type: 'text' },
    {
      name: 'instagramHandle',
      type: 'text',
      admin: { description: 'Include the @ symbol, for example @expats.fi' },
    },
    { name: 'instagram', type: 'text' },
    { name: 'facebook', type: 'text' },
    { name: 'youtube', type: 'text' },
    { name: 'tiktok', type: 'text' },
    { name: 'bookingUrl', type: 'text' },
    { name: 'whatsapp', type: 'text' },
    { name: 'currentOffer', type: 'textarea' },
    { name: 'currentOfferEndsAt', type: 'date' },
    { name: 'imagePath', type: 'text' },
    { name: 'imageAlt', type: 'text' },
    { name: 'logoPath', type: 'text' },
    { name: 'logoAlt', type: 'text' },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'published',
      options: ['draft', 'published'],
      index: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

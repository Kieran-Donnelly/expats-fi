import type { CollectionConfig } from 'payload'

import { canManageContent } from '@/lib/admin-access'
import { businessVerificationStatuses } from '@/lib/business-verification'

export const Businesses: CollectionConfig = {
  slug: 'businesses',
  admin: {
    group: 'Directory',
    useAsTitle: 'name',
    defaultColumns: ['name', 'categories', 'locations', 'status', 'verificationStatus'],
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
    { name: 'website', type: 'text' },
    { name: 'email', type: 'email' },
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
      name: 'verificationStatus',
      type: 'select',
      defaultValue: 'unverified',
      options: businessVerificationStatuses.map((status) => ({ label: status.label, value: status.value })),
      index: true,
      admin: {
        position: 'sidebar',
        description: 'Public trust signal. Reviewed means the Expats.fi team checked the submitted details; owner verified means the business confirmed ownership.',
      },
    },
    {
      name: 'verifiedAt',
      type: 'date',
      index: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
        date: { pickerAppearance: 'dayOnly' },
      },
    },
    {
      name: 'verifiedBy',
      type: 'relationship',
      relationTo: 'users',
      access: {
        read: ({ req: { user } }) => canManageContent(user),
      },
      admin: { position: 'sidebar', readOnly: true },
    },
    {
      name: 'sourceSubmission',
      type: 'relationship',
      relationTo: 'business-submissions',
      access: {
        read: ({ req: { user } }) => canManageContent(user),
      },
      admin: { position: 'sidebar', readOnly: true },
    },
    {
      name: 'verificationNotes',
      type: 'textarea',
      access: {
        read: ({ req: { user } }) => canManageContent(user),
      },
      admin: {
        description: 'Internal moderation notes. These are never shown on the public directory.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

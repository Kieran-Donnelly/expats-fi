import type { CollectionConfig } from 'payload'

import { canManageContent } from '@/lib/admin-access'
import { communityTopicOptions } from '@/lib/community-options'

export const CommunityPosts: CollectionConfig = {
  slug: 'community-posts',
  admin: {
    group: 'Community',
    useAsTitle: 'title',
    defaultColumns: ['title', 'topic', 'author', 'status', 'lastActivityAt', 'createdAt'],
    description: 'Member conversations. Keep posts useful, kind and grounded in life in Finland.',
  },
  access: {
    read: ({ req: { user } }) => canManageContent(user) || { status: { equals: 'published' } },
    create: ({ req: { user } }) => canManageContent(user) || user?.collection === 'members',
    update: ({ req: { user } }) => canManageContent(user),
    delete: ({ req: { user } }) => canManageContent(user),
  },
  hooks: {
    beforeChange: [async ({ data, req }) => {
      if (req.user?.collection === 'members') {
        data.author = req.user.id
        data.status = 'published'
      }

      if (!data.lastActivityAt) data.lastActivityAt = new Date().toISOString()
      return data
    }],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      maxLength: 120,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { position: 'sidebar', readOnly: true },
    },
    {
      name: 'body',
      type: 'textarea',
      required: true,
      maxLength: 5000,
    },
    {
      name: 'topic',
      type: 'select',
      required: true,
      defaultValue: 'general',
      options: [...communityTopicOptions],
      index: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'members',
      required: true,
      index: true,
      admin: { position: 'sidebar', readOnly: true },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'published',
      options: [
        { label: 'Published', value: 'published' },
        { label: 'Hidden', value: 'hidden' },
      ],
      index: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'lastActivityAt',
      type: 'date',
      index: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
        date: { pickerAppearance: 'dayAndTime' },
      },
    },
  ],
}

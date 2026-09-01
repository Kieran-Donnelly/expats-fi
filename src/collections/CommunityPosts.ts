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
    create: ({ req: { user } }) => canManageContent(user),
    update: ({ req: { user } }) => canManageContent(user),
    delete: ({ req: { user } }) => canManageContent(user),
  },
  hooks: {
    beforeChange: [async ({ data, req }) => {
      if (req.user?.collection === 'members') {
        data.author = req.user.id
        data.status = 'pending'
        data.screeningStatus = 'unreviewed'
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
      access: { read: ({ req: { user } }) => canManageContent(user) },
      admin: { position: 'sidebar', readOnly: true },
    },
    {
      name: 'anonymous',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar', description: 'Shows the generated alias publicly while retaining the member privately for moderation.' },
    },
    {
      name: 'anonymousAlias',
      type: 'text',
      maxLength: 80,
      admin: { position: 'sidebar', readOnly: true },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Pending review', value: 'pending' },
        { label: 'Published', value: 'published' },
        { label: 'Flagged for attention', value: 'flagged' },
        { label: 'Hidden', value: 'hidden' },
        { label: 'Rejected', value: 'rejected' },
      ],
      index: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'screeningStatus',
      type: 'select',
      required: true,
      defaultValue: 'unreviewed',
      options: [
        { label: 'Not screened', value: 'unreviewed' },
        { label: 'No automated warnings', value: 'clear' },
        { label: 'Needs attention', value: 'attention' },
      ],
      index: true,
      admin: { position: 'sidebar', readOnly: true },
    },
    {
      name: 'screeningSignals',
      type: 'json',
      admin: { readOnly: true, description: 'Conservative automated warnings. A warning is not proof of wrongdoing.' },
    },
    {
      name: 'screenedAt',
      type: 'date',
      index: true,
      admin: { position: 'sidebar', readOnly: true },
    },
    {
      name: 'reviewedAt',
      type: 'date',
      index: true,
      admin: { position: 'sidebar', readOnly: true },
    },
    {
      name: 'reviewedByEmail',
      type: 'email',
      admin: { position: 'sidebar', readOnly: true },
    },
    {
      name: 'editorialStatus',
      type: 'select',
      required: true,
      defaultValue: 'none',
      options: [
        { label: 'No editorial follow-up', value: 'none' },
        { label: 'Worth watching', value: 'watch' },
        { label: 'Possible guide or article', value: 'article' },
        { label: 'Possible event', value: 'event' },
        { label: 'Possible site improvement', value: 'site-improvement' },
        { label: 'Actioned', value: 'actioned' },
      ],
      index: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'editorialNotes',
      type: 'textarea',
      maxLength: 2000,
      admin: { description: 'Private notes for turning a useful conversation into better Expats.fi content.' },
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

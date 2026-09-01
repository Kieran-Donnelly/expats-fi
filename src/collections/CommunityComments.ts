import type { CollectionConfig } from 'payload'

import { canManageContent } from '@/lib/admin-access'

export const CommunityComments: CollectionConfig = {
  slug: 'community-comments',
  admin: {
    group: 'Community',
    useAsTitle: 'body',
    defaultColumns: ['post', 'author', 'status', 'createdAt'],
    description: 'Flat replies on community posts. Hide a reply when it breaks the community guidelines.',
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
      return data
    }],
    afterChange: [async ({ doc, req }) => {
      if (doc.status !== 'published') return doc

      const postId = typeof doc.post === 'object' && doc.post ? doc.post.id : doc.post
      if (postId) {
        await req.payload.update({
          collection: 'community-posts',
          id: postId,
          data: { lastActivityAt: new Date().toISOString() },
          depth: 0,
          overrideAccess: true,
        })
      }
      return doc
    }],
  },
  fields: [
    {
      name: 'post',
      type: 'relationship',
      relationTo: 'community-posts',
      required: true,
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
      name: 'body',
      type: 'textarea',
      required: true,
      maxLength: 3000,
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
  ],
}

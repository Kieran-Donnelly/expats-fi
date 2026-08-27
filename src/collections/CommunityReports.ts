import type { CollectionConfig } from 'payload'

import { canManageContent } from '@/lib/admin-access'

export const CommunityReports: CollectionConfig = {
  slug: 'community-reports',
  admin: {
    group: 'Community',
    useAsTitle: 'reason',
    defaultColumns: ['targetType', 'reason', 'status', 'reporter', 'createdAt'],
    description: 'Private member reports. Review the target, then hide it or dismiss the report.',
  },
  access: {
    read: ({ req: { user } }) => canManageContent(user),
    create: ({ req: { user } }) => user?.collection === 'members',
    update: ({ req: { user } }) => canManageContent(user),
    delete: ({ req: { user } }) => canManageContent(user),
  },
  hooks: {
    beforeChange: [async ({ data, originalDoc, req }) => {
      if (req.user?.collection === 'members') {
        data.reporter = req.user.id
        data.status = 'pending'
        data.reviewedAt = null
        data.reviewedByEmail = null
      }

      const targetType = data.targetType || originalDoc?.targetType
      const postId = data.post || originalDoc?.post
      const commentId = data.comment || originalDoc?.comment
      if (targetType === 'post' && !postId) throw new Error('A post report needs a post target.')
      if (targetType === 'comment' && !commentId) throw new Error('A comment report needs a comment target.')

      if (canManageContent(req.user) && data.status && data.status !== originalDoc?.status) {
        data.reviewedAt = data.reviewedAt || new Date().toISOString()
        data.reviewedByEmail = data.reviewedByEmail || req.user.email
      }

      return data
    }],
  },
  fields: [
    {
      name: 'reporter',
      type: 'relationship',
      relationTo: 'members',
      required: true,
      index: true,
      admin: { position: 'sidebar', readOnly: true },
    },
    {
      name: 'targetType',
      type: 'select',
      required: true,
      options: [
        { label: 'Post', value: 'post' },
        { label: 'Comment', value: 'comment' },
      ],
      index: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'post',
      type: 'relationship',
      relationTo: 'community-posts',
      index: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'comment',
      type: 'relationship',
      relationTo: 'community-comments',
      index: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'reason',
      type: 'select',
      required: true,
      options: [
        { label: 'Spam or promotion', value: 'spam' },
        { label: 'Harassment or abuse', value: 'harassment' },
        { label: 'Misinformation', value: 'misinformation' },
        { label: 'Something else', value: 'other' },
      ],
      index: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'details',
      type: 'textarea',
      maxLength: 1000,
      admin: { description: 'Optional context for the moderation team. Never shown publicly.' },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Resolved', value: 'resolved' },
        { label: 'Dismissed', value: 'dismissed' },
      ],
      index: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'reviewedAt',
      type: 'date',
      index: true,
      admin: { position: 'sidebar', readOnly: true, date: { pickerAppearance: 'dayAndTime' } },
    },
    {
      name: 'reviewedByEmail',
      type: 'email',
      admin: { position: 'sidebar', readOnly: true },
    },
  ],
}

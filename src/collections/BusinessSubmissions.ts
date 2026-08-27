import type { CollectionConfig } from 'payload'

import { canManageContent } from '@/lib/admin-access'
import { promoteApprovedSubmission } from '@/lib/business-moderation'

export const BusinessSubmissions: CollectionConfig = {
  slug: 'business-submissions',
  admin: {
    group: 'Directory',
    useAsTitle: 'businessName',
    defaultColumns: ['businessName', 'location', 'submittedBy', 'status', 'reviewedAt', 'createdAt'],
    description: 'Member submissions are reviewed here. Approving a submission creates or links a published directory profile after a duplicate website check.',
  },
  access: {
    read: ({ req: { user } }) => canManageContent(user) ? true : user?.collection === 'members' ? { submittedBy: { equals: user.id } } : false,
    create: ({ req: { user } }) => canManageContent(user) || user?.collection === 'members',
    update: ({ req: { user } }) => canManageContent(user),
    delete: ({ req: { user } }) => canManageContent(user),
  },
  hooks: {
    beforeChange: [async ({ data, originalDoc, req }) => {
      // Members can submit through the public form, but never choose the
      // reviewer-only fields or promote their own submission.
      if (req.user?.collection === 'members') {
        data.submittedBy = req.user.id
        data.status = 'pending'
        data.reviewerNotes = null
        data.reviewedAt = null
        data.reviewedByEmail = null
      }

      if (canManageContent(req.user) && data.status && data.status !== originalDoc?.status) {
        data.reviewedAt = data.reviewedAt || new Date().toISOString()
        data.reviewedByEmail = data.reviewedByEmail || req.user.email
      }

      return data
    }],
    afterChange: [async ({ doc, req }) => {
      if (doc.status !== 'approved') return doc

      const reviewerId = canManageContent(req.user) ? req.user.id : undefined
      await promoteApprovedSubmission({ payload: req.payload, submission: doc, reviewerId })
      return doc
    }],
  },
  fields: [
    {
      name: 'submittedBy',
      type: 'relationship',
      relationTo: 'members',
      required: true,
      admin: { position: 'sidebar', readOnly: true },
    },
    { name: 'businessName', type: 'text', required: true },
    { name: 'website', type: 'text', required: true },
    { name: 'location', type: 'text', required: true },
    { name: 'category', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
    { name: 'contactName', type: 'text', required: true },
    { name: 'contactEmail', type: 'email', required: true },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Pending review', value: 'pending' },
        { label: 'Approved', value: 'approved' },
        { label: 'Needs changes', value: 'needs-changes' },
        { label: 'Declined', value: 'declined' },
      ],
      index: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'reviewerNotes',
      type: 'textarea',
      access: { read: ({ req: { user } }) => canManageContent(user) },
      admin: { description: 'Internal notes shown to administrators.' },
    },
    {
      name: 'reviewedAt',
      type: 'date',
      index: true,
      access: { read: ({ req: { user } }) => canManageContent(user) },
      admin: {
        position: 'sidebar',
        readOnly: true,
        date: { pickerAppearance: 'dayAndTime' },
      },
    },
    {
      name: 'reviewedByEmail',
      type: 'email',
      access: { read: ({ req: { user } }) => canManageContent(user) },
      admin: { position: 'sidebar', readOnly: true },
    },
  ],
}

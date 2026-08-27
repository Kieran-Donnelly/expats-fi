import type { CollectionConfig } from 'payload'

import { canManageContent } from '@/lib/admin-access'

export const BusinessSubmissions: CollectionConfig = {
  slug: 'business-submissions',
  admin: {
    group: 'Directory',
    useAsTitle: 'businessName',
    defaultColumns: ['businessName', 'submittedBy', 'status', 'createdAt'],
  },
  access: {
    read: ({ req: { user } }) => canManageContent(user) ? true : user?.collection === 'members' ? { submittedBy: { equals: user.id } } : false,
    create: ({ req: { user } }) => canManageContent(user) || user?.collection === 'members',
    update: ({ req: { user } }) => canManageContent(user),
    delete: ({ req: { user } }) => canManageContent(user),
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
  ],
}

import type { CollectionConfig } from 'payload'

import { memberArrivalStages } from '@/lib/account-options'
import { canManageMembers } from '@/lib/admin-access'

export const Members: CollectionConfig = {
  slug: 'members',
  auth: {
    maxLoginAttempts: 8,
    lockTime: 10 * 60 * 1000,
    tokenExpiration: 60 * 60 * 24 * 30,
    useSessions: true,
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'provider', 'createdAt'],
  },
  access: {
    create: ({ req: { user } }) => canManageMembers(user),
    read: ({ req: { user } }) => canManageMembers(user) ? true : user?.collection === 'members' ? { id: { equals: user.id } } : false,
    update: ({ req: { user } }) => canManageMembers(user) ? true : user?.collection === 'members' ? { id: { equals: user.id } } : false,
    delete: ({ req: { user } }) => canManageMembers(user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      maxLength: 120,
    },
    {
      name: 'provider',
      type: 'select',
      required: true,
      defaultValue: 'password',
      options: [
        { label: 'Email and password', value: 'password' },
        { label: 'Google', value: 'google' },
        { label: 'Email and Google', value: 'both' },
      ],
      admin: { readOnly: true },
    },
    {
      name: 'googleSubject',
      type: 'text',
      unique: true,
      index: true,
      admin: { hidden: true },
    },
    {
      name: 'picture',
      type: 'text',
      admin: { readOnly: true },
    },
    {
      name: 'city',
      type: 'text',
      maxLength: 120,
      admin: { description: 'Optional city or municipality in Finland.' },
    },
    {
      name: 'languages',
      type: 'text',
      maxLength: 240,
      admin: { description: 'Languages the member would like to use on Expats.fi.' },
    },
    {
      name: 'arrivalStage',
      type: 'select',
      options: memberArrivalStages.map(({ label, value }) => ({ label, value })),
      admin: { description: 'Optional stage of the move to Finland.' },
    },
    {
      name: 'interests',
      type: 'json',
      admin: { description: 'Topics selected by the member for future recommendations.' },
    },
    {
      name: 'emailUpdates',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Occasional emails about useful new guides and directory updates.' },
    },
    {
      name: 'newsletter',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'The regular Expats.fi newsletter, when available.' },
    },
    {
      name: 'savedArticles',
      type: 'relationship',
      relationTo: 'articles',
      hasMany: true,
      admin: {
        description: 'Guides this member has saved for later.',
      },
    },
    {
      name: 'savedBusinesses',
      type: 'relationship',
      relationTo: 'businesses',
      hasMany: true,
      admin: {
        description: 'Businesses this member has saved for later.',
      },
    },
  ],
}

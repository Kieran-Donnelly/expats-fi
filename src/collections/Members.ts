import type { CollectionConfig } from 'payload'

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
    create: ({ req: { user } }) => user?.collection === 'users',
    read: ({ req: { user } }) => user?.collection === 'users' ? true : user?.collection === 'members' ? { id: { equals: user.id } } : false,
    update: ({ req: { user } }) => user?.collection === 'users' ? true : user?.collection === 'members' ? { id: { equals: user.id } } : false,
    delete: ({ req: { user } }) => user?.collection === 'users',
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
  ],
}

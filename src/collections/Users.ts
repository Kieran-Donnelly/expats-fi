import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: async ({ req }) => {
      if (req.user) return true
      const existing = await req.payload.find({ collection: 'users', limit: 0, overrideAccess: true })
      return existing.totalDocs === 0
    },
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
}

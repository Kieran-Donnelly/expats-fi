import type { CollectionConfig } from 'payload'

import { canManageUsers, isSuperAdmin, isSuperAdminEmail, userRoles } from '@/lib/admin-access'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'Access',
    defaultColumns: ['email', 'name', 'role', 'updatedAt'],
  },
  access: {
    read: ({ req: { user } }) => canManageUsers(user),
    create: async ({ data, req }) => {
      if (canManageUsers(req.user)) return true
      if (!isSuperAdminEmail(data?.email)) return false
      const existing = await req.payload.find({ collection: 'users', limit: 0, overrideAccess: true })
      return existing.totalDocs === 0
    },
    update: ({ req: { user } }) => canManageUsers(user),
    delete: ({ req: { user } }) => canManageUsers(user),
  },
  hooks: {
    beforeChange: [async ({ data, originalDoc, operation, req }) => {
      const identityEmail = typeof data.email === 'string' ? data.email : typeof originalDoc?.email === 'string' ? originalDoc.email : ''
      if (isSuperAdminEmail(identityEmail)) {
        data.role = 'super-admin'
      } else if (data.role === 'super-admin') {
        throw new Error('Only the approved Expats.fi owners can hold the super-admin role.')
      }

      if (operation === 'update' && isSuperAdmin(originalDoc) && data.role && data.role !== 'super-admin') {
        const admins = await req.payload.find({
          collection: 'users',
          limit: 0,
          overrideAccess: true,
          where: { role: { equals: 'super-admin' } },
        })
        if (admins.totalDocs <= 1) throw new Error('At least one super admin must remain.')
      }

      return data
    }],
    beforeDelete: [async ({ id, req }) => {
      const user = await req.payload.findByID({ collection: 'users', id, overrideAccess: true })
      if (isSuperAdmin(user)) {
        const admins = await req.payload.find({
          collection: 'users',
          limit: 0,
          overrideAccess: true,
          where: { role: { equals: 'super-admin' } },
        })
        if (admins.totalDocs <= 1) throw new Error('At least one super admin must remain.')
      }
    }],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      options: userRoles.map((role) => ({
        label: role === 'super-admin' ? 'Super admin' : 'Editor',
        value: role,
      })),
      access: {
        update: ({ req: { user } }) => canManageUsers(user),
        create: ({ req: { user } }) => canManageUsers(user),
      },
      admin: {
        position: 'sidebar',
        description: 'Super admins manage users and members. Editors manage published site content.',
      },
    },
  ],
}

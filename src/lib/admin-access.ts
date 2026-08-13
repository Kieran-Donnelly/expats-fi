import type { User } from '@/payload-types'

export const userRoles = ['super-admin', 'editor'] as const
export const superAdminEmails = ['kieran@podium.dev', 'uriah@podium.dev'] as const

export type UserRole = (typeof userRoles)[number]

type AuthenticatedUser = Pick<User, 'collection' | 'email'> & {
  role?: UserRole | null
}

export function isCmsUser(user: unknown): user is AuthenticatedUser {
  if (!user || typeof user !== 'object') return false
  const candidate = user as Partial<AuthenticatedUser>
  return candidate.collection === 'users' && typeof candidate.email === 'string'
}

export function isSuperAdmin(user: unknown): user is AuthenticatedUser {
  return isCmsUser(user) && user.role === 'super-admin'
}

export function canManageContent(user: unknown): user is AuthenticatedUser {
  return isCmsUser(user) && (user.role === 'super-admin' || user.role === 'editor')
}

export function canManageUsers(user: unknown): user is AuthenticatedUser {
  return isSuperAdmin(user)
}

export function canManageMembers(user: unknown): user is AuthenticatedUser {
  return isSuperAdmin(user)
}

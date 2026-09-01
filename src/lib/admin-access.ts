import type { User } from '@/payload-types'

export const userRoles = ['super-admin', 'editor'] as const
export const superAdminEmails = ['kieran@podium.dev', 'uriah@podium.dev'] as const

export type UserRole = (typeof userRoles)[number]

export function isSuperAdminEmail(value: unknown): value is (typeof superAdminEmails)[number] {
  if (typeof value !== 'string') return false
  return superAdminEmails.includes(value.trim().toLowerCase() as (typeof superAdminEmails)[number])
}

type AuthenticatedUser = Pick<User, 'id' | 'collection' | 'email'> & {
  role?: UserRole | null
}

export function isCmsUser(user: unknown): user is AuthenticatedUser {
  if (!user || typeof user !== 'object') return false
  const candidate = user as Partial<AuthenticatedUser>
  return candidate.collection === 'users' && typeof candidate.email === 'string'
}

export function isSuperAdmin(user: unknown): user is AuthenticatedUser {
  return isCmsUser(user) && user.role === 'super-admin' && isSuperAdminEmail(user.email)
}

export function canManageContent(user: unknown): user is AuthenticatedUser {
  return isSuperAdmin(user) || (isCmsUser(user) && user.role === 'editor')
}

export function canManageUsers(user: unknown): user is AuthenticatedUser {
  return isSuperAdmin(user)
}

export function canManageMembers(user: unknown): user is AuthenticatedUser {
  return isSuperAdmin(user)
}

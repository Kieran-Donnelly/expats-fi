import config from '@payload-config'
import { getPayload, type Payload } from 'payload'

import type { Business, Member } from '@/payload-types'

type SavedBusinessValue = NonNullable<Member['savedBusinesses']>[number]

export function savedBusinessId(value: SavedBusinessValue): number | null {
  if (typeof value === 'number') return value
  if (value && typeof value === 'object' && typeof value.id === 'number') return value.id
  return null
}

export function savedBusinessIdSet(member: Pick<Member, 'savedBusinesses'>): Set<number> {
  return new Set(
    (member.savedBusinesses || [])
      .map(savedBusinessId)
      .filter((id): id is number => id !== null),
  )
}

async function getMember(memberId: string | number, payload?: Payload, depth = 0) {
  const cms = payload || await getPayload({ config })
  return cms.findByID({
    collection: 'members',
    id: memberId,
    depth,
    overrideAccess: true,
  })
}

export async function getSavedBusinessIds(memberId: string | number, payload?: Payload): Promise<Set<number>> {
  return savedBusinessIdSet(await getMember(memberId, payload))
}

export async function getSavedBusinesses(memberId: string | number, payload?: Payload): Promise<Business[]> {
  const member = await getMember(memberId, payload, 1)
  const seen = new Set<number>()
  return (member.savedBusinesses || []).filter((value): value is Business => {
    if (!value || typeof value !== 'object' || typeof value.id !== 'number' || value.status !== 'published') return false
    if (seen.has(value.id)) return false
    seen.add(value.id)
    return true
  })
}

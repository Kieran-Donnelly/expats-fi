import config from '@payload-config'
import { getPayload, type Payload } from 'payload'

import type { Article, Member } from '@/payload-types'

type SavedArticleValue = NonNullable<Member['savedArticles']>[number]

export function savedArticleId(value: SavedArticleValue): number | null {
  if (typeof value === 'number') return value
  if (value && typeof value === 'object' && typeof value.id === 'number') return value.id
  return null
}

export function savedArticleIdSet(member: Pick<Member, 'savedArticles'>): Set<number> {
  return new Set(
    (member.savedArticles || [])
      .map(savedArticleId)
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

export async function getSavedArticleIds(memberId: string | number, payload?: Payload): Promise<Set<number>> {
  return savedArticleIdSet(await getMember(memberId, payload))
}

export async function getSavedArticles(memberId: string | number, payload?: Payload): Promise<Article[]> {
  const member = await getMember(memberId, payload, 1)
  return (member.savedArticles || []).filter((value): value is Article => (
    Boolean(value) && typeof value === 'object' && typeof value.id === 'number' && value._status !== 'draft'
  ))
}

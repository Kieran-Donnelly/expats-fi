export const communityTrustLevels = ['new', 'trusted', 'restricted'] as const
export type CommunityTrustLevel = (typeof communityTrustLevels)[number]

export const communityContentStatuses = ['pending', 'published', 'flagged', 'hidden', 'rejected'] as const
export type CommunityContentStatus = (typeof communityContentStatuses)[number]

export const communityScreeningStatuses = ['unreviewed', 'clear', 'attention'] as const
export type CommunityScreeningStatus = (typeof communityScreeningStatuses)[number]

export type CommunityScreeningResult = {
  status: Exclude<CommunityScreeningStatus, 'unreviewed'>
  signals: string[]
}

const linkPattern = /https?:\/\/|www\./gi
const emailPattern = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i
const phonePattern = /(?:\+?\d[\d\s().-]{7,}\d)/
const urgentMoneyPattern = /(?:urgent|immediately|today|limited time|guaranteed).{0,80}(?:payment|transfer|crypto|bitcoin|gift card|investment|loan)|(?:payment|transfer|crypto|bitcoin|gift card|investment|loan).{0,80}(?:urgent|immediately|today|guaranteed)/i
const threatPattern = /\b(?:kill yourself|i(?:'|’)ll kill|we(?:'|’)ll kill|hunt you down)\b/i

export function screenCommunityContent(title: string, body: string): CommunityScreeningResult {
  const value = `${title}\n${body}`.trim()
  const signals: string[] = []
  const links = value.match(linkPattern)?.length || 0

  if (links > 2) signals.push('Several external links')
  else if (links > 0) signals.push('Contains an external link')
  if (emailPattern.test(value)) signals.push('Contains an email address')
  if (phonePattern.test(value)) signals.push('Contains a possible phone number')
  if (urgentMoneyPattern.test(value)) signals.push('Contains urgent financial or payment language')
  if (threatPattern.test(value)) signals.push('Contains possible threatening language')

  return { status: signals.length ? 'attention' : 'clear', signals }
}

export function communitySubmissionStatus(trust: unknown, screening: CommunityScreeningResult): CommunityContentStatus {
  if (trust === 'restricted') return 'rejected'
  if (trust === 'trusted' && screening.status === 'clear') return 'published'
  return screening.status === 'attention' ? 'flagged' : 'pending'
}

export function isCommunityTrustLevel(value: unknown): value is CommunityTrustLevel {
  return typeof value === 'string' && communityTrustLevels.includes(value as CommunityTrustLevel)
}

export function isCommunityContentStatus(value: unknown): value is CommunityContentStatus {
  return typeof value === 'string' && communityContentStatuses.includes(value as CommunityContentStatus)
}

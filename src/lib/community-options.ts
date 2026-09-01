export const communityTopicOptions = [
  { label: 'Ask the community', value: 'general' },
  { label: 'Housing', value: 'housing' },
  { label: 'Work & money', value: 'work-money' },
  { label: 'Everyday life', value: 'everyday-life' },
  { label: 'Finnish language', value: 'finnish' },
  { label: 'Family', value: 'family' },
  { label: 'Culture & events', value: 'culture-events' },
] as const

export type CommunityTopic = (typeof communityTopicOptions)[number]['value']

export const communityTopicLabels: Record<CommunityTopic, string> = Object.fromEntries(
  communityTopicOptions.map(({ label, value }) => [value, label]),
) as Record<CommunityTopic, string>

export const communityReportReasonOptions = [
  { label: 'Spam or promotion', value: 'spam' },
  { label: 'Harassment or abuse', value: 'harassment' },
  { label: 'Misinformation', value: 'misinformation' },
  { label: 'Something else', value: 'other' },
] as const

export type CommunityReportReason = (typeof communityReportReasonOptions)[number]['value']

export const communityReportReasonLabels: Record<CommunityReportReason, string> = Object.fromEntries(
  communityReportReasonOptions.map(({ label, value }) => [value, label]),
) as Record<CommunityReportReason, string>

export const communityReportActions = {
  hide: 'hide',
  dismiss: 'dismiss',
} as const

export type CommunityReportAction = (typeof communityReportActions)[keyof typeof communityReportActions]

export const communityContentActions = {
  approve: 'approve',
  approveAndTrust: 'approve-and-trust',
  reject: 'reject',
} as const

export type CommunityContentAction = (typeof communityContentActions)[keyof typeof communityContentActions]

export function isCommunityTopic(value: unknown): value is CommunityTopic {
  return typeof value === 'string' && communityTopicOptions.some((option) => option.value === value)
}

export function isCommunityReportReason(value: unknown): value is CommunityReportReason {
  return typeof value === 'string' && communityReportReasonOptions.some((option) => option.value === value)
}

export function isCommunityReportAction(value: unknown): value is CommunityReportAction {
  return value === communityReportActions.hide || value === communityReportActions.dismiss
}

export function isCommunityContentAction(value: unknown): value is CommunityContentAction {
  return value === communityContentActions.approve || value === communityContentActions.approveAndTrust || value === communityContentActions.reject
}

export function slugifyCommunityTitle(value: string): string {
  const slug = value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return slug || 'community-post'
}

export function memberDisplayName(value: unknown): string {
  if (value && typeof value === 'object') {
    const candidate = value as { name?: unknown; email?: unknown }
    if (typeof candidate.name === 'string' && candidate.name.trim()) return candidate.name.trim()
    if (typeof candidate.email === 'string' && candidate.email.trim()) return candidate.email.split('@')[0]
  }
  return 'Expats.fi member'
}

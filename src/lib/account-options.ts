export const memberArrivalStages = [
  { label: 'Planning a move', value: 'planning' },
  { label: 'New arrival', value: 'new-arrival' },
  { label: 'Settling in', value: 'settling-in' },
  { label: 'Established in Finland', value: 'established' },
] as const

export const memberInterestOptions = [
  'Immigration & permits',
  'Work & money',
  'Housing',
  'Health & wellbeing',
  'Getting around',
  'Family',
  'Everyday life',
  'Finnish language',
  'Culture & community',
] as const

export type MemberArrivalStage = (typeof memberArrivalStages)[number]['value']
export type MemberInterest = (typeof memberInterestOptions)[number]

export function isMemberArrivalStage(value: unknown): value is MemberArrivalStage {
  return typeof value === 'string' && memberArrivalStages.some((stage) => stage.value === value)
}

export function memberArrivalStageLabel(value: unknown): string {
  return memberArrivalStages.find((stage) => stage.value === value)?.label || 'Not set'
}

export function normaliseMemberInterests(value: unknown): MemberInterest[] {
  if (!Array.isArray(value)) return []
  return [...new Set(value.filter((item): item is MemberInterest => (
    typeof item === 'string' && memberInterestOptions.includes(item as MemberInterest)
  )))]
}

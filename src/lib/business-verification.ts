export const businessVerificationStatuses = [
  { label: 'Unverified', value: 'unverified' },
  { label: 'Details checked', value: 'reviewed' },
  { label: 'Confirmed by business', value: 'owner-verified' },
] as const

export type BusinessVerificationStatus = (typeof businessVerificationStatuses)[number]['value']

export function isBusinessVerificationStatus(value: unknown): value is BusinessVerificationStatus {
  return businessVerificationStatuses.some((status) => status.value === value)
}

export function isPubliclyVerifiedBusiness(value: unknown): boolean {
  return value === 'reviewed' || value === 'owner-verified'
}

export function businessVerificationLabel(value: unknown): string {
  return businessVerificationStatuses.find((status) => status.value === value)?.label || 'Unverified'
}

export function businessVerificationDescription(value: unknown): string {
  if (value === 'owner-verified') return 'The business has confirmed its listing details'
  if (value === 'reviewed') return 'Expats.fi has checked the listing details against public information'
  return 'This listing has not yet been checked'
}

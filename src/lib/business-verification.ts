export const businessVerificationStatuses = [
  { label: 'Unverified', value: 'unverified' },
  { label: 'Reviewed by Expats.fi', value: 'reviewed' },
  { label: 'Owner verified', value: 'owner-verified' },
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

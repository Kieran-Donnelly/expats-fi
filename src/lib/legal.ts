export const ACCOUNT_MINIMUM_AGE = 16
export const TERMS_VERSION = '2026-10-07'

export function hasAcceptedCurrentTerms(member: { ageConfirmedAt?: string | null; termsAcceptedAt?: string | null; termsVersion?: string | null }) {
  return Boolean(member.ageConfirmedAt && member.termsAcceptedAt && member.termsVersion === TERMS_VERSION)
}

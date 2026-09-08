export const authJourneyMessages = {
  'save-guide': 'Sign in to save this guide. We will bring you straight back afterwards.',
  'save-business': 'Sign in to add this business to your shortlist. We will bring you straight back afterwards.',
  'start-post': 'Sign in to start a community conversation. We will bring you straight back to the board.',
  reply: 'Sign in to add your reply. We will bring you straight back to the conversation.',
  report: 'Sign in to send a private report. We will bring you straight back to the conversation.',
  'submit-business': 'Sign in to send the listing and follow its review from your account.',
} as const

export type AuthJourney = keyof typeof authJourneyMessages

export function getAuthJourney(value: unknown): AuthJourney | undefined {
  if (typeof value !== 'string' || !(value in authJourneyMessages)) return undefined
  return value as AuthJourney
}

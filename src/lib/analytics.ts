export type AnalyticsParameters = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Sends an anonymous interaction to the Google Analytics instance already used
 * by the site. Never pass names, email addresses, search text or form values.
 */
export function trackAnalyticsEvent(eventName: string, parameters: AnalyticsParameters = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  const safeParameters = Object.fromEntries(
    Object.entries(parameters).filter((entry): entry is [string, string | number | boolean] => entry[1] !== undefined),
  )

  window.gtag('event', eventName, safeParameters)
}

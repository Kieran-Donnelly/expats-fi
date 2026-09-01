const siteOrigin = 'https://expats.fi'

export function safeReturnPath(value: unknown, fallback = '/account/'): string {
  if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//') || value.includes('\\')) return fallback

  try {
    const target = new URL(value, siteOrigin)
    if (target.origin !== siteOrigin) return fallback
    return `${target.pathname}${target.search}${target.hash}`
  } catch {
    return fallback
  }
}

import type { CityEvent } from '@/data/events'

export function helsinkiDateKey(date = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Helsinki',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date)
}

export function isPastEvent(endDate: string, date = new Date()) {
  return endDate < helsinkiDateKey(date)
}

export function eventOfferJsonLd(event: Pick<CityEvent, 'free' | 'offerPrice' | 'offerUrl' | 'sourceUrl'>) {
  const price = event.free ? 0 : event.offerPrice

  return {
    '@type': 'Offer',
    url: event.offerUrl || event.sourceUrl,
    ...(typeof price === 'number' ? { price, priceCurrency: 'EUR' } : {}),
  }
}

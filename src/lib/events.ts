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

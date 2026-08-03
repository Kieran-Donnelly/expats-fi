import type { Embassy } from '@/payload-types'

export const representationLabels: Record<Embassy['representationType'], string> = {
  'resident-embassy': 'Embassy in Finland',
  'representative-office': 'Representative office in Finland',
  'non-resident-embassy': 'Accredited embassy abroad',
  'honorary-consulate': 'Honorary consulate in Finland',
  'foreign-ministry': 'Foreign ministry fallback',
}

export function countryFlag(code: string) {
  if (!/^[A-Z]{2}$/.test(code)) return '🌐'
  return String.fromCodePoint(...code.split('').map((letter) => 127397 + letter.charCodeAt(0)))
}

export function representationSummary(embassy: Embassy) {
  if (embassy.representationType === 'resident-embassy') return 'This country has a resident embassy in Helsinki.'
  if (embassy.representationType === 'representative-office') return 'This country or territory maintains a representative office in Helsinki.'
  if (embassy.representationType === 'honorary-consulate') return 'The best listed local contact is an honorary consulate in Finland.'
  if (embassy.representationType === 'non-resident-embassy') return `Finland is handled by an embassy based in ${embassy.city}, ${embassy.hostCountry}.`
  return `No accredited mission was listed. Start with the foreign ministry in ${embassy.city}, ${embassy.hostCountry}, and confirm the nearest consular mission.`
}

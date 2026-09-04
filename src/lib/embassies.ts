import type { Embassy } from '@/payload-types'

export const representationLabels: Record<Embassy['representationType'], string> = {
  'resident-embassy': 'Embassy in Finland',
  'representative-office': 'Representative office in Finland',
  'non-resident-embassy': 'Accredited embassy abroad',
  'honorary-consulate': 'Honorary consulate in Finland',
  'foreign-ministry': 'Foreign ministry fallback',
}

export function representationSummary(embassy: Embassy) {
  if (embassy.representationType === 'resident-embassy') {
    return `${embassy.country} has a resident embassy in Helsinki. Find its official website, location and Finnish directory listing before you visit or send documents.`
  }
  if (embassy.representationType === 'representative-office') {
    return `${embassy.country} maintains a representative office in Helsinki. Check its official contact details and Finnish directory listing before you visit.`
  }
  if (embassy.representationType === 'honorary-consulate') {
    return `${embassy.country}'s best listed local contact is an honorary consulate in Finland. Check what it can handle before arranging a visit.`
  }
  if (embassy.representationType === 'non-resident-embassy') {
    return `${embassy.country}'s accredited embassy for Finland is based in ${embassy.city}, ${embassy.hostCountry}. Find its official contact and verification details.`
  }
  return `${embassy.country} had no mission accredited to Finland when checked. Start with its foreign ministry in ${embassy.city} and confirm the nearest consular service.`
}

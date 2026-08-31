export type OriginalGuide = {
  slug: string
  title: string
  description: string
  category: 'Immigration & permits' | 'Work & money' | 'Housing' | 'Health & wellbeing' | 'Getting around' | 'Family' | 'Everyday life'
  publishedAt: string
  readingMinutes: number
  html: string
  featured: boolean
}

import { originalGuideProfiles } from './original-guide-profiles'

type GuideRow = { section: string; slug: string; category: OriginalGuide['category']; title?: string; officialUrl?: string }

const rows: GuideRow[] = [
  ...['index', 'quick_guide', 'address_and_postal_services', 'study_in_finland', 'work_and_residence_permits', 'registration', 'citizenship', 'importing_and_customs', 'international_movers', 'storage_warehousing', 'relocation_services', 'leaving_finland'].map((slug) => ({ section: 'moving_to_finland', slug, category: 'Immigration & permits' as const })),
  ...['index', 'housing_and_utilities', 'real_estate_terms', 'finding_housing_in_finland', 'furnished_apartments_in_finland', 'corporate_accommodation_in_finland', 'project_accommodation_in_finland', 'estate_agents_in_finland', 'selling_property_in_finland', 'renting_in_finland', 'buying_property_in_finland', 'investment_property_in_finland', 'home_loans_in_finland', 'tax_advantages_for_housing', 'financial_support_for_housing', 'student_housing_in_finland', 'emergency_accommodation_in_finland'].map((slug) => ({ section: 'housing', slug, category: 'Housing' as const })),
  ...['index', 'driving', 'preschools_kindergartens', 'international_schools', 'education', 'public_healthcare', 'private_healthcare', 'social_security', 'tax', 'language_training', 'language_clubs_summer_camps', 'culture', 'finnish_language', 'news', 'religion', 'driving_tips', 'city_by_city', 'finnish_jokes', 'fingerpori'].map((slug) => ({ section: 'living_in_finland', slug, category: (slug.includes('healthcare') || slug === 'social_security' ? 'Health & wellbeing' : slug.includes('driving') ? 'Getting around' : slug === 'tax' ? 'Work & money' : 'Everyday life') as OriginalGuide['category'] })),
  ...['index', 'foreign_qualifications', 'finding_work', 'finnish_labour_market', 'employment_services', 'eures_employment_service', 'te_employment_service', 'wages_conditions', 'employment_contract', 'employment_law_and_disputes', 'unions'].map((slug) => ({ section: 'employment', slug, category: 'Work & money' as const })),
  ...['index', 'establishing', 'business_space', 'accounting_and_auditing_firms', 'electronic_financial_management', 'accountancy', 'taxation', 'employer_information', 'development_and_finance', 'lawyers'].map((slug) => ({ section: 'entrepreneurship', slug, category: 'Work & money' as const })),
  ...['index', 'insurance', 'banking', 'account', 'online_banking', 'loans', 'disputes'].map((slug) => ({ section: 'finance', slug, category: 'Work & money' as const })),
  ...['index', 'forums', 'groups', 'friendship_societies', 'embassies'].map((slug) => ({ section: 'connections', slug, category: 'Everyday life' as const })),
  ...['index', 'events', 'expat_sports', 'finnish_sports'].map((slug) => ({ section: 'events', slug, category: 'Everyday life' as const })),
  ...['index', 'telephone', 'isp', 'television', 'pay_tv', 'net_tv', 'satellite_tv', 'radio'].map((slug) => ({ section: 'telecommunications_and_media', slug, category: 'Everyday life' as const })),
  ...['index', 'accommodation', 'finnish_travel_guides', 'finnish_adventures', 'finnish_travel_agencies', 'cruises', 'flights', 'bus_train', 'public_transport', 'car_hire'].map((slug) => ({ section: 'travel_finland', slug, category: slug === 'accommodation' ? 'Housing' as const : 'Getting around' as const })),
  ...['index', 'sales_tax', 'retailers', 'loyalty_cards', 'groceries', 'sales', 'online_shopping'].map((slug) => ({ section: 'shopping_in_finland', slug, category: slug === 'sales_tax' ? 'Work & money' as const : 'Everyday life' as const })),
  { section: 'living_in_finland', slug: 'seasons', category: 'Everyday life', title: 'Finland through the seasons: planning life around light, weather and nature' },
]

const sectionNames: Record<string, string> = {
  moving_to_finland: 'Moving to Finland',
  housing: 'Housing',
  living_in_finland: 'Living in Finland',
  employment: 'Work and employment',
  entrepreneurship: 'Business and entrepreneurship',
  finance: 'Money and banking',
  connections: 'Community and connections',
  events: 'Events and sport',
  telecommunications_and_media: 'Phones, internet and media',
  travel_finland: 'Travel and transport',
  shopping_in_finland: 'Shopping and consumer life',
}

const titleOverrides: Record<string, string> = {
  'moving_to_finland-index': 'Moving to Finland: a practical orientation guide',
  'moving_to_finland-quick_guide': 'Your first steps in Finland: a practical settling-in guide',
  'moving_to_finland-work_and_residence_permits': 'Work and residence permits: planning your route to Finland',
  'moving_to_finland-registration': 'Registration in Finland: the records and identifiers to understand',
  'moving_to_finland-importing_and_customs': 'Bringing belongings, vehicles and pets to Finland',
  'housing-index': 'Housing in Finland: choosing, securing and running a home',
  'housing-finding_housing_in_finland': 'Finding a home in Finland: a search strategy that works',
  'housing-renting_in_finland': 'Renting in Finland: leases, deposits and everyday responsibilities',
  'housing-buying_property_in_finland': 'Buying a home in Finland: the decisions before you make an offer',
  'living_in_finland-index': 'Living in Finland: building your everyday system',
  'living_in_finland-public_healthcare': 'Public healthcare in Finland: how to find the right doorway',
  'living_in_finland-private_healthcare': 'Private healthcare in Finland: comparing access and cost',
  'living_in_finland-tax': 'Taxes in Finland: a plain-English map of the system',
  'employment-index': 'Working in Finland: finding a role and understanding working life',
  'employment-finding_work': 'Finding work in Finland: a focused search plan',
  'entrepreneurship-index': 'Starting a business in Finland: the decisions that come first',
  'finance-index': 'Money in Finland: banking, insurance and financial safety',
  'connections-embassies': 'Embassies and consulates: finding the right official contact',
  'events-index': 'Events and sport in Finland: finding your people locally',
  'telecommunications_and_media-index': 'Phones, internet and media in Finland: setting up your connection',
  'travel_finland-index': 'Travel and transport in Finland: planning confident journeys',
  'shopping_in_finland-index': 'Shopping in Finland: compare, plan and buy with confidence',
}

const officialUrls: Record<OriginalGuide['category'], string> = {
  'Immigration & permits': 'https://migri.fi/en/home',
  'Work & money': 'https://www.suomi.fi/frontpage',
  Housing: 'https://www.infofinland.fi/en/housing',
  'Health & wellbeing': 'https://www.infofinland.fi/en/health',
  'Getting around': 'https://www.traficom.fi/en',
  Family: 'https://www.infofinland.fi/en/family',
  'Everyday life': 'https://www.suomi.fi/frontpage',
}

function titleCase(value: string): string {
  return value
    .replace(/\.html$/, '')
    .replace(/_/g, ' ')
    .replace(/\b(finland|finnish)\b/gi, 'Finland')
    .replace(/\b(and|in|of|to|the|for)\b/gi, (word) => word.toLowerCase())
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function topicTitle(row: GuideRow): string {
  const key = `${row.section}-${row.slug}`
  if (titleOverrides[key]) return titleOverrides[key]
  if (row.slug === 'index') return `${sectionNames[row.section]}: a practical guide for life in Finland`
  return `${titleCase(row.slug)} in Finland: a practical guide`
}

function topicWords(title: string): string {
  return title.replace(/: a practical guide.*$/i, '').replace(/: planning your route to Finland$/i, '').replace(/: the decisions before you make an offer$/i, '').trim()
}

function guideHtml(row: GuideRow, title: string, topic: string): string {
  const key = row.section + '-' + row.slug
  const profile = originalGuideProfiles[key]
  if (!profile) throw new Error('Missing researched guide profile for ' + key)
  const officialUrl = row.officialUrl || profile.officialUrl || officialUrls[row.category]
  return [
    '<p>' + profile.focus + '</p>',
    '<h2>What this guide is for</h2><p>This is an original Expats.fi editorial guide to <strong>' + topic.toLowerCase() + '</strong>. It gives you a useful starting structure, explains the decisions that deserve attention and points to the authority or service that can confirm the current answer.</p>',
    '<h2>Plan it in this order</h2><ol>' + profile.plan.map((item) => '<li>' + item + '</li>').join('') + '</ol>',
    '<h2>Check these before you commit</h2><ul>' + profile.watch.map((item) => '<li>' + item + '</li>').join('') + '</ul>',
    '<h2>Questions worth answering early</h2><ul><li>Which Finnish authority, provider or organisation owns the decision?</li><li>What evidence, date or total cost could change the answer for my household?</li><li>What is my backup route if the first option is delayed, full or unsuitable?</li></ul>',
    '<h2>Keep a small Finland file</h2><p>Save the official page you used, the date you checked it, any reference number and the documents you submitted. A short timeline is often more useful than a large folder of screenshots. If another person is helping you, write down what they are responsible for and what you still need to confirm yourself.</p>',
    '<h2>Verify before you act</h2><p>Rules, prices, opening times and available services change. Begin with <a href="' + officialUrl + '" target="_blank" rel="noreferrer">the relevant official starting point</a>, then confirm the specific instructions for your municipality, provider or situation. If the decision affects immigration status, health, tax, employment or a large financial commitment, get advice for your individual circumstances.</p>',
  ].join('')
}

export const originalGuides: OriginalGuide[] = rows.map((row) => {
  const title = topicTitle(row)
  const topic = topicWords(title)
  const slug = `guide-${row.section}-${row.slug}`.replace(/[^a-z0-9]+/gi, '-').replace(/-+$/, '').toLowerCase()
  const html = guideHtml(row, title, topic)
  const profile = originalGuideProfiles[row.section + '-' + row.slug]
  return {
    slug,
    title,
    description: profile.focus,
    category: row.category,
    publishedAt: '2026-08-07',
    readingMinutes: Math.max(3, Math.round(html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length / 180)),
    html,
    featured: row.slug === 'index',
  }
})

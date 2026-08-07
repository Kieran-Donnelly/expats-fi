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
  Housing: 'https://www.suomi.fi/housing-and-everyday-life',
  'Health & wellbeing': 'https://www.suomi.fi/health',
  'Getting around': 'https://www.traficom.fi/en',
  Family: 'https://www.suomi.fi/families',
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

function actionsFor(row: GuideRow, topic: string): [string, string, string] {
  const slug = row.slug
  if (row.category === 'Immigration & permits') return [
    `Write down the outcome you need from ${topic.toLowerCase()} and the date by which you need it.`,
    'Separate official requirements from helpful extras, then collect the documents that prove each requirement.',
    'Keep copies, confirmation numbers and dates together so you can answer follow-up questions quickly.',
  ]
  if (row.category === 'Housing') return [
    `Define the home, service or housing arrangement you need before comparing ${topic.toLowerCase()}.`,
    'Ask for the full cost, the length of the commitment and the conditions that apply if your plans change.',
    'Read the agreement slowly, record the starting condition and keep every receipt, message and inspection note.',
  ]
  if (row.category === 'Health & wellbeing') return [
    'Start with urgency: use emergency services for an emergency and a normal appointment route for a routine concern.',
    'Prepare your identity details, relevant history, medicines and language needs before contacting a provider.',
    'Ask what happens next, what the likely cost is and where your records or instructions will be stored.',
  ]
  if (row.category === 'Getting around') return [
    `Plan the route and the backup route before relying on ${topic.toLowerCase()}, especially in winter or at night.`,
    'Check the operator, ticket conditions, accessibility information and any local rules that apply to your journey.',
    'Save live-service links and allow extra time when weather, maintenance or a public holiday could change the plan.',
  ]
  if (row.category === 'Work & money' && (slug.includes('business') || row.section === 'entrepreneurship')) return [
    `Describe the customer, activity and risk behind ${topic.toLowerCase()} before choosing a structure or provider.`,
    'Create a simple record of income, costs, contracts and deadlines from the very beginning.',
    'Get specialist advice when tax, employment, insurance or liability decisions could affect the business.',
  ]
  if (row.category === 'Work & money') return [
    `Start with the decision you need to make about ${topic.toLowerCase()}, not with a long list of providers.`,
    'Compare total cost, eligibility, terms and the quality of customer support in a language you understand.',
    'Keep a calendar for renewals, reporting dates, payments and the documents you may need later.',
  ]
  if (row.category === 'Family') return [
    `Choose the kind of support or connection you want from ${topic.toLowerCase()}.`,
    'Check who runs the service or group, how participation works and whether there are language or membership expectations.',
    'Start with one low-pressure contact and build a routine before deciding whether a larger commitment suits you.',
  ]
  return [
    `Decide what a good result would look like for ${topic.toLowerCase()} in your own week.`,
    'Compare practical details such as location, opening times, language, total cost and how easy it is to change course.',
    'Save the small pieces of information you will want again: links, account details, receipts and contact names.',
  ]
}

function guideHtml(row: GuideRow, title: string, topic: string): string {
  const [first, second, third] = actionsFor(row, topic)
  const officialUrl = row.officialUrl || officialUrls[row.category]
  return [
    `<p>Starting something new in Finland is easier when the next decision is visible. This original Expats.fi guide turns <strong>${topic.toLowerCase()}</strong> into a practical sequence, with room for your own circumstances and a reminder to verify details before you act.</p>`,
    `<h2>What this guide is for</h2><p>${title} is a starting point, not a substitute for a decision made by a Finnish authority, provider or qualified professional. Use it to prepare better questions, compare your options and keep track of what you have already done.</p>`,
    `<h2>A sensible way to approach it</h2><ol><li>${first}</li><li>${second}</li><li>${third}</li></ol>`,
    `<h2>Questions worth answering early</h2><ul><li>What is the exact outcome I need, and who has the authority to confirm it?</li><li>Which dates, costs or eligibility conditions could change the decision?</li><li>What will I do if the first route is unavailable, delayed or not a good fit?</li></ul>`,
    `<h2>Keep a small Finland file</h2><p>Save the official page you used, the date you checked it, any reference number and the documents you submitted. A short timeline is often more useful than a large folder of screenshots. If another person is helping you, write down what they are responsible for and what you still need to confirm yourself.</p>`,
    `<h2>Verify before you act</h2><p>Rules, prices, opening times and available services change. Begin with <a href="${officialUrl}" target="_blank" rel="noreferrer">the relevant official starting point</a>, then confirm the specific instructions for your municipality, provider or situation. If the decision affects immigration status, health, tax, employment or a large financial commitment, get advice for your individual circumstances.</p>`,
  ].join('')
}

export const originalGuides: OriginalGuide[] = rows.map((row) => {
  const title = topicTitle(row)
  const topic = topicWords(title)
  const slug = `guide-${row.section}-${row.slug}`.replace(/[^a-z0-9]+/gi, '-').replace(/-+$/, '').toLowerCase()
  const html = guideHtml(row, title, topic)
  return {
    slug,
    title,
    description: `An original, plain-English guide to ${topic.toLowerCase()}, focused on the decisions, questions and practical preparation that matter in Finland.`,
    category: row.category,
    publishedAt: '2026-08-07',
    readingMinutes: Math.max(3, Math.round(html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length / 180)),
    html,
    featured: row.slug === 'index',
  }
})


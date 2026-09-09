export type ArticleJourneyLink = {
  href: string
  title: string
  description: string
}

export const articleSeoTitles: Record<string, string> = {
  'guide-moving-to-finland-registration': 'Registering in Finland: identity code, address and kotikunta',
  'guide-finance-account': 'Opening a bank account in Finland as a newcomer',
  'guide-living-in-finland-social-security': 'Kela after moving to Finland: eligibility and first steps',
  'guide-employment-foreign-qualifications': 'Recognition of foreign qualifications in Finland',
  'guide-employment-finding-work': 'Finding a job in Finland: a practical guide for internationals',
  'guide-employment-finnish-labour-market': 'The Finnish job market: sectors, language and local realities',
  'guide-employment-employment-services': 'Job Market Finland and local employment services',
  'guide-employment-eures-employment-service': 'EURES Finland: finding work across Europe',
  'guide-employment-wages-conditions': 'Pay, working hours and employment conditions in Finland',
  'guide-employment-employment-contract': 'Finnish employment contracts: what to check before signing',
  'guide-employment-employment-law-and-disputes': 'Employment rights and workplace disputes in Finland',
  'guide-employment-unions': 'Trade unions and unemployment funds in Finland',
  'guide-housing-index': 'Housing in Finland: renting, buying and running your home',
  'guide-housing-finding-housing-in-finland': 'Finding a home in Finland: rental and buying routes',
  'guide-housing-renting-in-finland': 'Renting in Finland: leases, deposits and tenant rights',
  'guide-housing-housing-and-utilities': 'Utilities in Finland: electricity, water, heating and internet',
  'guide-housing-buying-property-in-finland': 'Buying property in Finland: costs, checks and offers',
  'guide-housing-student-housing-in-finland': 'Student housing in Finland: providers, timing and costs',
  'guide-housing-emergency-accommodation-in-finland': 'Emergency accommodation in Finland: where to get help',
}

export const articleJourneyLinks: Record<string, ArticleJourneyLink[]> = {
  'guide-moving-to-finland-registration': [
    {
      href: '/resources/guide-finance-account/',
      title: 'Open a Finnish bank account',
      description: 'What banks may ask for, what to compare and why an account does not always include strong identification.',
    },
    {
      href: '/start-here/digital-finland-survival-kit/',
      title: 'Set up strong identification',
      description: 'Understand bank credentials, mobile certificates and the Finnish services they unlock.',
    },
    {
      href: '/resources/guide-living-in-finland-social-security/',
      title: 'Work out where Kela fits',
      description: 'A Finnish address or identity code does not decide every benefit. Start with the eligibility questions.',
    },
  ],
  'guide-finance-account': [
    {
      href: '/resources/guide-moving-to-finland-registration/',
      title: 'Sort your Finnish registration',
      description: 'Separate your identity code, registered address and municipality of residence before the paperwork blurs together.',
    },
    {
      href: '/start-here/digital-finland-survival-kit/',
      title: 'Learn what your bank credentials unlock',
      description: 'A bank account handles money. Strong credentials can also become your key to Finnish online services.',
    },
  ],
  'guide-living-in-finland-social-security': [
    {
      href: '/resources/guide-moving-to-finland-registration/',
      title: 'Check your registered details first',
      description: 'Identity code, address and municipality of residence are related, but they are not interchangeable.',
    },
    {
      href: '/start-here/digital-finland-survival-kit/',
      title: 'Find your way around OmaKela and Suomi.fi',
      description: 'See which Finnish online service does what and what to do while strong identification is still missing.',
    },
  ],
  'guide-employment-index': [
    {
      href: '/resources/guide-employment-finding-work/',
      title: 'Start a focused job search',
      description: 'Build a practical search around your skills, right to work, language level and the employers most likely to need you.',
    },
    {
      href: '/resources/guide-employment-employment-services/',
      title: 'Use Job Market Finland and local services',
      description: 'Find vacancies, register as a jobseeker and understand which employment authority handles your case.',
    },
    {
      href: '/resources/guide-employment-employment-contract/',
      title: 'Check a job offer before signing',
      description: 'Turn the offer into clear written terms covering pay, hours, probation, holidays and notice.',
    },
  ],
  'guide-employment-finding-work': [
    {
      href: '/resources/guide-employment-foreign-qualifications/',
      title: 'Check whether your qualification needs recognition',
      description: 'Many employers assess overseas experience themselves, while regulated professions need the correct authority.',
    },
    {
      href: '/resources/guide-employment-employment-services/',
      title: 'Use the public employment route',
      description: 'Job Market Finland and your local employment authority cover more than vacancy listings.',
    },
    {
      href: '/resources/guide-employment-finnish-labour-market/',
      title: 'Read the Finnish job market properly',
      description: 'Look past national headlines to the region, occupation, language and experience level that affect your search.',
    },
  ],
  'guide-employment-foreign-qualifications': [
    {
      href: '/resources/guide-employment-finding-work/',
      title: 'Turn your qualification into a job search',
      description: 'Show employers what your training means in practice and where your experience fits.',
    },
    {
      href: '/study/',
      title: 'Explore study and bridging routes',
      description: 'If you need more Finnish study, a local qualification or a new professional route, start with the education hub.',
    },
  ],
  'guide-employment-employment-services': [
    {
      href: '/resources/guide-employment-finding-work/',
      title: 'Build the wider search',
      description: 'Combine public services with company pages, recruiters, communities and direct applications.',
    },
    {
      href: '/resources/guide-employment-eures-employment-service/',
      title: 'Use EURES for cross-border work',
      description: 'A separate route for job mobility across the EU, EEA and Switzerland.',
    },
    {
      href: '/resources/guide-living-in-finland-social-security/',
      title: 'Understand where Kela fits',
      description: 'Jobseeker registration and unemployment benefits are connected, but they are not the same decision.',
    },
  ],
  'guide-employment-employment-contract': [
    {
      href: '/resources/guide-employment-wages-conditions/',
      title: 'Check pay and working conditions',
      description: 'The contract, legislation and collective agreement work together. Learn what to compare.',
    },
    {
      href: '/resources/guide-employment-unions/',
      title: 'Understand unions and unemployment funds',
      description: 'They often overlap, but membership, advice and earnings-related protection are separate choices.',
    },
    {
      href: '/resources/guide-employment-employment-law-and-disputes/',
      title: 'Know the route when something is wrong',
      description: 'Keep the evidence and choose the right first contact before the problem becomes harder to untangle.',
    },
  ],
  'guide-employment-wages-conditions': [
    {
      href: '/resources/guide-employment-employment-contract/',
      title: 'Read the employment contract',
      description: 'Check the written terms before relying on what was said during recruitment.',
    },
    {
      href: '/resources/guide-employment-unions/',
      title: 'Find the right union or unemployment fund',
      description: 'Start with your occupation and collective agreement, not the loudest membership advert.',
    },
    {
      href: '/resources/guide-employment-employment-law-and-disputes/',
      title: 'Handle a workplace problem',
      description: 'A calm timeline, documents and the right adviser give you a much stronger starting point.',
    },
  ],
  'guide-employment-employment-law-and-disputes': [
    {
      href: '/resources/guide-employment-unions/',
      title: 'Check what support your union provides',
      description: 'Membership rules and when the problem began can affect the help available.',
    },
    {
      href: '/help/',
      title: 'Open the When Things Go Wrong hub',
      description: 'Find the urgent route for work problems, exploitation, safety concerns and other difficult situations.',
    },
  ],
  'guide-employment-unions': [
    {
      href: '/resources/guide-employment-wages-conditions/',
      title: 'Understand the terms a union may help enforce',
      description: 'Pay, hours, holidays and the collective agreement are easier to discuss when you know what applies.',
    },
    {
      href: '/resources/guide-employment-employment-law-and-disputes/',
      title: 'Prepare for a workplace dispute',
      description: 'Keep a clear record and find the right adviser before deadlines or evidence slip away.',
    },
  ],
  'guide-housing-index': [
    {
      href: '/housing/',
      title: 'Open the complete Housing hub',
      description: 'Choose the stage you are actually dealing with, from the first search to repairs, rent trouble and moving out.',
    },
    {
      href: '/housing/finding-a-rental-home-in-finland/',
      title: 'Start a safer rental search',
      description: 'Compare search routes, prepare the application and check the landlord before sending money or identity documents.',
    },
    {
      href: '/housing/lease-deposit-and-moving-in/',
      title: 'Read the lease before signing',
      description: 'Check the term, deposit, extra charges and move-in evidence while you can still ask for changes.',
    },
  ],
  'guide-housing-finding-housing-in-finland': [
    {
      href: '/housing/finding-a-rental-home-in-finland/',
      title: 'Use the full rental-search guide',
      description: 'Turn the search into a practical routine covering applications, viewings, city housing and scam checks.',
    },
    {
      href: '/areas/',
      title: 'Compare Helsinki neighbourhoods',
      description: 'Look at the daily rhythm, transport and local services before judging an area from the postcode alone.',
    },
    {
      href: '/housing/lease-deposit-and-moving-in/',
      title: 'Check the offer before paying',
      description: 'Understand the agreement, deposit and condition record before the relief of finding a home takes over.',
    },
  ],
  'guide-housing-renting-in-finland': [
    {
      href: '/housing/lease-deposit-and-moving-in/',
      title: 'Check the lease and deposit',
      description: 'See what belongs in the agreement and build a move-in record that protects both sides.',
    },
    {
      href: '/housing/setting-up-and-running-your-home/',
      title: 'Make the home work',
      description: 'Sort electricity, insurance, internet, water, maintenance contacts and the building services you inherit.',
    },
    {
      href: '/housing/repairs-rent-trouble-and-moving-out/',
      title: 'Handle a tenancy problem early',
      description: 'Report repairs properly, get help with rent trouble and follow the right route when moving out or disputing a deposit.',
    },
  ],
  'guide-housing-housing-and-utilities': [
    {
      href: '/housing/setting-up-and-running-your-home/',
      title: 'Set up the household essentials',
      description: 'Work through electricity, insurance, internet, heating, water and urgent maintenance contacts in a sensible order.',
    },
    {
      href: '/start-here/digital-finland-survival-kit/',
      title: 'Set up your Finnish digital access',
      description: 'Strong identification makes contracts, address services and many household jobs much easier to manage online.',
    },
  ],
  'guide-housing-buying-property-in-finland': [
    {
      href: '/resources/guide-housing-home-loans-in-finland/',
      title: 'Work out the financing first',
      description: 'Compare the loan, reference rate, margin, collateral and the monthly costs that continue after the keys arrive.',
    },
    {
      href: '/resources/guide-housing-real-estate-terms/',
      title: 'Decode the property documents',
      description: 'Learn the Finnish listing and housing-company terms that can change the real price of an apartment.',
    },
    {
      href: '/housing/setting-up-and-running-your-home/',
      title: 'Plan the running costs',
      description: 'Electricity, insurance, water, heating and maintenance still need a place in the budget after the purchase.',
    },
  ],
  'guide-housing-student-housing-in-finland': [
    {
      href: '/study/',
      title: 'Open the Study in Finland hub',
      description: 'Connect the housing plan to applications, tuition, residence rules, student services and the academic calendar.',
    },
    {
      href: '/housing/finding-a-rental-home-in-finland/',
      title: 'Keep a private-rental backup',
      description: 'Student housing can be tight around intake dates. Build a second search without sending money to an unverified advertiser.',
    },
    {
      href: '/housing/lease-deposit-and-moving-in/',
      title: 'Check what the room includes',
      description: 'Furniture, internet, electricity, shared spaces and notice terms vary, even when the monthly rent looks straightforward.',
    },
  ],
  'guide-housing-emergency-accommodation-in-finland': [
    {
      href: '/help/',
      title: 'Open the When Things Go Wrong hub',
      description: 'Find the urgent route for homelessness, family safety, violence, money problems and other situations that cannot wait.',
    },
    {
      href: '/housing/repairs-rent-trouble-and-moving-out/',
      title: 'Get help before the home is lost',
      description: 'Housing counselling, written records and an early conversation can create more options than waiting for the final notice.',
    },
  ],
}

export function articleSeoTitle(slug: string, fallback: string): string {
  return articleSeoTitles[slug] ?? fallback
}

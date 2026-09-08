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
}

export function articleSeoTitle(slug: string, fallback: string): string {
  return articleSeoTitles[slug] ?? fallback
}

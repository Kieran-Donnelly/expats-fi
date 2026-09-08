export type ArticleJourneyLink = {
  href: string
  title: string
  description: string
}

export const articleSeoTitles: Record<string, string> = {
  'guide-moving-to-finland-registration': 'Registering in Finland: identity code, address and kotikunta',
  'guide-finance-account': 'Opening a bank account in Finland as a newcomer',
  'guide-living-in-finland-social-security': 'Kela after moving to Finland: eligibility and first steps',
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
}

export function articleSeoTitle(slug: string, fallback: string): string {
  return articleSeoTitles[slug] ?? fallback
}

type NewsImage = {
  src: string
  alt: string
}

const newsImages: Record<string, NewsImage> = {
  'finland-foreign-language-residents-kela-benefits-2026': {
    src: '/images/news/finland-foreign-language-residents-kela-benefits-2026.webp',
    alt: 'A couple reading household paperwork together at a kitchen table',
  },
  'helsinki-international-grocery-store-boom-2026': {
    src: '/images/news/helsinki-international-grocery-store-boom-2026.webp',
    alt: 'Rows of colourful spices in an international food shop',
  },
  'deepfake-images-finland-what-to-do-2026': {
    src: '/images/news/deepfake-images-finland-what-to-do-2026.webp',
    alt: 'A worried woman looking at her phone late at night',
  },
  'english-language-upper-secondary-finland-2026': {
    src: '/images/news/english-language-upper-secondary-finland-2026.webp',
    alt: 'A group of international students working together around a laptop',
  },
  'helsinki-tram-routes-change-31-august-2026': {
    src: '/images/news/helsinki-tram-routes-change-31-august-2026.webp',
    alt: 'A green and yellow Helsinki tram travelling through the city centre',
  },
  'finland-economy-wages-jobs-august-2026': {
    src: '/images/news/finland-economy-wages-jobs-august-2026.webp',
    alt: 'A woman checking an empty purse beside household bills and a calculator',
  },
  'helsinki-design-week-2026-useful-guide': {
    src: '/images/news/helsinki-design-week-2026-useful-guide.webp',
    alt: 'Two designers working together in a bright creative studio',
  },
  'job-applicant-profile-mandatory-september-2026': {
    src: '/images/news/job-applicant-profile-mandatory-september-2026.webp',
    alt: 'A résumé, laptop and magnifying glass arranged on a blue desk',
  },
  'helsinki-population-700000-new-arrivals': {
    src: '/images/news/helsinki-population-700000-new-arrivals.webp',
    alt: 'People, traffic and ferries moving through Helsinki beside the harbour',
  },
  'finland-job-vacancies-small-rise-2026': {
    src: '/images/news/finland-job-vacancies-small-rise-2026.webp',
    alt: 'Two colleagues talking across a desk in a modern office',
  },
  'helsinki-airport-trains-autumn-2026': {
    src: '/images/news/helsinki-airport-trains-autumn-2026.webp',
    alt: 'A traveller with a backpack waiting beside a train',
  },
  'siberian-wildfire-smoke-finland-air-quality': {
    src: '/images/news/siberian-wildfire-smoke-finland-air-quality.webp',
    alt: 'Smoke and haze drifting across a dark forest',
  },
  'aalto-works-unesco-finland-guide': {
    src: '/images/news/aalto-works-unesco-finland-guide.webp',
    alt: 'Alvar Aalto’s red-brick House of Culture in Helsinki',
  },
  'finland-official-mail-digital-inboxes-2026': {
    src: '/images/news/finland-official-mail-digital-inboxes-2026.webp',
    alt: 'A person checking new inbox notifications on a smartphone',
  },
  'helsinki-archipelago-action-plan-2026': {
    src: '/images/news/helsinki-archipelago-action-plan-2026.webp',
    alt: 'A small rocky island and boat in the Helsinki archipelago',
  },
}

const fallbackImage: NewsImage = {
  src: '/images/heroes/news-phone-coffee.webp',
  alt: 'A person catching up on the news over coffee',
}

export function getNewsImage(slug: string): NewsImage {
  return newsImages[slug] ?? fallbackImage
}

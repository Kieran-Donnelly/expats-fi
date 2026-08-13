export type BusinessDraft = {
  slug: string
  name: string
  summary: string
  description: string
  categories: string[]
  locations: string[]
  address: string
  website: string
  phone?: string
  instagramHandle?: string
  instagram?: string
  facebook?: string
  youtube?: string
  tiktok?: string
  bookingUrl?: string
  whatsapp?: string
  currentOffer?: string
  currentOfferEndsAt?: string
  imagePath?: string
  imageAlt?: string
  logoPath?: string
  logoAlt?: string
  status: 'draft' | 'published'
}

export const businessDrafts: BusinessDraft[] = [
  {
    slug: 'mimosa-galleria',
    name: 'Mimosa Galleria',
    summary: 'A colourful Punavuori gallery and studio where art, movement, workshops and community meet.',
    description: 'Mexican-born founder Bresley created Mimosa Galleria as a place for beauty, care and connection. The name comes from the affectionate word her grandmother used for the children in her family, inspired by “mi hermosa”. Today the Punavuori space brings together exhibitions, dance and wellness classes, workshops, handmade pieces and small community gatherings. Classes and private events can also travel to venues elsewhere in Helsinki.',
    categories: ['Art & culture', 'Classes & workshops', 'Community spaces'],
    locations: ['Helsinki'],
    address: 'Uudenmaankatu 19-21 lh3, 00120 Helsinki',
    website: 'https://mimosagalleria.fi/',
    phone: '+358 45 359 3581',
    instagramHandle: '@mimosa_galleria',
    instagram: 'https://www.instagram.com/mimosa_galleria/',
    imagePath: '/businesses/mimosa-galleria/gallery.jpg',
    imageAlt: 'Visitors talking during an exhibition at Mimosa Galleria in Punavuori',
    logoPath: '/businesses/mimosa-galleria/logo.png',
    logoAlt: 'Mimosa Galleria logo',
    status: 'published',
  },
  {
    slug: 'purna-yoga-helsinki',
    name: 'Purna Yoga Helsinki',
    summary: 'English-language yoga, meditation and teacher training in central Helsinki, with small classes for every stage of life.',
    description: 'Nicola Moberg grew up in the Austrian Alps, travelled widely and eventually relocated to Helsinki with her family. She discovered Purna Yoga after the birth of her second child and took over the studio from founder Tove Palmgren in 2017. Purna combines alignment-based movement, breathwork, heart-centred meditation and practical self-care. The welcoming English-language programme includes studio and online classes, pregnancy and postnatal yoga, baby yoga, private sessions, workshops and teacher training.',
    categories: ['Health & wellbeing', 'Yoga', 'Classes & workshops'],
    locations: ['Helsinki'],
    address: 'Fredrikinkatu 67 E 42, 00100 Helsinki',
    website: 'https://www.purnayoga.fi/',
    phone: '+358 50 353 3970',
    instagramHandle: '@purnayogahelsinki',
    instagram: 'https://www.instagram.com/purnayogahelsinki/',
    facebook: 'https://www.facebook.com/PurnaYogaHelsinki/',
    youtube: 'https://www.youtube.com/@nicolamoberg',
    imagePath: '/businesses/purna-yoga-helsinki/photo-3.png',
    imageAlt: 'An inclusive group yoga class inside Purna Yoga Helsinki',
    logoPath: '/businesses/purna-yoga-helsinki/logo.png',
    logoAlt: 'Purna Yoga Helsinki logo',
    status: 'published',
  },
]

export type BusinessDraft = {
  slug: string
  name: string
  summary: string
  description: string
  categories: string[]
  locations: string[]
  address: string
  website: string
  newsletterUrl?: string
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
    slug: 'villa-severino',
    name: 'Villa Severino',
    summary: 'A Neapolitan family project that has grown in Finland, bringing together years of pizza research and Carmen Luna\u00ae Gelato Identitario.',
    description: "Severino Salzano and Carmen Castillett brought their Italian and Neapolitan roots to Finland and have built Villa Severino here over the years. Severino has spent years researching grains, dough and long fermentation. That work earned Villa Severino a place in 50 Top Pizza Europa in 2023, 2024, 2025 and 2026, when it ranked No. 46 in Europe. Carmen created Carmen Luna\u00ae Gelato Identitario. It starts with natural ingredients and artisan production, but the idea goes much further than simply making gelato. Each flavour can tell a story about ingredients, memories, places and personal identity. It is a family project that is proudly Neapolitan but has also grown into something of its own here in Finland.",
    categories: ['Food & drink', 'Nice hangs'],
    locations: ['Helsinki'],
    address: 'Helsinki Outlet, Tatti 17, 00760 Helsinki; Kamppi, Urho Kekkosen katu 1, 00100 Helsinki',
    website: 'https://www.villaseverino.fi/',
    phone: '+358 41 791 1660',
    instagramHandle: '@villa_severino_finland',
    instagram: 'https://www.instagram.com/villa_severino_finland/',
    facebook: 'https://www.facebook.com/VillaSeverinoFinland/',
    status: 'draft',
  },
  {
    slug: 'mimosa-galleria',
    name: 'Mimosa Galleria',
    summary: 'A colourful little spot in Punavuori for art, dance, workshops, handmade pieces and meeting good people.',
    description: "Bresley started Mimosa Galleria as a place where people could make things, share ideas and get to know each other. Her Mexican background is woven through the space, right down to the name. Her grandmother called the children in the family 'mimosa', from 'mi hermosa'. You will find exhibitions, dance and wellness classes, workshops, handmade pieces and small events there. They can also bring classes and private events to other venues around Helsinki.",
    categories: ['Art & culture', 'Classes & workshops', 'Community spaces'],
    locations: ['Helsinki'],
    address: 'Uudenmaankatu 19-21 lh3, 00120 Helsinki',
    website: 'https://mimosagalleria.fi/',
    newsletterUrl: 'https://mimosagalleria.fi/newsletter/',
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
    summary: 'English-speaking yoga in central Helsinki, with small classes and a proper community around it.',
    description: "Purna Yoga Helsinki is a handy one to know if you would like to try yoga but feel a little nervous walking into a new class, especially in a new country. Nicola Moberg grew up in the Austrian Alps and eventually moved to Helsinki with her family. She found Purna Yoga after her second child was born and took over the studio from founder Tove Palmgren in 2017. All classes are in English. There are regular studio and online classes, as well as pregnancy, postnatal and baby yoga, private sessions, workshops and teacher training.",
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
  {
    slug: 'himalayan-beauty-spa',
    name: 'Himalayan Beauty & Spa',
    summary: 'Ayurvedic massages, facials and beauty treatments in Pasila, run by Nepal-trained cosmetologist Shila Moktan.',
    description: "Shila Moktan grew up in Nepal, where her mum introduced her to Ayurvedic care. She trained in beauty and spa therapy in Kathmandu, ran her own spa there and later qualified as a cosmetologist in Helsinki. In 2025, she opened Himalayan Beauty & Spa in Pasila. Treatments include Ayurvedic oil massage, Shirodhara, facials and other beauty treatments, along with packages for couples and new or expectant mothers. Shila tailors the treatments to each person, so it is a good place to go when you need to slow down for a bit.",
    categories: ['Health & wellbeing', 'Beauty & personal care', 'Massage & spa'],
    locations: ['Helsinki'],
    address: 'Veturitie 24 A 65, 3rd floor, 00520 Helsinki',
    website: 'https://himalayanbeauty.fi/en/',
    phone: '+358 45 787 05946',
    instagramHandle: '@himalayanbeautyspa.pasila',
    instagram: 'https://www.instagram.com/himalayanbeautyspa.pasila',
    facebook: 'https://www.facebook.com/profile.php?id=61589164485747',
    tiktok: 'https://www.tiktok.com/@himalayanbeautyspapasila',
    bookingUrl: 'https://varaa.timma.fi/himalayanbeautyspa',
    whatsapp: 'https://wa.me/3584578705946',
    currentOffer: '20% opening discount on all services until 31 August 2026.',
    currentOfferEndsAt: '2026-08-31T20:59:59.999Z',
    imagePath: '/businesses/himalayan-beauty-spa/shila.jpg',
    imageAlt: 'Founder Shila Moktan at Himalayan Beauty & Spa in Pasila',
    logoPath: '/businesses/himalayan-beauty-spa/logo.png',
    logoAlt: 'Himalayan Beauty & Spa logo',
    status: 'published',
  },
]

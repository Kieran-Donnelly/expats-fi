export type Business = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  categories: string[];
  locations: string[];
  address: string;
  website: string;
  newsletterUrl?: string;
  phone: string;
  instagramHandle?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
  tiktok?: string;
  bookingUrl?: string;
  whatsapp?: string;
  currentOffer?: string;
  currentOfferEndsAt?: string;
  imagePath?: string;
  imageAlt?: string;
  logoPath?: string;
  logoAlt?: string;
  featured?: boolean;
};

export const businesses: Business[] = [
  {
    slug: 'home-chef-mark',
    name: 'Home Chef Mark',
    summary: 'Neapolitan pizza catering, private events and pop-ups across the capital region.',
    description: 'Run by expat chef Mark, Home Chef Mark brings Neapolitan-style pizza to private events, weddings, company gatherings and pop-ups. Dough is fermented for more than 40 hours, with vegan and gluten-free options available.',
    categories: ['Catering', 'Food & drink'],
    locations: ['Espoo', 'Helsinki', 'Vantaa'],
    address: 'Serving the Helsinki capital region and events across Finland',
    website: 'https://homechefmark.com',
    phone: '+358 40 0208994',
    featured: true,
  },
  {
    slug: 'aussie-bar',
    name: 'Aussie Bar',
    summary: 'An Australian bar in central Helsinki with live sport, drinks and a lively atmosphere.',
    description: 'A taste of Australia in the heart of Helsinki. Aussie Bar is a relaxed meeting place for live sport, drinks and a lively international atmosphere.',
    categories: ['Bars & restaurants'],
    locations: ['Helsinki'],
    address: 'Salomonkatu 5, 00100 Helsinki',
    website: 'https://aussiebar.net',
    phone: '09 737 373',
    featured: true,
  },
  {
    slug: 'alstudio-barbershop',
    name: 'ALstudio Barbershop',
    summary: 'Walk-in and appointment barbering in Helsinki, from fades to classic cuts and beard trims.',
    description: 'ALstudio offers precision fades, classic haircuts and beard trims in Helsinki. Customers are welcome with or without an appointment.',
    categories: ['Personal services', 'Trades'],
    locations: ['Helsinki'],
    address: 'Vanha Talvitie 29, 00580 Helsinki',
    website: 'https://alstudio.fi',
    phone: '046 633 1337',
  },
];

export const businessCategories = [...new Set(businesses.flatMap((business) => business.categories))].sort();
export const businessLocations = [...new Set(businesses.flatMap((business) => business.locations))].sort();

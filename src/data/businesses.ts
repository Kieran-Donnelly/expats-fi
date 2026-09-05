export type Business = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  categories: string[];
  locations: string[];
  address: string;
  website?: string;
  email?: string;
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
    summary: 'A family-run mobile pizzeria bringing freshly baked Neapolitan-style pizza to weddings, parties, company events and pop-ups around Uusimaa.',
    description: "Home Chef Mark began in a home kitchen, where a serious interest in pizza slowly turned into a family business. These days Mark travels around Uusimaa with a small Airstream pizzeria, serving freshly baked Neapolitan-style pizza at weddings, birthdays, company gatherings, neighbourhood pop-ups and larger events. The lovely part is that the food becomes part of the occasion. Guests can watch the pizzas being made, choose their favourites and eat them straight from the oven rather than waiting around for a traditional buffet. Mark can also build a wider menu around the pizza, with salads, starters and Italian desserts depending on the event. It is relaxed catering, but there is plenty of care behind it. A very handy one to know when you want the food to feel fun and generous without turning your celebration into a formal production.",
    categories: ['Catering', 'Food & drink'],
    locations: ['Espoo', 'Helsinki', 'Vantaa'],
    address: 'Serving the Helsinki capital region and events across Finland',
    website: 'https://homechefmark.com',
    phone: '+358 40 0208994',
    instagramHandle: '@homechefmark',
    instagram: 'https://www.instagram.com/homechefmark/',
    imagePath: '/businesses/home-chef-mark/mark-in-pizza-trailer.webp',
    imageAlt: 'Home Chef Mark smiling from the serving window of his mobile pizza trailer',
    logoPath: '/businesses/home-chef-mark/logo.webp',
    logoAlt: 'Illustrated Home Chef Mark logo',
    featured: true,
  },
  {
    slug: 'aussie-bar',
    name: 'Aussie Bar',
    summary: 'A loud, friendly slice of Australia in Kamppi, with live sport, Friday music, weekend DJs, familiar pub food and a properly international crowd.',
    description: "Aussie Bar is one of those easy landing spots for international Helsinki. It is central enough for an after-work drink, casual enough that you do not need a plan and familiar in a way that matters when you are missing sport, pub food or a bit of banter from home. Seven screens show games from Australia and around the world, with especially strong crowds gathering around the big football fixtures. Fridays bring live music and the long-running Chase the Ace, while DJs carry Friday and Saturday nights into livelier territory. The kitchen keeps things suitably unfussy with pies, fish and chips, wings and other proper pub favourites. The best part is the mix of regulars, travellers, Finns, expats and whoever has wandered in from Kamppi. Come with a group, turn up for a match or lean on the bar and have a yarn. Their own line is 'where strangers become mates', and that is honestly a pretty good description of the place.",
    categories: ['Bars & restaurants', 'Food & drink'],
    locations: ['Helsinki'],
    address: 'Salomonkatu 5, 00100 Helsinki',
    website: 'https://aussiebar.net',
    phone: '09 737 373',
    imagePath: '/businesses/aussie-bar/crowd-behind-the-bar.jpg',
    imageAlt: 'The Aussie Bar Helsinki team smiling together behind the bar',
    logoPath: '/businesses/aussie-bar/logo.svg',
    logoAlt: 'Aussie Bar Helsinki logo',
    featured: true,
  },
  {
    slug: 'alstudio-barbershop',
    name: 'ALstudio Barbershop',
    summary: 'A welcoming Helsinki barbershop for sharp fades, classic cuts, beard work and the full tidy-up, with appointments and walk-ins both welcome.',
    description: "Finding a new barber after moving countries can feel strangely high stakes, especially when you are still learning the words for exactly what you want. ALstudio keeps the whole thing straightforward. The team works across modern haircuts, skin fades, clipper cuts, beard shaping, traditional American-style shaves, hair washing and threading, with a full-service option when everything needs a proper reset. You can book online when you like having a time locked in, or walk in when the moment takes you. The atmosphere is friendly and the focus is on the details, so you leave looking properly finished rather than simply a bit shorter. It is a useful local option in Kalasatama for anyone after regular barbering without a load of fuss.",
    categories: ['Personal services', 'Trades'],
    locations: ['Helsinki'],
    address: 'Vanha Talvitie 29, 00580 Helsinki',
    website: 'https://alstudio.fi',
    phone: '+358 41 328 8028',
    bookingUrl: 'https://varaa.timma.fi/reservation/alstudiobarbershop',
    imagePath: '/businesses/alstudio-barbershop/barber-tools-close-up.webp',
    imageAlt: 'Professional clippers, trimmers and scissors laid out for a haircut',
  },
];

export const businessCategories = [...new Set(businesses.flatMap((business) => business.categories))].sort();
export const businessLocations = [...new Set(businesses.flatMap((business) => business.locations))].sort();

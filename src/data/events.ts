export const eventCategories = [
  'Music & nightlife',
  'Arts & culture',
  'Food & markets',
  'Community & free',
  'Sports & outdoors',
] as const

export type EventCategory = (typeof eventCategories)[number]

export type EventTransport = {
  mode: 'Train' | 'Metro' | 'Tram or bus' | 'Walk' | 'Bike'
  advice: string
}

export type CityEvent = {
  slug: string
  title: string
  category: EventCategory
  startDate: string
  endDate: string
  dateLabel: string
  timeLabel: string
  location: string
  address: string
  district: string
  blurb: string
  description: string[]
  price: string
  free: boolean
  familyFriendly: boolean
  ageNote?: string
  bookingNote: string
  sourceName: string
  sourceUrl: string
  lastChecked: string
  featured?: boolean
  transport: EventTransport[]
}

export const events: CityEvent[] = [
  {
    slug: 'hietsu-flea-market-2026',
    title: 'Hietsu Flea Market',
    category: 'Food & markets',
    startDate: '2026-08-08',
    endDate: '2026-08-30',
    dateLabel: 'Weekends until 30 August',
    timeLabel: '09:00–15:00',
    location: 'Hietalahti Market Square',
    address: 'Hietalahdentori, 00180 Helsinki',
    district: 'Hietalahti',
    blurb: 'A cheerful weekend rummage through vintage clothes, Finnish design, old books and gloriously unpredictable finds—best paired with lunch in the market hall next door.',
    description: [
      'Up to 80 stalls fill one of Helsinki’s best-loved market squares on summer weekends. It is an easy, low-pressure way to meet locals, practise a little Finnish and take home something with more character than a souvenir-shop magnet.',
      'Go early for the widest choice, or arrive closer to lunch and combine the market with the cafés and restaurants inside Hietalahti Market Hall.',
    ],
    price: 'Free entry',
    free: true,
    familyFriendly: true,
    bookingNote: 'No booking needed. The market runs on Saturdays and Sundays, weather permitting.',
    sourceName: 'MyHelsinki',
    sourceUrl: 'https://www.myhelsinki.fi/events/hietsu-flea-market/',
    lastChecked: '3 August 2026',
    transport: [
      { mode: 'Tram or bus', advice: 'Take a tram towards Hietalahti and get off by the market square.' },
      { mode: 'Walk', advice: 'About 15 minutes on foot from Kamppi through the design district.' },
      { mode: 'Bike', advice: 'A flat ride from the centre, with city-bike stations around Hietalahti.' },
    ],
  },
  {
    slug: 'forro-in-the-park-august-2026',
    title: 'Forró in the Park',
    category: 'Community & free',
    startDate: '2026-08-13',
    endDate: '2026-08-13',
    dateLabel: 'Thursday 13 August',
    timeLabel: '18:00–21:00',
    location: 'Töölönlahti Summer Park',
    address: 'Töölönlahden puisto, 00100 Helsinki',
    district: 'Töölönlahti',
    blurb: 'A free Brazilian partner-dance evening by the bay, complete with a beginner-friendly drop-in lesson and plenty of room for two left feet.',
    description: [
      'Forró is social, warm and easy to join even if you arrive alone. The evening usually begins with a short introductory class before the music opens up for relaxed outdoor dancing.',
      'Wear comfortable shoes, bring water and add a light layer for the late-summer evening. You do not need a partner or previous dance experience.',
    ],
    price: 'Free',
    free: true,
    familyFriendly: true,
    bookingNote: 'Drop in; no advance booking is listed. Outdoor events can change with the weather.',
    sourceName: 'MyHelsinki',
    sourceUrl: 'https://www.myhelsinki.fi/events/forro-in-the-park/forro-in-the-park-8/',
    lastChecked: '3 August 2026',
    transport: [
      { mode: 'Train', advice: 'Helsinki Central Station is roughly a 10–15 minute walk away.' },
      { mode: 'Tram or bus', advice: 'Use a Töölönlahti or National Museum stop, then continue through the park.' },
      { mode: 'Bike', advice: 'The bayside cycling path is direct and there are city-bike stations nearby.' },
    ],
  },
  {
    slug: 'flow-festival-2026',
    title: 'Flow Festival',
    category: 'Music & nightlife',
    startDate: '2026-08-14',
    endDate: '2026-08-16',
    dateLabel: '14–16 August',
    timeLabel: 'Fri 15:00–02:00 · Sat 14:00–02:00 · Sun 13:00–00:00',
    location: 'Suvilahti',
    address: 'Hanasaarenkatu 10, 00500 Helsinki',
    district: 'Suvilahti',
    blurb: 'Helsinki’s big post-industrial weekend: global headliners, left-field discoveries, ambitious food and the annual joy of dancing beneath old gasometers.',
    description: [
      'Flow mixes music, visual art, talks and a notably serious food programme inside Suvilahti’s former power-plant grounds. It is polished but still rewards wandering away from the biggest stage to find something unexpected.',
      'The main festival is 18+. Sunday includes a limited Family Sunday window for ticket-holding adults bringing children aged 12 or under, so check the organiser’s exact conditions before going.',
    ],
    price: 'Ticketed · day and weekend tickets',
    free: false,
    familyFriendly: false,
    ageNote: '18+, except the organiser’s limited Family Sunday programme',
    bookingNote: 'Advance tickets strongly recommended; some ticket types are already limited.',
    sourceName: 'Flow Festival',
    sourceUrl: 'https://www.flowfestival.com/en/tickets/',
    lastChecked: '3 August 2026',
    featured: true,
    transport: [
      { mode: 'Metro', advice: 'Kalasatama and Sörnäinen are the practical stations; allow time for the walk and crowds.' },
      { mode: 'Tram or bus', advice: 'Several services reach the Sörnäinen and Kalasatama area—check live changes before leaving.' },
      { mode: 'Bike', advice: 'Suvilahti is easy to reach by bike, but festival-week traffic arrangements affect nearby routes.' },
    ],
  },
  {
    slug: 'malmi-summer-of-events-2026',
    title: 'Malmi Summer of Events',
    category: 'Community & free',
    startDate: '2026-08-13',
    endDate: '2026-08-22',
    dateLabel: '13–22 August',
    timeLabel: 'Times vary by programme',
    location: 'Ala-Malmi Square',
    address: 'Ala-Malmin tori 1, 00700 Helsinki',
    district: 'Malmi',
    blurb: 'A free neighbourhood programme that makes a persuasive case for looking beyond the city centre—music, workshops and easy-going square-side culture included.',
    description: [
      'The City of Helsinki’s suburban summer programme brings free events to Ala-Malmi Square for residents of all ages. It is especially useful for newcomers who want to see everyday Helsinki rather than only its postcard centre.',
      'Individual programme times vary, so use the city listing to choose a date before travelling.',
    ],
    price: 'Free',
    free: true,
    familyFriendly: true,
    bookingNote: 'Most programme is drop-in. Confirm the individual event time on the city page.',
    sourceName: 'City of Helsinki',
    sourceUrl: 'https://www.hel.fi/en/decision-making/information-on-helsinki/suburban-regeneration/explore-summer-activities',
    lastChecked: '3 August 2026',
    transport: [
      { mode: 'Train', advice: 'Commuter trains run to Malmi; Ala-Malmi Square is a short walk from the station.' },
      { mode: 'Tram or bus', advice: 'Local buses connect Malmi station with surrounding neighbourhoods.' },
      { mode: 'Bike', advice: 'Signed cycling routes connect Malmi with northern and central Helsinki.' },
    ],
  },
  {
    slug: 'helsinki-festival-2026',
    title: 'Helsinki Festival',
    category: 'Arts & culture',
    startDate: '2026-08-18',
    endDate: '2026-09-05',
    dateLabel: '18 August–5 September',
    timeLabel: 'Programme times vary',
    location: 'Venues across Helsinki',
    address: 'Multiple locations',
    district: 'Citywide',
    blurb: 'The city’s late-summer cultural takeover, stretching from orchestras and opera to theatre, contemporary dance, visual art and warm evenings at Huvila.',
    description: [
      'Helsinki Festival is a multi-arts umbrella large enough to suit very different tastes. The 2026 programme includes international theatre, major orchestras, contemporary performance and concerts at the temporary Huvila venue.',
      'Treat the festival as a collection rather than one event: browse by date, choose one anchor performance and leave room for a nearby exhibition or free programme.',
    ],
    price: 'Mix of free and ticketed events',
    free: false,
    familyFriendly: true,
    bookingNote: 'Tickets are on sale. Venue, accessibility and age guidance vary by event.',
    sourceName: 'Helsinki Festival',
    sourceUrl: 'https://helsinkifestival.fi/en/',
    lastChecked: '3 August 2026',
    transport: [
      { mode: 'Train', advice: 'Many central venues are walkable from Helsinki Central Station.' },
      { mode: 'Metro', advice: 'Useful for festival venues east and west of the centre; check the address on each ticket.' },
      { mode: 'Tram or bus', advice: 'The tram network serves most central cultural venues.' },
    ],
  },
  {
    slug: 'night-of-the-arts-2026',
    title: 'Night of the Arts',
    category: 'Arts & culture',
    startDate: '2026-08-20',
    endDate: '2026-08-20',
    dateLabel: 'Thursday 20 August',
    timeLabel: 'Afternoon into late evening',
    location: 'Streets, parks and venues across Helsinki',
    address: 'Multiple locations',
    district: 'Citywide',
    blurb: 'One night when Helsinki collectively decides that galleries, parks, shopfronts and side streets are all perfectly reasonable places for art to happen.',
    description: [
      'Hundreds of resident-made events spill across the city during the Helsinki Festival’s most open and spontaneous evening. Expect performances, installations, workshops, music and delightful things that resist easy categorisation.',
      'The best approach is to choose one must-see event, then walk between nearby programme clusters and let the city surprise you.',
    ],
    price: 'Many events are free',
    free: true,
    familyFriendly: true,
    bookingNote: 'Most events are drop-in, but individual organisers may require registration.',
    sourceName: 'Night of the Arts',
    sourceUrl: 'https://helsinkifestival.fi/taiteidenyo/en/',
    lastChecked: '3 August 2026',
    transport: [
      { mode: 'Train', advice: 'Start at Helsinki Central Station for the densest central programme.' },
      { mode: 'Tram or bus', advice: 'Use public transport for the first venue, then explore nearby clusters on foot.' },
      { mode: 'Walk', advice: 'Walking is often the most enjoyable way to discover pop-ups between planned stops.' },
    ],
  },
  {
    slug: 'helsinki-marathon-2026',
    title: 'Helsinki Marathon Weekend',
    category: 'Sports & outdoors',
    startDate: '2026-08-21',
    endDate: '2026-08-22',
    dateLabel: '21–22 August',
    timeLabel: 'Kids and mile races Friday · main races Saturday',
    location: 'Meripuisto and central Helsinki',
    address: 'Merisatamanranta & Neitsytpolku, Helsinki',
    district: 'Eira / city centre',
    blurb: 'Run the waterfront, tackle a relay with friends or simply bring coffee and cheer as the course loops through Helsinki’s seaside streets.',
    description: [
      'The weekend includes a marathon, half marathon, relay, 10K, children’s runs and a free timed street mile. Main starts and the event village are in Meripuisto, while the 10K begins at Kaisaniemenranta.',
      'Not racing? The waterfront course offers plenty of pleasant cheering spots. Allow extra travel time because road closures and diversions are part of the day.',
    ],
    price: 'Spectating is free · race entry is ticketed',
    free: false,
    familyFriendly: true,
    bookingNote: 'Races require registration. The free Street Mile has limited places.',
    sourceName: 'Helsinki Marathon',
    sourceUrl: 'https://www.helsinkimarathon.fi/en/event-info/',
    lastChecked: '3 August 2026',
    transport: [
      { mode: 'Tram or bus', advice: 'Use public transport towards Eira and walk to Meripuisto; road closures affect the area.' },
      { mode: 'Walk', advice: 'Meripuisto is around 25 minutes from the central railway station.' },
      { mode: 'Bike', advice: 'Cycling is convenient for spectators, but stay clear of the marked race course.' },
    ],
  },
  {
    slug: 'helsinki-pintxo-festival-2026',
    title: 'Helsinki Pintxo Festival',
    category: 'Food & markets',
    startDate: '2026-08-25',
    endDate: '2026-08-29',
    dateLabel: '25–29 August',
    timeLabel: '16:00–21:00',
    location: 'Participating restaurants across central Helsinki',
    address: 'Multiple locations',
    district: 'City centre',
    blurb: 'A five-day edible treasure hunt through Helsinki restaurants, with small Basque-inspired bites making it entirely sensible to stop more than once.',
    description: [
      'Participating restaurants create special pintxos for the festival, turning an ordinary evening into a compact food crawl. It works well for a group because everyone can try different stops without committing to a long dinner.',
      'Check the current restaurant list, opening times and any dietary information before choosing your route.',
    ],
    price: 'Pay per pintxo',
    free: false,
    familyFriendly: true,
    bookingNote: 'Usually walk-in, but popular restaurants can be busy. Check each venue’s policy.',
    sourceName: 'MyHelsinki',
    sourceUrl: 'https://www.myhelsinki.fi/fi/events/pintxofestivaali/',
    lastChecked: '3 August 2026',
    transport: [
      { mode: 'Train', advice: 'Helsinki Central Station is a useful starting point for the restaurant trail.' },
      { mode: 'Tram or bus', advice: 'Trams make it easy to link restaurants around the centre and design district.' },
      { mode: 'Walk', advice: 'Choose two or three nearby venues and make the journey part of the evening.' },
    ],
  },
  {
    slug: 'helsinki-design-week-2026',
    title: 'Helsinki Design Week',
    category: 'Arts & culture',
    startDate: '2026-08-28',
    endDate: '2026-09-06',
    dateLabel: '28 August–6 September',
    timeLabel: 'Programme times vary',
    location: 'Design venues and public spaces across Helsinki',
    address: 'Multiple locations',
    district: 'Citywide',
    blurb: 'Ten days of exhibitions, studios, talks and urban experiments in a city that treats good design less like decoration and more like a civic habit.',
    description: [
      'The Nordic region’s largest design festival brings together architecture, fashion, product design, craft and conversations about how cities should work. The programme ranges from polished headline events to small studio visits.',
      'Build a route around one neighbourhood at a time; Helsinki’s design scene makes more sense when you leave space for cafés, shops and architecture between events.',
    ],
    price: 'Mix of free and ticketed events',
    free: false,
    familyFriendly: true,
    bookingNote: 'Check individual listings for tickets, registration and language information.',
    sourceName: 'Helsinki Design Week',
    sourceUrl: 'https://helsinkidesignweek.com/?lang=en',
    lastChecked: '3 August 2026',
    transport: [
      { mode: 'Train', advice: 'Central Station works well for city-centre exhibitions and onward connections.' },
      { mode: 'Tram or bus', advice: 'Trams link many design-district venues; confirm each event address first.' },
      { mode: 'Bike', advice: 'A bike is especially useful for linking studios and installations across neighbourhoods.' },
    ],
  },
  {
    slug: 'love-and-anarchy-2026',
    title: 'Love & Anarchy Film Festival',
    category: 'Arts & culture',
    startDate: '2026-09-17',
    endDate: '2026-09-27',
    dateLabel: '17–27 September',
    timeLabel: 'Screening times vary',
    location: 'Cinemas across central Helsinki',
    address: 'Multiple cinema venues',
    district: 'City centre',
    blurb: 'Eleven days of bold international cinema, sold-out discoveries and post-screening debates that continue all the way to the next tram stop.',
    description: [
      'Helsinki International Film Festival—better known locally as Rakkautta & Anarkiaa—brings new, adventurous and conversation-starting films to cinemas around the centre.',
      'Popular screenings move quickly, but the broad programme rewards curiosity. Double-check the screening language and subtitle information when booking.',
    ],
    price: 'Ticketed screenings and passes',
    free: false,
    familyFriendly: false,
    ageNote: 'Age limits vary by film',
    bookingNote: 'Advance booking recommended once the full programme and ticket sales open.',
    sourceName: 'Helsinki International Film Festival',
    sourceUrl: 'https://hiff.fi/en/',
    lastChecked: '3 August 2026',
    transport: [
      { mode: 'Train', advice: 'Most festival cinemas are within walking distance of Helsinki Central Station.' },
      { mode: 'Metro', advice: 'The metro is useful for quick connections to central screening clusters.' },
      { mode: 'Tram or bus', advice: 'Check the cinema on your ticket—venues change from screening to screening.' },
    ],
  },
  {
    slug: 'helsinki-baltic-herring-market-2026',
    title: 'Helsinki Baltic Herring Market',
    category: 'Food & markets',
    startDate: '2026-10-04',
    endDate: '2026-10-10',
    dateLabel: '4–10 October',
    timeLabel: 'Daily programme; times to be confirmed',
    location: 'Market Square',
    address: 'Eteläsatama, 00170 Helsinki',
    district: 'South Harbour',
    blurb: 'An old harbour tradition with fishing boats, archipelago flavours and enough jars of seasoned herring to make supermarket shelves look timid.',
    description: [
      'Held since 1743, the market brings fishers and archipelago producers directly to Helsinki’s waterfront. The 2026 edition is expanding its food offer and adding a restaurant yard around Market Square.',
      'Come hungry, dress for sea wind and look beyond herring: island breads, preserves and seasonal products are part of the pleasure.',
    ],
    price: 'Free entry · food and products priced by vendors',
    free: true,
    familyFriendly: true,
    bookingNote: 'No entry booking needed. Check the organiser for daily opening hours closer to October.',
    sourceName: 'Stadin Silakkamarkkinat',
    sourceUrl: 'https://silakkamarkkinat.fi/en/',
    lastChecked: '3 August 2026',
    transport: [
      { mode: 'Tram or bus', advice: 'Use a tram stop near Market Square or Senate Square.' },
      { mode: 'Walk', advice: 'About 10–15 minutes from Helsinki Central Station via Esplanadi.' },
      { mode: 'Bike', advice: 'Waterfront cycle routes reach the harbour; park outside the busiest market area.' },
    ],
  },
]

export function getEvent(slug: string): CityEvent | undefined {
  return events.find((event) => event.slug === slug)
}

export function getUpcomingEvents(): CityEvent[] {
  const today = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Helsinki',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date())

  return [...events]
    .filter((event) => event.endDate >= today)
    .sort((a, b) => a.startDate.localeCompare(b.startDate))
}

export function eventDateParts(event: CityEvent): { day: string; month: string } {
  const [year, month, day] = event.startDate.split('-').map(Number)
  const date = new Date(Date.UTC(year, month - 1, day))
  return {
    day: new Intl.DateTimeFormat('en-GB', { day: '2-digit', timeZone: 'UTC' }).format(date),
    month: new Intl.DateTimeFormat('en-GB', { month: 'short', timeZone: 'UTC' }).format(date),
  }
}

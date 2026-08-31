export const exploreCategories = [
  'Museums & art',
  'History & landmarks',
  'Family favourites',
  'Cinema',
  'Beaches & swimming',
  'Islands & nature',
  'Public saunas',
  'Libraries & culture',
] as const

export type ExploreCategory = (typeof exploreCategories)[number]
export type ExploreAccess = 'Free' | 'Free option' | 'Paid' | 'Temporarily closed'

export type ExploreListing = {
  slug: string
  name: string
  category: ExploreCategory
  area: string
  address: string
  access: ExploreAccess
  priceNote: string
  freeTip?: string
  familyFriendly: boolean
  indoor: boolean
  allYear: boolean
  tags: string[]
  blurb: string
  description: string[]
  highlights: string[]
  howToVisit: string
  goodToKnow: string
  transport: Array<{ mode: string; advice: string }>
  website: string
  sourceName: string
  lastChecked: string
}

const checked = '24 August 2026'

export const exploreListings: ExploreListing[] = [
  {
    slug: 'helsinki-city-museum', name: 'Helsinki City Museum', category: 'Museums & art', area: 'Kruununhaka', address: 'Aleksanterinkatu 16, 00170 Helsinki', access: 'Free', priceNote: 'Always free', freeTip: 'No ticket or booking is needed for an ordinary visit.', familyFriendly: true, indoor: true, allYear: true, tags: ['Local history', 'Children\'s Town', 'Rainy day'],
    blurb: 'The easiest first museum in town: completely free, genuinely family-friendly and full of the small stories that make Helsinki feel like a real place.',
    description: ['The City Museum sits beside Senate Square in Helsinki\'s oldest surviving stone building. Its new main exhibition follows everyday life in the city from the Stone Age to the present, with objects, photographs and immersive rooms rather than a dry march through dates.', 'Families should head for Children\'s Town, where younger visitors can play shop, sit in an old classroom and explore Helsinki through hands-on spaces. It is a very good cold-weather rescue plan.'],
    highlights: ['Always free entry', 'Children\'s Town is made for hands-on family visits', 'Central enough to combine with Senate Square and the Market Square'],
    howToVisit: 'Walk in during opening hours. There is no need to reserve a normal individual visit.', goodToKnow: 'The museum is part of a wider city history family that also includes the Tram Museum, Burgher\'s House and the seasonal Worker Housing Museum.',
    transport: [{ mode: 'Tram', advice: 'Several trams stop around Senate Square and Aleksanterinkatu.' }, { mode: 'Walk', advice: 'About 15 minutes from Central Railway Station through the city centre.' }], website: 'https://www.helsinginkaupunginmuseo.fi/en/', sourceName: 'Helsinki City Museum and City of Helsinki', lastChecked: checked,
  },
  {
    slug: 'ateneum', name: 'Ateneum Art Museum', category: 'Museums & art', area: 'Kluuvi', address: 'Kaivokatu 2, 00100 Helsinki', access: 'Free option', priceNote: 'Paid entry; under 18s and Museum Card holders enter free', freeTip: 'Remaining free-admission days in 2026: 6 November and 11 December.', familyFriendly: true, indoor: true, allYear: true, tags: ['Finnish classics', 'Museum Card', 'Free days'],
    blurb: 'Finland\'s grand art museum, sitting right opposite the railway station and packed with the paintings you will start recognising everywhere else.',
    description: ['Ateneum is the Finnish National Gallery\'s home for Finnish art classics and major international exhibitions. It is where names such as Akseli Gallen-Kallela, Helene Schjerfbeck and Albert Edelfelt start making sense.', 'The central location makes it easy to visit for an hour rather than treating the museum like an all-day endurance test. Under-18s enter free, and the museum runs several free days each year.'],
    highlights: ['Under-18s enter free', 'Museum Card and Helsinki Card accepted', 'Easy Finnish introductions are offered on some free days'], howToVisit: 'Buy online for a slightly lower standard price, use a Museum Card, or arrive on a listed free day. Free days can be busy, so go early if you can.', goodToKnow: 'The remaining official 2026 free days are 6 November and 11 December. Always recheck before travelling.',
    transport: [{ mode: 'Train or metro', advice: 'Directly opposite Central Railway Station and beside the Central Railway Station metro.' }, { mode: 'Tram', advice: 'Many central tram routes stop around Rautatientori.' }], website: 'https://ateneum.fi/en/opening-hours-and-tickets/', sourceName: 'Ateneum Art Museum', lastChecked: checked,
  },
  {
    slug: 'kiasma', name: 'Kiasma', category: 'Museums & art', area: 'Kluuvi', address: 'Mannerheiminaukio 2, 00100 Helsinki', access: 'Free option', priceNote: 'Paid entry; under 18s and Museum Card holders enter free', freeTip: 'Free for everyone on the first Friday of every month.', familyFriendly: true, indoor: true, allYear: true, tags: ['Contemporary art', 'First Friday', 'English tours'],
    blurb: 'Bold contemporary art in a building that is half the experience, with a properly useful free Friday every month.',
    description: ['Kiasma is Finland\'s national museum of contemporary art. Exhibitions change regularly and can be playful, political, strange or all three at once.', 'The first Friday of each month is free for everyone. The museum often adds guided tours in several languages, including English, to those evenings, making it a particularly easy first visit.'],
    highlights: ['Free on the first Friday each month', 'Under-18s enter free', 'Central, accessible and close to Oodi'], howToVisit: 'Turn up with a ticket or Museum Card. On free Fridays, register for limited guided tours at the information desk when you arrive.', goodToKnow: 'The next listed 2026 free Fridays after this check are 4 September, 2 October, 6 November and 4 December.',
    transport: [{ mode: 'Train or metro', advice: 'Around 300 metres from Central Railway Station.' }, { mode: 'Tram', advice: 'Lasipalatsi stop is roughly 150 metres away.' }, { mode: 'Bike', advice: 'The Baana cycling corridor passes close by.' }], website: 'https://kiasma.fi/en/visitor-information/', sourceName: 'Museum of Contemporary Art Kiasma', lastChecked: checked,
  },
  {
    slug: 'ham-helsinki-art-museum', name: 'HAM Helsinki Art Museum', category: 'Museums & art', area: 'Kamppi', address: 'Eteläinen Rautatiekatu 8, 00100 Helsinki', access: 'Free option', priceNote: 'Paid entry; under 18s and Museum Card holders enter free', freeTip: 'Free on the last Friday of each month from 11:00 to 19:00.', familyFriendly: true, indoor: true, allYear: true, tags: ['Contemporary art', 'Tove Jansson', 'Last Friday'],
    blurb: 'A relaxed city art museum above Tennispalatsi, with Tove Jansson, big temporary shows and a reliable monthly free day.',
    description: ['HAM looks after Helsinki\'s enormous public art collection and brings part of it indoors at Tennispalatsi. It is particularly strong on modern and contemporary art, and its Tove Jansson galleries are a natural draw for anyone who has started falling for the Moomins.', 'The monthly free Friday is one of the best regular culture deals in Helsinki. Under-18s and Museum Card holders can visit free at any normal opening time.'],
    highlights: ['Free on the last Friday each month', 'Under-18s enter free', 'In the same building as Finnkino Tennispalatsi'], howToVisit: 'Buy or reserve a timed ticket online, use a Museum Card, or visit during the monthly free Friday.', goodToKnow: 'The remaining free Fridays in 2026 begin with 28 August, followed by 25 September, 30 October and 27 November.',
    transport: [{ mode: 'Metro', advice: 'Kamppi metro and bus terminal are a short walk away.' }, { mode: 'Tram or bus', advice: 'Many central services stop around Kamppi and Lasipalatsi.' }], website: 'https://www.hamhelsinki.fi/en/visitors/tickets-prices/', sourceName: 'HAM Helsinki Art Museum', lastChecked: checked,
  },
  {
    slug: 'amos-rex', name: 'Amos Rex', category: 'Museums & art', area: 'Kamppi', address: 'Mannerheimintie 22-24, 00100 Helsinki', access: 'Free option', priceNote: 'Paid entry; under 18s free and ages 18-29 receive a strong discount', freeTip: 'Under-18s enter free. Museum Card and Helsinki Card are accepted.', familyFriendly: true, indoor: true, allYear: true, tags: ['Immersive art', 'Architecture', 'Under-18s free'],
    blurb: 'An underground museum beneath the Lasipalatsi square, known for immersive exhibitions and those brilliant domes children immediately climb outside.',
    description: ['Amos Rex pairs a futuristic underground gallery with the restored 1930s Lasipalatsi building. Its programme moves between contemporary art, experimental installations and visually spectacular exhibitions.', 'Even if you do not go inside, the sculpted square above the museum is worth a stop. For the exhibitions, under-18s enter free and 18 to 29-year-olds have a reduced ticket.'],
    highlights: ['Under-18s enter free', 'Museum Card and Helsinki Card accepted', 'The outdoor domes are a free city-centre play stop'], howToVisit: 'Check the current exhibition first. Popular shows can have queues, so buying a timed online ticket is sensible.', goodToKnow: 'The museum is closed on Tuesdays. School groups should book ahead because pre-booked groups receive priority.',
    transport: [{ mode: 'Metro', advice: 'Kamppi and Central Railway Station metro stops are both close.' }, { mode: 'Tram', advice: 'Lasipalatsi stop is directly outside.' }], website: 'https://amosrex.fi/en/tickets/', sourceName: 'Amos Rex', lastChecked: checked,
  },
  {
    slug: 'architecture-and-design-museum', name: 'Architecture & Design Museum', category: 'Museums & art', area: 'Kaartinkaupunki', address: 'Korkeavuorenkatu 23 and Kasarmikatu 24, 00130 Helsinki', access: 'Free option', priceNote: 'One paid ticket covers both buildings; under-18s and Museum Card holders enter free', freeTip: 'Free from 16:00 to 20:00 on the last Tuesday of Jan-May and Sep-Dec.', familyFriendly: true, indoor: true, allYear: true, tags: ['Finnish design', 'Architecture', 'Free evenings'],
    blurb: 'Two neighbouring buildings, one ticket and a clear route into why Finnish chairs, houses and everyday objects look the way they do.',
    description: ['The former Design Museum and Museum of Finnish Architecture now operate as one institution across two nearby buildings. Together they cover Finnish design icons, changing contemporary work and the buildings that shaped the country.', 'The free evening runs on the last Tuesday of most winter, spring and autumn months. Under-18s are always free.'],
    highlights: ['One ticket for both museum buildings', 'Last-Tuesday free evenings in most months', 'Under-18s and Museum Card holders enter free'], howToVisit: 'Start at Building D on Korkeavuorenkatu, then walk around the corner to Building A. Join a public tour by registering at the desk when you arrive.', goodToKnow: 'Free evenings do not run in June, July or August. Check the exact event date on the museum site.',
    transport: [{ mode: 'Tram', advice: 'Tram 10 brings you close to the museum buildings.' }, { mode: 'Walk', advice: 'Roughly 15 minutes from the railway station through Esplanadi.' }], website: 'https://admuseo.fi/en/', sourceName: 'Architecture & Design Museum', lastChecked: checked,
  },
  {
    slug: 'sinebrychoff-art-museum', name: 'Sinebrychoff Art Museum', category: 'Museums & art', area: 'Punavuori', address: 'Bulevardi 40, 00120 Helsinki', access: 'Free option', priceNote: 'Paid exhibitions; the second-floor house museum is always free', freeTip: 'The house museum is always free. Full museum free on the last Friday, 15:00-18:00.', familyFriendly: true, indoor: true, allYear: true, tags: ['Old masters', 'Historic home', 'Free house museum'],
    blurb: 'A stately home, old European art and one of Helsinki\'s most overlooked free museum interiors upstairs.',
    description: ['This museum grew from the Sinebrychoff family collection and home. The second floor preserves the rooms and artworks of the house museum and can be visited free at any normal opening time.', 'Temporary exhibitions downstairs require a ticket, except during the museum\'s last-Friday free evenings.'],
    highlights: ['House museum is always free', 'Last-Friday free evenings', 'Under-18s and Museum Card holders enter free'], howToVisit: 'Walk in for the free house museum or buy a full exhibition ticket. On the monthly free evening, the entire museum is open without charge.', goodToKnow: 'The next listed free evenings in 2026 are 28 August, 25 September, 30 October and 27 November.',
    transport: [{ mode: 'Tram', advice: 'Trams along Bulevardi stop close to the museum.' }, { mode: 'Walk', advice: 'Around 15 minutes from Kamppi.' }], website: 'https://sinebrychoffintaidemuseo.fi/en/opening-hours-tickets-and-getting-here/', sourceName: 'Sinebrychoff Art Museum', lastChecked: checked,
  },
  {
    slug: 'tram-museum', name: 'Tram Museum', category: 'Museums & art', area: 'Töölö', address: 'Töölönkatu 51 A, 00250 Helsinki', access: 'Free', priceNote: 'Always free', freeTip: 'No ticket is needed.', familyFriendly: true, indoor: true, allYear: true, tags: ['Transport history', 'Children', 'Always free'],
    blurb: 'Old Helsinki trams you can climb aboard, packed into a small free museum that works brilliantly with younger children.',
    description: ['The Tram Museum tells the story of Helsinki through the vehicles that moved it. The collection is compact enough for a short visit but tactile enough to keep children interested.', 'It is next to Korjaamo Culture Factory and close to Sibelius Park, so it can easily form part of a wider Töölö afternoon.'],
    highlights: ['Always free', 'Real historic trams to explore', 'Open daily under the normal schedule'], howToVisit: 'Simply turn up during opening hours.', goodToKnow: 'This is part of Helsinki City Museum. It is a smaller museum, so 45 to 90 minutes is plenty for most visits.',
    transport: [{ mode: 'Tram', advice: 'Take a tram north through Töölö and get off near Töölöntori or Korjaamo.' }, { mode: 'Walk', advice: 'Combine it with a walk around Sibelius Park and Töölönlahti.' }], website: 'https://www.helsinginkaupunginmuseo.fi/en/museums/', sourceName: 'Helsinki City Museum', lastChecked: checked,
  },
  {
    slug: 'seurasaari-open-air-museum', name: 'Seurasaari Open-Air Museum', category: 'Museums & art', area: 'Seurasaari', address: 'Seurasaari, 00250 Helsinki', access: 'Paid', priceNote: 'The island is free; the open-air museum buildings require a seasonal ticket', freeTip: 'Walking the island, paths and exterior museum area is free all year.', familyFriendly: true, indoor: false, allYear: false, tags: ['Finnish history', 'Island walk', 'Seasonal'],
    blurb: 'Old Finnish farmhouses, manors and cottages gathered on a wooded island that is worth visiting even when the paid museum buildings are closed.',
    description: ['The open-air museum brings historic wooden buildings from across Finland into one walkable island landscape. During the summer season, tickets let you enter the furnished buildings and meet guides.', 'The island itself remains a free nature destination. Outside museum hours you can still walk the paths, see the buildings from outside and meet the famously confident squirrels.'],
    highlights: ['The island is free to explore', 'Museum buildings open seasonally', 'Easy mix of history and nature'], howToVisit: 'Walk across the bridge to the island. Buy a museum ticket during the summer season if you want to enter the historic buildings.', goodToKnow: 'Bring snacks and allow more time than the map suggests. The bridge and main paths are straightforward, but some museum terrain is uneven.',
    transport: [{ mode: 'Bus', advice: 'Take an HSL bus towards Seurasaari, then walk across the bridge.' }, { mode: 'Bike', advice: 'Cycling is convenient to the bridge; follow island rules after arrival.' }], website: 'https://www.kansallismuseo.fi/en/seurasaarenulkomuseo', sourceName: 'National Museum of Finland', lastChecked: checked,
  },
  {
    slug: 'suomenlinna', name: 'Suomenlinna Sea Fortress', category: 'History & landmarks', area: 'Suomenlinna', address: 'Suomenlinna, 00190 Helsinki', access: 'Free option', priceNote: 'No entrance fee; you only need a ferry ticket. Most museums are paid.', freeTip: 'The fortress, Blue Route and outdoor sights are free. The Customs Museum is also free.', familyFriendly: true, indoor: false, allYear: true, tags: ['UNESCO', 'Island', 'HSL ferry'],
    blurb: 'The obvious Helsinki day trip for a reason: an inhabited UNESCO sea fortress reached with a normal HSL ferry ticket.',
    description: ['Suomenlinna spreads across several connected islands, mixing ramparts, tunnels, old military buildings, cafés and about 800 permanent residents. There is no gate or entrance ticket.', 'Follow the marked Blue Route from the main pier to the King\'s Gate and the main fortifications. Museums charge separately, except the seasonal Customs Museum, while the outdoor fortress remains free.'],
    highlights: ['No fortress entrance fee', 'Year-round HSL ferry from Market Square', 'Five museums plus free outdoor history'], howToVisit: 'Buy an AB HSL ticket in the app or from the pier machine before boarding. Follow the Blue Route and allow at least half a day.', goodToKnow: 'This is a real neighbourhood. Stay on public routes, respect residents and wear shoes that cope with cobbles and uneven ground.',
    transport: [{ mode: 'Ferry', advice: 'The HSL ferry leaves Market Square all year and accepts a normal AB ticket.' }, { mode: 'Walk', advice: 'Everything on the islands is reached on foot. Bicycles, wheelchairs and pushchairs are not rented there.' }], website: 'https://suomenlinna.fi/en/faq-frequently-asked-questions/', sourceName: 'Governing Body of Suomenlinna', lastChecked: checked,
  },
  {
    slug: 'helsinki-cathedral', name: 'Helsinki Cathedral', category: 'History & landmarks', area: 'Kruununhaka', address: 'Unioninkatu 29, 00170 Helsinki', access: 'Free option', priceNote: 'Seasonal visitor fee; under-18s free. The winter fee is voluntary.', freeTip: 'The steps and Senate Square view are always free. From November to May the cathedral visitor fee is voluntary.', familyFriendly: true, indoor: true, allYear: true, tags: ['Architecture', 'Senate Square', 'City icon'],
    blurb: 'The white dome that defines the Helsinki skyline, with the city\'s best-known steps and a newly introduced seasonal visitor fee inside.',
    description: ['Carl Ludvig Engel\'s cathedral dominates Senate Square and remains an active Lutheran church. The exterior, broad steps and square are free to enjoy at any time.', 'For sightseeing inside, the cathedral now charges during the summer and early autumn visitor season. From November through May, the stated visitor fee is voluntary. Worship and church events follow separate rules.'],
    highlights: ['Exterior and Senate Square are free', 'Under-18s enter free', 'Central stop on a historic-city walk'], howToVisit: 'Check the week\'s opening hours because services and ceremonies can alter visitor access. Buy the visitor ticket at the bell-tower visitor centre when required.', goodToKnow: 'For 1 June to 31 August 2026, the official adult fee is €10. The accessible entrance is through the Crypt.',
    transport: [{ mode: 'Tram', advice: 'Senate Square is served by central tram stops around Aleksanterinkatu.' }, { mode: 'Walk', advice: 'About 15 minutes from Central Railway Station.' }], website: 'https://www.helsingintuomiokirkko.fi/en/index/uusipaataso.html', sourceName: 'Helsinki Cathedral Parish', lastChecked: checked,
  },
  {
    slug: 'uspenski-cathedral', name: 'Uspenski Cathedral', category: 'History & landmarks', area: 'Katajanokka', address: 'Pormestarinrinne 1, 00160 Helsinki', access: 'Free option', priceNote: '€5 for adults during normal sightseeing hours; under-18s free', freeTip: 'Religious services are not ordinary sightseeing visits. Helsinki Day has offered free open doors.', familyFriendly: true, indoor: true, allYear: true, tags: ['Orthodox history', 'Architecture', 'Under-18s free'],
    blurb: 'Red brick, golden cupolas and one of Helsinki\'s finest harbour views, perched above Katajanokka.',
    description: ['Consecrated in 1868, Uspenski is the main cathedral of Helsinki\'s Orthodox parish and the largest Orthodox temple in Northern and Western Europe. The interior is rich with icons and incense-darkened detail.', 'An adult sightseeing fee was introduced in 2025. Under-18s remain free, while worshippers and service times are handled separately from ordinary visitor access.'],
    highlights: ['Under-18s enter free', 'Short English presentations run on some summer days', 'Excellent free views from the cathedral terrace'], howToVisit: 'Check the weekly schedule before going because services frequently change sightseeing hours. Buy the €5 adult ticket online or at the cathedral.', goodToKnow: 'Dress and behave as you would in an active place of worship. Photography and visitor access can be restricted during services.',
    transport: [{ mode: 'Tram', advice: 'Katajanokka trams stop below the cathedral.' }, { mode: 'Walk', advice: 'A short uphill walk from Market Square.' }], website: 'https://hos.fi/en/uspenski-cathedral-main-cathedral-of-the-orthodox-parish-of-helsinki-and-the-diocese-of-helsinki/', sourceName: 'Orthodox Parish of Helsinki', lastChecked: checked,
  },
  {
    slug: 'temppeliaukio-church', name: 'Temppeliaukio Church', category: 'History & landmarks', area: 'Etu-Töölö', address: 'Lutherinkatu 3, 00100 Helsinki', access: 'Free option', priceNote: '€8 for adults; under-18s, Museum Card and Helsinki Card holders enter free', freeTip: 'Under-18s and Museum Card holders enter free.', familyFriendly: true, indoor: true, allYear: true, tags: ['Rock Church', 'Architecture', 'Museum Card'],
    blurb: 'A working church blasted directly into granite, topped with copper and filled with the kind of acoustics that make even silence sound expensive.',
    description: ['The Rock Church was completed in 1969 and is one of Helsinki\'s clearest examples of architecture working with the landscape rather than flattening it. Natural rock walls, a copper dome and 180 skylights create the interior.', 'It remains an active church and concert venue, so visitor hours change around services and events.'],
    highlights: ['Museum Card and Helsinki Card accepted', 'Under-18s enter free', 'Open for visits most days of the year'], howToVisit: 'Check the exact weekly opening hours, then buy at the desk or online. Normal visitor access closes during ceremonies.', goodToKnow: 'The adult visitor fee is €8. The building is accessible, and the official site publishes equal-access information.',
    transport: [{ mode: 'Tram', advice: 'Use a Töölö tram and walk a few blocks from Sammonkatu.' }, { mode: 'Walk', advice: 'Around 10 minutes from Kamppi.' }], website: 'https://www.temppeliaukionkirkko.fi/en/index.html', sourceName: 'Temppeliaukio Church', lastChecked: checked,
  },
  {
    slug: 'senate-square', name: 'Senate Square & historic centre', category: 'History & landmarks', area: 'Kruununhaka', address: 'Senaatintori, 00170 Helsinki', access: 'Free', priceNote: 'Free public space', freeTip: 'Hear the Sound of the Senate Square installation daily at 17:49.', familyFriendly: true, indoor: false, allYear: true, tags: ['Neoclassical city', 'Free walk', 'Architecture'],
    blurb: 'Helsinki\'s cleanest history lesson: one square, four monumental Engel buildings and layers of city life in every direction.',
    description: ['Senate Square is framed by Helsinki Cathedral, Government Palace, the University\'s main building and the National Library. Together they form one of Europe\'s most coherent neoclassical city spaces.', 'Use it as the starting point for a free historic walk through Kruununhaka, the Market Square, Katajanokka and Esplanadi.'],
    highlights: ['Always free', 'Daily sound installation at 17:49', 'Beside the free Helsinki City Museum'], howToVisit: 'No booking is needed. Go early for quiet photographs or arrive at 17:49 for the square\'s five-minute sound work.', goodToKnow: 'Large public events and markets sometimes take over the square, which can be either a bonus or a reason to return another day.',
    transport: [{ mode: 'Tram', advice: 'Central tram routes run along Aleksanterinkatu.' }, { mode: 'Walk', advice: 'An easy walk from the railway station or Market Square.' }], website: 'https://www.myhelsinki.fi/places/senate-square/', sourceName: 'MyHelsinki, City of Helsinki destination service', lastChecked: checked,
  },
  {
    slug: 'national-museum-finland', name: 'National Museum of Finland', category: 'History & landmarks', area: 'Töölönlahti', address: 'Mannerheimintie 34, 00100 Helsinki', access: 'Temporarily closed', priceNote: 'Closed for renovation and expansion', freeTip: 'Three permanent exhibitions can be explored through free virtual tours while the building is closed.', familyFriendly: true, indoor: true, allYear: false, tags: ['Closed until 2027', 'Virtual tour', 'Save for later'],
    blurb: 'The big one is still off-limits: Finland\'s national history museum is being rebuilt and is due to reopen in April 2027.',
    description: ['The National Museum is in the largest renewal project of its history, combining its National Romantic main building with a major new underground extension.', 'Do not plan a normal visit in 2026. The official reopening has been announced for April 2027. In the meantime, virtual versions of three permanent exhibitions are available online.'],
    highlights: ['Reopening announced for April 2027', 'Free virtual exhibitions available now', 'The historic exterior remains visible from Mannerheimintie'], howToVisit: 'Save it for spring 2027. Use the official virtual-exhibition page if you want a history fix before then.', goodToKnow: 'Some old travel sites still show normal museum information. The official museum confirms that the building is closed.',
    transport: [{ mode: 'Tram', advice: 'The National Museum tram stop remains on Mannerheimintie.' }, { mode: 'Walk', advice: 'The exterior can be seen on a Töölönlahti architecture walk.' }], website: 'https://www.kansallismuseo.fi/en/kansallismuseo', sourceName: 'National Museum of Finland', lastChecked: checked,
  },
  {
    slug: 'korkeasaari-zoo', name: 'Korkeasaari Zoo', category: 'Family favourites', area: 'Korkeasaari', address: 'Mustikkamaanpolku 12, 00570 Helsinki', access: 'Free option', priceNote: 'Paid entry; children aged 0-3 enter free', freeTip: 'Free-entry Mondays run once a month from October to March. Remaining 2026 dates: 5 Oct, 2 Nov and 7 Dec.', familyFriendly: true, indoor: false, allYear: true, tags: ['Zoo', 'Free Mondays', 'All year'],
    blurb: 'An island zoo open every day of the year, now easier to reach on foot, by bike and by tram through the new bridge connections.',
    description: ['Korkeasaari is home to more than 150 species and focuses heavily on conservation. The island setting makes it feel more like a long outdoor day than a quick collection of animal enclosures.', 'The zoo offers monthly free Mondays outside summer. These cannot be booked in advance and may reach capacity, so arriving early is sensible.'],
    highlights: ['Open all year', 'Free Mondays from October to March', 'Annual passes available for repeat family visits'], howToVisit: 'Buy an advance ticket for a normal visit. For a free Monday, arrive before the last-entry time because reservations are not offered.', goodToKnow: 'Bus 16 ended in August 2026. Use tram 13 to Nihti, walk from Kalasatama, or use the new pedestrian and cycling bridges.',
    transport: [{ mode: 'Tram', advice: 'Take tram 13 to Nihti, then walk about five minutes across Finkensilta.' }, { mode: 'Metro', advice: 'Kalasatama is about a 20-minute walk via Mustikkamaa or Sompasaari.' }, { mode: 'Bike', advice: 'The new Crown Bridges route reaches the zoo entrance, where bike racks and a city-bike station are available.' }], website: 'https://korkeasaari.fi/en/visit-us/info/free-entry-days/', sourceName: 'Korkeasaari Zoo', lastChecked: checked,
  },
  {
    slug: 'linnanmaki', name: 'Linnanmäki', category: 'Family favourites', area: 'Alppila', address: 'Tivolikuja 1, 00510 Helsinki', access: 'Paid', priceNote: 'New for 2026: entry to the park area costs €5 unless included with another ticket product', freeTip: 'Children under 3 enter without a ticket product. The €5 area ticket includes six small rides and play areas.', familyFriendly: true, indoor: false, allYear: false, tags: ['Amusement park', 'Seasonal', 'Young children'],
    blurb: 'Helsinki\'s amusement park is still great for a wander, but it is no longer completely free to enter in 2026.',
    description: ['Linnanmäki has more than 40 rides, from the 1951 wooden roller coaster to small children\'s rides. It is run by the Children\'s Day Foundation, which raises funds for child welfare.', 'The important 2026 change is the new €5 Area Entrance Ticket. It includes six rides for younger children and several play zones. Wristbands and ride tickets already include area entry.'],
    highlights: ['€5 area ticket includes six young-child rides', 'Children under 3 enter without a ticket', 'Easy public-transport access'], howToVisit: 'Check the seasonal calendar before leaving home. Buy a wristband, ride ticket or €5 area entry in advance or at the park.', goodToKnow: 'The park is not open every day, even during August. Small-child rides can close earlier than the rest of the park.',
    transport: [{ mode: 'Tram', advice: 'Trams stop near the southern entrance on Helsinginkatu.' }, { mode: 'Train', advice: 'Pasila station is within a longer walk or short tram ride.' }], website: 'https://www.linnanmaki.fi/en/information-about-the-park/info/', sourceName: 'Linnanmäki', lastChecked: checked,
  },
  {
    slug: 'playground-loru', name: 'Playground Loru at Oodi', category: 'Family favourites', area: 'Kluuvi', address: 'Töölönlahdenkatu 4, 00100 Helsinki', access: 'Free', priceNote: 'Free city playground', freeTip: 'Drop-in play is free. Guided weekday activities are also free unless stated otherwise.', familyFriendly: true, indoor: true, allYear: true, tags: ['Babies', 'Toddlers', 'Indoor and outdoor'],
    blurb: 'A brilliantly central city playground with an outdoor climbing area and indoor family space on Oodi\'s top floor.',
    description: ['Loru combines the outdoor play area on Kansalaistori with indoor activity space beside Oodi\'s children\'s section. It is an easy meeting point for families in the centre.', 'The programme includes songs, movement, baby activities and guided play. Most organised sessions are in Finnish or Swedish, but free play needs no language at all.'],
    highlights: ['Free indoor and outdoor play', 'Baby and toddler activities', 'Oodi café, toilets and children\'s books close by'], howToVisit: 'Drop in during the playground\'s weekday opening hours. Check the event calendar for guided sessions.', goodToKnow: 'The city lists service languages as Finnish and Swedish. You can still join ordinary play, but ask staff about the language of guided sessions.',
    transport: [{ mode: 'Train or metro', advice: 'Oodi is a short, flat walk from Central Railway Station.' }, { mode: 'Tram', advice: 'Several stops around Lasipalatsi and Kansallismuseo are nearby.' }], website: 'https://www.hel.fi/en/childhood-and-education/playground-loru-0', sourceName: 'City of Helsinki', lastChecked: checked,
  },
  {
    slug: 'helsinki-playground-network', name: 'Helsinki city playground network', category: 'Family favourites', area: 'Across Helsinki', address: 'More than 60 locations across the city', access: 'Free', priceNote: 'Free public service', freeTip: 'Free guided activities need no advance registration unless the individual programme says otherwise.', familyFriendly: true, indoor: true, allYear: true, tags: ['Local families', 'Free activities', 'Playground clubs'],
    blurb: 'One of Helsinki\'s best-kept newcomer secrets: staffed local playgrounds with indoor rooms, free activities and a ready-made way to meet other families.',
    description: ['A Helsinki leikkipuisto is more than swings and a slide. Many sites have trained instructors, indoor rooms and weekday programmes for babies, toddlers and school-age children.', 'There are more than 60 playgrounds and family houses. Open family activities are generally free, while separate clubs for home-cared children aged 2 to 4 require an application through Edlevo.'],
    highlights: ['Over 60 locations', 'Free open family activities', 'Free clubs for eligible 2 to 4-year-old Helsinki residents'], howToVisit: 'Use the city map to find your nearest site, then open that playground\'s page for its current programme. For a formal playground club, apply in Edlevo.', goodToKnow: 'Activities are mainly in Finnish. That can feel awkward initially, but these are public services and families are welcome to attend.',
    transport: [{ mode: 'Local trip', advice: 'Search by your home address on the official city playground finder.' }], website: 'https://www.hel.fi/en/childhood-and-education/playgrounds-and-family-houses/find-playgrounds-and-family-houses?page=1', sourceName: 'City of Helsinki', lastChecked: checked,
  },
  {
    slug: 'kino-regina', name: 'Kino Regina', category: 'Cinema', area: 'Kluuvi', address: 'Oodi, Töölönlahdenkatu 4, 00100 Helsinki', access: 'Paid', priceNote: 'Affordable individual and serial tickets', freeTip: 'Some talks and special programmes are free; check each listing.', familyFriendly: true, indoor: true, allYear: true, tags: ['Film archive', 'Classics', 'Oodi'],
    blurb: 'A proper cinematheque inside Oodi, screening classics, restorations, rarities and films you are unlikely to find at the multiplex.',
    description: ['Kino Regina is the screening home of Finland\'s national film archive. Its programme moves through film history with retrospectives, restored prints, special talks and occasional live-music screenings.', 'Language and subtitle information matters here. Always open the individual screening page before buying if you need English audio or subtitles.'],
    highlights: ['Inside Oodi', 'Archive films and rare screenings', 'Online and box-office tickets'], howToVisit: 'Browse the current programme, check the language and subtitle line, then buy online or from the box office. The desk opens half an hour before the first screening.', goodToKnow: 'Kino Regina is accessible from Oodi\'s ground floor and has wheelchair places. Programmes can include films without English subtitles.',
    transport: [{ mode: 'Train or metro', advice: 'A short walk from Central Railway Station.' }, { mode: 'Tram', advice: 'Lasipalatsi and Kansallismuseo stops are nearby.' }], website: 'https://kinoregina.fi/', sourceName: 'Finnish Arts and Culture Agency / Kino Regina', lastChecked: checked,
  },
  {
    slug: 'cinema-orion', name: 'Cinema Orion', category: 'Cinema', area: 'Kamppi', address: 'Eerikinkatu 15, 00100 Helsinki', access: 'Paid', priceNote: 'Standard, discounted, matinée and serial tickets available', freeTip: 'The Orion Club offers a small discount on selected screenings.', familyFriendly: false, indoor: true, allYear: true, tags: ['Independent cinema', 'English listings', 'Historic screen'],
    blurb: 'A beautiful independent cinema with a weekly English page that saves you from guessing whether a brilliant-looking film is actually watchable.',
    description: ['Cinema Orion mixes new independent releases, classics, festivals and special screenings in one of Helsinki\'s loveliest cinema interiors.', 'Its Films in English page is particularly useful: it separates films spoken in English from selected screenings with English subtitles. Check the individual show because subtitle versions can differ.'],
    highlights: ['Dedicated Films in English page', 'Discount tickets and matinées', 'Independent and festival programming'], howToVisit: 'Start on the Films in English page, choose the exact screening and buy online. Seats are not numbered, so arrive early if the room is busy.', goodToKnow: 'Tickets normally cannot be changed or refunded. Only specifically marked screenings of foreign-language films have English subtitles.',
    transport: [{ mode: 'Metro', advice: 'Kamppi metro and bus terminal are close.' }, { mode: 'Tram', advice: 'Central tram stops on Fredrikinkatu and Mannerheimintie are within walking distance.' }], website: 'https://cinemaorion.fi/en/films-in-english/', sourceName: 'Cinema Orion', lastChecked: checked,
  },
  {
    slug: 'riviera-cinemas', name: 'Riviera Cinemas', category: 'Cinema', area: 'Kallio & Punavuori', address: 'Harjukatu 2 and Telakkakatu 7, Helsinki', access: 'Paid', priceNote: 'Paid cinema tickets with food and drink ordering', freeTip: 'No regular free programme, but English-speaking staff can help with bookings.', familyFriendly: false, indoor: true, allYear: true, tags: ['Cinema restaurant', 'Original language', 'English service'],
    blurb: 'Small sofas, cocktails and cinema food delivered to your seat, with genuinely helpful English-speaking staff at both locations.',
    description: ['Riviera operates intimate cinema restaurants in Kallio and Punavuori. The rooms are small, the seating is comfortable, and food and drinks can be ordered for the screening.', 'Films are mostly shown in their original language. Finnish films receive English subtitles when a subtitled version is available, and each film page lists language and subtitles.'],
    highlights: ['Staff fluent in English', 'Original-language films', 'Two intimate Helsinki locations'], howToVisit: 'Check the film page for kieli, meaning language, and tekstitys, meaning subtitles. Pre-order food if you want it brought to your seat before the film.', goodToKnow: 'The main programme pages are partly Finnish. Email the cinema if the booking or subtitle information is unclear.',
    transport: [{ mode: 'Tram or metro', advice: 'Kallio is close to Sörnäinen metro and Harju tram stops.' }, { mode: 'Tram', advice: 'Punavuori is served by trams along Telakkakatu and nearby streets.' }], website: 'https://www.rivieracinemas.fi/english/', sourceName: 'Riviera Cinemas', lastChecked: checked,
  },
  {
    slug: 'finnkino-helsinki', name: 'Finnkino Helsinki cinemas', category: 'Cinema', area: 'Kamppi & Itäkeskus', address: 'Tennispalatsi and Itis, Helsinki', access: 'Paid', priceNote: 'Ticket prices vary by film, time and auditorium', freeTip: 'Use the English-language and subtitle filters before booking.', familyFriendly: true, indoor: true, allYear: true, tags: ['Blockbusters', 'Family films', 'Language filters'],
    blurb: 'The easy blockbuster option, provided you check the language line carefully before accidentally booking the Finnish-dubbed family showing.',
    description: ['Finnkino runs Helsinki\'s large multiplexes and screens most major international releases. English-language films are common, usually with Finnish and Swedish subtitles.', 'Children\'s animation is often available both dubbed and in its original language. The showtime filters let you choose English audio, Finnish dubbing and subtitle options.'],
    highlights: ['Large mainstream programme', 'English-language filter', 'Central Tennispalatsi location beside HAM'], howToVisit: 'Choose the Helsinki theatre area, then filter by language and subtitles. Read the exact screening line before paying.', goodToKnow: 'A film title being in English does not guarantee English audio. Look for “Language: English” on the chosen showing.',
    transport: [{ mode: 'Metro', advice: 'Tennispalatsi is beside Kamppi. Itis is beside Itäkeskus metro.' }], website: 'https://www.finnkino.fi/en/elokuvat/naytosajat?SetHome=1&TheatreArea=1033', sourceName: 'Finnkino', lastChecked: checked,
  },
  {
    slug: 'hietaniemi-beach', name: 'Hietaniemi Beach', category: 'Beaches & swimming', area: 'Töölö', address: 'Hiekkarannantie 11, 00100 Helsinki', access: 'Free', priceNote: 'Free public beach', freeTip: 'Swimming and beach access are free. Lifeguards and services are seasonal.', familyFriendly: true, indoor: false, allYear: false, tags: ['Sandy beach', 'Central', 'Lifeguards in season'],
    blurb: 'Helsinki\'s big, social city beach, close enough to the centre for an after-work swim or a full summer afternoon.',
    description: ['Known locally as Hietsu, Hietaniemi is the city\'s best-known sandy beach. It has volleyball, open space, seasonal services and the sort of summer crowd that makes Helsinki briefly forget winter exists.', 'The beach remains accessible outside the staffed season, but lifeguards and facilities are seasonal. Always check water quality and blue-green algae notices before swimming.'],
    highlights: ['Free beach access', 'Seasonal lifeguards', 'Free pop-up swimming schools ran in summer 2026'], howToVisit: 'Turn up with swimwear and a towel. Check the city\'s live beach information for algae, temperature and any swimming restrictions.', goodToKnow: 'The official 2026 staffed beach season ended on 9 August. Swimming outside staffed times is at your own risk.',
    transport: [{ mode: 'Bus', advice: 'Several buses stop in western Töölö within walking distance.' }, { mode: 'Bike', advice: 'The seaside cycling routes make this an easy ride from the centre.' }], website: 'https://www.hel.fi/en/culture-and-leisure/outdoor-activities-parks-and-nature-destinations/public-beaches', sourceName: 'City of Helsinki', lastChecked: checked,
  },
  {
    slug: 'aurinkolahti-beach', name: 'Aurinkolahti Beach', category: 'Beaches & swimming', area: 'Vuosaari', address: 'Urheilukalastajankuja 1, 00990 Helsinki', access: 'Free', priceNote: 'Free public beach', freeTip: 'Beach access is free. Seasonal swimming schools may require separate registration.', familyFriendly: true, indoor: false, allYear: false, tags: ['Long sandy beach', 'Metro trip', 'Families'],
    blurb: 'A long eastern-Helsinki beach with a holiday feel, backed by Vuosaari\'s promenade, cafés and waterfront apartments.',
    description: ['Aurinkolahti is one of Helsinki\'s most substantial sandy beaches and a good reason to take the metro east. The broad shore and promenade work for families, swimmers and anyone who simply wants a sunny walk.', 'Like all sea beaches, conditions can change. Check the official algae and water-quality information before swimming.'],
    highlights: ['Free access', 'Seasonal lifeguards and services', 'Easy to combine with Uutela nature area'], howToVisit: 'Take the metro to Vuosaari and continue on foot or by local bus. Check beach conditions on the day.', goodToKnow: 'The walk from the metro is longer than it looks on a small map, but the promenade makes it pleasant.',
    transport: [{ mode: 'Metro', advice: 'Take the metro to Vuosaari, then walk or use a local bus towards Aurinkolahti.' }, { mode: 'Bike', advice: 'Eastern waterfront cycling routes reach the promenade.' }], website: 'https://www.hel.fi/en/culture-and-leisure/outdoor-activities-parks-and-nature-destinations/public-beaches/helsinkis-public-beaches', sourceName: 'City of Helsinki', lastChecked: checked,
  },
  {
    slug: 'palettilampi', name: 'Palettilampi Beach', category: 'Beaches & swimming', area: 'Kuninkaantammi', address: 'Ellen Thesleffin puisto, 00430 Helsinki', access: 'Free', priceNote: 'Free public freshwater beach', freeTip: 'The beach, outdoor gym, showers and changing facilities are public.', familyFriendly: true, indoor: false, allYear: false, tags: ['Freshwater', 'Outdoor gym', 'Bus 560'],
    blurb: 'A new sandy freshwater beach in northern Helsinki, filled with Lake Päijänne water and easy to reach on the orbital bus.',
    description: ['Palettilampi was created from a former water-treatment basin and now functions as a shallow, sandy-bottomed public beach. It has changing rooms, showers, toilets and an outdoor gym.', 'It is a good lake-like option within Helsinki, but current water notices still matter. At the time of this check, the city warned of swimmer\'s itch.'],
    highlights: ['Free freshwater swimming', 'Lifeguard during the staffed season', 'Outdoor gym and public facilities'], howToVisit: 'Check the official page for current water warnings before leaving. Bring your own swimming gear and supervise children closely.', goodToKnow: 'The city currently displays a swimmer\'s-itch warning. Water conditions and notices can change, so use the source link every time.',
    transport: [{ mode: 'Bus', advice: 'Bus 52 and trunk bus 560 provide public-transport access.' }, { mode: 'Car', advice: 'The nearby Lammenranta car park is paid.' }], website: 'https://www.hel.fi/en/culture-and-leisure/outdoor-activities-parks-and-nature-destinations/public-beaches/helsinkis-public-beaches/palettilampi-beach', sourceName: 'City of Helsinki', lastChecked: checked,
  },
  {
    slug: 'oittaa-lake-bodom', name: 'Oittaa & Lake Bodom', category: 'Beaches & swimming', area: 'Espoo', address: 'Kunnarlantie 33-39, 02740 Espoo', access: 'Free option', priceNote: 'Beach, trails and playground are free; rentals and sauna cost extra', freeTip: 'The supervised beach, themed playground, nature trail and outdoor gym are free.', familyFriendly: true, indoor: false, allYear: true, tags: ['Freshwater lake', 'Themed playground', 'All-season outdoors'],
    blurb: 'One of the best all-in-one family day trips nearby: a Lake Bodom beach, huge themed playground, easy nature trail and equipment rental.',
    description: ['Oittaa sits on Lake Bodom and works in every season. Summer brings a supervised beach, paddle and bike rentals, outdoor gym and ball courts. Winter brings ski tracks, ice swimming and sauna.', 'The themed playground and short nature trail make it especially strong for families who want more than just a patch of sand.'],
    highlights: ['Free beach and themed playground', '1.5 km nature trail', 'Rentals, café and seasonal sauna available'], howToVisit: 'Use HSL to plan the final bus connection, then check the recreation centre for seasonal rentals and sauna times.', goodToKnow: 'The area is large. Decide whether your priority is the beach, playground, trail or rental equipment before arriving.',
    transport: [{ mode: 'Train and bus', advice: 'Travel through Espoo by train and connecting bus; use the HSL Journey Planner for the current route.' }, { mode: 'Bike', advice: 'Outdoor routes connect Oittaa towards Nuuksio and Espoo Central Park.' }], website: 'https://www.espoo.fi/en/sports-and-nature/explore-nature/outdoor-recreation-areas', sourceName: 'City of Espoo', lastChecked: checked,
  },
  {
    slug: 'pihlajasaari', name: 'Pihlajasaari', category: 'Islands & nature', area: 'Helsinki archipelago', address: 'Läntinen Pihlajasaari, 00150 Helsinki', access: 'Free option', priceNote: 'Island entry is free; the seasonal waterbus is paid', freeTip: 'Beaches, paths, cooking shelters and public areas are free once you arrive.', familyFriendly: true, indoor: false, allYear: false, tags: ['Summer island', 'Beach', 'Picnic'],
    blurb: 'The proper Helsinki summer-island day: beaches, rocks, forest, picnic shelters and enough distance from the mainland to feel like a trip.',
    description: ['Pihlajasaari is a former villa island with sandy and rocky beaches, woodland paths, cooking shelters, toilets, seasonal food and a small self-service sauna.', 'The island is free, but the waterbus is not part of a standard HSL fare. Services and regular boats run in the summer season.'],
    highlights: ['Free island and beach access', 'Seasonal boats from Merisatama and Ruoholahti', 'Cooking shelters and drinking-water points'], howToVisit: 'Check JT-Line\'s seasonal timetable, buy a return waterbus ticket and pack for a full day. Bring food even if you plan to use the seasonal restaurant.', goodToKnow: 'The beach has no lifeguard. Ferry weather, algae and island services can all change.',
    transport: [{ mode: 'Waterbus', advice: 'Seasonal boats leave Merisatama and Ruoholahti; the crossing is about ten minutes from the mainland.' }], website: 'https://www.hel.fi/en/culture-and-leisure/outdoor-activities-parks-and-nature-destinations/islands/pihlajasaari', sourceName: 'City of Helsinki', lastChecked: checked,
  },
  {
    slug: 'vallisaari', name: 'Vallisaari', category: 'Islands & nature', area: 'Helsinki archipelago', address: 'Vallisaari, Helsinki', access: 'Free option', priceNote: 'Island entry is free; seasonal ferry costs extra', freeTip: 'Walking routes and natural areas are free once you arrive.', familyFriendly: true, indoor: false, allYear: false, tags: ['Military history', 'Nature', 'Seasonal ferry'],
    blurb: 'Wild nature and old military structures just beyond Suomenlinna, with some of the best sea views in the Helsinki archipelago.',
    description: ['Vallisaari was closed to the public for military use for decades, which allowed an unusually rich mix of nature and built history to develop. Marked routes lead past fortifications, cliffs and views toward Suomenlinna.', 'Access is seasonal by paid waterbus. Stay on marked paths because some areas remain restricted for safety and conservation.'],
    highlights: ['Free island access', 'Marked history and nature routes', 'Excellent views of Suomenlinna and the open sea'], howToVisit: 'Check the current JT-Line timetable and island opening information. Buy the return boat ticket and follow marked routes only.', goodToKnow: 'This is not a place to wander through every ruin. Old structures and restricted areas can be dangerous.',
    transport: [{ mode: 'Waterbus', advice: 'Seasonal JT-Line services operate from central Helsinki.' }], website: 'https://www.hel.fi/en/culture-and-leisure/outdoor-activities-parks-and-nature-destinations/islands/waterway-transport-in-the-helsinki-archipelago', sourceName: 'City of Helsinki and Metsähallitus', lastChecked: checked,
  },
  {
    slug: 'nuuksio-and-haltia', name: 'Nuuksio & Nature Centre Haltia', category: 'Islands & nature', area: 'Espoo', address: 'Nuuksiontie 84, 02820 Espoo', access: 'Free option', priceNote: 'National park trails and Haltia public spaces are free; main exhibitions and rentals are paid', freeTip: 'Outdoor Saturday offers free advice and occasional free exhibition hours. Museum Card covers Haltia\'s paid exhibitions.', familyFriendly: true, indoor: true, allYear: true, tags: ['National park', 'Lakes', 'Public transport'],
    blurb: 'Actual forest, lakes and marked trails within HSL range, with a nature centre that makes the first visit far less intimidating.',
    description: ['Nuuksio National Park is the capital region\'s clearest escape into Finnish lake-upland forest. Trails range from short family loops around Haltia to longer routes from Haukkalampi.', 'Haltia provides hiking advice, exhibitions, equipment rental, a shop and restaurant. Its lobby and public spaces are free; the main nature exhibitions require a ticket.'],
    highlights: ['National park access is free', 'Bus connections from Espoo', 'Family and accessible trail options from Haltia'], howToVisit: 'Take a train to Espoo and bus 245 towards Nuuksio. Start at Haltia for advice and the two-kilometre Maahisenkierros route if it is your first visit.', goodToKnow: 'Bus frequency changes by season. Download or save your return route before entering the forest and carry water, food and weatherproof layers.',
    transport: [{ mode: 'Train and bus', advice: 'Take a local train to Espoo station, then bus 245 towards Nuuksio and Haltia. Summer variants may continue farther.' }], website: 'https://www.luontoon.fi/en/destinations/nuuksio-national-park/directions/public-transport', sourceName: 'Metsähallitus Luontoon and Haltia', lastChecked: checked,
  },
  {
    slug: 'kuusijarvi', name: 'Kuusijärvi', category: 'Islands & nature', area: 'Vantaa', address: 'Kuusijärventie 3, 01260 Vantaa', access: 'Free option', priceNote: 'Lake, beach and trails are free; electric and smoke saunas are paid', freeTip: 'The sandy beach, children\'s area, playground and outdoor gyms are free.', familyFriendly: true, indoor: false, allYear: true, tags: ['Freshwater lake', 'Smoke sauna', 'Sipoonkorpi'],
    blurb: 'A year-round lake, beach and sauna base that also acts as one of the easiest public-transport gateways into Sipoonkorpi National Park.',
    description: ['Kuusijärvi has Vantaa\'s most popular beach, including a shallow children\'s area, playground, sports courts and outdoor gyms. Winter swimmers use the lake when the beach season is long gone.', 'Paid electric and smoke saunas make it possible to build a very Finnish day around forest, hot steam and a cold freshwater dip.'],
    highlights: ['Free lake and recreation area', 'Paid electric and smoke saunas', 'Direct walking connection into Sipoonkorpi'], howToVisit: 'Use HSL for a year-round bus. Buy sauna admission from the main building if you want the full heat-and-swim version.', goodToKnow: 'Parking is paid after the first free hour. Saunas and café run their own hours even though the outdoor area is always accessible.',
    transport: [{ mode: 'Bus', advice: 'Year-round HSL buses serve Kuusijärvi. Summer line 712 has operated from Tikkurila at weekends.' }, { mode: 'Bike', advice: 'Frame-locking bicycle racks are available near the arrival area and shoreline.' }], website: 'https://www.vantaa.fi/en/find-your-way-kuusijarvi', sourceName: 'City of Vantaa', lastChecked: checked,
  },
  {
    slug: 'sompasauna', name: 'Sompasauna', category: 'Public saunas', area: 'Mustikkamaa', address: 'Mustikkamaa, 00570 Helsinki', access: 'Free', priceNote: 'Free, volunteer-run and open around the clock', freeTip: 'No booking or membership. Bring what you need and help leave the place better than you found it.', familyFriendly: false, indoor: false, allYear: true, tags: ['Free sauna', 'Community-run', 'Sea swimming'],
    blurb: 'Helsinki\'s gloriously DIY public sauna: no desk, no booking, no showers and no one else responsible for cleaning up after you.',
    description: ['Sompasauna is built and maintained by volunteers and free for everyone. It moved to Mustikkamaa in 2025 and remains open around the clock, all year.', 'This is not a commercial spa. There is no staff, lifeguard, changing room or shower. Users fetch water, tend the fires, chop wood and respect the shared space.'],
    highlights: ['Completely free', 'Open 24/7', 'Direct sea access at your own risk'], howToVisit: 'Bring a towel, water, sandals, a swimsuit if you prefer, and a lock for the community cupboards. Read the official rules before your first visit.', goodToKnow: 'Mixed sauna culture and nudity may be present. Swimming and sauna use are entirely at your own risk.',
    transport: [{ mode: 'Bike or walk', advice: 'Use the pedestrian and cycling connections towards Mustikkamaa and Korkeasaari.' }, { mode: 'Tram', advice: 'Tram 13 to Nihti leaves a walk across the new bridge routes.' }], website: 'https://www.sompasauna.fi/', sourceName: 'Sompasauna and MyHelsinki', lastChecked: checked,
  },
  {
    slug: 'loyly', name: 'Löyly', category: 'Public saunas', area: 'Hernesaari', address: 'Hernesaarenranta 4, 00150 Helsinki', access: 'Paid', priceNote: '€29 for a two-hour public sauna visit, including towel and basic toiletries', freeTip: 'Children under 10 may enter free with a paying guardian if sharing a locker.', familyFriendly: true, indoor: true, allYear: true, tags: ['Design sauna', 'Smoke sauna', 'Sea swimming'],
    blurb: 'The polished first-timer sauna: striking timber architecture, mixed public saunas, towels included and a direct dip into the Baltic.',
    description: ['Löyly combines a traditional smoke sauna, wood-fired sauna, year-round sea swimming and one of Helsinki\'s best-known modern waterfront buildings.', 'Public sessions are mixed and swimming costumes are required. Separate changing and shower rooms make it less daunting for a first public-sauna visit.'],
    highlights: ['Two-hour booking with towel included', 'Mixed sauna, swimsuit required', 'Year-round sea access when conditions allow'], howToVisit: 'Reserve online in advance, especially at weekends. Bring swimwear and suitable wet-area footwear.', goodToKnow: 'The current public-sauna price is €29. Swimming depends on weather and safety conditions, and cancellations have a 24-hour policy.',
    transport: [{ mode: 'Tram or bus', advice: 'Use HSL towards Hernesaari, then walk along the waterfront.' }, { mode: 'Bike', advice: 'The southern coastal cycling route reaches Löyly easily.' }], website: 'https://www.loylyhelsinki.fi/en/public-sauna', sourceName: 'Löyly', lastChecked: checked,
  },
  {
    slug: 'allas-pool', name: 'Allas Pool', category: 'Public saunas', area: 'Katajanokka', address: 'Katajanokanlaituri 2 A, 00160 Helsinki', access: 'Paid', priceNote: 'Weekday and weekend swimming-and-sauna tickets; advance booking recommended', freeTip: 'Children aged 0-2 enter free. Serial tickets and memberships reduce repeat-visit costs.', familyFriendly: true, indoor: false, allYear: true, tags: ['Warm pool', 'Sea pool', 'Central sauna'],
    blurb: 'Warm water, seawater and five saunas right beside Market Square, open early enough to turn a normal weekday into something far more Finnish.',
    description: ['Allas Pool has heated and seawater pools plus five saunas overlooking the harbour. The warm pool stays at about 27 degrees, and summer adds a separate children\'s pool.', 'Single tickets last three hours. Prices are lower on weekdays and Friday mornings than from Friday afternoon through Sunday.'],
    highlights: ['Pools and saunas open all year', 'Central harbour location', 'Memberships and serial tickets available'], howToVisit: 'Buy a timed ticket online if you need guaranteed entry, especially on weekends. Bring a swimsuit and towel or rent a towel separately.', goodToKnow: 'Towels are not included. Everyone entering the pool deck and sauna area needs a valid ticket.',
    transport: [{ mode: 'Tram', advice: 'Katajanokka trams stop close to the harbour.' }, { mode: 'Walk', advice: 'A few minutes from Market Square.' }], website: 'https://www.allaspool.fi/en/pools-and-saunas/', sourceName: 'Allas Pool', lastChecked: checked,
  },
  {
    slug: 'kotiharju-sauna', name: 'Kotiharju Sauna', category: 'Public saunas', area: 'Kallio', address: 'Harjutorinkatu 1, 00500 Helsinki', access: 'Paid', priceNote: '€16 standard public-sauna admission, with reduced rates available', freeTip: 'Five-visit, ten-visit and annual loyalty options reduce the price for regulars.', familyFriendly: false, indoor: true, allYear: true, tags: ['Traditional sauna', 'Wood-heated', 'Neighbourhood classic'],
    blurb: 'The classic neighbourhood sauna, steaming in Kallio since 1928 with separate public sides and cooling-off on the street outside.',
    description: ['Kotiharju is Helsinki\'s last traditional wood-heated block sauna of its kind. It is not a spa makeover; the big stoves, separate sides and pavement cool-down are the point.', 'Towels can be rented, and traditional washing service is available on listed days. Reduced admission applies to several groups.'],
    highlights: ['Operating since 1928', 'Separate public sauna sides', 'Multi-visit and loyalty cards available'], howToVisit: 'Turn up during public opening hours. Bring a towel or rent one, and ask staff if you are unsure about changing-room or sauna etiquette.', goodToKnow: 'The official site lists Tuesday to Sunday opening, with bathing continuing later than the front desk. Check before travelling.',
    transport: [{ mode: 'Metro', advice: 'Sörnäinen metro is a short walk away.' }, { mode: 'Tram', advice: 'Trams along Helsinginkatu and Hämeentie stop nearby.' }], website: 'https://www.kotiharjunsauna.fi/en', sourceName: 'Kotiharju Sauna', lastChecked: checked,
  },
  {
    slug: 'lonna-sauna', name: 'Lonna Sauna', category: 'Public saunas', area: 'Lonna island', address: 'Lonna, 00190 Helsinki', access: 'Paid', priceNote: 'Paid two-hour seasonal sauna plus a separate ferry ticket', freeTip: 'The island itself is free to enter; book and pay only if you want the sauna.', familyFriendly: false, indoor: true, allYear: false, tags: ['Island sauna', 'Seasonal', 'Mixed sauna'],
    blurb: 'A calm wood-heated island sauna ten minutes from Market Square, built for slow löyly and sea views rather than rushing back to town.',
    description: ['Lonna\'s two loft saunas are heated with large wood stoves and look over the archipelago. Sessions are mixed, swimsuits are worn and the two-hour booking includes time on the terrace.', 'It is a seasonal trip, normally from late spring into September. Ferry and sauna are separate purchases.'],
    highlights: ['Two wood-heated loft saunas', 'Mixed sessions with swimsuits', 'Short seasonal ferry from Market Square'], howToVisit: 'Book the sauna before travelling, then buy the correct seasonal ferry ticket. Arrive early enough that a delayed boat does not eat into the session.', goodToKnow: 'Lonna asks visitors to keep the sauna peaceful. The official booking calendar controls the actual season and available times.',
    transport: [{ mode: 'Waterbus', advice: 'Seasonal FRS boats leave Market Square and reach Lonna in about ten minutes.' }], website: 'https://www.lonna.fi/en/services/sauna/', sourceName: 'Lonna and City of Helsinki Service Map', lastChecked: checked,
  },
  {
    slug: 'oodi', name: 'Oodi Central Library', category: 'Libraries & culture', area: 'Kluuvi', address: 'Töölönlahdenkatu 4, 00100 Helsinki', access: 'Free', priceNote: 'Entry, Wi-Fi, reading areas and many services are free', freeTip: 'Residents of Finland can get a free first Helmet library card and reserve many rooms, studios and devices.', familyFriendly: true, indoor: true, allYear: true, tags: ['Library', 'Studios', 'Makerspace'],
    blurb: 'Far more than a library: workspaces, children\'s areas, game rooms, music studios, sewing machines, 3D printers and a balcony over the city.',
    description: ['Oodi is Helsinki\'s central public living room. Anyone can enter, use Wi-Fi, read, work or spend time there. A Helmet library card unlocks borrowing and bookable services.', 'The second floor contains studios, game rooms, work spaces and the Urban Workshop. Many are free to reserve through Varaamo, though users pay for consumed materials such as printing paper.'],
    highlights: ['Always free to enter', 'Free first Helmet library card for Finland residents', 'Bookable studios, work rooms and creative equipment'], howToVisit: 'Walk in for the public spaces. To borrow or reserve equipment, apply online for a Helmet card, collect it at any Helmet library with photo ID, then use Varaamo.', goodToKnow: 'Some rooms and equipment require both a library card and advance reservation. The studios also require valid ID when you arrive.',
    transport: [{ mode: 'Train or metro', advice: 'A short, accessible walk from Central Railway Station.' }, { mode: 'Tram', advice: 'Lasipalatsi and Kansallismuseo stops are nearby.' }], website: 'https://oodihelsinki.fi/en/oodi-in-plain-english/', sourceName: 'Oodi and Helmet Libraries', lastChecked: checked,
  },
  {
    slug: 'helsinki-cultural-centres', name: 'Helsinki cultural centres', category: 'Libraries & culture', area: 'Across Helsinki', address: 'Caisa, Kanneltalo, Malmitalo, Maunula House, Stoa, Vuotalo and others', access: 'Free option', priceNote: 'Galleries are free; events range from free to low-cost paid tickets', freeTip: 'Cultural-centre galleries are free, and many events need no registration.', familyFriendly: true, indoor: true, allYear: true, tags: ['Free galleries', 'Local events', 'Neighbourhood culture'],
    blurb: 'The easiest way to find good, low-cost culture outside the centre, with exhibitions, gigs, dance, films and family events in local neighbourhood hubs.',
    description: ['Helsinki operates a network of cultural centres including Caisa, Kanneltalo, Malmitalo, Maunula House, Stoa and Vuotalo. Many share a building with a library, café or adult-education centre.', 'The gallery exhibitions are free, while performances range from free community events to affordable ticketed theatre and concerts. Caisa has a particular focus on a diverse and international Helsinki.'],
    highlights: ['Gallery exhibitions are free', 'Many no-registration events', 'Centres across the city rather than only downtown'], howToVisit: 'Find the centre closest to you, then filter the City of Helsinki event calendar by venue and language. Paid tickets are normally sold through Lippu.fi or the venue.', goodToKnow: 'Not every event is in English, but music, exhibitions and many family activities do not depend on fluent Finnish.',
    transport: [{ mode: 'Metro, train or bus', advice: 'The network is built around neighbourhood centres such as Malmi, Itäkeskus, Vuosaari and Kannelmäki.' }], website: 'https://www.hel.fi/en/culture-and-leisure/free-time-activities-in-helsinki-tips-for-newcomers', sourceName: 'City of Helsinki', lastChecked: checked,
  },
  {
    slug: 'cable-factory', name: 'Cable Factory', category: 'Libraries & culture', area: 'Ruoholahti', address: 'Tallberginkatu 1, 00180 Helsinki', access: 'Free option', priceNote: 'Public areas and many gallery events are free; museums and performances charge separately', freeTip: 'Browse the event calendar for free gallery exhibitions and open-studio events.', familyFriendly: true, indoor: true, allYear: true, tags: ['Arts centre', 'Museums', 'Dance House'],
    blurb: 'A former industrial complex turned into a maze of museums, galleries, dance spaces, studios, workshops and events.',
    description: ['Kaapelitehdas is Finland\'s largest cultural centre, home to the Finnish Museum of Photography, Theatre Museum, Hotel and Restaurant Museum, Dance House Helsinki and a large creative community.', 'You can enter the shared spaces and many galleries free. Individual museums and performances have their own tickets, while events such as Night of the Arts open much more of the building.'],
    highlights: ['Many free gallery exhibitions', 'Three museums in one complex', 'Major open-house events'], howToVisit: 'Check the event calendar first, because the best free experiences are often tied to specific exhibitions or open-house days.', goodToKnow: 'The building is large and addresses can point to different staircases. Give yourself time to find the right entrance.',
    transport: [{ mode: 'Metro', advice: 'Ruoholahti metro is a short walk away.' }, { mode: 'Tram', advice: 'Trams and buses around Ruoholahti connect from the centre.' }], website: 'https://www.kaapelitehdas.fi/en/', sourceName: 'Kaapelitehdas', lastChecked: checked,
  },
  {
    slug: 'annantalo', name: 'Annantalo', category: 'Libraries & culture', area: 'Kamppi', address: 'Annankatu 30, 00100 Helsinki', access: 'Free option', priceNote: 'Exhibitions and many events are free; longer art courses are paid', freeTip: 'Free studentships can be requested when Annantalo\'s own course fee is a barrier.', familyFriendly: true, indoor: true, allYear: true, tags: ['Children\'s culture', 'Art courses', 'Free studentships'],
    blurb: 'Helsinki\'s children\'s arts centre, where families can see exhibitions and performances or join longer creative courses.',
    description: ['Annantalo is dedicated to art and culture for children and young people. Its programme includes exhibitions, performances, workshops, school activities and term-long courses.', 'The centre wants cost not to block a child\'s own course participation. Families can apply for a free studentship on financial and social grounds when places remain.'],
    highlights: ['Built for children and young people', 'Free and paid programme', 'Free-studentship application for eligible own courses'], howToVisit: 'Browse the public programme for drop-in events. For a course, use the enrolment link on the course page and apply separately for a free studentship if needed.', goodToKnow: 'Free studentships do not cover courses run by outside partners. Course enrolment normally requires online banking credentials.',
    transport: [{ mode: 'Metro', advice: 'Kamppi metro and bus terminal are close.' }, { mode: 'Tram', advice: 'Central stops on Fredrikinkatu and Mannerheimintie are within walking distance.' }], website: 'https://www.annantalo.fi/en/course-practices', sourceName: 'Annantalo, City of Helsinki', lastChecked: checked,
  },
]

export const exploreFreeDates = [
  { date: '28 Aug 2026', place: 'HAM and Sinebrychoff', detail: 'HAM is free 11:00-19:00. Sinebrychoff is free 15:00-18:00.' },
  { date: '4 Sep 2026', place: 'Kiasma', detail: 'First-Friday free admission, 10:00-20:00.' },
  { date: '25 Sep 2026', place: 'HAM and Sinebrychoff', detail: 'The monthly last-Friday free sessions.' },
  { date: '29 Sep 2026', place: 'Architecture & Design Museum', detail: 'Last-Tuesday free evening, 16:00-20:00.' },
  { date: '2 Oct 2026', place: 'Kiasma', detail: 'First-Friday free admission.' },
  { date: '5 Oct 2026', place: 'Korkeasaari Zoo', detail: 'Free Monday, 10:00-16:00. No advance booking.' },
  { date: '30 Oct 2026', place: 'HAM and Sinebrychoff', detail: 'The monthly last-Friday free sessions.' },
  { date: '2 Nov 2026', place: 'Korkeasaari Zoo', detail: 'Free Monday, 10:00-16:00. No advance booking.' },
  { date: '6 Nov 2026', place: 'Ateneum and Kiasma', detail: 'Ateneum free all day and Kiasma\'s first-Friday free admission.' },
  { date: '27 Nov 2026', place: 'HAM and Sinebrychoff', detail: 'The monthly last-Friday free sessions.' },
  { date: '7 Dec 2026', place: 'Korkeasaari Zoo', detail: 'Free Monday, 10:00-16:00. No advance booking.' },
  { date: '11 Dec 2026', place: 'Ateneum', detail: 'Free admission all day.' },
] as const

export const exploreMemberships = [
  {
    name: 'Helmet library card', cost: 'First card is free', bestFor: 'Anyone living in Finland who wants books, e-resources, rooms, studios or equipment',
    steps: ['Fill in the library application online or at a Helmet library.', 'Visit any Helmet library with valid photo ID.', 'Collect your card and choose a PIN.', 'Use the same card across Helsinki, Espoo, Vantaa and Kauniainen.'],
    note: 'Register separately at a staffed desk if you want to use self-service libraries outside staffed hours.', website: 'https://helmet-tukisivusto.hel.fi/en/recommendations/autumn-has-arrived-in-the-library/',
  },
  {
    name: 'Museum Card', cost: '€86 new or €79 to renew a valid card in 2026', bestFor: 'Residents who expect to visit several museums during the year',
    steps: ['Buy online, in the Museum Card app or at a participating museum.', 'Register the card to your details.', 'Your 12 months begin with the first paid museum visit, not the purchase date.', 'Use the app or physical card for repeat entry at more than 360 museums nationwide.'],
    note: 'There is no separate student, child or pensioner price. Many museums already admit under-18s free.', website: 'https://museot.fi/faq',
  },
  {
    name: 'Helsinki Card', cost: 'Choose a timed visitor card', bestFor: 'A concentrated sightseeing weekend rather than ordinary resident life',
    steps: ['Choose the standard, CITY or REGION version.', 'Check the current attraction list before paying.', 'Add public transport by choosing CITY or REGION.', 'Activate and use it within the purchased validity period.'],
    note: 'It bundles 50-plus benefits, but compare the price with what you will genuinely visit. It is not automatically the best deal for a relaxed weekend.', website: 'https://www.helsinkicard.com/',
  },
  {
    name: 'Culture Kids', cost: 'Free', bestFor: 'Children living in Helsinki who were born in 2020 or later',
    steps: ['Open the Culture Kids registration service.', 'Enter the child\'s Helsinki home municipality and birth year.', 'Complete the child\'s profile.', 'Choose from invitations sent by email twice a year.'],
    note: 'The child and an accompanying adult receive at least two age-appropriate cultural invitations each year until school starts.', website: 'https://kummilapset.hel.fi/en/',
  },
  {
    name: 'Playground clubs', cost: 'Free', bestFor: 'Helsinki residents aged 2-4 who are cared for at home',
    steps: ['Find the nearest city playground offering a club.', 'Apply through the Edlevo e-service.', 'Wait for the leading playground instructor to contact your family.', 'Attend the Finnish-language club two or three days per week.'],
    note: 'Open family playground activities do not usually need this application. The club is a separate, regular group.', website: 'https://www.hel.fi/en/childhood-and-education/playgrounds-and-family-houses/playground-clubs',
  },
  {
    name: 'Kaikukortti', cost: 'Free if eligible', bestFor: 'People over 16 in a tight financial situation who already use an issuing social or healthcare service',
    steps: ['Check whether your home municipality belongs to the Kaikukortti network.', 'Ask the participating social or healthcare unit where you are already a client.', 'The unit decides whether it can issue the personal card.', 'Use it at participating and pop-up venues, checking each venue\'s rules.'],
    note: 'Helsinki is not currently listed as an issuing locality. However, several Helsinki museums accept cards issued through participating areas such as Espoo.', website: 'https://kaikukortti.fi/en/kaikukortti-card/localities/',
  },
] as const

export function getExploreListing(slug: string) {
  return exploreListings.find((listing) => listing.slug === slug)
}

export type DayTrip = {
  id: string
  group: 'Still in Helsinki' | 'Easy full day' | 'Worth the longer ride'
  name: string
  location: string
  time: string
  transport: string
  carFree: 'Easy without a car' | 'Possible without a car' | 'Check connections carefully'
  season: string
  mood: string
  summary: string
  plan: string[]
  realityCheck: string
  officialUrl: string
  officialLabel: string
  internalUrl?: string
}

export const dayTrips: DayTrip[] = [
  {
    id: 'lammassaari-and-the-old-town-rapids', group: 'Still in Helsinki', name: 'Lammassaari and Vanhankaupunginkoski', location: 'Arabianranta and Viikki, Helsinki', time: '2 to 4 hours', transport: 'HSL tram or bus, then a short walk', carFree: 'Easy without a car', season: 'All year, best in spring and autumn', mood: 'Boardwalks, birds and a very quick escape from traffic',
    summary: 'This is the one for a free afternoon when you want proper reeds, open sky and birds without organising a full expedition. The accessible boardwalk runs from Pornaistenniemi to Lammassaari, with viewing platforms along the way. Add the old rapids and the Arabia waterfront if you want to stretch it into a longer wander.',
    plan: ['Start near Vanhankaupunginkoski and look around the old industrial river mouth.', 'Follow the 1.2-kilometre boardwalk to Lammassaari and stop at the viewing platforms.', 'Return the same way, then continue towards Arabia for food or a tram home.'],
    realityCheck: 'The round trip on the boardwalk is about 2.4 kilometres. It is accessible overall, but the official page notes one short steep section and some uneven surfaces.', officialUrl: 'https://www.hel.fi/en/culture-and-leisure/outdoor-activities-parks-and-nature-destinations/outdoor-recreation-areas/pornaistenniemi-and-lammassaari/lammassaari-accessible-boardwalk-24-km', officialLabel: 'City of Helsinki route information',
  },
  {
    id: 'seurasaari', group: 'Still in Helsinki', name: 'Seurasaari', location: 'Meilahti, Helsinki', time: '3 to 5 hours', transport: 'HSL bus, then walk over the bridge', carFree: 'Easy without a car', season: 'Island all year, museum mid-May to mid-September', mood: 'Old trees, wooden buildings and a slower Sunday',
    summary: 'Seurasaari somehow feels further away than it is. The island itself is free and open all year, with a roughly 3.1-kilometre loop, rocky shorelines, forest and old wooden buildings scattered through the landscape. Pay for the open-air museum in season if you want to go inside the historic buildings, or simply bring a snack and walk the island for free.',
    plan: ['Cross the white bridge and take the full loop rather than turning back at the first museum buildings.', 'Stop at the Festival Ground or shoreline for a picnic.', 'Add Tamminiemi or the Urho Kekkonen Museum nearby if you want more Finnish history.'],
    realityCheck: 'The island is wonderfully low-effort, but café and kiosk hours are seasonal. If you plan to use the public barbecue place, check the forest fire warning first.', officialUrl: 'https://www.hel.fi/en/culture-and-leisure/outdoor-activities-parks-and-nature-destinations/outdoor-recreation-areas/seurasaari', officialLabel: 'City of Helsinki Seurasaari guide', internalUrl: '/explore/seurasaari-open-air-museum/',
  },
  {
    id: 'pick-a-helsinki-island', group: 'Still in Helsinki', name: 'Pick a Helsinki island', location: 'Helsinki archipelago', time: 'Half day or a lazy full day', transport: 'Seasonal ferry or waterbus', carFree: 'Easy without a car', season: 'Mainly late spring to early autumn', mood: 'Sea air, picnic rocks and a tiny holiday feeling',
    summary: 'Pihlajasaari is the beach-and-picnic choice. Vallisaari brings military history, wild nature and big views. Lonna is compact and easy to pair with lunch or a sauna. The trick is to choose one island properly rather than spending half the day bouncing between piers.',
    plan: ['Check the return timetable before buying the outward ticket.', 'Pack water, a layer for the wind and something to eat even if a café is listed.', 'Give yourself one slow loop, then sit somewhere with a sea view instead of racing for every marker on the map.'],
    realityCheck: 'The islands may be free to enter, but the boat normally is not. Routes, cafés, toilets and accessibility are seasonal, and the last return boat is not interested in your excuses.', officialUrl: 'https://www.hel.fi/en/culture-and-leisure/outdoor-activities-parks-and-nature-destinations/islands', officialLabel: 'City of Helsinki island information', internalUrl: '/explore/?category=Islands%20%26%20nature#browse',
  },
  {
    id: 'nuuksio-and-haltia', group: 'Easy full day', name: 'Nuuksio and Haltia', location: 'Espoo', time: '6 to 9 hours', transport: 'Train to Espoon keskus, then bus 245 or the current seasonal variant', carFree: 'Easy without a car', season: 'All year with the right clothing', mood: 'Lakes, forest and an actual national park on an HSL ticket',
    summary: 'Nuuksio is the easiest answer when somebody says they moved to Finland for nature but has mostly seen the inside of a tram. Start at Haltia if you are new to Finnish trails. You get toilets, advice and a clear arrival point, then can choose a short lake walk or a longer route based on the weather and the legs in your group.',
    plan: ['Use the HSL Journey Planner for Finnish Nature Centre Haltia, not simply “Nuuksio”.', 'Start with Haltia and choose a marked route that fits the daylight you actually have.', 'Carry your own water and snack, then leave a generous buffer for the bus home.'],
    realityCheck: 'Nuuksio is a large area, not one pin on a map. Bus numbers and seasonal endpoints can change, so plan to a specific entrance and check the final return before walking away from it.', officialUrl: 'https://www.visitespoo.fi/en/visitor/day-trips/6x-day-trips-nuuksio-national-park-haltia-recreational-area', officialLabel: 'Visit Espoo day-trip routes', internalUrl: '/explore/nuuksio-and-haltia/',
  },
  {
    id: 'sipoonkorpi-via-kuusijarvi', group: 'Easy full day', name: 'Sipoonkorpi via Kuusijärvi', location: 'Vantaa and Sipoo', time: '5 to 8 hours', transport: 'Train to Tikkurila, then HSL bus', carFree: 'Easy without a car', season: 'All year, with muddy shoulders in spring and autumn', mood: 'Forest first, then lake and sauna if the mood takes you',
    summary: 'Kuusijärvi is a forgiving gateway into Sipoonkorpi. You can keep the day simple with the lake, café and paid sauna, or follow the marked route into the national park for something that feels much wilder. It works particularly well for mixed groups because not everybody has to commit to the same level of hike.',
    plan: ['Travel to Kuusijärvi and decide whether the day is a lake visit or a proper trail day.', 'Follow the orange-diamond route towards Bisajärvi if you are heading into the national park.', 'Return for food, a swim or a sauna, then take the bus back towards Tikkurila.'],
    realityCheck: 'Sipoonkorpi has several entrances and some involve longer road walks. Kuusijärvi is the easiest first-timer base, but check trail conditions, daylight and the HSL return connection.', officialUrl: 'https://www.luontoon.fi/en/destinations/sipoonkorpi-national-park/directions/public-transport', officialLabel: 'Luontoon public transport directions', internalUrl: '/explore/kuusijarvi/',
  },
  {
    id: 'porvoo', group: 'Easy full day', name: 'Porvoo', location: 'Eastern Uusimaa', time: '6 to 9 hours', transport: 'Frequent bus from Kamppi, roughly 50 to 60 minutes', carFree: 'Easy without a car', season: 'All year, especially good in autumn and around Christmas', mood: 'Cobblestones, red river warehouses and a lunch worth planning',
    summary: 'Porvoo is the classic for a reason, but it is better when you move beyond one photograph of the red warehouses. Walk the Old Town before it gets busy, climb towards the cathedral, follow the river and leave room for a proper lunch or café stop. It is compact enough to feel relaxed and different enough to feel like you actually went somewhere.',
    plan: ['Take a morning bus from Kamppi and begin in the Old Town.', 'Walk to the cathedral, through the lanes and down towards the riverside warehouses.', 'Cross the river for the wider view, then eat before a final wander through the newer centre.'],
    realityCheck: 'The Old Town has cobbles, slopes and seasonal opening hours. In summer a boat from Helsinki is beautiful but takes about three hours each way, so it is an experience rather than the efficient option.', officialUrl: 'https://www.visitporvoo.fi/en/arriving/', officialLabel: 'Visit Porvoo arrival information',
  },
  {
    id: 'lake-tuusula', group: 'Easy full day', name: 'Lake Tuusula and Ainola', location: 'Järvenpää and Tuusula', time: '6 to 9 hours', transport: 'D or R commuter train to Järvenpää, or R train to Ainola', carFree: 'Possible without a car', season: 'Best from late spring to early autumn', mood: 'Finnish art, music, lakeside roads and quieter cultural history',
    summary: 'The Tuusula lakeshore was home to an extraordinary cluster of Finnish artists and writers. Ainola, the home of Jean and Aino Sibelius, is the headline, but the wider route makes the day: old villas, gardens, lake views and the feeling of seeing the private landscape behind some very public Finnish names.',
    plan: ['Take the train to Ainola for the shortest walk to the museum, or Järvenpää for more services.', 'Visit one or two cultural homes rather than trying to collect all of them.', 'Use a bike, summer local service or a carefully planned walk to connect the lakeside stops.'],
    realityCheck: 'The train part is easy. Joining several lakeside museums without a bike or seasonal bus takes planning, and many cultural homes have limited seasons and opening days.', officialUrl: 'https://www.visittuusulanjarvi.fi/en/travel-info/', officialLabel: 'Visit Lake Tuusula travel information',
  },
  {
    id: 'fiskars-or-tammisaari', group: 'Worth the longer ride', name: 'Fiskars Village or Tammisaari', location: 'Raseborg', time: 'Full day or one night', transport: 'Train to Karjaa, then local bus or connecting train', carFree: 'Check connections carefully', season: 'Strongest from May to September, still lovely on event weekends', mood: 'Design village or small coastal town, depending which way you turn',
    summary: 'Fiskars is the creative ironworks village with workshops, design, exhibitions and green paths. Tammisaari is the coastal option, with a wooden old town, harbour and an easy small-town rhythm. Both begin with the train to Karjaa, but trying to squeeze both into one car-free day can turn a lovely outing into a transport spreadsheet.',
    plan: ['Choose Fiskars or Tammisaari as the main event.', 'For Fiskars, change at Karjaa to the current Bosse local bus. For Tammisaari, connect to the Hanko train.', 'Check the last connection home before deciding on one final drink, shop or waterfront loop.'],
    realityCheck: 'Raseborg is a municipality, not a station. Search using Karjaa, Fiskars or Tammisaari. Local connections are much thinner than Helsinki transport, particularly outside summer.', officialUrl: 'https://www.visitraseborg.com/en/plan-your-trip/find-your-way-to-raseborg/', officialLabel: 'Visit Raseborg transport guide',
  },
  {
    id: 'hanko', group: 'Worth the longer ride', name: 'Hanko', location: 'Western Uusimaa', time: 'Long day or weekend', transport: 'VR train, or seasonal direct bus from Kamppi', carFree: 'Possible without a car', season: 'Summer for beach life, quieter coastal walks in other seasons', mood: 'Big sea, villas, beaches and Finland’s southern edge',
    summary: 'Hanko feels properly coastal rather than merely beside the water. The station is central, the town is walkable and the villas and beaches begin almost immediately. In summer it is lively and polished. Outside summer it becomes a much quieter sea-and-wind trip, which can be exactly the point.',
    plan: ['Walk from the station through the villa district towards the shore.', 'Choose the town beaches and waterfront for an easy day, or allow more time for the Tulliniemi direction.', 'Eat before the evening journey home and keep the return ticket somewhere sensible.'],
    realityCheck: 'Some restaurants, rentals and visitor services are seasonal. Railway works can also replace part of the Helsinki route with buses, so check VR rather than relying on an old screenshot.', officialUrl: 'https://visithanko.fi/en/teemasivu/arrival-to-hanko/', officialLabel: 'Visit Hanko arrival information',
  },
]

export const dayTripGroups = ['Still in Helsinki', 'Easy full day', 'Worth the longer ride'] as const

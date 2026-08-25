import type { EditorialGuide } from './editorial-guide'
import { additionalAreaGuides } from './additional-areas'

const coreAreaGuides: EditorialGuide[] = [
  {
    slug: 'kallio-and-hakaniemi',
    number: '01',
    label: 'Kallio & Hakaniemi',
    tags: ['Food', 'Cafés', 'Markets', 'Nightlife', 'Metro'],
    title: 'Kallio and Hakaniemi: good food, old Helsinki and plenty of personality',
    summary: 'A properly useful wander through market breakfasts, neighbourhood bakeries, parks, bars and the streets where Helsinki feels least polished and most alive.',
    goodFor: 'New arrivals who like walkable neighbourhoods, independent food, casual evenings, vintage shops and having both the metro and trams close at hand.',
    intro: [
      'Kallio gets described as Helsinki’s cool neighbourhood so often that you could be forgiven for expecting one enormous natural-wine bar. It is much more mixed than that. Students, families, people who have lived here for decades and somebody carrying a vintage lamp onto a tram all share the same few hilly streets.',
      'Hakaniemi sits beside it with the market square, the handsome market hall and excellent transport. The boundaries blur quickly, which is useful rather than confusing. Treat the two as one easy day out and you can eat very well without turning the whole thing into a restaurant reservation spreadsheet.',
    ],
    keyFacts: [
      'Hakaniemi is one metro stop from the Central Railway Station and several trams run through the area.',
      'The neighbourhood is compact but surprisingly hilly, so comfortable shoes beat optimistic footwear.',
      'Hakaniemi Market Hall is the best first stop when you want Finnish ingredients, lunch and useful food gifts under one roof.',
      'Many of Kallio’s smaller restaurants and wine bars fill quickly in the evening. Book the place you care about and leave the rest of the day loose.',
    ],
    sections: [
      {
        title: 'Start in Hakaniemi, while the market is awake',
        paragraphs: [
          'Begin at Hakaniemi Market Square and go into the restored market hall before drifting uphill. The hall is useful rather than ornamental: fish, meat, bread, coffee, lunch counters, speciality groceries and small local sellers all live under the same roof. It is a good place to learn what Finnish ingredients look like before trying to recognise them in a supermarket.',
          'If the outdoor market is running, have a look before leaving the square. On the first Sunday of the month, the farmers’ market brings in producers and makers. Schedules are seasonal, so check the hall and market pages before building your entire morning around one stall.',
        ],
      },
      {
        title: 'Good eats without making it a grand occasion',
        paragraphs: [
          'Way Bakery beside Karhupuisto is a dependable place for sourdough, pastries, coffee and a slower breakfast or lunch. Sörkan Rinkula is the casual bagel stop when you want something quick, and Lazy Fox on Helsinginkatu handles the full all-day-breakfast mood with a much bigger plate.',
          'For an evening, Harju 8 and Maukku are the sort of neighbourhood restaurants people cross town for. Both lean lively rather than hushed, and both are better treated as an actual plan than a hopeful walk-in on a busy night. Prices and menus move with the season, so use these as suggestions, not promises about one particular dish.',
        ],
        bullets: [
          'Budget move: eat at a market counter, grab a bagel or use the weekday lunch window.',
          'Coffee and pastry: Way Bakery around the corner from Karhupuisto.',
          'Big breakfast: Lazy Fox Kallio on Helsinginkatu.',
          'Dinner and wine: book Harju 8 or Maukku, then let the rest of the evening happen nearby.',
        ],
      },
      {
        title: 'What to do between meals',
        paragraphs: [
          'Walk through Karhupuisto, browse the vintage and second-hand shops around Helsinginkatu and Hämeentie, then climb to Kallio Church for one of the neighbourhood’s strongest landmarks. Kallio Library is a handsome, genuinely useful local stop and a good reminder that libraries here are community spaces, not silent book warehouses.',
          'If you want a longer walk, continue through Alppila towards Linnanmäki or head east towards Teurastamo and the waterfront around Kalasatama. The area changes quickly block by block, which is half the point. You do not need a checklist for every street.',
        ],
      },
      {
        title: 'An easy half-day that actually flows',
        paragraphs: [
          'Take the metro to Hakaniemi, browse the market hall and have coffee or an early lunch. Walk through Karhupuisto, continue past Kallio Library and Kallio Church, then follow Helsinginkatu towards Harju. Finish with a bagel, an all-day breakfast or a booked dinner depending on the hour.',
          'For a calmer version, do it on a weekday morning. For more buzz, start later on Friday or Saturday and expect queues. The last metro is not the only option home because trams and night buses cover the area well, but always check the live HSL route before ordering the final round.',
        ],
      },
      {
        title: 'Could you live here?',
        paragraphs: [
          'Kallio and Hakaniemi suit people who value public transport, walkability and having everyday life outside the front door. Small flats are common, street noise varies sharply and the liveliest corner is not always the best bedroom address. Visit a potential home in the evening as well as during a tidy daytime viewing.',
          'The reward is convenience. Groceries, libraries, restaurants, gyms, parks and connections are close, and it is easier than in many areas to build a routine without a car. If you want more space, silence and forest at the doorstep, keep looking east or north and visit Kallio when the mood strikes.',
        ],
      },
    ],
    insiderTips: [
      'Do not judge the entire area from the Sörnäinen metro entrance. Walk three blocks before reaching a conclusion.',
      'Hakaniemi Market Hall is far more enjoyable before the late lunch rush.',
      'Karhupuisto is lovely in summer, but take normal city precautions with valuables and late-night plans.',
      'Book the dinner, not the whole day. Kallio works best with room for an unplanned coffee, shop or drink.',
      'If you are viewing a flat, stand outside for ten minutes at the time you would normally go to bed.',
    ],
    resources: [
      { title: 'Kallio neighbourhood guide', description: 'Current local overview of the area, its culture, food and places to visit.', url: 'https://www.myhelsinki.fi/visit/neighbourhoods/kallio-the-authentic-side-of-helsinki/', source: 'MyHelsinki' },
      { title: 'Hakaniemi Market Hall', description: 'Current traders, opening information and market hall news.', url: 'https://hakaniemenkauppahalli.fi/en/', source: 'Hakaniemi Market Hall' },
      { title: 'Way Bakery Kallio', description: 'Official address and current opening hours for the bakery, café and wine bar.', url: 'https://www.waybakery.fi/kallio', source: 'Way Bakery' },
      { title: 'Lazy Fox', description: 'Current details for the Kallio and Kamppi all-day breakfast locations.', url: 'https://lazyfox.fi/', source: 'Lazy Fox' },
      { title: 'HSL Journey Planner', description: 'Live metro, tram, bus, walking and cycling routes.', url: 'https://www.hsl.fi/en/journey-planner', source: 'HSL' },
    ],
  },
  {
    slug: 'punavuori-and-the-design-district',
    number: '02',
    label: 'Punavuori & Design District',
    tags: ['Design', 'Breakfast', 'Restaurants', 'Shops', 'Walkable'],
    title: 'Punavuori and the Design District: small shops, big breakfasts and a very good wander',
    summary: 'A relaxed route through Helsinki design, independent shops, old courtyards, cafés and restaurants for everything from a quick sando to a proper night out.',
    goodFor: 'People who enjoy design, food, second-hand finds, handsome streets and the dangerous combination of a free afternoon and several small shops.',
    intro: [
      'Punavuori is central Helsinki at a more human scale. The streets are full of design shops, galleries, cafés, bars and restaurants, but people also live above all of them, walk their dogs through the parks and queue at the same supermarket after work.',
      'The wider Design District spreads beyond one official neighbourhood, so do not waste time trying to locate an invisible border. Start around Bulevardi and Fredrikinkatu, follow whatever looks interesting south and east, then use food as the reward for covering more ground than planned.',
    ],
    keyFacts: [
      'Punavuori is walkable from Kamppi and the railway station, with trams running along Bulevardi and nearby streets.',
      'Design District Helsinki is a network of shops, galleries, studios, museums, hotels and restaurants rather than a gated attraction.',
      'Weekday lunch is often the most affordable way to try a restaurant that costs considerably more in the evening.',
      'Small shops commonly have shorter Sunday and Monday hours, so check before making a special trip.',
    ],
    sections: [
      {
        title: 'Get your bearings on Bulevardi',
        paragraphs: [
          'Bulevardi gives you an easy spine through the area. Ekberg has been serving Helsinki since the nineteenth century and remains a solid choice when you want the classic café version of the city. From there, turn into Fredrikinkatu, Iso Roobertinkatu and the smaller side streets rather than marching straight to the sea.',
          'Old Church Park is the useful green pause near the top of the area. Hietalahti Market Hall and the flea-market square anchor the western edge, while the Architecture and Design Museum and small galleries pull you east. Everything is close enough that a wrong turn usually becomes a decent shop.',
        ],
      },
      {
        title: 'Good eats for different kinds of day',
        paragraphs: [
          'Lazy Fox on Albertinkatu is the unfussy all-day-breakfast option when your body wants pancakes or a proper cooked breakfast at an unreasonable hour. Onigiri Musubi on Pursimiehenkatu is tiny and ideal for a quick Japanese rice-ball lunch. Café Bar No 9 is a long-running, casual Helsinki fallback when a group cannot agree on anything grand.',
          'For a fuller evening, the area has more good restaurants than one guide should pretend to rank. Natura works with seasonal Finnish ingredients, Yes Yes Yes is bright, vegetarian and built for sharing, and the streets around Iso Roobertinkatu are full of places where booking ahead is sensible. Choose by mood and budget rather than chasing a single definitive “best”.',
        ],
        bullets: [
          'Breakfast: Lazy Fox or the more traditional café counter at Ekberg.',
          'Quick lunch: Onigiri Musubi, a weekday lunch menu or something from Hietalahti Market Hall.',
          'Easy group option: Café Bar No 9, especially when everyone wants a different sort of plate.',
          'Dinner plan: Natura for seasonal cooking or Yes Yes Yes for vegetarian sharing plates.',
        ],
      },
      {
        title: 'Design without buying an entire new personality',
        paragraphs: [
          'Use the official Design District map to pick a few studios, second-hand shops or galleries that genuinely interest you. The point is not collecting brand names. It is seeing how Finnish design moves between useful everyday objects, serious craft and the occasional chair that costs more than your first car.',
          'The Architecture and Design Museum is the obvious larger stop. Smaller galleries and shops make the area feel alive, but their exhibitions and hours change. Check the current programme, say hello when you enter and ask before photographing work in a small space.',
        ],
      },
      {
        title: 'An easy half-day that leaves room for dinner',
        paragraphs: [
          'Start with breakfast near Bulevardi, browse along Fredrikinkatu and detour through Old Church Park. Continue to the museum or Hietalahti, then take a slow loop through Iso Roobertinkatu and Pursimiehenkatu. Stop when you find somewhere that suits the actual weather and hunger level.',
          'If the sun is behaving, keep walking south through Eira towards the waterfront. If it is not, stay among the shops, museums and cafés. Helsinki’s weather is allowed to edit the itinerary without the day being considered a failure.',
        ],
      },
      {
        title: 'Could you live here?',
        paragraphs: [
          'Punavuori is excellent for a central, car-light life. Restaurants, culture, waterfront walks and most of the city centre are close. The trade-off is price, and charming older flats can bring compact kitchens, unusual layouts, limited lifts and Saturday-night noise from the street below.',
          'Walk from the potential address to your supermarket, tram stop and normal workplace rather than only admiring the façade. The neighbourhood is lovely, but paying for the postcard makes sense only if you will use what sits outside it.',
        ],
      },
    ],
    insiderTips: [
      'Look at weekday lunch menus before deciding a restaurant is outside your budget.',
      'Do not confuse “Design District” with one short street. Save the official map and wander between a few anchors.',
      'The flea market at Hietalahti is seasonal and weather-dependent. Check before carrying an empty tote bag across town.',
      'Onigiri Musubi is small. Have a backup plan if every seat is taken.',
      'For housing, ask whether the building has a lift and visit the street after the restaurants close.',
    ],
    resources: [
      { title: 'Design District Helsinki', description: 'Official district map and current member shops, studios, galleries, museums and restaurants.', url: 'https://designdistrict.fi/en/', source: 'Design District Helsinki' },
      { title: 'Architecture and Design Museum', description: 'Current exhibitions, tickets, opening hours and visitor information.', url: 'https://admuseo.fi/en/', source: 'Architecture and Design Museum' },
      { title: 'Lazy Fox', description: 'Current menu, hours and details for the Albertinkatu breakfast and bar location.', url: 'https://lazyfox.fi/', source: 'Lazy Fox' },
      { title: 'Onigiri Musubi', description: 'Official menu and current details for the Pursimiehenkatu shop.', url: 'https://www.onigirimusubi.fi/', source: 'Onigiri Musubi' },
      { title: 'HSL Journey Planner', description: 'Live tram, bus, walking and cycling routes around southern Helsinki.', url: 'https://www.hsl.fi/en/journey-planner', source: 'HSL' },
    ],
  },
  {
    slug: 'toolo',
    number: '03',
    label: 'Töölö',
    tags: ['Culture', 'Sea', 'Cafés', 'Sport', 'Families'],
    title: 'Töölö: sea air, strong coffee and a surprising amount to do',
    summary: 'Museums, stadiums, quiet streets, a free tropical greenhouse and one famous red café, all within a tram ride of the centre.',
    goodFor: 'Culture lovers, runners, families, café people and anyone who wants central Helsinki to feel calmer without becoming sleepy.',
    intro: [
      'Töölö is where Helsinki keeps a remarkable amount of culture, sport and shoreline without making the neighbourhood feel like an attraction park. Parliament, concert halls, the Opera, Olympic venues and museums sit beside ordinary residential streets and the daily dog walk.',
      'It is really two adjoining areas, Etu-Töölö closer to Kamppi and Taka-Töölö farther north. You do not need to care about the exact seam. Pick one or two cultural stops, add a walk around the bay or along the sea and let a café provide the rest of the structure.',
    ],
    keyFacts: [
      'Trams and buses serve Töölö well, but there is no metro station in the neighbourhood itself.',
      'The National Museum is closed for renovation and is expected to reopen in 2027. Check the official project update before visiting.',
      'The Winter Garden is free and open year-round, but it has limited hours and closes on Fridays.',
      'Café Regatta is open all year and is busiest when the weather gives everybody the same clever idea.',
    ],
    sections: [
      {
        title: 'Choose the bay or the sea',
        paragraphs: [
          'Töölönlahti is the easy central loop, passing Finlandia Hall, the Opera, old wooden villas and plenty of birdlife. It works for a run, a walk with a pram or a slow lap with too many coffee stops. The Winter Garden sits near the northern end and offers a free warm reset when Helsinki is doing its horizontal-rain routine.',
          'For more sea, head west towards Sibelius Park, Café Regatta and Hietaniemi. The Sibelius Monument is busy for a reason, but the shoreline paths are the better reason to stay. Hietaniemi becomes a proper city beach in summer and a windswept walk at every other time.',
        ],
      },
      {
        title: 'Good eats, from cinnamon buns to cheese boards',
        paragraphs: [
          'Café Regatta is the obvious stop and still worth doing. The little red cottage serves cinnamon buns, coffee and other simple café food, with an outdoor fire when conditions allow. Go early, accept that the inside is genuinely tiny and do not arrive expecting a calm private table at peak time.',
          'Layers is the pastry move, while Rolling Cheese on Museokatu turns cheese, charcuterie and wine into an easy afternoon or evening. Töölö also has old-school neighbourhood restaurants, newer bistros and weekday lunch spots. It rewards choosing one destination and noticing the less-famous places on the walk there.',
        ],
        bullets: [
          'Classic Helsinki stop: cinnamon bun and coffee at Café Regatta.',
          'Pastry mission: check the current selection at Layers.',
          'Slow afternoon: a cheese plate or tasting at Rolling Cheese.',
          'Budget day: bring your own snacks to the Winter Garden and save the restaurant for another visit.',
        ],
      },
      {
        title: 'Culture and sport live on the same streets',
        paragraphs: [
          'The Finnish National Opera and Ballet, Finlandia Hall, Helsinki Music Centre, Kunsthalle Helsinki, the Tram Museum and TAHTO give you options from major performances to a free small museum. Around the Olympic Stadium you also have swimming, ice hockey, football and outdoor exercise.',
          'Do not try to do all of them in a day. Check current exhibitions and performance times, then pair one indoor stop with one outdoor loop. The contrast is what makes Töölö work.',
        ],
      },
      {
        title: 'An easy half-day for almost any season',
        paragraphs: [
          'Start at Oodi or the railway station and walk north along Töölönlahti. Visit the Winter Garden, loop past the Olympic Stadium and continue to Sibelius Park. Finish at Café Regatta, then take a tram back when the wind has made its point.',
          'With children, shorten the route and add the free Tram Museum. In winter, confirm daylight, opening hours and path conditions. In summer, carry swimwear because Hietaniemi has a way of changing a sensible walk into a beach afternoon.',
        ],
      },
      {
        title: 'Could you live here?',
        paragraphs: [
          'Töölö offers central living, good transport, parks, shoreline and strong everyday services. The streets can feel remarkably calm considering how close they are to the centre. Families and people who want culture without nightlife under the window often see the appeal quickly.',
          'The obvious catch is housing cost. Older buildings vary in accessibility, parking is not simple and major event days can change the neighbourhood’s rhythm. Check the exact block, because a quiet courtyard and a stadium-facing street are different versions of Töölö.',
        ],
      },
    ],
    insiderTips: [
      'The Winter Garden has no café, but you may bring your own snack and eat it in the permitted areas.',
      'Café Regatta is much calmer early in the day and does not need a perfect summer sunset to be good.',
      'Use the Tram Museum as a free rainy-day option, particularly with younger children.',
      'Event nights around the Stadium, Ice Hall and Opera can affect transport and restaurant availability.',
      'The bay loop is easy, but the western shoreline adds distance quickly. Check the route before promising tired legs a short walk.',
    ],
    resources: [
      { title: 'Töölö neighbourhood guide', description: 'A current local overview of Töölö’s culture, cafés, parks and sports.', url: 'https://www.myhelsinki.fi/neighborhoods/toolo/', source: 'MyHelsinki' },
      { title: 'The Winter Garden', description: 'Current free-entry opening hours, accessibility and visitor guidance.', url: 'https://www.hel.fi/en/culture-and-leisure/outdoor-activities-parks-and-nature-destinations/parks/the-winter-garden', source: 'City of Helsinki' },
      { title: 'Café Regatta', description: 'Official hours and practical information for the year-round seaside café.', url: 'https://www.caferegatta.fi/in-english', source: 'Café Regatta' },
      { title: 'Rolling Cheese Töölö', description: 'Current shop, wine bar, menu, tasting and accessibility information.', url: 'https://rollingcheese.shop/en/pages/viinibaari-helsinki', source: 'Rolling Cheese' },
      { title: 'HSL Journey Planner', description: 'Live tram, bus, walking and cycling routes.', url: 'https://www.hsl.fi/en/journey-planner', source: 'HSL' },
    ],
  },
  {
    slug: 'kruununhaka-and-katajanokka',
    number: '04',
    label: 'Kruununhaka & Katajanokka',
    tags: ['History', 'Architecture', 'Harbour', 'Museums', 'Food'],
    title: 'Kruununhaka and Katajanokka: old Helsinki beyond the postcard',
    summary: 'A harbour-side guide to free history, Art Nouveau streets, market food, neighbourhood restaurants and the corners most visitors walk straight past.',
    goodFor: 'History fans, architecture wanderers, visiting relatives and anyone who wants a beautiful central day without spending the whole thing in Senate Square.',
    intro: [
      'This is the Helsinki most people photograph first: the Cathedral, Senate Square, cobbled streets, harbour and ferries. The mistake is treating it as a backdrop and leaving after the picture. Kruununhaka and Katajanokka are also lived-in neighbourhoods with quiet courtyards, local cafés, schools, restaurants and some of the city’s best aimless walking.',
      'The two areas sit neatly together. Begin with Helsinki’s oldest centre, cross towards the red-brick warehouses and Art Nouveau streets of Katajanokka, then come back along the water when the light is doing something dramatic.',
    ],
    keyFacts: [
      'Helsinki City Museum beside Senate Square is free and includes the hands-on Children’s Town.',
      'Katajanokka is served by trams and is also easy to reach on foot from the Market Square.',
      'Market Square prices and opening hours are seasonal. Hakaniemi Market Hall is usually the stronger everyday market experience.',
      'Ferries to Suomenlinna leave from Market Square and use normal HSL tickets, but many other island boats are run by private operators.',
    ],
    sections: [
      {
        title: 'Start with the free history lesson',
        paragraphs: [
          'Helsinki City Museum is the best introduction because it explains the ordinary lives behind the grand façades. It is free, central and unusually good with children. From there, cross Senate Square, look into the Cathedral if it is open and walk through the quieter Kruununhaka streets towards the waterfront.',
          'Burgher’s House, the National Archives, the House of the Estates and small historical details are scattered through the area. Opening hours vary, so treat the architecture and street plan as the reliable part of the day and any interior visit as a bonus unless you have checked it.',
        ],
      },
      {
        title: 'Good eats without falling into the nearest tourist menu',
        paragraphs: [
          'For coffee, Johan & Nyström sits in a red-brick harbour building on the Katajanokka side and works well as a pause between the two neighbourhoods. Via Tribunali provides an easy pizza option, while Kuurna in Kruununhaka is a small neighbourhood bistro worth booking when dinner matters.',
          'The Old Market Hall is useful for a browse, salmon soup or something small before a ferry. It is more visitor-facing than Hakaniemi, so look at the menu and price before ordering. For a classic Finnish restaurant experience, Kolme Kruunua has been part of Kruununhaka since the 1950s and feels properly rooted in the area.',
        ],
        bullets: [
          'Coffee with harbour atmosphere: Johan & Nyström.',
          'Easy lunch: the Old Market Hall or pizza in Katajanokka.',
          'Neighbourhood dinner: book Kuurna.',
          'Classic Finnish mood: look at the current menu at Kolme Kruunua.',
        ],
      },
      {
        title: 'Walk Katajanokka slowly',
        paragraphs: [
          'Cross the small bridges and look up. Katajanokka has one of Helsinki’s richest concentrations of Art Nouveau apartment buildings, full of towers, animals and strange stone details. Tove Jansson Park, Uspenski Cathedral and the old warehouse waterfront give the route easy anchors.',
          'Continue around the outer shore for views of the ferries and winter icebreakers. Allas Pool sits near the Market Square end if you want to turn the day into a sauna and swim. It is a paid stop and worth booking at busy times.',
        ],
      },
      {
        title: 'An easy half-day for visitors and locals',
        paragraphs: [
          'Begin at Helsinki City Museum, walk through Kruununhaka and stop for lunch or coffee. Cross to Katajanokka through the harbour, visit Uspenski Cathedral and Tove Jansson Park, then loop around the Art Nouveau streets and waterfront. Return to Market Square for the tram, ferry or a booked sauna.',
          'If you have children, keep the City Museum long and the architecture lecture short. If the weather is rough, use the museum, cafés and Allas as warm anchors rather than pretending a Baltic harbour walk is character-building for everybody.',
        ],
      },
      {
        title: 'Could you live here?',
        paragraphs: [
          'Both neighbourhoods are beautiful, central and quieter than their location suggests once you leave the main visitor routes. Katajanokka feels slightly removed by water, while Kruununhaka connects directly into the university and centre. Trams cover the journey that the metro does not.',
          'Housing is not cheap, older buildings need careful accessibility checks and cruise-ship or ferry traffic affects some streets. The upside is a genuinely walkable daily life with the sea, centre and culture close enough to use rather than save for visitors.',
        ],
      },
    ],
    insiderTips: [
      'Use Helsinki City Museum before taking visiting family around the old centre. Everybody notices more afterwards.',
      'The most enjoyable Katajanokka architecture is on the residential side streets, not only the warehouse waterfront.',
      'A standard HSL ticket covers the Suomenlinna ferry, but it does not automatically cover private sightseeing or island boats.',
      'Market Square is weather and season dependent. Check before treating it as your guaranteed lunch plan.',
      'Walk the shoreline in daylight in winter. The wind and ice can make a short route feel much longer.',
    ],
    resources: [
      { title: 'Helsinki City Museum', description: 'Free museum, Children’s Town, exhibitions and current opening information.', url: 'https://www.helsinginkaupunginmuseo.fi/en/', source: 'Helsinki City Museum' },
      { title: 'Helsinki market halls and squares', description: 'Current city information covering Market Square and Helsinki’s indoor market halls.', url: 'https://www.hel.fi/en/decision-making/information-on-helsinki/trending/feast-helsinki/market-halls-and-squares', source: 'City of Helsinki' },
      { title: 'Johan & Nyström Helsinki', description: 'Current café details for the harbour-side Katajanokka location.', url: 'https://johanochnystrom.com/pages/our-coffee-bars', source: 'Johan & Nyström' },
      { title: 'Allas Pool', description: 'Current pool, sauna, ticket and booking information.', url: 'https://www.allaspool.fi/en/pools-and-saunas/', source: 'Allas Pool' },
      { title: 'HSL Journey Planner', description: 'Live tram, ferry, walking and cycling routes.', url: 'https://www.hsl.fi/en/journey-planner', source: 'HSL' },
    ],
  },
  {
    slug: 'herttoniemi-and-roihuvuori',
    number: '05',
    label: 'Herttoniemi & Roihuvuori',
    tags: ['East Helsinki', 'Nature', 'Families', 'Cafés', 'Metro'],
    title: 'Herttoniemi and Roihuvuori: metro convenience, sea air and a proper local rhythm',
    summary: 'An eastern Helsinki guide to neighbourhood cafés, waterfront walks, cherry trees, Finnish comfort food and life beyond the central postcode bubble.',
    goodFor: 'Families, nature lovers, metro commuters and anyone wondering whether a greener, roomier version of Helsinki might suit them better.',
    intro: [
      'Herttoniemi is one of the easiest places to realise that eastern Helsinki is not one enormous suburb. Around one metro station you have busy everyday services, older residential streets, an industrial area full of changing businesses, allotment gardens and a shoreline that can feel a long way from the centre.',
      'Roihuvuori sits beside it with 1950s architecture, a much-loved local café, Japanese-style gardens and the cherry park that briefly becomes one of Helsinki’s busiest spring outings. Together they make a strong first guide to the east because daily life and a good day out overlap so naturally.',
    ],
    keyFacts: [
      'Herttoniemi is on the metro line, roughly ten minutes from the city centre before the final walk or bus connection.',
      'The shoreline, manor and Roihuvuori parks are spread out. A city bike or local bus helps if you want to cover everything.',
      'Cherry blossom timing changes every year and the Hanami festival date follows the season rather than a fixed reliable weekend.',
      'The area is residential. Keep noise down, use marked paths and do not treat courtyards or allotment gardens as public attractions.',
    ],
    sections: [
      {
        title: 'Start around the metro, then choose your direction',
        paragraphs: [
          'Herttoniemi metro gives you groceries, the Hertsi shopping centre and buses into the surrounding districts. From there, head south for Herttoniemenranta and the Eastern Waterfront Trail, east for Roihuvuori, or north towards the manor, allotment gardens and old mill.',
          'Trying to walk all three in one casual afternoon creates a surprisingly large loop. Pick the sea or the gardens first. The other route will still be there next weekend, which is exactly how a neighbourhood guide should work.',
        ],
      },
      {
        title: 'Good eats with an actual local following',
        paragraphs: [
          'Treffi Pub & Bistro opposite the metro is the Herttoniemi institution: generous food, a relaxed neighbourhood crowd and a practical meeting point when half the group is coming from elsewhere. Wanha Mylly beside Herttoniemi Manor handles the more traditional Finnish mood in a historic mill setting.',
          'Roihuvuoren Rio is the neighbourhood living-room café, with coffee, tea, soup, warm sandwiches, baked treats and regular cultural events. It is the sort of place that makes more sense after you have walked through Roihuvuori than as a rushed box to tick. Check its weekly hours because it is not open every day.',
        ],
        bullets: [
          'Meet by the metro: Treffi is simple for groups arriving from different directions.',
          'Traditional setting: Wanha Mylly beside the manor grounds.',
          'Coffee and local culture: Roihuvuoren Rio, with vegan and gluten-free options usually represented.',
          'Picnic version: buy what you need near the metro and take it to the shoreline or park.',
        ],
      },
      {
        title: 'The green and blue bits are the main attraction',
        paragraphs: [
          'Walk the Herttoniemenranta shoreline, continue along sections of the Eastern Waterfront Trail or use Tuorinniemi for a sea pause. Around the manor, formal gardens and old paths show a completely different side of the district. Always check swimming conditions before entering the water.',
          'In Roihuvuori, the Japanese-style garden and Cherry Park are free and worth visiting beyond the short blossom season. Spring brings the crowds, but autumn colour and quiet summer evenings belong to the neighbourhood just as much.',
        ],
      },
      {
        title: 'An easy half-day without racing across the east',
        paragraphs: [
          'Take the metro to Herttoniemi, have an early lunch at Treffi or collect picnic food, then head towards Roihuvuori by bus or bike. Walk through the Japanese-style garden and Cherry Park, stop at Rio and return through the residential streets to the metro.',
          'For the seaside version, skip Roihuvuori and follow the waterfront instead, adding the manor and Wanha Mylly if your legs and opening hours agree. Save the route in HSL before leaving, especially if a local bus is infrequent in the evening.',
        ],
      },
      {
        title: 'Could you live here?',
        paragraphs: [
          'Herttoniemi is popular because the metro makes the centre easy while the surrounding districts offer shoreline, parks and a more everyday pace. Housing ranges from older post-war blocks to newer waterfront apartments, and prices can change significantly between a metro-adjacent flat and a sea-view address.',
          'Roihuvuori feels more residential and local, which is lovely if you want that rhythm and less ideal if every evening depends on central nightlife. Test the final journey from the station, not only the metro time. A ten-minute train followed by a twenty-minute uphill walk is still a thirty-minute trip.',
        ],
      },
    ],
    insiderTips: [
      'Do not drive to Cherry Park at peak blossom time unless sitting in traffic is part of the cultural experience you wanted.',
      'Roihuvuoren Rio has limited weekly hours. Check the official site on the day.',
      'Use a city bike when available because the shoreline, manor and Roihuvuori make a much better loop on two wheels.',
      'Treffi is directly useful as a meeting point because the metro and local buses are beside it.',
      'When viewing a home, time the entire walk from the metro and check the route after dark as well as in summer sunshine.',
    ],
    resources: [
      { title: 'East Helsinki neighbourhood guide', description: 'A current overview of the eastern districts, nature, food and local culture.', url: 'https://www.myhelsinki.fi/neighborhoods/east-helsinki/', source: 'MyHelsinki' },
      { title: 'Herttoniemi local guide', description: 'A current itinerary covering the shoreline, manor, parks and neighbourhood food.', url: 'https://www.myhelsinki.fi/live-work/72-hours-in-herttoniemi-neighbourhood/', source: 'MyHelsinki' },
      { title: 'Treffi Pub & Bistro', description: 'Official menu, booking and current details for the Herttoniemi location.', url: 'https://treffipub.com/', source: 'Treffi Pub & Bistro' },
      { title: 'Roihuvuoren Rio', description: 'Current hours, café information and neighbourhood events.', url: 'https://roihuvuorenrio.fi/', source: 'Roihuvuoren Rio' },
      { title: 'Roihuvuori Cherry Park and Japan-inspired garden', description: 'Official arrival details, park guidance and current visitor information.', url: 'https://www.hel.fi/en/culture-and-leisure/outdoor-activities-parks-and-nature-destinations/parks/roihuvuori-cherry-park-and-japan-inspired-garden', source: 'City of Helsinki' },
      { title: 'HSL Journey Planner', description: 'Live metro, bus, walking and cycling routes.', url: 'https://www.hsl.fi/en/journey-planner', source: 'HSL' },
    ],
  },
]

export const areaGuides: EditorialGuide[] = [...coreAreaGuides, ...additionalAreaGuides]

export function getAreaGuide(slug: string): EditorialGuide | undefined {
  return areaGuides.find((guide) => guide.slug === slug)
}

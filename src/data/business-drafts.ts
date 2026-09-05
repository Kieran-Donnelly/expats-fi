export type BusinessDraft = {
  slug: string
  name: string
  summary: string
  description: string
  categories: string[]
  locations: string[]
  address: string
  website?: string
  email?: string
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
    description: "Mimosa Galleria is the sort of place that makes Punavuori feel a little smaller in the best way. Bresley, originally from Mexico, created it as somewhere people could make things, share ideas and get to know one another without the space feeling too formal. Her family story runs right through the name. When Bresley was young, her grandmother lovingly called the children 'mimosa', born from the little ones trying to say 'mi hermosa'. That sense of beauty, care and affection is what she has tried to carry into the galleria. Depending on the week, you might find an exhibition, dance or wellness class, creative workshop, community gathering or a small event taking place. There are handmade pieces to discover, the room can be hired for private occasions, and classes can also travel to other venues around Helsinki. English and Spanish are both welcome, which is a lovely detail when your Finnish is still finding its feet. Pop in for the art, join a class or keep an eye on the programme and see what pulls you through the door.",
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
    description: "Walking into a new yoga studio can feel oddly intimidating, especially when you have just moved countries and are not sure which language the class will suddenly switch into. Purna Yoga Helsinki removes that particular worry straight away: every class is taught in English, and the studio welcomes complete beginners as well as people with years of practice behind them. Nicola Moberg grew up in the Austrian Alps, travelled widely and found yoga while living abroad before eventually moving to Helsinki with her Finnish husband and family. After the birth of her second child, she found a sense of home at Purna Yoga Helsinki. She studied under founder Tove Palmgren and later took over the studio in 2017. The approach brings together careful alignment, movement, breathwork, meditation and practical self-care, with small classes that allow teachers to offer individual options. Alongside the regular studio timetable there are online and private classes, pregnancy, postnatal and baby yoga, workshops, wellbeing sessions and teacher training. It feels less like somewhere you need to arrive already knowing what you are doing, and more like a community where you are allowed to begin from wherever you happen to be.",
    categories: ['Health & wellbeing', 'Yoga', 'Classes & workshops'],
    locations: ['Helsinki'],
    address: 'Fredrikinkatu 67 E 42, 00100 Helsinki',
    website: 'https://www.purnayoga.fi/',
    phone: '+358 50 353 3970',
    instagramHandle: '@purnayogahelsinki',
    instagram: 'https://www.instagram.com/purnayogahelsinki/',
    facebook: 'https://www.facebook.com/PurnaYogaHelsinki/',
    youtube: 'https://www.youtube.com/@nicolamoberg',
    bookingUrl: 'https://www.purnayoga.fi/schedule',
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
    description: "A few minutes from Pasila station, Himalayan Beauty & Spa brings together two parts of founder Shila Moktan's life: the Ayurvedic traditions she grew up with in Nepal and the calmer Nordic setting she later made home. Shila first learned about this kind of care from her mum, trained in beauty and spa therapy in Kathmandu and ran her own spa there before qualifying as a cosmetologist in Helsinki. She opened her Pasila space in 2025, and it remains very much founder-led rather than feeling like a large anonymous chain. The treatment list includes traditional Ayurvedic oil massage, Shirodhara, hot-stone and recovery treatments, facials, shorter head, neck and shoulder sessions, and longer packages for people who want to properly switch off. There are also options shaped around travel fatigue, active bodies, couples, and new or expectant mothers. Shila begins by asking how you are feeling and adjusts the oils, pressure and focus from there. If you have been running around Helsinki trying to get everything done, it is a warm little place to put the phone away, drink some tea and let somebody else take care of the details for a while.",
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
  {
    slug: 'arkadia-international-bookshop',
    name: 'Arkadia International Bookshop',
    summary: 'A much-loved international second-hand bookshop where books, art, tea, conversation and a wonderfully varied Helsinki community all share the same space.',
    description: "Arkadia International Bookshop is one of those Helsinki places that sounds almost too good to stumble across by accident. There are books in Finnish and numerous other languages, covering just about every subject you can think of, but the real charm is everything that has grown around them. People come to browse, talk, listen, think, drink a coffee or tea, discover some art and occasionally find themselves at an event they had no idea they needed. Ian Bourgeot founded Arkadia in 2008 after a life that had already taken him through the UK, Mexico, Guatemala, Malaysia, France, Tunisia and the United States before Finland became home. Liisa Bourgeot brings her Karelian and P\u00e4ij\u00e4t-H\u00e4me roots to the shop alongside her work as a scholar of Russian philosophy and intellectual history at the University of Helsinki. Since opening on 14 March 2008, Arkadia has welcomed visitors from all over the world and hosted nearly two thousand events. That might be a discussion, a concert, a reading, an exhibition or something rather harder to categorise. The variety feels fitting for a shop built around curiosity. Across its two floors and six rooms you will also find art prints, Ian's own work, a publishing project focused on poetry and illustration, an upright piano and even a pool table. The space can be hired for private events, but on an ordinary day it is just as valuable as somewhere to browse slowly and have a proper conversation. For somebody new to Helsinki, Arkadia feels especially worth knowing. You do not need to arrive with the right introduction or a particular book in mind. You can simply walk in, look around and see where the place takes you. As Ian and Liisa put it themselves, everyone is heartily welcome.",
    categories: ['Books & literature', 'Art & culture', 'Community spaces'],
    locations: ['Helsinki'],
    address: 'Nervanderinkatu 11, 00100 Helsinki',
    website: 'https://arkadiabookshop.fi/',
    phone: '+358 40 532 7296',
    instagramHandle: '@arkadia_bookshop',
    instagram: 'https://www.instagram.com/arkadia_bookshop/',
    facebook: 'https://www.facebook.com/pages/Arkadia-International-Bookshop-Ian-Bourgeot/114962855198875',
    imagePath: '/businesses/arkadia-international-bookshop/shop-window.jpg',
    imageAlt: 'A snowy Helsinki street seen through the window of Arkadia International Bookshop',
    logoPath: '/businesses/arkadia-international-bookshop/logo.jpg',
    logoAlt: 'Arkadia International Bookshop red pin design',
    status: 'published',
  },
  {
    slug: 'lazy-fox',
    name: 'Lazy Fox',
    summary: 'A relaxed all-day breakfast spot and bar in Kamppi and Kallio, serving proper fry-ups, Eggs Benedict, fluffy pancakes and the sort of breakfast people miss when they move countries.',
    description: 'When Luke Picken and Jan Van den Broeke opened Lazy Fox in January 2022, the aim was fairly simple: become the breakfast place they wanted to find in Helsinki themselves. That meant bringing together the hearty breakfast dishes people know from elsewhere, including full English breakfasts, American-style pancakes and Eggs Benedict, while keeping the atmosphere easygoing enough that nobody feels rushed out after the last bite. The team bakes its own bread daily, uses fresh ingredients and takes the coffee seriously, but Lazy Fox has never tried to make breakfast feel overly precious. What began as a local breakfast spot has grown into two Helsinki locations. Kamppi is a handy central escape for a slow breakfast, coffee or something stronger, while the newer Kallio location brings the same cosy local feel to Helsinginkatu, with evening food, drinks and regular happenings alongside the breakfast menu. The result feels less like a polished international concept dropped into Helsinki and more like the kind of neighbourhood place Luke and Jan genuinely wanted to build. You can turn up for pancakes, settle in over a full breakfast, meet somebody for a drink or discover one of the events running later in the week. For expats, there is an extra bit of comfort in finding familiar breakfast food done properly. For everybody else, it is simply a warm, unfussy place to eat well and hang around for a while.',
    categories: ['Food & drink', 'Caf\u00e9s & bakeries', 'Nice hangs'],
    locations: ['Helsinki'],
    address: 'Kamppi, Albertinkatu 36, 00180 Helsinki; Kallio, Helsinginkatu 15, 00500 Helsinki',
    website: 'https://lazyfox.fi/',
    phone: '+358 41 325 2820',
    instagramHandle: '@lazyfoxhelsinki',
    instagram: 'https://www.instagram.com/lazyfoxhelsinki/',
    bookingUrl: 'https://v2.tableonline.fi/instabook/bookings/e6auOiZ',
    imagePath: '/businesses/lazy-fox/founders.jpg',
    imageAlt: 'Lazy Fox owners Luke Picken and Jan Van den Broeke talking on a sofa inside the Kallio venue',
    logoPath: '/businesses/lazy-fox/logo.png',
    logoAlt: 'Lazy Fox logo',
    status: 'published',
  },
  {
    slug: 'inka-roastery',
    name: 'Inka Roastery',
    summary: "A Peruvian-rooted Helsinki roastery bringing together Pamela's food-science background, carefully sourced coffee and a very real commitment to the people who grow it.",
    description: "When Pamela moved from Peru to Finland in 2014, finding work proved much harder than expected. Rather than waiting for the right job to appear, she decided to create one around two things she already understood deeply: food science and coffee. The idea was also personal. Pamela's family came from small farms on the slopes of the Andes before moving to Lima after experiencing how difficult it was to make a fair living from farming. Before starting Inka, she returned to Peru and volunteered on coffee farms, learning more about cultivation while listening to farmers explain the work, risk and care behind every harvest. Those conversations stayed with her. Inka Roastery began in Voikkaa at the end of 2015 with a focus on Peruvian coffee and later moved to Helsinki. The range has since grown to include beans from around the world, but the original principle has remained the same: quality matters, and so do transparent sourcing, fair payment and the wellbeing of farming communities and the environment. There is also a lovely thread of gratitude running through the business. Pamela writes about Pachamama, the Andean tradition of giving thanks to the earth before, during and after the harvest. Inka carries that same respect into roasting by making the farmer and the origin part of the story rather than hiding them behind a generic bag of coffee. Starting from zero in a new country was not easy, but the work quickly began earning recognition. Inka won Espresso of the Year at Helsinki Coffee Festival in 2018, continued collecting awards in 2025 and placed second in the limited filter coffee category at the 2026 Helsinki Coffee Festival. For Pamela, the bigger achievement is what the roastery has become: a strong foreign woman-led Finnish business that helps people enjoy genuinely good coffee while thinking more carefully about where it came from. You can shop light, medium, dark and French roasts, subscriptions, coffee boxes, teas and brewing equipment online. Inka also supplies workplaces and cafés, works with retailers and can create coffee bags with custom labels for fundraising or business gifts. The Helsinki roastery can be visited by appointment.",
    categories: ['Food & drink', 'Coffee roasteries', 'Cafés & bakeries'],
    locations: ['Helsinki'],
    address: 'Tuuliasintie 13, hall 8, 00770 Helsinki',
    website: 'https://inkapaahtimo.fi/',
    instagramHandle: '@inkapaahtimo',
    instagram: 'https://www.instagram.com/inkapaahtimo',
    facebook: 'https://www.facebook.com/inkapaahtimo',
    youtube: 'https://www.youtube.com/@inkapaahtimo',
    imagePath: '/businesses/inka-roastery/inka-roastery-social.png',
    imageAlt: 'Inka Roastery founder Pamela checking freshly roasted coffee beside the roaster',
    status: 'published',
  },
  {
    slug: 'connect-fit',
    name: 'Connect Fit',
    summary: 'An Australian-founded Ruoholahti fitness studio bringing together coached small-group training, 24/7 gym access, personal coaching and a community that makes it easier to keep turning up.',
    description: "Walking into a new gym can be awkward enough without also wondering whether the coaching, language or atmosphere will work for you. Connect Fit is Ben Liuzzi's answer to that. Ben moved from Australia to Finland in early 2011 and has worked here as an entrepreneur since the end of that year. He helped operate CrossFit Central Helsinki from 2012 until 2024, then brought that experience into Connect Fit as a co-owner, founder and head coach. Ben has more than twenty years of industry experience, with a background in anatomy, physiology and exercise physiology. His work has covered rehabilitation, general health, strength and conditioning, personal training and performance coaching across CrossFit, HYROX, Olympic weightlifting and endurance sport. He is also studying sport and exercise psychology at the University of Jyväskylä, which feels like a natural next chapter for somebody interested in why people train, what keeps them going and how good coaching can meet a person where they actually are. The Ruoholahti studio combines coached functional fitness classes with a well-equipped space for independent training, 24/7 gym access and personal coaching. Classes are kept small, with a maximum of twelve people, so beginners can receive proper guidance while experienced members still have room to progress. The atmosphere matters just as much as the equipment. This is meant to be a place where people know your name, notice when you return and make training feel less like another lonely obligation. The fact that there are saunas waiting at the end certainly does not hurt either. For somebody new to Helsinki, Connect Fit offers more than somewhere to exercise. It is an English-friendly route into a steady routine, experienced coaching and a mixed local community, all a short hop from the city centre.",
    categories: ['Health & wellbeing', 'Fitness & training', 'Gyms'],
    locations: ['Helsinki'],
    address: 'Tammasaarenkatu 1, 00180 Helsinki',
    website: 'https://connectfit.fi/',
    instagramHandle: '@connectfit_fin',
    instagram: 'https://www.instagram.com/connectfit_fin/',
    imagePath: '/businesses/connect-fit/group-training.jpg',
    imageAlt: 'Connect Fit members and coaches smiling together after a group training session in Ruoholahti',
    logoPath: '/businesses/connect-fit/logo.png',
    logoAlt: 'Connect Fit logo',
    status: 'published',
  },
  {
    slug: 'byrne-carpentry',
    name: 'Byrne Carpentry',
    summary: 'Friendly, English-speaking carpentry, building and renovation work in Helsinki, from smaller repairs and bespoke joinery to complete home renovations.',
    description: "Finding a reliable tradesperson can be tricky enough without throwing a language barrier into the mix. When you are working on your home, it helps enormously to have somebody you can speak with openly, explain your ideas to and trust to give you a straightforward answer. Byrne Carpentry is run by Patrick Byrne, an Irish carpenter and builder who has been living and working in Finland for around 15 years. Based in Helsinki, he brings plenty of hands-on experience across carpentry, building, renovation, painting, finishing and bespoke joinery. Paddy takes on everything from smaller repairs, painting and individual carpentry jobs to kitchens, bathrooms, outdoor projects and complete home renovations. He also creates bespoke joinery, including custom furniture, storage and fitted pieces designed around the home and the space available. That broad skill set means he can help with the early building and renovation work, then carry the job through to the flooring, painting, fitted details and finishing touches that bring everything together. For international residents, being able to discuss the job clearly in English, ask questions and understand what happens next can take a lot of stress out of the process. Whether you have a small job that needs sorting, an idea for a custom piece or an entire home ready for a new chapter, send Paddy a message and have a chat about what you need.",
    categories: ['Trades', 'Carpentry & building', 'Renovations'],
    locations: ['Helsinki'],
    address: 'Based in Helsinki',
    email: 'byrnecarpentryhelsinki@gmail.com',
    instagramHandle: '@byrne_carpentry',
    instagram: 'https://www.instagram.com/byrne_carpentry/',
    imagePath: '/businesses/byrne-carpentry/patrick-byrne-at-work.webp',
    imageAlt: 'Patrick Byrne working on a brick building project in Helsinki',
    logoPath: '/businesses/byrne-carpentry/logo.webp',
    logoAlt: 'Byrne Carpentry logo',
    status: 'published',
  },
]

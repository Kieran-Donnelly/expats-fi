export type LearningResource = {
  name: string
  category: 'Free foundations' | 'Courses & teachers' | 'Apps & tools' | 'Listen & watch'
  cost: 'Free' | 'Freemium' | 'Paid' | 'Free & paid'
  level: string
  format: string
  url: string
  description: string
  bestFor: string
  note?: string
  featured?: boolean
}

export type PracticeGroup = {
  name: string
  location: string
  schedule: string
  cost: string
  url: string
  description: string
  checkFirst: string
}

export const learningPaths = [
  {
    title: 'I am starting from zero',
    level: 'Beginner · A0–A1',
    recipe: 'Begin with a structured beginner course or app, use Uusi kielemme when grammar gets mysterious, and learn ten phrases you can use this week.',
    links: ['Uusi kielemme', 'Kielibuusti', 'WordDive'],
  },
  {
    title: 'I know the basics but freeze when people speak',
    level: 'Elementary · A1–A2',
    recipe: 'Add slow, understandable listening every day and attend one low-pressure language café. Spoken Finnish is a skill of its own.',
    links: ['Yle Selkouutiset', 'Gimara', 'Helmet language cafés'],
  },
  {
    title: 'I want Finnish for work and daily life',
    level: 'Independent · A2–B2',
    recipe: 'Choose a teacher-led course, practise vocabulary from your own workplace and schedule regular conversations that do not switch to English.',
    links: ['Finnishcourses.fi', 'ILMONET', 'Kielibuusti'],
  },
  {
    title: 'I am preparing for YKI',
    level: 'Goal-led · usually B1',
    recipe: 'Train all four skills: speaking, listening, reading and writing. Use official task examples before paying for mock tests or coaching.',
    links: ['Official YKI guidance', 'Yle YKI practice', 'Finnishcourses.fi'],
  },
] as const

export const learningResources: LearningResource[] = [
  {
    name: 'Uusi kielemme',
    category: 'Free foundations',
    cost: 'Free',
    level: 'A1–C1',
    format: 'Grammar, vocabulary & exercises',
    url: 'https://uusikielemme.fi/',
    description: 'An exceptionally deep English-language reference with more than 650 articles covering grammar, vocabulary, word types and spoken Finnish. Its interactive extras are now free too.',
    bestFor: 'Looking up the thing your textbook explained too quickly.',
    note: 'Use it as a reference rather than trying to read it from beginning to end.',
    featured: true,
  },
  {
    name: 'Kielibuusti',
    category: 'Free foundations',
    cost: 'Free',
    level: 'A1–C1',
    format: 'Curated learning hub',
    url: 'https://www.kielibuusti.fi/en/learn-finnish',
    description: 'A free, non-profit portal developed by Finnish universities with public funding. Language teachers review its self-study materials, which can be filtered by level and skill.',
    bestFor: 'Finding trustworthy material without falling into a fifty-tab search spiral.',
    note: 'Especially useful for spoken Finnish, workplace language and advanced learners.',
    featured: true,
  },
  {
    name: 'Yle Opi suomea',
    category: 'Free foundations',
    cost: 'Free',
    level: 'A1–B1',
    format: 'Short videos & learning packs',
    url: 'https://yle.fi/oppiminen/opisuomea',
    description: 'Yle’s current Finnish-learning collection brings together short vocabulary videos, practical language material and selected learning features.',
    bestFor: 'Adding small pieces of real Finnish to a beginner routine.',
  },
  {
    name: 'Yle Selkouutiset',
    category: 'Free foundations',
    cost: 'Free',
    level: 'A2–B2',
    format: 'Easy news with audio & video',
    url: 'https://yle.fi/selkouutiset',
    description: 'News in clear, simplified Finnish. Read the story, listen once without the text, then listen again while following along.',
    bestFor: 'Turning five minutes of current affairs into daily listening practice.',
    note: 'Yle Kielikoulu closed in 2025; Selkouutiset remains available.',
    featured: true,
  },
  {
    name: 'Gimara',
    category: 'Free foundations',
    cost: 'Free & paid',
    level: 'A1–C1',
    format: 'Exercises, livestreams & online teaching',
    url: 'https://gimara.fi/',
    description: 'A Finnish-learning site and active video channel with free themed material from beginner to advanced level, plus weekly livestreams and paid teaching.',
    bestFor: 'Learners who understand more when someone talks the grammar through.',
  },
  {
    name: 'Finnishcourses.fi',
    category: 'Courses & teachers',
    cost: 'Free & paid',
    level: 'A0–C1',
    format: 'Course search',
    url: 'https://finnishcourses.fi/',
    description: 'The most practical course finder for Helsinki, Espoo, Vantaa, Kauniainen and online study. Filter by level, price, time of day and YKI preparation.',
    bestFor: 'Comparing current courses instead of visiting every school separately.',
    note: 'Course fees and enrolment rules belong to the individual provider.',
    featured: true,
  },
  {
    name: 'ILMONET adult education courses',
    category: 'Courses & teachers',
    cost: 'Paid',
    level: 'A1–C1',
    format: 'Classroom & online courses',
    url: 'https://ilmonet.fi/',
    description: 'The shared enrolment service for the capital region’s adult education centres. It regularly lists affordable Finnish courses, conversation classes and specialist workshops.',
    bestFor: 'A structured local class without university-level fees.',
    note: 'Popular courses fill quickly; search “suomi toisena kielenä” and note the enrolment opening time.',
  },
  {
    name: 'University of Helsinki Open University',
    category: 'Courses & teachers',
    cost: 'Paid',
    level: 'A1–B2',
    format: 'Academic courses',
    url: 'https://www.helsinki.fi/en/admissions-and-education/open-university/open-university-studies-degree-programme/languages-and-literatures-finland/finnish-foreigners',
    description: 'Teacher-led Finnish for Foreigners courses from beginner to upper-intermediate level, with clearly stated starting levels and academic credits.',
    bestFor: 'Learners who want a rigorous sequence and are ready for steady homework.',
    note: 'Places are normally filled in enrolment order.',
  },
  {
    name: 'Konepaja Adult Upper Secondary School',
    category: 'Courses & teachers',
    cost: 'Free & paid',
    level: 'A0–B2',
    format: 'Intensive & evening courses',
    url: 'https://www.hel.fi/en/childhood-and-education/konepaja-upper-secondary-school-for-adults/finnish-courses',
    description: 'City of Helsinki courses ranging from literacy-level study to B2.2, including intensive daytime paths and lighter evening options.',
    bestFor: 'Helsinki residents who want substantial, classroom-based progress.',
    note: 'Applications open during specific periods and intensive courses require serious attendance.',
  },
  {
    name: 'WordDive',
    category: 'Apps & tools',
    cost: 'Paid',
    level: 'A1–A2',
    format: 'Web & mobile app',
    url: 'https://www.worddive.com/en/learn-finnish',
    description: 'A Finnish-made learning app focused on vocabulary, audio and basic Standard Finnish grammar through frequent, adaptive repetition.',
    bestFor: 'Building useful vocabulary in short, regular sessions.',
    note: 'Pair it with a grammar reference and speaking practice; an app cannot provide the whole language.',
  },
  {
    name: 'Duolingo Finnish',
    category: 'Apps & tools',
    cost: 'Freemium',
    level: 'A0–A1',
    format: 'Web & mobile app',
    url: 'https://www.duolingo.com/course/fi/en/Learn-Finnish',
    description: 'A playful, low-friction introduction to basic Finnish words and sentence patterns. The Finnish course is relatively short.',
    bestFor: 'Creating a daily habit and testing whether you enjoy the language.',
    note: 'Treat the streak as a warm-up, not evidence that you are ready for a real conversation.',
  },
  {
    name: 'Kieli.net',
    category: 'Apps & tools',
    cost: 'Freemium',
    level: 'A2–C1',
    format: 'Reading & grammar tool',
    url: 'https://www.kieli.net/',
    description: 'A Finnish reading assistant that helps identify base forms and grammatical information inside real texts.',
    bestFor: 'Moving from textbook passages to articles you actually want to read.',
  },
  {
    name: 'Random Finnish Lesson',
    category: 'Listen & watch',
    cost: 'Free',
    level: 'A2–B2',
    format: 'Podcast, blog & YouTube',
    url: 'https://randomfinnishlesson.blogspot.com/',
    description: 'Teacher Hanna Männikkölahti talks with guests, introduces easy-Finnish books and explores everyday language at a learner-friendly pace.',
    bestFor: 'Longer listening once textbook audio starts feeling artificial.',
  },
  {
    name: 'Opi suomea! podcast',
    category: 'Listen & watch',
    cost: 'Free',
    level: 'A2–B1',
    format: 'Short learner podcast',
    url: 'https://opisuomeapodcast.buzzsprout.com/',
    description: 'Short Finnish episodes made specifically for learners, covering ordinary experiences and approachable cultural themes.',
    bestFor: 'Repeat listening on a walk or commute without committing to an hour-long show.',
  },
  {
    name: 'FinnishPod101',
    category: 'Listen & watch',
    cost: 'Freemium',
    level: 'A1–B1',
    format: 'Audio, video & lessons',
    url: 'https://www.finnishpod101.com/',
    description: 'A large library of short audio and video lessons, with a free YouTube channel and a paid structured platform.',
    bestFor: 'Learners who prefer English-supported explanations and bite-sized audio.',
    note: 'The volume of material can be distracting. Choose one series and finish it before browsing again.',
  },
]

export const practiceGroups: PracticeGroup[] = [
  {
    name: 'Helmet library language cafés',
    location: 'Helmet libraries across the capital region',
    schedule: 'Dates vary by library',
    cost: 'Usually free',
    url: 'https://helmet.finna.fi/Content/monikieliset-palvelut?lng=en-gb',
    description: 'Helmet libraries around the capital region regularly host Finnish language cafés where learners can practise in a calm, public and beginner-friendly setting.',
    checkFirst: 'Use Helmet’s multilingual services page to see the current language cafés, locations and dates before travelling.',
  },
  {
    name: 'Finnish Language Café',
    location: 'The Good Coffee Company · Eerikinkatu 33',
    schedule: 'Usually weekday afternoons',
    cost: 'Free event',
    url: 'https://www.meetup.com/finnish-language-cafe-meetup-group/',
    description: 'A relaxed central-Helsinki café group organised with local volunteers. Native speakers help learners find words and keep the conversation moving.',
    checkFirst: 'The timetable changes, so confirm the next Meetup event before travelling.',
  },
  {
    name: 'Café Lingua Helsinki',
    location: 'Central Helsinki venues',
    schedule: 'Regular Monday and Thursday meetups',
    cost: 'Free',
    url: 'https://www.meetup.com/International-Meetup-Cafe-Lingua-Helsinki/',
    description: 'A large international language exchange rather than a formal Finnish lesson. Find the Finnish table, meet people and trade some of your own language too.',
    checkFirst: 'Venue and attendance vary by event; check the current listing.',
  },
  {
    name: 'Kielikahvilat.fi',
    location: 'Helsinki, Finland-wide & online',
    schedule: 'Search current groups',
    cost: 'Free finder',
    url: 'https://kielikahvilat.fi/',
    description: 'A dedicated directory for Finnish conversation groups in libraries, cafés and online. Useful when the familiar city-centre options do not fit your schedule.',
    checkFirst: 'Always confirm the organiser’s latest details, particularly during holiday periods.',
  },
]

export const ykiResources = [
  {
    name: 'Official YKI guidance',
    url: 'https://www.oph.fi/en/national-certificates-language-proficiency-yki',
    description: 'Start here for the test structure, levels, registration and what the certificate can be used for. YKI assesses speaking, listening, reading and writing.',
  },
  {
    name: 'Yle YKI practice pack',
    url: 'https://yle.fi/a/74-20085882',
    description: 'A free Yle learning pack with example-style practice across the skills tested in YKI.',
  },
  {
    name: 'YKI course search',
    url: 'https://finnishcourses.fi/',
    description: 'Use Finnishcourses.fi to compare current preparation courses by level, location, schedule and price.',
  },
] as const

export const lastLearningReview = '4 August 2026'

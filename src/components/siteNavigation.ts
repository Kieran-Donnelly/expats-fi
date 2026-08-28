const resourceCategory = (category: string) => `/resources/?category=${encodeURIComponent(category)}`
const resourceSearch = (query: string) => `/resources/?q=${encodeURIComponent(query)}`

export type NavigationLeaf = {
  label: string
  href: string
}

export type NavigationChild = NavigationLeaf & {
  children?: readonly NavigationLeaf[]
}

export type NavigationItem = {
  label: string
  href?: string
  children?: readonly NavigationChild[]
}

/**
 * The shared information architecture for both desktop and mobile headers.
 * Keep links pointed at existing pages and resource filters so navigation
 * changes do not create a second, parallel routing system.
 */
export const primaryNavigation: readonly NavigationItem[] = [
  {
    label: 'Start Here',
    href: '/start-here/',
  },
  {
    label: 'Move to Finland',
    children: [
      { label: 'Immigration & permits', href: resourceCategory('Immigration & permits') },
      {
        label: 'Your first 90 days',
        href: '/start-here/',
        children: [
          { label: 'The 90-day pathway', href: '/start-here/first-90-days-in-finland/' },
          { label: 'Digital Finland survival kit', href: '/start-here/digital-finland-survival-kit/' },
        ],
      },
      { label: 'Moving & relocation', href: resourceSearch('relocation') },
      { label: 'Registration & getting established', href: resourceSearch('registration') },
      { label: 'Embassies & consulates', href: '/embassies/' },
    ],
  },
  {
    label: 'Live in Finland',
    children: [
      {
        label: 'Housing',
        href: '/housing/',
        children: [
          { label: 'Finding a rental home', href: '/housing/finding-a-rental-home-in-finland/' },
          { label: 'Lease, deposit & moving in', href: '/housing/lease-deposit-and-moving-in/' },
          { label: 'Setting up & running your home', href: '/housing/setting-up-and-running-your-home/' },
          { label: 'Repairs, rent trouble & moving out', href: '/housing/repairs-rent-trouble-and-moving-out/' },
        ],
      },
      { label: 'Work & money', href: resourceCategory('Work & money') },
      {
        label: 'Study in Finland',
        href: '/study/',
        children: [
          { label: 'Choose the right route', href: '/study/choosing-the-right-study-route/' },
          { label: 'Universities & UAS', href: '/study/universities-and-universities-of-applied-sciences/' },
          { label: 'Vocational & apprenticeships', href: '/study/vocational-study-and-apprenticeships/' },
          { label: 'Integration training', href: '/study/integration-training-and-finnish-for-working-life/' },
          { label: 'Open & online study', href: '/study/open-university-online-and-flexible-study/' },
          { label: 'Fees, permits & funding', href: '/study/tuition-fees-permits-and-paying-for-study/' },
        ],
      },
      {
        label: 'Family',
        href: '/family/',
        children: [
          { label: 'Healthcare & Maisa', href: '/family/healthcare-and-maisa/' },
          { label: 'Babies & neuvola', href: '/family/babies-and-neuvola/' },
          { label: 'Daycare & preschool', href: '/family/daycare-and-preschool/' },
          { label: 'Schooling in Helsinki', href: '/family/schooling-in-helsinki/' },
          { label: 'Teenagers & next steps', href: '/family/teenagers-and-next-steps/' },
          { label: 'Benefits & family money', href: '/family/benefits-and-family-money/' },
          { label: 'Support services', href: '/family/social-services-and-family-support/' },
          { label: 'Urgent help & safety', href: '/family/urgent-help-and-safety/' },
        ],
      },
      {
        label: 'How Finland actually works',
        href: '/culture/',
        children: [
          { label: 'Everyday customs', href: '/culture/#everyday-culture' },
          { label: 'Finland, Explained', href: '/culture/#finland-explained' },
          { label: 'Finland in twelve turning points', href: '/culture/finland-in-twelve-turning-points/' },
          { label: 'Finnish names worth knowing', href: '/culture/finnish-names-worth-knowing/' },
          { label: 'Historic Finland to visit', href: '/culture/historic-finland-you-can-visit/' },
        ],
      },
      {
        label: 'Learn Finnish',
        href: '/learn-finnish/',
        children: [
          { label: 'Free resources', href: '/learn-finnish/#free-resources' },
          { label: 'Courses', href: '/learn-finnish/#courses' },
          { label: 'Apps', href: '/learn-finnish/#apps' },
          { label: 'Listen & watch', href: '/learn-finnish/#listen' },
          { label: 'Language cafés', href: '/learn-finnish/#practice' },
          { label: 'Preparing for YKI', href: '/learn-finnish/#yki' },
        ],
      },
    ],
  },
  {
    label: 'Explore Helsinki',
    children: [
      {
        label: 'Neighbourhood guides',
        href: '/areas/',
        children: [
          { label: 'Central Helsinki', href: '/areas/#area-group-start-central' },
          { label: 'Local neighbourhood life', href: '/areas/#area-group-neighbourhood-rhythm' },
          { label: 'Green & coastal Helsinki', href: '/areas/#area-group-go-greener' },
        ],
      },
      {
        label: 'Food & Drink',
        href: '/eats/',
        children: [
          { label: 'Finland on a Plate', href: '/eats/finland-on-a-plate/' },
          { label: 'Places to eat in Helsinki', href: '/eats/#helsinki-food' },
          { label: 'Food by neighbourhood', href: '/areas/' },
        ],
      },
      {
        label: 'Things to do in Helsinki',
        href: '/explore/',
        children: [
          { label: 'Museums & art', href: '/explore/?category=Museums%20%26%20art' },
          { label: 'Family favourites', href: '/explore/?category=Family%20favourites' },
          { label: 'Islands & nature', href: '/explore/?category=Islands%20%26%20nature' },
          { label: 'Public saunas', href: '/explore/?category=Public%20saunas' },
          { label: 'Free days', href: '/explore/#free-days' },
          { label: 'Cards & joining', href: '/explore/#join' },
        ],
      },
      {
        label: 'Events',
        href: '/events/',
        children: [
          { label: 'Music & nightlife', href: '/events/?category=Music%20%26%20nightlife' },
          { label: 'Arts & culture', href: '/events/?category=Arts%20%26%20culture' },
          { label: 'Food & markets', href: '/events/?category=Food%20%26%20markets' },
          { label: 'Community & free', href: '/events/?category=Community%20%26%20free' },
          { label: 'Sports & outdoors', href: '/events/?category=Sports%20%26%20outdoors' },
          { label: 'Family-friendly', href: '/events/?cost=family' },
        ],
      },
      {
        label: 'Sports & activities',
        href: '/sports/',
        children: [
          { label: 'Clubs & teams', href: '/sports/?type=Club%20%26%20team' },
          { label: 'Social sessions', href: '/sports/?type=Social%20session' },
          { label: 'Classes & training', href: '/sports/?type=Course%20%26%20training' },
          { label: 'Places to play', href: '/sports/?type=Venue%20%26%20facility' },
          { label: 'Family & children', href: '/sports/?fit=family' },
          { label: 'Sports events', href: '/events/?category=Sports%20%26%20outdoors' },
        ],
      },
      {
        label: 'Community & meet people',
        href: '/community/',
        children: [
          { label: 'Community board', href: '/community/board/' },
          { label: 'New in town', href: '/community/where-to-start-when-you-know-nobody/' },
          { label: 'Language cafés & communities', href: '/community/language-cafes-and-international-communities/' },
          { label: 'Hobbies, sport & volunteering', href: '/community/hobbies-sport-volunteering-and-work-connections/' },
          { label: 'Parents & families', href: '/community/parents-families-and-meeting-locally/' },
          { label: 'Host a small meetup', href: '/community/how-to-host-a-small-meetup-safely/' },
          { label: 'Expat-owned businesses', href: '/businesses/' },
        ],
      },
    ],
  },
  {
    label: 'News',
    href: '/news/',
  },
]

export const businessDirectoryHref = '/businesses/'

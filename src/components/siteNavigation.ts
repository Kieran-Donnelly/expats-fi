const resourceCategory = (category: string) => `/resources/?category=${encodeURIComponent(category)}`
const resourceSearch = (query: string) => `/resources/?q=${encodeURIComponent(query)}`

export type NavigationChild = {
  label: string
  href: string
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
      { label: 'Your first 90 days', href: '/start-here/first-90-days-in-finland/' },
      { label: 'Moving & relocation', href: resourceSearch('relocation') },
      { label: 'Registration & getting established', href: resourceSearch('registration') },
      { label: 'Embassies & consulates', href: '/embassies/' },
    ],
  },
  {
    label: 'Live in Finland',
    children: [
      { label: 'Housing', href: '/housing/' },
      { label: 'Work & money', href: resourceCategory('Work & money') },
      { label: 'Family', href: '/family/' },
      { label: 'How Finland actually works', href: '/culture/' },
      { label: 'Learn Finnish', href: '/learn-finnish/' },
    ],
  },
  {
    label: 'Explore Helsinki',
    children: [
      { label: 'Neighbourhood guides', href: '/areas/' },
      { label: 'Helsinki Eats', href: '/eats/' },
      { label: 'Things to do in Helsinki', href: '/explore/' },
      { label: 'Events', href: '/events/' },
      { label: 'Sports & activities', href: '/sports/' },
      { label: 'Community & meet people', href: '/community/' },
    ],
  },
  {
    label: 'News',
    href: '/news/',
  },
]

export const businessDirectoryHref = '/businesses/'

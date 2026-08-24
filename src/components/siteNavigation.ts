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
    href: '/',
  },
  {
    label: 'Moving to Finland',
    children: [
      { label: 'Immigration & permits', href: resourceCategory('Immigration & permits') },
      { label: 'Embassies', href: '/embassies/' },
      { label: 'Moving & relocation', href: resourceSearch('relocation') },
      { label: 'Residence permits', href: resourceSearch('residence permit') },
      { label: 'Registration & getting established', href: resourceSearch('registration') },
    ],
  },
  {
    label: 'Work',
    href: resourceCategory('Work & money'),
  },
  {
    label: 'Living in Finland',
    children: [
      { label: 'Housing', href: resourceCategory('Housing') },
      { label: 'Money', href: resourceSearch('money') },
      { label: 'Family', href: resourceCategory('Family') },
    ],
  },
  {
    label: 'Learn Finnish',
    href: '/learn-finnish/',
  },
  {
    label: 'Explore',
    children: [
      { label: 'Events', href: '/events/' },
      { label: 'Sports & activities', href: '/sports/' },
      { label: 'Community', href: '/businesses/' },
    ],
  },
]

export const businessDirectoryHref = '/businesses/'

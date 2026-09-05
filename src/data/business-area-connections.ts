export const areaBusinessSlugs: Record<string, string[]> = {
  'kallio-and-hakaniemi': ['lazy-fox'],
  'punavuori-and-the-design-district': ['mimosa-galleria'],
  toolo: ['arkadia-international-bookshop'],
  'kamppi-and-kluuvi': ['aussie-bar', 'lazy-fox', 'purna-yoga-helsinki'],
}

export const businessAreaSlugs = Object.entries(areaBusinessSlugs).reduce<Record<string, string[]>>(
  (connections, [areaSlug, businessSlugs]) => {
    for (const businessSlug of businessSlugs) {
      connections[businessSlug] = [...(connections[businessSlug] || []), areaSlug]
    }
    return connections
  },
  {},
)

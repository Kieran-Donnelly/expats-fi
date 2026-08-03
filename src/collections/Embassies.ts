import type { CollectionConfig } from 'payload'

export const Embassies: CollectionConfig = {
  slug: 'embassies',
  admin: {
    group: 'Directories',
    useAsTitle: 'country',
    defaultColumns: ['country', 'representationType', 'city', 'hostCountry', 'lastVerifiedAt'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: 'country', type: 'text', required: true, index: true },
    { name: 'countryCode', type: 'text', required: true, unique: true, index: true, admin: { position: 'sidebar' } },
    { name: 'slug', type: 'text', required: true, unique: true, index: true, admin: { position: 'sidebar' } },
    {
      name: 'region',
      type: 'select',
      required: true,
      index: true,
      options: ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania'],
      admin: { position: 'sidebar' },
    },
    {
      name: 'representationType',
      type: 'select',
      required: true,
      index: true,
      options: [
        { label: 'Embassy in Finland', value: 'resident-embassy' },
        { label: 'Representative office in Finland', value: 'representative-office' },
        { label: 'Non-resident embassy accredited to Finland', value: 'non-resident-embassy' },
        { label: 'Honorary consulate in Finland', value: 'honorary-consulate' },
        { label: 'Foreign ministry / nearest mission fallback', value: 'foreign-ministry' },
      ],
    },
    { name: 'missionName', type: 'text', required: true },
    { name: 'city', type: 'text', required: true, index: true },
    { name: 'hostCountry', type: 'text', required: true, index: true },
    { name: 'website', type: 'text', admin: { description: 'Official mission website, when known.' } },
    { name: 'phone', type: 'text' },
    { name: 'email', type: 'email' },
    { name: 'address', type: 'textarea' },
    {
      name: 'sourceUrl',
      type: 'text',
      required: true,
      admin: { description: 'Primary official directory used to verify this representation.' },
    },
    { name: 'notes', type: 'textarea' },
    {
      name: 'lastVerifiedAt',
      type: 'date',
      required: true,
      index: true,
      admin: { position: 'sidebar', date: { pickerAppearance: 'dayOnly' } },
    },
  ],
}

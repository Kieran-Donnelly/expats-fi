export type ArticleImage = { src: string; alt: string; credit?: string; creditUrl?: string }

export const articleImages: Record<string, ArticleImage> = {
  'fishing-licence-finland': {
    src: '/images/heroes/fishing-licence-finland.avif',
    alt: 'A fishing rod held above a calm lake beneath a cloudy sky',
    credit: 'Yellowj / Unlimphotos',
    creditUrl: 'https://unlimphotos.com/27934952/fishing-on-the-lake.html',
  },
}

import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, collectionPageJsonLd } from '@/lib/seo'

export function HubStructuredData({ name, description, path, items }: {
  name: string
  description: string
  path: string
  items: { name: string; path: string }[]
}) {
  return (
    <JsonLd data={[
      collectionPageJsonLd({ name, description, path, items }),
      breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name, path },
      ]),
    ]} />
  )
}

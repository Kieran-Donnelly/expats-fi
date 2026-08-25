export type EditorialResource = {
  title: string
  description: string
  url: string
  source: string
}

export type EditorialSection = {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export type EditorialGuide = {
  slug: string
  number: string
  label: string
  tags?: string[]
  title: string
  summary: string
  intro: string[]
  goodFor: string
  keyFacts: string[]
  sections: EditorialSection[]
  insiderTips: string[]
  resources: EditorialResource[]
}

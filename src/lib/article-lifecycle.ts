export const retiredArticleRedirects = {
  'guide-moving-to-finland-index': '/start-here/',
  'guide-moving-to-finland-quick-guide': '/start-here/first-90-days-in-finland/',
  'guide-moving-to-finland-study-in-finland': '/study/',
  'guide-finance-banking': '/resources/guide-finance-index/',
  'guide-finance-online-banking': '/start-here/digital-finland-survival-kit/',
  'guide-employment-te-employment-service': '/resources/guide-employment-employment-services/',
  'guide-housing-index': '/housing/',
  'guide-housing-finding-housing-in-finland': '/housing/finding-a-rental-home-in-finland/',
  'guide-housing-renting-in-finland': '/housing/lease-deposit-and-moving-in/',
  'guide-housing-emergency-accommodation-in-finland': '/help/',
  'guide-living-in-finland-preschools-kindergartens': '/family/daycare-and-preschool/',
  'guide-living-in-finland-international-schools': '/family/schooling-in-helsinki/',
  'guide-living-in-finland-education': '/study/',
  'guide-living-in-finland-language-training': '/learn-finnish/',
  'guide-living-in-finland-culture': '/culture/',
  'guide-living-in-finland-finnish-language': '/learn-finnish/',
  'guide-living-in-finland-news': '/news/',
  'guide-connections-index': '/community/',
  'guide-connections-forums': '/community/',
  'guide-connections-groups': '/community/',
  'guide-connections-friendship-societies': '/community/',
  'guide-connections-embassies': '/embassies/',
  'guide-events-index': '/events/',
  'guide-events-expat-sports': '/sports/',
  'guide-events-finnish-sports': '/sports/',
  'guide-entrepreneurship-accounting-and-auditing-firms': '/resources/guide-entrepreneurship-accountancy/',
  'guide-entrepreneurship-electronic-financial-management': '/resources/guide-entrepreneurship-accountancy/',
  'guide-telecommunications-and-media-pay-tv': '/resources/guide-telecommunications-and-media-television/',
  'guide-telecommunications-and-media-net-tv': '/resources/guide-telecommunications-and-media-television/',
  'guide-telecommunications-and-media-satellite-tv': '/resources/guide-telecommunications-and-media-television/',
  'guide-telecommunications-and-media-radio': '/resources/guide-telecommunications-and-media-index/',
  'guide-travel-finland-accommodation': '/housing/',
  'guide-travel-finland-finnish-travel-guides': '/explore/',
  'guide-travel-finland-finnish-adventures': '/explore/day-trips/',
  'guide-travel-finland-bus-train': '/resources/guide-travel-finland-public-transport/',
  'guide-shopping-in-finland-sales-tax': '/resources/guide-living-in-finland-tax/',
} as const

export const retiredArticleSlugs = Object.keys(retiredArticleRedirects)

export function retiredArticleDestination(slug: string): string | undefined {
  return retiredArticleRedirects[slug as keyof typeof retiredArticleRedirects]
}

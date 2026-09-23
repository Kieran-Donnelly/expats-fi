# Mobile performance review, 23 September 2026

## Live baseline

Google PageSpeed Insights tested the public homepage on an emulated Moto G Power over slow 4G:

- Performance: 91
- Accessibility: 96
- Best practices: 100
- SEO: 100
- First Contentful Paint: 1.6 seconds
- Largest Contentful Paint: 3.1 seconds
- Total Blocking Time: 30 milliseconds
- Cumulative Layout Shift: 0
- Speed Index: 4.4 seconds

The site is already in good rollout condition. The useful work now is targeted improvement, not chasing a perfect synthetic score.

## Improvement in this batch

The frontend layout previously loaded flag icons, Leaflet maps and every section stylesheet on every public page. That meant the homepage paid for sports, food, study, embassy and map styling it did not use.

Those assets are now scoped to the routes that need them:

- flag icons: embassy pages
- Leaflet: areas with food maps, food, events, sports and the playground map
- sports styling: sports pages
- food styling: food pages and neighbourhood guides with food maps
- study styling: study pages

The homepage hero also explicitly marks its Largest Contentful Paint image as high priority.

## Next sensible checks

1. Rerun PageSpeed after the production deployment and compare render-blocking CSS and LCP.
2. Repeat mobile checks for one editorial guide, news, businesses, events and the playground map.
3. Address real regressions first. The current zero layout shift and very low blocking time should not be traded away for cosmetic score chasing.

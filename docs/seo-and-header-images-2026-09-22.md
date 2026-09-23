# SEO and header-image review, 22 September 2026

## What the early search data says

Search Console's current performance window is still very small (roughly 3–19 September). It showed 20 clicks, 1.55k impressions, 1.3% CTR and average position 13.9. The strongest visible queries included Teurastamo Block Party (99 impressions), university of applied sciences (24), Helsinki parkrun (16), Sompasauna (14), Kiasma free entry (11) and learn Finnish (10). These are useful signals, but not enough data to justify a blanket rewrite of page titles. The relevant study, sports and explore routes already have specific metadata. Reassess after about 28 stable days, prioritising pages with meaningful impressions and weak CTR.

The 20 September sitemap crawl covered 494 public URLs and found no non-200 sitemap response, broken visitor-facing internal link, missing title, missing description, missing canonical, missing H1, missing image alt or accidental sitemap `noindex`. Search Console's older exclusion totals must be judged against exact URL examples, since redirects, canonical alternatives and intentionally private pages are not automatically problems. The 5xx group remains the one to watch after Google's validation completes.

## Header-image audit

Source-level review of the frontend routes before the image work in this document, with a live spot-check of the UAS guide confirming its then-missing photo. The homepage and all 18 top-level editorial hubs (`about`, `areas`, `businesses`, `community`, `culture`, `eats`, `embassies`, `events`, `explore`, `family`, `help`, `housing`, `learn-finnish`, `news`, `resources`, `sports`, `start-here`, `study`) specify a photographic header. The day-trips, playground-network, things-to-do-with-kids and Finland-on-a-Plate landing pages also specify one. Utility pages such as login, account, privacy and search are not counted as editorial hubs.

The shared `EditorialGuideDetail` template only renders a header photo when a route supplies `heroImage`. Its food guides, three newer history/culture guides and the first-90-days guide do. **The baseline audit found these 44 guide pages without one:**

| Section | Count | Guide slugs needing a distinct image |
| --- | ---: | --- |
| Areas | 11 | `kallio-and-hakaniemi`, `punavuori-and-the-design-district`, `toolo`, `kruununhaka-and-katajanokka`, `herttoniemi-and-roihuvuori`, `kamppi-and-kluuvi`, `eira-and-ullanlinna`, `vallila-and-konepaja`, `arabia-and-vanhakaupunki`, `lauttasaari`, `vuosaari-and-uutela` |
| Community | 5 | `where-to-start-when-you-know-nobody`, `language-cafes-and-international-communities`, `hobbies-sport-volunteering-and-work-connections`, `parents-families-and-meeting-locally`, `how-to-host-a-small-meetup-safely` |
| Culture | 8 | `directness-silence-and-making-plans`, `invited-to-a-finnish-home`, `finnish-sauna-without-the-panic`, `finnish-workplace-culture`, `eating-drinking-and-ordering-in-finland`, `finnish-year-holidays-and-closures`, `public-transport-queues-laundry-and-recycling`, `making-friends-and-finding-your-people` |
| Family | 9 | `healthcare-and-maisa`, `babies-and-neuvola`, `daycare-and-preschool`, `schooling-in-helsinki`, `teenagers-and-next-steps`, `benefits-and-family-money`, `social-services-and-family-support`, `community-and-support-groups`, `urgent-help-and-safety` |
| Housing | 4 | `finding-a-rental-home-in-finland`, `lease-deposit-and-moving-in`, `setting-up-and-running-your-home`, `repairs-rent-trouble-and-moving-out` |
| Study | 6 | `choosing-the-right-study-route`, `universities-and-universities-of-applied-sciences`, `vocational-study-and-apprenticeships`, `integration-training-and-finnish-for-working-life`, `open-university-online-and-flexible-study`, `tuition-fees-permits-and-paying-for-study` |
| Start Here | 1 | `digital-finland-survival-kit` |

The community board landing page is also a text-only hero despite having a photo in its social metadata. It merits a separate image. Community rules and other utility screens can remain intentionally plain.

These are visual/content gaps, not missing `alt` attributes. Several affected guides currently advertise a hub image to social sharing while showing no image in the visible header. Use an individual, relevant licensed photograph for each rather than repeating the hub picture. For a named place, use a genuine place image; for service or family guides, use non-literal documentary/people imagery that does not imply a specific facility or provider.

## Next implementation order

1. Source and add distinct photographs for Start Here, Study (especially the UAS guide), Areas and the community board.
2. Work through Community and Culture; verify mobile crop and text contrast on each template.
3. Rerun the sitemap audit and check that `editorialGuidesMissingHeaderImage` reaches zero, then spot-check representative routes in a browser.

Unlimphotos was signed in during this review, but its download control failed with a page-side JavaScript error (`callbackCatch is not defined`). No preview/watermarked file was used as a substitute. Twenty distinct, free-to-use Unsplash photographs were added in this batch. The Start Here digital guide, all six Study guide pages, all four Housing guides and all nine Family guides received individual header images and matching social images. Their source records are in `docs/image-licences.md`. This leaves **24 editorial guide headers** and the community board landing header still to source and implement.

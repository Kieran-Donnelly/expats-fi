# Expats.fi interaction events

Expats.fi uses its existing Google Analytics installation for these lightweight events. No additional analytics package or third-party tracker is added by this work.

## Events

| Event | When it fires | Anonymous context |
| --- | --- | --- |
| `search_submitted` | A visitor submits a search or filter form | Site section only |
| `guide_opened` | A visitor opens a practical guide from a guide card | Public guide slug and link position |
| `event_opened` | A visitor opens an event from an event card | Public event slug and link position |
| `business_profile_opened` | A visitor opens a directory profile from a business card | Public business slug and link position |
| `business_website_clicked` | A visitor leaves a profile for the business website | Public business slug |
| `business_contact_clicked` | A visitor uses a listed phone, booking, newsletter or WhatsApp link | Public business slug and contact type |
| `guide_saved` / `guide_unsaved` | A signed-in member changes a saved guide | Public guide slug |
| `business_saved` / `business_unsaved` | A signed-in member changes a saved business | Public business slug |
| `business_submission_started` | A visitor opens the free listing route from the homepage | Site section only |
| `business_submission_completed` | A signed-in member successfully submits a listing for review | No form values or identifying fields |

## Privacy boundary

Do not add names, email addresses, phone numbers, search terms, free-text fields or complete destination URLs to analytics event parameters. The delegated event listener reads only the explicit `data-analytics-*` attributes placed on links and forms.

## Useful first reports

1. Compare `search_submitted` by `site_section` to see where visitors need the most help finding content.
2. Compare profile opens with `business_website_clicked` and `business_contact_clicked` to understand whether directory entries lead to useful action.
3. Rank public slugs for guides, events and businesses to identify the content worth strengthening and linking more prominently.
4. Watch saves separately from opens. Saves are a stronger signal that a guide or business is genuinely useful.

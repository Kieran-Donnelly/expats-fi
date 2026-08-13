# Expats.fi admin interface

## Shipped in this release

- Payload is the single content source for guides, businesses, embassies, events and Finnish-learning content.
- The Payload dashboard has live content totals, draft review counts, common create links and a public-site preview link.
- `super-admin` users can manage users and members as well as all content.
- `editor` users can create, edit and publish content, but cannot change users or member records.
- `kieran@podium.dev` and `uriah@podium.dev` are protected super-admin identities. The migration promotes matching existing records, and the user hook enforces the role whenever either identity is created or updated.
- Events, learning paths, learning resources, language-practice groups and YKI resources are seeded from the existing curated data and read by the public pages through Payload.

## Operating model

1. Draft content in the relevant collection.
2. Check links, dates, addresses and source notes.
3. Publish only after the record is verified.
4. Recheck time-sensitive directory, embassy, event and course details on a regular cadence.

## Next enhancements

- Add a review-date dashboard that highlights stale embassy, event and learning records automatically.
- Add preview links from each collection to its public page.
- Add revision notes and a lightweight editorial owner field.
- Add bulk import/export for embassy and directory maintenance.
- Configure transactional email for password reset and admin invitations.
- Add audit-log views for access changes and publishing decisions.

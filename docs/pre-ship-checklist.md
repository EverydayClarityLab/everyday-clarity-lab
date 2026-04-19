# Pre-Ship Checklist

Use this lightweight checklist before pushing public ECL UI changes.

## Code Checks

- Run targeted lint for touched routes and components.
- Run `npm run build` when the change touches routing, dependencies, metadata, or shared layout.
- Note unrelated failures separately instead of over-refactoring.

## Link Checks

- Click the primary navigation.
- Click Labs CTAs.
- Click Kits cards.
- Test deep links for changed routes.
- Confirm any legacy URLs redirect cleanly.

## Responsive Checks

- Check mobile around 375px.
- Check mobile around 430px.
- Check desktop at a standard laptop width.
- Confirm cards, buttons, and image viewers remain tap-friendly.

## Language Checks

- Confirm public labels use the current vocabulary: Tour, MVP, and CVP.
- Confirm Labs language focuses on concept, problem framing, UX, and walkthrough.
- Confirm Kits language focuses on implementation depth, systems thinking, and build progression.

## Exposure Audit

- Search for private URLs, webhook URLs, account emails, tokens, and deployment references.
- Confirm CTAs point only to public pages, public repos, blog posts, docs, or walkthrough pages.
- Confirm metadata and Open Graph links do not expose private runtimes.

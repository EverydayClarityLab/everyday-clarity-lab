# ECL Cleanup Backlog

Status: initial cleanup pass shipped. Keep this file as a reference for future refinements and regression checks.

## P1. Route Rename Cleanup

Status: shipped.

Goal: rename the underlying route structure from `getting-started` / `intermediate` to `mvp` / `cvp`.

Tasks:
- Map every current legacy route to its new route.
- Update internal links.
- Update breadcrumbs.
- Update metadata/title logic.
- Add redirects from old routes if needed.
- Retest deep links.

Definition of done:
- No old route names remain in active internal navigation.
- Old links still resolve or cleanly redirect.
- Page titles and breadcrumbs match new terminology.

## P1. Copy Consistency Sweep

Status: shipped for current public labels.

Goal: remove mixed language between Labs, Kits, README, and detail pages.

Tasks:
- Standardize Labs language around concept, problem framing, UX, and walkthrough.
- Standardize Kits language around Tour, MVP, CVP, and implementation depth.
- Verify public concepts are framed as showcased, not hosted.
- Align README language to site language.

Definition of done:
- One consistent vocabulary system across repo and UI.

## P1. Private Runtime Exposure Audit

Status: shipped for current public code search.

Goal: guarantee ECL never exposes private live runtimes.

Tasks:
- Search for private URLs, webhook URLs, account emails, and deployment references.
- Confirm all CTAs point to blog, Labs, Kits, repo, README, or walkthrough pages only.
- Confirm no hidden buttons or test links remain.
- Confirm no metadata or OG links expose private runtimes.

Definition of done:
- Public ECL can showcase concepts, but cannot open private live runtimes directly.

## P2. Content Model Cleanup

Status: shipped for the current Kits/Labs catalog.

Goal: make future additions easier.

Tasks:
- Rename any internal data keys or enums that still imply `getting-started` / `intermediate`.
- Refactor card data into one shared config if it is duplicated.
- Align labels, slugs, and section descriptions.

Definition of done:
- Future cards and pages can be added once, consistently.

## P2. Smoke Test Checklist

Status: shipped.

Goal: make shipping safer next time.

Tasks:
- Create a lightweight pre-ship checklist in the repo.
- Include lint, build, link clicks, breakpoint checks, and exposure audit.

Definition of done:
- Future UI patches follow the same safe ship routine.

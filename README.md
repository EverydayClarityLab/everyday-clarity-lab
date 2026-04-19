# Everyday Clarity Lab

Everyday Clarity Lab is a Next.js site for publishing product strategy, AI-supported builds, and practical workflow ideas. The site is structured to separate concept storytelling from implementation depth through two layers: Labs, which showcase ideas and experience, and Kits, which document build paths, systems thinking, and technical progression.

## Site Structure

Everyday Clarity Lab is organized into two distinct layers: Labs and Kits.

### Labs

Labs showcase product ideas, problem framing, and the user-facing experience. They help visitors understand what a concept is, why it matters, and what using it could feel like. Tour pages live here.

### Kits

Kits show how concepts are built. They provide the implementation layer through MVP and CVP paths, including technical breakdowns, system decisions, and links to repos, code, and supporting READMEs.

### How they work together

Labs and Kits are designed to complement each other, not duplicate each other.

- Labs explain the concept and experience.
- Kits explain the build path and technical depth.

This structure lets Everyday Clarity Lab present ideas clearly while keeping live products and private builds in their own separate repositories and deployments.

### Current route mapping

The public UI should use the current product language consistently:

- Tour
- MVP
- CVP

The underlying route folders have not been renamed yet. For now, the safe mapping is:

- Tour -> `/labs/{slug}`
- MVP -> `/kits/getting-started/{slug}`
- CVP -> `/kits/intermediate/{slug}`

Do not surface `Getting Started` or `Intermediate` as visible labels on public pages. Those names are temporary implementation details until the route folders are renamed in a later cleanup.

## Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes Architecture

The notes system lives in `app/notes` and is split into two routes:

- `app/notes/page.tsx`
  The notes index page. It renders:
  - the notes landing page header
  - the AI summary block for the most recent writing
  - the card-based list of published posts

- `app/notes/[slug]/page.tsx`
  The dedicated blog post route. It renders:
  - breadcrumbs back to `/notes`
  - the full article body
  - the post hero image
  - in-body assets like infographics
  - the GitHub callout block
  - tags at the bottom of the post

## Notes Content Model

Post content is defined in `app/notes/posts.ts`.

Each note currently supports:

- `slug`
- `title`
- `publishedAt`
- `publishedLabel`
- `readTime`
- `summary`
- `imageSrc`
- `imageAlt`
- `tags`
- `body`

The `body` supports these block types:

- `paragraph`
- `subheading`
- `image`
- `linkCallout`

Helper functions in the same file:

- `getNoteBySlug(slug)`
- `buildNotesDigest(posts)`

## Adding a New Blog Post

1. Add a new post object to `app/notes/posts.ts`.
2. Create a unique slug in lowercase with hyphens.
3. Use an ISO date in `publishedAt` and a human-readable date in `publishedLabel`.
4. Add a dedicated image to `public/images`.
5. Add clear alt text for every image used in the post.
6. Keep the post title, summary, and tags aligned for readability and SEO.

Because the slug page uses `generateStaticParams`, new post slugs will automatically be picked up by the notes route.

## SEO Coverage

SEO is now applied in two places:

- `app/notes/page.tsx`
  Adds metadata for the notes index page.

- `app/notes/[slug]/page.tsx`
  Generates per-post metadata including:
  - title
  - description
  - canonical URL
  - Open Graph metadata
  - Twitter metadata

## Images

Current blog assets are stored in `public/images`.

Important note:

- If an updated image does not appear immediately in the browser, use a versioned filename such as `asset-name-v2.png` to avoid cached assets being reused.
- In-post `image` blocks on notes slug pages use the shared `LightboxImage` viewer in `components/LightboxImage.tsx`.
- The expected viewer pattern is:
  - render the modal through a portal to `document.body`
  - keep the backdrop and image card on separate layers
  - use a tight light frame around the image, not a large padded mat
  - let the image dominate the modal with `object-contain` and viewport-based height limits
  - anchor the close control to the image card so it feels part of the viewer
  - preserve simple close behavior with backdrop click and `Escape`

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4 utilities
- Vercel deployment target

## Current Notes Conventions

- The notes index uses image cards with hover borders.
- The full post page uses one page `H1` and structured `H2` subheads.
- Tags appear only on the dedicated post page.
- Infographics live inside the post body, not on the notes index.
- In-post images should open into the shared centered viewer rather than a page-contained overlay.
- The profile image is used as the first post card/hero image until a dedicated post image replaces it.

## Validation

During this notes build-out, the notes-specific files were validated with:

```bash
npx eslint app/notes/posts.ts app/notes/page.tsx app/notes/[slug]/page.tsx
```

There are older unrelated lint issues elsewhere in the repository, so repo-wide lint may still fail until those are addressed separately.

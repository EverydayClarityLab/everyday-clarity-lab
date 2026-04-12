# Everyday Clarity Lab

Everyday Clarity Lab is a Next.js site for publishing product strategy, AI-supported builds, and practical workflow ideas. The site currently includes a homepage, kits pages, labs pages, and a notes/blog system with index cards and dedicated post routes.

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
- The profile image is used as the first post card/hero image until a dedicated post image replaces it.

## Validation

During this notes build-out, the notes-specific files were validated with:

```bash
npx eslint app/notes/posts.ts app/notes/page.tsx app/notes/[slug]/page.tsx
```

There are older unrelated lint issues elsewhere in the repository, so repo-wide lint may still fail until those are addressed separately.

# Darshana & Manuel — Wedding Site

A minimalist two-page wedding site: the schedule for the wedding days in
Guwahati, and a Travel & FAQ page covering the post-wedding Meghalaya/Goa
trip, accommodation, flights, visa, and RSVP.

## Stack

- [TanStack Start](https://tanstack.com/start) (React, file-based routing),
  statically prerendered — no server/Node runtime needed at deploy time
- Tailwind CSS v4
- Vite
- Deployed on GitHub Pages via GitHub Actions
  (`.github/workflows/deploy.yml`), on every push to `main`

Live at <https://manuelanddarshana.github.io/wedding/>.

## Running locally

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:3000`.

## Building / deploying

`npm run build` statically prerenders both routes into `dist/client` (no
server output). Pushing to `main` triggers the GitHub Actions workflow that
builds and publishes `dist/client` to GitHub Pages automatically — no
manual deploy step needed.

Note: the site is served from the `/wedding/` subpath (a GitHub Pages
project page), configured via `base` in `vite.config.ts` and `basepath` in
`src/router.tsx`. If a custom domain is set up later, both should be
changed back to `/`.

## Structure

- `src/routes/index.tsx` — landing page and wedding-day schedule
- `src/routes/travel.tsx` — Travel & FAQ page
- `src/data/wedding.ts` — schedule, venues, and links (RSVP form, e-Visa)
- `src/components/` — shared nav, footer, and decorative motifs

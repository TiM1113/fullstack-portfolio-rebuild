# Tim Yuan - Personal Portfolio

Portfolio site for **Tian (Tim) Yuan** — software engineer, full-stack developer, and AI-native engineer based in Adelaide, Australia.

Source repository: [github.com/TiM1113/fullstack-portfolio-rebuild](https://github.com/TiM1113/fullstack-portfolio-rebuild)

## What is in the site

- `/` — hero plus a motion-heavy bento grid for current writing, experience, projects, contact, and stack
- `/about` — background, engineering principles, and working style
- `/blog` — searchable article index
- `/blog/[slug]` — individual long-form notes
- `/projects` — featured project index
- `/projects/[slug]` — project case studies
- `/stack` — categorized toolchain and platform notes

## Tech stack

- Next.js 16 App Router
- React 19
- TypeScript strict mode
- Tailwind CSS v4
- Motion for dock magnification and card tilt
- shadcn/ui primitives where appropriate

## Local development

Node baseline: `22.22.0`

```bash
nvm use
npm install
npm run dev
```

The dev server runs on [http://localhost:3000](http://localhost:3000) by default.

`npm run dev` uses Webpack for a stable local workflow in this workspace layout. If you specifically want to investigate the current Turbopack workspace-root issue, use `npm run dev:turbopack`.

## Quality commands

```bash
npm run lint
npm run typecheck
npm run build
npm run check
npm run test:e2e
```

`npm run test:e2e` starts its own local dev server on port `3100` through Playwright.

## Screenshots and visual handoff

```bash
npm run capture:screenshots
```

This captures the primary routes in:

- `docs/redesign-handoff/desktop-light/`
- `docs/redesign-handoff/desktop-dark/`
- `docs/redesign-handoff/mobile-light/`
- `docs/redesign-handoff/mobile-dark/`

If your dev server is not on port `3000`, set `SCREENSHOT_BASE_URL` before running the script.

## Deployment notes

- Production metadata uses `NEXT_PUBLIC_SITE_URL` when available.
- On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` is used as a fallback.
- If neither environment variable exists, the site falls back to `https://fullstack-portfolio-rebuild.vercel.app`.

## Docker

```bash
docker compose up dev --build
docker compose up app --build
```

- `dev` serves the site in development mode on `${DEV_PORT:-3001}`
- `app` builds the standalone production image and serves on `${PORT:-3000}`

## Project structure

```text
src/
  app/                Next.js routes
  components/         UI building blocks and motion components
  data/               Centralized content for routes and cards
  lib/                Shared utilities and metadata helpers
public/
  images/             Avatar, decorative assets, track art
  cv/                 Downloadable resume
docs/
  research/           Reference notes from the reconstruction process
  redesign-handoff/   Generated screenshots for design review
scripts/
  capture-screenshots.mjs
```

## Content sources

The portfolio copy is aligned with Tim Yuan's current resume and personal career status notes. When those sources change, update `src/data/site-content.ts` first so the rest of the site stays consistent.

## Acknowledgement

The visual direction started as a reverse-engineering exercise based on [educalvolopez-com.vercel.app](https://educalvolopez-com.vercel.app/) by Edu Calvo. The portfolio content, engineering decisions, and final structure are Tim Yuan's own.

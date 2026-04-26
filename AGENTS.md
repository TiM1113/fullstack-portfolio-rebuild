<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Tim Yuan — Personal Portfolio

## What This Is
The personal portfolio website for Tian (Tim) Yuan — Software Engineer, Full-Stack Developer, AI-Native Engineer based in Adelaide. Single-page-feel layout with multiple routes (`/`, `/about`, `/blog`, `/projects`, `/stack`), heavy on choreographed UI (dock magnification, scroll-driven blur, 3D mouse-tilt, glassmorphism).

> The visual design originated as a reverse-engineered clone of [educalvolopez-com.vercel.app](https://educalvolopez-com.vercel.app/) — see README.md for acknowledgement. Content and engineering are original.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict, Turbopack)
- **UI:** shadcn/ui (Radix primitives, Tailwind CSS v4 with oklch tokens, `cn()` utility)
- **Animation:** Motion (Framer Motion v12) for spring-driven dock + 3D tilt; CSS keyframes for meteor / ping / spin; IntersectionObserver for scroll-driven blur
- **Icons:** Lucide React + project-specific extracted SVGs
- **Deployment:** Vercel

## Commands
- `npm run dev` — Start dev server (Turbopack, port 3000)
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Mobile-first responsive

## Design Principles
- **Beauty-first** — every pixel matters; if a section feels close-but-not-right, fix it before moving on
- **Real content** — populate sections with Tim's actual projects, experience, and copy (sourced from `~/.claude/personal/career-status.md` and the latest resume)
- **Animation serves communication** — micro-interactions exist to guide attention, not to show off

## Project Structure
```
src/
  app/              # Next.js routes (/, /about, /blog, /projects, /stack)
  components/       # React components
    ui/             # shadcn/ui primitives
    icons.tsx       # Extracted SVG icons as React components
  lib/
    utils.ts        # cn() utility (shadcn)
  types/            # TypeScript interfaces
  hooks/            # Custom React hooks
public/
  images/           # Site assets
  seo/              # Favicons, OG images, webmanifest
docs/
  research/         # Research notes from the original design-cloning phase (kept as archive)
  design-references/ # Visual references and screenshots
scripts/            # Asset download utilities
```

## MOST IMPORTANT NOTES
- When launching parallel AI agent teams, ALWAYS have each teammate work in their own worktree branch and merge everyone's work at the end. The orchestrator (you) resolves conflicts with full context to overall goals.
- After editing `AGENTS.md`, run `bash scripts/sync-agent-rules.sh` to regenerate platform-specific instruction files (Cline, Continue, Amazon Q, Copilot Chat).
- After editing `.claude/skills/clone-website/SKILL.md`, run `node scripts/sync-skills.mjs` to regenerate the skill for all platforms.
- The `/clone-website` skill remains available for re-running the visual reconstruction pipeline if the design needs further refinement against the reference site.

@docs/research/INSPECTION_GUIDE.md

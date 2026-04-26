# Tim Yuan — Personal Portfolio

Personal portfolio site for **Tian (Tim) Yuan** — Software Engineer, Full-Stack Developer, AI-Native Engineer based in Adelaide, Australia.

> **Live:** _coming soon (Vercel)_
> **Source:** [github.com/TiM1113/fullstack-portfolio-rebuild](https://github.com/TiM1113/fullstack-portfolio-rebuild)

## About

Engineer who learns by shipping. Master of IT graduate (Flinders University, 2025) with a background that bridges design (15+ years) and modern full-stack engineering. Comfortable pairing with AI agents as independent verifiers, not auto-completers. Full Australian work rights, no sponsorship required.

- **Adelaide, SA · Australia**
- **+61 412 733 130** · yuantian1113@gmail.com
- GitHub: [TiM1113](https://github.com/TiM1113) (personal) · [yuan0173](https://github.com/yuan0173) (school)

## Featured Projects

| Project | Stack | Repo |
|---|---|---|
| **Food Delivery Platform** — production serverless food-delivery, rebuilt through 6 phases | Next.js 16 · Hono · PostgreSQL/Drizzle · NextAuth v5 · Stripe · Vercel | [FoodDelivery-AWS-Vercell](https://github.com/TiM1113/FoodDelivery-AWS-Vercell) |
| **llm-wiki** — multi-platform AI knowledge base skill (Karpathy methodology) with Louvain community detection | Bash installer · multi-platform skill spec · interactive HTML graph | [llm-wiki-skill](https://github.com/TiM1113/llm-wiki-skill) |
| **tim-dev-rig** — version-controlled Claude Code harness as code | Claude Code · custom slash-command skills · pre-commit hooks | [tim-dev-rig](https://github.com/TiM1113/tim-dev-rig) |
| **Farm Time Management System** — multi-role attendance & payroll PWA, Lead Dev / Scrum Master | React 18 · .NET 8 Web API · EF Core · SQLite | [comp9034FarmSystem](https://github.com/yuan0173/comp9034FarmSystem) |

## Tech Stack of This Site

- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict, Turbopack)
- **UI:** shadcn/ui + Radix primitives + Tailwind CSS v4 (oklch tokens)
- **Animation:** Motion (Framer Motion v12) — dock magnification, 3D mouse-tilt parallax, scroll-driven blur via IntersectionObserver
- **Icons:** Lucide React + extracted SVGs
- **Deployment:** Vercel

## Local Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run check     # lint + typecheck + build
```

### Docker

```bash
docker compose up dev --build   # dev mode on port 3001
docker compose up app --build   # production build
```

## Project Structure

```
src/
  app/              # Next.js routes (/, /about, /blog, /projects, /stack)
  components/       # React components — cards, hero, navigation
    ui/             # shadcn/ui primitives
  lib/utils.ts      # cn() utility
public/
  images/           # Site assets
  seo/              # Favicons, OG images
docs/
  research/         # Research notes from the design-cloning phase
  design-references/ # Visual references and screenshots
```

## Acknowledgement

The visual design of this site was reverse-engineered from [educalvolopez-com.vercel.app](https://educalvolopez-com.vercel.app/) by **Edu Calvo** as a learning exercise in advanced UI choreography (dock magnification, scroll-driven animation, glassmorphism). Original design credit belongs entirely to Edu Calvo. Content, copy, and underlying engineering are my own.

## License

MIT — see [LICENSE](LICENSE).

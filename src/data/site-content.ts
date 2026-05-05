export type NavigationIconName =
  | "avatar"
  | "user"
  | "book"
  | "code"
  | "layers"
  | "resume";

export type SocialIconName = "github" | "githubSchool" | "mail" | "resume";
export type ExperienceIconName = "briefcase" | "graduation" | "palette";

export interface NavigationItem {
  label: string;
  href: string;
  icon: NavigationIconName;
  isExternal?: boolean;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: SocialIconName;
}

export interface AboutPractice {
  title: string;
  body: string;
}

export interface ExperienceItem {
  org: string;
  startYear: string;
  endYear: string;
  role: string;
  icon: ExperienceIconName;
}

export interface BlogSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  publishedAt: string;
  readTime: string;
  excerpt: string;
  summary: string;
  tags: string[];
  sections: BlogSection[];
}

export interface Project {
  slug: string;
  title: string;
  period: string;
  summary: string;
  intro: string;
  role: string;
  repoUrl: string;
  stack: string[];
  outcomes: string[];
  highlights: string[];
}

export interface StackEntry {
  name: string;
  description: string;
}

export interface StackCategory {
  title: string;
  items: StackEntry[];
}

export const siteConfig = {
  name: "Tim Yuan",
  fullName: "Tian (Tim) Yuan",
  title: "Software Engineer & AI-Native Engineer",
  description:
    "Personal portfolio for Tian (Tim) Yuan, a full-stack software engineer in Adelaide focused on modern product delivery, AI-native workflows, and production-grade systems.",
  location: "Adelaide, South Australia",
  phone: "+61 412 733 130",
  email: "yuantian1113@gmail.com",
  resumePath: "/cv/Tim-Yuan-CV.pdf",
  sourceRepo:
    "https://github.com/TiM1113/fullstack-portfolio-rebuild",
  availability:
    "Open to software engineering roles, contract builds, and AI workflow consulting.",
  ogImage: "/og.jpg",
} as const;

export const navigationItems: readonly NavigationItem[] = [
  { label: "Home", href: "/", icon: "avatar" },
  { label: "About", href: "/about", icon: "user" },
  { label: "Blog", href: "/blog", icon: "book" },
  { label: "Projects", href: "/projects", icon: "code" },
  { label: "Stack", href: "/stack", icon: "layers" },
  {
    label: "Resume",
    href: siteConfig.resumePath,
    icon: "resume",
    isExternal: true,
  },
] as const;

export const socialLinks: readonly SocialLink[] = [
  {
    href: "https://github.com/TiM1113",
    label: "GitHub (personal)",
    icon: "github",
  },
  {
    href: "https://github.com/yuan0173",
    label: "GitHub (school)",
    icon: "githubSchool",
  },
  {
    href: `mailto:${siteConfig.email}`,
    label: "Email Tim",
    icon: "mail",
  },
  {
    href: siteConfig.resumePath,
    label: "Open resume",
    icon: "resume",
  },
] as const;

export const aboutParagraphs = [
  "I grew from a traditional MERN background into modern AI-native full-stack delivery by rebuilding a production food-delivery platform through six deliberate phases. Each phase focused on one real constraint: architecture migration, payment flow hardening, test rigor, security, or observability.",
  "My edge is not just shipping code quickly. It is designing systems, review loops, and AI workflows that stay trustworthy under change. I prefer evidence over assumption, instrumentation over intuition, and repeatable engineering habits over one-off heroics.",
] as const;

export const aboutPractices: readonly AboutPractice[] = [
  {
    title: "Learn-by-shipping loop",
    body: "Every new technology entered my toolkit through a real feature, not a tutorial. Hono, Drizzle, PostgreSQL, NextAuth v5, and shadcn/ui all stuck because I used them inside production-facing work with real tradeoffs.",
  },
  {
    title: "AI as an independent verifier",
    body: "I split roles across agents on purpose: one writes, another verifies. That removed the fake-green self-review pattern and forced clearer specs, tighter tests, and evidence-based debugging.",
  },
  {
    title: "Tooling as infrastructure",
    body: "I maintain tim-dev-rig as a version-controlled AI development environment. Rules, hooks, prompts, and memory are treated like production assets because they change delivery quality.",
  },
  {
    title: "Observation-first debugging",
    body: "I avoid source-level guessing. I start with logs, traces, reproduction steps, request payloads, and browser/runtime evidence before changing implementation.",
  },
] as const;

export const experienceItems: readonly ExperienceItem[] = [
  {
    org: "Flinders University",
    startYear: "2024",
    endYear: "2025",
    role: "Master of Information Technology — Graduated",
    icon: "graduation",
  },
  {
    org: "University of South Australia",
    startYear: "2023",
    endYear: "2024",
    role: "Master of IT (Enterprise Management)",
    icon: "graduation",
  },
  {
    org: "Beijing & Shanghai Studios",
    startYear: "2009",
    endYear: "2023",
    role: "Designer and IT Coordinator",
    icon: "briefcase",
  },
  {
    org: "Nanjing University of the Arts",
    startYear: "2005",
    endYear: "2009",
    role: "B.A. Animation",
    icon: "palette",
  },
] as const;

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "ai-tooling-as-infrastructure",
    title: "Why I treat AI tooling as infrastructure",
    publishedAt: "2026-05-04",
    readTime: "6 min read",
    excerpt:
      "AI coding quality changed when I stopped optimizing prompts in isolation and started versioning the entire environment around the model.",
    summary:
      "A practical note on why prompts alone are not enough, how I split agent responsibilities, and what changed after I started treating rules, hooks, and reviewer workflows as production infrastructure.",
    tags: ["AI workflow", "Tooling", "Quality"],
    sections: [
      {
        title: "Prompts were not the real bottleneck",
        paragraphs: [
          "Early wins with AI pair programming were easy to get, but the quality ceiling stayed low. The same model could look impressive in one session and careless in the next because the surrounding environment was unstable.",
          "What mattered more than a clever prompt was the operating system around the model: repository rules, quality gates, reusable skills, review checklists, and a clear contract for what counted as done.",
        ],
      },
      {
        title: "Splitting writer and verifier roles",
        paragraphs: [
          "The most valuable change was separating generation from verification. One agent could move quickly, but a second agent needed to inspect the output with fresh context and different incentives.",
        ],
        bullets: [
          "Code-writing agent focuses on forward progress.",
          "Verifier agent challenges assumptions and writes or runs tests independently.",
          "The human keeps ownership of architecture, priorities, and evidence standards.",
        ],
      },
      {
        title: "What became part of the infrastructure",
        paragraphs: [
          "I started versioning the rules and support files that shape model behavior. That includes global guardrails, slash commands, shell hooks, branch hygiene, and repository-specific task memory.",
          "Once these pieces lived in source control, improvements became reusable instead of conversational accidents.",
        ],
      },
      {
        title: "The practical outcome",
        paragraphs: [
          "Treating AI tooling as infrastructure made the work slower in the first hour and faster in every hour after that. Fewer regressions slipped through, debugging got sharper, and repeated tasks stopped depending on memory.",
        ],
      },
    ],
  },
  {
    slug: "six-phase-production-rebuild",
    title: "What a six-phase production rebuild actually taught me",
    publishedAt: "2026-04-18",
    readTime: "7 min read",
    excerpt:
      "The food-delivery platform was not one rewrite. It was six constrained rebuild phases, each chosen to expose a different weakness in my delivery process.",
    summary:
      "A breakdown of the production rebuild that forced me to learn migration planning, payment flow safety, test discipline, and observability the hard way.",
    tags: ["Architecture", "Testing", "Next.js"],
    sections: [
      {
        title: "Why I avoided the big-bang rewrite",
        paragraphs: [
          "A single heroic rewrite hides too many mistakes at once. I split the system into phases so each round had one learning target and one measurable improvement.",
        ],
      },
      {
        title: "The phases that mattered most",
        paragraphs: [
          "The biggest leaps came from the middle phases: moving to a cleaner full-stack architecture, hardening payments and access control, and building enough automated coverage to stop arguing with myself about quality.",
        ],
        bullets: [
          "Architecture migration into a cleaner Next.js 16 and Hono shape.",
          "Stripe payments, RBAC, and KYC flows with safer edge cases.",
          "70 backend tests and 101 E2E tests to prevent confidence theater.",
        ],
      },
      {
        title: "The lesson behind the metrics",
        paragraphs: [
          "The tests, traces, and logs mattered because they changed how decisions were made. I stopped accepting code that only looked plausible and started requiring evidence from runtime behavior.",
        ],
      },
      {
        title: "What I would repeat",
        paragraphs: [
          "I would keep the phased structure, the stricter review split across humans and agents, and the focus on production constraints. It is a slower way to learn, but it creates habits that scale beyond a single project.",
        ],
      },
    ],
  },
] as const;

export const projects: readonly Project[] = [
  {
    slug: "food-delivery-platform",
    title: "Food Delivery Platform",
    period: "2025 - present",
    summary:
      "Production serverless food-delivery rebuilt through six phases covering architecture migration, payments, RBAC, KYC, testing, and observability.",
    intro:
      "This project became my main proving ground for modern product delivery. Instead of a one-shot rewrite, I rebuilt the platform through six constrained phases so each release forced one new engineering discipline into the stack.",
    role:
      "Full-stack architecture, payments, testing strategy, observability, deployment",
    repoUrl: "https://github.com/TiM1113/FoodDelivery-AWS-Vercell",
    stack: [
      "Next.js 16",
      "Hono",
      "PostgreSQL",
      "Drizzle ORM",
      "NextAuth v5",
      "Stripe",
      "Vercel",
    ],
    outcomes: [
      "Structured the rebuild as six deliberate phases instead of one risky rewrite.",
      "Shipped 70 backend tests and 101 E2E tests to stabilize product changes.",
      "Added RBAC, KYC verification, payment flows, and production-grade monitoring.",
    ],
    highlights: [
      "Cart and order flows designed for race-safe updates.",
      "Clear split between app shell, API layer, and typed shared contracts.",
      "Sentry and Vercel observability added as first-class operating tools.",
    ],
  },
  {
    slug: "llm-wiki-skill",
    title: "llm-wiki",
    period: "2026",
    summary:
      "A multi-platform AI knowledge-base skill inspired by Karpathy's llm-wiki methodology, with a watercolor-style interactive graph and Louvain community detection.",
    intro:
      "llm-wiki was built to make large knowledge sets easier to explore from inside agent environments. The goal was not just storage, but discoverability: weighted edges, aliases, and a graph view that stays readable as the map grows.",
    role:
      "Product design, graph UX, packaging, installation flow, cross-platform support",
    repoUrl: "https://github.com/TiM1113/llm-wiki-skill",
    stack: [
      "Bash installer",
      "HTML",
      "JavaScript",
      "Cross-platform skill packaging",
    ],
    outcomes: [
      "One installer ships the same core workflow to four agent platforms.",
      "Interactive graph supports Louvain clustering and synonym-aware lookup.",
      "Project doubles as a repeatable template for shipping AI skills like software.",
    ],
    highlights: [
      "Watercolor-style graph presentation instead of generic node-link visuals.",
      "Alias-based search to reduce missed hits across naming conventions.",
      "Cross-platform documentation and sync scripts kept in one source of truth.",
    ],
  },
  {
    slug: "tim-dev-rig",
    title: "tim-dev-rig",
    period: "2026",
    summary:
      "A version-controlled AI development environment with reusable rules, hooks, skills, and review loops for Claude Code and other agent platforms.",
    intro:
      "tim-dev-rig packages the habits around AI-assisted development into code. Instead of relying on memory, it codifies repository rules, hooks, instructions, and recovery workflows so each session starts from a stronger baseline.",
    role:
      "Workflow design, automation, prompt architecture, repo maintenance",
    repoUrl: "https://github.com/TiM1113/tim-dev-rig",
    stack: ["Claude Code", "Bash hooks", "Markdown skills", "Git automation"],
    outcomes: [
      "Turned repeated review lessons into reusable guardrails and slash commands.",
      "Reduced setup cost for new projects and new AI sessions.",
      "Created a durable place to refine prompts, hooks, and team habits over time.",
    ],
    highlights: [
      "Pre-commit and pre-push checks reinforce review discipline.",
      "Skill authoring and sync scripts support multi-platform reuse.",
      "Memory files keep long-running context from collapsing between sessions.",
    ],
  },
  {
    slug: "farm-time-management-system",
    title: "Farm Time Management System",
    period: "2024",
    summary:
      "A multi-role attendance and payroll PWA built as Lead Developer and Scrum Master, with offline-first sync, audit trails, and role-based access control.",
    intro:
      "This team project forced me to balance product delivery with coordination. I acted as both Lead Developer and Scrum Master, which meant the work had to scale across people, not just code files.",
    role:
      "Lead Developer, Scrum Master, API design, offline sync, auditing",
    repoUrl: "https://github.com/yuan0173/comp9034FarmSystem",
    stack: [
      "React 18",
      ".NET 8 Web API",
      "EF Core",
      "SQLite",
      "IndexedDB",
    ],
    outcomes: [
      "Delivered a multi-role attendance and payroll workflow as a PWA.",
      "Implemented offline-first event queueing with automatic resynchronization.",
      "Added RBAC, JWT auth, and audit logging across operational actions.",
    ],
    highlights: [
      "Designed for unstable connectivity in practical field conditions.",
      "Handled role-sensitive workflows across managers and workers.",
      "Kept project delivery moving while coordinating sprint execution.",
    ],
  },
] as const;

export const stackCategories: readonly StackCategory[] = [
  {
    title: "Frontend",
    items: [
      {
        name: "Next.js 16 + React 19",
        description:
          "App Router, strict TypeScript, and Turbopack are my default baseline for product work.",
      },
      {
        name: "Tailwind CSS v4 + shadcn/ui",
        description:
          "Design tokens, utility-first styling, and composable primitives that I can tune without fighting the system.",
      },
      {
        name: "Motion",
        description:
          "Spring-based motion for navigation, 3D tilt, and choreographed UI that supports comprehension instead of noise.",
      },
      {
        name: "Type-safe component APIs",
        description:
          "Strict props, predictable composition, and small reusable patterns over ad hoc one-off markup.",
      },
    ],
  },
  {
    title: "Backend and Data",
    items: [
      {
        name: "Hono",
        description:
          "Typed server routing with a small footprint that fits well with Vercel serverless patterns.",
      },
      {
        name: ".NET 8 Web API",
        description:
          "Still useful for structured line-of-business systems and coursework systems where C# and EF Core are a better fit.",
      },
      {
        name: "PostgreSQL + Drizzle ORM",
        description:
          "Typed schema definitions, safer migrations, and direct SQL escape hatches when precision matters.",
      },
      {
        name: "Shared contracts with Zod",
        description:
          "Validation and data shape control that spans form input, API payloads, and database writes.",
      },
    ],
  },
  {
    title: "Auth, Payments, Quality",
    items: [
      {
        name: "NextAuth v5 + RBAC",
        description:
          "Cookie-based auth, role-aware session checks, and consistent access rules across app surfaces.",
      },
      {
        name: "Stripe",
        description:
          "Checkout flows, webhook verification, refund handling, and KYC-style verification work.",
      },
      {
        name: "Vitest + Playwright",
        description:
          "Automated coverage that checks behavior independently instead of relying on the same agent that wrote the feature.",
      },
      {
        name: "Sentry + Vercel Analytics",
        description:
          "Operational visibility for runtime failures, traces, and real-user performance instead of post-hoc guessing.",
      },
    ],
  },
  {
    title: "AI Toolchain",
    items: [
      {
        name: "Claude Code",
        description:
          "Primary drafting agent for implementation-heavy tasks when paired with strong repository guardrails.",
      },
      {
        name: "Codex",
        description:
          "Independent reviewer, verifier, and secondary implementer used to challenge assumptions and close gaps.",
      },
      {
        name: "MCP servers",
        description:
          "Browser, mail, drive, docs, and external system bridges when local repository context is not enough.",
      },
      {
        name: "Multi-platform skill authoring",
        description:
          "One capability definition, synced across Claude, Codex, and other agent environments where possible.",
      },
    ],
  },
  {
    title: "Infra and DevOps",
    items: [
      {
        name: "Vercel",
        description:
          "Default deployment target with strong preview flows, serverless ergonomics, and low-friction front-end iteration.",
      },
      {
        name: "AWS S3 + Lambda",
        description:
          "Useful where direct uploads, task glue, or legacy infrastructure constraints still matter.",
      },
      {
        name: "Upstash Redis",
        description:
          "Simple serverless rate limiting and ephemeral cache patterns without managing Redis myself.",
      },
      {
        name: "GitHub Actions",
        description:
          "CI gates for checks, review automation, and repeatable release quality instead of manual ceremony.",
      },
    ],
  },
] as const;

export const contactCard = {
  heading:
    "Building production-minded products with clear UX, strong feedback loops, and AI-assisted delivery that can still be trusted.",
  primaryLabel: "Send an email",
  primaryHref: `mailto:${siteConfig.email}`,
  secondaryLabel: "Browse projects",
  secondaryHref: "/projects",
} as const;

export const spotifyTrack = {
  title: "Sky Becomes Water",
  artist: "Ryan Amon, City of the Fallen",
  href: "https://open.spotify.com/track/7e4qdUt1TBfovilB8GtEIM",
  albumArt: "/images/spotify/album-art.jpg",
} as const;

export const latestBlogPost = blogPosts[0];
export const featuredProjects = projects.slice(0, 3);

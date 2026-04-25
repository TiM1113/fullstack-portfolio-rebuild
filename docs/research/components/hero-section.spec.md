# HeroSection Specification

## Overview
- **Target file:** `src/components/hero-section.tsx`
- **Interaction model:** Static (social links have group hover effect)

## DOM Structure
```
div.sm:px-8.mt-16.sm:mt-32
  div.mx-auto.max-w-xl
    h1 (sr-only "Edu Calvo - Portfolio")
    Link → avatar image (rounded-full, w-16, border)
    div → name text + subtitle text
    p → availability badge (green dot + text)
    div → 6 social link icons (group hover)
```

## Computed Styles

### Outer container
- padding: 0 32px (sm:px-8)
- margin-top: 128px (sm:mt-32), 64px on mobile (mt-16)

### Inner container
- max-width: xl (~576px), mx-auto

### Avatar
- width: 64px (w-16), height: 64px
- border-radius: 9999px (rounded-full)
- padding: 2px (p-0.5)
- border: 1px solid rgb(229,231,235)
- background: rgb(244,244,245) (bg-zinc-100)

### Name
- font-size: 16px, font-weight: 400, line-height: 28px
- color: rgb(0,0,0) / dark: rgb(255,255,255)
- letter-spacing: -0.4px on h2 variant

### Subtitle
- "Diseñador web y Frontend con sede en Madrid"
- color: rgb(64,64,64) / dark: rgba(255,255,255,0.8)

### Availability Badge
- Inline-flex, items-center
- Green dot: w-2 h-2, rounded-full, bg-lime-400 (rgb(163,230,53))
- Text: "Disponible para nuevos proyectos"
- font-size: 14px, text-zinc-600

### Social Links Container
- display: flex, gap: 16px, flex-wrap: wrap

### Social Link Item (each)
- Container: relative, flex, items-center, group
- Icon (default): w-6 h-6, stroke-[1.5px], text-neutral-900, dark:text-zinc-400
- Arrow icon: absolute, w-4 h-4, opacity-0, transition-all
- On group hover: arrow opacity → 100%, translateX(4px)
- On group hover: OTHER sibling links → opacity-20, blur-sm
- Transition: transition-all

### Social Links Data
1. Twitter: https://twitter.com/educalvolpz, "Seguir en Twitter"
2. Instagram: https://instagram.com/edui_design, "Seguir en Instagram"
3. GitHub: https://github.com/educlopez, "Seguir en GitHub"
4. LinkedIn: https://linkedin.com/in/educlopez, "Seguir en LinkedIn"
5. Read.cv: https://read.cv/educlopez, "Read.cv"
6. Email: mailto:example@example.com, "Enviar Correo"

## Text Content (verbatim)
- H1 (sr-only): "Edu Calvo - Portfolio"
- Name: "Edu Calvo - Portfolio"
- Subtitle: "Diseñador web y Frontend con sede en Madrid"
- Badge: "Disponible para nuevos proyectos"

## Responsive
- Desktop: mt-32, px-8
- Mobile: mt-16, px-4 (default)

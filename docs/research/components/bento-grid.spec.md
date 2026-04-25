# BentoGrid Specification

## Overview
- **Target file:** `src/components/bento-grid.tsx`
- **Interaction model:** Static grid layout with hover effects on cards

## Grid Container
- Classes: `grid grid-cols-6 gap-4 mb-2 text-left grid-rows-12 sm:grid-rows-7 md:grid-rows-6 lg:grid-rows-2`
- Desktop (1440px): 6 columns, 2 rows of 320px, gap 16px
- Width: 1120px (max-w-7xl wrapped)
- Outer wrapper: sm:px-8 mt-24 md:mt-28 → div.mx-auto.max-w-7xl

## Shared Card Styles
- Classes: `group flex flex-col items-start rounded-2xl box-gen p-4 shadow hover:shadow-lg overflow-hidden relative`
- border-radius: 16px
- padding: 16px
- background: rgba(250,250,250,0.7) / dark: rgba(23,23,23,0.7)
- backdrop-filter: blur(24px)
- box-shadow: default → hover: larger shadow
- border: 1px solid white (via box-gen)
- height: 320px (h-80)
- overflow: hidden

## Card 0: Latest Blog Post
- Grid: col-span-6 sm:col-span-3 lg:col-span-3
- **Section label pill:** inline-flex, h-8, gap-1, px-4, text-sm, leading-5, rounded-full, box-gen, ring-1 ring-zinc-200
  - Icon: Sparkles (w-4 h-4)
  - Text: "Último Post"
- Date: time element, "18 de febrero de 2023", text-sm text-zinc-500
- Title: h2, font-weight 600, letter-spacing -0.4px, link to /blog/post2
- Tag: "#Desarrollo", text-sm text-lime-600 (rgb(163,230,53) bg area)
- Excerpt: paragraph, text-sm, text-zinc-600, line-clamp

## Card 1: Experience
- Grid: col-span-6 sm:col-span-3 lg:col-span-3
- **Section label pill:** Briefcase icon + "Experiencia"
- List of 5 work entries, each:
  - Company logo (w-10 h-10, rounded-full, shadow-md)
  - Company name + date range (sr-only labels "Empresa y Fecha", "Rol")
  - Role text
- Footer: two action links
  - "Read.cv" link with scroll/ReadCV icon
  - "Descargar cv" link with Download icon
  - Both: box-gen, ring-1, rounded-lg, p-1, hover:bg-zinc-100

### Experience Data
1. Cinetic Digital, 2021 - Presente, Diseñador Web y Frontend
2. Ádraba, 2018 - 2021, Diseñador Gráfico y Desarrollador Web
3. Tantra, 2015 - 2019, Diseñador Gráfico y Maquetador web
4. BDO, 2016 - 2017, Diseñador Gráfico y Maquetador web
5. Papaya Group, 2014 - 2014, Diseñador Gráfico.

## Card 2: Projects
- Grid: col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2
- **Section label pill:** MessageCircle icon + "Proyectos"
- Contains 2 overlapping project cover images with will-change-transform
  - Images: rounded-3xl, shadow-xl, bg-black
  - Slight rotation/offset for stacked effect

## Card 3: Spotify + Contact (sub-grid)
- Grid: col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2
- Container: grid grid-rows-3 gap-4 (no card styling on container itself)

### Sub-card A: Spotify Widget (1 row)
- Album art: 64x64, rounded, absolute positioned with z-10
- Track: "Sky Becomes Water" (link to Spotify)
- Artist: "Ryan Amon, City of the Fallen"
- Spotify icon link
- Card style: rounded-2xl, box-gen, shadow, p-4

### Sub-card B: Contact (2 rows, row-span-2)
- **Section label pill:** MessageCircle icon + "Contactar"
- Text: "Construyendo experiencias digitales excepcionales. ¡Hablemos de tu proyecto!"
- Two CTA buttons:
  - "Envíame un Email" → mailto:example@example.com
  - "DM en Twitter" → https://x.com/messages/compose?recipient_id=296227502
- Buttons: dark bg, white text, rounded-full, px-4, h-8

## Card 4: Stack
- Grid: col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2
- **Section label pill:** Layers icon + "Stack"
- Contains custom SVG grid showing tech icons (Tailwind, Next.js, etc.)
- Each icon cell: link to /stack, hover:bg-neutral-100
- SVG is a complex inline graphic with grid lines and tech logos

## Responsive
- Mobile: all cards col-span-6 (full width), stacked
- Tablet (sm): cards go 3+3 columns
- Desktop (lg): 3+3 top row, 2+2+2 bottom row

# Page Topology

## Site Map
- `/` — Home (bento grid dashboard)
- `/about` — About page (bio + testimonials)
- `/blog` — Blog listing (search + post list)
- `/blog/[slug]` — Blog post detail
- `/proyectos` — Projects page (project cards + client logos)
- `/stack` — Tech stack page (categorized tool lists)
- External: `educalvolopez.lemonsqueezy.com` — Shop (linked, not cloned)

## Home Page (`/`)

### Layout Architecture
```
<body> — background: url("/images/gradient2.svg"), bg-zinc-50
  <div> — wrapper, mb-16 sm:mb-32
    <main>
      [Section 1: Hero] — full width, mt-16 sm:mt-32, px-8
        └── max-w-xl mx-auto
      [Section 2: Bento Grid] — mt-24 md:mt-28, px-8
        └── max-w-7xl mx-auto (1120px)
            └── grid grid-cols-6 gap-4 grid-rows-2 (desktop)
                ├── [Card 0: Blog Post]     — col-span-3, row 1
                ├── [Card 1: Experience]    — col-span-3, row 1
                ├── [Card 2: Projects]      — col-span-2, row 2
                ├── [Card 3: Spotify+Contact] — col-span-2, row 2 (sub-grid)
                └── [Card 4: Stack]         — col-span-2, row 2
    [Fixed: Bottom Nav Bar] — fixed, bottom-8, centered, z-10
```

### Section Details

#### 1. Hero (ref=e8)
- **Type:** Static header
- **Interaction model:** Static (social links have group hover)
- **Content:** Avatar, name "Edu Calvo - Portfolio", subtitle, availability badge, 6 social links
- **Max-width:** xl (~576px), centered

#### 2. Bento Grid (ref=e71)
- **Container:** `grid grid-cols-6 gap-4`, width 1120px, max-w-7xl
- **Responsive:** grid-rows-12 → sm:grid-rows-7 → md:grid-rows-6 → lg:grid-rows-2
- **Card shared styles:** rounded-2xl, p-4, shadow hover:shadow-lg, overflow-hidden, bg rgba(250,250,250,0.7)

##### Card 0: Latest Blog Post (ref=e72)
- **Grid:** col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-3
- **Content:** "Ultimo Post" label with icon, date, title link, tag "#Desarrollo", excerpt
- **Interaction:** Static card, title is a link to /blog/post2

##### Card 1: Experience (ref=e86)
- **Grid:** col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-3
- **Content:** "Experiencia" label, 5 work entries (company logo, name, date range, role)
- **Footer:** Read.cv link + "Descargar cv" link
- **Interaction:** Static list, scrollable if overflow

##### Card 2: Projects (ref=e158)
- **Grid:** col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2
- **Content:** "Proyectos" label, 2 overlapping project cover images
- **Interaction:** Images have will-change-transform (likely hover perspective effect)

##### Card 3: Spotify + Contact (ref=e171)
- **Grid:** col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2
- **Sub-grid:** grid grid-rows-3 gap-4
- **Sub-card A (Spotify widget, ref=e292):** Album art, track name, artist, Spotify link
- **Sub-card B (Contact, ref=e178):** "Contactar" label, CTA text, "Envíame un Email" + "DM en Twitter" buttons
- **Interaction:** Static links

##### Card 4: Stack (ref=e192)
- **Grid:** col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2
- **Content:** "Stack" label, grid of 7 tech stack icon links
- **Interaction:** Icons link to /stack page

#### 3. Fixed Bottom Nav Bar (ref=e244)
- **Position:** fixed, bottom-8, left-1/2, -translate-x-1/2, z-10
- **Size:** 427px wide, 64px tall
- **Style:** Glassmorphism — backdrop-blur(24px), semi-transparent bg, rounded-2xl, ring-1
- **Items:** Home (avatar), About, Blog, Proyectos, Stack, Tienda | separator | Theme toggle
- **Desktop only:** hidden on mobile (md:flex), mobile uses separate <header> element
- **Hover:** Tooltip labels appear above icons

## About Page (`/about`)

### Layout
```
<main>
  [Section 1: Bio] — max-w-xl, centered
    ├── Portrait image (right-aligned)
    ├── Heading "Soy Edu Calvo, un apasionado del diseno y desarrollo web."
    ├── Bio paragraph
    └── Social links (same 6 as hero)
  [Section 2: Testimonials] — "Testimonios" heading
    └── Grid of testimonial quote cards
[Fixed: Bottom Nav Bar] — same as home
```

## Blog Page (`/blog`)

### Layout
```
<main>
  [Section 1: Header] — max-w-2xl, centered
    ├── Heading "Escribiendo sobre diseno de interfaces, programacion y hobbies."
    └── Subtitle paragraph
  [Section 2: Search] — search input with icon
  [Section 3: Post List] — chronological
    ├── Post entry (date, title link, tag, excerpt)
    └── Post entry (date, title link, tag, excerpt)
[Fixed: Bottom Nav Bar]
```

## Projects Page (`/proyectos`)

### Layout
```
<main>
  [Section 1: Header] — max-w-2xl, centered
    ├── Heading "Proyectos que he realizado durante mi carrera."
    └── Subtitle
  [Section 2: Featured Projects] — "Proyectos destacados"
    └── 3 project cards (cover image, title, date)
  [Section 3: Client Logos] — infinite scroll carousel
    └── 8 logos x 3 repetitions
[Fixed: Bottom Nav Bar]
```

## Stack Page (`/stack`)

### Layout
```
<main>
  [Section 1: Header] — max-w-2xl, centered
    ├── Heading "El software que uso, los dispositivos que creo y otras cosas que recomiendo."
    └── Subtitle
  [Section 2: Categories] — stacked sections
    ├── "Workstation" — hardware list items
    ├── "Desarrollo" — dev tools list items
    ├── "Diseno" — design tools list items
    └── "Productividad" — productivity apps list items
[Fixed: Bottom Nav Bar]
```

## Shared Components
- **Bottom Nav Bar** — fixed on all pages
- **Body background** — gradient SVG on all pages
- **Card style** — shared glassmorphism pattern (rounded-2xl, shadow, semi-transparent bg)
- **Section label** — icon + text pattern used across bento cards

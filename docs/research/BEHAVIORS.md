# Behaviors & Interactions

## Global Behaviors

### Theme Toggle (Dark/Light)
- **Trigger:** Click theme toggle button in bottom nav bar
- **Mechanism:** `.dark` class on `<html>` element + `color-scheme: dark` style
- **Light mode:** body bg rgb(250, 250, 250), text rgb(0, 0, 0), cards rgba(250, 250, 250, 0.7)
- **Dark mode:** body bg rgb(23, 23, 23), text rgb(255, 255, 255), cards rgba(23, 23, 23, 0.7)
- **Toggle icon:** Sun icon (light) / Moon icon (dark)
- **No transition animation observed** on theme switch

### Background Gradient
- Body has a gradient SVG background: `url("/images/gradient2.svg")`
- Visible in both light and dark modes (subtle blue/purple gradient, top-right area)

### No Smooth Scroll Library
- No Lenis, Locomotive Scroll, or custom scroll behavior detected
- `scroll-behavior: auto` on html

## Bottom Navigation Bar

### Hover Tooltips
- **Trigger:** Hover over any nav button
- **Behavior:** Label text appears above the icon (e.g., "Inicio", "About", "Blog", "Proyectos", "Stack", "Tienda")
- **The "Inicio" button shows avatar image instead of SVG icon**
- **Separator:** Vertical 1px line (rgb(212, 212, 212)) between nav items and theme toggle

### Nav Bar Glassmorphism
- `backdrop-filter: blur(24px)`
- `background-color: rgba(250, 250, 250, 0.7)` (light) / `rgba(23, 23, 23, 0.7)` (dark)
- `border: 1px solid rgb(255, 255, 255)` + `ring-1 ring-zinc-200`
- `border-radius: 16px`

## Hero Section

### Social Links Group Hover
- **Trigger:** Hover over any social icon
- **Behavior:** Hovered icon stays fully opaque with link/tooltip visible; all OTHER icons fade to opacity-20
- **Transition:** `transition-all` on each icon
- **Icons:** Twitter, Instagram, GitHub, LinkedIn, Read.cv, Email (6 total)

### Availability Badge
- Green dot (rgb(163, 230, 53)) + "Disponible para nuevos proyectos" text
- Static, no animation observed

## Bento Grid Cards

### Card Hover
- **Trigger:** Hover over any card
- **Before:** `shadow` (subtle box-shadow)
- **After:** `shadow-lg` (larger box-shadow)
- **Transition:** CSS transition on box-shadow

### Projects Card - Image Stack
- Two project cover images stacked/overlapping with `will-change-transform`
- Likely has hover rotation/perspective effect (based on class names)

## Blog Page

### Search Input
- Search bar with magnifying glass icon
- Placeholder: "Buscar artículos por título o tema"

## Projects Page

### Client Logo Carousel
- 8 client logos repeated 3x in markup (infinite scroll illusion)
- Logos: Aneto, Dentaid, Jane, Termix, Banco Sabadell, UAM, Tantra Spain, Net2phone

## About Page

### Testimonials Section
- Grid of testimonial quote cards
- Each with attribution (name + role)
- No carousel/animation — static grid layout

## Responsive Behavior
- Desktop (1440px): 6-column bento grid, 2 rows, bottom nav visible
- Tablet/Mobile: Grid collapses — cards stack vertically, mobile nav uses `<header>` element (different from desktop nav)
- Nav bar: `hidden md:flex` on desktop version, separate mobile version

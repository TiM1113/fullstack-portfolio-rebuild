# BottomNav Specification

## Overview
- **Target file:** `src/components/bottom-nav.tsx`
- **Interaction model:** Click-driven (nav links + theme toggle)

## DOM Structure
Fixed bottom bar → inner container (flex, glassmorphism) → buttons with links + tooltip labels

## Container (outer)
- position: fixed
- bottom: 32px (bottom-8)
- left: 50%, transform: translateX(-50%)
- z-index: 10
- display: flex (hidden on mobile, md:flex)
- flex-direction: column

## Container (inner)
- display: flex
- align-items: flex-end
- height: 64px
- gap: 16px
- padding: 0 16px 10px
- background: rgba(250,250,250,0.7) / dark: rgba(23,23,23,0.7)
- backdrop-filter: blur(24px)
- border-radius: 16px
- border: 1px solid white / dark: 1px solid rgba(255,255,255,0.1)
- ring: 1px solid rgb(228,228,231) / dark: #1a1a1a
- width: auto (content-sized)

## Nav Items (7 buttons + 1 separator + 1 theme toggle)
Each button:
- width: 40px, height: 42px (home is 40x40)
- cursor: pointer
- Contains tooltip div + link with icon

### Items:
1. **Inicio** — avatar image (not SVG), links to /
2. **About** — User icon, links to /about
3. **Blog** — BookOpen icon, links to /blog
4. **Proyectos** — Code icon, links to /proyectos
5. **Stack** — layers/Stack icon, links to /stack
6. **Tienda** — ShoppingCart icon, links to external lemonsqueezy URL
7. **Separator** — hr, 1px wide, 40px tall, bg-neutral-300, dark:bg-neutral-700
8. **Theme toggle** — Sun/Moon icons, toggles dark class

### Tooltip behavior
- Each nav button has a tooltip that appears above on hover
- Tooltip shows the label text
- Icon container: rounded-full, bg-neutral-200/70, dark:bg-neutral-700/50

## Responsive
- Desktop (md+): Visible as fixed bottom bar
- Mobile (<md): Hidden, separate mobile header component exists

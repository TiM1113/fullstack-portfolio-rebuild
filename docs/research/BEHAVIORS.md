# Behaviors & Interactions (Comprehensive)

This is the **full** behavior bible from running the Mandatory Interaction Sweep with state A → trigger → state B → diff for every interactive element.

## Animation Inventory

| # | Element | Type | Library |
|---|---------|------|---------|
| 1 | Bottom Nav icons | Mouse-tracking dock magnification | Framer Motion |
| 2 | Bottom Nav tooltip | Hover-triggered label | CSS group-hover |
| 3 | Available badge | Pulsing radar dot | CSS `animate-ping` |
| 4 | Hero social links | Group hover fade + arrow | Custom CSS |
| 5 | Bento cards | Hover shadow transition | CSS `transition-shadow` |
| 6 | Experience card | Scroll-snap blur focus | IntersectionObserver + CSS |
| 7 | Projects card | 3D mouse-tracking tilt | Framer Motion |
| 8 | Spotify album art | Spinning vinyl | CSS `animate-spin` |
| 9 | Stack card meteors | Meteor shower particles | CSS `@keyframes meteor` |
| 10 | Stack card SVG cells | Cell hover fill | CSS `:hover` |
| 11 | Theme toggle | Sun/Moon icon swap | React state |

---

## 1. Bottom Nav — Dock Magnification

**Library:** Framer Motion (`useMotionValue` + `useTransform` + `useSpring`)

**Mechanism:**
- Tracks cursor X coordinate via `onMouseMove`
- For each icon, computes distance from cursor to icon center
- Maps distance to width via a falloff function

**Measured values** (when cursor over Blog button, index 2):

| Index | Label | Width | Distance |
|-------|-------|-------|----------|
| 0 | Home | 49.9px | 2 |
| 1 | About | 64.4px | 1 |
| 2 | Blog (hovered) | **78.6px** | 0 |
| 3 | Projects | 64.1px | 1 |
| 4 | Stack | 49.7px | 2 |
| 5 | Shop | 40.0px | 3+ |

- Base width: 40px
- Max width: ~80px
- Falloff: smooth bell curve, ~3 icon radius

---

## 2. Bottom Nav — Tooltip

Hover any nav button → label text appears above. Implementation: CSS `group-hover`.

---

## 3. Available Badge — Pulsing Dot

```html
<span class="mr-1.5 flex h-3 w-3 items-center">
  <span class="absolute inline-flex w-2 h-2 rounded-full opacity-75 animate-ping bg-lime-400"></span>
  <span class="relative inline-flex w-2 h-2 rounded-full bg-lime-400"></span>
</span>
```

Two stacked lime dots. Outer has `animate-ping` (Tailwind built-in). Creates radar pulse effect.

---

## 4. Hero — Social Link Group Hover

Hover any link → others fade to opacity 0.2 + blur(4px). Hovered link stays clear, arrow appears. Already implemented via custom CSS in `globals.css`.

---

## 5. Bento Cards — Hover Shadow

`shadow` → `shadow-lg` on hover, 200ms transition. Already implemented.

---

## 6. Experience Card — Scroll-Snap Blur Focus

**Container:** `relative overflow-auto h-[192px] snap-y snap-proximity`

**Each work item:** `flex gap-4 pb-4 snap-start work-item`

**Inline styles JS-driven:**
- Active (in view): `filter:blur(0px);opacity:1`
- Inactive: `filter:blur(2px);opacity:0.3`

**Implementation:** IntersectionObserver tracks which item is most visible in scroll container.

---

## 7. Projects Card — 3D Mouse-Tracking Tilt

**Library:** Framer Motion (mouse position → rotateY/rotateZ)

**Wrapper:** `<div style="width:300px;height:200px">` (perspective context)

**Two image layers** stacked with translateZ:
- Layer 1 (back): `translateZ(0)`, rotateY/Z follow mouse, image opacity 0.8
- Layer 2 (front): `translateZ(200px)`, smaller rotation, inner div with translateX/Y based on mouse

**Range:**
- rotateY: ±2deg
- rotateZ: ±10deg
- Inner translate: ±10px

---

## 8. Spotify Card — Spinning Vinyl

```html
<div class="relative">
  <!-- Vinyl ring -->
  <div class="absolute z-20 w-8 h-8 m-auto border rounded-full border-white/20 outline outline-1 outline-offset-4 outline-white/20"></div>
  <!-- Center hole -->
  <div class="absolute z-20 w-1 h-1 m-auto bg-white rounded-full"></div>
  <!-- Spinning album art -->
  <img class="absolute z-10 w-8 h-8 m-auto rounded-full animate-[spin_3s_linear_infinite]" />
</div>
```

Album art spins at `3s linear infinite`. Concentric rings make it look like vinyl.

---

## 9. Stack Card — Meteor Shower

5 small dots with random delay (0.3-0.7s) and duration (2-4s) inside the Stack card.

**CSS:**
```css
@keyframes meteor {
  0% { transform: rotate(215deg) translateX(0px); opacity: 1; }
  70% { opacity: 1; }
  100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
}
.animate-meteor-effect {
  animation: 5s linear 0s infinite normal none running meteor;
}
```

Each meteor has a `::before` pseudo-element creating the trail (gradient line behind the dot).

---

## 10. Stack Card — SVG Cell Hover

A 328×222 SVG with grid lines and 7 cells, each `<a href="/stack">` wrapping a `<rect>`.

Cells use `dark:hover:fill-neutral-800 hover:fill-neutral-100` for hover background change. Tech logos rendered as SVG paths inside.

---

## 11. Theme Toggle

Click Sun/Moon button → `<html>` gains/loses `dark` class + `color-scheme` style. No transition (instant CSS variable swap).

---

## Global

- **Background:** Body has `url("/images/gradient2.svg") no-repeat top`
- **No smooth scroll library** (Lenis/Locomotive not used)
- **Responsive breakpoints:** desktop 1440 / tablet 768 / mobile 390

---

## Implementation Priority

**Already done:**
- ✅ Social link group hover
- ✅ Card hover shadow
- ✅ Theme toggle
- ✅ Background gradient

**Missing (must add):**
1. Bottom Nav dock magnification (Framer Motion)
2. Available badge `animate-ping`
3. Spotify spinning vinyl `animate-spin`
4. Stack card meteor shower `@keyframes meteor`
5. Projects card 3D tilt (Framer Motion)
6. Experience card scroll-snap with IntersectionObserver blur

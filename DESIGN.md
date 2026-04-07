# STATUS HVAC — DESIGN.md
# Adapted from Tesla's design system (VoltAgent/awesome-design-md)
# for a DTC HVAC e-commerce experience

Tesla's website is an exercise in radical subtraction — a digital showroom where the product is everything and the interface is almost nothing. STATUS adapts this philosophy for DIY HVAC: cinematic product photography, extreme restraint, and engineered precision.

**Key Characteristics:**
- Full-viewport hero sections dominated by product/lifestyle photography with minimal overlay UI
- Near-zero UI decoration: no unnecessary shadows, no busy gradients, no decorative patterns
- Single accent color system — Electric Blue (`#0066ff`) — used primarily for CTA buttons
- Outfit (Display) + DM Sans (Text/UI) font pairing for engineered precision
- Photography-first presentation where product imagery carries emotional weight
- Frosted-glass navigation with transparent/white nav that floats over hero content
- 0.33s cubic-bezier transitions as the universal timing for all interactive state changes
- Generous whitespace as a premium signal — never fill space just because it's empty

## Color System

### Primary
- **Electric Blue** (`#0066ff`): Primary CTA button background — confident, saturated blue. Used for "Shop Now", "Add to Cart", and primary action buttons
- **Teal Accent** (`#00d4aa`): Secondary accent for success states, gradient endpoints, and feature highlights
- **Pure White** (`#FFFFFF`): Navigation surfaces, card backgrounds, clean breathing room

### Surface & Background
- **Warm Stone** (`#fafaf9`): Page background — barely warm, avoids sterile pure white
- **Linen** (`#f2f1ef`): Alternate surface for section differentiation
- **Parchment** (`#e8e6e1`): Secondary surface
- **Carbon Dark** (`#0c0f14`): Hero backgrounds, footer, dark sections — warm near-black

### Neutrals & Text
- **Carbon Dark** (`#0c0f14`): Primary heading text
- **Graphite** (`#393c41`): Body text — slightly warm
- **Pewter** (`#6b6966`): Muted text, captions, secondary labels
- **Warm Border** (`#d4d0c8`): Subtle borders and dividers

### Semantic
- **Success** (`#00c48c`): Check marks, confirmation states
- **Warning** (`#ffb020`): Alerts, star ratings
- **Copper** (`#b87333`): Premium accent for special callouts

### Gradient System
- Primary gradient: `linear-gradient(135deg, #0066ff 0%, #0044cc 50%, #00d4aa 100%)` — blue through deep navy to teal
- Subtle surface gradient: `linear-gradient(135deg, #f0f4ff 0%, #e8fdf5 100%)`
- No gradients on text except for `.gradient-text` utility on headlines

## Typography

### Font Family
- **Display**: `Outfit` — geometric, bold, modern display face. Used for h1-h4 headings
- **Text/UI**: `DM Sans` — clean geometric sans-serif with personality. Used for navigation, body, buttons, all UI

### Hierarchy
| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Hero Title | 48-64px | 800 | Outfit, responsive scaling |
| Section Heading | 36-48px | 800 | Outfit |
| Card Title | 18-20px | 700 | Outfit |
| Nav Item | 14px | 500 | DM Sans |
| Body Text | 14-16px | 400 | DM Sans |
| Button Label | 14px | 600 | DM Sans |
| Small/Caption | 12-13px | 400-500 | DM Sans |

### Principles
- Logo uses wide letter-spacing (`0.15em`) for industrial authority
- Headings use `tracking-tight` for density
- No italic variants in UI
- Weight restraint: 400, 500, 600, 700, 800 only

## Components

### Buttons
- **Primary CTA**: `gradient-bg` background, white text, 12px border-radius, `min-height: 48px`, font-weight 600
- **Secondary CTA**: White/transparent bg, border, dark text, same radius
- **Ghost button**: Transparent bg, white/dark text + border, used on dark surfaces
- Hover: `opacity: 0.9` transition, no scale transforms
- All transitions: `0.3s ease`

### Cards
- White background, `border-radius: 16px`, `border: 1px solid var(--border)`
- Hover: `border-color: primary/30`, `shadow-xl shadow-primary/5`
- Product image with `object-contain`, hover scale 1.05 on image
- No card shadows at rest — depth through border only

### Navigation
- Sticky, `bg-white/80 backdrop-blur-2xl`, `border-bottom: 1px solid border/50`
- Promo bar: Solid dark background (`bg-foreground`), white text, hides on scroll down
- Mobile: Hamburger with slide-in panel
- Logo: Dark square icon + wide-tracked uppercase logotype

### Noise Texture
- `.noise-overlay::after` — subtle fractal noise at 3% opacity for atmospheric depth
- Applied to stats sections, product grids, and feature areas
- Eliminates flat digital feel without adding visual weight

## Spacing System
- Base unit: 4px
- Section padding: `py-16` (64px) to `py-24` (96px)
- Container max-width: `max-w-7xl` (80rem / 1280px)
- Card gap: `gap-6` (24px) to `gap-8` (32px)

## Motion
- Universal transition: `0.3s ease` or `0.3s cubic-bezier(0.16, 1, 0.3, 1)`
- Page load: Staggered `fade-up` animations with `animation-delay` increments of 0.1s
- Hover: Color/opacity transitions only — no scale/translate on buttons
- Image hover: `scale(1.05)` over `0.5s` — the only scale animation
- Reduced motion: All animations disabled via `prefers-reduced-motion: reduce`

## Do
- Let product photography dominate every major section
- Use Electric Blue exclusively for primary CTAs — never decorative
- Maintain generous whitespace between sections
- Keep noise texture subtle (3% opacity max)
- Use warm neutrals (stone, linen) instead of cold grays
- Trust the Outfit/DM Sans pairing — don't mix in other fonts
- Keep transitions consistent at 0.3s

## Don't
- Add heavy shadows to cards or containers
- Use more than two chromatic colors (blue + teal)
- Apply gradients to surfaces/backgrounds beyond the defined set
- Use uppercase text transforms beyond the logo
- Introduce rounded-pill buttons — 12px radius is the max
- Clutter viewport with multiple competing CTAs
- Use Inter, Roboto, or system fonts

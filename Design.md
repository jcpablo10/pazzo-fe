---
name: Pazzo: Digital Passport
colors:
  surface: '#0c160a'
  surface-dim: '#0c160a'
  surface-bright: '#323c2d'
  surface-container-lowest: '#071006'
  surface-container-low: '#141e11'
  surface-container: '#182215'
  surface-container-high: '#232d1f'
  surface-container-highest: '#2d3829'
  on-surface: '#dae6d1'
  on-surface-variant: '#baccb1'
  inverse-surface: '#dae6d1'
  inverse-on-surface: '#293325'
  outline: '#85967d'
  outline-variant: '#3c4b36'
  surface-tint: '#00e614'
  primary: '#c5ffb3'
  on-primary: '#003a01'
  primary-container: '#25f425'
  on-primary-container: '#006a03'
  inverse-primary: '#006e04'
  secondary: '#b6cdb1'
  on-secondary: '#223521'
  secondary-container: '#384c36'
  on-secondary-container: '#a5bba0'
  tertiary: '#ffece9'
  on-tertiary: '#4a2722'
  tertiary-container: '#ffc6be'
  on-tertiary-container: '#7b504a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#76ff64'
  primary-fixed-dim: '#00e614'
  on-primary-fixed: '#002200'
  on-primary-fixed-variant: '#005302'
  secondary-fixed: '#d2e9cc'
  secondary-fixed-dim: '#b6cdb1'
  on-secondary-fixed: '#0e1f0e'
  on-secondary-fixed-variant: '#384c36'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#f1b9b1'
  on-tertiary-fixed: '#31120f'
  on-tertiary-fixed-variant: '#643c37'
  background: '#0c160a'
  on-background: '#dae6d1'
  surface-variant: '#2d3829'
typography:
  display-xl:
    fontFamily: Lexend
    fontSize: 4.5rem
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.05em
  display-lg:
    fontFamily: Lexend
    fontSize: 3.75rem
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Lexend
    fontSize: 2.25rem
    fontWeight: '800'
    lineHeight: '1.2'
  title-lg:
    fontFamily: Lexend
    fontSize: 1.5rem
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Lexend
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Lexend
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Lexend
    fontSize: 0.875rem
    fontWeight: '700'
    letterSpacing: 0.05em
  caption:
    fontFamily: Lexend
    fontSize: 0.75rem
    fontWeight: '700'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 80rem
  section-padding-y: 6rem
  grid-gap: 2rem
  stack-gap-lg: 2rem
  stack-gap-md: 1rem
  stack-gap-sm: 0.5rem
  inline-padding: 1.25rem
---

## Brand & Style
The brand personality is **energetic, adventurous, and motivating**, targeting active individuals who find freedom in cycling and outdoor exploration. The UI evokes a sense of "digital gamification" of the physical world—a pasaporte to adventure.

The design style is **High-Contrast Dark Mode** with a strong **Glassmorphic** influence. It utilizes a vibrant, "electric" primary green against deep forest-tinted backgrounds to create a tech-forward, high-performance aesthetic. Elements feel like heads-up displays (HUDs) or high-end cycling computers, featuring glowing accents, subtle background blurs, and crisp, bold typography that emphasizes achievement and progress.

## Colors
The color palette is anchored by **"Electric Lime" (#25f425)**, used strategically for calls to action, brand identifiers, and progress indicators. This high-visibility green mimics safety gear and high-performance sports equipment.

The foundation is a **Deep Forest Dark (#102210)**, providing more character than a standard black. Secondary surfaces use varying shades of slate to create hierarchy within the dark mode. Transparency is key; primary-colored glows and border tints are used to define boundaries without heavy solid colors, maintaining a sense of lightness and "air" despite the dark theme.

## Typography
**Lexend** is the exclusive font family across all levels. Designed for readability and athletic clarity, its geometric shapes reinforce the modern, active brand voice. 

- **Display levels** use a "Black" (900) weight with tight tracking to create maximum impact.
- **Body text** utilizes "Regular" (400) weight with generous line heights (1.5-1.6) for legibility against dark backgrounds.
- **Labels and Captions** use "Bold" (700) weight and uppercase transformations to act as clear navigational markers and "stamps," mimicking the passport/documentation theme.

## Layout & Spacing
The layout follows a **structured grid system** with wide horizontal margins (up to 5rem on large screens) to ensure focus remains on central content. 

Sections are separated by significant vertical padding (6rem+) to create a "breathable" narrative flow. Inside components, a consistent **8px (0.5rem) base unit** is used. Content blocks generally follow a "Large Gap" philosophy (2rem) between major elements like headlines and body text to maintain the clean, expansive feel of the outdoors.

## Elevation & Depth
Depth is achieved through **Tonal Layering and Glassmorphism** rather than traditional drop shadows.

1.  **Base Layer:** The darkest forest green (#102210).
2.  **Mid Layer:** Surfaces like cards use `slate-800/40` with semi-transparent borders to separate them from the background.
3.  **Overlay Layer:** Modals and floating elements (like the "Sello Desbloqueado" card) use a `backdrop-blur-xl` (24px blur) effect with a semi-transparent background and a thin white/primary border to simulate frosted glass.
4.  **Shadows:** When used, shadows are tinted with the primary color (`shadow-primary/25`) to create a "neon underglow" effect rather than a black shadow.

## Shapes
The shape language is **distinctly rounded** but structured. 
- **Standard Cards/Containers:** Use a 1rem (rounded-2xl equivalent) radius to feel modern and friendly.
- **Buttons:** Use 0.75rem (rounded-xl) for a substantial, tactile feel.
- **Badges/Small Elements:** Use "full" rounding (pill-shaped) for tag-like identifiers and decorative status indicators.
- **Borders:** Containers often feature a thin 1px border with low opacity (`primary/20` or `white/10`) to define edges cleanly.

## Components

### Buttons
- **Primary:** "Electric Lime" background, dark text, rounded-xl, with a subtle hover scale effect (1.05x). Often accompanied by a primary-colored glow shadow.
- **Secondary:** Transparent with a `slate-700` border or `slate-800/50` background. High-contrast white text.
- **Ghost:** No background, primary color text, used for navigation or less critical actions.

### Cards
Cards are the primary container. They feature a `slate-800/40` background, a 1px border in `slate-700`, and 1rem corner rounding. Hover states should transition the border color to `primary/50` to provide interactive feedback.

### Badges & Status
Badges use the pill shape with a background tint of 10% opacity and a 20% opacity border of the same color (e.g., `primary/10` background with `primary/20` border).

### Icons
Use **Material Symbols Outlined** with a weight of 400. Icons used within primary buttons or as feature highlights should maintain a large size (24px-36px) to reinforce the visual impact.

### Images
Feature images should be contained within the standard card radius and often utilize a dark-to-transparent gradient overlay at the bottom to allow text labels to sit directly on top of the visual.

## Tailwind Implementation

This design system is implemented in Tailwind using semantic tokens and utility aliases.

### Token Mapping (Tailwind)

- Background: `bg-background`, text on background: `text-on-background`
- Surface and hierarchy: `bg-surface`, `bg-surface-container`, `bg-surface-container-high`, `bg-surface-container-low`
- Text hierarchy: `text-on-surface`, `text-on-surface-variant`, `text-outline`
- Accent and CTA: `bg-primary`, `text-on-primary`, `bg-primary-container`, `text-on-primary-container`
- Borders: `border-outline-variant` and interactive hover to `border-primary-container/50`
- Status colors: `bg-error`, `text-on-error`, `bg-error-container`, `text-on-error-container`

### Typography (Tailwind)

- Display: `font-display font-black tracking-tight`
- Headline: `font-display font-extrabold`
- Body: `font-sans font-normal leading-relaxed`
- Labels/Captions: `text-xs font-bold uppercase tracking-stamp`

### Spacing and Layout (Tailwind)

- Max container width: `max-w-container-ds`
- Section spacing: `py-section-y`
- Grid gap: `gap-grid-gap`
- Stack gaps: `gap-stack-lg`, `gap-stack-md`, `gap-stack-sm`
- Inline padding: `px-inline`

### Shape and Elevation (Tailwind)

- Cards: `rounded-panel border border-outline-variant`
- Buttons: `rounded-action`
- Pill badges: `rounded-full`
- Glow emphasis: `shadow-glow` / `shadow-glow-soft`

### Recommended Component Classes

- Card container: `ds-card`
- Badge/status pill: `ds-badge`
- Glass panel shell: `glass-panel`
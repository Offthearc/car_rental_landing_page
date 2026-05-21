---
version: 1
name: DriveEasy Car Rentals
description: >-
  Professional, energetic design system for DriveEasy Car Rentals. Deep navy
  primary conveys trust and authority; amber accent adds energy and draws
  attention to calls-to-action. Clean white surfaces keep the reading experience
  light and uncluttered. Follows the design.md format:
  https://github.com/google-labs-code/design.md
colors:
  primary: '#1B2B5E'
  primary-light: '#2A4080'
  on-primary: '#FFFFFF'
  accent: '#F59E0B'
  accent-dark: '#D97706'
  on-accent: '#1A1A1A'
  surface: '#FFFFFF'
  on-surface: '#1A1C1E'
  surface-variant: '#F4F6FA'
  on-surface-variant: '#4B5563'
  hero-bg: '#0D1B3E'
  border: '#DDE1E9'
  danger: '#DC2626'
  success: '#16A34A'
  card-shadow: '#1B2B5E26'
typography:
  sans:
    fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  heading:
    fontFamily: 'Poppins, Inter, system-ui, sans-serif'
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.15'
    letterSpacing: '-0.02em'
  subheading:
    fontFamily: 'Poppins, Inter, system-ui, sans-serif'
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: '-0.01em'
  mono:
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace'
    fontSize: 15px
    fontWeight: '600'
    lineHeight: '1.4'
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
components:
  button-primary:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.on-accent}'
    rounded: '{rounded.md}'
    padding: '{spacing.md}'
    fontFamily: '{typography.heading.fontFamily}'
    fontWeight: '600'
  button-secondary:
    backgroundColor: 'transparent'
    textColor: '{colors.on-primary}'
    borderColor: '{colors.on-primary}'
    rounded: '{rounded.md}'
    padding: '{spacing.md}'
    fontFamily: '{typography.heading.fontFamily}'
    fontWeight: '600'
  card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.lg}'
    padding: '{spacing.lg}'
    shadowColor: '{colors.card-shadow}'
  badge:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    rounded: '{rounded.full}'
    padding: '{spacing.xs}'
    fontSize: 12px
    fontWeight: '600'
  nav:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    accentColor: '{colors.accent}'
    padding: '{spacing.md}'
  pricing-card-featured:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    accentColor: '{colors.accent}'
    rounded: '{rounded.xl}'
    padding: '{spacing.xl}'
    shadowColor: '{colors.card-shadow}'
---

# Design — DriveEasy Car Rentals

> This is the **single source of truth** for the visual design system. The YAML
> front matter above defines machine-readable tokens; the sections below explain
> the rationale. `scripts/design_check.mjs --write` generates
> `src/theme/tokens.css` from the tokens, and `scripts/design_check.mjs` (run by
> `init.sh`) fails if the app drifts from this file.

## Overview

DriveEasy Car Rentals communicates trust, competence, and energy. The design
system uses a deep navy blue as the primary color — evoking reliability,
professionalism, and the open road at night. Amber/orange accent color injects
urgency and draws the eye to calls-to-action. Surfaces remain white and
spacious so fleet imagery and pricing information read at a glance. The
typographic system pairs Poppins (geometric, modern) for headings with Inter
for body copy, striking a balance between personality and readability.

## Colors

The palette is small and purposeful:

- **primary (#1B2B5E)** — deep navy. Used for the navigation bar, section
  headings, and structural elements that anchor the layout. Conveys authority
  and trust.
- **primary-light (#2A4080)** — slightly lighter navy for hover states and
  secondary nav backgrounds.
- **accent (#F59E0B)** — amber. Exclusively for primary CTAs, highlights, and
  the featured pricing badge. High contrast against navy and white, delivering
  instant visual hierarchy.
- **accent-dark (#D97706)** — darker amber for button hover and focus states.
- **hero-bg (#0D1B3E)** — very dark navy for the hero section gradient
  background. Distinguishes the hero from the rest of the page without
  introducing a new hue.
- **surface (#FFFFFF)** / **surface-variant (#F4F6FA)** — white and near-white
  for card and section backgrounds. surface-variant provides subtle separation
  between alternating sections.
- **on-surface (#1A1C1E)** / **on-surface-variant (#4B5563)** — dark text on
  light backgrounds; variant is used for secondary/supporting copy.
- **danger (#DC2626)** / **success (#16A34A)** — reserved for form validation
  state only. Never used as decorative accents.
- **card-shadow (#1B2B5E26)** — a semi-transparent navy for box shadows,
  keeping depth coherent with the brand palette.

Components reference colors only through `var(--color-*)` custom properties.
No hardcoded hex values are permitted in source files.

## Typography

**Poppins** is the heading family. Its geometric letterforms and wide tracking
feel modern and authoritative — well-suited to large hero headlines and section
titles. It is loaded from Google Fonts by the implementer; a system-ui fallback
chain ensures readable rendering before the font loads.

**Inter** is the body family. It is optimised for on-screen readability at
small sizes and is available as a system font on many platforms.

**Monospace** (ui-monospace / Menlo) is used exclusively for prices and numeric
values in car cards and pricing tiers, reinforcing that these are precise
figures rather than marketing copy.

Scale rationale:

- `heading` (36 px, weight 700) — hero headline, section titles
- `subheading` (20 px, weight 600) — card titles, step titles
- `sans` (16 px, weight 400) — body copy, form labels, nav links
- `mono` (15 px, weight 600) — price per day, numeric specs

## Layout

Spacing follows a six-step scale: `xs (4px)`, `sm (8px)`, `md (16px)`,
`lg (24px)`, `xl (40px)`, `2xl (64px)`. Section vertical padding uses `2xl`;
card internal padding uses `lg`; button padding uses `md`. Components compose
spacing from these steps rather than arbitrary pixel values to maintain
consistent rhythm across the page.

The overall page layout is single-column on mobile and expands to a centred
content column (max-width ~1200 px) on desktop. The fleet and testimonials
sections use CSS grid with `auto-fill` columns.

## Elevation and Depth

Depth is expressed through card shadows using `card-shadow` (semi-transparent
navy) rather than neutral grey. This keeps shadows coherent with the brand
palette. The hero section uses a CSS gradient from `hero-bg` toward `primary`
to suggest depth without a bitmap image. The featured pricing card uses a
stronger shadow to lift it above its siblings.

Avoid stacking more than two elevation levels on a single screen region.
Rely on surface color contrast (`surface` vs `surface-variant`) to separate
sections before reaching for shadows.

## Shapes

Border radii follow the `rounded` scale:

- `sm (4px)` — form inputs, small badges
- `md (8px)` — buttons, nav CTA
- `lg (16px)` — standard cards (car cards, testimonial cards, step cards)
- `xl (24px)` — featured pricing card, hero sub-containers
- `full (9999px)` — avatar initials circles, pill badges, tags

## Components

### button-primary

Amber (`accent`) background with near-black (`on-accent`) text. Poppins 600.
`md` radius (8 px), `md` padding (16 px). Used for primary conversion actions:
"Book Now", "Browse Fleet", "Rent Now", "Get Started". Hover state uses
`accent-dark`.

### button-secondary

Transparent background with a 1 px `on-primary` (white) border, white text.
Same radius and padding as button-primary. Used alongside button-primary in the
hero section ("Learn More") and on dark backgrounds. On light backgrounds
replace border/text color with `primary`.

### card

White (`surface`) background, `on-surface` text, `lg` radius (16 px), `lg`
padding (24 px), subtle `card-shadow` drop shadow. Base token used by car
cards, testimonial cards, step cards, and contact form container.

### badge

Navy (`primary`) background, white (`on-primary`) text, `full` radius,
12 px font size, weight 600. Used for car category labels (Economy, SUV,
Luxury) on fleet cards.

### nav

Navy (`primary`) background, white text, amber accent for the "Book Now"
button. `md` padding. Sticky top positioning with a subtle bottom border for
scroll-state separation.

### pricing-card-featured

Navy (`primary`) background, white text, amber accent for price and CTA. `xl`
radius (24 px), `xl` padding (40 px), strong `card-shadow`. Visually
distinguished from standard cards to draw attention to the "Most Popular" tier.
All other pricing cards use the standard `card` token.

## Do's and Don'ts

- Do reference design tokens via CSS custom properties: `var(--color-primary)`,
  `var(--space-lg)`, `var(--font-heading)`.
- Do use the `mono` font token for all price-per-day and numeric spec values.
- Do use `accent` only for primary CTAs and the featured pricing highlight.
  Overuse erodes its urgency signal.
- Do use `surface-variant` to alternate section backgrounds for visual rhythm
  (e.g. How It Works and Testimonials sections).
- Do add new tokens to the YAML front matter when the design genuinely needs
  them; then regenerate tokens.css.
- Do not hardcode hex colors anywhere in src/ (`color: #1B2B5E` is forbidden).
  Always use the token: `var(--color-primary)`.
- Do not introduce off-scale spacing (e.g. `margin: 13px`). Choose the nearest
  spacing token.
- Do not use font families that are not declared in the `typography` tokens.
- Do not edit `src/theme/tokens.css` by hand — it is fully generated by
  `scripts/design_check.mjs --write`.
- Do not use `danger` or `success` for decoration; reserve them for form
  validation state only.

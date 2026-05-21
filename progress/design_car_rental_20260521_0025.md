# Design Handoff — DriveEasy Car Rentals

**Date:** 2026-05-21  
**Status:** Complete — `node scripts/design_check.mjs` passes

## Theme Direction

Deep navy primary (#1B2B5E) anchors the brand in trust and authority while
amber accent (#F59E0B) drives CTA urgency; Poppins headings over Inter body
copy delivers a modern automotive feel without any third-party component
library.

## Token Summary

### Palette (colors)

| Token              | Value     | Purpose                                      |
| ------------------ | --------- | -------------------------------------------- |
| primary            | #1B2B5E   | Nav, headings, structural elements           |
| primary-light      | #2A4080   | Hover/secondary nav states                   |
| on-primary         | #FFFFFF   | Text on primary backgrounds                  |
| accent             | #F59E0B   | All primary CTAs, featured pricing highlight |
| accent-dark        | #D97706   | Button hover/focus                           |
| on-accent          | #1A1A1A   | Text on amber background                     |
| surface            | #FFFFFF   | Card and page background                     |
| surface-variant    | #F4F6FA   | Alternating section backgrounds              |
| on-surface         | #1A1C1E   | Primary body text                            |
| on-surface-variant | #4B5563   | Secondary/supporting copy                    |
| hero-bg            | #0D1B3E   | Hero gradient source (very dark navy)        |
| border             | #DDE1E9   | Input/card borders                           |
| danger             | #DC2626   | Form validation errors only                  |
| success            | #16A34A   | Form submission success only                 |
| card-shadow        | #1B2B5E26 | Box shadows (semi-transparent navy)          |

### Type Scale (typography)

| Token      | Family               | Size | Weight |
| ---------- | -------------------- | ---- | ------ |
| sans       | Inter / system-ui    | 16px | 400    |
| heading    | Poppins / Inter      | 36px | 700    |
| subheading | Poppins / Inter      | 20px | 600    |
| mono       | ui-monospace / Menlo | 15px | 600    |

### Spacing

xs(4px), sm(8px), md(16px), lg(24px), xl(40px), 2xl(64px)

### Border Radius

sm(4px), md(8px), lg(16px), xl(24px), full(9999px)

### Component Tokens

| Component             | Key tokens                                                           |
| --------------------- | -------------------------------------------------------------------- |
| button-primary        | accent bg, on-accent text, md radius, md padding                     |
| button-secondary      | transparent bg, on-primary border/text, md radius                    |
| card                  | surface bg, on-surface text, lg radius, lg padding, card-shadow      |
| badge                 | primary bg, on-primary text, full radius, 12px/600                   |
| nav                   | primary bg, on-primary text, accent CTA, md padding                  |
| pricing-card-featured | primary bg, on-primary text, accent price/CTA, xl radius, xl padding |

## Assumptions and Open Questions

1. Poppins is loaded via Google Fonts by the implementer; the token fallback
   chain (Inter, system-ui) ensures readability before the font loads.
2. The `hero-bg` token provides the CSS gradient start color; the implementer
   should gradient toward `primary` for depth.
3. `card-shadow` is expressed as a hex with alpha (#1B2B5E26); the check script
   treats this as a palette entry so it will not trigger off-palette warnings.
4. The `button-secondary` component token is defined for dark backgrounds (hero
   section). On light backgrounds the implementer should use `primary` for
   border/text via the same token with a contextual override.
5. No open blocking questions — theme is fully inferred from the project brief.

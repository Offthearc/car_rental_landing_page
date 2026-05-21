# Architecture Progress — DriveEasy Car Rentals Landing Page

**Date:** 2026-05-21  
**Solution type:** MVP

## Key architectural decisions

1. **No runtime data fetching.** All car, testimonial, and pricing data lives
   as TypeScript arrays in `src/data/`. No `fetch`, no API, no external
   service calls at runtime.

2. **Anchor-scroll SPA — no router.** The site is a single scrollable page
   with seven named sections. React Router adds complexity with zero benefit;
   plain `<a href="#section-id">` links handle all navigation.

3. **One component folder per feature section.** Each feature (F001–F007)
   maps to a dedicated folder under `src/components/` containing the section
   component and any sub-components (e.g., `CarCard`, `TestimonialCard`,
   `PricingCard`). Co-located `.css` files only; no shared stylesheet except
   `tokens.css`.

4. **Contact form is purely client-side.** State managed by a custom hook
   `useContactForm` in `src/hooks/`. On valid submit, the component renders a
   success message. There is no backend endpoint.

5. **CSS custom properties are the sole styling primitive.** All colors,
   spacing, radius, and typography values reference `var(--...)` tokens
   generated from `DESIGN.md`. The `npm run design:check` gate enforces this.

6. **TypeScript strict throughout.** Four domain types are defined:
   `Car`, `Testimonial`, `PricingPlan`, `ContactFormData`. No `any` at
   component or hook boundaries.

## Decisions that are NOT in scope for MVP

- Real booking, payment, or authentication
- Actual car photography (CSS gradient placeholders)
- Analytics or tracking
- SSR or any server-side code
- i18n

## Open questions / notes for designer

- The architect has described _what_ components exist and what states they
  hold. Visual treatment (palette, typography, card shapes, badge colors,
  hero gradient, avatar circle colors) is entirely up to the designer via
  `DESIGN.md` and `src/theme/tokens.css`.
- The "Most Popular" pricing card needs a visual token for its highlighted
  state — the designer should define this (e.g., `--color-highlight-border`
  or a variant background token).

## Blockers

None. Architecture is complete and consistent with all features in
`feature_list.json`.

## Implementer clearance

The implementer can proceed for all features (F001 through F007 in order)
**after** the designer has produced `DESIGN.md` and `src/theme/tokens.css`.
No architectural decisions remain open that would block implementation.

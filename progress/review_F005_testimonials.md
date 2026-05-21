# Review — feature F005: Testimonials Section

**Verdict:** CHANGES_REQUESTED

## Verification

- `vitest run`: PASS
- `eslint`: PASS
- `prettier --check`: PASS
- `typecheck (tsc)`: PASS
- `design:check`: PASS
- `./init.sh`: PASS

## Checkpoints

- C1: [x]
- C2: [x]
- C3: [ ] ← Reason: `src/data/testimonials.ts` uses field names `name` and `initials` instead of `customerName` and `avatarInitials` as specified in `docs/architecture.md` §7 data model. Also adds `avatarColor` and `location` fields not in the spec — minor additions, but the renamed canonical fields violate the architecture contract.
- C4: [x]
- C5: [x]
- C6: [ ] ← Reason: `src/components/TestimonialsSection/TestimonialCard.css` line 48 hardcodes `font-size: 14px` for `.testimonial-card__location`. This is an off-scale value — the typography token scale is 15px (mono), 16px (sans), 20px (subheading), 36px (heading). `docs/conventions.md` explicitly prohibits hardcoded pixel values; `docs/verification.md` lists "Hardcoding a pixel value instead of a design token" as an anti-pattern. The nearest available token is `var(--font-size-sans)` (16px).

## Required changes (if CHANGES_REQUESTED)

1. `src/data/testimonials.ts`: Rename field `name` → `customerName` and `initials` → `avatarInitials` to match the `Testimonial` interface spec in `docs/architecture.md` §7. Update all usages in `TestimonialCard.tsx` accordingly (lines 35, 29 in `TestimonialCard.tsx`).

2. `src/components/TestimonialsSection/TestimonialCard.css` line 48: Replace `font-size: 14px` with `font-size: var(--font-size-sans)` (or request the designer to add a `sm` typography token if a smaller size is genuinely needed). No raw pixel values are permitted per `docs/conventions.md`.

---

# Re-Review — feature F005: Testimonials Section (post-fix)

**Verdict:** APPROVED

## Verification

- `vitest run`: PASS
- `eslint`: PASS
- `prettier --check`: PASS
- `typecheck (tsc)`: PASS
- `design:check`: PASS
- `./init.sh`: PASS

## Checkpoints

- C1: [x]
- C2: [x]
- C3: [x] — `src/data/testimonials.ts` now uses `customerName` and `avatarInitials`; `TestimonialCard.tsx` references both correctly.
- C4: [x]
- C5: [x]
- C6: [x] — `TestimonialCard.css` line 47 now uses `font-size: var(--font-size-sans)` for `.testimonial-card__location`; no hardcoded pixel font-size values remain.

## Required changes

None. All previously requested changes have been applied correctly.

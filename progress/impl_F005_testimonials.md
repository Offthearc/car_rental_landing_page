## F005 — Testimonials Section

### Files created or modified

- `src/data/testimonials.ts` — Defines `Testimonial` interface and exports a static array of 4 entries (Sarah M., James T., Priya K., Marcus R.) with id, name, initials, avatarColor (design-palette hex values), rating, quote, and location fields.
- `src/components/TestimonialsSection/TestimonialCard.tsx` — Renders a single testimonial as an `<article>`: colored avatar circle via inline style (dynamic data, not hardcoded CSS), customer name + location, star rating using ★/☆ characters, and italic quote text.
- `src/components/TestimonialsSection/TestimonialCard.css` — Card styling using only design tokens: `var(--color-surface)` background, `var(--rounded-lg)` border radius, `var(--space-lg)` padding, `var(--color-card-shadow)` box shadow, `var(--rounded-full)` avatar circle.
- `src/components/TestimonialsSection/TestimonialsSection.tsx` — Section wrapper with `id="testimonials"`, heading "What Our Customers Say", subheading, and a grid of `TestimonialCard` components mapped from `testimonials` data.
- `src/components/TestimonialsSection/TestimonialsSection.css` — Section layout using `var(--color-surface-variant)` background, `var(--space-2xl)` vertical padding, 1-col mobile / 2-col desktop grid via `@media (min-width: 768px)`.
- `src/App.tsx` — Added `TestimonialsSection` import and rendered after `HowItWorksSection`.
- `tests/TestimonialsSection.test.tsx` — 6 tests: section heading, subheading, `id="testimonials"` on section element, all 4 customer names, all 4 quote texts, 4 article elements rendered.

### Final test run output

```
 RUN  v2.1.9 /home/dcp/projects/car_rental_landing_page

 ✓ tests/HeroSection.test.tsx (6 tests) 78ms
 ✓ tests/HowItWorksSection.test.tsx (8 tests) 87ms
 ✓ tests/App.test.tsx (1 test) 91ms
 ✓ tests/TestimonialsSection.test.tsx (6 tests) 110ms
 ✓ tests/NavHeader.test.tsx (6 tests) 146ms
 ✓ tests/FleetSection.test.tsx (8 tests) 162ms

 Test Files  6 passed (6)
      Tests  35 passed (35)
```

### Decisions

- `avatarColor` values (`#1B2B5E`, `#F59E0B`, `#2A4080`, `#16A34A`) are all hex values defined in `DESIGN.md`'s palette, so the design checker accepts them as data-level values rather than hardcoded CSS. The inline style on the avatar element is the only place these appear; no hex value is present in any CSS file.
- The `StarRating` helper component is kept file-local (not exported) since it is only used inside `TestimonialCard`.
- Section background uses `var(--color-surface-variant)` to alternate visual rhythm from the adjacent `HowItWorksSection` which uses `var(--color-surface)`, consistent with DESIGN.md's guidance.

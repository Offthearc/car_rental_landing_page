# F004 — How It Works Section: Implementation Report

## Files Created or Modified

- `src/components/HowItWorksSection/HowItWorksSection.tsx` — New component. Renders `<section id="how-it-works">` with heading, subheading, and 3 hardcoded step cards (number circle, emoji icon, title, description). Steps defined as a `STEPS` static constant array.
- `src/components/HowItWorksSection/HowItWorksSection.css` — New stylesheet using exclusively CSS custom property tokens. Step cards use `var(--color-surface-variant)` background, step number circles use `var(--color-accent)` background and `var(--color-on-accent)` text with `var(--rounded-full)`. Desktop row layout triggered at 768 px via flexbox.
- `src/App.tsx` — Added `<HowItWorksSection />` import and render after `<FleetSection />`.
- `tests/HowItWorksSection.test.tsx` — 8 tests covering: section heading, subheading, `id="how-it-works"` attribute, all 3 step titles, step numbers 1/2/3, and all 3 step descriptions.

## Test Run Output

```
 RUN  v2.1.9 /home/dcp/projects/car_rental_landing_page

 ✓ tests/HeroSection.test.tsx (6 tests) 71ms
 ✓ tests/HowItWorksSection.test.tsx (8 tests) 91ms
 ✓ tests/App.test.tsx (1 test) 83ms
 ✓ tests/NavHeader.test.tsx (6 tests) 138ms
 ✓ tests/FleetSection.test.tsx (8 tests) 153ms

 Test Files  5 passed (5)
      Tests  29 passed (29)
```

## Decisions

- Background color: Used `var(--color-surface)` for the outer section and `var(--color-surface-variant)` for the step cards. The fleet section already uses `var(--color-surface-variant)` as its outer background; using plain surface here provides visual alternation between sections as recommended by DESIGN.md.
- Step icons are wrapped with `aria-hidden="true"` since they are decorative emojis alongside descriptive text headings and descriptions.
- Step numbers use `h3` headings for the step titles to maintain document outline hierarchy (`h2` for the section heading, `h3` per step).

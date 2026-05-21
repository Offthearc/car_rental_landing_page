# F002 — Hero Section Implementation

## Files Created or Modified

- `src/components/Hero/Hero.tsx` — New Hero component: `<section id="home">` with headline, subheadline, value proposition, and two CTA links (Browse Fleet → #fleet, Learn More → #how-it-works).
- `src/components/Hero/Hero.css` — Hero styles using only design tokens: CSS linear-gradient from `var(--color-hero-bg)` to `var(--color-primary)`, typography tokens, spacing tokens, `var(--rounded-md)` buttons, responsive at 600px breakpoint.
- `src/App.tsx` — Replaced placeholder `<h1>` + `<p>` content with `<Hero />` after `<NavHeader />`.
- `tests/Hero.test.tsx` — Six tests covering all acceptance criteria (heading render, subheadline render, value prop text, Browse Fleet href, Learn More href, section id="home").
- `tests/App.test.tsx` — Updated existing App test to query the hero heading ("Your Journey Starts Here") instead of the removed placeholder heading ("DriveEasy Car Rentals").

## Test Output

```
 RUN  v2.1.9 /home/dcp/projects/car_rental_landing_page

 ✓ tests/App.test.tsx (1 test) 51ms
 ✓ tests/Hero.test.tsx (6 tests) 65ms
 ✓ tests/NavHeader.test.tsx (6 tests) 126ms

 Test Files  3 passed (3)
      Tests  13 passed (13)
```

## init.sh Output

All gates passed:
- [OK] tokens.css in sync with DESIGN.md
- [OK] No off-palette colors or off-token fonts in src/
- [OK] Tests pass
- [OK] Environment ready

## Decisions

- The architecture doc specifies `HeroSection/HeroSection.tsx` but the task specification explicitly names the path `src/components/Hero/Hero.tsx`. The task specification takes precedence.
- `App.test.tsx` previously tested a placeholder heading ("DriveEasy Car Rentals") that no longer exists once Hero is rendered. Updated to test the actual hero heading to keep the test suite green without scope-creeping into another feature.
- The value proposition text uses ` ` (non-breaking spaces via `&nbsp;`) between checkmarks to maintain visual separation — this is a layout concern within the component and does not affect the text matching in tests (regex used).

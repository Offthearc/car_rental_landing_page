# Verification — DriveEasy Car Rentals Landing Page

## Verification levels

All four levels below must pass before any feature is marked `done`.

### Level 1 — Unit / component tests (mandatory)

Every component and hook in `src/` has at least one test in `tests/` that:

1. Covers the happy path (renders / behaves as the acceptance criteria require).
2. Covers at least one edge or error path (empty state, invalid input, failure).

```bash
npm run test
```

### Level 2 — Static checks (mandatory)

```bash
npm run lint            # ESLint, including react-hooks rules
npx prettier --check .  # formatting
npm run typecheck       # tsc --noEmit, strict
```

### Level 3 — Design conformance (mandatory for UI features)

```bash
npm run design:check    # no hardcoded colors, spacing, or radii
```

### Level 4 — Final gate

```bash
./init.sh               # must finish with [OK] Environment ready
```

---

## How to verify each functional requirement

Run all commands from the project root after `npm install`.

---

### FR-1: Navigation Header (F001)

```bash
npm run test -- --reporter=verbose NavHeader
```

Expected: all assertions pass, including:

- "renders logo and brand name"
- "renders all five nav links"
- "renders Book Now button"
- "toggles mobile menu when hamburger is clicked"

Manual anchor-scroll check (`npm run dev`, open `http://localhost:5173`):
click each nav link and confirm smooth-scroll to `#home`, `#fleet`,
`#how-it-works`, `#pricing`, `#contact`.

---

### FR-2: Hero Section (F002)

```bash
npm run test -- --reporter=verbose HeroSection
```

Expected:

- "renders headline 'Your Journey Starts Here'"
- "renders Browse Fleet and Learn More CTA buttons"
- "section element has id home"

---

### FR-3: Fleet Showcase (F003)

```bash
npm run test -- --reporter=verbose FleetSection
```

Expected:

- "renders exactly 6 car cards"
- "each card shows name, category badge, price per day, and Rent Now button"
- "section element has id fleet"

```bash
npm run design:check
```

Expected: exits 0 (no hardcoded values in FleetSection or CarCard).

---

### FR-4: How It Works (F004)

```bash
npm run test -- --reporter=verbose HowItWorksSection
```

Expected:

- "renders three steps"
- "each step has an icon, title, and description"
- "section element has id how-it-works"

---

### FR-5: Testimonials (F005)

```bash
npm run test -- --reporter=verbose TestimonialsSection
```

Expected:

- "renders at least 4 testimonial cards"
- "each card shows avatar initials, customer name, star rating, and quote"

---

### FR-6: Pricing Plans (F006)

```bash
npm run test -- --reporter=verbose PricingSection
```

Expected:

- "renders three pricing cards"
- "exactly one card is marked Most Popular"
- "each card shows tier name, price per day, feature list, and CTA button"
- "section element has id pricing"

---

### FR-7: Contact Section and Footer (F007)

```bash
npm run test -- --reporter=verbose ContactSection
```

Expected:

- "renders name, email, and message fields with accessible labels"
- "shows success message after valid form submission"
- "shows error messages when required fields are empty on submit"

```bash
npm run test -- --reporter=verbose Footer
```

Expected:

- "renders company name"
- "renders quick nav links"
- "renders copyright text"

---

### All features together

```bash
npm run test
```

Expected: exits 0, all tests pass.

---

### Production build

```bash
npm run build
```

Expected: exits 0, output written to `dist/`. No TypeScript or Vite errors.

---

## Edge cases and failure modes

**Contact form — empty submission:**
User clicks Submit with all fields blank. Each required field must show an
inline error message; the success state must not appear.

**Contact form — invalid email format:**
User enters a name and message but types `notanemail` in the email field.
The email field must show a validation error; the form must not transition
to the success state.

**NavHeader — mobile hamburger at 375 px:**
The nav links list must be hidden until the hamburger button is clicked.
Clicking opens the menu; clicking again closes it. The button must have an
accessible label (`aria-label` or visible text) so screen readers can
announce the action.

**FleetSection — data integrity:**
If `src/data/cars.ts` contains fewer than 6 entries the test
"renders exactly 6 car cards" will fail immediately, surfacing the gap.

**PricingSection — single highlighted card:**
If `isPopular: true` is set on more than one `PricingPlan`, the test
"exactly one card is marked Most Popular" will fail.

**Anchor links — missing section ID:**
If a section `id` attribute is absent, clicking the corresponding nav link
silently does nothing. NavHeader tests must assert that each `href` value
matches an element present in the rendered page.

---

## Performance baseline (MVP)

After deploying to Vercel, run Lighthouse in Chrome DevTools against the
production URL with the simulated Mobile (Moto G Power) profile.

| Metric         | Pass threshold |
| -------------- | -------------- |
| Performance    | >= 85          |
| Accessibility  | >= 90          |
| Best Practices | >= 90          |
| SEO            | >= 80          |

A Performance score below 85 is a blocker for FDEPLOY sign-off.

Verify zero critical accessibility violations on the production URL:

```javascript
// Paste in browser DevTools console on the production URL
const { default: axe } =
  await import('https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.9.0/axe.min.js')
const results = await axe.run()
console.table(results.violations.filter((v) => v.impact === 'critical'))
```

Expected: empty table (no critical violations).

---

## Anti-patterns (do not do)

- "I added the component, it should work." — missing executable test.
- A test that only asserts the component renders without throwing — it must
  assert real output the user would see.
- Mocking a component you could render — render it and query by role/label.
- Hardcoding a hex color or pixel value instead of a design token.
- Marking a feature `done` without `./init.sh` passing with `[OK] Environment ready`.

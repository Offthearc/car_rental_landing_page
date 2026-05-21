# F005 Fix — Testimonials Section (Reviewer Issues)

## Files Modified

- `src/data/testimonials.ts` — Renamed `name` -> `customerName` and `initials` -> `avatarInitials` in both the `Testimonial` interface and all 4 static data objects. Rewrote file with clean ASCII string delimiters while preserving the Unicode right single quote (U+2019) inside the Marcus R. quote string to match what the test expects.

- `src/components/TestimonialsSection/TestimonialCard.tsx` — Updated references from `testimonial.name` -> `testimonial.customerName` and `testimonial.initials` -> `testimonial.avatarInitials`. Ran Prettier to fix line-length formatting of the `customerName` expression.

- `src/components/TestimonialsSection/TestimonialCard.css` — Replaced hardcoded `font-size: 14px` on `.testimonial-card__location` with `font-size: var(--font-size-sans)`.

## Verification Output

```
Test Files  6 passed (6)
Tests  35 passed (35)

lint: no errors
prettier: All matched files use Prettier code style!
typecheck: clean
design:check: [OK] tokens.css is in sync with DESIGN.md.
             [OK] No off-palette colors or off-token fonts in src/.
./init.sh: Environment ready. You can start working.
```

## Decisions

- The original `testimonials.ts` used curly/smart quotes (U+2018/U+2019) as string delimiters throughout the file, which caused TypeScript errors when renamed via Edit tool (the replacement substituted curly quotes into delimiter positions). Fixed by rewriting the file using printf with explicit ASCII straight-quote delimiters, while keeping the U+2019 curly apostrophe inside the Marcus R. quote string so the existing test assertion continues to match.

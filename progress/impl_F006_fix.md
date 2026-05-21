# F006 Reviewer Fix — Pricing Plans Section

## Files Modified

- `src/data/pricing.ts` — Renamed interface field `tier` to `tierName` and `featured` to `isPopular`; updated all 3 static data objects accordingly.
- `src/components/PricingSection/PricingCard.tsx` — Updated all references from `plan.tier` to `plan.tierName` and `plan.featured` to `plan.isPopular` (className conditional, badge conditional, h3 text, aria-label).
- `src/components/PricingSection/PricingCard.css` — Replaced hardcoded `font-size: 12px` with `font-size: var(--font-size-mono)` on the badge; replaced `line-height: 1` with `line-height: var(--line-height-heading)` on the price amount.

## Tests

No test changes were needed — `tests/PricingSection.test.tsx` queries by rendered text and roles, not by data field names.

## Verification (final run)

```
Test Files  7 passed (7)
     Tests  42 passed (42)

lint: no errors
prettier: all files conform
typecheck: clean
design:check: [OK] tokens in sync, no off-palette values
init.sh: exit 0
```

## Decisions

- `--font-size-mono` (15px) used for the badge — smallest available font-size token, appropriate for a small badge label.
- `--line-height-heading` (1.15) used for the price amount — tight leading is correct for large display numerals.

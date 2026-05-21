# Review — feature F006: Pricing Plans Section

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
- C3: [ ] ← Reason: `PricingPlan` interface in `src/data/pricing.ts` deviates from `docs/architecture.md` §7: field `tier` must be `tierName`, field `featured` must be `isPopular`.
- C4: [x]
- C5: [x]
- C6: [ ] ← Reason 1: `src/components/PricingSection/PricingCard.css` line 28 hardcodes `font-size: 12px` for the badge. `docs/conventions.md` requires all typography values to use `var(--font-size-<name>)` tokens; no `--font-size-badge` token exists in `src/theme/tokens.css`. This must either use the nearest available token (`--font-size-sans` is 16px — too large) or a new token must be added to `DESIGN.md` and regenerated.
         ← Reason 2: `src/components/PricingSection/PricingCard.css` line 52 hardcodes `line-height: 1` for `.pricing-card__price-amount`. No corresponding token exists; `docs/verification.md` anti-patterns section (line 252) explicitly forbids hardcoding pixel/raw values instead of design tokens.

## Required changes (if CHANGES_REQUESTED)

1. `src/data/pricing.ts` line 2: rename field `tier` to `tierName` to match `docs/architecture.md` §7 `PricingPlan` definition. Update all references in `src/components/PricingSection/PricingCard.tsx` (lines 18, 25) accordingly.

2. `src/data/pricing.ts` line 6: rename field `featured` to `isPopular` to match `docs/architecture.md` §7 `PricingPlan` definition. Update all references in `src/components/PricingSection/PricingCard.tsx` (lines 11, 13) accordingly.

3. `src/components/PricingSection/PricingCard.css` line 28: replace `font-size: 12px` with a proper token. Either add a `badge` entry to the `typography` section of `DESIGN.md` (then regenerate `tokens.css`) and use `var(--font-size-badge)`, or reuse the smallest available token that semantically fits. Do not leave a raw pixel value.

4. `src/components/PricingSection/PricingCard.css` line 52: replace `line-height: 1` with a token. Either add a dedicated token to `DESIGN.md` and use `var(--line-height-price)` (or similar), or use an existing token such as `var(--line-height-mono)` if it is semantically appropriate (the price uses the mono font family). Do not leave a raw unitless value.

---

# Re-Review — feature F006: Pricing Plans Section (post-fix)

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
- C3: [x] — `src/data/pricing.ts` uses `tierName` (line 2) and `isPopular` (line 6); `PricingCard.tsx` references both correctly (lines 11, 13, 18, 25)
- C4: [x]
- C5: [x]
- C6: [x] — `PricingCard.css` line 28 now uses `var(--font-size-mono)`; line 52 now uses `var(--line-height-heading)`. No raw pixel or unitless values remain in `PricingCard.css` or `PricingSection.css`.

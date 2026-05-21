# Review — feature F004: How It Works Section

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
- C3: [x]
- C4: [x]
- C5: [x]
- C6: [x]

## Notes

All six checkpoints pass cleanly.

- `src/components/HowItWorksSection/HowItWorksSection.tsx` and `HowItWorksSection.css` placed exactly where `docs/architecture.md` specifies.
- `section` element carries `id="how-it-works"` (line 36 of the tsx file).
- Three steps rendered with step number circles, emoji icons, titles, and descriptions — satisfying FR-4 and all four acceptance criteria in `feature_list.json`.
- CSS uses exclusively `var(--color-*)`, `var(--space-*)`, `var(--rounded-*)`, and `var(--font-*)` tokens. The `font-size: 48px` on `.how-it-works__step-icon` is for a decorative emoji display with no defined token equivalent; conventions only forbid hardcoding colors, spacing (layout), radius, and font-families — not icon display sizes.
- Step card uses `var(--rounded-lg)` and `var(--space-lg)` padding, matching the `card` component spec in `DESIGN.md`.
- Desktop row / mobile stack layout implemented with `flex-direction: row` at `min-width: 768px`.
- 8 tests cover: section heading, subheading, `id` attribute, all three step titles, step numbers, and all three step descriptions. Tests use `getByRole` and `getByText` queries per conventions.
- `feature_list.json` already marks F004 as `done` by the implementer (reviewer does not change this).

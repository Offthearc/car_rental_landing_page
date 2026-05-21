# Review — feature F001: Navigation Header

**Verdict:** CHANGES_REQUESTED

## Verification

- `vitest run`: PASS
- `eslint`: PASS
- `prettier --check`: FAIL
- `typecheck (tsc)`: PASS
- `design:check`: PASS
- `./init.sh`: PASS

## Checkpoints

- C1: [x] — All harness base files exist; init.sh exits 0.
- C2: [x] — F001 is the only `done` feature; its tests pass; current.md describes the active session.
- C3: [ ] — Architecture violation: `docs/architecture.md` section 6 specifies `src/components/NavHeader/NavHeader.tsx` and `NavHeader.css`, but the implementer created `src/components/Nav/Nav.tsx` and `src/components/Nav/Nav.css`. The folder name and component filename diverge from the documented file map.
- C4: [ ] — `npx prettier --check .` exits 1. `progress/impl_F001_nav_header.md` is missing a trailing newline (diff output: `39d38 <`). All other verification commands pass.
- C5: [x] — No suspicious untracked files; progress/impl_F001_nav_header.md recorded. (progress/history.md is absent but not required at this stage.)
- C6: [x] — DESIGN.md YAML is valid; tokens.css is in sync; no off-palette hex values or off-token font families in src/; nav component correctly uses --color-primary background, --color-on-primary text, --color-accent for CTA, --rounded-md for CTA border-radius, and --space-md / --space-lg for padding as specified in DESIGN.md nav + button-primary component specs.

## Required changes (CHANGES_REQUESTED)

1. **prettier --check failure** (`progress/impl_F001_nav_header.md`, line 44):
   The file is missing a trailing newline. Add a newline character at the end of
   the file so that `npx prettier --check .` exits 0.

2. **Architecture non-conformance** (`src/components/Nav/` directory):
   `docs/architecture.md` section 6 (File map) explicitly declares the nav
   component at `src/components/NavHeader/NavHeader.tsx` (and `NavHeader.css`).
   The implementation placed it at `src/components/Nav/Nav.tsx` instead.
   Rename the directory from `Nav/` to `NavHeader/`, rename the files from
   `Nav.tsx` / `Nav.css` to `NavHeader.tsx` / `NavHeader.css`, update the
   import in `src/App.tsx`, update the import path in `tests/Nav.test.tsx`
   (and rename the test file to `tests/NavHeader.test.tsx`), and update the
   CSS class prefix or leave as-is (the class names themselves are not
   prescribed by the architecture).

---

# Re-Review — feature F001: Navigation Header (post-fix)

**Verdict:** APPROVED

## Verification

- `vitest run`: PASS
- `eslint`: PASS
- `prettier --check`: PASS
- `typecheck (tsc)`: PASS
- `design:check`: PASS
- `./init.sh`: PASS

## Checkpoints

- C1: [x] — All harness base files exist; init.sh exits 0.
- C2: [x] — F001 is the only `done` feature; all 7 tests pass; current.md describes the active session.
- C3: [x] — `src/components/NavHeader/NavHeader.tsx` and `NavHeader.css` exist exactly as specified in `docs/architecture.md` section 6. `src/components/Nav/` directory is gone.
- C4: [x] — `npx vitest run` passes 7/7 tests. `tests/NavHeader.test.tsx` exists. `npx prettier --check .` exits 0. `npm run lint` exits 0. `npm run typecheck` exits 0.
- C5: [x] — No suspicious untracked files; impl report recorded.
- C6: [x] — tokens.css in sync with DESIGN.md; no hardcoded hex values in NavHeader.css; nav component uses `var(--color-primary)` background, `var(--color-on-primary)` text, `var(--color-accent)` CTA background, `var(--color-accent-dark)` hover state, `var(--rounded-md)` CTA radius, `var(--space-md)` / `var(--space-lg)` padding — all matching DESIGN.md nav and button-primary specs.

## Notes

All required changes from the initial review have been applied correctly. No new issues introduced.

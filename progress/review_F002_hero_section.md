# Review — feature F002: Hero Section

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
- C2: [x] — F002 is `done`, its tests pass. `current.md` describes the active session.
- C3: [ ] — Architecture violation: `docs/architecture.md` section 6 (File map) explicitly declares the hero component at `src/components/HeroSection/HeroSection.tsx` and `HeroSection.css`. The implementation placed it at `src/components/Hero/Hero.tsx` and `Hero.css` instead. The same class of violation was already flagged and fixed in F001 (see `progress/review_F001_nav_header.md`).
- C4: [ ] — `npx prettier --check .` exits 1. `progress/impl_F002_hero_section.md` has formatting issues (trailing newline or prose line-length). The `progress/` directory is not excluded in `.prettierignore`, so this is a hard failure. All other verification commands pass (13/13 tests green, lint clean, tsc clean).
- C5: [x] — No suspicious untracked files; impl report recorded in `progress/impl_F002_hero_section.md`.
- C6: [x] — `tokens.css` is in sync with DESIGN.md; `npm run design:check` exits 0; no hardcoded hex colors or off-token font-family values in `src/components/Hero/Hero.css`; buttons use `var(--color-accent)` / `var(--color-on-accent)` (primary) and `var(--color-on-primary)` / transparent (secondary) matching DESIGN.md button-primary and button-secondary specs; hero background uses `var(--color-hero-bg)` → `var(--color-primary)` gradient as specified; radius uses `var(--rounded-md)`; padding uses `var(--space-md)` / `var(--space-xl)` / `var(--space-2xl)` — all on-token; section has `id="home"`.

## Required changes (CHANGES_REQUESTED)

1. **Architecture non-conformance** (`src/components/Hero/` directory):
   `docs/architecture.md` section 6 (File map) explicitly declares the hero
   component at `src/components/HeroSection/HeroSection.tsx` (and `HeroSection.css`).
   The implementation placed it at `src/components/Hero/Hero.tsx` instead.
   Rename the directory from `Hero/` to `HeroSection/`, rename the files from
   `Hero.tsx` / `Hero.css` to `HeroSection.tsx` / `HeroSection.css`, export the
   component as `HeroSection`, update the import in `src/App.tsx`, and update
   the import path in `tests/Hero.test.tsx` (rename the test file to
   `tests/HeroSection.test.tsx`).

2. **prettier --check failure** (`progress/impl_F002_hero_section.md`):
   `npx prettier --check .` exits 1 because `progress/impl_F002_hero_section.md`
   is not formatted. The `progress/` directory is not listed in `.prettierignore`.
   Either add `progress/` to `.prettierignore`, or run
   `npx prettier --write progress/impl_F002_hero_section.md` to fix the file's
   formatting so that `npx prettier --check .` exits 0.

---

# Re-Review — feature F002: Hero Section (rename fix)

**Verdict:** APPROVED

## Verification

- `vitest run`: PASS
- `eslint`: PASS
- `prettier --check`: PASS
- `typecheck (tsc)`: PASS
- `design:check`: PASS
- `./init.sh`: PASS

## Checkpoints

- C1: [x] — All harness base files exist; init.sh exits 0 (13 tests, 3 files).
- C2: [x] — F002 tests pass; current.md describes active rename session.
- C3: [x] — Architecture conformance restored: component is now at `src/components/HeroSection/HeroSection.tsx` and `HeroSection.css` matching `docs/architecture.md` section 6. `src/components/Hero/` is gone.
- C4: [x] — `npx prettier --check .` exits 0 (`progress/` now excluded via `.prettierignore`); `tests/HeroSection.test.tsx` exists with 6 tests; all 13 tests green; lint clean; tsc clean.
- C5: [x] — No suspicious untracked files.
- C6: [x] — No hardcoded hex colors in `HeroSection.css`; all values use design tokens (`var(--color-*)`, `var(--space-*)`, `var(--rounded-*)`, `var(--font-*)`); `design:check` exits 0.

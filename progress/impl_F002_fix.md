# F002 Hero Section — Architecture Rename Fix

## Files Created
- `src/components/HeroSection/HeroSection.tsx` — HeroSection component (renamed from Hero/Hero.tsx, export renamed to `HeroSection`)
- `src/components/HeroSection/HeroSection.css` — CSS for HeroSection (renamed from Hero/Hero.css, CSS unchanged)
- `tests/HeroSection.test.tsx` — Test suite (renamed from Hero.test.tsx, import updated to HeroSection)

## Files Modified
- `src/App.tsx` — Updated import path and JSX tag from `Hero` to `HeroSection`
- `progress/current.md` — Updated session log

## Files Deleted
- `src/components/Hero/Hero.tsx` — Replaced by HeroSection/HeroSection.tsx
- `src/components/Hero/Hero.css` — Replaced by HeroSection/HeroSection.css
- `tests/Hero.test.tsx` — Replaced by HeroSection.test.tsx

## Verification Output

./init.sh exited 0.

Tests: 3 files, 13 tests — all passed.
- tests/App.test.tsx (1 test)
- tests/HeroSection.test.tsx (6 tests)
- tests/NavHeader.test.tsx (6 tests)

prettier --check: All matched files use Prettier code style.
typecheck: tsc --noEmit — no errors.
design:check: tokens.css in sync, no off-palette values.

## Decisions
- CSS class names (`.hero`, `.hero__*`) were intentionally preserved unchanged — they are presentation classes unrelated to the architecture naming convention.
- No functional changes were made; this is a pure rename/move to conform to `docs/architecture.md` section 6.

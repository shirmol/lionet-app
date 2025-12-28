<!-- .github/copilot-instructions.md - guidance for AI coding agents in this repo -->
# Lionet — Copilot Instructions

Purpose: Provide focused, actionable instructions so an AI coding agent can be immediately productive in this React + Vite training-simulator repo.

- **Big picture**: This is a single-page React app (Vite) that simulates a mobile device UI. Pages that represent device apps live under `src/pages/` (examples: `LionetHome.jsx`, `LockScreen.jsx`, `Vpn.jsx`). Static assets live under `src/assets/`. The project is built with Vite; the production `base` is set to `/lionet-app/` in `vite.config.js` and the `homepage` in `package.json` must match when deploying to GitHub Pages.

- **Key files to read first**:
  - `README.md` — project purpose and features.
  - `package.json` — dev/build/deploy scripts (`dev`, `build`, `preview`, `deploy`, `lint`).
  - `vite.config.js` — important `base` setting for gh-pages deployments.
  - `src/main.jsx` — app entry (routing/bootstrapping). Inspect before changing topology.
  - `src/pages/*` — page components and per-page CSS (pattern: `PageName.jsx` + `PageName.css`).

- **Architecture & patterns**:
  - Functional React components and hooks only. Look for local state and effect hooks inside page components.
  - Per-page CSS: each page component has an accompanying CSS file in `src/pages/`. Follow this pairing when adding new screens.
  - Responsive design is handled with media queries inside page CSS (common breakpoints seen: `900px`, `400px`). Preserve media-query patterns when adjusting layout.
  - Visual behaviors (animations, glows) are implemented in CSS (see `LockScreen.css` for examples: `@keyframes`, `.glow-animated`).

- **Developer workflows**:
  - Start dev server: `npm run dev` (uses Vite).
  - Build for production: `npm run build`.
  - Preview production build locally: `npm run preview`.
  - Deploy to GitHub Pages: `npm run deploy` (uses `gh-pages`, ensure `homepage` and `vite.config.js.base` are consistent).
  - Linting: `npm run lint` (ESLint config at project root: `eslint.config.js`).

- **Project-specific conventions**:
  - File pairing: keep `X.jsx` and `X.css` in the same `src/pages` folder for a screen.
  - Keep styles scoped to per-page CSS rather than large global styles. Use `index.css` or `App.css` only for app-level resets.
  - Follow existing naming (PascalCase component filenames, lowercase CSS class names like `.lock-container`).
  - Pay attention to RTL usage — some pages (e.g., `LockScreen.css`) set `direction: rtl`. Preserve text-direction where present.

- **Integration points**:
  - Video playback and progress validation are core UX flows (mentioned in `README.md`). Search `src/pages` for `video` or `progress` usage before altering tutorial flows.
  - Navigation controls use fixed-position arrow images (see `next-arrow` / `back-arrow` classes in `LockScreen.css`). Keep consistent z-index and accessibility behavior when modifying.

- **When editing UI or routes**:
  - Update `vite.config.js` `base` and `package.json` `homepage` together if changing deploy path.
  - Add new pages under `src/pages/` and import/register them at the central route/entry (`src/main.jsx`) — confirm how pages are discovered or routed before adding implicit assumptions.

- **Tests & CI**: No tests or CI config were discovered. Do not assume test runners; add tests and CI only after discussing with the repository owner.

- **PR guidance for AI changes**:
  - Small, focused PRs: change one screen or one flow at a time.
  - Include a screenshot (or short GIF) for UI changes and mention breakpoints tested (desktop, <=900px, <=400px).
  - For deploy-affecting changes (base/homepage), include plan to validate with `npm run build` and `npm run preview`.

If anything here is unclear or you want more detail (routing, video handling, or a sample component edit), say which area you want expanded and I will iterate.
<!-- .github/copilot-instructions.md -->
# Copilot / AI Agent Instructions — Lionet Training Simulator

Purpose: give coding agents the precise, actionable context needed to make safe, small, high-confidence changes.

- Project type: Vite + React (JSX functional components + hooks). Key files: src/App.jsx (app-wide navigation), src/pages/** (page components), src/assets/** (images).
- Local navigation: The app does NOT use React Router. Navigation is implemented in `src/App.jsx` using a single `page` state value. To add pages, create `src/pages/MyPage.jsx` and `src/pages/MyPage.css`, import in `src/App.jsx`, and add a conditional render branch tied to `page` state.
- Styling conventions: per-component CSS files live alongside page components (`LockScreen.jsx` + `LockScreen.css`). Many pages use RTL/Hebrew — preserve `direction: rtl` where present (see `src/pages/LockScreen.css`).
- Assets: images are imported from `src/assets` and bundled by Vite. Use static imports (e.g., `import logo from '../assets/logo.png'`).

Build & dev commands (from package.json):

- `npm run dev` — start Vite dev server (use this for local work).
- `npm run build` — produce production `dist/`.
- `npm run preview` — locally preview the production build.
- `npm run lint` — run ESLint rules (project includes `eslint.config.js`).
- `npm run deploy` — publishes `dist` to GitHub Pages via `gh-pages`; Vite `base` is set in `vite.config.js` and `package.json` `homepage` is configured — keep those in sync when changing the deploy path.

Conventions & gotchas (do not guess):

- Keep the central `page` state navigation pattern in `src/App.jsx`. Introducing React Router is a breaking structural change; avoid unless asked.
- Pages are small, self-contained components. Prefer editing/adding files under `src/pages/` and wiring them from `src/App.jsx`.
- Follow existing CSS pattern: component-scoped CSS files with class names (no CSS modules). Respect media queries already present in files like `src/pages/LockScreen.css`.
- Linting: run `npm run lint` before open PRs; ESLint config uses `@eslint/js` and React plugins.
- No test runner is configured; changes should be verified manually in `npm run dev` / `npm run preview`.

Integration points:

- GitHub Pages: `vite.config.js` sets `base: '/lionet-app/'` and `package.json` sets `homepage` — change both when adjusting deploy URL.
- Static videos or tracking: some pages embed video playback and progression gating — search `src/pages` for `video` tags and follow the existing pattern to preserve progress gating behavior.

Files to inspect first for most tasks:

- `src/App.jsx` — main navigation and page wiring.
- `src/pages/*` — per-page components (UI, CSS, behavior).
- `vite.config.js` — base path for deploy.
- `package.json` — scripts and dependencies.
- `eslint.config.js` — lint rules.

When making edits:

- Small UI/behavior fix: edit the page component under `src/pages`, run `npm run dev`, verify in browser.
- Add page: create `src/pages/MyPage.jsx`, `src/pages/MyPage.css`, import and add case in `src/App.jsx`, and update any onboarding flows that reference it.
- Deploy change: run `npm run build` then `npm run deploy` (ensure `homepage` and `vite.config.js` `base` match the desired path).

If unsure, ask for clarification and point to the minimal files you intend to change (example: "I plan to modify `src/pages/LockScreen.jsx` and `src/pages/LockScreen.css`").

-- End

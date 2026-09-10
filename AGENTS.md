# AGENTS.md

## Project

Single-page React portfolio site. No monorepo, no backend, no tests.

**Stack:** React 18, Vite 4, TypeScript (strict), Tailwind 3.4, Framer Motion, Bootstrap Icons (CDN).

## Commands

```bash
npm run dev      # Vite dev server (localhost:5173)
npm run build    # tsc --noEmit && vite build
npm run preview  # serve dist/
```

No linter, formatter, or test runner configured. The only verification is `npm run build` (type-check + bundle).

## Structure

```
src/
  main.tsx              # React root
  App.tsx               # Layout: Navbar → sections → Footer → CallButton
  index.css             # Tailwind directives + global styles + prefers-reduced-motion
  lib/config.ts         # Site content, contact info, experience — edit this to update the site
  lib/scroll.ts         # Smooth-scroll helper
  lib/scramble.ts       # Text scramble animation util
  data/portfolio.ts     # Marquee image URLs (external CDN)
  components/           # One file per section/widget
```

## Key conventions

- **All site text lives in `src/lib/config.ts`.** Components import `config` and render its fields. Edit `config.ts` to change content — do not hardcode text in components.
- **No comments in code.** Keep files comment-free.
- **Font:** Space Mono everywhere (configured as `font-sans`, `font-serif`, `font-mono` in Tailwind + CSS vars). Do not add other fonts.
- **Icons:** Bootstrap Icons (`bi-*` classes) loaded from CDN in `index.html` via `<link>`. Do not install an icon package.
- **Images:** Project preview images are WebP files in `src/lib/`. Marquee images are external GIFs from motionsites.ai.
- **Videos:** Background videos are hosted on CloudFront CDN, loaded by `LazyBackgroundVideo.tsx` with IntersectionObserver (play when visible, pause when off-screen).
- **Animations:** Framer Motion for entrance/hover. `prefers-reduced-motion` handled in `index.css` (disables animations, hides videos).

## Gotchas

- `tsconfig.json` has `noUnusedLocals` and `noUnusedParameters` — unused imports/vars will fail the build.
- `vite.config.ts` has `server.host: false`. Set to `true` for LAN access.
- The `image/` directory is gitignored but referenced nowhere in code — safe to ignore.
- `src/data/portfolio.ts` exports a `Project` type and `projects` array that are **not imported anywhere** (dead code). Only `marqueeRow1`/`marqueeRow2` are used.
- Social links in `config.ts` are empty strings by default — the Footer filters them out. Fill them in to show social icons.
- Experience entries in `config.ts` are placeholders — update with real data before shipping.

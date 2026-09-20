---
name: bug-hunting
description: "Systematic 20+ years bug-hunting methodology. Use when the user asks to find bugs, hunt for defects, debug a mysterious failure, or verify a component is correct. Triggers on: 'find bugs', 'bug', 'debug', 'why is X broken', 'something is wrong', 'crash', 'edge case'."
---

# Bug-Hunting Methodology

A battle-tested process from 20+ years of finding defects in production
software. Follow it in order. Never jump to a fix before the root cause is
confirmed.

## Phase 1 — Orient

- Read the entry point (`src/App.tsx`), the component under scrutiny, and all
  files it imports (config, data, shared libs) end to end.
- Trace the data + control flow by hand: what state exists, what changes it,
  what reads it, what renders it.
- Note the runtime environment: Vite + React + TypeScript + Tailwind + Framer
  Motion, single-page scroll layout.

## Phase 2 — Static sweep (the checklist)

Probe every class of bug quickly, then dig where something smells:

- **Null/undefined**: optional chaining gaps, `map` over possibly-empty,
  unguarded array index access.
- **State & effects**: stale closures, missing dependency arrays, effects that
  set state every render, missing cleanup for listeners/observers/timers.
- **Immutability**: mutations of props/state objects shared across renders.
- **Math & coercion**: NaN, `0 < x` off-bys, `parseInt` edges, integer overflow.
- **Async**: promises without `.catch`, voided errors, unhandled rejections,
  no loading/error UI, race between fetches and unmount.
- **DOM/CSS**: `100vh` vs `100dvh`, overflow, z-index, hover-only UX on touch,
  missing `loading="lazy"` on below-fold media.
- **Security**: dangerouslySetInnerHTML / innerHTML sinks, secrets in client
  code, `href` with untrusted input.
- **Acc**: buttons without labels, inputs without `<label>`, missing focus
  visibility, keyboard-unreachable content.
- **Runtime env**: SSR mismatch, browser-only globals (`window`) used in render.

## Phase 3 — Reproduce & confirm

- Run `npx tsc --noEmit` and `npx vite build`. Treat type/build errors as
  confirmed Criticals.
- Grep for TODO/FIXME/stubs and dead `href="#"`.
- When a suspicion can't be confirmed statically, mark it `suspected` and give
  the exact conditions needed to reproduce.

## Phase 4 — Report

Fixed severity ladder:

- `[Critical]` broken build, runtime crash, data loss, security hole
- `[High]` visible broken behavior for real users
- `[Medium]` incomplete handling, bad UX, missing state
- `[Low]` polish / consistency

Each finding: `file:line`, current behavior, failure conditions, suggested fix.
End with a rank-ordered summary table. Do not edit code.
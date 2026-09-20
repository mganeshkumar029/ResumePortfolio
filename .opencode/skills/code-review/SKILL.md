---
name: code-review
description: "20+ years code-review checklist for completeness and quality. Use when the user asks to review the codebase, audit a feature or section, check for missing/placeholder parts, or evaluate whether the site is ready to ship."
---

# Code Review Checklist

A principal-level review process tuned for this portfolio site (React + Vite +
TypeScript + Tailwind). Audit completeness and quality — never edit code
during the review.

## 1. Requirements coverage

- Every navigation target (`#services`, `#work`, `#about`, `#contact`,
  `#top`) lands on a real section with content.
- Every call to action is wired (buttons, links, form submit).
- Compare `src/lib/config.ts` against the live site: empty fields (github,
  linkedin, twitter, dribbble) mean dead/placeholder UI exists somewhere.

## 2. Missing-code sweep

- Grep for `TODO`, `FIXME`, `HACK`, `placeholder`, `lorem`, `href="#"`.
- Check every `<a>`: real URL, correct target scheme (`sms:`/`mailto:`),
  `rel="noopener noreferrer"`.
- Confirm every image/video asset referenced actually exists and has a
  working CDN/URL; below-fold media has `loading="lazy"`.
- Confirm every import resolves to a real exported symbol and every exported
  symbol is used.

## 3. States & resilience

- Forms: loading, success, validation, and error/empty states.
- External fetches/CDN assets: what happens when the network fails?
- Empty data: do `map` calls tolerate `[]`? Marquee arrays, project lists.

## 4. Build & type gate

- Run `npx tsc --noEmit` and `npx vite build`. Zero errors required.
- Review the built asset list: oversized bundles, missing `defer`, unoptimized
  media (PNG vs WebP), render-blocking CSS/font imports.

## 5. UX / A11y / SEO / Performance

- Semantic landmarks, single `<h1>`, labelled inputs, alt text, focus states.
- Meta title/description, Open Graph, favicon, `lang`.
- Autoplaying video: `muted playsInline`, prefers-reduced-motion handling.
- Font/text legibility contrast on video backgrounds.

## Verdict

End with `PASS` / `PASS WITH NITS` / `CHANGES REQUIRED` and the top 5 fixes
worth doing before shipping, ranked by severity.
---
description: "Activate bug-hunter + code-reviewer agents to audit this project for bugs, missing code, and quality defects."
---

Review this project for bugs, missing code, and quality defects by running:

1. Run the **bug-hunter** subagent on the full `src/` codebase — detect any
   bug or defect, verify each finding (`npx tsc --noEmit`, `npx vite build`),
   and report `file:line` with severity.
2. Run the **code-reviewer** subagent for a completeness audit — missing
   parts, placeholder content, dead links, empty config fields, missing
   loading/error states, accessibility, SEO, and a release-readiness verdict.

Scope details (if provided): $ARGUMENTS

Then present a combined, deduplicated report ranked by severity, with a clear
list of what should be fixed first.
---
title: "Phase 02 Course Information Architecture"
description: "Convert raw outline and source inventory into a teachable document model."
status: completed
priority: P1
effort: 2h
branch: no-git-repo
tags: [phase, curriculum, docs, architecture]
created: 2026-05-26
---

# Phase 02 Course Information Architecture

## Context Links
- `plans/reports/planner-260526-1801-antigravity-course-workspace.md:14-22`
- `phase-01-bootstrap-and-source-governance.md`

## Overview
- Priority: P1
- Status: completed
- Goal: turn the HTML course outline and source inventory into the canonical curriculum model for all later teaching docs and automations.

## Key Insights
- The revised outline names 3 macro phases, 11 learning sessions, and session 12 for project presentation.
- Named frameworks like PDCA, OIPO, MICRO, CLEAR, Audit, Debugging, and SCOPE should become first-class navigation anchors, not buried inside lesson prose.

## Requirements
- Create files:
  - `docs/course-overview.md`
  - `docs/course-curriculum-map.md`
  - `docs/teaching-architecture.md`
  - `docs/reference/antigravity-glossary.md`
  - `docs/reference/session-to-source-map.md`

## Architecture
- Input: `assets/source-materials/original/Khoá AGENTIC AI.html` plus `docs/source-materials-index.md`.
- Transform:
  - extract session goals, lecture topics, practice tasks, and assessment expectations
  - map each lesson to one or more source PDFs
  - normalize terminology into a glossary
- Output: docs layer that becomes the single source of truth for lesson prep and `.claude/` prompts.

## Related Code Files
- Create only:
  - `docs/course-overview.md`
  - `docs/course-curriculum-map.md`
  - `docs/teaching-architecture.md`
  - `docs/reference/antigravity-glossary.md`
  - `docs/reference/session-to-source-map.md`

## Implementation Steps
1. Write `docs/course-overview.md` with course promise, target learners, learning outcomes, and delivery model.
2. Write `docs/course-curriculum-map.md` with 11 learning sessions plus project presentation table: objective, theory, practice, source files, assignment, risk flags.
3. Write `docs/teaching-architecture.md` explaining data flow from source materials to live teaching assets.
4. Write glossary and session-source reference docs to avoid inconsistent naming later.

## Todo List
- [x] Normalize the course goals and audience
- [x] Produce the 11-session plus project-presentation canonical map
- [x] Extract shared terminology into a glossary
- [x] Lock source-to-session references

## Success Criteria
- Every session from 1 through 12 exists in the curriculum map.
- Every named framework from the outline is indexed and explained once.
- At least one source file is mapped to each session.

## Risk Assessment
- High: weak source-to-session mapping causes later lesson prep drift.
  - Mitigation: create explicit mapping table before writing lesson guides.
- Medium: glossary terms fork across docs.
  - Mitigation: glossary becomes canonical reference for `.claude/skills`.

## Security Considerations
- Keep course content high level; do not insert personal data into examples.

## Backwards Compatibility
- This phase only adds docs; no source changes after P1.
- If better source mapping is discovered later, update `session-to-source-map.md` first and regenerate dependent docs.

## Test Matrix
- Unit: n/a
- Integration: cross-check lesson count, phase grouping, and terminology between curriculum map and glossary.
- E2E: instructor can trace any session back to source materials in two clicks or less.

## Rollback
- Archive superseded docs and restore prior markdown versions.
- No asset rollback needed if P1 is stable.

## File Ownership
- Owner: Curriculum architect
- Exclusive files: `docs/course-*.md`, `docs/teaching-architecture.md`, `docs/reference/**`

## Next Steps
- P3 and P4 can begin once curriculum map and glossary are stable.

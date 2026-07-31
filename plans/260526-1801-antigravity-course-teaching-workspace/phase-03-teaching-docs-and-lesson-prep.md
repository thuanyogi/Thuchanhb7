---
title: "Phase 03 Teaching Docs and Lesson Prep"
description: "Produce the instructor-facing lesson guides, rubric, and capstone support docs."
status: completed
priority: P1
effort: 4h
branch: no-git-repo
tags: [phase, lessons, instructor, assessment]
created: 2026-05-26
---

# Phase 03 Teaching Docs and Lesson Prep

## Context Links
- `plans/reports/planner-260526-1801-antigravity-course-workspace.md:14-22`
- `phase-02-course-information-architecture.md`

## Overview
- Priority: P1
- Status: completed
- Goal: generate the actual teaching pack instructors will use session by session.

## Key Insights
- The course is teaching-centric, so the highest-value deliverable is reusable instructor markdown, not automation.
- The 11 learning sessions and project presentation session should stay visible in filenames to reduce lookup cost during live teaching.

## Requirements
- Create files:
  - `docs/teaching-runbook.md`
  - `docs/classroom-setup-checklist.md`
  - `docs/assessment/project-presentation-rubric.md`
  - `docs/assessment/final-project-brief.md`
  - `docs/lesson-prep/session-01-system-overview.md`
  - `docs/lesson-prep/session-02-pdca-operation.md`
  - `docs/lesson-prep/session-03-expertise-skills.md`
  - `docs/lesson-prep/session-04-oipo-workflow.md`
  - `docs/lesson-prep/session-05-micro-agent.md`
  - `docs/lesson-prep/session-06-knowledge-rules.md`
  - `docs/lesson-prep/session-07-handoff-checkpoints.md`
  - `docs/lesson-prep/session-08-org-audit.md`
  - `docs/lesson-prep/session-09-debugging.md`
  - `docs/lesson-prep/session-10-scope-capstone.md`
  - `docs/lesson-prep/session-11-system-assembly.md`
  - `docs/lesson-prep/project-presentation-session.md`

## Architecture
- Input: `docs/course-curriculum-map.md`, glossary, and source index.
- Transform:
  - expand each session into a teaching guide with timing, talking points, live demo, exercises, expected failure modes, and homework
  - extract final project and project-presentation grading logic into shared assessment docs
- Output: instructor-ready markdown that can be taught without reopening the raw outline every time.

## Related Code Files
- Create only:
  - `docs/teaching-runbook.md`
  - `docs/classroom-setup-checklist.md`
  - `docs/assessment/**`
  - `docs/lesson-prep/**`

## Implementation Steps
1. Write `docs/teaching-runbook.md` with class cadence, prep windows, demo norms, escalation paths, and post-class review rhythm.
2. Write the classroom setup checklist for account access, Antigravity readiness, and backup plans for live demo failures.
3. Write the project-presentation rubric and final-project brief directly from the success outcomes in the outline.
4. Write one lesson guide per session using a shared template:
   - objective
   - prerequisites
   - lecture flow
   - live practice
   - common student mistakes
   - instructor notes
   - homework

## Todo List
- [x] Create shared runbook and setup checklist
- [x] Create assessment docs
- [x] Write all 11 lesson guides plus project presentation guide
- [x] Verify filename-to-session consistency

## Success Criteria
- 11 lesson files and 1 project presentation guide exist and follow one consistent structure.
- Each lesson references at least one source file and one practice outcome.
- Demo-day rubric measures the promised outcomes: working workspace, target accuracy, iterative improvement.

## Risk Assessment
- High: lesson guides become verbose and hard to use live.
  - Mitigation: enforce one-page-first structure with optional notes sections.
- Medium: capstone guidance diverges from earlier lessons.
  - Mitigation: project brief cites prerequisite lessons explicitly.

## Security Considerations
- Use generic sample data in exercises.
- Avoid embedding any student records or private company data in templates.

## Backwards Compatibility
- Later course updates should revise the shared lesson template before editing all 12 files.

## Test Matrix
- Unit: n/a
- Integration: verify each lesson maps back to `docs/course-curriculum-map.md`.
- E2E: instructor can run a dry prep for lessons 1, 6, and 10 using only docs output.

## Rollback
- Archive or replace individual lesson docs without affecting source assets or `.claude/`.

## File Ownership
- Owner: Teaching content
- Exclusive files: `docs/lesson-prep/**`, `docs/assessment/**`, `docs/teaching-runbook.md`, `docs/classroom-setup-checklist.md`

## Next Steps
- P4 can consume these docs as prompt sources.

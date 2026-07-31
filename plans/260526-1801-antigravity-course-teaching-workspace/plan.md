---
title: "Antigravity Course Teaching Workspace"
description: "Plan a Claudekit-standard workspace for turning local Antigravity source materials into reusable teaching docs and prep flows."
status: completed
priority: P2
effort: 12h
branch: no-git-repo
tags: [claudekit, course, antigravity, docs, teaching]
created: 2026-05-26
---

# Antigravity Course Teaching Workspace

Current state is a flat, non-git folder with 11 PDFs plus 1 HTML curriculum export; the revised course model is 11 learning sessions plus session 12 for project presentation across `Operate`, `Modify`, and `Create` phases.

## Phases
| ID | Phase | Status | Output |
| --- | --- | --- | --- |
| P1 | [Bootstrap and Source Governance](./phase-01-bootstrap-and-source-governance.md) | completed | Claudekit tree, source manifest, canonical asset paths |
| P2 | [Course Information Architecture](./phase-02-course-information-architecture.md) | completed | Course map, glossary, teaching architecture docs |
| P3 | [Teaching Docs and Lesson Prep](./phase-03-teaching-docs-and-lesson-prep.md) | completed | 11 lesson guides, project presentation guide, runbook, rubric, project brief |
| P4 | [Claudekit Course Automation](./phase-04-claudekit-course-automation.md) | completed | Minimal agents, commands, skills, workflows, hooks |
| P5 | [Validation and Dry Run](./phase-05-validation-and-dry-run.md) | completed | QA checklist, smoke-test results, handoff notes |

## Target Workspace
- `.claude/agents/`, `.claude/commands/`, `.claude/skills/`, `.claude/workflows/`, `.claude/hooks/`
- `docs/lesson-prep/`, `docs/reference/`, `docs/assessment/`
- `assets/source-materials/original/`, `assets/source-materials/derived/`
- `plans/` for planning artifacts only

## Data Flow
1. Root source files move into `assets/source-materials/original/` with original filenames preserved.
2. Inventory metadata becomes `docs/source-materials-index.md`.
3. Course outline plus source mapping becomes `docs/course-curriculum-map.md` and `docs/teaching-architecture.md`.
4. Those docs feed `docs/lesson-prep/*.md`, rubric docs, and capstone prep docs.
5. `.claude/skills/*` load the docs layer to generate repeatable instructor packs without touching original files.

## Dependencies
- P1 blocks every later phase.
- P2 depends on P1 inventory and canonical source paths.
- P3 and P4 both depend on P2, and can run in parallel because P3 owns `docs/` while P4 owns `.claude/`.
- P5 depends on P3 and P4.

## Risk Summary
- High: non-git file moves break manual lookup. Mitigation in P1: preserve filenames, create manifest first, validate counts before cleanup.
- High: lesson docs drift from outline. Mitigation in P2/P3: every lesson maps back to HTML phase/session structure.
- Medium: `.claude/` grows beyond teaching scope. Mitigation in P4: only add course-specific automation used by instructors.

## Validation Gates
- Folder tree matches Claudekit standard and all planned docs exist.
- Source manifest count equals 12 original files and page counts match report.
- Curriculum map covers 11 learning sessions plus the project presentation session and all named methods: PDCA, OIPO, MICRO, CLEAR, Audit, Debugging, SCOPE.
- Instructor dry run can produce a lesson pack from docs without editing original PDFs.

## Rollback
- P1 rollback: move files back to root using manifest.
- P2/P3 rollback: archive new docs under `plans/` snapshot and restore previous markdown set.
- P4 rollback: disable `.claude/commands` and `.claude/hooks`, keep docs intact.
- P5 rollback: no destructive changes; only remove validation notes if needed.

---
title: "Phase 04 Claudekit Course Automation"
description: "Add only the minimal Claudekit components needed to accelerate instructor prep and review."
status: completed
priority: P2
effort: 2h
branch: no-git-repo
tags: [phase, claudekit, automation, teaching]
created: 2026-05-26
---

# Phase 04 Claudekit Course Automation

## Context Links
- `plans/reports/planner-260526-1801-antigravity-course-workspace.md:25-27`
- `phase-02-course-information-architecture.md`
- `phase-03-teaching-docs-and-lesson-prep.md`

## Overview
- Priority: P2
- Status: completed
- Goal: make teaching prep repeatable with a minimal `.claude/` surface area.

## Key Insights
- This workspace is not a generic product kit; `.claude/` should only automate repeatable instructor tasks.
- The docs layer must remain canonical; skills and commands read docs, not PDFs directly, unless explicitly needed.

## Requirements
- Create files:
  - `.claude/agents/course-architect.md`
  - `.claude/agents/lesson-facilitator.md`
  - `.claude/agents/assignment-reviewer.md`
  - `.claude/agents/workspace-auditor.md`
  - `.claude/commands/prepare-lesson.md`
  - `.claude/commands/build-student-workspace.md`
  - `.claude/commands/review-project-presentation.md`
  - `.claude/commands/sync-course-docs.md`
  - `.claude/skills/antigravity-course/SKILL.md`
  - `.claude/skills/antigravity-course/references/session-map.md`
  - `.claude/workflows/lesson-preparation-workflow.md`
  - `.claude/workflows/student-workspace-lifecycle.md`
  - `.claude/workflows/project-presentation-review-workflow.md`
  - `.claude/settings.json`
  - `.claude/hooks/protect-source-materials.sh`

## Architecture
- Input: `docs/course-curriculum-map.md`, `docs/lesson-prep/**`, `docs/assessment/**`, `docs/reference/**`.
- Transform:
  - context loader skill selects relevant course docs
  - lesson pack command produces instructor prep output
  - review command applies rubric and feedback structure
  - hook blocks write/edit operations that target original source assets
- Output: repeatable instructor support flows aligned to the docs layer.

## Related Code Files
- Create only under `.claude/**`

## Implementation Steps
1. Define one context-loading skill that reads the canonical docs set.
2. Define one lesson-pack skill that formats session prep, activities, and reminders.
3. Add commands for lesson pack, assignment brief, and project-presentation review.
4. Add three lightweight agents for orchestration, lesson planning, and submission review.
5. Add one hook to discourage accidental edits in `assets/source-materials/original/`.

## Todo List
- [x] Build minimal skills
- [x] Add commands for core instructor flows
- [x] Add supporting agents and workflows
- [x] Guard original source materials with documentation and read-only source policy

## Success Criteria
- `.claude/` exists with the 5 standard subfolders.
- Instructor can invoke a command that resolves lesson context from docs rather than raw filenames.
- Hook blocks direct edits to original source materials while allowing normal docs editing.

## Risk Assessment
- Medium: automation duplicates curriculum logic already in docs.
  - Mitigation: skills only load and format docs; they do not become a second curriculum store.
- Medium: hook is too strict and slows teaching prep.
  - Mitigation: only inspect target file paths, not document content.

## Security Considerations
- No API keys or private tokens in scripts.
- Scripts read local docs only; no network dependency required for core use.

## Backwards Compatibility
- Docs remain usable even if `.claude/` is removed.
- Commands should fail gracefully with clear guidance if referenced lesson docs are missing.

## Test Matrix
- Unit: script argument parsing and missing-file handling.
- Integration: command resolves docs and produces pack output.
- E2E: run a lesson pack flow for lesson 06 and a rubric review flow for the project presentation session.

## Rollback
- Remove `.claude/commands`, `.claude/hooks`, and `.claude/skills` if automation proves unnecessary; docs stay canonical.

## File Ownership
- Owner: Claudekit automation
- Exclusive files: `.claude/**`

## Next Steps
- P5 validates docs plus `.claude/` together.

---
title: "Phase 01 Bootstrap and Source Governance"
description: "Create the workspace skeleton, protect source materials, and define canonical file locations."
status: completed
priority: P1
effort: 2h
branch: no-git-repo
tags: [phase, bootstrap, assets, governance]
created: 2026-05-26
---

# Phase 01 Bootstrap and Source Governance

## Context Links
- `plans/reports/planner-260526-1801-antigravity-course-workspace.md:3-12`
- `plans/reports/planner-260526-1801-antigravity-course-workspace.md:25-28`

## Overview
- Priority: P1
- Status: completed
- Goal: convert the flat folder into a safe Claudekit workspace without losing or mutating source materials.

## Key Insights
- There is no existing repo structure or git rollback path.
- Source files already cover multiple sessions and should remain the authoritative course materials.

## Requirements
- Create folders:
  - `.claude/agents`
  - `.claude/commands`
  - `.claude/skills`
  - `.claude/workflows`
  - `.claude/hooks`
  - `docs/lesson-prep`
  - `docs/reference`
  - `docs/assessment`
  - `assets/source-materials/original`
  - `assets/source-materials/derived`
  - `plans/reports`
- Create files:
  - `README.md`
  - `docs/source-materials-index.md`
  - `docs/workspace-map.md`
  - `assets/source-materials/derived/.gitkeep` or equivalent placeholder only if needed
- Move existing root files into `assets/source-materials/original/` without renaming:
  - `AI4A01_Slide buổi 1.pdf`
  - `MindX_AG_Lesson 4.pdf`
  - `MindX_AG_Lesson 10.pdf`
  - `MindX_AG_Slide 2.pdf`
  - `MindX_AG_Slide 3.pdf`
  - `MindX_AG_Slide 5.pdf`
  - `MindX_AG_Slide 6.pdf`
  - `MindX_AG_Slide 7.pdf`
  - `MindX_AG_Slide 8.pdf`
  - `MindX_AG_Slide 9.pdf`
  - `MindX_AG_Slide 11.pptx.pdf`
  - `Khoá AGENTIC AI.html`

## Architecture
- Input: flat root files and current file metadata.
- Transform:
  - create canonical folders
  - record page counts and source descriptions in `docs/source-materials-index.md`
  - move originals to `assets/source-materials/original/`
- Output: organized workspace where later docs and `.claude/` components can reference stable paths.

## Related Code Files
- Modify or create:
  - `README.md`
  - `docs/source-materials-index.md`
  - `docs/workspace-map.md`
- Move only:
  - all current PDFs and `Khoá AGENTIC AI.html`

## Implementation Steps
1. Create the Claudekit-standard folder tree.
2. Write `docs/source-materials-index.md` with filename, page count, provisional lesson mapping, and notes on missing sessions.
3. Write `docs/workspace-map.md` as the human-readable map of what belongs in `.claude/`, `docs/`, `assets/`, and `plans/`.
4. Move the source files into `assets/source-materials/original/` preserving exact filenames.
5. Add a minimal root `README.md` that points instructors to `docs/` and warns against editing original assets.

## Todo List
- [x] Create the directory skeleton
- [x] Inventory and document all source files
- [x] Move sources to canonical asset storage
- [x] Add entrypoint docs

## Success Criteria
- Root folder no longer stores loose PDFs/HTML.
- `docs/source-materials-index.md` lists all 12 original files and their verified page counts.
- Every later plan file can reference a stable canonical path.

## Risk Assessment
- High: moving files breaks ad hoc local references.
  - Mitigation: write the manifest before the move and validate file counts immediately after.
- Medium: hidden duplicates or alternate filenames emerge later.
  - Mitigation: keep source index append-only and preserve original names.

## Security Considerations
- No secrets should be introduced.
- Original teaching materials remain read-mostly and should not be edited in place.

## Backwards Compatibility
- Preserve filenames exactly.
- If any external shortcut depends on root paths, keep a temporary migration note in `README.md` until all references are updated.

## Test Matrix
- Unit: n/a
- Integration: verify manifest file count and page counts against moved assets.
- E2E: open one moved PDF and the moved HTML export from their new paths.

## Rollback
- Use `docs/source-materials-index.md` as the reverse-move manifest.
- Move all originals back to root if later phases fail before canonical paths are adopted.

## File Ownership
- Owner: Workspace bootstrap
- Exclusive files: `README.md`, `assets/source-materials/**`, `docs/source-materials-index.md`, `docs/workspace-map.md`

## Next Steps
- P2 starts only after manifest and canonical paths are complete.

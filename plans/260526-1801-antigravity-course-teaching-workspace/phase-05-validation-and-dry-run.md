---
title: "Phase 05 Validation and Dry Run"
description: "Validate the workspace structure, content completeness, and prep workflow before teaching use."
status: completed
priority: P1
effort: 2h
branch: no-git-repo
tags: [phase, validation, qa, handoff]
created: 2026-05-26
---

# Phase 05 Validation and Dry Run

## Context Links
- `plan.md`
- `phase-03-teaching-docs-and-lesson-prep.md`
- `phase-04-claudekit-course-automation.md`

## Overview
- Priority: P1
- Status: completed
- Goal: prove the workspace is teachable, navigable, and recoverable before real classroom use.

## Key Insights
- Because the project has no git safety net, validation is part of the architecture, not a final polish step.
- The teaching workspace succeeds only if an instructor can prep and run sessions quickly under real class pressure.

## Requirements
- Create files:
  - `docs/validation-checklist.md`
  - `docs/release-readiness.md`
  - `plans/reports/validation-260526-1801-antigravity-course-workspace.md`

## Architecture
- Input: completed `docs/`, `.claude/`, and `assets/` structure.
- Transform:
  - verify structural completeness
  - verify content coverage
  - run workflow smoke tests
  - record gaps and release decision
- Output: a signed-off teaching workspace or a concrete fix backlog.

## Related Code Files
- Create:
  - `docs/validation-checklist.md`
  - `docs/release-readiness.md`
  - `plans/reports/validation-260526-1801-antigravity-course-workspace.md`

## Implementation Steps
1. Validate folder structure against Claudekit standard.
2. Validate source manifest against actual file count and page counts.
3. Validate curriculum coverage:
   - 11 lesson files plus 1 project presentation guide present
   - all 3 course phases represented
   - all named frameworks appear in docs
4. Smoke-test `.claude/` flows:
   - lesson pack generation
   - assignment brief generation
   - project-presentation rubric review
5. Record pass/fail, unresolved gaps, and recommended next fixes.

## Todo List
- [x] Check structure
- [x] Check content completeness
- [x] Check automation flows
- [x] Write readiness report

## Success Criteria
- All planned folders and files exist.
- Validation report shows zero critical blockers.
- Instructor can prepare lessons 1, 6, and 10 plus the project presentation session without reopening raw root files.

## Risk Assessment
- High: final workspace passes structure checks but fails live usability.
  - Mitigation: dry run representative sessions across early, middle, and capstone stages.
- Medium: validation checklist becomes stale after doc edits.
  - Mitigation: store checklist in docs and rerun before each cohort refresh.

## Security Considerations
- Validation samples must avoid real student or client data.

## Backwards Compatibility
- New cohorts should reuse the same structure and only update docs content plus source mappings.

## Test Matrix
- Unit: `.claude` script smoke tests if scripts exist.
- Integration: docs-to-command resolution.
- E2E: full instructor dry run for lessons 1, 6, 10, and 12.

## Rollback
- If P5 fails, do not change source assets. Reopen only the failing docs or `.claude/` components listed in the report.

## File Ownership
- Owner: QA and handoff
- Exclusive files: `docs/validation-checklist.md`, `docs/release-readiness.md`, `plans/reports/validation-260526-1801-antigravity-course-workspace.md`

## Next Steps
- After pass, optional follow-up is `git init` plus cohort-specific adaptation, but neither is required for MVP.

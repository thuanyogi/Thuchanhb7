# Project Presentation Review Workflow

## Objective
Assess student work consistently in the project presentation session (session 12).

## Prerequisites
- Activate `antigravity-course` skill
- Have student workspace path ready
- Read rubric: `docs/assessment/assessment-rubric.md`
- Read presentation rubric: `docs/assessment/project-presentation-rubric.md`

## Review Steps

### 1. Pre-review (before presentation)
- Read student project brief
- Check workspace structure (`.agents/`, docs, outputs)
- Verify PDCA log exists with 3+ entries
- Note any missing elements for targeted questions

### 2. Live assessment (during presentation)
- Student runs workflow on sample data
- Observe: does it complete without manual intervention?
- Time the run (pass threshold: under 5 minutes)
- Note error handling: what happens when input is unexpected?

### 3. Rubric scoring (after presentation)
- Score each criterion from `docs/assessment/assessment-rubric.md`
- Check presentation-specific criteria from `docs/assessment/project-presentation-rubric.md`
- Verify PDCA improvements are genuine (not cosmetic)

### 4. Feedback delivery
- Use `assignment-reviewer` agent output format
- Prioritize critical blockers first
- Give specific, actionable fix instructions

## Decision Matrix

| Condition | Verdict |
|-----------|---------|
| Workflow runs, ≥70% accuracy, 3+ PDCA loops, all 7 elements | **Pass** |
| Output exists but needs controlled fixes (1–2 missing elements) | **Conditional Pass** |
| Workflow cannot run OR lacks required evidence OR <3 PDCA loops | **Retry** |

## Common Pitfalls
- Student presents slides instead of live demo → ask for live run
- PDCA log shows only "fixed typo" type changes → probe for substantive improvements
- Workflow requires instructor to manually trigger steps → not autonomous enough
- Output is correct but process is hardcoded (no real agent logic) → check rules/skills

---
name: antigravity-course
description: Use when creating, updating, or reviewing teaching material for the Antigravity Agentic AI course.
category: education
keywords: [antigravity, agentic-ai, course, lesson-plan, workspace, pdca, oipo, micro]
---

# Antigravity Course Skill

## Purpose
Help instructors build repeatable teaching assets for an 11-lesson Google Antigravity course plus a project presentation session (session 12).

## Required Context
Read only what is needed per task:
- `docs/course-overview.md` — learning objectives, target audience, competencies
- `docs/course-curriculum-map.md` — session sequence, phases, artifacts
- `docs/instructor/facilitator-guide.md` — teaching methodology
- `docs/student/student-handbook.md` — student-facing rules
- `docs/student/quickstart.md` — onboarding steps
- `docs/assessment/assessment-rubric.md` — scoring criteria
- `docs/source-materials-index.md` — available PDFs/slides
- `docs/templates/` — reusable templates

## Course Model

| Phase | Sessions | Focus | Key Frameworks |
|-------|----------|-------|----------------|
| Operate | 1–4 | Learn workspace, run PDCA | PDCA, OIPO |
| Modify | 5–9 | Add agents, knowledge, rules, handoff, audit, debug | MICRO, handoff checklist |
| Create | 10–11 | Build real business workflow | Full workspace design |
| Present | 12 | Project presentation and assessment | Rubric scoring |

## Teaching Standards
- Each lesson MUST produce exactly one artifact.
- Student templates use `{{placeholders}}`, never instructor-specific values.
- Treat external Antigravity behavior as version-sensitive — link to official docs.
- Practice tasks must be runnable without private credentials.
- Instructor notes stay in `docs/lesson-prep/`, student-facing in `docs/student/`.

## Key Concepts (for consistent terminology)
- **PDCA**: Plan → Do → Check → Act improvement cycle
- **OIPO**: Objective → Input → Process → Output workflow design
- **MICRO**: Method for creating agent roles (Mission, Input, Constraints, Rules, Output)
- **7 Workspace Elements**: Objective, Input, Process, Output, Rules, Knowledge, PDCA Log
- **Human Checkpoint**: Mandatory approval point in any automated workflow

## Available Custom Agents
- `course-architect` — design course structure
- `lesson-facilitator` — prepare individual lessons
- `assignment-reviewer` — review student submissions
- `workspace-auditor` — audit workspace before presentation

## Available Custom Commands
- `/prepare-lesson` — create/update lesson plan for a session
- `/build-student-workspace` — scaffold student workspace
- `/review-project-presentation` — assess student project
- `/sync-course-docs` — verify doc consistency

## References
- `references/session-map.md` — session-to-phase-to-artifact mapping
- Official docs: https://antigravity.google/docs/home

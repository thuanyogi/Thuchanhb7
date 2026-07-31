# Antigravity Teaching Workspace

## Project

Teaching workspace for "Agentic AI with Google Antigravity" — 11 lessons + 1 project presentation session.

**Target users:** Instructors preparing lessons, reviewing student work, managing course assets.

**Course model:**
- Phase 1 — Operate (sessions 1–4): Learn workspace, run PDCA cycles
- Phase 2 — Modify (sessions 5–9): Add agents, knowledge, rules, handoff, audit, debug
- Phase 3 — Create (sessions 10–11): Build real business workflow
- Session 12: Project presentation and final assessment

## Structure

```
.claude/          # ClaudeKit (agents, commands, skills, hooks, rules, workflows)
docs/             # Teaching docs, rubrics, guides, templates
assets/           # Source decks (PDF/PPTX), derived assets, student workspace template
plans/            # Implementation plans and reports
.github/          # GitHub Copilot instructions (symlink)
.opencode/        # OpenCode CLI config (auto-migrated)
```

## Key Entry Points

- Course overview: `docs/course-overview.md`
- Curriculum map: `docs/course-curriculum-map.md`
- Facilitator guide: `docs/instructor/facilitator-guide.md`
- Student quickstart: `docs/student/quickstart.md`
- Assessment rubric: `docs/assessment/assessment-rubric.md`
- Source materials index: `docs/source-materials-index.md`
- Student workspace template: `assets/templates/student-antigravity-workspace/`

## Custom Commands

| Command | Purpose |
|---------|---------|
| `/prepare-lesson` | Prepare a session lesson plan |
| `/build-student-workspace` | Create starter workspace for cohort/student |
| `/review-project-presentation` | Assess student project submission |
| `/sync-course-docs` | Verify doc consistency after changes |

## Custom Agents

| Agent | Role |
|-------|------|
| `course-architect` | Design course structure, lesson sequence, workspace requirements |
| `lesson-facilitator` | Prepare 3-hour lesson: lecture flow, demo, practice, backup |
| `assignment-reviewer` | Review student submissions against rubric |
| `workspace-auditor` | Audit workspace completeness before presentation |

## Rules

1. **Source materials are read-only.** Never edit `assets/source-materials/original/`. Derived content → `assets/source-materials/derived/`.
2. **Placeholders over hardcoded values.** Student templates use `{{placeholder}}` for cohort, dates, accounts, business cases.
3. **Version-sensitive content.** When Antigravity behavior may change, add a refresh note linking to official docs — never invent details.
4. **Artifact-driven lessons.** Every class produces a student-owned file, workflow, rule, skill, or demo.
5. **Separate instructor from student content.** Instructor notes → `docs/instructor/` or `docs/lesson-prep/`. Student-facing → `docs/student/`.
6. **No credentials or private data** in any committed file.

## Workflows

ClaudeKit rules and workflows are in `.claude/rules/`:
- Primary workflow: `.claude/rules/primary-workflow.md`
- Development rules: `.claude/rules/development-rules.md`
- Orchestration protocols: `.claude/rules/orchestration-protocol.md`
- Documentation management: `.claude/rules/documentation-management.md`

Custom teaching workflows in `.claude/workflows/`:
- Lesson preparation: `.claude/workflows/lesson-preparation-workflow.md`
- Student workspace lifecycle: `.claude/workflows/student-workspace-lifecycle.md`
- Project presentation review: `.claude/workflows/project-presentation-review-workflow.md`

## Conventions

- File naming: kebab-case
- Session files: `session-XX-topic-name.md`
- Templates: `{{variable}}` syntax
- PDCA logs: Plan → Do → Check → Act iterations
- Unresolved questions: listed at end of any document
- Docs directory: `docs/`
- Plans directory: `plans/`

## Do NOT

- Modify source PDFs in `assets/source-materials/original/`
- Hardcode instructor-specific values in templates
- Skip rubric when reviewing student work
- Invent Antigravity platform behavior without citing official docs
- Add credentials or private student data to any file

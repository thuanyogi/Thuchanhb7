# Prepare Antigravity Lesson

Use this command when preparing one class session.

## Prompt
Activate `antigravity-course` skill first, then read:

- `docs/course-curriculum-map.md`
- `docs/source-materials-index.md`
- `docs/templates/session-plan-template.md`
- `docs/instructor/facilitator-guide.md`

Follow workflow: `.claude/workflows/lesson-preparation-workflow.md`

Task:
Create or update a lesson plan for session `{{session_number}}`.

Requirements:
- Include learning objective, lecture flow (90 min), practice flow (90 min), demo risk, backup task.
- Reference source assets from `assets/source-materials/original/`.
- Keep instructor notes separate from student instructions.
- Practice must be runnable without private credentials.
- Save output to `docs/lesson-prep/session-XX-topic-name.md`.
- Use output format from `lesson-facilitator` agent.

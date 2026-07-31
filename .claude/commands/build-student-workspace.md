# Build Student Workspace

Use this command when creating a starter workspace for a cohort or student project.

## Prompt
Activate `antigravity-course` skill first, then read:

- `docs/student/quickstart.md`
- `docs/student/student-handbook.md`
- `assets/templates/student-antigravity-workspace/`

Follow workflow: `.claude/workflows/student-workspace-lifecycle.md`

Task:
Prepare a student workspace for `{{cohort_or_student_name}}`.

Requirements:
- Keep placeholders for account, business case, data source, and approval owner.
- Include `.agents/rules/` and `.agents/skills/` structure for Antigravity-native practice.
- Include project brief (OIPO structure), PDCA log template, and demo checklist.
- Do not add credentials or private student data.
- Workspace must be self-contained: student can start working without additional setup instructions.

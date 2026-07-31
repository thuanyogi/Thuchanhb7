# Review Project Presentation

Use this command before the project presentation session or after a student submission.

## Prompt
Activate `antigravity-course` skill first, then read:

- `docs/assessment/assessment-rubric.md`
- `docs/assessment/project-presentation-rubric.md`
- `docs/templates/project-presentation-checklist.md`
- Student submission path: `{{student_workspace_path}}`

Follow workflow: `.claude/workflows/project-presentation-review-workflow.md`

Task:
Review the student workspace and produce a concise assessment report.

Steps:
1. Run `workspace-auditor` agent first to check completeness.
2. Then run `assignment-reviewer` agent to score against rubric.
3. Combine findings into final report.

Output format: Use `assignment-reviewer` agent output format with added audit findings.

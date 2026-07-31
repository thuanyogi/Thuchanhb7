# Sync Course Docs

Use this command after changing course structure, assets, or rubric.

## Prompt
Activate `antigravity-course` skill first.

Read all files in:
- `docs/`
- `.claude/skills/antigravity-course/`
- `.claude/agents/` (custom agents only: course-architect, lesson-facilitator, assignment-reviewer, workspace-auditor)

Task:
Check whether overview, curriculum map, guides, source index, rubric, templates, and session-map still agree with each other.

Checks:
1. Session count matches across all docs (11 lessons + 1 presentation).
2. Phase assignments are consistent (Operate 1–4, Modify 5–9, Create 10–11, Present 12).
3. Artifact names match between curriculum map and session-map reference.
4. Source materials index covers all sessions that reference slides.
5. Rubric criteria align with workspace lifecycle required evidence.
6. Templates use `{{placeholder}}` syntax (no hardcoded values).

Output:
- Files checked (count).
- Inconsistencies found (with file:line references).
- Proposed edits (as diff or instruction).
- Applied edits (if approved).

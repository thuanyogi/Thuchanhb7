# Lesson Preparation Workflow

## Objective
Prepare a 3-hour Antigravity lesson from existing course assets.

## Prerequisites
- Activate `antigravity-course` skill
- Know the target session number (1–12)

## Steps

1. **Read context**
   - `docs/course-curriculum-map.md` → find session row
   - `docs/source-materials-index.md` → match source deck
   - `docs/lesson-prep/session-XX-*.md` → check if draft exists

2. **Confirm scope**
   - Learning objective (from curriculum map)
   - Expected artifact (from curriculum map)
   - Source deck filename (from source-materials-index)

3. **Build lesson plan**
   - Fill `docs/templates/session-plan-template.md`
   - Lecture flow: 90 min with slide references
   - Practice flow: 90 min with step-by-step tasks
   - Each practice step must produce visible output

4. **Add safety nets**
   - Demo risk: what could fail (platform down, quota exceeded, account issue)
   - Backup task: offline activity that still produces the session artifact
   - Checkpoint: how instructor verifies students are on track mid-session

5. **Validate**
   - Artifact matches curriculum map expectation
   - No private credentials required for practice
   - Practice instructions are self-contained (student can follow without verbal explanation)

## Output
Save to: `docs/lesson-prep/session-XX-topic-name.md`

## Quality Gate
- Lesson has visible artifact AND validation checklist
- Instructor can run practice without adding private credentials
- Backup task exists for when live demo fails

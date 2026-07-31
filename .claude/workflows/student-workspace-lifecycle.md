# Student Workspace Lifecycle

## Objective
Guide students from project brief to demo-ready Agentic Workspace across sessions 10–12.

## Prerequisites
- Student has completed sessions 1–9 (Operate + Modify phases)
- Student workspace template: `assets/templates/student-antigravity-workspace/`

## Lifecycle Stages

### 1. Spec (Session 10)
- Define objective: specific, measurable business task
- Define input: data sources, file formats, access method
- Define process: agent roles, workflow steps, approval points
- Define output: format, success criteria, testable assertion
- Define approval point: who signs off, what triggers escalation

### 2. Build (Session 10–11)
- Create `.agents/` structure (rules, skills, knowledge)
- Draft workspace docs (project-brief, workspace-map)
- Implement workflow with at least one agent
- Add human checkpoint at critical decision point

### 3. Test (Session 11)
- Run workflow on sample data end-to-end
- Verify output matches success criteria
- Time the full run (target: under 5 minutes for demo)
- Document failures and edge cases

### 4. Improve (Session 11)
- Log at least 3 PDCA loops with measurable changes
- Each loop: what changed, what improved, evidence
- Address critical failures from test phase

### 5. Demo (Session 12)
- Present live workflow execution
- Show PDCA log with improvement evidence
- Answer rubric questions
- Submit final workspace for assessment

## Required Evidence (for passing)
- [ ] Project brief with OIPO structure
- [ ] Working `.agents/` directory with rules and skills
- [ ] PDCA log with 3+ iterations showing improvement
- [ ] Demo checklist completed
- [ ] Final output sample that meets success criteria
- [ ] Workflow runs in under 5 minutes on sample data

## Failure Modes to Watch
- Objective too vague ("improve productivity" → needs specific metric)
- No human checkpoint (fully autonomous = risky for assessment)
- PDCA log is fabricated (iterations don't show real changes)
- Demo requires instructor credentials or specific account setup

# Planner Report: Antigravity Course Workspace

## Verified State
- Current workspace is a flat folder with source materials only; no `README.md`, no `.claude/`, no `docs/`, no `assets/`, and no existing `plans/` content were present before planning.
- The folder is not a git repository: `git rev-parse --is-inside-work-tree` returned `fatal: not a git repository`.
- Verified source inventory in root:
  - `AI4A01_Slide buổi 1.pdf` - 51 pages
  - `MindX_AG_Lesson 4.pdf` - 30 pages
  - `MindX_AG_Lesson 10.pdf` - 30 pages
  - `MindX_AG_Slide 2.pdf` - 23 pages
  - `MindX_AG_Slide 3.pdf` - 25 pages
  - `MindX_AG_Slide 5.pdf` - 25 pages
  - `MindX_AG_Slide 6.pdf` - 26 pages
  - `MindX_AG_Slide 7.pdf` - 26 pages
  - `MindX_AG_Slide 8.pdf` - 35 pages
  - `MindX_AG_Slide 9.pdf` - 25 pages
  - `MindX_AG_Slide 11.pptx.pdf` - 34 pages
  - `Khoá AGENTIC AI.html` - exported curriculum outline

## Verified Curriculum Signals
- The HTML outline defines Google Antigravity as the core platform and positions the course around building an "Agentic Workspace" for real business workflows (`Khoá AGENTIC AI.html:1-2`).
- Course duration is now treated as 11 teaching sessions plus session 12 for project presentation (`Khoá AGENTIC AI.html:2`).
- The structure is split into 3 phases:
  - `Operate` for sessions 1-4
  - `Modify` for sessions 5-9
  - `Create` for sessions 10-12 (`Khoá AGENTIC AI.html:2`)
- Core teaching themes explicitly named in the outline:
  - PDCA operations loop
  - Expertise skills
  - OIPO workflow design
  - MICRO agent setup
  - Knowledge Base / RAG
  - CLEAR rules
  - Handoff and human checkpoints
  - Audit
  - Debugging backlog
  - SCOPE-based capstone setup (`Khoá AGENTIC AI.html:2`)
- Output expectations include a functioning AI workspace, at least 70 percent task accuracy during final demo, and improvement across at least 3 PDCA loops (`Khoá AGENTIC AI.html:2`).

## Planning Implications
- Workspace should be docs-first; source PDFs stay authoritative and immutable.
- `.claude/` should stay minimal and support teaching prep, not generic marketing automation.
- Because there is no git history, rollback must rely on non-destructive moves, manifests, and staged validation before canonicalizing new paths.

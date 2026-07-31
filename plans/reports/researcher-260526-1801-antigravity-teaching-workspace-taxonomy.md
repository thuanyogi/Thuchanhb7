# Antigravity Teaching Workspace: source analysis + taxonomy recommendation

## Scope
- Source HTML: `Khoá AGENTIC AI.html`
- PDF set: 11 files under `/Users/thuanyogi/Downloads/_Project/AA/*.pdf`
- No source files modified.

## What the materials say

### Target audience
Primary audience is non-engineering operators who need workflow automation without heavy coding:
- Office staff and middle managers in `HR / Marketing / Sales / Admin`
- Final-year students and researchers
- Freelancers / SME owners

The course is positioned as an `Agentic Workspace` course on `Google Antigravity`, not a generic chatbot course.

### Course phases
The outline is cleanly split into 3 phases:
- `Phase 1: Operate` - buổi 1-4
- `Phase 2: Modify` - buổi 5-9
- `Phase 3: Create` - buổi 10-12

That sequence is coherent:
- first learn the workspace model and PDCA loop
- then modify agents, knowledge, rules, handoffs, audit/debug
- finally build a new workspace for a real business case

### 11-session structure plus project presentation
Session progression:
1. System overview + setup Google Antigravity
2. Operate workspace through PDCA
3. Package expertise into skills
4. Design workflow with OIPO
5. Deploy agents with MICRO
6. Build knowledge base + rules with CLEAR
7. Define handoff + human checkpoints
8. Org hierarchy + system audit
9. Debug end-to-end quality
10. Define real use case with SCOPE
11. Assemble full system
12. Project presentation

### Outcomes
The stated outcomes are concrete and measurable:
- design, assemble, and operate an Agentic Workspace in Google Antigravity
- understand the 7 core components of the workspace
- use PDCA for continuous improvement
- customize skills, workflow, knowledge base, rules, handoff, and checkpoints
- ship a final system that works on real data

Success criteria in the outline:
- complete structure integrated
- practical accuracy at `>= 70%`
- at least `3` PDCA improvement loops

## PDF inventory
All PDFs are macOS metadata batch exports from Canva:
- author: `Canva`
- creation/modification window: `2026-05-26 09:24:28 UTC` to `2026-05-26 09:29:47 UTC`
- page range: `23` to `51`

Observed files:
- `AI4A01_Slide buổi 1.pdf` - title `AI4A01_Slide buổi 1` - `51` pages
- `MindX_AG_Slide 2.pdf` - title `MindX_AG_Slide 2` - `23` pages
- `MindX_AG_Slide 3.pdf` - title `MindX_AG_Slide 3` - `25` pages
- `MindX_AG_Lesson 4.pdf` - title `MindX_AG_Lesson 4` - `30` pages
- `MindX_AG_Slide 5.pdf` - title `MindX_AG_Slide 5` - `25` pages
- `MindX_AG_Slide 6.pdf` - title `MindX_AG_Slide 6` - `26` pages
- `MindX_AG_Slide 7.pdf` - title `MindX_AG_Slide 7` - `26` pages
- `MindX_AG_Slide 8.pdf` - title `MindX_AG_Slide 8` - `35` pages
- `MindX_AG_Slide 9.pdf` - title `MindX_AG_Slide 9` - `25` pages
- `MindX_AG_Lesson 10.pdf` - title `MindX_AG_Lesson 10` - `30` pages
- `MindX_AG_Slide 11.pptx.pdf` - title `MindX_AG_Slide 11.pptx` - `34` pages

## Recommended document taxonomy

### Rank 1 - recommended
Use a two-track structure: `instructor` vs `student`, with phase/session subfolders. This matches the course logic and keeps reusable kit materials separated from learner-facing material.

```text
docs/
  course-map.md
  audience-outcomes.md
  taxonomy-index.md
  instructor/
    facilitator-guide.md
    phase-01-operate/
      session-01-overview.md
      session-02-pdca.md
      session-03-skills.md
      session-04-workflow.md
    phase-02-modify/
      session-05-agents.md
      session-06-knowledge-rules.md
      session-07-handoff-checkpoints.md
      session-08-audit.md
      session-09-debugging.md
    phase-03-create/
      session-10-scope.md
      session-11-assembly.md
      project-presentation-session.md
    rubrics/
    answer-keys/
    facilitation-notes/
  student/
    student-handbook.md
    quickstart.md
    session-notes/
    worksheets/
    exercises/
    project-briefs/
    glossary.md
assets/
  source/
    html-outline/
    pdf-slides/
  exports/
    session-pdfs/
    handouts/
  templates/
    prompts/
    checklists/
```

Why this is best:
- clear audience split
- maps directly to the 3 phases, 11 learning sessions, and project presentation session
- scales when later cohorts add more labs, assignments, or versions
- low confusion for instructors and students

Trade-offs:
- slightly more folders up front
- needs one index file so people do not get lost

Adoption risk:
- low. This is a standard learning-content split, easy to teach and maintain.

Architectural fit:
- strong fit for a Claudekit-style reusable kit because it separates reusable process docs from learner assets
- also fits the current source set, which already behaves like an authored course package rather than a live app repo

### Rank 2 - simpler fallback
If the team wants minimal structure, use only:
- `docs/instructor/`
- `docs/student/`
- `assets/source/`

This is faster to adopt, but it will age badly once assessments, answer keys, or multiple cohorts appear.

## Main gap
The revised course model covers 11 learning sessions plus session 12 project presentation. The PDF set currently shows 11 lesson files, so session 12 does not need a lesson PDF unless the instructor wants a presentation deck.

## Limitations
- I did not OCR or text-extract inside each PDF page, so slide-by-slide content was not validated.
- PDF metadata appears to be system metadata from macOS, not rich embedded authoring metadata.
- The session-to-PDF mapping is inferred from filenames and the outline numbering, not confirmed from internal slide text.

## Unresolved questions
- Should session 12 project presentation get its own slide deck, or remain a live presentation session only?
- Should the canonical kit live under `docs/` only, or should learner handouts also be mirrored into `assets/` for export distribution?

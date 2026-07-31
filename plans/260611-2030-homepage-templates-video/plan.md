# Implementation Plan: Homepage, Templates, Video and Visual Diagrams

## Goal
Improve student UI/UX and educational value of the Course Companion app by:
- Redesigning the homepage to feature a premium, visual learning roadmap (12 sessions).
- Upgrading the templates page into an interactive starter kit library with real-world examples and copy tools.
- Replacing the video popup with a smooth inline video player hot-swap.
- Injecting interactive, responsive SVG diagrams for PDCA, OIPO, and MICRO into their respective session pages.
- Adding a lightweight passcode gate for the instructor dashboard (`/instructor/`).

## Phases

### Phase 1: Video Player Inline Hot-Swap
- Modify `VideoEmbed.astro` to remove the `#video-player-modal`.
- Render the video cards with `data-video-id` and a clean inline container.
- Add an inline script in `VideoEmbed.astro` that swaps the thumbnail with a responsive YouTube `iframe` when clicked.

### Phase 2: Interactive Templates & Starter Kits
- Redesign `templates.astro` to display templates as premium card decks.
- Introduce a tabbed view for each template card:
  - **Tab 1: Cấu trúc (Structure)**: Field lists and guidelines.
  - **Tab 2: Ví dụ mẫu (Real Example)**: Fully written, realistic markdown example showing how to use the template.
  - **Tab 3: Markdown nguồn (Source Markdown)**: Fenced markdown content with a copy button.
- Implement clipboard copy utility with positive visual feedback.

### Phase 3: Interactive SVG/CSS Diagrams
- Build reusable SVG/CSS diagram components for:
  - **PDCA Cycle** (Session 2): Circular loop showing Plan, Do, Check, Act with hover highlights.
  - **OIPO Workflow** (Session 4): Linear workflow pipeline showing Objective, Input, Process, and Output with checkpoints.
  - **MICRO Agent Spec** (Session 5): Block diagram illustrating Mission, Inputs, Constraints, Role, and Output.
- Embed these diagrams into the theory card sections of the respective session pages in `src/pages/sessions/[slug].astro`.

### Phase 4: Redesigned Roadmap Homepage & Instructor Gate
- Redesign `index.astro` layout with:
  - A premium visual roadmap timeline displaying all 12 sessions color-coded by phase (Operate, Modify, Create, Presentation).
  - High credibility indicators (learning stats, rubric metrics).
- Implement a passcode dialog protecting all `/instructor/` paths:
  - Prompt for a simple passcode (e.g. `antigravity2026`) when visiting `/instructor/` or loading layout files on these pages.
  - Save approval status in `localStorage` to avoid re-prompting.

### Phase 5: Verification & Production Build
- Run `pnpm build` to verify the Astro static site compiles cleanly.
- Verify responsive view on mobile screen width (<960px).
- Confirm video playback and clipboard copy functionality operate correctly.

## Success Criteria
- Clean, premium visual aesthetic matching modern course platforms.
- Clear learning path shown on the homepage with distinct phase groupings.
- High value example contents added to templates.
- Zero modals/popups used for videos; play seamlessly inline.
- `pnpm build` passes with zero errors or warnings.

## Open Questions
- None.

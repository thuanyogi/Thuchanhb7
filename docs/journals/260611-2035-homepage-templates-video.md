# Journal: Redesigning Homepage, Interactive Templates, Video Player, and Concept Diagrams

**Date:** June 11, 2026  
**Author:** AI Pair Programmer  

## 1. Problem & Context
The Course Companion application felt text-heavy, lacking the premium look of a modern education platform. Key issues:
- Absence of visual representations for foundational course concepts (PDCA, OIPO, MICRO).
- Homepage lacked credibility and a clear overview of the 12-session learning path.
- Templates page was a low-value list of blank textareas.
- Video playback launched modal popups instead of playing inline.

## 2. Key Changes Implemented

### 2.1. Inline Video Player Swapping
- **File:** `src/components/VideoEmbed.astro`
- **Change:** Removed the video modal popup HTML/CSS completely.
- **Result:** Implemented client-side event listeners that dynamically hot-swap video thumbnails with YouTube iframes (`autoplay=1`) when clicked. This ensures rapid initial page loads (lazy loaded iframes) while keeping the player inline.

### 2.2. Interactive Templates Page
- **File:** `src/pages/templates.astro`
- **Change:** Rewrote the page to render templates as cards with an interactive tab switcher:
  1. **Cấu trúc & Hướng dẫn**: Detailed breakdown of fields.
  2. **Ví dụ thực tế**: Fully filled-out case study examples (e.g. CV Screening for PDCA, Invoice OCR for Skill Draft).
  3. **Markdown nguồn**: Fenced code blocks with a "Copy" button.
- **Result:** High educational value; students can see high-quality example outputs and copy starter layouts immediately.

### 2.3. Interactive SVG Concept Diagrams
- **Files:** 
  - `src/components/diagrams/PDCADiagram.astro` (Session 2)
  - `src/components/diagrams/OIPODiagram.astro` (Session 4)
  - `src/components/diagrams/MICRODiagram.astro` (Session 5)
- **Change:** Built modular, responsive SVG/CSS diagrams with hover-highlight states explaining AI workspace components. Conditionally rendered them in `src/pages/sessions/[slug].astro`.
- **Result:** Decreased text density and increased readability of the curriculum's core technical frameworks.

### 2.4. Homepage Winding Road Map Redesign
- **Files:** `src/pages/index.astro`, `src/components/LearningRoadmap.astro`
- **Change:** Built a visual winding serpentine roadmap timeline (3 rows of 4 sessions, flowing left-to-right, then right-to-left, then left-to-right) connected by decorative glowing road paths. Implemented alternative vertical layout on mobile devices. Added credibility stats and a passcode gate in `BaseLayout.astro` to secure `/instructor/*` subpages.
- **Result:** Excellent, game-like onboarding experience for students, higher perceived value, and secure instructor guide routes.

## 3. Impact & Verification
- `astro check` and `astro build` pass with **0 errors, 0 warnings, 0 hints**.
- All pages compiled successfully. The companion looks visually stunning and highly credible.
- Clean responsive layout scales down seamlessly to mobile viewports (<960px).

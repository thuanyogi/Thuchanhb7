# Course Companion Refactor

## Goal
Chuyen webapp tu dashboard giao an sang course companion dung de day va hoc:
- Student mission la mac dinh.
- Instructor guide tach rieng.
- Tai nguyen, template, rubric, artifact tracker dung duoc trong lop.
- Khong lo duong dan noi bo khi show production preview.

## Phases
1. Data model: them student mission va instructor guide tu course data hien co.
2. Routes: cap nhat home/sessions, them instructor/templates/review.
3. UX: bo noi dung raw, uu tien step-by-step mission va artifact.
4. Verification: build, preview, scan internal paths, probe route chinh.

## Success Criteria
- Moi session co Student Mode va Instructor Mode.
- Home cho thay workflow hoc tap, khong chi dashboard.
- Co templates page va review/artifact tracker page.
- `pnpm build` pass.
- Production preview khong co `data-astro-source-file`, `/Users/`, `docs/lesson`, `.claude/`, `assets/source-materials`.

## Open Questions
- Chua co auth thuc su cho Instructor Mode; hien tai la local/private route.

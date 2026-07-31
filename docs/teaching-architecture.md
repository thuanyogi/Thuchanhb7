# Teaching Architecture

## Workspace Layer
```text
AA/
  .claude/                 # Automation cho giảng viên
  docs/                    # Tài liệu học và dạy
  assets/source-materials/ # File gốc và bản trích xuất
  assets/templates/        # Template workspace học viên
  src/                     # Astro Course Companion biên tập từ docs/
  plans/                   # Kế hoạch triển khai và báo cáo
```

## Data Flow
1. File nguồn nằm trong `assets/source-materials/original/`.
2. `docs/source-materials-index.md` ghi manifest và mapping buổi học.
3. `docs/course-curriculum-map.md` định nghĩa lộ trình 11 buổi học và buổi 12 thuyết trình dự án.
4. `docs/lesson-prep/` chứa giáo án theo từng buổi.
5. `src/` đọc Markdown trong `docs/`, kết hợp curated mission plan và ảnh minh họa để tạo Course Companion cho giảng viên/học viên.
6. `.claude/commands/` dùng docs để tạo lesson pack, student workspace, review demo.
7. `assets/templates/student-antigravity-workspace/` là mẫu học viên copy để làm bài.

## Boundaries
- `.claude/`: prompt, agent, command, skill, workflow cho giảng viên.
- `docs/`: tài liệu người đọc dùng trực tiếp.
- `assets/`: nguồn, template, handout, export.
- `src/`: giao diện Astro local/private, không phải CMS. Nội dung show lớp phải dùng curated mission plan, không render nguyên văn đường dẫn hoặc giáo án thô.

## Webapp Routes
- `/`: launchpad theo vai trò.
- `/sessions/`: Student Missions.
- `/sessions/[slug]/`: mission từng buổi cho học viên.
- `/instructor/`: danh sách Instructor Guides.
- `/instructor/sessions/[slug]/`: guide đứng lớp từng buổi.
- `/templates/`: mẫu PDCA, skill, workflow, capstone, presentation.
- `/review/`: artifact tracker và rubric.
- `/resources/`: resource library không lộ đường dẫn nội bộ.
- `plans/`: kế hoạch làm việc, không phải tài liệu học chính.

## Maintenance Rules
- Khi đổi curriculum, cập nhật `course-curriculum-map.md` trước.
- Khi đổi file nguồn, cập nhật `source-materials-index.md`.
- Khi đổi mục tiêu, tip, checklist show trên web, cập nhật `src/lib/session-guidance.ts`.
- Khi đổi format hướng dẫn đứng lớp, cập nhật `src/lib/classroom-plan.ts`.
- Khi đổi tiêu chí chấm, cập nhật `docs/assessment/assessment-rubric.md` và `docs/templates/project-presentation-checklist.md`.
- Khi đổi automation, cập nhật `.claude/skills/antigravity-course/SKILL.md`.

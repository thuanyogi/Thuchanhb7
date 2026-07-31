# Antigravity Teaching Workspace

Workspace này dùng để chuẩn bị và giảng dạy khóa `Agentic AI với Google Antigravity`.

## Bắt đầu
- Entry point: `docs/index.md`
- Lộ trình 11 buổi học + buổi 12 thuyết trình dự án: `docs/course-curriculum-map.md`
- Giáo án từng buổi: `docs/lesson-prep/`
- Hướng dẫn giảng viên: `docs/instructor/facilitator-guide.md`
- Hướng dẫn học viên: `docs/student/quickstart.md`
- Template workspace học viên: `assets/templates/student-antigravity-workspace/`

## Course Companion
Webapp local/private để giảng viên và học viên dùng trong lớp. App dùng dữ liệu từ `docs/` nhưng hiển thị lại thành bản classroom-ready:
- Student Missions: mục tiêu, chuẩn bị, lab từng bước, prompt, checkpoint, stuck help và artifact.
- Instructor Guides: timing 3 giờ, demo script, lỗi cần quan sát, rubric, backup và after-class notes.
- Templates, Resource Library và Review Board cho bài nộp cuối khóa.

```bash
pnpm install
pnpm build
pnpm preview
```

Mở `http://127.0.0.1:4321/` để xem companion app.

Route chính:
- `/sessions/`: Student Missions (dashboard + tiếp tục học + tìm kiếm buổi)
- `/glossary/`: thuật ngữ cốt lõi (PDCA, OIPO, MICRO, CLEAR, SCOPE…)
- `/instructor/`: Instructor Guides
- `/templates/`: mẫu bài làm
- `/review/`: artifact tracker và rubric
- `/resources/`: trung tâm điều hướng tài nguyên

Tìm kiếm nhanh: nhấn **Cmd+K** (Mac) / **Ctrl+K** (Windows) ở bất kỳ trang nào, hoặc nút kính lúp trên header.

Dùng `pnpm preview` khi show cho học viên để tránh metadata debug của dev server.

## Cấu trúc
```text
.claude/   # Agents, commands, skills, workflows cho giảng viên
docs/      # Tài liệu dạy, học, rubric, checklist
assets/    # Source decks, derived assets, student templates
plans/     # Plan và reports triển khai workspace
src/       # Astro Course Companion
```

## Source Materials
File PDF/HTML gốc đã được chuyển vào:

```text
assets/source-materials/original/
```

Không chỉnh trực tiếp file trong thư mục này. Nếu cần OCR, trích xuất, hoặc tạo handout, lưu bản mới vào:

```text
assets/source-materials/derived/
```

## Ghi chú
- Buổi 12 là phiên thuyết trình dự án, không phải buổi học nội dung mới, và hiện chưa có PDF nguồn riêng.
- Trước khi dạy cohort mới, kiểm tra lại setup Google Antigravity theo tài liệu chính thức.

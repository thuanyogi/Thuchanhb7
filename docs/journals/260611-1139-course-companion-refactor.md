---
date: 2026-06-11
type: journal
topic: course-companion-refactor
---

# Course Companion Refactor Journal

## Context
Webapp ban đầu giống dashboard giáo án: gom nội dung lên web nhưng chưa hỗ trợ hành vi học tập thật. Phản hồi chính: không thể show cho học viên nếu còn lộ đường dẫn nội bộ, thiếu hình minh họa, và từng buổi chưa dẫn học viên tới artifact.

## What Happened
- Chuyển hướng sản phẩm sang Course Companion: mỗi buổi là một student mission có artifact.
- Tách rõ Student Mode và Instructor Mode.
- Thêm routes: `/sessions/`, `/instructor/`, `/templates/`, `/review/`, `/resources/`.
- Tạo curated guidance cho 12 buổi: mục tiêu, chuẩn bị, checklist, tip, lỗi hay gặp.
- Tạo classroom plan sinh lab steps, mission prompt, instructor demo script, review rubric và backup.
- Thêm 12 hero images cho các buổi học trong `public/course-images/`.

## Reflection
Quyết định quan trọng là không render nguyên văn lesson-prep Markdown lên web. Giáo án gốc vẫn là nguồn tham khảo, nhưng UI show cho lớp phải dùng curated mission plan để tránh lẫn nội dung cũ hoặc đường dẫn repo.

## Decisions
- Astro static app là đủ cho MVP local/private.
- Student Mission là default view; Instructor Guide nằm ở route riêng.
- Không thêm auth/database trong vòng này; review board hiện là static artifact tracker.
- Dùng `pnpm preview` để show lớp, không dùng dev server vì dev HTML có metadata debug.

## Verification
- `pnpm build` pass với 30 static pages.
- Preview chạy ở `http://127.0.0.1:4321/`.
- Scan `dist` không còn `data-astro-source-file`, `/Users/`, `docs/lesson`, `.claude/`, `assets/source-materials`.
- Các route chính trả `200`.

## Next
- Nếu cần production-grade, thêm auth cho Instructor Mode và submission storage.
- Rà lại từng lesson-prep gốc sau để đồng bộ nội dung dài với mission plan.

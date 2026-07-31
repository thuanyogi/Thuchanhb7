# Student Antigravity Final Workspace

Copy thư mục này để bắt đầu project cuối khóa. Sau khi copy, đổi tên folder theo project của bạn, ví dụ:

```text
hr-talentops-workspace/
sales-report-workspace/
customer-feedback-workspace/
```

## Mục tiêu

Workspace này tổng hợp toàn bộ 11 buổi học thành một dự án thực tế:

- Buổi 1: kiến trúc 7 thành tố.
- Buổi 2: PDCA log.
- Buổi 3: skill chuyên môn.
- Buổi 4: workflow OIPO.
- Buổi 5: agent theo MICRO.
- Buổi 6: knowledge base và CLEAR rules.
- Buổi 7: handoff và human checkpoint.
- Buổi 8: org/audit.
- Buổi 9: debug backlog và self-healing.
- Buổi 10: SCOPE capstone brief.
- Buổi 11: lắp ráp, kiểm thử tích hợp, demo readiness.

## 7 thành tố cuối khóa

| Thành tố | Nơi thể hiện trong workspace |
| --- | --- |
| Input | `sample-data/` |
| AI Agent | `AGENTS.md`, `docs/workspace-map.md` |
| Tools | `scripts/run-workspace.py` và công cụ nhóm chọn |
| Knowledge | `knowledge-base/` |
| Skill / Memory | `.agents/skills/`, `docs/pdca-log.md` |
| Human-in-the-Loop | checkpoint trong `docs/project-brief.md`, `docs/workspace-map.md` |
| Output / Handoff | `outputs/`, bảng handoff trong `docs/workspace-map.md` |

## Các tầng thực thi

| Tầng | Ý nghĩa | Bằng chứng trong workspace |
| --- | --- | --- |
| Tầng 1 - Thực thi | Code, bot, tool hoặc script xử lý dữ liệu thô và ghi log | `scripts/run-workspace.py`, `sample-data/`, `outputs/` |
| Tầng 2 - Quản lý | AI kiểm tra AI: audit log, phát hiện lỗi, cảnh báo, đề xuất sửa | `docs/validation-checklist.md`, `docs/pdca-log.md`, rules |
| Tầng 3 - Điều phối | Con người đọc báo cáo, phê duyệt, đổi chiến lược hoặc dừng hệ thống | human checkpoint, project brief, presentation decision |

## Cấu trúc

```text
student-antigravity-workspace/
  AGENTS.md
  .agents/
    rules/
      workspace-rules.md
    skills/
      workspace-designer/
        SKILL.md
      final-project-orchestrator/
        SKILL.md
  docs/
    project-brief.md
    workspace-map.md
    lesson-to-workspace-map.md
    pdca-log.md
    project-presentation-checklist.md
    validation-checklist.md
  knowledge-base/
    README.md
    scoring-rules.json
  sample-data/
    README.md
  scripts/
    run-workspace.py
  outputs/
    README.md
```

## Cách dùng trong Antigravity

1. Mở Antigravity.
2. Chọn folder workspace này làm project root.
3. Đọc `AGENTS.md`, `docs/project-brief.md`, `docs/workspace-map.md`.
4. Cập nhật `sample-data/` bằng dữ liệu demo đã ẩn thông tin nhạy cảm.
5. Chạy thử theo `scripts/run-workspace.py` hoặc lệnh bạn tự tạo.
6. Sau mỗi lần chạy, cập nhật `docs/pdca-log.md`.
7. Lưu output demo trong `outputs/`.

Hành vi UI Antigravity có thể thay đổi theo phiên bản — đối chiếu https://antigravity.google/docs và hướng dẫn live của giảng viên.

## Rule

Không lưu API key, token, mật khẩu, dữ liệu học viên thật, dữ liệu khách hàng thật, hoặc file nội bộ nhạy cảm trong workspace.

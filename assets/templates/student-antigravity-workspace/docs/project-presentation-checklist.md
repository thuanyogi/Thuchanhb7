# Checklist Thuyết Trình Dự Án

## Trước Khi Thuyết Trình
- [ ] Project brief đã hoàn chỉnh.
- [ ] Workspace map đã hoàn chỉnh.
- [ ] Slide thuyết trình có một trang map đủ 7 thành tố với bằng chứng trong workspace.
- [ ] `AGENTS.md` giải thích cách dùng workspace.
- [ ] `.agents/skills/` có ít nhất một skill cho project.
- [ ] `knowledge-base/` có rules hoặc dữ liệu tham chiếu đã duyệt.
- [ ] `sample-data/` có dữ liệu demo an toàn.
- [ ] Workflow chạy được end-to-end.
- [ ] Output mẫu đã lưu trong `outputs/`.
- [ ] Hoàn thành 3 vòng PDCA.
- [ ] Đã xóa hoặc ẩn dữ liệu nhạy cảm.
- [ ] Có screenshot hoặc output fallback nếu live demo lỗi.

## Kịch Bản Trình Bày
1. Bài toán và mục tiêu.
2. 7 thành tố: Input, AI Agent, Tools, Knowledge, Skill/Memory, HITL, Output/Handoff.
3. Thiết kế workspace và các tầng thực thi.
4. Agents, skills, knowledge, rules.
5. Live run hoặc mô tả run command.
6. Review output.
7. 3 vòng cải tiến PDCA.
8. Cải tiến tiếp theo.

## Slide 7 Thành Tố Bắt Buộc

| Thành tố | Bằng chứng cần show |
| --- | --- |
| Input | `sample-data/` hoặc nguồn input |
| AI Agent | `AGENTS.md`, `docs/workspace-map.md` |
| Tools | `scripts/run-workspace.py`, dashboard, sheet, hoặc công cụ nhóm chọn |
| Knowledge | `knowledge-base/` |
| Skill / Memory | `.agents/skills/`, `docs/pdca-log.md` |
| Human-in-the-Loop | checkpoint rule, bước approve, hoặc rejection rule |
| Output / Handoff | `outputs/`, output schema, gói handoff |

## Backup Demo
- [ ] Nếu live run lỗi, show artifact mới nhất trong `outputs/`.
- [ ] Nếu sample data lỗi, giải thích validation rule và PDCA fix.
- [ ] Nếu UI Antigravity thay đổi, giải thích cấu trúc workspace thay vì phụ thuộc click UI.

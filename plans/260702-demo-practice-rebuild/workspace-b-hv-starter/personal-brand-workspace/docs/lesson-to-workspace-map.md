# 📖 Mapping Buổi Học → Workspace Files

## Tổng Quan

Bảng dưới đây cho biết **mỗi buổi học** liên quan đến những files nào trong workspace.
Dùng bảng này để biết cần chuẩn bị và cập nhật gì trước/sau mỗi buổi.

## Phase 1 — Operate (Buổi 1–4)

| Buổi | Chủ đề | Files cần đọc | Files cần tạo/cập nhật |
|------|--------|---------------|----------------------|
| 1 | Làm quen workspace | `README.md`, `AGENTS.md` | `knowledge-base/brand-profile.md` (điền thông tin) |
| 2 | Vòng PDCA đầu tiên | `sample-data/*.csv` | `docs/pdca-log.md` (vòng #1) |
| 3 | Tạo Skills đầu tiên | `knowledge-base/` | `.agents/skills/` (tạo skill mới) |
| 4 | Workflows cơ bản | `.agents/skills/` | `.agents/workflows/`, `scripts/` |

## Phase 2 — Modify (Buổi 5–9)

| Buổi | Chủ đề | Files cần đọc | Files cần tạo/cập nhật |
|------|--------|---------------|----------------------|
| 5 | Thêm Agent mới | `AGENTS.md` | `.agents/` (cấu hình agent), `knowledge-base/` |
| 6 | Rules & Knowledge | `.agents/skills/` | `.agents/rules/` (tạo rules), `knowledge-base/` (bổ sung) |
| 7 | Handoff & Audit | Toàn bộ `.agents/` | `docs/workspace-map.md` (đánh giá 7 thành tố) |
| 8 | Debug & Tối ưu | `docs/pdca-log.md` | `outputs/analytics-reports/` (tạo báo cáo) |
| 9 | Tích hợp nâng cao | Toàn bộ workspace | Cập nhật tất cả files cần thiết |

## Phase 3 — Create (Buổi 10–11)

| Buổi | Chủ đề | Files cần đọc | Files cần tạo/cập nhật |
|------|--------|---------------|----------------------|
| 10 | Xây workflow thực tế | `.agents/workflows/` | Workflow mới, `outputs/` |
| 11 | Hoàn thiện workspace | `docs/workspace-map.md` | Hoàn tất tất cả 7 thành tố |

## Buổi 12 — Trình Bày Cuối Khóa

| Mục | Chi tiết |
|-----|----------|
| **Demo workspace** | Mở workspace, giới thiệu cấu trúc |
| **Demo AI Agent** | Chạy trực tiếp 1 tác vụ AI |
| **PDCA evidence** | Trình bày `docs/pdca-log.md` |
| **Workspace map** | Trình bày `docs/workspace-map.md` — 7 thành tố |
| **Kết quả** | Show `outputs/` — content drafts, reports |

## Checklist Trước Mỗi Buổi Học

- [ ] Đọc lại `docs/pdca-log.md` — nhớ bài học buổi trước
- [ ] Kiểm tra files liên quan (xem bảng trên)
- [ ] Chuẩn bị câu hỏi nếu có

## Checklist Sau Mỗi Buổi Học

- [ ] Ghi vòng PDCA mới vào `docs/pdca-log.md`
- [ ] Cập nhật `docs/workspace-map.md` nếu hoàn thành thành tố mới
- [ ] Commit changes (nếu dùng Git)

---
> Tham khảo thêm: `docs/workspace-map.md` để theo dõi tiến độ 7 thành tố.

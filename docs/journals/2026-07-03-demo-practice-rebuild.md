# Journal: Rebuild Demo & Thực Hành Khoá Học

**Ngày:** 2026-07-03
**Tác giả:** Antigravity AI
**Phạm vi:** `plans/260702-demo-practice-rebuild/`

---

## Tóm Tắt

Xây dựng lại toàn bộ phần Demo và Thực hành cho khoá "Agentic AI with Google Antigravity" (11 buổi). Output là 77 files bao gồm 2 workspaces mẫu và 11 demo scripts, tất cả tiếng Việt.

## Vấn Đề Cần Giải Quyết

1. **Demo rời rạc** — Mỗi buổi demo riêng lẻ, không có workspace xuyên suốt
2. **Cấu trúc sai** — Skills/rules không nằm trong `.agents/`, AGENTS.md nằm sai chỗ
3. **JSON thay vì MD** — Dùng JSON cho brand profile, target audience (phức tạp không cần thiết)
4. **Thiếu workflows** — Buổi 4 dạy OIPO nhưng workspace không có `.agents/workflows/`
5. **Không rõ workspace nào cho ai** — GV demo cùng workspace HV thực hành

## Quyết Định Thiết Kế

| Quyết định | Lý do |
|-----------|-------|
| **2 workspaces** (GV hoàn chỉnh + HV starter) | GV demo "tương lai", HV build từ đầu |
| **HV clone buổi 1, build lên 11 buổi** | Liên tục, không rời rạc |
| **Thêm `.agents/workflows/`** | Buổi 4 OIPO cần chỗ lưu workflow |
| **Tất cả knowledge dùng .md** | Đơn giản, ai cũng sửa được |
| **Nhân vật mẫu Nguyễn Minh Anh** | Digital Marketing Manager, 5 năm — dễ liên hệ |
| **Chủ đề: Personal Brand Builder** | Liên quan digital marketing, cần kỹ năng đa dạng |

## Kết Quả

| Thành phần | Files | Chi tiết |
|-----------|-------|---------|
| Demo scripts | 11 | 9,061 dòng (647-1,064/file) |
| Workspace A (GV) | 35 | 8 skills, 4 rules, 3 workflows, đầy đủ data |
| Workspace B (HV) | 17 | Starter kit, 2 CSV có sẵn, templates trống |
| Sample data | 7 | CSVs + brand profile mẫu |
| Artifact templates | 6 | MICRO, OIPO, CLEAR, SCOPE, audit, skill |
| **Tổng** | **77** | |

## Cấu Trúc Workspace Đúng Chuẩn Antigravity

```
workspace/
├── AGENTS.md                    ← ROOT (không trong .agents/)
├── .agents/
│   ├── skills/<name>/SKILL.md   ← Mỗi skill = folder + SKILL.md
│   ├── rules/<name>.md          ← Rules = flat .md
│   └── workflows/<name>.md      ← Workflows = flat .md (OIPO)
├── knowledge-base/              ← .md files
├── sample-data/                 ← .csv files
├── scripts/                     ← .py files
├── outputs/                     ← Generated results
└── docs/                        ← Management docs
```

## Trạng Thái

> ⏸️ **PAUSED** — Anh/chị sẽ review và quyết định trong tuần tới.

Toàn bộ output nằm trong `plans/260702-demo-practice-rebuild/` — **KHÔNG chỉnh sửa nội dung gốc** của khoá học.

## Files Chính

- Plan: `plans/260702-demo-practice-rebuild/plan.md`
- Demo scripts: `plans/260702-demo-practice-rebuild/demo-scripts/session-01..11.md`
- Workspace A (GV): `plans/260702-demo-practice-rebuild/workspace-a-gv-demo/`
- Workspace B (HV): `plans/260702-demo-practice-rebuild/workspace-b-hv-starter/`
- Sample data: `plans/260702-demo-practice-rebuild/sample-data/`

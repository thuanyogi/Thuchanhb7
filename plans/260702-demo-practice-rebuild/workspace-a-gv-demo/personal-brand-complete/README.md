# 🎯 Demo Workspace — Thương hiệu cá nhân Nguyễn Minh Anh

## Giới thiệu

Đây là workspace demo hoàn chỉnh cho dự án "Xây dựng thương hiệu cá nhân trên mạng xã hội" sử dụng Google Antigravity. Workspace minh họa toàn bộ 7 thành tố của một hệ thống AI Agent hoàn chỉnh.

**Nhân vật:** Nguyễn Minh Anh — Digital Marketing Manager, 5 năm kinh nghiệm.
**Mục tiêu:** Tự động hóa pipeline tạo content, lên lịch, phân tích engagement.

## Cấu trúc thư mục

```
personal-brand-complete/
├── AGENTS.md                              ← Config workspace (root)
├── README.md                              ← File này
├── .agents/
│   ├── skills/                            ← 8 skills (MICRO/OIPO/Design Mentor)
│   │   ├── content-writer/SKILL.md
│   │   ├── social-media-scheduler/SKILL.md
│   │   ├── engagement-analyst/SKILL.md
│   │   ├── brand-dashboard/SKILL.md
│   │   ├── content-approver/SKILL.md
│   │   ├── brand-auditor/SKILL.md
│   │   ├── self-healer/SKILL.md
│   │   └── workspace-orchestrator/SKILL.md
│   ├── rules/                             ← 4 rules (CLEAR format)
│   │   ├── brand-voice.md
│   │   ├── content-quality.md
│   │   ├── visual-standards.md
│   │   └── approval-policy.md
│   └── workflows/                         ← 3 workflows (OIPO format)
│       ├── content-creation-flow.md
│       ├── weekly-scheduler-flow.md
│       └── approval-pipeline-flow.md
├── knowledge-base/                        ← 4 files tri thức
│   ├── brand-profile.md
│   ├── target-audience.md
│   ├── content-pillars.md
│   └── brand-guidelines.md
├── sample-data/                           ← 4 file CSV dữ liệu mẫu
│   ├── social-media-posts.csv
│   ├── content-calendar.csv
│   ├── engagement-metrics.csv
│   └── audience-feedback.csv
├── scripts/
│   └── run-workspace.py                   ← Script điều phối
├── outputs/
│   ├── content-drafts/
│   │   └── linkedin-post-01.md            ← Bài viết mẫu đã hoàn thành
│   └── analytics-reports/
│       └── weekly-engagement-report.md    ← Báo cáo mẫu đã hoàn thành
└── docs/                                  ← 7 file tài liệu quản lý
    ├── workspace-map.md
    ├── pdca-log.md
    ├── project-brief.md
    ├── handoff-contracts.md
    ├── audit-report.md
    ├── debug-backlog.md
    └── lesson-to-workspace-map.md
```

## 7 Thành tố minh chứng

| # | Thành tố | Bằng chứng |
|---|----------|------------|
| 1 | Input | `sample-data/` — 4 file CSV với dữ liệu thực tế |
| 2 | AI Agent | `.agents/skills/` — 8 skills chuyên biệt |
| 3 | Tools | `scripts/run-workspace.py` — orchestrator |
| 4 | Knowledge | `knowledge-base/` — 4 file tri thức |
| 5 | Skill/Memory | `.agents/rules/` + `.agents/workflows/` — 4 rules + 3 workflows |
| 6 | Human-in-the-Loop | `approval-pipeline-flow.md` + `approval-policy.md` |
| 7 | Output/Handoff | `outputs/` + `docs/handoff-contracts.md` |

## Cách sử dụng

1. Mở workspace trong Google Antigravity.
2. Đọc `AGENTS.md` để hiểu quy tắc vận hành.
3. Xem `docs/workspace-map.md` để nắm toàn cảnh.
4. Chạy `scripts/run-workspace.py` để xem pipeline hoạt động.
5. Kiểm tra `outputs/` để xem kết quả mẫu.
6. Đọc `docs/pdca-log.md` để thấy 3 vòng cải tiến.

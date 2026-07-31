# 🚀 Personal Brand Workspace — Hướng Dẫn Sử Dụng

## Giới Thiệu

Đây là workspace thực hành **Xây dựng Thương hiệu Cá nhân bằng AI Agent**.
Workspace được thiết kế để đi cùng bạn qua **11 buổi học + 1 buổi trình bày cuối khóa**.

**Tên học viên:** {{ten_hoc_vien}}
**Ngày bắt đầu:** {{ngay_bat_dau}}

## Cấu Trúc Thư Mục

```
personal-brand-workspace/
├── AGENTS.md                  # Quy tắc vận hành (file bạn đang đọc phụ)
├── README.md                  # Hướng dẫn sử dụng (file này)
├── .agents/                   # Cấu hình AI Agent
│   ├── skills/                # Kỹ năng AI (tạo từ buổi 3)
│   ├── rules/                 # Quy tắc AI (tạo từ buổi 6)
│   └── workflows/             # Quy trình tự động (tạo từ buổi 4)
├── knowledge-base/            # Kiến thức nền cho AI
│   ├── README.md
│   └── brand-profile.md       # Hồ sơ thương hiệu cá nhân
├── sample-data/               # Dữ liệu mẫu thực hành
│   ├── README.md
│   ├── social-media-posts.csv # 20 bài đăng mẫu
│   └── monthly-report-data.csv# Báo cáo 6 tháng
├── scripts/                   # Script hỗ trợ
│   └── README.md
├── outputs/                   # Kết quả AI tạo ra
│   ├── README.md
│   ├── content-drafts/        # Nháp bài viết
│   └── analytics-reports/     # Báo cáo phân tích
└── docs/                      # Tài liệu học tập
    ├── workspace-map.md       # Bản đồ 7 thành tố
    ├── pdca-log.md            # Nhật ký PDCA
    └── lesson-to-workspace-map.md # Mapping buổi học → files
```

## Bảng Mapping 11 Buổi Học → Files

| Buổi | Chủ đề chính | Files liên quan |
|------|-------------|-----------------|
| 1 | Làm quen workspace | `README.md`, `AGENTS.md` |
| 2 | Vòng PDCA đầu tiên | `docs/pdca-log.md`, `sample-data/` |
| 3 | Tạo Skills | `.agents/skills/`, `knowledge-base/` |
| 4 | Workflows cơ bản | `.agents/workflows/`, `scripts/` |
| 5 | Thêm Agent mới | `.agents/`, `knowledge-base/brand-profile.md` |
| 6 | Rules & Knowledge | `.agents/rules/`, `knowledge-base/` |
| 7 | Handoff & Audit | `docs/workspace-map.md` |
| 8 | Debug & Tối ưu | `outputs/analytics-reports/` |
| 9 | Tích hợp nâng cao | Toàn bộ workspace |
| 10 | Xây workflow thực tế | `.agents/workflows/`, `outputs/` |
| 11 | Hoàn thiện workspace | Tất cả files |
| 12 | Trình bày cuối khóa | Demo trực tiếp workspace |

## Cách Bắt Đầu

1. Đọc file `AGENTS.md` để hiểu quy tắc vận hành
2. Điền thông tin vào `knowledge-base/brand-profile.md`
3. Xem dữ liệu mẫu trong `sample-data/`
4. Bắt đầu ghi chép PDCA từ buổi 2 tại `docs/pdca-log.md`

## Lưu Ý Quan Trọng

- ⚠️ Thay tất cả `{{placeholder}}` bằng thông tin thật của bạn
- 📝 Ghi chép đầy đủ vào `docs/pdca-log.md` — đây là bằng chứng học tập
- 🔒 Không commit mật khẩu, API key, hoặc dữ liệu khách hàng thật

---
> Workspace Version: 1.0 | Cập nhật: {{ngay_cap_nhat}}

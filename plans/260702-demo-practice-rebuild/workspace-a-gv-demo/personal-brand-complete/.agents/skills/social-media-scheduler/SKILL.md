---
name: social-media-scheduler
description: Kỹ năng lên lịch đăng bài mạng xã hội — đọc content calendar, phân bổ thời gian, và xuất lịch đăng bài theo tuần.
---

# Skill: Social Media Scheduler — Lên Lịch Đăng Bài

## Format: OIPO (Objective → Input → Process → Output)

### Objective (Mục tiêu)

Tự động hóa quy trình lên lịch đăng bài cho Nguyễn Minh Anh trên LinkedIn, Facebook và blog cá nhân. Đảm bảo mỗi tuần có đủ 5–7 bài viết được phân bổ đúng nền tảng, đúng khung giờ vàng, và đúng trụ cột nội dung.

### Input (Đầu vào)

| Nguồn dữ liệu | Đường dẫn | Mô tả |
|---|---|---|
| Lịch nội dung | `sample-data/content-calendar.csv` | Lịch 7 ngày với chủ đề, nền tảng, giờ đăng |
| Bài viết nháp | `outputs/content-drafts/` | Các bài đã viết và được duyệt |
| Hồ sơ thương hiệu | `knowledge-base/brand-profile.md` | Thông tin nền tảng MXH của Minh Anh |
| Chỉ số engagement | `sample-data/engagement-metrics.csv` | Dữ liệu hiệu quả các bài trước |

### Process (Quy trình 5 bước)

#### Bước 1: Đọc và xác nhận lịch nội dung
- Load file `content-calendar.csv`.
- Kiểm tra đủ 7 ngày trong tuần.
- Xác nhận mỗi ngày có ít nhất 1 bài.
- Nếu thiếu ngày, báo lỗi và đề xuất bổ sung.

#### Bước 2: Kiểm tra bài viết sẵn sàng
- Duyệt folder `outputs/content-drafts/`.
- Đối chiếu với lịch: bài nào đã viết, bài nào chưa.
- Đánh dấu trạng thái: ĐÃ_VIẾT, CHỜ_VIẾT, CHỜ_DUYỆT.
- Nếu có bài CHỜ_VIẾT, gọi skill `content-writer`.

#### Bước 3: Tối ưu khung giờ đăng
- LinkedIn: 7:30–8:30 sáng (Thứ 2–5), 10:00 sáng (Thứ 6).
- Facebook: 12:00–13:00 (Thứ 2–6), 20:00–21:00 (Thứ 7, CN).
- Blog: 9:00 sáng Thứ 4 hoặc Thứ 7.
- So sánh với `engagement-metrics.csv` để điều chỉnh nếu có dữ liệu.

#### Bước 4: Phân bổ trụ cột nội dung
- Đảm bảo mỗi tuần cover ít nhất 3/5 trụ cột.
- Không đăng 2 bài cùng trụ cột liên tiếp.
- Ưu tiên trụ cột có engagement cao nhất từ tuần trước.

#### Bước 5: Xuất lịch đăng bài và [HUMAN CHECKPOINT]
- Tạo file `outputs/weekly-schedule-YYYY-WXX.md`.
- Bao gồm: ngày, giờ, nền tảng, tiêu đề, trạng thái.
- Đánh dấu `[CHỜ DUYỆT LỊCH]` để Minh Anh xác nhận.
- Sau khi duyệt, cập nhật trạng thái thành ĐÃ_LÊN_LỊCH.

### Output (Đầu ra)

| Output | Đường dẫn | Format |
|---|---|---|
| Lịch đăng tuần | `outputs/weekly-schedule-YYYY-WXX.md` | Markdown table |
| Log trạng thái | `docs/pdca-log.md` (append) | Ghi chú PDCA |
| Cảnh báo thiếu bài | Console output | Text warning |

### Quy tắc an toàn

- Không tự động đăng bài mà không có checkpoint con người.
- Nếu engagement-metrics.csv trống, dùng khung giờ mặc định.
- Ghi log mỗi lần chạy vào `docs/pdca-log.md`.

### Handoff

- **Nhận từ:** content-writer (bài đã duyệt), content-calendar.csv
- **Chuyển đến:** engagement-analyst (sau khi bài đã đăng)
- **Schema:** File markdown chứa bảng lịch tuần với trạng thái mỗi bài.

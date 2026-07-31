# Workflow: Lên Lịch Nội Dung Hàng Tuần

## Format: OIPO (Objective → Input → Process → Output)

### Objective (Mục tiêu)

Lên lịch đăng bài đầy đủ cho 1 tuần (Thứ 2 đến Chủ nhật), đảm bảo đủ nền tảng, đủ trụ cột nội dung, và đúng khung giờ vàng cho từng nền tảng.

### Input (Đầu vào)

| Nguồn | Đường dẫn | Mô tả |
|---|---|---|
| Lịch nội dung | `sample-data/content-calendar.csv` | Template lịch 7 ngày |
| Bài viết nháp | `outputs/content-drafts/` | Bài đã viết và duyệt |
| Metrics tuần trước | `sample-data/engagement-metrics.csv` | Tối ưu khung giờ |
| Trụ cột nội dung | `knowledge-base/content-pillars.md` | Cân bằng 5 trụ cột |

### Process (Quy trình 5 bước)

**Bước 1: Kiểm kê bài viết sẵn sàng**
- Scan `outputs/content-drafts/` để đếm bài đã duyệt.
- Đối chiếu với content-calendar.csv: bài nào match, bài nào thiếu.
- Nếu thiếu >2 bài → cảnh báo và đề xuất viết thêm.

**Bước 2: Phân bổ nền tảng**
- LinkedIn: 3–4 bài/tuần (Thứ 2, 3, 4, 5).
- Facebook: 2–3 bài/tuần (Thứ 4, 6, CN).
- Blog: 1 bài/tuần (Thứ 7).
- Không đăng cùng nội dung trên 2 nền tảng cùng ngày.

**Bước 3: Tối ưu khung giờ**
- Đọc engagement-metrics.csv để xác định giờ đăng tốt nhất.
- Mặc định: LinkedIn 7:30, Facebook 12:00 (ngày thường) / 20:00 (cuối tuần).
- Điều chỉnh nếu dữ liệu cho thấy giờ khác hiệu quả hơn.

**Bước 4: Cân bằng trụ cột nội dung**
- Đảm bảo ≥3/5 trụ cột xuất hiện trong tuần.
- Không đăng 2 bài cùng trụ cột liên tiếp.
- Ưu tiên trụ cột có engagement cao từ tuần trước.

**Bước 5: [HUMAN CHECKPOINT] — Xác nhận lịch tuần**
- Tạo bảng lịch tuần hoàn chỉnh.
- Hiển thị cho Minh Anh review.
- Minh Anh xác nhận hoặc điều chỉnh.
- Sau khi xác nhận → đánh dấu ĐÃ_LÊN_LỊCH.

### Output (Đầu ra)

| Output | Đường dẫn |
|---|---|
| Lịch đăng tuần | `outputs/weekly-schedule-YYYY-WXX.md` |
| Log PDCA | `docs/pdca-log.md` (append) |
| Cảnh báo thiếu bài | Console warning (nếu có) |

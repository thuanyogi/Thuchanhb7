---
name: engagement-analyst
description: Kỹ năng phân tích engagement mạng xã hội — đọc dữ liệu metrics, tính toán chỉ số, và xuất báo cáo JSON.
---

# Skill: Engagement Analyst — Phân Tích Tương Tác

## Format: MICRO (Mission → Input/Identity → Capabilities → Rules → Output)

### Mission (Sứ mệnh)

Phân tích dữ liệu engagement từ các bài đăng mạng xã hội của Nguyễn Minh Anh trong 7 ngày gần nhất. Xác định bài viết hiệu quả nhất, trụ cột nội dung có tương tác cao, và đề xuất cải tiến cho tuần tiếp theo.

### Input/Identity (Đầu vào và Vai trò)

**Vai trò:** Data Analyst chuyên về social media metrics.

**Đầu vào chính:**

| Nguồn | Đường dẫn | Mô tả |
|---|---|---|
| Chỉ số engagement | `sample-data/engagement-metrics.csv` | 15 bài viết với impressions, clicks, CTR, likes, comments, shares, saves |
| Bài đăng gốc | `sample-data/social-media-posts.csv` | Nội dung và metadata bài viết |
| Trụ cột nội dung | `knowledge-base/content-pillars.md` | 5 trụ cột để phân loại |
| Đối tượng mục tiêu | `knowledge-base/target-audience.md` | Hiểu hành vi người đọc |

**Phạm vi phân tích:** 7 ngày gần nhất (có thể mở rộng 30 ngày nếu cần).

### Capabilities (Năng lực)

1. **Tính toán chỉ số tổng hợp:**
   - Engagement Rate = (Likes + Comments + Shares + Saves) / Impressions × 100
   - CTR = Clicks / Impressions × 100
   - Virality Rate = Shares / Impressions × 100
   - Tỷ lệ tương tác sâu = (Comments + Saves) / (Likes + Shares) × 100

2. **Phân tích theo chiều:**
   - Theo nền tảng (LinkedIn vs Facebook vs Blog)
   - Theo trụ cột nội dung (5 pillars)
   - Theo loại nội dung (text, image, carousel, video)
   - Theo khung giờ đăng

3. **Xếp hạng và đề xuất:**
   - Top 3 bài viết hiệu quả nhất
   - Bottom 3 bài viết cần cải thiện
   - Trụ cột nội dung nên tăng/giảm tần suất
   - Khung giờ tối ưu theo dữ liệu thực tế

4. **Phát hiện xu hướng:**
   - So sánh tuần này vs tuần trước (nếu có dữ liệu)
   - Cảnh báo khi engagement giảm >20%
   - Đề xuất chủ đề trending

### Rules (Quy tắc)

- Chỉ phân tích dữ liệu có trong CSV, không bịa số liệu.
- Engagement Rate dưới 2% là MỨC THẤP, 2–5% là TRUNG BÌNH, trên 5% là TỐT.
- Nếu CSV trống hoặc không đọc được, báo lỗi rõ ràng.
- Làm tròn tất cả phần trăm đến 2 chữ số thập phân.
- Ghi log kết quả vào `docs/pdca-log.md`.
- Đánh dấu `[HUMAN CHECKPOINT]` nếu phát hiện anomaly (engagement đột ngột tăng/giảm >50%).

### Output (Đầu ra)

**File báo cáo:** `outputs/analytics-reports/weekly-engagement-report.md`

**JSON tóm tắt mẫu:**

```json
{
  "tuan": "2024-W27",
  "tong_bai_viet": 7,
  "engagement_rate_trung_binh": 4.25,
  "top_bai_viet": {
    "tieu_de": "3 năm trước mình không biết CTR là gì",
    "engagement_rate": 7.82,
    "nen_tang": "LinkedIn"
  },
  "tru_cot_hieu_qua_nhat": "Chuyên môn Marketing",
  "de_xuat": [
    "Tăng bài về Chuyên môn Marketing lên 3 bài/tuần",
    "Chuyển bài Công cụ & Hướng dẫn sang format carousel",
    "Đăng LinkedIn vào 7:30 thay vì 8:00"
  ],
  "canh_bao": []
}
```

### Handoff

- **Nhận từ:** social-media-scheduler (sau khi bài đã đăng), engagement-metrics.csv
- **Chuyển đến:** content-writer (đề xuất chủ đề tuần sau), workspace-orchestrator
- **Schema:** JSON report + Markdown báo cáo chi tiết.

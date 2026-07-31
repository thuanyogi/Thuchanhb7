# Handoff Contracts — Hợp đồng chuyển giao giữa các Skill

## Hợp đồng 1: Content Writer → Content Approver

### Mô tả
Khi skill `content-writer` hoàn thành bài viết nháp, chuyển giao cho `content-approver` để kiểm duyệt.

### Schema chuyển giao

```json
{
  "handoff_id": "HO-001",
  "from_skill": "content-writer",
  "to_skill": "content-approver",
  "payload": {
    "file_path": "outputs/content-drafts/linkedin-YYYY-MM-DD.md",
    "content_type": "linkedin_post",
    "word_count": 350,
    "pillar": "chuyen-mon-marketing",
    "has_cta": true,
    "has_hashtags": true
  },
  "validation_rules": [
    "word_count >= 200",
    "word_count <= 500",
    "has_cta == true",
    "pillar in content_pillars"
  ]
}
```

### Điều kiện chuyển giao
- Bài viết đã lưu tại `outputs/content-drafts/`.
- Đạt tối thiểu 200 từ.
- Có CTA và hashtags.

### Xử lý lỗi
- Nếu thiếu CTA: trả về `content-writer` kèm ghi chú "Thiếu CTA".
- Nếu quá 500 từ: trả về kèm ghi chú "Vượt giới hạn từ".

---

## Hợp đồng 2: Content Approver → Social Media Scheduler

### Mô tả
Khi skill `content-approver` duyệt bài thành công (qua cả 3 stage), chuyển giao cho `social-media-scheduler` để lên lịch đăng.

### Schema chuyển giao

```json
{
  "handoff_id": "HO-002",
  "from_skill": "content-approver",
  "to_skill": "social-media-scheduler",
  "payload": {
    "file_path": "outputs/content-drafts/linkedin-YYYY-MM-DD.md",
    "approval_status": "APPROVED",
    "approved_by": "human",
    "platform": "LinkedIn",
    "scheduled_date": "2024-07-01",
    "scheduled_time": "08:00",
    "priority": "normal"
  },
  "validation_rules": [
    "approval_status == 'APPROVED'",
    "scheduled_date >= today",
    "platform in ['LinkedIn', 'Facebook']"
  ]
}
```

### Điều kiện chuyển giao
- Trạng thái duyệt là "APPROVED".
- Có ngày và giờ đăng hợp lệ.
- Platform phải là LinkedIn hoặc Facebook.

### Xử lý lỗi
- Nếu ngày đăng đã qua: cập nhật sang ngày gần nhất phù hợp.
- Nếu giờ đăng ngoài khung giờ vàng: cảnh báo nhưng vẫn cho phép.

---

## Hợp đồng 3: Engagement Analyst → Content Writer (Feedback Loop)

### Mô tả
Sau khi skill `engagement-analyst` phân tích metrics tuần, gửi feedback cho `content-writer` để cải thiện nội dung tuần tiếp theo.

### Schema chuyển giao

```json
{
  "handoff_id": "HO-003",
  "from_skill": "engagement-analyst",
  "to_skill": "content-writer",
  "payload": {
    "report_path": "outputs/analytics-reports/weekly-engagement-report.md",
    "period": "2024-06-24 to 2024-06-30",
    "top_performing_pillar": "chuyen-mon-marketing",
    "lowest_performing_pillar": "cau-chuyen-nghe",
    "avg_engagement_rate": 3.8,
    "recommendations": [
      "Tăng bài Carousel — engagement cao hơn 40% so với bài viết thường",
      "Giảm bài Story cuối tuần — reach thấp nhất",
      "Thêm số liệu cụ thể vào case study"
    ]
  },
  "validation_rules": [
    "report_path exists",
    "recommendations.length >= 1"
  ]
}
```

### Điều kiện chuyển giao
- Báo cáo tuần đã được tạo và lưu.
- Có ít nhất 1 recommendation.

### Xử lý lỗi
- Nếu thiếu dữ liệu metrics: ghi nhận "DỮ LIỆU KHÔNG ĐỦ" và escalate.
- Nếu engagement rate < 2%: đánh dấu "CẦN XEM XÉT KHẨN" cho human review.

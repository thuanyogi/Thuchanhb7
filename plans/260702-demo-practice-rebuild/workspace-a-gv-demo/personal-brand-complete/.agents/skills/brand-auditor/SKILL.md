---
name: brand-auditor
description: Kỹ năng kiểm toán thương hiệu cá nhân — đánh giá 7 yếu tố sức khỏe thương hiệu và đề xuất cải tiến.
---

# Skill: Brand Auditor — Kiểm Toán Thương Hiệu

## Mục tiêu

Thực hiện kiểm toán toàn diện thương hiệu cá nhân của Nguyễn Minh Anh theo 7 yếu tố, chấm điểm từng yếu tố, và đề xuất hành động cải tiến cụ thể.

## 7 Yếu Tố Kiểm Toán

### 1. Nhận diện thị giác (Visual Identity)
- Logo/avatar có nhất quán trên các nền tảng không?
- Bảng màu có đúng brand guidelines (#2563EB xanh, #F59E0B vàng)?
- Font chữ có dùng Be Vietnam Pro không?
- **Nguồn kiểm tra:** `knowledge-base/brand-guidelines.md`
- **Thang điểm:** 1–10

### 2. Giọng điệu (Voice & Tone)
- Giọng viết có "chuyên nghiệp, gần gũi" nhất quán không?
- Có dùng "mình" thay vì "tôi" không?
- Emoji có trong giới hạn ≤3 không?
- **Nguồn kiểm tra:** `.agents/rules/brand-voice.md`, `outputs/content-drafts/`
- **Thang điểm:** 1–10

### 3. Chất lượng nội dung (Content Quality)
- Bài viết có đạt tiêu chuẩn (≥200 từ, có hook, CTA)?
- Tỷ lệ bài PASS qua content-approver là bao nhiêu?
- Có bài nào bị REJECT nhiều lần không?
- **Nguồn kiểm tra:** `outputs/content-drafts/`, `.agents/rules/content-quality.md`
- **Thang điểm:** 1–10

### 4. Phù hợp đối tượng (Audience Fit)
- Nội dung có hướng đến đúng nhóm 22–30 tuổi marketing không?
- Phản hồi khán giả có tích cực không?
- Chủ đề có match với pain points trong target-audience.md?
- **Nguồn kiểm tra:** `knowledge-base/target-audience.md`, `sample-data/audience-feedback.csv`
- **Thang điểm:** 1–10

### 5. Tương tác (Engagement)
- Engagement rate trung bình có trên 3% không?
- Tỷ lệ comment/share so với like có cân đối?
- Xu hướng engagement tăng hay giảm?
- **Nguồn kiểm tra:** `sample-data/engagement-metrics.csv`
- **Thang điểm:** 1–10

### 6. Tính nhất quán (Consistency)
- Có đăng bài đều đặn theo lịch không?
- Tần suất đăng có ổn định (5–7 bài/tuần)?
- Có gap (>3 ngày không đăng) không?
- **Nguồn kiểm tra:** `sample-data/content-calendar.csv`, `sample-data/social-media-posts.csv`
- **Thang điểm:** 1–10

### 7. Tăng trưởng (Growth)
- Follower có tăng đều không?
- Reach có mở rộng không?
- Có milestone nào đạt được trong tháng?
- **Nguồn kiểm tra:** `sample-data/engagement-metrics.csv`, brand-dashboard output
- **Thang điểm:** 1–10

## Output

- **File:** `docs/audit-report.md`
- **Format:** Bảng điểm 7 yếu tố + nhận xét + đề xuất hành động
- **Đánh giá tổng:** Trung bình 7 điểm, xếp loại A/B/C/D

## Handoff

- **Nhận từ:** workspace-orchestrator (trigger định kỳ)
- **Chuyển đến:** content-writer (đề xuất cải tiến), [HUMAN CHECKPOINT]
- **Tần suất:** 1 lần/tháng hoặc theo yêu cầu.

---
name: brand-dashboard
description: Kỹ năng tạo dashboard tổng quan thương hiệu cá nhân — hiển thị follower growth, engagement rate, top posts, và lịch nội dung.
---

# Skill: Brand Dashboard — Bảng Điều Khiển Thương Hiệu

## Mục tiêu

Tạo báo cáo dashboard tổng quan cho Nguyễn Minh Anh, giúp theo dõi sức khỏe thương hiệu cá nhân trong 1 cái nhìn duy nhất. Dashboard bao gồm 4 module chính.

## Đầu vào

| Nguồn | Đường dẫn |
|---|---|
| Chỉ số engagement | `sample-data/engagement-metrics.csv` |
| Bài đăng MXH | `sample-data/social-media-posts.csv` |
| Lịch nội dung | `sample-data/content-calendar.csv` |
| Phản hồi khán giả | `sample-data/audience-feedback.csv` |

## 4 Module Dashboard

### Module 1: Tăng trưởng Follower

- Tổng follower hiện tại theo nền tảng (LinkedIn, Facebook).
- Tốc độ tăng trưởng tuần/tháng (%).
- Mốc follower tiếp theo (ví dụ: còn 127 follower nữa để đạt 5.000).
- Biểu đồ xu hướng 4 tuần gần nhất (mô tả bằng text/bảng).

### Module 2: Tỷ lệ Engagement

- Engagement rate trung bình 7 ngày.
- So sánh với tuần trước (tăng/giảm bao nhiêu %).
- Phân bổ engagement theo loại (likes, comments, shares, saves).
- Đánh giá: THẤP (<2%), TRUNG BÌNH (2–5%), TỐT (>5%).

### Module 3: Top Bài Viết

- Top 5 bài viết có engagement rate cao nhất.
- Thông tin mỗi bài: tiêu đề, nền tảng, ngày đăng, engagement rate.
- Nhận xét: yếu tố nào giúp bài viết hiệu quả (hook, chủ đề, format).
- Bài viết cần cải thiện (bottom 3).

### Module 4: Lịch Nội Dung Tuần Tới

- Bảng 7 ngày với chủ đề, nền tảng, trạng thái.
- Đếm bài đã viết vs chưa viết.
- Cảnh báo nếu có ngày trống hoặc trụ cột bị bỏ sót.
- Tiến độ chuẩn bị: X/7 bài sẵn sàng.

## Quy trình tạo Dashboard

1. Đọc tất cả 4 file CSV đầu vào.
2. Tính toán chỉ số cho từng module.
3. Tạo file markdown với 4 section tương ứng.
4. Thêm section "Đề xuất hành động" cuối dashboard.
5. Lưu vào `outputs/analytics-reports/brand-dashboard-YYYY-MM-DD.md`.

## Output

- **File:** `outputs/analytics-reports/brand-dashboard-YYYY-MM-DD.md`
- **Format:** Markdown với bảng, emoji indicator (🟢🟡🔴), và đề xuất.

## Handoff

- **Nhận từ:** engagement-analyst, social-media-scheduler
- **Chuyển đến:** workspace-orchestrator, [HUMAN CHECKPOINT]
- **Tần suất:** Chạy 1 lần/tuần vào Chủ nhật tối.

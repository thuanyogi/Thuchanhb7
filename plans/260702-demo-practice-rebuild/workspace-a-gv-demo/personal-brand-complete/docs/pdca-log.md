# PDCA Log — Thương hiệu cá nhân Nguyễn Minh Anh

## Vòng 1 — Content quá dài, engagement thấp

### Plan
- Vấn đề: Các bài viết LinkedIn trung bình 800-1000 từ, tỷ lệ đọc hết bài chỉ 15%.
- Giả thuyết: Rút gọn bài viết xuống 300-500 từ sẽ tăng engagement.
- Chỉ số đo: Engagement rate, tỷ lệ đọc hết bài.

### Do
- Áp dụng quy tắc "1 bài = 1 ý chính" cho 5 bài viết tuần 2024-03-04.
- Sử dụng format: Hook (2 dòng) → Body (5-7 đoạn ngắn) → CTA (1 dòng).
- Thêm line break giữa các đoạn để dễ đọc trên mobile.

### Check
- Engagement rate tăng từ 3.2% lên 3.8% (+18.75%).
- Tỷ lệ đọc hết bài tăng từ 15% lên 35%.
- Số comment tăng 25% do người đọc dễ tiếp thu nội dung hơn.

### Act
- Cập nhật rule `content-quality.md`: giới hạn 300-500 từ cho LinkedIn.
- Thêm bước kiểm tra độ dài vào skill `content-writer`.
- Áp dụng cho tất cả bài viết từ tuần tiếp theo.

---

## Vòng 2 — Thiếu CTA rõ ràng

### Plan
- Vấn đề: 60% bài viết không có CTA hoặc CTA mơ hồ ("Bạn nghĩ sao?").
- Giả thuyết: Thêm CTA cụ thể sẽ tăng click rate và tương tác.
- Chỉ số đo: Click rate, số comment, số save.

### Do
- Tạo bộ 10 mẫu CTA cho từng loại bài (chia sẻ kiến thức, case study, câu chuyện).
- Thêm CTA vào checklist bắt buộc trong skill `content-approver`.
- Áp dụng thử 1 tuần (7 bài viết).

### Check
- Click rate tăng từ 3.5% lên 4.2% (+20%).
- Số save tăng 40% (người đọc lưu bài để thực hành theo CTA).
- Comment chất lượng hơn — nhiều câu hỏi cụ thể thay vì chỉ "hay quá".

### Act
- Bổ sung 10 mẫu CTA vào `knowledge-base/brand-guidelines.md`.
- Cập nhật rule `content-quality.md`: CTA là mục bắt buộc.
- Thêm bước kiểm tra CTA vào workflow `content-creation-flow.md`.

---

## Vòng 3 — Đăng sai giờ vàng

### Plan
- Vấn đề: Reach giảm 30% vào cuối tuần, bài đăng lúc 20:00 ít người xem.
- Giả thuyết: Tối ưu giờ đăng theo dữ liệu engagement sẽ tăng reach.
- Chỉ số đo: Impressions, reach, engagement rate theo khung giờ.

### Do
- Phân tích `engagement-metrics.csv` để tìm khung giờ tốt nhất.
- LinkedIn: 08:00-09:00 (thứ 2-5), Facebook: 12:00-13:00 (thứ 3-6).
- Cập nhật `content-calendar.csv` theo khung giờ mới.
- Chạy thử 2 tuần với lịch đăng mới.

### Check
- Reach trung bình tăng từ 4.500 lên 6.200 (+37.7%).
- Engagement rate tăng từ 3.5% lên 4.1%.
- Bài đăng LinkedIn buổi sáng có reach cao gấp 2.3 lần buổi tối.

### Act
- Cập nhật skill `social-media-scheduler` với khung giờ tối ưu.
- Thêm rule: không đăng LinkedIn sau 18:00 và cuối tuần.
- Lên lịch review khung giờ mỗi tháng 1 lần dựa trên dữ liệu mới.

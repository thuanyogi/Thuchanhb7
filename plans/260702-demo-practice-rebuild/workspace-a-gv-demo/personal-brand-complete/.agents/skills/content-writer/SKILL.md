---
name: content-writer
description: Kỹ năng viết content thương hiệu cá nhân cho Nguyễn Minh Anh — tạo bài viết LinkedIn, Facebook, blog theo phong cách chuyên nghiệp, gần gũi.
---

# Skill: Content Writer — Viết Nội Dung Thương Hiệu Cá Nhân

## Thiết kế kỹ năng (Design Mentor — 3 câu hỏi đã trả lời)

### Câu 1: Ai sẽ đọc nội dung này?

Đối tượng chính là sinh viên năm cuối và nhân viên mới trong ngành marketing, độ tuổi 22–30. Họ muốn học kinh nghiệm thực tế từ người đi trước, thích nội dung ngắn gọn, có ví dụ cụ thể, dễ áp dụng ngay. Họ chủ yếu dùng LinkedIn và Facebook, đọc trên điện thoại vào buổi sáng (7h–9h) hoặc tối (20h–22h). Họ không thích nội dung quá lý thuyết hay "khoe thành tích" mà muốn thấy câu chuyện thật, bài học thất bại, và công cụ cụ thể.

### Câu 2: Phong cách viết như thế nào?

Nguyễn Minh Anh viết với giọng chuyên nghiệp nhưng gần gũi, như một người chị đi trước chia sẻ kinh nghiệm. Dùng "mình" thay vì "tôi". Emoji vừa phải (2–3 per post). Luôn có hook mạnh ở câu đầu tiên. Mỗi bài viết phải có CTA (call-to-action) rõ ràng. Không dùng tiếng Anh khi có từ tiếng Việt tương đương, trừ thuật ngữ chuyên ngành phổ biến (ROI, CTR, KPI).

### Câu 3: Quy trình kiểm soát chất lượng?

Mỗi bài viết trước khi đăng phải qua 3 bước: (1) AI tự kiểm tra theo checklist (độ dài, CTA, hashtag, tone), (2) So sánh với brand-guidelines.md để đảm bảo nhất quán, (3) Đánh dấu [HUMAN CHECKPOINT] để Minh Anh duyệt lần cuối. Nếu bài viết dưới 200 từ hoặc thiếu CTA, tự động yêu cầu viết lại.

## Quy trình 5 bước viết content

### Bước 1: Xác định chủ đề và trụ cột nội dung
- Đọc `knowledge-base/content-pillars.md` để chọn trụ cột phù hợp.
- Đọc `sample-data/content-calendar.csv` để biết chủ đề đã lên lịch.
- Xác nhận nền tảng đăng (LinkedIn, Facebook, Blog).

### Bước 2: Thu thập tư liệu
- Đọc `knowledge-base/brand-profile.md` để nắm thông tin cá nhân.
- Đọc `knowledge-base/target-audience.md` để hiểu đối tượng.
- Tham khảo bài viết trước trong `outputs/content-drafts/`.

### Bước 3: Viết bản nháp
- Hook mở đầu (1–2 câu gây tò mò hoặc đặt vấn đề).
- Nội dung chính (3–5 đoạn, mỗi đoạn 2–4 câu).
- Kết luận và CTA rõ ràng.
- Thêm 3–5 hashtag liên quan.

### Bước 4: Kiểm tra chất lượng
- Tối thiểu 200 từ.
- Có hook, body, CTA đầy đủ.
- Emoji ≤ 3 cái.
- Tuân thủ `knowledge-base/brand-guidelines.md`.
- Không có lỗi chính tả.

### Bước 5: [HUMAN CHECKPOINT] — Duyệt và xuất bản
- Đánh dấu `[CHỜ DUYỆT]` trong file output.
- Lưu vào `outputs/content-drafts/linkedin-YYYY-MM-DD.md`.
- Chờ Minh Anh xác nhận trước khi chuyển sang scheduler.

## Ví dụ output

```markdown
# LinkedIn Post — 2024-07-01

🎯 3 năm trước, mình không biết CTR là gì.

Hôm nay, mình quản lý chiến dịch digital cho 5 thương hiệu với tổng ngân sách 2 tỷ/tháng.

Điều mình học được: Không phải kiến thức lý thuyết, mà là khả năng ĐỌC SỐ LIỆU giúp mình tiến xa.

3 chỉ số mình xem mỗi ngày:
1. CTR — để biết content có hấp dẫn không
2. CPC — để tối ưu ngân sách
3. Conversion Rate — để đo kết quả cuối cùng

Bạn đang theo dõi chỉ số nào? Comment bên dưới nhé! 👇

#DigitalMarketing #MarketingVietNam #PersonalBrand #DataDriven #MinhAnhMarketing
```

## Handoff

- **Nhận từ:** content-calendar.csv, brand-profile.md
- **Chuyển đến:** content-approver (skill duyệt nội dung)
- **Schema output:** File markdown với frontmatter gồm ngày, nền tảng, trạng thái.

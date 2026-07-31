---
name: content-approver
description: Kỹ năng duyệt nội dung 3 giai đoạn — kiểm tra tự động, AI review, và phê duyệt con người trước khi xuất bản.
---

# Skill: Content Approver — Duyệt Nội Dung 3 Giai Đoạn

## Mục tiêu

Đảm bảo mọi bài viết của Nguyễn Minh Anh đạt chất lượng trước khi xuất bản, thông qua pipeline duyệt 3 giai đoạn: Auto-check → AI Review → Human Approval.

## Pipeline Duyệt Nội Dung

### Giai đoạn 1: Auto-check (Kiểm tra tự động)

Kiểm tra kỹ thuật, không cần AI phân tích:

| Tiêu chí | Điều kiện đạt | Hành động nếu trượt |
|---|---|---|
| Độ dài bài viết | ≥ 200 từ | Trả về content-writer để bổ sung |
| Có hook mở đầu | Câu đầu ≤ 20 từ, gây tò mò | Yêu cầu viết lại hook |
| Có CTA | Chứa câu hỏi hoặc kêu gọi hành động | Yêu cầu thêm CTA |
| Hashtag | 3–5 hashtag liên quan | Tự động bổ sung nếu thiếu |
| Emoji | ≤ 3 emoji | Tự động xóa bớt |
| Không có link hỏng | Tất cả URL hợp lệ | Cảnh báo và yêu cầu sửa |
| Tuân thủ visual standards | Đúng format markdown | Tự động format lại |

**Kết quả:** PASS hoặc FAIL + lý do cụ thể.

### Giai đoạn 2: AI Review (Đánh giá bởi AI)

Phân tích chất lượng nội dung sâu hơn:

- **Tone of voice:** So sánh với `knowledge-base/brand-guidelines.md`. Bài viết có đúng giọng "chuyên nghiệp, gần gũi" không?
- **Đối tượng phù hợp:** Nội dung có hướng đến sinh viên/nhân viên mới marketing không?
- **Trụ cột nội dung:** Bài viết thuộc trụ cột nào trong 5 trụ cột? Có đúng lịch không?
- **Tính nguyên bản:** Không trùng lặp >30% với bài viết trước đó.
- **SEO cơ bản:** Có từ khóa chính trong 50 từ đầu không?

**Kết quả:** Điểm 1–10 + nhận xét chi tiết.
- Điểm ≥ 7: PASS → chuyển giai đoạn 3.
- Điểm 4–6: REVISE → trả về content-writer kèm gợi ý sửa.
- Điểm ≤ 3: REJECT → viết lại từ đầu.

### Giai đoạn 3: [HUMAN CHECKPOINT] — Phê Duyệt Con Người

- Hiển thị bài viết hoàn chỉnh cho Nguyễn Minh Anh.
- Kèm theo kết quả auto-check và AI review.
- Minh Anh chọn: ✅ DUYỆT, ✏️ SỬA NHẸ, hoặc ❌ TỪ CHỐI.
- Nếu SỬA NHẸ: ghi nhận sửa đổi và cập nhật bài viết.
- Nếu DUYỆT: chuyển đến social-media-scheduler.

## Quy tắc đặc biệt

- Bài viết chứa số liệu tài chính: BẮT BUỘC qua giai đoạn 3.
- Bài viết đề cập đến công ty/khách hàng cũ: BẮT BUỘC qua giai đoạn 3.
- Bài viết dưới 150 từ: TỰ ĐỘNG REJECT, không cần qua AI review.

## Handoff

- **Nhận từ:** content-writer
- **Chuyển đến:** social-media-scheduler (nếu DUYỆT), content-writer (nếu REVISE/REJECT)
- **Schema:** `{trang_thai: "DUYỆT"|"SỬA"|"TỪ CHỐI", diem: number, nhan_xet: string}`

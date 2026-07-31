# Workflow: Tạo Bài Viết LinkedIn

## Format: OIPO (Objective → Input → Process → Output)

### Objective (Mục tiêu)

Tạo 1 bài viết LinkedIn chuyên nghiệp cho Nguyễn Minh Anh, từ ý tưởng đến bản nháp hoàn chỉnh sẵn sàng duyệt, tuân thủ brand guidelines và content quality gates.

### Input (Đầu vào)

| Nguồn | Đường dẫn | Vai trò |
|---|---|---|
| Hồ sơ thương hiệu | `knowledge-base/brand-profile.md` | Thông tin cá nhân, expertise |
| Trụ cột nội dung | `knowledge-base/content-pillars.md` | Chọn chủ đề phù hợp |
| Lịch nội dung | `sample-data/content-calendar.csv` | Xác nhận chủ đề đã lên lịch |
| Giọng điệu | `.agents/rules/brand-voice.md` | Tuân thủ 7 quy tắc tone |
| Chất lượng | `.agents/rules/content-quality.md` | 5 quality gates |
| Bài trước | `outputs/content-drafts/` | Tránh trùng lặp |

### Process (Quy trình 5 bước)

**Bước 1: Xác định chủ đề (Skill: content-writer)**
- Đọc content-calendar.csv để lấy chủ đề hôm nay.
- Xác nhận trụ cột nội dung tương ứng.
- Kiểm tra bài trước để tránh lặp chủ đề trong 7 ngày.

**Bước 2: Viết bản nháp (Skill: content-writer)**
- Viết hook mở đầu (≤20 từ, gây tò mò).
- Phát triển body 3–5 đoạn với ví dụ/câu chuyện cá nhân.
- Thêm CTA rõ ràng ở cuối.
- Thêm 3–5 hashtag (bắt buộc có #MinhAnhMarketing).

**Bước 3: Kiểm tra tự động (Skill: content-approver — Giai đoạn 1)**
- Verify ≥200 từ.
- Verify có hook + body + CTA.
- Verify emoji ≤3.
- Verify hashtag 3–5 cái.
- Nếu FAIL → quay lại Bước 2.

**Bước 4: AI Review (Skill: content-approver — Giai đoạn 2)**
- Kiểm tra tone phù hợp brand-voice.md.
- Kiểm tra đối tượng phù hợp target-audience.md.
- Chấm điểm 1–10.
- Nếu <7 → quay lại Bước 2 với gợi ý cải thiện.

**Bước 5: [HUMAN CHECKPOINT] — Duyệt cuối cùng**
- Hiển thị bài viết hoàn chỉnh cho Minh Anh.
- Kèm điểm AI review và kết quả auto-check.
- Minh Anh chọn: DUYỆT / SỬA NHẸ / TỪ CHỐI.
- Nếu DUYỆT → lưu file, chuyển sang scheduler.

### Output (Đầu ra)

| Output | Đường dẫn |
|---|---|
| Bài viết LinkedIn | `outputs/content-drafts/linkedin-YYYY-MM-DD.md` |
| Log PDCA | `docs/pdca-log.md` (append) |
| Handoff đến scheduler | Schema: `{file, status, platform, date}` |

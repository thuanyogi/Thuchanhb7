---
name: self-healer
description: Kỹ năng tự phát hiện và sửa lỗi workspace — theo quy trình DAHV (Detect → Analyze → Heal → Verify).
---

# Skill: Self-Healer — Tự Sửa Lỗi Workspace

## Mục tiêu

Tự động phát hiện lỗi trong workspace, phân tích nguyên nhân gốc rễ, thực hiện sửa chữa, và xác minh kết quả. Giảm thiểu downtime và đảm bảo pipeline luôn hoạt động ổn định.

## Quy trình DAHV

### D — Detect (Phát hiện)

Quét workspace để tìm lỗi theo 5 loại:

| Loại lỗi | Cách phát hiện | Ví dụ |
|---|---|---|
| File thiếu | Kiểm tra file tồn tại theo workspace-map.md | CSV đầu vào bị xóa |
| Format sai | Validate CSV headers, MD structure | CSV thiếu cột Engagement_Rate |
| Dữ liệu bất thường | Giá trị ngoài phạm vi hợp lý | Engagement Rate = 500% |
| Quy trình gãy | Skill chạy nhưng không tạo output | content-writer chạy nhưng không có file draft |
| Xung đột quy tắc | Rule mâu thuẫn nhau | brand-voice yêu cầu emoji nhưng content-quality cấm |

**Trigger:** Chạy tự động trước mỗi pipeline, hoặc khi skill khác báo lỗi.

### A — Analyze (Phân tích)

Với mỗi lỗi phát hiện:

1. Xác định mức độ nghiêm trọng: CRÍ TÍC (chặn pipeline), CAO (ảnh hưởng chất lượng), TRUNG BÌNH (cần sửa sớm), THẤP (cải tiến).
2. Truy vết nguyên nhân gốc: file nào, skill nào, bước nào gây ra.
3. Kiểm tra lịch sử: lỗi này đã xảy ra trước đó chưa (xem `docs/debug-backlog.md`).
4. Đánh giá: tự sửa được hay cần con người can thiệp.

### H — Heal (Chữa trị)

Hành động theo mức độ:

- **Tự sửa (Auto-heal):**
  - File thiếu → tạo file mẫu từ template.
  - CSV format sai → sửa headers, bỏ dòng lỗi.
  - Output thiếu → chạy lại skill tương ứng.

- **Escalate (Chuyển con người):**
  - Dữ liệu nguồn bị hỏng không thể phục hồi.
  - Xung đột quy tắc cần quyết định chiến lược.
  - Lỗi lặp lại >3 lần → cần redesign.

### V — Verify (Xác minh)

Sau khi heal:

1. Chạy lại bước detect cho lỗi vừa sửa.
2. Chạy pipeline test (dry-run) để đảm bảo không gây lỗi mới.
3. Ghi kết quả vào `docs/debug-backlog.md` với trạng thái HEALED hoặc ESCALATED.
4. Cập nhật `docs/pdca-log.md` với ghi chú sửa lỗi.

## Giới hạn an toàn

- Không xóa file gốc, chỉ tạo bản sao sửa.
- Không tự sửa quá 3 lần cùng 1 lỗi → escalate.
- Không thay đổi rules hoặc skills mà không có [HUMAN CHECKPOINT].
- Log mọi hành động heal vào debug-backlog.md.

## Output

- **File:** `docs/debug-backlog.md` (append)
- **Format:** Bảng với cột: ID, Ngày, Loại lỗi, Mức độ, Nguyên nhân, Hành động, Trạng thái

## Handoff

- **Nhận từ:** Bất kỳ skill nào báo lỗi, workspace-orchestrator
- **Chuyển đến:** Skill cần chạy lại, [HUMAN CHECKPOINT] nếu escalate

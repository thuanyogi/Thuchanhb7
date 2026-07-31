# Workflow: Pipeline Phê Duyệt Nội Dung

## Format: OIPO (Objective → Input → Process → Output)

### Objective (Mục tiêu)

Đưa bài viết từ bản nháp qua 4 trạm kiểm soát (Writer → Checker → Human → Publisher), đảm bảo chất lượng tại mỗi bước trước khi xuất bản chính thức.

### Input (Đầu vào)

| Nguồn | Đường dẫn | Mô tả |
|---|---|---|
| Bài viết nháp | `outputs/content-drafts/` | Bài viết từ content-writer |
| Quy tắc chất lượng | `.agents/rules/content-quality.md` | 5 quality gates |
| Quy tắc giọng điệu | `.agents/rules/brand-voice.md` | 7 quy tắc tone |
| Chính sách duyệt | `.agents/rules/approval-policy.md` | Auto-pass vs human review |

### Process (Pipeline 4 trạm)

**Trạm 1: Writer (Skill: content-writer)**
- Viết bài theo content-calendar.csv.
- Tuân thủ brand-voice.md và content-quality.md.
- Đánh dấu trạng thái: `DRAFT`.
- Output: File markdown trong `outputs/content-drafts/`.

**Trạm 2: Checker (Skill: content-approver)**
- Giai đoạn 1: Auto-check (kỹ thuật).
- Giai đoạn 2: AI review (chất lượng, tone, đối tượng).
- Chấm điểm 1–10.
- Nếu PASS (≥7) → chuyển Trạm 3.
- Nếu REVISE (4–6) → trả về Trạm 1 kèm gợi ý. Tối đa 2 lần revise.
- Nếu REJECT (≤3) → viết lại từ đầu.
- Cập nhật trạng thái: `REVIEWED`.

**Trạm 3: [HUMAN CHECKPOINT] — Human Approval**
- Kiểm tra approval-policy.md: bài này cần human review không?
- Nếu đủ điều kiện auto-pass → bỏ qua trạm này.
- Nếu cần human review → hiển thị cho Minh Anh:
  - Bài viết hoàn chỉnh.
  - Điểm AI review.
  - Kết quả auto-check.
- Minh Anh chọn: ✅ DUYỆT / ✏️ SỬA NHẸ / ❌ TỪ CHỐI.
- Cập nhật trạng thái: `APPROVED` hoặc `REJECTED`.

**Trạm 4: Publisher (Skill: social-media-scheduler)**
- Nhận bài đã duyệt.
- Đặt vào lịch đăng theo khung giờ tối ưu.
- Cập nhật trạng thái: `SCHEDULED`.
- Sau khi đăng: `PUBLISHED`.

### Output (Đầu ra)

| Output | Đường dẫn |
|---|---|
| Bài viết đã duyệt | `outputs/content-drafts/` (cập nhật trạng thái) |
| Log phê duyệt | `docs/pdca-log.md` (append) |
| Lịch đăng | `outputs/weekly-schedule-YYYY-WXX.md` |

### Sơ đồ luồng

```
Writer [DRAFT] → Checker [REVIEWED]
                    ├─ PASS → Human [APPROVED] → Publisher [SCHEDULED → PUBLISHED]
                    ├─ REVISE → Writer (retry ≤2)
                    └─ REJECT → Writer (viết lại)
```

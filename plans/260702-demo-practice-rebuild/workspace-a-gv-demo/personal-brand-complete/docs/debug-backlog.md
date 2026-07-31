# Debug Backlog — Nhật ký sửa lỗi Workspace

## Tổng quan

| Trạng thái | Số lượng |
|------------|----------|
| ✅ HEALED | 3 |
| ⚠️ ESCALATED | 2 |
| Tổng | 5 |

---

## BUG-001 — CSV encoding lỗi tiếng Việt ✅ HEALED

**Ngày phát hiện:** 2024-03-15
**Skill phát hiện:** `self-healer` (Detect)
**Mô tả:** File `engagement-metrics.csv` hiển thị ký tự lạ thay vì tiếng Việt khi đọc bằng script.

**Phân tích (Analyze):**
- Root cause: File được lưu với encoding Windows-1252 thay vì UTF-8.
- Ảnh hưởng: Skill `engagement-analyst` đọc sai tên bài viết.

**Sửa lỗi (Heal):**
- Chuyển đổi tất cả CSV sang UTF-8 với BOM.
- Thêm `encoding='utf-8'` vào script `run-workspace.py`.

**Xác nhận (Verify):**
- ✅ Tất cả ký tự tiếng Việt hiển thị đúng.
- ✅ Script chạy không lỗi với 20 file CSV test.

---

## BUG-002 — Content writer tạo bài trùng chủ đề ✅ HEALED

**Ngày phát hiện:** 2024-04-02
**Skill phát hiện:** `content-approver` (Stage 1 Auto-check)
**Mô tả:** 2 bài LinkedIn tuần 2024-04-01 cùng chủ đề "Công cụ AI cho marketing".

**Phân tích (Analyze):**
- Root cause: Skill `content-writer` không kiểm tra lịch sử bài đã đăng.
- Ảnh hưởng: Nội dung lặp, giảm giá trị cho followers.

**Sửa lỗi (Heal):**
- Thêm bước "kiểm tra 10 bài gần nhất" vào quy trình content-writer.
- Cập nhật SKILL.md với rule: không lặp chủ đề trong 14 ngày.

**Xác nhận (Verify):**
- ✅ Chạy 3 tuần liên tiếp không có bài trùng chủ đề.
- ✅ Content calendar đa dạng hơn (5 pillars luân phiên).

---

## BUG-003 — Engagement rate tính sai ✅ HEALED

**Ngày phát hiện:** 2024-04-20
**Skill phát hiện:** `engagement-analyst`
**Mô tả:** Engagement rate hiển thị 35% (bất thường cao) cho POST-012.

**Phân tích (Analyze):**
- Root cause: Công thức tính engagement dùng reach thay vì impressions làm mẫu số.
- POST-012 có reach thấp (890) nhưng 41 interactions → 4.6% (không phải 35%).

**Sửa lỗi (Heal):**
- Sửa công thức: `engagement_rate = (likes + comments + shares) / impressions * 100`.
- Tính lại toàn bộ cột Engagement_Rate trong `engagement-metrics.csv`.

**Xác nhận (Verify):**
- ✅ Tất cả engagement rate nằm trong khoảng 2-6% (hợp lý).
- ✅ Báo cáo tuần không còn outlier bất thường.

---

## BUG-004 — Approval pipeline bỏ qua human checkpoint ⚠️ ESCALATED

**Ngày phát hiện:** 2024-05-10
**Skill phát hiện:** `brand-auditor`
**Mô tả:** 3 bài viết được đăng mà không qua bước human review trong workflow `approval-pipeline-flow`.

**Phân tích (Analyze):**
- Root cause: Rule `approval-policy.md` có điều kiện auto-pass quá rộng — bài < 300 từ với engagement rate dự kiến > 3% được tự động duyệt.
- Ảnh hưởng: 1 bài có lỗi chính tả, 1 bài thiếu CTA.

**Lý do escalate:**
- Liên quan đến an toàn (Human-in-the-Loop bypass).
- Cần quyết định con người: thắt chặt hay giữ nguyên auto-pass criteria.

**Trạng thái:** Chờ quyết định của Minh Anh — đề xuất bỏ auto-pass cho tuần đầu tiên của mỗi pillar mới.

---

## BUG-005 — Dashboard không cập nhật realtime ⚠️ ESCALATED

**Ngày phát hiện:** 2024-05-25
**Skill phát hiện:** `self-healer` (Detect)
**Mô tả:** Brand dashboard hiển thị dữ liệu cũ 3 ngày vì file CSV chưa được cập nhật.

**Phân tích (Analyze):**
- Root cause: Không có trigger tự động cập nhật CSV từ các nền tảng.
- Hiện tại phải thủ công export data từ LinkedIn/Facebook.

**Lý do escalate:**
- Cần tích hợp API bên ngoài (LinkedIn API, Facebook Graph API).
- Vượt phạm vi workspace hiện tại (chỉ dùng sample data).
- Cần ngân sách và thời gian phát triển thêm.

**Trạng thái:** Ghi nhận cho phase 2 — khi chuyển từ demo sang production.

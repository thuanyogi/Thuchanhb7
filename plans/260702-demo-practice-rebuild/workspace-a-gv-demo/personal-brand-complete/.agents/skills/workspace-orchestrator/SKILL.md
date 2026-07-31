---
name: workspace-orchestrator
description: Kỹ năng điều phối toàn bộ pipeline — chạy các skill theo thứ tự, quản lý handoff, và đảm bảo end-to-end flow hoạt động đúng.
---

# Skill: Workspace Orchestrator — Điều Phối Pipeline

## Mục tiêu

Điều phối toàn bộ các skill trong workspace theo đúng thứ tự, quản lý handoff giữa các bước, xử lý lỗi, và đảm bảo pipeline end-to-end hoàn thành từ dữ liệu đầu vào đến output cuối cùng.

## Thứ tự thực thi Pipeline

```
[1] self-healer (pre-check)
 ↓
[2] content-writer (tạo bài viết)
 ↓
[3] content-approver (duyệt 3 giai đoạn)
 ↓  ← Nếu REJECT → quay lại [2]
[4] social-media-scheduler (lên lịch)
 ↓
[5] engagement-analyst (phân tích sau đăng)
 ↓
[6] brand-dashboard (tổng hợp dashboard)
 ↓
[7] brand-auditor (kiểm toán định kỳ)
 ↓
[8] self-healer (post-check)
```

## Quy trình điều phối

### Bước 1: Pre-flight Check
- Gọi `self-healer` ở chế độ Detect.
- Kiểm tra tất cả file đầu vào tồn tại và hợp lệ.
- Nếu có lỗi CRÍ TÍC → dừng pipeline, chạy heal.
- Nếu OK → tiếp tục.

### Bước 2: Chạy Pipeline Chính
- Thực thi từng skill theo thứ tự trên.
- Mỗi skill nhận output từ skill trước qua handoff contract.
- Validate output mỗi bước trước khi chuyển tiếp.
- Ghi log tiến độ: `[STEP X/8] skill-name — DONE/FAIL`.

### Bước 3: Xử lý Handoff
- Đọc `docs/handoff-contracts.md` để biết schema chuyển giao.
- Validate output của skill A khớp với input yêu cầu của skill B.
- Nếu không khớp → gọi `self-healer` để chẩn đoán.

### Bước 4: Xử lý lỗi và Retry
- Lỗi nhẹ (format) → tự sửa và retry 1 lần.
- Lỗi trung bình (thiếu dữ liệu) → retry với fallback data.
- Lỗi nặng (skill crash) → dừng, escalate, ghi log.
- Tối đa 2 retry per skill.

### Bước 5: Post-flight và Báo cáo
- Gọi `self-healer` ở chế độ Verify.
- Tạo báo cáo chạy pipeline:
  - Thời gian bắt đầu/kết thúc.
  - Số skill chạy thành công/thất bại.
  - Output được tạo.
  - Lỗi gặp phải và cách xử lý.
- Cập nhật `docs/pdca-log.md`.

## Các chế độ chạy

| Chế độ | Mô tả | Skills chạy |
|---|---|---|
| `full` | Pipeline đầy đủ | Tất cả 8 bước |
| `content-only` | Chỉ viết và duyệt | Steps 1–3 |
| `analytics-only` | Chỉ phân tích | Steps 5–6 |
| `audit` | Kiểm toán | Steps 7–8 |
| `dry-run` | Chạy thử không ghi file | Tất cả nhưng không lưu |

## Handoff tổng quan

- **Nhận từ:** Người dùng (trigger), cron schedule
- **Quản lý:** Tất cả skills trong workspace
- **Output cuối:** Báo cáo pipeline + tất cả output files

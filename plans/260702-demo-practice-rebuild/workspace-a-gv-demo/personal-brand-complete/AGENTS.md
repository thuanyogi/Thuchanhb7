# AGENTS.md — Personal Brand AI Workspace

## Mục đích

Đây là workspace AI xây dựng thương hiệu cá nhân cho Nguyễn Minh Anh — Digital Marketing Manager với 5 năm kinh nghiệm.

Mục tiêu: Tự động hóa quy trình tạo content, lên lịch đăng bài, phân tích engagement và quản lý thương hiệu cá nhân trên mạng xã hội.

## Quy tắc vận hành

1. Đọc `docs/project-brief.md` trước khi thay đổi workflow.
2. Đọc `docs/workspace-map.md` trước khi chỉnh sửa agents, skills, scripts.
3. Lưu tất cả kết quả sinh ra trong `outputs/`.
4. Dữ liệu mẫu đặt trong `sample-data/`.
5. Kiến thức ổn định đặt trong `knowledge-base/`.
6. Code thực thi đặt trong `scripts/`.
7. Skills đặt trong `.agents/skills/` — mỗi skill là 1 folder chứa SKILL.md.
8. Rules đặt trong `.agents/rules/` — mỗi rule là 1 file .md.
9. Workflows đặt trong `.agents/workflows/` — mỗi workflow là 1 file .md theo format OIPO.
10. Cập nhật `docs/pdca-log.md` sau mỗi lần chạy hoặc sửa lỗi.

## An toàn

- Không lưu mật khẩu, token, API key, hay dữ liệu sản xuất thật.
- Không dùng dữ liệu khách hàng thật chưa được ẩn danh.
- Không gửi output ra ngoài mà chưa có checkpoint con người.
- Nếu thiếu dữ liệu đầu vào, báo lỗi thay vì bịa dữ liệu.

## Framework khóa học áp dụng

- 7 thành tố: Input, AI Agent, Tools, Knowledge, Skill/Memory, Human-in-the-Loop, Output/Handoff.
- PDCA: Plan → Do → Check → Act.
- OIPO: Objective → Input → Process → Output.
- MICRO: Mission → Input/Identity → Capabilities → Rules → Output.
- CLEAR: Clear → Logical → Explicit → Actionable → Relevant.
- SCOPE: Situation → Constraints → Objectives → Process → Evaluation.
- Handoff: Chuyển giao có schema giữa các agent.
- HITL: Checkpoint con người cho quyết định quan trọng.

## Demo cuối khóa

Demo sẽ trình bày:
1. Bài toán và mục tiêu.
2. Slide 7 thành tố với bằng chứng workspace.
3. Workspace map và các lớp thực thi.
4. Dữ liệu mẫu đầu vào.
5. Chạy end-to-end pipeline.
6. Kết quả trong `outputs/`.
7. Cải tiến PDCA qua ít nhất 3 vòng lặp.
8. Hướng cải tiến tiếp theo.

## Câu hỏi mở

Không có.

# Workspace Map — Bản Đồ Hệ Thống 7 Thành Tố

## Tổng quan

Workspace Personal Brand của Nguyễn Minh Anh được thiết kế theo framework 7 thành tố của khóa học Agentic AI.

---

## 1. Input (Đầu vào)

| File | Đường dẫn | Mô tả |
|---|---|---|
| Bài đăng MXH | `sample-data/social-media-posts.csv` | 15 bài viết với metrics |
| Lịch nội dung | `sample-data/content-calendar.csv` | Lịch 7 ngày |
| Chỉ số engagement | `sample-data/engagement-metrics.csv` | 15 dòng dữ liệu engagement |
| Phản hồi khán giả | `sample-data/audience-feedback.csv` | 20 phản hồi từ follower |

## 2. AI Agent (Tác nhân AI)

Workspace dùng AI agent tổng hợp, được điều khiển bởi các skills và rules.

- **Orchestrator:** `workspace-orchestrator` — điều phối pipeline
- **Execution:** Các skills chạy theo thứ tự do orchestrator quản lý

## 3. Tools (Công cụ)

| Công cụ | Đường dẫn | Chức năng |
|---|---|---|
| Orchestrator script | `scripts/run-workspace.py` | Chạy pipeline tự động |
| CSV Reader | Built-in Python csv module | Đọc dữ liệu đầu vào |
| Markdown Writer | Built-in file I/O | Tạo báo cáo, bài viết |

## 4. Knowledge (Kiến thức)

| File | Đường dẫn | Mô tả |
|---|---|---|
| Hồ sơ thương hiệu | `knowledge-base/brand-profile.md` | Thông tin Minh Anh |
| Đối tượng mục tiêu | `knowledge-base/target-audience.md` | Chân dung khán giả |
| Trụ cột nội dung | `knowledge-base/content-pillars.md` | 5 pillars |
| Hướng dẫn thương hiệu | `knowledge-base/brand-guidelines.md` | Màu, font, tone |

## 5. Skill/Memory (Kỹ năng)

| Skill | Đường dẫn | Chức năng |
|---|---|---|
| Content Writer | `.agents/skills/content-writer/SKILL.md` | Viết bài |
| Social Media Scheduler | `.agents/skills/social-media-scheduler/SKILL.md` | Lên lịch |
| Engagement Analyst | `.agents/skills/engagement-analyst/SKILL.md` | Phân tích |
| Brand Dashboard | `.agents/skills/brand-dashboard/SKILL.md` | Tổng hợp |
| Content Approver | `.agents/skills/content-approver/SKILL.md` | Duyệt bài |
| Brand Auditor | `.agents/skills/brand-auditor/SKILL.md` | Kiểm toán |
| Self-Healer | `.agents/skills/self-healer/SKILL.md` | Tự sửa lỗi |
| Workspace Orchestrator | `.agents/skills/workspace-orchestrator/SKILL.md` | Điều phối |

**Rules (Quy tắc):**

| Rule | Đường dẫn |
|---|---|
| Brand Voice | `.agents/rules/brand-voice.md` |
| Content Quality | `.agents/rules/content-quality.md` |
| Visual Standards | `.agents/rules/visual-standards.md` |
| Approval Policy | `.agents/rules/approval-policy.md` |

**Workflows (Quy trình):**

| Workflow | Đường dẫn |
|---|---|
| Content Creation Flow | `.agents/workflows/content-creation-flow.md` |
| Weekly Scheduler Flow | `.agents/workflows/weekly-scheduler-flow.md` |
| Approval Pipeline Flow | `.agents/workflows/approval-pipeline-flow.md` |

## 6. Human-in-the-Loop (Con người trong vòng lặp)

| Checkpoint | Vị trí | Mô tả |
|---|---|---|
| Duyệt bài viết | Content Approver — Giai đoạn 3 | Minh Anh duyệt trước đăng |
| Xác nhận lịch tuần | Weekly Scheduler — Bước 5 | Minh Anh xác nhận lịch |
| Escalate lỗi | Self-Healer — bước Heal | Lỗi lặp >3 lần |
| Audit review | Brand Auditor — output | Minh Anh xem kết quả audit |

## 7. Output/Handoff (Đầu ra / Chuyển giao)

| Output | Đường dẫn | Mô tả |
|---|---|---|
| Bài viết nháp | `outputs/content-drafts/` | Bài LinkedIn, Facebook |
| Báo cáo engagement | `outputs/analytics-reports/` | Báo cáo tuần |
| Lịch đăng bài | `outputs/weekly-schedule-*.md` | Lịch tuần |
| Dashboard | `outputs/analytics-reports/brand-dashboard-*.md` | Bảng tổng hợp |

**Handoff contracts:** Xem `docs/handoff-contracts.md` cho schema chuyển giao giữa các skill.

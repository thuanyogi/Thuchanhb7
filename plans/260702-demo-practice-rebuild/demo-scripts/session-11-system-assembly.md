# SESSION 11 — Lắp Ráp Hệ Thống Hoàn Chỉnh

> **Thời lượng:** 3 giờ (Demo 30 phút + Thực hành 120 phút + Wrap-up 15 phút)  
> **Mục tiêu:** Lắp ráp workspace hoàn chỉnh, chạy integration tests, chuẩn bị Demo Day  
> **Vai trò:** GV trên Workspace A (đã hoàn chỉnh) | HV trên Workspace B (của mình)  
> **Prerequisite:** Hoàn thành buổi 10 (đã có project-brief + architecture review)

---

## 📋 TRẠNG THÁI WORKSPACE KHI VÀO BUỔI 11

```
personal-brand-workspace/
├── AGENTS.md
├── .agents/
│   ├── skills/
│   │   ├── content-writer/SKILL.md
│   │   ├── engagement-analyst/SKILL.md
│   │   ├── content-approver/SKILL.md
│   │   ├── brand-auditor/SKILL.md
│   │   └── self-healer/SKILL.md
│   ├── rules/
│   │   ├── brand-voice.md
│   │   ├── content-quality.md
│   │   ├── visual-standards.md
│   │   └── approval-policy.md
│   └── workflows/
│       ├── content-creation-flow.md
│       └── approval-pipeline-flow.md
├── knowledge-base/ (4 .md files)
├── sample-data/ (5 CSVs)
├── outputs/
└── docs/
    ├── workspace-map.md
    ├── pdca-log.md              ← 2 iterations
    ├── project-brief.md          ← HOÀN THIỆN từ buổi 10
    ├── handoff-contracts.md
    ├── audit-report.md
    ├── debug-backlog.md
    └── lesson-to-workspace-map.md
```

---

## PHẦN 1: DEMO — GV THỰC HIỆN (30 phút)

### 🎯 Mục tiêu Demo

GV sẽ tạo 2 components cuối cùng (orchestrator + full-pipeline), chạy 5 test requests, và show final PDCA iteration.

> 💡 **Mẹo GV:** Demo NHANH — dành phần lớn thời gian cho HV thực hành. Mục tiêu: HV thấy end-to-end flow hoạt động và muốn tự build.

---

### BƯỚC 1: Tạo Workspace Orchestrator [10 phút]

📋 **Prompt tạo Orchestrator — Copy & Paste:**

```
Tạo file .agents/skills/workspace-orchestrator/SKILL.md.
Đây là META-SKILL điều phối toàn bộ workspace.
```

**📄 Nội dung `.agents/skills/workspace-orchestrator/SKILL.md`:**

```markdown
---
name: workspace-orchestrator
description: Meta-skill điều phối toàn bộ workspace Personal Brand Builder. Nhận yêu cầu từ user, routing đến đúng skill, chain workflows, và quản lý outputs.
---

# Workspace Orchestrator

## MICRO Specification

### Mission
Điều phối toàn bộ workspace Personal Brand Builder:
- Nhận yêu cầu từ user (bất kỳ dạng nào)
- Phân tích yêu cầu và routing đến đúng skill
- Chain multiple skills nếu cần
- Quản lý output và ghi log
- Đảm bảo tất cả rules được tuân thủ
- Trigger human checkpoints đúng lúc

### Input
- **User request:** Yêu cầu dạng tự nhiên (tiếng Việt hoặc tiếng Anh)
- **Context:** Platform target, content type, urgency level
- **Optional:** Specific files to process, override parameters

### Constraints
- KHÔNG tự publish content — phải qua Human Checkpoint
- KHÔNG bỏ qua rules — tất cả output phải comply với 4 rules
- KHÔNG hallucinate data — chỉ dùng data có trong sample-data/
- KHÔNG sửa knowledge-base/ — chỉ đọc và reference
- Timeout: 10 phút cho mỗi skill call
- Maximum chain depth: 3 skills (tránh infinite loop)

### Return Format

🎯 ORCHESTRATOR REPORT
═══════════════════════
📥 Request: [user request tóm tắt]
🔄 Routing: [skill được gọi]
📋 Workflow: [workflow được trigger]

─── EXECUTION LOG ───
[Bước 1]: [skill/action] → [kết quả]
[Bước 2]: [skill/action] → [kết quả]

─── OUTPUT ───
📄 File created: [path]
📊 Summary: [tóm tắt output]

─── COMPLIANCE CHECK ───
✅/❌ brand-voice.md: [status]
✅/❌ content-quality.md: [status]
✅/❌ visual-standards.md: [status]
✅/❌ approval-policy.md: [status]

🧑 HUMAN CHECKPOINT: [Cần human review? Y/N]

### Output
- Files tạo ra → `outputs/content-drafts/` hoặc `outputs/analytics-reports/`
- Execution log → console
- Errors → `docs/debug-backlog.md` (append)

## Routing Logic

| Từ khóa trong request | Skill được gọi | Workflow |
|----------------------|----------------|----------|
| "viết", "tạo", "draft", "content" | content-writer | content-creation-flow |
| "phân tích", "analytics", "engagement" | engagement-analyst | — |
| "review", "duyệt", "check", "approve" | content-approver | approval-pipeline-flow |
| "audit", "kiểm tra brand", "consistency" | brand-auditor | — |
| "health check", "debug", "fix", "lỗi" | self-healer | — |
| "tạo + review" (combo) | content-writer → content-approver | chain |

## Chain Logic

Request → Parse Keywords → Route to Skill → Execute → Apply Rules → Check: Needs approval? → Human Checkpoint (if yes) → Output

## Error Handling

| Error Type | Action |
|-----------|--------|
| Skill not found | Return error + suggest closest skill |
| Rule violation | Flag violation + show which rule |
| Data not found | Return error + suggest data files available |
| Timeout | Kill process + log to debug-backlog.md |
| Ambiguous request | Ask user for clarification |
```

---

### BƯỚC 2: Tạo Full Pipeline Flow [5 phút]

📋 **Prompt tạo Full Pipeline — Copy & Paste:**

```
Tạo file .agents/workflows/full-pipeline-flow.md.
Đây là end-to-end pipeline cho toàn bộ workspace.
```

**📄 Nội dung `.agents/workflows/full-pipeline-flow.md`:**

```markdown
# Full Pipeline Flow

## OIPO Specification

### Overview
End-to-end pipeline điều phối TOÀN BỘ workspace Personal Brand Builder.
Từ yêu cầu user đến output hoàn chỉnh, qua tất cả quality gates.

### Input
- User request (text tự nhiên)
- Target platform (optional)
- Content type (optional)
- Urgency: normal (24h) | urgent (4h) | emergency (1h)

### Process

**Bước 1: Request Parsing** — Parse yêu cầu, xác định skill(s) + workflow
**Bước 2: Knowledge Loading** — Đọc brand-profile, target-audience, content-pillars, brand-guidelines
**Bước 3: Content Creation** — content-writer tạo draft, apply rules
**Bước 4: Quality Check** — content-approver review, cho điểm quality score
**Bước 5: 🧑 HUMAN CHECKPOINT (BẮT BUỘC)** — Human approve/revise/reject. SLA theo urgency.
**Bước 6: Finalize & Log** — Ghi nhận approval, update calendar, publish log
**Bước 7: Analytics (Periodic)** — engagement-analyst chạy weekly
**Bước 8: Health Check (Periodic)** — self-healer chạy weekly, brand-auditor monthly

### Output
- Content drafts: `outputs/content-drafts/`
- Analytics reports: `outputs/analytics-reports/`
- Logs: publish-log.csv, debug-backlog.md
- PDCA updates: docs/pdca-log.md

### Error Handling
| Step | Error | Action |
|------|-------|--------|
| 1 | Ambiguous request | Ask user for clarification |
| 3 | Writer fails | Retry 1x, then escalate to human |
| 4 | Quality score < 5 | Auto-revise before human review |
| 5 | Human no response | Escalate after SLA |
| 7 | No data available | Skip analytics, note in log |

### Flow Diagram

User Request → [1. Parse] → [2. Load Knowledge] → [3. Create Content] → [4. Quality Check] → [5. 🧑 HUMAN REVIEW] → [6. Finalize] → [7. Analytics weekly] → [8. Health Check weekly]
```

---

### BƯỚC 3: Demo 5 Test Requests [10 phút]

> 💡 **Mẹo GV:** Chạy nhanh 5 requests, show routing + output.

#### Test Request 1: Content Creation
📋 ```[Dùng workspace-orchestrator] Viết bài LinkedIn về "5 cách dùng AI tăng năng suất Marketing 2025". Tone: chuyên nghiệp, data-driven. Độ dài: 500-700 từ.```
**Expected Routing:** `content-writer` → `content-creation-flow`

#### Test Request 2: Analytics
📋 ```[Dùng workspace-orchestrator] Phân tích engagement metrics tuần này. So sánh với tuần trước. Đề xuất 3 action items.```
**Expected Routing:** `engagement-analyst`

#### Test Request 3: Content Review
📋 ```[Dùng workspace-orchestrator] Review bài viết draft vừa tạo theo brand guidelines. Check: brand voice, content quality, visual standards. Cho điểm và feedback.```
**Expected Routing:** `content-approver` → `approval-pipeline-flow`

#### Test Request 4: Workspace Audit
📋 ```[Dùng workspace-orchestrator] Audit toàn bộ workspace — kiểm tra brand consistency.```
**Expected Routing:** `brand-auditor`

#### Test Request 5: Health Check
📋 ```[Dùng workspace-orchestrator] Chạy full health check cho workspace. Kiểm tra: data quality, rule consistency, workflow integrity.```
**Expected Routing:** `self-healer`

---

### BƯỚC 4: Show Output Structure [3 phút]

```
outputs/
├── content-drafts/
│   ├── draft-001-linkedin-ai-marketing.md
│   ├── draft-002-facebook-branding-tips.md
│   └── draft-003-instagram-carousel.md
└── analytics-reports/
    ├── weekly-engagement-2025-w12.md
    └── monthly-summary-2025-03.md
```

### BƯỚC 5: PDCA Iteration 3 [2 phút]

📋 **Prompt PDCA — Copy & Paste:**
```
Ghi thêm PDCA iteration 3 vào docs/pdca-log.md:
Plan: Tạo orchestrator + full-pipeline, chạy 5 test requests
Do: Tạo 2 files mới, chạy 5 tests
Check: [kết quả 5 tests — pass/fail]
Act: [adjustments needed]
```

> ✅ **Checkpoint cuối Demo:** GV show full workspace state và nói: "Giờ đến lượt các bạn!"

---

## PHẦN 2: THỰC HÀNH — HV TỰ LÀM (120 phút)

### 📋 Tổng quan Thực hành

| Phase | Thời gian | Mục tiêu |
|-------|-----------|----------|
| 1. Lắp ráp | 60 phút | Tạo orchestrator + full-pipeline |
| 2. Integration Test | 30 phút | Chạy 10 test requests |
| 3. PDCA Fix | 15 phút | 2 iterations sửa lỗi |
| 4. Demo Day Prep | 15 phút | Presentation outline + checklist |

---

### Phase 1: Lắp Ráp (60 phút)

#### 🌟 SUPER PROMPT — Tạo Workspace Orchestrator (Copy-Paste Ready)

> ⚠️ **ĐÂY LÀ PROMPT QUAN TRỌNG NHẤT CỦA BUỔI 11.** HV copy toàn bộ prompt này và paste vào AI tool.

📋 **SUPER PROMPT — Copy toàn bộ khối dưới đây:**

```
Bạn sẽ giúp tôi tạo file .agents/skills/workspace-orchestrator/SKILL.md
cho workspace "{{tên_workspace}}" của tôi.

## CONTEXT — Workspace hiện tại của tôi:

### Skills đã có (trong .agents/skills/):
1. content-writer/SKILL.md — Tạo nội dung theo brand voice
2. engagement-analyst/SKILL.md — Phân tích engagement metrics
3. content-approver/SKILL.md — Duyệt content theo standards
4. brand-auditor/SKILL.md — Audit brand consistency
5. self-healer/SKILL.md — Phát hiện + gợi ý fix lỗi

### Rules đã có (trong .agents/rules/):
1. brand-voice.md — Giọng điệu thương hiệu, emoji strategy theo platform
2. content-quality.md — Tiêu chuẩn chất lượng nội dung
3. visual-standards.md — Quy chuẩn hình ảnh, format
4. approval-policy.md — Quy trình duyệt, SLA, escalation

### Workflows đã có (trong .agents/workflows/):
1. content-creation-flow.md — Quy trình tạo content (idea → draft)
2. approval-pipeline-flow.md — Quy trình duyệt (draft → publish)

### Knowledge Base (trong knowledge-base/):
1. brand-profile.md — Thông tin thương hiệu
2. target-audience.md — Chân dung khách hàng mục tiêu
3. content-pillars.md — Các trụ cột nội dung
4. brand-guidelines.md — Hướng dẫn thương hiệu tổng thể

### Sample Data (trong sample-data/):
1. social-media-posts.csv — Lịch sử bài đăng
2. monthly-report-data.csv — Dữ liệu báo cáo tháng
3. content-calendar.csv — Lịch nội dung
4. engagement-metrics.csv — Chỉ số tương tác
5. audience-feedback.csv — Phản hồi khán giả

### Output locations:
- Content drafts → outputs/content-drafts/
- Analytics reports → outputs/analytics-reports/
- Debug logs → docs/debug-backlog.md
- PDCA log → docs/pdca-log.md

## YÊU CẦU — Tạo Orchestrator Skill:

### 1. MICRO Specification:
- Mission: Điều phối toàn bộ workspace, routing requests đến đúng skill
- Input: User request (text tự nhiên), optional platform/content_type
- Constraints:
  * KHÔNG tự publish — phải qua Human Checkpoint
  * KHÔNG bỏ qua rules — tất cả 4 rules phải được check
  * KHÔNG hallucinate data — chỉ dùng data trong sample-data/
  * KHÔNG sửa knowledge-base/ — chỉ đọc
  * Max chain depth: 3 skills
- Return format: Orchestrator Report (routing + execution log + compliance)
- Output: Files trong outputs/ + logs

### 2. Routing Table:
Tạo bảng mapping: từ khóa trong request → skill được gọi → workflow trigger

### 3. Chain Logic:
Mô tả cách chain multiple skills (ví dụ: viết + duyệt = 2 skills)

### 4. Error Handling:
Xử lý: skill not found, rule violation, data not found, timeout, ambiguous request

### 5. Human Checkpoints:
Định nghĩa KHI NÀO cần human review:
- Trước khi publish bất kỳ content nào
- Khi quality score < 7
- Khi self-healer phát hiện critical issues
- Khi audit score < 80%

### 6. Compliance Check:
Sau mỗi output, check compliance với 4 rules

## FORMAT:
Tạo file SKILL.md với YAML frontmatter (name, description)
Theo format MICRO specification.
Bao gồm routing table, chain logic, error handling.
Viết bằng tiếng Việt.
```

> 💡 **Mẹo GV:** Nhắc HV thay `{{tên_workspace}}` bằng tên workspace thực của mình.

---

#### Sau khi có Orchestrator, tạo Full Pipeline:

📋 **Prompt tạo Full Pipeline — Copy & Paste:**

```
Bây giờ tạo file .agents/workflows/full-pipeline-flow.md.
Đây là end-to-end pipeline kết nối TẤT CẢ components:

OIPO:
- Overview: Pipeline điều phối toàn bộ workspace
- Input: User request + optional params
- Process: Parse → Load Knowledge → Create → Check → Human Review → Finalize → Analytics → Health Check
- Output: Content trong outputs/ + Reports + Logs

BAO GỒM:
1. 8 bước process
2. Human Checkpoint ở bước 5 (BẮT BUỘC)
3. Error handling cho mỗi bước
4. Flow diagram (text-based)
5. SLA cho human review: normal 24h, urgent 4h, emergency 1h

Tham khảo workspace hiện tại và tạo workflow phù hợp.
```

---

### Phase 2: Integration Test (30 phút)

#### 📊 TEST MATRIX — 10 Requests

> HV chạy từng request và ghi kết quả Pass/Fail.

| # | Request | Expected Skill | Expected Output | Pass/Fail |
|---|---------|---------------|-----------------|----------|
| 1 | "Viết bài LinkedIn về xu hướng AI 2025" | content-writer | Draft trong outputs/content-drafts/ | ☐ |
| 2 | "Phân tích engagement tuần này từ file engagement-metrics.csv" | engagement-analyst | Report trong outputs/analytics-reports/ | ☐ |
| 3 | "Review draft-001 theo brand guidelines" | content-approver | Quality Report + Human Checkpoint | ☐ |
| 4 | "Audit toàn bộ workspace kiểm tra brand consistency" | brand-auditor | Audit Report | ☐ |
| 5 | "Chạy health check, tìm data quality issues" | self-healer | Diagnostic Report | ☐ |
| 6 | "Viết carousel Instagram về 5 tips networking" | content-writer | Draft formatted cho Instagram | ☐ |
| 7 | "So sánh engagement Facebook vs LinkedIn tháng này" | engagement-analyst | Comparison Report | ☐ |
| 8 | "Viết bài TikTok script 60 giây về personal branding" | content-writer | Short-form script | ☐ |
| 9 | "Viết bài LinkedIn VÀ duyệt luôn theo approval flow" | content-writer → content-approver | Draft + Quality Report + Human CP | ☐ |
| 10 | "Full health check + audit + fix recommendations" | self-healer → brand-auditor | Diagnostic + Audit + Fix suggestions | ☐ |

**Evaluation:**
- ✅ **PASS:** Output đúng skill, đúng format, đúng location, compliance check passed
- ❌ **FAIL:** Sai skill, sai format, thiếu compliance, hoặc error
- **Target:** ≥ 8/10 Pass

---

### Phase 3: PDCA Fix (15 phút)

#### PDCA Iteration 3:

📋 **Prompt PDCA Iteration 3:**
```
Ghi thêm vào docs/pdca-log.md:

## PDCA Iteration 3 — Integration Test Round 1
Plan: Chạy 10 integration test requests qua full pipeline. Mục tiêu: ≥ 8/10 pass.
Do: Tạo workspace-orchestrator/SKILL.md, full-pipeline-flow.md, chạy 10 tests
Check: Kết quả: {{X}}/10 pass. Tests FAIL: Test #{{n}}: {{mô tả lỗi}}
Act: Fix lỗi test #{{n}}: {{action}}
```

#### PDCA Iteration 4:

📋 **Prompt PDCA Iteration 4:**
```
Ghi thêm vào docs/pdca-log.md:

## PDCA Iteration 4 — Fixes & Re-test
Plan: Fix các issues từ Iteration 3. Re-test các test cases bị fail.
Do: Fixed: {{mô tả fix}}. Re-tested: Test #{{n}}, #{{n}}
Check: Kết quả sau fix: {{X}}/10 pass. Improvement: +{{n}} tests
Act: Remaining issues: {{list hoặc "Không còn"}}. Workspace ready for Demo Day: {{Y/N}}
```

---

### Phase 4: Demo Day Prep (15 phút)

#### 📊 Presentation Outline — 7 Slides

📋 **Prompt tạo Presentation Outline:**
```
Tạo presentation outline 7 slides cho Demo Day (buổi 12).
```

**Template Presentation:**

```markdown
# Demo Day Presentation Outline

## Slide 1: Giới thiệu Dự án
- Tên project: {{tên_workspace}}
- Tên sinh viên: {{tên}}
- Mục tiêu 1 câu: "Tự động hóa X để đạt Y"
- Visual: Screenshot workspace structure

## Slide 2: Vấn đề (Before)
- Pain points hiện tại (3-5 bullet points)
- Số liệu: thời gian mất, số lượng manual tasks
- Quote đau: "Mỗi ngày mất X giờ cho Y mà vẫn Z"

## Slide 3: Giải pháp — SCOPE
- S: Tóm tắt situation (2 câu)
- C: Top 3 constraints
- O: Top 3 objectives (với số liệu)
- P: Component count (X skills, Y rules, Z workflows)
- E: Timeline và success criteria

## Slide 4: Kiến trúc — 7 Components
- Architecture diagram (từ buổi 10)
- Highlight 7 component types
- Show data flow arrows + Human Checkpoints

## Slide 5: Demo Live 🔴
- Chạy 2-3 requests real-time
- Show: routing → execution → output → compliance check
- Requests đề xuất: Tạo content, Health check, Chain request

## Slide 6: Kết quả & Metrics
- Before vs After comparison table
- Test results: X/10 pass
- PDCA iterations: 4 iterations, lessons learned
- Key metrics: Thời gian, Output, Automation rate

## Slide 7: Bài học & Next Steps
- Top 3 bài học rút ra
- Những gì sẽ cải thiện tiếp
- Kế hoạch triển khai thực tế (nếu có)
- Cảm ơn + Q&A
```

---

#### ✅ Demo Day Readiness Checklist — 6 Criteria

```markdown
# Demo Day Readiness Checklist

> Ngày kiểm tra: {{current_date}}
> Tên sinh viên: {{tên}}

## 6 Criteria

### ☐ 1. Workspace chạy được End-to-End
**Yêu cầu:** Từ user request → đúng skill → output → compliance check → human checkpoint
**Cách verify:** Chạy ít nhất 3 requests khác nhau qua workspace-orchestrator
**Status:** ☐ Pass / ☐ Fail

### ☐ 2. Tất cả Skills có MICRO Spec
**Yêu cầu:** 6 skills, mỗi skill có: Mission, Input, Constraints, Return format, Output
**Checklist:**
- ☐ content-writer: M☐ I☐ C☐ R☐ O☐
- ☐ engagement-analyst: M☐ I☐ C☐ R☐ O☐
- ☐ content-approver: M☐ I☐ C☐ R☐ O☐
- ☐ brand-auditor: M☐ I☐ C☐ R☐ O☐
- ☐ self-healer: M☐ I☐ C☐ R☐ O☐
- ☐ workspace-orchestrator: M☐ I☐ C☐ R☐ O☐
**Status:** ☐ Pass / ☐ Fail

### ☐ 3. Tất cả Rules có CLEAR Format
**Yêu cầu:** 4 rules, mỗi rule đạt: Concise, Literal, Exhaustive, Actionable, Ranked
**Checklist:**
- ☐ brand-voice: C☐ L☐ E☐ A☐ R☐
- ☐ content-quality: C☐ L☐ E☐ A☐ R☐
- ☐ visual-standards: C☐ L☐ E☐ A☐ R☐
- ☐ approval-policy: C☐ L☐ E☐ A☐ R☐
**Status:** ☐ Pass / ☐ Fail

### ☐ 4. Tất cả Workflows có OIPO + Human Checkpoint
**Yêu cầu:** 3 workflows, mỗi workflow có: Overview, Input, Process, Output + Human CP
**Checklist:**
- ☐ content-creation-flow: O☐ I☐ P☐ O☐ HC☐
- ☐ approval-pipeline-flow: O☐ I☐ P☐ O☐ HC☐
- ☐ full-pipeline-flow: O☐ I☐ P☐ O☐ HC☐
**Status:** ☐ Pass / ☐ Fail

### ☐ 5. PDCA Log có ≥ 4 Iterations
**Yêu cầu:** Mỗi iteration có: Plan, Do, Check, Act
**Checklist:**
- ☐ Iteration 1: (từ buổi 3-4)
- ☐ Iteration 2: (từ buổi 5-8)
- ☐ Iteration 3: Integration Test Round 1 (buổi 11)
- ☐ Iteration 4: Fixes & Re-test (buổi 11)
**Status:** ☐ Pass / ☐ Fail

### ☐ 6. Presentation Outline Hoàn chỉnh
**Yêu cầu:** 7 slides, mỗi slide có nội dung cụ thể
**Checklist:**
- ☐ Slide 1: Giới thiệu (có tên, mục tiêu)
- ☐ Slide 2: Vấn đề (có số liệu)
- ☐ Slide 3: SCOPE (5 sections)
- ☐ Slide 4: Architecture (có diagram)
- ☐ Slide 5: Demo plan (3 requests cụ thể)
- ☐ Slide 6: Metrics (có before/after)
- ☐ Slide 7: Bài học (3 lessons cụ thể)
**Status:** ☐ Pass / ☐ Fail

---

## Tổng kết

| # | Criterion | Status |
|---|-----------|--------|
| 1 | End-to-End | ☐ |
| 2 | MICRO Skills | ☐ |
| 3 | CLEAR Rules | ☐ |
| 4 | OIPO Workflows + HC | ☐ |
| 5 | PDCA ≥ 4 | ☐ |
| 6 | Presentation | ☐ |

**Pass yêu cầu:** ≥ 5/6 criteria pass
**Ready for Demo Day:** ☐ Yes / ☐ No
```

---

## 🚑 3 RESCUE PROMPTS — Khi Workspace Bị Lỗi Cuối Buổi

### 🚑 Rescue Prompt 1: Emergency Workspace Recovery

```
KHẨN CẤP — Workspace của tôi bị lỗi và buổi trình bày sắp đến.
Hãy chạy EMERGENCY RECOVERY:

1. CHECK STRUCTURE:
   - AGENTS.md có ở root không?
   - .agents/skills/ có đủ 6 folders với SKILL.md?
   - .agents/rules/ có đủ 4 .md files?
   - .agents/workflows/ có đủ 3 .md files?
   - knowledge-base/ có đủ 4 .md files?
   - sample-data/ có đủ 5 .csv files?
   - docs/ có đủ files cần thiết?

2. FIX MISSING FILES:
   - Với mỗi file thiếu, tạo file mới với nội dung cơ bản
   - Đảm bảo tất cả skills có MICRO spec
   - Đảm bảo tất cả rules có CLEAR format
   - Đảm bảo tất cả workflows có OIPO + Human Checkpoint

3. QUICK TEST:
   - Chạy 1 request đơn giản qua orchestrator
   - Verify output đúng location
   - Check compliance với rules

4. REPORT:
   - Liệt kê files đã fix/tạo mới
   - Liệt kê issues còn tồn tại
   - Đánh giá: workspace ready for demo? Y/N
```

### 🚑 Rescue Prompt 2: Pipeline Debugger

```
Full pipeline không chạy đúng. Debug giúp tôi:

1. TRACE FLOW:
   - User request → orchestrator nhận đúng không?
   - Orchestrator routing đến đúng skill không?
   - Skill thực thi thành công không?
   - Rules được check không?
   - Human Checkpoint triggered không?
   - Output lưu đúng location không?

2. KIỂM TRA TỪNG BƯỚC:
   - Bước nào FAIL? Error message là gì? Root cause?

3. FIX:
   - Sửa bước bị fail, re-test flow, confirm fix

4. PREVENTION:
   - Thêm error handling nếu thiếu
   - Update debug-backlog.md

Bắt đầu từ bước 1 và trace toàn bộ flow.
```

### 🚑 Rescue Prompt 3: Pre-Demo Validation

```
Buổi trình bày là NGÀY MAI. Chạy PRE-DEMO VALIDATION:

1. READINESS CHECK (6 criteria):
   ☐ Workspace chạy end-to-end
   ☐ 6 skills có MICRO spec
   ☐ 4 rules có CLEAR format
   ☐ 3 workflows có OIPO + Human CP
   ☐ PDCA log ≥ 4 iterations
   ☐ Presentation outline hoàn chỉnh

2. DEMO DRY RUN:
   - Chạy 3 requests tôi sẽ demo:
     1. Tạo content (simple)
     2. Health check (show self-healer)
     3. Chain request (show orchestrator)
   - Tất cả chạy OK không?

3. FIX BLOCKER:
   - Issues nào CHẶN demo? Fix ngay issues blocking. Bỏ qua issues minor.

4. FINAL REPORT:
   - ✅ Ready: Liệt kê strengths
   - ⚠️ Risk: Liệt kê weak points
   - 💡 Tips: Mẹo cho demo smooth
   - Backup plan: Nếu live demo fail, show gì?
```

---

## PHẦN 3: WRAP-UP (15 phút)

### Recap buổi 11

**GV tổng kết:**

1. **Workspace Orchestrator:** Meta-skill điều phối, routing logic, chain multiple skills, error handling + compliance check
2. **Full Pipeline:** 8 bước end-to-end, Human Checkpoint BẮT BUỘC, error handling cho mỗi bước, analytics + health check tự động
3. **Integration Testing:** 10 test cases cover tất cả skills, target ≥ 8/10 pass, fail → PDCA → fix → re-test
4. **PDCA Iterations 3 + 4:** Test round 1 + findings, fixes + re-test, total ≥ 4 iterations
5. **Demo Day Prep:** 7-slide presentation outline, 6-criteria readiness checklist, 3 rescue prompts cho emergency

### Preview buổi 12 — Demo Day! 🎉

> "Buổi 12 là NGÀY TRÌNH BÀY. Mỗi nhóm/cá nhân sẽ:
> 1. Trình bày 7 slides (10 phút)
> 2. Demo live workspace (5 phút)
> 3. Q&A (5 phút)
>
> CHUẨN BỊ:
> - Test lại workspace trước buổi 12
> - Chuẩn bị backup screenshots phòng demo fail
> - Practice trình bày 1-2 lần
> - Bring energy! 💪"

---

## 📦 TRẠNG THÁI WORKSPACE CUỐI CÙNG SAU BUỔI 11

```
personal-brand-workspace/              ← WORKSPACE HOÀN CHỈNH! 🎉
├── AGENTS.md
├── .agents/
│   ├── skills/
│   │   ├── content-writer/SKILL.md
│   │   ├── engagement-analyst/SKILL.md
│   │   ├── content-approver/SKILL.md
│   │   ├── brand-auditor/SKILL.md
│   │   ├── self-healer/SKILL.md
│   │   └── workspace-orchestrator/SKILL.md    ← MỚI ✨
│   ├── rules/
│   │   ├── brand-voice.md
│   │   ├── content-quality.md
│   │   ├── visual-standards.md
│   │   └── approval-policy.md
│   └── workflows/
│       ├── content-creation-flow.md
│       ├── approval-pipeline-flow.md
│       └── full-pipeline-flow.md              ← MỚI ✨
├── knowledge-base/
│   ├── brand-profile.md
│   ├── target-audience.md
│   ├── content-pillars.md
│   └── brand-guidelines.md
├── sample-data/
│   ├── social-media-posts.csv
│   ├── monthly-report-data.csv
│   ├── content-calendar.csv
│   ├── engagement-metrics.csv
│   └── audience-feedback.csv
├── outputs/
│   ├── content-drafts/
│   │   ├── draft-001-linkedin-ai-marketing.md
│   │   ├── draft-002-instagram-networking.md
│   │   └── draft-003-tiktok-branding.md
│   └── analytics-reports/
│       └── weekly-engagement-report.md
└── docs/
    ├── workspace-map.md                        ← CẬP NHẬT
    ├── pdca-log.md                             ← 4 iterations ✨
    ├── project-brief.md                        ← HOÀN THIỆN
    ├── handoff-contracts.md
    ├── audit-report.md
    ├── debug-backlog.md
    └── lesson-to-workspace-map.md
```

### Files thay đổi trong buổi 11:

| Thay đổi | File | Loại |
|----------|------|------|
| ✨ MỚI | `.agents/skills/workspace-orchestrator/SKILL.md` | Meta-skill |
| ✨ MỚI | `.agents/workflows/full-pipeline-flow.md` | End-to-end pipeline |
| ✨ MỚI | `outputs/content-drafts/*` | Test outputs |
| ✨ MỚI | `outputs/analytics-reports/*` | Test outputs |
| 🔄 CẬP NHẬT | `docs/pdca-log.md` | +2 iterations (3+4) |
| 🔄 CẬP NHẬT | `docs/workspace-map.md` | Full final state |

---

## 📝 GHI CHÚ CHO GV

### Timing Guide

| Phần | Thời gian | Ghi chú |
|------|-----------|----------|
| Tạo Orchestrator | 10 phút | Show full SKILL.md |
| Tạo Full Pipeline | 5 phút | Show OIPO workflow |
| Demo 5 requests | 10 phút | Quick routing demo |
| Show outputs + PDCA | 5 phút | Quick show |
| **Tổng Demo** | **30 phút** | |
| HV Phase 1: Lắp ráp | 60 phút | Super Prompt → build |
| HV Phase 2: Test | 30 phút | 10 requests test matrix |
| HV Phase 3: PDCA | 15 phút | 2 iterations fix |
| HV Phase 4: Demo Prep | 15 phút | Outline + checklist |
| **Tổng Thực hành** | **120 phút** | |
| Wrap-up | 15 phút | Recap + Preview Demo Day |

### Lỗi HV Hay Gặp

1. **Orchestrator routing sai skill** → Check routing table keywords
2. **Full pipeline thiếu Human Checkpoint** → Mandatory check
3. **Test chỉ pass 5-6/10** → PDCA fix, focus failing tests
4. **Super Prompt không customize** → Nhắc thay {{placeholders}}
5. **Quên PDCA iteration 4** → Nhắc: phải có ≥ 4 iterations
6. **Presentation outline copy-paste** → Phải customize cho workspace riêng

### Câu Hỏi Thường Gặp

| Câu hỏi | Trả lời |
|---------|----------|
| "Orchestrator có phải agent không?" | Trong context này, nó là SKILL (SKILL.md) — acts as coordinator |
| "Sao cần full-pipeline nếu đã có orchestrator?" | Orchestrator = routing logic, Pipeline = process flow |
| "10 test cases có đủ không?" | Đủ cho demo — production cần nhiều hơn |
| "Nếu demo fail thì sao?" | Backup: show screenshots + explain architecture |

### Hành trình HV qua 11 buổi

```
Buổi 1:  Biết workspace là gì
Buổi 2:  Chạy PDCA đầu tiên
Buổi 3:  Tạo skill đầu tiên
Buổi 4:  Tạo workflow đầu tiên
Buổi 5:  Tạo agent/skill chuyên sâu
Buổi 6:  Thêm knowledge + rules
Buổi 7:  Handoff + human checkpoint
Buổi 8:  Audit + organization
Buổi 9:  Debug + self-healing
Buổi 10: SCOPE architecture design
Buổi 11: Lắp ráp + test hoàn chỉnh  ← BẠN ĐANG Ở ĐÂY!
Buổi 12: Demo Day! 🎉
```

---

**KẾT THÚC SESSION 11**

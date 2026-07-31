# SESSION 09 — Debugging & Self-Healing

> **Thời lượng:** 3 giờ (Demo 45 phút + Thực hành 60 phút + Wrap-up 15 phút)  
> **Mục tiêu:** Học viên nắm quy trình DAHV để debug workspace, tạo self-healer skill  
> **Chuẩn bị:** GV chuẩn bị 3 file lỗi trước buổi học  
> **Workspace:** GV trên Workspace A (đã hoàn chỉnh) | HV trên Workspace B (của mình)

---

## 📋 TRẠNG THÁI WORKSPACE KHI VÀO BUỔI 9

HV đã xây dựng workspace qua 8 buổi trước:

```
personal-brand-workspace/
├── AGENTS.md
├── .agents/
│   ├── skills/
│   │   ├── content-writer/SKILL.md
│   │   ├── engagement-analyst/SKILL.md
│   │   ├── content-approver/SKILL.md
│   │   └── brand-auditor/SKILL.md
│   ├── rules/
│   │   ├── brand-voice.md
│   │   ├── content-quality.md
│   │   ├── visual-standards.md
│   │   └── approval-policy.md
│   └── workflows/
│       ├── content-creation-flow.md
│       └── approval-pipeline-flow.md
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
│   └── analytics-reports/
└── docs/
    ├── workspace-map.md
    ├── pdca-log.md              ← 2 iterations
    ├── handoff-contracts.md
    ├── audit-report.md
    └── lesson-to-workspace-map.md
```

---

## PHẦN 1: DEMO — GV THỰC HIỆN (45 phút)

### 🎯 Mục tiêu Demo

GV sẽ **phá workspace có chủ đích** với 3 bugs phổ biến, sau đó hướng dẫn quy trình DAHV (Detect → Analyze → Heal → Verify) để debug từng lỗi.

> 💡 **Mẹo GV:** Mở workspace bị phá trên Workspace A. KHÔNG cho HV biết trước có bao nhiêu bug — để họ tự phát hiện.

---

### BƯỚC 0: Chuẩn bị Workspace Bị Phá [5 phút]

GV thay thế 3 file trong workspace bằng các phiên bản bị lỗi:

#### 📄 FILE LỖI #1: `sample-data/broken-content-calendar.csv`

Thay file `content-calendar.csv` bằng file này:

```csv
post_id,scheduled_date,platform,content_type,title,status,author
PB-001,2025-03-15,LinkedIn,article,"AI và tương lai Marketing",published,Minh
PB-002,tuần sau,Facebook,image_post,"Tips Personal Branding",draft,Minh
PB-003,2025-03-17,Instagram,carousel,"5 bước xây dựng thương hiệu",published,Minh
PB-004,ngày mai,LinkedIn,text_post,"Lessons learned từ startup",draft,Minh
PB-005,2025-03-19,TikTok,short_video,"Day in the life - Marketer",published,Minh
PB-006,cuối tháng,Facebook,,"Tổng kết tháng 3",draft,Minh
PB-007,2025-03-15,LinkedIn,article,"AI và tương lai Marketing",published,Minh
PB-008,2025-03-22,Instagram,reel,"Behind the scenes",scheduled,Minh
PB-009,tuần sau,LinkedIn,article,"Data-driven Marketing 2025",draft,Minh
PB-010,,Facebook,image_post,"Motivation Monday",draft,Minh
PB-011,2025-03-25,YouTube,long_video,"Workshop: Personal Brand",scheduled,Minh
PB-012,ngày mai,TikTok,short_video,"Quick tip: Networking",draft,Minh
PB-013,2025-03-17,Instagram,carousel,"5 bước xây dựng thương hiệu",published,Minh
PB-014,2025-03-28,LinkedIn,text_post,"Reflection: Q1 2025",scheduled,Minh
PB-015,tháng sau,Facebook,video,"Live Q&A Session",planned,
PB-016,2025-04-01,Instagram,story,"April Goals",planned,Minh
PB-017,cuối tháng,LinkedIn,article,"Remote Work Culture",draft,Minh
PB-018,2025-03-19,TikTok,short_video,"Day in the life - Marketer",published,Minh
```

**Các lỗi trong file này:**
- ❌ Ngày mơ hồ: `tuần sau` (PB-002, PB-009), `ngày mai` (PB-004, PB-012), `cuối tháng` (PB-006, PB-017), `tháng sau` (PB-015)
- ❌ Trùng lặp: PB-001 = PB-007, PB-003 = PB-013, PB-005 = PB-018
- ❌ Missing fields: PB-006 thiếu content_type, PB-010 thiếu scheduled_date, PB-015 thiếu author

---

#### 📄 FILE LỖI #2: `.agents/rules/brand-voice-BROKEN.md`

Thay file `brand-voice.md` bằng nội dung này:

```markdown
# Brand Voice Guidelines

## Mục đích
Đảm bảo tất cả nội dung tuân thủ giọng điệu thương hiệu nhất quán.

## Quy tắc Chung

### 1. Tone of Voice
- Chuyên nghiệp nhưng gần gũi
- Tự tin, không kiêu ngạo
- Truyền cảm hứng, tạo giá trị

### 2. Sử dụng Emoji ✨
- LUÔN LUÔN sử dụng emoji trong mọi bài viết
- Tối thiểu 3-5 emoji mỗi đoạn văn
- Emoji giúp tạo sự thân thiện và kết nối với người đọc
- Đặc biệt dùng nhiều emoji trên Facebook và Instagram
- Emoji thể hiện cá tính thương hiệu, tạo sự khác biệt
- Luôn bắt đầu và kết thúc bài viết bằng emoji

### 3. Ngôn ngữ
- Dùng tiếng Việt là chính
- Thuật ngữ chuyên ngành giữ nguyên tiếng Anh
- Tránh jargon quá phức tạp

### 4. Cấu trúc Bài viết
- Hook mạnh ở câu đầu tiên
- Chia đoạn ngắn (2-3 câu/đoạn)
- Kết thúc bằng CTA rõ ràng

### 5. Quy tắc Format Chuyên nghiệp
- KHÔNG BAO GIỜ sử dụng emoji trong bất kỳ nội dung nào
- Giữ format thuần text, chuyên nghiệp tuyệt đối
- Emoji làm giảm tính chuyên nghiệp của thương hiệu
- Thương hiệu cá nhân cần nghiêm túc, không dùng biểu tượng cảm xúc
- Mọi platform đều áp dụng quy tắc NO EMOJI
- Vi phạm quy tắc này = reject bài viết ngay lập tức

### 6. Hashtag
- LinkedIn: 3-5 hashtags
- Instagram: 15-20 hashtags
- Facebook: 1-3 hashtags
- TikTok: 4-6 hashtags
```

**Lỗi trong file này:**
- ❌ CONFLICT: Mục 2 nói "LUÔN LUÔN sử dụng emoji" vs Mục 5 nói "KHÔNG BAO GIỜ sử dụng emoji"
- ❌ AI sẽ bị confused và cho output không nhất quán

---

#### 📄 FILE LỖI #3: `.agents/workflows/approval-pipeline-flow-BROKEN.md`

Thay file `approval-pipeline-flow.md` bằng nội dung này:

```markdown
# Approval Pipeline Flow

## Mục đích
Quy trình duyệt nội dung trước khi xuất bản.

## OIPO Specification

### Overview
Pipeline tự động duyệt và xuất bản nội dung.

### Input
- Bài viết draft từ content-writer
- Metadata: platform, content_type, scheduled_date

### Process

**Bước 1: Nhận Draft**
- Đọc file draft từ outputs/content-drafts/
- Kiểm tra metadata đầy đủ

**Bước 2: AI Quality Check**
- Chạy content-approver skill
- Kiểm tra brand voice compliance
- Kiểm tra content quality standards
- Cho điểm quality score (1-10)

**Bước 3: Auto-Publish**
- Nếu quality score >= 7: TỰ ĐỘNG xuất bản
- Nếu quality score < 7: gửi về content-writer để sửa
- Ghi log vào outputs/publish-log.csv

### Output
- Bài viết đã xuất bản hoặc feedback để sửa
- Publish log entry
```

**Lỗi trong file này:**
- ❌ THIẾU Human Checkpoint: Bước 3 đi thẳng từ AI check → Auto-Publish
- ❌ Không có bước "Human Review" — con người không được duyệt trước khi xuất bản
- ❌ Rủi ro: AI tự quyết định xuất bản nội dung mà không ai kiểm tra

---

### BƯỚC 1: DETECT — Phát hiện lỗi [10 phút]

> 💡 **Mẹo GV:** Bắt đầu bằng câu hỏi "Workspace có vẻ hoạt động bình thường, nhưng có gì đó sai... Làm sao để biết?"

📋 **Prompt phát hiện lỗi tổng quát — Copy & Paste:**

```
Hãy đóng vai Workspace Health Inspector. Kiểm tra TOÀN BỘ workspace của tôi và tìm tất cả các vấn đề:

1. KIỂM TRA DATA (sample-data/):
   - File CSV nào có ngày không hợp lệ? (ví dụ: 'tuần sau', 'ngày mai' thay vì YYYY-MM-DD)
   - Có rows nào bị trùng lặp không?
   - Có fields nào bị thiếu (empty/null) không?

2. KIỂM TRA RULES (.agents/rules/):
   - Đọc TẤT CẢ rule files
   - Có rule nào CONFLICT với nhau không? (nói A ở chỗ này, nói ngược lại ở chỗ khác)
   - Có rule nào mơ hồ, không rõ ràng không?

3. KIỂM TRA WORKFLOWS (.agents/workflows/):
   - Có workflow nào THIẾU Human Checkpoint không?
   - Có bước nào cho AI tự quyết mà không cần human approval?
   - Tất cả workflows có OIPO đầy đủ không?

Với MỖI vấn đề tìm thấy, trả lời:
- 📍 File: [đường dẫn]
- 🔴 Severity: Critical / Warning / Info
- 📝 Mô tả: [chi tiết vấn đề]
- 💡 Gợi ý sửa: [hướng xử lý]

Bắt đầu kiểm tra ngay.
```

**📊 Expected Output (GV hiển thị cho HV thấy):**

```
🔍 WORKSPACE HEALTH REPORT
══════════════════════════

📊 Tổng quan: Phát hiện 3 VẤN ĐỀ NGHIÊM TRỌNG

─── VẤN ĐỀ #1: DATA QUALITY ───
📍 File: sample-data/content-calendar.csv
🔴 Severity: CRITICAL
📝 Mô tả:
  - 7 rows có ngày không hợp lệ (tuần sau, ngày mai, cuối tháng, tháng sau)
  - 3 cặp rows bị trùng lặp (PB-001=PB-007, PB-003=PB-013, PB-005=PB-018)
  - 3 rows thiếu fields (PB-006 thiếu content_type, PB-010 thiếu date, PB-015 thiếu author)
💡 Gợi ý: Thay thế ngày mơ hồ bằng dates cụ thể, xóa duplicates, bổ sung missing fields

─── VẤN ĐỀ #2: RULE CONFLICT ───
📍 File: .agents/rules/brand-voice.md
🔴 Severity: CRITICAL
📝 Mô tả:
  - Mục 2 "Sử dụng Emoji" yêu cầu LUÔN dùng emoji (3-5/đoạn)
  - Mục 5 "Format Chuyên nghiệp" yêu cầu KHÔNG BAO GIỜ dùng emoji
  → AI sẽ cho output KHÔNG NHẤT QUÁN
💡 Gợi ý: Chọn MỘT chiến lược emoji nhất quán, xóa rule conflict

─── VẤN ĐỀ #3: MISSING HUMAN CHECKPOINT ───
📍 File: .agents/workflows/approval-pipeline-flow.md
🔴 Severity: CRITICAL
📝 Mô tả:
  - Bước 3 cho AI tự động publish nếu score >= 7
  - KHÔNG CÓ bước Human Review trước khi xuất bản
  → Rủi ro: Nội dung sai có thể được tự động xuất bản
💡 Gợi ý: Thêm bước Human Approval giữa AI Check và Publish
```

> ✅ **Checkpoint:** HV thấy 3 bugs được phát hiện. GV hỏi: "Theo các bạn, bug nào nguy hiểm nhất? Tại sao?"

---

### BƯỚC 2: ANALYZE — Phân tích Root Cause [10 phút]

> 💡 **Mẹo GV:** Nhấn mạnh rằng ANALYZE là bước quan trọng nhất — không vội fix mà phải hiểu TẠI SAO lỗi xảy ra.

#### Phân tích Bug 1: Data Quality

📋 **Prompt Root Cause Analysis — Bug 1:**

```
Phân tích ROOT CAUSE cho vấn đề data quality trong sample-data/content-calendar.csv:

1. TẠI SAO có ngày mơ hồ như 'tuần sau', 'ngày mai'?
   - Nguyên nhân gốc là gì? (input process? thiếu validation? copy từ đâu?)
   
2. TẠI SAO có rows trùng lặp?
   - Do append mà không check duplicate? Do import sai?
   
3. TẠI SAO có fields bị thiếu?
   - Do template không bắt buộc? Do copy-paste lỗi?

Với MỖI root cause, đề xuất:
- Prevention: Làm sao để NGĂN lỗi này tái phát?
- Detection: Làm sao để PHÁT HIỆN sớm nếu lỗi xảy ra lần nữa?
```

**📊 Expected Analysis Output:**

```
🔬 ROOT CAUSE ANALYSIS — Bug 1: Data Quality

1. Ngày mơ hồ:
   → Root Cause: Người nhập liệu dùng ngôn ngữ tự nhiên thay vì format chuẩn
   → Prevention: Thêm validation rule yêu cầu format YYYY-MM-DD
   → Detection: Thêm check trong self-healer skill

2. Rows trùng lặp:
   → Root Cause: Append data mới mà không check trùng với data cũ
   → Prevention: Check unique constraint trên post_id trước khi thêm
   → Detection: Chạy duplicate check định kỳ

3. Fields thiếu:
   → Root Cause: CSV template không enforce required fields
   → Prevention: Định nghĩa required fields trong schema
   → Detection: Validate completeness khi import
```

#### Phân tích Bug 2: Rule Conflict

📋 **Prompt Root Cause Analysis — Bug 2:**

```
Phân tích ROOT CAUSE cho rule conflict trong .agents/rules/brand-voice.md:

1. TẠI SAO cùng một file có 2 quy tắc TRÁI NGƯỢC nhau?
   - Có phải do nhiều người viết rule khác nhau?
   - Có phải do copy-paste từ template mà không review?
   - Có phải do update rule mới mà quên xóa rule cũ?

2. KHI NÀO conflict này gây hại?
   - AI sẽ xử lý thế nào khi gặp 2 rules trái ngược?
   - Output sẽ bị ảnh hưởng ra sao?

3. IMPACT ASSESSMENT:
   - Bao nhiêu bài viết đã tạo có thể bị ảnh hưởng?
   - Rules nào khác có thể có conflict tương tự?
```

#### Phân tích Bug 3: Missing Human Checkpoint

📋 **Prompt Root Cause Analysis — Bug 3:**

```
Phân tích ROOT CAUSE cho thiếu Human Checkpoint trong approval-pipeline-flow.md:

1. TẠI SAO workflow cho phép auto-publish mà không cần human review?
   - Thiết kế ban đầu có human step không? Bị xóa khi nào?
   - Ai quyết định bỏ human review?

2. RỦI RO CỤ THỂ:
   - Liệt kê 3-5 scenario xấu có thể xảy ra khi AI tự publish
   - Ví dụ: AI publish nội dung sai facts, không đúng brand voice...

3. SO SÁNH:
   - Workflow CÓ human checkpoint vs KHÔNG CÓ — khác gì?
   - Tốc độ vs An toàn — trade-off thế nào?
```

> ✅ **Checkpoint:** GV hỏi: "Root cause analysis cho chúng ta insight gì? Có bug nào liên quan đến nhau không?"

---

### BƯỚC 3: HEAL — Sửa từng Bug [15 phút]

> 💡 **Mẹo GV:** Fix theo thứ tự severity — Critical trước.

#### Fix Bug 1: Data Quality

📋 **Prompt Fix Bug 1 — Copy & Paste:**

```
Sửa file sample-data/content-calendar.csv:

1. Thay thế TẤT CẢ ngày mơ hồ bằng dates cụ thể:
   - 'tuần sau' → ngày thứ Hai tuần tới (tính từ 2025-03-15)
   - 'ngày mai' → ngày tiếp theo (tính từ 2025-03-15)
   - 'cuối tháng' → 2025-03-31
   - 'tháng sau' → 2025-04-15

2. Xóa rows trùng lặp, giữ row ĐẦU TIÊN:
   - PB-007 trùng PB-001 → xóa PB-007
   - PB-013 trùng PB-003 → xóa PB-013
   - PB-018 trùng PB-005 → xóa PB-018

3. Bổ sung fields thiếu:
   - PB-006: thêm content_type = 'video'
   - PB-010: thêm scheduled_date = '2025-03-24'
   - PB-015: thêm author = 'Minh'

Xuất lại file CSV hoàn chỉnh, sạch, không có lỗi.
```

**📊 Expected Fixed CSV:**

```csv
post_id,scheduled_date,platform,content_type,title,status,author
PB-001,2025-03-15,LinkedIn,article,"AI và tương lai Marketing",published,Minh
PB-002,2025-03-24,Facebook,image_post,"Tips Personal Branding",draft,Minh
PB-003,2025-03-17,Instagram,carousel,"5 bước xây dựng thương hiệu",published,Minh
PB-004,2025-03-16,LinkedIn,text_post,"Lessons learned từ startup",draft,Minh
PB-005,2025-03-19,TikTok,short_video,"Day in the life - Marketer",draft,Minh
PB-006,2025-03-31,Facebook,video,"Tổng kết tháng 3",draft,Minh
PB-008,2025-03-22,Instagram,reel,"Behind the scenes",scheduled,Minh
PB-009,2025-03-24,LinkedIn,article,"Data-driven Marketing 2025",draft,Minh
PB-010,2025-03-24,Facebook,image_post,"Motivation Monday",draft,Minh
PB-011,2025-03-25,YouTube,long_video,"Workshop: Personal Brand",scheduled,Minh
PB-012,2025-03-16,TikTok,short_video,"Quick tip: Networking",draft,Minh
PB-014,2025-03-28,LinkedIn,text_post,"Reflection: Q1 2025",scheduled,Minh
PB-015,2025-04-15,Facebook,video,"Live Q&A Session",planned,Minh
PB-016,2025-04-01,Instagram,story,"April Goals",planned,Minh
```

#### Fix Bug 2: Rule Conflict

📋 **Prompt Fix Bug 2 — Copy & Paste:**

```
Sửa file .agents/rules/brand-voice.md:

XÓA TOÀN BỘ mục 5 "Quy tắc Format Chuyên nghiệp" vì conflict với mục 2.

Thay thế bằng chiến lược EMOJI THỐNG NHẤT:
- LinkedIn: Hạn chế emoji, tối đa 1-2 ở đầu/cuối bài
- Facebook: Dùng emoji vừa phải, 2-3 mỗi bài
- Instagram: Tự do dùng emoji, 3-5 mỗi bài
- TikTok: Dùng emoji trending, 2-4 mỗi bài
- YouTube: Emoji trong title/description, 1-2 mỗi phần

Đảm bảo KHÔNG CÒN conflict nào trong file.
```

**📊 Expected Fixed Rule (đoạn thay thế):**

```markdown
### 5. Chiến lược Emoji theo Platform
- **LinkedIn:** Hạn chế emoji, tối đa 1-2 ở đầu/cuối bài. Ưu tiên chuyên nghiệp.
- **Facebook:** Dùng emoji vừa phải, 2-3 mỗi bài. Tạo sự thân thiện.
- **Instagram:** Tự do hơn, 3-5 mỗi bài. Phù hợp visual platform.
- **TikTok:** Dùng emoji trending, 2-4 mỗi bài. Gần gũi Gen Z.
- **YouTube:** Emoji trong title/description, 1-2 mỗi phần.

> ⚠️ Nguyên tắc: Emoji KHÔNG thay thế nội dung. Chỉ dùng để TĂNG CƯỜNG thông điệp.
```

#### Fix Bug 3: Missing Human Checkpoint

📋 **Prompt Fix Bug 3 — Copy & Paste:**

```
Sửa file .agents/workflows/approval-pipeline-flow.md:

Thêm bước "Human Review" giữa Bước 2 (AI Quality Check) và Bước 3 (Publish):

Bước 2.5: HUMAN REVIEW (BẮT BUỘC)
- Gửi notification cho human reviewer
- Human đọc bài viết + AI quality report
- Human quyết định: APPROVE / REVISE / REJECT
- Chỉ khi human APPROVE mới tiến hành publish
- Nếu REVISE: gửi lại content-writer với feedback
- Nếu REJECT: ghi lý do và archive draft

Cập nhật Bước 3 thành:
- Chỉ publish khi CÓ human approval
- Ghi log ai approve, thời gian approve

Đảm bảo workflow có OIPO đầy đủ.
```

**📊 Expected Fixed Workflow (Bước mới):**

```markdown
**Bước 2.5: Human Review (BẮT BUỘC — HUMAN CHECKPOINT)**
- 🔔 Gửi notification cho human reviewer
- Human đọc bài viết + AI Quality Report
- Human đánh giá:
  - ✅ APPROVE → tiến hành publish (Bước 3)
  - ✏️ REVISE → gửi feedback cho content-writer, quay lại Bước 1
  - ❌ REJECT → ghi lý do vào reject-log.md, archive draft
- ⏱️ SLA: Human review trong vòng 24 giờ
- 📝 Ghi nhận: reviewer_name, review_time, decision

**Bước 3: Publish (CHỈ SAU KHI HUMAN APPROVE)**
- Kiểm tra: Có human approval? → Nếu KHÔNG, dừng lại
- Xuất bản lên platform được chỉ định
- Ghi log: publish_time, platform, approved_by
- Gửi confirmation cho author và reviewer
```

> ✅ **Checkpoint:** GV hỏi: "3 bugs đã fix. Làm sao biết chắc đã fix đúng?"

---

### BƯỚC 4: VERIFY — Xác nhận Fix [5 phút]

📋 **Prompt Verify — Copy & Paste:**

```
Kiểm tra lại TOÀN BỘ workspace sau khi fix 3 bugs:

1. sample-data/content-calendar.csv:
   - Còn ngày mơ hồ nào không?
   - Còn rows trùng lặp nào không?
   - Còn fields thiếu nào không?
   - Tất cả dates có đúng format YYYY-MM-DD không?

2. .agents/rules/brand-voice.md:
   - Còn rule conflict nào không?
   - Chiến lược emoji có nhất quán không?
   - Đọc lại toàn bộ file — có chỗ nào mâu thuẫn?

3. .agents/workflows/approval-pipeline-flow.md:
   - Có Human Checkpoint trước Publish không?
   - Flow có logic không? (mỗi bước có input/output rõ ràng?)
   - OIPO đầy đủ chưa?

Trả lời dạng PASS ✅ hoặc FAIL ❌ cho mỗi check.
```

**📊 Expected Verification Output:**

```
✅ VERIFICATION REPORT
═══════════════════════

📄 content-calendar.csv:
  ✅ PASS — Tất cả 14 dates đúng format YYYY-MM-DD
  ✅ PASS — 0 rows trùng lặp (đã xóa 3 duplicates)
  ✅ PASS — 0 fields thiếu (đã bổ sung 3 missing)

📄 brand-voice.md:
  ✅ PASS — Không còn rule conflict
  ✅ PASS — Chiến lược emoji nhất quán theo platform
  ✅ PASS — Toàn bộ file logic, không mâu thuẫn

📄 approval-pipeline-flow.md:
  ✅ PASS — Human Checkpoint có ở Bước 2.5
  ✅ PASS — Auto-publish đã bị loại bỏ
  ✅ PASS — OIPO đầy đủ: Overview, Input, Process, Output

🎉 KẾT LUẬN: Tất cả 3 bugs đã được fix thành công!
```

---

### BƯỚC 5: STRESS TEST — Thử Edge Cases [5 phút]

> 💡 **Mẹo GV:** Phần này optional, dành cho HV advanced. Nhưng GV nên demo nhanh.

📋 **Prompt Stress Test 1 — Data Edge Cases:**

```
Thử thêm các edge cases vào content-calendar.csv và kiểm tra hệ thống xử lý:

- Ngày trong quá khứ xa: 2020-01-01
- Ngày cuối tuần: Saturday/Sunday (có post vào cuối tuần không?)
- Ngày lễ: 2025-04-30, 2025-05-01 (Lễ 30/4-1/5)
- Title rất dài: 200+ ký tự
- Title có ký tự đặc biệt: quotes, commas, newlines

Hệ thống có handle được không? Nên thêm rule gì?
```

📋 **Prompt Stress Test 2 — Rule Edge Cases:**

```
Kiểm tra xem brand-voice.md xử lý thế nào với các tình huống:

- Bài viết cho platform chưa được liệt kê (Twitter/X, Threads)
- Bài viết bilingual (mix tiếng Việt + tiếng Anh)
- Bài viết dạng thread dài (20+ posts)
- Bài viết crisis communication (xin lỗi, đính chính)

Rules hiện tại có đủ cover không? Thiếu gì?
```

📋 **Prompt Stress Test 3 — Workflow Edge Cases:**

```
Kiểm tra approval-pipeline-flow.md với các tình huống:

- Human reviewer không phản hồi trong 24 giờ → escalation?
- 2 reviewers có ý kiến trái ngược → ai quyết?
- Content urgent (cần publish trong 1 giờ) → skip review?
- Reviewer approve nhưng author muốn sửa thêm → flow thế nào?

Workflow hiện tại handle được mấy tình huống? Cần bổ sung gì?
```

---

### BƯỚC 6: Tạo Self-Healer Skill [5 phút]

📋 **Prompt tạo Self-Healer — Copy & Paste:**

```
Tạo file .agents/skills/self-healer/SKILL.md với nội dung sau.
Đây là skill TỰ ĐỘNG phát hiện và gợi ý sửa lỗi trong workspace.
```

**📄 Nội dung `.agents/skills/self-healer/SKILL.md`:**

```markdown
---
name: self-healer
description: Tự động phát hiện inconsistencies, conflicts, và data quality issues trong workspace. Gợi ý sửa lỗi theo quy trình DAHV.
---

# Self-Healer Skill

## MICRO Specification

### Mission
Phát hiện và gợi ý sửa lỗi tự động trong toàn bộ workspace — bao gồm data quality, rule conflicts, workflow gaps, và knowledge inconsistencies.

### Input
- Đường dẫn workspace hoặc specific files cần kiểm tra
- Loại check: `full` (toàn bộ) | `data` | `rules` | `workflows` | `knowledge`
- Severity filter: `all` | `critical` | `warning`

### Constraints
- KHÔNG tự động sửa file — chỉ GỢI Ý sửa và đợi human confirm
- Giới hạn 50 issues mỗi lần scan
- Timeout: 5 phút cho full scan
- KHÔNG đọc files ngoài workspace

### Return Format
Trả về Diagnostic Report dạng markdown:

🏥 WORKSPACE DIAGNOSTIC REPORT
══════════════════════════════
📅 Scan time: [timestamp]
🔍 Scope: [full/data/rules/workflows/knowledge]

📊 SUMMARY:
- 🔴 Critical: [số lượng]
- 🟡 Warning: [số lượng]
- 🟢 Info: [số lượng]

─── ISSUE #[n] ───
📍 File: [path]
🔴/🟡/🟢 Severity: [level]
📝 Description: [chi tiết]
🔧 Suggested Fix: [gợi ý cụ thể]
📋 Fix Command: [prompt để fix]

─── PREVENTION RECOMMENDATIONS ───
1. [recommendation]
2. [recommendation]

### Output
- File: `docs/debug-backlog.md` — append issues mới
- Console: Diagnostic Report summary
- Nếu có Critical issues: cảnh báo rõ ràng ở đầu report

## Quy trình DAHV tích hợp

### 1. DETECT
- Scan tất cả CSV files cho data quality
- Scan tất cả rule files cho conflicts
- Scan tất cả workflow files cho missing checkpoints
- Scan knowledge-base cho outdated info

### 2. ANALYZE
- Với mỗi issue: xác định root cause
- Phân loại severity (Critical/Warning/Info)
- Tìm dependencies giữa các issues

### 3. HEAL (Suggest)
- Đề xuất fix cụ thể cho mỗi issue
- Tạo prompt copy-paste để human thực hiện fix
- Ước tính effort cho mỗi fix

### 4. VERIFY
- Sau khi human fix, chạy lại scan
- Confirm issue đã resolved
- Update debug-backlog.md

## Checks thực hiện

### Data Quality Checks
- [ ] Date format validation (YYYY-MM-DD)
- [ ] Duplicate detection
- [ ] Required fields completeness
- [ ] Value range validation
- [ ] Encoding consistency (UTF-8)

### Rule Consistency Checks
- [ ] Cross-rule conflict detection
- [ ] Completeness (CLEAR format)
- [ ] Ambiguity detection
- [ ] Platform coverage gaps

### Workflow Integrity Checks
- [ ] Human Checkpoint presence
- [ ] OIPO completeness
- [ ] Dead-end detection (steps with no next)
- [ ] Infinite loop detection

### Knowledge Freshness Checks
- [ ] Last updated date
- [ ] Cross-reference accuracy
- [ ] Broken internal links
```

---

### BƯỚC 7: Tạo Debug Backlog [3 phút]

📋 **Prompt tạo Debug Backlog — Copy & Paste:**

```
Tạo file docs/debug-backlog.md để tracking tất cả bugs phát hiện và trạng thái fix.
```

**📄 Nội dung `docs/debug-backlog.md`:**

```markdown
# Debug Backlog

> Cập nhật lần cuối: {{current_date}}
> Tổng issues: 3 | Fixed: 3 | Open: 0

## Bảng Theo Dõi Bugs

| Bug ID | File | Mô tả | Severity | Status | Fixed Date | Root Cause | Prevention |
|--------|------|--------|----------|--------|------------|------------|------------|
| BUG-001 | sample-data/content-calendar.csv | Ngày mơ hồ, duplicates, missing fields | 🔴 Critical | ✅ Fixed | {{current_date}} | Input không validate format | Thêm date validation rule |
| BUG-002 | .agents/rules/brand-voice.md | Conflict: "LUÔN dùng emoji" vs "KHÔNG dùng emoji" | 🔴 Critical | ✅ Fixed | {{current_date}} | Nhiều người edit, không review | Single-owner cho mỗi rule file |
| BUG-003 | .agents/workflows/approval-pipeline-flow.md | Thiếu Human Checkpoint, AI auto-publish | 🔴 Critical | ✅ Fixed | {{current_date}} | Copy template thiếu security step | Mandatory checkpoint checklist |

## Lessons Learned

1. **Data validation phải ở đầu pipeline** — Garbage in = Garbage out
2. **Rule files cần single owner** — Tránh nhiều người edit gây conflict
3. **Human Checkpoint là BẮT BUỘC** — AI không được tự quyết publish
4. **Regular health checks** — Chạy self-healer hàng tuần
5. **Root cause > Quick fix** — Hiểu tại sao trước khi sửa

## Schedule Kiểm Tra

| Tần suất | Check | Tool |
|----------|-------|------|
| Mỗi ngày | Data quality | self-healer (data mode) |
| Mỗi tuần | Rule consistency | self-healer (rules mode) |
| Mỗi 2 tuần | Full workspace | self-healer (full mode) |
| Sau mỗi thay đổi lớn | Targeted check | self-healer (specific files) |
```

> ✅ **Checkpoint cuối Demo:** GV recap quy trình DAHV và show workspace state sau khi fix.

---

## PHẦN 2: THỰC HÀNH — HV TỰ LÀM (60 phút)

### 📋 Hướng dẫn cho HV

> ⚠️ **Lưu ý quan trọng:** HV làm trên Workspace B (workspace CỦA MÌNH). GV gửi 3 file lỗi, HV thay vào workspace mình.

### Bước 1: Nhận và Thay File Lỗi [5 phút]

**GV gửi cho HV 3 file lỗi (qua chat/email/shared folder):**
1. `broken-content-calendar.csv` → thay vào `sample-data/content-calendar.csv`
2. `brand-voice-BROKEN.md` → thay vào `.agents/rules/brand-voice.md`
3. `approval-pipeline-flow-BROKEN.md` → thay vào `.agents/workflows/approval-pipeline-flow.md`

> 💡 **Mẹo GV:** Nhắc HV backup file gốc trước khi thay: "Copy file cũ sang file-BACKUP trước khi thay file lỗi."

### Bước 2: Chạy DETECT [10 phút]

📋 **Prompt cho HV — Copy & Paste:**

```
Bạn là Workspace Health Inspector. Hãy kiểm tra TOÀN BỘ workspace của tôi:

1. Kiểm tra tất cả CSV files trong sample-data/ — tìm data quality issues
2. Kiểm tra tất cả rule files trong .agents/rules/ — tìm conflicts
3. Kiểm tra tất cả workflow files trong .agents/workflows/ — tìm missing steps

Báo cáo TỪNG vấn đề với format:
- File: [path]
- Severity: Critical/Warning/Info
- Mô tả: [chi tiết]
- Gợi ý sửa: [hướng xử lý]
```

**✅ Expected:** HV phải tìm ra ÍT NHẤT 3 bugs.

### Bước 3: Chạy ANALYZE [10 phút]

📋 **Prompt cho HV:**

```
Với mỗi bug vừa phát hiện, phân tích:
- ROOT CAUSE: Tại sao lỗi này xảy ra?
- IMPACT: Nếu không fix, hậu quả gì?
- PREVENTION: Làm sao ngăn lỗi tái phát?
```

### Bước 4: Chạy HEAL [15 phút]

HV tự viết prompt fix cho TỪNG bug dựa trên mẫu GV đã demo.

> ⚠️ **Lưu ý:** HV có thể có bugs KHÁC với GV nếu workspace của họ khác. Đó là bình thường — quan trọng là QUY TRÌNH, không phải bugs cụ thể.

### Bước 5: Chạy VERIFY [5 phút]

📋 **Prompt cho HV:**

```
Chạy lại health check toàn bộ workspace.
So sánh kết quả với lần check đầu tiên.
Tất cả bugs đã fix chưa? Có bug mới nào xuất hiện không?
```

### Bước 6: Tạo Self-Healer Skill [10 phút]

📋 **Prompt cho HV — Copy & Paste:**

```
Tạo file .agents/skills/self-healer/SKILL.md cho workspace của tôi.

Yêu cầu:
- MICRO spec format (Mission, Input, Constraints, Return format, Output)
- Tích hợp quy trình DAHV
- Checks: data quality, rule consistency, workflow integrity, knowledge freshness
- Output format: Diagnostic Report markdown
- KHÔNG tự động fix — chỉ gợi ý và đợi human confirm

Tham khảo workspace hiện tại của tôi để customize checks phù hợp.
```

### Bước 7: Tạo Debug Backlog [5 phút]

📋 **Prompt cho HV — Copy & Paste:**

```
Tạo file docs/debug-backlog.md với:
- Bảng tracking: Bug ID, File, Mô tả, Severity, Status, Fixed Date, Root Cause, Prevention
- Điền 3 bugs vừa fix
- Thêm section Lessons Learned
- Thêm schedule kiểm tra định kỳ
```

---

## 🚑 3 RESCUE PROMPTS — Khi Workspace Bị Lỗi

> Dùng khi HV gặp khó khăn hoặc workspace bị lỗi ngoài dự kiến.

### 🚑 Rescue Prompt 1: Workspace Health Check Tổng Quát

```
KHẨN CẤP — Workspace của tôi có vấn đề. Hãy chạy FULL HEALTH CHECK:

1. Đọc AGENTS.md — có đúng format và reference đúng skills/rules không?
2. Kiểm tra TẤT CẢ files trong .agents/skills/ — mỗi skill có SKILL.md với MICRO spec?
3. Kiểm tra TẤT CẢ files trong .agents/rules/ — có conflict giữa các rules?
4. Kiểm tra TẤT CẢ files trong .agents/workflows/ — có Human Checkpoint?
5. Kiểm tra TẤT CẢ files trong sample-data/ — data quality OK?
6. Kiểm tra TẤT CẢ files trong knowledge-base/ — thông tin nhất quán?

Báo cáo dạng:
✅ PASS hoặc ❌ FAIL cho mỗi kiểm tra.
Với mỗi FAIL: mô tả chi tiết + cách fix.
```

### 🚑 Rescue Prompt 2: Rule Conflict Detector

```
Đọc TẤT CẢ rule files trong .agents/rules/ và kiểm tra:

1. Có 2 rules nào NÓI NGƯỢC nhau không?
   - Ví dụ: Rule A nói "luôn làm X" nhưng Rule B nói "không bao giờ làm X"

2. Có rules nào MƠ HỒ không?
   - Ví dụ: "viết ngắn gọn" nhưng không nói bao nhiêu từ là ngắn

3. Có rules nào THIẾU platform coverage không?
   - Ví dụ: Chỉ nói về LinkedIn mà không nói về Facebook

4. So sánh rules với knowledge-base/brand-guidelines.md:
   - Rules có NHẤT QUÁN với brand guidelines không?

Với mỗi vấn đề: chỉ rõ FILE, DÒNG, và GỢI Ý SỬA.
```

### 🚑 Rescue Prompt 3: Data Quality Validator

```
Kiểm tra TOÀN BỘ CSV files trong sample-data/:

1. FORMAT CHECK:
   - Headers có nhất quán giữa các files không?
   - Encoding có phải UTF-8 không?
   - Delimiter có phải comma không?

2. VALUE CHECK:
   - Dates: tất cả đúng format YYYY-MM-DD? Có 'tuần sau', 'ngày mai'?
   - Required fields: có cells trống trong cột bắt buộc?
   - Duplicates: có rows trùng nhau?

3. CROSS-FILE CHECK:
   - post_id có nhất quán giữa content-calendar.csv và social-media-posts.csv?
   - Dates trong calendar có match với engagement-metrics.csv?

4. SCHEMA CHECK:
   - Mỗi CSV có bao nhiêu columns?
   - Column names có consistent không?

Output: Data Quality Report với PASS/FAIL cho mỗi check.
```

---

## PHẦN 3: WRAP-UP (15 phút)

### Recap buổi 9

**GV tổng kết:**

1. **DAHV Process:**
   - **D**etect: Chạy health check tổng quát
   - **A**nalyze: Root cause analysis — HIỂU trước khi SỬA
   - **H**eal: Fix có hệ thống, theo thứ tự severity
   - **V**erify: Confirm fix bằng cách chạy lại check

2. **3 Loại Bug Phổ Biến:**
   - Data Quality (ngày mơ hồ, duplicates, missing fields)
   - Rule Conflict (2 rules nói ngược nhau)
   - Missing Human Checkpoint (AI tự quyết)

3. **Self-Healer Skill:**
   - Tự động phát hiện vấn đề
   - GỢI Ý sửa — KHÔNG tự sửa
   - Chạy định kỳ để prevention

4. **Debug Backlog:**
   - Tracking tool cho tất cả bugs
   - Lessons learned từ mỗi bug
   - Prevention schedule

### Preview buổi 10

> "Buổi 10 chúng ta sẽ 'zoom out' — nhìn TOÀN BỘ workspace như một kiến trúc sư. Dùng SCOPE framework để thiết kế hệ thống hoàn chỉnh trước khi lắp ráp ở buổi 11."

---

## 📦 TRẠNG THÁI WORKSPACE SAU BUỔI 9

```
personal-brand-workspace/
├── AGENTS.md
├── .agents/
│   ├── skills/
│   │   ├── content-writer/SKILL.md
│   │   ├── engagement-analyst/SKILL.md
│   │   ├── content-approver/SKILL.md
│   │   ├── brand-auditor/SKILL.md
│   │   └── self-healer/SKILL.md           ← MỚI ✨
│   ├── rules/
│   │   ├── brand-voice.md                  ← ĐÃ FIX 🔧
│   │   ├── content-quality.md
│   │   ├── visual-standards.md
│   │   └── approval-policy.md
│   └── workflows/
│       ├── content-creation-flow.md
│       └── approval-pipeline-flow.md       ← ĐÃ FIX 🔧
├── knowledge-base/
│   ├── brand-profile.md
│   ├── target-audience.md
│   ├── content-pillars.md
│   └── brand-guidelines.md
├── sample-data/
│   ├── social-media-posts.csv
│   ├── monthly-report-data.csv
│   ├── content-calendar.csv                ← ĐÃ FIX 🔧
│   ├── engagement-metrics.csv
│   └── audience-feedback.csv
├── outputs/
│   ├── content-drafts/
│   └── analytics-reports/
└── docs/
    ├── workspace-map.md
    ├── pdca-log.md                         ← 2 iterations
    ├── handoff-contracts.md
    ├── audit-report.md
    ├── debug-backlog.md                    ← MỚI ✨
    └── lesson-to-workspace-map.md
```

### Files thay đổi trong buổi 9:

| Thay đổi | File | Loại |
|----------|------|------|
| ✨ MỚI | `.agents/skills/self-healer/SKILL.md` | Skill mới |
| ✨ MỚI | `docs/debug-backlog.md` | Documentation |
| 🔧 FIX | `sample-data/content-calendar.csv` | Data fix |
| 🔧 FIX | `.agents/rules/brand-voice.md` | Rule fix |
| 🔧 FIX | `.agents/workflows/approval-pipeline-flow.md` | Workflow fix |

---

## 📝 GHI CHÚ CHO GV

### Timing Guide

| Phần | Thời gian | Ghi chú |
|------|-----------|----------|
| Chuẩn bị workspace bị phá | 5 phút | Đã chuẩn bị trước, chỉ show |
| DETECT | 10 phút | Cho HV đoán trước |
| ANALYZE | 10 phút | Nhấn mạnh root cause |
| HEAL | 15 phút | Demo fix từng bug |
| VERIFY + STRESS TEST | 5 phút | Quick check |
| Self-Healer + Debug Backlog | 5 phút | Show nhanh |
| **Tổng Demo** | **45 phút** | |
| HV Thực hành | 60 phút | Circulate hỗ trợ |
| Wrap-up | 15 phút | Recap + Preview |

### Lỗi HV Hay Gặp

1. **Fix triệu chứng, không fix root cause** → Nhắc chạy ANALYZE trước HEAL
2. **Quên VERIFY sau khi fix** → Fix xong phải chạy lại check
3. **Self-healer skill quá đơn giản** → Phải có MICRO spec đầy đủ
4. **Không backup trước khi thay file lỗi** → Nhắc backup trước
5. **Copy prompt nhưng không customize** → Khuyến khích HV tự viết prompt

### Câu Hỏi Thường Gặp

| Câu hỏi | Trả lời |
|---------|----------|
| "Self-healer có tự sửa được không?" | Không — chỉ gợi ý, human quyết |
| "Sao không dùng AI fix tự động?" | Rủi ro: AI có thể fix sai, gây thêm lỗi |
| "Có cần chạy self-healer mỗi ngày?" | Tuỳ — khuyến nghị hàng tuần, hoặc sau mỗi thay đổi lớn |
| "Bug nào nguy hiểm nhất?" | Missing Human Checkpoint — vì AI tự quyết publish |

---

**KẾT THÚC SESSION 09**

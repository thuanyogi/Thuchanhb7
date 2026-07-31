# Buổi 04: OIPO Workflow — Demo & Thực Hành

> **Phase 1 — Operate | Workspace A: `personal-brand-complete/` (GV) | Workspace B: `personal-brand-workspace/` (HV)**
>
> 🏁 **Buổi cuối Phase 1 — Operate**

---

## Tổng quan

| Hạng mục | Chi tiết |
|---|---|
| **Mục tiêu** | HV hiểu framework OIPO, tạo workflow đầu tiên, kết nối skill→workflow |
| **Thời lượng** | Demo 45 phút + Thực hành 60 phút |
| **Artifacts tạo ra** | `.agents/workflows/content-creation-flow.md`, `sample-data/content-calendar.csv`, `docs/pdca-log.md` (iteration 2) |
| **Kết nối trước** | Buổi 3 — Expertise Skill (đã có content-writer skill) |
| **Kết nối sau** | Buổi 5 — Micro Agent (Phase 2 bắt đầu) |

---

## Chuẩn bị trước buổi học

### Giảng viên (GV)
- [ ] Mở workspace `personal-brand-complete/` trong Antigravity
- [ ] Kiểm tra 2 workflows có sẵn: content-creation-flow.md + weekly-scheduler-flow.md
- [ ] Chuẩn bị slide giải thích OIPO framework
- [ ] Test run workflow live → đảm bảo output chính xác
- [ ] In worksheet OIPO cho HV điền trước khi tạo file

### Học viên (HV)
- [ ] Workspace `personal-brand-workspace/` đã hoàn thành Buổi 1-3
- [ ] `.agents/skills/content-writer/SKILL.md` đã tạo
- [ ] `knowledge-base/content-pillars.md` đã tạo
- [ ] Nghĩ trước: "Quy trình tạo content hàng tuần gồm mấy bước?"

---

## PHẦN DEMO — GV (45 phút)

> 🎓 GV demo trên **Workspace A** (`personal-brand-complete/`)
>
> Mục đích: Giải thích OIPO, show workflow hoạt động, tạo workflow thứ 2 live.

### Bước 1: Giải thích OIPO Framework (8 phút)

**⏱ Thời gian:** 0:00 — 0:08

**🎤 Script nói:**
> "3 buổi trước, mỗi lần muốn AI làm gì, các bạn viết 1 prompt. Prompt đơn lẻ giống như gọi taxi — mỗi lần đi đâu phải gọi lại."
>
> "Workflow giống như xe bus có tuyến cố định. Bạn lên xe, nó đi qua từng trạm (bước), và đưa bạn đến đích."
>
> "Framework cho workflow trong Antigravity là OIPO: Objective → Input → Process → Output."

**OIPO Framework:**
```
┌─────────────────────────────────────────────────────────┐
│                    OIPO WORKFLOW                         │
│                                                          │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
│  │ OBJECTIVE│ → │  INPUT   │ → │ PROCESS  │ → │  OUTPUT  │
│  │          │   │          │   │          │   │          │
│  │ Mục tiêu │   │ Dữ liệu │   │ Các bước │   │ Kết quả │
│  │ rõ ràng  │   │ cần đọc  │   │ thực hiện│   │ tạo ra  │
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘
└─────────────────────────────────────────────────────────┘
```

**So sánh Prompt đơn lẻ vs Workflow:**

| Tiêu chí | Prompt đơn lẻ | Workflow OIPO |
|---|---|---|
| Cách dùng | Viết prompt mới mỗi lần | 1 file, chạy nhiều lần |
| Kết quả | Không nhất quán | Nhất quán, chuẩn hóa |
| Tốc độ | Chậm (phải nghĩ prompt) | Nhanh (đã có sẵn) |
| Chất lượng | Phụ thuộc prompt hôm đó | Luôn theo tiêu chuẩn |
| Scalable | Không | Có — chia sẻ, reuse |

**🎤 Script nói:**
> "OIPO giống như SOP (Standard Operating Procedure) cho AI. Công ty nào cũng có SOP cho nhân viên. Workspace cũng cần SOP cho AI."

### Bước 2: Mở workflow mẫu — Giải thích từng section (12 phút)

**⏱ Thời gian:** 0:08 — 0:20

**Hành động:** Mở `.agents/workflows/content-creation-flow.md`

**Nội dung workflow mẫu:**
```markdown
---
name: content-creation-flow
description: Quy trình tạo 5 bài LinkedIn content cho tuần, dựa trên brand profile, content pillars, và target audience.
---

# Content Creation Flow

## Objective (Mục tiêu)
Tạo 5 bài LinkedIn post cho tuần tiếp theo, đảm bảo:
- Mỗi bài từ 1 content pillar khác nhau
- Đúng brand voice và cấu trúc Hook→Story→Insight→CTA
- Có lịch đăng cụ thể (ngày + giờ)
- Tổng thời gian chạy: 1 prompt → 5 bài hoàn chỉnh

## Input (Dữ liệu đầu vào)

| File | Vai trò | Bắt buộc? |
|---|---|---|
| `knowledge-base/brand-profile.md` | Hiểu personality, giọng văn | ✅ Bắt buộc |
| `knowledge-base/target-audience.md` | Biết viết cho ai | ✅ Bắt buộc |
| `knowledge-base/content-pillars.md` | Chọn chủ đề | ✅ Bắt buộc |
| `sample-data/content-calendar.csv` | Xem bài đã đăng, tránh trùng | ⬜ Tùy chọn |

## Process (Quy trình)

### Bước 1: Đọc context
- Đọc brand-profile.md → nắm personality
- Đọc target-audience.md → hiểu pain points
- Đọc content-pillars.md → xem 5 pillars

### Bước 2: Lên kế hoạch tuần
- Chọn 5 chủ đề từ 5 pillars khác nhau
- Phân bổ: 2 Storytelling + 1 How-to + 1 Data Insight + 1 Opinion
- Lên lịch: Thứ 2, 3, 4, 5, 6 — giờ 7:30 sáng

### Bước 3: Viết content (dùng skill content-writer)
- Viết 5 bài theo cấu trúc Hook→Story→Insight→CTA
- Mỗi bài 150-250 từ
- Áp dụng brand voice từ brand-profile

### Bước 4: Review & QC
- Kiểm tra mỗi bài: có hook mạnh không? CTA rõ không?
- Kiểm tra tổng thể: 5 bài có đa dạng chủ đề không?
- Kiểm tra: có trùng chủ đề với bài đã đăng (calendar) không?

## Output (Kết quả)

| Output | Đường dẫn | Format |
|---|---|---|
| Kế hoạch tuần | `outputs/content-drafts/week-plan-[ngày].md` | Markdown |
| 5 bài viết | Trong file kế hoạch tuần | Markdown |
| Gợi ý hashtags | Kèm mỗi bài | 3-5 hashtags/bài |
```

**🎤 Giải thích từng section:**

> **O — Objective:** "Mục tiêu PHẢI cụ thể. '5 bài LinkedIn cho tuần' — rõ ràng, đo được."
>
> **I — Input:** "Bảng input cho AI biết ĐỌC GÌ trước khi làm. File nào bắt buộc, file nào tùy chọn."
>
> **P — Process:** "4 bước tuần tự. Để ý Bước 3 ghi 'dùng skill content-writer' — workflow ĐIỀU PHỐI skill!"
>
> **O — Output:** "Kết quả rõ ràng: file gì, lưu ở đâu, format nào."

**Key insight:**
> "Process Bước 3 dùng 'skill content-writer' — đây là ORCHESTRATION. Workflow không làm mọi thứ, nó GỌI skill khi cần. Giống manager giao việc cho specialist."

### Bước 3: Chạy workflow LIVE (12 phút)

**⏱ Thời gian:** 0:20 — 0:32

**Hành động 1:** Show content-calendar.csv trước

```csv
ngay,chu_de,pillar,format,trang_thai
2024-03-11,5 công cụ AI cho marketer,How-to,Listicle,da_dang
2024-03-13,Câu chuyện thất bại đầu đời,Storytelling,Story,da_dang
2024-03-15,Trend marketing Q2 2024,Data Insight,Analysis,da_dang
2024-03-18,Từ junior lên senior marketing,Career Growth,How-to,da_dang
2024-03-20,AI thay thế marketer?,Industry Opinion,Thought piece,da_dang
```

**🎤 Script nói:**
> "Trước khi chạy workflow, nhìn calendar: 5 bài đã đăng tuần trước. Workflow sẽ đọc calendar để TRÁNH trùng chủ đề."

**Hành động 2:** Chạy workflow

**Prompt mẫu (copy-paste):**
```
Chạy workflow content-creation-flow:

Đọc các file input:
- knowledge-base/brand-profile.md
- knowledge-base/target-audience.md  
- knowledge-base/content-pillars.md
- sample-data/content-calendar.csv

Theo quy trình trong .agents/workflows/content-creation-flow.md:
1. Đọc tất cả context
2. Lên kế hoạch 5 bài cho tuần tới (tránh trùng bài đã đăng)
3. Viết 5 bài theo skill content-writer
4. Review chất lượng

Xuất kết quả vào outputs/content-drafts/week-plan-[ngay].md
```

**Output kỳ vọng:**
```markdown
# Kế Hoạch Content Tuần 25/03 — 29/03

## Tổng quan
- 5 bài LinkedIn post
- Đa dạng 5 pillars
- Tránh trùng: đã check calendar tuần trước

## Lịch đăng

| Ngày | Pillar | Chủ đề | Format |
|---|---|---|---|
| T2 25/03 | Storytelling | Lần đầu quản lý team 10 người | Story |
| T3 26/03 | Data Insight | 3 metric marketing quan trọng nhất | Analysis |
| T4 27/03 | Career Growth | Networking: chất lượng vs số lượng | How-to |
| T5 28/03 | How-to Guide | Content calendar template trong 30 phút | Tutorial |
| T6 29/03 | Industry Opinion | Remote work thay đổi marketing teams | Opinion |

---

## Bài 1: Lần đầu quản lý team 10 người (T2 25/03, 7:30)

🎯 Ngày đầu tiên làm manager, tôi mắc sai lầm ngớ ngẩn nhất career

Năm 2020, tôi được promote lên Marketing Manager. Team 10 người.

Ngày đầu tiên, tôi đến văn phòng sớm 30 phút, soạn email 
"Chào team, từ nay tôi là manager mới..." 

Gửi xong, cả team... im lặng. 😅

Sai lầm: Tôi nghĩ "làm manager" = "announce mình là manager".

Bài học 3 tháng đau thương:
✅ Lead by example, không lead by title
✅ Lắng nghe trước, ra quyết định sau
✅ 1:1 meeting > group email

Kết quả: 6 tháng sau, team performance tăng 45%.
Không phải vì tôi giỏi — mà vì tôi HỌC CÁCH LẮNG NGHE.

Bạn có kinh nghiệm nào khi chuyển từ IC → Manager không? 👇

#Leadership #Marketing #ManagementLessons #PersonalBranding

---

## Bài 2: 3 metric marketing quan trọng nhất (T3 26/03, 7:30)

[... bài 2 đầy đủ ...]

---

## Bài 3-5: [... tương tự ...]
```

**🎤 Script nói:**
> "1 prompt → 5 bài ĐẦY ĐỦ. Workflow đã đọc context, chọn chủ đề, viết content, và review — tất cả trong 1 lần chạy."
>
> "Để ý: workflow dùng skill content-writer (cấu trúc Hook→Story→Insight→CTA) và knowledge base (brand-profile, target-audience). Đó là orchestration."

### Bước 4: Tạo workflow thứ 2 live (8 phút)

**⏱ Thời gian:** 0:32 — 0:40

**🎤 Script nói:**
> "Workspace có thể có NHIỀU workflows. Tôi tạo thêm 1 workflow đơn giản hơn: engagement-review."

**Nội dung workflow thứ 2:**
```markdown
---
name: engagement-review-flow
description: Phân tích engagement tuần vừa qua, so sánh với target, và đề xuất cải thiện.
---

# Engagement Review Flow

## Objective
Đánh giá hiệu quả content tuần vừa qua và đề xuất cải thiện cho tuần tới.

## Input
| File | Vai trò |
|---|---|
| `sample-data/social-media-posts.csv` | Dữ liệu engagement |
| `knowledge-base/target-audience.md` | Benchmark audience preferences |

## Process
1. Đọc social-media-posts.csv — lọc 5 bài gần nhất
2. Tính engagement rate từng bài
3. So sánh với target audience preferences
4. Xác định top performer và bottom performer
5. Rút ra 3 insights + 3 action items

## Output
| Output | Đường dẫn |
|---|---|
| Báo cáo tuần | `outputs/analytics-reports/weekly-review-[ngày].md` |
```

**🎤 Script nói:**
> "Workflow này đơn giản hơn — 5 bước, 2 input files, 1 output. Không phải workflow nào cũng phải phức tạp. Đơn giản + rõ ràng = tốt."

### Bước 5: Wrap-up Phase 1 (5 phút)

**⏱ Thời gian:** 0:40 — 0:45

**🎤 Script nói:**
> "Đây là buổi cuối Phase 1 — Operate. Hãy nhìn lại 4 buổi vừa qua:"

**Phase 1 Progress:**

| Buổi | Chủ đề | Workspace thêm gì | Thành tố |
|---|---|---|---|
| 1 | Tổng quan | brand-profile.md, intro-draft.md | Knowledge, Output |
| 2 | PDCA | target-audience.md, pdca-log | Knowledge, Management |
| 3 | Skill | content-writer/SKILL.md, content-pillars.md | Skill, Knowledge |
| 4 | Workflow | content-creation-flow.md, content-calendar.csv | Workflow, Data |

**Tổng kết Phase 1:**

| Thành tố | Số files | Trạng thái |
|---|---|---|
| Agent (AGENTS.md) | 1 | ✅ Có sẵn |
| Knowledge (knowledge-base/) | 3 | ✅ brand-profile, target-audience, content-pillars |
| Data (sample-data/) | 3 | ✅ social-media-posts, monthly-report, content-calendar |
| Skill (.agents/skills/) | 1 | ✅ content-writer |
| Workflow (.agents/workflows/) | 1 | ✅ content-creation-flow |
| Rules (.agents/rules/) | 0 | ⏳ Phase 2 |
| Output (outputs/) | 5+ | ✅ Nhiều files |

> "Workspace đã có ĐỦ 5/7 thành tố. Rules và thêm skills sẽ đến ở Phase 2."
>
> "🎉 Congratulations! Phase 1 hoàn thành. Các bạn đã có workspace VẬN HÀNH ĐƯỢC."

**Preview Phase 2:**
> "Phase 2 — Modify: Thêm micro agent, rules, knowledge nâng cao, handoff, audit, debug. Workspace sẽ THÔNG MINH HƠN và TỰ KIỂM SOÁT."

---

## PHẦN THỰC HÀNH — HV (60 phút)

> 🎯 HV thực hành trên **Workspace B** (`personal-brand-workspace/` của mình)
>
> Mục đích: Thiết kế OIPO, tạo workflow, chạy workflow, hoàn thành Phase 1.

### Bước 1: Thiết kế OIPO trên giấy (10 phút)

**⏱ Thời gian:** 0:00 — 0:10

**Worksheet OIPO (điền trước khi tạo file):**

```
┌─────────────────────────────────────────┐
│ O — OBJECTIVE (Mục tiêu)               │
│                                         │
│ Workflow này làm gì?                    │
│ _______________________________________│
│                                         │
│ Output cụ thể là gì?                    │
│ _______________________________________│
│                                         │
│ Metric thành công?                      │
│ _______________________________________│
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ I — INPUT (Dữ liệu đầu vào)           │
│                                         │
│ File 1: ___________________  □Bắt buộc │
│ File 2: ___________________  □Tùy chọn │
│ File 3: ___________________  □Tùy chọn │
│ File 4: ___________________  □Tùy chọn │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ P — PROCESS (Các bước thực hiện)       │
│                                         │
│ Bước 1: ______________________________│
│ Bước 2: ______________________________│
│ Bước 3: ______________________________│
│ Bước 4: ______________________________│
│                                         │
│ Skill nào được dùng? _________________ │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ O — OUTPUT (Kết quả)                   │
│                                         │
│ File output: __________________________│
│ Format: _______________________________│
│ Lưu ở: _______________________________│
└─────────────────────────────────────────┘
```

**🎤 GV hướng dẫn:**
> "Điền trên giấy TRƯỚC khi tạo file. Workflow tốt bắt đầu từ thiết kế tốt."
>
> "Thảo luận với bạn bên cạnh: workflow của bạn có logic không?"

**Checklist:**
- [ ] 4 section O-I-P-O đều có nội dung
- [ ] Objective cụ thể, đo được
- [ ] Process có ≥3 bước rõ ràng
- [ ] Process reference skill content-writer
- [ ] Output có đường dẫn file cụ thể

### Bước 2: Tạo workflow file (15 phút)

**⏱ Thời gian:** 0:10 — 0:25

**Bước 1: Tạo thư mục**
```
mkdir -p .agents/workflows/
```

**Bước 2: Tạo file workflow**

**Template (customize từ worksheet):**
```markdown
---
name: content-creation-flow
description: [Tóm tắt 1 câu mục tiêu workflow]
---

# Content Creation Flow

## Objective (Mục tiêu)
[Copy từ worksheet — mục tiêu cụ thể]

Đảm bảo:
- [Tiêu chí 1]
- [Tiêu chí 2]
- [Tiêu chí 3]

## Input (Dữ liệu đầu vào)

| File | Vai trò | Bắt buộc? |
|---|---|---|
| `knowledge-base/brand-profile.md` | Hiểu personality | ✅ |
| `knowledge-base/target-audience.md` | Biết viết cho ai | ✅ |
| `knowledge-base/content-pillars.md` | Chọn chủ đề | ✅ |
| `sample-data/content-calendar.csv` | Tránh trùng | ⬜ |

## Process (Quy trình)

### Bước 1: Đọc context
- Đọc brand-profile → nắm personality
- Đọc target-audience → hiểu pain points
- Đọc content-pillars → xem pillars

### Bước 2: Lên kế hoạch
- Chọn chủ đề từ pillars
- Phân bổ format (storytelling, how-to, v.v.)
- Lên lịch đăng

### Bước 3: Viết content (dùng skill content-writer)
- Viết theo cấu trúc từ skill
- Áp dụng brand voice
- Đảm bảo đúng độ dài

### Bước 4: Review & QC
- Kiểm tra hook, CTA
- Kiểm tra đa dạng chủ đề
- Kiểm tra không trùng bài cũ

## Output (Kết quả)

| Output | Đường dẫn | Format |
|---|---|---|
| Kế hoạch content | `outputs/content-drafts/week-plan.md` | Markdown |
```

**🎤 GV nhắc:**
> "Workflow PHẢI reference skill. Ở Process Bước 3, ghi rõ 'dùng skill content-writer'. Đây là cách workflow ĐIỀU PHỐI skill."
>
> "YAML frontmatter bắt buộc: name + description. Description giúp Antigravity biết workflow này làm gì."

**Checklist:**
- [ ] File `.agents/workflows/content-creation-flow.md` đã tạo
- [ ] Có YAML frontmatter (name + description)
- [ ] Có đủ 4 section O-I-P-O
- [ ] Process reference skill content-writer
- [ ] Input table có ≥2 files

### Bước 3: Tạo content-calendar.csv (10 phút)

**⏱ Thời gian:** 0:25 — 0:35

**Hành động:** Tạo file CSV cho workflow input

**Template:**
```csv
ngay,chu_de,pillar,format,trang_thai
2024-03-11,[chủ đề 1],[pillar 1],[format],da_dang
2024-03-13,[chủ đề 2],[pillar 2],[format],da_dang
2024-03-15,[chủ đề 3],[pillar 3],[format],da_dang
2024-03-18,[chủ đề 4],[pillar 4],[format],da_dang
2024-03-20,[chủ đề 5],[pillar 5],[format],da_dang
```

**Ví dụ đã điền:**
```csv
ngay,chu_de,pillar,format,trang_thai
2024-03-11,Kinh nghiệm phỏng vấn ứng viên Gen Z,Storytelling,Story,da_dang
2024-03-13,3 tool quản lý team hiệu quả nhất 2024,How-to,Listicle,da_dang
2024-03-15,Phân tích: Tại sao 70% startup fail về HR,Data Insight,Analysis,da_dang
2024-03-18,Từ junior HR lên CHRO trong 10 năm,Career Growth,How-to,da_dang
2024-03-20,Remote vs hybrid: Mô hình nào tốt hơn?,Industry Opinion,Opinion,da_dang
```

**Checklist:**
- [ ] File `sample-data/content-calendar.csv` đã tạo
- [ ] Có 5+ entries
- [ ] Mỗi entry có đủ columns
- [ ] Chủ đề đa dạng từ nhiều pillars

### Bước 4: Chạy workflow 2-3 lần (15 phút)

**⏱ Thời gian:** 0:35 — 0:50

**Lần 1 — Chạy cơ bản:**

**Prompt (copy-paste):**
```
Chạy workflow content-creation-flow:

Đọc các file input theo .agents/workflows/content-creation-flow.md:
- knowledge-base/brand-profile.md
- knowledge-base/target-audience.md
- knowledge-base/content-pillars.md
- sample-data/content-calendar.csv

Theo quy trình trong workflow:
1. Đọc context
2. Lên kế hoạch 5 bài cho tuần tới
3. Viết content theo skill content-writer
4. Review chất lượng

Xuất vào outputs/content-drafts/week-plan-v1.md
```

**Lần 2 — Cải thiện (PDCA trên workflow):**

**Prompt (copy-paste):**
```
Đọc lại outputs/content-drafts/week-plan-v1.md.

Đánh giá:
1. Kế hoạch có đa dạng pillar không?
2. Mỗi bài có đúng cấu trúc Hook→Story→Insight→CTA không?
3. Có bài nào quá generic không?

Viết lại version 2 cải thiện các điểm yếu.
Xuất vào outputs/content-drafts/week-plan-v2.md
```

**🎤 GV hướng dẫn:**
> "PDCA áp dụng cho workflow! Chạy lần 1 → Check → Cải thiện → Chạy lần 2. Workflow cũng cần iteration."

**Checklist:**
- [ ] Lần 1: workflow chạy thành công, output tạo ra
- [ ] Lần 2: đã đánh giá + cải thiện
- [ ] Output v2 tốt hơn v1

### Bước 5: Update PDCA log + Phase 1 mini-review (10 phút)

**⏱ Thời gian:** 0:50 — 1:00

**Hành động 1: Ghi PDCA log iteration 2**

**Template:**
```markdown
## Iteration 2 — [ngày hôm nay]

### Plan
**Mục tiêu:** Tạo và chạy workflow content-creation-flow
**Metric:** Workflow chạy thành công, tạo 5 bài content

### Do
- Thiết kế OIPO trên giấy
- Tạo file .agents/workflows/content-creation-flow.md
- Chạy workflow 2 lần (v1 + v2)

### Check
- Workflow chạy thành công: [Đạt/Chưa đạt]
- Output quality: [nhận xét]
- So sánh v1 vs v2: [nhận xét]

### Act
- Bài học: [ghi lại]
- Cải thiện workflow: [gì cần sửa]
- Phase 1 complete: [tự đánh giá]
```

**Hành động 2: Phase 1 mini-review**

**Prompt (copy-paste):**
```
Đọc tất cả files trong workspace:
- AGENTS.md
- .agents/skills/content-writer/SKILL.md
- .agents/workflows/content-creation-flow.md
- knowledge-base/ (tất cả files)
- docs/pdca-log.md

Đánh giá workspace Phase 1:
1. Có đủ 7 thành tố chưa? (liệt kê từng cái)
2. Thành tố nào mạnh nhất?
3. Thành tố nào cần bổ sung?
4. Workspace sẵn sàng cho Phase 2 chưa?

Xuất vào outputs/analytics-reports/phase1-review.md
```

**Checklist:**
- [ ] pdca-log.md đã ghi iteration 2
- [ ] Phase 1 review đã chạy
- [ ] Đọc và hiểu đánh giá workspace

---

## Trạng thái workspace sau buổi này (FULL PHASE 1)

```
personal-brand-workspace/
├── AGENTS.md                              ← có sẵn (Buổi 1)
├── .agents/
│   ├── skills/
│   │   └── content-writer/
│   │       └── SKILL.md                   ← Buổi 3
│   ├── rules/                             ← trống (Phase 2)
│   └── workflows/
│       └── content-creation-flow.md       ← MỚI TẠO ★
├── knowledge-base/
│   ├── brand-profile.md                   ← Buổi 1
│   ├── target-audience.md                 ← Buổi 2
│   └── content-pillars.md                 ← Buổi 3
├── sample-data/
│   ├── social-media-posts.csv             ← có sẵn
│   ├── monthly-report-data.csv            ← có sẵn
│   └── content-calendar.csv              ← MỚI TẠO ★
├── scripts/                               ← trống
├── outputs/
│   ├── content-drafts/
│   │   ├── intro-draft.md                 ← Buổi 1
│   │   ├── improved-post.md               ← Buổi 2
│   │   ├── before-skill-test.md           ← Buổi 3
│   │   ├── after-skill-test.md            ← Buổi 3
│   │   ├── week-plan-v1.md                ← MỚI TẠO ★
│   │   └── week-plan-v2.md                ← MỚI TẠO ★
│   └── analytics-reports/
│       ├── first-analysis.md              ← Buổi 1
│       ├── pdca-analysis.md               ← Buổi 2
│       └── phase1-review.md               ← MỚI TẠO ★
└── docs/
    ├── workspace-map.md                   ← Buổi 1
    ├── pdca-log.md                        ← CẬP NHẬT iteration 2 ★
    └── lesson-to-workspace-map.md         ← có sẵn
```

---

## Phase 1 Summary

| Thành tố | Files | Trạng thái | Buổi tạo |
|---|---|---|---|
| Agent | AGENTS.md | ✅ | Starter kit |
| Knowledge | brand-profile.md, target-audience.md, content-pillars.md | ✅ 3 files | Buổi 1, 2, 3 |
| Data | social-media-posts.csv, monthly-report-data.csv, content-calendar.csv | ✅ 3 files | Starter + Buổi 4 |
| Skill | content-writer/SKILL.md | ✅ 1 skill | Buổi 3 |
| Workflow | content-creation-flow.md | ✅ 1 workflow | Buổi 4 |
| Rules | (trống) | ⏳ Phase 2 | — |
| Output | 8+ files | ✅ | Buổi 1-4 |

---

## Bài tập về nhà

| # | Bài tập | Deadline | File output |
|---|---|---|---|
| 1 | Chạy workflow tạo content cho tuần tới (thực tế) | Trước buổi 5 | `outputs/content-drafts/` |
| 2 | Tạo thêm 1 workflow đơn giản (engagement review) | Trước buổi 5 | `.agents/workflows/` |
| 3 | Update workspace-map.md với tất cả files Phase 1 | Trước buổi 5 | `docs/workspace-map.md` |
| 4 | Đọc trước: "Micro Agent là gì? Agent = Skill nâng cao" | Trước buổi 5 | Không có file |

---

## Checklist hoàn thành

- [ ] `.agents/workflows/content-creation-flow.md` đã tạo (YAML + OIPO)
- [ ] `sample-data/content-calendar.csv` đã tạo (≥5 entries)
- [ ] Workflow đã chạy thành công ít nhất 1 lần
- [ ] Output week-plan đã tạo
- [ ] `docs/pdca-log.md` đã ghi iteration 2
- [ ] Hiểu OIPO framework (O=mục tiêu, I=input, P=process, O=output)
- [ ] Hiểu workflow reference skill (orchestration)
- [ ] Phase 1 review đã chạy
- [ ] Workspace có ≥5/7 thành tố

**Tiêu chí đạt:** ≥ 7/9 checkbox ✅

---

## Kết nối buổi sau

> **Buổi 5: Micro Agent (Phase 2 — Modify bắt đầu)**
>
> Phase 1 xây NỀN TẢNG. Phase 2 làm workspace THÔNG MINH HƠN.
>
> Buổi 5 sẽ tạo Micro Agent — skill nâng cao có khả năng:
> - Tự quyết định dùng tool nào
> - Xử lý nhiều bước phức tạp hơn
> - Tương tác với nhiều knowledge sources
>
> **Mang theo:** Workspace hoàn thành Phase 1. Sẵn sàng upgrade!

---

## Ghi chú giảng viên

### Timing
- Thiết kế OIPO trên giấy (bước 1 thực hành) quan trọng — đừng skip
- Nếu HV chậm tạo workflow file → cho template pre-filled
- Phase 1 wrap-up cần ít nhất 5 phút — đừng rush

### Lỗi thường gặp
1. **Workflow không reference skill:** Process chỉ viết "viết content" → Nhắc: "Ghi rõ 'dùng skill content-writer'"
2. **OIPO thiếu section:** Hay quên Output section → Check 4 sections trước khi tạo file
3. **Workflow quá đơn giản:** Chỉ 1-2 bước → Gợi ý: "Workflow = quy trình, phải ≥3 bước"
4. **CSV format sai:** Header thiếu hoặc sai tên column → Show template chính xác
5. **YAML frontmatter thiếu:** → Nhắc: mỗi file trong .agents/ đều cần YAML

### Backup plan
- Nếu workflow không chạy → check: file đúng path? YAML đúng format? Input files tồn tại?
- Nếu HV quá chậm → skip Bước 5 (PDCA log), tập trung Bước 1-4
- Nếu thời gian dư → cho HV tạo workflow thứ 2

### Điểm nhấn quan trọng
- **OIPO = SOP cho AI** — metaphor dễ nhớ
- **Workflow reference Skill = Orchestration** — đây là "aha moment"
- **1 prompt → nhiều output** — sức mạnh của workflow
- **PDCA áp dụng cho workflow** — v1 → check → v2
- **Phase 1 celebration! 🎉** — đánh dấu milestone, cho HV tự hào về workspace

### Năng lượng lớp học
- Phase 1 wrap-up = moment ăn mừng → celebrate!
- Show Phase 1 progress bar: ████████░░ 80% (thiếu rules)
- Preview Phase 2 tạo hứng khởi cho buổi sau
- Cho HV share workspace tree → so sánh, học hỏi lẫn nhau

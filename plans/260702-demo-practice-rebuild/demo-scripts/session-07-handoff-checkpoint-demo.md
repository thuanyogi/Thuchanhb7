# 🎬 Demo Script — SESSION 07: Handoff & Human Checkpoint

> **Buổi:** 07 / 11  
> **Chủ đề:** Handoff giữa các Skill & Human Checkpoint  
> **Thời lượng:** Demo 45' + Thực hành 60'  
> **Workspace:** GV trên Workspace A (đã hoàn chỉnh), HV trên Workspace B (tự làm)  
> **Cập nhật:** 2026-07-03

---

## 📋 Workspace State — Đầu Vào Buổi 7

```
personal-brand-workspace/
├── AGENTS.md                          ← ROOT level
├── .agents/
│   ├── skills/
│   │   ├── content-writer/SKILL.md
│   │   └── engagement-analyst/SKILL.md
│   ├── workflows/content-creation-flow.md
│   └── rules/
│       ├── brand-voice.md              ← từ buổi 6
│       ├── content-quality.md          ← từ buổi 6
│       └── visual-standards.md         ← từ buổi 6
├── knowledge-base/
│   ├── brand-profile.md
│   ├── target-audience.md
│   ├── content-pillars.md
│   └── brand-guidelines.md            ← từ buổi 6
├── sample-data/
│   ├── social-media-posts.csv
│   ├── monthly-report-data.csv
│   ├── content-calendar.csv
│   └── engagement-metrics.csv
├── outputs/
└── docs/
    ├── workspace-map.md
    ├── pdca-log.md
    └── lesson-to-workspace-map.md
```

---

## 🎯 Mục Tiêu Buổi Học

| # | Mục tiêu | Đo lường bằng |
|---|----------|----------------|
| 1 | Hiểu khái niệm Handoff — bàn giao giữa các Skill | Giải thích được 3 yếu tố: Input contract, Output contract, Quality gate |
| 2 | Thiết kế pipeline phê duyệt 3 tầng | Tạo được workflow Writer → Checker → [Human] → Publisher |
| 3 | Phân biệt auto-pass vs human review | Chạy được 3 draft qua pipeline với 3 kết quả khác nhau |
| 4 | Document handoff contract | Viết được file handoff-contracts.md hoàn chỉnh |

---

## PHẦN 1: DEMO — GV THỰC HIỆN TRÊN WORKSPACE A [45 phút]

---

### Bước 1: Giải Thích Concept — Handoff & Human Checkpoint [00:00 – 10:00]

**GV nói:**

> *"Ở buổi 5 và 6, chúng ta đã tạo skills và knowledge base. Mỗi skill làm một việc riêng. Nhưng trong thực tế, công việc không bao giờ chỉ cần MỘT kỹ năng. Viết bài xong thì phải review, review xong thì phải duyệt, duyệt xong mới publish. Đó chính là HANDOFF — bàn giao kết quả từ skill này sang skill khác."*

**GV vẽ sơ đồ trên bảng hoặc slide:**

```
┌──────────────┐    Handoff #1    ┌──────────────┐    Handoff #2    ┌──────────────┐
│   WRITER     │ ──────────────→  │   CHECKER    │ ──────────────→  │  PUBLISHER   │
│  (Viết bài)  │   Output: Draft  │ (Kiểm duyệt) │  Output: Pass   │ (Xuất bản)   │
└──────────────┘                  └──────┬───────┘                  └──────────────┘
                                         │
                                    Nếu nhạy cảm
                                         │
                                         ▼
                                  ┌──────────────┐
                                  │    HUMAN     │
                                  │ (Con người)  │
                                  │  Duyệt thủ   │
                                  │  công         │
                                  └──────────────┘
```

**GV giải thích 3 yếu tố Handoff:**

> *"Mỗi Handoff cần 3 thứ rõ ràng:*
> 1. *Input Contract — Skill nhận vào cần GÌ? Format ra sao?*
> 2. *Output Contract — Skill trả ra CÁI GÌ? Cấu trúc thế nào?*
> 3. *Quality Gate — Tiêu chuẩn nào để PASS? Khi nào cần con người can thiệp?"*

**GV hỏi lớp:**

> *"Tại sao không để 1 skill làm tất cả — viết luôn, kiểm luôn, publish luôn?"*

**Đáp án mong đợi:**
- Mỗi skill chuyên biệt → làm tốt một việc
- Tách riêng → dễ debug khi có lỗi
- Có checkpoint → kiểm soát chất lượng
- Con người can thiệp được ở bước quan trọng

---

### Bước 2: Tạo Approval Pipeline Workflow [10:00 – 18:00]

**GV nói:**

> *"Bây giờ mình sẽ tạo quy trình phê duyệt nội dung 3 tầng. File này mô tả TOÀN BỘ pipeline — từ viết bài đến xuất bản."*

**Prompt cho AI — Tạo file workflow:**

```
Tạo file `.agents/workflows/approval-pipeline-flow.md` với nội dung sau:

# Quy Trình Phê Duyệt Nội Dung (Approval Pipeline)

## Tổng Quan

Pipeline phê duyệt nội dung 3 tầng:
- **Stage 1 — Writer:** Tạo bản nháp (skill: content-writer)
- **Stage 2 — Checker:** Kiểm tra chất lượng (skill: content-approver)
- **Stage 3 — Publisher:** Xuất bản hoặc chuyển human review

## Sơ Đồ Pipeline

```
INPUT (yêu cầu nội dung)
    │
    ▼
┌─── Stage 1: WRITER ───┐
│  Skill: content-writer │
│  Output: Bản nháp      │
└────────┬───────────────┘
         │ Handoff #1: Draft → Checker
         ▼
┌─── Stage 2: CHECKER ──┐
│ Skill: content-approver│
│ Kiểm tra 5 tiêu chí   │
│                        │
│ Kết quả:               │
│ ✅ PASS → Stage 3      │
│ ❌ FAIL → Trả về Writer│
│ ⚠️ REVIEW → Human     │
└────────┬───────────────┘
         │ Handoff #2: Approved Draft → Publisher
         ▼
┌─── Stage 3: PUBLISHER ─┐
│  Format theo platform    │
│  Thêm hashtags, CTA     │
│  Output: Bài hoàn chỉnh │
└──────────────────────────┘
```

## Chi Tiết Từng Stage

### Stage 1 — Writer (Viết Bài)

**Input Contract:**
- Chủ đề bài viết (bắt buộc)
- Platform mục tiêu: LinkedIn / Facebook / Blog (bắt buộc)
- Đối tượng: từ knowledge-base/target-audience.md
- Tone: từ rules/brand-voice.md

**Output Contract:**
- Bản nháp hoàn chỉnh (200-500 từ tùy platform)
- Có tiêu đề, nội dung chính, CTA
- Kèm metadata: chủ đề, platform, ngày tạo

**Quality Gate:** Không — chuyển thẳng sang Checker

### Stage 2 — Checker (Kiểm Duyệt)

**Input Contract:**
- Bản nháp từ Stage 1
- Metadata: chủ đề, platform, ngày tạo

**Tiêu Chí Kiểm Tra (5 tiêu chí):**

| # | Tiêu chí | Đạt | Không đạt |
|---|----------|-----|-----------|
| 1 | Brand voice nhất quán | Giọng văn khớp brand-voice.md | Sai tone, trộn ngôn ngữ |
| 2 | Độ dài phù hợp platform | LinkedIn: 200-400 từ, FB: 100-250 từ | Quá dài hoặc quá ngắn |
| 3 | Có CTA rõ ràng | Call-to-action cụ thể, hành động được | Không có CTA hoặc CTA mơ hồ |
| 4 | Không chứa thông tin nhạy cảm | Không có số điện thoại, email cá nhân, giá cả | Chứa dữ liệu riêng tư |
| 5 | Phù hợp content pillar | Nội dung thuộc 1 trong các pillar đã định | Lạc đề, không thuộc pillar nào |

**Output Contract:**
- Verdict: PASS / FAIL / NEEDS_HUMAN_REVIEW
- Nếu PASS: Chuyển bản nháp sang Stage 3
- Nếu FAIL: Trả lại Writer kèm feedback cụ thể theo từng tiêu chí
- Nếu NEEDS_HUMAN_REVIEW: Đánh dấu lý do cần review thủ công

**Điều Kiện Cần Human Review:**
1. Chủ đề nhạy cảm: chính trị, tôn giáo, so sánh đối thủ, tài chính cá nhân
2. Chứa số liệu chưa xác minh
3. Mention người thật hoặc tổ chức cụ thể
4. Nội dung có thể gây tranh cãi

### Stage 3 — Publisher (Xuất Bản)

**Input Contract:**
- Bản nháp đã được PASS từ Checker
- Platform mục tiêu

**Output Contract:**
- Bài viết hoàn chỉnh, sẵn sàng đăng
- Có hashtags phù hợp (3-5 hashtags)
- Có emoji phù hợp platform
- Format đúng chuẩn platform

## Quy Tắc Pipeline

1. **Không bỏ qua stage.** Writer KHÔNG được tự publish mà không qua Checker.
2. **FAIL tối đa 2 lần.** Nếu Writer sửa 2 lần vẫn FAIL → chuyển Human Review.
3. **Human Review có quyền veto.** Con người có thể reject bất kỳ bài nào, kể cả đã PASS.
4. **Log mọi quyết định.** Mỗi lần PASS/FAIL/REVIEW đều ghi vào pipeline log.
```

**⏱️ GV chờ AI tạo file** — xong mở file lên cho lớp xem.

**Expected Output:** File `.agents/workflows/approval-pipeline-flow.md` được tạo tại đúng vị trí.

**GV highlight:**

> *"Chú ý: mỗi Stage có Input Contract và Output Contract rõ ràng. Đây là 'hợp đồng' giữa các skill — giống như hợp đồng giữa 2 bộ phận trong công ty."*

---

### Bước 3: Tạo Content Approver Skill [18:00 – 26:00]

**GV nói:**

> *"Chúng ta đã có content-writer từ buổi 5. Bây giờ cần thêm 'người kiểm duyệt' — content-approver. Skill này sẽ là Stage 2 trong pipeline."*

**Prompt cho AI — Tạo content-approver skill:**

```
Tạo file `.agents/skills/content-approver/SKILL.md` với nội dung sau:

---
name: "content-approver"
description: >
  Skill kiểm duyệt nội dung thương hiệu cá nhân. Đánh giá bản nháp theo 5 tiêu chí
  chất lượng, đưa ra verdict PASS/FAIL/NEEDS_HUMAN_REVIEW kèm feedback chi tiết.
  Hoạt động như Stage 2 trong approval pipeline.
---

# Content Approver — Kiểm Duyệt Nội Dung

## Vai Trò

Bạn là chuyên gia kiểm duyệt nội dung thương hiệu cá nhân. Nhiệm vụ của bạn là đánh giá bản nháp từ content-writer và đưa ra quyết định: PASS, FAIL, hoặc NEEDS_HUMAN_REVIEW.

## Input Yêu Cầu

Khi nhận bản nháp để kiểm duyệt, BẮT BUỘC phải có:
- Nội dung bản nháp đầy đủ
- Platform mục tiêu (LinkedIn / Facebook / Blog)
- Chủ đề / content pillar

## Quy Trình Kiểm Duyệt

### Bước 1 — Kiểm tra 5 tiêu chí

Đánh giá bản nháp theo 5 tiêu chí sau:

**Tiêu chí 1: Brand Voice**
- Đọc file `rules/brand-voice.md` để nắm giọng văn chuẩn
- Kiểm tra: Bài viết có giữ đúng tone không? Có trộn ngôn ngữ không?
- ✅ Đạt: Giọng văn nhất quán với brand voice đã định
- ❌ Không đạt: Sai tone, trộn tiếng Anh-Việt không nhất quán

**Tiêu chí 2: Độ Dài Phù Hợp**
- LinkedIn: 200-400 từ
- Facebook: 100-250 từ
- Blog: 500-1500 từ
- ✅ Đạt: Nằm trong khoảng cho phép
- ❌ Không đạt: Quá dài hoặc quá ngắn so với platform

**Tiêu chí 3: CTA (Call-to-Action)**
- Bài viết phải có ít nhất 1 CTA rõ ràng
- CTA phải cụ thể, hành động được (không phải "hãy theo dõi nhé" chung chung)
- ✅ Đạt: CTA cụ thể, phù hợp mục đích bài viết
- ❌ Không đạt: Không có CTA hoặc CTA mơ hồ

**Tiêu chí 4: Thông Tin Nhạy Cảm**
- Kiểm tra: số điện thoại, email cá nhân, giá cả cụ thể, mật khẩu, API key
- ✅ Đạt: Không chứa thông tin nhạy cảm
- ❌ Không đạt: Có dữ liệu cá nhân hoặc bí mật

**Tiêu chí 5: Content Pillar**
- Đọc file `knowledge-base/content-pillars.md`
- Bài viết phải thuộc ít nhất 1 content pillar đã định
- ✅ Đạt: Nội dung thuộc pillar đã định
- ❌ Không đạt: Lạc đề, không thuộc pillar nào

### Bước 2 — Đưa ra Verdict

Dựa trên kết quả 5 tiêu chí:

**✅ PASS** — Khi:
- Đạt tất cả 5 tiêu chí
- KHÔNG thuộc chủ đề nhạy cảm (xem danh sách bên dưới)

**❌ FAIL** — Khi:
- Không đạt ít nhất 1 tiêu chí
- Kèm feedback cụ thể cho từng tiêu chí không đạt
- Gợi ý hướng sửa cho Writer

**⚠️ NEEDS_HUMAN_REVIEW** — Khi:
- Đạt tất cả 5 tiêu chí NHƯNG thuộc chủ đề nhạy cảm
- Hoặc chứa số liệu chưa xác minh được
- Hoặc mention người thật / tổ chức cụ thể
- Hoặc nội dung có thể gây tranh cãi

### Danh Sách Chủ Đề Nhạy Cảm
1. Chính trị, chính sách công
2. Tôn giáo, tín ngưỡng
3. So sánh trực tiếp với đối thủ cạnh tranh
4. Tài chính cá nhân, lời khuyên đầu tư
5. Y tế, sức khỏe (nếu không có chuyên môn)
6. Giới tính, sắc tộc, dân tộc

## Format Output Kiểm Duyệt

```
## Kết Quả Kiểm Duyệt

**Verdict:** [PASS / FAIL / NEEDS_HUMAN_REVIEW]
**Ngày kiểm duyệt:** [ngày]
**Platform:** [LinkedIn / Facebook / Blog]

### Đánh Giá Chi Tiết

| # | Tiêu chí | Kết quả | Ghi chú |
|---|----------|---------|---------|
| 1 | Brand Voice | ✅/❌ | [chi tiết] |
| 2 | Độ dài | ✅/❌ | [số từ / yêu cầu] |
| 3 | CTA | ✅/❌ | [chi tiết] |
| 4 | Thông tin nhạy cảm | ✅/❌ | [chi tiết] |
| 5 | Content Pillar | ✅/❌ | [pillar nào] |

### Lý Do [nếu FAIL hoặc NEEDS_HUMAN_REVIEW]
[Giải thích chi tiết]

### Gợi Ý Sửa [nếu FAIL]
[Hướng dẫn cụ thể cho Writer]
```

## Ví Dụ

### Ví dụ PASS:
- Bài LinkedIn về "5 kỹ năng AI cho sinh viên" — đúng tone, đúng pillar, có CTA rõ → PASS

### Ví dụ FAIL:
- Bài Facebook quá dài (600 từ), không có CTA → FAIL kèm feedback sửa

### Ví dụ NEEDS_HUMAN_REVIEW:
- Bài so sánh "Tool A tốt hơn Tool B" — đạt 5 tiêu chí nhưng so sánh đối thủ → cần human review
```

**⏱️ GV chờ AI tạo file xong.**

**Expected Output:** File `.agents/skills/content-approver/SKILL.md` được tạo.

**GV mở file và giải thích:**

> *"Chú ý cấu trúc SKILL.md: frontmatter YAML ở đầu (name + description), rồi đến hướng dẫn chi tiết. Quan trọng nhất là phần Verdict — 3 trường hợp PASS, FAIL, NEEDS_HUMAN_REVIEW."*

---

### Bước 4: Tạo Approval Policy Rule [26:00 – 32:00]

**GV nói:**

> *"Skill biết CÁCH kiểm duyệt, nhưng cần Rule để quy định CHÍNH SÁCH phê duyệt — khi nào auto-pass, khi nào cần người duyệt."*

**Prompt cho AI — Tạo approval policy rule:**

```
Tạo file `.agents/rules/approval-policy.md` với nội dung sau:

# Chính Sách Phê Duyệt Nội Dung (Approval Policy)

## Mục Đích

Quy tắc này quy định chính sách phê duyệt nội dung trước khi xuất bản, áp dụng cho toàn bộ approval pipeline.

## Quy Tắc Auto-Pass (Tự Động Duyệt)

Nội dung được tự động duyệt (PASS) khi thỏa MÃN TẤT CẢ các điều kiện:

1. Đạt 5/5 tiêu chí kiểm duyệt của content-approver
2. Chủ đề KHÔNG nằm trong danh sách nhạy cảm
3. KHÔNG mention người thật hoặc tổ chức cụ thể
4. KHÔNG chứa số liệu, thống kê, hoặc claim chưa có nguồn
5. Platform là LinkedIn hoặc Facebook (không phải blog dài)

## Quy Tắc Cần Human Review (Duyệt Thủ Công)

Nội dung BẮT BUỘC cần human review khi có BẤT KỲ điều kiện nào:

1. **Chủ đề nhạy cảm:** Chính trị, tôn giáo, so sánh đối thủ, tài chính cá nhân, y tế
2. **Mention cụ thể:** Nhắc đến tên người thật, công ty, sản phẩm bên ngoài
3. **Số liệu chưa xác minh:** Có thống kê, con số, nghiên cứu mà không trích nguồn rõ
4. **Blog dài:** Mọi bài blog trên 800 từ đều cần human review (vì tác động lớn hơn)
5. **Nội dung lần đầu:** Chủ đề mới chưa từng viết trước đó (chưa có trong content-pillars.md)
6. **Fail 2 lần:** Bản nháp bị FAIL 2 lần liên tiếp → tự động chuyển human review

## Quy Tắc Auto-Fail (Tự Động Từ Chối)

Nội dung bị tự động từ chối (FAIL) khi có BẤT KỲ điều kiện nào:

1. Chứa thông tin cá nhân nhạy cảm (SĐT, email, địa chỉ nhà)
2. Vi phạm brand voice nghiêm trọng (hoàn toàn sai tone)
3. Không có CTA
4. Không thuộc bất kỳ content pillar nào

## Thẩm Quyền Phê Duyệt

| Cấp | Ai duyệt | Áp dụng khi |
|-----|----------|-------------|
| Cấp 1 — Auto | content-approver skill | Nội dung thông thường, đạt 5/5 tiêu chí |
| Cấp 2 — Human | Chủ workspace (bạn) | Chủ đề nhạy cảm, số liệu, mention người thật |
| Cấp 3 — Reject | content-approver skill | Vi phạm nghiêm trọng, thông tin nhạy cảm |

## Ví Dụ Áp Dụng

### ✅ Auto-Pass:
> Bài LinkedIn "5 mẹo quản lý thời gian cho sinh viên" — chủ đề an toàn, đúng pillar "phát triển bản thân", có CTA "Bạn đang dùng mẹo nào? Comment chia sẻ nhé!" → AUTO PASS

### ⚠️ Cần Human Review:
> Bài Facebook "So sánh ChatGPT vs Google Gemini cho công việc" — đạt 5 tiêu chí nhưng SO SÁNH SẢN PHẨM CỤ THỂ → cần human xem lại trước khi đăng

### ❌ Auto-Fail:
> Bài LinkedIn chứa email cá nhân "liên hệ: abc@gmail.com để biết thêm" → FAIL ngay, kèm yêu cầu xóa thông tin cá nhân
```

**⏱️ GV chờ AI tạo file.**

**Expected Output:** File `.agents/rules/approval-policy.md` được tạo.

**GV giải thích:**

> *"Rule khác Skill ở chỗ nào? Skill = CÁCH LÀM (checklist 5 tiêu chí). Rule = CHÍNH SÁCH (khi nào auto, khi nào cần người). Skill giống nhân viên kiểm tra, Rule giống quy định công ty."*

---

### Bước 5: Chạy Pipeline — 3 Draft Thử Nghiệm [32:00 – 42:00]

**GV nói:**

> *"Bây giờ đến phần hay nhất — chạy thử pipeline với 3 bản nháp khác nhau để xem 3 kết quả khác nhau."*

---

#### Draft 1 — Đạt tiêu chuẩn → AUTO PASS [32:00 – 35:00]

**Prompt cho AI:**

```
Hãy chạy approval pipeline cho bài viết sau:

**Platform:** LinkedIn
**Chủ đề:** 3 thói quen giúp sinh viên học hiệu quả hơn với AI
**Content Pillar:** Phát triển bản thân

**Bản nháp:**

---
🎯 3 Thói Quen Giúp Sinh Viên Học Hiệu Quả Hơn Với AI

Bạn có biết: sinh viên sử dụng AI đúng cách có thể tiết kiệm 40% thời gian học mà vẫn hiểu sâu hơn?

Sau 6 tháng thử nghiệm, mình rút ra 3 thói quen cốt lõi:

1. **Hỏi "Tại sao" thay vì "Cái gì"**
   Thay vì hỏi AI "OOP là gì?", hãy hỏi "Tại sao OOP quan trọng trong phát triển phần mềm thực tế?" — Bạn sẽ hiểu bản chất thay vì chỉ thuộc định nghĩa.

2. **Dùng AI làm sparring partner**
   Sau khi đọc bài, yêu cầu AI đặt 5 câu hỏi kiểm tra. Nếu trả lời được 4/5, bạn đã nắm vững. Nếu không — quay lại đọc phần đó.

3. **Review output của AI trước khi dùng**
   AI có thể sai. Luôn kiểm tra kết quả AI đưa ra bằng cách so sánh với nguồn đáng tin cậy.

Kỹ năng sử dụng AI không phải "biết prompt" — mà là biết tư duy cùng AI.

💬 Bạn đang dùng AI hỗ trợ việc học như thế nào? Chia sẻ ở comment nhé!
---

Hãy đánh giá bản nháp này theo quy trình content-approver (5 tiêu chí) và cho verdict cuối cùng.
```

**Expected Output — Kết quả mong đợi:**

```
## Kết Quả Kiểm Duyệt

**Verdict:** ✅ PASS
**Ngày kiểm duyệt:** [ngày hiện tại]
**Platform:** LinkedIn

### Đánh Giá Chi Tiết

| # | Tiêu chí | Kết quả | Ghi chú |
|---|----------|---------|---------|
| 1 | Brand Voice | ✅ | Giọng văn thân thiện, chuyên nghiệp, nhất quán |
| 2 | Độ dài | ✅ | ~220 từ — nằm trong khoảng 200-400 từ cho LinkedIn |
| 3 | CTA | ✅ | CTA rõ ràng: "Chia sẻ ở comment nhé!" — khuyến khích tương tác |
| 4 | Thông tin nhạy cảm | ✅ | Không chứa thông tin cá nhân |
| 5 | Content Pillar | ✅ | Thuộc pillar "Phát triển bản thân" |

→ Đạt 5/5 tiêu chí, chủ đề an toàn → **AUTO PASS** → Chuyển sang Publisher
```

**GV nói:**

> *"Draft 1 đạt tất cả tiêu chí, chủ đề không nhạy cảm → auto-pass, không cần con người can thiệp. Pipeline tự động chạy từ Writer → Checker → Publisher."*

---

#### Draft 2 — Vi phạm rules → FAIL [35:00 – 38:00]

**Prompt cho AI:**

```
Hãy chạy approval pipeline cho bài viết sau:

**Platform:** Facebook
**Chủ đề:** Dịch vụ tư vấn cá nhân
**Content Pillar:** Không xác định

**Bản nháp:**

---
Hey guys! Today I want to share something really cool about AI and personal branding!

Mình vừa launch dịch vụ tư vấn thương hiệu cá nhân, giá chỉ 2 triệu/buổi. Ai quan tâm inbox mình nhé, SĐT: 0901234567, email: thuanbrand@gmail.com

Mình đã giúp hơn 50 khách hàng tăng follower 300% chỉ trong 1 tháng. Trust me, this is legit!

Đăng ký ngay hôm nay để được giảm 50%!!!
---

Hãy đánh giá bản nháp này theo quy trình content-approver (5 tiêu chí) và cho verdict cuối cùng.
```

**Expected Output — Kết quả mong đợi:**

```
## Kết Quả Kiểm Duyệt

**Verdict:** ❌ FAIL
**Ngày kiểm duyệt:** [ngày hiện tại]
**Platform:** Facebook

### Đánh Giá Chi Tiết

| # | Tiêu chí | Kết quả | Ghi chú |
|---|----------|---------|---------|
| 1 | Brand Voice | ❌ | Trộn tiếng Anh-Việt không nhất quán ("Hey guys", "Trust me, this is legit"), giọng quá bán hàng |
| 2 | Độ dài | ✅ | ~100 từ — nằm trong khoảng 100-250 từ cho Facebook |
| 3 | CTA | ❌ | CTA quá aggressive ("Đăng ký ngay hôm nay!!!"), dùng quá nhiều dấu chấm than |
| 4 | Thông tin nhạy cảm | ❌ | Chứa SĐT (0901234567) và email cá nhân (thuanbrand@gmail.com) |
| 5 | Content Pillar | ❌ | Nội dung quảng cáo dịch vụ — không thuộc content pillar nào đã định |

### Lý Do FAIL
- Vi phạm 4/5 tiêu chí
- Chứa thông tin cá nhân nhạy cảm (SĐT, email) → vi phạm nghiêm trọng
- Claim "50 khách hàng tăng 300% trong 1 tháng" không có nguồn

### Gợi Ý Sửa
1. **Brand Voice:** Viết hoàn toàn bằng tiếng Việt, giọng thân thiện nhưng chuyên nghiệp
2. **CTA:** Thay "Đăng ký ngay" bằng CTA mềm hơn, ví dụ: "Bạn nghĩ sao về việc xây dựng thương hiệu cá nhân?"
3. **Thông tin nhạy cảm:** XÓA số điện thoại và email — hướng dẫn người đọc liên hệ qua kênh chính thức
4. **Content Pillar:** Chuyển hướng từ bán hàng sang chia sẻ kiến thức (ví dụ: chia sẻ case study ẩn danh)

→ Trả lại Writer để sửa theo feedback
```

**GV nói:**

> *"Chú ý: Checker không chỉ nói FAIL — mà còn cho feedback CỤ THỂ và GỢI Ý SỬA. Đây là handoff ngược — từ Checker trả lại Writer. Contract vẫn phải rõ ràng."*

---

#### Draft 3 — Đạt nhưng nhạy cảm → NEEDS HUMAN REVIEW [38:00 – 42:00]

**Prompt cho AI:**

```
Hãy chạy approval pipeline cho bài viết sau:

**Platform:** LinkedIn
**Chủ đề:** So sánh công cụ AI cho personal branding
**Content Pillar:** Công nghệ & AI

**Bản nháp:**

---
🤖 ChatGPT vs Google Gemini: Công Cụ Nào Tốt Hơn Cho Personal Branding?

Sau 3 tháng sử dụng song song cả hai, mình rút ra một số so sánh:

**ChatGPT:**
- Mạnh về viết nội dung dài, sáng tạo
- Tone tự nhiên hơn khi viết tiếng Việt
- Giá Plus $20/tháng

**Google Gemini:**
- Tích hợp tốt với Google Workspace
- Phân tích dữ liệu tốt hơn
- Có bản miễn phí khá mạnh

**Kết luận cá nhân:** Mình dùng ChatGPT cho viết content và Gemini cho phân tích. Không có cái nào "tốt nhất" — chỉ có cái phù hợp nhất với workflow của bạn.

💬 Bạn đang dùng tool nào? Share kinh nghiệm của bạn ở comment!
---

Hãy đánh giá bản nháp này theo quy trình content-approver (5 tiêu chí) và cho verdict cuối cùng.
```

**Expected Output — Kết quả mong đợi:**

```
## Kết Quả Kiểm Duyệt

**Verdict:** ⚠️ NEEDS_HUMAN_REVIEW
**Ngày kiểm duyệt:** [ngày hiện tại]
**Platform:** LinkedIn

### Đánh Giá Chi Tiết

| # | Tiêu chí | Kết quả | Ghi chú |
|---|----------|---------|---------|
| 1 | Brand Voice | ✅ | Giọng văn chuyên nghiệp, khách quan, nhất quán |
| 2 | Độ dài | ✅ | ~200 từ — nằm trong khoảng 200-400 từ cho LinkedIn |
| 3 | CTA | ✅ | CTA rõ ràng: "Share kinh nghiệm ở comment!" |
| 4 | Thông tin nhạy cảm | ✅ | Không chứa thông tin cá nhân |
| 5 | Content Pillar | ✅ | Thuộc pillar "Công nghệ & AI" |

### Lý Do Cần Human Review
Đạt 5/5 tiêu chí NHƯNG:
1. **So sánh sản phẩm cụ thể:** Bài viết so sánh trực tiếp ChatGPT và Google Gemini — 2 sản phẩm thương mại cụ thể
2. **Mention tổ chức:** Nhắc đến OpenAI (ChatGPT) và Google (Gemini)
3. **Thông tin giá cả:** Có đề cập giá "$20/tháng" — có thể thay đổi

### Đề Xuất Cho Human Reviewer
- Kiểm tra giá ChatGPT Plus có còn đúng $20/tháng không
- Xác nhận bài viết khách quan, không thiên vị sản phẩm nào
- Cân nhắc có nên đăng so sánh công khai không (có thể bị coi là quảng cáo)

→ Chuyển Human Review — chờ quyết định từ chủ workspace
```

**GV nói:**

> *"Đây là trường hợp quan trọng nhất! Bài viết đạt TẤT CẢ 5 tiêu chí — nhưng nội dung so sánh sản phẩm cụ thể → cần con người xem lại. Đây chính là Human Checkpoint — AI không tự quyết được, phải hỏi người."*

**GV hỏi lớp:**

> *"Nếu không có Human Checkpoint, chuyện gì có thể xảy ra với bài viết này?"*

**Đáp án mong đợi:**
- Đăng bài so sánh sai giá → mất uy tín
- Bị hiểu nhầm là quảng cáo cho 1 sản phẩm
- So sánh thiên vị → ảnh hưởng brand

---

### Bước 6: Tạo Handoff Contracts Document [42:00 – 46:00]

**GV nói:**

> *"Cuối cùng, mình document tất cả các handoff contract lại một chỗ — để ai đọc workspace cũng hiểu luồng bàn giao."*

**Prompt cho AI:**

```
Tạo file `docs/handoff-contracts.md` với nội dung sau:

# Handoff Contracts — Hợp Đồng Bàn Giao Giữa Các Skill

## Tổng Quan

Tài liệu này mô tả hợp đồng bàn giao (handoff contract) giữa các skill trong workspace. Mỗi contract định nghĩa rõ: ai giao, ai nhận, giao cái gì, format ra sao, điều kiện gì.

## Sơ Đồ Tổng Thể

```
content-writer ──→ content-approver ──→ [Human Checkpoint] ──→ Publisher
     │                    │                      │
     │                    │                      │
     └── Handoff #1 ──────┘                      │
                          │                      │
                          └── Handoff #2 ────────┘
```

## Contract #1: Writer → Approver

| Mục | Chi tiết |
|-----|----------|
| **Skill giao:** | content-writer |
| **Skill nhận:** | content-approver |
| **Tên handoff:** | Draft Submission |
| **Trigger:** | Writer hoàn thành bản nháp |

### Input (Writer phải giao):
- Bản nháp nội dung hoàn chỉnh (không để trống)
- Metadata: platform, chủ đề, content pillar, ngày tạo
- Đánh dấu đây là lần nộp thứ mấy (lần 1, 2, hoặc 3)

### Output (Approver phải trả):
- Verdict: PASS / FAIL / NEEDS_HUMAN_REVIEW
- Bảng đánh giá 5 tiêu chí (có ✅/❌ cho từng tiêu chí)
- Nếu FAIL: Feedback cụ thể + gợi ý sửa
- Nếu NEEDS_HUMAN_REVIEW: Lý do + đề xuất cho human reviewer

### Quy Tắc:
- Writer KHÔNG được tự publish mà không qua Approver
- Approver PHẢI đánh giá ĐẦY ĐỦ 5 tiêu chí, không bỏ sót
- Nếu FAIL, Writer có tối đa 2 lần sửa. Fail lần 3 → chuyển human review

## Contract #2: Approver → Human Checkpoint

| Mục | Chi tiết |
|-----|----------|
| **Skill giao:** | content-approver |
| **Người nhận:** | Chủ workspace (con người) |
| **Tên handoff:** | Escalation Review |
| **Trigger:** | Verdict = NEEDS_HUMAN_REVIEW hoặc FAIL 2 lần |

### Input (Approver phải giao cho Human):
- Bản nháp nội dung gốc
- Bảng đánh giá 5 tiêu chí
- Lý do cần human review (danh sách cụ thể)
- Đề xuất: nên approve, sửa, hay reject
- Lịch sử FAIL trước đó (nếu có)

### Output (Human phải trả):
- Quyết định: APPROVE / REJECT / REVISE
- Nếu REVISE: Hướng dẫn sửa cụ thể
- Nếu APPROVE: Có thể kèm ghi chú bổ sung

### Quy Tắc:
- Human có quyền veto tuyệt đối — reject bất kỳ bài nào
- Human PHẢI response trong 24 giờ (hoặc bài bị đánh dấu "expired")
- Quyết định của Human là cuối cùng, không tranh luận

## Contract #3: Approver/Human → Publisher

| Mục | Chi tiết |
|-----|----------|
| **Giao từ:** | content-approver (nếu PASS) hoặc Human (nếu APPROVE) |
| **Nhận bởi:** | Publisher (hoặc skill xuất bản) |
| **Tên handoff:** | Publication Ready |
| **Trigger:** | Verdict = PASS hoặc Human APPROVE |

### Input (phải có):
- Bản nháp đã được approved
- Platform mục tiêu xác nhận
- Verdict chính thức (PASS hoặc HUMAN_APPROVED)

### Output (Publisher tạo):
- Bài viết hoàn chỉnh, format theo platform
- Hashtags phù hợp (3-5 cái)
- Emoji phù hợp platform
- Lưu vào thư mục outputs/

### Quy Tắc:
- Publisher KHÔNG được thay đổi nội dung chính (chỉ format)
- Mọi bài published đều lưu bản gốc + bản final

## Nhật Ký Bàn Giao (Handoff Log)

Mỗi lần handoff xảy ra, ghi lại:

| Thời gian | Handoff | Từ | Đến | Verdict | Ghi chú |
|-----------|---------|-----|-----|---------|---------|
| [ngày giờ] | Draft Submission | Writer | Approver | [PASS/FAIL/REVIEW] | [chi tiết] |
| [ngày giờ] | Escalation Review | Approver | Human | [APPROVE/REJECT/REVISE] | [lý do] |
| [ngày giờ] | Publication Ready | Approver/Human | Publisher | APPROVED | [platform] |
```

**⏱️ GV chờ AI tạo file xong.**

**Expected Output:** File `docs/handoff-contracts.md` được tạo.

---

### Bước 7: 7-Component Audit Check [46:00 – 48:00]

**Prompt cho AI:**

```
Hãy kiểm toán workspace hiện tại theo 7 thành phần. Liệt kê trạng thái từng thành phần:

1. Cơ sở Kiến thức (Knowledge Base)
2. Kỹ năng (Skills)
3. Quy tắc (Rules)
4. Quy trình (Workflows)
5. Tác tử (Agents/Skills hoạt động)
6. Hợp đồng Bàn giao (Handoff Contracts)
7. Kiểm toán & Gỡ lỗi (Audit Trail)

Cho điểm từng thành phần: ✅ Có / ⚠️ Một phần / ❌ Chưa có
```

**Expected Output — Kết quả mong đợi:**

```
## Kiểm Toán 7 Thành Phần — Workspace Sau Buổi 7

| # | Thành phần | Trạng thái | Chi tiết |
|---|-----------|------------|----------|
| 1 | Cơ sở Kiến thức | ✅ Có | 4 file: brand-profile.md, target-audience.md, content-pillars.md, brand-guidelines.md |
| 2 | Kỹ năng (Skills) | ✅ Có | 3 skills: content-writer, engagement-analyst, content-approver (MỚI) |
| 3 | Quy tắc (Rules) | ✅ Có | 4 rules: brand-voice.md, content-quality.md, visual-standards.md, approval-policy.md (MỚI) |
| 4 | Quy trình (Workflows) | ✅ Có | 2 workflows: content-creation-flow.md, approval-pipeline-flow.md (MỚI) |
| 5 | Tác tử (Skills hoạt động) | ✅ Có | 3 skills đã test: writer, analyst, approver |
| 6 | Hợp đồng Bàn giao | ✅ Có | 3 contracts documented trong handoff-contracts.md (MỚI) |
| 7 | Kiểm toán & Gỡ lỗi | ⚠️ Một phần | Có pdca-log.md nhưng chưa có audit trail chuyên biệt (sẽ hoàn thiện buổi 8) |

**Tổng điểm: 6.5/7** — Workspace đã có đầy đủ các thành phần cốt lõi, chỉ cần bổ sung audit trail ở buổi 8.
```

**GV nói:**

> *"Sau buổi 7, workspace đã có 6.5/7 thành phần. Chỉ còn thiếu audit trail chuyên biệt — sẽ làm ở buổi 8. Các bạn thấy workspace đang lớn dần sau mỗi buổi không?"*

---

## PHẦN 2: THỰC HÀNH — HV TỰ LÀM TRÊN WORKSPACE B [60 phút]

---

### Bài 1: Tạo Content Approver Skill [00:00 – 20:00]

**HV prompt (copy-paste):**

```
Hãy tạo file `.agents/skills/content-approver/SKILL.md` — skill kiểm duyệt nội dung.

Skill này cần:
1. YAML frontmatter với name "content-approver" và description
2. Vai trò: kiểm duyệt bản nháp từ content-writer
3. 5 tiêu chí kiểm tra: brand voice, độ dài, CTA, thông tin nhạy cảm, content pillar
4. 3 loại verdict: PASS (auto-pass), FAIL (trả lại sửa), NEEDS_HUMAN_REVIEW (cần người duyệt)
5. Danh sách chủ đề nhạy cảm cần human review
6. Format output kiểm duyệt dạng bảng
7. Ví dụ cho mỗi loại verdict

Tham khảo knowledge-base/ để biết brand voice và content pillars của tôi.
```

**Tiêu chí hoàn thành:**
- [ ] File tạo đúng vị trí: `.agents/skills/content-approver/SKILL.md`
- [ ] Có YAML frontmatter (name + description)
- [ ] Có 5 tiêu chí kiểm tra rõ ràng
- [ ] Có 3 loại verdict với điều kiện cụ thể
- [ ] Có format output dạng bảng
- [ ] Có ít nhất 1 ví dụ mỗi loại

---

### Bài 2: Tạo Approval Policy Rule [20:00 – 30:00]

**HV prompt (copy-paste):**

```
Hãy tạo file `.agents/rules/approval-policy.md` — chính sách phê duyệt nội dung.

Quy tắc cần bao gồm:
1. Điều kiện Auto-Pass: khi nào nội dung được tự động duyệt
2. Điều kiện cần Human Review: khi nào BẮT BUỘC cần người xem
3. Điều kiện Auto-Fail: khi nào tự động từ chối
4. Bảng thẩm quyền phê duyệt (ai duyệt cấp nào)
5. Ví dụ cho mỗi trường hợp

Tham khảo skill content-approver đã tạo ở bài 1 và rules hiện có trong .agents/rules/ để đảm bảo không mâu thuẫn.
```

**Tiêu chí hoàn thành:**
- [ ] File tạo đúng vị trí: `.agents/rules/approval-policy.md`
- [ ] Có 3 loại điều kiện rõ ràng (auto-pass, human review, auto-fail)
- [ ] Có bảng thẩm quyền
- [ ] Có ví dụ cụ thể
- [ ] Không mâu thuẫn với rules hiện có

---

### Bài 3: Tạo Approval Pipeline Workflow [30:00 – 40:00]

**HV prompt (copy-paste):**

```
Hãy tạo file `.agents/workflows/approval-pipeline-flow.md` — quy trình phê duyệt nội dung 3 tầng.

Workflow cần mô tả:
1. Sơ đồ pipeline: Writer → Checker → [Human] → Publisher
2. Chi tiết 3 stages với Input Contract và Output Contract cho mỗi stage
3. Quality Gate giữa các stage
4. Quy tắc xử lý: PASS → tiếp, FAIL → trả lại, NEEDS_HUMAN_REVIEW → chờ người
5. Giới hạn: FAIL tối đa 2 lần thì chuyển human review

Tham khảo skill content-approver và rule approval-policy đã tạo.
```

**Tiêu chí hoàn thành:**
- [ ] File tạo đúng vị trí: `.agents/workflows/approval-pipeline-flow.md`
- [ ] Có sơ đồ pipeline bằng text
- [ ] Có Input/Output Contract cho mỗi stage
- [ ] Có điều kiện chuyển giữa các stage
- [ ] Nhất quán với skill và rule đã tạo

---

### Bài 4: Tạo Handoff Contracts Document [40:00 – 48:00]

**HV prompt (copy-paste):**

```
Hãy tạo file `docs/handoff-contracts.md` — tài liệu mô tả hợp đồng bàn giao giữa các skill.

Document cần có:
1. Sơ đồ tổng thể các handoff trong workspace
2. Contract #1: Writer → Approver (input gì, output gì, quy tắc gì)
3. Contract #2: Approver → Human (khi nào escalate, human cần trả lời gì)
4. Contract #3: Approver/Human → Publisher (điều kiện publish)
5. Template nhật ký bàn giao (Handoff Log)

Tham khảo workflow approval-pipeline-flow.md để đảm bảo contract khớp với pipeline.
```

**Tiêu chí hoàn thành:**
- [ ] File tạo đúng vị trí: `docs/handoff-contracts.md`
- [ ] Có sơ đồ tổng thể
- [ ] Có ít nhất 3 contracts
- [ ] Mỗi contract có Input, Output, Quy tắc
- [ ] Có template Handoff Log

---

### Bài 5: Chạy Thử Pipeline [48:00 – 60:00]

**HV prompt (copy-paste):**

```
Hãy chạy thử approval pipeline với bài viết sau:

**Platform:** [LinkedIn / Facebook — HV tự chọn]
**Chủ đề:** [Chủ đề thuộc content pillar của HV]

Viết một bản nháp ngắn, sau đó tự đánh giá bản nháp đó theo quy trình content-approver (5 tiêu chí). Cho verdict và giải thích.

Sau đó, viết thêm 1 bản nháp cố tình vi phạm 1-2 tiêu chí, chạy pipeline lại để xem kết quả FAIL.
```

**Tiêu chí hoàn thành:**
- [ ] Chạy được ít nhất 2 drafts qua pipeline
- [ ] Có 1 draft nhận PASS
- [ ] Có 1 draft nhận FAIL với feedback cụ thể
- [ ] Hiểu được luồng handoff hoạt động

---

## 📋 Workspace State — Sau Buổi 7

```
personal-brand-workspace/
├── AGENTS.md                              ← ROOT level
├── .agents/
│   ├── skills/
│   │   ├── content-writer/SKILL.md        ← từ buổi 5
│   │   ├── engagement-analyst/SKILL.md    ← từ buổi 5
│   │   └── content-approver/SKILL.md      ← ★ MỚI buổi 7
│   ├── workflows/
│   │   ├── content-creation-flow.md       ← từ buổi 5
│   │   └── approval-pipeline-flow.md      ← ★ MỚI buổi 7
│   └── rules/
│       ├── brand-voice.md                 ← từ buổi 6
│       ├── content-quality.md             ← từ buổi 6
│       ├── visual-standards.md            ← từ buổi 6
│       └── approval-policy.md             ← ★ MỚI buổi 7
├── knowledge-base/
│   ├── brand-profile.md
│   ├── target-audience.md
│   ├── content-pillars.md
│   └── brand-guidelines.md
├── sample-data/
│   ├── social-media-posts.csv
│   ├── monthly-report-data.csv
│   ├── content-calendar.csv
│   └── engagement-metrics.csv
├── outputs/
└── docs/
    ├── workspace-map.md
    ├── pdca-log.md
    ├── lesson-to-workspace-map.md
    └── handoff-contracts.md               ← ★ MỚI buổi 7
```

### Files Thêm Buổi 7 (+4 files):

| File | Loại | Mục đích |
|------|------|----------|
| `.agents/skills/content-approver/SKILL.md` | Skill | Kiểm duyệt nội dung theo 5 tiêu chí |
| `.agents/rules/approval-policy.md` | Rule | Chính sách auto-pass / human review / auto-fail |
| `.agents/workflows/approval-pipeline-flow.md` | Workflow | Pipeline 3 tầng: Writer → Checker → Publisher |
| `docs/handoff-contracts.md` | Document | Hợp đồng bàn giao giữa các skill |

---

## 📊 7-Component Audit — Trạng Thái Sau Buổi 7

| # | Thành phần | Trạng thái | Files | Buổi thêm |
|---|-----------|------------|-------|-----------|
| 1 | Cơ sở Kiến thức | ✅ Có (4 files) | brand-profile, target-audience, content-pillars, brand-guidelines | 5, 6 |
| 2 | Kỹ năng (Skills) | ✅ Có (3 skills) | content-writer, engagement-analyst, content-approver | 5, 7 |
| 3 | Quy tắc (Rules) | ✅ Có (4 rules) | brand-voice, content-quality, visual-standards, approval-policy | 6, 7 |
| 4 | Quy trình (Workflows) | ✅ Có (2 workflows) | content-creation-flow, approval-pipeline-flow | 5, 7 |
| 5 | Tác tử (Skills hoạt động) | ✅ Có (3 active) | writer, analyst, approver — đã test hoạt động | 5, 7 |
| 6 | Hợp đồng Bàn giao | ✅ Có (3 contracts) | Writer→Approver, Approver→Human, Approver→Publisher | 7 |
| 7 | Kiểm toán & Gỡ lỗi | ⚠️ Một phần | Có pdca-log nhưng chưa có audit trail chuyên biệt | Sẽ hoàn thiện buổi 8 |

**Tổng: 6.5/7 thành phần** — Chỉ còn thiếu audit trail → sẽ bổ sung buổi 8.

---

## 🔑 Key Takeaways — GV Tóm Tắt Cuối Buổi

| # | Bài học | Ghi nhớ |
|---|---------|---------|
| 1 | Handoff = hợp đồng bàn giao | Mỗi handoff cần Input Contract + Output Contract + Quality Gate |
| 2 | Tách riêng skill, mỗi skill một việc | Writer viết, Checker kiểm, Publisher xuất — không gộp |
| 3 | Human Checkpoint cho high-risk | AI tự động được 80%, nhưng 20% cần con người quyết định |
| 4 | Fail không xấu — fail có feedback mới tốt | FAIL phải kèm lý do + gợi ý sửa — đó mới là handoff tốt |
| 5 | Document mọi contract | File handoff-contracts.md giúp bất kỳ ai đọc đều hiểu luồng |

---

## 📝 Bài Tập Về Nhà (Trước Buổi 8)

1. **Chạy pipeline thêm 3 bài viết** — cố tạo ra đủ 3 kết quả: PASS, FAIL, NEEDS_HUMAN_REVIEW
2. **Bổ sung Handoff Log** — ghi lại kết quả từng lần chạy pipeline vào `docs/handoff-contracts.md`
3. **Tự review:** Đọc lại `approval-policy.md` — có điều kiện nào cần sửa không?
4. **Chuẩn bị cho buổi 8:** Nghĩ xem workspace hiện tại có gì cần audit/debug

---

## ⚠️ Lưu Ý Cho GV

| Tình huống | Xử lý |
|-----------|--------|
| HV không hiểu handoff vs workflow | Giải thích: Workflow = toàn bộ quy trình, Handoff = điểm bàn giao giữa 2 bước |
| HV tạo skill nhưng không có YAML frontmatter | Nhắc: frontmatter bắt buộc — `name` và `description` — AI cần đó để kích hoạt skill |
| AI bỏ qua một số tiêu chí khi kiểm duyệt | Yêu cầu AI kiểm tra lại: "Hãy đánh giá ĐẦY ĐỦ 5 tiêu chí, đừng bỏ sót tiêu chí nào" |
| HV muốn thêm tiêu chí riêng | Khuyến khích — đó chính là cá nhân hóa workspace, rất tốt |
| Pipeline quá đơn giản với HV giỏi | Gợi ý thêm stage: Translator (dịch sang tiếng Anh) hoặc Designer (tạo visual) |
| AI cho PASS hết, không FAIL bao giờ | Yêu cầu HV cố tình tạo bài vi phạm rõ ràng để test FAIL path |

---

> **Buổi tiếp theo:** Session 08 — Audit & Debug Workspace
> **Mục tiêu:** Kiểm toán toàn diện workspace, fix lỗi, hoàn thiện 7/7 thành phần

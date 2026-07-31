# Buổi 03: Expertise Skill — Demo & Thực Hành

> **Phase 1 — Operate | Workspace A: `personal-brand-complete/` (GV) | Workspace B: `personal-brand-workspace/` (HV)**

---

## Tổng quan

| Hạng mục | Chi tiết |
|---|---|
| **Mục tiêu** | HV tạo Skill đầu tiên (content-writer), thấy rõ Before/After khi có skill |
| **Thời lượng** | Demo 45 phút + Thực hành 60 phút |
| **Artifacts tạo ra** | `.agents/skills/content-writer/SKILL.md`, `knowledge-base/content-pillars.md`, `before-skill-test.md`, `after-skill-test.md` |
| **Kết nối trước** | Buổi 2 — PDCA Operation (đã có target-audience.md, pdca-log) |
| **Kết nối sau** | Buổi 4 — OIPO Workflow |

---

## Chuẩn bị trước buổi học

### Giảng viên (GV)
- [ ] Mở workspace `personal-brand-complete/` trong Antigravity
- [ ] Chuẩn bị 2 versions: TẮT skill (Before) và BẬT skill (After) để demo
- [ ] Test run trước: prompt giống nhau, 2 kết quả khác nhau
- [ ] Chuẩn bị slide giải thích cấu trúc SKILL.md (YAML + Body)
- [ ] In worksheet "3 câu hỏi Design Mentor" cho HV

### Học viên (HV)
- [ ] Workspace `personal-brand-workspace/` đã hoàn thành Buổi 1-2
- [ ] `knowledge-base/brand-profile.md` đã điền đầy đủ
- [ ] `knowledge-base/target-audience.md` đã tạo
- [ ] Nghĩ trước: "Chuyên môn của tôi là gì?"

---

## PHẦN DEMO — GV (45 phút)

> 🎓 GV demo trên **Workspace A** (`personal-brand-complete/`)
>
> Mục đích: Show trước/sau khi có Skill. Hướng dẫn tạo SKILL.md từ scratch.

### Bước 1: Before Test — Chạy KHÔNG có Skill (8 phút)

**⏱ Thời gian:** 0:00 — 0:08

**Hành động:**
- Tạm rename/di chuyển folder `.agents/skills/content-writer/` ra ngoài
- Chạy prompt viết content KHÔNG có skill

**🎤 Script nói:**
> "Hôm nay tôi sẽ cho các bạn thấy sự khác biệt KINH NGẠC khi workspace có và không có Skill."
>
> "Trước tiên, tôi TẮT skill content-writer — AI không biết gì về cách viết content."

**Prompt mẫu (copy-paste):**
```
Đọc knowledge-base/brand-profile.md.
Viết 1 bài LinkedIn post 200 từ về chủ đề 
"3 sai lầm phổ biến nhất khi xây dựng thương hiệu cá nhân".
Xuất vào outputs/content-drafts/before-skill-test.md
```

**Output kỳ vọng (KHÔNG có skill — generic):**
```markdown
# 3 Sai Lầm Phổ Biến Khi Xây Dựng Thương Hiệu Cá Nhân

Xây dựng thương hiệu cá nhân là một hành trình quan trọng trong sự nghiệp. 
Tuy nhiên, nhiều người mắc phải những sai lầm phổ biến sau:

1. Không xác định rõ đối tượng mục tiêu
Nhiều người viết content cho "tất cả mọi người" thay vì tập trung 
vào một nhóm cụ thể.

2. Thiếu sự nhất quán
Đăng bài không đều đặn hoặc thay đổi giọng văn liên tục khiến 
người đọc không nhận diện được bạn.

3. Quá tập trung vào bản thân
Thương hiệu cá nhân không phải chỉ nói về mình. Hãy chia sẻ 
giá trị cho người đọc.

Hãy tránh những sai lầm này để xây dựng thương hiệu cá nhân 
hiệu quả hơn.
```

**🎤 Nhận xét:**
> "Đọc bài này — có vấn đề gì?"
>
> "1. GENERIC — ai viết cũng giống nhau, không có personality."
> "2. Không có CÂU CHUYỆN — toàn lý thuyết khô khan."
> "3. Không có GIỌNG VĂN riêng — đọc như Wikipedia."
> "4. Không có HOOK — mở đầu nhàm chán."
>
> "Vì sao? Vì AI không biết CÁCH VIẾT của tôi. AI chỉ có kiến thức (brand-profile), nhưng KHÔNG CÓ kỹ năng (skill)."

### Bước 2: Design Mentor — 3 câu hỏi thiết kế Skill (10 phút)

**⏱ Thời gian:** 0:08 — 0:18

**🎤 Script nói:**
> "Trước khi tạo skill, tôi dùng phương pháp '3 Câu Hỏi Design Mentor'. 3 câu hỏi này giúp xác định CHÍNH XÁC skill cần gì."

**3 câu hỏi:**

| # | Câu hỏi | Mục đích | Ví dụ (content-writer) |
|---|---|---|---|
| 1 | **Chuyên môn gì?** Skill này biết làm gì? | Xác định capability | Viết LinkedIn post, storytelling, brand content |
| 2 | **Output style nào?** Kết quả trông như thế nào? | Xác định format & quality | Hook→Story→Insight→CTA, 150-250 từ, có emoji |
| 3 | **Điều gì KHÔNG làm?** Ranh giới ở đâu? | Xác định guardrails | Không hard-sell, không dùng jargon, không copy style người khác |

**🎤 Giải thích từng câu:**

> **Câu 1 — Chuyên môn:** "Không phải 'viết'. Mà là 'viết LinkedIn post theo brand voice, dùng storytelling, với data support'. Càng cụ thể, AI càng chính xác."
>
> **Câu 2 — Output style:** "Tôi muốn mỗi bài viết đều theo cấu trúc Hook → Story → Insight → CTA. Không phải format tự do."
>
> **Câu 3 — Điều KHÔNG làm:** "QUAN TRỌNG NHƯ ĐIỀU LÀM. Không quảng cáo, không dùng tiếng Anh xen kẽ quá nhiều, không copy phong cách influencer khác."

### Bước 3: Tạo SKILL.md live (12 phút)

**⏱ Thời gian:** 0:18 — 0:30

**Hành động:** Tạo file SKILL.md từ scratch

**🎤 Script nói:**
> "Skill = 1 folder chứa 1 file SKILL.md. Cấu trúc: YAML frontmatter ở trên, Markdown body ở dưới."

**Bước tạo thư mục:**
```
mkdir -p .agents/skills/content-writer/
```

**Nội dung SKILL.md hoàn chỉnh:**
```markdown
---
name: content-writer
description: Viết LinkedIn post theo brand voice với storytelling và data support. Áp dụng cấu trúc Hook→Story→Insight→CTA.
---

# Content Writer Skill

## Vai trò
Chuyên gia viết content LinkedIn cho personal branding.
Tạo bài viết chuyên nghiệp, có personality, và engaging.

## Chuyên môn
- Viết LinkedIn post 150-250 từ
- Storytelling từ kinh nghiệm thực tế
- Data-driven content (có số liệu minh họa)
- Thought leadership trong lĩnh vực chuyên môn

## Phong cách viết

### Cấu trúc bài viết (BẮT BUỘC)
1. **Hook** (1-2 câu): Câu hỏi, số liệu gây shock, hoặc tình huống bất ngờ
2. **Story** (3-5 câu): Câu chuyện cá nhân hoặc case study thực tế
3. **Insight** (2-3 câu): Bài học rút ra, actionable takeaway
4. **CTA** (1 câu): Câu hỏi mở hoặc lời mời tương tác

### Giọng văn
- Chuyên nghiệp nhưng gần gũi — như đang coffee chat
- Dùng "tôi" thay vì "chúng tôi"
- Câu ngắn, đoạn ngắn, dễ scan trên mobile
- Có emoji nhưng không quá 3-4 per bài

## Quy trình làm việc
1. Đọc brand-profile.md để hiểu personality
2. Đọc target-audience.md để biết viết cho ai
3. Đọc content-pillars.md để chọn chủ đề phù hợp
4. Viết theo cấu trúc Hook→Story→Insight→CTA
5. Kiểm tra: giọng văn đúng chưa? Có số liệu không? CTA rõ chưa?

## Quy tắc

### ✅ LUÔN LÀM
- Mở đầu bằng hook mạnh (câu hỏi hoặc số liệu)
- Kể câu chuyện cá nhân có bài học
- Thêm ít nhất 1 số liệu cụ thể
- Kết bằng câu hỏi mở cho engagement
- Dùng line breaks và emoji cho dễ đọc
- Thêm 3-5 hashtags relevant

### ❌ KHÔNG BAO GIỜ
- Viết kiểu quảng cáo hard-sell
- Dùng jargon khó hiểu
- Copy phong cách influencer khác
- Viết quá 300 từ
- Mở đầu bằng "Hôm nay tôi muốn chia sẻ..."
- Dùng passive voice

## Format output
- File: Markdown (.md)
- Encoding: UTF-8
- Lưu vào: outputs/content-drafts/
- Đặt tên: [chủ-đề]-[ngày].md
```

**🎤 Giải thích cấu trúc:**
> "Phần trên (---) là YAML frontmatter: name và description. Antigravity dùng description để biết KHI NÀO nên dùng skill này."
>
> "Phần dưới là Markdown body: chi tiết cách làm. Càng chi tiết, AI càng viết đúng ý bạn."
>
> "Lưu ý: Skill = folder/SKILL.md. KHÔNG phải file .md nằm lỏng trong .agents/skills/."

### Bước 4: After Test — Chạy CÓ Skill (7 phút)

**⏱ Thời gian:** 0:30 — 0:37

**Hành động:**
- Đảm bảo skill content-writer đã enable (folder có SKILL.md)
- Chạy CÙNG prompt như Before Test

**Prompt (GIỐNG HỆT bước 1):**
```
Đọc knowledge-base/brand-profile.md.
Viết 1 bài LinkedIn post 200 từ về chủ đề 
"3 sai lầm phổ biến nhất khi xây dựng thương hiệu cá nhân".
Xuất vào outputs/content-drafts/after-skill-test.md
```

**Output kỳ vọng (CÓ skill — personality):**
```markdown
# 🎯 3 sai lầm đốt cháy thương hiệu cá nhân (mà tôi từng mắc cả 3)

Năm 2019, tôi có 500 connections trên LinkedIn. 
Mỗi bài đăng được... 2 likes. Cả hai đều từ mẹ tôi 😅

Vấn đề? Tôi đang mắc 3 sai lầm kinh điển:

**Sai lầm #1: Viết cho "tất cả mọi người"**
Tôi cố viết content "ai cũng thích". Kết quả? Không ai nhớ.
→ Fix: Chọn 1 nhóm cụ thể. Tôi chọn marketer 3-7 năm kinh nghiệm.

**Sai lầm #2: Chỉ chia sẻ "kiến thức"**
Content toàn tips, tricks — giống Wikipedia.
→ Fix: Kể CHUYỆN THẬT. Bài "tôi mất 50 triệu vì nghe cảm tính" 
có engagement gấp 4 lần bài tips thông thường.

**Sai lầm #3: Sợ "show off"**
Nghĩ chia sẻ thành tựu = khoe khoang.
→ Fix: Chia sẻ THẤT BẠI + BÀI HỌC. Người đọc connect với 
vulnerability, không phải perfection.

6 tháng sau khi fix 3 sai lầm này: 500 → 5,000 connections. 
Engagement tăng 340%.

Bạn đang mắc sai lầm nào? 👇

#PersonalBranding #ThươngHiệuCáNhân #LinkedInTips #Marketing
```

**🎤 So sánh Before/After:**

| Tiêu chí | Before (không skill) | After (có skill) |
|---|---|---|
| Hook | ❌ Nhàm chán | ✅ Số liệu + humor |
| Cấu trúc | ❌ 3 đoạn văn | ✅ Hook→Story→Insight→CTA |
| Personality | ❌ Generic | ✅ Câu chuyện cá nhân |
| Data | ❌ Không có | ✅ 500→5000, 340% |
| CTA | ❌ Yếu | ✅ Câu hỏi engaging |
| Giọng văn | ❌ Wikipedia | ✅ Coffee chat |

> "CÙNG prompt. CÙNG knowledge. Nhưng kết quả HOÀN TOÀN KHÁC. Đó là sức mạnh của Skill."

### Bước 5: Giải thích nguyên lý (3 phút)

**⏱ Thời gian:** 0:37 — 0:40

**🎤 Script nói:**
> "Skill = DNA của agent. Không có skill, AI là generalist — biết nhiều nhưng không giỏi gì. Có skill, AI là specialist — chuyên sâu, có phong cách, có quy trình."
>
> "Hãy nghĩ skill như hiring brief. Khi bạn thuê content writer, bạn mô tả: viết kiểu gì, cho ai, theo cấu trúc nào, KHÔNG được làm gì. SKILL.md chính là hiring brief cho AI."

### Bước 6: Tạo content-pillars.md (5 phút)

**⏱ Thời gian:** 0:40 — 0:45

**🎤 Script nói:**
> "Để skill hoạt động tốt hơn, tôi bổ sung thêm content-pillars — các trụ cột nội dung."

**Prompt mẫu (copy-paste):**
```
Đọc knowledge-base/brand-profile.md và knowledge-base/target-audience.md.
Tạo file knowledge-base/content-pillars.md với 5 content pillars.

Mỗi pillar gồm:
- Tên pillar
- Mô tả ngắn (1 câu)
- 5 chủ đề cụ thể
- Tần suất đề xuất (x bài/tháng)
- Ví dụ tiêu đề bài viết

Đảm bảo pillars align với target audience pain points.
```

**Output kỳ vọng:**
```markdown
# Content Pillars

## Pillar 1: Storytelling Sự Nghiệp
**Mô tả:** Chia sẻ câu chuyện thực tế và bài học từ sự nghiệp marketing.
**Chủ đề:**
1. Sai lầm đắt giá nhất trong career
2. Khoảnh khắc "aha" thay đổi cách làm việc
3. Mentor và bài học từ người đi trước
4. Behind-the-scenes một campaign thành công
5. Quyết định career khó khăn nhất

**Tần suất:** 3 bài/tháng
**Ví dụ:** "Bài học 50 triệu: Khi cảm tính thắng data"

## Pillar 2: Marketing Data & Insights
**Mô tả:** Phân tích trends và chia sẻ data thực tế từ ngành.
**Chủ đề:**
1. Trend marketing đáng chú ý
2. Case study với số liệu cụ thể
3. So sánh tools/platforms
4. Phân tích campaign viral
5. Data insights từ social media

**Tần suất:** 2 bài/tháng
**Ví dụ:** "Phân tích 100 bài LinkedIn: 3 pattern engagement cao nhất"

## Pillar 3: Career Growth Tips
**Mô tả:** Hướng dẫn thực tế cho marketer muốn phát triển career.
**Chủ đề:**
1. Từ junior lên senior: roadmap
2. Kỹ năng marketer cần năm 2024
3. Networking hiệu quả
4. Personal branding cho marketer
5. Salary negotiation tips

**Tần suất:** 2 bài/tháng
**Ví dụ:** "5 kỹ năng giúp tôi tăng lương 40% trong 2 năm"

## Pillar 4: How-to Guides
**Mô tả:** Hướng dẫn step-by-step các kỹ thuật marketing cụ thể.
**Chủ đề:**
1. Setup content calendar
2. Viết LinkedIn post hiệu quả
3. Đo lường marketing ROI
4. A/B testing campaigns
5. Phân tích đối thủ

**Tần suất:** 2 bài/tháng
**Ví dụ:** "Content calendar template: Từ 0 → 20 bài/tháng trong 30 phút"

## Pillar 5: Industry Opinions
**Mô tả:** Quan điểm riêng về xu hướng và tranh luận trong ngành.
**Chủ đề:**
1. AI thay thế marketer — thật hay hype?
2. Organic vs Paid: đâu là ưu tiên?
3. Marketing ethics và dark patterns
4. Remote work impact on marketing teams
5. Đào tạo marketing ở VN: thiếu gì?

**Tần suất:** 1 bài/tháng
**Ví dụ:** "AI sẽ KHÔNG thay thế marketer — nhưng marketer DÙNG AI sẽ thay thế bạn"
```

---

## PHẦN THỰC HÀNH — HV (60 phút)

> 🎯 HV thực hành trên **Workspace B** (`personal-brand-workspace/` của mình)
>
> Mục đích: Tạo Skill đầu tiên, thấy Before/After trên workspace của mình.

### Bước 1: Before Test — Baseline (5 phút)

**⏱ Thời gian:** 0:00 — 0:05

**Prompt (copy-paste):**
```
Đọc knowledge-base/brand-profile.md.
Viết 1 bài LinkedIn post 200 từ về chuyên môn của tôi.
Xuất vào outputs/content-drafts/before-skill-test.md
```

**Checklist:**
- [ ] Đã chạy prompt
- [ ] Output lưu thành công
- [ ] Đọc qua output — nhận xét: generic hay có personality?

### Bước 2: Trả lời 3 câu Design Mentor (10 phút)

**⏱ Thời gian:** 0:05 — 0:15

**Worksheet (điền trước khi tạo SKILL.md):**

| # | Câu hỏi | Câu trả lời của tôi |
|---|---|---|
| 1 | Chuyên môn gì? Skill biết làm gì? | [điền] |
| 2 | Output style nào? Kết quả trông như thế nào? | [điền] |
| 3 | Điều gì KHÔNG làm? | [điền] |

**Ví dụ theo ngành:**

| Ngành | Câu 1 | Câu 2 | Câu 3 |
|---|---|---|---|
| HR | Viết content tuyển dụng, employer branding | Storytelling + job posting | Không spam, không hứa hẹn sai |
| Finance | Viết phân tích tài chính, giải thích đầu tư | Data-driven, có biểu đồ | Không tư vấn đầu tư cụ thể |
| Tech | Viết tutorial, review công nghệ | Step-by-step, có code | Không chê sản phẩm đối thủ |
| Education | Viết content giảng dạy, tips học tập | Friendly, có ví dụ thực | Không dạy đỗ chắc 100% |

**🎤 GV hướng dẫn:**
> "Viết CỤ THỂ. 'Viết content' là quá chung. 'Viết LinkedIn post về HR, dùng storytelling, theo format Hook→Tip→CTA, 150-200 từ' là cụ thể."

**Checklist:**
- [ ] Cả 3 câu đều có câu trả lời cụ thể
- [ ] Câu 1: ≥3 capabilities cụ thể
- [ ] Câu 3: ≥3 điều KHÔNG làm

### Bước 3: Tạo SKILL.md (15 phút)

**⏱ Thời gian:** 0:15 — 0:30

**Bước 1: Tạo thư mục**
```
mkdir -p .agents/skills/content-writer/
```

**Bước 2: Tạo file SKILL.md**

**Template (customize theo câu trả lời Design Mentor):**
```markdown
---
name: content-writer
description: [Câu tóm tắt skill — lấy từ câu 1 + 2 Design Mentor]
---

# Content Writer Skill

## Vai trò
[Mô tả vai trò — lấy từ câu 1]

## Chuyên môn
- [Capability 1]
- [Capability 2]
- [Capability 3]

## Phong cách viết

### Cấu trúc bài viết (BẮT BUỘC)
[Lấy từ câu 2 — output style]
1. **Hook** (1-2 câu): [mô tả]
2. **Body** (nội dung chính): [mô tả]
3. **Insight** (bài học): [mô tả]
4. **CTA** (kêu gọi): [mô tả]

### Giọng văn
- [Đặc điểm 1]
- [Đặc điểm 2]
- [Đặc điểm 3]

## Quy trình làm việc
1. Đọc brand-profile.md để hiểu personality
2. Đọc target-audience.md để biết viết cho ai
3. Viết theo cấu trúc đã định
4. Kiểm tra: đúng giọng văn? Có insight? CTA rõ?

## Quy tắc

### ✅ LUÔN LÀM
- [Rule 1]
- [Rule 2]
- [Rule 3]

### ❌ KHÔNG BAO GIỜ
[Lấy từ câu 3 Design Mentor]
- [Anti-rule 1]
- [Anti-rule 2]
- [Anti-rule 3]

## Format output
- File: Markdown (.md)
- Lưu vào: outputs/content-drafts/
```

**🎤 GV nhắc:**
> "YAML frontmatter (phần ---) BẮT BUỘC phải có name và description. Description là cách Antigravity biết khi nào nên dùng skill này."
>
> "ĐỪNG copy skill mẫu của GV. CUSTOMIZE cho lĩnh vực và phong cách CỦA BẠN."

**Checklist:**
- [ ] Thư mục `.agents/skills/content-writer/` đã tạo
- [ ] File `SKILL.md` có YAML frontmatter (name + description)
- [ ] Có section Vai trò, Chuyên môn, Phong cách, Quy tắc
- [ ] Có ✅ LUÔN LÀM và ❌ KHÔNG BAO GIỜ
- [ ] Description cụ thể (không chỉ "viết content")

### Bước 4: After Test — So sánh (10 phút)

**⏱ Thời gian:** 0:30 — 0:40

**Prompt (GIỐNG HỆT Before Test):**
```
Đọc knowledge-base/brand-profile.md.
Viết 1 bài LinkedIn post 200 từ về chuyên môn của tôi.
Xuất vào outputs/content-drafts/after-skill-test.md
```

**Hành động sau khi chạy:**
- Mở cả 2 file: before-skill-test.md và after-skill-test.md
- So sánh side-by-side

**Checklist:**
- [ ] Output khác biệt rõ rệt so với Before
- [ ] Có personality (không generic)
- [ ] Theo đúng cấu trúc đã định trong SKILL.md
- [ ] Giọng văn đúng với mô tả trong skill

### Bước 5: Tạo content-pillars.md (10 phút)

**⏱ Thời gian:** 0:40 — 0:50

**Prompt (copy-paste):**
```
Đọc knowledge-base/brand-profile.md và knowledge-base/target-audience.md.
Tạo 5 content pillars phù hợp với lĩnh vực và audience của tôi.

Mỗi pillar gồm:
- Tên pillar
- Mô tả (1 câu)
- 5 chủ đề cụ thể
- Tần suất (x bài/tháng)
- 1 ví dụ tiêu đề

Xuất vào knowledge-base/content-pillars.md
```

**Checklist:**
- [ ] File `knowledge-base/content-pillars.md` đã tạo
- [ ] Có 5 pillars với đầy đủ thông tin
- [ ] Pillars align với target audience pain points
- [ ] Chủ đề cụ thể, không quá chung

### Bước 6: Thử nghiệm với Skill mới (10 phút)

**⏱ Thời gian:** 0:50 — 1:00

**Gợi ý prompt:**
```
Đọc brand-profile.md và content-pillars.md.
Chọn 1 chủ đề từ Pillar 1 và viết 1 bài LinkedIn post.
Áp dụng đúng phong cách từ skill content-writer.
Xuất vào outputs/content-drafts/pillar1-test.md
```

```
Viết 3 tiêu đề LinkedIn post khác nhau cho 3 pillars khác nhau.
Mỗi tiêu đề phải có hook mạnh.
```

```
Đọc outputs/content-drafts/before-skill-test.md.
Phân tích: bài này thiếu gì so với tiêu chuẩn trong skill content-writer?
Liệt kê 5 điểm cần cải thiện.
```

---

## Trạng thái workspace sau buổi này

```
personal-brand-workspace/
├── AGENTS.md                              ← có sẵn
├── .agents/
│   ├── skills/
│   │   └── content-writer/
│   │       └── SKILL.md                   ← MỚI TẠO ★
│   ├── rules/                             ← trống
│   └── workflows/                         ← trống
├── knowledge-base/
│   ├── brand-profile.md                   ← Buổi 1
│   ├── target-audience.md                 ← Buổi 2
│   └── content-pillars.md                 ← MỚI TẠO ★
├── sample-data/
│   ├── social-media-posts.csv             ← có sẵn
│   └── monthly-report-data.csv            ← có sẵn
├── scripts/                               ← trống
├── outputs/
│   ├── content-drafts/
│   │   ├── intro-draft.md                 ← Buổi 1
│   │   ├── improved-post.md               ← Buổi 2
│   │   ├── before-skill-test.md           ← MỚI TẠO ★
│   │   └── after-skill-test.md            ← MỚI TẠO ★
│   └── analytics-reports/
│       ├── first-analysis.md              ← Buổi 1
│       └── pdca-analysis.md               ← Buổi 2
└── docs/
    ├── workspace-map.md                   ← Buổi 1
    ├── pdca-log.md                        ← Buổi 2
    └── lesson-to-workspace-map.md         ← có sẵn
```

**Thay đổi so với Buổi 2:** +3 files mới (.agents/skills/content-writer/SKILL.md, content-pillars.md, before/after-skill-test.md)

---

## Bài tập về nhà

| # | Bài tập | Deadline | File output |
|---|---|---|---|
| 1 | Refine SKILL.md — thêm chi tiết nếu output chưa tốt | Trước buổi 4 | `.agents/skills/content-writer/SKILL.md` |
| 2 | Viết 2 bài LinkedIn dùng skill mới | Trước buổi 4 | `outputs/content-drafts/` |
| 3 | Ghi PDCA iteration: Before/After skill | Trước buổi 4 | `docs/pdca-log.md` |
| 4 | Nghĩ trước workflow: "Quy trình tạo content hàng tuần gồm mấy bước?" | Trước buổi 4 | Không có file |

---

## Checklist hoàn thành

- [ ] `.agents/skills/content-writer/SKILL.md` đã tạo (có YAML + body)
- [ ] `knowledge-base/content-pillars.md` đã tạo (5 pillars)
- [ ] Before test đã chạy và lưu kết quả
- [ ] After test đã chạy — kết quả khác biệt rõ rệt
- [ ] SKILL.md có YAML frontmatter đúng format
- [ ] SKILL.md đã customize (không copy nguyên mẫu GV)
- [ ] Hiểu nguyên lý: Skill = chuyên môn hóa AI

**Tiêu chí đạt:** ≥ 5/7 checkbox ✅

---

## Kết nối buổi sau

> **Buổi 4: OIPO Workflow**
>
> Buổi này các bạn đã có SKILL — AI biết CÁCH viết. Nhưng mỗi lần vẫn phải prompt thủ công.
>
> Buổi sau sẽ tạo WORKFLOW đầu tiên — content-creation-flow.
> Workflow = quy trình OIPO (Objective→Input→Process→Output).
> 1 prompt → chạy cả quy trình → nhiều output.
>
> **Mang theo:** Workspace đã hoàn thành Buổi 3. Nghĩ trước: "Quy trình tạo content của tôi gồm mấy bước?"

---

## Ghi chú giảng viên

### Timing
- Before/After test ÍT NHẤT 15 phút để HV thấy sự khác biệt
- Design Mentor (3 câu hỏi) hay lâu vì HV viết quá chung → có ví dụ sẵn

### Lỗi thường gặp
1. **Copy nguyên skill mẫu GV:** → Nhắc: "Skill phải UNIQUE cho BẠN. Marketing khác Finance khác Tech."
2. **YAML frontmatter sai format:** → Check: có `---` mở và đóng? name và description đúng indent?
3. **Description quá chung:** "viết content" → Hướng dẫn: thêm chi tiết format, audience, style
4. **Quên tạo thư mục:** Skill = folder/SKILL.md, không phải file lỏng
5. **Before/After không khác biệt:** → Kiểm tra skill có được load không (file đúng path?)

### Backup plan
- Nếu skill không load → kiểm tra path: `.agents/skills/content-writer/SKILL.md`
- Nếu HV viết skill quá lâu → cho template pre-filled, chỉ cần customize 3 sections
- Nếu Before/After giống nhau → restart Antigravity session

### Điểm nhấn quan trọng
- **Before/After PHẢI ấn tượng** — đây là "aha moment" lớn nhất buổi 3
- **Skill = folder/SKILL.md** — nhắc đi nhắc lại, HV rất hay quên folder
- **Customize > Copy** — skill có giá trị khi phản ánh ĐÚNG chuyên môn CỦA HV
- **3 câu Design Mentor** — framework tái sử dụng cho mọi skill sau này

# SESSION 06 — Knowledge & CLEAR Rules
# Kịch Bản Demo + Thực Hành

> **Buổi:** 06/11 — Knowledge & CLEAR Rules
> **Thời lượng:** Demo 45 phút + Thực hành 60 phút
> **Mô hình:** GV demo trên Workspace A → HV thực hành trên Workspace B
> **Phase:** 2 — Modify (Core)
> **Cập nhật:** 2026-07-03

---

## TRẠNG THÁI WORKSPACE KHI VÀO BUỔI 6

```
personal-brand-workspace/
├── AGENTS.md                              ← ROOT level
├── .agents/
│   ├── skills/
│   │   ├── content-writer/SKILL.md
│   │   └── engagement-analyst/SKILL.md    ← từ buổi 5
│   ├── workflows/content-creation-flow.md
│   └── rules/                             ← TRỐNG — chưa có rule nào
├── knowledge-base/
│   ├── brand-profile.md
│   ├── target-audience.md
│   └── content-pillars.md
├── sample-data/
│   ├── social-media-posts.csv
│   ├── monthly-report-data.csv
│   ├── content-calendar.csv
│   └── engagement-metrics.csv             ← từ buổi 5
├── outputs/
└── docs/
    ├── workspace-map.md
    ├── pdca-log.md
    └── lesson-to-workspace-map.md
```

**Điểm nhấn buổi 6:** Workspace đã có skills (buổi 5) nhưng AI vẫn output KHÔNG nhất quán vì thiếu 2 thứ: **Knowledge** (kiến thức chuyên sâu) và **Rules** (quy tắc ràng buộc).

---

## MỤC TIÊU HỌC TẬP

| # | Mục tiêu | Đo lường |
|---|----------|----------|
| 1 | Phân biệt Knowledge vs Rules vs Skills | HV giải thích đúng khi được hỏi |
| 2 | Tạo knowledge file (.md) với nội dung có cấu trúc | File `brand-guidelines.md` hoàn chỉnh |
| 3 | Viết rules theo format CLEAR | 3 rule files đúng cấu trúc |
| 4 | So sánh output before/after knowledge+rules | Demo trực tiếp sự khác biệt |

---

# PHẦN 1: DEMO — GV TRÊN WORKSPACE A (45 phút)

---

## BƯỚC 1: Before Test — Prompt KHÔNG có Knowledge/Rules [00:00–10:00]

> **Mục đích:** Cho HV thấy AI output thiếu nhất quán khi CHƯA có knowledge + rules.

### GV nói:

> "Workspace mình đã có 2 skills từ buổi trước — content-writer và engagement-analyst. Nhưng hãy xem khi mình prompt viết nội dung, AI sẽ viết kiểu gì khi CHƯA biết gì về brand guidelines hay rules."

### [00:01] Prompt #1 — Viết bài LinkedIn (BEFORE)

```
Viết cho mình 1 bài LinkedIn về chủ đề "Cách dùng AI hiệu quả trong Marketing". Bài viết khoảng 200 từ, dành cho đối tượng là marketer trẻ.
```

### Expected Output (BEFORE — thiếu brand consistency):

AI sẽ viết bài nhưng có các vấn đề:
- **Tone không nhất quán:** lúc formal, lúc casual, không rõ brand voice
- **Thiếu cấu trúc chuẩn:** không có hook rõ ràng, CTA yếu hoặc không có
- **Trộn ngôn ngữ:** xen lẫn tiếng Anh không cần thiết, không giải thích thuật ngữ
- **Không có hashtag chiến lược:** hashtag random hoặc không phù hợp ngành
- **Không phản ánh giá trị thương hiệu:** thiếu yếu tố "thực chiến", "có số liệu"

### [00:04] GV highlight vấn đề:

> "Các bạn thấy không? AI viết được bài — nhưng mỗi lần viết sẽ ra một giọng khác nhau. Lần này formal, lần sau casual. Không có brand voice nhất quán. Nếu bạn đăng 10 bài như này lên LinkedIn, followers sẽ thấy mỗi bài một kiểu — không nhận ra đây là 'bạn'."

### [00:05] Prompt #2 — Phân tích dữ liệu (BEFORE)

```
Phân tích hiệu quả nội dung mạng xã hội tháng này và đề xuất chiến lược cải thiện.
```

### Expected Output (BEFORE — bịa số liệu):

AI sẽ:
- **Bịa số liệu:** "Engagement rate đạt 4.5%, tăng 12% so với tháng trước"
- **Không dùng dữ liệu thật:** bỏ qua file CSV trong sample-data/
- **Format report lộn xộn:** không theo template chuẩn nào
- **Thiếu nguồn dẫn:** đưa con số nhưng không nói lấy từ đâu

### [00:08] GV tổng kết vấn đề:

> "2 vấn đề lớn nhất:
> 1. AI không biết brand guidelines → viết mỗi lần một kiểu
> 2. AI không có rules ràng buộc → tự bịa số liệu, format lung tung
>
> Hôm nay mình sẽ giải quyết cả 2 bằng **Knowledge** và **CLEAR Rules**."

---

## BƯỚC 2: Tạo Knowledge File — brand-guidelines.md [10:00–20:00]

### [10:00] GV giải thích Knowledge trong Antigravity:

> "Trong Antigravity, **Knowledge = file .md** nằm trong workspace. AI tự động đọc và sử dụng nội dung trong các file .md khi cần. Khác với Skills (hướng dẫn AI *làm gì*) và Rules (ràng buộc AI *không được làm gì*), Knowledge cung cấp *thông tin chuyên sâu* để AI hiểu context."

| Thành phần | Format | Vai trò | Ví dụ |
|------------|--------|---------|-------|
| **Knowledge** | `.md` file | Cung cấp thông tin, context | brand-guidelines.md, industry-terms.md |
| **Data** | `.csv` file | Cung cấp dữ liệu số | engagement-metrics.csv, revenue.csv |
| **Skills** | `folder/SKILL.md` | Hướng dẫn AI cách làm | content-writer/SKILL.md |
| **Rules** | `.md` file trong `.agents/rules/` | Ràng buộc, giới hạn AI | brand-voice.md, content-quality.md |

### [12:00] Tạo file knowledge — GV gõ prompt:

```
Tạo file knowledge-base/brand-guidelines.md với nội dung hướng dẫn thương hiệu chi tiết cho thương hiệu cá nhân "Nguyễn Minh Anh — Digital Marketing & Data". Bao gồm các phần sau:

1. Brand Identity (nhận diện thương hiệu):
   - Tên: Nguyễn Minh Anh
   - Tagline: "Marketing thực chiến, dẫn dắt bằng dữ liệu"
   - Lĩnh vực: Digital Marketing & Data Analytics
   - Màu chính: Navy (#1E3A8A), Teal (#06B6D4), Amber (#F59E0B)

2. Tone of Voice (giọng nói thương hiệu):
   - Chuyên nghiệp nhưng gần gũi
   - Dùng ví dụ thực tế, case study thật
   - Xưng "mình" với audience, không xưng "tôi" (quá formal) hay "tớ" (quá casual)
   - Kết hợp hài hước nhẹ nhàng khi phù hợp

3. Content Dos and Don'ts:
   - DO: dùng số liệu minh chứng, chia sẻ kinh nghiệm thất bại, kể câu chuyện
   - DON'T: bịa số liệu, nói suông không có bằng chứng, dùng giọng "thầy dạy trò"

4. Visual Standards:
   - Font: Inter cho heading, system font cho body
   - Emoji: dùng có chọn lọc (📊 🎯 💡 ✅ ❌), tối đa 3 emoji/bài
   - Hashtags chuẩn: #MarketingThucChien #DataDriven #HocMarketing #PersonalBrand

5. Platform-specific guidelines:
   - LinkedIn: bài dài 200-400 từ, hook mạnh dòng đầu, CTA cuối bài
   - Facebook: bài ngắn 100-200 từ, casual hơn, dùng storytelling
   - Blog: bài phân tích 800-1500 từ, có mục lục, có data visualization

Viết file đầy đủ, chi tiết, có thể dùng làm reference lâu dài.
```

### [14:00] Expected Output — Nội dung file `knowledge-base/brand-guidelines.md`:

```markdown
# Hướng Dẫn Thương Hiệu — Nguyễn Minh Anh

> Tài liệu chuẩn hóa mọi nội dung mang thương hiệu "Nguyễn Minh Anh — Marketing thực chiến, dẫn dắt bằng dữ liệu".

---

## 1. Nhận Diện Thương Hiệu (Brand Identity)

- **Tên thương hiệu:** Nguyễn Minh Anh
- **Tagline:** "Marketing thực chiến, dẫn dắt bằng dữ liệu"
- **Lĩnh vực:** Digital Marketing & Data Analytics
- **Kinh nghiệm:** 5 năm Digital Marketing, quản lý chiến dịch cho 10+ thương hiệu
- **Đối tượng mục tiêu:** Marketer trẻ (22-30 tuổi), sinh viên năm cuối ngành Marketing/Truyền thông

### Bảng Màu Thương Hiệu

| Vai trò | Mã màu | Tên | Sử dụng khi |
|---------|--------|-----|-------------|
| Màu chính | `#1E3A8A` | Navy | Heading, background chính, biểu đồ cột |
| Màu phụ | `#06B6D4` | Teal | Highlight, link, accent, biểu đồ đường |
| Màu nhấn | `#F59E0B` | Amber | CTA button, cảnh báo, con số nổi bật |
| Nền tối | `#0F172A` | Slate 900 | Dark mode background |
| Nền sáng | `#F8FAFC` | Slate 50 | Light mode background |

### Giá Trị Cốt Lõi

1. **Thực chiến** — Chỉ chia sẻ từ trải nghiệm thật, có kết quả đo được
2. **Dễ hiểu** — Giải thích đơn giản, tránh thuật ngữ phức tạp không cần thiết
3. **Có số liệu** — Mọi nhận định phải kèm data, case study, hoặc nguồn tham khảo

---

## 2. Giọng Nói Thương Hiệu (Tone of Voice)

### Nguyên tắc chung

- **Xưng hô:** Dùng "mình" khi nói với audience. KHÔNG dùng "tôi" (quá formal) hay "tớ" (quá casual)
- **Phong cách:** Chuyên nghiệp + gần gũi. Như một đàn anh/chị giỏi trong ngành đang coffee chat với junior
- **Hài hước:** Chấp nhận, nhưng nhẹ nhàng và có mục đích. KHÔNG giễu cợt hay mỉa mai

### Thang đo Tone

```
❄️ Formal ───────────── 🎯 BRAND ZONE ──────────── 🔥 Casual
   |                      ▲ ĐÂY                         |
   "Kính gửi quý vị..."   "Chào mọi người..."      "Yo mọi ng..."
```

### Ví dụ Tone ĐÚNG vs SAI

✅ ĐÚNG:
> "Mình từng chạy campaign Facebook với budget 5 triệu mà kéo về 0 lead. Đau lắm, nhưng bài học rút ra cực kỳ giá trị — chia sẻ với mọi người 3 sai lầm mình mắc phải..."

❌ SAI (quá formal):
> "Tôi xin phép trình bày về case study Facebook Advertising với ngân sách hạn chế, qua đó rút ra 3 bài học chuyên môn..."

❌ SAI (quá casual):
> "Ê mọi người, hôm nay kể chuyện fail chạy ads FB nha haha, đốt 5 củ mà chả được gì luôn á 😂😂😂"

---

## 3. Content Dos and Don'ts

### ✅ DOs — Luôn Làm

1. **Dùng số liệu minh chứng** — "Engagement tăng 45%" thay vì "tăng đáng kể"
2. **Chia sẻ kinh nghiệm thất bại** — Thất bại thật + bài học = nội dung giá trị nhất
3. **Kể câu chuyện (storytelling)** — Hook bằng tình huống thực tế, không lý thuyết khô khan
4. **Trích nguồn dữ liệu** — "(Nguồn: Google Analytics, tháng 3/2026)"
5. **CTA rõ ràng** — Mỗi bài một CTA cụ thể: comment, share, save, hoặc click link

### ❌ DON'Ts — Không Bao Giờ

1. **Bịa số liệu** — TUYỆT ĐỐI KHÔNG tạo con số từ đầu khi không có data
2. **Nói suông** — "AI rất tốt, mọi người nên dùng" → thiếu bằng chứng cụ thể
3. **Giọng "thầy dạy trò"** — KHÔNG lên giọng giáo huấn, dạy đời. Hãy chia sẻ, không giảng bài
4. **Copy paste** — Không lấy nội dung người khác làm của mình
5. **Quá nhiều emoji** — Tối đa 3 emoji/bài, chọn emoji có ý nghĩa

---

## 4. Tiêu Chuẩn Hình Ảnh (Visual Standards)

### Typography

- **Heading:** Inter (Google Fonts) — Bold 700
- **Body text:** System font stack (-apple-system, BlinkMacSystemFont, sans-serif)
- **Code/Data:** JetBrains Mono — khi hiển thị code hoặc số liệu

### Emoji được phép sử dụng

| Emoji | Ý nghĩa | Dùng khi |
|-------|----------|----------|
| 📊 | Data/Analytics | Bài về số liệu, phân tích |
| 🎯 | Mục tiêu/Strategy | Bài về chiến lược, kế hoạch |
| 💡 | Insight/Tip | Chia sẻ mẹo, nhận định |
| ✅ | Đúng/Nên làm | Danh sách DO |
| ❌ | Sai/Không nên | Danh sách DON'T |
| 🔥 | Highlight | Kết quả ấn tượng |

### Hashtags chuẩn (luôn dùng)

- `#MarketingThucChien` — hashtag chính
- `#DataDriven` — cho bài liên quan data
- `#HocMarketing` — cho bài chia sẻ kiến thức
- `#PersonalBrand` — cho bài về thương hiệu cá nhân

---

## 5. Hướng Dẫn Theo Nền Tảng (Platform Guidelines)

### LinkedIn

- **Độ dài:** 200–400 từ
- **Cấu trúc:** Hook (dòng 1 gây tò mò) → Thân bài (chia đoạn ngắn 2-3 câu) → CTA
- **Hook mẫu:** "3 sai lầm tốn tiền nhất mà marketer nào cũng mắc..."
- **CTA mẫu:** "Bạn đã gặp trường hợp nào tương tự chưa? Comment chia sẻ nhé 👇"
- **Hashtags:** 5-8 hashtags cuối bài

### Facebook

- **Độ dài:** 100–200 từ
- **Phong cách:** Casual hơn LinkedIn, storytelling ngắn
- **Hình ảnh:** Nên kèm 1 hình minh họa hoặc infographic
- **CTA mẫu:** "Lưu bài này lại để tham khảo khi cần nhé! 💡"

### Blog cá nhân

- **Độ dài:** 800–1500 từ
- **Cấu trúc:** Tiêu đề → Tóm tắt → Mục lục → Các phần chi tiết → Kết luận
- **Yêu cầu:** Có ít nhất 1 bảng dữ liệu hoặc biểu đồ, có trích nguồn
```

### [18:00] GV giải thích:

> "File này là **Knowledge** — thông tin nền tảng để AI hiểu brand của bạn. Khi AI cần viết bất kỳ nội dung nào, nó sẽ tham khảo file này để giữ đúng tone, đúng màu, đúng phong cách. Khác với rules — knowledge không ràng buộc, nó cung cấp context."

---

## BƯỚC 3: Giải Thích CLEAR Format + Tạo 3 Rules [20:00–35:00]

### [20:00] GV giải thích CLEAR:

> "CLEAR là format viết rules sao cho AI hiểu rõ ràng nhất. CLEAR = 5 phần:"

| Chữ cái | Ý nghĩa | Mục đích |
|---------|---------|----------|
| **C** | **Context** — Bối cảnh | Rule này áp dụng khi nào? Cho ai? |
| **L** | **Limitation** — Giới hạn | AI KHÔNG được làm gì? |
| **E** | **Example** — Ví dụ | Ví dụ ĐÚNG và SAI cụ thể |
| **A** | **Action** — Hành động | AI phải làm gì khi rule này kích hoạt? |
| **R** | **Result** — Kết quả mong đợi | Output đúng trông như thế nào? |

> "Mỗi rule là một file `.md` riêng, đặt trong thư mục `.agents/rules/`. Tên file dùng kebab-case. Bây giờ mình tạo 3 rules."

### [22:00] Tạo thư mục rules:

```
mkdir -p .agents/rules
```

### [22:30] Rule 1 — Brand Voice | Prompt tạo rule:

```
Tạo file .agents/rules/brand-voice.md với nội dung là quy tắc giọng nói thương hiệu theo format CLEAR. Nội dung rule:

## Context (C):
Rule này áp dụng cho MỌI nội dung viết ra bởi bất kỳ agent nào trong workspace — bao gồm bài viết, caption, báo cáo, email, và phản hồi.

## Limitation (L):
- KHÔNG dùng giọng "thầy dạy trò", giọng giáo huấn
- KHÔNG xưng "tôi" (quá formal) hoặc "tớ" (quá casual) — luôn xưng "mình"
- KHÔNG trộn ngôn ngữ Anh-Việt tùy tiện. Thuật ngữ tiếng Anh giữ nguyên nhưng PHẢI có giải thích tiếng Việt trong ngoặc ở lần đầu xuất hiện
- KHÔNG dùng quá 3 emoji mỗi bài viết

## Example (E):
Cho ít nhất 2 ví dụ ĐÚNG (✅) và 2 ví dụ SAI (❌) với giải thích tại sao sai.

## Action (A):
Khi viết bất kỳ nội dung nào, agent PHẢI:
1. Kiểm tra tone có đúng "chuyên nghiệp + gần gũi" không
2. Kiểm tra xưng hô đúng "mình" chưa
3. Kiểm tra thuật ngữ tiếng Anh đã có giải thích chưa
4. Đếm emoji không quá 3

## Result (R):
Output phải đọc lên nghe như "một đàn anh/chị giỏi trong ngành đang coffee chat với junior" — vừa có kiến thức, vừa thân thiện, vừa có ví dụ thực tế.

Viết file đầy đủ theo format CLEAR, mỗi section rõ ràng.
```

### Expected Output — File `.agents/rules/brand-voice.md`:

```markdown
# Rule: Brand Voice — Giọng Nói Thương Hiệu

> **Phạm vi:** Tất cả agent trong workspace
> **Mức ưu tiên:** Cao
> **Format:** CLEAR

---

## C — Context (Bối cảnh)

Rule này áp dụng cho **MỌI nội dung** được tạo ra bởi bất kỳ agent nào trong workspace, bao gồm nhưng không giới hạn:
- Bài viết mạng xã hội (LinkedIn, Facebook)
- Blog posts và bài phân tích
- Báo cáo và dashboard commentary
- Email và thư từ chuyên nghiệp
- Phản hồi và tương tác

Thương hiệu "Nguyễn Minh Anh" định vị giọng nói là **chuyên nghiệp + gần gũi** — như một đàn anh/chị giỏi trong ngành đang coffee chat với junior.

---

## L — Limitation (Giới hạn)

1. **KHÔNG dùng giọng giáo huấn:** Không viết kiểu "Bạn phải làm thế này", "Đây là cách duy nhất đúng". Thay vào đó dùng "Mình thấy cách này hiệu quả..." hoặc "Theo kinh nghiệm của mình..."
2. **KHÔNG xưng "tôi" hoặc "tớ":** Luôn xưng "mình". "Tôi" quá formal cho mạng xã hội, "tớ" quá casual cho nội dung chuyên môn.
3. **KHÔNG trộn ngôn ngữ tùy tiện:** Thuật ngữ tiếng Anh giữ nguyên nhưng phải kèm giải thích tiếng Việt trong ngoặc ở lần xuất hiện đầu tiên trong mỗi bài.
4. **KHÔNG quá 3 emoji/bài viết:** Emoji dùng có chọn lọc, chỉ dùng: 📊 🎯 💡 ✅ ❌ 🔥

---

## E — Example (Ví dụ)

### ✅ Ví dụ ĐÚNG #1:
> "Mình từng chạy một campaign Facebook với budget 5 triệu mà kéo về đúng 0 lead (khách hàng tiềm năng). Đau lắm, nhưng bài học rút ra cực kỳ giá trị — chia sẻ với mọi người 3 sai lầm mình mắc phải nhé 💡"

→ Đúng vì: xưng "mình", có câu chuyện thật, thuật ngữ "lead" có giải thích, 1 emoji.

### ✅ Ví dụ ĐÚNG #2:
> "Engagement rate (tỷ lệ tương tác) tháng này tăng 45% sau khi mình thay đổi chiến lược hook. Mình đã test 3 kiểu hook khác nhau — đây là kết quả 📊"

→ Đúng vì: có số liệu, thuật ngữ được giải thích, tone gần gũi nhưng chuyên nghiệp.

### ❌ Ví dụ SAI #1:
> "Tôi xin phép trình bày về chiến dịch Facebook Advertising với performance metrics cho thấy significant improvement..."

→ Sai vì: xưng "tôi", quá formal, thuật ngữ tiếng Anh không giải thích.

### ❌ Ví dụ SAI #2:
> "Ê mọi người 😂🔥💡✅❌ hôm nay kể chuyện fail chạy ads nha, đốt 5 củ mà chả được gì luôn á hahaha"

→ Sai vì: quá casual, quá nhiều emoji (5 cái), không có nội dung chuyên môn.

---

## A — Action (Hành động)

Khi tạo bất kỳ nội dung nào, agent PHẢI thực hiện checklist sau:

1. ☐ Kiểm tra xưng hô = "mình" (không phải "tôi", "tớ", "chúng tôi")
2. ☐ Kiểm tra tone = "chuyên nghiệp + gần gũi" (không formal cứng nhắc, không casual quá mức)
3. ☐ Kiểm tra thuật ngữ tiếng Anh đã có giải thích tiếng Việt trong ngoặc chưa
4. ☐ Đếm emoji ≤ 3 và chỉ dùng emoji trong danh sách cho phép
5. ☐ Đọc lại: có nghe như "coffee chat với junior" không?

---

## R — Result (Kết quả mong đợi)

Nội dung đúng brand voice phải đạt được:
- Người đọc cảm thấy **được chia sẻ**, không phải **bị dạy**
- Có **câu chuyện thực tế** hoặc **số liệu minh chứng**
- Thuật ngữ chuyên ngành **ai cũng hiểu** nhờ giải thích
- Giọng văn **nhất quán** qua mọi bài viết — nhận ra "đây là Minh Anh" chỉ bằng cách đọc
```

### [27:00] Rule 2 — Content Quality | Prompt tạo rule:

```
Tạo file .agents/rules/content-quality.md với nội dung là quy tắc chất lượng nội dung theo format CLEAR. Nội dung rule:

## Context (C):
Áp dụng cho mọi bài viết, báo cáo, phân tích được tạo trong workspace. Đảm bảo mọi output đạt tiêu chuẩn chất lượng tối thiểu trước khi xuất ra.

## Limitation (L):
- KHÔNG bịa số liệu, ước lượng, hoặc tạo con số khi không có data
- KHÔNG viết bài quá 400 từ cho LinkedIn, quá 200 từ cho Facebook
- KHÔNG viết đoạn văn quá 3 câu (chia nhỏ để dễ đọc)
- KHÔNG thiếu CTA (Call to Action) ở cuối mỗi bài viết
- KHÔNG thiếu hook ở dòng đầu tiên

## Example (E):
Cho ví dụ bài viết đạt chuẩn chất lượng vs. không đạt.

## Action (A):
Trước khi xuất output, agent PHẢI kiểm tra:
1. Hook dòng đầu có gây tò mò không?
2. Có số liệu/ví dụ minh chứng không? Nếu không có data → nói rõ "chưa có dữ liệu"
3. Đoạn văn có quá 3 câu không? → tách ra
4. CTA cuối bài có cụ thể không?
5. Hashtags có đúng bộ chuẩn thương hiệu không?

## Result (R):
Mọi bài viết phải có cấu trúc: Hook → Thân bài (đoạn ngắn) → CTA → Hashtags.
Khi thiếu dữ liệu, AI phải nói rõ và hỏi lại thay vì bịa.

Viết file đầy đủ theo format CLEAR.
```

### Expected Output — File `.agents/rules/content-quality.md`:

```markdown
# Rule: Content Quality — Tiêu Chuẩn Chất Lượng Nội Dung

> **Phạm vi:** Mọi bài viết, báo cáo, phân tích
> **Mức ưu tiên:** Cao
> **Format:** CLEAR

---

## C — Context (Bối cảnh)

Rule này là "quality gate" (cổng chất lượng) — mọi nội dung phải đi qua trước khi được coi là hoàn thành. Áp dụng cho:
- Bài viết mạng xã hội (LinkedIn, Facebook)
- Bài blog và phân tích chuyên sâu
- Báo cáo hiệu quả và dashboard commentary
- Bất kỳ output nào chứa số liệu hoặc nhận định

---

## L — Limitation (Giới hạn)

1. **TUYỆT ĐỐI KHÔNG bịa số liệu:** Khi không có dữ liệu, phải nói rõ "Mình chưa có dữ liệu phần này. Bạn có thể cung cấp file CSV hoặc số liệu cụ thể không?"
2. **Giới hạn độ dài:**
   - LinkedIn: 200–400 từ
   - Facebook: 100–200 từ
   - Blog: 800–1500 từ
3. **Tối đa 3 câu/đoạn:** Đoạn văn dài hơn 3 câu phải được tách ra
4. **Bắt buộc có Hook + CTA:** Không bài nào được thiếu
5. **Hashtags theo bộ chuẩn:** Phải bao gồm ít nhất 1 trong: #MarketingThucChien #DataDriven #HocMarketing #PersonalBrand

---

## E — Example (Ví dụ)

### ✅ Bài viết ĐẠT chuẩn:
> **"3 sai lầm khi bắt đầu dùng AI mà mình ước ai nói sớm hơn."** ← Hook
>
> Sai lầm #1: Hỏi AI câu quá chung chung.
> "Viết cho mình bài gì đó hay" → AI trả lời chung chung.
> Thay vào đó: "Viết bài LinkedIn 250 từ về data-driven marketing cho marketer 25 tuổi." ← Đoạn ≤ 3 câu
>
> [Sai lầm #2, #3 tương tự...]
>
> 💬 Bạn từng mắc sai lầm nào khi dùng AI? Comment chia sẻ nhé! ← CTA cụ thể
>
> #MarketingThucChien #AI #HocMarketing ← Hashtags chuẩn

### ❌ Bài viết KHÔNG đạt:
> "AI rất hữu ích trong công việc. Nó giúp tiết kiệm thời gian và tăng năng suất. Bạn nên thử dùng AI. Có nhiều công cụ AI miễn phí. ChatGPT là một ví dụ. Gemini cũng vậy. Claude cũng tốt. Hãy bắt đầu ngay hôm nay."
>
> → Không có hook, đoạn 8 câu liền, không có CTA, không có hashtag, không có số liệu.

---

## A — Action (Hành động)

**Quality Checklist** — Agent phải chạy trước khi xuất output:

| # | Kiểm tra | Tiêu chí |
|---|----------|----------|
| 1 | Hook | Dòng đầu tiên có gây tò mò không? Người đọc có muốn đọc tiếp? |
| 2 | Số liệu | Có data minh chứng? Nếu không có → đã nói rõ và hỏi lại? |
| 3 | Đoạn văn | Mỗi đoạn ≤ 3 câu? |
| 4 | Độ dài | Đúng giới hạn theo platform? |
| 5 | CTA | Cuối bài có lời kêu gọi hành động cụ thể? |
| 6 | Hashtags | Có ít nhất 1 hashtag chuẩn thương hiệu? |

Nếu bất kỳ mục nào FAIL → sửa trước khi xuất output.

---

## R — Result (Kết quả mong đợi)

Bài viết hoàn thành phải khiến người đọc:
1. **Dừng scroll** nhờ hook hấp dẫn
2. **Đọc hết** nhờ đoạn ngắn, dễ scan
3. **Hành động** nhờ CTA rõ ràng
4. **Tin tưởng** nhờ số liệu/bằng chứng thật
```

### [30:00] Rule 3 — Visual Standards | Prompt tạo rule:

```
Tạo file .agents/rules/visual-standards.md với nội dung là quy tắc tiêu chuẩn hình ảnh theo format CLEAR. Nội dung rule:

## Context (C):
Áp dụng khi tạo HTML, dashboard, báo cáo có thiết kế, hoặc bất kỳ output nào có yếu tố visual. Đảm bảo mọi sản phẩm visual đều nhất quán với brand identity.

## Limitation (L):
- KHÔNG dùng màu ngoài bảng màu thương hiệu (Navy #1E3A8A, Teal #06B6D4, Amber #F59E0B, Slate 900 #0F172A, Slate 50 #F8FAFC)
- KHÔNG dùng font ngoài bộ font chuẩn (Inter cho heading, system font cho body)
- KHÔNG thiếu dark mode khi tạo HTML/dashboard
- KHÔNG dùng inline styles lộn xộn — phải dùng CSS variables
- KHÔNG thiếu responsive design

## Example (E):
Cho ví dụ CSS variables đúng chuẩn, và ví dụ code vi phạm.

## Action (A):
Khi tạo bất kỳ HTML/CSS nào, agent PHẢI:
1. Khai báo CSS variables theo bảng màu thương hiệu
2. Import font Inter từ Google Fonts
3. Implement dark mode toggle hoặc prefers-color-scheme
4. Test responsive ở 3 breakpoints: mobile (375px), tablet (768px), desktop (1200px)

## Result (R):
Mọi sản phẩm visual phải nhìn "nhận ra ngay đây là Minh Anh" — cùng bảng màu, cùng font, cùng phong cách.

Viết file đầy đủ theo format CLEAR.
```

### Expected Output — File `.agents/rules/visual-standards.md`:

```markdown
# Rule: Visual Standards — Tiêu Chuẩn Hình Ảnh

> **Phạm vi:** HTML, Dashboard, báo cáo visual, infographic
> **Mức ưu tiên:** Trung bình–Cao
> **Format:** CLEAR

---

## C — Context (Bối cảnh)

Rule này áp dụng khi agent tạo bất kỳ sản phẩm nào có yếu tố visual:
- HTML pages và web dashboards
- Báo cáo có charts, bảng dữ liệu
- Email templates có thiết kế
- Infographic và slide presentations

Mục tiêu: Mọi output visual đều **nhận diện được thương hiệu** — cùng bảng màu, cùng typography, cùng layout pattern.

---

## L — Limitation (Giới hạn)

1. **Chỉ dùng màu trong Brand Palette:**
   - Primary: `#1E3A8A` (Navy)
   - Secondary: `#06B6D4` (Teal)
   - Accent: `#F59E0B` (Amber)
   - Background Dark: `#0F172A` (Slate 900)
   - Background Light: `#F8FAFC` (Slate 50)
   - Được phép dùng các shade/tint của 5 màu trên (opacity, lighten, darken)

2. **Chỉ dùng font chuẩn:**
   - Heading: Inter (700 Bold)
   - Body: System font stack
   - Code/Data: JetBrains Mono hoặc monospace

3. **Bắt buộc có Dark Mode:** Mọi HTML phải support `prefers-color-scheme: dark`
4. **Bắt buộc Responsive:** Hoạt động trên mobile (375px), tablet (768px), desktop (1200px+)
5. **Dùng CSS Variables:** Không hardcode màu trong từng element

---

## E — Example (Ví dụ)

### ✅ CSS Variables ĐÚNG chuẩn:
```css
:root {
  --color-primary: #1E3A8A;
  --color-secondary: #06B6D4;
  --color-accent: #F59E0B;
  --color-bg: #F8FAFC;
  --color-text: #0F172A;
  --font-heading: 'Inter', sans-serif;
  --font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

[data-theme="dark"] {
  --color-bg: #0F172A;
  --color-text: #F8FAFC;
}
```

### ❌ Code VI PHẠM:
```css
/* SAI — hardcode màu random, không dùng brand palette */
.card { background: #FF5733; color: white; font-family: Arial; }
.header { background: linear-gradient(red, blue); }
```

→ Sai vì: dùng màu ngoài brand palette, hardcode trực tiếp, font Arial không phải Inter.

---

## A — Action (Hành động)

Khi tạo HTML/CSS, agent PHẢI:
1. ☐ Khai báo CSS variables ở `:root` theo brand palette
2. ☐ Import Inter font: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');`
3. ☐ Implement dark mode (toggle hoặc `prefers-color-scheme`)
4. ☐ Kiểm tra responsive ở 3 breakpoints
5. ☐ Không có màu hardcode nào ngoài brand palette

---

## R — Result (Kết quả mong đợi)

Sản phẩm visual hoàn thành phải:
- **Nhận diện brand:** Nhìn vào biết ngay "đây là Minh Anh" nhờ bảng màu Navy-Teal-Amber
- **Chuyên nghiệp:** Typography rõ ràng, layout sạch sẽ, spacing nhất quán
- **Accessible:** Đọc được cả light mode và dark mode
- **Responsive:** Dùng tốt trên điện thoại lẫn máy tính
```

### [34:00] GV tổng kết 3 rules:

> "Vậy mình đã có 3 rules theo format CLEAR:
> 1. **brand-voice.md** — kiểm soát giọng nói, xưng hô, emoji
> 2. **content-quality.md** — kiểm soát chất lượng, cấu trúc, số liệu
> 3. **visual-standards.md** — kiểm soát bảng màu, font, responsive
>
> Mỗi rule có 5 phần: Context, Limitation, Example, Action, Result. AI sẽ đọc tất cả và tuân theo khi tạo output."

---

## BƯỚC 4: After Test — CÙNG Prompt, Kết Quả Khác Biệt [35:00–42:00]

### [35:00] GV nói:

> "Bây giờ mình chạy lại ĐÚNG 2 prompt ban đầu. Hãy xem sự khác biệt khi có knowledge + rules."

### [35:30] Prompt #1 — Viết bài LinkedIn (AFTER — CÙNG PROMPT)

```
Viết cho mình 1 bài LinkedIn về chủ đề "Cách dùng AI hiệu quả trong Marketing". Bài viết khoảng 200 từ, dành cho đối tượng là marketer trẻ.
```

### Expected Output (AFTER — có brand consistency):

AI sẽ viết bài với:
- ✅ **Hook mạnh dòng đầu:** "3 lần mình suýt bỏ AI — và tại sao mình vẫn dùng đến hôm nay."
- ✅ **Xưng "mình"** nhất quán (theo brand-voice.md)
- ✅ **Thuật ngữ có giải thích:** "ROI (lợi nhuận trên đầu tư)", "engagement rate (tỷ lệ tương tác)"
- ✅ **Đoạn ngắn ≤ 3 câu** (theo content-quality.md)
- ✅ **CTA rõ ràng cuối bài** (theo content-quality.md)
- ✅ **Hashtags chuẩn:** #MarketingThucChien #AI #DataDriven (theo brand-guidelines.md)
- ✅ **≤ 3 emoji** và chỉ emoji được phép (theo brand-voice.md)

### [37:00] So sánh Before vs After:

| Tiêu chí | ❌ BEFORE (không rules) | ✅ AFTER (có rules) |
|----------|----------------------|-------------------|
| Xưng hô | Lúc "tôi", lúc "bạn" | Luôn "mình" |
| Tone | Lúc formal, lúc casual | Chuyên nghiệp + gần gũi |
| Thuật ngữ | Tiếng Anh không giải thích | Có giải thích tiếng Việt |
| Hook | Yếu hoặc không có | Dòng đầu gây tò mò |
| CTA | Thiếu hoặc mơ hồ | Cụ thể, kêu gọi hành động rõ |
| Emoji | Random, quá nhiều | ≤ 3, có chọn lọc |
| Hashtags | Random | Đúng bộ chuẩn thương hiệu |
| Cấu trúc | Đoạn dài, khó scan | Hook → Body ngắn → CTA → Tags |

### [38:00] Prompt #2 — Phân tích dữ liệu (AFTER — CÙNG PROMPT)

```
Phân tích hiệu quả nội dung mạng xã hội tháng này và đề xuất chiến lược cải thiện.
```

### Expected Output (AFTER):

AI sẽ:
- ✅ **Không bịa số liệu** — thay vào đó hỏi: "Mình cần dữ liệu engagement tháng này. Bạn có thể cung cấp file CSV từ sample-data/ không?"
- ✅ **Nếu đã có CSV** → phân tích từ dữ liệu thật, trích nguồn rõ ràng
- ✅ **Format report chuẩn** — có heading, bảng số liệu, insights, recommendations
- ✅ **Đúng brand palette** nếu tạo chart/bảng

### [40:00] GV tổng kết BEFORE vs AFTER:

> "Cùng 1 prompt, cùng 1 AI — nhưng output khác hoàn toàn. Đây chính là sức mạnh của Knowledge + Rules:
> - **Knowledge** cho AI biết brand của bạn là gì
> - **Rules** cho AI biết phải tuân thủ gì khi viết
> - Kết hợp lại → output nhất quán, chuyên nghiệp, đúng thương hiệu."

---

## BƯỚC 5: Brand Dashboard HTML [42:00–45:00]

### [42:00] Prompt tạo Dashboard:

```
Tạo file outputs/brand-dashboard.html — một dashboard theo dõi thương hiệu cá nhân với các yêu cầu:

1. Dark mode mặc định, có toggle sang light mode
2. Dùng đúng brand palette: Navy (#1E3A8A), Teal (#06B6D4), Amber (#F59E0B), nền tối Slate 900 (#0F172A)
3. Font: Inter từ Google Fonts
4. Responsive — hoạt động trên mobile

Nội dung dashboard gồm:
- Header: "Brand Dashboard — Nguyễn Minh Anh" + tagline
- 4 KPI cards: Tổng bài viết (28), Engagement trung bình (4.2%), Followers mới tháng này (156), Top platform (LinkedIn)
- 1 biểu đồ cột Chart.js: Engagement theo tuần (4 tuần gần nhất)
- 1 bảng "Bài viết gần nhất" với 5 dòng mẫu (tiêu đề, platform, engagement, ngày đăng)
- Footer: "Powered by Antigravity AI Workspace"

Dùng CSS variables, glassmorphism cho cards, smooth transitions.
Tất cả trong 1 file HTML duy nhất (inline CSS + JS, import Chart.js từ CDN).
```

### Expected Output:

Dashboard HTML hoàn chỉnh với:
- 🎨 Dark mode mặc định, bảng màu Navy-Teal-Amber
- 📊 4 KPI cards với glassmorphism effect
- 📈 Chart.js bar chart — engagement theo tuần
- 📋 Bảng bài viết gần nhất
- 🌙/☀️ Toggle dark/light mode
- 📱 Responsive layout

### [44:00] GV mở dashboard trên trình duyệt:

> "Dashboard này tuân thủ visual-standards.md — đúng màu, đúng font, có dark mode, responsive. Nếu không có rule, AI có thể dùng màu đỏ-xanh random, font Arial, không dark mode."

---

# PHẦN 2: THỰC HÀNH — HV TRÊN WORKSPACE B (60 phút)

---

## BƯỚC 1: Before Test trên workspace HV [00:00–10:00]

### [00:00] HV chạy prompt BEFORE:

```
Viết cho mình 1 bài LinkedIn về chủ đề "Cách dùng AI hiệu quả trong Marketing". Bài viết khoảng 200 từ, dành cho đối tượng là marketer trẻ.
```

### Hướng dẫn HV:
- Lưu output vào `outputs/before-knowledge-rules.md`
- Ghi nhận các vấn đề: tone, xưng hô, cấu trúc, hashtags

---

## BƯỚC 2: Tạo Knowledge File [10:00–25:00]

### [10:00] HV tạo brand-guidelines.md:

```
Tạo file knowledge-base/brand-guidelines.md với nội dung hướng dẫn thương hiệu cho thương hiệu cá nhân của mình. Bao gồm:

1. Brand Identity: tên, tagline, lĩnh vực chuyên môn, bảng màu (chọn 3-5 màu yêu thích)
2. Tone of Voice: phong cách viết, xưng hô, mức độ formal/casual
3. Content Dos and Don'ts: 5 điều nên làm, 5 điều không nên làm
4. Visual Standards: font, emoji cho phép, hashtags chuẩn
5. Platform Guidelines: hướng dẫn riêng cho LinkedIn, Facebook

Hãy tùy chỉnh theo thương hiệu cá nhân của mình — KHÔNG copy y nguyên ví dụ mẫu. Dùng tên, lĩnh vực, phong cách riêng của bạn.
```

### Lưu ý GV:
- HV phải **tùy chỉnh** theo brand riêng, không copy template
- Kiểm tra xem HV đã thay đổi tên, lĩnh vực, bảng màu chưa

---

## BƯỚC 3: Tạo 3 Rules Files [25:00–45:00]

### [25:00] Tạo thư mục rules:

```
mkdir -p .agents/rules
```

### [26:00] Rule 1 — brand-voice.md:

```
Tạo file .agents/rules/brand-voice.md với quy tắc giọng nói thương hiệu theo format CLEAR (Context, Limitation, Example, Action, Result). Nội dung tùy chỉnh theo brand của mình:

- C: Rule áp dụng cho mọi nội dung viết ra
- L: Giới hạn về xưng hô, tone, ngôn ngữ, emoji (tối đa 3 emoji/bài)
- E: Ít nhất 2 ví dụ ĐÚNG và 2 ví dụ SAI
- A: Checklist kiểm tra trước khi xuất output
- R: Mô tả output đúng brand voice trông như thế nào

Dựa trên brand guidelines đã tạo ở knowledge-base/brand-guidelines.md.
```

### [33:00] Rule 2 — content-quality.md:

```
Tạo file .agents/rules/content-quality.md với quy tắc chất lượng nội dung theo format CLEAR:

- C: Áp dụng cho mọi bài viết, báo cáo, phân tích
- L: Không bịa số liệu, giới hạn độ dài, đoạn văn tối đa 3 câu, bắt buộc hook + CTA
- E: Ví dụ bài đạt chuẩn vs không đạt
- A: Quality checklist 6 mục kiểm tra
- R: Bài viết phải khiến người đọc dừng scroll, đọc hết, và hành động

Dựa trên brand guidelines đã tạo.
```

### [40:00] Rule 3 — visual-standards.md:

```
Tạo file .agents/rules/visual-standards.md với quy tắc tiêu chuẩn hình ảnh theo format CLEAR:

- C: Áp dụng khi tạo HTML, dashboard, báo cáo visual
- L: Chỉ dùng brand palette, font chuẩn, bắt buộc dark mode + responsive
- E: CSS variables đúng vs code vi phạm
- A: Checklist 5 mục khi tạo HTML/CSS
- R: Sản phẩm visual nhận diện được brand ngay lập tức

Dùng bảng màu từ brand-guidelines.md.
```

---

## BƯỚC 4: After Test — So Sánh [45:00–55:00]

### [45:00] HV chạy lại CÙNG prompt AFTER:

```
Viết cho mình 1 bài LinkedIn về chủ đề "Cách dùng AI hiệu quả trong Marketing". Bài viết khoảng 200 từ, dành cho đối tượng là marketer trẻ.
```

### Hướng dẫn HV:
- Lưu output vào `outputs/after-knowledge-rules.md`
- So sánh 2 file: `before-knowledge-rules.md` vs `after-knowledge-rules.md`
- Ghi nhận sự khác biệt vào `docs/pdca-log.md`

### [50:00] Prompt so sánh (HV tự chạy):

```
So sánh 2 bài viết trong outputs/before-knowledge-rules.md và outputs/after-knowledge-rules.md. Tạo bảng so sánh chi tiết theo các tiêu chí: tone/voice, xưng hô, cấu trúc (hook/body/CTA), thuật ngữ, hashtags, emoji, chất lượng tổng thể. Cho điểm mỗi bài từ 1-10.
```

---

## BƯỚC 5: Dashboard (Optional) [55:00–60:00]

### [55:00] HV tạo dashboard (nếu còn thời gian):

```
Tạo file outputs/brand-dashboard.html — dashboard theo dõi thương hiệu cá nhân với dark mode, KPI cards, và biểu đồ Chart.js. Dùng đúng brand palette từ knowledge-base/brand-guidelines.md và tuân thủ visual-standards.md.
```

---

# CHECKLIST KẾT THÚC BUỔI 6

## Files mới sau buổi 6:

```diff
  personal-brand-workspace/
  ├── AGENTS.md
  ├── .agents/
  │   ├── skills/
  │   │   ├── content-writer/SKILL.md
  │   │   └── engagement-analyst/SKILL.md
  │   ├── workflows/content-creation-flow.md
  │   └── rules/
+ │       ├── brand-voice.md              ← NEW: Quy tắc giọng nói (CLEAR)
+ │       ├── content-quality.md          ← NEW: Tiêu chuẩn chất lượng (CLEAR)
+ │       └── visual-standards.md         ← NEW: Tiêu chuẩn hình ảnh (CLEAR)
  ├── knowledge-base/
  │   ├── brand-profile.md
  │   ├── target-audience.md
  │   ├── content-pillars.md
+ │   └── brand-guidelines.md            ← NEW: Knowledge thương hiệu chi tiết
  ├── sample-data/
  │   ├── social-media-posts.csv
  │   ├── monthly-report-data.csv
  │   ├── content-calendar.csv
  │   └── engagement-metrics.csv
  ├── outputs/
+ │   ├── before-knowledge-rules.md      ← NEW: Output trước khi có rules
+ │   ├── after-knowledge-rules.md       ← NEW: Output sau khi có rules
+ │   └── brand-dashboard.html           ← NEW: Dashboard HTML (optional)
  └── docs/
      ├── workspace-map.md
      ├── pdca-log.md                     ← CẬP NHẬT: thêm PDCA buổi 6
      └── lesson-to-workspace-map.md
```

## Checklist HV phải hoàn thành:

- [ ] Có file `knowledge-base/brand-guidelines.md` với nội dung tùy chỉnh theo brand riêng
- [ ] Có file `.agents/rules/brand-voice.md` đúng format CLEAR (5 phần: C-L-E-A-R)
- [ ] Có file `.agents/rules/content-quality.md` đúng format CLEAR
- [ ] Có file `.agents/rules/visual-standards.md` đúng format CLEAR
- [ ] Có file `outputs/before-knowledge-rules.md` (output trước khi thêm knowledge/rules)
- [ ] Có file `outputs/after-knowledge-rules.md` (output sau khi thêm knowledge/rules)
- [ ] So sánh before/after ghi nhận sự khác biệt rõ ràng
- [ ] PDCA log cập nhật với bài học buổi 6

---

## TÓM TẮT BÀI HỌC CHÍNH

| # | Khái niệm | Ghi nhớ |
|---|-----------|---------|
| 1 | Knowledge | File `.md` trong workspace — cung cấp thông tin, context cho AI |
| 2 | Data | File `.csv` — cung cấp dữ liệu số cho phân tích |
| 3 | Rules | File `.md` trong `.agents/rules/` — ràng buộc, giới hạn AI |
| 4 | CLEAR Format | Context → Limitation → Example → Action → Result |
| 5 | Before/After | Cùng prompt, khác output — nhờ knowledge + rules |
| 6 | Agent = Skill | Trong Antigravity, agent và skill là cùng một khái niệm |

> **Buổi tiếp theo (Session 07):** Handoff & Multi-Agent — kết nối nhiều skills/agents để làm việc phối hợp trong workflow phức tạp hơn.

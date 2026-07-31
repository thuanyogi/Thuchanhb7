# Buổi 02: PDCA Operation — Demo & Thực Hành

> **Phase 1 — Operate | Workspace A: `personal-brand-complete/` (GV) | Workspace B: `personal-brand-workspace/` (HV)**

---

## Tổng quan

| Hạng mục | Chi tiết |
|---|---|
| **Mục tiêu** | HV nắm vững PDCA cycle, chạy 1 iteration hoàn chỉnh trên data thực |
| **Thời lượng** | Demo 45 phút + Thực hành 60 phút |
| **Artifacts tạo ra** | `pdca-log.md` (iteration 1), `target-audience.md`, `pdca-analysis.md`, `improved-post.md` |
| **Kết nối trước** | Buổi 1 — Tổng quan hệ thống (đã có brand-profile.md, intro-draft.md) |
| **Kết nối sau** | Buổi 3 — Expertise Skill |

---

## Chuẩn bị trước buổi học

### Giảng viên (GV)
- [ ] Mở workspace `personal-brand-complete/` trong Antigravity
- [ ] Kiểm tra `docs/pdca-log.md` đã có 3 iterations mẫu
- [ ] Chuẩn bị slide/bảng vẽ vòng tròn PDCA
- [ ] Test run phân tích CSV → pattern analysis
- [ ] Chuẩn bị output mẫu cho backup

### Học viên (HV)
- [ ] Workspace `personal-brand-workspace/` đã hoàn thành Buổi 1
- [ ] `knowledge-base/brand-profile.md` đã điền đầy đủ
- [ ] `outputs/content-drafts/intro-draft.md` đã tạo
- [ ] `outputs/analytics-reports/first-analysis.md` đã tạo

---

## PHẦN DEMO — GV (45 phút)

> 🎓 GV demo trên **Workspace A** (`personal-brand-complete/`)
>
> Mục đích: Show PDCA cycle hoàn chỉnh, từ Plan→Do→Check→Act, trên data thực.

### Bước 1: Giới thiệu PDCA Framework (5 phút)

**⏱ Thời gian:** 0:00 — 0:05

**Hành động:**
- Vẽ vòng tròn PDCA trên bảng/slide
- Giải thích từng phase

**🎤 Script nói:**
> "Buổi trước, các bạn đã chạy prompt và tạo output. Nhưng output đó có TỐT chưa? Làm sao biết? Và làm sao CẢI THIỆN?"
>
> "Đó là vai trò của PDCA — Plan, Do, Check, Act. Đây là engine của agentic AI."
>
> "Không có PDCA, AI chạy 1 lần rồi thôi. Với PDCA, MỖI LẦN CHẠY ĐỀU TỐT HƠN."

**Vòng tròn PDCA:**
```
    ┌──────────┐
    │   PLAN   │  ← Đặt mục tiêu cụ thể
    └────┬─────┘
         │
    ┌────▼─────┐
    │    DO    │  ← Thực hiện, chạy prompt
    └────┬─────┘
         │
    ┌────▼─────┐
    │  CHECK   │  ← Đánh giá kết quả vs mục tiêu
    └────┬─────┘
         │
    ┌────▼─────┐
    │   ACT    │  ← Cải thiện, ghi log, lặp lại
    └──────────┘
```

**Key message:**
> "PDCA không phải lý thuyết. Ngay bây giờ tôi sẽ chạy LIVE 1 iteration."

### Bước 2: Mở pdca-log.md mẫu — 3 iterations đã có (5 phút)

**⏱ Thời gian:** 0:05 — 0:10

**Hành động:** Mở `docs/pdca-log.md` trong workspace GV

**Nội dung mẫu (đã có 3 iterations):**
```markdown
# PDCA Log

## Iteration 1 — 2024-01-05
### Plan
Mục tiêu: Viết 1 bài LinkedIn post chất lượng cao.
Metric: Bài viết có hook mạnh, CTA rõ, 150-250 từ.

### Do
Chạy prompt viết content → Output: bài viết 180 từ.

### Check
- Hook: 2/5 — Mở đầu yếu ("Hôm nay tôi muốn chia sẻ...")
- Nội dung: 3/5 — Có thông tin nhưng thiếu câu chuyện
- CTA: 1/5 — Không có CTA
- Nhận xét: Bài viết GENERIC, thiếu personal touch

### Act
- Nguyên nhân: AI không biết gì về tôi → thiếu context
- Hành động: Tạo brand-profile.md với thông tin cá nhân
- Iteration tiếp: Chạy lại với brand-profile

---

## Iteration 2 — 2024-01-08
### Plan
Mục tiêu: Viết bài LinkedIn có personal touch.
Thay đổi: Đã thêm brand-profile.md.

### Do
Chạy prompt viết content + tham chiếu brand-profile → Output cải thiện.

### Check
- Hook: 3/5 — Tốt hơn nhưng vẫn chưa compelling
- Nội dung: 4/5 — Có câu chuyện cá nhân ✓
- CTA: 3/5 — Có nhưng yếu
- Nhận xét: CÓ personality, nhưng content chưa ĐÚNG audience

### Act
- Nguyên nhân: AI không biết viết cho AI → thiếu target audience info
- Hành động: Tạo target-audience.md
- Iteration tiếp: Chạy lại với target-audience

---

## Iteration 3 — 2024-01-12
### Plan
Mục tiêu: Viết bài LinkedIn đúng audience + personal.
Thay đổi: Đã thêm target-audience.md.

### Do
Chạy prompt + brand-profile + target-audience → Output chính xác.

### Check
- Hook: 4/5 — Mở đầu bằng câu hỏi relevant ✓
- Nội dung: 5/5 — Đúng pain point audience ✓
- CTA: 4/5 — Rõ ràng, actionable ✓
- Nhận xét: CHÍNH XÁC target. Content quality tăng rõ rệt.

### Act
- Thành công: brand-profile + target-audience = content chất lượng
- Tiếp theo: Tạo content-pillars để đa dạng hóa chủ đề
```

**🎤 Script nói:**
> "3 iterations này cho thấy: Iteration 1 thất bại → nhận ra thiếu context → Iteration 2 thêm brand-profile → tốt hơn → Iteration 3 thêm target-audience → chính xác."
>
> "ĐÂY là sức mạnh của PDCA: mỗi vòng lặp, workspace THÔNG MINH HƠN."

### Bước 3: PLAN Phase — Đặt mục tiêu (5 phút)

**⏱ Thời gian:** 0:10 — 0:15

**🎤 Script nói:**
> "Bây giờ tôi chạy iteration 4 LIVE. Bước đầu tiên: PLAN — đặt mục tiêu cụ thể."
>
> "Mục tiêu hôm nay: TÌM PATTERN bài có engagement > 5%. Pattern nào lặp lại ở các bài hiệu quả?"

**Ghi vào pdca-log.md:**
```markdown
## Iteration 4 — [ngày hôm nay]
### Plan
Mục tiêu: Tìm pattern bài có engagement > 5%.
Câu hỏi cần trả lời:
1. Bài nào có engagement > 5%?
2. Các bài đó có điểm chung gì?
3. Pattern nào lặp lại?
Metric thành công: Xác định được ≥3 patterns rõ ràng.
```

### Bước 4: DO Phase — Thực hiện phân tích (10 phút)

**⏱ Thời gian:** 0:15 — 0:25

**Prompt mẫu (copy-paste):**
```
Đọc file sample-data/social-media-posts.csv.
Tôi muốn tìm hiểu:
1. Bài nào có engagement rate > 5%?
2. Các bài đó có điểm chung gì? (chủ đề, format, thời gian đăng, độ dài)
3. Pattern nào lặp lại ở các bài hiệu quả?

Trình bày kết quả dạng bảng, sau đó tóm tắt 3 insight chính.
Xuất vào outputs/analytics-reports/pattern-analysis.md
```

**Output kỳ vọng:**
```markdown
# Phân Tích Pattern Engagement > 5%

## Bảng kết quả

| # | Ngày | Chủ đề | Format | Độ dài | Engagement | Ngày đăng |
|---|---|---|---|---|---|---|
| 1 | 15/03 | Thất bại đầu đời | Storytelling | 200 từ | 8.7% | Thứ 3 |
| 2 | 22/03 | 5 công cụ AI | Listicle | 180 từ | 7.3% | Thứ 5 |
| 3 | 08/04 | Sai lầm quản lý | Storytelling | 220 từ | 6.8% | Thứ 3 |
| 4 | 19/04 | Framework 3C | How-to | 250 từ | 6.2% | Thứ 4 |
| 5 | 03/05 | Bài học mentor | Storytelling | 190 từ | 5.9% | Thứ 3 |

## 3 Insights Chính

### Insight 1: Storytelling chiếm ưu thế
- 3/5 bài engagement cao nhất là storytelling
- Engagement trung bình storytelling: 7.1% vs non-storytelling: 4.2%
- Storytelling có engagement cao hơn 69% so với format khác

### Insight 2: Độ dài tối ưu 180-220 từ
- Bài 180-220 từ: engagement trung bình 6.5%
- Bài > 300 từ: engagement trung bình 2.8%
- Bài < 100 từ: engagement trung bình 3.1%

### Insight 3: Thứ 3 là ngày vàng
- 3/5 bài top đăng Thứ 3
- Engagement trung bình Thứ 3: 6.2% vs ngày khác: 3.8%
```

**🎤 Script nói:**
> "Đây là bước DO — AI thực hiện phân tích. Để ý: tôi cho AI mục tiêu RÕ RÀNG từ bước PLAN, nên output cũng CHÍNH XÁC."

### Bước 5: DO Phase tiếp — Viết lại bài kém (8 phút)

**⏱ Thời gian:** 0:25 — 0:33

**Prompt mẫu (copy-paste):**
```
Dựa trên phân tích vừa rồi, 3 insight chính là:
1. Storytelling có engagement cao nhất
2. Độ dài tối ưu 180-220 từ
3. Thứ 3 là ngày đăng hiệu quả nhất

Bây giờ hãy:
1. Tìm bài có engagement THẤP NHẤT trong CSV
2. Viết lại bài đó, áp dụng 3 pattern trên
3. Giữ cùng chủ đề nhưng chuyển sang format storytelling
4. Độ dài 180-220 từ

Xuất vào outputs/content-drafts/improved-post.md
```

**Output kỳ vọng:**
```markdown
# Bài Viết Cải Thiện

## Bài gốc (Engagement: 1.1%)
> "Giới thiệu dịch vụ tư vấn marketing mới. Chúng tôi cung cấp giải pháp 
> toàn diện cho doanh nghiệp vừa và nhỏ. Liên hệ ngay để được tư vấn."

## Bài cải thiện (áp dụng 3 patterns)

🎯 Câu chuyện về lần tôi "nói không" với khách hàng lớn nhất

Tháng 6 năm ngoái, CEO một công ty 500 nhân viên gọi cho tôi:
"Anh An, tôi cần campaign viral trong 2 tuần."

Tôi nói: "Không."

Không phải vì tôi không muốn deal lớn. Mà vì "viral trong 2 tuần" 
là lời hứa mà không marketer nào nên đưa ra.

Thay vào đó, tôi đề xuất:
✅ Tuần 1-2: Nghiên cứu audience thực sự
✅ Tuần 3-4: Xây content foundation
✅ Tháng 2-3: Scale dần và tối ưu

6 tháng sau, organic reach tăng 340%.

Bài học: Khách hàng cần người DÁM nói thật, không phải người nói "vâng".

Bạn có dám nói "không" với yêu cầu bất hợp lý không?

#PersonalBranding #Marketing #LeadershipLesson
```

### Bước 6: CHECK Phase — Đánh giá (7 phút)

**⏱ Thời gian:** 0:33 — 0:40

**Prompt mẫu (copy-paste):**
```
So sánh bài gốc (engagement thấp nhất) với bài đã cải thiện.
Đánh giá theo 5 tiêu chí:
1. Hook mở đầu (1-5)
2. Cấu trúc (1-5)
3. Call-to-action (1-5)
4. Relevance với target audience (1-5)
5. Tổng thể (1-5)

Kết luận: Cải thiện thành công hay cần iteration tiếp?
```

**Output kỳ vọng:**
```markdown
# Đánh Giá Before/After

| Tiêu chí | Bài gốc | Bài mới | Thay đổi |
|---|---|---|---|
| Hook mở đầu | 1/5 | 4/5 | +3 ✅ |
| Cấu trúc | 2/5 | 5/5 | +3 ✅ |
| Call-to-action | 1/5 | 4/5 | +3 ✅ |
| Relevance | 2/5 | 4/5 | +2 ✅ |
| Tổng thể | 1.5/5 | 4.2/5 | +2.7 ✅ |

## Kết luận
**Cải thiện THÀNH CÔNG.** Tổng điểm tăng từ 1.5 → 4.2 (+180%).

Điểm mạnh cải thiện:
- Storytelling thay vì hard-sell
- Có hook bằng tình huống thực
- CTA bằng câu hỏi engaging

Cần cải thiện thêm:
- Thêm data/số liệu vào story
- CTA có thể mạnh hơn

Đề xuất: Iteration tiếp tập trung vào data-driven storytelling.
```

### Bước 7: ACT Phase — Ghi log & Tạo knowledge (5 phút)

**⏱ Thời gian:** 0:40 — 0:45

**Hành động 1:** Ghi PDCA log iteration 4

**Format log entry:**
```markdown
## Iteration 4 — [ngày hôm nay]
### Plan
Mục tiêu: Tìm pattern bài engagement > 5%.
Metric: Xác định ≥3 patterns.

### Do
- Phân tích social-media-posts.csv
- Tìm được 5 bài engagement > 5%
- Viết lại bài engagement thấp nhất

### Check
- 3 patterns xác định: Storytelling, 180-220 từ, đăng Thứ 3
- Bài cải thiện: 1.5 → 4.2/5 (+180%)
- Mục tiêu ĐẠT ✓

### Act
- Patterns đã ghi nhận → áp dụng cho content tương lai
- Tạo target-audience.md từ insights phân tích
- Iteration tiếp: Tạo content-pillars dựa trên patterns
```

**Hành động 2:** Tạo `knowledge-base/target-audience.md`

**Prompt mẫu (copy-paste):**
```
Dựa trên phân tích social media data vừa rồi, tạo file 
knowledge-base/target-audience.md với cấu trúc:

# Target Audience Profile
## Demographics
## Pain Points
## Content Preferences
## Engagement Patterns
## Best Times to Post
## Preferred Content Formats

Điền thông tin từ insights phân tích.
```

**Output kỳ vọng:**
```markdown
# Target Audience Profile

## Demographics
- Độ tuổi: 28-42
- Vị trí: Marketing Manager, Brand Manager, Chủ doanh nghiệp nhỏ
- Kinh nghiệm: 3-10 năm trong marketing/business
- Location: Chủ yếu TP.HCM và Hà Nội
- Nền tảng chính: LinkedIn, sau đó Facebook

## Pain Points
- Không biết xây personal brand bắt đầu từ đâu
- Viết content nhưng không có engagement
- Muốn được nhận diện là expert nhưng sợ "show off"
- Thiếu thời gian tạo content chất lượng
- Không biết đo lường hiệu quả personal branding

## Content Preferences
- Thích câu chuyện thực tế hơn lý thuyết
- Prefer format ngắn gọn (150-250 từ)
- Muốn có actionable takeaways
- Appreciate vulnerability và honest sharing

## Engagement Patterns
- Tương tác cao nhất: Storytelling (7.1% avg)
- Tương tác trung bình: How-to/Listicle (4.5% avg)
- Tương tác thấp: Promotional/Hard-sell (1.5% avg)

## Best Times to Post
- Ngày tốt nhất: Thứ 3, Thứ 5
- Giờ tốt nhất: 7:00-8:30 sáng, 12:00-13:00
- Tránh: Cuối tuần, sau 20:00

## Preferred Content Formats
1. Personal stories with lessons (40%)
2. How-to guides with examples (25%)
3. Industry insights with data (20%)
4. Curated lists/resources (10%)
5. Behind-the-scenes/process (5%)
```

**🎤 Script nói:**
> "Để ý: ACT phase không chỉ là 'ghi nhận'. ACT = TẠO THÊM kiến thức cho workspace. target-audience.md là kiến thức MỚI sinh ra từ PDCA."

---

## PHẦN THỰC HÀNH — HV (60 phút)

> 🎯 HV thực hành trên **Workspace B** (`personal-brand-workspace/` của mình)
>
> Mục đích: Chạy 1 PDCA iteration hoàn chỉnh trên data thực.

### Bước 1: Review output Buổi 1 (5 phút)

**⏱ Thời gian:** 0:00 — 0:05

**Hành động:**
- Mở `outputs/analytics-reports/first-analysis.md` từ buổi trước
- Đọc lại insights đã có
- Xác định baseline: "Output buổi 1 cho tôi biết gì?"

**Checklist:**
- [ ] Đã đọc lại first-analysis.md
- [ ] Xác định được 1-2 insights ban đầu

### Bước 2: PLAN — Viết mục tiêu SMART (10 phút)

**⏱ Thời gian:** 0:05 — 0:15

**Prompt mẫu (copy-paste):**
```
Đọc file outputs/analytics-reports/first-analysis.md (phân tích buổi trước).
Dựa trên đó, đề xuất 1 mục tiêu phân tích cụ thể cho hôm nay.
Mục tiêu phải SMART:
- Specific: Cụ thể
- Measurable: Đo được
- Achievable: Khả thi
- Relevant: Liên quan đến personal branding
- Time-bound: Hoàn thành trong 60 phút

Trình bày mục tiêu dạng 1 câu rõ ràng.
```

**Output kỳ vọng:**
```
Mục tiêu: Phân tích 20 bài trong social-media-posts.csv để xác định 
TOP 3 loại content format có engagement cao nhất và LOW 3 format 
cần cải thiện, với metric cụ thể cho từng format.
```

**🎤 GV hướng dẫn:**
> "Mục tiêu phải CỤ THỂ. 'Phân tích data' là quá chung. 'Tìm top 3 format engagement cao nhất' là cụ thể."

**Checklist:**
- [ ] Mục tiêu rõ ràng, 1 câu
- [ ] Có metric đo được
- [ ] Khả thi trong 60 phút

### Bước 3: DO — Phân tích data (15 phút)

**⏱ Thời gian:** 0:15 — 0:30

**Prompt mẫu (copy-paste):**
```
Đọc file sample-data/social-media-posts.csv.
Mục tiêu phân tích: [copy mục tiêu từ bước trên]

Phân tích chi tiết:
1. Thống kê tổng quan (số bài, engagement trung bình, min, max)
2. Top 3 bài hiệu quả nhất — vì sao?
3. Bottom 3 bài kém nhất — vì sao?
4. Pattern chung của bài hiệu quả
5. Gợi ý cải thiện cụ thể

Trình bày có bảng và bullet points.
Xuất vào outputs/analytics-reports/pdca-analysis.md
```

**Checklist:**
- [ ] Output đã lưu vào đúng file
- [ ] Có bảng thống kê
- [ ] Có ≥3 insights
- [ ] Gợi ý cụ thể, actionable

### Bước 4: CHECK — Đánh giá kết quả vs mục tiêu (10 phút)

**⏱ Thời gian:** 0:30 — 0:40

**Prompt mẫu (copy-paste):**
```
Đọc lại mục tiêu ban đầu:
"[copy mục tiêu SMART]"

Đọc kết quả phân tích trong outputs/analytics-reports/pdca-analysis.md.

Đánh giá:
1. Mục tiêu có ĐẠT không? (Đạt/Chưa đạt/Đạt một phần)
2. Insights nào hữu ích nhất?
3. Insights nào cần kiểm chứng thêm?
4. Điều gì BẤT NGỜ trong kết quả?
5. Nếu chạy lại, sẽ thay đổi gì ở prompt?
```

**🎤 GV hướng dẫn:**
> "CHECK là bước quan trọng nhất. Đây là lúc bạn HỌC từ kết quả. Đừng chỉ nói 'tốt' hay 'chưa tốt' — hãy CỤ THỂ."

**Checklist:**
- [ ] So sánh rõ ràng: mục tiêu vs kết quả
- [ ] Có ≥1 insight bất ngờ
- [ ] Có gợi ý cải thiện prompt

### Bước 5: ACT — Cải thiện & Ghi log (10 phút)

**⏱ Thời gian:** 0:40 — 0:50

**Hành động 1:** Viết lại 1 bài kém

**Prompt mẫu (copy-paste):**
```
Từ phân tích vừa rồi, chọn bài có engagement THẤP NHẤT.
Viết lại bài đó áp dụng patterns từ bài engagement CAO.

Yêu cầu:
- Giữ cùng chủ đề
- Chuyển sang format hiệu quả nhất (theo phân tích)
- Độ dài tối ưu (theo phân tích)
- Thêm hook mạnh và CTA

Xuất vào outputs/content-drafts/improved-post.md
```

**Hành động 2:** Ghi PDCA log iteration 1

**Template PDCA log (copy vào docs/pdca-log.md):**
```markdown
# PDCA Log — [Tên HV]

## Iteration 1 — [ngày hôm nay]

### Plan
**Mục tiêu:** [copy mục tiêu SMART]
**Metric thành công:** [metric cụ thể]
**Input data:** sample-data/social-media-posts.csv

### Do
**Hành động:** [mô tả ngắn]
**Prompt đã dùng:** [tóm tắt]
**Output:** outputs/analytics-reports/pdca-analysis.md

### Check
**Kết quả vs mục tiêu:** [Đạt/Chưa đạt]
**Insights chính:**
1. [insight 1]
2. [insight 2]
3. [insight 3]
**Điều bất ngờ:** [gì?]

### Act
**Cải thiện đã làm:** Viết lại bài kém → improved-post.md
**Bài học:** [ghi lại]
**Iteration tiếp theo:** [kế hoạch]
```

**Checklist:**
- [ ] improved-post.md đã tạo
- [ ] pdca-log.md đã ghi iteration 1
- [ ] Log có đủ 4 section P-D-C-A

### Bước 6: Tạo target-audience.md (10 phút)

**⏱ Thời gian:** 0:50 — 1:00

**Prompt mẫu (copy-paste):**
```
Dựa trên phân tích social media data (outputs/analytics-reports/pdca-analysis.md)
và thông tin trong knowledge-base/brand-profile.md,

Tạo file knowledge-base/target-audience.md với cấu trúc:

# Target Audience Profile

## Demographics
- Độ tuổi:
- Vị trí công việc:
- Kinh nghiệm:
- Location:

## Pain Points
- [3-5 pain points chính]

## Content Preferences
- Format yêu thích:
- Độ dài ưa thích:
- Chủ đề quan tâm:

## Engagement Patterns
- Loại content tương tác cao:
- Loại content tương tác thấp:

## Best Times to Post
- Ngày tốt nhất:
- Giờ tốt nhất:

Điền dựa trên insights phân tích data thực.
```

**Checklist:**
- [ ] File đã tạo tại `knowledge-base/target-audience.md`
- [ ] Có đủ 5 sections
- [ ] Thông tin dựa trên data thực, không phỏng đoán

---

## Trạng thái workspace sau buổi này

```
personal-brand-workspace/
├── AGENTS.md                              ← có sẵn
├── .agents/                               ← trống
│   ├── skills/                            
│   ├── rules/                             
│   └── workflows/                         
├── knowledge-base/
│   ├── brand-profile.md                   ← Buổi 1
│   └── target-audience.md                 ← MỚI TẠO ★
├── sample-data/
│   ├── social-media-posts.csv             ← có sẵn
│   └── monthly-report-data.csv            ← có sẵn
├── scripts/                               ← trống
├── outputs/
│   ├── content-drafts/
│   │   ├── intro-draft.md                 ← Buổi 1
│   │   └── improved-post.md               ← MỚI TẠO ★
│   └── analytics-reports/
│       ├── first-analysis.md              ← Buổi 1
│       └── pdca-analysis.md               ← MỚI TẠO ★
└── docs/
    ├── workspace-map.md                   ← Buổi 1
    ├── pdca-log.md                        ← ĐÃ GHI iteration 1 ★
    └── lesson-to-workspace-map.md         ← có sẵn
```

**Thay đổi so với Buổi 1:** +3 files mới (target-audience.md, improved-post.md, pdca-analysis.md) + 1 file cập nhật (pdca-log.md)

---

## Bài tập về nhà

| # | Bài tập | Deadline | File output |
|---|---|---|---|
| 1 | Chạy thêm 1 PDCA iteration với mục tiêu khác | Trước buổi 3 | `docs/pdca-log.md` (iteration 2) |
| 2 | Update target-audience.md với thông tin bổ sung | Trước buổi 3 | `knowledge-base/target-audience.md` |
| 3 | Viết lại thêm 1 bài kém áp dụng insights | Trước buổi 3 | `outputs/content-drafts/` |

---

## Checklist hoàn thành

- [ ] `docs/pdca-log.md` đã ghi iteration 1 (đủ 4 section P-D-C-A)
- [ ] `knowledge-base/target-audience.md` đã tạo (đủ 5 sections)
- [ ] `outputs/analytics-reports/pdca-analysis.md` đã tạo
- [ ] `outputs/content-drafts/improved-post.md` đã tạo
- [ ] Hiểu 4 phase của PDCA và vai trò từng phase
- [ ] Biết cách đặt mục tiêu SMART cho phân tích
- [ ] Biết cách đánh giá output (CHECK phase)

**Tiêu chí đạt:** ≥ 5/7 checkbox ✅

---

## Kết nối buổi sau

> **Buổi 3: Expertise Skill**
>
> Buổi này các bạn đã CẢI THIỆN output bằng PDCA. Nhưng output vẫn còn GENERIC.
>
> Buổi sau sẽ tạo SKILL đầu tiên — content-writer. Skill cho AI "chuyên môn",
> khiến output có PERSONALITY và BRAND VOICE.
>
> PDCA sẽ cho thấy: Before skill = generic → After skill = professional.
>
> **Mang theo:** Workspace đã hoàn thành Buổi 2. Nghĩ trước: "Chuyên môn của tôi là gì?"

---

## Ghi chú giảng viên

### Timing
- PLAN phase (bước 2 thực hành) hay mất nhiều thời gian vì HV viết mục tiêu quá chung
- Có sẵn 3-5 ví dụ mục tiêu SMART để gợi ý

### Lỗi thường gặp
1. **Mục tiêu quá chung:** "Phân tích data" → Hướng dẫn: "Phân tích CÁI GÌ? Tìm CÁI GÌ? Metric nào?"
2. **Skip CHECK phase:** HV chạy xong DO rồi nhảy luôn ACT → Nhắc: "CHECK quan trọng nhất!"
3. **PDCA log không đủ detail:** Chỉ viết 1-2 dòng → Show example chi tiết
4. **Target audience dựa trên phỏng đoán:** → Nhắc: "Dựa trên DATA, không phải cảm tính"

### Backup plan
- Nếu CSV data không đủ phong phú → cho HV thêm data mẫu
- Nếu HV quá chậm ở PLAN → cho mục tiêu mẫu để tiết kiệm thời gian
- Nếu Antigravity chậm → show output mẫu cho CHECK phase

### Điểm nhấn quan trọng
- **PDCA = engine, không phải lý thuyết** — mỗi iteration workspace thông minh hơn
- **CHECK phase quan trọng nhất** — đây là nơi LEARNING xảy ra
- **ACT phase = tạo knowledge mới** — target-audience.md sinh ra từ PDCA
- **Mỗi iteration giải quyết 1 vấn đề cụ thể** — không cố fix tất cả cùng lúc

### Năng lượng lớp học
- Show điểm số before/after → HV thấy tiến bộ rõ ràng
- So sánh output Buổi 1 vs output cải thiện → "wow moment"
- Khuyến khích HV share insights thú vị từ phân tích data

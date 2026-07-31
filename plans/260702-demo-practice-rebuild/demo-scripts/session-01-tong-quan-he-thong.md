# Buổi 01: Tổng Quan Hệ Thống — Demo & Thực Hành

> **Phase 1 — Operate | Workspace A: `personal-brand-complete/` (GV) | Workspace B: `personal-brand-workspace/` (HV)**

---

## Tổng quan

| Hạng mục | Chi tiết |
|---|---|
| **Mục tiêu** | HV hiểu 7 thành tố agentic workspace, chạy được prompt đầu tiên, tạo output đầu tiên |
| **Thời lượng** | Demo 45 phút + Thực hành 60 phút |
| **Artifacts tạo ra** | `brand-profile.md` (filled), `intro-draft.md`, `first-analysis.md`, `workspace-map.md` |
| **Kết nối trước** | Không (buổi đầu tiên) |
| **Kết nối sau** | Buổi 2 — PDCA Operation |

---

## Chuẩn bị trước buổi học

### Giảng viên (GV)
- [ ] Mở workspace `personal-brand-complete/` trong Antigravity
- [ ] Kiểm tra tất cả files: AGENTS.md, skills, rules, workflows, knowledge-base, sample-data
- [ ] Test run 2 workflows: content creation + engagement analysis
- [ ] Chuẩn bị slide ánh xạ 7 thành tố
- [ ] Kiểm tra projector/screen sharing

### Học viên (HV)
- [ ] Cài đặt Antigravity CLI
- [ ] Clone starter kit `personal-brand-workspace/`
- [ ] Kiểm tra mở được workspace trong Antigravity

---

## PHẦN DEMO — GV (45 phút)

> 🎓 GV demo trên **Workspace A** (`personal-brand-complete/`)
> 
> Mục đích: Cho HV thấy bức tranh toàn cảnh workspace hoàn chỉnh trước khi tự xây.

### Bước 1: Mở workspace & Tour tổng quan (5 phút)

**⏱ Thời gian:** 0:00 — 0:05

**Hành động:**
- Mở Antigravity IDE/CLI
- Navigate đến workspace `personal-brand-complete/`
- Show file tree toàn bộ

**🎤 Script nói:**
> "Chào mừng các bạn đến với buổi đầu tiên. Đây là workspace agentic AI hoàn chỉnh cho personal branding. Workspace này được xây dựng qua 11 buổi học. Hôm nay, các bạn sẽ hiểu từng thành phần và bắt đầu xây workspace của riêng mình."
>
> "Mở workspace lên, các bạn sẽ thấy cấu trúc thư mục như thế này..."

**Cấu trúc hiển thị:**
```
personal-brand-complete/
├── AGENTS.md
├── .agents/
│   ├── skills/
│   │   ├── content-writer/SKILL.md
│   │   └── engagement-analyst/SKILL.md
│   ├── rules/
│   │   ├── brand-voice.md
│   │   └── content-quality.md
│   └── workflows/
│       ├── content-creation-flow.md
│       └── weekly-scheduler-flow.md
├── knowledge-base/
│   ├── brand-profile.md
│   ├── target-audience.md
│   └── content-pillars.md
├── sample-data/
│   ├── social-media-posts.csv
│   ├── monthly-report-data.csv
│   └── content-calendar.csv
├── scripts/
│   └── analyze-engagement.py
├── outputs/
│   ├── content-drafts/
│   └── analytics-reports/
└── docs/
    ├── workspace-map.md
    ├── pdca-log.md
    └── lesson-to-workspace-map.md
```

### Bước 2: Giải thích từng thư mục = 1 thành tố (10 phút)

**⏱ Thời gian:** 0:05 — 0:15

**Hành động:** Mở từng thư mục, giải thích vai trò

**🎤 Script nói:**

**1. AGENTS.md — Agent Identity (Danh tính AI)**
> "File này nằm ở ROOT — gốc workspace. Đây là file đầu tiên Antigravity đọc khi mở workspace. Nó cho AI biết: 'Tôi là ai? Tôi làm gì? Workspace này phục vụ mục đích gì?'"

Mở file và show nội dung mẫu:
```markdown
# Personal Brand Workspace

## Project
Workspace quản lý và phát triển thương hiệu cá nhân trên LinkedIn.

## Vai trò
Hỗ trợ chuyên gia xây dựng nội dung, phân tích hiệu quả, lên lịch đăng bài.

## Cấu trúc
- knowledge-base/: Kiến thức về brand, audience, pillars
- sample-data/: Dữ liệu social media, calendar
- scripts/: Công cụ phân tích
- outputs/: Kết quả tạo ra
```

**2. .agents/skills/ — Expertise (Kỹ năng chuyên môn)**
> "Mỗi skill = 1 folder chứa SKILL.md. Skill cho AI biết CÁCH LÀM một việc cụ thể. Ví dụ: content-writer biết cách viết LinkedIn post theo brand voice."

**3. .agents/rules/ — Guardrails (Rào chắn hành vi)**
> "Rules là files .md đơn giản, quy định AI KHÔNG ĐƯỢC LÀM gì. Ví dụ: brand-voice.md đảm bảo mọi output đều đúng giọng văn."

**4. .agents/workflows/ — Process (Quy trình OIPO)**
> "Workflows kết nối nhiều bước thành 1 quy trình. Thay vì prompt từng bước, workflow chạy từ đầu đến cuối."

**5. knowledge-base/ — Knowledge (Kiến thức chuyên ngành)**
> "QUAN TRỌNG: Tất cả files ở đây là .md — Markdown. KHÔNG dùng .json. Markdown dễ đọc cho cả người và AI."

**6. sample-data/ — Input Data (Dữ liệu đầu vào)**
> "CSV files chứa dữ liệu thực: bài đã đăng, engagement metrics, lịch content."

**7. scripts/ — Tools (Công cụ xử lý)**
> "Python scripts cho các tác vụ phức tạp: tính engagement rate, phân tích trends."

**8. outputs/ — Output (Kết quả)**
> "Mọi kết quả AI tạo ra đều lưu vào đây. Chia thành content-drafts/ và analytics-reports/."

**9. docs/ — Management (Quản lý)**
> "PDCA log, workspace map, lesson tracking. Đây là 'bộ não quản lý' của workspace."

**Bảng ánh xạ 7 thành tố:**

| # | Thành tố | Thư mục/File | Vai trò | Ví dụ |
|---|---|---|---|---|
| 1 | Agent | `AGENTS.md` | Định danh AI | "Tôi là personal brand assistant" |
| 2 | Skill | `.agents/skills/` | Kỹ năng chuyên môn | content-writer, engagement-analyst |
| 3 | Rule | `.agents/rules/` | Rào chắn hành vi | brand-voice, content-quality |
| 4 | Workflow | `.agents/workflows/` | Quy trình OIPO | content-creation-flow |
| 5 | Knowledge | `knowledge-base/` | Kiến thức (.md) | brand-profile, target-audience |
| 6 | Input | `sample-data/` | Dữ liệu (.csv) | social-media-posts |
| 7 | Output | `outputs/` | Kết quả | content-drafts, analytics-reports |

### Bước 3: Chạy workflow 1 — Viết content LinkedIn (12 phút)

**⏱ Thời gian:** 0:15 — 0:27

**Hành động:** Demo live workflow viết content

**🎤 Script nói:**
> "Bây giờ tôi sẽ cho workspace chạy. Các bạn sẽ thấy AI đọc knowledge, áp dụng skill, tuân thủ rules, và tạo output."

**Prompt mẫu (copy-paste):**
```
Đọc knowledge-base/brand-profile.md và knowledge-base/content-pillars.md.
Dựa trên thông tin này, viết 1 bài LinkedIn post 200 từ về chủ đề 
"Bài học lớn nhất trong sự nghiệp của tôi".
Áp dụng brand voice từ .agents/rules/brand-voice.md.
Xuất file vào outputs/content-drafts/linkedin-career-lesson.md
```

**Output kỳ vọng:**
```markdown
# 🎯 Bài học lớn nhất trong 10 năm sự nghiệp marketing

Năm 2018, tôi suýt mất hợp đồng lớn nhất sự nghiệp.

Không phải vì thiếu kỹ năng. Mà vì tôi cố gắng làm vừa lòng TẤT CẢ mọi người.

Khách hàng muốn A, sếp muốn B, đội ngũ muốn C. Tôi cố "compromise" 
— và kết quả là không ai hài lòng.

Bài học: Chuyên gia không phải là người biết mọi thứ. 
Chuyên gia là người dám nói "Đây là cách tốt nhất, và đây là lý do."

Từ đó, tôi luôn:
✅ Đưa ra quan điểm rõ ràng
✅ Backing bằng data, không bằng cảm tính
✅ Sẵn sàng nói "không" khi cần

Các bạn đã bao giờ phải chọn giữa "làm vừa lòng" và "làm đúng"?

#PersonalBranding #Leadership #CareerLessons #Marketing #ThươngHiệuCáNhân
```

**🎤 Highlight:**
> "Để ý: AI không viết chung chung. Nó dùng câu chuyện cá nhân từ brand-profile, theo đúng cấu trúc Hook→Story→Insight→CTA từ skill, và giọng văn đúng từ rules."

### Bước 4: Chạy workflow 2 — Phân tích engagement (10 phút)

**⏱ Thời gian:** 0:27 — 0:37

**Hành động:** Demo live phân tích CSV data

**Prompt mẫu (copy-paste):**
```
Đọc file sample-data/social-media-posts.csv.
Phân tích engagement rate của từng bài.
Xếp hạng từ cao đến thấp.
Nhận xét: loại content nào hiệu quả nhất?
Xuất báo cáo vào outputs/analytics-reports/engagement-analysis.md
```

**Output kỳ vọng:**
```markdown
# Báo Cáo Phân Tích Engagement

## Tổng quan
- Tổng số bài: 20
- Engagement trung bình: 4.2%
- Bài cao nhất: 8.7% | Bài thấp nhất: 1.1%

## Bảng xếp hạng

| # | Ngày đăng | Chủ đề | Loại | Engagement |
|---|---|---|---|---|
| 1 | 15/03 | Câu chuyện thất bại đầu đời | Storytelling | 8.7% |
| 2 | 22/03 | 5 công cụ AI cho marketer | Listicle | 7.3% |
| 3 | 08/03 | Trend 2024 trong ngành | Thought Leadership | 6.8% |
| ... | ... | ... | ... | ... |

## Insights
1. **Storytelling > Listicle > How-to**: Bài kể chuyện có engagement cao nhất
2. **Bài có số liệu cụ thể** engagement cao hơn 40%
3. **Đăng thứ 3 và thứ 5** hiệu quả nhất

## Gợi ý cải thiện
- Tăng tỷ lệ storytelling lên 40% content mix
- Thêm data/số liệu vào mỗi bài
- Ưu tiên đăng T3 và T5
```

**🎤 Script nói:**
> "AI vừa đọc CSV, phân tích data, tạo bảng xếp hạng, và rút ra insights — tất cả trong 1 prompt. Đây là sức mạnh của workspace được thiết lập tốt."

### Bước 5: Ánh xạ 7 thành tố lên demo vừa chạy (5 phút)

**⏱ Thời gian:** 0:37 — 0:42

**🎤 Script nói:**
> "Các bạn vừa thấy 2 workflow chạy. Hãy xem workflow đó dùng những thành tố nào:"

| Thành tố | Workflow 1 (Content) | Workflow 2 (Analytics) |
|---|---|---|
| Agent | AGENTS.md — biết role | AGENTS.md — biết role |
| Skill | content-writer | engagement-analyst |
| Rule | brand-voice | (chưa có rule riêng) |
| Knowledge | brand-profile, content-pillars | (chưa có) |
| Input | (không dùng CSV) | social-media-posts.csv |
| Output | content-drafts/ | analytics-reports/ |
| Workflow | content-creation-flow | (chạy ad-hoc) |

### Bước 6: Wrap-up demo (3 phút)

**⏱ Thời gian:** 0:42 — 0:45

**🎤 Script nói:**
> "Workspace này được xây dần qua 11 buổi. Các bạn sẽ tự xây workspace của mình — bắt đầu từ bây giờ. Buổi 1: hiểu cấu trúc. Buổi 2: vận hành PDCA. Buổi 3: tạo skill đầu tiên. Buổi 4: tạo workflow. Và cứ thế..."
>
> "Bây giờ, đến lượt các bạn!"

---

## PHẦN THỰC HÀNH — HV (60 phút)

> 🎯 HV thực hành trên **Workspace B** (`personal-brand-workspace/` của mình)
>
> Mục đích: Khám phá workspace, điền thông tin cá nhân, chạy prompt đầu tiên.

### Bước 1: Clone starter kit & Mở workspace (5 phút)

**⏱ Thời gian:** 0:00 — 0:05

**Hành động:**
1. Clone/copy thư mục `personal-brand-workspace/`
2. Mở trong Antigravity
3. Khám phá cấu trúc thư mục

**Cấu trúc starter kit:**
```
personal-brand-workspace/
├── AGENTS.md                     ← Có sẵn (template)
├── .agents/
│   ├── skills/                   ← Trống
│   ├── rules/                    ← Trống
│   └── workflows/                ← Trống
├── knowledge-base/
│   └── brand-profile.md          ← Template {{placeholder}}
├── sample-data/
│   ├── social-media-posts.csv    ← Có sẵn (20 bài mẫu)
│   └── monthly-report-data.csv   ← Có sẵn
├── scripts/                      ← Trống
├── outputs/
│   ├── content-drafts/           ← Trống
│   └── analytics-reports/        ← Trống
└── docs/
    ├── workspace-map.md          ← Template
    ├── pdca-log.md               ← Template
    └── lesson-to-workspace-map.md ← Có sẵn
```

**Checklist:**
- [ ] Workspace mở thành công trong Antigravity
- [ ] Thấy đầy đủ thư mục
- [ ] Đọc được AGENTS.md

### Bước 2: Điền brand-profile.md (15 phút)

**⏱ Thời gian:** 0:05 — 0:20

**Hành động:** Mở `knowledge-base/brand-profile.md` và thay tất cả {{placeholder}}

**Template gốc:**
```markdown
# Brand Profile

## Thông tin cá nhân
- **Họ tên:** {{ten_day_du}}
- **Chức danh:** {{chuc_danh}}
- **Lĩnh vực:** {{linh_vuc}}
- **Kinh nghiệm:** {{kinh_nghiem_nam}} năm

## Giá trị cốt lõi
{{gia_tri_cot_loi}}

## Đối tượng mục tiêu
{{doi_tuong_muc_tieu}}

## Phong cách viết
- Giọng văn: {{phong_cach_viet}}
- Ngôn ngữ: Tiếng Việt
- Đặc điểm: {{dac_diem_viet}}

## Câu chuyện cá nhân
{{cau_chuyen_ca_nhan}}

## Thông điệp chính
{{thong_diep_chinh}}
```

**Ví dụ đã điền:**
```markdown
# Brand Profile

## Thông tin cá nhân
- **Họ tên:** Nguyễn Văn An
- **Chức danh:** Digital Marketing Manager
- **Lĩnh vực:** Marketing & Branding
- **Kinh nghiệm:** 8 năm

## Giá trị cốt lõi
- Chia sẻ kinh nghiệm thực tế, không lý thuyết suông
- Đơn giản hóa những khái niệm phức tạp
- Luôn có data/số liệu minh họa

## Đối tượng mục tiêu
- Marketer 3-7 năm kinh nghiệm muốn lên senior
- Chủ doanh nghiệp nhỏ muốn tự làm marketing
- Sinh viên marketing muốn định hướng career

## Phong cách viết
- Giọng văn: Chuyên nghiệp nhưng gần gũi, như đang coffee chat
- Ngôn ngữ: Tiếng Việt
- Đặc điểm: Hay dùng câu chuyện thực tế, thích đặt câu hỏi

## Câu chuyện cá nhân
Bắt đầu career từ intern PR, chuyển sang digital marketing năm 2016.
Từng thất bại campaign đầu đời — mất 50 triệu budget. Bài học: data > cảm tính.

## Thông điệp chính
"Marketing không phải nghệ thuật — marketing là khoa học với chút sáng tạo."
```

**🎤 GV hướng dẫn:**
> "Đừng vội. File này là NỀN TẢNG — mọi output sau này đều dựa vào thông tin ở đây. Viết càng chi tiết, AI càng hiểu bạn."

**Checklist:**
- [ ] Tất cả {{placeholder}} đã thay bằng thông tin thật
- [ ] Có ít nhất 1 câu chuyện cá nhân
- [ ] Giọng văn mô tả cụ thể (không chỉ "chuyên nghiệp")

### Bước 3: Chạy prompt đầu tiên — Viết giới thiệu (10 phút)

**⏱ Thời gian:** 0:20 — 0:30

**Prompt (copy-paste):**
```
Đọc knowledge-base/brand-profile.md và viết 1 đoạn giới thiệu bản thân
100 từ cho LinkedIn.
Giữ giọng văn chuyên nghiệp nhưng gần gũi.
Xuất vào outputs/content-drafts/intro-draft.md
```

**Output kỳ vọng (ví dụ):**
```markdown
# Giới thiệu LinkedIn

Xin chào! Tôi là Nguyễn Văn An — Digital Marketing Manager với 8 năm
kinh nghiệm biến ý tưởng thành con số.

Tôi tin marketing không phải nghệ thuật — đó là khoa học với chút sáng tạo.
Từ bài học "mất 50 triệu vì nghe cảm tính", tôi chuyển sang approach 
data-driven và chưa bao giờ hối hận.

Ở đây, tôi chia sẻ:
🎯 Kinh nghiệm thực chiến (không lý thuyết suông)
📊 Case studies có số liệu cụ thể
💡 Góc nhìn khác về marketing hiện đại

Kết nối nếu bạn muốn trao đổi về digital marketing!
```

**Checklist:**
- [ ] Output đã lưu vào `outputs/content-drafts/intro-draft.md`
- [ ] Giọng văn phù hợp với brand-profile
- [ ] Khoảng 100 từ
- [ ] Có yếu tố cá nhân (không generic)

### Bước 4: Chạy prompt thứ 2 — Phân tích bài viết (10 phút)

**⏱ Thời gian:** 0:30 — 0:40

**Prompt (copy-paste):**
```
Đọc file sample-data/social-media-posts.csv.
Phân tích 3 bài đầu tiên.
Với mỗi bài, nhận xét:
- Điểm mạnh
- Điểm yếu
- Gợi ý cải thiện
Xuất vào outputs/analytics-reports/first-analysis.md
```

**Output kỳ vọng:**
```markdown
# Phân Tích 3 Bài Đầu Tiên

## Bài 1: "5 xu hướng marketing 2024"
**Điểm mạnh:**
- Chủ đề trending, thu hút tò mò
- Có số liệu cụ thể

**Điểm yếu:**
- Hook mở đầu yếu — bắt đầu bằng "Hôm nay tôi muốn chia sẻ..."
- Thiếu CTA cuối bài

**Gợi ý cải thiện:**
- Mở đầu bằng câu hỏi hoặc số liệu gây shock
- Thêm CTA: "Bạn đang áp dụng trend nào?"

---

## Bài 2: "Câu chuyện thất bại"
**Điểm mạnh:**
- Storytelling tốt, gây đồng cảm
- Bài học rõ ràng

**Điểm yếu:**
- Quá dài (400 từ) — LinkedIn optimal 150-250
- Thiếu formatting (không dùng emoji, bullet)

**Gợi ý cải thiện:**
- Cắt xuống 200 từ
- Thêm line breaks và emoji

---

## Bài 3: "Giới thiệu dịch vụ mới"
**Điểm mạnh:**
- Rõ ràng, đầy đủ thông tin

**Điểm yếu:**
- Quảng cáo hard-sell, thiếu value
- Không có social proof

**Gợi ý cải thiện:**
- Chuyển sang format case study
- Thêm testimonial/kết quả cụ thể
```

**Checklist:**
- [ ] Output đã lưu vào `outputs/analytics-reports/first-analysis.md`
- [ ] Mỗi bài có đủ 3 phần: mạnh, yếu, gợi ý
- [ ] Gợi ý cải thiện cụ thể, actionable

### Bước 5: Điền workspace-map.md (10 phút)

**⏱ Thời gian:** 0:40 — 0:50

**Hành động:** Mở `docs/workspace-map.md` và ghi nhận tất cả files đã có/đã tạo

**Template:**
```markdown
# Workspace Map

> Cập nhật: [ngày hôm nay]

## Files có sẵn (starter kit)
- [ ] AGENTS.md — Agent identity
- [ ] sample-data/social-media-posts.csv — 20 bài mẫu
- [ ] sample-data/monthly-report-data.csv — Data báo cáo
- [ ] docs/pdca-log.md — Template PDCA
- [ ] docs/lesson-to-workspace-map.md — Ánh xạ bài-file

## Files đã tạo (Buổi 1)
- [ ] knowledge-base/brand-profile.md — Profile cá nhân
- [ ] outputs/content-drafts/intro-draft.md — Giới thiệu LinkedIn
- [ ] outputs/analytics-reports/first-analysis.md — Phân tích 3 bài

## Files sẽ tạo (các buổi sau)
- [ ] knowledge-base/target-audience.md — Buổi 2
- [ ] .agents/skills/content-writer/SKILL.md — Buổi 3
- [ ] .agents/workflows/content-creation-flow.md — Buổi 4
```

**Checklist:**
- [ ] Liệt kê đủ files có sẵn
- [ ] Liệt kê đủ files đã tạo hôm nay
- [ ] Có roadmap files sắp tạo

### Bước 6: Thử nghiệm tự do (10 phút)

**⏱ Thời gian:** 0:50 — 1:00

**Hành động:** Thử 2-3 prompt sáng tạo khác

**Gợi ý prompt:**
```
Đọc brand-profile.md. Viết 3 tiêu đề LinkedIn post hấp dẫn cho lĩnh vực của tôi.
```

```
Đọc sample-data/social-media-posts.csv. Bài nào có engagement thấp nhất? Vì sao?
```

```
Dựa trên brand-profile.md, đề xuất 5 chủ đề content tôi nên viết trong tháng tới.
```

**🎤 GV nhắc:**
> "Hãy thử nghiệm thoải mái. Mọi output đều lưu vào outputs/. Không có prompt 'sai' — chỉ có prompt 'chưa tốt nhất'."

---

## Trạng thái workspace sau buổi này

```
personal-brand-workspace/
├── AGENTS.md                              ← có sẵn (starter)
├── .agents/                               ← trống
│   ├── skills/                            ← trống
│   ├── rules/                             ← trống
│   └── workflows/                         ← trống
├── knowledge-base/
│   └── brand-profile.md                   ← ĐÃ ĐIỀN ★
├── sample-data/
│   ├── social-media-posts.csv             ← có sẵn
│   └── monthly-report-data.csv            ← có sẵn
├── scripts/                               ← trống
├── outputs/
│   ├── content-drafts/
│   │   └── intro-draft.md                 ← MỚI TẠO ★
│   └── analytics-reports/
│       └── first-analysis.md              ← MỚI TẠO ★
└── docs/
    ├── workspace-map.md                   ← ĐÃ ĐIỀN ★
    ├── pdca-log.md                        ← chưa dùng
    └── lesson-to-workspace-map.md         ← có sẵn
```

**Thay đổi so với starter kit:** +4 files mới/cập nhật (brand-profile.md, intro-draft.md, first-analysis.md, workspace-map.md)

---

## Bài tập về nhà

| # | Bài tập | Deadline | File output |
|---|---|---|---|
| 1 | Hoàn thiện brand-profile.md nếu chưa xong | Trước buổi 2 | `knowledge-base/brand-profile.md` |
| 2 | Thử 3 prompt khác nhau và lưu output | Trước buổi 2 | `outputs/content-drafts/` |
| 3 | Đọc lại intro-draft.md → sửa thủ công nếu cần | Trước buổi 2 | `outputs/content-drafts/intro-draft.md` |
| 4 | Đọc trước về PDCA (Plan-Do-Check-Act) | Trước buổi 2 | Không có file |

---

## Checklist hoàn thành

- [ ] `knowledge-base/brand-profile.md` đã điền đầy đủ (không còn {{placeholder}})
- [ ] `outputs/content-drafts/intro-draft.md` đã tạo
- [ ] `outputs/analytics-reports/first-analysis.md` đã tạo
- [ ] `docs/workspace-map.md` đã điền
- [ ] Hiểu được 7 thành tố workspace và vai trò từng thành tố
- [ ] Chạy thành công ít nhất 2 prompt
- [ ] Biết cách lưu output vào đúng thư mục

**Tiêu chí đạt:** ≥ 5/7 checkbox ✅

---

## Kết nối buổi sau

> **Buổi 2: PDCA Operation**
>
> Buổi này các bạn đã TẠO output. Buổi sau sẽ học cách CẢI THIỆN output.
>
> PDCA = Plan → Do → Check → Act — vòng lặp cải tiến liên tục.
>
> Output buổi 1 (intro-draft.md, first-analysis.md) sẽ là BASELINE để so sánh.
>
> **Mang theo:** Workspace đã hoàn thành Buổi 1.

---

## Ghi chú giảng viên

### Timing
- Bước 2 (giải thích 7 thành tố) hay bị quá thời gian → set timer 10 phút
- Bước 2 thực hành (điền brand-profile) cũng hay lâu → cho template example

### Lỗi thường gặp
1. **HV không biết viết gì vào brand-profile** → Cho worksheet 5 câu hỏi: Bạn làm gì? Cho ai? Vì sao? Khác gì? Muốn gì?
2. **Antigravity response chậm** → Chuẩn bị output mẫu offline để show nếu cần
3. **HV copy prompt sai** → Paste prompt lên slide/chat để HV copy chính xác
4. **Output không lưu vào đúng folder** → Hướng dẫn cú pháp "Xuất vào [path]"

### Backup plan
- Nếu Antigravity không hoạt động: dùng ChatGPT/Claude + copy output thủ công vào file
- Nếu HV quá chậm: skip Bước 6 (thử nghiệm tự do), tập trung hoàn thành Bước 2-5

### Điểm nhấn quan trọng
- **Workspace = hệ thống, không phải prompt đơn lẻ** — nhấn mạnh nhiều lần
- **Knowledge base dùng .md, KHÔNG dùng .json** — sửa ngay nếu HV tạo .json
- **AGENTS.md ở ROOT, không phải trong .agents/** — dễ nhầm
- **Skill = folder/SKILL.md, không phải file .md đơn lẻ** — preview cho buổi 3

### Năng lượng lớp học
- Buổi đầu = hào hứng nhưng cũng nhiều confusing
- Celebrate mỗi khi HV chạy prompt thành công đầu tiên 🎉
- Cho HV share output thú vị → tạo engagement

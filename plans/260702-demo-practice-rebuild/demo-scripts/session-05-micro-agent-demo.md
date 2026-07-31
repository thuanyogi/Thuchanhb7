# SESSION 05 — AI Agent MICRO: Thiết Kế Tác Tử Chuyên Biệt

> **Khóa học:** Agentic AI with Google Antigravity
> **Phase:** 2 — MODIFY (Buổi 5–9)
> **Thời lượng:** Demo 45 phút + Thực hành 60 phút
> **Cập nhật:** 2026-07-03
> **Workspace:** `personal-brand-workspace`

---

## Điều Kiện Tiên Quyết

| # | Yêu cầu | Kiểm tra |
|---|---------|----------|
| 1 | Hoàn thành Session 01–04 (Phase 1 — Operate) | ✅ Workspace có AGENTS.md, 2 PDCA logs, content-writer skill |
| 2 | Antigravity CLI đã cài đặt và hoạt động | ✅ Chạy `agy --version` thành công |
| 3 | File `sample-data/social-media-posts.csv` có dữ liệu | ✅ Ít nhất 10 dòng dữ liệu |
| 4 | Skill `content-writer` đã hoạt động ở buổi trước | ✅ `.agents/skills/content-writer/SKILL.md` tồn tại |

---

## Trạng Thái Workspace KHI VÀO Buổi 5

```
personal-brand-workspace/
├── AGENTS.md                              ← ROOT level (mô tả dự án)
├── .agents/
│   ├── skills/content-writer/SKILL.md     ← skill từ buổi 3
│   ├── workflows/content-creation-flow.md ← workflow từ buổi 4
│   └── rules/                             ← trống (sẽ dùng ở buổi 7)
├── knowledge-base/
│   ├── brand-profile.md
│   ├── target-audience.md
│   └── content-pillars.md
├── sample-data/
│   ├── social-media-posts.csv
│   ├── monthly-report-data.csv
│   └── content-calendar.csv
├── outputs/
│   ├── drafts/                            ← bài viết đã tạo
│   └── reports/                           ← báo cáo đã tạo
└── docs/
    ├── workspace-map.md
    ├── pdca-log.md                        ← 2 iterations (buổi 3 + 4)
    └── lesson-to-workspace-map.md
```

---

## Checklist Chuẩn Bị — GV (Workspace A: Demo)

| # | Việc cần làm | Trạng thái |
|---|-------------|-----------|
| 1 | Tạo file `sample-data/engagement-metrics.csv` với 30+ dòng dữ liệu (xem bên dưới) | ☐ |
| 2 | Chuẩn bị slide/diagram MICRO framework (Mission–Input–Constraints–Role–Output) | ☐ |
| 3 | Viết sẵn file `.agents/skills/engagement-analyst/SKILL.md` hoàn chỉnh | ☐ |
| 4 | Test chạy skill engagement-analyst 1 lần, lưu output mẫu vào `outputs/reports/` | ☐ |
| 5 | Chuẩn bị 1 prompt thường (không có MICRO) để so sánh before/after | ☐ |
| 6 | Mở 2 terminal tabs: 1 cho file explorer, 1 cho Antigravity CLI | ☐ |
| 7 | Clear chat history Antigravity trước buổi demo | ☐ |

## Checklist Chuẩn Bị — HV (Workspace B: Thực hành)

| # | Việc cần làm | Trạng thái |
|---|-------------|-----------|
| 1 | Mở workspace `personal-brand-workspace` trong Antigravity | ☐ |
| 2 | Kiểm tra `.agents/skills/content-writer/SKILL.md` còn hoạt động | ☐ |
| 3 | Chuẩn bị dữ liệu engagement cá nhân (hoặc dùng template GV cung cấp) | ☐ |
| 4 | Đọc lại AGENTS.md ở root để nhớ mô tả dự án | ☐ |

---

## Dữ Liệu Mẫu: `sample-data/engagement-metrics.csv`

> GV copy file này vào workspace trước buổi demo. HV có thể dùng hoặc tạo data riêng.

```csv
STT,Ma_Bai,Ngay_Dang,Thu_Trong_Tuan,Nen_Tang,Loai_Noi_Dung,Tieu_De,Impressions,Clicks,CTR,Likes,Comments,Shares,Saves,Engagement_Rate
1,POST-001,2024-01-08,Thứ 2,LinkedIn,Tips/Hướng dẫn,5 xu hướng Digital Marketing 2024,8400,378,4.5%,187,42,35,56,3.8%
2,POST-002,2024-01-15,Thứ 2,Facebook,Chia sẻ kinh nghiệm,Tại sao xây dựng thương hiệu cá nhân quan trọng,6200,186,3.0%,124,38,28,31,3.6%
3,POST-003,2024-01-22,Thứ 2,LinkedIn,Tips/Hướng dẫn,Hướng dẫn Google Analytics 4 cho người mới,11600,522,4.5%,215,56,67,89,3.7%
4,POST-004,2024-02-05,Thứ 2,Facebook,Tips/Hướng dẫn,3 công thức viết hook Facebook hiệu quả,4200,126,3.0%,89,24,15,18,3.5%
5,POST-005,2024-02-14,Thứ 4,LinkedIn,Case Study,Case study email marketing tăng 150% đơn hàng,17000,850,5.0%,312,78,92,124,3.6%
6,POST-006,2024-02-20,Thứ 3,Facebook,Behind the scenes,Ngày Valentine và tình yêu với nghề marketing,3600,72,2.0%,67,31,12,8,3.3%
7,POST-007,2024-03-04,Thứ 2,LinkedIn,Checklist,Checklist SEO on-page 2024 đầy đủ nhất,9200,460,5.0%,178,45,58,73,3.8%
8,POST-008,2024-03-11,Thứ 2,Facebook,Tips/Hướng dẫn,5 sai lầm phổ biến khi chạy Facebook Ads,7600,304,4.0%,142,52,41,47,3.7%
9,POST-009,2024-03-18,Thứ 2,LinkedIn,Câu chuyện cá nhân,Hành trình xây dựng 4000 followers LinkedIn,14400,720,5.0%,256,89,74,98,3.6%
10,POST-010,2024-04-02,Thứ 3,Facebook,Review,Review 5 công cụ AI tốt nhất cho content creator,10200,408,4.0%,198,63,55,62,3.7%
11,POST-011,2024-04-10,Thứ 4,LinkedIn,Tips/Hướng dẫn,Tạo dashboard Google Data Studio từ A đến Z,7800,312,4.0%,145,37,43,51,3.5%
12,POST-012,2024-04-22,Thứ 2,Facebook,Chia sẻ kinh nghiệm,Bài học marketing từ Tết 2024 ế ẩm,1780,36,2.0%,28,8,5,3,2.5%
13,POST-013,2024-05-06,Thứ 2,LinkedIn,Tips/Hướng dẫn,Framework AIDA trong viết content chuyển đổi,8200,328,4.0%,167,41,38,44,3.5%
14,POST-014,2024-05-13,Thứ 2,Facebook,Behind the scenes,Buổi đào tạo đầu tiên của mình — nervous phết,4800,96,2.0%,95,47,19,14,3.6%
15,POST-015,2024-05-20,Thứ 2,LinkedIn,So sánh,So sánh Google Ads vs Meta Ads chi tiết 2024,12200,610,5.0%,223,58,65,81,3.5%
16,POST-016,2024-06-03,Thứ 2,Facebook,Checklist,7 điều cần biết trước khi xây thương hiệu cá nhân,5600,168,3.0%,112,35,22,27,3.5%
17,POST-017,2024-06-10,Thứ 2,LinkedIn,Tips/Hướng dẫn,Mẫu email nurture 5 bước cho B2B SaaS,10600,530,5.0%,189,44,71,86,3.7%
18,POST-018,2024-06-17,Thứ 2,Facebook,So sánh,Canva vs Figma — công cụ nào phù hợp marketer?,1040,21,2.0%,15,6,3,2,2.5%
19,POST-019,2024-06-24,Thứ 2,LinkedIn,Tips/Hướng dẫn,A/B testing cho người mới bắt đầu,7000,280,4.0%,134,32,29,38,3.3%
20,POST-020,2024-06-30,Chủ nhật,Facebook,Tổng kết,Tổng kết 6 tháng xây thương hiệu cá nhân,11400,456,4.0%,203,72,48,65,3.4%
21,POST-021,2024-07-08,Thứ 2,LinkedIn,Case Study,Tăng traffic web 300% nhờ Content Cluster,15200,760,5.0%,287,71,85,112,3.6%
22,POST-022,2024-07-15,Thứ 2,Facebook,Tips/Hướng dẫn,4 cách tối ưu bio Instagram cho personal brand,3800,114,3.0%,76,22,14,19,3.4%
23,POST-023,2024-07-22,Thứ 2,LinkedIn,Tips/Hướng dẫn,LinkedIn SSI Score — cách tăng từ 40 lên 75,9800,490,5.0%,196,53,62,78,4.0%
24,POST-024,2024-08-05,Thứ 2,Facebook,Behind the scenes,Một ngày làm việc của freelance marketer,2400,48,2.0%,43,18,7,5,3.0%
25,POST-025,2024-08-12,Thứ 2,LinkedIn,Checklist,10 bước audit website SEO hoàn chỉnh,11200,560,5.0%,208,49,68,91,3.7%
26,POST-026,2024-08-19,Thứ 2,Facebook,Câu chuyện cá nhân,Lý do mình bỏ agency để làm freelancer,8600,344,4.0%,172,68,42,53,3.9%
27,POST-027,2024-09-02,Thứ 2,LinkedIn,Tips/Hướng dẫn,Cách viết headline LinkedIn hút view,7400,370,5.0%,148,38,41,55,3.8%
28,POST-028,2024-09-09,Thứ 2,Facebook,Review,Top 3 khóa học marketing online đáng tiền 2024,6000,180,3.0%,118,34,25,29,3.4%
29,POST-029,2024-09-16,Thứ 2,LinkedIn,Case Study,Chiến dịch UGC giảm 40% chi phí quảng cáo,13800,690,5.0%,261,65,79,103,3.7%
30,POST-030,2024-09-23,Thứ 2,Facebook,Tổng kết,Tổng kết Q3 — những con số biết nói,9000,360,4.0%,178,56,39,48,3.6%
```

> **Lưu ý:** File CSV có 30 dòng dữ liệu + 1 dòng header. Cột `Loai_Noi_Dung` và `Thu_Trong_Tuan` là bổ sung so với file `social-media-posts.csv` cũ — giúp phân tích sâu hơn.

---

## PHẦN DEMO — GV Thực Hiện (45 phút)

### Bước 1: Giới thiệu MICRO Framework [00:00–10:00]

**🎯 Mục tiêu:** HV hiểu MICRO là gì, tại sao cần, khác gì prompt thường.

**GV nói:**

> "Ở buổi 3, các bạn đã tạo skill `content-writer`. Skill đó giúp AI viết nội dung tốt hơn prompt thường. Hôm nay chúng ta sẽ học **MICRO framework** — một bộ khung thiết kế agent chuyên biệt. MICRO giúp chúng ta mô tả chính xác agent cần làm gì, giống như viết **Job Description (JD)** cho một nhân viên AI."

**GV show diagram MICRO trên slide:**

```
┌──────────────────────────────────────────────────┐
│              MICRO FRAMEWORK                     │
│                                                  │
│  M — Mission    : Nhiệm vụ duy nhất, rõ ràng    │
│  I — Input      : Dữ liệu đầu vào cần có       │
│  C — Constraints: Ràng buộc, giới hạn, quy tắc  │
│  R — Role       : Vai trò, chuyên môn của agent  │
│  O — Output     : Kết quả mong đợi, format cụ thể│
│                                                  │
│  → Mỗi chữ cái = 1 phần trong SKILL.md          │
└──────────────────────────────────────────────────┘
```

**GV giải thích từng chữ cái (3 phút):**

| Chữ cái | Ý nghĩa | Ví dụ cụ thể (engagement-analyst) |
|---------|---------|-----------------------------------|
| **M** — Mission | Agent này làm **một việc duy nhất** là gì? | Phân tích dữ liệu engagement mạng xã hội |
| **I** — Input | Agent cần **nhận gì** để hoạt động? | File CSV chứa metrics (impressions, clicks, likes, shares...) |
| **C** — Constraints | Agent **bị giới hạn** bởi điều gì? | Chỉ phân tích, KHÔNG viết nội dung mới. Dữ liệu < 5 bài → cảnh báo |
| **R** — Role | Agent **đóng vai** gì? Chuyên môn nào? | Chuyên gia phân tích dữ liệu mạng xã hội |
| **O** — Output | Agent **trả về kết quả** theo format nào? | Báo cáo Markdown với top posts, trends, recommendations |

**GV hỏi lớp (tương tác):**

> "Ai có thể cho ví dụ 1 agent khác theo MICRO? Ví dụ: một agent tính lương nhân viên — Mission là gì? Input là gì?"

**Thời gian:** 10 phút (bao gồm Q&A ngắn)

---

### Bước 2: Mở và giải thích SKILL.md theo MICRO [10:00–22:00]

**🎯 Mục tiêu:** HV thấy MICRO map trực tiếp vào cấu trúc SKILL.md.

**GV nói:**

> "Bây giờ mình sẽ mở file SKILL.md của agent `engagement-analyst` và chỉ cho các bạn thấy từng phần MICRO nằm ở đâu trong file."

**Prompt GV gõ vào Antigravity CLI (Workspace A):**

```
Mở file .agents/skills/engagement-analyst/SKILL.md và giải thích cấu trúc.
```

**Nội dung đầy đủ của `.agents/skills/engagement-analyst/SKILL.md`:**

```markdown
---
name: "engagement-analyst"
description: >
  Skill phân tích dữ liệu engagement mạng xã hội. Đọc file CSV chứa
  metrics bài viết, xác định top/bottom posts, phát hiện trends,
  và đưa ra khuyến nghị hành động cụ thể dựa trên dữ liệu.
---

# Engagement Analyst — Trợ Lý Phân Tích Tương Tác

## Mission (Nhiệm vụ)
Phân tích dữ liệu engagement từ các bài viết mạng xã hội, tìm ra pattern
nội dung có tương tác cao/thấp, và đề xuất hành động cải thiện dựa trên
bằng chứng từ dữ liệu.

**Một câu tóm tắt:** Biến số liệu engagement thô thành insight hành động.

## Role (Vai trò)
Bạn là chuyên gia phân tích dữ liệu mạng xã hội với kinh nghiệm đánh giá
hiệu quả nội dung thương hiệu cá nhân. Bạn:
- Thành thạo đọc và phân tích dữ liệu CSV
- Biết cách tính và so sánh engagement rate giữa các nền tảng
- Luôn đưa ra kết luận dựa trên dữ liệu, KHÔNG suy đoán
- Trình bày kết quả rõ ràng, dễ hiểu cho người không chuyên

## Input (Đầu vào)

| Input | Kiểu | Bắt buộc | Mô tả |
|-------|------|----------|-------|
| File engagement metrics | CSV | ✅ Có | File `sample-data/engagement-metrics.csv` chứa: STT, Mã bài, Ngày đăng, Nền tảng, Loại nội dung, Tiêu đề, Impressions, Clicks, CTR, Likes, Comments, Shares, Saves, Engagement Rate |
| Khoảng thời gian | Text | ✅ Có | Tháng/quý/năm cần phân tích |
| Nền tảng cụ thể | Text | Không | LinkedIn, Facebook, hoặc tất cả (mặc định: tất cả) |

## Constraints (Ràng buộc)

### ✅ Skill này LÀM:
- Đọc và phân tích dữ liệu engagement từ file CSV
- Xác định top 5 và bottom 5 bài viết theo engagement rate
- Phát hiện pattern: loại nội dung nào, ngày nào, nền tảng nào hiệu quả
- So sánh hiệu suất LinkedIn vs Facebook
- Đề xuất 3–5 hành động cụ thể dựa trên dữ liệu
- Tính engagement rate = (Likes + Comments + Shares) / Impressions × 100

### ❌ Skill này KHÔNG LÀM:
- Viết nội dung mới (→ chuyển cho content-writer skill)
- Thiết kế hình ảnh hoặc đồ họa
- Truy cập API mạng xã hội trực tiếp
- Đưa lời khuyên về quảng cáo trả phí (paid ads)
- Phân tích đối thủ cạnh tranh

### Quy tắc bắt buộc:
1. Mọi kết luận PHẢI gắn với dữ liệu cụ thể (số liệu, mã bài viết)
2. Nếu dữ liệu < 5 bài viết → cảnh báo "mẫu quá nhỏ để kết luận"
3. Số liệu phần trăm làm tròn 1 chữ số thập phân
4. Luôn dùng tiếng Việt
5. So sánh chỉ thực hiện cùng nền tảng, cùng khoảng thời gian
6. Mỗi đề xuất hành động phải cụ thể, có thể thực hiện ngay

## Output (Đầu ra)

Báo cáo trả về theo format Markdown sau:

```
## 📊 Báo Cáo Phân Tích Engagement — [Nền tảng] — [Thời gian]

### 1. Tổng Quan
- Tổng số bài viết phân tích: [số]
- Engagement rate trung bình: [%]
- Nền tảng có ER cao nhất: [tên] ([%])
- Xu hướng tổng thể: [tăng/giảm/ổn định]

### 2. Top 5 Bài Viết Tương Tác Cao Nhất
| Hạng | Mã bài | Tiêu đề | Nền tảng | ER | Điểm nổi bật |
|------|--------|---------|----------|-----|-------------|

### 3. Bottom 5 Bài Viết Cần Cải Thiện
| Hạng | Mã bài | Tiêu đề | Nền tảng | ER | Nguyên nhân có thể |
|------|--------|---------|----------|-----|-------------------|

### 4. Pattern Phát Hiện
1. [Pattern + bằng chứng dữ liệu]
2. [Pattern + bằng chứng dữ liệu]
3. [Pattern + bằng chứng dữ liệu]

### 5. So Sánh Nền Tảng
| Chỉ số | LinkedIn | Facebook |
|--------|----------|----------|

### 6. Đề Xuất Hành Động
1. [Đề xuất cụ thể + lý do dựa trên dữ liệu]
2. [Đề xuất cụ thể + lý do dựa trên dữ liệu]
3. [Đề xuất cụ thể + lý do dựa trên dữ liệu]
```
```

**GV highlight từng phần MICRO (chỉ trên màn hình):**

| Phần trong SKILL.md | Map tới MICRO | GV giải thích |
|---------------------|---------------|---------------|
| Frontmatter `name` + `description` | — (metadata) | "Đây là phần Antigravity dùng để nhận diện skill" |
| `## Mission` | **M** | "Chỉ 1 nhiệm vụ: phân tích engagement. Không viết bài, không thiết kế" |
| `## Input` (bảng) | **I** | "Agent cần file CSV + khoảng thời gian. Rõ ràng, không mập mờ" |
| `## Constraints` (LÀM/KHÔNG LÀM + quy tắc) | **C** | "Ranh giới rõ ràng: 6 điều LÀM, 5 điều KHÔNG LÀM, 6 quy tắc" |
| `## Role` | **R** | "Vai trò = chuyên gia phân tích dữ liệu. Không phải content writer" |
| `## Output` (format Markdown) | **O** | "Output có format cố định — dễ kiểm tra, dễ so sánh giữa các lần chạy" |

**Thời gian:** 12 phút

---

### Bước 3: Chạy skill với dữ liệu thật [22:00–32:00]

**🎯 Mục tiêu:** HV thấy skill hoạt động end-to-end, từ input CSV → output report.

**GV nói:**

> "Mình đã có SKILL.md và file CSV. Bây giờ mình sẽ chạy skill này bằng cách giao nhiệm vụ cho Antigravity."

**Prompt GV copy-paste vào Antigravity CLI:**

```
Đọc file sample-data/engagement-metrics.csv và phân tích engagement cho toàn bộ dữ liệu (tháng 1 đến tháng 9/2024), cả LinkedIn và Facebook.

Trả về báo cáo theo đúng format trong skill engagement-analyst:
- Tổng quan
- Top 5 bài tương tác cao nhất
- Bottom 5 bài cần cải thiện
- Pattern phát hiện
- So sánh LinkedIn vs Facebook
- Đề xuất hành động cụ thể

Lưu kết quả vào outputs/reports/engagement-analysis-q1q3-2024.md
```

**Output mẫu mong đợi (GV kiểm tra trước buổi demo):**

```markdown
## 📊 Báo Cáo Phân Tích Engagement — Tất Cả Nền Tảng — T1–T9/2024

### 1. Tổng Quan
- Tổng số bài viết phân tích: 30
- Engagement rate trung bình: 3.5%
- Nền tảng có ER cao nhất: LinkedIn (3.6%)
- Xu hướng tổng thể: Ổn định, có cải thiện nhẹ ở Q3

### 2. Top 5 Bài Viết Tương Tác Cao Nhất

| Hạng | Mã bài | Tiêu đề | Nền tảng | ER | Điểm nổi bật |
|------|--------|---------|----------|-----|-------------|
| 1 | POST-023 | LinkedIn SSI Score — cách tăng từ 40 lên 75 | LinkedIn | 4.0% | ER cao nhất toàn bộ, chủ đề LinkedIn thu hút đúng đối tượng |
| 2 | POST-026 | Lý do mình bỏ agency để làm freelancer | Facebook | 3.9% | Câu chuyện cá nhân tạo cảm xúc, comments cao bất thường |
| 3 | POST-001 | 5 xu hướng Digital Marketing 2024 | LinkedIn | 3.8% | Bài đầu năm, chủ đề xu hướng luôn hút views |
| 4 | POST-007 | Checklist SEO on-page 2024 | LinkedIn | 3.8% | Dạng checklist dễ save, saves = 73 (cao nhất nhóm) |
| 5 | POST-027 | Cách viết headline LinkedIn hút view | LinkedIn | 3.8% | Meta-content (viết về LinkedIn trên LinkedIn) hiệu quả |

### 3. Bottom 5 Bài Viết Cần Cải Thiện

| Hạng | Mã bài | Tiêu đề | Nền tảng | ER | Nguyên nhân có thể |
|------|--------|---------|----------|-----|-------------------|
| 30 | POST-018 | Canva vs Figma — công cụ nào phù hợp marketer? | Facebook | 2.5% | Impressions rất thấp (1.040), chủ đề niche, đăng Thứ 2 trên Facebook |
| 29 | POST-012 | Bài học marketing từ Tết 2024 ế ẩm | Facebook | 2.5% | Tiêu đề tiêu cực, impressions thấp (1.780) |
| 28 | POST-024 | Một ngày làm việc của freelance marketer | Facebook | 3.0% | Behind the scenes trên Facebook không đủ reach |
| 27 | POST-006 | Ngày Valentine và tình yêu với nghề | Facebook | 3.3% | Chủ đề không liên quan chuyên môn, engagement thấp |
| 26 | POST-019 | A/B testing cho người mới bắt đầu | LinkedIn | 3.3% | Chủ đề quá rộng, thiếu góc nhìn mới |

### 4. Pattern Phát Hiện

1. **Dạng "Tips/Hướng dẫn" và "Case Study" có ER cao nhất** — 12 bài Tips/Hướng dẫn có ER trung bình 3.7%, 3 bài Case Study có ER trung bình 3.6%. Đây là 2 format nên ưu tiên.

2. **LinkedIn outperform Facebook trên hầu hết chỉ số** — LinkedIn ER trung bình 3.6% vs Facebook 3.3%. Impressions LinkedIn trung bình 10.200 vs Facebook 5.400. LinkedIn phù hợp hơn cho nội dung chuyên môn.

3. **Bài "Behind the scenes" có ER thấp trên Facebook** — 3 bài BTS (POST-006, POST-014, POST-024) có ER trung bình 3.0%, thấp hơn trung bình chung. Tuy nhiên comments rate lại cao → tạo kết nối cá nhân nhưng không reach rộng.

4. **Nội dung "meta" (viết về nền tảng trên chính nền tảng đó) hiệu quả** — POST-023 (LinkedIn SSI trên LinkedIn) đạt ER 4.0% cao nhất. POST-009 (4000 followers LinkedIn) đạt ER 3.6%.

5. **Thứ 2 là ngày đăng phổ biến nhất nhưng chưa chắc tối ưu nhất** — 24/30 bài đăng Thứ 2. Cần thử nghiệm đăng các ngày khác (POST-005 đăng Thứ 4 đạt ER 3.6%, POST-020 đăng Chủ nhật đạt 3.4%).

### 5. So Sánh Nền Tảng

| Chỉ số | LinkedIn | Facebook |
|--------|----------|----------|
| Số bài | 15 | 15 |
| Impressions TB | 10.440 | 5.360 |
| ER trung bình | 3.6% | 3.3% |
| Clicks TB | 516 | 197 |
| CTR trung bình | 4.7% | 3.0% |
| Comments TB | 52 | 37 |
| Shares TB | 62 | 25 |
| Saves TB | 76 | 28 |

### 6. Đề Xuất Hành Động

1. **Tăng tỷ lệ bài Tips/Hướng dẫn lên 50% content plan** — Đây là format có ER cao nhất (3.7%). Hiện chiếm 40%, nên tăng lên 50% (VD: 5/10 bài mỗi tháng).

2. **Chuyển bài "Behind the scenes" sang LinkedIn dạng carousel** — BTS trên Facebook có ER thấp (3.0%). Thử format carousel trên LinkedIn nơi storytelling visual được ưa chuộng hơn.

3. **Thử nghiệm đăng Thứ 3 và Thứ 4 trên LinkedIn** — POST-005 (Thứ 4) và POST-010 (Thứ 3) đều có ER tốt. Hiện đăng Thứ 2 quá nhiều, có thể bão hòa.

4. **Tạo thêm bài Case Study (ít nhất 2 bài/tháng)** — 3 bài Case Study có ER trung bình 3.6% và Impressions trung bình 15.333. Đây là dạng vừa có reach cao vừa có engagement tốt.

5. **Loại bỏ hoặc rebrand bài có ER < 3.0%** — 3 bài dưới 3.0% (POST-012, POST-018, POST-024) đều có impressions rất thấp. Cần cải thiện tiêu đề hoặc chuyển sang format khác.
```

**GV highlight kết quả trên màn hình:**

> "Các bạn thấy không? Agent đã tự đọc 30 dòng CSV, tính toán, so sánh, và đưa ra 5 đề xuất CỤ THỂ — mỗi đề xuất đều gắn với mã bài viết và con số. Đây là sức mạnh của MICRO: agent biết chính xác cần làm gì, trả về gì."

**Thời gian:** 10 phút

---

### Bước 4: Show kết quả chi tiết [32:00–37:00]

**🎯 Mục tiêu:** Đào sâu vào kết quả, giúp HV thấy giá trị thực tế.

**GV nói:**

> "Mình sẽ hỏi thêm vài câu để khai thác sâu hơn từ kết quả."

**Prompt bổ sung (copy-paste):**

```
Dựa trên báo cáo vừa tạo, hãy:

1. Tạo bảng xếp hạng loại nội dung (Loai_Noi_Dung) theo ER trung bình
2. Đề xuất content plan cho tháng 10/2024 (8 bài: 4 LinkedIn + 4 Facebook) dựa trên pattern đã phát hiện
3. Liệt kê 3 bài viết nên "tái sử dụng" (repurpose) từ nền tảng này sang nền tảng kia
```

**GV nói sau khi có kết quả:**

> "Thấy chưa? Từ 1 file CSV, agent không chỉ phân tích mà còn đề xuất content plan tháng sau và gợi ý repurpose. Đó là giá trị của agent chuyên biệt — nó hiểu deep về domain của mình."

**Thời gian:** 5 phút

---

### Bước 5: So sánh Before/After — Prompt thường vs MICRO skill [37:00–45:00]

**🎯 Mục tiêu:** HV thấy rõ sự khác biệt chất lượng giữa prompt thường và prompt có MICRO skill.

**GV nói:**

> "Bây giờ là phần quan trọng nhất. Mình sẽ hỏi cùng một câu hỏi nhưng bằng 2 cách: prompt thường (không có skill) và prompt qua skill MICRO. Các bạn so sánh kết quả nhé."

#### ❌ BEFORE — Prompt thường (không có MICRO skill)

**GV mở chat MỚI (không có skill) và gõ:**

```
Phân tích dữ liệu mạng xã hội cho mình. Đây là file CSV:
[paste 5-10 dòng đầu của engagement-metrics.csv]

Cho mình biết bài nào tốt, bài nào kém, và nên làm gì tiếp.
```

**Output mong đợi (chung chung, thiếu cấu trúc):**

```
Dựa trên dữ liệu bạn cung cấp, đây là phân tích:

**Bài tốt:**
- POST-005 có nhiều lượt xem nhất (17,000)
- POST-003 cũng khá tốt với 11,600 views

**Bài kém:**
- POST-006 chỉ có 3,600 views
- POST-004 cũng thấp

**Gợi ý:**
- Nên đăng nhiều bài hơn trên LinkedIn vì có nhiều views hơn
- Cố gắng tạo nội dung chất lượng hơn
- Đăng bài đều đặn hơn
```

#### ✅ AFTER — Prompt qua MICRO skill

**GV quay lại workspace có skill và dùng prompt ở Bước 3 (đã chạy ở trên).**

**GV so sánh trên 2 cửa sổ cạnh nhau (nếu có projector):**

| Tiêu chí | ❌ Prompt thường | ✅ MICRO Skill |
|----------|-----------------|---------------|
| **Cấu trúc** | Không có format, chỉ gạch đầu dòng | 6 phần rõ ràng, có bảng, có heading |
| **Độ sâu** | "Bài tốt" chỉ dựa trên views | Top 5 dựa trên ER, có giải thích WHY |
| **Đề xuất** | "Tạo nội dung chất lượng hơn" (vô nghĩa) | "Tăng Tips/Hướng dẫn lên 50%" (cụ thể, đo được) |
| **Dữ liệu** | Chỉ nhìn vài bài | Phân tích toàn bộ 30 bài |
| **So sánh** | Không so sánh nền tảng | Bảng so sánh LinkedIn vs Facebook chi tiết |
| **Hành động** | Chung chung, không thể thực hiện | 5 đề xuất cụ thể, mỗi cái gắn với data |
| **Tái sử dụng** | Kết quả khác nhau mỗi lần | Format cố định, dễ so sánh giữa các tháng |

**GV kết luận:**

> "Sự khác biệt rõ ràng: MICRO skill biến AI từ 'trả lời qua loa' thành 'chuyên gia phân tích'. Đó là vì agent biết chính xác Mission, Input cần gì, Constraints là gì, Role đóng vai gì, và Output trả về format nào."

**Thời gian:** 8 phút

---

## PHẦN THỰC HÀNH — HV Tự Làm (60 phút)

### Bài tập 1: Tạo file dữ liệu [00:00–10:00]

**📋 Hướng dẫn:**

> Tạo file `sample-data/engagement-metrics.csv` trong workspace của bạn.

**Cách 1 — Copy template GV (nhanh):**

```
Copy file engagement-metrics.csv từ GV vào thư mục sample-data/ của workspace.
```

**Cách 2 — Tạo data riêng (khuyến khích):**

**Prompt copy-paste vào Antigravity:**

```
Tạo file sample-data/engagement-metrics.csv với header:
STT,Ma_Bai,Ngay_Dang,Thu_Trong_Tuan,Nen_Tang,Loai_Noi_Dung,Tieu_De,Impressions,Clicks,CTR,Likes,Comments,Shares,Saves,Engagement_Rate

Tạo 20 dòng dữ liệu giả lập cho thương hiệu cá nhân của mình trong lĩnh vực [LĨNH VỰC CỦA BẠN]. Dữ liệu cần:
- Mix LinkedIn và Facebook (50/50)
- Thời gian: tháng 1 đến tháng 6/2024
- Loại nội dung: Tips, Case Study, Behind the scenes, Review, Checklist, Câu chuyện cá nhân
- Engagement rate dao động từ 2.0% đến 5.0%
- Một vài bài có engagement đặc biệt cao hoặc thấp để có pattern rõ ràng
```

**Kiểm tra:** HV mở file CSV, đảm bảo có ít nhất 15 dòng dữ liệu.

---

### Bài tập 2: Thiết kế MICRO cho skill [10:00–25:00]

**📋 Hướng dẫn:**

> Trước khi viết SKILL.md, hãy thiết kế MICRO trên giấy hoặc file nháp.

**Prompt copy-paste vào Antigravity:**

```
Mình muốn thiết kế một agent phân tích engagement cho thương hiệu cá nhân. Hãy giúp mình thiết kế theo MICRO framework:

M — Mission: Nhiệm vụ duy nhất của agent này là gì?
I — Input: Agent cần nhận dữ liệu gì? File gì? Thông tin gì?
C — Constraints: Agent ĐƯỢC LÀM gì và KHÔNG ĐƯỢC LÀM gì? Quy tắc nào bắt buộc?
R — Role: Agent đóng vai chuyên gia gì? Mô tả 2-3 câu.
O — Output: Kết quả trả về theo format nào? Có những phần nào?

Trả lời theo bảng MICRO, mỗi phần 2-3 câu.
```

**Output mong đợi (HV điều chỉnh theo ý mình):**

```
| MICRO | Thiết kế của bạn |
|-------|-----------------|
| M — Mission | Phân tích dữ liệu engagement mạng xã hội, tìm pattern và đề xuất cải thiện |
| I — Input | File CSV engagement-metrics.csv, khoảng thời gian phân tích, nền tảng |
| C — Constraints | LÀM: phân tích, so sánh, đề xuất. KHÔNG: viết bài, thiết kế, truy cập API |
| R — Role | Chuyên gia phân tích dữ liệu mạng xã hội, kết luận dựa trên bằng chứng |
| O — Output | Báo cáo Markdown: tổng quan, top/bottom, patterns, so sánh, đề xuất |
```

**Thời gian:** 15 phút (bao gồm trao đổi với bạn bên cạnh)

---

### Bài tập 3: Tạo SKILL.md [25:00–40:00]

**📋 Hướng dẫn:**

> Tạo thư mục skill và viết file SKILL.md dựa trên thiết kế MICRO.

**Bước 3a — Tạo thư mục:**

**Prompt copy-paste vào Antigravity:**

```
Tạo thư mục .agents/skills/engagement-analyst/ và tạo file SKILL.md bên trong.
Nội dung SKILL.md theo MICRO framework:

---
name: "engagement-analyst"
description: >
  Skill phân tích dữ liệu engagement mạng xã hội. Đọc file CSV chứa
  metrics bài viết, xác định top/bottom posts, phát hiện trends,
  và đưa ra khuyến nghị hành động cụ thể dựa trên dữ liệu.
---

Phần nội dung gồm 5 sections theo MICRO:
1. Mission — Nhiệm vụ: phân tích engagement
2. Role — Vai trò: chuyên gia phân tích dữ liệu mạng xã hội
3. Input — Đầu vào: file CSV, khoảng thời gian, nền tảng
4. Constraints — Ràng buộc: LÀM (phân tích, so sánh, đề xuất), KHÔNG LÀM (viết bài, thiết kế), quy tắc (ER = (L+C+S)/I×100, dữ liệu <5 bài thì cảnh báo, tiếng Việt)
5. Output — Đầu ra: Báo cáo Markdown với tổng quan, top 5, bottom 5, patterns, so sánh nền tảng, đề xuất hành động
```

**Kiểm tra:** HV mở file, xác nhận cấu trúc:

```
.agents/skills/engagement-analyst/SKILL.md  ← file tồn tại
```

**Thời gian:** 15 phút

---

### Bài tập 4: Chạy skill và lưu output [40:00–50:00]

**📋 Hướng dẫn:**

> Chạy skill engagement-analyst với dữ liệu CSV của bạn.

**Prompt copy-paste vào Antigravity:**

```
Đọc file sample-data/engagement-metrics.csv và chạy phân tích engagement cho toàn bộ dữ liệu.

Trả về báo cáo đầy đủ theo format của skill engagement-analyst:
1. Tổng quan
2. Top 5 bài tương tác cao
3. Bottom 5 bài cần cải thiện
4. Pattern phát hiện
5. So sánh nền tảng
6. Đề xuất hành động

Lưu kết quả vào file outputs/reports/engagement-analysis-session05.md
```

**Kiểm tra:** HV mở file output, xác nhận:
- [ ] Có đủ 6 phần
- [ ] Có bảng với dữ liệu cụ thể
- [ ] Đề xuất gắn với mã bài viết
- [ ] Format nhất quán

**Thời gian:** 10 phút

---

### Bài tập 5: So sánh Before/After [50:00–60:00]

**📋 Hướng dẫn:**

> So sánh kết quả giữa prompt thường và prompt qua skill MICRO.

**Bước 5a — Chạy prompt thường (không nhắc đến skill):**

**Mở chat mới trong Antigravity và gõ:**

```
Phân tích dữ liệu engagement trong file sample-data/engagement-metrics.csv cho mình. Bài nào tốt, bài nào kém, nên làm gì tiếp?
```

**Bước 5b — So sánh 2 kết quả:**

HV tự đánh giá theo bảng:

| Tiêu chí | Prompt thường (điểm 1–5) | MICRO Skill (điểm 1–5) |
|----------|--------------------------|------------------------|
| Cấu trúc rõ ràng | ? | ? |
| Độ sâu phân tích | ? | ? |
| Đề xuất cụ thể | ? | ? |
| Dựa trên dữ liệu | ? | ? |
| Có thể hành động ngay | ? | ? |
| **Tổng** | **?/25** | **?/25** |

**Bước 5c — Ghi nhận vào PDCA log:**

**Prompt copy-paste vào Antigravity:**

```
Thêm 1 entry mới vào docs/pdca-log.md cho buổi 5:

## PDCA Iteration 3 — Session 05: AI Agent MICRO

### Plan
- Mục tiêu: Tạo skill engagement-analyst theo MICRO framework
- Input: file engagement-metrics.csv (XX dòng)

### Do
- Thiết kế MICRO trên giấy/nháp
- Tạo .agents/skills/engagement-analyst/SKILL.md
- Chạy phân tích, lưu output

### Check
- So sánh prompt thường vs MICRO skill
- Điểm prompt thường: [X]/25
- Điểm MICRO skill: [X]/25
- Chênh lệch: [X] điểm

### Act
- Bài học rút ra: [ghi lại]
- Cải tiến cho lần sau: [ghi lại]
```

**Thời gian:** 10 phút

---

## Xử Lý Sự Cố (Troubleshooting)

| Vấn đề | Nguyên nhân | Cách xử lý |
|--------|-------------|-----------|
| Skill không được kích hoạt | Thiếu frontmatter YAML (dấu `---`) hoặc sai `name` | Kiểm tra SKILL.md có `---` mở + đóng, `name` đúng kebab-case |
| File CSV không đọc được | Đường dẫn sai hoặc encoding lỗi | Kiểm tra path: `sample-data/engagement-metrics.csv` (tương đối từ root workspace) |
| Output không đúng format | Phần Output trong SKILL.md chưa rõ ràng | Thêm ví dụ cụ thể (example output) vào SKILL.md |
| Agent trả lời bằng tiếng Anh | Thiếu constraint "Luôn dùng tiếng Việt" | Thêm quy tắc vào phần Constraints |
| Agent viết bài mới thay vì phân tích | Phần Constraints chưa rõ "KHÔNG LÀM" | Bổ sung `❌ KHÔNG viết nội dung mới` vào Constraints |
| ER tính sai | Chưa define công thức trong Constraints | Thêm `ER = (Likes + Comments + Shares) / Impressions × 100` |
| Antigravity không nhận diện skill | Cấu trúc thư mục sai | Phải là `.agents/skills/engagement-analyst/SKILL.md` — có folder bao ngoài |

---

## Trạng Thái Workspace SAU Buổi 5

```
personal-brand-workspace/
├── AGENTS.md                               ← ROOT level (không thay đổi)
├── .agents/
│   ├── skills/
│   │   ├── content-writer/SKILL.md         ← từ buổi 3
│   │   └── engagement-analyst/SKILL.md     ← ✨ MỚI — buổi 5
│   ├── workflows/content-creation-flow.md  ← từ buổi 4
│   └── rules/                              ← trống (buổi 7)
├── knowledge-base/
│   ├── brand-profile.md
│   ├── target-audience.md
│   └── content-pillars.md
├── sample-data/
│   ├── social-media-posts.csv
│   ├── monthly-report-data.csv
│   ├── content-calendar.csv
│   └── engagement-metrics.csv              ← ✨ MỚI — buổi 5
├── outputs/
│   ├── drafts/
│   └── reports/
│       └── engagement-analysis-session05.md ← ✨ MỚI — output buổi 5
└── docs/
    ├── workspace-map.md
    ├── pdca-log.md                         ← CẬP NHẬT — thêm iteration 3
    └── lesson-to-workspace-map.md
```

**Files thêm mới sau buổi 5:**

| File | Loại | Mô tả |
|------|------|-------|
| `.agents/skills/engagement-analyst/SKILL.md` | Skill | Agent phân tích engagement theo MICRO |
| `sample-data/engagement-metrics.csv` | Data | 30+ dòng dữ liệu engagement |
| `outputs/reports/engagement-analysis-session05.md` | Output | Báo cáo phân tích từ skill |

---

## Tóm Tắt Buổi Học

### Kiến thức đã học:
1. **MICRO framework** — 5 thành phần thiết kế agent: Mission, Input, Constraints, Role, Output
2. **Cấu trúc SKILL.md** — Cách viết file skill cho Antigravity với frontmatter YAML + body Markdown
3. **Agent chuyên biệt** — Mỗi agent làm 1 việc duy nhất, có ranh giới rõ ràng (LÀM/KHÔNG LÀM)
4. **Before/After** — So sánh chất lượng giữa prompt thường và agent có MICRO

### Kỹ năng thực hành:
1. Thiết kế MICRO trên giấy trước khi code
2. Tạo thư mục và file SKILL.md đúng cấu trúc Antigravity
3. Chạy skill với dữ liệu CSV thực tế
4. Đánh giá và so sánh output

### Kết nối với buổi sau:
- **Buổi 6 — Knowledge & Rules:** Sẽ thêm knowledge base (`.md` files trong `knowledge-base/`) và rules (`.md` files trong `.agents/rules/`) để agent engagement-analyst hiểu sâu hơn về thương hiệu cá nhân và tuân thủ quy tắc output nhất quán.
- **Buổi 8 — Handoff & Checkpoint:** Skill `engagement-analyst` sẽ bàn giao kết quả cho `content-writer` → tạo bài viết mới dựa trên insight.

---

> **Ghi nhớ cho GV:** Sau buổi demo, kiểm tra workspace của từng HV đảm bảo có file `.agents/skills/engagement-analyst/SKILL.md` với đủ 5 phần MICRO. Nếu HV chưa hoàn thành, giao bài tập về nhà hoàn thiện trước buổi 6.

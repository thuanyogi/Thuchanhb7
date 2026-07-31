# SESSION 08 — TỔ CHỨC & AUDIT
## Demo Script — GV trên Workspace A (45 phút) + Thực hành HV trên Workspace B (60 phút)

> **Mục tiêu:** Hiểu mô hình tổ chức AI team 3 tầng, tạo Brand Auditor skill, chạy audit toàn bộ workspace, đánh giá 7 thành tố với điểm số cụ thể.

---

## TRẠNG THÁI WORKSPACE KHI VÀO BUỔI 8

```
personal-brand-workspace/
├── AGENTS.md                          ← ROOT level — Orchestrator
├── .agents/
│   ├── skills/
│   │   ├── content-writer/SKILL.md
│   │   ├── engagement-analyst/SKILL.md
│   │   └── content-approver/SKILL.md   ← từ buổi 7
│   ├── workflows/
│   │   ├── content-creation-flow.md
│   │   └── approval-pipeline-flow.md   ← từ buổi 7
│   └── rules/
│       ├── brand-voice.md
│       ├── content-quality.md
│       ├── visual-standards.md
│       └── approval-policy.md          ← từ buổi 7
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
    └── handoff-contracts.md            ← từ buổi 7
```

---

# PHẦN 1 — DEMO GV (45 phút)

---

## BƯỚC 1 — Giải thích mô hình tổ chức AI Team 3 tầng [00:00–10:00]

> **GV nói:** "Trước khi tạo thêm skill mới, chúng ta cần hiểu workspace đang vận hành theo mô hình tổ chức nào. Giống một công ty thật — có CEO, có trưởng phòng, có quy trình liên phòng."

### Sơ đồ 3 tầng — AI Team Organization

```
┌─────────────────────────────────────────────────────────┐
│              TẦNG 1 — ORCHESTRATOR (CEO)                │
│                                                         │
│  AGENTS.md (ROOT)                                       │
│  • Định hướng toàn bộ workspace                         │
│  • Phân công nhiệm vụ cho từng skill                    │
│  • Quyết định khi nào gọi ai                            │
│  • Tham chiếu knowledge-base + rules                    │
└────────────────────────┬────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   TẦNG 2     │ │   TẦNG 2     │ │   TẦNG 2     │
│ SPECIALISTS  │ │ SPECIALISTS  │ │ SPECIALISTS  │
│              │ │              │ │              │
│ content-     │ │ engagement-  │ │ content-     │
│ writer/      │ │ analyst/     │ │ approver/    │
│ SKILL.md     │ │ SKILL.md     │ │ SKILL.md     │
│              │ │              │ │              │
│ → Viết bài   │ │ → Phân tích  │ │ → Duyệt nội │
│ → Theo brand │ │ → Đo metrics │ │   dung       │
│ → Dùng data  │ │ → Đề xuất    │ │ → Kiểm tra   │
└──────┬───────┘ └──────┬───────┘ └──────┬───────┘
       │                │                │
       └────────────────┼────────────────┘
                        ▼
┌─────────────────────────────────────────────────────────┐
│         TẦNG 3 — COMMUNICATION & GOVERNANCE             │
│                                                         │
│  workflows/              rules/           knowledge/    │
│  • content-creation      • brand-voice    • brand-      │
│    -flow.md              • content-         profile.md  │
│  • approval-pipeline      quality        • target-      │
│    -flow.md              • visual-          audience.md │
│                            standards     • content-     │
│                          • approval-       pillars.md   │
│                            policy        • brand-       │
│                                            guidelines   │
│                                                         │
│  → Quy trình phối hợp   → Ràng buộc     → Kiến thức   │
│  → Ai làm trước/sau     → Chuẩn chất    → Dữ liệu     │
│                            lượng           tham chiếu   │
└─────────────────────────────────────────────────────────┘
```

### Bảng giải thích vai trò từng tầng

| Tầng | Thành phần | Vai trò | Ví dụ trong workspace |
|------|-----------|---------|----------------------|
| 1 — Orchestrator | `AGENTS.md` (ROOT) | CEO — điều phối tổng thể, phân công, quyết định | Khi user hỏi "viết bài" → gọi content-writer, tham chiếu brand-voice |
| 2 — Specialists | `.agents/skills/*/SKILL.md` | Trưởng phòng — chuyên môn sâu từng lĩnh vực | content-writer viết bài, engagement-analyst phân tích, content-approver duyệt |
| 3 — Communication | `workflows/` + `rules/` + `knowledge-base/` | Quy trình + Luật lệ + Kiến thức — nền tảng vận hành | content-creation-flow.md chỉ thứ tự, brand-voice.md chỉ giọng văn |

### Data flow minh họa — Khi user yêu cầu "Viết bài LinkedIn"

```
User → AGENTS.md (phân tích yêu cầu)
         │
         ├─ Đọc knowledge-base/brand-profile.md (hiểu brand)
         ├─ Đọc knowledge-base/content-pillars.md (chọn trụ cột)
         │
         ├─ Gọi content-writer/SKILL.md
         │    ├─ Áp dụng rules/brand-voice.md
         │    ├─ Áp dụng rules/content-quality.md
         │    └─ Tham chiếu sample-data/social-media-posts.csv
         │
         ├─ Theo workflows/content-creation-flow.md
         │    └─ Bước tiếp: gọi content-approver/SKILL.md
         │         ├─ Áp dụng rules/approval-policy.md
         │         └─ Output: approved/rejected + feedback
         │
         └─ Output cuối → outputs/
```

> **GV nhấn mạnh:** "Mỗi file trong workspace đều có vai trò rõ ràng. Không có file nào nằm 'cho vui'. Đây là điều khác biệt giữa workspace chuyên nghiệp và workspace lộn xộn."

---

## BƯỚC 2 — Tạo dữ liệu phản hồi khán giả [10:00–15:00]

> **GV nói:** "Trước khi audit, ta cần thêm một nguồn data quan trọng — phản hồi từ khán giả thật. Đây là data giúp auditor đánh giá workspace có đang phục vụ đúng đối tượng không."

### Prompt — Tạo audience-feedback.csv

```
Tạo file sample-data/audience-feedback.csv với dữ liệu phản hồi khán giả.

Yêu cầu:
- 20 dòng dữ liệu mẫu
- Các cột: feedback_id, date, source, content_type, feedback_text, sentiment, rating, topic, actionable
- source: linkedin, facebook, instagram, tiktok, email
- content_type: bài viết, video, infographic, carousel, story
- sentiment: positive, neutral, negative
- rating: 1-5
- actionable: yes/no
- Nội dung phản hồi bằng tiếng Việt, liên quan đến personal branding
- Đảm bảo có mix đa dạng: khen, chê, góp ý cụ thể

Lưu vào: sample-data/audience-feedback.csv
```

### Output kỳ vọng — audience-feedback.csv

```csv
feedback_id,date,source,content_type,feedback_text,sentiment,rating,topic,actionable
FB001,2025-06-01,linkedin,bài viết,"Bài chia sẻ về leadership rất thực tế, áp dụng được ngay",positive,5,leadership,no
FB002,2025-06-03,facebook,video,"Video hơi dài, nên cắt ngắn còn 3 phút thôi",negative,3,content-format,yes
FB003,2025-06-05,instagram,carousel,"Thiết kế carousel đẹp nhưng chữ hơi nhỏ khó đọc trên điện thoại",neutral,3,visual-design,yes
FB004,2025-06-07,tiktok,video,"Nội dung hay nhưng âm thanh bị rè, cần mic tốt hơn",negative,2,production-quality,yes
FB005,2025-06-09,linkedin,bài viết,"Góc nhìn về AI trong marketing rất mới, share lại cho team",positive,5,ai-marketing,no
FB006,2025-06-10,email,bài viết,"Newsletter tuần này quá dài, tóm gọn 3 ý chính thôi",negative,2,content-length,yes
FB007,2025-06-12,facebook,infographic,"Infographic số liệu rất dễ hiểu, xin phép dùng trong báo cáo",positive,5,data-visualization,no
FB008,2025-06-14,instagram,story,"Story Q&A rất hay, nên làm thường xuyên hơn",positive,4,engagement,yes
FB009,2025-06-16,linkedin,bài viết,"Bài viết về personal branding quá chung chung, cần case study cụ thể",negative,2,content-depth,yes
FB010,2025-06-18,tiktok,video,"Trend này đã cũ rồi, cần cập nhật nhanh hơn",negative,3,timeliness,yes
FB011,2025-06-19,facebook,carousel,"Carousel 10 slides về productivity tips rất hữu ích",positive,4,productivity,no
FB012,2025-06-21,linkedin,bài viết,"Cách kể chuyện rất cuốn, đọc một mạch không dừng",positive,5,storytelling,no
FB013,2025-06-23,instagram,infographic,"Font chữ không đồng nhất giữa các bài, thiếu nhất quán",negative,2,brand-consistency,yes
FB014,2025-06-24,email,bài viết,"CTA trong email không rõ ràng, không biết click vào đâu",negative,2,cta-clarity,yes
FB015,2025-06-26,tiktok,video,"Giọng nói truyền cảm, nội dung dễ tiếp thu",positive,4,delivery,no
FB016,2025-06-27,linkedin,bài viết,"Thiếu hashtag chiến lược, bài tốt nhưng reach thấp",neutral,3,distribution,yes
FB017,2025-06-28,facebook,video,"Video phỏng vấn khách mời rất hay, mong có thêm series",positive,5,content-series,yes
FB018,2025-06-29,instagram,story,"Poll trong story giúp tương tác tốt, tiếp tục nhé",positive,4,interactive-content,no
FB019,2025-06-30,linkedin,bài viết,"Bài so sánh tool AI rất chi tiết và khách quan",positive,5,tool-review,no
FB020,2025-07-01,email,bài viết,"Tần suất gửi email quá nhiều, 1 tuần/lần là đủ",negative,2,frequency,yes
```

> **GV chỉ ra:** "Nhìn data này — 9 positive, 3 neutral, 8 negative. Có 12/20 phản hồi actionable. Đây là nguồn thông tin vàng cho auditor đánh giá workspace."

---

## BƯỚC 3 — Tạo Brand Auditor Skill [15:00–25:00]

> **GV nói:** "Bây giờ ta tạo một skill đặc biệt — Brand Auditor. Skill này không tạo content, mà đánh giá toàn bộ workspace. Giống như kiểm toán viên nội bộ của công ty."

### Prompt — Tạo brand-auditor/SKILL.md

```
Tạo file .agents/skills/brand-auditor/SKILL.md với nội dung chính xác sau:

---
name: brand-auditor
description: >
  Kiểm toán viên workspace — đánh giá toàn diện 7 thành tố của personal brand workspace.
  Kích hoạt khi cần audit, review tổng thể, kiểm tra chất lượng workspace,
  hoặc đánh giá mức độ sẵn sàng cho Phase 3.
---

# Brand Auditor — Kiểm Toán Viên Workspace

## Vai trò
Bạn là kiểm toán viên nội bộ của personal brand workspace. Nhiệm vụ của bạn là đánh giá toàn diện, khách quan và đưa ra điểm số cho từng thành tố.

## Quy trình Audit

### Bước 1 — Thu thập thông tin
- Đọc AGENTS.md để hiểu cấu trúc tổng thể
- Liệt kê tất cả skills trong .agents/skills/
- Liệt kê tất cả rules trong .agents/rules/
- Liệt kê tất cả workflows trong .agents/workflows/
- Đọc tất cả files trong knowledge-base/
- Đọc tất cả files trong sample-data/
- Kiểm tra thư mục outputs/ và docs/

### Bước 2 — Đánh giá 7 thành tố
Cho điểm mỗi thành tố theo thang 1-10:

#### 2.1 Skills Coverage (Độ phủ kỹ năng)
- Có đủ skills cho các nhiệm vụ chính không?
- Mỗi skill có SKILL.md với frontmatter đầy đủ không?
- Có skill nào bị trùng chức năng không?
- Có gap nào chưa có skill phụ trách không?

#### 2.2 Knowledge Completeness (Độ đầy đủ kiến thức)
- Knowledge base có đủ context cho AI hoạt động không?
- Các file .md có cấu trúc rõ ràng không?
- Thông tin có bị lỗi thời không?
- Có thiếu loại knowledge nào quan trọng không?

#### 2.3 Rules Enforcement (Mức độ ràng buộc quy tắc)
- Rules có đủ chi tiết để AI tuân thủ không?
- Có conflict giữa các rules không?
- Rules có cover đủ các tình huống phổ biến không?
- Có rule nào quá mơ hồ hoặc quá cứng nhắc không?

#### 2.4 Workflow Integration (Tích hợp quy trình)
- Workflows có kết nối đúng các skills không?
- Có rõ thứ tự thực hiện không?
- Handoff giữa các bước có rõ ràng không?
- Có workflow nào thiếu hoặc bị đứt gãy không?

#### 2.5 Data Quality (Chất lượng dữ liệu)
- Data có đủ để AI phân tích không?
- Format CSV có chuẩn không?
- Có data nào bị thiếu field, lỗi encoding không?
- Data có phản ánh đúng thực tế không?

#### 2.6 Output Consistency (Tính nhất quán đầu ra)
- Output có tuân theo brand voice không?
- Format output có đồng nhất không?
- Có template/mẫu cho output không?
- Quality của output có ổn định không?

#### 2.7 Documentation Health (Sức khỏe tài liệu)
- Có workspace-map cập nhật không?
- Có pdca-log ghi chép đầy đủ không?
- Có hướng dẫn sử dụng cho người mới không?
- Tài liệu có phản ánh đúng trạng thái hiện tại không?

### Bước 3 — Tổng hợp báo cáo
- Tính điểm trung bình tổng thể
- Xếp hạng: Xuất sắc (9-10), Tốt (7-8), Trung bình (5-6), Cần cải thiện (3-4), Yếu (1-2)
- Liệt kê top 3 điểm mạnh
- Liệt kê top 3 điểm cần cải thiện
- Đề xuất hành động cụ thể cho mỗi điểm yếu

### Bước 4 — Phân tích phản hồi khán giả
- Đọc sample-data/audience-feedback.csv
- Phân tích sentiment distribution
- Tìm pattern trong feedback tiêu cực
- Đề xuất cải thiện dựa trên phản hồi thật

## Format báo cáo
Lưu báo cáo vào docs/audit-report.md với format:

```markdown
# Báo Cáo Audit Workspace — [Ngày]
## Tổng quan
## Điểm số 7 thành tố
## Phân tích chi tiết
## Phân tích phản hồi khán giả
## Khuyến nghị
## Kế hoạch hành động
```

## Lưu ý quan trọng
- Đánh giá khách quan, không thiên vị
- Dựa trên bằng chứng cụ thể từ các file thật
- Mỗi điểm số phải có giải thích rõ ràng
- Khuyến nghị phải actionable — có thể thực hiện ngay
```

### Output kỳ vọng

```
Đã tạo file .agents/skills/brand-auditor/SKILL.md
- Frontmatter: name, description
- 4 bước audit: Thu thập → Đánh giá 7 thành tố → Tổng hợp → Phân tích feedback
- Rubric chi tiết cho từng thành tố
- Format báo cáo chuẩn
```

> **GV giải thích cấu trúc:** "Lưu ý — skill là folder chứa SKILL.md, không phải file đơn lẻ. Đây là quy ước của Antigravity. brand-auditor/ là folder, bên trong có SKILL.md."

---

## BƯỚC 4 — Chạy Audit toàn bộ Workspace [25:00–40:00]

> **GV nói:** "Giờ là lúc hồi hộp nhất — ta cho auditor chạy và xem workspace của mình được bao nhiêu điểm."

### Prompt — Chạy audit

```
Chạy audit toàn bộ workspace theo quy trình trong .agents/skills/brand-auditor/SKILL.md.

Yêu cầu:
1. Đọc tất cả files trong workspace để thu thập thông tin
2. Đánh giá 7 thành tố theo rubric, cho điểm 1-10
3. Đọc và phân tích sample-data/audience-feedback.csv
4. Tổng hợp báo cáo đầy đủ
5. Lưu kết quả vào docs/audit-report.md

Đánh giá khách quan, dựa trên bằng chứng cụ thể.
```

### Output kỳ vọng — docs/audit-report.md

```markdown
# Báo Cáo Audit Workspace — Personal Brand
**Ngày audit:** 2025-07-XX
**Auditor:** Brand Auditor Skill
**Phiên bản workspace:** Phase 2 — Session 08

---

## Tổng Quan

Workspace personal brand đã trải qua 7 buổi xây dựng, từ nền tảng cơ bản (Phase 1) đến hệ thống có quy trình duyệt và handoff (Phase 2). Đây là bản audit toàn diện đánh giá mức độ sẵn sàng cho Phase 3 — Sáng Tạo.

**Điểm trung bình tổng thể: 7.3/10 — Xếp hạng: TỐT**

---

## Điểm Số 7 Thành Tố

| # | Thành tố | Điểm | Xếp hạng | Ghi chú |
|---|---------|------|-----------|---------|
| 1 | Skills Coverage | 7/10 | Tốt | 4 skills phủ được nhiệm vụ chính, thiếu analytics chuyên sâu |
| 2 | Knowledge Completeness | 8/10 | Tốt | 4 files knowledge đầy đủ, cần thêm competitor analysis |
| 3 | Rules Enforcement | 7/10 | Tốt | 4 rules rõ ràng, một số chưa có ví dụ minh họa |
| 4 | Workflow Integration | 7/10 | Tốt | 2 workflows kết nối tốt, cần thêm workflow phân tích |
| 5 | Data Quality | 7/10 | Tốt | 5 files CSV đa dạng, cần chuẩn hóa format date |
| 6 | Output Consistency | 6/10 | Trung bình | Chưa có template output chuẩn, phụ thuộc vào prompt |
| 7 | Documentation Health | 8/10 | Tốt | workspace-map + pdca-log cập nhật, handoff-contracts rõ ràng |

**Biểu đồ radar (text):**
```
Skills Coverage:      ████████░░ 8/10
Knowledge:            ████████░░ 8/10
Rules Enforcement:    ███████░░░ 7/10
Workflow Integration: ███████░░░ 7/10
Data Quality:         ███████░░░ 7/10
Output Consistency:   ██████░░░░ 6/10
Documentation:        ████████░░ 8/10
```

---

## Phân Tích Chi Tiết

### 1. Skills Coverage — 7/10

**Điểm mạnh:**
- 4 skills (content-writer, engagement-analyst, content-approver, brand-auditor) phủ được vòng đời content cơ bản
- Mỗi skill có SKILL.md với frontmatter name + description đầy đủ
- Không có skill trùng chức năng

**Điểm yếu:**
- Thiếu skill chuyên phân tích sâu (VD: SEO analyzer, competitor tracker)
- Chưa có skill quản lý calendar/scheduling
- Brand-auditor mới tạo, chưa qua kiểm chứng thực tế

**Khuyến nghị:** Thêm 1-2 skills cho Phase 3 — gợi ý: content-repurposer (tái sử dụng content), hoặc trend-researcher (nghiên cứu xu hướng).

### 2. Knowledge Completeness — 8/10

**Điểm mạnh:**
- 4 files knowledge cốt lõi: brand-profile, target-audience, content-pillars, brand-guidelines
- Cấu trúc .md rõ ràng, dễ đọc cho AI
- Thông tin liên kết tốt giữa các file

**Điểm yếu:**
- Thiếu competitor analysis — không biết đối thủ làm gì
- Chưa có knowledge về platform algorithms (LinkedIn, Facebook, TikTok)
- Một số thông tin có thể đã lỗi thời nếu không cập nhật

**Khuyến nghị:** Thêm file knowledge-base/competitor-landscape.md hoặc knowledge-base/platform-insights.md.

### 3. Rules Enforcement — 7/10

**Điểm mạnh:**
- 4 rules cover 4 khía cạnh quan trọng: voice, quality, visual, approval
- Rules không conflict với nhau
- Approval-policy từ buổi 7 bổ sung tốt cho quy trình

**Điểm yếu:**
- Một số rules thiếu ví dụ cụ thể (nên / không nên)
- Chưa có rule cho crisis communication
- Visual-standards chưa có color code hoặc font cụ thể

**Khuyến nghị:** Bổ sung ví dụ minh họa vào mỗi rule, thêm rule cho tình huống khẩn cấp.

### 4. Workflow Integration — 7/10

**Điểm mạnh:**
- content-creation-flow kết nối content-writer → output rõ ràng
- approval-pipeline-flow kết nối content-approver với quy trình duyệt
- Handoff contracts từ buổi 7 giúp chuyển giao rõ ràng

**Điểm yếu:**
- Thiếu workflow phân tích (engagement-analyst chưa nằm trong workflow nào)
- Chưa có workflow vòng lặp: viết → duyệt → sửa → duyệt lại
- 2 workflows chưa đủ cho hệ thống hoàn chỉnh

**Khuyến nghị:** Tạo thêm analytics-review-flow.md kết nối engagement-analyst vào quy trình.

### 5. Data Quality — 7/10

**Điểm mạnh:**
- 5 files CSV đa dạng: social posts, reports, calendar, metrics, feedback
- Data phản hồi khán giả (audience-feedback.csv) mới bổ sung — rất giá trị
- Format CSV chuẩn, có header rõ ràng

**Điểm yếu:**
- Format date chưa đồng nhất giữa các file
- Một số file CSV thiếu data dictionary (giải thích cột)
- Data mẫu 20 dòng — cần nhiều hơn cho phân tích thống kê

**Khuyến nghị:** Chuẩn hóa date format YYYY-MM-DD cho tất cả file, thêm comment dòng đầu giải thích.

### 6. Output Consistency — 6/10

**Điểm mạnh:**
- Brand voice rules giúp đầu ra nhất quán về giọng văn
- Có thư mục outputs/ riêng biệt

**Điểm yếu:**
- Chưa có template output chuẩn cho từng loại content
- Mỗi lần chạy có thể ra format khác nhau
- Không có checklist kiểm tra output trước khi publish

**Khuyến nghị:** Tạo thư mục templates/ hoặc thêm output format vào mỗi SKILL.md.

### 7. Documentation Health — 8/10

**Điểm mạnh:**
- workspace-map.md cập nhật cấu trúc tổng thể
- pdca-log.md ghi chép quá trình học
- lesson-to-workspace-map.md liên kết bài học với workspace
- handoff-contracts.md từ buổi 7 hoàn thiện tài liệu

**Điểm yếu:**
- Chưa có README hoặc quickstart guide
- pdca-log có thể chưa cập nhật đến buổi 8
- Thiếu changelog theo dõi thay đổi

**Khuyến nghị:** Thêm file docs/quickstart.md hướng dẫn sử dụng workspace cho người mới.

---

## Phân Tích Phản Hồi Khán Giả

**Nguồn dữ liệu:** sample-data/audience-feedback.csv (20 phản hồi)

### Phân bố Sentiment

| Sentiment | Số lượng | Tỷ lệ |
|-----------|---------|--------|
| Positive | 9 | 45% |
| Neutral | 3 | 15% |
| Negative | 8 | 40% |

### Phân bố Rating

| Rating | Số lượng | Ghi chú |
|--------|---------|---------|
| 5 ⭐ | 6 | Nội dung xuất sắc |
| 4 ⭐ | 3 | Tốt, cần cải thiện nhỏ |
| 3 ⭐ | 3 | Trung bình, có vấn đề cụ thể |
| 2 ⭐ | 6 | Cần cải thiện rõ rệt |
| 1 ⭐ | 0 | Không có phản hồi rất xấu |

**Rating trung bình: 3.5/5**

### Top 3 Vấn Đề Từ Feedback Tiêu Cực

1. **Content format & length** (3 phản hồi) — Video quá dài, email quá dài, newsletter cần tóm gọn
2. **Brand consistency** (2 phản hồi) — Font không đồng nhất, thiếu nhất quán giữa các bài
3. **Technical quality** (2 phản hồi) — Âm thanh rè, CTA không rõ ràng

### Actionable Items

| Ưu tiên | Từ feedback | Hành động | Liên quan đến |
|---------|------------|-----------|---------------|
| Cao | FB002, FB006 | Giới hạn độ dài content theo platform | rules/content-quality.md |
| Cao | FB013 | Chuẩn hóa font, màu sắc | rules/visual-standards.md |
| Cao | FB014 | Thêm CTA template rõ ràng | content-writer/SKILL.md |
| Trung bình | FB004 | Thêm checklist production quality | rules/ (tạo mới) |
| Trung bình | FB010 | Thêm trend monitoring vào workflow | workflows/ (tạo mới) |
| Thấp | FB016 | Nghiên cứu hashtag strategy | knowledge-base/ (bổ sung) |

---

## Khuyến Nghị Tổng Hợp

### Top 3 Điểm Mạnh
1. ✅ **Knowledge base vững** — 4 files cốt lõi + data đa dạng
2. ✅ **Quy trình duyệt hoàn chỉnh** — approval pipeline + handoff contracts
3. ✅ **Tài liệu tốt** — workspace-map, pdca-log, lesson-map đều có

### Top 3 Điểm Cần Cải Thiện
1. ⚠️ **Output consistency thấp nhất (6/10)** — cần template chuẩn
2. ⚠️ **Thiếu workflow cho analytics** — engagement-analyst chưa kết nối
3. ⚠️ **Data quality cần chuẩn hóa** — date format, data dictionary

### Mức Độ Sẵn Sàng Cho Phase 3

| Tiêu chí | Đạt? | Ghi chú |
|----------|------|---------|
| Có ít nhất 3 skills | ✅ | 4 skills + 1 auditor |
| Knowledge base đủ context | ✅ | 4 files knowledge |
| Có rules ràng buộc chất lượng | ✅ | 4 rules |
| Có ít nhất 1 workflow | ✅ | 2 workflows |
| Có data để phân tích | ✅ | 5 files CSV |
| Có tài liệu workspace | ✅ | 4 files docs |
| Điểm audit trung bình ≥ 7 | ✅ | 7.3/10 |

**Kết luận: Workspace ĐẠT yêu cầu để chuyển sang Phase 3 — Sáng Tạo.**

---

## Kế Hoạch Hành Động — Cải Thiện Trước Phase 3

| # | Hành động | Ưu tiên | Buổi thực hiện | Thành tố cải thiện |
|---|----------|---------|----------------|-------------------|
| 1 | Thêm output templates vào skills | Cao | Buổi 9-10 | Output Consistency +2 |
| 2 | Tạo analytics-review workflow | Cao | Buổi 9 | Workflow Integration +1 |
| 3 | Chuẩn hóa date format CSV | Trung bình | Tự làm | Data Quality +1 |
| 4 | Thêm ví dụ vào rules | Trung bình | Buổi 9 | Rules Enforcement +1 |
| 5 | Tạo quickstart guide | Thấp | Buổi 10 | Documentation +1 |

**Mục tiêu Phase 3:** Nâng điểm trung bình từ 7.3 lên 8.5+
```

> **GV nhấn mạnh:** "Nhìn bảng điểm — 7.3/10 là TỐT nhưng chưa XUẤT SẮC. Output Consistency là điểm thấp nhất (6/10). Đây là hướng cải thiện rõ ràng cho Phase 3."

---

## BƯỚC 5 — Review tổng thể workspace Phase 2 [40:00–45:00]

> **GV nói:** "Chúng ta đã hoàn thành gần hết Phase 2. Hãy nhìn lại hành trình từ buổi 1 đến giờ."

### Prompt — Tổng kết Phase 2

```
Tổng kết lại hành trình xây dựng workspace qua 8 buổi học.

Liệt kê:
1. Mỗi buổi đã thêm/tạo gì
2. Trạng thái workspace hiện tại (cây thư mục đầy đủ)
3. Số lượng: skills, rules, workflows, knowledge files, data files, docs
4. Mức độ sẵn sàng cho Phase 3

Format bảng rõ ràng.
```

### Output kỳ vọng — Bảng tổng kết

| Buổi | Phase | Chủ đề | Files thêm/tạo |
|------|-------|--------|----------------|
| 1 | Operate | Làm quen workspace | AGENTS.md, cấu trúc thư mục |
| 2 | Operate | PDCA Cycle | docs/pdca-log.md, knowledge-base/*.md |
| 3 | Operate | Vận hành thực tế | sample-data/*.csv, outputs/ |
| 4 | Operate | Đánh giá Phase 1 | docs/workspace-map.md, docs/lesson-to-workspace-map.md |
| 5 | Modify | Thêm Agents/Skills | .agents/skills/content-writer/, engagement-analyst/ |
| 6 | Modify | Thêm Knowledge & Rules | knowledge-base/ bổ sung, .agents/rules/*.md |
| 7 | Modify | Handoff & Approval | content-approver/, workflows/, approval-policy.md, handoff-contracts.md |
| 8 | Modify | Tổ chức & Audit | brand-auditor/, audience-feedback.csv, audit-report.md |

### Workspace state SAU buổi 8

```
personal-brand-workspace/
├── AGENTS.md                              ← Orchestrator (Tầng 1)
├── .agents/
│   ├── skills/                            ← Specialists (Tầng 2)
│   │   ├── content-writer/SKILL.md        ← Buổi 5
│   │   ├── engagement-analyst/SKILL.md    ← Buổi 5
│   │   ├── content-approver/SKILL.md      ← Buổi 7
│   │   └── brand-auditor/SKILL.md         ← Buổi 8 ★
│   ├── workflows/                         ← Communication (Tầng 3)
│   │   ├── content-creation-flow.md       ← Buổi 5
│   │   └── approval-pipeline-flow.md      ← Buổi 7
│   └── rules/                             ← Governance (Tầng 3)
│       ├── brand-voice.md                 ← Buổi 6
│       ├── content-quality.md             ← Buổi 6
│       ├── visual-standards.md            ← Buổi 6
│       └── approval-policy.md             ← Buổi 7
├── knowledge-base/                        ← Knowledge (Tầng 3)
│   ├── brand-profile.md
│   ├── target-audience.md
│   ├── content-pillars.md
│   └── brand-guidelines.md
├── sample-data/                           ← Data Layer
│   ├── social-media-posts.csv
│   ├── monthly-report-data.csv
│   ├── content-calendar.csv
│   ├── engagement-metrics.csv
│   └── audience-feedback.csv              ← Buổi 8 ★
├── outputs/
└── docs/
    ├── workspace-map.md
    ├── pdca-log.md
    ├── lesson-to-workspace-map.md
    ├── handoff-contracts.md               ← Buổi 7
    └── audit-report.md                    ← Buổi 8 ★
```

### Thống kê workspace

| Loại | Số lượng | Chi tiết |
|------|---------|---------|
| Skills | 4 | content-writer, engagement-analyst, content-approver, brand-auditor |
| Rules | 4 | brand-voice, content-quality, visual-standards, approval-policy |
| Workflows | 2 | content-creation-flow, approval-pipeline-flow |
| Knowledge | 4 | brand-profile, target-audience, content-pillars, brand-guidelines |
| Data files | 5 | social-media-posts, monthly-report, content-calendar, engagement-metrics, audience-feedback |
| Docs | 5 | workspace-map, pdca-log, lesson-map, handoff-contracts, audit-report |
| **Tổng files** | **25** | **Workspace hoàn chỉnh cho Phase 2** |

> **GV kết luận demo:** "25 files, mỗi file có vai trò rõ ràng trong mô hình 3 tầng. Phase 2 đã xong — workspace đã có cấu trúc, quy trình, kiểm toán. Phase 3 sẽ tập trung vào SÁ NG TẠO — xây dựng workflow thật cho business thật."

---

# PHẦN 2 — THỰC HÀNH HV (60 phút)

---

## BÀI TẬP 1 — Tạo dữ liệu phản hồi khán giả [00:00–15:00]

> **GV hướng dẫn:** "Các em tạo file audience-feedback.csv trong workspace của mình. Có thể copy data mẫu hoặc tạo data riêng phù hợp với brand case của mình."

### Prompt cho HV

```
Tạo file sample-data/audience-feedback.csv cho workspace personal brand của tôi.

Yêu cầu:
- Ít nhất 20 dòng dữ liệu
- Cột: feedback_id, date, source, content_type, feedback_text, sentiment, rating, topic, actionable
- Nội dung phản hồi liên quan đến [THAY_BẰNG_NGÀNH_CỦA_EM]
- Mix sentiment: khoảng 40-50% positive, 10-20% neutral, 30-40% negative
- Có ít nhất 10 phản hồi actionable

Dữ liệu phải thực tế, phản ánh các vấn đề thật khi xây dựng personal brand.
```

### Checklist kiểm tra

- [ ] File nằm đúng vị trí: `sample-data/audience-feedback.csv`
- [ ] Có đủ 9 cột theo đúng thứ tự
- [ ] Ít nhất 20 dòng dữ liệu
- [ ] Có mix sentiment đa dạng
- [ ] Feedback text bằng tiếng Việt
- [ ] Rating từ 1-5
- [ ] Có cột actionable (yes/no)

---

## BÀI TẬP 2 — Tạo Brand Auditor Skill [15:00–30:00]

> **GV hướng dẫn:** "Bây giờ tạo skill brand-auditor. Các em có thể copy template từ demo hoặc tùy chỉnh rubric cho phù hợp với ngành của mình."

### Prompt cho HV

```
Tạo file .agents/skills/brand-auditor/SKILL.md

Đây là skill kiểm toán workspace. Yêu cầu:
1. Frontmatter YAML: name và description
2. Mô tả vai trò: kiểm toán viên nội bộ
3. Quy trình 4 bước: Thu thập → Đánh giá → Tổng hợp → Phân tích feedback
4. Rubric đánh giá 7 thành tố, mỗi thành tố có tiêu chí cho điểm 1-10:
   - Skills Coverage
   - Knowledge Completeness
   - Rules Enforcement
   - Workflow Integration
   - Data Quality
   - Output Consistency
   - Documentation Health
5. Format báo cáo output

Tùy chỉnh rubric phù hợp với ngành [THAY_BẰNG_NGÀNH_CỦA_EM].
```

### Checklist kiểm tra

- [ ] File nằm đúng: `.agents/skills/brand-auditor/SKILL.md`
- [ ] Là folder/SKILL.md (không phải file đơn lẻ brand-auditor.md)
- [ ] Có frontmatter YAML với name + description
- [ ] Có 4 bước audit rõ ràng
- [ ] Có rubric 7 thành tố
- [ ] Mỗi thành tố có tiêu chí cụ thể
- [ ] Có format báo cáo output

---

## BÀI TẬP 3 — Chạy Audit Workspace [30:00–50:00]

> **GV hướng dẫn:** "Giờ chạy audit thật. Prompt này quan trọng — phải yêu cầu cụ thể để AI audit đúng theo rubric."

### Prompt cho HV

```
Chạy audit toàn bộ workspace của tôi theo quy trình trong .agents/skills/brand-auditor/SKILL.md.

Cụ thể:
1. Đọc và liệt kê TẤT CẢ files trong workspace
2. Đánh giá 7 thành tố theo rubric, cho điểm 1-10 cho mỗi thành tố
3. Đọc file sample-data/audience-feedback.csv và phân tích sentiment
4. Tìm pattern trong feedback tiêu cực
5. Tổng hợp báo cáo đầy đủ với:
   - Bảng điểm 7 thành tố
   - Top 3 điểm mạnh
   - Top 3 điểm cần cải thiện
   - Phân tích phản hồi khán giả
   - Kế hoạch hành động cụ thể
6. Lưu vào docs/audit-report.md

Đánh giá khách quan, mỗi điểm số phải có giải thích cụ thể.
```

### Checklist kiểm tra audit report

- [ ] File nằm đúng: `docs/audit-report.md`
- [ ] Có bảng điểm 7 thành tố
- [ ] Mỗi điểm số có giải thích
- [ ] Có phân tích sentiment từ audience-feedback.csv
- [ ] Có top 3 điểm mạnh + top 3 điểm yếu
- [ ] Có kế hoạch hành động cụ thể
- [ ] Có đánh giá mức độ sẵn sàng cho Phase 3

---

## BÀI TẬP 4 — Review và Lập Kế Hoạch Cải Thiện [50:00–60:00]

> **GV hướng dẫn:** "Bước cuối — xem audit report và lập kế hoạch cải thiện cho 2 buổi còn lại trước Phase 3."

### Prompt cho HV

```
Dựa trên docs/audit-report.md, hãy:

1. Liệt kê 3 thành tố có điểm thấp nhất
2. Với mỗi thành tố thấp, đề xuất 2 hành động cải thiện cụ thể
3. Ước tính mỗi hành động cần bao lâu
4. Sắp xếp theo ưu tiên: buổi 9 làm gì, buổi 10 làm gì
5. Cập nhật pdca-log.md — ghi nhận kết quả audit buổi 8

Format bảng rõ ràng, dễ theo dõi.
```

### Checklist kiểm tra

- [ ] Xác định đúng 3 thành tố điểm thấp nhất
- [ ] Mỗi thành tố có 2 hành động cải thiện
- [ ] Có timeline buổi 9 + buổi 10
- [ ] pdca-log.md đã cập nhật

---

## RUBRIC ĐÁNH GIÁ BÀI TẬP BUỔI 8

| Tiêu chí | Xuất sắc (9-10) | Tốt (7-8) | Trung bình (5-6) | Cần cải thiện (≤4) |
|----------|----------------|-----------|-------------------|-------------------|
| audience-feedback.csv | 20+ rows, đa dạng sentiment, data thực tế | 15-19 rows, đa dạng | 10-14 rows, thiếu đa dạng | <10 rows hoặc sai format |
| brand-auditor/SKILL.md | Đầy đủ 4 bước + rubric chi tiết + format output | Đầy đủ 4 bước, rubric cơ bản | Có rubric nhưng thiếu bước | Thiếu rubric hoặc sai cấu trúc |
| audit-report.md | 7 điểm có giải thích + feedback analysis + action plan | 7 điểm có giải thích | Có điểm nhưng thiếu giải thích | Thiếu thành tố hoặc không chạy |
| Kế hoạch cải thiện | Cụ thể, có timeline, liên kết audit | Có kế hoạch rõ ràng | Kế hoạch chung chung | Không có kế hoạch |

---

## TỔNG KẾT PHASE 2 — Mức độ hoàn thành

### Phase 2 Progress (Buổi 5-8)

| Buổi | Chủ đề | Kỹ năng chính | Status |
|------|--------|---------------|--------|
| 5 | Thêm Agents/Skills | Tạo skill mới, cấu trúc folder/SKILL.md | ✅ Hoàn thành |
| 6 | Knowledge & Rules | Mở rộng knowledge, tạo rules ràng buộc | ✅ Hoàn thành |
| 7 | Handoff & Approval | Workflow liên kết, quy trình duyệt | ✅ Hoàn thành |
| 8 | Tổ chức & Audit | Mô hình 3 tầng, audit 7 thành tố | ✅ Hoàn thành |

### Kỹ năng tích lũy sau Phase 2

| # | Kỹ năng | Buổi học | Mô tả |
|---|---------|---------|-------|
| 1 | Tạo và quản lý Skills | 5 | Tạo folder/SKILL.md với frontmatter |
| 2 | Xây dựng Knowledge Base | 6 | Tạo .md files cho AI tham chiếu |
| 3 | Thiết lập Rules | 6 | Tạo ràng buộc chất lượng cho AI |
| 4 | Thiết kế Workflows | 7 | Kết nối skills thành quy trình |
| 5 | Handoff giữa Skills | 7 | Chuyển giao công việc giữa các AI agents |
| 6 | Tổ chức Workspace | 8 | Mô hình 3 tầng, vai trò rõ ràng |
| 7 | Audit & Đánh giá | 8 | Kiểm toán 7 thành tố, cho điểm |
| 8 | Lập kế hoạch cải thiện | 8 | Dựa trên audit data ra hành động |

---

## WORKSPACE STATE CUỐI CÙNG SAU BUỔI 8

```
personal-brand-workspace/                    [25 files]
├── AGENTS.md                                ← Orchestrator
├── .agents/
│   ├── skills/                              [4 skills]
│   │   ├── content-writer/SKILL.md          ← Buổi 5
│   │   ├── engagement-analyst/SKILL.md      ← Buổi 5
│   │   ├── content-approver/SKILL.md        ← Buổi 7
│   │   └── brand-auditor/SKILL.md           ← Buổi 8 ★
│   ├── workflows/                           [2 workflows]
│   │   ├── content-creation-flow.md         ← Buổi 5
│   │   └── approval-pipeline-flow.md        ← Buổi 7
│   └── rules/                               [4 rules]
│       ├── brand-voice.md                   ← Buổi 6
│       ├── content-quality.md               ← Buổi 6
│       ├── visual-standards.md              ← Buổi 6
│       └── approval-policy.md               ← Buổi 7
├── knowledge-base/                          [4 knowledge files]
│   ├── brand-profile.md
│   ├── target-audience.md
│   ├── content-pillars.md
│   └── brand-guidelines.md
├── sample-data/                             [5 data files]
│   ├── social-media-posts.csv
│   ├── monthly-report-data.csv
│   ├── content-calendar.csv
│   ├── engagement-metrics.csv
│   └── audience-feedback.csv               ← Buổi 8 ★
├── outputs/
└── docs/                                    [5 doc files]
    ├── workspace-map.md
    ├── pdca-log.md
    ├── lesson-to-workspace-map.md
    ├── handoff-contracts.md                 ← Buổi 7
    └── audit-report.md                     ← Buổi 8 ★
```

---

## GHI CHÚ CHO GV

### Điểm nhấn quan trọng buổi 8

1. **Mô hình 3 tầng** — Đây là cách tổ chức workspace CHUYÊN NGHIỆP. HV cần hiểu mỗi file thuộc tầng nào và tại sao.
2. **Audit = Evidence-based** — Mọi điểm số phải có bằng chứng từ file thật, không phải cảm tính.
3. **Feedback loop** — Dữ liệu khán giả → Audit → Kế hoạch cải thiện → Thực hiện. Đây chính là PDCA nâng cao.
4. **Phase 2 wrap-up** — Buổi này đánh dấu kết thúc Phase 2. HV cần tự tin rằng workspace đã đủ vững cho Phase 3.

### Lỗi thường gặp của HV

| Lỗi | Cách xử lý |
|-----|-----------|
| Tạo file `brand-auditor.md` thay vì folder `brand-auditor/SKILL.md` | Nhắc lại: Skill = folder chứa SKILL.md |
| Audit report không có giải thích, chỉ có điểm số | Yêu cầu chạy lại với prompt cụ thể hơn |
| Không đọc audience-feedback.csv trong audit | Thêm vào prompt: "Đọc file audience-feedback.csv và phân tích" |
| Kế hoạch cải thiện quá chung chung | Hỏi: "Cụ thể file nào cần sửa? Sửa gì? Khi nào?" |
| Quên cập nhật pdca-log | Nhắc cuối buổi: "Ghi vào pdca-log nhé" |

### Chuẩn bị cho buổi 9

- Buổi 9 sẽ bắt đầu Phase 3 — HV cần mang theo audit report
- GV review audit report của mỗi HV trước buổi 9 (nếu có thời gian)
- Buổi 9 focus vào: Debug, tối ưu, chuẩn bị build workflow thật

---

## TIMELINE TỔNG HỢP

| Thời gian | Hoạt động | Người thực hiện |
|-----------|----------|----------------|
| 00:00–10:00 | Giải thích mô hình 3 tầng + sơ đồ | GV demo |
| 10:00–15:00 | Tạo audience-feedback.csv | GV demo |
| 15:00–25:00 | Tạo brand-auditor/SKILL.md | GV demo |
| 25:00–40:00 | Chạy audit + review output | GV demo |
| 40:00–45:00 | Tổng kết Phase 2 + workspace state | GV demo |
| 45:00–60:00 | HV tạo feedback data + auditor skill | HV thực hành |
| 60:00–80:00 | HV chạy audit + review report | HV thực hành |
| 80:00–95:00 | HV lập kế hoạch cải thiện | HV thực hành |
| 95:00–105:00 | Q&A + Preview buổi 9 | GV + HV |

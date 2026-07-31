# Template: Quy Trình OIPO (Output–Input–Process–Output)

> Template này hướng dẫn bạn thiết kế quy trình làm việc với AI theo framework **OIPO** — một phương pháp tư duy ngược giúp bạn đạt kết quả chính xác hơn khi giao việc cho AI agent.

---

## 1. OIPO Là Gì?

**OIPO** là viết tắt của **Output – Input – Process – Output**, một framework thiết kế quy trình (workflow) cho AI agent. Khác với cách tư duy thông thường (Input → Process → Output), OIPO yêu cầu bạn **bắt đầu từ kết quả mong muốn** rồi mới xác định ngược lại những gì cần có.

### Tại sao bắt đầu từ Output?

| Cách truyền thống | Cách OIPO |
|---|---|
| "Mình có dữ liệu này, xem AI làm được gì" | "Mình cần kết quả này, AI cần gì để tạo ra nó?" |
| Kết quả may rủi, phụ thuộc cách AI hiểu | Kết quả rõ ràng, đo lường được |
| Khó đánh giá thành công/thất bại | Dễ so sánh output thực tế với output mong muốn |

### Sơ đồ OIPO

```
┌─────────────────────────────────────────────────────────────────┐
│                      FRAMEWORK OIPO                             │
│                                                                 │
│  ① O (Output mong muốn)     ──→  Bạn muốn kết quả gì?         │
│          ↓                                                      │
│  ② I (Input có sẵn)         ──→  Bạn có dữ liệu/tài nguyên gì?│
│          ↓                                                      │
│  ③ P (Process xử lý)        ──→  Cần bước nào để biến I→O?     │
│          ↓                                                      │
│  ④ O (Output thực tế)       ──→  Kết quả thực tế là gì?        │
│                                   So sánh với Output mong muốn  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Chi Tiết Từng Bước

### Bước ① — O: Output Mong Muốn (Desired Output)

> **Câu hỏi cốt lõi:** "Kết quả cuối cùng trông như thế nào?"

Mô tả cụ thể:
- **Hình thức:** File gì? (báo cáo PDF, bảng Excel, bài viết, email, dashboard...)
- **Nội dung:** Gồm những phần nào?
- **Tiêu chuẩn chất lượng:** Thế nào là "đạt yêu cầu"?
- **Người nhận:** Ai sẽ đọc/dùng output này?
- **Thời hạn:** Cần xong khi nào?

```markdown
### Output mong muốn
- **Hình thức:** [Mô tả loại sản phẩm]
- **Nội dung bao gồm:** [Liệt kê các phần]
- **Tiêu chuẩn:** [Tiêu chí đánh giá]
- **Người nhận:** [Ai dùng output]
- **Deadline:** [Thời hạn]
```

### Bước ② — I: Input Có Sẵn (Available Input)

> **Câu hỏi cốt lõi:** "Mình có sẵn dữ liệu/tài nguyên gì?"

Kiểm kê:
- **Dữ liệu thô:** File, bảng tính, database, API...
- **Tài liệu tham khảo:** Mẫu, template, hướng dẫn...
- **Kiến thức ngữ cảnh:** Thông tin AI cần biết nhưng không có trong dữ liệu
- **Thiếu gì?** Cần thu thập thêm gì trước khi bắt đầu?

```markdown
### Input có sẵn
- **Dữ liệu:** [Liệt kê nguồn dữ liệu]
- **Tài liệu:** [Liệt kê tài liệu hỗ trợ]
- **Ngữ cảnh:** [Thông tin nền cần thiết]
- **Thiếu/Cần bổ sung:** [Liệt kê gaps]
```

### Bước ③ — P: Process Xử Lý (Processing Steps)

> **Câu hỏi cốt lõi:** "Những bước nào biến Input thành Output?"

Thiết kế quy trình:
- **Bước xử lý:** Liệt kê từng bước theo thứ tự
- **Công cụ/Skill:** Mỗi bước dùng công cụ gì?
- **Agent nào thực hiện?** AI hay người?
- **Kiểm tra giữa chừng:** Checkpoint nào cần xem lại?

```markdown
### Process xử lý
| Bước | Mô tả | Công cụ/Skill | Người thực hiện | Checkpoint |
|------|--------|---------------|-----------------|------------|
| 1    | [...]  | [...]         | [AI/Người]      | [Có/Không] |
| 2    | [...]  | [...]         | [AI/Người]      | [Có/Không] |
| ...  | [...]  | [...]         | [AI/Người]      | [Có/Không] |
```

### Bước ④ — O: Output Thực Tế (Actual Output)

> **Câu hỏi cốt lõi:** "Kết quả thực tế có khớp với mong muốn không?"

Đánh giá:
- **Kết quả thực tế:** Mô tả output nhận được
- **So sánh:** Khớp / Lệch / Thiếu so với Output mong muốn
- **Nguyên nhân lệch:** Tại sao (nếu có)?
- **Cải thiện:** Vòng lặp tiếp theo cần điều chỉnh gì?

```markdown
### Output thực tế
- **Kết quả:** [Mô tả output nhận được]
- **So sánh với mong muốn:**
  - ✅ Đạt: [Liệt kê]
  - ⚠️ Lệch: [Liệt kê và lý do]
  - ❌ Thiếu: [Liệt kê và lý do]
- **Bài học rút ra:** [...]
- **Điều chỉnh cho lần sau:** [...]
```

---

## 3. Ví Dụ OIPO: Tạo Báo Cáo Hiệu Suất Content Tháng

### ① Output mong muốn

- **Hình thức:** Báo cáo Markdown, có biểu đồ tóm tắt
- **Nội dung bao gồm:**
  - Tổng quan số liệu tháng (lượt xem, tương tác, follower mới)
  - Top 5 bài viết có tương tác cao nhất
  - Phân tích xu hướng nội dung (chủ đề nào hiệu quả)
  - So sánh với tháng trước
  - Đề xuất 3 chủ đề content cho tháng tới
- **Tiêu chuẩn:**
  - Số liệu chính xác, có nguồn
  - Insight actionable (có thể hành động ngay)
  - Viết dưới 1.000 từ, dễ đọc trong 5 phút
- **Người nhận:** Bản thân (personal brand owner)
- **Deadline:** Ngày 3 hàng tháng

### ② Input có sẵn

- **Dữ liệu:**
  - Export CSV từ LinkedIn Analytics (lượt xem, reactions, comments)
  - Export từ Facebook Insights (reach, engagement)
  - Danh sách bài đã đăng trong tháng (file `content-log.md`)
- **Tài liệu:**
  - Báo cáo tháng trước (file `report-2024-11.md`) để so sánh
  - Brand guidelines (file `brand-voice.md`)
- **Ngữ cảnh:**
  - Tháng này có 2 bài viral do sự kiện trending
  - Đã thử nghiệm format video ngắn (3 bài)
- **Thiếu/Cần bổ sung:**
  - Dữ liệu Instagram (chưa export, cần lấy thủ công)

### ③ Process xử lý

| Bước | Mô tả | Công cụ/Skill | Người thực hiện | Checkpoint |
|------|--------|---------------|-----------------|------------|
| 1 | Thu thập & chuẩn hóa dữ liệu từ các nguồn | Data Parser Skill | AI | Kiểm tra dữ liệu đầy đủ |
| 2 | Tính toán KPI chính (views, engagement rate, growth) | Analytics Skill | AI | Không |
| 3 | Xếp hạng top 5 bài viết theo engagement | Analytics Skill | AI | Không |
| 4 | Phân tích xu hướng chủ đề (so sánh chủ đề vs. engagement) | Content Analyzer Skill | AI | Xem lại insight |
| 5 | So sánh với báo cáo tháng trước | Analytics Skill | AI | Không |
| 6 | Đề xuất 3 chủ đề tháng tới dựa trên dữ liệu | Content Writer Skill | AI | Người duyệt đề xuất |
| 7 | Tổng hợp & format báo cáo Markdown | Report Generator Skill | AI | Review cuối cùng |

### ④ Output thực tế

- **Kết quả:** Báo cáo Markdown đầy đủ, 850 từ, có bảng số liệu và biểu đồ ASCII
- **So sánh với mong muốn:**
  - ✅ Đạt: Số liệu chính xác, top 5 bài viết đúng, so sánh tháng trước rõ ràng
  - ⚠️ Lệch: Phần xu hướng chủ đề hơi chung chung, cần phân tích sâu hơn
  - ❌ Thiếu: Thiếu dữ liệu Instagram (chưa export kịp)
- **Bài học rút ra:**
  - Cần tự động hóa việc export dữ liệu từ tất cả nền tảng
  - Prompt cho phần phân tích xu hướng cần cụ thể hơn
- **Điều chỉnh cho lần sau:**
  - Thêm bước 0: Kiểm tra đã có đủ dữ liệu từ tất cả nền tảng
  - Sửa prompt phân tích xu hướng: yêu cầu AI so sánh từng cặp chủ đề

---

## 4. Template Trống — Dành Cho Sinh Viên

Sao chép phần dưới và điền thông tin cho quy trình của bạn:

```markdown
# OIPO: {{Tên quy trình}}

## ① Output mong muốn
- **Hình thức:** {{...}}
- **Nội dung bao gồm:** {{...}}
- **Tiêu chuẩn:** {{...}}
- **Người nhận:** {{...}}
- **Deadline:** {{...}}

## ② Input có sẵn
- **Dữ liệu:** {{...}}
- **Tài liệu:** {{...}}
- **Ngữ cảnh:** {{...}}
- **Thiếu/Cần bổ sung:** {{...}}

## ③ Process xử lý
| Bước | Mô tả | Công cụ/Skill | Người thực hiện | Checkpoint |
|------|--------|---------------|-----------------|------------|
| 1    | {{...}}| {{...}}       | {{AI/Người}}    | {{...}}    |
| 2    | {{...}}| {{...}}       | {{AI/Người}}    | {{...}}    |
| 3    | {{...}}| {{...}}       | {{AI/Người}}    | {{...}}    |

## ④ Output thực tế
- **Kết quả:** {{...}}
- **So sánh với mong muốn:**
  - ✅ Đạt: {{...}}
  - ⚠️ Lệch: {{...}}
  - ❌ Thiếu: {{...}}
- **Bài học rút ra:** {{...}}
- **Điều chỉnh cho lần sau:** {{...}}
```

---

## 5. Mẹo Thiết Kế OIPO Hiệu Quả

### ✅ Nên làm

1. **Mô tả Output cụ thể đến mức có thể kiểm tra** — "Báo cáo 500-800 từ, có 3 biểu đồ" thay vì "Báo cáo hay"
2. **Liệt kê Input đầy đủ** — AI không thể đoán dữ liệu bạn chưa cung cấp
3. **Đặt checkpoint ở bước quan trọng** — Không nên để AI chạy 7 bước liên tục không kiểm tra
4. **So sánh Output thực tế trung thực** — Đây là cách bạn cải thiện quy trình
5. **Lặp lại OIPO** — Mỗi vòng lặp, quy trình sẽ tốt hơn

### ❌ Tránh

1. **Output mơ hồ** — "Tạo cái gì đó hay" → Không thể đánh giá
2. **Bỏ qua bước Input** — Thiếu dữ liệu = Output thiếu chính xác
3. **Process quá dài** — Hơn 10 bước? Hãy tách thành 2 OIPO riêng
4. **Không so sánh Output** — Bỏ bước ④ = không học được gì
5. **Copy-paste OIPO người khác** — Mỗi workspace khác nhau, hãy tùy chỉnh cho phù hợp

### 💡 Mẹo nâng cao

- **OIPO lồng nhau:** Mỗi bước trong Process có thể là một OIPO con
- **OIPO + PDCA:** Dùng OIPO cho lần đầu, dùng PDCA (Plan-Do-Check-Act) cho các vòng cải thiện
- **Version OIPO:** Đánh số phiên bản (v1, v2, v3) để theo dõi sự tiến hóa của quy trình

---

## 6. Checklist Hoàn Thành

- [ ] Output mong muốn mô tả cụ thể, đo lường được
- [ ] Input được kiểm kê đầy đủ, xác định phần thiếu
- [ ] Process có bước rõ ràng, gán công cụ và người thực hiện
- [ ] Output thực tế được so sánh trung thực với mong muốn
- [ ] Rút ra bài học và kế hoạch cải thiện
- [ ] Template sẵn sàng tái sử dụng cho lần sau

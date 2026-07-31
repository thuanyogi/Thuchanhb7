# Template: Phân Tích Phạm Vi Dự Án (SCOPE Framework)

> Template này hướng dẫn bạn phân tích phạm vi dự án AI theo framework **SCOPE** — một phương pháp có cấu trúc giúp bạn đi từ bối cảnh hiện tại đến hành động cụ thể.

---

## 1. SCOPE Framework Là Gì?

**SCOPE** là viết tắt của 5 bước phân tích dự án:

| Bước | Tiếng Anh | Tiếng Việt | Câu hỏi cốt lõi |
|------|-----------|-----------|-----------------|
| **S** | Situation | Bối cảnh hiện tại | Bạn đang ở đâu? |
| **C** | Challenge | Thách thức cần giải quyết | Vấn đề gì cản trở bạn? |
| **O** | Objective | Mục tiêu cụ thể, đo lường được | Bạn muốn đạt được gì? |
| **P** | Plan | Kế hoạch hành động | Bạn sẽ làm gì? |
| **E** | Execution | Thực thi và đánh giá | Kết quả thực tế ra sao? |

### Tại sao dùng SCOPE?

- **Tránh làm quá nhiều:** Phân tích giúp bạn tập trung vào điều quan trọng nhất
- **Đo lường được:** Mục tiêu SMART (Specific, Measurable, Achievable, Relevant, Time-bound)
- **Có cấu trúc:** Từ phân tích → hành động → đánh giá, không bỏ sót bước nào
- **Dễ trình bày:** Format chuẩn giúp bạn present dự án một cách chuyên nghiệp

### Sơ đồ SCOPE

```
     S ──── Situation ──── "Bối cảnh hiện tại"
     │
     C ──── Challenge ──── "Thách thức gì?"
     │
     O ──── Objective ──── "Mục tiêu đo lường được"
     │
     P ──── Plan ────────── "Kế hoạch hành động"
     │
     E ──── Execution ──── "Thực thi & Đánh giá"
```

---

## 2. Chi Tiết Từng Bước

### S — Situation (Bối Cảnh Hiện Tại)

> Mô tả trung thực tình trạng hiện tại, KHÔNG nói quá hoặc giảm nhẹ.

Cần trả lời:
- Bạn là ai? Làm gì? Trong ngành nào?
- Hiện tại bạn đang ở đâu trong hành trình xây dựng thương hiệu/dự án?
- Bạn đã có gì? (nguồn lực, công cụ, kỹ năng, dữ liệu)
- Bạn đã thử gì? Kết quả ra sao?

```markdown
### S — Bối cảnh hiện tại
- **Về bản thân:** {{Vai trò, ngành, kinh nghiệm}}
- **Tình trạng hiện tại:** {{Mô tả trạng thái hiện tại}}
- **Nguồn lực đã có:** {{Công cụ, dữ liệu, kỹ năng sẵn có}}
- **Đã thử trước đó:** {{Nỗ lực trước và kết quả}}
```

### C — Challenge (Thách Thức)

> Xác định rõ vấn đề cốt lõi — cái GỐC, không phải triệu chứng.

Cần trả lời:
- Vấn đề LỚN NHẤT đang cản trở bạn là gì?
- Ai bị ảnh hưởng bởi vấn đề này?
- Hậu quả nếu không giải quyết?
- Nguyên nhân gốc (root cause) là gì?

```markdown
### C — Thách thức
- **Vấn đề chính:** {{Mô tả thách thức cốt lõi}}
- **Ảnh hưởng đến:** {{Ai/cái gì bị ảnh hưởng}}
- **Hậu quả nếu không giải quyết:** {{Mô tả impact}}
- **Nguyên nhân gốc:** {{Root cause analysis}}
```

### O — Objective (Mục Tiêu)

> Mục tiêu phải **SMART**: Cụ thể, Đo lường được, Khả thi, Liên quan, Có thời hạn.

Cần trả lời:
- Kết quả cụ thể bạn muốn đạt là gì?
- Làm sao biết đã đạt được? (metrics)
- Có khả thi trong thời gian và nguồn lực hiện tại không?
- Thời hạn hoàn thành?

```markdown
### O — Mục tiêu
- **Mục tiêu chính:** {{Mô tả cụ thể}}
- **Chỉ số đo lường (KPI):**
  - KPI 1: {{...}} — Mục tiêu: {{con số cụ thể}}
  - KPI 2: {{...}} — Mục tiêu: {{con số cụ thể}}
  - KPI 3: {{...}} — Mục tiêu: {{con số cụ thể}}
- **Thời hạn:** {{Deadline cụ thể}}
- **Tiêu chí thành công:** {{Thế nào là "xong"?}}
```

### P — Plan (Kế Hoạch Hành Động)

> Chia nhỏ thành các bước cụ thể, gán người thực hiện và thời hạn.

```markdown
### P — Kế hoạch hành động

| Giai đoạn | Hành động | Người/Agent | Thời hạn | Output |
|-----------|-----------|-------------|----------|--------|
| 1. Setup  | {{...}}   | {{...}}     | {{...}}  | {{...}}|
| 2. Build  | {{...}}   | {{...}}     | {{...}}  | {{...}}|
| 3. Test   | {{...}}   | {{...}}     | {{...}}  | {{...}}|
| 4. Launch | {{...}}   | {{...}}     | {{...}}  | {{...}}|

**Rủi ro đã nhận diện:**
- Rủi ro 1: {{...}} → Biện pháp: {{...}}
- Rủi ro 2: {{...}} → Biện pháp: {{...}}

**Phụ thuộc (Dependencies):**
- {{Liệt kê những gì cần hoàn thành trước}}
```

### E — Execution (Thực Thi & Đánh Giá)

> Ghi nhận kết quả thực tế, so sánh với mục tiêu, rút bài học.

```markdown
### E — Thực thi và đánh giá

**Tiến độ thực tế:**

| Giai đoạn | Trạng thái | Hoàn thành | Ghi chú |
|-----------|------------|------------|---------|
| 1. Setup  | {{✅/⏳/❌}} | {{ngày}}   | {{...}} |
| 2. Build  | {{✅/⏳/❌}} | {{ngày}}   | {{...}} |
| 3. Test   | {{✅/⏳/❌}} | {{ngày}}   | {{...}} |
| 4. Launch | {{✅/⏳/❌}} | {{ngày}}   | {{...}} |

**KPI đạt được:**
- KPI 1: {{Thực tế}} / {{Mục tiêu}} — {{✅/❌}}
- KPI 2: {{Thực tế}} / {{Mục tiêu}} — {{✅/❌}}

**Bài học rút ra:**
1. {{...}}
2. {{...}}

**Cải thiện cho lần sau:**
1. {{...}}
2. {{...}}
```

---

## 3. Ví Dụ SCOPE: Xây Dựng Thương Hiệu Cá Nhân Trên LinkedIn

### S — Bối cảnh hiện tại

- **Về bản thân:** Chuyên viên Marketing 3 năm kinh nghiệm, đang làm tại công ty công nghệ, quan tâm đến AI và muốn trở thành thought leader trong lĩnh vực AI Marketing.
- **Tình trạng hiện tại:**
  - Có tài khoản LinkedIn 500+ connections, nhưng ít đăng bài (1-2 bài/tháng)
  - Engagement rất thấp (trung bình 10-15 likes/bài)
  - Chưa có content strategy rõ ràng
  - Tốn 3-4 tiếng/bài vì không biết viết gì
- **Nguồn lực đã có:** Kiến thức về Marketing + AI, laptop, tài khoản LinkedIn, Google Antigravity workspace
- **Đã thử trước đó:** Đăng vài bài chia sẻ link bài viết của người khác → Engagement gần bằng 0

### C — Thách thức

- **Vấn đề chính:** Không có hệ thống tạo nội dung nhất quán → đăng bài bất thường, nội dung không có chủ đề xuyên suốt, mất quá nhiều thời gian cho mỗi bài.
- **Ảnh hưởng đến:** Hình ảnh chuyên nghiệp trên LinkedIn, cơ hội networking và career growth.
- **Hậu quả nếu không giải quyết:** Tiếp tục "vô hình" trên LinkedIn, bỏ lỡ cơ hội kết nối và phát triển sự nghiệp.
- **Nguyên nhân gốc:**
  1. Thiếu content framework (không biết viết về gì)
  2. Quy trình tạo nội dung thủ công, tốn thời gian
  3. Không có hệ thống theo dõi hiệu quả → không biết cải thiện gì

### O — Mục tiêu

- **Mục tiêu chính:** Xây dựng workspace AI tự động hóa 70% quy trình tạo nội dung LinkedIn, giúp đăng bài đều đặn 3 bài/tuần với engagement rate > 4%.
- **Chỉ số đo lường (KPI):**
  - KPI 1: Số bài đăng/tuần — Mục tiêu: 3 bài
  - KPI 2: Engagement rate trung bình — Mục tiêu: > 4%
  - KPI 3: Thời gian tạo 1 bài — Mục tiêu: < 30 phút (giảm từ 3-4 tiếng)
  - KPI 4: Follower mới/tháng — Mục tiêu: > 50
- **Thời hạn:** 4 tuần (từ ngày bắt đầu khóa học)
- **Tiêu chí thành công:** Workspace hoạt động end-to-end: từ ý tưởng → nội dung → phân tích → gợi ý cải thiện

### P — Kế hoạch hành động

| Giai đoạn | Hành động | Người/Agent | Thời hạn | Output |
|-----------|-----------|-------------|----------|--------|
| 1. Setup | Thiết lập workspace, tạo AGENTS.md, định nghĩa brand voice | Người + AI | Tuần 1 | Workspace sẵn sàng |
| 2. Build Skills | Tạo Content Writer Skill, Caption Writer Skill | Người + AI | Tuần 1-2 | 2 skills hoạt động |
| 3. Build Agents | Tạo Engagement Analyzer Agent, Content Planner Agent | Người + AI | Tuần 2-3 | 2 micro-agents |
| 4. Create Workflow | Thiết kế OIPO workflow cho quy trình content hàng tuần | Người + AI | Tuần 3 | 1 workflow OIPO |
| 5. Test & Iterate | Chạy thử 1 tuần, đánh giá, điều chỉnh | Người | Tuần 3-4 | Báo cáo PDCA |
| 6. Present | Chuẩn bị trình bày dự án | Người + AI | Tuần 4 | Slide + demo |

**Rủi ro đã nhận diện:**
- Rủi ro 1: AI tạo nội dung không đúng brand voice → Biện pháp: Viết rules chi tiết, test với 5 bài trước khi "đăng thật"
- Rủi ro 2: Thiếu dữ liệu engagement ban đầu → Biện pháp: Dùng dữ liệu 3 tháng gần nhất, dù ít

**Phụ thuộc:**
- Cần export dữ liệu LinkedIn Analytics trước khi bắt đầu giai đoạn 3
- Cần hoàn thành Session 5-6 (Skills & Rules) trước khi build

### E — Thực thi và đánh giá

*(Phần này sinh viên điền sau khi thực hiện)*

**Tiến độ thực tế:**

| Giai đoạn | Trạng thái | Hoàn thành | Ghi chú |
|-----------|------------|------------|---------|
| 1. Setup | ✅ | Tuần 1 | Workspace và brand voice đã thiết lập |
| 2. Build Skills | ✅ | Tuần 2 | Skill hoạt động tốt sau 3 lần sửa prompt |
| 3. Build Agents | ⏳ | Tuần 3 | Engagement Analyzer cần thêm dữ liệu |
| 4. Create Workflow | ⏳ | — | Chưa bắt đầu |
| 5. Test & Iterate | ❌ | — | Chưa bắt đầu |
| 6. Present | ❌ | — | Chưa bắt đầu |

---

## 4. Template Trống — Dành Cho Sinh Viên

```markdown
# SCOPE: {{Tên Dự Án}}
**Ngày bắt đầu:** {{ngày}}
**Sinh viên:** {{tên}}

## S — Bối cảnh hiện tại
- **Về bản thân:** {{...}}
- **Tình trạng hiện tại:** {{...}}
- **Nguồn lực đã có:** {{...}}
- **Đã thử trước đó:** {{...}}

## C — Thách thức
- **Vấn đề chính:** {{...}}
- **Ảnh hưởng đến:** {{...}}
- **Hậu quả nếu không giải quyết:** {{...}}
- **Nguyên nhân gốc:** {{...}}

## O — Mục tiêu
- **Mục tiêu chính:** {{...}}
- **KPI:**
  - KPI 1: {{...}} — Mục tiêu: {{...}}
  - KPI 2: {{...}} — Mục tiêu: {{...}}
  - KPI 3: {{...}} — Mục tiêu: {{...}}
- **Thời hạn:** {{...}}
- **Tiêu chí thành công:** {{...}}

## P — Kế hoạch hành động

| Giai đoạn | Hành động | Người/Agent | Thời hạn | Output |
|-----------|-----------|-------------|----------|--------|
| 1 | {{...}} | {{...}} | {{...}} | {{...}} |
| 2 | {{...}} | {{...}} | {{...}} | {{...}} |
| 3 | {{...}} | {{...}} | {{...}} | {{...}} |

**Rủi ro:**
- {{...}} → Biện pháp: {{...}}

**Phụ thuộc:**
- {{...}}

## E — Thực thi và đánh giá

| Giai đoạn | Trạng thái | Hoàn thành | Ghi chú |
|-----------|------------|------------|---------|
| 1 | {{✅/⏳/❌}} | {{...}} | {{...}} |
| 2 | {{✅/⏳/❌}} | {{...}} | {{...}} |
| 3 | {{✅/⏳/❌}} | {{...}} | {{...}} |

**KPI đạt được:**
- KPI 1: {{Thực tế}} / {{Mục tiêu}}
- KPI 2: {{Thực tế}} / {{Mục tiêu}}

**Bài học:** {{...}}
**Cải thiện:** {{...}}
```

---

## 5. Tiêu Chí Đánh Giá SCOPE

Sử dụng bảng sau để tự đánh giá hoặc đánh giá đồng nghiệp:

| Tiêu chí | 1 — Yếu | 3 — Đạt | 5 — Xuất sắc |
|----------|---------|---------|---------------|
| **S: Bối cảnh** | Mô tả chung chung, thiếu thông tin | Đủ thông tin, rõ ràng | Chi tiết, trung thực, có dữ liệu minh chứng |
| **C: Thách thức** | Nêu triệu chứng, chưa tìm được root cause | Xác định đúng vấn đề chính | Phân tích sâu, root cause rõ, có evidence |
| **O: Mục tiêu** | Mơ hồ, không đo lường được | SMART, có KPI | SMART + ambitious nhưng khả thi, có baseline |
| **P: Kế hoạch** | Liệt kê chung, không có timeline | Có bước rõ ràng, timeline, người phụ trách | Chi tiết, có rủi ro, dependencies, plan B |
| **E: Thực thi** | Không ghi nhận kết quả | Ghi nhận kết quả, so sánh KPI | Phân tích sâu, rút bài học, đề xuất cải thiện |

---

## 6. Checklist Hoàn Thành

- [ ] Bối cảnh mô tả trung thực, không nói quá
- [ ] Thách thức xác định đúng vấn đề GỐC
- [ ] Mục tiêu SMART: cụ thể, đo lường, khả thi, liên quan, có thời hạn
- [ ] Kế hoạch có bước rõ ràng, timeline, người thực hiện
- [ ] Rủi ro được nhận diện và có biện pháp
- [ ] Phần thực thi được cập nhật theo tiến độ thực tế
- [ ] KPI được so sánh thực tế vs. mục tiêu
- [ ] Bài học rút ra cụ thể và actionable

---

## 7. Ghi Chú Cho Sinh Viên

> **💡 Mẹo:** Hoàn thành SCOPE trước khi bắt tay vào code/build. 30 phút phân tích sẽ tiết kiệm cho bạn nhiều giờ làm sai hướng.
>
> **⚠️ Lưu ý:** Phần E (Execution) không cần hoàn thành ngay. Cập nhật dần khi bạn thực hiện từng giai đoạn — đây chính là "nhật ký dự án" của bạn.
>
> **🔗 Liên kết:** SCOPE kết hợp tốt với OIPO — dùng SCOPE để phân tích tổng thể, dùng OIPO cho từng workflow cụ thể trong kế hoạch.

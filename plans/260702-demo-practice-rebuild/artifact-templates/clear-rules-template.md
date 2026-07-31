# Template: Quy Tắc Rõ Ràng Cho Workspace (Clear Rules)

> Template này hướng dẫn bạn viết **quy tắc (rules)** cho workspace AI — những nguyên tắc giúp AI hoạt động nhất quán, chính xác, và phù hợp với thương hiệu cá nhân của bạn.

---

## 1. Tại Sao Quy Tắc Quan Trọng?

Hãy tưởng tượng bạn thuê một nhân viên mới nhưng KHÔNG nói cho họ biết:
- Công ty dùng ngôn ngữ gì?
- Báo cáo format như thế nào?
- Dữ liệu nào là bí mật?
- Tiêu chuẩn chất lượng ra sao?

Kết quả? Nhân viên sẽ tự đoán — và đoán sai.

**AI agent cũng vậy.** Không có quy tắc, AI sẽ:
- Trộn lẫn tiếng Anh và tiếng Việt
- Mỗi lần viết một format khác nhau
- Bịa số liệu khi không có dữ liệu
- Đưa ra output không nhất quán với brand voice

**Quy tắc tốt = AI hoạt động đúng ngay từ đầu.**

### 5 đặc điểm của quy tắc tốt

| Đặc điểm | Giải thích | Ví dụ |
|-----------|-----------|-------|
| **Cụ thể** | Không mơ hồ, không suy diễn | "Viết tối đa 200 từ" thay vì "Viết ngắn" |
| **Đo lường được** | Có thể kiểm tra đúng/sai | "Engagement rate = (likes+comments+shares)/views" |
| **Có ví dụ** | Minh họa đúng vs. sai | Xem phần template bên dưới |
| **Actionable** | AI biết phải làm gì | "Khi thiếu dữ liệu, hỏi lại thay vì bịa" |
| **Không mâu thuẫn** | Quy tắc không đánh nhau | Tránh: Rule A nói "luôn dùng emoji" + Rule B nói "formal, không emoji" |

---

## 2. Các Loại Quy Tắc

### 2.1 Quy Tắc Ngôn Ngữ (Language Rules)

> Quy định về ngôn ngữ sử dụng, cách xưng hô, thuật ngữ.

**Mục đích:** Đảm bảo AI giao tiếp nhất quán và phù hợp với đối tượng.

```markdown
### Quy tắc Ngôn ngữ

**Tên quy tắc:** {{tên}}
**Mô tả:** {{giải thích quy tắc}}

**✅ Ví dụ đúng:**
> {{output mẫu tuân thủ quy tắc}}

**❌ Ví dụ sai:**
> {{output mẫu vi phạm quy tắc}}
```

### 2.2 Quy Tắc Định Dạng (Formatting Rules)

> Quy định về cấu trúc, layout, format output.

**Mục đích:** Output luôn có cấu trúc nhất quán, dễ đọc, dễ tái sử dụng.

### 2.3 Quy Tắc Dữ Liệu (Data Handling Rules)

> Quy định về cách xử lý, trích dẫn, và bảo vệ dữ liệu.

**Mục đích:** AI không bịa số liệu, trích dẫn có nguồn, bảo vệ thông tin nhạy cảm.

### 2.4 Quy Tắc Chất Lượng (Quality Rules)

> Quy định về tiêu chuẩn chất lượng tối thiểu.

**Mục đích:** Mọi output phải đạt mức chất lượng nhất định trước khi xuất ra.

### 2.5 Quy Tắc An Toàn (Safety Rules)

> Quy định về giới hạn hành vi, bảo mật, và điều AI không được phép làm.

**Mục đích:** Ngăn AI tạo output có hại, sai lệch, hoặc vi phạm quyền riêng tư.

---

## 3. Template Quy Tắc

Mỗi quy tắc nên tuân theo cấu trúc chuẩn sau:

```markdown
## Quy tắc: {{Tên quy tắc}}

- **Loại:** {{Ngôn ngữ / Định dạng / Dữ liệu / Chất lượng / An toàn}}
- **Mức ưu tiên:** {{Cao / Trung bình / Thấp}}
- **Áp dụng cho:** {{Agent nào / Tất cả agent}}

### Mô tả
{{Giải thích ngắn gọn quy tắc này yêu cầu gì}}

### ✅ Ví dụ ĐÚNG
> {{Output mẫu tuân thủ quy tắc}}

### ❌ Ví dụ SAI
> {{Output mẫu vi phạm quy tắc và giải thích tại sao sai}}

### Lý do
{{Tại sao quy tắc này quan trọng — giúp sinh viên hiểu "tại sao" chứ không chỉ "cái gì"}}
```

---

## 4. Ví Dụ Quy Tắc Cho Thương Hiệu Cá Nhân

### Quy tắc 1: Ngôn ngữ nhất quán

```markdown
## Quy tắc: Ngôn ngữ tiếng Việt ưu tiên

- **Loại:** Ngôn ngữ
- **Mức ưu tiên:** Cao
- **Áp dụng cho:** Tất cả agent

### Mô tả
Mọi output phải được viết bằng tiếng Việt. Thuật ngữ chuyên ngành có thể giữ
nguyên tiếng Anh nhưng PHẢI kèm giải thích tiếng Việt trong ngoặc ở lần xuất hiện đầu tiên.

### ✅ Ví dụ ĐÚNG
> "Engagement rate (tỷ lệ tương tác) của bài viết này đạt 5.2%, cao hơn
> benchmark (điểm chuẩn) trung bình ngành là 3.8%."

### ❌ Ví dụ SAI
> "Engagement rate của post này above benchmark. Consider optimizing your
> content strategy for better reach."
> → Trộn lẫn Anh-Việt, không giải thích thuật ngữ

### Lý do
Đối tượng mục tiêu là người Việt Nam. Nội dung trộn lẫn ngôn ngữ tạo cảm giác
thiếu chuyên nghiệp và khó tiếp cận với người chưa quen thuật ngữ.
```

### Quy tắc 2: Định dạng bài viết

```markdown
## Quy tắc: Cấu trúc bài viết chuẩn

- **Loại:** Định dạng
- **Mức ưu tiên:** Cao
- **Áp dụng cho:** Content Writer Agent, Caption Writer Agent

### Mô tả
Mọi bài viết tạo ra phải có 4 phần: (1) Hook — câu mở đầu gây chú ý,
(2) Thân bài — nội dung chính chia đoạn ngắn, (3) CTA — lời kêu gọi hành động
cụ thể, (4) Hashtag — 5-10 hashtag phù hợp. Mỗi đoạn văn tối đa 3 câu.

### ✅ Ví dụ ĐÚNG
> **"3 sai lầm khi bắt đầu dùng AI mà mình ước ai nói sớm hơn."**
>
> Sai lầm #1: Hỏi AI câu quá chung chung. "Viết cho mình bài gì đó hay" →
> AI sẽ trả lời chung chung. Thay vào đó, hãy cụ thể...
>
> [Tiếp tục Sai lầm #2, #3]
>
> 💬 Bạn từng mắc sai lầm nào khi dùng AI? Comment chia sẻ nhé!
>
> #AI #TríTuệNhânTạo #PersonalBranding

### ❌ Ví dụ SAI
> "AI rất hữu ích trong công việc. Nó giúp tiết kiệm thời gian và tăng năng suất.
> Bạn nên thử dùng AI. Có nhiều công cụ AI miễn phí. ChatGPT là một ví dụ.
> Gemini cũng vậy. Claude cũng tốt..."
> → Không có hook, không có CTA, đoạn văn quá dài, không có hashtag

### Lý do
Cấu trúc nhất quán giúp: (1) người đọc dễ scan nội dung, (2) thuật toán mạng
xã hội ưu tiên bài có tương tác sớm (hook tốt = giữ người đọc), (3) CTA tăng
tỷ lệ comment/share.
```

### Quy tắc 3: Xử lý dữ liệu trung thực

```markdown
## Quy tắc: Không bịa số liệu

- **Loại:** Dữ liệu
- **Mức ưu tiên:** Cao (Tuyệt đối)
- **Áp dụng cho:** Tất cả agent

### Mô tả
AI KHÔNG ĐƯỢC tự tạo, ước lượng, hoặc bịa số liệu. Khi cần số liệu mà không
có dữ liệu được cung cấp, AI phải: (1) Nói rõ rằng không có dữ liệu,
(2) Hỏi người dùng cung cấp, (3) Đề xuất cách thu thập.

### ✅ Ví dụ ĐÚNG
> "Mình chưa có dữ liệu engagement tháng này. Bạn có thể export từ
> LinkedIn Analytics không? Mình cần file CSV bao gồm: views, likes,
> comments, shares cho mỗi bài viết."

### ❌ Ví dụ SAI
> "Engagement rate tháng này ước tính khoảng 4.5%, tăng 12% so với tháng trước."
> → AI tự bịa số liệu "4.5%" và "12%" khi không có dữ liệu thực

### Lý do
Thương hiệu cá nhân xây trên sự tin cậy. Một lần chia sẻ số liệu sai có thể
phá hủy uy tín mà bạn mất nhiều tháng xây dựng. AI hallucination (ảo giác AI)
là rủi ro phổ biến nhất và nghiêm trọng nhất.
```

### Quy tắc 4: Bảo vệ thông tin cá nhân

```markdown
## Quy tắc: Không tiết lộ thông tin nhạy cảm

- **Loại:** An toàn
- **Mức ưu tiên:** Cao (Tuyệt đối)
- **Áp dụng cho:** Tất cả agent

### Mô tả
AI KHÔNG ĐƯỢC đưa vào output bất kỳ thông tin nhạy cảm nào, bao gồm:
số điện thoại cá nhân, email riêng, địa chỉ nhà, thông tin tài chính,
mật khẩu, hoặc thông tin nhận dạng cá nhân của bên thứ ba.
Khi cần đề cập, sử dụng placeholder: [SỐ ĐIỆN THOẠI], [EMAIL], v.v.

### ✅ Ví dụ ĐÚNG
> "Liên hệ với mình qua [EMAIL CHUYÊN NGHIỆP] hoặc nhắn tin trực tiếp
> trên LinkedIn."

### ❌ Ví dụ SAI
> "Liên hệ với mình qua nguyenvana@gmail.com hoặc gọi 0901234567."
> → Tiết lộ email và số điện thoại thật trong nội dung

### Lý do
Thông tin cá nhân bị lộ trên mạng xã hội có thể bị lạm dụng (spam, lừa đảo,
quấy rối). Quy tắc này bảo vệ cả bạn và những người được đề cập trong nội dung.
```

---

## 5. Template Trống — Dành Cho Sinh Viên

Sao chép và điền quy tắc cho workspace của bạn:

```markdown
# Quy Tắc Workspace: {{Tên Dự Án}}

## Quy tắc Ngôn ngữ

### QT-NN-01: {{Tên quy tắc}}
- **Mô tả:** {{...}}
- **✅ Đúng:** {{...}}
- **❌ Sai:** {{...}}

### QT-NN-02: {{Tên quy tắc}}
- **Mô tả:** {{...}}
- **✅ Đúng:** {{...}}
- **❌ Sai:** {{...}}

## Quy tắc Định dạng

### QT-ĐD-01: {{Tên quy tắc}}
- **Mô tả:** {{...}}
- **✅ Đúng:** {{...}}
- **❌ Sai:** {{...}}

## Quy tắc Dữ liệu

### QT-DL-01: {{Tên quy tắc}}
- **Mô tả:** {{...}}
- **✅ Đúng:** {{...}}
- **❌ Sai:** {{...}}

## Quy tắc Chất lượng

### QT-CL-01: {{Tên quy tắc}}
- **Mô tả:** {{...}}
- **✅ Đúng:** {{...}}
- **❌ Sai:** {{...}}

## Quy tắc An toàn

### QT-AT-01: {{Tên quy tắc}}
- **Mô tả:** {{...}}
- **✅ Đúng:** {{...}}
- **❌ Sai:** {{...}}
```

---

## 6. Checklist Viết Quy Tắc

- [ ] Mỗi quy tắc có tên rõ ràng, dễ nhớ
- [ ] Mỗi quy tắc có ít nhất 1 ví dụ đúng và 1 ví dụ sai
- [ ] Quy tắc không mâu thuẫn với nhau
- [ ] Quy tắc cụ thể, đo lường được (tránh "viết hay", "tốt hơn")
- [ ] Có đủ 5 loại quy tắc: Ngôn ngữ, Định dạng, Dữ liệu, Chất lượng, An toàn
- [ ] Quy tắc được đặt trong file `AGENTS.md` hoặc `GEMINI.md` tại root workspace
- [ ] Đã test quy tắc bằng cách thử cho AI vi phạm và xem AI có tự sửa không

---

## 7. Ghi Chú Cho Sinh Viên

> **💡 Mẹo:** Bắt đầu với 5-7 quy tắc cơ bản. Thêm quy tắc mới khi phát hiện AI hành xử không đúng mong đợi — đó là cách tự nhiên nhất để xây dựng bộ quy tắc.
>
> **⚠️ Lưu ý:** Quy tắc quá nhiều hoặc quá chi tiết có thể khiến AI "bối rối" và hoạt động chậm hơn. Mỗi quy tắc nên giải quyết một vấn đề thực tế bạn đã gặp.
>
> **📍 Vị trí file:** Quy tắc đặt trong file `AGENTS.md` (hoặc `GEMINI.md`) ở thư mục gốc workspace, hoặc trong thư mục `.agents/rules/`.

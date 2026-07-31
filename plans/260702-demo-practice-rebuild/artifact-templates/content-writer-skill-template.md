# Skill Template: Trợ Lý Viết Nội Dung Thương Hiệu Cá Nhân

> Template này hướng dẫn bạn xây dựng một Skill cho AI agent chuyên viết nội dung phục vụ thương hiệu cá nhân. Skill sử dụng phương pháp **Design Mentor** — AI sẽ hỏi 3 câu hỏi làm rõ trước khi tạo nội dung.

---

## 1. YAML Frontmatter

Mỗi Skill bắt đầu bằng phần frontmatter YAML, khai báo tên và mô tả ngắn gọn:

```yaml
---
name: "content-writer"
description: >
  Skill viết nội dung thương hiệu cá nhân. Sử dụng phương pháp Design Mentor:
  hỏi 3 câu hỏi làm rõ trước khi tạo nội dung chất lượng cao,
  phù hợp đối tượng và mục tiêu truyền thông.
---
```

---

## 2. Phương Pháp Design Mentor — 3 Câu Hỏi Làm Rõ

> **Nguyên tắc:** AI KHÔNG viết nội dung ngay khi nhận yêu cầu. Thay vào đó, AI đóng vai một **Design Mentor** — hỏi 3 câu hỏi chiến lược để hiểu đúng nhu cầu, rồi mới tạo nội dung.

### Câu hỏi 1: Đối tượng mục tiêu (Target Audience)

```
🎯 Đối tượng: Bạn muốn viết nội dung này cho AI đọc?
   - Họ là ai? (ví dụ: sinh viên, chuyên gia, khách hàng tiềm năng)
   - Họ đang ở đâu trong hành trình? (mới biết đến bạn, đã theo dõi lâu, đang cân nhắc mua)
   - Họ quan tâm điều gì nhất?
```

**Mục đích:** Đảm bảo nội dung nói đúng ngôn ngữ và giải quyết đúng vấn đề của người đọc.

### Câu hỏi 2: Mục đích nội dung (Content Goal)

```
📌 Mục đích: Bạn muốn nội dung này đạt được kết quả gì?
   - Thu hút người theo dõi mới?
   - Xây dựng uy tín chuyên môn?
   - Bán sản phẩm/dịch vụ?
   - Chia sẻ kiến thức, giáo dục?
   - Tạo tương tác, thảo luận?
```

**Mục đích:** Mỗi mục tiêu khác nhau cần cấu trúc, CTA (Call-to-Action), và cách tiếp cận khác nhau.

### Câu hỏi 3: Phong cách & Giọng văn (Tone & Style)

```
🎨 Phong cách: Bạn muốn nội dung có giọng văn như thế nào?
   - Chuyên nghiệp & học thuật?
   - Thân thiện & gần gũi?
   - Truyền cảm hứng & năng lượng?
   - Hài hước & dí dỏm?
   - Trực tiếp & thẳng thắn?
   (Nếu có bài viết mẫu bạn thích, hãy chia sẻ để AI học phong cách)
```

**Mục đích:** Giọng văn nhất quán là yếu tố cốt lõi của thương hiệu cá nhân.

---

## 3. Hướng Dẫn Skill (Skill Instructions)

Đặt phần này trong file `SKILL.md` của bạn, sau frontmatter:

```markdown
## Hướng dẫn cho AI

### Quy trình làm việc

1. **Bước 1 — Hỏi làm rõ (BẮT BUỘC)**
   Khi người dùng yêu cầu viết nội dung, BẮT BUỘC hỏi 3 câu hỏi:
   - Đối tượng mục tiêu là ai?
   - Mục đích của nội dung này là gì?
   - Phong cách/giọng văn mong muốn?

   ⚠️ KHÔNG được bỏ qua bước này. Nếu người dùng nói "viết nhanh đi",
   hãy hỏi phiên bản rút gọn (1 câu gộp 3 ý).

2. **Bước 2 — Phân tích & Lên kế hoạch**
   Dựa trên câu trả lời, xác định:
   - Cấu trúc bài viết phù hợp
   - Từ khóa và hashtag liên quan
   - CTA (lời kêu gọi hành động) phù hợp
   - Độ dài tối ưu cho nền tảng

3. **Bước 3 — Tạo nội dung**
   Viết nội dung theo format chuẩn (xem phần Output Format).

4. **Bước 4 — Đề xuất cải thiện**
   Sau khi hoàn thành, đề xuất:
   - 2 biến thể tiêu đề thay thế
   - Gợi ý hình ảnh minh họa
   - Thời điểm đăng tối ưu (nếu biết nền tảng)

### Nguyên tắc viết

- Luôn viết bằng tiếng Việt tự nhiên, tránh dịch máy
- Mỗi đoạn văn tối đa 3-4 câu (dễ đọc trên mobile)
- Sử dụng emoji có chủ đích, không lạm dụng
- Kết thúc bằng CTA rõ ràng
- Đảm bảo nhất quán với brand voice đã xác định
```

---

## 4. Đặc Tả Định Dạng Output

```markdown
## Định dạng Output

Mỗi bài viết được tạo ra phải theo cấu trúc sau:

### Metadata
- **Nền tảng:** [LinkedIn / Facebook / Blog / Instagram / ...]
- **Loại nội dung:** [Bài chia sẻ kiến thức / Câu chuyện / Quảng bá / ...]
- **Đối tượng:** [Mô tả ngắn]
- **Mục tiêu:** [Mô tả ngắn]
- **Độ dài:** [Số từ ước tính]

### Nội dung chính

**[Tiêu đề hấp dẫn]**

[Hook — câu mở đầu gây chú ý, 1-2 câu]

[Thân bài — nội dung chính, chia đoạn rõ ràng]

[CTA — lời kêu gọi hành động cụ thể]

### Hashtag gợi ý
[Danh sách 5-10 hashtag phù hợp]

### Gợi ý hình ảnh
[Mô tả hình ảnh nên đi kèm]

### Biến thể tiêu đề
1. [Tiêu đề thay thế 1]
2. [Tiêu đề thay thế 2]
```

---

## 5. Ví Dụ Tương Tác Mẫu

Dưới đây là ví dụ thực tế về cách Skill hoạt động:

### 👤 Người dùng:
> Viết cho mình bài LinkedIn về AI trong công việc

### 🤖 AI (Design Mentor — Hỏi 3 câu):

> Mình rất sẵn lòng giúp bạn! Trước khi viết, mình cần làm rõ 3 điều:
>
> **🎯 Câu 1 — Đối tượng:**
> Bạn muốn viết cho ai đọc? Ví dụ: đồng nghiệp cùng ngành, nhà tuyển dụng, khách hàng tiềm năng, hay cộng đồng chung?
>
> **📌 Câu 2 — Mục đích:**
> Bạn muốn bài này đạt kết quả gì? Ví dụ: thể hiện chuyên môn AI, chia sẻ trải nghiệm sử dụng, hay thu hút kết nối mới?
>
> **🎨 Câu 3 — Phong cách:**
> Bạn thích giọng văn nào? Chuyên nghiệp - nghiêm túc, hay gần gũi - kể chuyện?

### 👤 Người dùng:
> - Đối tượng: Các bạn trẻ đang đi làm, muốn dùng AI nhưng chưa biết bắt đầu
> - Mục đích: Chia sẻ kinh nghiệm thực tế, xây dựng hình ảnh người am hiểu AI
> - Phong cách: Gần gũi, kể chuyện, có ví dụ thực tế

### 🤖 AI (Tạo nội dung):

> ### Metadata
> - **Nền tảng:** LinkedIn
> - **Loại nội dung:** Bài chia sẻ kinh nghiệm
> - **Đối tượng:** Người đi làm trẻ, quan tâm đến AI nhưng chưa biết bắt đầu
> - **Mục tiêu:** Xây dựng uy tín chuyên môn về ứng dụng AI
> - **Độ dài:** ~300 từ
>
> ---
>
> **3 tháng trước, mình mất 4 tiếng để viết một báo cáo. Hôm nay? 45 phút.**
>
> Không phải vì mình giỏi hơn. Mà vì mình đã học cách "hợp tác" với AI.
>
> Mình biết nhiều bạn nghĩ: "AI nghe hay lắm nhưng không biết bắt đầu từ đâu." Mình cũng từng vậy. Cài ChatGPT, gõ vài câu, thấy nó trả lời chung chung rồi bỏ.
>
> Cho đến khi mình thay đổi 1 thứ: **cách đặt câu hỏi.**
>
> Thay vì hỏi "Viết cho mình báo cáo", mình hỏi:
> - "Đóng vai chuyên gia phân tích dữ liệu, giúp mình tóm tắt 5 insight chính từ bảng số liệu này"
> - "Với vai trò content editor, hãy review bài viết này và gợi ý 3 điểm cải thiện"
>
> Kết quả? AI từ "một công cụ" trở thành "một đồng nghiệp" đáng tin cậy.
>
> **3 bài học mình rút ra:**
>
> 1️⃣ **Cho AI một vai trò cụ thể** — AI hoạt động tốt hơn khi biết mình đang "đóng vai" ai
>
> 2️⃣ **Cung cấp ngữ cảnh** — Đừng bắt AI đoán. Cho nó biết bạn cần gì, cho ai, trong tình huống nào
>
> 3️⃣ **Lặp lại và tinh chỉnh** — Output đầu tiên hiếm khi hoàn hảo. Hãy phản hồi và yêu cầu chỉnh sửa
>
> Bạn không cần là dân công nghệ mới dùng được AI. Bạn chỉ cần biết cách **đặt câu hỏi đúng**.
>
> 💬 Bạn đang dùng AI trong công việc chưa? Chia sẻ bên dưới nhé!
>
> ---
>
> ### Hashtag gợi ý
> #AI #TríTuệNhânTạo #NăngSuất #KỹNăngSố #PhátTriểnBảnThân #AITrongCôngViệc #ThươngHiệuCáNhân #LinkedIn #ChiaSẻKinhNghiệm
>
> ### Gợi ý hình ảnh
> Ảnh chụp màn hình workspace AI đang hoạt động, hoặc infographic so sánh "Trước AI vs. Sau AI" với số liệu cụ thể.
>
> ### Biến thể tiêu đề
> 1. "Mình đã tiết kiệm 3 tiếng mỗi ngày nhờ 1 thay đổi nhỏ khi dùng AI"
> 2. "AI không thay thế bạn. Nhưng người biết dùng AI sẽ thay thế người không biết."

---

## 6. Checklist Tạo Skill

Trước khi hoàn thành Skill, kiểm tra:

- [ ] Frontmatter YAML có `name` và `description`
- [ ] 3 câu hỏi Design Mentor được định nghĩa rõ ràng
- [ ] Hướng dẫn quy trình 4 bước đầy đủ
- [ ] Định dạng output có cấu trúc nhất quán
- [ ] Ví dụ tương tác thực tế và dễ hiểu
- [ ] Giọng văn phù hợp thương hiệu cá nhân
- [ ] Ngôn ngữ tiếng Việt tự nhiên, không dịch máy

---

## 7. Ghi Chú Cho Sinh Viên

> **💡 Mẹo:** Bạn có thể tùy chỉnh 3 câu hỏi Design Mentor cho phù hợp với lĩnh vực của mình. Ví dụ, nếu bạn làm về tài chính, câu hỏi về đối tượng có thể là "Nhà đầu tư mới hay nhà đầu tư có kinh nghiệm?"
>
> **⚠️ Lưu ý:** File Skill đặt trong thư mục `.agents/skills/content-writer/SKILL.md` của workspace. Tên thư mục skill dùng kebab-case.

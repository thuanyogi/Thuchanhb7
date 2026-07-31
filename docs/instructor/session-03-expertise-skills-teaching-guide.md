# Buổi 3 — Đóng Gói Chuyên Môn (Expertise Skill): Hướng Dẫn Giảng Dạy Chi Tiết

> **Phase 1 — Operate | Buổi 3 của 11**
> **Chủ đề:** Từ Chatbot → Prompt → Agent → Skill | Design Mentor | Xây HR Skill thực chiến
> **Thời lượng:** 3 giờ | **Artifact đầu ra:** HR Skill (hoặc Skill ngành mình) chạy được + test 2 prompts
> **Prompt pack:** Riêng: chưa có — dùng các prompt mẫu ngay trong guide này

---

## 1. Mục Tiêu Buổi Học

| # | Mục tiêu (từ slide) | Cách kiểm tra |
|---|---------------------|---------------|
| 1 | **Thiết kế Skill theo workflow thực tế** — Chuyển đổi quy trình làm việc thành Expertise Skill hoàn chỉnh có thể tái sử dụng | Học viên tạo được SKILL.md có đủ 3 phần RÕ BƯỚC / RÕ LUẬT / RÕ ĐÍCH |
| 2 | **Bóc tách cấu trúc Expertise Skill** để 'dạy' AI suy nghĩ như chuyên gia | Học viên giải thích được tại sao Prompt không đủ và Skill khác Prompt ở điểm nào |
| 3 | **Áp dụng Design Mentor** — phương pháp ủy quyền công việc cho AI có hệ thống | Học viên trả lời được 3 câu hỏi Design Mentor cho Skill của mình |

---

## 2. Cấu Trúc 3 Giờ

```
10 phút  → Khai mạc: Quiz chatbot ABC + Tại sao chatbot thất bại
20 phút  → Phần 1: Tiến hóa AI (4 cấp độ) + Vấn đề của Prompt + Skill là gì
30 phút  → Phần 2: Cấu trúc Skill (SKILL.md + 80/20 rule + ví dụ HR Skill)
10 phút  → Phần 2b: Design Mentor — 3 câu hỏi + bảng so sánh
10 phút  → Break / Checkpoint nhanh
70 phút  → Phần 3: Thực hành xây Skill cho Operations Analyst
10 phút  → Tổng kết + Giao bài về nhà
```

---

## 3. Khai Mạc (10 phút)

### 3.1 Recap buổi 2 (3 phút)

Hỏi nhanh học viên:
- "Buổi 2 các bạn đã làm gì với workspace? Agent đầu tiên của bạn làm việc gì?"
- "Bạn đã thử hỏi AI trong workspace chưa? Kết quả như thế nào?"

Dẫn dắt chuyển tiếp:
> "Buổi 1 các bạn đã có workspace, buổi 2 đã chạy PDCA trong đó và biết cách nói chuyện với AI. Nhưng bạn thấy chưa — mỗi lần nhờ AI, phải giải thích lại từ đầu? Buổi hôm nay chúng ta sẽ đóng gói chuyên môn vào một cái gọi là **Skill** — để AI nhớ cách làm việc của bạn mà không cần nhắc lại."

### 3.2 Quiz mở đầu — Chatbot ABC thất bại (4 phút)

Chiếu tình huống lên màn hình:

> **Tình huống:** Công ty ABC triển khai chatbot hỗ trợ nhân sự. Nhân viên hỏi: "Tôi muốn xin nghỉ phép năm, quy trình như thế nào?"
>
> Chatbot trả lời: "Xin chào! Tôi có thể giúp gì cho bạn?"

Hỏi cả lớp:
- "Chatbot này gặp vấn đề gì?"
- "Tại sao chatbot được lập trình kịch bản cố định lại thất bại ở đây?"
- "Nhân viên sẽ làm gì tiếp theo? Họ có quay lại hỏi chatbot không?"

Ghi câu trả lời của học viên lên bảng. Đây là foundation để dẫn vào 4 cấp độ AI.

### 3.3 Giới thiệu artifact đầu ra (3 phút)

Chiếu nhanh ví dụ SKILL.md đã hoàn chỉnh (HR Skill mẫu):
- Cuối buổi: mỗi học viên có 1 Skill folder chạy được + đã test 2 prompts
- Artifact này sẽ là nền tảng cho buổi 4, 5, và cao hơn khi xây agent phức tạp

---

## 4. Phần 1 — Tiến Hóa AI: Từ Chatbot đến Skill (20 phút)

### 4.1 4 Cấp Độ AI (10 phút)

**Dẫn dắt từ quiz mở đầu:**

> "Vì sao chatbot ABC thất bại? Vì nó chỉ ở cấp độ 1 — Chatbot. Hãy xem 4 cấp độ AI trong thực tế doanh nghiệp."

| Cấp độ | Tên | Đặc điểm | Ví dụ |
|--------|-----|----------|-------|
| **1** | **Chatbot** | Kịch bản cố định, trả lời theo nhánh if-else | Chatbot hỗ trợ khách hàng website |
| **2** | **Prompt** | Linh hoạt, hiểu ngôn ngữ tự nhiên, nhưng phải nhập lại mỗi lần | ChatGPT, Gemini thông thường |
| **3** | **Agent** | Thực hiện nhiều bước tự động, có thể dùng tools | Antigravity Agent xử lý pipeline |
| **4** | **Skill** | Đóng gói quy trình như chuyên gia, tái sử dụng, nhất quán | Expertise Skill bạn sẽ xây hôm nay |

**Ẩn dụ giảng viên dùng:**
> "Chatbot = nhân viên đọc script. Prompt = nhân viên thông minh nhưng hay quên. Agent = nhân viên có checklist. **Skill = chuyên gia có SOP** — nhất quán, tái sử dụng, không cần giải thích lại."

**Câu hỏi kích thích:**
> "Trong 4 cấp độ này — cấp nào gần với cách một chuyên gia giỏi làm việc nhất?"

### 4.2 Vấn Đề Của Prompt (5 phút)

**Bảng so sánh thực tế:**

| Vấn đề với Prompt | Hậu quả trong công việc |
|-------------------|------------------------|
| Phải nhập lại prompt mỗi lần | Tốn thời gian — không scale được |
| Kết quả không ổn định | Không tin tưởng được — phải kiểm tra lại |
| Không lưu được quy trình | Kiến thức chỉ trong đầu người — không chuyển giao được |
| Prompt dài → dễ quên thiếu phần | Đầu ra không đầy đủ, thiếu nhất quán |

**Ví dụ cụ thể:**
> "Hôm nay bạn prompt: 'Hãy phân tích CV này và cho tôi biết ứng viên có phù hợp không.' AI trả lời khá tốt. Nhưng ngày mai đồng nghiệp của bạn dùng prompt tương tự — kết quả khác hoàn toàn. Tại sao? Vì prompt không đóng gói được **quy trình đánh giá** và **tiêu chuẩn** của bạn."

### 4.3 Skill Là Gì? (5 phút)

**Công thức:**
```
Skill = WORKFLOW + KNOWLEDGE + OUTPUT
      = AI như Nhân Viên có SOP
```

**Giải thích từng thành phần:**
- **WORKFLOW**: Quy trình bước-by-bước, đánh số rõ ràng, bắt đầu bằng động từ
- **KNOWLEDGE**: Tiêu chuẩn, điều kiện, ràng buộc nghiệp vụ (NẾU...THÌ)
- **OUTPUT**: Định dạng kết quả cụ thể, có ví dụ mẫu

**Sự khác biệt then chốt:**

| | Prompt | Skill |
|---|--------|-------|
| **Tái sử dụng** | Không — phải nhập lại | Có — gọi 1 lần |
| **Nhất quán** | Thấp — tùy mood AI | Cao — theo SOP cố định |
| **Chuyển giao** | Không được | Được — chia sẻ folder |
| **Mở rộng** | Khó | Dễ — thêm bước/rule |

> "Skill = bộ não chuyên gia được đóng gói. Bạn xây một lần — AI dùng mãi, nhất quán, đúng quy trình."

---

## 5. Phần 2 — Cấu Trúc Expertise Skill (30 phút)

### 5.1 Folder Structure (5 phút)

**Cấu trúc Skill folder chuẩn:**

```
my-hr-skill/
├── SKILL.md          ← BẮT BUỘC — quy trình + tiêu chuẩn + output
├── scripts/          ← (tùy chọn) Python, script tự động hóa
├── references/       ← (tùy chọn) tài liệu tham khảo, policy, mẫu
└── assets/           ← (tùy chọn) template, file mẫu, ảnh
```

**Quy tắc 80/20:**
> "**SKILL.md chiếm 80% sức mạnh của Skill.** Nếu chỉ có thời gian làm một thứ — làm SKILL.md thật tốt. Scripts và references chỉ bổ sung thêm, không thay thế được SKILL.md."

**Câu hỏi kiểm tra nhanh:**
> "Nếu Skill folder chỉ có SKILL.md và không có gì khác — Skill đó có chạy được không?"
> *(Đáp án: Có — SKILL.md là thứ duy nhất bắt buộc)*

### 5.2 Cấu Trúc SKILL.md — 3 Nguyên Tắc Cốt Lõi (15 phút)

**3 nguyên tắc xây SKILL.md:**

| Nguyên tắc | Nghĩa là | Ví dụ sai | Ví dụ đúng |
|-----------|---------|-----------|-----------|
| **RÕ BƯỚC** | Workflow đánh số, bắt đầu bằng động từ | "Xem xét thông tin ứng viên" | "1. Đọc CV — Trích xuất: tên, kinh nghiệm, kỹ năng chính" |
| **RÕ LUẬT** | Điều kiện NẾU...THÌ, ràng buộc rõ ràng | "Xử lý linh hoạt theo tình huống" | "NẾU kinh nghiệm < 2 năm THÌ đánh dấu 'Junior — cần training'" |
| **RÕ ĐÍCH** | Định dạng output cụ thể + ví dụ mẫu | "Đưa ra kết quả phù hợp" | "Output: Bảng 3 cột: Tiêu chí | Đánh giá | Điểm (1-5)" |

**Demo trực tiếp — Xây HR Skill bước tạo giao diện:**

> ⚠️ Refresh note: hành vi/UI Antigravity có thể thay đổi theo phiên bản — đối chiếu https://antigravity.google/docs và chạy thử demo trước buổi dạy.

Chiếu lên màn hình, gõ live cùng học viên:

```markdown
# HR Screening Skill

## Mô tả
Skill đánh giá CV ứng viên theo tiêu chuẩn tuyển dụng của công ty.
Kích hoạt khi nhận CV cần sàng lọc.

## Workflow

### Bước 1: Thu thập thông tin
Đọc toàn bộ CV và trích xuất:
- Họ tên ứng viên
- Số năm kinh nghiệm liên quan
- Kỹ năng kỹ thuật (liệt kê tối đa 5)
- Trình độ học vấn cao nhất
- Mức lương kỳ vọng (nếu có)

### Bước 2: Đánh giá theo tiêu chí
Chấm điểm từng tiêu chí (1-5):
- Kinh nghiệm phù hợp vị trí
- Kỹ năng kỹ thuật match JD
- Trình độ học vấn
- Sự ổn định công việc (< 3 công ty / 5 năm = ổn định)

### Bước 3: Đưa ra khuyến nghị
Tổng hợp điểm và kết luận rõ ràng.

## Rules (NẾU...THÌ)

- NẾU tổng điểm ≥ 16/20 THÌ đánh dấu "PASS — Mời phỏng vấn vòng 1"
- NẾU tổng điểm 10-15 THÌ đánh dấu "HOLD — Cần xem xét thêm"
- NẾU tổng điểm < 10 THÌ đánh dấu "FAIL — Không phù hợp"
- NẾU thiếu thông tin lương THÌ ghi "Chưa cung cấp — cần hỏi thêm"
- NẾU ứng viên đổi > 4 công ty trong 3 năm THÌ ghi chú "Rủi ro: job-hopper"

## Output Format

Trả lời theo bảng chuẩn sau — KHÔNG thêm thông tin khác:

**Tên ứng viên:** [Tên]
**Vị trí ứng tuyển:** [Vị trí]

| Tiêu chí | Đánh giá | Điểm (1-5) |
|---------|---------|-----------|
| Kinh nghiệm | [mô tả ngắn] | [x] |
| Kỹ năng kỹ thuật | [mô tả ngắn] | [x] |
| Học vấn | [mô tả ngắn] | [x] |
| Sự ổn định | [mô tả ngắn] | [x] |

**Tổng điểm:** [x]/20
**Khuyến nghị:** [PASS / HOLD / FAIL]
**Lý do:** [1-2 câu]
**Điểm cần làm rõ khi phỏng vấn:** [nếu PASS hoặc HOLD]
```

**Điểm nhấn khi demo:**
> "Để ý — mỗi bước bắt đầu bằng động từ (Đọc, Chấm điểm, Tổng hợp). Rules viết dạng NẾU...THÌ để AI ra quyết định đúng. Output có bảng mẫu cụ thể — AI không cần đoán format."

### 5.3 Ví Dụ Test 2 Prompts (10 phút)

**Sau khi có SKILL.md, giảng viên demo test với 2 prompt khác nhau:**

**Prompt 1 — Chi tiết:**
```
Hãy dùng HR Screening Skill để đánh giá CV sau:
Nguyễn Văn A, 28 tuổi, 4 năm kinh nghiệm Marketing Manager tại
công ty FMCG. Kỹ năng: Google Analytics, Meta Ads, Content Strategy,
Excel. Học vấn: Đại học Ngoại Thương. Lương kỳ vọng: 25 triệu.
Đã làm 2 công ty trong 4 năm.
```

**Prompt 2 — Ngắn gọn hơn:**
```
Dùng HR Skill đánh giá:
Trần Thị B, Marketing, 1 năm kinh nghiệm, Cao đẳng,
đã đổi 4 công ty trong 2 năm. Không nêu lương.
```

**Điểm cần quan sát với học viên:**
- Cả 2 prompt → AI dùng cùng bảng format output
- Rules NẾU...THÌ hoạt động đúng (Prompt 2 → FAIL + ghi chú job-hopper + thiếu lương)
- Không cần giải thích lại quy trình trong prompt

> "Đây chính là sức mạnh của Skill — **prompt ngắn, kết quả chuẩn**. AI đã 'nhớ' quy trình và tiêu chuẩn của bạn."

---

## 6. Phần 2b — Design Mentor (10 phút)

### 6.1 Design Mentor Là Gì? (3 phút)

> "Design Mentor là phương pháp giúp bạn **ủy quyền công việc cho AI có hệ thống** — không phải ra lệnh ngẫu hứng, mà thiết kế rõ ràng như thuê nhân viên thực thụ."

**3 câu hỏi Design Mentor:**

| Câu hỏi | Nghĩa | Liên kết với SKILL.md |
|---------|-------|----------------------|
| **LÀM THEO BƯỚC NÀO?** | Quy trình cụ thể, theo thứ tự | → Phần Workflow (RÕ BƯỚC) |
| **XỬ LÝ NHƯ THẾ NÀO?** | Điều kiện, ràng buộc, tiêu chuẩn | → Phần Rules (RÕ LUẬT) |
| **KẾT QUẢ RA SAO?** | Định dạng, cấu trúc output mong muốn | → Phần Output (RÕ ĐÍCH) |

### 6.2 Bảng So Sánh — Cách Thông Thường vs Design Mentor (5 phút)

| Tình huống | Cách thông thường | Design Mentor |
|-----------|------------------|---------------|
| Nhờ AI review CV | "Bạn hãy xem CV này và cho ý kiến" | LÀM THEO BƯỚC NÀO: (1) Đọc thông tin, (2) So với JD, (3) Đánh giá |
| Nhờ AI viết email | "Viết email từ chối ứng viên" | XỬ LÝ NHƯ THẾ NÀO: Tông lịch sự, không tiết lộ lý do cụ thể, mở cửa tương lai |
| Nhờ AI tổng hợp báo cáo | "Tóm tắt dữ liệu này" | KẾT QUẢ RA SAO: Bảng 3 cột, tối đa 10 dòng, có cột "Hành động tiếp theo" |

**Ẩn dụ giảng viên dùng:**
> "Cách thông thường = nhờ người chạy việc rồi tự phán đoán. Design Mentor = viết Job Description rõ ràng trước khi thuê người. **Kết quả tốt hay không phụ thuộc vào người thiết kế — không phải AI.**"

### 6.3 Thực Hành Nhanh (2 phút)

Yêu cầu học viên làm việc theo cặp — 1 phút:

> "Nghĩ về một công việc lặp lại bạn làm hàng tuần. Trả lời 3 câu hỏi Design Mentor cho công việc đó. Chia sẻ nhanh với người ngồi cạnh."

Gọi 1-2 cặp chia sẻ nhanh trước khi vào break.

---

## 7. Break & Checkpoint (10 phút)

Trong 5 phút đầu break, học viên ghi nhanh vào giấy:
1. "Skill khác Prompt ở 3 điểm nào?"
2. "3 nguyên tắc xây SKILL.md là gì? Viết tên 3 nguyên tắc."
3. "Quy trình công việc của bạn — bước đầu tiên là gì? Viết theo chuẩn RÕ BƯỚC (động từ + chi tiết)."

Giảng viên đọc nhanh qua → nhận diện ai đang bị mất luồng để hỗ trợ trong practice.

---

## 8. Phần 3 — Thực Hành (70 phút)

> [!IMPORTANT]
> **HƯỚNG DẪN DẠY VỚI 1 WORKSPACE XUYÊN SUỐT (BRIDGE LAYER):**
> Nhằm giữ nguyên nội dung Slide chính thức của MindX nhưng vẫn tối ưu hóa hiệu quả tích lũy năng lực của học viên, Giảng viên hướng dẫn lớp thực hành bài ERP Operations Skill này **trực tiếp bên trong workspace duy nhất của học viên** (`my-workspace` đã setup ở Buổi 1-2).
> - **Cách tổ chức file:** Học viên tạo folder `erp-operations-skill` tại đường dẫn `.agents/skills/erp-operations-skill/` nằm trong workspace cá nhân thay vì tạo folder riêng lẻ ngoài Desktop.
> - **Cá nhân hóa (Khuyến nghị):** Đối với học viên muốn giải quyết bài toán thật của họ ngay tại lớp, khuyến khích họ mở file [session-03-bridge.md](plans/260710-workspace-bridge/bridge-guides/session-03-bridge.md) để map kịch bản ERP của MindX sang nghiệp vụ thực tế của họ (như Marketing, HR, Sales...) và xây dựng trực tiếp skill đó trong `.agents/skills/`.

### Đề Bài: Xây Skill Cho Operations Analyst

**Tình huống doanh nghiệp:**

Tại công ty ABC, bộ phận Operations có một file ERP hàng tháng chứa toàn bộ giao dịch của công ty. Mỗi tháng, Operations Analyst phải xử lý thủ công:
1. Mở file Excel/CSV từ hệ thống ERP
2. Làm sạch dữ liệu (xóa dòng trống, chuẩn hóa tên cột)
3. Lọc dữ liệu theo từng phòng ban
4. Tạo file riêng cho mỗi manager phòng ban
5. Tổng hợp báo cáo tóm tắt toàn công ty

**Vấn đề hiện tại:**
Mỗi tháng mất 4-6 giờ để làm thủ công. Nếu có lỗi phải làm lại từ đầu. Khi nhân sự thay đổi — người mới không biết quy trình.

**Yêu cầu thực hành:**

Dùng Antigravity tạo **ERP Operations Skill** xử lý tác vụ này, sau đó test bằng 2 câu prompt liên quan bất kỳ.

### Cấu Trúc 70 Phút Thực Hành

| Thời gian | Hoạt động | Giảng viên làm gì |
|-----------|-----------|-------------------|
| 0–10 phút | Setup: tạo folder Skill, mở SKILL.md trống | Hướng dẫn tạo folder chuẩn, kiểm tra Antigravity hoạt động |
| 10–30 phút | Thiết kế Workflow 5 bước (RÕ BƯỚC) + Rules (RÕ LUẬT) | Đi vòng quanh, kiểm tra bước có bắt đầu bằng động từ không |
| 30–50 phút | Định nghĩa Output Format + điền ví dụ mẫu (RÕ ĐÍCH) | Hỗ trợ học viên tạo bảng output chuẩn |
| 50–65 phút | Test với Prompt 1 + Prompt 2, quan sát kết quả | Nhận diện Skill nào ra kết quả không nhất quán |
| 65–70 phút | Ghi lại vào artifact + chuẩn bị chia sẻ | Review nhanh, chụp màn hình kết quả |

### Hướng Dẫn Từng Bước Cho Học Viên

**Bước 1 — Tạo Skill Folder:**
```
Trong workspace Antigravity duy nhất của học viên, tạo thư mục theo cấu trúc chuẩn:

.agents/skills/erp-operations-skill/
├── SKILL.md        ← bắt đầu ở đây
├── references/     ← để trống, sẽ thêm sau
└── assets/         ← để file ERP mẫu vào đây
```

**Bước 2 — Mở SKILL.md và điền phần Workflow:**

Gợi ý cho học viên bắt đầu với khung:

```markdown
# ERP Operations Skill

## Mô tả
[Học viên tự viết — 2-3 câu mô tả Skill làm gì]
Kích hoạt khi: [điều kiện kích hoạt]

## Workflow

### Bước 1: [Động từ + chi tiết]
...

### Bước 2: [Động từ + chi tiết]
...
```

**Câu hỏi dẫn dắt giảng viên hỏi từng học viên:**
- "Bước đầu tiên AI cần làm là gì? Bắt đầu bằng động từ nào?"
- "Nếu thiếu bước này, quy trình có chạy được không?"
- "Thứ tự các bước có logic không — bước trước cần hoàn thành trước bước sau không?"

**Bước 3 — Thêm Rules (NẾU...THÌ):**

Gợi ý tối thiểu 3 rules cho ERP Skill:
```
- NẾU cột tên phòng ban trống THÌ đánh dấu "UNASSIGNED" và báo cáo số lượng
- NẾU có dòng duplicate (cùng ID giao dịch) THÌ giữ dòng đầu, bỏ các dòng sau
- NẾU số tiền < 0 (âm) THÌ phân loại vào nhóm "Hoàn trả" riêng
- NẾU không xác định được phòng ban THÌ đưa vào nhóm "Khác" và ghi chú
```

**Bước 4 — Định nghĩa Output:**

Yêu cầu học viên tạo bảng output cho từng loại kết quả:

```markdown
## Output Format

### 1. Báo cáo tổng hợp (Summary Report)
Tạo bảng tổng hợp sau khi xử lý:

| Phòng ban | Số giao dịch | Tổng giá trị | Hoàn trả | Unassigned |
|-----------|-------------|-------------|---------|-----------|
| [Tên PB] | [số] | [VNĐ] | [số] | [số] |

Dòng cuối: TOTAL | [tổng] | [tổng] | [tổng] | [tổng]

### 2. Thông báo hoàn thành
"Đã xử lý [X] dòng từ file ERP [tháng/năm].
Tạo [Y] file riêng cho [Y] phòng ban.
Phát hiện [Z] dòng cần kiểm tra."
```

**Bước 5 — Test với 2 Prompts:**

Yêu cầu học viên chạy 2 prompt sau để test:

**Gợi ý Prompt 1 — Dùng file thật:**
```
Dùng ERP Operations Skill xử lý file `assets/erp-sample.csv`.
```

> **Ghi chú giảng viên:** Chuẩn bị trước buổi học file `erp-sample.csv` (~150 dòng, có sẵn 5 dòng duplicate và một số dòng thiếu cột phòng ban) và đặt vào thư mục `assets/` của skill (`.agents/skills/erp-operations-skill/assets/`).

**Gợi ý Prompt 2 — Ví dụ phản diện (mô tả suông, KHÔNG có file thật):**
```
Dùng ERP Operations Skill xử lý file dữ liệu tháng 5/2025.
File có 3 phòng ban: Sales, Marketing, Operations.
Tổng 150 dòng, phát hiện 5 dòng duplicate và 12 dòng thiếu phòng ban.
```

Cho học viên chạy cả 2 prompt và so sánh kết quả: với Prompt 2 không có file thật, AI vẫn trả về báo cáo trông rất thuyết phục — nhưng toàn bộ số liệu là **bịa**. Đây chính là bài học trực quan về Hallucination: Skill tốt đến đâu cũng không cứu được khi thiếu dữ liệu đầu vào thật.

**Điểm cần quan sát:**
- Output có theo đúng format bảng trong SKILL.md không?
- Rules NẾU...THÌ có được áp dụng không (duplicate, âm, unassigned)?
- AI có hỏi thêm thông tin không cần thiết không?
- Prompt 1 vs Prompt 2: học viên có nhận ra số liệu ở Prompt 2 là AI tự bịa không?

### Hỗ Trợ Học Viên Bị Kẹt

| Tình huống kẹt | Gợi ý giảng viên |
|---------------|--------------------|
| Không biết bắt đầu Workflow từ đâu | "Hãy tưởng tượng bạn đang giải thích quy trình cho nhân viên mới — bước đầu tiên là mở file hay kiểm tra cấu trúc?" |
| Workflow thiếu bước quan trọng | "Nếu bỏ bước này — đầu ra có đúng không? Có bước nào phụ thuộc vào bước này không?" |
| Rules quá chung chung | "Rules cần đủ cụ thể để AI ra quyết định mà không cần hỏi lại. Thử thêm con số hoặc điều kiện rõ hơn." |
| Output format chưa rõ | "Nếu nhận output này, bạn có dùng được ngay không? Hay phải format lại?" |
| Test 2 prompt cho kết quả khác nhau | "Kiểm tra lại Workflow — bước nào chưa rõ đủ để AI xử lý nhất quán?" |
| Không biết dùng Antigravity như thế nào | Hỗ trợ trực tiếp: mở workspace, hướng dẫn activate Skill trong prompt |

---

## 9. Review Artifact & Giao Bài (10 phút)

### Artifact Chuẩn Buổi 3

**1. Skill Folder hoàn chỉnh (nằm trong workspace cá nhân):**
```
.agents/skills/erp-operations-skill/
├── SKILL.md         ← đã có đủ 3 phần: Workflow + Rules + Output
├── references/      ← (tùy chọn)
└── assets/          ← file ERP mẫu (nếu có)
```

**2. SKILL.md mẫu hoàn chỉnh (ví dụ tham khảo):**

```markdown
# ERP Operations Skill

## Mô tả
Skill xử lý tự động file ERP hàng tháng: làm sạch dữ liệu, phân loại
theo phòng ban, tạo báo cáo tổng hợp.
Kích hoạt khi: nhận file ERP hoặc mô tả dữ liệu ERP cần xử lý.

## Workflow

### Bước 1: Nhận và kiểm tra file
Đọc file ERP đầu vào, kiểm tra:
- Số dòng dữ liệu
- Danh sách cột hiện có
- Số dòng trống, dòng header thừa

### Bước 2: Làm sạch dữ liệu
Chuẩn hóa file:
- Xóa dòng trống hoàn toàn
- Chuẩn hóa tên cột (viết thường, không dấu, dùng gạch dưới)
- Loại bỏ khoảng trắng thừa trong tên phòng ban
- Phát hiện và xử lý duplicate theo ID giao dịch

### Bước 3: Phân loại theo phòng ban
Lọc và nhóm dữ liệu:
- Tạo nhóm riêng cho từng phòng ban
- Đưa dòng không xác định phòng ban vào nhóm "UNASSIGNED"
- Đưa giá trị âm vào nhóm "Hoàn trả"

### Bước 4: Tạo file riêng cho từng manager
Với mỗi phòng ban:
- Tạo danh sách giao dịch theo phòng ban
- Tính tổng giá trị
- Đánh dấu các giao dịch bất thường (nếu có)

### Bước 5: Tổng hợp báo cáo
Tạo Summary Report theo format chuẩn (xem Output Format bên dưới).

## Rules (NẾU...THÌ)

- NẾU cột phòng ban trống THÌ đánh dấu "UNASSIGNED", đếm số lượng và báo cáo
- NẾU có dòng duplicate cùng ID giao dịch THÌ giữ dòng đầu tiên, ghi chú số duplicate bỏ đi
- NẾU giá trị giao dịch < 0 THÌ phân loại vào nhóm "Hoàn trả" riêng biệt
- NẾU thiếu tên phòng ban > 10% tổng dòng THÌ cảnh báo: "Dữ liệu có vấn đề — cần kiểm tra nguồn"
- NẾU file không có cột ID giao dịch THÌ báo lỗi: "Không thể kiểm tra duplicate — thiếu cột ID"

## Output Format

### Báo cáo tổng hợp (Summary Report)
| Phòng ban | Số giao dịch | Tổng giá trị (VNĐ) | Hoàn trả | Unassigned |
|-----------|-------------|-------------------|---------|-----------|
| Sales | [x] | [y] | [z] | [w] |
| Marketing | [x] | [y] | [z] | [w] |
| Operations | [x] | [y] | [z] | [w] |
| TOTAL | [x] | [y] | [z] | [w] |

### Thông báo hoàn thành
"Đã xử lý [X] dòng từ file ERP [tháng/năm].
Tạo [Y] nhóm dữ liệu cho [Y] phòng ban.
Phát hiện: [a] duplicate đã loại, [b] dòng Hoàn trả, [c] dòng UNASSIGNED.
Cần kiểm tra: [danh sách nếu có]"
```

**3. Screenshot / ghi chép 2 lần test prompt với kết quả**

**4. Ghi chú ngắn: Skill của bạn hoạt động tốt ở điểm nào? Điểm nào cần cải thiện?**

### Validation Checklist

- [ ] Giải thích được sự khác biệt Prompt vs Skill (không nhìn tài liệu)
- [ ] SKILL.md có đủ 3 phần: Workflow (đánh số, động từ) + Rules (NẾU...THÌ) + Output (format)
- [ ] Workflow có ít nhất 4 bước, mỗi bước bắt đầu bằng động từ
- [ ] Rules có ít nhất 2 điều kiện NẾU...THÌ cụ thể (có con số hoặc điều kiện rõ)
- [ ] Output định nghĩa rõ format + có ví dụ mẫu (bảng hoặc text mẫu)
- [ ] Test được với 2 prompt khác nhau → kết quả nhất quán (cùng format)
- [ ] Folder Skill nằm trong `.agents/skills/` (trong workspace cá nhân duy nhất) có SKILL.md + ít nhất 1 folder phụ
- [ ] Chia sẻ màn hình Skill đang hoạt động lên Group

### Bài Tập Về Nhà (Education Sector)

> **Bối cảnh:** Nhân viên đào tạo tại trung tâm giáo dục, không có sẵn dữ liệu từ hệ thống.
>
> **Xây Skill có khả năng:**
> - Tự tìm dữ liệu (điểm học viên / khóa học) từ mô tả người dùng cung cấp
> - Chuẩn hóa thành bảng điểm có cấu trúc
> - Làm sạch dữ liệu (thiếu điểm, sai format, học viên trùng tên)
> - Tạo report theo giảng viên: mỗi giảng viên một bảng tổng kết
>
> **Yêu cầu nộp (làm trực tiếp trong workspace cá nhân duy nhất):**
> - Folder Skill hoàn chỉnh tại đường dẫn `.agents/skills/education-sector-skill/` (SKILL.md + ít nhất 1 folder phụ)
> - 2 lần test prompt với kết quả ghi lại
> - Ghi chú: Skill của bạn xử lý tốt tình huống nào? Tình huống nào chưa ổn?

---

## 10. Lỗi Phổ Biến & Cách Can Thiệp

| Lỗi | Dấu hiệu | Cách giảng viên can thiệp |
|-----|-----------|-----------------------------|
| SKILL.md quá chung chung | Workflow viết dạng đoạn văn, không có bước đánh số | "Tưởng tượng giải thích cho người mới hoàn toàn — viết từng bước một, bắt đầu bằng động từ" |
| Không có điều kiện NẾU...THÌ | Rules phần trống hoặc chỉ viết "xử lý linh hoạt" | "Điều tệ nhất AI có thể làm sai là gì? Đó là Constraint cần viết — thêm ít nhất 2 điều kiện" |
| Output không định nghĩa format | Output phần viết "trả lời phù hợp" hoặc không có bảng mẫu | "Nhận output này bạn có dùng được ngay không? Nếu phải format lại — Output chưa đủ rõ" |
| AI trả lời không nhất quán ở 2 prompt | Bảng output khác nhau, có lần thiếu cột | "Kiểm tra SKILL.md — có đủ 3 phần RÕ BƯỚC / RÕ LUẬT / RÕ ĐÍCH không? Phần nào thiếu?" |
| Bước Workflow không logic | Bước 3 phụ thuộc kết quả bước 5 | "Đọc lại thứ tự — bước trước có cho đủ thông tin để bước sau chạy không?" |
| Rules quá chặt — AI bị paralysis | AI hỏi lại liên tục, không ra kết quả | "Thêm rule mặc định: NẾU không đủ thông tin THÌ [hành động dự phòng cụ thể]" |

---

## 11. Câu Hỏi Thảo Luận Dự Phòng

1. "Nếu hai người dùng cùng một Skill — kết quả có giống nhau không? Tại sao?"
2. "Skill của bạn có thể dùng lại cho ngành khác không? Cần thay đổi phần nào?"
3. "Nếu quy trình thực tế thay đổi — bạn cần cập nhật phần nào của SKILL.md trước?"
4. "Khi nào nên dùng Prompt — khi nào nên đầu tư xây Skill? Ranh giới ở đâu?"
5. "Trong tổ chức bạn — quy trình nào đang làm thủ công lặp đi lặp lại đủ để xứng đáng xây Skill?"
6. "Design Mentor hỏi 3 câu — câu nào khó trả lời nhất trong công việc thực tế của bạn?"

---

## 11b. Các Usecase Thực Tế Chia Sẻ Thêm (Khi còn thời gian)

Nếu lớp làm xong sớm hoặc còn thời gian thảo luận, Giảng viên có thể chia sẻ thêm các usecase thực tế khi đi làm để học viên hình dung cách ứng dụng Expertise Skill:

### Usecase 1: Marketing - Content Writer Skill (Viết bài PR & Social Media)
*   **Mô tả:** Đóng gói chuyên môn viết bài PR/Social Media theo phong cách chuẩn.
*   **Workflow:** (1) Nhận thông tin sản phẩm và tệp khách hàng -> (2) Xác định góc tiếp cận (Storytelling, Problem-Solution, hoặc Feature-Highlight) -> (3) Viết nháp theo cấu trúc Hook-Story-Insight-CTA -> (4) Kiểm tra độ dài và hashtags.
*   **Rules:** Không dùng từ ngữ sáo rỗng (tuyệt vời, hoàn hảo...); Giữ bài viết dưới 250 từ; Emoji tối đa 3 cái.

### Usecase 2: HR - Recruitment CV Screener Skill (Sàng lọc hồ sơ ứng viên theo JD)
*   **Mô tả:** Đóng gói tiêu chuẩn lọc CV của phòng tuyển dụng giúp giảm 80% thời gian lọc thủ công.
*   **Workflow:** (1) Đọc CV và JD đầu vào -> (2) Check các điều kiện bắt buộc (Years of Experience, Core Skills) -> (3) Đánh giá điểm cộng (học vấn, dự án nổi bật) -> (4) Xuất kết quả kèm theo khuyến nghị.
*   **Rules:** NẾU kinh nghiệm dưới 2 năm THÌ ghi rõ "FAIL kinh nghiệm"; NẾU CV đổi việc quá 3 lần trong 2 năm THÌ đánh dấu cảnh báo "Job Hopper".

### Usecase 3: Sales/CS - Email Auto-Responder Skill (Phản hồi khiếu nại khách hàng)
*   **Mô tả:** Tự động soạn thảo email trả lời khiếu nại theo đúng bộ quy tắc ứng xử của công ty.
*   **Workflow:** (1) Đọc email khiếu nại -> (2) Phân loại mức độ nghiêm trọng và chủ đề khiếu nại (Giao hàng, Chất lượng, Thái độ) -> (3) Tra cứu chính sách đền bù/xử lý -> (4) Soạn email phản hồi lịch sự, đồng cảm.
*   **Rules:** Luôn bắt đầu bằng lời xin lỗi chân thành; KHÔNG cam kết bồi thường bằng tiền mặt khi chưa có duyệt của sếp; Giữ tone văn chuyên nghiệp, điềm tĩnh.

---

## 12. Backup Plans

| Tình huống | Backup |
|-----------|--------|
| Antigravity thay UI / lỗi quota | Viết SKILL.md trên VS Code hoặc Notepad, giải thích cấu trúc + demo bằng ChatGPT tạm thời |
| Học viên chưa có workspace từ buổi 2 | Khôi phục lại workspace cũ từ buổi 1-2. Nếu mất hẳn, hỗ trợ tạo lại đúng cấu trúc my-workspace (không tạo folder lẻ tẻ) |
| File ERP chưa tải về | Giảng viên cung cấp dữ liệu text mẫu ngay trong prompt — không cần file thật |
| Học viên chưa chuẩn bị quy trình công việc | Dùng quy trình ERP Operations làm case mặc định cho cả buổi |
| Kết nối internet chậm | Chuẩn bị SKILL.md mẫu offline để học viên chỉnh sửa thay vì tạo từ đầu |

---

## 13. Chuẩn Bị Của Học Viên (Checklist Gửi Group Trước Buổi Học)

> **Gửi cho học viên 24-48 giờ trước buổi 3:**

### Yêu Cầu Bắt Buộc

- [ ] Antigravity đã cài và đang hoạt động (kiểm tra bằng cách mở workspace)
- [ ] File ERP data đã tải về `Desktop/Buoi3/` (link do giảng viên gửi)
- [ ] Đã chuẩn bị mô tả 1 quy trình công việc thực tế của bạn (3-5 bước) — **sẽ dùng trong giờ thực hành**
- [ ] Workspace từ buổi 2 vẫn còn (không xóa)

### Gợi Ý Chuẩn Bị Tốt Hơn

> "Tối nay, hãy ghi ra: *Trong công việc hàng ngày, bạn thường xuyên phải làm gì lặp đi lặp lại? Quy trình đó có bao nhiêu bước?* Buổi 3 bạn sẽ dùng quy trình đó để xây Skill thực chiến."

### Câu Hỏi Kích Thích Chuẩn Bị

- "Bạn đang dùng Excel để làm gì mỗi tuần?"
- "Có email hoặc báo cáo nào bạn viết lặp đi lặp lại mỗi tháng không?"
- "Quy trình nào trong team bạn hay bị làm sai khi người mới vào?"

---

*Cập nhật lần cuối: 2026-06-10 | Phiên bản: v1.0 — Tạo mới theo cấu trúc session-05*
*Nguồn: Yêu cầu giảng viên | Session 3 — Phase 1 Operate*
*Tham khảo: `docs/instructor/session-05-micro-agent-teaching-guide.md`*

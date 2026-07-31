# Session 03 — Đóng Gói Chuyên Môn (Expertise Skill)

## Source
- `assets/source-materials/original/MindX_AG_Slide 3.pdf` (25 trang)

---

## Mục Tiêu Học Tập

| # | Mục tiêu | Mô tả |
|---|-----------|-------|
| 1 | **Thiết kế Skill theo workflow thực tế** | Chuyển đổi các bước trong quy trình làm việc (workflow) thực tế thành cấu trúc Expertise Skill hoàn chỉnh, đảm bảo khả năng tái sử dụng cao. |
| 2 | **Cấu trúc Expertise Skill** | Bóc tách thành công cấu trúc Expertise Skill để "dạy" AI suy nghĩ và giải quyết vấn đề như một chuyên gia trong lĩnh vực chuyên môn cụ thể. |
| 3 | **Áp dụng Design Mentor** | Vận dụng phương pháp Design Mentor để xây dựng luồng ủy quyền công việc cho AI, đảm bảo các tác vụ được xử lý tự động và có tính hệ thống. |

---

## Phần 1: Expertise Skill

### 1.1 Warm-up — Câu Hỏi Kích Hoạt Tư Duy

Slide mở đầu dùng bài quiz về Chatbot ABC để học viên tự nhận ra giới hạn của prompt thông thường trước khi giới thiệu Skill.

**Câu hỏi 1:**
> Tình huống: Một khách hàng nhắn tin cho fanpage ABC: *"Áo này mình mới mua 3 ngày trước, chưa mặc nhưng phát hiện bị rách chỉ ở nách. Mình cao 1m60 nặng 55kg thì đổi sang áo mới size L luôn được không?"*
>
> Dựa vào cấu trúc lệnh của Chatbot ABC, điều gì có khả năng cao nhất sẽ xảy ra?
>
> - A. Bot sẽ tự động kết hợp 2 kịch bản: Vừa tiếp nhận yêu cầu đổi trả (do dưới 7 ngày), vừa tư vấn size L phù hợp.
> - **B. Bot sẽ lúng túng, trả lời chung chung hoặc lập tức xin số điện thoại để Quản lý gọi lại.** ✅
> - C. Bot sẽ yêu cầu khách hàng cung cấp mã đơn hàng trước khi giải quyết.

**Câu hỏi 2:**
> Đoạn lệnh của Chatbot ABC thiếu hụt yếu tố cốt lõi nào khiến nó chỉ dừng ở mức "Chatbot" (làm theo lệnh) chứ không thể tiến hóa thành một "Nhân viên số" có khả năng xử lý công việc độc lập?
>
> - A. Thiếu số lượng kịch bản: Cần bổ sung thêm hàng trăm câu lệnh "Nếu - Thì" nữa để bao quát mọi tình huống.
> - **B. Thiếu một quy trình chuyên môn (workflow): Không có các bước đánh giá, phân tích và suy luận tuần tự để giải quyết vấn đề tận gốc.** ✅
> - C. Thiếu các quy tắc cấm kỵ khắt khe hơn để bot không nói sai.

> **Mục đích giảng:** Dẫn dắt học viên tự nhận ra "Nếu không có workflow, dù bao nhiêu kịch bản cũng không đủ."

---

### 1.2 Sự Tiến Hóa của AI

| Giai đoạn | Mô tả |
|-----------|-------|
| **Chatbot** | Trả lời câu hỏi đơn giản, phản ứng theo kịch bản cố định. |
| **Prompt** | Làm theo yêu cầu cụ thể, linh hoạt hơn nhưng không ổn định. |
| **Agent** | Thực hiện nhiều bước liên tiếp, có khả năng lập kế hoạch. |
| **Skill** | Làm việc như chuyên gia — có quy trình, kiến thức và output chuẩn. |

> **Key message:** Skill = bước tiến tiếp theo của AI — không chỉ làm theo lệnh mà còn có khả năng phân tích, hiểu mục tiêu, chọn được cách làm đúng.

---

### 1.3 Vì Sao Skill Xuất Hiện? — Vấn Đề của Prompt

| Vấn đề | Biểu hiện |
|--------|-----------|
| **Nhập mới mỗi lần** | Không có bộ nhớ quy trình, mỗi khi dùng phải nhập lại từ đầu. |
| **Không ổn định** | Kết quả thay đổi theo cách diễn đạt, không đảm bảo chất lượng đồng đều. |
| **Không scale được** | Không thể chia sẻ hay nhân rộng cho cả team một cách hiệu quả. |

> **Giải pháp:** Chuẩn hóa — Skill ra đời để giải quyết triệt để những hạn chế của Prompt truyền thống. Thay vì viết lại mỗi lần, bạn chỉ cần xây dựng Skill một lần và tái sử dụng mãi mãi.

---

### 1.4 Skill Là Gì?

**Skill = WORKFLOW + KNOWLEDGE + OUTPUT**

| Thành phần | Ý nghĩa |
|------------|---------|
| **WORKFLOW** — Cách làm | Quy trình từng bước rõ ràng, logic xử lý được định nghĩa sẵn để AI thực thi nhất quán. |
| **KNOWLEDGE** — Kiến thức | Tài liệu nghiệp vụ, quy tắc chuyên môn, ngữ cảnh cần thiết để AI hiểu đúng vấn đề. |
| **OUTPUT** — Kết quả chuẩn | Định dạng đầu ra được xác định trước, đảm bảo chất lượng và tính nhất quán. |

> **Ẩn dụ cốt lõi:** AI = Nhân viên có SOP (Standard Operating Procedure). Skill chính là bộ SOP giúp AI làm việc như một chuyên gia thực thụ.

---

### 1.5 Cấu Trúc Thư Mục của Một Skill

```
skill-name/
├── SKILL.md          ← BẮT BUỘC. Mô tả vai trò + từng bước làm việc A→Z
├── scripts/          ← Code ngắn (Python...). Giúp AI tính toán phức tạp / lấy dữ liệu nhanh
├── references/       ← Quy định, chính sách, kiến thức ngành. AI tra cứu khi cần chuyên môn sâu
└── assets/           ← File mẫu, template. Đảm bảo output đồng nhất đúng format
```

| Folder | Vai trò |
|--------|---------|
| `SKILL.md` | **Bắt buộc.** AI dựa vào đây để biết phải làm gì từ A đến Z. |
| `scripts/` | Công cụ tự động hóa bổ trợ (Python, v.v.). |
| `references/` | Kho tra cứu chuyên môn nội bộ. |
| `assets/` | Template / file mẫu để output luôn đúng format tiêu chuẩn. |

---

### 1.6 Giải Thích Chi Tiết SKILL.md (80/20)

```
SKILL.md   ←  80% sức mạnh
scripts/   ←  20% bổ trợ
```

**80% — SKILL.md:**
- **Xác định Cách làm (Process):** Bóc tách chuyên môn thành các bước xử lý logic rành mạch.
- **Định nghĩa Tiêu chuẩn (Output):** Mô tả rõ ràng hình hài của kết quả đầu ra.
- **Bản chất:** Sử dụng ngôn ngữ tự nhiên để cung cấp kiến thức chuyên gia vào AI.

**20% — Code & Scripts:**
- **Vai trò:** Tự động hóa và tăng tốc độ xử lý các tác vụ khó.
- **Bản chất:** Chỉ là công cụ. Nếu quy trình (SKILL.md) sai lệch, Code chỉ khiến AI làm sai nhanh hơn.

> ⚠️ **Lưu ý giảng:** Cần đầu tư thời gian vào SKILL.md trước, sau mới nghĩ đến Code & Scripts.

---

### 1.7 Vì Sao Dùng AI Thông Thường Kém Hiệu Quả?

**Bản chất AI:**
> AI không có ý thức hay tư duy kinh doanh. Nó là một cỗ máy toán học, tạo ra câu trả lời bằng cách dự đoán từ tiếp theo dựa trên xác suất thống kê.

**Hệ quả:**
- Khi nhận yêu cầu chung chung → AI chọn đáp án "trung bình" hoặc tự phỏng đoán sai lệch (hallucination).
- Người dùng mắc lỗi sai vặt.

**Giải pháp — Cung cấp Workflow:**
> Khi cung cấp quy trình từng bước, bạn đang **thu hẹp xác suất**. Mỗi bước AI hoàn thành sẽ tạo ra dữ liệu nền tảng chính xác để nó tính toán bước tiếp theo — loại bỏ rủi ro "đoán mò".

---

## Phần 2: Design Mentor (Ủy Quyền Cho AI)

### 2.1 Design Mentor Là Gì?

> **Định nghĩa:** Là phương pháp tiếp cận có hệ thống để "đào tạo" AI — thay vì chỉ ra lệnh, bạn dạy AI cách làm việc đúng từ đầu. Giống như việc đào tạo thực tập sinh, bạn không thể ném cho họ 1 nhiệm vụ rồi bắt tự làm.

**So sánh:**

| Tiêu chí | Cách yêu cầu thông thường | Design Mentor |
|----------|--------------------------|---------------|
| **Bản chất giao việc** | Tập trung vào Kết quả. Ví dụ: *"Viết 1 bài PR áo thun thật hay."* | Chuyển giao Quy trình. Ví dụ: *"Viết 1 bài PR sản phẩm, tuân thủ 3 bước: Nêu vấn đề → Đưa giải pháp → Kêu gọi hành động."* |
| **Vị thế kiểm soát** | Bạn phụ thuộc vào AI | AI tuân thủ luật chơi của bạn |
| **Chất lượng đầu ra** | Ngẫu nhiên | Chuẩn xác, có thể tái sử dụng |
| **Giá trị sử dụng** | Chỉ sử dụng cá nhân | Dễ dàng nhân rộng cho team |

---

### 2.2 Ba Câu Hỏi Nền Tảng của Design Mentor

Trả lời 3 câu hỏi để xây dựng nền tảng cho SKILL:

#### ❶ LÀM THEO BƯỚC NÀO? → Workflow

- Viết công việc thành **3–5 bước tuần tự**, bắt đầu bằng **ĐỘNG TỪ**.

```
Bước 1: [Đọc/Phân tích/Thu thập] từ [Nguồn dữ liệu nào]
Bước 2: [Tổng hợp/So sánh] để tìm ra [Cái gì]
Bước 3: [Viết/Tạo] ra [Bản nháp/Báo cáo]
```

#### ❷ XỬ LÝ NHƯ THẾ NÀO? → Rules

- Gắn quy tắc chuyên môn (Rule) cho các bước. Cung cấp điều kiện **NẾU…THÌ…** hoặc Ràng buộc.

```
Giọng văn / Tiêu chuẩn chuyên môn phải là: [Điền tiêu chuẩn...]
NẾU [Gặp trường hợp A], THÌ [Phải xử lý thế này...]
Tuyệt đối KHÔNG ĐƯỢC: [Từ cấm kỵ / Hành động sai lầm...]
```

#### ❸ KẾT QUẢ RA SAO? → Output

- Đưa ra kết quả tiêu chuẩn. Tuyệt đối **không dùng từ chung chung** như "Viết cho tôi một bài".

```
Hình thức trình bày: [Bảng 3 cột / Danh sách gạch đầu dòng / Báo cáo PDF]
Cấu trúc bắt buộc gồm các phần: [1. Tiêu đề... 2. Nội dung... 3. Chốt lại...]
(Tùy chọn) Ví dụ tham khảo: [Paste một đoạn mẫu bạn cho là chuẩn vào đây]
```

---

### 2.3 Demo Thực Tế: HR Skill

Slides 13–14 (Bước tạo giao diện) và slides 19–20 (Bước tạo SKILL) trình diễn quy trình xây dựng HR Skill trong Antigravity — từ thiết kế giao diện đến viết SKILL.md hoàn chỉnh.

> **Hướng dẫn demo:** Giảng viên mở Antigravity, thực hiện live 2 bước: (1) tạo giao diện Skill, (2) điền nội dung SKILL.md theo 3 câu hỏi Design Mentor.

---

## Phần 3: Tổng Kết — Nguyên Tắc Xây Dựng SKILL

| Nguyên tắc | Hành động | Lưu ý |
|------------|-----------|-------|
| **RÕ BƯỚC** (Quy trình — Workflow) | Chia nhỏ công việc thành dòng chảy tuyến tính. | Đánh số thứ tự (1, 2, 3) + Bắt đầu bằng Động từ. |
| **RÕ LUẬT** (Logic xử lý — Rules) | Truyền đạt bối cảnh và nguyên tắc chuyên môn. | Điều kiện xử lý (NẾU… THÌ…) + Ràng buộc cấm kỵ. |
| **RÕ ĐÍCH** (Đầu ra — Output) | Đóng khung hình hài kết quả cuối cùng. | Định dạng chuẩn + Cung cấp ví dụ mẫu. |

---

## Thực Hành Tại Lớp

**Bối cảnh:**
> Bạn là Operations Analyst tại một công ty. Mỗi tháng, bạn nhận file dữ liệu export từ hệ thống ERP chứa thông tin vận hành: nhân viên, bộ phận, doanh số/sản lượng, trạng thái công việc theo ngày. Hiện tại quy trình làm thủ công:
>
> Mở file Excel → Làm sạch dữ liệu → Lọc theo từng bộ phận → Tạo file riêng cho từng manager → Tổng hợp số liệu và viết báo cáo.
>
> Việc này tốn nhiều thời gian, dễ sai sót và khó scale khi dữ liệu lớn.

**Yêu cầu:**
1. Dùng Antigravity tạo Skill để xử lý tác vụ trên.
2. File dữ liệu ERP mẫu: *(link đính kèm từ slide)*.
3. Sau đó sử dụng **2 câu prompt liên quan bất kỳ** để kiểm tra Skill.

---

## Bài Tập Về Nhà

**Ngành:** Education (Trung tâm giáo dục)

**Bối cảnh:**
> Bạn là Nhân viên đào tạo (Training/Academic) tại một trung tâm giáo dục. Bạn cần tổng hợp dữ liệu về học viên để phục vụ báo cáo nội bộ, nhưng:
> - Không có sẵn file dữ liệu
> - Dữ liệu nằm rải rác trên internet hoặc nhiều nguồn khác nhau
> - Việc thu thập thủ công rất mất thời gian
>
> Sau khi có dữ liệu, bạn còn phải: Chuẩn hóa thành bảng Excel → Làm sạch dữ liệu → Phân tích theo từng giảng viên → Viết báo cáo.
>
> Quy trình này hiện tại chưa có hệ thống, phụ thuộc nhiều vào thao tác thủ công.

**Yêu cầu — Xây Skill có khả năng:**
- [ ] Tự tìm dữ liệu (điểm học viên / khóa học)
- [ ] Chuẩn hóa thành bảng
- [ ] Làm sạch dữ liệu
- [ ] Tạo report theo giảng viên
- [ ] Tự kiểm tra với 2 câu prompt bất kỳ

---

## Artifact Học Viên Tạo Ra

- **SKILL.md** hoàn chỉnh theo cấu trúc: Workflow (3–5 bước) + Rules (NẾU…THÌ…) + Output (định dạng chuẩn).
- Kết quả kiểm tra Skill với 2 prompt thực tế.

---

## Validation — Kiểm Tra Sau Buổi Học

- [ ] Học viên phân biệt được Chatbot / Prompt / Agent / Skill.
- [ ] Học viên trả lời được 3 câu hỏi Design Mentor cho case của mình.
- [ ] SKILL.md có đủ: Rõ Bước + Rõ Luật + Rõ Đích.
- [ ] Skill chạy được trong Antigravity và trả kết quả nhất quán với 2 prompt kiểm tra.
- [ ] Học viên giải thích được Skill giảm lỗi gì so với dùng Prompt thông thường.

---

## Tài Liệu Tham Khảo

- Đọc thêm về Skill: *(link từ slide trang 11)*
- File dữ liệu ERP mẫu (thực hành): *(link từ slide trang 23)*

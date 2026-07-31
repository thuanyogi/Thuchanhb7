# Session 08 — AI Agency Operations: Tư Duy Quản Trị & Kiểm Toán Hệ Thống

## Source
- `assets/source-materials/original/MindX_AG_Slide 8.pdf`

---

## Mục Tiêu Học Tập

Học viên kết thúc buổi này nắm được 3 nhóm năng lực:

| # | Nhóm | Mô tả |
|---|------|--------|
| 1 | **Kỹ năng kiểm toán hệ thống** | Xây dựng lệnh `/audit` để hệ thống tự động đánh giá, cảnh báo lỗi, và chặn điểm rò rỉ chi phí/tắc nghẽn trước khi phát sinh thực tế |
| 2 | **Tư duy quản trị AI** | Thiết kế kiến trúc AI 3 tầng (Hierarchy) — loại bỏ can thiệp thủ công vào vận hành hàng ngày để tập trung vào ra quyết định chiến lược |
| 3 | **Quy trình tự động hóa thực chiến** | Triển khai Agentic Workflow hoàn chỉnh (Google Apps Script + AI Agent): tự động xuất báo cáo, phát tín hiệu cảnh báo, thực thi cơ chế tự phục hồi (self-heal) khi gặp sự cố |

---

## Phần 1: Tư Duy Quản Trị AI

### 1.1 Kỷ Nguyên AI Operations

Ba cấp độ sử dụng AI, từ thấp đến cao:

| Cấp độ | Bản chất | Đặc điểm |
|--------|----------|-----------|
| **AI là công cụ** | Hệ thống phản hồi thụ động (hỏi–đáp) theo lệnh trực tiếp | Chỉ xử lý tác vụ rời rạc, đơn lẻ; không thể tự động hóa hoặc scale-up |
| **AI là nhân sự số** | Thực thể tự động hóa được phân quyền thực thi chuỗi tác vụ trong một workflow | Có vai trò rõ ràng, có KPI đo lường, có người giám sát |
| **AI Operations** | Khung quản lý và duy trì hoạt động toàn bộ hệ thống AI trong tổ chức | Thiết kế kiến trúc, điều phối luồng công việc giữa "nhân sự số" và con người, giám sát rủi ro; mục tiêu: tối ưu nguồn lực tạo lợi thế cạnh tranh bền vững |

### 1.2 Vấn Đề Khi Scale Up

- **1 dự án** → có thể soi thủ công, phát hiện lỗi ngay.
- **500 dự án** → bị "ngộp" dữ liệu, không thể kiểm soát thủ công.

> **Ví dụ thực tế:** Khi chạy 100 chiến dịch Content cho khách hàng, một Bot AI bị lỗi lặp (Loop) — tiêu hết $2.000 trong 1 đêm chỉ để viết đi viết lại một câu. Không có Audit → mất trắng tiền mà không hay biết.

**Tư duy cốt lõi:** Hệ thống mạnh là hệ thống chỉ cần làm việc ở Tầng 3 — tập trung vào chiến lược, không sa lầy vào vận hành.

### 1.3 Kiến Trúc 3 Tầng (Hierarchy)

Cấu trúc tổ chức để hệ thống không bị chồng chéo — mỗi tầng có vai trò và trách nhiệm riêng biệt.

```
Tầng 3 — ĐIỀU PHỐI (Coordination)
  Giám đốc: Nhìn bức tranh lớn, ký duyệt chi
  -> Ra quyết định chiến lược dựa trên báo cáo từ Tầng 2

Tầng 2 — QUẢN LÝ (Management)
  Quản đốc: Giám sát, kiểm tra chất lượng
  -> AI đóng vai "Người kiểm soát" — không tạo sản phẩm mà đảm bảo chất lượng đầu ra Tầng 1

Tầng 1 — THỰC THI (Execution)
  Công nhân: Làm việc theo lệnh, xử lý dữ liệu thô
  -> Nơi dữ liệu thô được xử lý, nền tảng của toàn bộ hệ thống
```

**Chi tiết từng tầng:**

**Tầng 1 — Thực thi:**
- Ví dụ: Google Apps Script tự động lấy Email khách hàng → gửi vào GPT để tóm tắt, không cần can thiệp thủ công.
- Rủi ro: Nếu tầng này sai (code lỗi), sẽ sai hàng loạt mà không tự dừng → cần Tầng 2 giám sát.

**Tầng 2 — Quản lý:**
- Antigravity (AI Agent) **không** đi viết content, mà đi **đọc lại** content của Tầng 1.
- Nếu phát hiện từ ngữ nhạy cảm hoặc sai định dạng → đánh dấu đỏ.
- Tự động gửi yêu cầu làm lại về Tầng 1 mà không cần con người can thiệp.
- **Mấu chốt:** Tầng này dùng "Trí tuệ" để đánh giá kết quả của "Sức lực" (Tầng 1) — ranh giới giữa hệ thống thông minh và hệ thống chỉ biết chạy theo lệnh.

**Tầng 3 — Điều phối:**
- Nhận báo cáo từ Antigravity (ví dụ: "Model Claude 3 đang tốn tiền gấp đôi GPT-4 nhưng hiệu quả chỉ ngang nhau").
- Ra quyết định: "Chuyển toàn bộ dự án sang GPT ngay lập tức để tối ưu chi phí."
- Vai trò: Sáng tạo, đưa ra chiến lược tối ưu lợi nhuận — không bị cuốn vào chi tiết vận hành.

---

## Phần 2: Kiểm Toán Hệ Thống (System Audit)

### 2.1 Bản Chất System Audit

"Khám sức khỏe" định kỳ cho cỗ máy AI — phát hiện sớm trước khi sự cố xảy ra.

| Loại Audit | Câu hỏi kiểm tra | Mục tiêu |
|------------|-----------------|----------|
| **Cost Audit** | Tiền có đang bị rò rỉ không? | Phát hiện chi phí bất thường và lãng phí |
| **Quality Audit** | Kết quả AI trả về có đúng yêu cầu (Prompt) không? | Đảm bảo đầu ra đạt tiêu chuẩn cam kết với khách hàng |
| **Performance Audit** | Hệ thống có đang bị chậm ở bước nào không? | Xác định bottleneck và tối ưu tốc độ xử lý |

### 2.2 Các Điểm Mù & Điểm Tắc Nghẽn

Những nơi lỗi thường ẩn nấp mà mắt thường khó thấy:

```
Nhập dữ liệu -> Tiền xử lý (nhanh) -> Tạo nội dung -> Sinh kết quả tự động
-> [BOTTLENECK] Duyệt thủ công (chậm) -> Xử lý AI -> Kiểm tra chất lượng -> Đánh giá & sửa lỗi
```

- Bước 1–4 chạy rất nhanh, nhưng Bước 5 (Duyệt kết quả) phải chờ con người làm thủ công.
- Dữ liệu bị "tắc" tại đây → làm chậm toàn bộ tiến độ.
- **Audit giúp tìm ra và tự động hóa bước bottleneck này.**

### 2.3 Monitoring vs Auditing

| | Monitoring (Giám sát) | Auditing (Kiểm toán) |
|---|---|---|
| **Ví von** | Cái nhiệt kế — chỉ báo con số, không giải thích nguyên nhân | Bác sĩ — phán đoán nguyên nhân và đưa ra giải pháp cụ thể |
| **Ví dụ** | "Hôm nay tốn 1 triệu Token." | "1 triệu Token này bị lãng phí do Prompt quá dài và dư thừa thông tin." |
| **Cho bạn biết** | Điều gì đang xảy ra | Tại sao và phải làm gì |

> **Kết luận:** Monitoring là điều kiện **cần**, Auditing là điều kiện **đủ** để vận hành Agency AI chuyên nghiệp.

### 2.4 Xây Dựng Lệnh /audit

Tích hợp tính năng kiểm toán vào quy trình hàng ngày — biến Audit từ công việc thủ công thành tự động hoàn toàn.

| Bước | Hành động | Kết quả |
|------|-----------|---------|
| 1 | Gõ `/audit` trong File dữ liệu | Kích hoạt lệnh kiểm toán tức thì — không cần mở công cụ nào khác |
| 2 | Hệ thống quét dòng dữ liệu | Tự động phân tích toàn bộ dữ liệu dự án trong vài giây |
| 3 | Tô màu đỏ dự án lỗ | Trực quan hóa ngay lập tức những dự án đang gây thiệt hại tài chính |
| 4 | Gửi báo cáo | Tổng hợp thiệt hại và gửi cảnh báo ngay — không bỏ sót sự cố nào |

### 2.5 Agentic Auditing

Dùng AI có khả năng suy luận để kiểm tra logic — giải pháp chống **Hallucination** trong môi trường Agency chuyên nghiệp.

- Nếu AI thứ nhất "nói dối" (Hallucination), **Audit Agent** sẽ chặn kết quả đó lại, không cho gửi đi → bảo vệ uy tín của người thực hiện.

### 2.6 Triggers & Real-time Alert

**Tầm quan trọng:** Báo động ngay khi có sự cố — không đợi đến cuối tháng mới phát hiện thiệt hại.

> **Kịch bản nguy hiểm:** Nhân viên vô tình sửa nhầm công thức trong Sheet → chi phí nhảy lên $10.000. Nếu đợi đến cuối tháng mới Audit → Agency phá sản.

**On-Edit Trigger cứu nguy:** Ngay giây phút nhân viên nhấn Enter, mail cảnh báo đã "bay" thẳng vào Email — phản ứng trong tích tắc.

| Chỉ số | Giá trị | Ý nghĩa |
|--------|---------|---------|
| Thời gian phản ứng | 0s | Cảnh báo gửi ngay khi phát hiện bất thường |
| Giám sát | 24/7 | Hoạt động không ngừng, kể cả khi đang ngủ |
| Tự động hóa | 100% | Không cần con người can thiệp vào quy trình cảnh báo |

### 2.7 Hệ Thống Tự Chữa Lành (Self-Heal)

AI tự đưa ra giải pháp xử lý sự cố mà không cần hỏi sếp — cấp độ vận hành cao nhất của AI Agency.

```
1 - Phát hiện sự cố
    Antigravity phát hiện API của OpenAI bị sập lúc 2 giờ sáng.

2 - Tự quyết định
    Thay vì báo lỗi và dừng hệ thống, AI tự phân tích phương án thay thế.

3 - Chuyển hướng tự động
    Tự động chuyển dòng dữ liệu sang API của Anthropic (Claude) để đảm bảo không gián đoạn.

4 - Báo cáo sáng hôm sau
    "Đêm qua OpenAI sập, tôi đã tự chuyển sang Claude, mọi thứ vẫn ổn."
```

### 2.8 Bảo Mật Thông Tin Trong Vận Hành AI

Bảo vệ tài sản lớn nhất — Dữ liệu & API Keys là nền tảng của toàn bộ hoạt động kinh doanh.

| Nguyên tắc | Nội dung |
|-----------|---------|
| Không bao giờ Hard-code API Key | Không nhúng API Key trực tiếp vào file Sheet hay code. Dùng biến môi trường hoặc công cụ quản lý bảo mật chuyên dụng |
| Hậu quả nếu lộ API Key | Kẻ xấu có thể dùng chùa tiền để chạy dự án của họ — thiệt hại tài chính không thể lường trước |
| Audit bảo mật định kỳ | Audit phải quét xem có ai đang dùng trộm API của công ty — phát hiện sớm để ngăn chặn kịp thời |

---

## Demo: Hệ Thống Kiểm Toán Dự Án AI (AI Project Audit Center)

### Bối Cảnh

CEO của một AI Agency quản lý **500 dự án** cùng lúc. Dữ liệu chi phí và hiệu quả được cập nhật liên tục vào Google Sheet bởi đội ngũ thực thi (Tầng 1).

### Thử Thách (Đề bài Demo)

Thiết lập "Trợ lý Quản lý AI" (Antigravity) ở Tầng 2 thực hiện lệnh `/audit` để:

1. **Quét toàn bộ hệ thống:** Tìm dự án "đốt tiền" nhưng hiệu quả kém (Chi phí > $2.000 **VÀ** Điểm hiệu quả < 4).
2. **Báo động thị giác:** Tự động tô màu đỏ các dòng lỗi.
3. **Chẩn đoán bệnh:** Đưa ra lời khuyên cụ thể cho từng lỗi (ví dụ: "Tắc nghẽn Prompt", "Rò rỉ ngân sách").
4. **Báo cáo tức thì:** Gửi Email kèm link file ngay khi phát hiện sự cố (Real-time).

### Công Cụ Sử Dụng

| Tầng | Công cụ | Vai trò |
|------|---------|---------|
| Tầng 1 — Dữ liệu | **Google Sheets** (500+ dòng) | Cột H: `API_Cost_USD`, Cột O: `Efficiency_Score`. Dữ liệu cập nhật theo thời gian thực |
| Tầng 1 — Hành động | **Google Apps Script** (JavaScript) | Tô màu ô, ghi dữ liệu, gửi email, tạo trigger theo lịch hoặc sự kiện |
| Tầng 2 — Trí tuệ | **Antigravity (AI Agent)** | Nhận yêu cầu ngôn ngữ tự nhiên, tự động viết code, lập kế hoạch và thực thi tác vụ phức tạp |

### Quy Trình Demo — 5 Bước

**Bước 1 — Chuẩn Bị Dữ Liệu (Tầng thực thi)**
- Sử dụng file Google Sheet có sẵn 500 dòng data.
- Xác định cột mục tiêu: `API_Cost_USD` → Cột H.
- Xác định cột hiệu quả: `Efficiency_Score` → Cột O.
- Cột U dành để ghi lời khuyên tự động.

**Bước 2 — Tạo Skill & Prompt Mẫu cho Antigravity (Tầng quản lý)**
- Câu lệnh tham vấn chuyên gia:
  > "Hãy viết code Google Apps Script để kiểm toán file Sheet này, đây là link file: [link]. Nếu Cost > 2000 và Score < 4, hãy tô đỏ, ghi lời khuyên vào cột U và gửi mail báo cáo kèm link file cho tôi."
- Antigravity phân tích yêu cầu → tự động tạo ra toàn bộ đoạn mã cần thiết.

**Bước 3 — Triển Khai Code**
- Vào `Extensions → Apps Script` trong Google Sheets.
- Dán mã do Antigravity cung cấp.
- Thay địa chỉ Email cá nhân vào biến `email` trong code.

**Bước 4 — Thiết Lập Trigger 24/7**
- Bấm **Run** lần đầu để cấp quyền truy cập Google Account (đọc/ghi Sheet + gửi Email).
- Vào mục **Triggers** (biểu tượng đồng hồ) → Tạo trình kích hoạt mới → Chọn sự kiện **On Edit** → hệ thống báo động tức thì khi có dữ liệu mới.

**Bước 5 — Tác Vụ Agent Nâng Cao** *(chỉ AI Agent mới làm được)*

| Tác vụ | Mô tả |
|--------|-------|
| Tự động tạo Action Plan | Antigravity tạo Tab mới trong Sheet với kế hoạch hành động chi tiết cho từng dự án có vấn đề (người phụ trách, deadline, giải pháp đề xuất) |
| Infographic vinh danh Leader | Thiết kế Infographic tự động vinh danh Leader xuất sắc nhất dựa trên dữ liệu online (hiệu suất cao, chi phí tối ưu) |
| Xuất báo cáo PDF | Tự động xuất PDF chuyên nghiệp từ dữ liệu phân tích (có logo, bảng tổng hợp, biểu đồ — sẵn sàng gửi ban lãnh đạo) |

---

## Thực Hành: Kiểm Toán Tài Nguyên AI (AI Resource Audit)

### Tình Huống

Công ty đang sử dụng nhiều tài nguyên AI (GPT-5, Claude 4...). Có file log 1.000 dòng ghi lịch sử sử dụng của nhân viên. Nhiệm vụ: xây dựng hệ thống kiểm toán tự động báo cáo cho các bộ phận: Tài chính, Kỹ thuật, và Giám đốc.

### Tác Vụ 1 — Xây Dựng Bộ Não (AI Skill Building)

Tạo file `audit_skill_student.md` để huấn luyện AI:

> Tư duy trước khi viết: "Nếu thuê một nhân sự AI về làm kiểm toán, mình sẽ dặn nó những gì?"

File Markdown phải định nghĩa đầy đủ:
- **Vai trò:** AI là Chuyên gia kiểm soát chi phí.
- **Tiêu chuẩn:** Cost > $100 → "Nguy hiểm"; Token > 1 triệu → "Cần tối ưu".
- **Hành động:** Khi thấy lỗi phải đề xuất giải pháp cụ thể.

Ví dụ giải pháp đề xuất:
- Cost > $100 tại nhân viên X → "Chuyển từ GPT-4 sang GPT-3.5 để tiết kiệm ~70% chi phí"
- Token > 1 triệu → "Rút ngắn prompt, dùng kỹ thuật chunking để giảm token tiêu thụ"

### Tác Vụ 2 — Lập Trình Báo Cáo (Google Apps Script)

Viết code tự động trích xuất dữ liệu ra 2 Sheet mới:

| Sheet | Nội dung | Kỹ thuật |
|-------|----------|---------|
| `High_Spenders` | Liệt kê người tiêu > $100 — 3 cột: User_ID, Model, Cost | Dùng Arrays để lọc dữ liệu |
| `Model_Summary` | Tính tổng chi phí theo từng loại Model AI (GPT-5, Claude 4...) | Dùng Objects để tích lũy tổng theo `Model_Name` |

Định dạng bắt buộc:
- Tô màu đỏ cho tiêu đề báo cáo.
- Tự động căn chỉnh độ rộng cột (`autoResizeColumns`).
- In đậm header và freeze hàng đầu.
- Thiết lập **Trigger On Edit** để hệ thống tự chạy khi có dữ liệu mới.

### Tác Vụ 3 — Thông Báo Đa Kênh (Multi-Recipient Email)

Cấu hình email:
- **To:** 2–3 email giả định (Sếp + Kế toán + Trưởng phòng Kỹ thuật)
- **CC:** Email cá nhân của học viên
- **Subject:** `Báo cáo Kiểm toán AI Resource — [Ngày tháng]`

Nội dung email bắt buộc phải có:
- Tổng số tiền thất thoát (tính từ `High_Spenders`)
- Link trực tiếp dẫn tới file Google Sheet
- File cứng đính kèm
- Danh sách Top nhân viên chi tiêu cao nhất
- Model AI nào đang tốn kém nhất
- Đề xuất hành động tiết kiệm chi phí

### Tiêu Chuẩn Hoàn Thành

- [ ] Dữ liệu được lọc sạch, báo cáo trình bày gọn gàng, có màu sắc chuyên nghiệp.
- [ ] Email gửi thành công tới đúng các địa chỉ yêu cầu.
- [ ] Học viên giải thích được sơ đồ phân cấp (Hierarchy) trong hệ thống vừa xây dựng.

---

## Artifact Học Viên Tạo Ra

| File | Mô tả |
|------|-------|
| `audit_skill_student.md` | Định nghĩa vai trò, tiêu chuẩn và hành động của AI kiểm toán |
| Google Sheet | Chứa dữ liệu, code Apps Script, Sheet `High_Spenders`, Sheet `Model_Summary` |
| Email báo cáo | Gửi đúng To/CC với đầy đủ nội dung yêu cầu |

---

## Bài Tập Về Nhà: Kiểm Toán Hiệu Suất Đa Kênh

### Yêu Cầu Dữ Liệu

Học viên tự tìm hoặc tạo bộ dữ liệu **ít nhất 200 dòng** về Chiến dịch Marketing hoặc Kinh doanh, bao gồm các cột: Tên, Chi phí, Doanh thu/Kết quả.

### Nhiệm Vụ Thực Hiện

| Nhiệm vụ | Chi tiết |
|---------|---------|
| **Audit** | Tự động tô đỏ các dòng có hiệu suất kém (Doanh thu < Chi phí) |
| **Report** | Trích xuất các dòng hiệu suất cao ra Sheet riêng tên `Top_Performance` |
| **Notify** | Gửi 1 Email báo cáo tổng hợp cho 2 người sếp và CC cho chính mình (kèm link file) |

### Nhiệm Vụ Tư Duy

Tạo file `audit_logic.md` định nghĩa vai trò và các quy tắc để AI tự động đánh giá dữ liệu này.

### Nộp Bài

- Link file Google Sheet chứa Code và Dữ liệu.
- File Skill AI (`audit_logic.md`).

---

## Bài Giữa Kỳ

- Hoàn thành bài test giữa kỳ theo link được cung cấp.
- Chiếm **10% trọng số điểm toàn khóa**.
- Bắt buộc hoàn thành để **đủ điều kiện tham gia Project cuối khóa**.

---

## Validation — Kiểm Tra Kết Quả Buổi Học

- [ ] Học viên trình bày được sự khác biệt giữa Monitoring và Auditing.
- [ ] Học viên vẽ/giải thích được kiến trúc 3 tầng (Hierarchy) với ví dụ thực tế.
- [ ] Có file `audit_skill_student.md` với đủ vai trò, tiêu chuẩn và hành động.
- [ ] Code Apps Script chạy được: lọc dữ liệu ra 2 Sheet, tô màu, gửi email.
- [ ] Trigger On Edit hoạt động — hệ thống tự chạy khi có dữ liệu mới.
- [ ] Email gửi thành công đúng To/CC với nội dung đầy đủ 6 mục yêu cầu.
- [ ] Học viên giải thích được sơ đồ phân cấp trong hệ thống vừa xây dựng.

---

## Ghi Chú Giảng Viên

- **Tổng kết Phần 1:** Nhấn mạnh tư duy "chỉ làm việc ở Tầng 3" — mục tiêu của toàn khóa học.
- **Demo:** Chạy thực tế trên Google Sheet 500 dòng, để học viên thấy tô màu và nhận email trực tiếp.
- **Bước 5 Demo (Agent nâng cao):** Có thể demo nhanh Action Plan auto-create — đây là WOW moment của buổi học.
- **Điểm cần nhấn:** Agentic Auditing chống Hallucination — đây là điểm khác biệt so với dùng AI thông thường.
- **Bảo mật:** Nhắc học viên không bao giờ hard-code API Key; kiểm tra ngay trong file thực hành.

---

*Nguồn: `assets/source-materials/original/MindX_AG_Slide 8.pdf` — 35 trang*

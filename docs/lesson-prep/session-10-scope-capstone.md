# Session 10 – Quy Hoạch Kiến Trúc & Xây Dựng Hệ Thống AI Cho Công Việc Thực Tế

## Source
- `assets/source-materials/original/MindX_AG_Lesson 10.pdf` (30 trang)

---

## Mục Tiêu Học Tập

Cuối buổi học, học viên phải nắm được:

1. **Tư duy kiến trúc sư hệ thống** — làm chủ phương pháp SCOPE để phân rã quy trình nghiệp vụ phức tạp.
2. **Thiết kế kỹ thuật hệ thống** theo mô hình 7 thành tố.
3. **Đóng gói bộ kỹ năng, tri thức và quy tắc** vận hành an toàn.
4. Hiểu barem điểm và khởi động dự án cuối khóa.

---

## Phần 1: Tư Duy Kiến Trúc Sư Hệ Thống

### Vấn đề: Sự tự phát của AI trong doanh nghiệp

Khi thiếu quy hoạch kiến trúc, hệ thống AI gặp 4 rủi ro nghiêm trọng:

| Rủi ro | Mô tả |
|--------|-------|
| ⚠️ Dữ liệu đầu vào hỗn loạn | Dữ liệu thô từ đối tác gửi về lộn xộn, sai định dạng, trống ô (Null), nhập sai cột — không có cơ chế kiểm soát |
| 🤖 AI Hallucination | Ném dữ liệu bẩn cho AI → AI xử lý sai, đưa ra kết quả ảo giác hoặc ghi đè dữ liệu rác vào Database nội bộ |
| 🔢 Sai lệch số liệu tài chính | AI tính toán số học bằng ngôn ngữ tự nhiên → Dễ bị sai lệch số liệu lớn, gây thiệt hại nghiêm trọng |
| 💥 Hệ thống sập hoàn toàn | Khi gặp file hỏng hoặc giá trị không hợp lệ → Hệ thống Crash, con người phải dọn dẹp thủ công |

### Giải pháp: Mô hình Agentic Workspace tự phòng thủ

**Định nghĩa Agentic Workspace:**
> Một không gian làm việc số khép kín, nơi các AI Agent chuyên biệt được phân cấp nhiệm vụ rõ ràng và phối hợp hành động tự trị thông qua các quy tắc bàn giao nghiêm ngặt.

Hai nguyên lý nền tảng:

- **🛡️ Nguyên lý chống nhiễm độc dữ liệu:** Tách biệt hoàn toàn dữ liệu đầu vào thô chưa kiểm chứng và cơ sở dữ liệu cốt lõi. Không bao giờ để dữ liệu bẩn chạm vào hệ thống nội bộ.
- **🔄 Khả năng tự chữa lành (Self-Healing):** Khi phát hiện lỗi, AI không dừng mà tự động cách ly dòng lỗi, lập báo cáo sự cố và soạn email phản hồi đối tác yêu cầu hiệu chỉnh.

---

## Phần 2: Phương Pháp Phân Rã Nghiệp Vụ — Khung SCOPE

> Bộ khung 5 bước bắt buộc trước khi triển khai bất kỳ hệ thống AI nào.

| Ký tự | Thành phần | Nội dung |
|-------|-----------|---------|
| **S** | Situation | Mô tả hiện trạng quy trình, phòng ban liên quan và điểm nghẽn thời gian |
| **C** | Constraints | Xác định dữ liệu rác thường gặp, giới hạn bảo mật và hạn mức chi tiêu |
| **O** | Objectives | KPI định lượng rõ ràng (VD: Giảm từ 3 ngày xuống 3 phút) |
| **P** | Process | Bản vẽ sơ đồ luồng thông tin từ đầu vào đến đầu ra |
| **E** | Evaluation | Tiêu chuẩn kiểm toán kết quả đầu ra, đảm bảo độ chính xác 100% |

### Chi tiết từng bước

**📍 S – Situation: Phân Tích Bối Cảnh & Điểm Đau**

Câu hỏi cần trả lời:
- Quy trình hiện tại đang làm thủ công mất bao nhiêu giờ?
- Ai đang là người quá tải trong quy trình?
- Dữ liệu đang nằm rải rác ở kênh nào? (Zalo, Excel, Drive…)
- Điểm nghẽn thời gian lớn nhất nằm ở bước nào?

**🚧 C – Constraints: Phòng Chống Rác Đầu Vào**

Câu hỏi cần trả lời:
- Dữ liệu đối tác gửi đến thường bị lỗi gì? (Cột Đơn giá trống, Đơn vị tính sai quy chuẩn, file lỗi font…)
- Giới hạn ngân sách trần tối đa từng hạng mục là bao nhiêu?
- Thông tin nào tuyệt đối bảo mật, không được phép AI xử lý tự động?

> ⚠️ **Lưu ý giảng viên:** Bỏ qua bước Constraints là nguyên nhân số 1 khiến hệ thống AI bị nhiễm độc dữ liệu.

**🎯 O – Objectives: KPI phải đo lường được bằng số liệu**

- Số giờ lao động tiết kiệm được của nhân viên
- Tỷ lệ xử lý thành công không có sai sót (%)
- Thời gian phản hồi đối tác rút ngắn

**⚙️ P – Process: Phân Rã Luồng Xử Lý**

Phân rã thành 6 khối chức năng:
1. Tiếp nhận dữ liệu đầu vào
2. Lọc sạch & kiểm định
3. So khớp tri thức nội bộ
4. Xử lý sự cố & cách ly lỗi
5. Phê duyệt bởi con người
6. Bàn giao đầu ra sạch

**✅ E – Evaluation: Kiểm Toán Đầu Ra**

- Cách thức hệ thống tự kiểm tra chênh lệch số liệu
- Tính lịch sự và đầy đủ thông tin của email phản hồi lỗi gửi nhà cung cấp
- Log ghi nhận toàn bộ hành động của AI để kiểm tra lại

---

## Phần 3: Thiết Kế Kỹ Thuật Theo Mô Hình 7 Thành Tố

### Kiến trúc tổng quan

> Nguyên tắc vận hành: Bộ não AI Agent đọc hướng dẫn từ Skill → tra cứu Knowledge Base → sử dụng Tools tính toán → gửi kết quả nháp lên Human Checkpoint → xuất Output sạch.

### Chi tiết 7 thành tố

**Thành tố 1 — Input (Dữ Liệu Đầu Vào)**
- Xác định rõ tệp tin tiếp nhận: Excel, Word, CSV
- Quy chuẩn hóa danh mục tiêu đề các cột bắt buộc
- AI dễ dàng trích xuất khi cấu trúc được định nghĩa rõ ràng

**Thành tố 2 — AI Agent (Bộ Não Điều Phối)**
- Định hình **Persona** (vai trò xã hội của Agent)
- Ví dụ: *"Chuyên gia Kế toán nghiêm cẩn, tập trung phân tích logic, chi tiết và không khoan nhượng với dữ liệu rác"*
- Persona quyết định cách Agent phản ứng với mọi tình huống

**Thành tố 3 — Tools (Công Cụ Thực Thi Chuyên Dụng)**
- Không để AI tự tính toán số lớn bằng ngôn ngữ tự nhiên
- Trang bị Tool chạy code **Python (Pandas)** để xử lý dữ liệu
- **Biểu thức chính quy (Regex)** để làm sạch chuỗi ký tự

**Thành tố 4 — Knowledge (Tri Thức Tĩnh Nội Bộ)**

Là các file dữ liệu tĩnh được phê duyệt chính thức:
- Bảng định mức ngân sách trần sự kiện
- Quy chế chi tiêu nội bộ doanh nghiệp
- Danh mục nhà cung cấp được phê duyệt

> "Mỏ neo tri thức" — giúp AI luôn có căn cứ chính xác để đối chiếu thực tế, triệt tiêu hoàn toàn Hallucination.

**Thành tố 5 — Memory/Skill (Bộ Kỹ Năng Vĩnh Viễn)**

Tài liệu định dạng file Markdown (.md) cấu hình hành vi dài hạn:
- Toàn bộ kịch bản ứng phó với từng loại lỗi
- Quy định định dạng tiền tệ chuẩn
- Quy chuẩn so khớp từ ngữ đồng nghĩa (VD: "đơn vị" = "unit" = "ĐVT")
- Hành vi mặc định khi gặp dữ liệu không xác định

**Thành tố 6 — Human-in-the-Loop (HITL)**

Không để AI tự quyết định các việc rủi ro cao:
- Chi tiền vượt ngân sách đã phê duyệt
- Gửi thư từ chối đối tác lớn
- Thay đổi dữ liệu master trong hệ thống

> AI tự động gom lỗi, lập báo cáo, soạn sẵn dự thảo email. Con người chỉ cần **Approve hoặc Reject với 1 click**.

**Thành tố 7 — Output/Handoff (Đầu Ra Sạch)**
- Dữ liệu đã được kiểm định 100% độ chính xác
- Cấu trúc Handoff được quy định rõ ràng
- Hệ thống/Agent kế tiếp thừa hưởng ngay lập tức, không cần xử lý lại

### So sánh Trước & Sau khi áp dụng kiến trúc

| Tiêu chí | ❌ Trước (Không có kiến trúc) | ✅ Sau (Agentic Workspace) |
|---------|------------------------------|--------------------------|
| Dữ liệu đầu vào | Ném thẳng dữ liệu bẩn cho AI | Qua lớp Input Validation trước khi AI tiếp cận |
| Tính toán số học | AI tự tính bằng ngôn ngữ tự nhiên → Sai lệch | Python/Pandas xử lý → Chính xác 100% |
| Khi gặp lỗi | Hệ thống Crash, con người dọn dẹp thủ công | AI cách ly lỗi, tự soạn email, Self-Healing |
| Quyết định rủi ro cao | AI tự quyết định không kiểm soát | Human-in-the-Loop duyệt trước khi thực thi |
| Tri thức tham chiếu | AI bịa đặt thông tin (Hallucination) | Knowledge Base làm mỏ neo tri thức chính xác |

### Ứng dụng thực tế: Hệ thống xử lý báo giá nhà cung cấp

6 bước phối hợp 7 thành tố trong kịch bản thực tế:

1. **📥 Tiếp Nhận** — File Excel báo giá từ nhà cung cấp gửi qua email → Input Layer tiếp nhận
2. **🔍 Kiểm Định** — Regex kiểm tra định dạng, Pandas phát hiện ô trống, cột sai → Cách ly dòng lỗi
3. **📊 Đối Chiếu** — AI Agent tra cứu Knowledge Base (Bảng định mức ngân sách trần) để so sánh giá
4. **⚠️ Xử Lý Lỗi** — Nếu vượt ngân sách hoặc có lỗi → AI soạn email phản hồi, gửi lên HITL duyệt
5. **✅ Phê Duyệt** — Con người xem xét báo cáo AI soạn sẵn → Approve/Reject 1 click
6. **📤 Bàn Giao** — Dữ liệu sạch được chuẩn hóa → Handoff sang hệ thống kế toán tự động

> **Kết quả thực đo:** Giảm thời gian xử lý từ 3 ngày xuống còn 3 phút. Tỷ lệ sai sót: 0%.

---

## Phần 4: Các Kỹ Thuật Nâng Cao

### Input Validation & Prevention — Cơ Chế Lọc Rác Hai Tầng

**Tầng 1: Input Validation** — Kiểm định chất lượng dữ liệu đầu vào
- Tự động chạy bộ lọc Regex để loại bỏ ký tự lạ bẩn (đ, VND, dấu chấm/phẩy) ra khỏi trường số liệu
- Phân loại dòng dữ liệu lỗi thành 3 nhóm sự cố sống còn

**Tầng 2: Prevention** — Ngăn ngừa lỗi lây nhiễm vào hệ thống
- Cách ly toàn bộ dòng lỗi vào "Error Stack" (Vùng đệm sự cố)
- Tuyệt đối chặn, không cho phép ghi dòng lỗi vào database chính

#### 3 nhóm sự cố sống còn

| Nhóm lỗi | Định nghĩa |
|----------|-----------|
| 🚫 **LỖI_BỎ_TRỐNG** | Thiếu thông tin tại cột bắt buộc (mã hàng, tên hạng mục, đơn vị tính) |
| ⚠️ **LỖI_KIỂU_DỮ_LIỆU** | Đơn giá ghi bằng chữ thay vì số ("Liên hệ", "Thỏa thuận", "Tùy chọn") |
| ❌ **LỖI_GIÁ_TRỊ_RỖNG** | Đơn giá hoặc số lượng bằng 0 hoặc số âm — dữ liệu phi logic |

> Bất kỳ dòng nào thuộc 1 trong 3 nhóm trên đều bị cách ly ngay vào Error Stack — tuyệt đối không ghi vào database chính.

---

### Khung MICRO — Đóng Gói Nhân Sự AI Tiêu Chuẩn

Phương pháp đóng gói kỹ năng định hình chính xác năng lực, danh tính và hành vi của từng AI Agent:

| # | Ký tự | Thành phần | Nội dung |
|---|-------|-----------|---------|
| 1 | **M** | Mission (Sứ mệnh) | Mục tiêu tối cao Agent được sinh ra để giải quyết; bài toán nghiệp vụ cụ thể từ đầu đến cuối |
| 2 | **I** | Identity (Danh tính) | Đóng vai chuyên gia nào? Tính cách, tôn chỉ làm việc, phong cách giao tiếp, chuẩn mực đạo đức nghề nghiệp |
| 3 | **C** | Capabilities (Năng lực) | Công cụ kỹ thuật và kỹ năng chuyên môn được trang bị (Regex, Pandas, gọi API ngoài…) |
| 4 | **R** | Rules (Quy tắc hành vi) | Quy định nghiêm ngặt bắt buộc tuân thủ (Cấm tự ý thay đổi đơn giá, cấm phê duyệt vượt hạn mức) |
| 5 | **O** | Outputs (Kết quả đầu ra) | Định dạng báo cáo bàn giao chuẩn mực: cấu trúc cột, định dạng file, ngôn ngữ trình bày, tiêu chí chấp nhận |

---

### Tư Duy OIPO — Quy Hoạch Luồng Công Việc Tự Động

Thiết kế workflow thông suốt và kế thừa dữ liệu:

| Ký tự | Thành phần | Nội dung |
|-------|-----------|---------|
| **O** | Objective | Kết quả cuối cùng của quy trình giải quyết bài toán gì? Phải đo lường được |
| **I** | Input | Định dạng tệp tin, cấu trúc cột cần cung cấp tại điểm khởi đầu |
| **P** | Process | Phân chia nhiệm vụ, luồng thông tin qua các Agent; cài đặt nhánh điều kiện khi phát hiện lỗi |
| **O** | Output | Xuất báo cáo trạng thái hoàn thành và dữ liệu định dạng sạch, chuẩn hóa |

---

### Thiết Lập Rules theo Khung CLEAR

Viết quy tắc vận hành tường minh để AI Agent hiểu đúng, thực thi đúng, không gây hành vi ngoài ý muốn:

| Ký tự | Tiêu chí | Giải thích |
|-------|---------|-----------|
| **C** | Concise (Ngắn gọn) | Mỗi quy tắc chỉ truyền đạt một ý duy nhất, tránh viết dài dòng |
| **L** | Logical (Logic) | Có điều kiện If/Then rõ ràng. VD: "Nếu đơn giá > ngân sách trần → gắn cờ và đề xuất hành động" |
| **E** | Explicit (Rõ ràng) | Không mơ hồ, không đa nghĩa. Mỗi từ ngữ có một và chỉ một cách hiểu |
| **A** | Actionable (Khả thi) | AI có thể tự thực thi được mà không cần hỏi lại con người |
| **R** | Relevant (Liên quan) | Liên quan trực tiếp đến nghiệp vụ, phục vụ một mục tiêu nghiệp vụ cụ thể |

---

### Handoff Contract — Bàn Giao An Toàn Giữa Các Agent

- **Định nghĩa:** Thỏa thuận ngầm về cấu trúc dữ liệu giữa hai Agent.
- Nếu Agent A xuất dữ liệu không đúng schema đã cam kết → Agent B từ chối tiếp nhận và kích hoạt cảnh báo ngay lập tức.
- Xác định rõ cấu trúc dữ liệu bàn giao để tránh tình trạng trôi nổi thông tin hoặc lỗi cấu trúc làm ngắt quãng luồng tự động hóa.

---

## Demo: Event Ops Auditor Agent

### Đề bài demo

**Bối cảnh & Điểm đau:** Phòng Tổ chức Sự kiện thường xuyên nhận bảng báo giá thiết bị (âm thanh, ánh sáng, nhân sự) từ nhiều nhà cung cấp dưới dạng file Excel. Việc đối soát thủ công từng dòng đơn giá với định mức ngân sách trần rất mất thời gian. Nhà cung cấp thường gửi file lỗi định dạng (ô trống, đơn giá bằng chữ "Thương lượng", giá bằng 0) dẫn đến hệ thống đối soát thông thường bị sập hoặc ghi sai số liệu.

**Chi tiết yêu cầu hệ thống:**
1. **Đọc & So khớp tri thức:** Đọc dữ liệu từ file báo giá Nhà cung cấp (20 dòng) và so khớp tên hạng mục với bảng Ngân sách trần sự kiện để lấy định mức giá trần tương ứng.
2. **Tính toán chênh lệch:** Dùng công cụ tính toán tính chênh lệch đơn giá; gắn nhãn trạng thái: `Hợp lệ` hoặc `Vượt ngân sách`.
3. **Bộ lọc chặn lỗi chủ động (Input Validation & Prevention):** Tự động phát hiện và cách ly hoàn toàn các dòng bị lỗi đơn giá (chứa chữ, trống ô, giá trị bằng 0). Tuyệt đối không ghi dòng lỗi vào bảng đối soát cuối cùng.
4. **Tự chữa lành (Self-Healing):** Lập bảng danh sách sự cố lỗi chi tiết (số dòng, hạng mục, loại lỗi) và tự động soạn bản nháp Email phản hồi gửi nhà cung cấp, giọng văn lịch sự, liệt kê chi tiết các dòng cần điều chỉnh.

### Các bước demo (4 bước)

**Bước 1 & 2: Thiết lập bộ Skill & Spec kiến trúc**

| Bước | Hành động |
|------|----------|
| 01 | Mở GG Antigravity — chọn model phù hợp xử lý file Excel và sinh code tự động hóa |
| 02 | Nạp `Event_Automation_Skill.md` và `Event_Automation_Workspace_Spec.md` vào ngữ cảnh để Agent hiểu domain nghiệp vụ |
| 03 | Kích hoạt bộ não Agent bằng Prompt SCOPE để phân tích yêu cầu và viết Workspace Spec chi tiết |
| 04 | Xuất sơ đồ kiến trúc Mermaid theo mô hình 7 thành tố: Trigger → Input Validation → Agent Logic → Knowledge → Tools → Output Validation → Monitoring |

> Nhấn mạnh vào cơ chế "Chặn lỗi từ trong thiết kế" (Prevention) ngay từ bước viết Workspace Spec — đây là nền tảng của toàn bộ kiến trúc an toàn.

**Bước 3: Đối soát báo giá chuẩn**

Kịch bản lý tưởng — AI Agent nhận file báo giá sạch, đối soát với ngân sách trần, xuất bảng kết quả 7 cột:

- Nạp `Ngan_sach_Su_kien.xlsx` và `Bao_Gia_Chuan.xlsx` (20 dòng thiết bị)
- Agent đóng vai *"Chuyên gia Kế toán & Vận hành Sự kiện"*, quét toàn bộ dữ liệu đầu vào
- So khớp cột `Hạng mục chi tiết` của báo giá với cột `Hạng mục` trong file ngân sách
- Tính: `Chênh lệch = Đơn giá NCC - Ngân sách trần`
- Xuất bảng kết quả 7 cột chuẩn mực: `STT | Hạng mục chi tiết | Đơn giá NCC | Ngân sách trần | Chênh lệch | Trạng thái | Hành động đề xuất`

**Bước 4: Chặn dữ liệu rác & Kích hoạt Self-Heal**

Quy trình xử lý lỗi từ `Bao_Gia_Loi.xlsx`:

1. **Quét & cô lập dòng lỗi** — Quét 20 dòng, cô lập dòng có đơn giá chứa chữ "Chưa có giá", "Tùy chọn", giá trị rỗng hoặc bằng 0
2. **Chặn lỗi chủ động** — Tuyệt đối KHÔNG ghi các dòng lỗi vào danh sách duyệt chi hệ thống (nguyên tắc Prevention cốt lõi)
3. **Xuất bảng sự cố chi tiết** — Báo cáo "Danh sách sự cố dữ liệu rác": dòng nào, hạng mục nào, lỗi cụ thể
4. **Tự động soạn Email phản hồi NCC** — Giọng văn chuyên nghiệp và lịch sự, liệt kê chi tiết các dòng cần hiệu chỉnh

**Mẫu Email tự động soạn:**

```
Kính gửi: Nhà cung cấp thiết bị sự kiện
Chủ đề: Yêu cầu hiệu chỉnh báo giá — Phát hiện dữ liệu không hợp lệ

Hệ thống của chúng tôi đã tự động phát hiện [X] dòng dữ liệu trong
tệp báo giá gửi ngày [ngày] chưa đáp ứng tiêu chuẩn định dạng.
Kính đề nghị Quý đối tác xem xét và cập nhật lại các hạng mục sau:

Dòng [N]: Hạng mục [tên] — Lỗi: Đơn giá chứa ký tự không hợp lệ
Dòng [M]: Hạng mục [tên] — Lỗi: Giá trị rỗng / bằng 0

Trân trọng cảm ơn sự hợp tác của Quý đối tác.
```

---

## Tổng Kết — 3 Bài Học Đắt Giá

> Kiến trúc sư Giải pháp Agentic AI cấp cao tổng hợp từ việc so sánh thiết kế kiến trúc 7 thành tố với việc chỉ viết code tự động hóa thông thường:

| # | Bài học | Nội dung |
|---|---------|---------|
| 1 | **Kiến trúc thắng Code** | Mô hình 7 thành tố tạo ra hệ thống có thể kiểm tra, mở rộng và bảo trì. Khi một thành tố hỏng, biết chính xác nơi cần sửa — điều mà code tự động hóa thông thường không thể làm được |
| 2 | **Prevention là đầu tư, không phải chi phí** | Chặn lỗi tại cửa ngõ tiết kiệm gấp 10 lần so với xử lý hậu quả sau khi dữ liệu bẩn lan vào database chính. Một dòng dữ liệu rác có thể gây hàng loạt báo cáo sai, quyết định sai và tổn thất tài chính thực sự |
| 3 | **Handoff Contract là xương sống của Multi-Agent** | Trong hệ thống nhiều Agent, thỏa thuận cấu trúc dữ liệu giữa các Agent quan trọng hơn bất kỳ thuật toán nào. Không có Handoff Contract rõ ràng, luồng tự động hóa sẽ vỡ tại điểm giao tiếp — và lỗi này cực kỳ khó debug trong môi trường production |

> **Công thức:** Mô hình 7 thành tố + CLEAR Rules + MICRO Agent Packaging = Hệ thống Agentic AI ổn định, an toàn và sẵn sàng cho doanh nghiệp lớn.

---

## Thực Hành — Khởi Động Dự Án Cuối Khóa

### Đề bài: HR TalentOps Agentic System

**Tên đề tài:** Hệ thống Tự động hóa Tuyển dụng & Đánh giá Ứng viên tự động.

**Bối cảnh & Điểm đau:** Bộ phận Tuyển dụng (HR) bị quá tải khi tiếp nhận hàng trăm CV mỗi tuần cho nhiều vị trí khác nhau. Quy trình lọc CV thủ công mất 3–5 ngày, gửi bài test bị chậm trễ, dẫn đến tỷ lệ ứng viên tự bỏ ngang quy trình tuyển dụng tăng cao (lên tới 25%).

**Chi tiết yêu cầu hệ thống:**

1. **Tiếp nhận & Sàng lọc CV sơ bộ:** Thiết lập Agent tiếp nhận file CV, trích xuất thông tin chính (kinh nghiệm, kỹ năng, học vấn), đối chiếu với JD trong kho tri thức để chấm điểm và đánh giá độ phù hợp sơ bộ.

2. **Tự động hóa bài kiểm tra năng lực:** Ứng viên vượt qua vòng lọc CV → hệ thống tự động gửi email đính kèm đề test. Khi ứng viên nộp bài, Agent tự động đọc bài làm, chấm điểm dựa trên đáp án mẫu và quy chế chấm điểm trong tri thức.

3. **Human Checkpoint (HITL):** Hệ thống tổng hợp hồ sơ ứng viên đạt điểm test vào bảng báo cáo gửi HR Manager để duyệt bước tiếp theo (gọi phỏng vấn hoặc từ chối).

4. **Bàn giao & Giao tiếp (Output):** Dựa trên quyết định phê duyệt của HR Manager, hệ thống tự động soạn email gửi cho ứng viên (Thư mời phỏng vấn kèm lịch hẹn hoặc Thư cảm ơn/từ chối lịch sự).

---

## Assignment

**BTVN: Chuẩn bị dự án cuối khóa**

- Đọc đề bài cuối khóa (link được cung cấp trong lớp)
- Áp dụng khung SCOPE để phân tích bài toán của nhóm
- Phác thảo kiến trúc 7 thành tố cho hệ thống của nhóm
- Xác định Handoff Contract giữa các Agent
- Chuẩn bị để trình bày tại buổi 11

---

## Validation

- [ ] Học viên viết được phân tích SCOPE cho bài toán thực tế (đủ 5 thành phần S-C-O-P-E)
- [ ] Thiết kế được sơ đồ kiến trúc 7 thành tố (đủ: Input, Agent, Tools, Knowledge, Skill, HITL, Output)
- [ ] Có Input Validation với ít nhất 3 nhóm lỗi được xử lý
- [ ] Có Human Checkpoint rõ ràng cho ít nhất 1 quyết định rủi ro cao
- [ ] Viết được Skill file theo khung MICRO (đủ 5 thành phần M-I-C-R-O)
- [ ] Viết được ít nhất 3 Rules theo khung CLEAR
- [ ] Handoff Contract được định nghĩa rõ ràng giữa các Agent
- [ ] Demo Event Ops Auditor Agent chạy được cả luồng bình thường và luồng lỗi

---

## Tài Liệu Tham Khảo

- Source PDF: `assets/source-materials/original/MindX_AG_Lesson 10.pdf`
- Lesson prep guide: `docs/instructor/facilitator-guide.md`

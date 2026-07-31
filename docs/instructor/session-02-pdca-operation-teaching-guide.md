# Buổi 2 — Vận Hành & Tối Ưu Agentic Workspace Qua PDCA: Hướng Dẫn Giảng Dạy Chi Tiết

> **Phase 1 — Operate | Buổi 2 của 11**
> **Chủ đề:** Agentic AI là gì + PDCA (Plan-Do-Check-Act) + Thực hành phân tích dữ liệu kinh doanh
> **Thời lượng:** 3 giờ | **Artifact đầu ra:** File Excel dashboard đã phân tích + Insight 3 điểm
> **Prompt pack:** Riêng: chưa có — dùng các prompt mẫu ngay trong guide này

---

## 1. Mục Tiêu Buổi Học

| # | Mục tiêu (từ slide) | Cách kiểm tra |
|---|---------------------|---------------|
| 1 | **Hiểu và áp dụng mô hình PDCA** — Plan/Do/Check/Act vào công việc hàng ngày | Học viên mô tả được 4 bước PDCA không nhìn slide, trả lời đúng 3 câu hỏi Plan |
| 2 | **Cài đặt và làm quen Antigravity** — giao diện, workspace, cách tương tác với AI | Học viên mở được Antigravity, tạo workspace mới, gửi prompt đầu tiên thành công |
| 3 | **Vận dụng AI xử lý trọn vẹn 1 luồng công việc** — làm sạch dữ liệu → phân tích → Dashboard → Insight | File Excel có dashboard, 3 insight, ít nhất 1 lần sửa prompt (PDCA Act) |

---

## 2. Cấu Trúc 3 Giờ

```
10 phút  → Khai mạc & Recap buổi 1 + Quiz nhanh + Vấn đề thực tế
20 phút  → Phần 1 — Agentic AI là gì? + Workflow AI 3 thành phần
40 phút  → Phần 2 — PDCA từng bước chi tiết + 3 câu hỏi Plan + Triết lý Act
10 phút  → Break / Checkpoint nhanh
70 phút  → Phần 3 — Demo + Thực hành Business Analyst theo PDCA
10 phút  → BTVH + Tổng kết
```

---

## 3. Khai Mạc (10 phút)

### 3.1 Recap buổi 1 — Quiz nhanh (4 phút)

Hỏi nhanh học viên (không mở slide, kiểm tra trí nhớ):
- "Antigravity là gì? Khác ChatGPT thông thường ở điểm nào?"
- "Buổi 1 chúng ta đã có workspace và chạy kịch bản mẫu `/onboard-new-user` — workflow đó đã làm những gì? Kết quả nằm ở đâu?"
- "Agentic AI — bạn nghe thấy chưa? Hiểu sơ bộ như thế nào?"

Ghi lên bảng các từ khóa học viên đưa ra. Sau đó dẫn dắt:
> "Buổi 1 các bạn đã có workspace đầu tiên và tự tay chạy được kịch bản mẫu. Buổi hôm nay chúng ta sẽ học **cách dùng thật sự** — có một phương pháp cụ thể gọi là PDCA để biến AI thành công cụ thực chiến."

### 3.2 Mở đầu bằng vấn đề thực tế (3 phút)

Hỏi cả lớp:
> "Trong công việc hàng ngày, bạn đang làm thủ công cái gì mà cảm thấy tốn thời gian và không chắc chắn?"

Ghi lên bảng. Ví dụ thường gặp:
- Tổng hợp báo cáo bán hàng từ nhiều sheet
- Phân loại đơn hàng theo khu vực
- Viết email tóm tắt số liệu cho sếp
- Làm sạch dữ liệu khách hàng (trùng, sai format)

Sau đó nói:
> "Hôm nay chúng ta sẽ giải quyết bài toán tương tự — một Business Analyst nhận file dữ liệu bán hàng và dùng AI để làm toàn bộ quy trình. Và bạn sẽ làm được điều đó trước khi rời khỏi lớp hôm nay."

### 3.3 Giới thiệu artifact đầu ra (3 phút)

Chiếu demo nhanh file Excel đã hoàn chỉnh (kết quả mẫu của giảng viên):
- Sheet Dashboard có biểu đồ: Doanh thu theo thời gian, Top sản phẩm, So sánh khu vực
- Sheet Insight với 3 nhận xét phân tích
- Sheet Đề xuất với 2 hành động cụ thể

Nói rõ:
- Cuối buổi: mỗi học viên có 1 file Excel tương tự — do AI tạo ra, qua hướng dẫn của bạn
- File này sẽ là nền tảng cho bài tập về nhà và các buổi sau

---

## 4. Phần 1 — Agentic AI Là Gì? (20 phút)

### 4.1 Vấn đề với AI thông thường (5 phút)

**Dẫn dắt:** Chiếu slide so sánh

| AI Thông Thường (ChatGPT cơ bản) | Agentic AI (Antigravity) |
|----------------------------------|--------------------------|
| Bạn hỏi → AI trả lời → Bạn phải tự làm tiếp | Bạn giao mục tiêu → AI tự lập kế hoạch & thực hiện |
| Trả lời từng bước khi được hỏi | Tự chạy nhiều bước liên tiếp không cần nhắc |
| Chỉ tạo văn bản | Tạo file, viết code, phân tích dữ liệu, gọi tool |
| Bạn phải biết hỏi từng bước | Bạn chỉ cần mô tả kết quả mong muốn |

**Câu hỏi kích thích:**
> "Nếu bạn thuê một nhân viên mới — bạn muốn giải thích từng bước mỗi ngày, hay muốn giao mục tiêu và họ tự tìm cách làm?"

### 4.2 Agentic AI = AI Có Khả Năng Tự Thực Hiện End-to-End (8 phút)

**Định nghĩa cốt lõi:**
> **Agentic AI** = AI có khả năng tự thực hiện nhiệm vụ từ đầu đến cuối theo 4 bước:
> **Hiểu mục tiêu → Lập kế hoạch → Thực hiện → Trả kết quả**

**Ẩn dụ dễ nhớ:**
- AI thông thường = Máy tính cầm tay: bạn nhập từng phép tính
- Agentic AI = Kế toán giỏi: bạn đưa bảng dữ liệu, họ tự làm báo cáo xong rồi trả lại

**Ví dụ cụ thể — cùng yêu cầu, kết quả khác nhau:**

*Yêu cầu:* "Phân tích file dữ liệu bán hàng tháng 6 và làm dashboard"

| AI thông thường | Agentic AI |
|-----------------|------------|
| "Bạn cần làm gì với dữ liệu? Gửi file cho tôi xem." | Đọc file → phát hiện cột cần làm sạch → làm sạch → tính tổng → vẽ biểu đồ → viết insight → xuất file Excel hoàn chỉnh |
| Dừng lại sau mỗi câu trả lời | Tự chạy đến khi có kết quả cuối cùng |

**Lưu ý giảng viên:** Nhấn mạnh đây không phải "phép màu" mà là do thiết kế — Antigravity có tool và quyền truy cập file. Học viên cần hiểu cơ chế để dùng đúng.

### 4.3 Workflow AI 3 Thành Phần (7 phút)

**Mô hình cơ bản — mọi task AI đều có 3 phần:**

```
INPUT (Dữ liệu)  →  TASK (Nhiệm vụ)  →  OUTPUT (Kết quả)
```

| Thành phần | Định nghĩa | Ví dụ buổi hôm nay |
|-----------|-----------|-------------------|
| **INPUT** | Dữ liệu / thông tin bạn cung cấp cho AI | File Excel bán hàng thô (nhiều cột, có lỗi) |
| **TASK** | Nhiệm vụ bạn giao cho AI — càng rõ càng tốt | "Làm sạch dữ liệu, tính doanh thu theo tháng và khu vực, vẽ biểu đồ" |
| **OUTPUT** | Kết quả AI tạo ra — cần định nghĩa trước | File Excel mới: sheet Dashboard + sheet Insight |

**Lỗi hay gặp nhất:**
- INPUT thiếu → AI không có đủ dữ liệu để làm
- TASK mơ hồ → AI làm sai hoặc làm thiếu
- OUTPUT không định nghĩa → nhận được thứ không dùng được

**Câu hỏi thực hành nhanh (2 phút):**
> "Cho ví dụ: INPUT là gì, TASK là gì, OUTPUT bạn muốn nhận là gì — từ công việc thực tế của bạn?"

Cho 2-3 học viên chia sẻ, giảng viên nhận xét nhanh từng phần.

---

## 5. Phần 2 — PDCA: Phương Pháp Vận Hành AI Hiệu Quả (40 phút)

### 5.1 Tại Sao Cần PDCA? (5 phút)

**Dẫn dắt bằng câu chuyện thực tế:**
> "Hầu hết mọi người dùng AI theo kiểu: gõ prompt → đọc kết quả → không hài lòng → thử lại ngẫu nhiên → vẫn không đúng → bỏ cuộc. Đây là dùng AI theo kiểu 'ném đá dò đường' — tốn thời gian, kết quả không ổn định."

**PDCA giải quyết vấn đề đó:**

| Không có PDCA | Có PDCA |
|--------------|---------|
| Thử ngẫu nhiên, không biết sửa chỗ nào | Biết chính xác điểm cần cải thiện |
| Kết quả phụ thuộc may rủi | Kết quả cải thiện theo từng vòng lặp |
| Lần sau vẫn lặp lại lỗi cũ | Tích lũy kinh nghiệm, prompt ngày càng tốt hơn |
| Không biết khi nào là "đủ tốt" | Có tiêu chí Check rõ ràng để dừng |

**Nguồn gốc PDCA:**
> PDCA (Deming Cycle) — phương pháp cải tiến liên tục trong quản lý chất lượng, nay áp dụng hoàn hảo vào vòng lặp làm việc với AI.

### 5.2 PLAN — Lên Kế Hoạch Trước Khi Giao AI (10 phút)

**Nguyên tắc vàng:**
> "Nếu bạn không biết mình muốn gì, AI cũng không biết làm gì."

**3 câu hỏi bắt buộc trong bước PLAN:**

```
Câu hỏi 1: MỤC TIÊU LÀ GÌ?
→ Tôi muốn đạt được điều gì sau khi AI hoàn thành?

Câu hỏi 2: OUTPUT MONG MUỐN?
→ Kết quả cụ thể trông như thế nào? (File? Bảng? Văn bản? Số liệu?)

Câu hỏi 3: DỮ LIỆU CẦN GÌ?
→ AI cần thông tin gì để làm được? Tôi đã có chưa? Thiếu gì?
```

**Ví dụ áp dụng 3 câu hỏi — Business Analyst phân tích bán hàng:**

| Câu hỏi | Ví dụ trả lời |
|---------|---------------|
| Mục tiêu là gì? | Hiểu xu hướng doanh thu tháng 6, tìm sản phẩm bán chạy nhất và khu vực hiệu quả nhất |
| Output mong muốn? | File Excel: sheet Dashboard (3 biểu đồ) + sheet Insight (3 nhận xét) + sheet Đề xuất (2 hành động) |
| Dữ liệu cần gì? | File doanh_thu_t6.xlsx có cột: Ngày, Mã SP, Tên SP, Khu vực, Doanh thu, Số lượng |

**Lỗi phổ biến ở bước PLAN:**

| Lỗi | Hậu quả | Cách sửa |
|-----|---------|---------|
| "Phân tích dữ liệu giúp tôi" | AI phân tích lung tung, không đúng nhu cầu | Trả lời đủ 3 câu hỏi trước khi viết prompt |
| Không mô tả output format | Nhận text thô, phải tự format lại | Nói rõ: "Xuất ra file Excel, có các sheet: ..." |
| Không gửi mô tả file | AI đoán cột, hay sai | Ghi rõ cấu trúc file: tên cột, ý nghĩa |

**Mẹo giảng viên:**
> "Viết Plan mất 5 phút — tiết kiệm 30 phút làm lại. Đây là đầu tư tốt nhất trong buổi làm việc với AI."

### 5.3 DO — Giao Cho AI Thực Hiện (5 phút)

**Nguyên tắc bước DO:**
- Viết prompt đầy đủ từ Plan
- Gửi file / dữ liệu kèm theo
- **Quan sát, không can thiệp** khi AI đang chạy
- Ghi chú những điểm AI làm mà bạn thấy bất ngờ (tốt hay xấu)

**Cấu trúc prompt chuẩn cho bước DO:**

```
[Bối cảnh] Tôi là Business Analyst tại công ty X.
[File đính kèm] File dữ liệu bán hàng tháng 6 (đính kèm).
[Nhiệm vụ] Hãy:
  1. Làm sạch dữ liệu (xóa trùng, chuẩn format)
  2. Tính doanh thu theo từng tháng và khu vực
  3. Tìm top 5 sản phẩm bán chạy nhất
  4. Vẽ 3 biểu đồ: DT theo thời gian, Top SP, So sánh KV
[Output] Xuất ra file Excel mới với 3 sheet: Dashboard, Insight, Đề xuất.
```

**Điểm quan trọng:**
> "Bước DO không phải 'nhấn Enter và chờ'. Bạn quan sát AI làm để bước Check có data thật."

### 5.4 CHECK — Kiểm Tra Có Đúng, Có Thiếu, Có Hợp Lý? (10 phút)

**3 câu hỏi bắt buộc trong bước CHECK:**

```
Câu hỏi 1: CÓ ĐÚNG KHÔNG?
→ Số liệu AI tính có khớp với dữ liệu gốc không?
→ Kiểm tra ngẫu nhiên 2-3 dòng bằng tay.

Câu hỏi 2: CÓ THIẾU KHÔNG?
→ Output có đủ những gì Plan yêu cầu không?
→ 3 biểu đồ đã có chưa? 3 insight đã có chưa?

Câu hỏi 3: CÓ HỢP LÝ KHÔNG?
→ Insight AI viết có logic không? Có phù hợp với thực tế không?
→ Ví dụ: AI nói "doanh thu tháng 6 giảm 80%" — có hợp lý không?
```

**Checklist Check cho bài thực hành hôm nay:**

| # | Điểm kiểm tra | Cách kiểm tra |
|---|---------------|---------------|
| 1 | Số dòng sau làm sạch có hợp lý? | Đếm dòng gốc vs dòng sau clean |
| 2 | Tổng doanh thu có khớp? | Sum thủ công cột DT, so với số AI tính |
| 3 | Biểu đồ hiển thị đúng loại? | Dashboard có đủ 3 biểu đồ đúng loại |
| 4 | Insight có dựa trên số liệu? | Mỗi insight phải trích dẫn con số cụ thể |
| 5 | Format file đúng yêu cầu? | Có 3 sheet: Dashboard, Insight, Đề xuất |

**Lỗi phổ biến ở bước CHECK:**
> Nhiều người bỏ qua Check vì "nhìn có vẻ ổn". Đây là lỗi nguy hiểm nhất — AI có thể tính sai hoặc bịa insight mà trông rất thuyết phục.

**Ẩn dụ:**
> "Check giống như người reviewer duyệt báo cáo trước khi gửi cho sếp. Nếu bạn tự review, bạn chịu trách nhiệm về kết quả."

### 5.5 ACT — Sửa Prompt, Bổ Sung Yêu Cầu, Tối Ưu Output (10 phút)

**Triết lý ACT:**
> "ACT không phải 'làm lại từ đầu'. ACT là **1 điều chỉnh cụ thể** dựa trên kết quả Check."

**Cách ACT đúng:**

```
ĐỪNG làm: Xóa hết prompt cũ, viết lại hoàn toàn
NÊN làm:  Copy prompt cũ + thêm 1 yêu cầu điều chỉnh cụ thể
```

**Template ACT:**
```
[Giữ nguyên prompt cũ]

ĐIỀU CHỈNH BỔ SUNG:
- Insight số 2 chưa đúng — dữ liệu cho thấy tháng 5 cao nhất, không phải tháng 6
- Thêm cột "Tỷ lệ tăng trưởng" (%) so sánh tháng này vs tháng trước
- Biểu đồ khu vực: dùng bar chart thay pie chart để dễ so sánh hơn
```

**Vòng lặp PDCA — Quy luật thực tế:**

```
Vòng 1: Output 60-70% đúng — bình thường, tiếp tục
Vòng 2: Output 80-85% đúng — gần đủ
Vòng 3-5: Output 90%+ — sẵn sàng dùng
Vòng 5-10: Output gần hoàn hảo — workflow ổn định
```

**Điểm then chốt:**
> "Không có AI nào cho output hoàn hảo ngay lần đầu. Sức mạnh của PDCA là bạn biết **chính xác phải sửa gì** thay vì đoán mò."

**Câu hỏi thảo luận nhanh (3 phút):**
> "Bạn đã bao giờ dùng AI và không hài lòng kết quả? Lúc đó bạn đã làm gì? Thử lại ngẫu nhiên hay có hệ thống?"

---

## 6. Break & Checkpoint (10 phút)

Trong 5 phút đầu break, học viên ghi nhanh (không nhìn slide):
1. "Viết 4 bước PDCA theo thứ tự — mỗi bước 1 câu mô tả"
2. "3 câu hỏi trong bước PLAN là gì?"
3. "Sự khác biệt giữa AI thông thường và Agentic AI?"

Giảng viên đọc nhanh qua → nhận diện ai đang bị mất luồng trước khi vào practice.

---

> [!IMPORTANT]
> **HƯỚNG DẪN DẠY VỚI 1 WORKSPACE XUYÊN SUỐT (BRIDGE LAYER):**
> Nhằm giữ nguyên nội dung Slide chính thức của MindX nhưng vẫn tối ưu hóa hiệu quả tích lũy năng lực của học viên, Giảng viên hướng dẫn lớp thực hành buổi này **trực tiếp bên trong workspace duy nhất của học viên** (`my-workspace` đã setup ở Buổi 1).
> - **Cách tổ chức file:** Học viên ghi PDCA log vào `docs/pdca-log.md` nằm trong `my-workspace/` — không tạo file rời trên Desktop.
> - **Cá nhân hóa (Khuyến nghị):** Đối với học viên muốn áp dụng PDCA vào bài toán thật của họ ngay tại lớp, khuyến khích họ mở file [session-02-bridge.md](plans/260710-workspace-bridge/bridge-guides/session-02-bridge.md) để map kịch bản phân tích dữ liệu bán hàng sang use-case thực tế của họ và ghi PDCA log vào workspace cá nhân.

## 7. Phần 3 — Demo & Thực Hành (70 phút)

### 7.1 Demo Live — Business Analyst Phân Tích Dữ Liệu Bán Hàng (25 phút)

> ⚠️ Refresh note: hành vi/UI Antigravity có thể thay đổi theo phiên bản — đối chiếu https://antigravity.google/docs và chạy thử demo trước buổi dạy.

**Tình huống demo:**

> Minh là Business Analyst tại công ty FMCG. Sếp giao file dữ liệu bán hàng tháng 6 và yêu cầu "báo cáo nhanh trong buổi chiều". Minh dùng Antigravity theo PDCA để hoàn thành trong 20 phút thay vì 3 tiếng làm thủ công.

**Bước PLAN (giảng viên làm live, hỏi học viên đóng góp):**

```
Câu hỏi 1 — Mục tiêu: Hiểu doanh thu tháng 6: xu hướng theo thời gian,
top sản phẩm, so sánh khu vực. Tìm điểm bất thường nếu có.

Câu hỏi 2 — Output: File Excel với:
  - Sheet Dashboard: 3 biểu đồ (DT theo tuần, Top 5 SP, Bar chart KV)
  - Sheet Insight: 3 nhận xét có số liệu cụ thể
  - Sheet Đề xuất: 2 hành động cụ thể cho tháng 7

Câu hỏi 3 — Dữ liệu: File doanh_thu_t6.xlsx
  Cột: Ngày | Mã SP | Tên SP | Danh mục | Khu vực | SL Bán | Đơn giá | DT
  Vấn đề biết trước: Có một số dòng format ngày bị sai (dd/mm vs mm/dd)
```

**Bước DO — Prompt mẫu (chiếu và giải thích từng phần):**

```
Bạn là Senior Business Analyst. Tôi có file dữ liệu bán hàng tháng 6
đính kèm (doanh_thu_t6.xlsx).

NHIỆM VỤ:
1. LÀM SẠCH: Chuẩn hóa format ngày (dd/mm/yyyy), loại bỏ dòng trùng,
   kiểm tra ô trống ở cột Doanh thu.
2. PHÂN TÍCH:
   a. Doanh thu theo từng tuần (tuần 1-4 tháng 6)
   b. Top 5 sản phẩm doanh thu cao nhất
   c. Doanh thu theo khu vực (Hà Nội, HCM, Đà Nẵng, Khác)
3. TRỰC QUAN HÓA: Tạo 3 biểu đồ (line chart tuần, bar chart top SP,
   horizontal bar chart khu vực)
4. INSIGHT: Viết 3 nhận xét ngắn có trích dẫn số liệu cụ thể
5. ĐỀ XUẤT: 2 hành động cụ thể cho tháng 7 dựa trên phân tích

OUTPUT: File Excel mới "bao_cao_t6_final.xlsx" với 3 sheet:
Dashboard | Insight | Đề xuất
```

**Quan sát AI làm (giảng viên giải thích từng bước AI thực hiện):**
- AI đọc file → phát hiện cấu trúc cột
- AI làm sạch → báo cáo số dòng xóa/sửa
- AI tính toán → xuất bảng tổng hợp
- AI vẽ biểu đồ → nhúng vào sheet Dashboard
- AI viết insight → dựa trên số thực

**Bước CHECK — giảng viên làm live:**

| Điểm kiểm tra | Kết quả | Nhận xét |
|---------------|---------|---------|
| Tổng DT có khớp? | Khớp với Sum thủ công | ✓ Đúng |
| Insight số 2 | "Khu vực HCM cao nhất" — nhưng data cho thấy chênh lệch không đáng kể | ✗ Cần điều chỉnh |
| Biểu đồ khu vực | Dùng pie chart | ✗ Nên dùng bar chart để so sánh rõ hơn |

**Bước ACT — prompt lần 2 (học viên góp ý bổ sung gì):**

```
[Giữ nguyên kết quả đã có]

ĐIỀU CHỈNH:
1. Insight số 2: Sửa lại — nêu chính xác % chênh lệch giữa các khu vực,
   không nói "cao nhất" nếu chênh lệch < 10%
2. Biểu đồ khu vực: Chuyển từ pie chart sang horizontal bar chart
3. Thêm vào sheet Đề xuất: Khu vực nào cần tăng cường budget tháng 7?
```

**Output cuối sau Act:**
- File Excel hoàn chỉnh, insight chính xác, biểu đồ dễ đọc
- Giảng viên chiếu kết quả thật lên màn hình

**Insight quan trọng nhất (nhấn mạnh):**
> "PDCA không phải 'làm đi làm lại' — PDCA là **học từ kết quả** và **cải thiện có hướng**. Sau 2-3 vòng, prompt của bạn đủ tốt để dùng lại cho tháng 7, tháng 8."

### 7.2 Thực Hành Có Hướng Dẫn (45 phút)

**Đề bài thực hành:**

> **Tình huống:** Bạn KHÔNG có sẵn dữ liệu. Hãy dùng AI tìm kiếm và thu thập dữ liệu thực tế từ internet, sau đó phân tích và tạo dashboard theo PDCA.

**Chủ đề tự chọn (chọn 1):**
- Quán cà phê nổi tiếng tại TP.HCM hoặc Hà Nội
- Sản phẩm skincare bán chạy trên Shopee/Lazada
- Khóa học AI/lập trình đang hot

**Yêu cầu cụ thể:**

| Bước | Yêu cầu | Tiêu chí |
|------|---------|---------|
| **Thu thập** | Dùng AI tìm và tổng hợp dữ liệu từ internet | Ít nhất 15-20 dòng dữ liệu |
| **Chuẩn hóa** | Tạo bảng Excel với 4 cột: Tên, Giá, Địa điểm/Link, Đánh giá (sao) | Đúng 4 cột, có header |
| **Làm sạch** | Chuẩn hóa format giá (đồng/VNĐ), loại dòng trùng, xóa ô trống | File sạch, nhất quán |
| **Phân tích** | Tính trung bình giá, top 5, phân loại theo đánh giá | Có bảng tổng hợp |
| **PDCA Act** | Chỉnh sửa prompt ít nhất 1 lần, có thể giải thích vì sao | Có thể chứng minh |
| **Insight** | Viết 3 insight từ dữ liệu | Mỗi insight có số liệu |

**Ràng buộc chống dữ liệu bịa (bắt buộc):**
- Mỗi dòng dữ liệu AI thu thập phải kèm cột **Nguồn/URL** — không có nguồn thì không tính là dữ liệu hợp lệ.
- Ở bước **Check**: mở ngẫu nhiên 3 URL trong cột Nguồn để xác minh dữ liệu có thật — AI rất dễ "bịa" số liệu trông thuyết phục.
- Nếu lớp yếu hoặc mạng chậm, dùng file CSV mẫu giảng viên phát thay vì để AI tìm trên internet.

**Cấu trúc 45 phút thực hành:**

| Thời gian | Hoạt động | Giảng viên làm gì |
|-----------|-----------|-------------------|
| 0–10 phút | Setup: chọn chủ đề, viết Plan (3 câu hỏi) | Đi vòng quanh kiểm tra Plan, hỏi "Output mong muốn trông như thế nào?" |
| 10–25 phút | Thu thập dữ liệu + chuẩn hóa bảng Excel | Hỗ trợ prompt thu thập, gợi ý website nguồn |
| 25–38 phút | Làm sạch + phân tích + tạo dashboard | Kiểm tra Check 3 câu hỏi, nhắc nhở ai bỏ qua |
| 38–45 phút | Act: sửa prompt + hoàn thiện insight | Xác nhận ai đã sửa prompt ít nhất 1 lần |

**Hỗ trợ học viên bị kẹt:**

| Tình huống kẹt | Gợi ý giảng viên |
|---------------|--------------------|
| Không biết chọn chủ đề | "Chọn thứ bạn hay mua hoặc hay tìm kiếm — dữ liệu quen thuộc thì Check dễ hơn" |
| AI trả về ít hơn 15 dòng | "Thêm vào prompt: 'Tìm ít nhất 20 kết quả, nếu không đủ hãy mở rộng phạm vi tìm kiếm'" |
| Format giá bị lộn xộn (30k, 30.000, 30,000đ) | "Giao cho AI: 'Chuẩn hóa toàn bộ cột Giá về dạng số nguyên VNĐ'" |
| Không biết sửa prompt như thế nào | "Xem lại Check — điểm nào chưa đúng hoặc chưa đủ? Sửa đúng điểm đó" |
| Excel không hiển thị biểu đồ | "Nhờ AI: 'Tạo biểu đồ và đảm bảo nó embedded trong sheet, không phải file ảnh riêng'" |

---

## 8. BTVH & Tổng Kết (10 phút)

### 8.1 Validation Checklist — Kiểm Tra Trước Khi Ra Về

Học viên tự check trước khi nộp file:

- [ ] Mô tả được 4 bước PDCA không nhìn slide
- [ ] Trả lời được 3 câu hỏi Plan cho bài tập của mình (không cần nhớ thuộc, cần hiểu nguyên tắc)
- [ ] Có file Excel với ít nhất 15 dòng dữ liệu sạch
- [ ] Đã chỉnh sửa prompt ít nhất 1 lần (có thể giải thích lý do chỉnh)
- [ ] Viết được 3 insight từ dữ liệu (mỗi insight có con số cụ thể)
- [ ] Đã ghi vòng PDCA đầu tiên vào `docs/pdca-log.md` trong my-workspace (Plan/Do/Check/Act + kết quả trước-sau)
- [ ] Chia sẻ file Excel lên Group Zalo

**Cách validate nhanh (giảng viên gọi 2-3 học viên):**
> "Đứng lên, không nhìn slide — nói cho tôi nghe PDCA là gì và bạn đã sửa prompt lần 2 vì lý do gì?"

### 8.2 Bài Tập Về Nhà

> **Nâng cấp file Excel đã làm trên lớp.**

**Yêu cầu cụ thể:**

| # | Yêu cầu | Tiêu chí nộp |
|---|---------|-------------|
| 1 | **Làm sạch lại kỹ hơn** — rà soát format giá, loại trùng, xử lý ô trống | File không có lỗi format |
| 2 | **Phân tích sâu hơn** — top theo từng tiêu chí, phân loại theo đánh giá, so sánh nhóm | Có ít nhất 2 bảng phân tích mới |
| 3 | **Viết 3 insight** — dựa trên phân tích mới, có số liệu cụ thể | Insight nối tiếp data thật |
| 4 | **Tạo thêm 1 output** — Word tóm tắt / slide PowerPoint / email gửi sếp / văn bản summary | File thứ 2 đính kèm |
| 5 | **PDCA bắt buộc** — chỉnh sửa prompt ít nhất 1 lần, ghi rõ lý do | Ghi tiếp vòng PDCA này (prompt v1, prompt v2, lý do chỉnh) vào `docs/pdca-log.md` trong my-workspace |

**Nộp bài:**
- File Excel nâng cấp (đặt tên: `bvh_buoi2_[TenHocVien].xlsx`)
- File output thứ 2 (Word / PPT / PDF)
- Ảnh chụp `docs/pdca-log.md` đã ghi tiếp vòng PDCA của BTVH (prompt v1 và v2) — không tạo file rời
- **Deadline:** Trước buổi 3 (gửi vào group Zalo)

### 8.3 Tổng Kết Buổi Học (3 phút)

**3 điểm cốt lõi cần nhớ:**

```
1. AGENTIC AI = AI tự thực hiện end-to-end — bạn giao mục tiêu, AI tự làm
2. WORKFLOW AI = INPUT + TASK + OUTPUT — thiếu bất kỳ phần nào, kết quả sẽ kém
3. PDCA = Vòng lặp cải tiến — không phải làm lại, mà là cải thiện có hướng
```

**Tease buổi 3:**
> "Buổi 3 chúng ta sẽ đi sâu hơn — không chỉ phân tích dữ liệu mà sẽ xây dựng OIPO workflow: cách thiết kế quy trình công việc hoàn chỉnh để giao cho AI chạy tự động. Artifact buổi 3: một workflow map thực tế từ công việc của bạn."

---

## 9. Lỗi Phổ Biến & Cách Can Thiệp

| Lỗi | Dấu hiệu | Cách giảng viên can thiệp |
|-----|---------|-----------------------------|
| **Plan không rõ** — AI làm lung tung | Output không đúng yêu cầu, học viên không biết sửa chỗ nào | "Dừng lại — trả lời 3 câu hỏi Plan trên giấy trước khi gửi prompt tiếp" |
| **AI không hiểu dữ liệu** | AI hỏi lại nhiều lần, hoặc tạo dữ liệu giả | "Thêm vào prompt: mô tả cấu trúc file — tên cột, ý nghĩa, ví dụ 1-2 dòng" |
| **Check bị bỏ qua** | Học viên lấy output đầu tiên dùng luôn, không kiểm tra | "Hỏi: bạn đã kiểm tra số liệu chưa? Chọn 3 dòng ngẫu nhiên, tính tay, so sánh" |
| **Act không biết sửa gì** | Viết lại prompt hoàn toàn, hoặc không sửa gì cả | "Copy prompt cũ → hỏi: Check phát hiện vấn đề gì? → Thêm 1 dòng sửa đúng điểm đó" |
| **Dữ liệu < 15 dòng** | Bảng Excel quá ít để phân tích có ý nghĩa | "Mở rộng tìm kiếm: thay vì 1 thành phố, tìm cả nước; thay vì 1 platform, tìm nhiều platform" |
| **Insight không có số liệu** | Insight kiểu "sản phẩm A rất phổ biến" | "Hỏi: phổ biến như thế nào? Số liệu nói gì? AI cần dữ liệu để nói cụ thể" |

---

## 10. Câu Hỏi Thảo Luận Dự Phòng

1. "PDCA có phải dùng cho mọi task với AI không? Khi nào thì không cần?"
2. "Nếu bước Check phát hiện AI tính sai — bạn tin AI hay tự tính tay lại?"
3. "Làm thế nào để biết vòng lặp PDCA đã đủ — khi nào dừng Act?"
4. "INPUT thiếu vs TASK mơ hồ — cái nào gây hại cho kết quả nhiều hơn?"
5. "Bạn có thể áp dụng PDCA cho task phi dữ liệu không? Ví dụ: viết email, soạn hợp đồng?"

---

## 11. Chuẩn Bị Của Học Viên — Checklist Gửi Group Trước Buổi Học

> **Giảng viên gửi checklist này vào Group Zalo trước buổi 2 ít nhất 1 ngày:**

```
□ Antigravity mở được, đăng nhập OK (kiểm tra từ buổi 1)
□ Mở lại my-workspace từ buổi 1; tạo thư mục con sample-data/buoi2/ bên trong
□ File dữ liệu bán hàng đã tải về my-workspace/sample-data/buoi2/ (link giảng viên gửi)
□ Google Account đang hoạt động (để dùng Google Drive nếu cần)
□ KHÔNG sync thư mục my-workspace với OneDrive hoặc Google Drive
```

**Lưu ý quan trọng:**
- File dữ liệu bán hàng: giảng viên chuẩn bị file mẫu khoảng 200-500 dòng, có một số lỗi format có chủ đích để thực hành Clean
- Không dùng OneDrive/Google Drive sync — Antigravity đọc file local
- Nếu học viên chưa cài Antigravity từ buổi 1: cài lại theo hướng dẫn quickstart trước khi vào lớp

---

## 12. Backup Plans

| Tình huống | Backup |
|-----------|--------|
| Antigravity thay UI / lỗi quota | Làm Plan trên giấy/Google Docs, demo qua slide screenshot có sẵn |
| Học viên không có file dữ liệu | Giảng viên chia sẻ màn hình demo, học viên quan sát và làm theo bằng file mẫu dự phòng |
| Internet chậm — AI không tìm được dữ liệu | Chuyển sang dataset có sẵn: giảng viên chuẩn bị 2 file CSV backup |
| Học viên không quen Excel | Dùng Google Sheets thay thế — cùng logic, giao diện quen hơn |
| Thời gian thực hành không đủ | Rút ngắn bước phân tích, tập trung vào PDCA 1 vòng hoàn chỉnh thay vì 2-3 vòng |

---

*Cập nhật lần cuối: 2026-06-10 | Phiên bản: v1.0*
*Nguồn: Session 02 — PDCA Operation Teaching Guide*
*Template theo: `docs/instructor/session-05-micro-agent-teaching-guide.md`*

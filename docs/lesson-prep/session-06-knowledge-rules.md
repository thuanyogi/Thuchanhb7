# Session 06 — Thiết lập tri thức nội bộ và quy tắc vận hành cho AI

## Source
- `assets/source-materials/original/MindX_AG_Slide 6.pdf`

---

## Mục tiêu học tập

1. **Khung CLEAR** — áp dụng để thiết kế câu lệnh (prompt), trích xuất báo cáo đạt yêu cầu từ AI.
2. **RAG** — giải thích cơ chế hoạt động, chứng minh vai trò của dữ liệu nội bộ trong việc đảm bảo độ chính xác khi AI xuất ra thông tin.
3. **BI Dashboard** — xây dựng hoàn chỉnh Dashboard BI bằng công cụ AI, thay thế quy trình trích xuất và xử lý dữ liệu thủ công.

---

## Phần 1: RAG (Retrieval-Augmented Generation)

### Vấn đề thực tế của quản lý

Ba nhóm vấn đề phổ biến mỗi tuần:

| Vấn đề | Mô tả |
|--------|-------|
| **Khủng hoảng phút chót** | Sát giờ họp giao ban, số liệu giữa các file Excel không khớp, phải rà soát từng ô thủ công. |
| **Lãng phí nguồn lực** | Tiêu tốn 3–4 tiếng/tuần chỉ để copy/paste, căn chỉnh biểu đồ, làm slide báo cáo từ đầu. |
| **Thiếu tính đồng bộ** | Mỗi người nộp một định dạng, sai lệch màu sắc và tiêu chuẩn chuyên nghiệp. |

**Hậu quả:** Lãng phí thời gian, quyết định chậm trễ, khó kiểm soát chất lượng báo cáo.

### Giải pháp: Trợ lý BI (Business Intelligence)

Bất kỳ quản lý nào cũng có thể tạo ra dashboard phân tích số liệu chuẩn xác mà không phụ thuộc vào IT hoặc kỹ sư dữ liệu.

| Khả năng | Mô tả |
|----------|-------|
| **Đọc dữ liệu khổng lồ** | Tự động đọc và tổng hợp dữ liệu từ đa nguồn (Excel, CSV) trong thời gian ngắn, đảm bảo chính xác. |
| **Phân tích chuẩn nghiệp vụ** | AI hiểu logic kinh doanh, tự động phân loại và tính toán theo quy tắc thực tế của từng phòng ban. |
| **Tự động trực quan hóa** | Tự động chuyển số liệu thô thành Web Dashboard chuyên nghiệp, trực quan. |

### Báo cáo tĩnh vs Dashboard AI (động)

| Báo cáo cũ (tĩnh) | Dashboard AI (động) |
|--------------------|----------------------|
| Xử lý thủ công: mỗi thay đổi phải thiết lập lại từ đầu | Đồng bộ tự động: số liệu gốc thay đổi → cập nhật toàn bộ biểu đồ ngay |
| Tiêu tốn nhiều thời gian và nhân sự cho tác vụ lặp lại | Tối ưu quy trình: quản lý tập trung vào phân tích và ra quyết định |
| Hiển thị cố định: dạng hình ảnh hoặc slide tĩnh | Tương tác đa chiều: thao tác trực tiếp, tùy chỉnh bộ lọc ngay trong cuộc họp |
| Thiếu đồng bộ: phụ thuộc kỹ năng thiết kế cá nhân | Giao diện chuyên nghiệp: chuẩn quản trị hiện đại, thẩm mỹ, đồng bộ, trực quan |

### Vấn đề khi dùng AI chung chung để tạo Dashboard

Nếu chỉ nạp data và nói "Vẽ cho tôi cái biểu đồ":
- **AI vẽ màu ngẫu nhiên** — xanh, đỏ, tím, vàng, không theo quy chuẩn của công ty.
- **Vi phạm Brand Guideline** — thiếu chuyên nghiệp, vi phạm quy chuẩn thương hiệu.

**Giải pháp:** RAG (Retrieval-Augmented Generation).

### Định nghĩa RAG

> RAG là phương pháp trang bị **"hệ thống tri thức nội bộ"** cho AI.

Thay vì AI hoạt động dựa trên kiến thức chung chung từ internet, RAG cho phép AI truy cập trực tiếp vào **kho tài liệu riêng của công ty** (quy trình, báo cáo, chính sách) để đọc hiểu và tổng hợp câu trả lời chuẩn xác nhất cho doanh nghiệp.

**Luồng hoạt động:**
1. Nạp tài liệu nội bộ
2. AI rà soát và đối chiếu
3. Xử lý và trả lời theo luật

AI tự động tra cứu kho tài liệu nội bộ đã nạp để tổng hợp câu trả lời bám sát quy định của doanh nghiệp — giảm mạnh sai sót so với AI chung chung; với quyết định quan trọng vẫn cần con người kiểm chứng.

### Ví dụ RAG thực tế

**Ví dụ 1 — Brand Guideline:**
- *Input:* Cung cấp bộ quy chuẩn thương hiệu của công ty cho AI.
- *Output:* Khi yêu cầu làm báo cáo, AI tự động vẽ biểu đồ với Doanh thu màu Xanh, Chi phí màu Đỏ — không cần nhắc lại mỗi lần.

**Ví dụ 2 — Chính sách nhân sự:**
- *Input:* Cung cấp quy chế lương thưởng, sổ tay nhân sự cho AI.
- *Output:* Khi nhân viên hỏi về quy định nghỉ phép, AI trích xuất theo đúng tài liệu đã nạp — giảm mạnh nhầm lẫn, câu trả lời bám vào quy chế nội bộ; các quyết định nhân sự quan trọng vẫn cần kiểm chứng lại.

---

## Phần 2: Khung CLEAR

### Tổng quan

RAG giúp AI có "Tri thức", nhưng để AI làm đúng, cần ra lệnh chuẩn theo khung CLEAR — bộ khung 5 bước giao tiếp chuẩn xác với AI:

| Thành phần | Tên đầy đủ | Ý nghĩa | Cách dùng |
|------------|------------|---------|-----------|
| **C** | Context | Bối cảnh: Bạn là ai? | Gắn cho AI một chức danh chuyên gia và bối cảnh cụ thể để AI dùng đúng tông giọng. |
| **L** | Logic | Luật xử lý: Dữ liệu tính toán theo luật nào? | Chỉ rõ cách AI lọc, nhóm hoặc cộng/trừ/nhân/chia số liệu. |
| **E** | Expectations | Hình thức đầu ra: Bạn muốn kết quả trông ra sao? | Miêu tả chính xác "giao diện" và định dạng câu trả lời để không phải sửa lại form. |
| **A** | Action | Nhiệm vụ chính: Việc cốt lõi AI phải làm là gì? | Dùng động từ mạnh, trực diện để giao đúng một nhiệm vụ cụ thể. |
| **R** | Restrictions | Ranh giới cấm: AI KHÔNG ĐƯỢC làm gì? | Đặt quy tắc cấm để chặn trước tình trạng AI tự suy diễn, lan man, hoặc sai chuẩn công ty. |

### Ví dụ Prompt chuẩn kết hợp RAG & CLEAR

Công thức để tạo Dashboard chuyên nghiệp:

```
[C - Context]
Bạn là Fullstack AI Engineer và Data Analyst của Công ty TNHH Alpha.

[L - Logic]
Xây dựng một Web Dashboard (Single Page) đọc dữ liệu từ file sales_data.xlsx.
Dashboard tự động lấy dữ liệu (polling) mỗi 2 giây để cập nhật biểu đồ và các KPI
(Tổng doanh thu, Tổng chi phí, Lợi nhuận, Số đơn hàng).

[E - Expectations]
Giao diện thiết kế phong cách Glassmorphism (hiệu ứng kính mờ), nền tối (Dark mode) sang trọng.
Gồm: 4 thẻ KPI, 1 biểu đồ cột (Doanh thu vs Chi phí), 1 biểu đồ tròn (Khu vực),
1 biểu đồ đường (Lợi nhuận) và 1 bảng Top Danh mục.
Toàn bộ nội dung hiển thị tiếng Việt có dấu.

[A - Action]
Viết code Python tạo local web server (port 9090) phục vụ API và file dashboard.html.
Tự động thực thi và mở trình duyệt.

[R - Restrictions]
TUYỆT ĐỐI tuân thủ brand_guideline.txt:
Doanh thu dùng màu Xanh Navy (#1E3A8A), Chi phí dùng màu Đỏ San hô (#EF4444).
```

### Nâng cấp Dashboard với tính năng tương tác

Chuyển từ "xem" báo cáo tĩnh sang "phân tích" dữ liệu đa chiều ngay trên một màn hình:

| Tính năng | Cách làm | Trải nghiệm thực tế |
|-----------|----------|---------------------|
| **Bộ lọc thời gian** | Lệnh AI tạo thanh công cụ chọn khoảng thời gian (Tuần/Tháng/Quý) ở góc báo cáo. | Chọn "Quý 2" → toàn bộ KPI và biểu đồ tự động chạy lại, chỉ hiển thị kết quả Quý 2. |
| **Bộ lọc phân quyền** | Yêu cầu AI thêm dropdown lọc theo Phòng ban, Chi nhánh hoặc Cá nhân. | Chọn "Phòng Kinh Doanh" → hệ thống lọc và hiển thị độc lập hiệu suất đơn vị đó. |
| **Phân tích sâu** | Yêu cầu AI gắn liên kết dữ liệu chi tiết ẩn đằng sau các khối biểu đồ tổng. | Nhấp chuột vào cột doanh thu → mở danh sách liệt kê chi tiết từng giao dịch, từng sản phẩm. |

**Kết quả:** Quản lý chủ động truy vấn các lớp thông tin, ra quyết định ngay trong cuộc họp.

### Bảo mật dữ liệu khi dùng AI

**Câu hỏi thường gặp:** "Dữ liệu công ty rất nhạy cảm, đưa lên Dashboard web có bị lộ không?"

**Trả lời:** Tùy cách triển khai. Chạy Local (trên máy tính cá nhân) — hoàn toàn an toàn, dữ liệu không tải lên mạng public.

**3 cách chia sẻ Dashboard:**

| Cách | Mô tả | Phù hợp |
|------|-------|---------|
| **Cách 3 — Xuất File tĩnh** (Khuyên dùng) | Đóng gói Dashboard thành 1 file HTML. Nén ZIP có mật khẩu. Gửi qua Zalo/Email. | Văn phòng nói chung |
| **Cách 2 — Ngrok / Cloud (Live Link)** | Tạo link public xem real-time. Có thể cài mật khẩu hoặc đăng nhập Email công ty. Nhanh nhưng rủi ro nếu rò rỉ link. | Cần chia sẻ nhanh, chấp nhận rủi ro |
| **Cách 1 — Nội Bộ (Intranet / VPN)** | An toàn tuyệt đối, chỉ dùng chung mạng công ty mới xem được. | Doanh nghiệp lớn có hạ tầng IT |

---

## Demo

### Đề bài Demo

**Chủ đề:** Xây dựng Dashboard bán hàng thời gian thực cho Công ty Alpha.

**Dữ liệu đầu vào:**
- `sales_data.xlsx` — dữ liệu bán hàng
- `brand_guideline.txt` — quy định màu sắc thương hiệu Alpha Corp

**Yêu cầu kỹ thuật:**
- Web Dashboard (Single Page) phong cách Glassmorphism, nền tối (Dark mode)
- Hiển thị: 4 thẻ KPI (Doanh thu, Chi phí, Lợi nhuận, Đơn hàng), biểu đồ cột (Doanh thu vs Chi phí), biểu đồ tròn (Khu vực), biểu đồ đường (Lợi nhuận), bảng Top Danh mục
- Tính năng Real-time: tự động cập nhật dữ liệu mỗi 2 giây từ file Excel, không cần load lại trang
- Ràng buộc màu: Doanh thu Navy `#1E3A8A`, Chi phí Đỏ San hô `#EF4444`

**Đầu ra:** Python server (cổng 9090) chạy Dashboard + file HTML tĩnh nén có mật khẩu để chia sẻ.

### Quy trình 5 bước Demo

| Bước | Tên | Mô tả |
|------|-----|-------|
| **1** | Khởi Tạo Kỹ Năng (Skill — Design Mentor) | Gửi prompt yêu cầu AI tạo file `Design_Mentor_Skill.md` — bộ tiêu chuẩn thiết kế Dashboard hiện đại: Glassmorphism, Dark Mode, KPI layout, phối màu tương phản, hiệu ứng nhảy số Real-time. |
| **2** | Nạp Tri Thức (RAG) & Kỹ Năng (Skill) | Mở phiên chat AI mới. Kéo thả 3 file vào khung chat: `Design_Mentor_Skill.md`, `sales_data.xlsx`, và `brand_guideline.txt` của Alpha Corp. |
| **3** | Sử Dụng Prompt CLEAR | Copy & Paste prompt chuẩn CLEAR để yêu cầu AI tạo Dashboard hoàn chỉnh với server Python port 9090. |
| **4** | Trình Diễn "Phép Thuật" Auto-Update | Chia đôi màn hình: Excel và trình duyệt. Thay đổi số liệu Doanh Thu → Ctrl+S → sau 2 giây biểu đồ tự động vọt lên, không cần reload. |
| **5** | Đóng Gói & Chia Sẻ An Toàn | Yêu cầu AI viết script `export_dashboard.py` xuất file HTML tĩnh. Nén bằng WinRAR/7-Zip, đặt mật khẩu, gửi qua Group lớp. |

### Prompt CLEAR hoàn chỉnh — Dashboard Alpha Corp

| Thành phần | Nội dung |
|------------|----------|
| **C — Context** | Vai trò: Fullstack AI Engineer & Data Analyst của Công ty TNHH Alpha. |
| **L — Logic** | Đọc `sales_data.xlsx`, polling mỗi 2 giây, cập nhật KPI và biểu đồ. |
| **E — Expectations** | Glassmorphism Dark Mode: 4 KPI, biểu đồ cột, tròn, đường, bảng Top Danh mục. |
| **A — Action** | Python server port 9090, tự động mở trình duyệt, nội dung tiếng Việt có dấu. |
| **R — Restrictions** | Tuân thủ `brand_guideline.txt`: Doanh thu `#1E3A8A`, Chi phí `#EF4444`. |

### Dashboard đầu ra mong đợi

| Thành phần | Chi tiết |
|------------|----------|
| **4 Thẻ KPI** | Tổng doanh thu, Tổng chi phí, Lợi nhuận, Số đơn hàng |
| **Biểu đồ cột** | Doanh thu vs Chi phí theo thời gian |
| **Biểu đồ tròn** | Phân bổ theo Khu vực địa lý |
| **Biểu đồ đường** | Xu hướng Lợi nhuận theo thời gian |
| **Bảng Top Danh mục** | Xếp hạng danh mục sản phẩm theo doanh thu |

Toàn bộ nội dung hiển thị tiếng Việt có dấu. Giao diện Glassmorphism nền tối sang trọng, hiệu ứng kính mờ.

---

## Phần 3: Thực hành

### Đề bài thực hành

**Chủ đề:** Xây dựng Dashboard Quản lý Ngân sách cho Công ty Beta Solutions.

**Vai trò học viên:** Trưởng phòng Tài chính kiêm Fullstack Developer.

**Dữ liệu đầu vào:**
- `ngan_sach_phong_ban.xlsx` — dữ liệu ngân sách phòng ban
- `brand_guideline_beta.txt` — quy chuẩn thương hiệu Beta Solutions

**Yêu cầu kỹ thuật:**
- Web Dashboard nền tối, chuyên nghiệp
- Hiển thị: 3 thẻ KPI (Tổng ngân sách, Tổng chi tiêu, Giao dịch vượt NS), 1 biểu đồ cột ghép (Ngân sách vs Chi tiêu), 1 biểu đồ tròn (Tỷ trọng phòng ban)
- Tính năng tương tác: Nút bấm Lọc theo Quý (Q1, Q2, Q3, Q4) và Lọc theo Phòng ban — khi bấm lọc, con số và biểu đồ cập nhật ngay lập tức
- Tính năng Real-time: Tự động làm mới số liệu mỗi 2 giây khi file Excel gốc thay đổi
- **Ràng buộc màu sắc (Bắt buộc):**
  - Ngân sách: Tím Hoàng Gia `#7C3AED`
  - Chi tiêu: Xanh Ngọc `#06B6D4`
  - Vượt ngân sách: Hồng San Hô `#F43F5E`

**Sản phẩm nộp bài:** Một file nén (RAR/ZIP) chứa file HTML Dashboard tĩnh, có đặt mật khẩu tùy ý.

### Bài kiểm chứng Before & After — Sức mạnh của RAG & Skill

Học viên thực hiện 2 bước so sánh để tự chứng kiến sự khác biệt khi có và không có tri thức nạp vào AI. **Bước này phải làm TRƯỚC bài thực hành chính.**

| | BEFORE — Không có tri thức | AFTER — Có đầy đủ tri thức & kỹ năng |
|---|------|------|
| **Cách làm** | Mở New Chat, KHÔNG nạp `brand_guideline_beta.txt` và file Skill. Chỉ nạp `ngan_sach_phong_ban.xlsx`. | Mở New Chat, nạp đầy đủ 3 file: dữ liệu + brand guideline + Skill. |
| **Kết quả** | AI tự thiết kế với màu sắc ngẫu nhiên hoặc mặc định. Số tiền không được format chuẩn VNĐ. Dashboard thiếu đồng bộ, không phản ánh thương hiệu Beta Solutions. | AI đọc và tuân thủ file quy định tuyệt đối. Biểu đồ hiển thị chính xác Tím `#7C3AED` và Xanh Ngọc `#06B6D4`. Format số tiền chuẩn xác theo đơn vị Triệu/Tỷ VNĐ. Dashboard chuyên nghiệp, đồng bộ thương hiệu hoàn toàn. |

**Kết luận:** Quá trình này chứng minh AI có khả năng học và làm theo nội quy doanh nghiệp (RAG) cũng như áp dụng kỹ năng chuyên môn (Skill), tạo ra sản phẩm tùy biến cao thay vì giao diện rập khuôn.

---

## Artifact của buổi học

Học viên tạo ra sau buổi học:
- `Design_Mentor_Skill.md` — bộ tiêu chuẩn thiết kế Dashboard (tạo ở bước 1 Demo)
- File HTML Dashboard tĩnh (nén ZIP có mật khẩu) — sản phẩm nộp bài thực hành

---

## Bài tập về nhà

Tạo 1 Dashboard liên quan đến công việc hàng ngày mà bạn phải làm báo cáo.

Gợi ý: chọn loại báo cáo bạn đang làm thủ công (Excel, slide), xây dựng Dashboard AI thay thế, áp dụng đầy đủ RAG + khung CLEAR + ràng buộc màu sắc thương hiệu.

---

## Tổng kết buổi học

| Chủ đề | Điểm mấu chốt |
|--------|---------------|
| **Dữ liệu + AI** | Tự động hóa báo cáo trong 5 phút. Không còn mất hàng giờ làm thủ công. |
| **RAG — Tri Thức Nội Bộ** | AI tuân thủ luật lệ và Guideline của riêng doanh nghiệp. Chống Hallucination. |
| **Khung CLEAR** | Cách giao tiếp không trượt phát nào với AI. 5 thành phần: Context, Logic, Expectation, Action, Restrictions. |
| **Bảo Mật Thông Minh** | Chọn phương án chia sẻ phù hợp: chạy local, xuất file ZIP cài pass, hoặc Intranet/VPN. |

---

## Validation checklist

- [ ] Học viên giải thích được RAG là gì và khi nào cần dùng.
- [ ] Học viên viết được prompt theo khung CLEAR (5 thành phần đầy đủ).
- [ ] Dashboard Before (không có tri thức) và After (có RAG + Skill) thể hiện sự khác biệt rõ ràng.
- [ ] File HTML Dashboard tĩnh chạy được trên trình duyệt, hiển thị đúng màu sắc theo brand guideline.
- [ ] File nộp bài là file nén (ZIP/RAR) có đặt mật khẩu.
- [ ] Tính năng Real-time (polling 2 giây) hoạt động đúng khi thay đổi file Excel gốc.
- [ ] Nội dung Dashboard hiển thị tiếng Việt có dấu.

---

## Tài liệu giảng dạy chi tiết

| Loại | File |
|------|------|
| **Hướng dẫn giảng dạy** | [`docs/instructor/session-06-knowledge-rules-teaching-guide.md`](../instructor/session-06-knowledge-rules-teaching-guide.md) |
| **Slide deck giảng dạy** | [`assets/showoff/session-06-teaching/index.html`](../../assets/showoff/session-06-teaching/index.html) (14 slides, ←→ để chuyển) |
| **Show-off / MXH** | [`assets/showoff/session-06-showoff/index.html`](../../assets/showoff/session-06-showoff/index.html) |
| **Ảnh MXH (18 ảnh)** | `assets/showoff/session-06-showoff/images/` (square / horizontal / vertical) |

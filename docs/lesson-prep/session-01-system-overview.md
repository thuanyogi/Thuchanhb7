# Session 01 — Tổng Quan Hệ Thống

## Source
- `assets/source-materials/original/AI4A01_Slide buổi 1.pdf` (51 trang)

---

## Mục Tiêu Học Tập (Learning Objectives)

Sau buổi học, học viên cần đạt được 3 điều:
1. **Nắm bắt hệ thống và kiến trúc 7 cấu phần** để xây dựng phòng ban AI đa tác nhân hoàn chỉnh.
2. **Nhận diện chính xác 3 Cấp độ ứng dụng AI** — đánh giá đúng hiện trạng ứng dụng AI của cá nhân/doanh nghiệp.
3. **Điều phối các AI Agent chạy thử** một quy trình công việc thực tế.

---

## Tổng Quan Khóa Học

Sử dụng các công cụ AI rời rạc bộc lộ nhiều hạn chế khi xử lý chuỗi công việc phức tạp: người dùng phải liên tục khai báo lại bối cảnh và mục tiêu, dữ liệu thiếu liên kết, kết quả dễ sai lệch.

Giải pháp: **"Văn phòng AI" (Agentic Workspace)** — triển khai qua nền tảng **Google Antigravity**.

### 3 Giai đoạn khóa học

| Giai đoạn | Nội dung |
|-----------|----------|
| **Giai đoạn 1 — Vận hành** | Làm quen kiến trúc → Vận hành hệ thống hoàn chỉnh |
| **Giai đoạn 2 — Mở rộng & Tối ưu** | Thiết kế luồng công việc → Thiết lập nhân sự & tri thức → Phân quyền kiểm duyệt → Kiểm toán & gỡ lỗi |
| **Giai đoạn 3 — Thiết kế giải pháp mới** | Phân tích bài toán cá nhân → Lắp ráp hệ thống mới và kiểm thử → Demo thực tế |

### Kỷ luật lớp học (3 nguyên tắc)
1. 🖐 **Thực hành 100%** — Mọi học viên bắt buộc mở máy, thao tác trực tiếp trên hệ thống.
2. ❓ **Hỏi đáp tức thời** — Nêu câu hỏi ngay khi gặp vướng mắc.
3. 📤 **Chia sẻ kết quả** — Chụp ảnh/chia sẻ file lên Group Zalo để nhận feedback từ mentor.

---

## Phần 1: 3 Cấp Độ Ứng Dụng AI

### Khảo sát nhanh (dùng để mở đầu tương tác)
Yêu cầu học viên gõ A / B / C vào Chat Box:
- **[A] Cơ bản** — Dùng ChatGPT/Gemini hỏi đáp 1:1.
- **[B] Trung cấp** — Đã tạo Custom GPT/Claude Project, có Knowledge Base và Skills.
- **[C] Nâng cao** — Đã vận hành Multi-Agent Workflow tự động phân vai, tự động xuất file.

---

### Cấp 1 — Custom Chatbot

**Ưu điểm:**
- Làm việc trên cloud.
- Có Knowledge Base lưu trữ và đọc hiểu tài liệu nội bộ.
- System instruction giúp thiết lập phạm vi công việc, quy trình, tone giọng, quy tắc ràng buộc, chuẩn đầu ra.

**5 Rào cản cốt lõi:**

| # | Rào cản | Mô tả chi tiết |
|---|---------|----------------|
| 1 | **Mất bối cảnh (Context Loss)** | Khi hội thoại kéo dài, AI "quên" chỉ thị ban đầu do giới hạn Context Window → phải nhắc lại liên tục. |
| 2 | **Ảo giác dữ liệu (Hallucination)** | Thiếu dữ liệu đầu vào → AI tự suy diễn, tạo số liệu/tên KH/tính năng không có thật → phải đóng vai QA rà soát. |
| 3 | **Dữ liệu bị cô lập** | Kết quả nằm trong khung chat, phải copy-paste thủ công sang Word/Excel/tool khác → dễ sai sót, mất thời gian. |
| 4 | **Đứt gãy quy trình** | Không thể chạy chuỗi A→B→C liên hoàn; người dùng phải đứng giữa làm trạm trung chuyển thủ công. |
| 5 | **Rủi ro bảo mật** | Dữ liệu nội bộ (khách hàng, tài chính, chiến lược) có thể vô tình tải lên server của bên thứ ba để huấn luyện AI. |

---

### Cấp 2 — Custom GPT / Claude Project tích hợp Skills

**Ưu điểm:**
- Chỉ kích hoạt kỹ năng liên quan khi cần, tránh AI quá tải bộ nhớ.
- Mỗi project có bộ nhớ riêng, thông tin tập trung, không bị nhiễu.
- Đóng gói nghiệp vụ thành Skills để AI xử lý chuẩn xác tác vụ lặp lại.

**5 Điểm mù / Rào cản:**

| # | Điểm mù | Mô tả chi tiết |
|---|---------|----------------|
| 1 | **Phụ thuộc nền tảng bên thứ ba** | Toàn bộ tài liệu nội bộ vẫn lưu trên server Anthropic/OpenAI → bị động nếu tài khoản bị khóa hoặc server bảo trì. |
| 2 | **Silo bối cảnh (đứt gãy thông tin)** | Project A không tự chuyển dữ liệu sang Project B → người dùng lại phải đóng vai trạm trung chuyển. |
| 3 | **Chi phí cao & giới hạn quota** | ~$20/tháng nhưng quota khắt khe (giới hạn câu lệnh mỗi 5 giờ); token API đắt đỏ khi dùng mô hình mạnh nhất. |
| 4 | **Quá tải thông tin (RAG cơ bản)** | Tài liệu dài (500 trang) → AI đọc lướt (skimming), bỏ sót dữ liệu trọng yếu → GIGO (Garbage In, Garbage Out). |
| 5 | **Rào cản kỹ thuật khi xây Multi-Agent** | Giao diện web chỉ cho 1-1; muốn chuỗi AI1→AI2→AI3 phải cài Python, dùng CrewAI/LangChain và viết code. |

---

### Cấp 3 — Phòng Ban AI với Google Antigravity

**Ưu điểm:**
- **IDE Agentic**: môi trường vận hành AI tập trung, đóng vai trò như hệ điều hành cho phòng ban AI.
- Cấu hình bằng file văn bản thuần (Markdown) — không cần lập trình.
- Dữ liệu lưu trữ **local** trên máy tính cá nhân — không phụ thuộc knowledge base của bên thứ ba. Lưu ý: nội dung prompt/tài liệu vẫn đi qua Gemini API (cloud) khi xử lý — với dữ liệu nhạy cảm, cần ẩn danh hóa trước khi đưa vào.

**Nhược điểm:**
- Giao diện phức tạp hơn các AI Tool thông thường.
- Cần cài đặt và thử nghiệm kỹ để đảm bảo các Agent phối hợp chính xác.

---

### So sánh nền tảng

| Nền tảng | Giao tiếp | Phù hợp Non-tech? | Multi-Agent | Đối tượng |
|----------|-----------|-------------------|-------------|-----------|
| Claude Code | Gõ lệnh Terminal | ❌ Yêu cầu lập trình chuyên sâu | ✅ Có (Agent Teams) | Kỹ sư phần mềm |
| Cursor | Giao diện VS Code | ⚠️ Đòi hỏi tư duy Developer | ✅ Chạy nhiều AI cục bộ | Lập trình viên |
| **Antigravity** | Chọn File + Cấu hình Markdown | ✅ Thao tác trực quan, dễ tiếp cận | ✅ Tổ hợp chuyên viên AI liên hoàn | **Nhân sự & Quản lý Doanh nghiệp** |

---

### Vai Trò Người Dùng Qua 3 Cấp Độ

| Tiêu chí | AI Cấp 1 | AI Cấp 2 | Cấp 3 (Antigravity) |
|----------|----------|----------|----------------------|
| **Vị trí** | Người thao tác (Operator) | Quản lý dự án độc lập | **Nhà Điều Phối Hệ Thống (Orchestrator)** |
| **Hành vi** | Hỏi đáp 1:1, sửa lỗi thủ công | Thiết lập cấu trúc Project và xây dựng Skills | Thiết kế luồng giá trị, ủy quyền tự động |
| **Hiệu suất** | Tăng ~10-20% | Tăng ~40-60% | Tự động hóa **70-90%** các tác vụ lặp lại |

---

## Phần 2: Hệ Thống & Kiến Trúc 7 Cấu Phần

### Tại sao cần kiến trúc 7 cấu phần?
> "Bạn không thể cấp cho nhân sự một thiết bị trống rỗng mà không có quy trình, rồi kỳ vọng họ tự hoàn thành xuất sắc công việc. AI cũng tuân theo nguyên lý này."

Antigravity kiến tạo một **"Phòng ban số" hoàn chỉnh** — không chỉ là công cụ đơn lẻ. Hệ thống được thiết kế qua 4 tầng, 7 thành phần:

---

### Tầng 1 — Cơ Cấu Tổ Chức Phòng Ban AI

#### Kiến Trúc Điều Phối (Cơ Chế Ủy Quyền Tự Động)
**Nguyên tắc:** Phân tách quyền hạn rõ ràng, tuyệt đối không để 1 AI đảm nhiệm toàn bộ quy trình (giảm rủi ro sai lệch).

**Thành phần 1 — AI Agent (Nhân Sự Số):**
- Mỗi Agent bị **giới hạn quyền truy cập** — không can thiệp vào bộ nhớ project khác.
- Được định hình bằng **1 file Markdown** khai báo Sứ mệnh (Mission) và Năng lực cốt lõi.
- Ví dụ: Agent chuyên dịch thuật tuyệt đối không được phép vẽ biểu đồ tài chính.
- Tác dụng: Bảo vệ tính **Nhất Quán và Chính Xác** toàn hệ thống.
- 📁 Thư mục: `.agent/agents/xyz.md`

**Quiz tương tác (trang 20-21):** Học viên xác định Agent nào đảm nhiệm:
- Nhiệm vụ 1: Tiếp nhận yêu cầu gốc, phân rã thành nhiệm vụ nhỏ → **Coordinator (Điều phối)**
- Nhiệm vụ 2: Lên ý tưởng, soạn thảo Email giới thiệu sản phẩm → **AI Content (Chuyên viên)**
- Nhiệm vụ 3: Rà soát lỗi chính tả, cảnh báo vi phạm văn phong → **AI Kiểm duyệt (Kiểm toán)**

---

### Tầng 2 — Luật Lệ và Tri Thức Tổ Chức

**Thành phần 2 — Rules (Luật Lệ):**
- Rules là **mệnh lệnh tối cao** được thiết lập vào "Hiến pháp" của AI (Constitutional AI).
- Ví dụ: *"Quy tắc 1: Bạn là AI Kế toán. Nếu thiếu dữ liệu đầu vào, BẮT BUỘC DỪNG HOẠT ĐỘNG VÀ CẢNH BÁO"*
- Nếu thiếu Rules: AI tự suy diễn → rủi ro báo cáo sai lệch.
- **Kỷ luật hệ thống quan trọng hơn Kỹ năng.**

**Thành phần 3 — Knowledge Base (Kho Tri Thức):**
- Giải pháp triệt để cho tình trạng mất bối cảnh.
- Doanh nghiệp lưu trữ SOP, tài liệu (.md, .pdf) vào thư mục hệ thống local.
- Agent luôn có khả năng truy xuất (RAG) chính xác — không bị giới hạn bộ nhớ ngắn hạn.
- Tài sản trí tuệ công ty được **bảo tồn và kế thừa** xuyên suốt qua các thế hệ nhân sự.

---

### Tầng 3 — Quy Trình Vận Hành và Nghiệp Vụ Chuyên Môn

**Thành phần 4 — Workflow (Luồng Vận Hành):**
- Chuỗi giá trị: **Yêu cầu → Phân tích → Lên dàn ý → Xuất báo cáo**
- Đảm bảo tính liên tục, tuyệt đối không bỏ qua bước kiểm duyệt trung gian.
- Người quản lý chỉ cần **khởi chạy** — các Agent A, B, C tuần tự làm việc, kiểm tra chéo nhau đến khi xuất file hoàn chỉnh.
- 📁 Thư mục: `.agent/workflows/`

**Thành phần 5 — Skills (Kỹ Năng Chuyên Môn):**
- Các nghiệp vụ chuyên môn được số hóa thành file cấu hình riêng biệt.

| Bước | Mô tả |
|------|-------|
| **01 Gọi Skill** | Agent gọi `/slide-designer` → lập tức triển khai chuyên môn thiết kế slide tối ưu. |
| **02 Xuất chuẩn** | Buộc AI xuất theo template chuẩn của Skill, không viết tự do. |
| **03 Tiết kiệm thời gian** | Không cần gõ giải thích dài dòng mỗi lần ra lệnh. |

- 📁 Thư mục: `.agent/skills/`

---

### Tầng 4 — Hạ Tầng (Infrastructure)

**Thành phần 6 — Hạ Tầng Dữ Liệu Local:**

Workspace lưu trữ toàn bộ dữ liệu tại ổ cứng máy tính — không phụ thuộc knowledge base bên thứ ba. (Lưu ý: nội dung gửi cho AI xử lý vẫn đi qua Gemini API trên cloud — dữ liệu nhạy cảm cần ẩn danh hóa trước.)

| Thư mục | Vai trò |
|---------|---------|
| 📁 `inputs/` | Dữ liệu thô, báo cáo tài chính đầu vào. Không cần tải lên cloud. |
| 📁 `artifacts/` | Nơi các Agent làm việc với nhau, lưu report/log trung gian. |
| 📁 `outputs/` | File thành phẩm (PPTX, Markdown) — hệ thống tự động lưu khi Workflow hoàn tất. |

**Thành phần 7 — Máy tính cá nhân:**
- RAM tối thiểu 8GB (khuyến nghị 16GB) để chạy đa nhiệm.

---

### Kiến Trúc 7 Cấu Phần — Tóm Tắt Giải Pháp

| Vấn đề | Giải pháp Antigravity |
|--------|----------------------|
| Quá tải dữ liệu (bỏ sót) | Phân cấp Agent để kiểm tra chéo |
| Đứt gãy bối cảnh | Workflow kết nối liên hoàn End-to-End |
| Chi phí Cloud đắt đỏ | Hạ tầng Local + Gemini Account |
| Rào cản lập trình | Cấu hình bằng file Markdown thuần túy |

---

## Phần 3: Thực Hành

### Tổng quan buổi thực hành
Sau lý thuyết, học viên tự tay điều phối AI Agent chạy quy trình công việc thực tế hoàn chỉnh qua 4 bước:

1. **Thiết lập môi trường** — Cấu hình Antigravity theo hướng dẫn.
2. **Hiểu tổ chức phòng ban AI** — Tìm hiểu chức năng Coordinator và Chuyên viên AI qua file Markdown.
3. **Chạy Workflow** — Khởi động chuỗi tự động, quan sát các AI phối hợp.
4. **Xuất file thành phẩm** — Nhận kết quả tự động lưu vào `artifacts/`.

---

### Demo Steps (Giảng viên thực hiện trước)

**Bước 1:** Giáo viên xử lý hệ thống (học viên quan sát).
**Bước 2:** Thảo luận khả năng ứng dụng vào doanh nghiệp.
**Bước 3:** Học viên thao tác chạy quy trình.

**Thao tác cụ thể:**
1. Chọn Folder Workspace → Khởi động Manager.
2. Nhập lệnh `/start-session` và đưa yêu cầu công việc.
3. Hệ thống AI bắt đầu xử lý ngầm (tự động, không cần copy-paste).
4. Quan sát hiệu suất và thành phẩm.

**Thực hành với vai trò Orchestration:**
1. Nhập cú pháp `/onboard-new-user` vào Input Box.
2. Cung cấp bối cảnh và trả lời câu hỏi khai thác từ hệ thống.
3. Kiểm tra kết quả tại thư mục `artifacts/`.

**Câu hỏi thảo luận:**
> "Nếu những công việc lặp đi lặp lại của anh/chị được tích hợp vào Workflow này, anh/chị sẽ ưu tiên tự động hóa quy trình nào vào ngày mai?"

*Gợi ý: Sàng lọc CV nhân sự / Trích xuất Báo cáo Doanh thu tuần / Tự động hóa soạn thảo nội dung đa kênh.*

---

### Xử Lý Sự Cố (Troubleshooting)

| Lỗi phổ biến | Cách khắc phục |
|--------------|----------------|
| Gián đoạn kết nối mạng (khi gọi API) | Thử Start Session lại để kết nối lại. |
| Sai cú pháp lệnh (VD: `/onb-oard...`) | Đảm bảo nhập chuẩn định dạng `/skill-name`. |
| Độ trễ giao diện (không hiện thông báo) | Chờ vài giây, kiểm tra trực tiếp thư mục `artifacts/` xem hệ thống đã xử lý ngầm xong chưa. |

---

## Bài Tập (Assignment)

**Yêu cầu:** Soạn thảo Bộ Quy tắc (Rules) và đưa Dữ liệu nội bộ (Data) của doanh nghiệp vào hệ thống.

| Bước | Hành động |
|------|-----------|
| **01** | Đưa tài liệu nội bộ vào Materials (VD: SOP, Quy định nội bộ, Template). |
| **02** | Khởi chạy lệnh — yêu cầu hệ thống convert ra Markdown, quy hoạch lưu trữ đúng folder, ghi vào danh mục để truy xuất sau. |
| **03** | Đánh giá kết quả — hỏi đáp để Agent tự truy vấn trong hệ thống lưu trữ và đưa ra nội dung chính xác. |

---

## Tổng Kết Buổi 01

| Đã HIỂU | Đã BIẾT | Đã LÀM |
|---------|---------|--------|
| 3 Cấp độ ứng dụng AI & 10 rào cản cốt lõi | Kiến trúc 7 Cấu phần Top-Down của Antigravity | Vận hành thực tế Multi-Agent Workflow ngay tại lớp |

> **Hẹn gặp lại tại Buổi 02:** Vận hành Workspace qua vòng lặp cải tiến liên tục (PDCA).

---

## Validation Checklist

- [ ] Học viên phân biệt được 3 cấp độ AI và 5 rào cản của Cấp 1.
- [ ] Học viên giải thích được tại sao Cấp 2 vẫn còn điểm mù (silo, chi phí, quota, RAG).
- [ ] Học viên mô tả được kiến trúc 4 tầng / 7 cấu phần của Antigravity.
- [ ] Học viên vào được Antigravity và chạy được lệnh `/onboard-new-user`.
- [ ] Học viên xuất được file thành phẩm vào thư mục `artifacts/`.
- [ ] Học viên xác định được quy trình lặp lại cụ thể trong công việc để tự động hóa.

---

## Kỹ Thuật Yêu Cầu (Technical Requirements)

- Máy tính RAM >= 8GB (khuyến nghị 16GB).
- Google Antigravity đã cài đặt và cấu hình.
- Tài khoản Gemini (để kết nối API local).
- Folder Workspace mẫu đã tải về.

---

*Tham chiếu: `assets/source-materials/original/AI4A01_Slide buổi 1.pdf` — 51 trang.*

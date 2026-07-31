# Session 07 — Quy tắc bàn giao và kiểm duyệt

## Source
- `assets/source-materials/original/MindX_AG_Slide 7.pdf` (26 trang)

---

## Mục tiêu học tập

| # | Mục tiêu |
|---|-----------|
| 1 | **Tư duy Handoff** — Phân định chính xác ranh giới và điểm chuyển giao trách nhiệm giữa AI và con người trong một quy trình làm việc |
| 2 | **Thiết lập Checkpoint** — Xây dựng giao diện Web đóng vai trò điểm kiểm soát, đảm bảo chất lượng đầu ra AI tuân thủ mô hình Human-in-the-Loop |
| 3 | **Audit 7 Thành tố** — Áp dụng bộ khung 7 thành tố để đánh giá và tối ưu hệ thống Lead Scoring thực tế |

---

## Phần 1: Tư duy Handoff

### Khái niệm Handoff (bàn giao công việc)
- Handoff = điểm tiếp sức: công việc, trách nhiệm và dữ liệu chuyển từ thực thể A → thực thể B.
- **Handoff thành công** = người nhận có đủ ngữ cảnh để tiếp quản, **không cần hỏi lại**.
- Trong doanh nghiệp: "Sai một ly đi một dặm" thường xảy ra ở khâu bàn giao.

### Ví dụ thực tế — Hậu quả khi Handoff kém
> Data team bàn giao cho Sales team danh sách khách hàng "rác" → toàn bộ chi phí quảng cáo và nhân sự Telesale bị lãng phí.

| Hậu quả | Mô tả |
|---------|-------|
| Lãng phí nguồn lực | Tiền quảng cáo và thời gian nhân sự đổ sông đổ biển |
| Sai lệch mục tiêu | Dữ liệu bị biến dạng, cấp quản lý đưa ra quyết định kinh doanh sai hướng |
| Đứt gãy niềm tin | Nội bộ đổ lỗi, nhân sự mệt mỏi vì re-work |
| Khách hàng rời bỏ | Khách phải giải thích lại nhu cầu cho từng bộ phận |

### Hai hình thức bàn giao

| | Bàn giao dữ liệu | Bàn giao hệ thống |
|--|-----------------|-------------------|
| **Định dạng** | Excel / CSV | GitHub / Source Code |
| **Đối tượng nhận** | Đội Sales, Marketing, Quản lý trực tiếp | Đội kỹ thuật, Khách hàng mua giải pháp |
| **Giá trị** | Kết quả tức thì — Ai là khách VIP? Ai cần gọi ngay? | Tài sản trí tuệ — Logic chấm điểm, mã nguồn, cách vận hành |

### Tại sao AI không nên chạy 100% tự động
- **Hallucination & Sai lệch ngữ cảnh**: VD khách nhắn "tôi muốn thi SAT", AI nhầm từ khóa "IELTS" và vẫn chấm 100 điểm VIP — sai hoàn toàn.
- **Mất uy tín hệ thống**: Sales nói "AI ngu quá, lọc toàn khách sai" → từ chối sử dụng.
- ⚠️ **Kết luận**: Cần một "Checkpoint" để con người can thiệp trước khi dữ liệu được xuất ra ngoài.

---

## Phần 2: Thiết lập Checkpoint & Audit 7 Thành tố

### Human-in-the-Loop (HITL)
Quy trình: **AI đề xuất → Người duyệt → Hệ thống thực thi**

| Lợi ích | Mô tả |
|---------|-------|
| An toàn tuyệt đối | Loại bỏ 100% lỗi ngớ ngẩn của AI trước khi xuất file — không có lỗi nào lọt đến tay Sales |
| Đào tạo ngược | Mỗi lần người dùng sửa lỗi trên App là dữ liệu quý để tinh chỉnh lại Prompt và Knowledge Base |

---

### Ôn tập 7 Thành tố hệ thống

#### Nhóm 1: Đầu vào & Công cụ
> *Ba thành tố đầu tiên tạo nền tảng vận hành — thiếu 1 trong 3, hệ thống không thể chạy.*

| Thành tố | Vai trò | Chi tiết |
|----------|---------|----------|
| **Input** | Dữ liệu đầu vào | Phải đa dạng, thô, chưa qua xử lý: JSON từ form đăng ký, Excel từ đội Sales, Google Sheets trực tiếp |
| **AI Agent** | Bộ não | Thực hiện logic chấm điểm dựa trên Prompt thiết kế sẵn; phân tích ngữ cảnh hội thoại; áp dụng tiêu chí từ Knowledge Base |
| **Tools** | Công cụ hỗ trợ | Streamlit (giao diện người dùng), Pandas (xử lý bảng dữ liệu), GitHub (lưu trữ & bàn giao) |

**Câu hỏi kiểm tra**: Thiếu 1 trong 3 thành tố trên, hệ thống có chạy được không? → **Không. Cả ba đều là điều kiện cần thiết.**

#### Nhóm 2: Tri thức & Quy trình
> *Bốn thành tố còn lại quyết định chất lượng và tính bền vững của hệ thống theo thời gian.*

| Thành tố | Vai trò | Chi tiết |
|----------|---------|----------|
| **Knowledge Base** | "Luật chơi" của hệ thống | File `.txt` chứa bộ tiêu chí chấm điểm — thay đổi chiến lược chỉ cần sửa file này |
| **Memory** | Lưu vết lịch sử | Session State (tạm thời) + GitHub Commits (vĩnh viễn) — cho phép truy vết mọi thay đổi |
| **Workflow** | Luồng xử lý | Input → AI Agent → Dashboard → Excel — kết nối tất cả thành tố lại với nhau |
| **Output** | Sản phẩm cuối cùng | File Excel sạch, sẵn sàng bàn giao cho đội Sales mà không cần chỉnh sửa thêm |

---

### Deep Dive: Thành tố số 4 — Knowledge Base

**Tại sao quan trọng nhất?**
- Hầu hết mọi người viết Prompt theo cảm hứng → mỗi lần chạy một kiểu, không nhất quán, không thể kiểm soát.
- Hệ thống Antigravity yêu cầu tách riêng "Luật chấm điểm" ra một file độc lập — đây là điểm khác biệt cốt lõi.

**Lợi ích thực tế**: Khi trung tâm đổi chiến lược (VD: từ IELTS → SAT):
1. Mở file `.txt` Knowledge Base
2. Sửa tiêu chí chấm điểm
3. Lưu lại và chạy hệ thống

Không cần sửa một dòng code nào → hệ thống cực kỳ linh hoạt và dễ bảo trì.

---

### Deep Dive: Thành tố số 5 — Memory & GitHub

Memory hoạt động ở hai cấp độ khác nhau, phục vụ hai mục đích khác nhau:

| Cấp độ | Cơ chế | Mục đích |
|--------|--------|----------|
| **Memory trên App** | `st.session_state` | Lưu tạm thời lựa chọn "Duyệt / Loại bỏ" trong phiên làm việc hiện tại. Reset khi đóng trình duyệt — phù hợp cho quyết định ngắn hạn |
| **Memory trên GitHub** | Git Commits | Lưu vĩnh viễn các phiên bản qua từng commit với timestamp. Trả lời được câu hỏi: "Tại sao tháng trước AI chấm điểm khác tháng này?" → khả năng **Traceability** |

---

### Workflow: Quy trình bàn giao chuẩn — 4 bước

```
Bước 1 — Ingest:   AI đọc dữ liệu từ Google Sheets hoặc JSON (nguồn thô chưa xử lý)
Bước 2 — Process:  AI Agent phân tích và chấm điểm dựa trên Knowledge Base ("luật chơi")
Bước 3 — Review:   Dashboard hiển thị Grid Checkpoint để con người kiểm tra
Bước 4 — Handoff:  Xuất Excel và bàn giao cho Sales
```

---

### Thiết kế giao diện Checkpoint lý tưởng
> *Mục tiêu: Biến code phức tạp thành trải nghiệm "Click & Approve" đơn giản cho dân văn phòng.*

| Tính năng | Mô tả |
|-----------|-------|
| **Bảng dữ liệu tương tác** | `st.data_editor` cho phép quản lý sửa trực tiếp — không cần tải file về, không cần mở Excel riêng |
| **Tính minh bạch (Explainability)** | AI phải giải thích lý do chấm điểm: "Tại sao tôi chấm khách này 90 điểm?" — không có hộp đen |
| **Cột Dropdown Trạng thái** | Cho phép User đổi trạng thái từ "Chờ Review" → "Đã Duyệt" chỉ với một cú click |

---

### 4 Mức độ tự chủ của hệ thống AI

> Hầu hết doanh nghiệp nên bắt đầu ở Level 2 và tăng dần khi đã xây dựng được niềm tin vào hệ thống AI.

| Level | Tên | Mô tả |
|-------|-----|-------|
| 1 | **Gợi ý** | AI chỉ viết ghi chú, người tự copy vào Excel thủ công |
| 2 | **Giám sát** | AI đẩy lên App, người tick chọn rồi xuất Excel — **mức học hôm nay** |
| 3 | **Bán tự động** | AI tự đẩy khách thường vào CRM, chỉ khách VIP/Nghi ngờ mới hiện lên App duyệt |
| 4 | **Tự động hoàn toàn** | AI tự làm hết, người chỉ xem báo cáo hiệu quả cuối tháng |

---

### GitHub & Streamlit: Bộ đôi hoàn hảo cho Handoff

> Kết nối: GitHub đẩy code lên Streamlit Cloud để tạo ra link web công khai. Bàn giao cho khách hàng = gửi link — đơn giản và chuyên nghiệp.

| Công cụ | Vai trò | Tính năng |
|---------|---------|-----------|
| **GitHub** | Kho chứa mã nguồn — bàn giao hệ thống | Version control đầy đủ, truy vết mọi thay đổi, cộng tác nhóm, bảo vệ tài sản trí tuệ |
| **Streamlit** | Mặt tiền ứng dụng — bàn giao trải nghiệm | Không cần frontend, deploy cloud vài phút, tạo link web công khai |

---

## Demo — Quy trình Demo Chuẩn

**Đề bài demo**: Xây dựng hệ thống AI Lead Scoring & Automation cho ngành Bất động sản.

### Giai đoạn 1 — Thiết lập Bộ nhớ (MEMORY)
- Mở Antigravity → nhập lệnh tạo file `lead_scoring_skill.md`
- File hướng dẫn AI lấy dữ liệu từ Google Sheets và chấm điểm cho ngành BĐS
- Lưu file vào thư mục dự án
- Script: *"File Skill này giúp AI ghi nhớ nghiệp vụ. Sau này chỉ cần đưa file này cho bất kỳ con AI nào, nó sẽ làm việc y hệt như bây giờ."*

### Giai đoạn 2 — Chuẩn bị Nguyên liệu (INPUT + KNOWLEDGE)
- **Tạo Input**: Tải file 500 khách hàng giả lập ngành BĐS → tải lên Google Sheets → bật chế độ "Bất kỳ ai có liên kết đều có thể xem"
- **Tạo Knowledge**: Nhập file `tieu_chi_cham_diem.txt` quy định: Khách mua biệt thự +50đ, khách nhầm số -50đ
- Script: *"Dữ liệu từ Google Sheets là [INPUT]. Bộ quy tắc chấm điểm là [KNOWLEDGE]. Một hệ thống AI mạnh phải dựa trên nguồn tri thức chuẩn xác."*

### Giai đoạn 3 — Xây dựng Cỗ máy (TOOLS + AGENT + WORKFLOW)
- Tạo file `app_lead_scoring.py` bằng Streamlit
- Dùng `st.data_editor` → tạo bảng cho phép con người duyệt trạng thái
- Tích hợp logic "AI Scoring" (Agent) tự động quét mô tả khách hàng
- Mapping: Logic chấm điểm → [AGENT] | Con người duyệt bảng → [WORKFLOW - Human Checkpoint]
- Script: *"Con người chốt hạ kết quả cuối cùng."*

### Giai đoạn 4 — Xuất bản & Bàn giao (OUTPUT)
1. Đăng ký tài khoản GitHub và Streamlit
2. Đẩy code lên GitHub (commit & push repo)
3. Vào `share.streamlit.io` → Deploy (kết nối repo)
4. Bấm nút "Tải file Excel" trên App → nhận kết quả đã làm sạch

Script: *"Dữ liệu sạch đã sẵn sàng để bàn giao cho bộ phận Sales. Quy trình tự động hóa đã hoàn tất."*

---

## Thực hành

### Task 1 — Thực hành cơ bản

**Yêu cầu**: Xây dựng hệ thống AI Lead Scoring & Automation cho ngành Bất động sản:

1. Phát triển quy trình tự động hóa lấy dữ liệu khách hàng từ Google Sheets (link dữ liệu được cấp)
2. Dùng AI chấm điểm tiềm năng dựa trên bộ quy tắc nghiệp vụ cho trước (link bộ quy tắc được cấp)
3. Xây dựng Web App cho phép con người kiểm duyệt, chỉnh sửa trạng thái khách hàng trước khi chốt kết quả (HITL)
4. Hệ thống phải xuất được dữ liệu đã xử lý ra file Excel để bàn giao

**3 nhiệm vụ thực hành**:

| Bước | Nhiệm vụ | Mô tả |
|------|----------|-------|
| 1 | Khởi tạo App bằng Mega Prompt | Dùng Mega Prompt đã chuẩn bị để tạo toàn bộ cấu trúc ứng dụng Streamlit trong một lần chạy duy nhất |
| 2 | Kiểm tra 7 Thành tố qua Sidebar | Mở Sidebar của App và xác nhận đủ 7 thành tố: Input, Agent, Tools, Knowledge Base, Memory, Workflow, Output |
| 3 | Thực hiện Checkpoint & Xuất file | Chạy quy trình Review trên Dashboard, phê duyệt từng dòng, xuất file Excel sạch để bàn giao cho Sales |

**Bảng Audit 7 thành tố** (học viên phải điền đủ mới được coi là hoàn thành):

| # | Thành tố | Tên File/Công cụ | Mô tả |
|---|----------|-----------------|-------|
| 1 | Input | Google Sheets | 500 khách hàng BĐS |
| 2 | Agent | Logic chấm điểm | Tự động quét mô tả |
| 3 | Tools | Streamlit, Pandas, GitHub | Nền tảng xây dựng |
| 4 | Knowledge | `tieu_chi_cham_diem.txt` | Quy tắc +50đ / -50đ |
| 5 | Memory | `st.session_state` | Ghi nhớ trạng thái |
| 6 | Workflow | AI → Người duyệt → Excel | Human Checkpoint |
| 7 | Output | File Excel Bàn Giao | Dữ liệu sạch cho Sales |

---

### Task 2 — Nâng cấp hệ thống (2 mục tiêu trọng tâm)

**Đề bài**: Nâng cấp hệ thống AI Lead Scoring với 2 mục tiêu:

#### Mục tiêu 1 — Bảo mật dữ liệu (Security)
Thiết lập kết nối an toàn để ứng dụng truy xuất dữ liệu khi Google Sheets ở chế độ **Riêng tư (Private)**, thay vì dùng link công khai.

**4 bước thực hiện**:

| Bước | Tên | Hành động |
|------|-----|-----------|
| 1 | Lấy chìa khóa từ Google Cloud | Console Cloud Google → Tạo Project mới → Bật Google Sheets API → Credentials → Create Service Account → Tab Keys → Add Key → JSON → Tải file về máy |
| 2 | Kết nối Sheet với "Robot" | Mở file `.json`, copy email dòng `client_email` → Mở Google Sheet (Private) → Share → Dán email → Cấp quyền Viewer |
| 3 | Cấu hình "Hộp đen bảo mật" (Secrets) | Streamlit Cloud Dashboard → dấu 3 chấm cạnh App → Settings → Secrets → Dán toàn bộ nội dung file `.json` |
| 4 | Sửa Code để dùng Chìa khóa | Dùng thư viện `st-gsheets-connection` để đọc dữ liệu bảo mật thay vì dùng link công khai |

#### Mục tiêu 2 — Tối ưu giao diện (Premium UI/UX)
Thiết kế lại giao diện theo phong cách chuyên nghiệp:

| Tính năng | Cách làm |
|-----------|---------|
| **Dashboard Metrics** | Dùng `st.columns(3)` + `st.metric` để hiển thị: Tổng khách hàng, Khách VIP (+50đ), Khách Rác (-50đ) |
| **Logo & Banner** | Dùng `st.image` để đưa logo thương hiệu vào Sidebar hoặc trên cùng trang chủ |
| **CSS & Emoji** | Dùng `st.markdown` với CSS tùy chỉnh; dùng `st.divider()` và icon phù hợp ngành: BĐS, Spa |

---

## Artifact buổi học

- File `lead_scoring_skill.md` — Skill AI ghi nhớ nghiệp vụ chấm điểm
- File `tieu_chi_cham_diem.txt` — Knowledge Base quy tắc +/-điểm
- File `app_lead_scoring.py` — App Streamlit với HITL checkpoint
- Repo GitHub — Lưu trữ toàn bộ mã nguồn và lịch sử commit
- Link Streamlit Cloud — URL web app công khai để bàn giao
- **Bảng Audit 7 thành tố** đã điền đầy đủ

---

## Bài tập về nhà

> **Tạo 1 App quản lý công việc trong ngành của các anh chị**

Học viên tự thiết kế và xây dựng một ứng dụng Streamlit áp dụng toàn bộ kiến thức buổi 7:
- Có đủ 7 thành tố
- Có Human Checkpoint
- Xuất được file Excel bàn giao

---

## Validation

- [ ] Học viên điền đầy đủ Bảng Audit 7 thành tố
- [ ] App chạy được với dữ liệu thực từ Google Sheets (public hoặc private)
- [ ] Giao diện có cột dropdown trạng thái "Chờ Review" / "Đã Duyệt"
- [ ] AI giải thích được lý do chấm điểm (Explainability)
- [ ] Xuất được file Excel sạch sau khi duyệt
- [ ] Code được đẩy lên GitHub với ít nhất 1 commit có timestamp
- [ ] App được deploy trên Streamlit Cloud, có link công khai
- [ ] (Task 2) Kết nối được Google Sheets ở chế độ Private qua Service Account
- [ ] (Task 2) Giao diện có Dashboard Metrics hiển thị số liệu tổng hợp

---

## Tổng kết thông điệp chính

> *"Xây dựng AI không chỉ là viết code, mà là thiết kế một quy trình tin cậy để con người có thể làm việc ít hơn nhưng hiệu quả hơn."*

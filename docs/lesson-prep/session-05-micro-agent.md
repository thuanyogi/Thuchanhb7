# Session 05 — Triển Khai AI Agent Như Nhân Sự Chuyên Trách

## Source
- `assets/source-materials/original/MindX_AG_Slide 5.pdf`

---

## Mục tiêu học tập

Kết thúc buổi học, học viên đạt được 3 mục tiêu:

1. **MCP + API tích hợp AI Agent** — Tích hợp hiệu quả giao thức MCP và API để mở rộng không gian làm việc của AI Agent.
2. **Thiết lập AI Agent đáp ứng tiêu chuẩn kỹ thuật nền tảng** — Xây dựng hoàn chỉnh AI Agent ứng dụng khung MICRO, đảm bảo tối ưu hóa từng yếu tố trong cấu trúc.
3. **FIN Agent** — Phát triển và tối ưu hóa các tính năng nâng cao của FIN Agent để giải quyết các bài toán thực tế phức tạp.

---

## Cấu trúc buổi học

| Phần | Nội dung |
|------|----------|
| Phần 1 | Thiết lập AI Agent chuẩn |
| Phần 2 | MCP + API tích hợp AI Agent |
| Phần 3 | Thực hành |

---

## Phần 1 — Thiết Lập AI Agent Chuẩn

### Bối cảnh vấn đề

Công việc văn phòng hiện tại tiêu tốn nguồn lực khổng lồ vì quy trình thủ công lặp đi lặp lại:

**Quy trình hiện tại:**
- Copy-paste thủ công từng dòng dữ liệu
- Phân loại thủ công — dễ nhầm lẫn
- Làm report lặp lại mỗi ngày

**Hậu quả:**
- Tốn thời gian — hàng giờ mỗi ngày cho công việc lặp lại
- Không mở rộng được — tăng khối lượng → phải tăng nhân sự
- Sai sót cao — con người mệt mỏi → lỗi không tránh khỏi
- Nhận dữ liệu từ nhiều nguồn khác nhau

### AI Agent = Nhân Sự AI

Giống như một nhân viên thực thụ, một AI Agent cần được trang bị đầy đủ để hoạt động hiệu quả:

| # | Thành phần | Mô tả |
|---|-----------|-------|
| 1 | **JD Công Việc** | Mô tả rõ ràng nhiệm vụ và phạm vi trách nhiệm của Agent |
| 2 | **Quy Trình Làm Việc** | Các bước xử lý được định nghĩa rõ ràng từ đầu đến cuối |
| 3 | **Quy Tắc Xử Lý** | Constraints và điều kiện để Agent ra quyết định đúng đắn |
| 4 | **Input & Output Rõ Ràng** | Dữ liệu đầu vào và kết quả đầu ra được xác định cụ thể |
| 5 | **Công Cụ Hỗ Trợ** | Các tool và API mà Agent có thể gọi để thực hiện nhiệm vụ |

### Khung MICRO — Chuẩn Hóa AI Agent

Năm thành phần cốt lõi để xây dựng một AI Agent hoạt động hiệu quả:

| Chữ | Thành phần | Ý nghĩa |
|-----|-----------|---------|
| **M** | Mission | Nhiệm vụ cụ thể của Agent là gì? |
| **I** | Input | Dữ liệu đầu vào Agent nhận được |
| **C** | Constraints | Quy tắc và giới hạn xử lý |
| **R** | Role | Vai trò và danh tính của Agent |
| **O** | Output | Kết quả cụ thể Agent tạo ra |

### Ví dụ thực tế: Finance Agent

Áp dụng khung MICRO vào trường hợp quản lý tài chính doanh nghiệp:

| Thành phần | Nội dung |
|-----------|---------|
| **M** — Mission | Quản lý và phân loại chi phí doanh nghiệp |
| **I** — Input | Dữ liệu chi tiêu từ các phòng ban |
| **C** — Constraints | >500k → kiểm tra; liên quan khách → cần chứng từ |
| **R** — Role | Finance Assistant chuyên trách |
| **O** — Output | JSON + Google Sheet cập nhật tự động |

**Luồng xử lý:** Nhận dữ liệu → Phân loại → Ghi vào sheet

---

## Phần 2 — MCP + API Tích Hợp AI Agent

### MCP là gì?

**MCP = Model Context Protocol**

> Cách AI sử dụng các công cụ bên ngoài để thực hiện hành động thực tế trong thế giới số.

MCP cho phép AI không chỉ "nghĩ" mà còn "làm" — thực thi hành động trong hệ thống thực tế.

**Trong buổi học này:**
- GG Anti gọi Python file
- Python thực thi logic xử lý
- Kết quả ghi vào hệ thống thật
→ **Đây là ví dụ AI *dùng tool* (tool use / command execution).** MCP (Model Context Protocol) là **giao thức chuẩn hoá** cách AI kết nối tool và dữ liệu bên ngoài qua MCP server — pipeline hôm nay minh hoạ cùng nguyên lý "AI có tay", chưa phải MCP đúng nghĩa.

> **Kiến thức nền cho giảng viên:** phân biệt *tool use / function calling* (AI gọi trực tiếp một tool cụ thể — như demo hôm nay) với *MCP* (giao thức client-server: AI tự khám phá danh sách tool của MCP server rồi gọi qua chuẩn chung). Refresh note: đối chiếu https://modelcontextprotocol.io trước buổi dạy.

### API là gì?

**API = Application Programming Interface**

> Cổng giao tiếp giữa các hệ thống, cho phép chúng "nói chuyện" với nhau một cách có cấu trúc.

**Luồng API: AI nói chuyện với hệ thống thật**

1. **Gửi dữ liệu** — Python gửi dữ liệu JSON đã xử lý
2. **Xử lý trung gian** — Apps Script nhận và xử lý request
3. **Ghi vào hệ thống** — Dữ liệu được ghi vào Google Sheet

### Flow hoàn chỉnh MCP + API

Pipeline từ AI Agent đến hệ thống thực tế:

```
AI Agent (GG Anti xử lý, ra quyết định)
  → MCP → Tool: Gọi Python để thực thi
    → API Call: Python gọi Apps Script
      → System: Ghi vào Google Sheet
```

### Google Cloud & Apps Script

**Google Cloud Console** — Nơi quản lý backend và API cho toàn bộ hệ thống.

**Apps Script** — Đóng vai trò như một mini backend — một Web App nhỏ gọn nhưng đầy đủ chức năng. Được Google host sẵn, không cần server riêng.

Apps Script Web App làm được gì?
- Nhận request (POST) từ bên ngoài
- Xử lý logic nghiệp vụ
- Ghi dữ liệu vào Google Sheet
- Trả về response JSON
→ **Chính là API endpoint**

### So sánh tổng quan hệ thống

Hệ thống AI Agent được ví như cơ thể con người — mỗi thành phần có vai trò riêng biệt. Khi bốn thành phần hoạt động cùng nhau → một nhân sự AI hoàn chỉnh, tự động từ đầu đến cuối.

| Thành phần | Vai trò | Ví von |
|-----------|---------|--------|
| **MCP** | AI gọi tool | AI có tay để làm việc |
| **API** | Hệ thống nhận dữ liệu | AI nói chuyện với thế giới thật |
| **Google Cloud** | Nơi chạy backend | Apps Script = mini API server |

**💡 Insight quan trọng nhất:** AI chỉ có giá trị thực sự khi → đi vào workflow thật → tạo ra output thật

---

## Demo Buổi Học — Finance Agent

### Tổng quan pipeline

```
Input (Chi phí thô từ người dùng nhập)
  → GG Anti Agent (phân tích, phân loại, đánh giá)
    → JSON Output (xuất ra data.json)
      → Python Script (send_to_sheet.py gọi API endpoint)
        → Google Sheet Admin (Admin Expense Tracker)
```

### Bước 1 — Tạo Google Sheet Admin

Tạo file **Admin Expense Tracker** với header chuẩn:

```
Date | Employee | Item | Amount | Category | Status | AI Note
```

7 cột tương ứng với output của Finance Agent.

**Ví dụ dữ liệu mẫu:**

| Date | Employee | Item | Amount | Category | Status | AI Note |
|------|----------|------|--------|----------|--------|---------|
| 2024-01-15 | Nguyễn Văn A | Tiếp khách | 750,000 | Entertainment | Cần chứng từ | Vượt 500k, cần kiểm tra |
| 2024-01-15 | Trần Thị B | Văn phòng phẩm | 120,000 | Office | Approved | Trong hạn mức |

### Bước 2 — Apps Script: Code Backend

Vào **Extensions → Apps Script** trong Google Sheet, dán code sau:

- Hàm `doPost(e)` nhận POST request, parse JSON, **append** dữ liệu mới xuống cuối sheet (không xoá, không ghi đè dữ liệu cũ)
- **Đây chính là API endpoint**

### Bước 3 & 4 — Deploy API + Python Tool

**Deploy Web App:**
1. Click Deploy → New deployment
2. Chọn type: Web App
3. Execute as: Me
4. Who has access: Anyone
5. Copy link `/exec` → dán vào Python

**Python Tool — `send_to_sheet.py`:**
- Thay `DAN_LINK_EXEC` bằng URL thật từ bước Deploy
- URL có dạng: `https://script.google.com/macros/s/XXX/exec`

### Bước 5 & 6 — Chạy Agent & Xem Kết Quả

**Prompt Finance Agent:**
```
Bạn là AI Finance Agent. Nhiệm vụ của bạn là đọc dữ liệu chi tiêu,
phân loại từng khoản, đánh giá theo rule (>500k cần chứng từ), và
xuất ra JSON chuẩn với các trường: Date, Employee, Item, Amount,
Category, Status, AI Note.
```

**Chạy lệnh:**
```bash
type data.json | python send_to_sheet.py
```

**Kết quả trả về:**
```json
{"success": true, "updatedRows": N}
```

**Kết quả thực tế:**
1. Agent đọc và phân tích chi phí
2. Xuất JSON vào `data.json`
3. Python gọi API endpoint
4. Google Sheet cập nhật ngay lập tức
→ **Agent + MCP + API chạy thật**

### Tổng kết Demo

Đây không chỉ là demo AI — đây là tạo ra một nhân sự AI với khả năng:

| Năng lực | Mô tả |
|---------|-------|
| **Biết xử lý** | Agent phân tích dữ liệu và áp dụng business rules tự động |
| **Biết quyết định** | Đánh giá từng trường hợp theo constraints đã định nghĩa |
| **Biết ghi vào hệ thống thật** | Output thật — không phải text, mà là dữ liệu trong Google Sheet |

---

## Thực Hành

### Đề bài: Tự động hóa đồng bộ dữ liệu Google Sheets bằng Python

**1. Tình huống doanh nghiệp:**

Tại công ty ABC, hàng ngày các nhân viên đi công tác phải nhập các khoản chi tiêu (ngày tháng, tên nhân viên, hạng mục, số tiền) vào file Google Sheet chung: **Data_Nhan_Vien**.

Bộ phận Kế toán (Admin) có file tổng hợp riêng: **Admin Expense Tracker** để lưu trữ dài hạn và làm báo cáo.

**2. Vấn đề hiện tại:**

Cứ mỗi cuối ngày, nhân sự phòng kế toán phải vào file của nhân viên, copy bằng tay những dòng dữ liệu mới phát sinh trong ngày và paste nối tiếp xuống cuối file Admin. Thao tác này thủ công, tốn thời gian, dễ copy sót hoặc copy trùng lặp dữ liệu của ngày hôm trước.

**3. Yêu cầu dành cho học viên:**

Đóng vai là một **Chuyên gia Tự động hóa**, viết một kịch bản lập trình (Script) bằng Python giải quyết bài toán này — **sử dụng Google Antigravity để hướng dẫn/thực hiện** — với 3 tiêu chí khắt khe:

| Tiêu chí | Mô tả |
|---------|-------|
| **Kết nối an toàn** | Sử dụng phương thức xác thực chuẩn Google Cloud (OAuth 2.0 qua file `credentials.json`). Không dùng phương pháp kém bảo mật. |
| **Ghi dữ liệu thông minh (Không ghi đè)** | Tự động phát hiện dòng trống dưới cùng của Admin Expense Tracker và **append** dữ liệu mới. Tuyệt đối không xóa hay ghi đè dữ liệu cũ. |
| **Chống trùng lặp (Anti-duplication)** | Sau khi copy thành công, quay lại Data_Nhan_Vien, tạo/tìm cột `SyncStatus` và đánh dấu "Done" cho các dòng đã xử lý. Lần chạy tiếp theo chỉ bốc những dòng chưa có "Done". |

---

## Artifact

- File Python `send_to_sheet.py` hoàn chỉnh
- Định nghĩa Finance Agent theo khung MICRO (dạng markdown/text)
- Google Sheet Admin Expense Tracker với dữ liệu thực từ Agent
- Prompt pack dùng với Google Antigravity: `docs/lesson-prep/session-05-antigravity-prompts.md`

---

## Assignment

**Bài tập về nhà:** Hoàn thiện bài thực hành và nộp lại cho giáo viên.

Ghi lỗi hoặc điểm yếu của agent sau 2 lần chạy thực tế.

---

## Validation

- [ ] Đã thiết lập Finance Agent đúng khung MICRO (5 thành phần đầy đủ)
- [ ] Agent có vai trò không trùng lặp, input/output rõ ràng
- [ ] Apps Script đã được deploy thành công (có URL `/exec`)
- [ ] Python script `send_to_sheet.py` gọi được API endpoint
- [ ] Google Sheet nhận và hiển thị dữ liệu từ Agent
- [ ] Script có cơ chế anti-duplication (cột SyncStatus)
- [ ] Agent chạy được trong workflow đầu đến cuối

---

## Tài liệu giảng dạy chi tiết
Xem: `docs/instructor/session-05-micro-agent-teaching-guide.md`
- Prompt dùng trực tiếp với AGY: `docs/lesson-prep/session-05-antigravity-prompts.md`
- Cấu trúc 3 giờ đầy đủ
- Nội dung lecture từng phần (15–25 phút mỗi phần)
- Kịch bản live demo (Finance Agent pipeline)
- Hướng dẫn guided practice (5 bước)
- Template Agent Definition chuẩn
- Ví dụ MICRO cho HR, Marketing, Sales
- Backup plans và lỗi phổ biến

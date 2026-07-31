# Buổi 5 — Triển Khai AI Agent: Hướng Dẫn Giảng Dạy Chi Tiết

> **Phase 2 — Modify | Buổi 5 của 11**
> **Chủ đề:** Triển khai AI Agents như nhân sự chuyên trách trong hệ thống
> **Thời lượng:** 3 giờ | **Artifact đầu ra:** Finance Agent definition + `send_to_sheet.py`
> **Prompt pack:** `docs/lesson-prep/session-05-antigravity-prompts.md`

---

## 1. Mục Tiêu Buổi Học

| # | Mục tiêu (từ slide) | Cách kiểm tra |
|---|---------------------|---------------|
| 1 | **MCP + API tích hợp AI Agent** — Tích hợp giao thức MCP và API để mở rộng không gian làm việc | Học viên mô tả được luồng: GG Anti → Python → Apps Script → Google Sheet |
| 2 | **Thiết lập AI Agent chuẩn kỹ thuật** — Xây dựng AI Agent đúng khung MICRO | Artifact có đủ M-I-C-R-O, Finance Agent chạy được |
| 3 | **FIN Agent thực chiến** — Phát triển Finance Agent xử lý bài toán chi phí doanh nghiệp | Google Sheet nhận dữ liệu thực từ Agent qua Python |

---

## 2. Cấu Trúc 3 Giờ

```
10 phút  → Khai mạc & Recap buổi 4 OIPO + Giới thiệu mục tiêu
70 phút  → Phần 1 (25') + Phần 2 (45') — Lecture + Demo live pipeline
10 phút  → Break / Checkpoint nhanh
80 phút  → Phần 3 — Thực hành có hướng dẫn
10 phút  → Review artifact + Giao bài về nhà
```

---

## 3. Khai Mạc (10 phút)

### 3.1 Recap buổi 4 — OIPO (3 phút)
Hỏi nhanh học viên:
- "OIPO là gì? Workflow bạn làm hôm trước là về cái gì?"
- "Process trong OIPO của bạn có những bước nào?"

Dẫn dắt chuyển tiếp:
> "Buổi 4 các bạn đã thiết kế workflow — bản vẽ quy trình. Buổi hôm nay chúng ta sẽ **thuê nhân sự AI** để thực hiện từng bước trong workflow đó. Và không dừng lại ở 'nghĩ' — chúng ta sẽ làm agent **ghi thẳng dữ liệu vào Google Sheet thật**."

### 3.2 Mở đầu bằng câu hỏi thực tế (4 phút)
Hỏi cả lớp:
> "Trong công việc hàng ngày, bạn đang copy-paste thủ công cái gì? Mất bao lâu?"

Ghi lên bảng. Sau đó:
> "Buổi hôm nay chúng ta sẽ xây agent tự làm việc đó — không cần bạn ngồi copy từng dòng nữa."

### 3.3 Giới thiệu artifact đầu ra (3 phút)
Chiếu demo nhanh Google Sheet Admin Expense Tracker đã có dữ liệu:
- Cuối buổi: mỗi học viên có Finance Agent chạy được + `send_to_sheet.py`
- Artifact này sẽ dùng tiếp ở buổi 6, 7, 8

---

## 4. Phần 1 — Thiết Lập AI Agent Chuẩn (25 phút)

### 4.1 Vấn đề thực tế (5 phút)

**Dẫn dắt:** Chiếu slide "Bạn có gặp vấn đề này?"

| Quy trình hiện tại | Hậu quả |
|--------------------|---------|
| Copy-paste thủ công từng dòng dữ liệu | Tốn thời gian — hàng giờ mỗi ngày |
| Phân loại thủ công — dễ nhầm lẫn | Sai sót cao — người mệt → lỗi tăng |
| Làm report lặp lại mỗi ngày | Không mở rộng được — tăng việc → tăng người |

**Câu hỏi kích thích:**
> "Nếu bạn có một nhân viên làm việc này 24/7, không mệt, không sai — bạn cần mô tả công việc cho họ như thế nào?"

### 4.2 AI Agent = Nhân Sự AI (5 phút)

Một AI Agent cần được trang bị đầy đủ như nhân viên thực thụ:

| # | Thành phần | Ý nghĩa |
|---|-----------|---------|
| 1 | **JD Công Việc** | Mô tả rõ nhiệm vụ và phạm vi trách nhiệm |
| 2 | **Quy Trình Làm Việc** | Các bước xử lý từ đầu đến cuối |
| 3 | **Quy Tắc Xử Lý** | Constraints để agent ra quyết định đúng |
| 4 | **Input & Output Rõ Ràng** | Dữ liệu đầu vào và kết quả được xác định cụ thể |
| 5 | **Công Cụ Hỗ Trợ** | Tool và API mà agent có thể gọi |

**Ẩn dụ giảng viên dùng:**
> "MICRO chính là tờ JD (Job Description) cho nhân viên AI của bạn."

### 4.3 Khung MICRO (15 phút)

```
M — Mission     → Nhiệm vụ cụ thể của Agent là gì?
I — Input       → Dữ liệu đầu vào Agent nhận được
C — Constraints → Quy tắc và giới hạn xử lý
R — Role        → Vai trò và danh tính của Agent
O — Output      → Kết quả cụ thể Agent tạo ra
```

**Ví dụ thực tế từ slide — Finance Agent:**

| Thành phần | Nội dung Finance Agent |
|-----------|----------------------|
| **M** — Mission | Quản lý và phân loại chi phí doanh nghiệp |
| **I** — Input | Dữ liệu chi tiêu từ các phòng ban |
| **C** — Constraints | >500k → kiểm tra; liên quan khách hàng → cần chứng từ |
| **R** — Role | Finance Assistant chuyên trách |
| **O** — Output | JSON + Google Sheet cập nhật tự động |

**Luồng xử lý:** Nhận dữ liệu → Phân loại → Ghi vào sheet

**MẸO GIẢNG từng phần:**
- **M**: "Mission của nhân viên giỏi nhất team bạn là gì?" → Đó là cách viết Mission
- **I**: "Nếu thiếu thông tin này, agent có làm được không?" → Bắt buộc hay tùy chọn
- **C**: "Điều tệ nhất agent có thể làm sai là gì?" → Đó là Constraint cần viết
- **R**: "Nếu tuyển nhân viên, JD như vậy có ai apply không?" → Role phải đủ cụ thể
- **O**: "Nhận output này, bạn có dùng được ngay không?" → Tốt = dùng ngay, không xử lý thêm

---

## 5. Phần 2 — MCP + API Tích Hợp AI Agent (45 phút)

### 5.1 MCP là gì? (10 phút)

**MCP = Model Context Protocol**

> Cách AI sử dụng các công cụ bên ngoài để thực hiện **hành động thực tế** trong thế giới số.

**Điểm khác biệt then chốt:**
- AI thông thường: chỉ **"nghĩ"** và trả lời text
- AI + MCP: **"nghĩ" + "làm"** — thực thi hành động trong hệ thống thực tế

**Trong buổi học này — pipeline hoạt động như sau:**
```
GG Anti gọi Python file
  → Python thực thi logic xử lý
    → Kết quả ghi vào hệ thống thật
```
→ **Đây là ví dụ AI *dùng tool* (tool use / command execution).** MCP (Model Context Protocol) là **giao thức chuẩn hoá** cách AI kết nối tool và dữ liệu bên ngoài qua MCP server — pipeline hôm nay minh hoạ cùng nguyên lý "AI có tay", chưa phải MCP đúng nghĩa.

**Ẩn dụ dễ hiểu:**
> "MCP = AI có **tay** để làm việc. Trước đây AI chỉ nói 'tôi sẽ làm X'. Bây giờ AI thực sự mở file, gọi API, ghi dữ liệu."

> [!NOTE]
> **Kiến thức nền cho giảng viên (phân biệt 3 khái niệm):**
> - **Tool use / function calling:** AI gọi trực tiếp một tool cụ thể (chạy Python, gọi 1 hàm) — chính là những gì demo hôm nay làm.
> - **MCP:** giao thức **client-server** chuẩn hoá việc kết nối đó — AI (client) tự **khám phá danh sách tool** (tool discovery) mà MCP server cung cấp, rồi gọi qua giao thức chung thay vì tích hợp tay từng tool.
> - Nói ngắn gọn: tool use là *hành động*, MCP là *chuẩn giao tiếp* cho hành động đó ở quy mô nhiều tool/nhiều hệ thống.
>
> ⚠️ Refresh note: MCP đang phát triển nhanh — đối chiếu https://modelcontextprotocol.io trước buổi dạy để cập nhật định nghĩa và ví dụ mới nhất.

### 5.2 API là gì? (5 phút)

**API = Application Programming Interface**

> Cổng giao tiếp giữa các hệ thống, cho phép chúng "nói chuyện" với nhau có cấu trúc.

**Luồng API trong demo:**
1. **Python gửi dữ liệu JSON** đã xử lý
2. **Apps Script nhận và xử lý** request
3. **Dữ liệu được ghi vào Google Sheet**

> "API = cánh cửa. AI đứng ngoài gõ cửa đúng cách → hệ thống mở cửa → AI đưa dữ liệu vào."

### 5.3 Flow hoàn chỉnh MCP + API (10 phút)

**Pipeline từ AI Agent đến hệ thống thực tế:**

```
AI Agent (GG Anti xử lý & ra quyết định)
    ↓ MCP → Tool: Gọi Python để thực thi
        ↓ API Call: Python gọi Apps Script
            ↓ System: Ghi vào Google Sheet
```

**Bảng vai trò từng thành phần:**

| Thành phần | Vai trò | Ví von |
|-----------|---------|--------|
| **MCP** | AI gọi tool | AI có tay để làm việc |
| **API** | Hệ thống nhận dữ liệu | AI nói chuyện với thế giới thật |
| **Google Cloud** | Nơi chạy backend | Apps Script = mini API server |

### 5.4 Google Cloud & Apps Script (5 phút)

**Google Cloud Console** — Nơi quản lý backend và API cho toàn bộ hệ thống.

**Apps Script** = Web App nhỏ gọn, Google host sẵn, **không cần server riêng**.

Apps Script Web App làm được gì?
- Nhận request (POST) từ bên ngoài
- Xử lý logic nghiệp vụ
- Ghi dữ liệu vào Google Sheet
- Trả về response JSON
→ **Chính là API endpoint**

**Câu hỏi kiểm tra nhanh (2 phút):**
> "Trong pipeline vừa xem — thành phần nào đóng vai 'cửa vào' hệ thống Google Sheet?"
> *(Đáp án: Apps Script — API endpoint)*

### 5.5 DEMO Live — Finance Agent Pipeline (15 phút)

> ⚠️ Refresh note: hành vi/UI Antigravity có thể thay đổi theo phiên bản — đối chiếu https://antigravity.google/docs và chạy thử demo trước buổi dạy.

**Tổng quan pipeline demo:**
```
Input (Chi phí thô từ người dùng)
  → GG Anti Agent (phân tích, phân loại, đánh giá)
    → data.json (dữ liệu có cấu trúc)
      → send_to_sheet.py (gọi API endpoint)
        → Admin Expense Tracker (Google Sheet cập nhật thật)
```

**Prompt dùng với AGY:** mở `docs/lesson-prep/session-05-antigravity-prompts.md`, chạy lần lượt Prompt 1 → 4 cho demo cơ bản. Prompt 5 dùng cho bài nâng cao sync 2 Google Sheets.

**Bước 1 — Tạo Google Sheet Admin:**
- Tạo file **Admin Expense Tracker**
- Header chuẩn 7 cột: `Date | Employee | Item | Amount | Category | Status | AI Note`
- Ví dụ dữ liệu mẫu:

| Date | Employee | Item | Amount | Category | Status | AI Note |
|------|----------|------|--------|----------|--------|---------|
| 2024-01-15 | Nguyễn Văn A | Tiếp khách | 750,000 | Entertainment | Cần chứng từ | Vượt 500k, cần kiểm tra |
| 2024-01-15 | Trần Thị B | Văn phòng phẩm | 120,000 | Office | Approved | Trong hạn mức |

**Bước 2 — Apps Script: Code Backend:**
- Vào **Extensions → Apps Script** trong Google Sheet
- Dán code hàm `doPost(e)`: nhận POST request, parse JSON, ghi dữ liệu mới vào
- **Đây chính là API endpoint**

**Bước 3 & 4 — Deploy API + Python Tool:**

Deploy Web App:
1. Click **Deploy → New deployment**
2. Chọn type: **Web App**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Copy link `/exec` → dán vào Python

Python Tool `send_to_sheet.py`:
- Thay `DAN_LINK_EXEC` bằng URL thật từ bước Deploy
- URL dạng: `https://script.google.com/macros/s/XXX/exec`

**Bước 5 & 6 — Chạy Agent & Xem Kết Quả:**

Prompt Finance Agent:
```
Bạn là AI Finance Agent. Nhiệm vụ của bạn là đọc dữ liệu chi tiêu,
phân loại từng khoản, đánh giá theo rule (>500k cần chứng từ), và
xuất ra JSON chuẩn với các trường: Date, Employee, Item, Amount,
Category, Status, AI Note.
```

Chạy lệnh:
```bash
type data.json | python send_to_sheet.py
```
> 💡 Lưu ý 2 hệ điều hành: lệnh `type` là của **Windows**. Trên **macOS/Linux** dùng `cat data.json | python send_to_sheet.py`.

Kết quả trả về:
```json
{"success": true, "updatedRows": N}
```

**Kết quả thực tế trên màn hình:**
1. Agent đọc và phân tích chi phí
2. Xuất JSON vào `data.json`
3. Python gọi API endpoint
4. Google Sheet cập nhật ngay lập tức
→ **Agent + MCP + API chạy thật**

**💡 Insight quan trọng nhất (nhấn mạnh):**
> "AI chỉ có giá trị thực sự khi → **đi vào workflow thật** → tạo ra **output thật**. Hôm nay bạn vừa xây hệ thống AI Agent hoàn chỉnh: MICRO → MCP → API → Google Sheet."

---

## 6. Break & Checkpoint (10 phút)

Trong 5 phút đầu break, học viên ghi nhanh:
1. "Pipeline vừa demo gồm mấy bước? Liệt kê theo thứ tự."
2. "MCP khác gì API?"
3. "Finance Agent trong demo có Constraint nào?"

Giảng viên đọc nhanh qua → nhận diện ai đang bị mất luồng để hỗ trợ trong practice.

---

> [!IMPORTANT]
> **HƯỚNG DẪN DẠY VỚI 1 WORKSPACE XUYÊN SUỐT (BRIDGE LAYER):**
> Nhằm giữ nguyên nội dung Slide chính thức của MindX nhưng vẫn tối ưu hóa hiệu quả tích lũy năng lực của học viên, Giảng viên hướng dẫn lớp thực hành buổi này **trực tiếp bên trong workspace duy nhất của học viên** (`my-workspace` đã setup ở Buổi 1-4).
> - **Cách tổ chức file:** Học viên nâng cấp skill đã tạo ở Buổi 3 tại `.agents/skills/` trong workspace cá nhân, không tạo folder Agent riêng lẻ ngoài Desktop.
> - **Cá nhân hóa (Khuyến nghị):** Đối với học viên muốn xây Agent cho lĩnh vực thật của họ (không phải Finance), khuyến khích họ mở file [session-05-bridge.md](plans/260710-workspace-bridge/bridge-guides/session-05-bridge.md) để map kịch bản Finance Agent sang nghiệp vụ thực tế (Marketing, HR, Sales...) và xây dựng trực tiếp trong `.agents/skills/` của `my-workspace`.

## 7. Phần 3 — Thực Hành (80 phút)

### Đề bài: Tự Động Hóa Đồng Bộ Dữ Liệu Google Sheets Bằng Python

**Tình huống doanh nghiệp:**

Tại công ty ABC, hàng ngày nhân viên đi công tác nhập chi tiêu vào **Data_Nhan_Vien** (Google Sheet chung). Kế toán có **Admin Expense Tracker** riêng để lưu dài hạn và báo cáo.

**Vấn đề hiện tại:**
Cuối ngày kế toán phải vào Data_Nhan_Vien, copy tay dòng mới và paste xuống Admin. Thủ công, tốn thời gian, dễ copy sót hoặc trùng lặp.

**Yêu cầu — Đóng vai Chuyên Gia Tự Động Hóa, viết Python Script giải quyết bài toán với 3 tiêu chí:**

| Tiêu chí | Mô tả chi tiết |
|---------|----------------|
| **1. Kết nối an toàn** | OAuth 2.0 qua file `credentials.json`. Không dùng phương pháp kém bảo mật. |
| **2. Ghi thông minh — Không ghi đè** | Tự động phát hiện dòng trống cuối Admin Expense Tracker và **append** dữ liệu mới. Tuyệt đối không xóa/ghi đè dữ liệu cũ. |
| **3. Chống trùng lặp (Anti-duplication)** | Sau khi copy thành công, quay lại Data_Nhan_Vien, tạo/tìm cột `SyncStatus`, đánh dấu "Done" cho dòng đã xử lý. Lần chạy tiếp chỉ bốc dòng chưa có "Done". |

**Công cụ:** Sử dụng Google Antigravity để hướng dẫn/thực hiện.

### Cấu trúc 80 phút thực hành:

| Thời gian | Hoạt động | Giảng viên làm gì |
|-----------|-----------|-------------------|
| 0–15 phút | Setup: tạo Google Sheet, lấy credentials.json | Hỗ trợ học viên setup tài khoản, fix lỗi quota |
| 15–40 phút | Viết Finance Agent MICRO + test agent trong GG Anti | Đi vòng quanh, kiểm tra từng MICRO field |
| 40–65 phút | Viết/chạy `send_to_sheet.py` với GG Anti hỗ trợ | Hỗ trợ debug lỗi Python, Apps Script |
| 65–80 phút | Chạy pipeline đầu đến cuối + ghi kết quả vào artifact | Review kết quả, nhận artifact |

### Hỗ trợ học viên bị kẹt:

| Tình huống kẹt | Gợi ý giảng viên |
|---------------|-----------------|
| Không lấy được credentials.json | Dùng Service Account thay OAuth 2.0 — đơn giản hơn cho demo |
| Apps Script báo lỗi CORS | Kiểm tra "Who has access: Anyone" khi deploy |
| Python không gửi được dữ liệu | Kiểm tra URL /exec có đúng không, thử print response |
| GG Anti xuất JSON sai format | Sửa prompt — thêm ví dụ JSON mẫu vào prompt |
| Sheet không cập nhật | Kiểm tra Apps Script có save và deploy lại chưa |

---

## 8. Review Artifact & Giao Bài (10 phút)

### Artifact chuẩn buổi 5:

**1. Finance Agent Definition (MICRO):**
```markdown
# Finance Agent Definition

## M — Mission
Quản lý và phân loại chi phí doanh nghiệp: đọc dữ liệu chi tiêu,
phân loại từng khoản, đánh giá theo rule business, xuất JSON chuẩn
để ghi vào Google Sheet Admin.

## I — Input
- Dữ liệu chi tiêu từ các phòng ban (text hoặc file)
- Rule phân loại (mặc định: >500k cần chứng từ; liên quan khách hàng cần chứng từ)

## C — Constraints
- Không ra quyết định thanh toán — chỉ phân loại và đề xuất
- Luôn xuất JSON đúng 7 trường: Date, Employee, Item, Amount, Category, Status, AI Note
- Ghi "Cần kiểm tra" nếu không đủ thông tin để phân loại

## R — Role
Finance Assistant chuyên trách — chính xác, ngắn gọn, không cảm xúc.

## O — Output
JSON chuẩn 7 trường:
{"Date": "...", "Employee": "...", "Item": "...",
 "Amount": ..., "Category": "...", "Status": "...", "AI Note": "..."}
```

**2. File `send_to_sheet.py` hoàn chỉnh và chạy được**

**3. Google Sheet Admin Expense Tracker với dữ liệu thực từ Agent**

**4. Walkthrough/checklist nộp bài từ prompt pack AGY**

### Validation Checklist:
- [ ] Finance Agent có đủ 5 thành phần MICRO
- [ ] Constraints có ít nhất 2 rule phân loại chi phí cụ thể
- [ ] Output định nghĩa đúng 7 trường JSON
- [ ] Apps Script đã deploy thành công (có URL /exec)
- [ ] `send_to_sheet.py` gọi được API và nhận `{"success": true}`
- [ ] Google Sheet hiển thị dữ liệu từ Agent
- [ ] Script có cơ chế anti-duplication (cột SyncStatus = "Done")

### Bài Tập Về Nhà:
> **Hoàn thiện bài thực hành và nộp lại cho giáo viên.**
> Ghi lỗi hoặc điểm yếu phát hiện sau 2 lần chạy thực tế.

---

## 9. Lỗi Phổ Biến & Cách Can Thiệp

| Lỗi | Dấu hiệu | Cách giảng viên can thiệp |
|-----|---------|--------------------------|
| MICRO Mission quá chung | "Agent xử lý dữ liệu tài chính" | "Agent này khác ChatGPT thường ở chỗ nào?" |
| Constraint thiếu rule cụ thể | Không có ngưỡng số, không có điều kiện rõ | "Rule >500k từ slide — đã thêm vào Constraint chưa?" |
| JSON output sai format | Sheet nhận được text thường | "7 trường JSON cần khớp với 7 cột header" |
| Apps Script lỗi khi deploy | Lỗi "Script function not found" | Kiểm tra tên hàm phải là `doPost` |
| Python lỗi kết nối | `requests.exceptions.ConnectionError` | Kiểm tra URL /exec — copy đúng chưa |
| Sheet ghi đè dữ liệu cũ | Dữ liệu cũ bị xóa mỗi lần chạy | Code append thay vì clear+write |

---

## 10. Câu Hỏi Thảo Luận Dự Phòng

1. "MCP và API — cái nào là 'cầu nối', cái nào là 'cổng vào'?"
2. "Nếu Apps Script bị đơn vị IT chặn — bạn có phương án B nào?"
3. "Constraint '>500k cần chứng từ' — nếu agent sai 1 trong 20 lần, hậu quả là gì?"
4. "Nếu file Data_Nhan_Vien có 10,000 dòng — script SyncStatus có đủ nhanh không?"
5. "Bạn sẽ thêm agent nào tiếp theo vào pipeline này?"

---

## 11. Backup Plans

| Tình huống | Backup |
|-----------|--------|
| GG Anti thay UI / lỗi quota | Viết MICRO trên Google Docs, demo pipeline bằng slide screenshot |
| Apps Script bị chặn / lỗi CORS | Dùng Google Forms + Zapier làm API thay thế |
| Python không cài được | Dùng Google Colab (chạy Python trên browser) |
| Credentials.json phức tạp | Dùng Service Account thay OAuth (đơn giản hơn cho demo), hoặc để sheet public-read và dùng Apps Script làm phần ghi. Lưu ý: API key đơn thuần KHÔNG đọc/ghi được sheet private |

---

*Cập nhật lần cuối: 2026-06-09 | Phiên bản: v2.0 — Đã đồng bộ với slide PDF thực tế*
*Nguồn: `assets/source-materials/original/MindX_AG_Slide 5.pdf`*
*Raw extract: `assets/source-materials/derived/session-05-raw-extract.txt`*

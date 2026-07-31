# Session 08 — Hướng Dẫn Giảng Dạy Chi Tiết
## AI Agency Operations & Kiểm Toán Hệ Thống

> **Version:** 1.0 · **Buổi:** 8 / 11 · Phase 2 — Modify  
> **Dành cho:** Giảng viên · Không chia sẻ trực tiếp cho học viên  
> **Lưu ý đặc biệt:** Buổi này có **Đề thi giữa kỳ** — đọc kỹ phần giữa kỳ trước khi giảng

---

## 📋 Tổng quan nhanh

| Mục | Nội dung |
|-----|----------|
| **Chủ đề** | Kiến trúc 3 Tầng (Hierarchy) + System Audit + Google Apps Script + Real-time Alert + Self-Heal |
| **Thời lượng** | 3 giờ |
| **Artifact đầu ra** | Hệ thống kiểm toán AI Project — tô màu đỏ + gửi email báo cáo tự động |
| **Công cụ cần** | Google Antigravity, Google Sheets, Google Apps Script, Python 3.10+, pip (pandas openpyxl) |
| **Điểm nhấn giảng dạy** | Demo Bot Loop $2000/đêm → học viên hiểu tại sao kiểm toán là sống còn |
| **Điểm đặc biệt** | Giới thiệu + hướng dẫn đề thi giữa kỳ (10% tổng điểm khóa học) |

---

## 🎯 Mục tiêu học tập (3 mục tiêu)

1. **Tư duy quản trị AI** — Thiết kế kiến trúc AI 3 tầng (Hierarchy), loại bỏ can thiệp thủ công vào vận hành hàng ngày
2. **Kỹ năng kiểm toán hệ thống** — Xây `/audit` command tự động cảnh báo lỗi và chặn rò rỉ chi phí
3. **Quy trình tự động hóa thực chiến** — Apps Script xuất báo cáo + cảnh báo + self-heal khi sự cố

---

## ⚠️ PHẦN HỌC VIÊN PHẢI CHUẨN BỊ (TRỌNG TÂM)

> **Đây là phần giảng viên cần nhấn mạnh nhất. Nếu học viên không chuẩn bị đúng → buổi học thực hành không thể tiến hành. Buổi này còn liên quan đến đề thi giữa kỳ — học viên phải nộp trước buổi 9.**

### 1. Phần mềm & tài khoản bắt buộc chuẩn bị trước buổi học

| STT | Phần mềm / Tài khoản | Mục đích | Link / Cách kiểm tra | Ghi chú |
|-----|---------------------|----------|----------------------|---------|
| 1 | **Google Account** | Đăng nhập Google Sheets + Apps Script | accounts.google.com | Phải là tài khoản cá nhân, không phải tài khoản trường/công ty bị giới hạn |
| 2 | **Google Sheets** | Lưu trữ + phân tích dữ liệu 500 dự án | Mở sheets.google.com thử | Phải vào được Extensions > Apps Script |
| 3 | **Google Apps Script** | Viết code tự động hóa (tô màu, gửi mail) | Mở sheet mới → Extensions > Apps Script | Nếu không thấy menu này → tài khoản bị giới hạn |
| 4 | **Python 3.10+** | Xử lý dữ liệu trước khi đổ vào Sheet | `python --version` trong Terminal | Cài từ python.org nếu chưa có |
| 5 | **pip packages** | Thư viện đọc Excel/CSV | `pip install pandas openpyxl` | Cài trước tránh mạng chậm trong lớp |
| 6 | **Email cá nhân** | Test nhận báo cáo tự động từ Apps Script | Kiểm tra hộp thư hoạt động | Gmail khuyến nghị để test nhanh nhất |
| 7 | **Google Antigravity** | Tâm vấn AI viết code Apps Script | Đã có từ buổi 1 | Kiểm tra tài khoản còn hoạt động |

**Cách kiểm tra Apps Script hoạt động:**
1. Mở Google Sheets → tạo Sheet mới
2. Vào **Extensions** (Tiện ích) trên thanh menu
3. Nếu thấy **Apps Script** → ✅ OK
4. Nếu không thấy → ❌ Tài khoản bị giới hạn → dùng tài khoản Gmail cá nhân khác

**Cài pip packages nhanh:**
```bash
pip install pandas openpyxl
```

---

### 2. File dữ liệu cần chuẩn bị

> **Giảng viên cần gửi cho học viên ít nhất 1 ngày trước buổi học:**

#### Cho phần Demo (giảng viên dùng):
| File | Mô tả | Nơi lấy |
|------|-------|---------|
| `AI_Projects_500` (Google Sheet) | 500 dòng dữ liệu dự án AI với cột API_Cost_USD (H) và Efficiency_Score (O) | Giảng viên cung cấp link Google Sheet |

> **⚠️ Cấu trúc Sheet bắt buộc** — Giảng viên cần chuẩn bị file với các cột quan trọng:

```
Cột H: API_Cost_USD    → Chi phí API theo USD
Cột O: Efficiency_Score → Điểm hiệu suất (thang 1–10)
Cột U: Advisory        → Cột để Apps Script ghi lời khuyên (để trống)
```

> Tiêu chí tô đỏ: **API_Cost_USD > 2000 VÀ Efficiency_Score < 4** (phải đồng thời cả 2 điều kiện)

#### Cho phần Thực hành (học viên tự làm):
| File | Mô tả | Nơi lấy |
|------|-------|---------|
| `AI_Usage_Log_1000` (Google Sheet) | 1000 dòng log sử dụng AI (GPT-5, Claude 4...) với cột Model, Cost_USD, Task_Type | Giảng viên cung cấp hoặc học viên tự tạo |

> **Cấu trúc log 1000 dòng gợi ý (nếu học viên tự tạo):**
```
Cột A: Date         → Ngày sử dụng
Cột B: User_ID      → ID người dùng
Cột C: Model        → Tên model AI (GPT-5, Claude 4, Gemini Pro...)
Cột D: Task_Type    → Loại tác vụ (Summarize, Code, Translate...)
Cột E: Cost_USD     → Chi phí theo USD
Cột F: Tokens_Used  → Số token đã dùng
Cột G: Status       → OK / Error / Timeout
```

---

### 3. Checklist học viên tự kiểm tra TRƯỚC buổi học

Gửi danh sách này cho học viên qua Group/Zalo:

```
✅ CHECKLIST CHUẨN BỊ BUỔI 8 — Gửi về group trước 9h tối hôm trước

□ Google Account đăng nhập OK
□ Mở Google Sheets + Apps Script được
  (thử mở 1 sheet mới → Extensions > Apps Script)
□ File dữ liệu dự án AI đã tải/mở được
  (500 dòng — link giảng viên gửi)
□ Python 3.10+ đã cài → kiểm tra: python --version
□ pip install pandas openpyxl đã chạy thành công
□ Email cá nhân sẵn sàng nhận test (kiểm tra hộp thư vào được)
□ Antigravity hoạt động (thử đăng nhập)

🔴 QUAN TRỌNG — Đề thi giữa kỳ:
□ Đã đọc đề thi giảng viên gửi
□ Đã hoàn thành và NỘP bài kiểm tra giữa kỳ
  (hạn nộp: trước buổi 9 — xem link giảng viên gửi)
```

> **⚠️ Nhắc học viên:** Bài kiểm tra giữa kỳ chiếm **10% trọng số điểm toàn khóa**. Học viên cần hoàn thành để đủ điều kiện tham gia Project cuối khóa (Buổi 10–11).

---

### 4. Không gian làm việc học viên cần chuẩn bị

Học viên mở sẵn trên trình duyệt:
```
Tab 1: Google Antigravity (để tâm vấn AI)
Tab 2: Google Sheets — file 500 dự án AI
Tab 3: Google Apps Script (mở từ Tab 2 → Extensions)
Tab 4: Gmail (để kiểm tra nhận email)
```

> Giảng viên nhắc: Đăng nhập sẵn tất cả các tab này TRƯỚC giờ học. Không để mất thời gian đăng nhập trong buổi thực hành.

---

## 🧯 Backup Plan (giảng viên chuẩn bị)

- Chuẩn bị sẵn **1 Google Sheet đã gắn code Apps Script + trigger chạy được** → nếu học viên kẹt, share bản copy (File → Make a copy) để họ có hệ thống hoạt động ngay.
- Antigravity sập / hết quota: **phát code mẫu `auditAIProjects()`** — học viên chỉ dán vào Apps Script và đổi biến `EMAIL_RECIPIENT` sang email của mình.
- Tài khoản Google tổ chức bị chặn Apps Script: học viên chuyển sang Gmail cá nhân (đã ghi ở phần chuẩn bị).

---

## 🕐 Cấu trúc buổi học 3 giờ

| Thời gian | Khối | Nội dung | Ghi chú giảng viên |
|-----------|------|----------|---------------------|
| 0 – 10' | **Khai mạc** | Vấn đề khi scale: 1 dự án vs 500 dự án, kể chuyện Bot Loop $2000/đêm | **Hook mạnh ngay từ đầu** — câu chuyện thực tế tạo sự chú ý tức thì |
| 10 – 40' | **Phần 1: AI Operations** | AI Operations + Kiến trúc 3 Tầng (Hierarchy) + Tư duy mạnh = chỉ làm Tầng 3 | Vẽ sơ đồ 3 tầng lên bảng — học viên phải tự vẽ theo |
| 40 – 70' | **Phần 2: System Audit** | 3 loại Audit + Monitoring vs Auditing + /audit command + Agentic Auditing | So sánh nhiệt kế vs bác sĩ — học viên nhớ ngay |
| 70 – 80' | **Break + Checkpoint** | 3 câu checkpoint nhanh | Học viên ghi ra giấy |
| 80 – 140' | **Phần 3: Demo 5 bước + Thực hành** | Demo Apps Script + AI Resource Audit | Đây là phần CỐT LÕI — 60 phút thực chiến |
| 140 – 160' | **Giới thiệu đề thi giữa kỳ** | Trình bày đề thi, hướng dẫn nộp bài, giải đáp câu hỏi | Dành thời gian Q&A đủ — đây là 10% điểm khóa học |
| 160 – 180' | **Tổng kết + BTVH** | Checklist nghiệm thu, giao bài về nhà | Chiếu checklist lên màn hình |

---

## 📖 Khai mạc: Vấn Đề Khi Scale (10 phút)

### Hook — Câu chuyện Bot Loop $2000/đêm

**Giảng viên kể (với giọng thực tế, không đọc như văn bản):**

> "Tháng trước, một startup AI ở Hà Nội deploy bot xử lý đơn hàng. Sáng hôm sau họ nhận hóa đơn API: $2,147 — chỉ trong một đêm. Bot bị loop: cứ fail → retry → fail → retry mãi không dừng. Không có ai kiểm tra. Không có cảnh báo. Không có giới hạn chi phí. Tiền bay đi lúc 2 giờ sáng trong khi cả team ngủ."

**Câu hỏi mở cho học viên:**
> "Nếu bạn quản lý 500 dự án AI, thay vì 1 — bạn có thể check từng cái một mỗi ngày không?"

Đợi 2–3 học viên trả lời → dẫn vào bài học.

**2 vấn đề cốt lõi khi scale:**

| Quy mô | Có thể làm thủ công? | Hậu quả nếu không tự động hóa |
|--------|---------------------|-------------------------------|
| 1 dự án AI | ✅ Check tay được | Không sao |
| 500 dự án AI | ❌ Không thể | Rò rỉ chi phí âm thầm, lỗi chất lượng không ai biết, bot loop cháy tiền |

**Kết luận dẫn vào bài:**
> "Hôm nay chúng ta học cách xây hệ thống tự kiểm tra chính nó — AI Operations và System Audit."

---

## 📖 Phần 1: AI Operations + Kiến Trúc 3 Tầng (30 phút)

### Định nghĩa AI Operations (5 phút)

**AI Operations (AI Ops) là gì?**

> AI Operations = **Khung quản lý toàn bộ hệ thống AI trong tổ chức** — không phải quản lý từng con bot, mà quản lý toàn bộ hệ sinh thái AI: chi phí, chất lượng, bảo mật, tự động hóa, báo cáo.

**Tại sao cần AI Operations?**
- Bot AI ngày càng nhiều → không thể check tay từng cái
- Chi phí API leo thang không kiểm soát → cần tự động cảnh báo
- Lỗi chất lượng tích lũy âm thầm → cần hệ thống phát hiện sớm
- Bảo mật API Key → cần audit định kỳ

---

### Kiến Trúc 3 Tầng — Hierarchy (20 phút)

**Giảng viên vẽ lên bảng (QUAN TRỌNG — học viên phải vẽ theo):**

```
┌─────────────────────────────────────────┐
│  TẦNG 3: ĐIỀU PHỐI (Con người)          │
│  → Quyết định chiến lược                │
│  → Phê duyệt ngân sách                  │
│  → Định hướng mục tiêu                  │
├─────────────────────────────────────────┤
│  TẦNG 2: QUẢN LÝ (AI kiểm tra)         │
│  → Kiểm tra chất lượng output           │
│  → Giám sát chi phí theo thời gian thực │
│  → Phát hiện lỗi + cảnh báo tự động    │
├─────────────────────────────────────────┤
│  TẦNG 1: THỰC THI (Code tự chạy)       │
│  → Bot AI xử lý tác vụ                  │
│  → Gọi API, xử lý dữ liệu              │
│  → Ghi log, báo cáo lên Tầng 2         │
└─────────────────────────────────────────┘
```

**Giải thích từng tầng chi tiết:**

**Tầng 1 — Thực thi (Execution Layer):**
- Code tự chạy 24/7, không cần con người can thiệp
- Ví dụ: Bot tóm tắt email, bot dịch tài liệu, bot phân loại đơn hàng
- Nhiệm vụ: Làm việc + ghi log đầy đủ → báo cáo lên Tầng 2

**Tầng 2 — Quản lý (Management Layer):**
- AI kiểm tra AI: đọc log từ Tầng 1 → đánh giá chất lượng + chi phí
- Ví dụ: Script audit tự động tô đỏ dự án lỗ, cảnh báo khi cost vượt ngưỡng
- Nhiệm vụ: Tự phát hiện vấn đề → tự cảnh báo → không cần con người đọc từng dòng log

**Tầng 3 — Điều phối (Orchestration Layer):**
- Con người chỉ làm việc ở tầng này
- Nhận báo cáo tóm tắt từ Tầng 2 → quyết định chiến lược
- Ví dụ: Xem email báo cáo buổi sáng → phê duyệt tăng ngân sách / tắt bot kém hiệu quả

**Nguyên tắc vàng:**
> "Hệ thống MẠNH = Bạn chỉ cần làm việc ở Tầng 3. Tầng 1 và Tầng 2 tự lo."

**Câu hỏi kiểm tra hiểu bài:**
> "Kể tên 1 việc bạn đang làm thủ công hàng ngày — nó thuộc Tầng mấy? Tầng 2 có thể thay thế nó không?"

---

### So sánh: Hệ thống Yếu vs Hệ thống Mạnh (5 phút)

| Tiêu chí | Hệ thống Yếu | Hệ thống Mạnh |
|----------|-------------|----------------|
| Ai check lỗi? | Con người ngồi đọc log | AI tự phát hiện và cảnh báo |
| Ai báo cáo chi phí? | Nhân viên tổng hợp Excel mỗi tuần | Script tự tổng hợp và gửi email sáng thứ 2 |
| Khi bot lỗi, ai biết? | Sếp phát hiện khi khách khiếu nại | Hệ thống tự cảnh báo trong vòng 5 phút |
| Con người làm gì? | Làm Tầng 1 (chạy bot tay, copy paste) | Làm Tầng 3 (đọc báo cáo, quyết định) |

---

## 📖 Phần 2: System Audit (30 phút)

### 3 Loại System Audit (10 phút)

**Giảng viên giới thiệu:**
> "Audit không phải kiểm tra cho có. Audit là chẩn đoán sức khỏe toàn diện cho hệ thống AI."

| Loại Audit | Câu hỏi cốt lõi | Ví dụ thực tế |
|-----------|----------------|---------------|
| **Cost Audit** (Kiểm toán Chi phí) | Tiền có bị rò rỉ không? | Dự án nào đang dùng API > $2000 mà kết quả kém? Bot nào đang loop tốn tiền? |
| **Quality Audit** (Kiểm toán Chất lượng) | Kết quả AI có đúng không? | Output có sai lệch so với yêu cầu? Accuracy đang giảm dần? |
| **Performance Audit** (Kiểm toán Hiệu năng) | Hệ thống chậm ở đâu? | API nào response time > 5s? Bottleneck đang ở bước nào trong pipeline? |

**Giảng viên nhấn mạnh:**
> "Ba loại này phải chạy song song. Cost OK mà Quality kém = lãng phí tiền làm ra sản phẩm tệ. Quality OK mà Performance chậm = khách không dùng được."

---

### Monitoring vs Auditing (10 phút)

**So sánh bằng ẩn dụ dễ nhớ:**

> **Monitoring = Nhiệt kế** → Đo nhiệt độ, báo số, không biết nguyên nhân  
> **Auditing = Bác sĩ** → Chẩn đoán nguyên nhân + đưa ra phác đồ điều trị

| Tiêu chí | Monitoring (Giám sát) | Auditing (Kiểm toán) |
|----------|----------------------|----------------------|
| **Trả lời câu hỏi** | "Có gì đang xảy ra không?" | "Tại sao xảy ra? Phải làm gì?" |
| **Tần suất** | Liên tục, real-time | Định kỳ hoặc theo trigger |
| **Output** | Dashboard số liệu, alerts | Báo cáo phân tích + khuyến nghị hành động |
| **Ai dùng?** | DevOps, kỹ thuật | Quản lý, Business Owner |
| **Ví dụ** | CPU 90%, API Error Rate 5% | "Nguyên nhân CPU cao: bot X đang retry vô hạn → cần thêm circuit breaker" |

**Giảng viên hỏi:**
> "Công ty bạn hiện đang làm Monitoring hay Auditing? Hay không làm gì?"

---

### /audit Command — Agentic Auditing (10 phút)

**Luồng hoạt động của /audit command:**

```
Gõ /audit
    ↓
Quét toàn bộ dữ liệu (500 dự án)
    ↓
Tô đỏ dự án lỗ (Cost > 2000 VÀ Score < 4)
    ↓
Chẩn đoán nguyên nhân từng dự án đỏ
    ↓
Ghi lời khuyên vào cột U (Advisory)
    ↓
Gửi email báo cáo kèm link Google Sheet
```

> **Định vị "/audit" cho học viên:** `/audit` là **lệnh quy ước do chúng ta tự đặt tên** — bản chất là chạy function `auditAIProjects()` (bằng nút Run hoặc trigger trong Apps Script); trong Antigravity có thể lưu thành workflow để gọi lại. Google Sheets **không** có slash command sẵn.

**Agentic Auditing — Tự động hóa cấp độ cao:**

| Cấp độ | Mô tả | Ví dụ |
|--------|-------|-------|
| **Level 1: Alert** | Phát hiện → thông báo cho người | Email cảnh báo "Dự án X đang lỗ" |
| **Level 2: Diagnose** | Phát hiện → phân tích nguyên nhân | "Nguyên nhân: API retry loop, Cost tăng 300% trong 2 ngày" |
| **Level 3: Self-Heal** | Phát hiện → tự quyết định → tự sửa → báo cáo | Tự chuyển sang model rẻ hơn, tự tắt bot lỗi, sáng hôm sau gửi báo cáo |

**Self-Healing là gì?**
> "AI tự phát hiện sự cố → tự quyết định giải pháp → chuyển hướng xử lý → ghi log → báo cáo cho người vào sáng hôm sau."

**Ví dụ Self-Heal thực tế:**
- API provider A bị down → hệ thống tự chuyển sang API provider B → ghi log "Switched from Provider A to B at 2:30AM" → sáng hôm sau email báo cáo

**Bảo mật trong Audit:**
- **KHÔNG hard-code API Key** trong code — dùng environment variables hoặc Google Secret Manager
- Audit phải quét: "Có user nào đang dùng API Key trộm của công ty không?"
- Phát hiện bất thường: 1 user đột nhiên dùng 10x token so với mọi ngày → cảnh báo ngay

---

## ⏸️ Break + Checkpoint (10 phút)

**3 câu checkpoint — học viên tự ghi ra giấy:**

1. Vẽ sơ đồ 3 Tầng AI. Con người nên làm việc chủ yếu ở tầng nào?
2. Kể 3 loại System Audit. Loại nào phát hiện Bot Loop $2000/đêm?
3. Monitoring khác Auditing ở điểm nào? (dùng ẩn dụ nhiệt kế/bác sĩ)

**Trả lời chuẩn:** (giảng viên công bố sau break)
1. Tầng 1 (Thực thi) + Tầng 2 (Quản lý) + Tầng 3 (Điều phối). Con người làm Tầng 3.
2. Ba loại: Cost Audit, Quality Audit, Performance Audit. Bot Loop → Cost Audit phát hiện.
3. Monitoring = nhiệt kế (đo số, báo trạng thái). Auditing = bác sĩ (chẩn đoán nguyên nhân + đưa giải pháp).

---

## 🎬 Demo Live: 5 Bước Apps Script Kiểm Toán (60 phút, gồm thực hành)

> ⚠️ Refresh note: hành vi/UI Antigravity có thể thay đổi theo phiên bản — đối chiếu https://antigravity.google/docs và chạy thử demo trước buổi dạy.

> **Giảng viên thực hiện live Bước 1–3. Học viên quan sát, sau đó tự làm Bước 4–5 và bài thực hành.**

### Bước 1: Chuẩn Bị Dữ Liệu

**Mục tiêu:** Hiểu cấu trúc dữ liệu trước khi viết code audit.

**Giảng viên thực hiện:**
1. Mở Google Sheet `AI_Projects_500` (đã chia sẻ trước)
2. Xác định 2 cột cốt lõi:
   - **Cột H: API_Cost_USD** — chi phí API theo USD
   - **Cột O: Efficiency_Score** — điểm hiệu suất (thang 1–10)
3. Xác định **Cột U: Advisory** — nơi Apps Script sẽ ghi lời khuyên

**Giảng viên nói:** "Trước khi nhờ AI viết code, mình phải biết dữ liệu của mình trông như thế nào. Cột nào, hàng mấy, kiểu dữ liệu gì — AI cần biết những thứ này để viết đúng."

**Tiêu chí tô đỏ:**
```
IF (API_Cost_USD > 2000) AND (Efficiency_Score < 4)
  → Tô đỏ toàn bộ hàng
  → Ghi vào cột U: "⚠️ HIGH COST + LOW EFFICIENCY — Cần review ngay"
```

---

### Bước 2: Tâm Vấn Antigravity Viết Apps Script

**Mục tiêu:** Học cách prompt AI để viết code Apps Script đúng yêu cầu.

**Giảng viên mở Google Antigravity và gửi prompt sau:**

```
Bạn là Google Apps Script Developer chuyên tự động hóa Google Sheets.

Hãy viết một Apps Script function với tên auditAIProjects() để:

1. ĐỌC DỮ LIỆU: Đọc toàn bộ Google Sheet hiện tại (bỏ qua dòng tiêu đề)

2. ĐIỀU KIỆN TÔ ĐỎ (đồng thời CẢ 2):
   - Cột H (API_Cost_USD) > 2000
   - Cột O (Efficiency_Score) < 4
   → Tô đỏ nền toàn bộ hàng đó (màu #FF0000)
   → Ghi vào Cột U: "⚠️ HIGH COST + LOW EFFICIENCY — Cần review ngay"

3. GỬI EMAIL BÁO CÁO:
   - Đếm số dự án bị tô đỏ
   - Liệt kê tên dự án (Cột A) và chi phí (Cột H) của từng dự án đỏ
   - Gửi email đến: [EMAIL_CUA_BAN]
   - Subject: "[AI AUDIT] Báo cáo dự án rủi ro — " + ngày hôm nay
   - Body email bằng tiếng Việt, có link đến Google Sheet này

4. LOG KẾT QUẢ: Ghi vào Logger.log tổng số dự án đã quét và số dự án rủi ro

QUAN TRỌNG:
- KHÔNG hard-code email, dùng biến EMAIL_RECIPIENT để dễ thay đổi
- Code phải có comment giải thích từng bước bằng tiếng Việt
- Xử lý trường hợp không có dự án rủi ro nào (gửi email "All Clear")
```

**Giảng viên nói:** "Tôi giao cho AI đúng 4 việc cụ thể. Đây chính là cách tư duy Tầng 3 — tôi định nghĩa WHAT, AI lo HOW."

---

### Bước 3: Triển Khai Apps Script

**Giảng viên thực hiện live:**

1. Copy code Apps Script mà AI vừa viết
2. Trong Google Sheet → **Extensions** → **Apps Script**
3. Xóa code mặc định → Paste code AI viết vào
4. Tìm dòng `EMAIL_RECIPIENT` → thay bằng email thật của giảng viên
5. Nhấn **Save** (Ctrl+S)
6. Nhấn **Run** → chọn function `auditAIProjects`
7. **Cấp quyền:** Popup hiện ra → Review permissions → Advanced → Go to (unsafe) → Allow

**⚠️ Điểm quan trọng cần giải thích:**
> "Lần đầu chạy Apps Script, Google yêu cầu cấp quyền — đây là bình thường và an toàn vì script đang chạy trên chính tài khoản Google của bạn."

**Quan sát kết quả:**
- Sheet tự động tô đỏ các hàng thỏa điều kiện
- Cột U tự động điền lời khuyên
- Kiểm tra Gmail → email báo cáo đã đến

---

### Bước 4: Thiết Lập On-Edit Trigger (Học viên tự làm — 10 phút)

**Mục tiêu:** Cảnh báo tức thì khi có dữ liệu mới hoặc bị sửa.

**Giảng viên hướng dẫn, học viên thực hiện:**

1. Trong Apps Script Editor → **Triggers** (đồng hồ bên trái màn hình)
2. Nhấn **+ Add Trigger** (góc phải dưới)
3. Cài đặt:
   ```
   Function: auditAIProjects
   Event source: From spreadsheet
   Event type: On edit
   ```
4. Nhấn **Save**

**Test trigger:**
- Quay lại Google Sheet → sửa 1 giá trị ở cột H (tăng lên > 2000)
- Đồng thời sửa cột O cùng hàng đó (giảm < 4)
- Hàng đó phải tự tô đỏ → email cảnh báo phải đến trong vài phút

**Giảng viên nói:** "On-Edit Trigger = hệ thống giám sát real-time. Bất kỳ ai sửa dữ liệu → hệ thống phát hiện ngay → cảnh báo tức thì → giảm thiệt hại tối đa."

> [!NOTE]
> **Bài học "thiết kế cảnh báo không gây bão alert" (giảng viên nhấn mạnh):**
> Nếu để nguyên như trên — audit 500 dòng + gửi email **mỗi lần sửa 1 ô** thì khi cả lớp cùng test, hộp thư sẽ bị spam và **đốt sạch quota 100 email/ngày của Gmail free** chỉ trong vài phút.
> Hướng dẫn học viên 2 cách sửa:
> - **Chỉ gửi email khi số dòng đỏ thay đổi** (lưu số dòng đỏ lần trước bằng `PropertiesService`, so sánh trước khi gửi) — on-edit vẫn tô màu, nhưng mail chỉ đi khi có thay đổi thực sự.
> - Hoặc tách kênh: on-edit chỉ tô màu; **email dùng time-driven trigger mỗi 1 giờ** (hoặc mỗi sáng).
> Đây chính là nguyên tắc thiết kế alert trong AI Operations: cảnh báo quá nhiều = không ai đọc = bằng không có cảnh báo.

---

### Bước 5: Tác Vụ Agent Nâng Cao (Demo nhanh — Giảng viên thực hiện)

**3 tính năng nâng cao — giảng viên demo nhanh, học viên không cần làm ngay:**

**5a. Action Plan tự động:**
> Prompt cho AI: "Với mỗi dự án tô đỏ, hãy tạo Action Plan 3 bước cụ thể để cải thiện trong 2 tuần. Ghi vào cột V (Action_Plan)."

**5b. Infographic Vinh Danh Leader:**
> Prompt cho AI: "Tìm 5 dự án có Efficiency_Score cao nhất (> 8), tạo bảng vinh danh Top Performance, gửi email kèm danh sách này để khích lệ team."

**5c. Xuất PDF tự động:**
> Prompt cho AI: "Xuất báo cáo audit dưới dạng PDF và đính kèm vào email báo cáo."

**Giảng viên nói:** "Ba tính năng này là Tầng 2 hoạt động đầy đủ — không chỉ cảnh báo, mà còn đề xuất giải pháp và khen ngợi người làm tốt. Đây là AI Operations thực sự."

---

> [!IMPORTANT]
> **HƯỚNG DẪN DẠY VỚI 1 WORKSPACE XUYÊN SUỐT (BRIDGE LAYER):**
> Nhằm giữ nguyên nội dung Slide chính thức của MindX nhưng vẫn tối ưu hóa hiệu quả tích lũy năng lực của học viên, Giảng viên hướng dẫn lớp thực hành buổi này **trực tiếp bên trong workspace duy nhất của học viên** (`my-workspace` đã setup ở Buổi 1-7).
> - **Cách tổ chức file:** Học viên tạo audit report cho workspace cá nhân tại `docs/audit-report.md` trong `my-workspace/` — audit chính là workspace của học viên, không phải workspace demo của GV.
> - **Cá nhân hóa (Khuyến nghị):** Đối với học viên muốn audit workspace thật của họ (không phải workspace demo), khuyến khích họ mở file [session-08-bridge.md](plans/260710-workspace-bridge/bridge-guides/session-08-bridge.md) để kiểm tra 7 thành tố trong `my-workspace` và ghi báo cáo audit cá nhân.

## 🛠️ Phần Thực Hành: AI Resource Audit (30 phút)

> **Học viên tự làm toàn bộ — giảng viên hỗ trợ khi cần.**

### Tình huống thực hành

**Bối cảnh:**  
Công ty của bạn có 1000 dòng log sử dụng AI (GPT-5, Claude 4, Gemini Pro...) trong tháng vừa qua. Sếp yêu cầu: "Tìm ngay những người đang dùng AI tốn tiền nhất và báo cáo cho tôi trước cuối ngày."

**Vai trò:** AI Operations Manager — bạn phải xây hệ thống tự làm điều này mà không cần ngồi lọc tay 1000 dòng.

---

### Nhiệm vụ 1: Tạo audit_skill_student.md (10 phút)

**Mục tiêu:** Xây dựng Skill file định nghĩa tiêu chuẩn kiểm toán cho AI.

**Yêu cầu:**
- Định nghĩa vai trò AI (AI Resource Auditor)
- Tiêu chuẩn phân loại (2 ngưỡng — dùng thống nhất cho cả Nhiệm vụ 2):
  - 🔴 **Nguy hiểm:** Cost > $200/tháng — tô đỏ
  - 🟡 **Cảnh báo:** Cost > $100/tháng — lọc vào High_Spenders, tô vàng
  - 🟢 **Bình thường:** Cost ≤ $100/tháng
- Quy tắc báo cáo (ngôn ngữ, format, người nhận)

**Gợi ý cấu trúc file:**
```markdown
# AI Resource Audit Skill

## Vai trò
Bạn là AI Resource Auditor chuyên phân tích chi phí sử dụng AI...

## Tiêu chuẩn phân loại
- Cost > $200: NGUY HIỂM — tô đỏ, cảnh báo ngay
- Cost > $100 (đến $200): CẢNH BÁO — lọc vào High_Spenders, tô vàng, theo dõi
- Cost <= $100: BÌNH THƯỜNG — tô xanh

## Quy tắc báo cáo
- Ngôn ngữ: Tiếng Việt
- Format: Bảng tóm tắt + Chi tiết từng trường hợp nguy hiểm
- Người nhận: [email sếp], CC: [email bản thân]
```

---

### Nhiệm vụ 2: Google Apps Script — Tách Sheet High_Spenders + Model_Summary (15 phút)

**Yêu cầu:**
- Sheet 1 — **High_Spenders:** Lọc tất cả user có Cost_USD > $100, sắp xếp giảm dần theo Cost
- Sheet 2 — **Model_Summary:** Tổng hợp chi phí theo từng Model (GPT-5, Claude 4, Gemini Pro...)

**Prompt gợi ý cho học viên gửi Antigravity:**
```
Viết Google Apps Script function resourceAudit() để:

1. Đọc Sheet "Raw_Data" (1000 dòng log AI usage)
   Cấu trúc: A=Date, B=User_ID, C=Model, D=Task_Type, E=Cost_USD

2. Tạo Sheet mới "High_Spenders":
   - Lọc các dòng có Cost_USD > 100
   - Sắp xếp giảm dần theo Cost_USD
   - Tô vàng các dòng 100 < Cost_USD <= 200 (mức cảnh báo)
   - Tô đỏ các dòng Cost_USD > 200 (mức nguy hiểm)

3. Tạo Sheet mới "Model_Summary":
   - Tổng hợp: Model | Tổng Cost | Số lần dùng | Avg Cost/lần
   - Sắp xếp giảm dần theo Tổng Cost

4. Ghi timestamp "Last Updated: [datetime]" vào cell A1 của mỗi sheet

Comment code bằng tiếng Việt, xử lý lỗi khi sheet đã tồn tại.
```

---

### Nhiệm vụ 3: Gửi Email Đa Kênh (5 phút)

**Yêu cầu:**
- **To:** 2–3 địa chỉ email giả định (simulated sếp)
- **CC:** Email cá nhân của học viên (để tự test)
- **Subject:** `[AI RESOURCE AUDIT] Báo cáo tháng — [Tháng/Năm]`
- **Body:** Tóm tắt: Tổng chi phí / Số user nguy hiểm / Top 3 High Spender / Link Google Sheet

**Tiêu chuẩn nộp bài thực hành:**
- [ ] Dữ liệu lọc sạch (Sheet High_Spenders có đúng user Cost > $100)
- [ ] Email gửi được đến hộp thư (học viên tự check Gmail)
- [ ] Giải thích được sơ đồ 3 Tầng khi giảng viên hỏi

---

## 🎓 Giới Thiệu Đề Thi Giữa Kỳ (20 phút)

> **Giảng viên dành đủ thời gian cho phần này — đây là 10% điểm toàn khóa.**

### Thông tin đề thi

| Mục | Chi tiết |
|-----|----------|
| **Trọng số** | 10% tổng điểm khóa học |
| **Điều kiện** | Phải hoàn thành để đủ điều kiện tham gia Project cuối khóa (Buổi 10–11) |
| **Hạn nộp** | Trước buổi 9 — xem thời gian cụ thể giảng viên thông báo |
| **Hình thức** | Online — link giảng viên gửi qua Group |
| **Link đề** | [Giảng viên điền link vào đây trước buổi học] |

### Giảng viên trình bày nhanh nội dung đề thi

> Giảng viên chiếu đề thi lên màn hình và giải thích từng câu hỏi / phần bài tập trong khoảng 10 phút

**Lưu ý cho học viên:**
- Đề thi kiểm tra kiến thức từ Buổi 1 đến Buổi 8
- Tập trung vào các khái niệm: PDCA, Skill, Agent, Rules, Handoff, Audit, 3 Tầng Hierarchy
- Không cần làm code phức tạp — chủ yếu kiểm tra tư duy và hiểu bài

### Q&A đề thi (10 phút)

Giảng viên mở cho học viên hỏi về đề thi. Ghi lại các câu hỏi phổ biến để chuẩn bị FAQ.

**Câu hỏi thường gặp và gợi ý trả lời:**

| Câu hỏi | Trả lời gợi ý |
|---------|--------------|
| "Thi online hay offline?" | Online — làm trên link giảng viên gửi |
| "Được mở tài liệu không?" | [Giảng viên quyết định — ghi rõ trong đề thi] |
| "Nếu nộp trễ thì sao?" | Không đủ điều kiện dự Project cuối khóa |
| "Thi cá nhân hay nhóm?" | [Giảng viên quyết định — ghi rõ trong đề thi] |
| "Đề thi kiểm tra buổi nào?" | Từ Buổi 1 đến Buổi 8 — toàn bộ Phase 1 + Phase 2 |

---

## ✅ Checklist Nghiệm Thu (6 tiêu chí)

| # | Tiêu chí | Cách kiểm tra |
|---|----------|----------------|
| 1 | Vẽ được sơ đồ 3 Tầng và giải thích vai trò mỗi tầng | Học viên lên bảng vẽ hoặc giải thích miệng |
| 2 | Apps Script chạy được, tô màu đỏ dự án lỗ | Mở Sheet → xem các hàng đỏ đúng điều kiện Cost > 2000 VÀ Score < 4 |
| 3 | Email báo cáo đến hộp thư | Học viên mở Gmail → xem email từ script |
| 4 | Trigger On-Edit hoạt động | Sửa 1 giá trị → hàng tự tô đỏ hoặc email đến |
| 5 | Giải thích được sự khác biệt Monitoring vs Auditing | Dùng ẩn dụ nhiệt kế / bác sĩ — giải thích rõ ràng |
| 6 | Đã nộp bài kiểm tra giữa kỳ | Giảng viên xác nhận qua hệ thống hoặc học viên screenshot xác nhận |

---

## 🚨 Lỗi Phổ Biến & Cách Can Thiệp

| Lỗi | Dấu hiệu | Can thiệp |
|-----|----------|-----------|
| Apps Script không chạy lần đầu | Popup cảnh báo xuất hiện, script dừng | Bình thường — cần cấp quyền: Review permissions → Advanced → Go to (unsafe) → Allow |
| Email không đến | Script chạy thành công nhưng không thấy email | Kiểm tra quota Gmail: free account giới hạn 100 email/ngày. Kiểm tra thư mục Spam |
| Tô màu không đúng | Hàng lẽ ra phải đỏ nhưng không tô | Kiểm tra điều kiện: Cost > 2000 VÀ Score < 4 phải đồng thời. Kiểm tra index cột H và O |
| Trigger On-Edit không kích hoạt | Sửa dữ liệu nhưng không có phản ứng | Phải Save trigger trước. Đảm bảo chọn đúng Sheet. Xem Executions log trong Apps Script |
| Apps Script timeout | Script báo "Exceeded maximum execution time" | 1000 dòng có thể bị timeout. Chia batch: xử lý 200 dòng/lần |
| Cột sai index | Tô đỏ hàng sai / ghi lời khuyên sai cột | Kiểm tra index cột (A=1, B=2... H=8, O=15, U=21) |
| Hard-code API Key | Học viên để API Key trực tiếp trong code | Giải thích nguy hiểm: code chia sẻ → Key bị lộ. Dùng PropertiesService.getScriptProperties() |
| Menu Extensions không thấy Apps Script | Tài khoản tổ chức bị khóa tính năng | Đăng xuất → dùng Gmail cá nhân thay thế |

---

## 🎓 Bài Tập Về Nhà

**Đề bài: Kiểm toán Hiệu suất Đa Kênh**

**Tình huống:**  
Bạn là AI Operations Manager của một doanh nghiệp. Sếp yêu cầu kiểm toán định kỳ toàn bộ chiến dịch Marketing/Kinh doanh để xác định kênh nào đang hoạt động kém và kênh nào đang dẫn đầu.

**Hướng dẫn từng bước:**

1. **Tự tìm hoặc tạo bộ dữ liệu (200+ dòng)** về 1 trong các chủ đề:
   - Chiến dịch Marketing (kênh, ngân sách, conversion rate, doanh thu)
   - Dữ liệu kinh doanh (dự án, chi phí, doanh thu, ROI)
   - KPI nhân sự (nhân viên, hiệu suất, chi phí đào tạo, KPI đạt được)

2. **Audit tô đỏ hiệu suất kém:**
   - Tự định nghĩa tiêu chí "kém" cho bộ dữ liệu của mình
   - Ví dụ: ROI < 10% hoặc Conversion Rate < 2%
   - Apps Script tô đỏ tất cả hàng đạt điều kiện kém

3. **Report Top_Performance:**
   - Tạo Sheet riêng liệt kê Top 10 record hiệu suất tốt nhất
   - Tô xanh lá hoặc thêm icon 🏆

4. **Notify đa kênh:**
   - **To:** 2 địa chỉ email giả định (sếp 1, sếp 2)
   - **CC:** Email cá nhân của bạn

**Sản phẩm nộp bài:**
```
□ Link Google Sheet (đã chạy audit, có màu sắc, có Sheet Top_Performance)
□ File audit_skill_student.md (định nghĩa tiêu chuẩn kiểm toán)
□ Screenshot email đã nhận (chứng minh gửi mail thành công)
```

**Tiêu chí chấm BTVH:**
- [ ] Bộ dữ liệu có ít nhất 200 dòng thực tế (không phải dummy toàn số giống nhau)
- [ ] Tiêu chí tô đỏ có logic rõ ràng, giải thích được tại sao chọn ngưỡng đó
- [ ] Sheet Top_Performance tồn tại và đúng dữ liệu
- [ ] Email gửi thành công đến ít nhất 2 địa chỉ + CC bản thân
- [ ] File `audit_skill_student.md` định nghĩa rõ vai trò AI và tiêu chuẩn phân loại

---

## 📌 Tổng Kết Buổi 8

| Chủ đề | Điểm mấu chốt |
|--------|----------------|
| **AI Operations** | Khung quản lý toàn hệ thống AI — không phải từng con bot, mà toàn bộ hệ sinh thái |
| **Kiến trúc 3 Tầng** | Tầng 1 chạy code, Tầng 2 AI kiểm tra, Tầng 3 con người quyết định chiến lược |
| **Hệ thống Mạnh** | Bạn chỉ cần làm việc ở Tầng 3 — Tầng 1 và Tầng 2 tự lo |
| **System Audit** | 3 loại: Cost (tiền), Quality (chất lượng), Performance (tốc độ) — chạy song song |
| **Monitoring vs Auditing** | Monitoring = nhiệt kế (đo số). Auditing = bác sĩ (nguyên nhân + giải pháp) |
| **Apps Script** | Công cụ tự động hóa Google Sheets — không cần server, không cần hosting |
| **On-Edit Trigger** | Cảnh báo tức thì khi dữ liệu thay đổi — giảm thiệt hại tối đa |
| **Self-Healing** | AI tự phát hiện → tự quyết định → tự sửa → báo cáo sáng hôm sau |
| **Bảo mật** | KHÔNG hard-code API Key. Audit phải quét xem có ai dùng trộm API không |
| **Đề thi giữa kỳ** | 10% điểm toàn khóa. Điều kiện dự Project cuối. Hạn: trước buổi 9 |

---

## 🔗 Liên kết tiếp theo

- **Buổi 9** → Debugging: đọc lỗi, phân loại lỗi, xây debug backlog
- File `audit_skill_student.md` tạo hôm nay → sẽ tích hợp vào hệ thống lớn ở buổi 10–11
- **Nhắc lại:** Hạn nộp bài giữa kỳ trước buổi 9 — không có ngoại lệ
- Google Sheet kiểm toán hôm nay → học viên giữ lại làm template cho dự án thực tế

---

*Hướng dẫn này đồng bộ với slide gốc: `assets/source-materials/original/MindX_AG_Slide 8.pdf`*

# Session 10 — Hướng Dẫn Giảng Dạy Chi Tiết
## Quy Hoạch Kiến Trúc & Xây Dựng Hệ Thống AI Cho Công Việc Thực Tế

> **Version:** 1.0 · **Buổi:** 10 / 11 · Phase 3 — Create  
> **Dành cho:** Giảng viên · Không chia sẻ trực tiếp cho học viên  
> **Chủ đề phụ:** Tư duy Kiến Trúc Sư + SCOPE + 7 Thành Tố + MICRO + Event Ops Auditor Demo + Khởi động Dự án Cuối Khóa

---

## 📋 Tổng quan nhanh

| Mục | Nội dung |
|-----|----------|
| **Chủ đề** | SCOPE framework + 7 Thành tố + MICRO Agent Packaging + Event Ops Auditor Demo |
| **Thời lượng** | 3 giờ |
| **Artifact đầu ra** | `Event_Automation_Skill.md` + `Event_Automation_Workspace_Spec.md` + Bảng đối soát có xử lý lỗi |
| **Công cụ cần** | Google Antigravity, Python 3.10+, pandas, openpyxl, requests |
| **Điểm nhấn giảng dạy** | Demo 4 bước Event Ops Auditor — học viên tự chứng kiến AI tự chặn rác + self-heal + soạn email |

---

## 🎯 Mục tiêu học tập (3 mục tiêu)

1. **Tư duy kiến trúc sư hệ thống** — Làm chủ SCOPE để phân rã quy trình nghiệp vụ phức tạp thành các thành phần có thể giao cho Agent
2. **Thiết kế kỹ thuật theo mô hình 7 thành tố** — Đóng gói Skills, tri thức, quy tắc vận hành an toàn theo MICRO + CLEAR Rules + Handoff Contract
3. **Phổ biến Barem điểm và khởi động dự án cuối khóa** — Học viên chọn được đề tài, vẽ được SCOPE cho bài toán của mình

---

## ⚠️ PHẦN HỌC VIÊN PHẢI CHUẨN BỊ (TRỌNG TÂM)

> **Đây là buổi học Phase 3 đầu tiên — Học viên bắt đầu xây dự án cuối khóa. Nếu thiếu chuẩn bị → không thể làm demo và không có ý tưởng thảo luận.**

### 1. Phần mềm bắt buộc cài sẵn trước buổi học

| STT | Phần mềm | Mục đích | Ghi chú |
|-----|----------|----------|---------|
| 1 | **Python 3.10+** | Chạy script xử lý dữ liệu | Kiểm tra: `python --version` |
| 2 | **pip packages** | pandas, openpyxl, requests | `pip install pandas openpyxl requests` |
| 3 | **Google Antigravity** | Tạo Agent, Skill, Spec | Đã có từ buổi 1 — kiểm tra còn hoạt động |
| 4 | **Trình duyệt Chrome/Edge** | Xem kết quả demo | Không dùng Safari |

**Cách kiểm tra Python và packages:**
```bash
python --version
pip install pandas openpyxl requests
pip list | grep -E "pandas|openpyxl|requests"
```

---

### 2. File dữ liệu cần chuẩn bị

> **Giảng viên gửi link download cho học viên ít nhất 1 ngày trước buổi học.**

#### Cho phần Demo (giảng viên dùng + học viên nạp theo):
| File | Mô tả | Nơi lấy |
|------|-------|---------|
| `Bao_Gia_Chuan.xlsx` | Báo giá nhà cung cấp hợp lệ — 20 dòng, đúng schema | Giảng viên cung cấp |
| `Bao_Gia_Loi.xlsx` | Báo giá có lỗi — thiếu trường, sai kiểu, giá trị rỗng | Giảng viên cung cấp |
| `Ngan_sach_Su_kien.xlsx` | Ngân sách sự kiện theo từng hạng mục | Giảng viên cung cấp |

#### Schema chuẩn của `Bao_Gia_Chuan.xlsx` (giảng viên tự tạo mẫu):
| Cột | Kiểu dữ liệu | Ràng buộc |
|-----|-------------|-----------|
| `ma_nha_cung_cap` | string | Không rỗng |
| `ten_hang_hoa` | string | Không rỗng |
| `don_vi` | string | Không rỗng |
| `so_luong` | int | > 0 |
| `don_gia` | float | > 0 |
| `thanh_tien` | float | = so_luong x don_gia |
| `ghi_chu` | string | Có thể rỗng |

#### Nội dung gợi ý cho `Bao_Gia_Loi.xlsx` (giảng viên cần chuẩn bị sẵn):
- Dòng 3: `don_gia` = "" (rỗng) — kích hoạt LỖI_BỎ_TRỐNG
- Dòng 7: `so_luong` = "abc" (text) — kích hoạt LỖI_KIỂU_DỮ_LIỆU
- Dòng 12: `don_gia` = -500 (âm) — kích hoạt LỖI_GIÁ_TRỊ_RỖNG
- Dòng 15: `ma_nha_cung_cap` = "" (rỗng) — kích hoạt LỖI_BỎ_TRỐNG

> ⚠️ **Quan trọng:** File lỗi phải có ít nhất 3 loại lỗi đại diện cho 3 nhóm sống còn — thiếu 1 nhóm sẽ không demo được đủ Tầng 2 Prevention.

---

### 3. Checklist học viên tự kiểm tra TRƯỚC buổi học

Gửi danh sách này cho học viên qua Group/Zalo:

```
CHECKLIST CHUẨN BỊ BUỔI 10 — Gửi về group trước 9h tối hôm trước

[ ] python --version → hiện Python 3.10 trở lên
[ ] pip install pandas openpyxl requests thành công
[ ] Đã tải đủ 3 file: Bao_Gia_Chuan.xlsx, Bao_Gia_Loi.xlsx, Ngan_sach_Su_kien.xlsx
[ ] Lưu file vào Desktop/Buoi10/ — KHÔNG để trong OneDrive/Google Drive sync
[ ] Đã ghi ý tưởng bài dự án cuối khóa (ít nhất 1-2 câu mô tả vấn đề muốn giải quyết)
[ ] Đọc qua Barem điểm cuối khóa (link giảng viên gửi)
[ ] Google Antigravity hoạt động (thử đăng nhập)
[ ] Pin laptop đầy hoặc có cắm điện
```

---

### 4. Không gian làm việc học viên cần chuẩn bị

Học viên tạo sẵn thư mục:
```
Desktop/
└── Buoi10/
    ├── Bao_Gia_Chuan.xlsx
    ├── Bao_Gia_Loi.xlsx
    ├── Ngan_sach_Su_kien.xlsx
    └── y_tuong_du_an.txt        <- ghi 1-2 câu ý tưởng dự án
```

> Giảng viên nhắc: **Không để file trong OneDrive/Google Drive** sync đang chạy — pandas có thể đọc nhầm phiên bản file đang lock.

---

## 🕐 Cấu trúc buổi học 3 giờ

| Thời gian | Khối | Nội dung | Ghi chú giảng viên |
|-----------|------|----------|-------------------|
| 0 – 10' | **Khai mạc** | Vấn đề thực tế: dữ liệu bất thường → AI ảo giác → số liệu tài chính sai | Hook bằng kịch bản thật — không skip |
| 10 – 40' | **Phần 1** | Agentic Workspace + SCOPE framework (5 bước bắt buộc) | Viết SCOPE lên bảng, học viên ghi lại |
| 40 – 70' | **Phần 2** | 7 Thành tố + Input Validation 2 tầng + MICRO + CLEAR Rules + Handoff Contract | Vẽ sơ đồ Mermaid minh họa |
| 70 – 80' | **Break** | Checkpoint 3 câu nhanh | Học viên tự ghi ra giấy |
| 80 – 140' | **Phần 3** | Demo Event Ops Auditor 4 bước + Thực hành khởi động dự án cuối khóa | Phần CỐT LÕI — 60 phút thực chiến |
| 140 – 180' | **Phần 4** | Giới thiệu Barem điểm + Nhóm thảo luận ý tưởng | Học viên trình bày ý tưởng, giảng viên phản hồi |

---

## 📖 Khai mạc — Vấn đề thực tế (10 phút)

### Hook mở bài

**Câu hỏi mở cho học viên:**
> "Bạn đã bao giờ nhận một file báo giá từ nhà cung cấp — và khi nạp vào hệ thống thì bị lỗi? Hoặc tệ hơn: không lỗi, nhưng số liệu sai và bạn chỉ phát hiện sau khi đã ra quyết định tài chính?"

Đợi 2–3 học viên chia sẻ → dẫn vào 4 hậu quả nghiêm trọng.

### 4 hậu quả khi không có kiến trúc AI

| Vấn đề | Kịch bản thực tế |
|--------|-----------------|
| 🔴 **Dữ liệu đầu vào hỗn loạn** | File báo giá NCC thiếu trường, sai kiểu số, có ký tự đặc biệt → AI xử lý tiếp mà không báo lỗi |
| 🟠 **AI ảo giác** | Vì dữ liệu rác → AI tính toán sai → xuất bảng đối soát "tự bịa" số liệu |
| 🔴 **Sai số liệu tài chính** | Chênh lệch ngân sách không được phát hiện → tổ chức sự kiện bị thâm hụt |
| 🟡 **Hệ thống sập** | Dữ liệu lỗi ghi vào database → toàn bộ pipeline tê liệt |

**Giảng viên nói:**
> "Buổi hôm nay, chúng ta học cách thiết kế Hệ thống AI đủ thông minh để tự phát hiện rác, tự cô lập, tự soạn email phản hồi nhà cung cấp — mà không cần con người can thiệp. Đó là tư duy Kiến trúc sư."

---

## 📖 Phần 1: Agentic Workspace & SCOPE Framework (30 phút)

### Khái niệm Agentic Workspace (10 phút)

**Định nghĩa:**
> **Agentic Workspace** = Không gian làm việc khép kín, trong đó các Agent phối hợp tự trị với nhau thông qua **quy tắc bàn giao** (Handoff Contract) được định nghĩa trước.

**So sánh để học viên hiểu nhanh:**

| | Cách cũ (thủ công) | Agentic Workspace |
|--|-------------------|------------------|
| Luồng dữ liệu | Con người copy-paste giữa các bước | Agent A tự bàn giao cho Agent B theo schema |
| Kiểm soát lỗi | Phát hiện sau khi sai | Chặn lỗi trước khi ghi vào hệ thống |
| Mở rộng | Thuê thêm người | Thêm Agent mới, không thay đổi luồng cũ |
| Tính nhất quán | Tùy thuộc vào cá nhân | Quy tắc được viết ra, Agent tuân thủ 100% |

**Câu hỏi kiểm tra:**
> "Sự khác biệt giữa chatbot bình thường và Agentic Workspace là gì?"
> → Trả lời đúng: Chatbot trả lời một chiều. Agentic Workspace = nhiều Agent phối hợp có quy tắc bàn giao, tự vận hành theo luồng.

---

### SCOPE Framework — 5 bước bắt buộc (20 phút)

> **Giảng viên viết SCOPE lên bảng — học viên ghi lại trước khi giải thích.**

**Khái niệm:**
> SCOPE = 5 bước bắt buộc phải hoàn thành **trước khi triển khai bất kỳ hệ thống AI nào**. Bỏ 1 bước = rủi ro hệ thống.

**Bảng SCOPE đầy đủ:**

| Chữ | Tên | Câu hỏi cốt lõi | Đầu ra |
|-----|-----|----------------|--------|
| **S** | Situation | Bối cảnh hiện tại là gì? Ai bị ảnh hưởng? Điểm đau ở đâu? | Danh sách vấn đề + bên liên quan |
| **C** | Constraints | Dữ liệu đầu vào có những lỗi nào có thể xảy ra? | Bộ quy tắc validation |
| **O** | Objectives | Hệ thống thành công khi đo được gì? | Danh sách KPI cụ thể |
| **P** | Process | Luồng xử lý gồm bao nhiêu bước, Agent nào phụ trách bước nào? | Sơ đồ phân rã nhiệm vụ |
| **E** | Evaluation | Đầu ra được kiểm toán như thế nào? Ai ký duyệt? | Checklist kiểm toán đầu ra |

**Giải thích từng bước — Ví dụ Event Ops:**

**S — Situation:**
```
Công ty tổ chức sự kiện nhận báo giá từ 10 nhà cung cấp khác nhau.
Hiện tại: Kế toán đối soát thủ công từng file Excel.
Điểm đau: 3 ngày làm việc/tháng, dễ sai, không phát hiện được báo giá bất thường.
```

**C — Constraints:**
```
Dữ liệu đầu vào có thể sai theo 3 nhóm:
- LỖI_BỎ_TRỐNG: cột bắt buộc để trống
- LỖI_KIỂU_DỮ_LIỆU: số lượng điền chữ, đơn giá điền text
- LỖI_GIÁ_TRỊ_RỖNG: giá âm, số lượng = 0
```

**O — Objectives:**
```
KPI đo lường được:
- Thời gian đối soát: từ 3 ngày → dưới 30 phút
- Tỷ lệ phát hiện lỗi: 100% các dòng vi phạm schema
- Tỷ lệ hàng vượt ngân sách được cảnh báo: 100%
```

**P — Process:**
```
Bước 1: Nhận file báo giá → Validation Tầng 1 (Regex + Pandas)
Bước 2: Cô lập hàng lỗi → Error Stack
Bước 3: Xử lý hàng hợp lệ → Đối soát với ngân sách
Bước 4: Xuất bảng 7 cột (hợp lệ/vượt NS)
Bước 5: Tự soạn email phản hồi NCC về các hàng lỗi
```

**E — Evaluation:**
```
Kiểm toán đầu ra:
- Tổng hàng đầu vào = Hàng hợp lệ + Hàng lỗi (không được mất dòng nào)
- Mỗi hàng vượt ngân sách phải có cột "Lý do vượt NS"
- Email phản hồi phải liệt kê đúng mã hàng lỗi và loại lỗi
```

**Mẹo giảng dạy SCOPE:**
- Viết tắt SCOPE lên bảng → học viên đọc lại từng chữ
- Nhấn mạnh: **"Bước C (Constraints) hay bị bỏ qua nhất — nhưng đây là bước cứu nguy hệ thống"**
- Liên hệ: "SCOPE là bản vẽ kỹ thuật của kiến trúc sư. Không có bản vẽ → thợ xây sai."

---

## 📖 Phần 2: Thiết Kế Kỹ Thuật — 7 Thành Tố + MICRO + CLEAR + Handoff (30 phút)

### 7 Thành tố của Agentic Workspace (10 phút)

**Bảng 7 thành tố:**

| # | Thành tố | Mô tả | Analog dễ hiểu |
|---|----------|-------|----------------|
| 1 | **Agent Identity** | Ai là Agent này? Nhiệm vụ gì? | JD nhân viên |
| 2 | **Knowledge Base** | Tài liệu nội bộ Agent được phép tham chiếu | Sách quy trình công ty |
| 3 | **Skills** | File `.md` định nghĩa năng lực chuyên biệt | Bằng cấp chuyên môn |
| 4 | **Rules** | Quy tắc If/Then bắt buộc tuân thủ | Nội quy làm việc |
| 5 | **Input Validation** | Cơ chế lọc và chặn dữ liệu rác | Cổng bảo vệ |
| 6 | **Handoff Contract** | Schema dữ liệu bàn giao giữa Agent | Biên bản bàn giao |
| 7 | **Output Audit** | Kiểm toán kết quả đầu ra | Kiểm soát chất lượng |

**Giảng viên chiếu hoặc vẽ sơ đồ luồng:**
```
[Agent Identity + Skills + Rules]
         |
         v
[Knowledge Base] --> [Input Validation Tầng 1 + Tầng 2]
         |
         v
[Processing / Handoff Contract]
         |
         v
[Output Audit / Evaluation]
```

---

### Input Validation 2 tầng (8 phút)

> "Đây là thành phần số 5 — quan trọng nhất để hệ thống không bị 'đầu độc' bởi dữ liệu rác."

**Tầng 1 — Validation (Lọc — phát hiện lỗi):**
```python
import pandas as pd

def validate_row(row):
    errors = []
    
    # Nhóm 1: LỖI_BỎ_TRỐNG
    required_cols = ['ma_nha_cung_cap', 'ten_hang_hoa', 'don_gia', 'so_luong']
    for col in required_cols:
        if pd.isna(row[col]) or str(row[col]).strip() == "":
            errors.append(f"LỖI_BỎ_TRỐNG: cột {col}")
    
    # Nhóm 2: LỖI_KIỂU_DỮ_LIỆU
    try:
        float(row['don_gia'])
    except (ValueError, TypeError):
        errors.append("LỖI_KIỂU_DỮ_LIỆU: don_gia không phải số")
    
    # Nhóm 3: LỖI_GIÁ_TRỊ_RỖNG
    try:
        if float(row['don_gia']) <= 0:
            errors.append("LỖI_GIÁ_TRỊ_RỖNG: don_gia <= 0")
        if int(row['so_luong']) <= 0:
            errors.append("LỖI_GIÁ_TRỊ_RỖNG: so_luong <= 0")
    except:
        pass
    
    return errors
```

**Tầng 2 — Prevention (Chặn — cô lập hàng lỗi, KHÔNG ghi DB):**
```python
error_stack = []
valid_rows = []

for idx, row in df.iterrows():
    row_errors = validate_row(row)
    if row_errors:
        error_stack.append({
            'dong': idx + 2,
            'ma_hang': row.get('ma_nha_cung_cap', 'N/A'),
            'loi': '; '.join(row_errors),
            'hanh_dong': 'BLOCK - Không ghi vào database'
        })
    else:
        valid_rows.append(row)

df_valid = pd.DataFrame(valid_rows)
df_error = pd.DataFrame(error_stack)
# TUYỆT ĐỐI không INSERT df_error vào database
```

**Mẹo giảng dạy:**
- Nhấn mạnh: "Tầng 1 chỉ **phát hiện**. Tầng 2 mới **chặn**. Thiếu Tầng 2 = dữ liệu rác vẫn lọt vào database."
- Vẽ hình ảnh: Tầng 1 = Nhân viên phát hiện hàng lỗi. Tầng 2 = Bảo vệ không cho vào kho.

---

### 3 Nhóm lỗi sống còn (5 phút)

| Nhóm | Tên | Ví dụ | Hậu quả nếu bỏ qua |
|------|-----|-------|-------------------|
| 🔴 | **LỖI_BỎ_TRỐNG** | `don_gia = ""` | AI tính toán ra NaN → báo cáo sai |
| 🟠 | **LỖI_KIỂU_DỮ_LIỆU** | `so_luong = "abc"` | pandas crash khi cộng tổng |
| 🟡 | **LỖI_GIÁ_TRỊ_RỖNG** | `don_gia = -500` | Tổng ngân sách bị tính âm → quyết định tài chính sai |

---

### MICRO Framework — Đóng gói Agent (5 phút)

> "MICRO là bản mô tả đầy đủ một Agent — giống như JD nhân sự nhưng cho AI."

**Bảng MICRO:**

| Chữ | Tên | Nội dung cần viết |
|-----|-----|------------------|
| **M** | Mission | 1 câu mô tả mục tiêu tổng quát của Agent |
| **I** | Identity | Tên Agent, vai trò, quyền hạn trong hệ thống |
| **C** | Capabilities | Danh sách khả năng cụ thể Agent có thể làm |
| **R** | Rules | Tối thiểu 3 quy tắc If/Then bắt buộc tuân thủ |
| **O** | Outputs | Định dạng đầu ra chính xác (cột, schema, file) |

**Ví dụ MICRO cho Event Ops Auditor:**
```markdown
## M — Mission
Tự động đối soát báo giá nhà cung cấp với ngân sách sự kiện,
phát hiện lỗi, cảnh báo vượt ngân sách, soạn email phản hồi NCC.

## I — Identity
Tên: Event Ops Auditor Agent
Vai trò: Agent kiểm toán tài chính sự kiện
Quyền hạn: Đọc file Excel, xuất báo cáo, soạn email — KHÔNG được ghi DB

## C — Capabilities
- Đọc file .xlsx (báo giá + ngân sách)
- Validate dữ liệu theo 3 nhóm lỗi
- Tính chênh lệch báo giá vs ngân sách
- Xuất bảng 7 cột kết quả
- Soạn email phản hồi NCC tự động

## R — Rules
- NẾU hàng có bất kỳ lỗi validation → THÊM vào Error Stack, KHÔNG xử lý tiếp
- NẾU don_gia > ngan_sach_hang_muc → GẮN NHÃN "Vượt ngân sách", GHI lý do
- NẾU Error Stack không rỗng → BẮT BUỘC soạn email phản hồi NCC

## O — Outputs
1. Bảng đối soát: 7 cột [STT, Mã NCC, Hàng hóa, Báo giá, Ngân sách, Chênh lệch, Trạng thái]
2. Bảng sự cố: [Dòng, Mã hàng, Loại lỗi, Hành động]
3. Draft email phản hồi NCC (tiếng Việt)
```

---

### CLEAR Rules — Viết quy tắc vận hành (5 phút)

> "CLEAR là khung để viết Rules trong phần R của MICRO — mỗi quy tắc phải đủ 5 tiêu chí này mới có tác dụng."

**Bảng CLEAR Rules:**

| Chữ | Tiêu chí | Ví dụ SAI | Ví dụ ĐÚNG |
|-----|----------|-----------|------------|
| **C** | Concise — Ngắn gọn | "Hãy cẩn thận với dữ liệu khi cần thiết" | "KHÔNG xử lý hàng có lỗi" |
| **L** | Logical — If/Then | "Kiểm tra giá" | "NẾU don_gia <= 0 → BLOCK hàng này" |
| **E** | Explicit — Rõ ràng | "Báo cáo đúng" | "Xuất bảng 7 cột theo thứ tự: STT, Mã NCC..." |
| **A** | Actionable — Có hành động | "Cần xem xét lỗi" | "GẮN NHÃN 'Vượt ngân sách' + GHI lý do" |
| **R** | Relevant — Liên quan | "Luôn lịch sự" | "Email phản hồi NCC phải liệt kê đúng mã hàng lỗi" |

---

### Handoff Contract (2 phút)

**Định nghĩa:**
> **Handoff Contract** = Thỏa thuận cấu trúc dữ liệu giữa Agent A và Agent B. Nếu Agent A xuất sai schema → Agent B từ chối tiếp nhận.

**Ví dụ Handoff Contract:**
```json
{
  "contract_id": "event-ops-v1",
  "from_agent": "Validator Agent",
  "to_agent": "Reconciliation Agent",
  "schema": {
    "ma_nha_cung_cap": "string, required",
    "ten_hang_hoa": "string, required",
    "don_gia": "float, > 0",
    "so_luong": "int, > 0",
    "thanh_tien": "float, = don_gia * so_luong"
  },
  "rejection_rule": "NẾU bất kỳ cột required = null → từ chối, ghi log lỗi"
}
```

**Giảng viên nói:**
> "Handoff Contract giống như biên bản bàn giao giữa 2 phòng ban. Nếu phòng kế toán nhận hồ sơ thiếu chữ ký → trả lại ngay, không xử lý tiếp. Agent cũng vậy."

---

## ⏸️ Break + Checkpoint (10 phút)

**3 câu checkpoint — học viên tự ghi ra giấy:**

1. SCOPE gồm mấy bước? Kể tên và câu hỏi cốt lõi của từng bước.
2. Input Validation 2 tầng khác nhau ở điểm nào? Tại sao Tầng 2 quan trọng hơn?
3. MICRO có mấy thành phần? Thành phần nào bắt buộc có ít nhất 3 quy tắc If/Then?

**Trả lời chuẩn:** (giảng viên công bố sau break)
1. SCOPE = 5 bước: S-ituation, C-onstraints, O-bjectives, P-rocess, E-valuation.
2. Tầng 1 = phát hiện lỗi, gắn nhãn. Tầng 2 = **chặn dữ liệu lỗi không cho vào database**. Thiếu Tầng 2 = rác vẫn lọt qua.
3. MICRO = 5 thành phần: M, I, C, R, O. Phần **R — Rules** bắt buộc ít nhất 3 quy tắc If/Then theo khung CLEAR.

---

> [!IMPORTANT]
> **HƯỚNG DẪN DẠY VỚI 1 WORKSPACE XUYÊN SUỐT (BRIDGE LAYER):**
> Nhằm giữ nguyên nội dung Slide chính thức của MindX nhưng vẫn tối ưu hóa hiệu quả tích lũy năng lực của học viên, Giảng viên hướng dẫn lớp thực hành buổi này **trực tiếp bên trong workspace duy nhất của học viên** (`my-workspace` đã setup ở Buổi 1-9).
> - **Cách tổ chức file:** Học viên lên kế hoạch capstone tại `docs/capstone-plan.md` trong `my-workspace/` — capstone phải giải quyết bài toán thật từ lĩnh vực của học viên, không phải bài demo Event Ops.
> - **Cá nhân hóa (Khuyến nghị):** Đối với học viên muốn plan capstone bằng bài toán thật của họ, khuyến khích họ mở file [session-10-bridge.md](plans/260710-workspace-bridge/bridge-guides/session-10-bridge.md) để áp dụng SCOPE Framework vào workflow thực tế và lập `capstone-plan.md` cho dự án cuối khóa của mình.

## 🎬 Demo Live: Event Ops Auditor — 4 Bước (60 phút)

> ⚠️ Refresh note: hành vi/UI Antigravity có thể thay đổi theo phiên bản — đối chiếu https://antigravity.google/docs và chạy thử demo trước buổi dạy.

> **Giảng viên thực hiện live. Học viên làm theo từng bước trên máy của mình.**

### Bước 1: Thiết lập Skill + Spec

**Mục tiêu:** Tạo 2 file nền tảng — `Event_Automation_Skill.md` (MICRO) và `Event_Automation_Workspace_Spec.md` (SCOPE)

#### Tạo `Event_Automation_Skill.md`:

**Prompt gửi cho AI:**
> "Hãy tạo file Event_Automation_Skill.md mô tả một Agent kiểm toán báo giá sự kiện theo đúng MICRO Framework gồm 5 thành phần: Mission, Identity, Capabilities, Rules (ít nhất 3 quy tắc If/Then), Outputs. Agent tên là 'Event Ops Auditor'. Nhiệm vụ: đối soát báo giá NCC với ngân sách sự kiện, phát hiện 3 loại lỗi (LỖI_BỎ_TRỐNG, LỖI_KIỂU_DỮ_LIỆU, LỖI_GIÁ_TRỊ_RỖNG), xuất bảng 7 cột, soạn email phản hồi NCC."

**Giảng viên nói:** "File Skill.md này là 'Hồ sơ nhân sự' của Agent. Không có file này, Agent không biết mình là ai, làm gì, và được phép làm gì."

#### Tạo `Event_Automation_Workspace_Spec.md`:

**Prompt gửi cho AI:**
> "Hãy tạo file Event_Automation_Workspace_Spec.md mô tả toàn bộ hệ thống kiểm toán báo giá theo SCOPE Framework. Bao gồm: S (bối cảnh: công ty sự kiện nhận báo giá từ NCC), C (3 nhóm lỗi validation), O (KPI: thời gian đối soát < 30 phút, phát hiện 100% lỗi), P (luồng 5 bước xử lý), E (checklist kiểm toán đầu ra)."

**Giảng viên nói:** "File Spec.md này là 'Bản thiết kế kiến trúc'. Skill.md mô tả NGƯỜI, Spec.md mô tả HỆ THỐNG."

**Kết quả học viên phải có sau Bước 1:**
- `Event_Automation_Skill.md` — có đủ 5 thành phần MICRO
- `Event_Automation_Workspace_Spec.md` — có đủ 5 bước SCOPE

---

### Bước 2: Kích hoạt Agent + Xuất sơ đồ Mermaid 7 thành tố

**Mục tiêu:** Nạp file Skill + Spec vào Agent, yêu cầu xuất sơ đồ kiến trúc hệ thống.

**Thực hiện:**
1. Mở New Chat trong Google Antigravity
2. Kéo thả vào khung chat:
   - `Event_Automation_Skill.md`
   - `Event_Automation_Workspace_Spec.md`
   - `Ngan_sach_Su_kien.xlsx`
3. Gửi prompt kích hoạt:

```
Bạn là Event Ops Auditor Agent đã được định nghĩa trong file Event_Automation_Skill.md.
Hãy xác nhận bạn đã đọc đủ 2 file cấu hình và file ngân sách.
Sau đó, xuất sơ đồ Mermaid mô tả kiến trúc 7 thành tố của hệ thống này.
```

**Giảng viên nói:** "Sơ đồ Mermaid chính là 'bản đồ hệ thống' — bất kỳ ai mới join dự án đều có thể đọc và hiểu luồng ngay lập tức."

**Kết quả mong đợi:** Agent xuất sơ đồ Mermaid có 7 node tương ứng 7 thành tố, hiển thị rõ luồng từ Input → Validation → Processing → Output → Handoff.

---

### Bước 3: Đối soát báo giá chuẩn — Nạp 2 file, xuất bảng 7 cột

**Mục tiêu:** Chứng minh hệ thống hoạt động đúng với dữ liệu sạch.

**Thực hiện:**
1. Trong chat hiện tại, kéo thả thêm `Bao_Gia_Chuan.xlsx`
2. Gửi prompt đối soát:

```
Hãy thực hiện đối soát báo giá theo đúng SCOPE đã thiết lập:
1. Đọc toàn bộ Bao_Gia_Chuan.xlsx (20 dòng)
2. Validate từng dòng theo 3 nhóm lỗi trong Skill.md
3. Đối soát don_gia với ngân sách tương ứng trong Ngan_sach_Su_kien.xlsx
4. Tính chênh lệch: Chênh_lệch = don_gia_bao_gia - ngan_sach_hang_muc
5. Xuất bảng 7 cột:
   STT | Mã NCC | Tên hàng hóa | Báo giá (VNĐ) | Ngân sách (VNĐ) | Chênh lệch | Trạng thái
   Trạng thái: "Hợp lệ" hoặc "Vượt ngân sách"
```

**Kết quả mong đợi:**
- Bảng 7 cột hiển thị đầy đủ 20 dòng
- Dòng vượt ngân sách được đánh dấu "Vượt ngân sách"
- Dòng hợp lệ được đánh dấu "Hợp lệ"
- Cột Chênh lệch: số dương = vượt NS, số âm = còn dư ngân sách

**Giảng viên nói:** "Công việc mà kế toán cần 3 ngày → AI làm trong 30 giây. Và quan trọng hơn: kết quả nhất quán 100%, không có lỗi copy-paste."

**Điểm chờ cho học viên thấy:** Agent tự tính `thanh_tien = don_gia x so_luong` và đối chiếu với cột tương ứng trong ngân sách — không cần viết công thức Excel.

---

### Bước 4: Chặn rác + Self-Heal — Nạp file lỗi, cô lập, soạn email

> Đây là khoảnh khắc WOW nhất — học viên thấy AI tự phát hiện rác, tự cô lập, tự soạn email phản hồi.

**Thực hiện:**
1. Kéo thả `Bao_Gia_Loi.xlsx` vào chat
2. Gửi prompt xử lý lỗi:

```
Bây giờ tôi nạp file Bao_Gia_Loi.xlsx chứa dữ liệu có lỗi.
Hãy thực hiện đúng theo Rules trong Skill.md:

1. Validate từng dòng theo 3 nhóm lỗi
2. CÔ LẬP các hàng lỗi vào Error Stack — KHÔNG đưa vào bảng đối soát chính
3. Xuất bảng sự cố: [Dòng Excel | Mã NCC | Loại lỗi | Hành động BLOCK]
4. Xuất bảng đối soát CHÍNH chỉ gồm các hàng hợp lệ (nếu có)
5. Tự động soạn email phản hồi NCC về các hàng lỗi:
   - Tiêu đề: [TÊN CÔNG TY] — Thông báo lỗi dữ liệu báo giá ngày [DATE]
   - Nội dung: Liệt kê từng dòng lỗi, loại lỗi, yêu cầu cung cấp lại
```

**Kết quả mong đợi — 3 output:**

Output 1 — Bảng sự cố:

| Dòng Excel | Mã NCC | Loại lỗi | Hành động |
|-----------|--------|----------|-----------|
| 3 | NCC-001 | LỖI_BỎ_TRỐNG: don_gia | BLOCK - Không xử lý |
| 7 | NCC-003 | LỖI_KIỂU_DỮ_LIỆU: so_luong | BLOCK - Không xử lý |
| 12 | NCC-005 | LỖI_GIÁ_TRỊ_RỖNG: don_gia âm | BLOCK - Không xử lý |

Output 2 — Bảng đối soát chính (chỉ hàng hợp lệ)

Output 3 — Draft email phản hồi NCC:
```
Tiêu đề: [Tên Công Ty] — Thông báo lỗi dữ liệu báo giá ngày 10/06/2026

Kính gửi Quý Nhà Cung Cấp,

Chúng tôi đã nhận được file báo giá từ Quý vị. Tuy nhiên, hệ thống kiểm toán
tự động phát hiện một số dòng không đạt chuẩn dữ liệu:

1. Dòng 3 — Mã NCC-001: LỖI_BỎ_TRỐNG tại cột đơn giá
2. Dòng 7 — Mã NCC-003: LỖI_KIỂU_DỮ_LIỆU tại cột số lượng (điền chữ thay số)
3. Dòng 12 — Mã NCC-005: LỖI_GIÁ_TRỊ_RỖNG: đơn giá âm không hợp lệ

Đề nghị Quý vị cung cấp lại dữ liệu đúng định dạng trong vòng 24 giờ.

Trân trọng,
[Tên Người Phụ Trách]
```

**Giảng viên nói:** "Agent tự phát hiện rác → tự cô lập → tự soạn email. Đây là Self-Heal: hệ thống không dừng lại khi gặp lỗi — nó tự xử lý và báo cáo cho con người."

---

## 🎓 Phần 4: Giới thiệu Barem + Khởi động Dự Án Cuối Khóa (40 phút)

### Giới thiệu Barem điểm (10 phút)

**Giảng viên chiếu Barem điểm lên màn hình và đọc qua từng phần:**

| Hạng mục | Điểm tối đa | Tiêu chí cốt lõi |
|----------|-------------|-----------------|
| SCOPE đầy đủ 5 bước | 20đ | Có đủ S, C, O, P, E — mỗi bước có nội dung cụ thể |
| MICRO Agent đủ 5 thành phần | 20đ | Mission, Identity, Capabilities, Rules (≥3 If/Then), Outputs |
| Input Validation 2 tầng | 20đ | Có code Tầng 1 + Tầng 2 Prevention với BLOCK rõ ràng |
| Bảng đối soát 7 cột | 20đ | Chính xác, có cột Trạng thái và lý do |
| Handoff Contract | 10đ | Định nghĩa đúng schema, có rejection rule |
| Trình bày và Demo | 10đ | Demo chạy được live, giải thích được từng thành phần |

> **Nhấn mạnh:** "Barem không chấm sản phẩm đẹp — chấm sản phẩm đúng kiến trúc. Một AI giải quyết được bài toán thực tế của bạn = điểm tối đa."

---

### Nhóm thảo luận ý tưởng dự án (20 phút)

**Quy trình:**
1. Từng học viên chia sẻ ý tưởng dự án (2 phút/người)
2. Giảng viên hướng dẫn bằng 4 câu hỏi chuẩn:

**4 câu hỏi SCOPE nhanh cho học viên:**
> 1. Bạn đang làm thủ công việc gì? (Bước S)
> 2. Dữ liệu đầu vào từ đâu? Ai cung cấp? Có thể sai theo cách nào? (Bước C)
> 3. Nếu AI làm tốt, bạn đo thành công bằng gì? (Bước O)
> 4. Luồng xử lý có bao nhiêu bước? Bước nào chậm nhất? (Bước P)

**Gợi ý bài toán phù hợp cho học viên:**

| Ngành | Bài toán gợi ý |
|-------|---------------|
| HR | Lọc CV, chấm test, gửi email kết quả |
| Kế toán | Đối soát hóa đơn, phân loại chi phí |
| Sale | Báo cáo pipeline, tính hoa hồng tự động |
| Marketing | Tổng hợp lead từ nhiều kênh, phân loại |
| Operations | Quản lý tồn kho, cảnh báo thiếu hàng |

**Giảng viên hướng dẫn:**
- Nếu ý tưởng quá lớn → giúp học viên thu hẹp scope về 1 luồng cụ thể
- Nếu ý tưởng quá đơn giản → gợi ý thêm tầng MICRO Agent
- Mục tiêu: Mỗi học viên ra về với ít nhất 1 trang giấy mô tả SCOPE của bài toán mình

---

### Giới thiệu đề bài Dự án Cuối Khóa HR TalentOps (10 phút)

**Đề bài tham khảo — HR TalentOps Agentic System:**

> Xây dựng hệ thống tự động hóa tuyển dụng:
> 1. **Lọc CV** — Agent đọc CV, chấm điểm theo tiêu chí, xếp hạng ứng viên
> 2. **Chấm test** — Agent nhận bài test, chấm điểm tự động theo đáp án
> 3. **HITL** — Human-in-the-loop: Reviewer con người xem lại top 3 trước khi gửi email
> 4. **Gửi email kết quả** — Agent tự soạn email cá nhân hóa cho từng ứng viên

**SCOPE gợi ý cho HR TalentOps:**
```
S: Công ty nhận 50-100 CV/tháng, HR đọc thủ công mất 2 tuần
C: CV có thể ở dạng PDF, Word, thiếu thông tin; bài test có thể trống
O: Rút ngắn thời gian xét CV từ 2 tuần → 2 giờ; tỷ lệ sai sót < 1%
P: Nhận CV → Lọc → Chấm test → HITL review → Gửi email
E: HR ký duyệt danh sách trước khi email được gửi (HITL checkpoint)
```

---

## ✅ Checklist Nghiệm Thu (5 tiêu chí)

| # | Tiêu chí | Cách kiểm tra |
|---|----------|---------------|
| 1 | Vẽ được sơ đồ SCOPE cho bài toán của mình (5 ô) | Học viên trình bày miệng hoặc viết ra giấy |
| 2 | `Event_Automation_Skill.md` có đủ 5 thành phần MICRO | Kiểm tra: M, I, C, R (≥3 rules), O |
| 3 | Bảng đối soát xuất được 7 cột (Hợp lệ/Vượt ngân sách) | Xem output Agent trong chat |
| 4 | Email phản hồi NCC tự động soạn có danh sách lỗi cụ thể | Kiểm tra email có đúng mã hàng + loại lỗi |
| 5 | Đã trình bày ý tưởng dự án cuối khóa (1 trang giấy) | Thu bài hoặc chụp ảnh |

---

## 🚨 Lỗi Phổ Biến & Cách Can Thiệp

| Lỗi | Dấu hiệu | Can thiệp |
|-----|----------|-----------| 
| SCOPE dừng ở bước S | Học viên chỉ mô tả vấn đề chung chung | Hỏi 4 câu: Làm mất bao nhiêu giờ? Ai làm? Dữ liệu từ đâu? Bước nào chậm nhất? |
| MICRO Agent thiếu Rules | File Skill.md không có phần R hoặc chỉ 1 quy tắc | Bắt buộc viết lại với ít nhất 3 quy tắc dạng If/Then |
| Input Validation chỉ làm Tầng 1 | Code phát hiện lỗi nhưng vẫn ghi tiếp vào DataFrame chính | Nhắc: "Thiếu lệnh if errors: error_stack.append() và continue" |
| Agent ghi lỗi vào database | Output bao gồm cả hàng lỗi trong bảng đối soát chính | Kiểm tra: Có điều kiện BLOCK trước INSERT không? |
| pandas crash khi đọc file lỗi | ValueError: could not convert string to float | Bọc trong try/except, xử lý lỗi từng ô |
| Python không cài, thiếu package | ModuleNotFoundError: No module named 'pandas' | pip install pandas openpyxl requests rồi restart kernel |
| File Excel bị khóa | PermissionError khi đọc file | Đóng Excel trên máy, chạy lại script |
| Email không có mã hàng cụ thể | Email chỉ viết "có lỗi xảy ra" chung chung | Yêu cầu AI thêm: "liệt kê từng dòng: [Dòng Excel] — [Mã NCC] — [Loại lỗi]" |
| Handoff Contract thiếu rejection rule | Schema có nhưng không có điều kiện từ chối | Thêm: rejection_rule: "NẾU required field = null → từ chối, ghi log" |

---

## 🔑 Điểm Nhấn OIPO — Tư duy đọc bài toán

> Trước khi viết bất kỳ prompt nào, học viên phải tư duy theo OIPO:

| Chữ | Tên | Câu hỏi |
|-----|-----|---------|
| **O** | Objective | Tôi muốn Agent đạt được gì? |
| **I** | Input chuẩn | Dữ liệu đầu vào trông như thế nào khi hoàn hảo? |
| **P** | Process | Luồng xử lý chia thành bao nhiêu nhiệm vụ? Ai làm bước nào? |
| **O** | Output sạch | Đầu ra cuối cùng trông như thế nào? Format gì? |

**Ví dụ OIPO cho Event Ops Auditor:**
```
O: Agent đối soát báo giá và xuất bảng 7 cột trong < 2 phút
I: File xlsx có đúng 7 cột, không có ô rỗng bắt buộc
P: Validate → Tách lỗi → Đối soát ngân sách → Gắn nhãn → Xuất bảng
O: Bảng 7 cột + bảng sự cố + email NCC — 3 file riêng biệt
```

---

## 🎓 Bài Tập Về Nhà

**Đề bài:** Chuẩn bị và hoàn thiện bài Dự án Cuối Khóa (link đề bài đầy đủ giảng viên gửi riêng).

**Đề tài tham khảo — HR TalentOps Agentic System:**

> Xây dựng hệ thống tự động hóa tuyển dụng gồm 4 Agent:
> 1. **CV Screener Agent** — Lọc CV theo tiêu chí, chấm điểm, xếp hạng ứng viên
> 2. **Test Grader Agent** — Nhận bài test, chấm điểm tự động theo đáp án chuẩn
> 3. **HITL Reviewer** — Dừng luồng, chờ HR con người ký duyệt top 3 trước khi tiếp tục
> 4. **Email Composer Agent** — Soạn email cá nhân hóa gửi kết quả cho từng ứng viên

**Yêu cầu bắt buộc:**
- Hoàn thành SCOPE đầy đủ 5 bước cho bài toán tuyển dụng của mình
- Thiết kế MICRO cho ít nhất 2 Agent (CV Screener + Email Composer)
- Viết Input Validation 2 tầng cho file CV đầu vào
- Định nghĩa Handoff Contract giữa CV Screener và Test Grader
- Tạo demo chạy được với file CV mẫu (giảng viên cung cấp)

**Tiêu chí chấm BTVH (nộp trước buổi 11):**
- [ ] SCOPE đủ 5 bước, mỗi bước có nội dung cụ thể (không chung chung)
- [ ] MICRO Agent đủ 5 thành phần, Rules có ít nhất 3 quy tắc If/Then
- [ ] Input Validation: code chạy được, cô lập được ít nhất 2 loại lỗi
- [ ] Handoff Contract: JSON schema đầy đủ với rejection rule
- [ ] Demo: Agent đọc file mẫu, xuất kết quả, soạn được email

---

## 📌 Tổng Kết Buổi 10

| Chủ đề | Điểm mấu chốt |
|--------|---------------|
| **Tư duy Kiến Trúc Sư** | Không vội code — thiết kế SCOPE trước, xây sau. Đây là sự khác biệt giữa người vận hành AI và người kiến trúc sư AI. |
| **SCOPE Framework** | 5 bước bắt buộc: Situation → Constraints → Objectives → Process → Evaluation. Bỏ 1 bước = rủi ro hệ thống. |
| **7 Thành tố** | Hệ thống AI hoàn chỉnh cần đủ 7 thành tố. Thiếu bất kỳ thành tố nào → hệ thống dễ vỡ khi gặp edge case. |
| **Input Validation 2 tầng** | Tầng 1 = phát hiện. Tầng 2 = chặn. Cả 2 tầng mới đủ bảo vệ database khỏi dữ liệu rác. |
| **MICRO + CLEAR Rules** | Agent không có Rules = nhân viên không có nội quy. Ít nhất 3 quy tắc If/Then theo CLEAR = Agent đáng tin cậy. |
| **Handoff Contract** | Quy tắc bàn giao giữa Agent là xương sống của Agentic Workspace. Schema sai → Agent B từ chối, ghi log, báo cáo. |
| **Self-Heal** | Hệ thống tốt không dừng lại khi gặp lỗi — nó tự cô lập, tự xử lý, tự báo cáo và tiếp tục với phần dữ liệu hợp lệ. |

---

## 🔗 Liên kết tiếp theo

- **Buổi 11** → Hoàn thiện Dự án Cuối Khóa — tích hợp HITL, deploy, tổng kết Phase 3
- File `Event_Automation_Skill.md` + `Event_Automation_Workspace_Spec.md` tạo hôm nay → là nền tảng cho dự án cuối khóa
- Học viên mang theo ý tưởng dự án đã SCOPE hóa → buổi 11 sẽ build và demo live
- Barem điểm cuối khóa → giảng viên gửi link riêng sau buổi học

---

*Hướng dẫn này dành cho giảng viên — đồng bộ với tài liệu khóa học Phase 3. Không chia sẻ trực tiếp cho học viên.*

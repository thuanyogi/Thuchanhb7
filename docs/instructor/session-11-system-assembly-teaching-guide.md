# Session 11 — Hướng Dẫn Giảng Dạy Chi Tiết
## Lắp Ráp Hệ Thống Tổng Thể & Kiểm Thử Tích Hợp

> **Version:** 1.0 · **Verified from:** Session 11 content spec  
> **Dành cho:** Giảng viên · Không chia sẻ trực tiếp cho học viên  
> **Buổi:** 11 / 11 · Phase 3 — Create

---

## 📋 Tổng quan nhanh

| Mục | Nội dung |
|-----|----------|
| **Chủ đề** | Handoff JSON Schema + Human Checkpoint + CLEAR Rules + Kiểm thử tích hợp + PDCA debug + Checklist Buổi 12 |
| **Thời lượng** | 3 giờ |
| **Artifact đầu ra** | HR TalentOps Agentic System hoàn chỉnh: lọc CV + chấm test + HITL + email + file Excel |
| **Công cụ cần** | Google Antigravity, Python 3.10+, pandas, openpyxl, file Excel 30 ứng viên |
| **Điểm nhấn giảng dạy** | Đây là buổi lắp ráp cuối cùng — hệ thống phải chạy end-to-end trước khi demo Buổi 12 |

---

## 🎯 Mục tiêu học tập (3 mục tiêu)

1. **Kiến Trúc** — Áp dụng Handoff dữ liệu chuẩn JSON Schema tránh lỗi lệch cấu trúc giữa các Agent
2. **Kiểm Soát & Tối ưu** — Thiết lập Human Checkpoint phê duyệt thủ công các quyết định cận biên [6.0–6.9]
3. **Checklist hoàn thiện dự án cuối khóa** — Đúng đủ để demo Buổi 12 không bị crash hay thiếu output

---

## ⚠️ PHẦN HỌC VIÊN PHẢI CHUẨN BỊ (TRỌNG TÂM — ĐẶC BIỆT QUAN TRỌNG)

> **Buổi 11 là buổi thực hành cuối cùng trước khi demo Buổi 12. Học viên không có code/hệ thống gì sẽ rất khó theo kịp. Hãy chuẩn bị ít nhất từ Buổi 10!**

> **Đây là phần giảng viên cần nhấn mạnh nhất trong thông báo group trước buổi học. Nếu học viên không chuẩn bị đúng → buổi học thực hành không thể tiến hành.**

### 1. Phần mềm bắt buộc cài sẵn trước buổi học

| STT | Phần mềm | Mục đích | Ghi chú |
|-----|----------|----------|---------|
| 1 | **Python 3.10+** | Chạy orchestrator và các agent | Kiểm tra: `python --version` |
| 2 | **pip packages** | Thư viện xử lý Excel + dữ liệu | Terminal: `pip install pandas openpyxl` |
| 3 | **Google Antigravity** | Tạo và chạy AI Agent | Đã có từ Buổi 1 — kiểm tra tài khoản còn hoạt động |
| 4 | **Trình duyệt Chrome/Edge** | Xem output nếu có dashboard | Không dùng Safari |

**Cách kiểm tra Python:** Mở Terminal/CMD → gõ `python --version` → phải hiện `Python 3.x.x`

**Cách cài pip packages một lần:**
```bash
pip install pandas openpyxl
```

---

### 2. File dữ liệu cần chuẩn bị

> **Giảng viên cần gửi cho học viên ít nhất 1 ngày trước buổi học:**

#### Cho phần Demo và Thực hành (cả giảng viên lẫn học viên dùng chung):

| File | Mô tả | Nơi lấy |
|------|-------|---------|
| `danh_sach_cv.xlsx` | Danh sách 30 ứng viên — có đủ Tên, Email, SĐT, Kinh nghiệm, Kỹ năng, ngày nộp CV | Giảng viên gửi link tải |
| `ket_qua_bai_test.xlsx` | Kết quả bài test của 30 UV — có điểm trắc nghiệm, tự luận, timestamp nộp bài | Giảng viên gửi link tải |
| `hr_talentops_skills.md` | File Skill từ Buổi 10 — mô tả toàn bộ nghiệp vụ HR TalentOps | Từ Buổi 10 của học viên |

> **⚠️ Lưu ý quan trọng:** File `danh_sach_cv.xlsx` phải bao gồm ít nhất 4 ứng viên có thông tin lỗi (thiếu Email, thiếu SĐT, Email không có @, thiếu Tên) để học viên kiểm thử luồng INVALID. Giảng viên chuẩn bị file mẫu chuẩn để tránh học viên bị lỗi không đoán được.

**Cấu trúc file `danh_sach_cv.xlsx` chuẩn:**
```
Cột: Ma_UV | Ho_Ten | Email | SDT | Kinh_Nghiem_Nam | Ky_Nang | Ngay_Nop_CV
VD: UV001 | Nguyễn Văn An | an@email.com | 0901234567 | 3 | Python,SQL | 2024-01-15
    UV028 | [để trống]    | baemail.com  | 0912345678 | 1 | Word       | 2024-01-20  ← UV lỗi
```

**Cấu trúc file `ket_qua_bai_test.xlsx` chuẩn:**
```
Cột: Ma_UV | Diem_TN | Diem_TL | Thoi_Gian_Nop | Han_Nop
VD: UV001 | 8.5 | 7.0 | 2024-01-20 | 2024-01-18  ← nộp trễ 2 ngày → phạt 2đ
```

---

### 3. Checklist học viên tự kiểm tra TRƯỚC buổi học

Gửi danh sách này cho học viên qua Group/Zalo:

```
✅ CHECKLIST CHUẨN BỊ BUỔI 11 — Gửi về group trước 9h tối hôm trước

□ Đã có hệ thống từ Buổi 10 (dù chưa hoàn chỉnh — đây là buổi lắp ráp!)
□ File danh_sach_cv.xlsx đã tải về Desktop/Buoi11/
□ File ket_qua_bai_test.xlsx đã tải về Desktop/Buoi11/
□ python --version → phải hiện Python 3.x.x
□ pip install pandas openpyxl thành công
□ Google Antigravity hoạt động (thử đăng nhập)
□ Đã bắt đầu phác thảo slide thuyết trình Buổi 12 (5-7 trang)
□ Máy tính pin đầy hoặc cắm điện
```

---

### 4. Không gian làm việc học viên cần chuẩn bị

Học viên tạo sẵn thư mục:
```
Desktop/
└── Buoi11/
    ├── danh_sach_cv.xlsx
    ├── ket_qua_bai_test.xlsx
    ├── hr_talentops_skills.md     ← từ Buổi 10
    ├── knowledge_base/
    │   └── tieu_chi_cham_diem.json
    └── outputs/
        └── emails/               ← AI sẽ tạo 30 file .txt vào đây
```

> Giảng viên nhắc: Không để file trong OneDrive/Google Drive đang sync → Python có thể bị lock file.

---

## 🕐 Cấu trúc buổi học 3 giờ

| Thời gian | Khối | Nội dung | Ghi chú giảng viên |
|-----------|------|----------|--------------------|
| 0 – 10' | **Khai mạc** | Giới thiệu mục tiêu buổi 11 = lắp ráp + kiểm thử. Kiểm tra file đã chuẩn bị | **Kiểm tra ngay đầu giờ** — ai thiếu file thì tải ngay |
| 10 – 30' | **Phần 1: Kiến trúc** | Kiến trúc 3 tầng + Handoff JSON Schema + ví dụ lỗi key sai | Vẽ sơ đồ 3 tầng lên bảng — học viên chụp ảnh |
| 30 – 60' | **Phần 2: Kiểm soát** | HITL + Luồng OIPO + CLEAR Rules + Kiểm thử tích hợp | Mô phỏng live luồng HITL: Y/N trên terminal |
| 60 – 70' | **Break + Checkpoint** | 3 câu checkpoint nhanh | Học viên tự ghi ra giấy |
| 70 – 140' | **Phần 3: Thực hành** | 9 bước xây dựng HR TalentOps + lắp ráp + debug PDCA | Đây là phần CỐT LÕI — 70 phút thực chiến |
| 140 – 180' | **Checklist Buổi 12 + Q&A** | 6 tiêu chí nghiệm thu + Giải đáp + Giao bài cuối khóa | Chiếu checklist lên màn hình, học viên tự đánh dấu |

---

## 📖 Phần 1: Kiến Trúc 3 Tầng & Handoff JSON Schema (20 phút)

### Mở bài — Hook (5 phút)

**Câu hỏi mở cho học viên:**
> "Từ Buổi 10 đến nay, bạn đã có CV Screener, Test Evaluator, Communication Agent. Nếu từng Agent chạy riêng lẻ — điều gì xảy ra khi ghép chúng lại?"

Đợi 2–3 học viên trả lời → dẫn vào vấn đề: *"Agent A trả về `ma_uv`, Agent B lại đọc `ma_ung_vien` → hệ thống gãy luồng ngay lập tức."*

---

### Kiến trúc Workspace 3 tầng nhân sự AI (10 phút)

**Vẽ sơ đồ lên bảng hoặc chiếu slide:**

```
╔══════════════════════════════════════╗
║         ORCHESTRATOR AGENT           ║
║  (Điều phối tổng thể — ra quyết định)║
╚══════════════╦═══════════════════════╝
               ║ Handoff JSON
     ┌──────────┼──────────┐
     ▼          ▼          ▼
 ┌────────┐ ┌────────┐ ┌─────────────┐
 │CV      │ │Test    │ │Communication│
 │Screener│ │Eval.   │ │Agent        │
 └────────┘ └────────┘ └─────────────┘
          TẦNG CHUYÊN VIÊN
          (Audit Log trong mỗi Agent)
```

**3 tầng của hệ thống:**

| Tầng | Tên | Vai trò | Thành phần |
|------|-----|---------|------------|
| 1 | **Orchestrator** | Điều phối tổng thể, kết nối luồng, ra quyết định phân luồng | `orchestrator.py` |
| 2 | **Chuyên viên** | Xử lý nghiệp vụ cụ thể từng bước | CV Screener, Test Evaluator, Communication Agent |
| 3 | **Kiểm toán** | Ghi nhận toàn bộ output, lỗi, quyết định vào log | Audit log trong từng Agent |

---

### Handoff JSON Schema — Tránh Lỗi Key Sai (10 phút)

**Vấn đề cốt lõi:**
> *"Agent A xử lý CV xong → trả về JSON. Agent B cần đọc kết quả đó. Nếu tên key khác nhau → hệ thống gãy ngay."*

**Ví dụ lỗi thực tế — Key Mismatch:**

```json
// ❌ Agent A trả về (CV Screener dùng key này)
{
  "ma_ung_vien": "UV001",
  "diem_cv": 7.5,
  "trang_thai": "Valid"
}

// ❌ Agent B đọc (Test Evaluator đọc key khác)
record["ma_uv"]      // → KeyError: 'ma_uv'
record["status"]     // → KeyError: 'status'
```

```json
// ✅ JSON Schema chuẩn hóa — TẤT CẢ Agent dùng chung
{
  "ma_uv": "UV001",
  "ho_ten": "Nguyễn Văn An",
  "diem_cv": 7.5,
  "status": "Valid",
  "diem_test": 8.0,
  "diem_cuoi": 7.75,
  "quyet_dinh": "PASS",
  "ghi_chu": ""
}
```

**Giảng viên nói:** *"JSON Schema chuẩn hóa giống như mẫu biểu hành chính. Tất cả Agent đều phải viết ra và đọc vào theo đúng form này — không tự đặt tên key khác."*

**Quy tắc Handoff Contract:**
- `ma_uv` — luôn là string (VD: "UV001")
- `diem_cv` — float, thang 0–10
- `status` — chỉ 3 giá trị: `"Valid"` / `"Invalid"` / `"Pending"`
- `quyet_dinh` — chỉ 3 giá trị: `"PASS"` / `"FAIL"` / `"INVALID"`

**Câu hỏi kiểm tra hiểu bài:**
> "Tại sao phải định nghĩa JSON Schema TRƯỚC khi viết code cho từng Agent?"  
> → Trả lời đúng: Để đảm bảo output của Agent trước là input hợp lệ của Agent sau — không cần sửa code sau khi ghép.

---

## 📖 Phần 2: HITL + OIPO + CLEAR Rules + Kiểm Thử Tích Hợp (30 phút)

### Human-in-the-Loop (HITL) — Human Checkpoint (10 phút)

**Khái niệm:**
> HITL = điểm dừng có chủ đích trong hệ thống AI — con người phê duyệt thủ công trước khi AI tiếp tục.

**Khi nào cần HITL trong HR TalentOps?**
Khi điểm tổng hợp của ứng viên nằm trong **vùng cận biên [6.0–6.9]** → AI không đủ tự tin quyết định → chờ HR Manager xác nhận.

**Luồng HITL trên terminal:**
```
=== HUMAN CHECKPOINT ===
Ứng viên: UV015 - Trần Thị Bích
Điểm CV: 6.5 | Điểm Test: 6.2 | Điểm tổng: 6.35

Điểm này nằm trong vùng cận biên [6.0-6.9].
HR Manager quyết định: PASS (y) / FAIL (n)? > _
```

**Giảng viên demo live trên terminal:** Chạy đoạn code mô phỏng → nhập Y → in ra "UV015: PASS — HR đã phê duyệt".

**2 chế độ vận hành Human Checkpoint:**

| Chế độ | Mô tả | Dùng khi |
|--------|-------|---------|
| **Tương tác** | Dừng lại, chờ HR gõ Y/N | Demo live, kiểm thử thực tế |
| **Tự động** | >= 6.5 → PASS, < 6.5 → FAIL (không cần input) | Chạy batch lúc không có người |

---

### Luồng OIPO — Output → Input → Processing → Output (5 phút)

**Sơ đồ luồng tổng thể:**

```
[danh_sach_cv.xlsx]
        │
        ▼
[CV Screener Agent]
   • Validate thông tin
   • Chấm điểm CV
   Output: {ma_uv, diem_cv, status}
        │
        ▼ (chỉ UV Valid mới qua)
[Test Evaluator Agent]
   • Validate bài test
   • Tính (TN+TL)/2
   • Phạt trễ: max(0, diem-2)
   Output: {diem_test, diem_cuoi}
        │
        ├── [6.0-6.9] → Human Checkpoint (Y/N)
        │
        ▼ (PASS / FAIL / INVALID)
[Communication Agent]
   • PASS → email mời phỏng vấn
   • FAIL → email cảm ơn
   • INVALID → email lỗi hồ sơ
   Output: email_[Ma_UV].txt
        │
        ▼
[ket_qua_tuyen_dung.xlsx]
   30 UV × 6 cột đầy đủ
```

---

### CLEAR Rules — Thiết Kế Hệ Thống Multi-Agent (10 phút)

> *"CLEAR không chỉ là khung viết Prompt. Ở cấp độ hệ thống — CLEAR là nguyên tắc thiết kế để hệ thống multi-agent không gãy."*

**Bảng CLEAR áp dụng cho HR TalentOps:**

| Chữ | Tên | Áp dụng vào hệ thống | Ví dụ cụ thể |
|-----|-----|---------------------|--------------|
| **C** | Clarity | Định nghĩa rõ Input tối thiểu mỗi Agent cần | CV Screener cần: Tên, Email, SĐT — thiếu 1 → Invalid |
| **L** | Logic | Quy tắc rẽ nhánh rõ ràng, không mơ hồ | Điểm >= 7.0 → PASS, 6.0–6.9 → HITL, < 6.0 → FAIL |
| **E** | Error Handling | Lỗi 1 UV không được làm sập cả hệ thống | try/except: ghi lỗi vào backlog → tiếp tục xử lý UV tiếp |
| **A** | Accuracy | Trọng số tính điểm phải chính xác, nhất quán | (TN + TL) / 2, phạt trễ: max(0.0, diem - 2.0) |
| **R** | Reliability | 10 lần chạy cùng data → 10 kết quả giống nhau | Không dùng random, không phụ thuộc thời gian hệ thống |

**Nhấn mạnh cho học viên:**
- **Error Handling (E)** — Hay bị bỏ qua nhất. Một UV bị lỗi không được crash toàn bộ 30 UV còn lại.
- **Reliability (R)** — Test bằng cách chạy orchestrator 2 lần → kết quả phải giống hệt nhau.

---

### Kiểm Thử Tích Hợp — 3 Loại Test (5 phút)

**3 loại kiểm thử bắt buộc:**

| Loại | Tên | Mô tả | Ví dụ |
|------|-----|-------|-------|
| ✅ | **Happy Path** | Dữ liệu chuẩn — mọi thứ phải OK | 25 UV hợp lệ → 25 kết quả PASS/FAIL đúng |
| ⚠️ | **Edge Cases** | Dữ liệu lỗi cố ý | 4 UV thiếu Email → phải ra INVALID |
| 🔄 | **Boundary Cases** | Điểm chính xác tại ngưỡng | UV điểm 6.0, 6.5, 6.9, 7.0 → kiểm tra phân nhánh |

---

## ⏸️ Break + Checkpoint (10 phút)

**3 câu checkpoint — học viên tự ghi ra giấy:**

1. JSON Schema Handoff chuẩn có những key gì? Tại sao phải dùng key thống nhất?
2. HITL trong HR TalentOps hoạt động khi nào? Hai chế độ là gì?
3. CLEAR Rules có điểm nào khác so với CLEAR Prompt bạn đã học ở Buổi 6?

**Trả lời chuẩn:** (giảng viên công bố sau break)
1. Key chuẩn: `ma_uv`, `ho_ten`, `diem_cv`, `status`, `diem_test`, `diem_cuoi`, `quyet_dinh`, `ghi_chu`. Phải thống nhất vì Agent B cần đọc output Agent A — key sai → KeyError → hệ thống gãy.
2. HITL kích hoạt khi điểm tổng [6.0–6.9]. Chế độ 1: Tương tác (terminal hỏi Y/N). Chế độ 2: Tự động (AUTO_MODE=True: >= 6.5 → PASS).
3. CLEAR Prompt = cách ra lệnh cho 1 AI. CLEAR Rules = nguyên tắc thiết kế cả hệ thống multi-agent: Clarity (input tối thiểu), Logic (rẽ nhánh), Error Handling (không sập hệ thống), Accuracy (trọng số đúng), Reliability (kết quả tái lập).

---

> [!IMPORTANT]
> **HƯỚNG DẪN DẠY VỚI 1 WORKSPACE XUYÊN SUỐT (BRIDGE LAYER):**
> Nhằm giữ nguyên nội dung Slide chính thức của MindX nhưng vẫn tối ưu hóa hiệu quả tích lũy năng lực của học viên, Giảng viên hướng dẫn lớp thực hành buổi này **trực tiếp bên trong workspace duy nhất của học viên** (`my-workspace` đã setup ở Buổi 1-10).
> - **Cách tổ chức file:** Học viên hoàn thiện toàn bộ `my-workspace/` — viết README cuối khóa, demo script, và đảm bảo tất cả artifact từ Buổi 1-10 đã có đầy đủ trong workspace cá nhân.
> - **Cá nhân hóa (Khuyến nghị):** Đối với học viên muốn assemble hệ thống thật của họ (không phải HR TalentOps), khuyến khích họ mở file [session-11-bridge.md](plans/260710-workspace-bridge/bridge-guides/session-11-bridge.md) để ghép tất cả layer đã xây qua 10 buổi thành workflow hoàn chỉnh trong `my-workspace` và chuẩn bị demo script trình bày.

## 🛠️ Phần Thực Hành: 9 Bước Xây Dựng HR TalentOps (70 phút)

> ⚠️ Refresh note: hành vi/UI Antigravity có thể thay đổi theo phiên bản — đối chiếu https://antigravity.google/docs và chạy thử demo trước buổi dạy.

> **Giảng viên hướng dẫn từng bước — học viên làm theo trực tiếp. Đây là phần CỐT LÕI của Buổi 11.**

### Bước 1: Tạo Skill + Nạp Tri Thức (7 phút)

**Mục tiêu:** Chuẩn bị `hr_talentops_skills.md` và `knowledge_base/tieu_chi_cham_diem.json`.

**Nếu học viên đã có file từ Buổi 10:** Mở file, kiểm tra nhanh nội dung còn đúng không.

**Nếu học viên chưa có (dùng Super Prompt):**

Prompt gửi cho AI:
> "Tạo file `hr_talentops_skills.md` là bộ kỹ năng AI cho hệ thống tuyển dụng HR TalentOps. File này mô tả: vai trò của 4 Agent (CV Screener, Test Evaluator, Human Checkpoint, Communication Agent), tiêu chí chấm điểm, JSON Schema Handoff chuẩn, và quy chế phạt trễ hạn."

**File `knowledge_base/tieu_chi_cham_diem.json`:**
```json
{
  "cv_scoring": {
    "diem_san": 5.0,
    "bonus_kinh_nghiem_2nam": 2.0,
    "bonus_kinh_nghiem_4nam": 1.0,
    "bonus_ky_nang_jd_match": 0.5,
    "diem_toi_da": 10.0
  },
  "test_scoring": {
    "cong_thuc": "(diem_TN + diem_TL) / 2",
    "phat_tre_han": 2.0,
    "diem_toi_thieu": 0.0
  },
  "phan_loai": {
    "pass_threshold": 7.0,
    "hitl_min": 6.0,
    "hitl_max": 6.9,
    "fail_below": 6.0
  },
  "validation": {
    "truong_bat_buoc": ["Ho_Ten", "Email", "SDT"],
    "email_phai_co": "@"
  }
}
```

**Giảng viên nói:** *"File JSON này là 'Luật' của hệ thống. Tất cả Agent đọc file này thay vì hard-code ngưỡng điểm — dễ thay đổi sau này mà không cần sửa code."*

---

### Bước 2: CV Screener Agent (8 phút)

**Mục tiêu:** Agent validate thông tin + chấm điểm CV.

**Prompt gửi AI:**
```
Viết CV Screener Agent bằng Python.

Input: đọc file danh_sach_cv.xlsx
Output: list JSON theo schema {ma_uv, ho_ten, diem_cv, status, ly_do}

Quy tắc Validate:
- Thiếu Tên, Email, hoặc SĐT → status: "Invalid"
- Email không có "@" → status: "Invalid"
- Đủ thông tin → tiếp tục chấm điểm

Quy tắc chấm điểm CV:
- Điểm sàn: 5.0
- Kinh nghiệm >= 2 năm: +2.0 điểm
- Kinh nghiệm >= 4 năm: thêm +1.0 điểm
- Mỗi kỹ năng khớp JD: +0.5 điểm (tối đa cộng +2.0)
- Điểm tối đa: 10.0

Lỗi 1 UV không được làm crash chương trình.
In ra từng UV sau khi xử lý.
```

**Điểm giảng viên cần kiểm tra:**
- Có `try/except` bao quanh từng UV không?
- Output JSON có đúng key `ma_uv` không (không phải `ma_ung_vien`)?
- Điểm CV có bị vượt quá 10.0 không? (cần `min(diem, 10.0)`)

---

### Bước 3: Test Evaluator Agent (8 phút)

**Mục tiêu:** Đọc kết quả bài test, tính điểm, áp dụng phạt trễ hạn.

**Prompt gửi AI:**
```
Viết Test Evaluator Agent bằng Python.

Input: ket_qua_bai_test.xlsx + output JSON từ CV Screener
Output: bổ sung thêm vào JSON {diem_test, diem_cuoi}

Quy tắc tính điểm:
- Điểm test = (Diem_TN + Diem_TL) / 2
- Nếu Thoi_Gian_Nop > Han_Nop: trừ 2 điểm phạt
- Safety Guard: điểm không được âm → max(0.0, diem_test - 2.0)
- Điểm cuối = (diem_cv + diem_test) / 2

Chỉ xử lý UV có status = "Valid" từ CV Screener.
UV không có kết quả bài test → ghi ghi_chu: "Chưa nộp bài test"
```

**Giảng viên nhấn mạnh:**
- **Safety Guard `max(0.0, diem - 2.0)`** — Không có dòng này, điểm có thể bị âm → gây lỗi phân loại sai.
- Quy chế phạt: tổng trừ 2 điểm bất kể trễ bao nhiêu ngày (không phải 2đ/ngày).

---

### Bước 4: Human Checkpoint Agent (7 phút)

**Mục tiêu:** Dừng lại xin xác nhận HR Manager khi điểm cận biên.

**Prompt gửi AI:**
```
Viết Human Checkpoint function bằng Python.

Input: JSON của UV (có diem_cuoi)
Output: JSON với quyet_dinh = "PASS" / "FAIL"

Logic (3 nhánh phủ kín, không để hở khoảng nào):
- diem_cuoi >= 7.0 → quyet_dinh = "PASS" (tự động)
- 6.0 <= diem_cuoi < 7.0 → in ra thông tin UV, hỏi HR Manager
- diem_cuoi < 6.0  → quyet_dinh = "FAIL" (tự động)

Format hỏi HR Manager:
=== HUMAN CHECKPOINT ===
Ứng viên: [ho_ten] ([ma_uv])
Điểm CV: [diem_cv] | Điểm Test: [diem_test] | Điểm tổng: [diem_cuoi]
Vùng cận biên — HR Manager quyết định: PASS (y) / FAIL (n)? >

Nếu nhập y → PASS, nếu nhập n → FAIL.
Hỗ trợ chế độ tự động: nếu biến AUTO_MODE=True thì >= 6.5 → PASS, < 6.5 → FAIL.
```

> **Gợi ý giảng viên:** Nếu viết điều kiện HITL là `6.0 <= x <= 6.9` thì UV điểm 6.95 rơi vào... không nhánh nào cả. Hãy dùng chính câu hỏi **"UV điểm 6.95 đi đâu?"** làm bài tập boundary test cho cả lớp trước khi chạy code.

---

### Bước 5: Communication Agent (8 phút)

**Mục tiêu:** Tạo email phù hợp theo 3 kịch bản, lưu file .txt.

**Prompt gửi AI:**
```
Viết Communication Agent bằng Python.

Input: JSON của UV (có quyet_dinh)
Output: tạo file email_[ma_uv].txt trong folder outputs/emails/

3 kịch bản email:

KỊCH BẢN 1 — PASS (mời phỏng vấn):
Chủ đề: Thư mời phỏng vấn — [Ho_Ten]
Nội dung: Chúc mừng, bạn đã qua vòng sơ tuyển. Chúng tôi trân trọng mời bạn
tham dự buổi phỏng vấn. Vui lòng xác nhận qua email này.

KỊCH BẢN 2 — FAIL (cảm ơn):
Chủ đề: Thư cảm ơn — [Ho_Ten]
Nội dung: Cảm ơn bạn đã ứng tuyển. Sau khi xem xét, chúng tôi rất tiếc thông báo
hồ sơ của bạn chưa phù hợp với yêu cầu hiện tại. Chúc bạn thành công.

KỊCH BẢN 3 — INVALID (lỗi hồ sơ):
Chủ đề: Thông báo lỗi hồ sơ — [Ma_UV]
Nội dung: Hồ sơ của bạn còn thiếu thông tin bắt buộc. Lý do: [ly_do].
Vui lòng bổ sung và gửi lại.

Tạo thư mục outputs/emails/ nếu chưa tồn tại.
Đặt tên file: email_UV001.txt, email_UV002.txt ...
```

---

### Bước 6: Orchestrator — Kết Nối 4 Agent (10 phút)

**Mục tiêu:** File `orchestrator.py` điều phối toàn bộ luồng.

**Prompt gửi AI:**
```
Viết file orchestrator.py kết nối 4 Agent theo thứ tự:

1. Gọi CV Screener → lấy danh sách {ma_uv, diem_cv, status}
2. Gọi Test Evaluator → bổ sung {diem_test, diem_cuoi} (chỉ UV Valid)
3. Gọi Human Checkpoint → xác định {quyet_dinh}
4. Gọi Communication Agent → tạo email file .txt

Handoff JSON Schema chuẩn (bắt buộc dùng chính xác các key này):
{
  "ma_uv": str,
  "ho_ten": str,
  "diem_cv": float,
  "diem_test": float,
  "diem_cuoi": float,
  "status": "Valid" hoặc "Invalid",
  "quyet_dinh": "PASS" hoặc "FAIL" hoặc "INVALID",
  "ghi_chu": str
}

Sau khi xử lý xong 30 UV, xuất ket_qua_tuyen_dung.xlsx với 6 cột:
Ma_UV | Ho_Ten | Diem_CV | Diem_Test | Diem_Cuoi | Quyet_Dinh

In tiến trình: "Đang xử lý UV [x]/30: [ho_ten] ..."
```

**Giảng viên nói:** *"File orchestrator.py không tự làm gì — nó chỉ gọi từng Agent theo đúng thứ tự và truyền JSON chuẩn giữa các bước. Đây là file quan trọng nhất của toàn hệ thống."*

---

### Bước 7: Vận Hành Lần Đầu (5 phút)

**Mục tiêu:** Chạy `orchestrator.py`, quan sát 4 tiến trình.

**Thực hiện:**
```bash
cd Desktop/Buoi11
python orchestrator.py
```

**Quan sát cùng học viên:**
- Terminal in ra từng bước xử lý UV 1/30 → 2/30 → ...
- Khi gặp UV cận biên → terminal dừng, chờ input Y/N
- Sau 30 UV → xuất `ket_qua_tuyen_dung.xlsx` và 30 file email .txt

**Giảng viên nói:** *"Đây là khoảnh khắc WOW: 4 Agent đang chạy tuần tự, truyền dữ liệu theo đúng JSON Schema. Không cần con người copy-paste từng dòng kết quả."*

---

### Bước 8: Kiểm Tra Output (5 phút)

**Kiểm tra 2 output chính:**

**Output 1 — `ket_qua_tuyen_dung.xlsx`:**
- Mở file Excel → phải có đủ 30 dòng
- Kiểm tra 6 cột: Ma_UV, Ho_Ten, Diem_CV, Diem_Test, Diem_Cuoi, Quyet_Dinh
- Kiểm tra 4 UV INVALID (không có Diem_Test, Quyet_Dinh = INVALID)
- Kiểm tra UV nộp trễ → Diem_Test đã trừ 2 điểm chưa, có bị âm không?

**Output 2 — `outputs/emails/`:**
- Mở folder → phải có 30 file email_UV001.txt đến email_UV030.txt
- Mở file UV PASS → nội dung phải là thư mời phỏng vấn
- Mở file UV INVALID → nội dung phải nêu lý do lỗi hồ sơ

---

### Bước 9: PDCA Debug — Xử Lý Lỗi Thực Tế (12 phút)

**Mục tiêu:** Khi hệ thống chạy lỗi → áp dụng PDCA để debug có hệ thống.

**Vòng PDCA cho hệ thống multi-agent:**

```
PLAN ─── Ghi backlog: "UV005 → KeyError: ma_uv"
  │
  ▼
DO ───── Sửa: chỉnh key JSON trong Handoff Contract
  │       Hoặc sửa Prompt Agent A
  │       Hoặc sửa code đọc key
  ▼
CHECK ── Chạy lại orchestrator.py với UV005
  │       Xem log: UV005 có qua được không?
  ▼
ACT ──── Đóng gói quy trình: ghi vào README
         "Nếu gặp KeyError → check JSON Schema Handoff Contract trước"
```

**Backlog mẫu — giảng viên chiếu lên:**

| # | UV | Lỗi gặp | Nguyên nhân | Fix đã áp dụng | Trạng thái |
|---|----|---------|-------------|----------------|------------|
| 1 | UV005 | KeyError: 'ma_uv' | Agent A dùng key 'ma_ung_vien' | Sửa key trong CV Screener | ✅ Đóng |
| 2 | UV015 | Điểm âm -0.5 | Thiếu Safety Guard | Thêm max(0.0, diem-2) | ✅ Đóng |
| 3 | UV028 | crash Exception | Tên UV028 là None | Thêm try/except | ✅ Đóng |
| 4 | UV009 | Email file không tạo | Folder outputs/emails/ chưa tồn tại | os.makedirs(...) | ✅ Đóng |

**Giảng viên nói:** *"PDCA không phải để tìm người có lỗi — PDCA là để ghi nhớ cách fix, lần sau không mắc lại. File backlog này là tài liệu kỹ thuật thực sự của dự án."*

> **Nhắc học viên:** Mỗi dòng backlog ở trên chính là nguyên liệu cho **1 vòng PDCA** trong `my-workspace/docs/pdca-log.md` (lỗi phát hiện → fix → kết quả rerun). Ghi ngay trong buổi — rubric chấm PDCA evidence yêu cầu tối thiểu 3 vòng.

---

## ✅ Checklist Nghiệm Thu Buổi 12 (6 tiêu chí)

Chiếu danh sách này lên màn hình — học viên tự đánh dấu vào notebook:

| # | Tiêu chí | Cách kiểm tra |
|---|----------|---------------|
| 1 | **Hệ thống chạy mượt end-to-end không crash (30 UV)** | Chạy `python orchestrator.py` → không có Exception không được xử lý |
| 2 | **Phát hiện đúng 4 UV lỗi thông tin, gắn INVALID** | Mở `ket_qua_tuyen_dung.xlsx` → tìm 4 dòng Quyet_Dinh = INVALID |
| 3 | **Trừ điểm phạt trễ hạn chính xác** | UV nộp trễ → Diem_Test bị trừ 2, không âm |
| 4 | **Human Checkpoint hoạt động ở 2 chế độ** | Tương tác: terminal hỏi Y/N. Tự động: biến AUTO_MODE=True |
| 5 | **File Excel + 30 email file.txt đầy đủ** | Đếm dòng Excel = 30, đếm file trong outputs/emails/ = 30 |
| 6 | **Slide thuyết trình 5–7 trang sẵn sàng** | Mở file slide → có ít nhất 5 trang có nội dung |

**Tiêu chí chấm Buổi 12 — Demo thực tế:**
- Học viên chạy `orchestrator.py` trực tiếp trên máy của mình trước lớp
- Giảng viên kiểm tra output Excel + folder emails ngay tại chỗ
- Học viên trình bày slide 5–7 trang giải thích kiến trúc hệ thống

---

## 🚨 Lỗi Phổ Biến & Cách Can Thiệp

| Lỗi | Dấu hiệu | Can thiệp |
|-----|----------|-----------|
| **Key mismatch** | `KeyError: 'ma_uv'` hoặc `KeyError: 'diem_cuoi'` | Kiểm tra JSON Schema Handoff — chỉnh key thống nhất trong tất cả Agent |
| **UV cận biên không dừng lại** | Terminal không hỏi Y/N với UV điểm 6.x (VD 6.95) | Kiểm tra điều kiện — phải là `6.0 <= score < 7.0`; viết `<= 6.9` sẽ hở khoảng 6.9–7.0 và dễ lỗi so sánh float |
| **Điểm âm sau khi phạt** | Diem_Test hiện -0.5 | Thêm `max(0.0, diem_test - 2.0)` vào Test Evaluator |
| **Email file không tạo** | Folder `outputs/emails/` trống | Thêm `os.makedirs('outputs/emails/', exist_ok=True)` trước vòng lặp |
| **Crash tại UV lỗi** | Orchestrator dừng giữa chừng, không xử lý hết 30 UV | Bọc mỗi UV trong `try/except`, ghi lỗi vào backlog, `continue` sang UV tiếp |
| **Excel không đủ 30 dòng** | File xuất chỉ có một phần UV | Kiểm tra vòng lặp — có đang `break` sớm không? |
| **INVALID UV có điểm test** | UV thiếu Email lại có Diem_Test = 5.0 | Kiểm tra logic: UV Invalid → bỏ qua Test Evaluator, ghi diem_test = None |
| **Float comparison sai** | UV điểm 7.0 vẫn vào HITL | Dùng `score >= 7.0` thay vì `score > 6.9` để tránh lỗi làm tròn float |

---

## 🎓 Bài Tập Về Nhà / Chuẩn Bị Cuối Khóa

> **Đây không phải bài tập thông thường — đây là bài cuối khóa. Học viên sẽ trình bày dự án này tại Buổi 12.**

**Nhiệm vụ cuối khóa:**

1. **Hoàn thiện hệ thống HR TalentOps** theo đúng 6 tiêu chí nghiệm thu
2. **Chuẩn bị slide thuyết trình 5–7 trang** — cấu trúc gợi ý:
   - Trang 1: Giới thiệu dự án + bài toán giải quyết
   - Trang 2: Kiến trúc: map đủ 7 thành tố vào workspace (kèm sơ đồ 3 tầng) — slide map đủ 7 thành tố là điều kiện tối thiểu của assessment rubric
   - Trang 3: Demo output (ảnh chụp màn hình Excel + email file)
   - Trang 4: Bài học PDCA — lỗi đã gặp và cách fix
   - Trang 5: Kết luận + Hướng phát triển tiếp theo

   > Nhắc học viên đối chiếu `docs/templates/project-presentation-checklist.md` ngay từ Buổi 11 — đừng đợi đến sát Buổi 12 mới mở checklist.

3. **Viết README.md tóm tắt hệ thống:**
   ```markdown
   # HR TalentOps Agentic System
   ## Cách chạy
   python orchestrator.py

   ## Cấu trúc Agent
   - CV Screener: validate + chấm điểm CV
   - Test Evaluator: chấm điểm test + phạt trễ
   - Human Checkpoint: xác nhận vùng cận biên
   - Communication Agent: gửi email theo kịch bản

   ## Lỗi đã gặp và cách fix
   [danh sách PDCA backlog]
   ```

**Hướng dẫn nếu bị kẹt — Super Prompt toàn hệ thống:**

Nếu học viên bị kẹt hoàn toàn, dùng prompt sau gửi cho AI (có thể dùng toàn bộ buổi):

```
Tôi cần xây dựng hệ thống HR TalentOps Agentic gồm 4 Agent bằng Python:

1. CV Screener: đọc danh_sach_cv.xlsx, validate (thiếu Tên/Email/SĐT hoặc
   Email thiếu @ → Invalid), chấm điểm CV (sàn 5đ, +2đ nếu KN>=2 năm,
   +1đ nếu KN>=4 năm, +0.5đ/kỹ năng khớp JD, tối đa 10đ).

2. Test Evaluator: đọc ket_qua_bai_test.xlsx, tính điểm test = (TN+TL)/2,
   phạt trễ hạn: max(0.0, diem-2.0), chỉ xử lý UV Valid.

3. Human Checkpoint: nếu điểm tổng [6.0-6.9] → hỏi HR Manager Y/N trên
   terminal. Hỗ trợ AUTO_MODE=True (>=6.5 → PASS, <6.5 → FAIL).

4. Communication Agent: tạo email_[ma_uv].txt theo 3 kịch bản:
   PASS (mời phỏng vấn), FAIL (cảm ơn), INVALID (báo lỗi hồ sơ).

5. Orchestrator: kết nối 4 Agent theo thứ tự, Handoff JSON chuẩn
   {ma_uv, ho_ten, diem_cv, diem_test, diem_cuoi, status, quyet_dinh, ghi_chu},
   xuất ket_qua_tuyen_dung.xlsx (30 UV × 6 cột).

Mỗi Agent phải có try/except để lỗi 1 UV không crash cả hệ thống.
In tiến trình: "Đang xử lý UV [x]/30: [ho_ten]"
```

---

## 📌 Tổng Kết Buổi 11

| Chủ đề | Điểm mấu chốt |
|--------|---------------|
| **Kiến trúc 3 tầng** | Orchestrator + Chuyên viên + Kiểm toán. Mỗi tầng có vai trò rõ ràng, không chồng chéo. |
| **Handoff JSON Schema** | Key thống nhất là huyết mạch của hệ thống multi-agent. Sai 1 key → gãy luồng toàn bộ. |
| **HITL — Human Checkpoint** | AI không tự ý quyết định vùng cận biên. Con người là người ra quyết định cuối cùng. |
| **CLEAR Rules hệ thống** | Clarity, Logic, Error Handling, Accuracy, Reliability — 5 nguyên tắc thiết kế hệ thống agentic bền vững. |
| **PDCA Debug** | Ghi backlog → sửa → chạy lại → đóng gói. Không debug mò — debug có hệ thống. |
| **Kiểm thử tích hợp** | Happy Path + Edge Cases + Boundary Cases = hệ thống đủ độ tin cậy để demo Buổi 12. |

---

## 🔗 Liên kết tiếp theo

- **Buổi 12** → Project Presentation — học viên demo hệ thống HR TalentOps hoàn chỉnh trước lớp
- File `hr_talentops_skills.md` + `orchestrator.py` tạo hôm nay → sẽ demo trực tiếp tại Buổi 12
- Slide 5–7 trang chuẩn bị hôm nay → trình bày tại Buổi 12
- Giảng viên nhắc: Buổi 12 không có phần lý thuyết — 100% demo và Q&A

---

## 📋 Danh Sách Validation Trước Khi Demo Buổi 12

Học viên tự kiểm tra danh sách này trước khi đến Buổi 12:

```
✅ VALIDATION CHECKLIST — Gửi ảnh chụp màn hình về group trước Buổi 12

□ 1. orchestrator.py chạy được, in ra 4 bước xử lý từng UV
□ 2. ket_qua_tuyen_dung.xlsx có đủ 30 UV với 6 cột
      (Ma_UV, Ho_Ten, Diem_CV, Diem_Test, Diem_Cuoi, Quyet_Dinh)
□ 3. outputs/emails/ có đủ 30 file email
      (email_UV001.txt ... email_UV030.txt)
□ 4. UV có điểm cận biên [6.0-6.9] đã qua Human Checkpoint
□ 5. 4 UV INVALID đã nhận email thông báo lỗi hồ sơ
□ 6. Slide 5-7 trang đã có nội dung (dù chưa hoàn chỉnh design)
□ 7. docs/pdca-log.md trong my-workspace có ≥3 vòng Plan→Do→Check→Act
      (mỗi vòng: lỗi phát hiện, fix, kết quả rerun — tận dụng các dòng
      debug backlog ở Bước 9 làm nguồn)
```

> **⚠️ CẢNH BÁO CUỐI:** Buổi 12 là buổi demo chính thức. Máy tính của học viên phải là máy đã chạy thành công `orchestrator.py` — không nên chuyển file sang máy mới mà chưa test lại. Python version, thư viện, đường dẫn file có thể khác giữa các máy.

---

*Hướng dẫn này đồng bộ với nội dung Session 11 — Phase 3: Create | Buổi 11 / 11*

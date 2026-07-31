# Session 11 — Lắp Ráp Hệ Thống Tổng Thể & Kiểm Thử Tích Hợp Với Dữ Liệu

## Source
- `assets/source-materials/original/MindX_AG_Slide 11.pptx.pdf` (34 trang)

---

## Mục Tiêu Học Tập

Sau buổi học, học viên nắm được:
1. **Kiến trúc:** Áp dụng thành thạo Handoff dữ liệu chuẩn JSON Schema để tránh lỗi lệch cấu trúc.
2. **Kiểm soát & Tối ưu:** Tích hợp Human Checkpoint để phê duyệt thủ công các quyết định cận biên. Phát hiện và sửa lỗi hệ thống dựa trên CLEAR Rules và vòng lặp PDCA.
3. **Checklist hoàn thiện dự án cuối khóa** chuẩn bị cho Demo Day (Buổi 12).

---

## Phần 1: Hệ Thống Kiến Trúc Trong Agentic

### Kiến Trúc Workspace 3 Tầng Nhân Sự AI

Hệ thống được thiết kế theo **3 tầng phân cấp**:
- Tầng 1 — **Orchestrator (HR Director):** Điều phối toàn bộ luồng.
- Tầng 2 — **Specialist Agents:** CV Screener, Test Evaluator, Communication Agent.
- Tầng 3 — **Human Checkpoint:** Can thiệp phê duyệt ở điểm cận biên.

> Gợi ý giảng dạy: Phân cấp giúp **cô lập lỗi (isolation)** — nếu một Agent thực thi lỗi, hệ thống không bị sập hoàn toàn và rất dễ bảo trì.

---

### Handoff Dữ Liệu Giữa Các Tầng AI

**Handoff là gì?**
- Quá trình chuyển giao thông tin từ **Output** của Agent này làm **Input** của Agent tiếp theo.
- Đảm bảo luồng chạy tự động liên tục mà không cần con người thao tác trung gian.

**Thách thức & Giải pháp:**

| Vấn đề | Chi tiết |
|--------|---------|
| Thách thức | Nếu định dạng đầu ra bị lệch cấu trúc thì hệ thống gãy luồng (crash) |
| Ví dụ lỗi | Agent CV Screener trả về khóa `ma_uv`, nhưng Agent Test Evaluator tìm khóa `ma_ung_vien` — lỗi hệ thống |
| Giải pháp | Sử dụng **định dạng JSON chuẩn hóa** với các khóa (keys) được thống nhất trước trong Knowledge Base |

---

### Xây Dựng Schema Handoff

**Schema** = bản định nghĩa cấu trúc dữ liệu bắt buộc, gồm tên trường, kiểu dữ liệu và các giá trị được chấp nhận.

- **Mục tiêu:** Ép các mô hình LLM vốn có tính ngẫu nhiên cao phải trả về đúng cấu trúc mong muốn.
- **Tầm quan trọng:** Bảo vệ hệ thống trước sự biến đổi tự do của LLM.
- **Cách làm:** Viết hướng dẫn định dạng JSON cực kỳ chi tiết kèm ví dụ mẫu (**Few-shot prompting**) trong System Prompt của Agent.

**Mẫu JSON Schema chuẩn:**
```json
{
  "ma_uv": "string (bat buoc)",
  "diem_cv": "float (0.0 - 10.0)",
  "status": "Valid | Invalid"
}
```

> Nguyên tắc: Schema chuẩn hóa = Hệ thống ổn định.

---

## Phần 2: Tích Hợp Kiểm Soát & Tối Ưu Vận Hành

### Chốt Chặn Phê Duyệt Của Con Người (Human Checkpoint)

**Triết lý HITL (Human-in-the-Loop):**
- AI xử lý các tác vụ quy mô lớn, lặp đi lặp lại.
- Con người can thiệp phê duyệt các quyết định quan trọng hoặc nhạy cảm.

**Human Checkpoint là gì?**
- Điểm dừng được cấu hình sẵn trong luồng Workflow.
- Hệ thống tự động tạm ngắt khi gặp trường hợp cần phán xét.

**Cách thức hoạt động:**
- Ví dụ: Khi ứng viên rơi vào **điểm cận biên (6.0 – 6.9)**, luồng tạm ngắt, xuất thông tin ra màn hình chờ HR bấm nút duyệt (Y/N).

> HITL giải quyết vấn đề đạo đức AI và đảm bảo **tính chịu trách nhiệm của doanh nghiệp**.

---

### Tư Duy OIPO Trong Thiết Kế Luồng Tự Động

Mô hình **OIPO** giúp học viên hình dung toàn bộ hành trình dữ liệu, đảm bảo không bỏ sót bất kỳ bước xử lý nào:

| Thành phần | Ý nghĩa |
|-----------|---------|
| **O** — Objective | Mục tiêu |
| **I** — Input | Đầu vào |
| **P** — Processing | Xử lý |
| **O** — Output | Đầu ra |

---

### Bộ Quy Tắc CLEAR Cho Hệ Thống

> Quy tắc CLEAR phân biệt **hệ thống code cẩu thả** với **hệ thống cấp doanh nghiệp (Enterprise-grade)**.

| Quy tắc | Nội dung | Ví dụ |
|---------|---------|-------|
| **C — Clarity** (Rõ ràng) | Định nghĩa cấu trúc đầu vào tối thiểu | CV bắt buộc phải có Email và Họ tên |
| **L — Logic** (Hợp lệ) | Logic rẽ nhánh rõ ràng | CV Invalid thì không tính điểm bài test |
| **E — Error handling** (Xử lý lỗi) | Lỗi ở một ứng viên không được phép làm sập hệ thống | Chuyển trạng thái Invalid, chạy tiếp dòng sau |
| **A — Accuracy** (Chính xác) | Tính điểm đúng trọng số cấu hình, phạt trễ hạn chính xác theo quy chế | — |
| **R — Reliability** (Tin cậy) | Đảm bảo chạy 10 lần cùng bộ dữ liệu ra 10 kết quả giống nhau | Tính nhất quán tuyệt đối |

---

### Phương Pháp Kiểm Thử Tích Hợp Hệ Thống

**Kiểm thử tích hợp là gì?**
- Kiểm tra sự phối hợp của các Agent sau khi lắp ráp vào luồng chung — không chỉ kiểm tra từng Agent đơn lẻ.
- Từng Agent chạy đơn lẻ có thể đúng, nhưng khi lắp vào luồng chung rất dễ phát sinh lỗi lệch data type, nghẽn dữ liệu.

**Phương pháp:** Đưa 30 bộ dữ liệu thực tế vào hệ thống, bao gồm:

| Loại test | Mô tả |
|-----------|-------|
| **Happy Path** | Dữ liệu chuẩn, đầy đủ thông tin |
| **Edge Cases** | Lỗi cố ý — thiếu trường, sai định dạng, nộp trễ |
| **Boundary Cases** | Điểm cận biên 6.0 – 6.9 kích hoạt Human Checkpoint |

**Mục tiêu:** Đạt độ tin cậy **100%** sau vòng lặp PDCA.

---

### Cổng Kiểm Soát Lỗi Dữ Liệu (Validation Gate)

> Dữ liệu thực tế luôn rất "bẩn" (dirty data). Cổng kiểm soát này là lớp bảo vệ quan trọng nhất của hệ thống.

Luồng xử lý dữ liệu lỗi:

1. **Phát hiện lỗi:** Thiếu Email, thiếu Số điện thoại, Email sai cú pháp, thiếu Họ tên.
2. **Gắn trạng thái:** CV Screener Agent tự động gắn trạng thái `Invalid` cho hồ sơ lỗi.
3. **Chuyển hướng:** Hồ sơ Invalid chuyển thẳng đến Communication Agent để gửi thư báo lỗi — bỏ qua toàn bộ bước tính điểm.
4. **Hệ thống tiếp tục:** HR Director bỏ qua hồ sơ lỗi, hệ thống tự phục hồi và tiếp tục xử lý dòng tiếp theo mà không bị treo.

---

### Quy Chế Phạt Trễ Hạn

**Yêu cầu nghiệp vụ:** Ứng viên nộp bài thi sau deadline sẽ bị trừ điểm phạt.

**Quy tắc phạt:**
- Nếu bài thi nộp sau deadline → trạng thái nộp = "Trễ hạn"
- Trừ 2.0 điểm phạt từ điểm gốc
- Ví dụ áp dụng: UV-004, UV-011, UV-023

**Logic An Toàn (Safety Guard):**
```
Điểm sau phạt = max(0.0, điểm gốc - 2.0)
```
> Lưu ý: Nếu không có Safety Guard — ứng viên đạt 1.5 điểm nộp trễ sẽ ra điểm âm (-0.5) — lỗi tính toán toàn hệ thống!

---

### Giao Tiếp Tự Động Theo Ngữ Cảnh (Communication Agent)

Communication Agent nhận thông tin trạng thái cuối cùng và sinh văn bản email cá nhân hóa theo từng trường hợp:

| Trạng thái | Nội dung thư |
|-----------|-------------|
| PASS | Thư mời phỏng vấn — trình bày mong muốn rõ ràng, chuẩn bị bước tiếp theo |
| FAIL | Thư từ chối — cảm ơn chân thành, lịch sự từ chối, hẹn lần sau |
| INVALID | Thư báo lỗi — chỉ rõ thiếu trường thông tin gì, hướng dẫn cụ thể để làm đúng định dạng |

> Email gửi cho người xem phải viết đúng tiếng Việt chuẩn mực, tôn trọng người xem để giữ gìn thương hiệu.

---

### Báo Cáo Đối Soát Dữ Liệu Cuối Cùng

**Vai trò:** Giúp Manager nắm bắt toàn bộ kết quả chiến dịch mà không cần kiểm tra từng email hay bảng điểm lẻ.

**Lưu trữ tự động tại:** `outputs/ket_qua_tuyen_dung.xlsx`

**Nội dung báo cáo Excel tổng hợp:**

| Cột | Nội dung |
|-----|---------|
| `ma_uv` | Mã định danh ứng viên |
| `ho_ten` | Họ và tên đầy đủ |
| `diem_cv` | Điểm CV (0.0 – 10.0) |
| `diem_test` | Điểm bài thi (sau phạt) |
| `diem_tong` | Điểm tổng hợp có trọng số |
| `status` | Pass / Fail / Invalid / Cận biên |

> Báo cáo này là bằng chứng rõ nhất về năng lực "đối soát" và "xuất bản dữ liệu" của Orchestrator Agent.

---

### Chu Trình PDCA Để Tinh Chỉnh Hệ Thống

> Một hệ thống Agentic không bao giờ chạy hoàn hảo ở lần đầu tiên. Kỹ năng quan trọng nhất là biết debug dựa trên kết quả chạy thử.

| Bước | Hành động |
|------|-----------|
| **P — Plan** (Lập kế hoạch) | Thiết kế luồng, lập kịch bản kiểm thử cho Data gồm Happy Path và Edge Cases |
| **D — Do** (Thực hiện) | Viết Prompt, lắp ráp Workflow trên Antigravity theo kiến trúc 3 tầng |
| **C — Check** (Kiểm tra) | Chạy thử nghiệm và phân tích kết quả đối soát — so sánh output thực tế với kỳ vọng |
| **A — Act** (Hành động) | Ghi nhận lỗi vào sổ tay gỡ lỗi, tinh chỉnh Prompt của Agent để đạt độ tin cậy 100% |

---

## Phần 3: Checklist Hoàn Thiện Dự Án Cuối Khóa

> Hội đồng chấm thi ở Buổi 12 sẽ chấm điểm dựa trên đúng **7 thành tố** này. Hãy chắc chắn nhóm đạt đủ cả 7!

| # | Thành tố | Yêu cầu |
|---|---------|---------|
| 1 | **Agents & Skills** | MICRO prompt rõ ràng cho từng Agent chuyên biệt |
| 2 | **Workflow** | Luồng OIPO chạy tự động từ đầu vào đến đầu ra |
| 3 | **Knowledge Base** | Dữ liệu cấu hình JSON tập trung, dễ chỉnh sửa |
| 4 | **Rules & Handoff** | Validate dữ liệu, đồng bộ hóa JSON Schema truyền nhận |
| 5 | **Human Checkpoint** | Xây dựng "Rule" để kiểm tra đảm bảo hoạt động ổn định |

---

## Demo & Đề Bài Thực Hành

### Đề Bài: Tự Động Hóa Tuyển Dụng — HR TalentOps Agentic System

**Bối cảnh:** Tự động lọc hồ sơ, tính điểm test, duyệt tay và gửi email cho **30 ứng viên AI Engineer**.

#### 1. Yêu Cầu Hệ Thống (Các Agent Cần Xây Dựng)

| Agent | Nhiệm vụ |
|-------|---------|
| **CV Screener** | Đọc CV, tính điểm CV, phát hiện lỗi |
| **Test Evaluator** | Chấm điểm test, phạt nộp trễ |
| **HR Director (Orchestrator)** | Tính điểm tổng, chạy duyệt tay cận biên, xuất báo cáo |
| **Communication Agent** | Tạo email kết quả tự động |
| **Human Checkpoint** | Dừng màn hình để HR nhập P (Pass) hoặc F (Fail) cho ứng viên cận biên |

#### 2. Dữ Liệu Đầu Vào

- `danh_sach_cv.xlsx` — Mã UV, Họ tên, Email, SĐT, Kỹ năng, Số năm kinh nghiệm
- `ket_qua_bai_test.xlsx` — Mã UV, Điểm trắc nghiệm, Điểm tự luận, Trạng thái nộp

#### 3. Quy Tắc Tính Điểm & Phân Loại

**Lọc lỗi (Validation Gate):**
- Trống Tên / Email / SĐT hoặc Email thiếu `@` → INVALID (gửi email yêu cầu bổ sung)

**Điểm CV:**

| Điều kiện | Điểm cộng |
|-----------|-----------|
| Điểm sàn cơ bản | 5.0 |
| Kinh nghiệm >= 2 năm | +2.0 |
| Kinh nghiệm >= 4 năm | +1.0 thêm |
| Mỗi kỹ năng khớp JD | +0.5 (tối đa +2.0) |
| Kỹ năng JD | python, llm, langchain, langgraph, prompt engineering, claude, gemini |
| Tối đa | 10.0 |

**Điểm Test:**
- Công thức: `(Trắc nghiệm + Tự luận) / 2`
- Nộp trễ ("Trễ hạn") → Trừ 2đ; Safety Guard: `max(0.0, điểm - 2.0)`
- Thiếu điểm → Điểm bằng 0

**Điểm Tổng hợp:**
```
Diem_Tong = Diem_CV * 40% + Diem_Test * 60%
```

**Phân loại:**

| Điểm | Kết quả |
|------|---------|
| >= 7.0 | PASS — Gửi email mời phỏng vấn |
| < 6.0 | FAIL — Gửi email từ chối |
| 6.0 đến < 7.0 | Human Checkpoint — HR duyệt tay |

#### 4. Kết Quả Đầu Ra

- File Excel `outputs/ket_qua_tuyen_dung.xlsx`
- Thư mục `outputs/emails/` chứa 30 file thư `.txt` tương ứng

---

## Demo Step-by-Step (9 Bước Thực Hành)

### Bước 1: Tạo Skill và Nạp Tri Thức Cho Hệ Thống

**Nguyên tắc cốt lõi:** Luôn tạo file định nghĩa Skill trước khi bắt đầu bất kỳ bài tập nào.

**Khung MICRO cho Agent Skill:**

| Thành phần | Nội dung |
|-----------|---------|
| **M — Mission** | Nhiệm vụ cụ thể của Agent |
| **I — Identity** | Vai trò và nhân cách Agent |
| **C — Capabilities** | Năng lực và công cụ được phép dùng |
| **R — Rules** | Quy tắc bắt buộc tuân thủ |
| **O — Outputs** | Định dạng đầu ra mong muốn |

**Cấu trúc Knowledge Base** — File `knowledge_base/tieu_chi_cham_diem.json`:
```json
{
  "trong_so": {
    "diem_cv": 0.4,
    "diem_test": 0.6
  },
  "diem_pass": 7.0,
  "diem_can_bien": {
    "min": 6.0,
    "max": 6.9
  },
  "yeu_cau_jd": {
    "kinh_nghiem_min": 2,
    "ky_nang_bat_buoc": [
      "python", "llm",
      "langchain", "langgraph",
      "prompt engineering",
      "claude", "gemini"
    ]
  }
}
```

---

### Bước 2: Thiết Lập Bộ Lọc và Chấm Điểm CV

**Logic Validation — Phát hiện hồ sơ lỗi:**
- Thiếu Họ tên
- Email trống hoặc sai định dạng
- Thiếu Số điện thoại
- Kết quả: Đánh dấu `status = Invalid`

**Công thức chấm điểm CV:**

| Điều kiện | Điểm cộng |
|-----------|-----------|
| Điểm sàn cơ bản | 5.0 |
| Kinh nghiệm >= 2 năm | +2.0 |
| Kinh nghiệm >= 4 năm | +1.0 thêm |
| Mỗi kỹ năng khớp JD | +0.5 (tối đa +2.0) |

**Kết quả trả về:** Danh sách JSON chứa `diem_cv` và `status` cho từng ứng viên.

---

### Bước 3: Đánh Giá Điểm Thi & Phạt Trễ Hạn

1. **Validation dữ liệu bài thi:** Thiếu điểm trắc nghiệm hoặc tự luận → Gắn `Invalid` (ví dụ: UV-027 bị thiếu điểm tự luận).
2. **Tính điểm trung bình:** `(Trắc nghiệm + Tự luận) / 2` cho tất cả hồ sơ hợp lệ.
3. **Áp dụng phạt trễ hạn:** Nếu trạng thái nộp = "Trễ hạn" → `max(0.0, điểm gốc - 2.0)` (ví dụ: UV-004, UV-011, UV-023).
4. **Trả về kết quả:** Dict được index bằng Mã ứng viên (`ma_uv`) — sẵn sàng Handoff sang bước tiếp theo.

> Hoàn thành Bước 3 = Hệ thống đã sẵn sàng tổng hợp điểm và kích hoạt Human Checkpoint cho vùng cận biên 6.0 – 6.9!

---

### Bước 4: Tạo Chốt Chặn Kiểm Duyệt Của HR

**Điều kiện kích hoạt:** Điểm tổng hợp nằm trong vùng cận biên [6.0 – 6.9] → chuyển qua chốt chặn duyệt tay thay vì để hệ thống tự quyết định.

| Chế độ | Cấu hình | Hoạt động |
|--------|---------|-----------|
| **Tương tác** | `interactive=True` | Dừng và yêu cầu HR Manager phản hồi duyệt (Y/N) trực tiếp trên terminal |
| **Tự động** | `interactive=False` | Kiểm tra tiêu chí phụ (học vấn ĐH Bách Khoa/KHTN hoặc kỹ năng AI Agentic) để tự động duyệt |

**Các tiêu chí phụ trong cấu hình JSON:**
- Học vấn ĐH Bách Khoa / KHTN
- Kỹ năng AI Agentic

**Đầu ra quyết định:** Ghi nhận quyết định phê duyệt và lý do vào thông tin ứng viên để chuyển tiếp qua Communication Agent.

---

### Bước 5: Tự Động Hóa Soạn Thảo Thư Phản Hồi

Communication Agent tự động sinh email dựa trên kết quả trạng thái cuối cùng:

| Kịch bản | Nội dung |
|---------|---------|
| **PASS** | Thư chúc mừng và hẹn lịch phỏng vấn trực tiếp (điểm tổng >= 7.0) |
| **FAIL** | Thư cảm ơn chân thành và hẹn cơ hội hợp tác trong tương lai |
| **INVALID** | Thư thông báo lỗi hồ sơ cụ thể và hướng dẫn chi tiết cách gửi lại đúng định dạng |

**Lưu trữ:** File `.txt` tại `outputs/emails/email_[Ma_UV].txt`

---

### Bước 6: Lắp Ráp Bộ Điều Phối Luồng (Orchestrator)

Orchestrator Agent điều phối toàn bộ luồng xử lý theo **4 tiến trình**:

| Tiến trình | Hành động |
|-----------|-----------|
| **Tiến trình 1** | Khởi chạy CV Screener và Test Evaluator để lấy kết quả sơ bộ từ toàn bộ hồ sơ ứng viên |
| **Tiến trình 2** | Duyệt danh sách, thực hiện Handoff và áp dụng công thức tính điểm tổng hợp: 40% CV + 60% Test theo cấu hình JSON |
| **Tiến trình 3** | Phân luồng quyết định Pass / Fail / Invalid / Human Checkpoint và gọi Communication Agent soạn email |
| **Tiến trình 4** | Kết xuất toàn bộ kết quả 30 ứng viên ra file Excel `ket_qua_tuyen_dung.xlsx` và in báo cáo tổng hợp ra console |

Mỗi nhánh quyết định được ghi nhận đầy đủ lý do và trạng thái vào báo cáo Excel cuối cùng.

---

### Bước 7: Vận Hành Hệ Thống Với Dữ Liệu

1. **Cách khởi chạy:** Chạy lệnh `python orchestrator.py` trên terminal. Đảm bảo môi trường Python đã cài đầy đủ dependencies và file cấu hình JSON đã được thiết lập đúng.
2. **Quan sát luồng:** Console log ghi nhận 4 bước xử lý — quét CV → chấm test → đối soát → xuất báo cáo. Mỗi bước đều in trạng thái rõ ràng ra màn hình.
3. **Kiểm tra báo cáo:** Kiểm tra file `outputs/ket_qua_tuyen_dung.xlsx` — đủ thông tin 30 ứng viên với đầy đủ các cột dữ liệu.
4. **Kiểm tra email:** Kiểm tra thư mục `outputs/emails/` — đủ 30 file email với nội dung chính xác theo kết quả phân loại.

---

### Bước 8: Gỡ Lỗi và Tối Ưu Hệ Thống (PDCA)

Áp dụng chu trình PDCA để xử lý lỗi có hệ thống, đảm bảo hệ thống hoạt động ổn định và ngăn ngừa tái phát lỗi:

| Bước | Hành động |
|------|-----------|
| **P — Plan** (Nhận diện) | Ghi nhận tất cả lỗi xảy ra trong quá trình tích hợp vào sổ tay gỡ lỗi (Backlog) |
| **D — Do** (Sửa lỗi) | Sửa đổi System Prompt của Agent, điều chỉnh logic mã nguồn hoặc cập nhật quy tắc trong file cấu hình JSON |
| **C — Check** (Xác nhận) | Chạy lại kiểm thử tích hợp với bộ dữ liệu lỗi để xác nhận hệ thống hoạt động ổn định trở lại |
| **A — Act** (Chuẩn hóa) | Đóng gói thay đổi, cập nhật quy trình vận hành tiêu chuẩn để ngăn ngừa tái phát lỗi tương tự |

---

### Bước 9: Sẵn Sàng Cho Demo Day (Buổi 12)

Checklist cuối — trước khi nộp bài và tham gia Demo Day, đảm bảo **6 tiêu chí** sau đều hoàn thành:

- [ ] Hệ thống chạy mượt mà end-to-end không bị crash bất kỳ case nào trong 30 ứng viên.
- [ ] Phát hiện đúng 4 ứng viên lỗi thông tin và gắn trạng thái `Invalid` chính xác.
- [ ] Trừ điểm phạt trễ hạn chính xác cho các ứng viên nộp bài muộn theo quy tắc cấu hình.
- [ ] Human Checkpoint hoạt động ổn định ở cả hai chế độ tương tác và tự động.
- [ ] Ghi file Excel báo cáo và tạo đủ 30 file email tương ứng trong thư mục đầu ra.
- [ ] Đã chuẩn bị slide thuyết trình 5–7 trang sẵn sàng cho Demo Day.

> Khi tất cả 6 checklist đều hoàn thành, hệ thống HR TalentOps Agentic System đã sẵn sàng để demo trước lớp!

---

## Super Prompt (Tài Nguyên Hỗ Trợ Học Viên)

Học viên sao chép prompt sau và gửi trực tiếp cho Google Antigravity để được hướng dẫn làm bài theo từng bước:

```
Chào Google Antigravity, tôi đang làm bài thực hành Buổi 11: Lắp ráp hệ thống tuyển dụng "HR TalentOps Agentic System". Bạn hãy đóng vai Kỹ sư AI hướng dẫn tôi làm theo 4 bước sau:

Bước 1 — File Skill Tổng:
Tạo duy nhất một file skill tổng .agents/skills/hr-talentops.md định nghĩa nhiệm vụ, quy tắc CLEAR và định dạng đầu ra cho toàn bộ Agent theo khung MICRO.

Bước 2 — File Cấu Hình JSON:
Tạo file knowledge_base/tieu_chi_cham_diem.json với nội dung:
- Trọng số: CV 40%, Test 60%
- Điểm Pass: 7.0
- Vùng cận biên: 6.0–6.9
- Kỹ năng JD: python, llm, langchain, langgraph, prompt engineering, claude, gemini
- Kinh nghiệm tối thiểu: 2 năm

Bước 3 — Code Python Từng Agent:
Viết code Python cho 4 agent theo đúng thứ tự:
- CV Screener: validate hồ sơ (thiếu tên/email/SĐT → Invalid), chấm điểm CV theo công thức sàn 5đ + kinh nghiệm + kỹ năng, tối đa 10đ.
- Test Evaluator: tính (trắc nghiệm + tự luận) / 2, áp dụng Safety Guard max(0.0, điểm - 2.0) cho hồ sơ nộp trễ.
- Human Checkpoint: dừng luồng khi điểm tổng trong vùng 6.0–6.9, hỗ trợ cả interactive=True (HR nhập Y/N) và interactive=False (tự động theo tiêu chí phụ).
- Communication Agent: sinh email .txt cho từng kịch bản PASS / FAIL / INVALID, lưu vào outputs/emails/email_[ma_uv].txt.

Bước 4 — Orchestrator:
Viết orchestrator.py điều phối toàn bộ luồng cho 30 ứng viên theo 4 tiến trình:
1. Chạy CV Screener và Test Evaluator lấy kết quả sơ bộ.
2. Tính điểm tổng = CV * 40% + Test * 60% theo config JSON.
3. Phân luồng Pass / Fail / Invalid / Human Checkpoint, gọi Communication Agent.
4. Xuất outputs/ket_qua_tuyen_dung.xlsx và in báo cáo tổng hợp ra console.

Bắt đầu bằng Bước 1 — tạo file .agents/skills/hr-talentops.md trước để Antigravity hiểu đúng vai trò của từng Agent trong toàn bộ hệ thống.
```

---

## Prompt Cứu Trợ Workspace (Dùng Khi Workspace Bị Sai Cấu Trúc)

> Dùng khi học viên đã xây xong nhưng Agent không đọc được file, hoặc `orchestrator.py` bị lỗi khi chạy. Chạy lần lượt Prompt 1 → 2 → 3 trong Antigravity.

### Prompt 1 — Kiểm Tra

```
Hãy quét toàn bộ workspace và báo cáo:
1. File/folder nào còn thiếu so với cấu trúc chuẩn:
   .agents/skills/hr-talentops.md
   knowledge_base/tieu_chi_cham_diem.json
   sample-data/danh_sach_cv.xlsx
   sample-data/ket_qua_bai_test.xlsx
   orchestrator.py
   outputs/emails/
2. File nào để sai chỗ.
3. Workspace có thể chạy ngay không? Nếu không, sửa gì trước?

Chỉ báo cáo, chưa tạo file.
```

### Prompt 2 — Sửa Cấu Trúc

```
Sửa workspace theo thứ tự:
1. Tạo thư mục còn thiếu: .agents/skills/, knowledge_base/, sample-data/, outputs/emails/
2. Tạo .agents/skills/hr-talentops.md theo khung MICRO nếu chưa có.
3. Tạo/sửa knowledge_base/tieu_chi_cham_diem.json với nội dung:
   { "trong_so": {"diem_cv": 0.4, "diem_test": 0.6}, "diem_pass": 7.0,
     "diem_can_bien": {"min": 6.0, "max": 6.9} }
4. Đảm bảo orchestrator.py đọc config từ knowledge_base/ và ghi output vào outputs/.

Không xóa file nào đã có mà không hỏi trước.
```

### Prompt 3 — Chạy Thử

```
Chạy thử orchestrator với 3 bản ghi trong bộ nhớ:
- UV-T1: hợp lệ, điểm tổng 8.2 → phải ra PASS
- UV-T2: thiếu email → phải ra INVALID
- UV-T3: hợp lệ, điểm tổng 6.4 → phải kích hoạt Human Checkpoint

In kết quả, kiểm tra outputs/ có file Excel và email chưa.
Nếu chưa, chỉ ra dòng code cần sửa.
```

---

## Practice (Buổi Thi Thử)

- Học viên gửi ý tưởng về bài Demo → Giảng viên hướng dẫn cách làm chi tiết.
- Học viên bắt tay vào làm, chạy thử demo (nếu có) để chuẩn bị bài cuối khóa.

---

## Assignment (BTVN)

**Chuẩn bị và hoàn thiện bài cuối khóa:**
- Hoàn thành toàn bộ 9 bước thực hành HR TalentOps Agentic System.
- Chạy thêm các vòng PDCA để đạt độ tin cậy 100%.
- Chuẩn bị slide thuyết trình 5–7 trang cho Demo Day (Buổi 12).
- Đảm bảo đủ output sample: file Excel + 30 file email.

---

## Validation (Instructor Checklist)

- [ ] Học viên nắm được kiến trúc 3 tầng và vai trò của từng Agent.
- [ ] Học viên hiểu và xây dựng được JSON Schema chuẩn cho Handoff.
- [ ] Học viên thiết lập được Validation Gate (cổng kiểm soát lỗi dữ liệu).
- [ ] Học viên cấu hình được Human Checkpoint ở cả 2 chế độ (`interactive=True/False`).
- [ ] Học viên hiểu và áp dụng được Safety Guard cho điểm phạt trễ hạn.
- [ ] Học viên áp dụng được CLEAR Rules và vòng lặp PDCA để debug hệ thống.
- [ ] Học viên hoàn thành checklist 6 tiêu chí trước Demo Day.
- [ ] Workflow chạy end-to-end không bị crash với toàn bộ 30 ứng viên.
- [ ] Có đủ output sample: Excel báo cáo + 30 file email.
- [ ] Slide thuyết trình 5–7 trang đã sẵn sàng cho Buổi 12.

---

## Tài Liệu Tham Khảo

- [Facilitator Guide](../instructor/facilitator-guide.md)
- [Course Curriculum Map](../course-curriculum-map.md)
- [Assessment Rubric](../assessment/assessment-rubric.md)

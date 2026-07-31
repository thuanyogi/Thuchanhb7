# Session 09 — Hướng Dẫn Giảng Dạy Chi Tiết
## Kiểm Tra Chất Lượng Toàn Mạch & Hệ Thống Tự Phục Hồi (Self-Healing)

> **Version:** 1.0 · **Verified from:** `assets/source-materials/derived/session-09-raw-extract.txt`  
> **Dành cho:** Giảng viên · Không chia sẻ trực tiếp cho học viên  
> **Buổi:** 9 / 11 · Phase 2 — Modify

---

## 📋 Tổng quan nhanh

| Mục | Nội dung |
|-----|----------|
| **Chủ đề** | Tư duy Debugging + Phân loại lỗi + Quy trình D.A.H.V + Self-Healing Agent + Backlog quản lý |
| **Thời lượng** | 3 giờ |
| **Artifact đầu ra** | `healed_agent.py` chạy được + `backlog.md` ghi lịch sử sửa lỗi |
| **Công cụ cần** | Google Antigravity, Python 3.10+, Flask, pandas, openpyxl, requests |
| **Điểm nhấn giảng dạy** | Demo code không báo lỗi đỏ nhưng hệ thống vẫn hỏng — học viên tự chứng kiến Business Logic Error |

---

## 🎯 Mục tiêu học tập (3 mục tiêu)

1. **Tư duy gỡ lỗi** — Áp dụng tư duy 'Quản trị lỗi' chủ động, thiết lập tiêu chuẩn kiểm soát rủi ro
2. **AI Power & triển khai thực tế** — Thiết kế Skills và Prompts tối ưu, AI tự chẩn đoán và tự phục hồi (Self-Heal)
3. **Triển khai Agent kỹ thuật** — Phân tích Log, truy xuất Root Cause, hoạch định Backlog xử lý sự cố có hệ thống

---

## ⚠️ PHẦN HỌC VIÊN PHẢI CHUẨN BỊ (TRỌNG TÂM)

> **Đây là phần giảng viên cần nhấn mạnh nhất. Nếu học viên không chuẩn bị đúng → buổi học thực hành không thể tiến hành.**

### 1. Phần mềm bắt buộc cài sẵn trước buổi học

| STT | Phần mềm | Mục đích | Link tải | Ghi chú |
|-----|----------|----------|----------|---------|
| 1 | **Python 3.10+** | Chạy agent và script debug | python.org | Kiểm tra: `python --version` |
| 2 | **Flask** | Tạo local API server | Terminal: `pip install flask` | Cần cho broken_api.py |
| 3 | **pandas** | Đọc và xử lý file Excel | Terminal: `pip install pandas` | Cốt lõi cho data healing |
| 4 | **openpyxl** | Engine đọc file .xlsx | Terminal: `pip install openpyxl` | Đi kèm với pandas |
| 5 | **requests** | Gọi HTTP API | Terminal: `pip install requests` | Cần cho stress test |
| 6 | **Google Antigravity** | Viết healed_agent.py | Đã có từ buổi 1 | Kiểm tra tài khoản còn hoạt động |

**Cách cài tất cả một lần:**
```bash
pip install flask pandas openpyxl requests
```

**Kiểm tra Python:**
```bash
python --version
# Phải hiện Python 3.10.x hoặc cao hơn
```

---

### 2. File dữ liệu cần chuẩn bị

> **Giảng viên cần gửi cho học viên ít nhất 1 ngày trước buổi học:**

#### Cho phần Demo (giảng viên dùng):
| File | Mô tả | Nơi lấy |
|------|-------|---------|
| `broken_api.py` | Code Python Flask có lỗi logic cố ý (nhắc nhở sai đối tượng, ngày viết kiểu tự nhiên) | Giảng viên cung cấp |
| `du_lieu_du_an.xlsx` | Dữ liệu dự án có các lỗi logic cố ý được nhúng sẵn | Giảng viên cung cấp |

#### Cho phần Thực hành (học viên tự làm):
| File | Mô tả | Nơi lấy |
|------|-------|---------|
| `marketing_campaigns.xlsx` | 500 dòng, 10 cột, chứa lỗi tiền tệ, lỗi trạng thái, lịch trình mơ hồ | Học viên tạo trong giờ theo hướng dẫn |

> **⚠️ Lưu ý quan trọng:** File `broken_api.py` PHẢI có lỗi logic (không phải lỗi syntax). Code phải chạy được nhưng cho kết quả sai. Đây là điểm mấu chốt của bài học. Giảng viên tạo file này theo mẫu sau:

**`broken_api.py` (mẫu lỗi logic cần chuẩn bị):**
```python
# broken_api.py — File này có lỗi logic CỐ Ý
# Lỗi 1: Nhắc nhở task "Done" thay vì task "In Progress"
# Lỗi 2: Ngày tháng lưu dạng string tự nhiên ("Thứ 2 tuần sau")
# Lỗi 3: Không ghi log khi có sự kiện bất thường

from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/tasks')
def get_tasks():
    df = pd.read_excel('du_lieu_du_an.xlsx')
    # LỖI LOGIC: Lẽ ra phải lọc status == "In Progress"
    # nhưng code lọc ngược: chỉ lấy task đã Done
    remind_tasks = df[df['status'] == 'Done']
    return jsonify(remind_tasks.to_dict('records'))

@app.route('/deadline')
def get_deadline():
    df = pd.read_excel('du_lieu_du_an.xlsx')
    # LỖI LOGIC: ngày lưu dạng chuỗi tự nhiên, không parse được
    return jsonify(df['deadline'].tolist())

if __name__ == '__main__':
    app.run(port=5050)
```

---

### 3. Checklist học viên tự kiểm tra TRƯỚC buổi học

Gửi danh sách này cho học viên qua Group/Zalo:

```
CHECKLIST CHUẨN BỊ BUỔI 9 — Gửi về group trước 9h tối hôm trước

□ python --version → 3.x.x (phải là 3.10 trở lên)
□ pip install flask pandas openpyxl requests → thành công
□ File du_lieu_du_an.xlsx đã tải về Desktop/Buoi9/
□ File broken_api.py đã tải về Desktop/Buoi9/
□ Antigravity hoạt động (thử đăng nhập)
□ Đã nộp bài kiểm tra giữa kỳ
```

---

### 4. Không gian làm việc học viên cần chuẩn bị

Học viên tạo sẵn thư mục:
```
Desktop/
└── Buoi9/
    ├── broken_api.py
    ├── du_lieu_du_an.xlsx
    └── (marketing_campaigns.xlsx — tạo trong giờ thực hành)
```

> Giảng viên nhắc: Không để file trong OneDrive/Google Drive sync đang chạy → pandas có thể đọc nhầm phiên bản cũ hoặc bị khóa file.

---

## 🕐 Cấu trúc buổi học 3 giờ

| Thời gian | Khối | Nội dung | Ghi chú giảng viên |
|-----------|------|----------|--------------------|
| 0 – 10' | **Khai mạc** | Ví dụ code lỗi NULL name — hệ thống sập vì dữ liệu người thứ 11 tên là NULL | Hook mạnh ngay đầu giờ — chiếu log lỗi thật lên màn hình |
| 10 – 40' | **Phần 1: Tư duy Debugging** | Bottleneck, Traceback, Đặt câu hỏi đúng, 4 cấp độ lỗi | Viết 4 cấp độ lên bảng — học viên ghi lại |
| 40 – 70' | **Phần 2: D.A.H.V + Self-Healing** | Luồng D.A.H.V + Autonomous Agent + Backlog quản lý | So sánh bảng Truyền thống vs Self-Healing |
| 70 – 80' | **Break + Checkpoint** | 3 câu checkpoint nhanh | Học viên tự ghi ra giấy |
| 80 – 150' | **Phần 3: Demo + Thực hành** | Demo 5 bước + Thực hành Marketing Campaign Healer | Đây là phần CỐT LÕI — 70 phút thực chiến |
| 150 – 180' | **Tổng kết + BTVH** | Checklist nghiệm thu, giao bài về nhà | Chiếu checklist lên màn hình |

---

## 🎬 Khai Mạc — Hook (10 phút)

### Câu chuyện mở đầu: Người thứ 11 tên là NULL

**Giảng viên kể kịch bản (chiếu log lỗi thật lên màn hình):**

> "Bạn xây một hệ thống gửi email chúc mừng sinh nhật nhân viên. 10 người đầu — hoạt động hoàn hảo. Đến người thứ 11: hệ thống sập. Không có email nào được gửi đi nữa. Lý do? Người thứ 11 có tên là NULL trong database."

**Chiếu log lỗi:**
```
AttributeError: 'NoneType' object has no attribute 'upper'
  File "birthday_sender.py", line 23, in send_greeting
    name = employee['name'].upper()
```

**Câu hỏi mở:**
> "Lỗi này là lỗi kỹ thuật hay lỗi dữ liệu? Ai chịu trách nhiệm sửa? Dev? Data entry? Quản lý?"

**Đợi 2-3 học viên trả lời** → dẫn vào tư duy: Debugging không chỉ là sửa code — đó là **thấu hiểu hệ thống trong điều kiện khắc nghiệt**.

**Giảng viên nói:**
> "Hôm nay chúng ta học cách biến AI thành người gác cổng tự động — phát hiện lỗi, phân tích nguyên nhân, tự sửa chữa, và ghi nhật ký mọi hành động. Không cần bạn thức đêm debug."

---

## 📖 Phần 1: Tư Duy Debugging (30 phút)

### Khái niệm cốt lõi — Debugging là gì? (10 phút)

**Định nghĩa từ slide:**

> **Debugging = Thấu hiểu hệ thống trong điều kiện khắc nghiệt**
> Không phải chỉ sửa lỗi — mà là đặt câu hỏi đúng về trạng thái của hệ thống.

**3 câu hỏi đúng khi gặp lỗi:**
1. "Hệ thống đang làm gì mà tôi KHÔNG kỳ vọng?"
2. "Tại điểm nào trong luồng xử lý, hành vi bắt đầu sai?"
3. "Điều gì đã thay đổi kể từ lần cuối hệ thống hoạt động đúng?"

**Mẹo giảng dạy:**
- Viết 3 câu hỏi này lên bảng → học viên đọc lại
- Nhấn mạnh: "Đặt câu hỏi sai = mất hàng giờ. Đặt câu hỏi đúng = tìm lỗi trong 5 phút."

---

### Bottleneck & Traceback — Đọc log như thám tử (10 phút)

**Bottleneck là gì:**
> Bottleneck = điểm tắc nghẽn khiến toàn bộ luồng bị chặn. Một lỗi nhỏ ở một điểm → cả hệ thống dừng.

**Cách đọc Traceback (đọc NGƯỢC từ dưới lên):**

```
Traceback (most recent call last):
  File "main.py", line 5, in <module>           <- Điểm khởi đầu
    result = process_data(df)
  File "processor.py", line 42, in process_data <- Trung gian
    cleaned = clean_names(df['name'])
  File "cleaner.py", line 18, in clean_names    <- Điểm gần lỗi
    return [n.strip().upper() for n in names]
AttributeError: 'NoneType' object has no attribute 'strip'  <- ĐỌC CÁI NÀY TRƯỚC
```

**Quy tắc vàng khi đọc Traceback:**
- Dòng **CUỐI CÙNG** = mô tả lỗi thực sự (AttributeError, ValueError...)
- Dòng **gần cuối** = file và dòng code gây ra lỗi
- Đọc **ngược từ dưới lên trên** để truy tìm nguồn gốc

**Giảng viên thực hành live:** Chiếu một traceback thật → yêu cầu 1-2 học viên đọc to → cùng xác định dòng gây lỗi.

---

### 4 Cấp Độ Lỗi (10 phút)

**Viết bảng này lên màn hình — học viên PHẢI ghi vào vở:**

| Cấp độ | Tên | Mô tả | Ví dụ thực tế | Ưu tiên xử lý |
|--------|-----|-------|---------------|---------------|
| 🔴 **Fatal** | Hệ thống sập | Toàn bộ dịch vụ ngừng hoạt động | Server crash, DB mất kết nối, vòng lặp vô hạn | **Ngay lập tức** |
| 🟠 **Major** | Thiệt hại tài chính | Chức năng quan trọng sai kết quả | Tính sai tiền hoa hồng, gửi nhầm đơn hàng | **Trong 1 giờ** |
| 🟡 **Warning** | Cảnh báo | Hoạt động nhưng không đúng chuẩn | Báo cáo thiếu cột, ngày format sai | **Trong 1 ngày** |
| ⚪ **Edge Case** | Dữ liệu rác | Ngoại lệ hiếm gặp, không ảnh hưởng chính | Tên chứa emoji, số điện thoại có dấu cách | **Backlog** |

**Bài tập nhanh (2 phút):**
> "Lỗi NULL name trong ví dụ đầu giờ → thuộc cấp độ nào? Fatal hay Major?"
> → Trả lời: **Fatal** (toàn bộ email system dừng) → nhưng nguồn gốc là **Edge Case** (dữ liệu NULL)
> → Bài học: Edge Case không được xử lý → leo thang thành Fatal.

**Câu hỏi kiểm tra hiểu bài:**
> "Khi agent tự phân loại lỗi, tại sao phân loại đúng lại quan trọng?"
> → Trả lời đúng: Phân loại sai → ưu tiên xử lý sai → lỗi nhỏ leo thang thành thảm họa.

---

## 📖 Phần 2: D.A.H.V + Self-Healing Agent (30 phút)

### Quy Trình D.A.H.V (10 phút)

> "Nếu 4 cấp độ lỗi là 'bản đồ địch', thì D.A.H.V là 'chiến thuật tấn công'."

**Bảng D.A.H.V đầy đủ — viết lên bảng:**

| Bước | Tên | Hành động | Công cụ |
|------|-----|-----------|---------|
| **D** | **Detect** (Phát hiện) | Hệ thống tự phát hiện bất thường qua monitoring | Log monitor, alert rules, health check |
| **A** | **Analyze** (Phân tích) | Đọc log, xác định root cause, phân loại cấp độ lỗi | Traceback reader, log parser |
| **H** | **Heal** (Chữa lành) | Agent tự thực hiện hành động sửa chữa | healed_agent.py, Skill rules |
| **V** | **Validate** (Kiểm tra) | Chạy lại kiểm tra — kết quả có đúng kỳ vọng không? | Test script, assertion checks |

**Luồng hoạt động D.A.H.V:**
```
[Hệ thống chạy]
      |
  D: Phát hiện bất thường (log, alert)
      |
  A: Phân tích log → Root Cause → Phân loại Fatal/Major/Warning/Edge
      |
  H: Agent tự sửa theo Skill Rules
      |
  V: Validate kết quả → Ghi vào backlog.md
      |
[Hệ thống hoạt động đúng] ← Nếu Validate fail → quay lại A
```

**Giảng viên nói:**
> "D.A.H.V không phải là quy trình một lần — đây là vòng lặp liên tục. Mỗi lần Validate fail → agent phân tích lại → sửa lại → validate lại. Đây chính là 'tự học từ lỗi'."

---

### Self-Healing vs Truyền Thống (10 phút)

**Bảng so sánh — chiếu lên màn hình:**

| Tiêu chí | Truyền thống | Self-Healing Agent |
|----------|--------------|-------------------|
| **Ai phát hiện lỗi?** | Dev/User báo cáo | Agent tự giám sát 24/7 |
| **Thời gian phát hiện** | Vài giờ đến vài ngày | Vài giây (real-time monitoring) |
| **Ai phân tích?** | Dev đọc log thủ công | Agent đọc và phân loại tự động |
| **Ai sửa?** | Dev viết code fix, deploy | Agent tự sửa theo Skill rules |
| **Ai ghi nhật ký?** | Dev ghi thủ công (hoặc quên) | Agent tự ghi vào backlog.md |
| **Tổng thời gian** | Vài giờ đến vài ngày | Vài giây đến vài phút |
| **Chi phí** | Cao (thời gian dev) | Thấp (chỉ tốn compute) |

**Câu hỏi kích thích tư duy:**
> "Nếu hệ thống của bạn bị lỗi lúc 3 giờ sáng — bạn muốn ai gọi cho bạn? Dev trực đêm hay Agent tự sửa và gửi report buổi sáng?"

---

### Autonomous Agent — Kiến Trúc 3 Tầng (10 phút)

**Luồng hoạt động của Autonomous Agent:**

```
[SỰ KIỆN XẢY RA]
       |
  NGHE — Event-driven (lắng nghe sự kiện)
  Ví dụ: file Excel thay đổi, API trả về status 500, deadline qua ngưỡng
       |
  HIỂU — Phân tích ngữ cảnh (context analysis)
  Agent đọc Skill rules → phân loại lỗi → xác định hành động cần làm
       |
  SỬA — Tự hành động (autonomous action)
  Thực thi fix → ghi backlog.md → gửi alert nếu cần
```

**Skill cho Agent (2 quy tắc cốt lõi từ bài giảng):**

```markdown
## Quy Tắc Tiền Tệ
- Nếu cột "Budget" chứa hỗn hợp USD/VND → quy đổi tất cả về VND theo tỷ giá chuẩn
- Nếu giá trị âm → đánh dấu Warning, KHÔNG xóa

## Quy Tắc Cảnh Báo Rủi Ro
- Nếu task status = "Done" nhưng deadline chưa đến → ghi Note: "Hoàn thành sớm"
- Nếu task status = "In Progress" nhưng deadline đã qua → phân loại Major, ghi vào backlog
- Nếu trường "deadline" không parse được → phân loại Warning, ghi vào backlog
```

**Backlog.md — Chuẩn ghi nhật ký:**

```markdown
| Thời gian | Sự cố | Hành động | Trạng thái |
|-----------|-------|-----------|------------|
| 2024-01-15 14:32 | Deadline "Thứ 2 tuần sau" không parse được | Chuẩn hóa sang ISO 8601 | Healed |
| 2024-01-15 14:33 | Task "Done" có deadline chưa đến | Ghi Note "Hoàn thành sớm" | Healed |
| 2024-01-15 14:35 | Budget cột USD+VND lẫn lộn | Quy đổi về VND | Healed |
```

**Giảng viên nói:**
> "backlog.md là 'nhật ký hành trình' của agent. Không có backlog = không có bằng chứng = không thể audit. Đây là tiêu chuẩn nghiệm thu bắt buộc."

---

## ⏸️ Break + Checkpoint (10 phút)

**3 câu checkpoint — học viên tự ghi ra giấy:**

1. Debugging theo nghĩa đầy đủ là gì? (Không phải chỉ sửa lỗi)
2. D.A.H.V gồm 4 bước — kể tên và mô tả ngắn từng bước.
3. Sự khác biệt giữa Fatal và Edge Case là gì? Cho ví dụ.

**Trả lời chuẩn:** (giảng viên công bố sau break)
1. Debugging = thấu hiểu hệ thống trong điều kiện khắc nghiệt — đặt câu hỏi đúng về trạng thái hệ thống
2. D = Detect (phát hiện), A = Analyze (phân tích log), H = Heal (agent tự sửa), V = Validate (kiểm tra kết quả)
3. Fatal = hệ thống sập toàn bộ. Edge Case = ngoại lệ hiếm gặp. Edge Case không xử lý → có thể leo thang thành Fatal

---

## 🎬 Demo Live: 5 Bước PM System Self-Healing (30 phút)

> ⚠️ Refresh note: hành vi/UI Antigravity có thể thay đổi theo phiên bản — đối chiếu https://antigravity.google/docs và chạy thử demo trước buổi dạy.

> **Giảng viên thực hiện live. Học viên quan sát, KHÔNG làm theo ở bước này.**

### Bước 1: Chuẩn Bị "Hiện Trường"

**Mục tiêu:** Chạy `broken_api.py`, quan sát lỗi logic (không phải lỗi đỏ — đây là điểm then chốt).

**Thực hiện:**
1. Mở Terminal → `cd Desktop/Buoi9`
2. Chạy: `python broken_api.py`
3. Mở trình duyệt → `http://localhost:5050/tasks`
4. Quan sát kết quả: API trả về danh sách task **đã Done** thay vì task **đang làm**

**Giảng viên hỏi học viên:**
- "Code có báo lỗi đỏ không?" → Không
- "Hệ thống có chạy không?" → Có
- "Kết quả có đúng không?" → Không
- "Vậy đây là loại lỗi gì?" → **Business Logic Error** — nguy hiểm nhất vì không có thông báo lỗi

**Chiếu bảng phân biệt hai loại lỗi:**

| Loại lỗi | Dấu hiệu | Nguy hiểm |
|----------|----------|-----------|
| **Technical Error** | Python báo đỏ, stack trace rõ ràng | Thấp — dễ phát hiện |
| **Business Logic Error** | Code chạy, kết quả sai im lặng | **Cao** — khó phát hiện, gây hậu quả thực |

---

### Bước 2: Chẩn Đoán Lỗi

**Mục tiêu:** Xác định root cause của Business Logic Error.

**Phân tích `broken_api.py` cùng học viên:**

```python
# Tìm dòng có vấn đề:
remind_tasks = df[df['status'] == 'Done']   # LỖI: Phải là 'In Progress'
```

**Giảng viên hỏi:**
> "Tại sao lỗi này nguy hiểm hơn lỗi TypeError?"

**Câu trả lời chuẩn:**
- Lỗi TypeError → Python la → dev sửa ngay
- Business Logic Error → Python im lặng → hệ thống nhắc nhở sai người → thiệt hại thực (deadline trễ, khách hàng không được liên lạc, tài chính sai)

**Phân loại lỗi theo 4 cấp độ:**
- `/tasks` endpoint sai → **Major** (thiệt hại vận hành)
- `/deadline` endpoint ngày không parse được → **Warning** (cảnh báo)

---

### Bước 3: Xây Bộ Luật (Skill Modeling)

**Mục tiêu:** Tạo file `Self_Healing_Skill.md` — bộ não chuyên môn của agent.

**Prompt gửi cho Antigravity:**
> "Tạo file Self_Healing_Skill.md với 3 quy tắc: Quy tắc 1 — Lọc task theo trạng thái đúng (chỉ lấy 'In Progress', bỏ 'Done' và 'Not Started'). Quy tắc 2 — Chuẩn hóa ngày từ chuỗi tự nhiên sang ISO 8601 (YYYY-MM-DD). Quy tắc 3 — Ghi nhật ký mọi hành động sửa chữa vào backlog.md theo format: Thời gian | Sự cố | Hành động | Trạng thái."

**Kết quả Antigravity tạo ra (`Self_Healing_Skill.md`):**

```markdown
# Self_Healing_Skill.md

## Quy Tắc 1: Lọc Tiến Độ
- CHỈ xử lý các task có status = "In Progress"
- Task có status = "Done" → bỏ qua, KHÔNG nhắc nhở
- Task có status = "Not Started" → bỏ qua, KHÔNG nhắc nhở
- Nếu cột status rỗng → phân loại Edge Case, ghi backlog

## Quy Tắc 2: Chuẩn Hóa Ngày
- Nếu ngày ở dạng tự nhiên ("Thứ 2 tuần sau", "Cuối tháng") → parse thành ISO 8601
- Nếu không parse được → ghi Warning vào backlog, đặt deadline = None
- Luôn lưu ngày theo format: YYYY-MM-DD

## Quy Tắc 3: Ghi Nhật Ký (BẮT BUỘC)
- Mỗi hành động sửa chữa PHẢI được ghi vào backlog.md
- Format bắt buộc: | Thời gian | Sự cố | Hành động | Trạng thái |
- Nếu Heal thành công → Trạng thái = Healed
- Nếu Heal thất bại → Trạng thái = Failed, ghi lý do
```

**Giảng viên nói:**
> "File .md này là 'bản hiến pháp' của agent. Mọi quyết định của agent đều phải tuân theo 3 quy tắc này. Không có Skill = agent làm việc theo cảm tính."

---

### Bước 4: Thực Thi Chữa Lành

**Mục tiêu:** Giao Antigravity + data + Skill → viết `healed_agent.py`.

**Thực hiện:**
1. Mở New Chat trong Google Antigravity
2. Kéo thả vào khung chat:
   - `Self_Healing_Skill.md` (vừa tạo ở bước 3)
   - `du_lieu_du_an.xlsx` (dữ liệu dự án)
   - `broken_api.py` (code lỗi gốc)

**Prompt gửi Antigravity (Prompt Pro — học viên ghi lại):**
```
[Error Log]
- Endpoint /tasks đang trả về task "Done" thay vì task "In Progress"
- Endpoint /deadline trả về ngày dạng chuỗi tự nhiên không parse được

[Yêu cầu]
Dựa vào Self_Healing_Skill.md, viết file healed_agent.py thực hiện:
1. Lọc đúng task "In Progress" theo Quy Tắc 1
2. Chuẩn hóa ngày theo Quy Tắc 2
3. Ghi tất cả hành động sửa vào backlog.md theo Quy Tắc 3

[Định dạng output]
File healed_agent.py chạy được + backlog.md có ít nhất 2 sự kiện Healed
```

**Giảng viên nói:**
> "Đây là Prompt Pro — nêu Error Log cụ thể + bước xử lý rõ ràng + định dạng output backlog.md. Ngược lại, Prompt Tồi là: 'Sửa file này cho tôi' — AI không biết sửa cái gì, theo luật nào, ghi đâu."

**Prompt Pro vs Prompt Tồi — chiếu bảng so sánh:**

| Tiêu chí | Prompt Tồi | Prompt Pro |
|----------|-----------|------------|
| **Error Log** | Không đề cập | Nêu cụ thể lỗi gì, ở đâu |
| **Quy tắc** | Không có | Tham chiếu Skill file |
| **Output** | Không rõ | Định nghĩa format backlog.md |
| **Kết quả** | AI đoán mò | AI làm đúng ngay lần đầu |

---

### Bước 5: Stress Test

**Mục tiêu:** Kiểm tra agent có tự thích nghi khi điều kiện thay đổi không.

**Test A — Đổi tên Sheet:**
1. Mở `du_lieu_du_an.xlsx`
2. Đổi tên Sheet "Tasks" → "Danh_Sach_Cong_Viec"
3. Chạy lại `healed_agent.py`
4. Quan sát: Agent có tự tìm sheet mới không? Hay crash?

**Test B — Xóa cột dữ liệu:**
1. Xóa cột "deadline" khỏi Excel
2. Chạy lại `healed_agent.py`
3. Quan sát: Agent có ghi Warning vào backlog.md không?

**Điểm cần nhấn mạnh:**
> "Stress Test dù kết quả pass hay fail — đều có giá trị. Nếu fail → ghi vào backlog.md → sửa Skill → chạy lại. Đây là vòng lặp D.A.H.V trong thực tế."

---

> [!IMPORTANT]
> **HƯỚNG DẪN DẠY VỚI 1 WORKSPACE XUYÊN SUỐT (BRIDGE LAYER):**
> Nhằm giữ nguyên nội dung Slide chính thức của MindX nhưng vẫn tối ưu hóa hiệu quả tích lũy năng lực của học viên, Giảng viên hướng dẫn lớp thực hành buổi này **trực tiếp bên trong workspace duy nhất của học viên** (`my-workspace` đã setup ở Buổi 1-8).
> - **Cách tổ chức file:** Học viên tạo debug backlog tại `docs/debug-backlog.md` trong `my-workspace/` — ghi log lỗi thật từ workspace cá nhân thay vì chỉ làm theo bài demo.
> - **Cá nhân hóa (Khuyến nghị):** Đối với học viên muốn debug lỗi thật trong workspace của họ, khuyến khích họ mở file [session-09-bridge.md](plans/260710-workspace-bridge/bridge-guides/session-09-bridge.md) để apply quy trình debug có thứ tự vào 2 vấn đề thực tế trong `my-workspace` và fix chúng có ghi chép.

## 🛠️ Phần Thực Hành: Marketing Campaign Healer (40 phút)

### Mô tả bài toán

**Bối cảnh:** Bạn là AI Operations Manager của một công ty marketing. Hệ thống quản lý campaign đang có dữ liệu hỗn loạn từ nhiều nguồn — agency nước ngoài gửi số USD, team nội địa dùng VND, PM ghi lịch trình kiểu tự nhiên. Nhiệm vụ: xây Self-Healing Agent cho hệ thống marketing.

---

### Bước 0 — Tạo dữ liệu thực hành (5 phút)

Học viên yêu cầu Antigravity tạo file dữ liệu theo prompt sau:
```
Tạo file marketing_campaigns.xlsx với 20 dòng, 10 cột:
Campaign_ID, Campaign_Name, Channel, Budget, Currency, Status,
Start_Date, End_Date, Actual_Spend, Manager

Chèn CỐ Ý các lỗi sau:
- 5 dòng: Budget ở USD, 5 dòng ở VND, 5 dòng chỉ là số không có đơn vị
- 3 dòng: Status = "Active" nhưng Actual_Spend = 0
- 4 dòng: Start_Date hoặc End_Date dạng tự nhiên ("Sau lễ", "Tháng sau", "Q3")
- 2 dòng: Budget > 1,000,000,000 VND (cần cảnh báo bất thường)
```

---

### Nhiệm vụ 1: Tạo Marketing_Healing_Skill.md (10 phút)

**Yêu cầu học viên tự tạo file `Marketing_Healing_Skill.md` với 4 quy tắc:**

```markdown
# Marketing_Healing_Skill.md

## Quy Tắc 1: Quy Đổi Tiền Tệ
- Nếu Currency = "USD" → nhân Budget với 25,000 → cập nhật Currency thành "VND"
- Nếu Currency không rõ → giữ nguyên, ghi Warning vào backlog
- Nếu Budget > 1,000,000,000 VND → ghi cảnh báo Major vào backlog

## Quy Tắc 2: Kiểm Tra Logic Ngân Sách
- Nếu Status = "Active" và Actual_Spend = 0 → ghi Warning: "Campaign active nhưng chưa chi tiêu"
- Nếu Actual_Spend > Budget → ghi Major: "Vượt ngân sách [số tiền vượt]"
- Nếu Status = "Completed" và Actual_Spend < Budget * 0.5 → ghi Note: "Tiết kiệm ngân sách đáng kể"

## Quy Tắc 3: Giải Mã Lịch Trình
- "Sau lễ" → 30/4 năm hiện tại
- "Tháng sau" → ngày 1 của tháng tiếp theo
- "Q1" → 01/01, "Q2" → 01/04, "Q3" → 01/07, "Q4" → 01/10
- Nếu không giải mã được → ghi Edge Case vào backlog

## Quy Tắc 4: Ghi Nhật Ký (BẮT BUỘC)
- Mọi hành động sửa đổi PHẢI ghi vào backlog.md
- Format: | Thời gian | Campaign_ID | Sự cố | Hành động | Trạng thái |
```

---

### Nhiệm vụ 2: Python Script Phát Hiện Ngân Sách Bất Thường (15 phút)

**Prompt mẫu để học viên tham khảo:**
```
[Error Log]
File marketing_campaigns.xlsx có các vấn đề:
1. Cột Budget hỗn hợp USD/VND/không rõ đơn vị
2. 3 campaign Status=Active nhưng Actual_Spend=0
3. Nhiều ô Start_Date/End_Date không parse được
4. 2 campaign có Budget > 1 tỷ VND cần cảnh báo

[Yêu cầu]
Dựa vào Marketing_Healing_Skill.md, viết marketing_healer.py:
1. Đọc marketing_campaigns.xlsx
2. Áp dụng 4 Quy Tắc từ Skill file
3. Ghi tất cả hành động vào backlog.md
4. In ra màn hình: số lỗi đã Healed, số Warning, số Edge Case

[Định dạng output]
- File marketing_healer.py chạy được
- backlog.md có ít nhất 5 sự kiện
- Print summary cuối script: "Healed: X | Warning: Y | Edge Case: Z"
```

---

### Nhiệm vụ 3: Stress Test Campaign Healer (15 phút)

**Test A — Thêm kênh lạ:**
1. Thêm 3 dòng mới vào Excel: Channel = "Tele-Sale" (kênh chưa có trong hệ thống)
2. Chạy lại `marketing_healer.py`
3. Quan sát: Agent xử lý kênh mới như thế nào? Có ghi vào backlog không?

**Test B — Xóa cột Campaign_ID:**
1. Xóa cột Campaign_ID khỏi Excel
2. Chạy lại `marketing_healer.py`
3. Quan sát: Script crash hay xử lý graceful?

**Test C — Toàn bộ Budget = NULL:**
1. Xóa tất cả giá trị cột Budget
2. Chạy lại `marketing_healer.py`
3. Quan sát: backlog.md ghi gì?

**Điểm cần nhấn mạnh với học viên:**
> "Stress Test không có kết quả sai — dù pass hay fail đều tốt. Nếu hệ thống crash → bạn vừa tìm ra một điểm yếu trước khi production. Ghi vào backlog, sửa Skill, chạy lại."

---

### Kết Quả Cần Nộp

> **Vị trí artifact thống nhất:** `Desktop/Buoi9/` chỉ là nơi **tải file nguồn và chạy thực hành**. Artifact nộp cuối buổi là **`my-workspace/docs/debug-backlog.md`** — học viên copy/tổng hợp các sự kiện từ `backlog.md` thực hành vào file này trong workspace cá nhân (khớp Bridge Layer ở trên và là nguồn cho PDCA log ở Buổi 11).

File làm việc trong buổi (tại `Desktop/Buoi9/`):
```
Desktop/Buoi9/
├── healed_agent.py           (chạy được — từ demo)
├── Self_Healing_Skill.md     (từ demo)
├── marketing_healer.py       (từ thực hành)
├── Marketing_Healing_Skill.md
└── backlog.md                (ít nhất 5 sự kiện Healed)
```

Artifact nộp cuối buổi:
```
my-workspace/docs/debug-backlog.md   (ít nhất 5 sự kiện, tổng hợp từ backlog.md)
```

**backlog.md mẫu kết quả học viên:**
```markdown
# Backlog — Marketing Campaign Healer

| Thời gian | Campaign_ID | Sự cố | Hành động | Trạng thái |
|-----------|-------------|-------|-----------|------------|
| 2024-01-15 15:01 | CMP_003 | Budget = 5000 USD | Quy đổi 125,000,000 VND | Healed |
| 2024-01-15 15:01 | CMP_007 | Budget = 1,500,000,000 VND | Cảnh báo ngân sách lớn | Warning |
| 2024-01-15 15:01 | CMP_012 | Status=Active, Spend=0 | Ghi cảnh báo "Chưa chi tiêu" | Warning |
| 2024-01-15 15:01 | CMP_015 | Start_Date = "Sau lễ" | Parse thành 2024-04-30 | Healed |
| 2024-01-15 15:01 | CMP_019 | Channel = "Tele-Sale" lạ | Ghi Edge Case | Edge Case |
```

---

## ✅ Checklist Nghiệm Thu (6 tiêu chí)

| # | Tiêu chí | Cách kiểm tra |
|---|----------|---------------|
| 1 | Phân loại được lỗi theo 4 cấp độ (Fatal/Major/Warning/Edge Case) | Hỏi trực tiếp — học viên giải thích miệng |
| 2 | Vẽ được luồng D.A.H.V | Học viên vẽ trên giấy hoặc whiteboard |
| 3 | `Self_Healing_Skill.md` có đủ 3 quy tắc (Lọc tiến độ, Chuẩn hóa ngày, Ghi nhật ký) | Mở file kiểm tra |
| 4 | `healed_agent.py` chạy được: lọc task Done, chuẩn hóa ngày, ghi backlog.md | Chạy live trước giảng viên |
| 5 | `backlog.md` có ít nhất 3 sự kiện Healed | Mở file kiểm tra số dòng |
| 6 | Stress Test đã thực hiện (kết quả dù pass hay fail đều OK) | Học viên mô tả kết quả stress test |

---

## 🚨 Lỗi Phổ Biến & Cách Can Thiệp

| Lỗi | Dấu hiệu | Can thiệp |
|-----|----------|-----------|
| Flask không cài | `ModuleNotFoundError: No module named 'flask'` | `pip install flask` |
| File không tìm thấy | `FileNotFoundError: du_lieu_du_an.xlsx` | Kiểm tra đường dẫn — phải chạy script từ đúng thư mục |
| Agent sửa nhưng backlog.md rỗng | backlog.md tồn tại nhưng không có dòng nào | Kiểm tra Quy Tắc 3 trong Skill — AI có thể quên implement phần ghi log |
| Stress Test hệ thống crash | Script báo lỗi khi xóa cột | Lỗi tốt — ghi vào backlog, thêm try/except vào Skill |
| Ngày parse sai | "Thứ 2 tuần sau" → ValueError | Thêm fallback: nếu parse fail → ghi None và Warning |
| pandas đọc sai sheet | `KeyError: 'Tasks'` | Kiểm tra tên Sheet trong Excel, thêm sheet_name vào read_excel |
| Script chạy xong nhưng không in gì | Không thấy output trên terminal | Thêm print statements, kiểm tra indentation |
| backlog.md bị overwrite mỗi lần chạy | Chỉ có dòng của lần chạy cuối | Đổi open('backlog.md', 'w') sang open('backlog.md', 'a') để append |

---

## 🎓 Bài Tập Về Nhà

**Đề bài:** Tự debug lại các file dữ liệu hiện có trong công việc hiện tại để hoàn thành công việc.

**Hướng dẫn thực hiện:**
1. Chọn 1 file Excel/CSV đang dùng trong công việc thực tế (báo cáo doanh thu, danh sách khách hàng, tracker dự án...)
2. Phân tích và liệt kê các "lỗi tiềm ẩn" theo 4 cấp độ (Fatal/Major/Warning/Edge Case)
3. Tạo file `[TenCongTy]_Healing_Skill.md` với quy tắc phù hợp với dữ liệu của bạn
4. Dùng Antigravity + Skill → tạo script Python tự chữa lành dữ liệu
5. Chạy script → backlog.md ghi lại kết quả → nộp Group lớp

**Tiêu chí chấm BTVH:**
- [ ] File dữ liệu thực tế từ công việc (không dùng demo data)
- [ ] Skill file có ít nhất 2 quy tắc liên quan đến nghiệp vụ thực tế
- [ ] Script Python chạy được mà không crash
- [ ] backlog.md có ít nhất 3 sự kiện Healed

---

## 📌 Tổng Kết Buổi 9

| Chủ đề | Điểm mấu chốt |
|--------|---------------|
| **Tư duy Debugging** | Debugging = thấu hiểu hệ thống trong điều kiện khắc nghiệt. Đặt câu hỏi đúng = tìm lỗi nhanh. |
| **4 Cấp Độ Lỗi** | Fatal > Major > Warning > Edge Case. Edge Case không xử lý → leo thang thành Fatal. |
| **Quy trình D.A.H.V** | Detect → Analyze → Heal → Validate. Không phải 1 lần — là vòng lặp liên tục. |
| **Self-Healing Agent** | Truyền thống: người sửa thủ công mất vài giờ. Self-Healing: Agent tự sửa trong vài giây. |
| **Skill + Backlog** | Skill = bộ luật của agent. Backlog.md = nhật ký hành trình bắt buộc. Không có backlog = không thể audit. |
| **Prompt Pro** | Nêu Error Log cụ thể + bước xử lý rõ ràng + định dạng output. Prompt Tồi = AI đoán mò. |

---

## 🔗 Liên kết tiếp theo

- **Buổi 10** → Phase 3 — Create: Xây dựng luồng AI agent hoàn chỉnh cho business workflow thực tế
- `Self_Healing_Skill.md` tạo hôm nay → sẽ là module tích hợp vào hệ thống lớn ở buổi 10–11
- `backlog.md` → chuẩn ghi nhật ký này sẽ dùng xuyên suốt cho project cuối khóa
- Học viên giữ lại toàn bộ file Buoi9 → sẽ cần khi làm project presentation Session 12

---

*Hướng dẫn này đồng bộ với slide gốc: `assets/source-materials/original/MindX_AG_Slide 9.pdf`*

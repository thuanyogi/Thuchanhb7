# Buổi 4 — Thiết Kế Workflow Tự Động Với AI: Hướng Dẫn Giảng Dạy Chi Tiết

> **Phase 1 — Operate | Buổi 4 của 11**
> **Chủ đề:** Workflow + OIPO + 3 cấp độ Automation + Xây AI News Bot gửi Telegram tự động
> **Thời lượng:** 3 giờ | **Artifact đầu ra:** AI News Bot Python chạy được + gửi tin vào Telegram Group + hẹn giờ tự động
> **Prompt pack:** Riêng: chưa có — dùng các prompt mẫu ngay trong guide này

---

## 1. Mục Tiêu Buổi Học

| # | Mục tiêu (từ slide) | Cách kiểm tra |
|---|---------------------|---------------|
| 1 | **Tư duy về Workflow** — Trình bày khái niệm Workflow và tầm quan trọng của chuẩn hóa quy trình | Học viên phân biệt được Workflow với Todo list; vẽ được sơ đồ OIPO đơn giản |
| 2 | **Kỹ năng thiết kế** — Ứng dụng mô hình OIPO để phân tích và thiết kế quy trình bài bản | Artifact có đủ 4 thành phần O-I-P-O, bot đã gửi tin thành công |
| 3 | **Kỹ năng thực thi** — Xây dựng hệ thống tự động hóa: từ đầu vào đến kết quả cuối | Bot Python chạy được, tin đến Telegram Group, hẹn giờ tự động hoạt động |

---

## 2. Cấu Trúc 3 Giờ

```
10 phút  → Khai mạc & Recap buổi 3 Skill + Giới thiệu vấn đề thực tế
30 phút  → Phần 1 — Workflow là gì + OIPO model + ví dụ AI News Bot theo OIPO
20 phút  → Phần 2 — 3 cấp độ Automation + Sai lầm phổ biến + Bảo mật API
10 phút  → Break / Checkpoint nhanh
70 phút  → Phần 3 — Demo 9 bước step-by-step + Thực hành nâng cấp bot
20 phút  → Tổng kết + Review artifact + Giao bài về nhà
```

---

## 3. ⚠️ Chuẩn Bị Trước Buổi Học — CỰC KỲ QUAN TRỌNG

> **CẢNH BÁO:** Không cài Python/Telegram trước = Không thể thực hành!
> Bot demo sẽ chạy thật trong lớp. Ai không cài xong sẽ phải xem demo mà không tương tác được.

### Checklist gửi Group trước buổi học (gửi ít nhất 2 ngày trước):

Học viên tự xác nhận hoàn thành **toàn bộ** các mục dưới đây:

```
□ Telegram cài trên điện thoại + máy tính OK
□ python --version → thấy 3.x.x (Python 3.10 trở lên)
□ pip install requests feedparser → thành công (không báo lỗi)
□ Đã mở BotFather trên Telegram
□ Antigravity hoạt động bình thường
□ Desktop/Buoi4/ đã tạo
```

**Thông báo mẫu gửi Group học viên:**

> 📌 **CHECKLIST BUỔI 4 — Làm trước khi đến lớp**
>
> Buổi 4 chúng ta sẽ xây AI News Bot thật — gửi tin tức AI hàng ngày vào Telegram tự động.
>
> Để thực hành được, bạn CẦN cài đặt đầy đủ:
>
> 1. ✅ Telegram cài trên điện thoại + máy tính
> 2. ✅ Python 3.10+: mở Terminal/CMD → gõ `python --version`
> 3. ✅ Chạy: `pip install requests feedparser` → không báo lỗi
> 4. ✅ Mở Telegram → tìm `@BotFather` → đã chat được
> 5. ✅ Tạo thư mục `Desktop/Buoi4/`
>
> ❌ **Không cài xong = không thực hành được trong lớp!**

### Giảng viên chuẩn bị trước buổi học:

- [ ] Bot Telegram demo đã tạo sẵn, có BOT_TOKEN
- [ ] Telegram Group demo đã tạo, Bot đã add vào
- [ ] Chat ID của Group demo đã lấy được
- [ ] File `send_telegram.py` demo đã chạy thử thành công — **Bắt buộc chạy thử code mẫu trước ngày dạy**
- [ ] Màn hình chia sẻ đã ẩn/blur Token — không để lộ khi demo
- [ ] Slide buổi 4 đã kiểm tra, kết nối máy chiếu OK
- [ ] Token demo sẽ bị revoke ngay sau khi kết thúc demo công khai

---

## 4. Khai Mạc (10 phút)

### 4.1 Recap buổi 3 — Skills (3 phút)

Hỏi nhanh học viên:
- "Buổi 3 chúng ta học về Skill trong Antigravity — Skill dùng để làm gì?"
- "Bạn đã tạo Skill nào chưa? Skill đó giúp được bạn việc gì cụ thể?"

Dẫn dắt chuyển tiếp:
> "Buổi 3 các bạn đã biết cách tạo Skill — một đơn vị năng lực nhỏ. Buổi hôm nay chúng ta sẽ đi lên cấp độ cao hơn: **thiết kế Workflow** — chuỗi các bước có thứ tự logic để biến AI thành một hệ thống hoạt động tự động. Và chúng ta sẽ không chỉ vẽ trên giấy — chúng ta sẽ build một **bot thật**, gửi tin tức thật, vào Telegram thật, hẹn giờ tự động."

### 4.2 Mở đầu bằng câu hỏi thực tế (4 phút)

Hỏi cả lớp:
> "Mỗi sáng đi làm, bạn thường làm gì đầu tiên? Có ai đang check tin tức, check email, copy số liệu thủ công không? Mất bao nhiêu phút?"

Ghi lên bảng các câu trả lời. Sau đó:
> "Tất cả những việc đó — nếu có thứ tự rõ ràng, lặp đi lặp lại — đều **có thể tự động hóa**. Hôm nay chúng ta sẽ tự động hóa việc đọc tin tức AI và gửi vào Telegram. Bot sẽ làm thay bạn mỗi sáng."

### 4.3 Giới thiệu artifact đầu ra (3 phút)

Demo nhanh bot đã chạy (giảng viên mở Telegram Group):
- Telegram Group hiển thị tin tức AI đã được dịch tiếng Việt
- Format có số thứ tự, icon, hashtag
- Cuối buổi: mỗi học viên có file `send_telegram.py` chạy được + Task Scheduler/crontab đã set
- Artifact này sẽ là nền tảng cho buổi 5 (Agent) và buổi 6, 7

---

## 5. Phần 1 — Workflow Là Gì + Mô Hình OIPO (30 phút)

### 5.1 Workflow là gì? — Không phải Todo list (10 phút)

**Dẫn dắt:** Chiếu slide "Workflow vs Todo list"

| | Todo List | Workflow |
|--|-----------|----------|
| **Bản chất** | Danh sách việc cần làm | Luồng công việc có thứ tự rõ ràng |
| **Thứ tự** | Tùy ý, có thể làm bất kỳ bước nào trước | Bắt buộc theo thứ tự xác định |
| **Kết nối** | Các việc độc lập nhau | Output bước này = Input bước tiếp theo |
| **Tự động hóa** | Không thể tự động hóa trực tiếp | Có thể chuẩn hóa và tự động hóa |
| **Ví dụ** | Viết email, họp, làm báo cáo | Nhận email → phân loại → trả lời → lưu trữ |

**Định nghĩa học viên cần nhớ:**
> **Workflow = Luồng công việc có thứ tự rõ ràng, trong đó Output của bước trước là Input của bước sau.**

**Ví dụ thực tế:**
- ❌ Todo: "Làm báo cáo tuần"
- ✅ Workflow: Thu thập số liệu (10') → Phân tích xu hướng (15') → Viết tóm tắt (10') → Gửi email team (5')

**Câu hỏi kích thích:**
> "Trong công việc của bạn, có quy trình nào bạn làm lặp đi lặp lại hàng ngày? Nó gồm bao nhiêu bước? Bước nào mất thời gian nhất?"

**Sai lầm phổ biến trong thực tế:**

| Sai lầm | Hậu quả |
|---------|---------|
| Tập trung vào tool, không thiết kế workflow trước | Tool xây xong không dùng được vì không biết input từ đâu |
| Input/Output không rõ ràng | Kết quả mỗi lần chạy khác nhau, không đáng tin |
| Thiếu bước xử lý lỗi | Cả workflow dừng vì một bước thất bại nhỏ |
| Workflow quá dài, không chia nhỏ | Không thể debug, không thể cải thiện từng phần |

### 5.2 Mô hình OIPO (15 phút)

**OIPO là khung tư duy để thiết kế bất kỳ workflow tự động nào:**

```
O — Objective  → Mục tiêu đo lường được của workflow này là gì?
I — Input      → Nguồn dữ liệu cụ thể đầu vào là gì?
P — Process    → Trình tự xử lý từng bước (có thứ tự)
O — Output     → Định dạng kết quả + nơi lưu/gửi
```

**Giải thích từng thành phần:**

| Thành phần | Câu hỏi then chốt | Ví dụ tốt | Ví dụ kém |
|-----------|-------------------|-----------|-----------|
| **O** — Objective | "Thành công trông như thế nào? Đo được bằng gì?" | "Gửi 3 tin AI tiếng Việt vào Telegram lúc 9:00 sáng mỗi ngày" | "Cập nhật tin tức AI" |
| **I** — Input | "Dữ liệu từ đâu? Định dạng gì? Tần suất?" | "RSS feed từ TechCrunch AI section, cập nhật mỗi giờ" | "Tin tức AI từ internet" |
| **P** — Process | "Bước 1, 2, 3... làm gì? Thứ tự?" | "1. Fetch RSS → 2. Lọc 3 tin mới → 3. Dịch tiếng Việt → 4. Format tin → 5. Gửi Telegram" | "Xử lý và gửi tin" |
| **O** — Output | "Định dạng output? Gửi đi đâu? Lưu ở đâu?" | "Tin nhắn Telegram có số thứ tự, tiêu đề tiếng Việt, link gốc, hashtag #AI" | "Tin nhắn đẹp" |

**MẸO GIẢNG từng phần:**
- **Objective**: "Nếu sáng mai bạn ngủ dậy, nhìn vào Telegram — bạn muốn thấy gì? Đó là Objective."
- **Input**: "Nếu không có thứ này, workflow không thể bắt đầu — đó là Input bắt buộc."
- **Process**: "Đây là phần bạn dạy AI làm. Càng chi tiết, AI càng làm đúng."
- **Output**: "Cầm output này lên — có dùng được ngay không? Nếu phải xử lý thêm, Output chưa đủ cụ thể."

### 5.3 Áp dụng OIPO cho AI News Bot (5 phút)

**Demo thiết kế trực tiếp trên bảng/slide:**

| OIPO | Nội dung AI News Bot |
|------|---------------------|
| **O** — Objective | Gửi 3 tin tức AI mới nhất dịch tiếng Việt vào Telegram Group lúc 9:00 sáng, hàng ngày |
| **I** — Input | Google News RSS (không cần API key) — từ khóa "artificial intelligence", lấy 3 tin mới nhất |
| **P** — Process | 1. Đọc RSS lấy tin → 2. Lọc 3 tin đầu → 3. Dịch tiêu đề + tóm tắt → 4. Format có icon + hashtag → 5. Gửi Telegram Bot API |
| **O** — Output | Tin nhắn Telegram: số thứ tự, tiêu đề tiếng Việt, 1 câu tóm tắt, link gốc, hashtag #AI #Tech |

> "Đây là bản vẽ thiết kế. Phần 3 chúng ta sẽ hiện thực hóa từng bước trong P — Process bằng code Python thực tế."

---

## 6. Phần 2 — 3 Cấp Độ Automation + Bảo Mật API (20 phút)

### 6.1 3 Cấp Độ Automation (10 phút)

**Dẫn dắt:** Bất kỳ workflow nào cũng có thể được tự động hóa ở 3 mức độ khác nhau.

```
Cấp 1: Manual (SOP)
  → Con người làm theo quy trình chuẩn hóa thành văn bản
  → Ví dụ: Checklist check tin tức buổi sáng, paste thủ công vào group

Cấp 2: Semi-auto (Prompt Engineering)
  → AI hỗ trợ một phần — con người vẫn trigger và review
  → Ví dụ: Dùng ChatGPT/Antigravity soạn tin, mình paste và gửi thủ công

Cấp 3: Full Automation (API + if-then logic)
  → Hệ thống chạy hoàn toàn tự động theo lịch
  → Ví dụ: Bot Python chạy crontab 9:00 sáng, tự lấy tin, dịch, gửi Telegram
```

**Bảng so sánh 3 cấp độ:**

| | Cấp 1 — Manual | Cấp 2 — Semi-auto | Cấp 3 — Full Auto |
|--|----------------|--------------------|--------------------|
| **Ai làm?** | Con người 100% | Con người + AI hỗ trợ | Hệ thống tự động |
| **Trigger** | Con người tự trigger | Con người trigger AI | Lịch tự động (cron/scheduler) |
| **Thời gian** | Mỗi lần mất 15–30 phút | Mỗi lần mất 5–10 phút | 0 phút (chạy ngầm) |
| **Rủi ro quên** | Cao | Thấp | Không quên |
| **Khi nào dùng?** | Quy trình mới, chưa rõ | Quy trình đã hiểu, cần scale | Quy trình ổn định, lặp lại |

**Insight quan trọng:**
> "Không nhảy thẳng lên Cấp 3. Bắt đầu bằng Cấp 1 — hiểu rõ từng bước. Rồi lên Cấp 2 — thấy chỗ nào AI làm tốt hơn. Cuối cùng mới tự động hóa hoàn toàn. Buổi hôm nay chúng ta sẽ đi từ Cấp 1 lên Cấp 3 trong 70 phút."

### 6.2 Sai Lầm Phổ Biến (5 phút)

**Chiếu slide "Những sai lầm hay gặp":**

| # | Sai lầm | Hậu quả thực tế |
|---|---------|-----------------|
| 1 | **Tập trung vào tool, không thiết kế workflow trước** | Tool xây xong không biết dùng vào đâu — "overkill" hoặc "thiếu" |
| 2 | **Input/Output không rõ ràng** | Mỗi lần chạy ra kết quả khác nhau, không tin tưởng được |
| 3 | **Nhảy thẳng lên Full Auto khi chưa hiểu quy trình** | Bug ẩn trong logic, khó debug, sai lặp lại mà không biết |
| 4 | **Không test từng bước nhỏ** | Cả pipeline thất bại, không biết lỗi ở đâu |
| 5 | **Bỏ qua bảo mật API token** | Token bị lộ, bot bị chiếm quyền, gửi spam không kiểm soát được |

**Câu hỏi thảo luận nhanh (2 phút):**
> "Bạn đã từng mắc sai lầm nào trong số này khi làm việc với AI chưa?"

### 6.3 Nguyên Tắc Bảo Mật API Token (5 phút)

> **QUAN TRỌNG: Đây là nội dung bắt buộc — giảng viên phải nhấn mạnh rõ ràng trước khi demo.**

**Quy tắc vàng bảo mật token:**

```
KHÔNG BAO GIỜ làm:
  - Paste Token trực tiếp vào Group chat Telegram
  - Chụp màn hình code có Token rồi chia sẻ
  - Hard-code Token vào GitHub, Google Drive, bất kỳ cloud nào
  - Để Token trong file code khi demo cho người khác xem

LUÔN LUÔN làm:
  - Lưu Token trong file .env riêng (không commit lên Git)
  - Dùng biến môi trường: os.environ.get('BOT_TOKEN')
  - Revoke token ngay sau khi demo công khai
  - Sau demo: tạo Token mới ngay lập tức
```

**Giải thích file .env:**

```bash
# File .env (đặt trong Desktop/Buoi4/)
BOT_TOKEN=your_actual_token_here
CHAT_ID=your_chat_id_here
```

```python
# Trong code Python — đọc từ .env
import os
from dotenv import load_dotenv

load_dotenv()
BOT_TOKEN = os.environ.get('BOT_TOKEN')
CHAT_ID = os.environ.get('CHAT_ID')
```

> "Trong demo hôm nay giảng viên sẽ ẩn phần Token. Sau khi demo xong sẽ revoke token ngay lập tức. Đây không phải overprecaution — đây là thói quen bắt buộc khi làm với API thật."

**Lưu ý về code mẫu trong lớp:**
> Để giữ mọi thứ đơn giản khi thực hành, code mẫu hôm nay **hardcode token ngay trong file**. Hardcode chỉ chấp nhận trong lớp học; **BTVH bắt buộc chuyển sang file `.env`** — và việc chuyển đổi này chính là 1 vòng PDCA Act mà học viên tự thực hiện.

---

## 7. Break & Checkpoint (10 phút)

Trong 5 phút đầu break, học viên ghi nhanh vào giấy/máy:
1. "Viết Objective của AI News Bot theo cách đo lường được."
2. "Workflow khác Todo list ở điểm nào? 1 câu."
3. "3 cấp độ Automation là gì? Ví dụ 1 workflow ở mỗi cấp từ công việc của bạn."

Giảng viên đọc nhanh qua → nhận diện ai chưa rõ OIPO để hỗ trợ trong phần thực hành.

**Checkpoint kỹ thuật — kiểm tra trong break:**
- Học viên mở Terminal/CMD → `python --version` → 3.x.x ✅
- `pip install requests feedparser` → Success ✅
- Telegram mở được trên máy ✅
- Ai chưa xong → giảng viên hỗ trợ ngay trong 5 phút break còn lại

---

> [!IMPORTANT]
> **HƯỚNG DẪN DẠY VỚI 1 WORKSPACE XUYÊN SUỐT (BRIDGE LAYER):**
> Nhằm giữ nguyên nội dung Slide chính thức của MindX nhưng vẫn tối ưu hóa hiệu quả tích lũy năng lực của học viên, Giảng viên hướng dẫn lớp thực hành buổi này **trực tiếp bên trong workspace duy nhất của học viên** (`my-workspace` đã setup ở Buổi 1-3).
> - **Cách tổ chức file:** Học viên tạo file workflow tại `.agents/workflows/my-workflow.md` nằm trong workspace cá nhân thay vì tạo folder riêng lẻ ngoài Desktop.
> - **Cá nhân hóa (Khuyến nghị):** Đối với học viên muốn áp dụng OIPO vào bài toán tự động hóa thật của họ ngay tại lớp, khuyến khích họ mở file [session-04-bridge.md](plans/260710-workspace-bridge/bridge-guides/session-04-bridge.md) để map kịch bản Telegram Bot sang workflow công việc thực tế của họ và xây dựng trực tiếp OIPO spec trong `my-workspace`.

## 8. Phần 3 — Demo 9 Bước + Thực Hành (70 phút)

### 8.1 Tổng quan pipeline demo

```
Objective: Lấy 3 tin AI mới nhất → Dịch tiếng Việt → Gửi Telegram Group lúc 9:00 sáng

OIPO thực thi:
  Input:   Google News RSS — từ khóa "artificial intelligence"
    ↓
  Process: Fetch → Lọc 3 tin → Dịch → Format → Gửi Telegram Bot API
    ↓
  Output:  Tin nhắn Telegram Group có tiêu đề tiếng Việt + link + hashtag
    ↓
  Auto:    Task Scheduler (Win) / crontab (Mac) → chạy lúc 9:00 hàng ngày
```

### 8.2 DEMO Step-by-step — 9 Bước (40 phút)

> ⚠️ Refresh note: hành vi/UI Antigravity có thể thay đổi theo phiên bản — đối chiếu https://antigravity.google/docs và chạy thử demo trước buổi dạy.

> Giảng viên thực hiện từng bước chậm, hỏi "Ai đang làm được bước này không?" sau mỗi bước. Học viên làm song song theo.

---

**BƯỚC 1 — Tạo Telegram Bot (5 phút)**

Mục tiêu: Có BOT_TOKEN để bot giao tiếp với Telegram API

1. Mở Telegram trên máy tính
2. Tìm kiếm: `@BotFather`
3. Click vào BotFather → Start
4. Gõ lệnh: `/newbot`
5. BotFather hỏi tên bot → nhập: `AI News Bot`
6. BotFather hỏi username (phải kết thúc bằng `bot`) → nhập ví dụ: `ainews_buoi4_bot`
7. BotFather trả về **BOT_TOKEN** dạng: `7123456789:AAFxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
8. **Copy BOT_TOKEN → lưu vào Notepad** (KHÔNG paste vào Group chat)

```
✅ Checkpoint: Bạn đã có BOT_TOKEN chưa?
```

---

**BƯỚC 2 — Tạo Telegram Group (3 phút)**

Mục tiêu: Tạo nơi bot sẽ gửi tin tức

1. Trong Telegram → click icon bút viết (New Message)
2. Chọn **New Group**
3. Đặt tên group: `AI News - Buoi4`
4. Thêm thành viên: tìm tên bot vừa tạo (ví dụ: `@ainews_buoi4_bot`) → Add
5. Click **Create**
6. Trong group vừa tạo → gõ bất kỳ tin nhắn: `hello bot`

```
✅ Checkpoint: Group đã tạo xong, bot đã là thành viên, đã gửi 1 tin nhắn trong group
```

---

**BƯỚC 3 — Lấy Chat ID (5 phút)**

Mục tiêu: Biết ID của Group để Python gửi tin đúng chỗ

1. Mở trình duyệt Chrome
2. Dán URL vào thanh địa chỉ (thay `BOT_TOKEN` bằng token thật):
   ```
   https://api.telegram.org/botBOT_TOKEN/getUpdates
   ```
3. Trang web trả về JSON → tìm phần `"chat"` → tìm `"id"`
4. **Chat ID của Group có dấu âm** (ví dụ: `-1001234567890`)
5. Copy Chat ID → lưu vào Notepad cùng với BOT_TOKEN

**Nếu JSON trả về rỗng `{"ok":true,"result":[]}`:**
Quay lại Group → gõ thêm 1 tin nhắn → refresh lại trang

```
✅ Checkpoint: Bạn đã có Chat ID (số âm, bắt đầu bằng -100...)
```

---

**BƯỚC 4 — Tạo File Code (2 phút)**

Mục tiêu: Tạo file Python trong thư mục Buoi4

1. Mở Antigravity (hoặc VS Code / Notepad++)
2. Tạo file mới: `Desktop/Buoi4/send_telegram.py`
3. Giữ file trống — chuẩn bị dán code ở bước tiếp theo

```
✅ Checkpoint: File send_telegram.py đã tồn tại trong Desktop/Buoi4/
```

---

**BƯỚC 5 — Dán Code Python (10 phút)**

Mục tiêu: Dùng AI + OIPO Prompt để tạo code hoàn chỉnh

**Prompt dùng với Antigravity:**

```
Viết code Python thực hiện workflow sau theo mô hình OIPO:

Objective: Lấy 1 tin tức AI mới nhất, dịch tóm tắt sang tiếng Việt,
gửi vào Telegram Group tự động

Input:
- Google News RSS (không cần API key):
  https://news.google.com/rss/search?q=artificial+intelligence&hl=vi&gl=VN&ceid=VN:vi
- BOT_TOKEN: (để placeholder)
- CHAT_ID: (để placeholder)

Process:
1. Đọc Google News RSS bằng feedparser, lấy 1 tin đầu tiên
2. Lấy title và tóm tắt
3. Dịch tiêu đề sang tiếng Việt
4. Format tin nhắn có icon, số thứ tự, link gốc, hashtag #AI #Tech
5. Gửi qua Telegram Bot API

Output:
- Tin nhắn Telegram rõ ràng, đẹp
- Print kết quả ra terminal để kiểm tra

Yêu cầu kỹ thuật:
- Dùng thư viện requests và feedparser
- BOT_TOKEN và CHAT_ID là biến ở đầu file
- Có try/except xử lý lỗi cơ bản
- Comment giải thích từng bước theo OIPO
```

**Code mẫu giảng viên chuẩn bị sẵn (dán vào file nếu học viên cần):**

> **Ghi chú giảng viên:** Bắt buộc chạy thử code mẫu trước ngày dạy — cấu trúc RSS có thể thay đổi, không demo "chay" trên lớp.

```python
import requests
import feedparser

# ============================================================
# AI News Bot — Thiết kế theo mô hình OIPO
# Buổi 4: Thiết Kế Workflow Tự Động Với AI
# ============================================================

# --- CẤU HÌNH (thay bằng thông tin thật của bạn) ---
# LƯU Ý: Hardcode token chỉ chấp nhận trong lớp học;
# BTVH bắt buộc chuyển sang file .env — đây chính là 1 vòng PDCA Act.
BOT_TOKEN = "PASTE_BOT_TOKEN_CUA_BAN_VAO_DAY"
CHAT_ID = "PASTE_CHAT_ID_CUA_BAN_VAO_DAY"

# ============================================================
# INPUT: Nguồn dữ liệu — Google News RSS (không cần API key)
# ============================================================
def lay_tin_tuc_ai():
    url = ("https://news.google.com/rss/search"
           "?q=artificial+intelligence&hl=vi&gl=VN&ceid=VN:vi")
    try:
        feed = feedparser.parse(url)
        articles = []
        for entry in feed.entries[:3]:
            articles.append({
                "title": entry.get("title", "Khong co tieu de"),
                "description": entry.get("summary", ""),
                "url": entry.get("link", ""),
                "source": entry.source.title if "source" in entry else "Google News",
            })
        return articles
    except Exception as e:
        print(f"Loi khi lay tin tuc: {e}")
        return []

# ============================================================
# PROCESS: Xử lý và format tin nhắn
# ============================================================
def format_tin_nhan(articles):
    if not articles:
        return "Khong lay duoc tin tuc hom nay. Thu lai sau."

    tin_nhan = "TIN TUC AI HOM NAY\n"
    tin_nhan += "=" * 30 + "\n\n"

    for i, article in enumerate(articles, 1):
        title = article.get("title", "Khong co tieu de")
        description = article.get("description", "")
        url = article.get("url", "")
        source = article.get("source", "Google News")

        tin_nhan += f"{i}. {title}\n"
        if description:
            tom_tat = description[:100] + "..." if len(description) > 100 else description
            tin_nhan += f"Tom tat: {tom_tat}\n"
        tin_nhan += f"Link: {url}\n"
        tin_nhan += f"Nguon: {source}\n\n"

    tin_nhan += "#AI #TechNews #TinTucAI"
    return tin_nhan

# ============================================================
# OUTPUT: Gửi vào Telegram Group
# ============================================================
def gui_telegram(tin_nhan):
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    data = {
        "chat_id": CHAT_ID,
        "text": tin_nhan
    }
    try:
        response = requests.post(url, json=data, timeout=10)
        response.raise_for_status()
        result = response.json()
        if result.get("ok"):
            print("Gui tin nhan thanh cong!")
        else:
            print(f"Gui that bai: {result}")
    except requests.exceptions.RequestException as e:
        print(f"Loi ket noi Telegram: {e}")

# ============================================================
# MAIN: Chạy toàn bộ workflow OIPO
# ============================================================
if __name__ == "__main__":
    print("Bat dau AI News Bot...")
    articles = lay_tin_tuc_ai()
    print(f"Lay duoc {len(articles)} tin")
    tin_nhan = format_tin_nhan(articles)
    print(tin_nhan)
    gui_telegram(tin_nhan)
    print("Hoan thanh!")
```

```
✅ Checkpoint: Code đã dán vào file, chưa thay Token/Chat ID
```

---

**BƯỚC 6 — Thay Token & Chat ID (2 phút)**

Mục tiêu: Kết nối code với bot và group thật của bạn

1. Trong file `send_telegram.py`, tìm 2 dòng:
   ```python
   BOT_TOKEN = "PASTE_BOT_TOKEN_CUA_BAN_VAO_DAY"
   CHAT_ID = "PASTE_CHAT_ID_CUA_BAN_VAO_DAY"
   ```
2. Thay token thật (lưu từ Bước 1)
3. Thay Chat ID thật (lưu từ Bước 3)
4. Save file

> **LƯU Ý:** KHÔNG chia sẻ màn hình khi Token đang hiển thị. Blur phần Token trước khi chiếu.
> Hardcode token như trên chỉ chấp nhận trong lớp học để giữ demo đơn giản — BTVH bắt buộc chuyển token sang file `.env` (chính là 1 vòng PDCA Act).

```
✅ Checkpoint: 2 dòng cấu hình đã thay xong, file đã save
```

---

**BƯỚC 7 — Chạy Code (5 phút)**

Mục tiêu: Chạy bot lần đầu, xem kết quả terminal

1. Mở Terminal (Mac) hoặc Command Prompt (Windows)
2. Di chuyển vào thư mục:
   ```bash
   cd Desktop/Buoi4
   ```
3. Cài thư viện (nếu chưa):
   ```bash
   pip install requests feedparser
   ```
4. Chạy bot:
   ```bash
   python send_telegram.py
   ```

Kết quả mong đợi trên terminal:
```
Bat dau AI News Bot...
Lay duoc 3 tin
[noi dung tin hien thi ra day]
Gui tin nhan thanh cong!
Hoan thanh!
```

```
✅ Checkpoint: Terminal báo "Gui tin nhan thanh cong!"
```

---

**BƯỚC 8 — Kiểm Tra Kết Quả (2 phút)**

Mục tiêu: Xác nhận tin tức đã đến Telegram Group

1. Mở Telegram → vào Group `AI News - Buoi4`
2. Kiểm tra: tin nhắn có format rõ ràng không? Có tiêu đề? Có link? Có hashtag?
3. Nếu OK: Bot hoạt động thành công!

```
✅ Checkpoint: Telegram Group hiển thị tin nhắn từ bot
```

---

**BƯỚC 9 — Hẹn Giờ Tự Động (6 phút)**

Mục tiêu: Bot tự chạy lúc 9:00 sáng hàng ngày — không cần con người trigger

**Windows — Task Scheduler:**

1. Tìm kiếm: `Task Scheduler` → mở
2. Chọn `Create Basic Task`
3. Name: `AI News Bot 9AM`
4. Trigger: `Daily` → set giờ `09:00:00`
5. Action: `Start a program`
6. Program/script: đường dẫn Python, ví dụ: `C:\Python310\python.exe`
7. Add arguments: đường dẫn file, ví dụ: `C:\Users\TenBan\Desktop\Buoi4\send_telegram.py`
8. Finish → OK

**Mac — crontab:**

1. Mở Terminal
2. Gõ: `crontab -e`
3. Thêm dòng (chạy 9:00 sáng hàng ngày):
   ```bash
   0 9 * * * /usr/bin/python3 /Users/TenBan/Desktop/Buoi4/send_telegram.py
   ```
4. Lưu file (`:wq` nếu dùng vim)
5. Kiểm tra: `crontab -l` → thấy dòng vừa thêm

**Kiểm tra đường dẫn Python:**
```bash
# Mac/Linux
which python3

# Windows
where python
```

```
✅ Checkpoint: Task Scheduler hoặc crontab đã set, đường dẫn chính xác
```

---

### 8.3 Thực Hành Nâng Cấp Bot (30 phút)

**Đề bài nâng cấp:** Dùng Antigravity để nâng cấp bot từ cơ bản lên phiên bản đầy đủ.

**Yêu cầu nâng cấp:**

| # | Tính năng nâng cấp | Mô tả |
|---|--------------------|-------|
| 1 | **3 tin thay vì 1** | Lấy và hiển thị đúng 3 tin AI mới nhất |
| 2 | **Dịch tiếng Việt chính xác** | Tiêu đề và tóm tắt đều dịch sang tiếng Việt |
| 3 | **Format rõ ràng** | Số thứ tự, icon phù hợp, khoảng cách đẹp |
| 4 | **Thêm insight xu hướng AI** | 1–2 câu AI tóm tắt xu hướng từ 3 tin hôm nay |
| 5 | **Gửi đúng giờ** | Task Scheduler/crontab hoạt động, đã test |

**Prompt nâng cấp gợi ý cho học viên:**

```
Nâng cấp file send_telegram.py của tôi:

1. Tăng lên 3 tin tức AI (lấy 3 entry đầu từ Google News RSS)
2. Thêm chức năng dịch tiêu đề sang tiếng Việt dùng googletrans:
   pip install googletrans==4.0.0-rc1
3. Sau 3 tin, thêm phần "XU HUONG AI HOM NAY:" — 2 câu tóm tắt xu hướng chung
4. Format đẹp hơn: separator giữa các tin, thêm ngày hôm nay ở đầu tin nhắn
5. Giữ nguyên cấu trúc OIPO và comment tiếng Việt

File hiện tại: [dán code hiện tại vào đây]
```

**Cấu trúc 30 phút thực hành:**

| Thời gian | Hoạt động | Giảng viên làm gì |
|-----------|-----------|-------------------|
| 0–10 phút | Nâng cấp lên 3 tin + dịch tiếng Việt | Hỗ trợ lỗi googletrans, pip install |
| 10–20 phút | Thêm insight + format đẹp | Đi vòng quanh, review format tin nhắn |
| 20–30 phút | Set Task Scheduler/crontab + chạy thử | Hỗ trợ fix đường dẫn Python, test cron |

**Hỗ trợ học viên bị kẹt:**

| Tình huống kẹt | Gợi ý giảng viên |
|---------------|--------------------|
| googletrans lỗi install | Dùng `pip install deep-translator` thay thế |
| Bot không nhận được tin | Kiểm tra Chat ID — đảm bảo đã gửi tin trong group TRƯỚC khi lấy ID |
| RSS trả về rỗng | Kiểm tra kết nối mạng; mở URL RSS trực tiếp trong trình duyệt xem có XML không; thử đổi từ khóa search |
| Task Scheduler không chạy | Kiểm tra đường dẫn Python (dùng `where python`), thử chạy tay trước |
| crontab không hiệu lực | Mac cần cấp quyền Full Disk Access cho Terminal trong System Preferences |
| Token lỗi 401 | Token sai — copy lại từ đầu, đảm bảo không có khoảng trắng thừa |

---

## 9. Tổng Kết & Review Artifact (20 phút)

### 9.1 Review Artifact Buổi 4 (10 phút)

**Artifact chuẩn buổi 4 — mỗi học viên phải có:**

**1. Sơ đồ OIPO của bot mình (vẽ tay hoặc gõ lại):**

```markdown
# AI News Bot — Thiết kế OIPO

## O — Objective
Gửi 3 tin AI mới nhất dịch tiếng Việt vào Telegram Group lúc 9:00 sáng,
hàng ngày, tự động — không cần can thiệp thủ công.

## I — Input
- Nguồn: Google News RSS (không cần API key)
- Từ khóa: "artificial intelligence"
- Số tin: 3 bài mới nhất

## P — Process
1. Đọc Google News RSS (feedparser) → lấy 3 tin đầu tiên
2. Lọc title + description từ mỗi tin
3. Dịch tiêu đề và tóm tắt sang tiếng Việt (googletrans)
4. Format tin nhắn: số thứ tự, icon, link, hashtag
5. Thêm 2 câu insight xu hướng AI
6. Gửi qua Telegram Bot API đến Group

## O — Output
Tin nhắn Telegram Group:
- 3 tin có số thứ tự (1, 2, 3)
- Tiêu đề tiếng Việt
- Tóm tắt 1-2 câu tiếng Việt
- Link bài gốc
- Section "Xu hướng AI hôm nay"
- Hashtag: #AI #TechNews #TinTucAI
```

**2. File `send_telegram.py` hoàn chỉnh — đã chạy được**

**3. Bằng chứng bot hoạt động:**
- Ảnh chụp màn hình Terminal: "Gui tin nhan thanh cong!"
- Ảnh chụp màn hình Telegram Group: tin nhắn từ bot hiển thị

**4. Task Scheduler/crontab đã set:**
- Windows: Screenshot Task Scheduler với task AI News Bot 9AM
- Mac: Output của `crontab -l` trong Terminal

### 9.2 Validation Checklist (5 phút)

Học viên tự check trước khi ra về:

- [ ] Vẽ được sơ đồ OIPO cho bot của mình (có đủ 4 thành phần O-I-P-O)
- [ ] Bot đã gửi tin thành công vào Telegram Group
- [ ] Tin tức đã được dịch sang tiếng Việt
- [ ] Format tin nhắn rõ ràng, có icon và hashtag
- [ ] Task Scheduler đã cài (Windows) hoặc crontab đã set (Mac)
- [ ] Trong lớp: Token KHÔNG xuất hiện trong màn hình chia sẻ hoặc ảnh chụp
- [ ] Nắm rõ yêu cầu BTVH: chuyển BOT_TOKEN và CHAT_ID sang file `.env` (không còn hardcode) — 1 vòng PDCA Act

### 9.3 Giao Bài Tập Về Nhà (5 phút)

> **BTVH Buổi 4:**
>
> **Lựa chọn 1 (Hoàn thiện):** Hoàn thành AI News Bot nâng cao với đầy đủ:
> 3 tin AI, dịch tiếng Việt, insight xu hướng, Task Scheduler/crontab chạy thật.
>
> **Lựa chọn 2 (Sáng tạo):** Tự tạo workflow khác theo nhu cầu công việc thật của bạn,
> sử dụng OIPO để thiết kế. Ví dụ: bot tin tức tài chính, bot nhắc việc hàng ngày,
> bot tổng hợp email.
>
> **Bắt buộc với cả 2 lựa chọn:** Chuyển BOT_TOKEN và CHAT_ID sang file `.env` — không hardcode token trong file nộp. Đây chính là 1 vòng PDCA Act bạn tự thực hiện trên code của mình.
>
> **Nộp bài:**
> - File Python hoàn chỉnh (token đã chuyển sang `.env` — không nộp file `.env`)
> - Ảnh chụp Telegram Group có tin đến (hoặc bằng chứng workflow chạy được)
> - (Tùy chọn) Sơ đồ OIPO của workflow bạn thiết kế

---

## 10. Lỗi Phổ Biến & Cách Can Thiệp

| Lỗi | Dấu hiệu | Cách giảng viên can thiệp |
|-----|---------|--------------------------|
| `python not found` | CMD/Terminal báo lỗi khi gõ `python` | Kiểm tra PATH environment; hướng dẫn cài lại Python, chọn "Add to PATH" |
| `pip install requests lỗi` | Báo lỗi permission hoặc không tìm thấy pip | Chạy: `python -m pip install requests` |
| Bot không nhận được tin | getUpdates trả về `{"ok":true,"result":[]}` | Quay lại Group → gửi thêm tin nhắn → refresh lại URL |
| Telegram không thấy tin | Code chạy không báo lỗi nhưng Group trống | Kiểm tra CHAT_ID đúng chưa (phải có dấu `-`); kiểm tra Bot đã trong Group |
| 401 Unauthorized | Python trả về lỗi 401 | BOT_TOKEN sai — copy lại từ BotFather, không có khoảng trắng |
| 400 Bad Request | Python trả về lỗi 400 | CHAT_ID sai định dạng — phải là số nguyên ví dụ `-1001234567890` |
| RSS trả về 0 tin | `articles = []` | Mở URL RSS trong trình duyệt kiểm tra có XML không; kiểm tra mạng; thử đổi từ khóa hoặc bỏ tham số `hl/gl` |
| Task Scheduler không chạy | Task tồn tại nhưng không execute đúng giờ | Kiểm tra đường dẫn Python đầy đủ; thử chạy tay từ Task Scheduler |
| crontab không hiệu lực | Cron đã set nhưng không chạy | Mac: cấp Full Disk Access cho Terminal (System Preferences → Privacy) |
| googletrans lỗi install | `ERROR: Could not find a version` | Dùng `deep-translator`: `pip install deep-translator` |

---

## 11. Câu Hỏi Thảo Luận Dự Phòng

1. "OIPO và MICRO (buổi 5) khác nhau ở điểm nào? Cái nào là bản vẽ, cái nào là JD?"
2. "Nếu Google News RSS ngừng hoạt động — bạn thay Input bằng gì? Workflow còn dùng được không?"
3. "Task Scheduler/crontab là Cấp 3 — nhưng nếu máy tính tắt thì sao? Giải pháp là gì?"
4. "Token Telegram bị lộ — hậu quả tệ nhất có thể xảy ra là gì? Cách xử lý?"
5. "Nếu muốn bot gửi tin vào 3 Telegram Group khác nhau — bạn sửa code ở đâu?"
6. "Workflow OIPO này có thể áp dụng cho việc gì khác trong công việc hàng ngày của bạn?"

---

## 12. Backup Plans

| Tình huống | Backup |
|-----------|--------|
| GG Anti lỗi quota | Viết OIPO trên giấy, dùng VS Code / Notepad++ thay Antigravity |
| Google News RSS không truy cập được | Dùng NewsAPI.org (100 req/ngày miễn phí) hoặc hardcode 3 tin mẫu |
| Python không cài được | Dùng Google Colab (chạy Python trên browser, không cần cài) |
| Telegram bị chặn mạng công ty | Dùng điện thoại hotspot; hoặc demo bằng Slack/email thay Telegram |
| Task Scheduler lỗi phức tạp | Demo ý tưởng bằng slide; giao BTVH hoàn thiện ở nhà |
| googletrans không install được | Bỏ qua dịch tự động, dùng tiêu đề tiếng Anh và giải thích thủ công |

---

## 13. Kết Nối Với Các Buổi Tiếp Theo

| Buổi | Kết nối với buổi 4 |
|------|--------------------|
| **Buổi 5** | AI Agent với khung MICRO — setup "nhân sự AI" đảm nhận phần logic xử lý tin thay cho Python đơn thuần |
| **Buổi 6** | Knowledge & Rules — nạp tài liệu, viết rules cho hệ thống (ví dụ: rule lọc tin trùng cho bot hôm nay) |
| **Buổi 7** | Handoff & Human Checkpoint — thêm điểm duyệt của con người trước khi bot gửi tin |

> "Bot Telegram hôm nay là hạt nhân — buổi 5 trở đi chúng ta sẽ thêm trí tuệ, bộ nhớ, và khả năng ra quyết định cho nó."

---

*Cập nhật lần cuối: 2026-06-10 | Phiên bản: v1.0*
*Nguồn: `assets/source-materials/original/MindX_AG_Slide 4.pdf`*
*Raw extract: `assets/source-materials/derived/session-04-raw-extract.txt`*

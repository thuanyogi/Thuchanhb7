# Session 04 — Thiết Kế Workflow Tự Động Với AI (Mô hình OIPO)

## Source
- `assets/source-materials/original/MindX_AG_Lesson 4.pdf` (30 trang)

---

## Mục tiêu học tập

Kết thúc buổi học, học viên đạt được 3 mục tiêu:

1. **Tư duy về Workflow** — Trình bày được khái niệm cốt lõi của Workflow và giải thích tầm quan trọng của việc chuẩn hóa quy trình đối với hiệu suất công việc hiện đại.
2. **Kỹ năng thiết kế (mô hình OIPO)** — Ứng dụng mô hình OIPO để phân tích và thiết kế một quy trình làm việc bài bản, có cấu trúc rõ ràng.
3. **Kỹ năng thực thi (hệ thống tự động)** — Xây dựng và vận hành thành công một hệ thống tự động hóa cơ bản (từ bước thiết lập đầu vào đến khi ra kết quả cuối cùng).

---

## Phần 1: Workflow và Mô hình OIPO

### Vấn đề thực tế (tình huống mở đầu)

Bài toán tìm kiếm và tổng hợp thông tin hàng ngày thường gồm 4 bước lặp đi lặp lại thủ công:
1. Tự tìm tin, tài liệu — mở hàng chục tab, tìm kiếm thủ công nhiều nguồn.
2. Đọc và lọc thông tin — đọc toàn bộ bài viết để lọc nội dung quan trọng.
3. Báo cáo — tổng hợp, phân tích, gửi lại cho các bên liên quan.
4. Lặp lại — toàn bộ quy trình lặp lại mỗi khi cần.

→ Đây là bài toán lý tưởng để tự động hóa bằng Workflow + AI.

---

### Định nghĩa Workflow

> **Workflow** = Luồng công việc có thứ tự rõ ràng, từng bước được xác định cụ thể để đạt được một mục tiêu nhất định.

Workflow giúp chuẩn hóa công việc một cách logic, quy định rõ ràng:
- Bắt đầu từ đâu?
- Bước tiếp theo là gì?
- Đạt điều kiện gì mới được đi tiếp?
- Điểm kết thúc ở đâu?

| Workflow | To-do list |
|----------|-----------|
| Quy định chính xác **cách thức** và **thứ tự** của các công việc | Chỉ liệt kê danh sách các công việc phải làm |

---

### Mô hình OIPO

> **OIPO** = Khung tư duy giúp bóc tách và thiết kế bất kỳ quy trình làm việc nào (workflow) một cách có hệ thống.

| Thành phần | Ý nghĩa | Câu hỏi cần trả lời |
|------------|---------|---------------------|
| **O — Objective** (Mục tiêu) | Kết quả cuối cùng mà luồng công việc phải đạt được | Xác định một mục tiêu **duy nhất** và **có thể đo lường được** cho toàn bộ quy trình |
| **I — Input** (Dữ liệu đầu vào) | Nguồn dữ liệu gốc cần lấy từ đâu và ở định dạng nào | Thu thập và chỉ định chính xác nguồn cấp thông tin |
| **P — Process** (Trình tự cốt lõi) | Dữ liệu đầu vào cần trải qua các bước biến đổi nào để trở thành kết quả cuối | Thiết lập tuần tự các bước thực thi; phân định rõ tác vụ hệ thống tự động làm vs. tác vụ con người cần review |
| **O — Output** (Định dạng đầu ra) | Kết quả cuối cùng được xuất ra dưới hình thức nào và lưu trữ/gửi đến đâu | Định dạng và phân phối thành phẩm đến đúng điểm tiếp nhận |

---

### Ví dụ thực tế: OIPO cho AI News Bot

| Thành phần | Nội dung |
|------------|---------|
| **Objective** | Tự động hóa việc cập nhật tin tức công nghệ AI mới nhất toàn cầu **hàng ngày** |
| **Input** | Trích xuất dữ liệu bài viết thô (Resource) liên tục từ **Google News** (hoặc hệ thống ERP của doanh nghiệp) |
| **Process** | **Bước 1:** Python script tự động kết nối và lấy dữ liệu thô từ Google News → **Bước 2:** Chuyển sang Dịch AI, dịch và tóm tắt ý chính quan trọng nhất → **Bước 3:** Định dạng nội dung thành các đoạn ngắn, dễ đọc kèm hình ảnh trực quan |
| **Output** | Dùng **Telegram Bot** tự động gửi bản tin hoàn thiện vào nhóm làm việc **đúng 10:00 sáng hàng ngày** |

---

### Định nghĩa Automation

> **Automation** = Hệ thống tự chạy. Một khi luồng công việc (workflow) được thiết lập, hệ thống sẽ tự thực hiện các tác vụ theo lịch trình hoặc điều kiện đã định sẵn.

**Ví dụ thực tế:** Mỗi ngày lúc 10h sáng, hệ thống tự động:
1. Kết nối Google News
2. Lấy tin về AI mới nhất
3. Dịch sang tiếng Việt, tóm tắt ý quan trọng, tổng hợp thành bản tin
4. Gửi lên nhóm Telegram

---

### 3 Cấp độ Automation

| Cấp độ | Mô tả | Cần gì | Kiến thức |
|--------|-------|--------|-----------|
| **Cấp 1: Manual** | Thực hiện công việc một cách kỷ luật theo trình tự nhất định | Viết SOP một cách chuẩn xác | Kỹ năng phân tích công việc, SOP |
| **Cấp 2: Semi-auto** | Máy làm những việc lặp lại, con người đóng vai trò "Trạm kiểm soát" | Xác định các bước tốn thời gian nhất và giao cho công cụ | Prompt Engineering |
| **Cấp 3: Full automation** | Hệ thống tự xử lý với nhau dựa trên kịch bản có sẵn | Thiết lập tư duy logic và các điều kiện ràng buộc để hệ thống tự xử lý các tình huống phát sinh | Tư duy lập trình/logic (if-then), kiến thức về API, webhook |

---

### Sai lầm phổ biến khi dùng AI để tự động hóa workflow

> Hậu quả chung: AI làm sai, hệ thống không hoạt động như mong đợi, mất thời gian debug không cần thiết.

| Sai lầm | Biểu hiện | Hệ quả |
|---------|-----------|--------|
| **Tập trung vào công cụ** | Học cách dùng tool, không hiểu nguyên lý hay tư duy tự động hóa | Khi tool thay đổi, phải học lại từ đầu |
| **Không thiết kế workflow** | Ngay từ đầu đã tập trung vào code hoặc prompt; không vẽ workflow trước | Không bao quát hết các trường hợp, hệ thống rối rắm, khó bảo trì |
| **Input/Output không rõ ràng** | Không xác định rõ dữ liệu đầu vào và kết quả mong muốn | AI không hiểu mục đích và làm sai |

---

### Nguyên tắc bảo mật khi làm việc với API Token

> Bảo mật là điều **bắt buộc** phải tuân thủ ngay từ đầu khi làm việc với API token và credentials.

| Nguyên tắc | Nội dung |
|-----------|---------|
| **Không chia sẻ Token** | Tuyệt đối không gửi hoặc để lộ API/Bot Token qua tin nhắn, hình ảnh cho bất kỳ ai |
| **Không hard-code Token vào mã nguồn** | Tuyệt đối không gắn trực tiếp Token vào code khi chia sẻ lên GitHub hoặc Google Drive; bắt buộc lưu trong file `.env` cục bộ |
| **Chủ động Revoke Token** | Ngay sau khi demo công khai hoặc có nghi ngờ rò rỉ → lập tức thu hồi Token cũ và tạo mã mới |

**Giải thích thuật ngữ:**
- **Token**: Chuỗi ký tự hệ thống cấp phát để xác thực quyền truy cập.
- **Hard-code**: Thao tác gõ trực tiếp thông tin nhạy cảm vào tệp mã nguồn.
- **File .env**: Tệp cấu hình ẩn trên máy tính, dùng để lưu trữ an toàn các thông tin bảo mật.
- **Revoke**: Lệnh hủy bỏ hoàn toàn giá trị của Token cũ.

---

## Phần 2: Demo — Xây Dựng AI News Bot Với Google Antigravity

### Bối cảnh demo

> 10h sáng hàng ngày, team được cập nhật 1 tin AI mới để hiểu xu hướng công nghệ.

**Tổng quan 9 bước:**
1. Tạo Telegram Bot
2. Tạo Telegram Group
3. Lấy Chat ID
4. Tạo file Code trong Google Antigravity
5. Dán Code Python (dùng OIPO để tạo prompt → sinh code)
6. Thay Token & Chat ID
7. Chạy Code
8. Kiểm tra kết quả
9. Hẹn giờ tự động

---

### Chi tiết từng bước Demo

#### Bước 1 — Tạo Telegram Bot
1. Mở Telegram → search **BotFather**.
2. Gõ lệnh `/newbot`.
3. Nhập tên bot: `Tech News Demo Bot`.
4. Nhập username (phải có chữ "bot"): VD `tech_news_demo_bot`.
5. **Copy và lưu BOT TOKEN** được cấp — sẽ dùng trong code.

#### Bước 2 — Tạo Telegram Group
1. Tạo một Group Telegram mới, đặt tên: `Demo AI Group`.
2. Add bot vừa tạo vào group.
3. Gõ `hello bot` để kích hoạt (bot phải có ít nhất 1 tin nhắn trong group trước khi lấy Chat ID).

#### Bước 3 — Lấy Chat ID
1. Mở Chrome, dán URL sau vào thanh địa chỉ (thay `BOT_TOKEN` bằng token thật):
```
https://api.telegram.org/botBOT_TOKEN/getUpdates
```
2. Tìm dòng `"chat":{"id":-xxxxxxxx`.
3. Copy số ID âm → đây là **CHAT_ID**.

#### Bước 4 — Tạo File Code trong Google Antigravity
1. Mở Google Antigravity → khởi động môi trường lập trình.
2. Chuột phải vào folder dự án → **New File**.
3. Đặt tên file: `send_telegram.py`.

#### Bước 5 — Dán Code Python (dùng OIPO + AI để tạo prompt sinh code)
- Dùng AI (ChatGPT) + mô hình OIPO để thiết kế workflow → sinh code Python.
- Dán toàn bộ code vào file `send_telegram.py`.

**Prompt mẫu (theo OIPO):**

```
Đóng vai Automation Engineer và viết code Python hoàn chỉnh cho workflow theo mô hình OIPO:

Objective:
Tạo bot tự lấy 1 tin AI mới nhất, dịch sang tiếng Việt và gửi vào Telegram.

Input:
- Google News RSS (AI, OpenAI, Google AI)
- BOT_TOKEN
- CHAT_ID

Process:
- Lấy 1 tin từ RSS
- Lấy title + link
- Dịch sang tiếng Việt (không dùng googletrans)
- Format nội dung
- Gửi Telegram bằng requests

Output:
Viết full code file send_telegram.py chạy được ngay.

Yêu cầu:
- Có hàm translate_to_vi, get_ai_news, send_telegram
- Dùng requests
- Có xử lý lỗi cơ bản
- Format:
  🧠 Tin AI hôm nay - dd/mm/yyyy
  • [nội dung]
  Nguồn: [link]
  #AI #TinCongNghe
```

#### Bước 6 — Thay Token & Chat ID
- Mở file `send_telegram.py`, tìm và thay:
```python
BOT_TOKEN = "1234567890:ABCdef..."   # lấy từ BotFather
CHAT_ID   = "-1001234567890"         # lấy từ getUpdates Bước 3
```
- Dán giá trị thật vào giữa dấu ngoặc kép. Không để nguyên placeholder.

#### Bước 7 — Chạy Code
1. Mở Terminal: menu **Terminal → New Terminal**.
2. Cài thư viện: `pip install requests` → Enter.
3. Chạy script: `python send_telegram.py` → Enter.

#### Bước 8 — Kiểm tra kết quả
- Mở **Demo AI Group** trên Telegram (điện thoại hoặc máy tính).
- Nếu thấy tin nhắn xuất hiện → Hệ thống hoạt động thành công.
- **Nếu không thấy tin**, kiểm tra:
  - BOT_TOKEN và CHAT_ID có đúng không.
  - Bot đã được add vào group chưa.
  - Kết nối internet.
  - Xem lại lỗi trong Terminal.

#### Bước 9 — Hẹn giờ tự động (Windows Task Scheduler)
1. Search **Task Scheduler** trong Windows Start Menu.
2. Click **Create basic task** → đặt tên cho task.
3. Chọn **Daily**, đặt giờ chạy: `10:00`.
4. Chọn action **Start a program** → **Program/script:** điền đường dẫn `python.exe` (VD: `C:\Python310\python.exe`); **Add arguments:** điền đường dẫn file `send_telegram.py`.

---

## Phần 3: Thực hành

### Bài thực hành tại lớp — Nâng cấp AI News Bot

> Hướng dẫn: Dùng mô hình OIPO để nâng cấp prompt, sinh code Python, và thực hiện các bước như trong demo.

Học viên nâng cấp bot từ 1 tin → hệ thống chuyên nghiệp hơn với 5 yêu cầu:

| # | Yêu cầu | Chi tiết |
|---|---------|---------|
| 1 | **Lấy 3 tin AI** | Nâng số lượng tin tức tổng hợp lên 3 thay vì 1 |
| 2 | **Dịch sang tiếng Việt** | Dịch toàn bộ tiêu đề và nội dung sang tiếng Việt chính xác |
| 3 | **Format rõ ràng** | Trình bày tin nhắn có số thứ tự rõ ràng, dễ đọc |
| 4 | **Có insight** | Thêm phần nhận xét/insight về xu hướng AI |
| 5 | **Gửi Telegram** | Gửi nội dung vào Telegram group hàng ngày lúc 10h sáng |

---

## Tổng kết buổi học

| # | Nội dung | Tóm tắt |
|---|---------|---------|
| 1 | **Định nghĩa Workflow** | Luồng công việc có thứ tự rõ ràng, từng bước được xác định cụ thể để đạt mục tiêu |
| 2 | **Mô hình OIPO** | Objective → Input → Process → Output: khung tư duy để thiết kế các luồng công việc |
| 3 | **Ba cấp độ Automation** | Manual → Semi-auto → Full automation: lựa chọn cấp độ phù hợp với nhu cầu |
| 4 | **Tư duy cốt lõi** | Workflow quan trọng hơn tool; Bảo mật là điều không thể bỏ qua trong mọi dự án |
| 5 | **Demo AI News Bot** | Google News → Python → Dịch → Telegram: một workflow hoàn chỉnh đã được triển khai |

---

## Artifact

- **Workflow spec (OIPO):** Học viên nộp bản OIPO đầy đủ 4 thành phần cho workflow của mình.
- **File code:** `send_telegram.py` hoạt động được (gửi tin thành công vào Telegram group).

---

## Bài tập về nhà

Hoàn thành **AI News Bot nâng cao** (5 yêu cầu trong phần thực hành) **hoặc** tự tạo workflow theo nhu cầu công việc thực tế của cá nhân — sử dụng mô hình OIPO để thiết kế workflow trước khi viết code/prompt.

---

## Validation

- [ ] Học viên trình bày được định nghĩa Workflow và phân biệt với To-do list.
- [ ] OIPO đủ 4 phần (O-I-P-O), mỗi phần có nội dung cụ thể, đo lường được.
- [ ] Output có tiêu chí kiểm tra rõ ràng (định dạng, điểm đến, thời gian gửi).
- [ ] Phân biệt được 3 cấp độ Automation và nêu được ví dụ từng cấp.
- [ ] Bot gửi tin thành công vào Telegram group (có ảnh chụp kết quả).
- [ ] Trong lớp: token không lộ trên màn hình khi trình chiếu; BTVH: đã chuyển token sang `.env`.
- [ ] Có ít nhất một điểm rủi ro/sai lầm phổ biến được nhận diện và ghi lại.

---

## Tài liệu tham khảo
- Source PDF: `assets/source-materials/original/MindX_AG_Lesson 4.pdf`

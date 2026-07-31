# Session 09 — Kiểm Tra Chất Lượng Toàn Mạch & Hệ Thống Tự Phục Hồi

## Source
- `assets/source-materials/original/MindX_AG_Slide 9.pdf` (25 trang)

---

## Mục Tiêu Học Tập

Sau buổi học, học viên nắm được:

1. **Kỹ thuật triển khai Agent** — Phân tích dữ liệu Log để truy xuất nguyên nhân gốc rễ (Root Cause) và hoạch định Backlog xử lý sự cố có hệ thống.
2. **Tư duy gỡ lỗi** — Áp dụng tư duy "Quản trị lỗi" chủ động, thiết lập tiêu chuẩn kiểm soát rủi ro (thay vì phản ứng thụ động trước sự cố).
3. **AI Power & triển khai thực tế** — Thiết kế hệ thống Skills và Prompts tối ưu, cho phép AI Agent tự động chẩn đoán và tự phục hồi (Self-Heal) các sai lệch về dữ liệu và logic.

---

## Phần 1: Tư Duy Gỡ Lỗi

### Debugging là gì?

> **Pro Tip:** Debugging không phải là sửa lỗi — đó là việc thấu hiểu cách hệ thống vận hành trong điều kiện khắc nghiệt. Người giỏi debug là người hiểu hệ thống sâu nhất.

- **Thực tế:** Hệ thống phức tạp luôn phát sinh lỗi ngoài dự kiến — đặc biệt là các **Edge Cases** mà không ai lường trước được.
- **Ví dụ minh họa:** Code nhắc việc cho nhân viên chạy tốt cho 10 người đầu, nhưng đến người thứ 11 tên là `NULL` (họ Null) → hệ thống tưởng dữ liệu bị trống và dừng hoạt động.

### Tư duy Debugging — Đọc Log & Tìm điểm tắc nghẽn

| Kỹ thuật | Mô tả |
|---|---|
| **Xác định Bottleneck** | Điểm tắc nghẽn là nơi dữ liệu bị dừng lại hoặc bị biến đổi sai lệch trong luồng xử lý. |
| **Kỹ thuật Traceback** | Đọc ngược từ dòng lỗi cuối cùng lên trên để truy tìm nguồn gốc vấn đề theo chuỗi. |
| **Đặt câu hỏi đúng** | Với lỗi `FileNotFoundError`: File chưa có? Sai thư mục? Hay tên file bị gõ nhầm chữ hoa/thường? |

> **Ví dụ thực tế:** `FileNotFoundError: du_lieu.xlsx not found` — Đừng vội sửa ngay. Hãy hỏi: *Tại sao file không tìm thấy?* → Có 3 nguyên nhân khác nhau cần kiểm tra.

### Phân loại lỗi (4 cấp độ)

| Cấp độ | Mức độ | Ví dụ | Hành động |
|---|---|---|---|
| **1 — Fatal 💀** | Tử vong | `Memory Error`, `Database Connection Failed` | Hệ thống sập ngay lập tức. Ưu tiên xử lý tuyệt đối, không thể trì hoãn. |
| **2 — Major 🔴** | Nghiêm trọng | Logic Error trong tính tiền: giảm giá 50% nhưng code tính thành 500% | Thiệt hại tài chính trực tiếp. |
| **3 — Warning 🟡** | Cảnh báo | `Deprecation Warning` — thư viện Excel cũ sắp bị xóa | Nâng cấp sớm trước khi trở thành Fatal. |
| **4 — Edge Case 🔵** | Trường hợp biên | Nhập ngày sinh `30/02/2024` — ngày không tồn tại nhưng hệ thống vẫn chấp nhận | Cần validation dữ liệu đầu vào. |

### Quy trình xử lý lỗi D.A.H.V

```
Detect → Analyze → Heal → Validate
```

| Bước | Mô tả |
|---|---|
| **Detect** | Dashboard báo đỏ hoặc khách hàng phàn nàn. |
| **Analyze** | Tra cứu log, phát hiện dữ liệu sai định dạng. |
| **Heal** | Agent tự động sửa và chuẩn hóa dữ liệu. |
| **Validate** | Chạy lại báo cáo, kiểm tra kết quả. |

> **Ví dụ thực tế:** Nhân viên Marketing nhập ngân sách là `"1000 đô"` (dạng chữ) thay vì số `1000`. Agent phát hiện → đổi chữ "đô" thành số và nhân tỷ giá → chạy lại báo cáo để xác nhận tổng ngân sách đã khớp.

### Hệ thống Self-Healing

| Truyền thống ⏳ | Self-Healing ⚡ |
|---|---|
| 1. Lỗi xảy ra | 1. Lỗi xảy ra |
| 2. Người phát hiện và sửa thủ công | 2. Agent tự động phát hiện ngay lập tức |
| 3. Chạy lại — **Mất vài giờ** | 3. Agent sửa và chạy tiếp — **Mất vài giây** |

> **Ví dụ thực tế:** Một Bot tự động đổi mật khẩu khi phát hiện có dấu hiệu bị tấn công Brute-force — không cần con người can thiệp.

### Vai trò của Autonomous Agents

| Chức năng | Mô tả |
|---|---|
| **Nghe (Listen)** | Agent không chạy theo lịch cố định — chạy theo sự kiện **Event-driven**, luôn lắng nghe mọi thay đổi theo thời gian thực. |
| **Hiểu (Understand)** | Agent phân tích ngữ cảnh sự kiện, so sánh với tiêu chuẩn đã định nghĩa để xác định có phải lỗi cần xử lý hay không. |
| **Sửa (Fix)** | Agent theo dõi folder báo cáo, thấy file nào thiếu cột Email → tự tra cứu Database và điền bù vào trước khi gửi cho sếp. |

---

## Phần 2: Kỹ Thuật Triển Khai Agent

### Thiết kế Skill cho Agent

> Để Agent chữa lành, nó cần biết "Thế nào là Khỏe mạnh". **Skill chính là bộ tiêu chuẩn sức khỏe** mà Agent dựa vào để phán đoán và hành động.

Ví dụ quy tắc trong Skill:
- **Quy Tắc Tiền Tệ:** `"Mọi ngân sách phải là VND."` — Agent tự động quy đổi bất kỳ loại tiền tệ nào khác về VND theo tỷ giá hiện hành.
- **Quy Tắc Cảnh Báo Rủi Ro:** `"Nếu thấy ngân sách > 500 triệu, phải gắn tag [cần review]."` — Kích hoạt kiểm duyệt thủ công.

### Kỹ năng đặt lệnh (Prompting)

**❌ Prompt Tồi:**
```
"Sửa lỗi file Excel này cho tao với."
```
→ Agent không biết sửa gì, có thể sửa sai hoàn toàn và gây lỗi mới nghiêm trọng hơn.

**✅ Prompt Pro:**
```
"Dựa vào Error Log: ValueError: could not convert string to float: '1,000 USD',
hãy thực hiện Self-Healing:
  1. Đọc file marketing.xlsx.
  2. Tìm cột Budget, tách lấy phần số, nhân với tỷ giá 25.000 nếu thấy chữ USD.
  3. Cập nhật lại file và ghi vào nhật ký backlog.md theo định dạng:
     [Sửa lỗi Budget] Dòng X: 1,000 USD → 25,000,000 VND."
```

### Quản lý Backlog

Agent phải có sổ tay ghi chép — mọi hành động sửa chữa đều phải được ghi lại để kiểm tra, truy vết và cải thiện về sau.

| Thời gian | Sự cố | Hành động | Trạng thái |
|---|---|---|---|
| 23:15:05 | Sheet `Ke_hoach` bị đổi tên thành `Plan_2024` | Agent tự động nhận diện và kết nối lại thành công | ✅ Healed |
| 08:32:11 | Cột Budget chứa giá trị `"1,000 USD"` dạng chuỗi | Tách số, nhân tỷ giá 25.000, cập nhật file | ✅ Healed |
| 14:07:44 | File báo cáo thiếu cột Email của 3 nhân viên | Tra cứu Database, điền bù trước khi gửi | ✅ Healed |

### Tổng kết tư duy

> **"Hệ thống tự chữa lành không phải là phép màu — đó là sự kết hợp giữa logic chặt chẽ và sức mạnh của AI."**

- 🧠 **Tư Duy:** Lỗi không phải kẻ thù — lỗi là dữ liệu quý giá giúp hiểu hệ thống sâu hơn.
- 🔧 **Kỹ Thuật:** D.A.H.V + Backlog + Skill Design = Hệ thống vận hành không ngủ bên cạnh bạn.
- 🚀 **Hành Động:** Áp dụng tư duy Self-Healing vào file Excel quản lý chi tiêu cá nhân hoặc công việc hiện tại ngay hôm nay.

---

## Demo: Tự Phục Hồi Hệ Thống PM (5 bước)

**Tình huống:** Bot nhắc deadline hiện tại đang gây phiền hà cho nhân viên vì lỗi logic dữ liệu nghiêm trọng.

**Vấn đề:**
- Nhắc nhở sai đối tượng (người đã làm xong vẫn bị gọi tên).
- Không xử lý được deadline ghi kiểu ngôn ngữ tự nhiên (ví dụ: `"tuan sau"`, `"gap"`).

**Yêu cầu:** Thiết lập AI Agent sử dụng Skill để:
1. Khớp dữ liệu giữa 2 sheet `Kế hoạch` & `Tiến độ` để lọc bỏ task Done.
2. Chuyển đổi toàn bộ deadline chữ sang định dạng ngày tháng chuẩn ISO 8601 (`YYYY-MM-DD`).
3. Lưu kết quả trực tiếp vào Excel và ghi nhật ký vào `backlog.md`.

---

### Bước 1: Chuẩn bị "Hiện trường" (SETUP)

Tạo một thư mục mới với 2 file chính:

**📊 File Dữ Liệu: `du_lieu_du_an.xlsx`**
- Cột Deadline ghi: `"tuan sau"`, `"gap"`, `"ngay mai"` thay vì ngày chuẩn.
- Task đã Done nhưng vẫn nằm trong danh sách nhắc nhở.
- Dữ liệu không nhất quán giữa sheet `Kế hoạch` và `Tiến độ`.

**🐍 File Code Bị Lỗi: `broken_api.py`**
- Chỉ đọc sheet `Ke_hoach`, bỏ qua sheet `Tiến độ`.
- Nhắc tất cả mọi người, kể cả người đã xong việc.
- Không xử lý hay chuẩn hóa ngày tháng.

```python
@app.get("/auto-remind")
def auto_remind():
    df_tasks = pd.read_excel(
        FILE_PATH,
        sheet_name='Ke_hoach'
    )
    reminders = []
    for index, row in df_tasks.iterrows():
        msg = f"..."  # nhắc tất cả, không lọc Done
```

---

### Bước 2: Chẩn đoán lỗi (DIAGNOSTIC)

- Mở trình duyệt → chạy `broken_api.py` → quan sát nhắc nhở sai.
- Học viên sẽ thấy các triệu chứng rõ ràng của **lỗi logic kinh doanh** — loại lỗi nguy hiểm nhất vì không có thông báo đỏ.

**Câu hỏi thảo luận quan trọng:**  
*"Tại sao code không báo lỗi đỏ nhưng hệ thống vẫn bị coi là hỏng?"*

**Trả lời:** Đây là **Business Logic Error** — code chạy đúng về mặt kỹ thuật nhưng sai về mặt nghiệp vụ. Bot nhắc nhở người đã hoàn thành công việc và hiển thị ngày tháng vô nghĩa như `"tuan sau"`, `"gap"`.

---

### Bước 3: Xây dựng bộ luật (SKILL MODELING)

Thay vì sửa trực tiếp `broken_api.py`, tạo file quy tắc cho Agent: **`Self_Healing_Skill.md`**

| Quy tắc | Nội dung |
|---|---|
| **Quy tắc 1: Lọc tiến độ** | Phải khớp `Task_ID` và BỎ QUA các task có trạng thái `'Done'`. Không được nhắc nhở những người đã hoàn thành. |
| **Quy tắc 2: Chuẩn hóa ngày** | `"tuan sau"` → ngày thứ Hai tuần tới | `"gap"` → ngày hôm nay | `"ngay mai"` → ngày mai (định dạng ISO 8601 `YYYY-MM-DD`). |
| **Quy tắc 3: Ghi nhật ký** | Ghi mọi hành động sửa chữa vào `backlog.md`. Ví dụ: `"Đã chuẩn hóa ngày 'tuan sau' thành 2026-06-16"`. |

> **Vì sao ISO 8601?** Định dạng DD/MM rất dễ bị nhầm với MM/DD khi bàn giao dữ liệu giữa các agent/hệ thống — `YYYY-MM-DD` không mơ hồ và sort được theo chuỗi (khớp chuẩn dùng ở guide Buổi 9 và hệ thống Buổi 11).

---

### Bước 4: Thực thi chữa lành (THE HEALING)

Sử dụng prompt sau để tạo Agent Python hoàn toàn mới:

```
"Dựa vào file dữ liệu @[du_lieu_du_an.xlsx] và quy tắc trong @[Self_Healing_Skill.md],
hãy viết một Agent Python mới hoàn toàn để thay thế hệ thống cũ.
Agent này phải tự động lọc task, chuẩn hóa ngày và lưu thẳng vào Excel."
```

**📁 Kết quả mong đợi — `healed_agent.py`:**
- Đọc Excel thông minh, nhận biết cả 2 sheet.
- Tự xử lý ngôn ngữ tự nhiên (`"tuan sau"` → ngày thật).
- Lọc bỏ task đã Done trước khi nhắc nhở.
- Ghi nhật ký sửa chữa chi tiết vào `backlog.md`.

**🔄 Luồng xử lý Agent:**

```
01 Đọc dữ liệu    → Load cả 2 sheet: Kế hoạch & Tiến độ
02 Khớp & Lọc    → Join theo Task_ID, loại bỏ task Done
03 Chuẩn hóa     → Chuyển đổi ngày tự nhiên sang ISO 8601 (YYYY-MM-DD)
04 Lưu & Ghi log → Xuất Excel sạch + ghi backlog.md
```

---

### Bước 5: Thử thách nâng cao (STRESS TEST)

Cố tình phá vỡ môi trường để kiểm tra khả năng thích nghi của Agent:

| Thử thách | Mô tả |
|---|---|
| **Đổi tên sheet** | Đổi tên sheet trong Excel thành tên khác hoàn toàn. Agent có tự tìm được sheet đúng không? |
| **Xóa cột dữ liệu** | Xóa bớt một vài cột quan trọng. Agent có xử lý được trường hợp thiếu dữ liệu không? |
| **Chạy & quan sát** | Chạy Agent và xem nó có tự phát hiện, thích nghi và vượt qua các lỗi bất ngờ này không. |

> 💡 **Mục tiêu học tập:** Một hệ thống Self-Healing thực sự không chỉ sửa lỗi đã biết — nó phải có khả năng **thích nghi với môi trường thay đổi** và tự tìm ra giải pháp cho các tình huống chưa từng gặp.

---

## Thực Hành: AI Agent Tự Phục Hồi Chiến Dịch Quảng Cáo

**📢 Bối cảnh:**  
Bộ phận Marketing quản lý hàng chục chiến dịch trên Facebook, Google và TikTok qua file `marketing_campaigns.xlsx`. Do nhiều nhân sự cùng nhập liệu, file đang gặp các vấn đề nghiêm trọng:

| Vấn đề | Mô tả |
|---|---|
| 💰 **Loạn tiền tệ** | Có chiến dịch ghi USD, có cái ghi VND, có cái chỉ ghi số `500` không biết tiền gì. |
| ⚠️ **Sai lệch trạng thái** | Chiến dịch ghi `Active` nhưng ngân sách lại để bằng `0` — không thể giải ngân. |
| 📅 **Lịch trình mơ hồ** | Ngày chạy ghi kiểu: `"Sau lễ 2/9"`, `"Tháng sau"`, `"Cuối tuần này"` — kế toán không thể xử lý. |

**Yêu cầu từ Giám đốc Marketing:**  
> *"Tôi muốn một báo cáo sạch, tất cả phải quy về VND, ngày tháng phải chính xác để kế toán giải ngân."*

---

### Nhiệm vụ chi tiết: Marketing Healer

**Nhiệm vụ 1: Tự tạo dữ liệu giả định & Skill "Marketing Healer"**
- Tạo file dữ liệu giả định 500 dòng, 10 cột: `marketing_campaigns.xlsx` (có lỗi như đề bài).
- Tạo file Skill: `Marketing_Healing_Skill.md` với các quy tắc:
  - **Quy đổi tiền tệ:** `USD × 25.000 = VND`. Thiếu đơn vị → mặc định VND.
  - **Kiểm tra logic ngân sách:** `Active + ngân sách = 0` → đổi sang `Paused` + ghi cảnh báo.
  - **Giải mã lịch trình:** `"Tháng sau"` = Ngày 1 tháng kế tiếp; `"Tuần tới"` = Thứ Hai tuần sau.

**Nhiệm vụ 2: Marketing SRE Agent**

Viết script Python để:
- Tự động quét file Excel Marketing.
- Phát hiện chiến dịch ngân sách bất thường (`> 1 tỷ VND`) → ghi nhật ký kiểm toán.
- Lưu file Excel đã được "chữa lành" hoàn toàn.

**Nhiệm vụ 3: Stress Test "Dữ Liệu Bẩn"**
- Thêm kênh lạ: `Tele-Sale` (hệ thống chưa biết).
- Xóa cột `Campaign_ID`.
- Agent phải tự gắn ID mới (Auto-increment) và ghi chú phát hiện kênh mới.

**Kết quả mong đợi trong `backlog.md`:**
```
"Đã quy đổi 100 USD thành 2.500.000 VND"
"Đã sửa ngày 'Tháng sau' thành 2026-06-01"
"Phát hiện kênh mới Tele-Sale - Đã đưa vào danh mục theo dõi"
```

---

## Artifact (Sản phẩm buổi học)

| File | Mô tả |
|---|---|
| `Self_Healing_Skill.md` | Bộ quy tắc Skill cho Agent PM. |
| `healed_agent.py` | Agent Python đã chữa lành hệ thống nhắc deadline. |
| `backlog.md` | Nhật ký toàn bộ hành động sửa chữa (timestamp + sự cố + hành động + trạng thái). |
| `marketing_campaigns.xlsx` | File dữ liệu Marketing (bản gốc lỗi + bản đã healed). |
| `Marketing_Healing_Skill.md` | Bộ quy tắc Skill cho Agent Marketing. |

---

## Bài Tập Về Nhà

Tự debug lại các file dữ liệu hiện có trong công việc hiện tại:
- Xác định loại lỗi (Fatal / Major / Warning / Edge Case).
- Áp dụng quy trình D.A.H.V.
- Viết Skill quy tắc và Agent tự phục hồi đơn giản.
- Ghi backlog theo mẫu đã học.

---

## Validation (Checklist kiểm tra)

- [ ] Có file `backlog.md` với ít nhất 3 mục nhật ký — mỗi mục có timestamp + sự cố + hành động + trạng thái.
- [ ] Mỗi lỗi được phân loại đúng cấp độ (Fatal / Major / Warning / Edge Case) và có root cause rõ ràng.
- [ ] `healed_agent.py` chạy được, xử lý đúng cả 2 sheet (Kế hoạch & Tiến độ).
- [ ] Ngôn ngữ tự nhiên trong cột Deadline được chuyển đổi đúng sang ISO 8601 (`YYYY-MM-DD`).
- [ ] Task có trạng thái `Done` không xuất hiện trong danh sách nhắc nhở.
- [ ] Có ít nhất một lần chạy Stress Test và ghi lại kết quả.
- [ ] Prompt sử dụng đúng cấu trúc Prompt Pro (có Error Log + bước cụ thể + định dạng output).

---

## Yêu cầu kỹ thuật

- Python (pandas, openpyxl, FastAPI hoặc tương đương).
- File Excel với ít nhất 2 sheet.
- Markdown file cho Skill và Backlog.
- AI Agent được khởi tạo bằng Prompt Pro theo cấu trúc Self-Healing.

---

## Tài liệu tham khảo

- [Facilitator Guide](../instructor/facilitator-guide.md)
- [Course Curriculum Map](../course-curriculum-map.md)
- [Assessment Rubric](../../docs/assessment/assessment-rubric.md)

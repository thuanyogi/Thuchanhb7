# Session 06 — Hướng Dẫn Giảng Dạy Chi Tiết
## Thiết lập tri thức nội bộ và quy tắc vận hành cho AI

> **Version:** 1.0 · **Verified from:** `assets/source-materials/derived/session-06-raw-extract.txt`  
> **Dành cho:** Giảng viên · Không chia sẻ trực tiếp cho học viên  
> **Buổi:** 6 / 11 · Phase 2 — Modify

---

## 📋 Tổng quan nhanh

| Mục | Nội dung |
|-----|----------|
| **Chủ đề** | RAG + Khung CLEAR + BI Dashboard thời gian thực |
| **Thời lượng** | 3 giờ |
| **Artifact đầu ra** | `Design_Mentor_Skill.md` + `dashboard.html` (ZIP có pass) |
| **Công cụ cần** | Google Antigravity, Python 3.x, trình duyệt Chrome/Edge |
| **Điểm nhấn giảng dạy** | Before/After RAG demo — học viên tự chứng kiến sự khác biệt |

---

## 🎯 Mục tiêu học tập (3 mục tiêu từ slide)

1. **Khung CLEAR** — Áp dụng để thiết kế câu lệnh, trích xuất báo cáo đạt yêu cầu từ AI
2. **RAG** — Giải thích cơ chế, chứng minh vai trò dữ liệu nội bộ trong việc đảm bảo độ chính xác
3. **BI Dashboard** — Xây dựng hoàn chỉnh Dashboard BI bằng AI, thay thế quy trình thủ công

---

## ⚠️ PHẦN HỌC VIÊN PHẢI CHUẨN BỊ (TRỌNG TÂM)

> **Đây là phần giảng viên cần nhấn mạnh nhất. Nếu học viên không chuẩn bị đúng → buổi học thực hành không thể tiến hành.**

### 1. Phần mềm bắt buộc cài sẵn trước buổi học

| STT | Phần mềm | Mục đích | Link tải | Ghi chú |
|-----|----------|----------|----------|---------|
| 1 | **Python 3.10+** | Chạy local web server | python.org | Kiểm tra: `python --version` |
| 2 | **pip packages** | Thư viện Flask, pandas, openpyxl | Terminal: `pip install flask pandas openpyxl` | Cài trước tránh mạng chậm trong lớp |
| 3 | **WinRAR / 7-Zip** | Nén file có mật khẩu | winrar.com / 7-zip.org | Bắt buộc để nộp bài |
| 4 | **Google Antigravity** | Tạo Dashboard bằng AI | Đã có từ buổi 1 | Kiểm tra tài khoản còn hoạt động |
| 5 | **Trình duyệt Chrome/Edge** | Xem Dashboard | Đã có sẵn | Không dùng Safari |

**Cách kiểm tra Python:** Mở Terminal/CMD → gõ `python --version` → phải hiện `Python 3.x.x`

**Cách cài pip packages một lần:**
```bash
pip install flask pandas openpyxl
```

---

### 2. File dữ liệu cần chuẩn bị

> **Giảng viên cần gửi cho học viên ít nhất 1 ngày trước buổi học:**

#### Cho phần Demo (giảng viên dùng):
| File | Mô tả | Nơi lấy |
|------|-------|---------|
| `sales_data.xlsx` | Dữ liệu bán hàng Công ty Alpha (demo) | Giảng viên cung cấp |
| `brand_guideline.txt` | Quy định màu thương hiệu Alpha Corp | Giảng viên cung cấp |

#### Cho phần Thực hành (học viên tự làm):
| File | Mô tả | Nơi lấy |
|------|-------|---------|
| `ngan_sach_phong_ban.xlsx` | Dữ liệu ngân sách Công ty Beta Solutions | Giảng viên cung cấp |
| `brand_guideline_beta.txt` | Quy chuẩn thương hiệu Beta Solutions | Giảng viên cung cấp |

> **⚠️ Lưu ý:** Hai file `brand_guideline.txt` PHẢI chứa đúng mã màu để học viên kiểm chứng Before/After. Tạo sẵn nội dung file như sau:

**`brand_guideline.txt` (Alpha Corp):**
```
ALPHA CORP BRAND GUIDELINE
- Doanh thu: Màu Xanh Navy #1E3A8A
- Chi phí: Màu Đỏ San Hô #EF4444
- Font: Arial, font-size: 14px
- Tất cả số liệu: định dạng VNĐ, phân cách hàng nghìn bằng dấu chấm
```

**`brand_guideline_beta.txt` (Beta Solutions):**
```
BETA SOLUTIONS BRAND GUIDELINE
- Ngân sách: Màu Tím Hoàng Gia #7C3AED
- Chi tiêu: Màu Xanh Ngọc #06B6D4
- Vượt ngân sách: Màu Hồng San Hô #F43F5E
- Font: Roboto, font-size: 13px
- Format số: Triệu/Tỷ VNĐ
```

---

### 3. Checklist học viên tự kiểm tra TRƯỚC buổi học

Gửi danh sách này cho học viên qua Group/Zalo:

```
✅ CHECKLIST CHUẨN BỊ BUỔI 6 — Gửi về group trước 9h tối hôm trước

□ Python 3.x đã cài → kiểm tra: python --version
□ Flask, pandas, openpyxl đã cài → kiểm tra: pip list | grep flask
□ WinRAR hoặc 7-Zip đã cài
□ Đã tải đủ 4 file: sales_data.xlsx, brand_guideline.txt, 
       ngan_sach_phong_ban.xlsx, brand_guideline_beta.txt
□ Google Antigravity hoạt động (thử đăng nhập)
□ Máy tính có ít nhất 4GB RAM trống
□ Pin laptop đầy đủ hoặc có cắm điện
```

---

### 4. Không gian làm việc học viên cần chuẩn bị

Học viên tạo sẵn thư mục:
```
Desktop/
└── BuoiHoc6/
    ├── sales_data.xlsx
    ├── brand_guideline.txt
    ├── ngan_sach_phong_ban.xlsx
    └── brand_guideline_beta.txt
```

> Giảng viên nhắc: Không để file trong OneDrive/Google Drive sync đang chạy → Python có thể đọc nhầm phiên bản cũ.

---

## 🧯 Backup Plan (giảng viên chuẩn bị)

- Antigravity lỗi / mạng chậm: giảng viên **phát sẵn file `dashboard.html` mẫu** đã chạy được — học viên vẫn làm bài Before/After và tự sửa màu theo brand guideline Beta.
- Artifact tối thiểu chấp nhận được: **dashboard 3 KPI đúng màu brand, không cần nút lọc** — nút lọc chuyển thành BTVH.
- Python/pip không cài được trên máy học viên: học viên chỉ nộp bản HTML tĩnh (giảng viên demo phần polling live trên máy mình).

---

## 🕐 Cấu trúc buổi học 3 giờ

| Thời gian | Khối | Nội dung | Ghi chú giảng viên |
|-----------|------|----------|--------------------|
| 0 – 10' | **Khai mạc** | Recap buổi 5, kiểm tra Python/pip, chạy thử `flask --version` | **Kiểm tra ngay đầu giờ** — nếu ai thiếu thì dùng thời gian này cài |
| 10 – 30' | **Phần 1: RAG** | Vấn đề thực tế → Định nghĩa RAG → 2 ví dụ (Brand + HR) | Hook bằng câu hỏi: "Bạn mất bao giờ làm báo cáo mỗi tuần?" |
| 30 – 55' | **Phần 2: CLEAR** | 5 thành phần C-L-E-A-R → Prompt mẫu Alpha Corp | Viết CLEAR lên bảng, học viên ghi lại |
| 55 – 80' | **Demo Live** | 5 bước demo — Alpha Corp Dashboard | Học viên theo dõi, ghi nhớ quy trình |
| 80 – 90' | **Break + Checkpoint** | 3 câu checkpoint nhanh | Học viên tự ghi ra giấy |
| 90 – 165' | **Thực hành** | Before/After → Beta Dashboard → Nộp file | Đây là phần CỐT LÕI — 75 phút thực chiến |
| 165 – 180' | **Review + BTVH** | Checklist nghiệm thu, giao bài về nhà | Chiếu checklist lên màn hình |

---

## 📖 Phần 1: RAG — Tri Thức Nội Bộ (20 phút)

### Mở bài — Hook (5 phút)

**Câu hỏi mở cho học viên:**
> "Tuần trước, bạn mất bao nhiêu giờ làm báo cáo? Và có bao nhiêu phần trăm trong đó là copy-paste?"

Đợi 2-3 học viên trả lời → dẫn vào 3 vấn đề quản lý từ slide.

**3 vấn đề phổ biến (từ slide):**

| Vấn đề | Kịch bản thực tế |
|--------|-----------------|
| 🔴 **Khủng hoảng phút chót** | Sát giờ họp giao ban → số liệu Excel không khớp → rà soát từng ô thủ công |
| 🟡 **Lãng phí nguồn lực** | 3–4 tiếng/tuần chỉ để copy/paste, căn chỉnh biểu đồ, làm slide từ đầu |
| 🟠 **Thiếu đồng bộ** | Mỗi người nộp một format khác nhau → sai màu, sai tiêu chuẩn |

**Hậu quả:** Lãng phí thời gian, quyết định chậm, khó kiểm soát chất lượng.

---

### Giải thích RAG (10 phút)

**Vấn đề khi dùng AI chung chung:**

> *"Nếu bạn chỉ nạp data và nói 'Vẽ cho tôi cái biểu đồ' — điều gì xảy ra?"*

- AI vẽ màu **ngẫu nhiên** (xanh, đỏ, tím, vàng) → vi phạm Brand Guideline
- AI không biết quy tắc nội bộ của công ty

**Định nghĩa RAG (từ slide):**

> RAG = **"Hệ thống tri thức nội bộ"** cho AI.  
> Thay vì AI dùng kiến thức chung từ internet → RAG cho phép AI truy cập trực tiếp **kho tài liệu riêng của công ty** (quy trình, báo cáo, chính sách).

**Luồng hoạt động:**
```
Nạp tài liệu nội bộ → AI rà soát và đối chiếu → Xử lý và trả lời theo luật
```

**Ví dụ minh họa (2 ví dụ từ slide):**

*Ví dụ 1 — Brand Guideline:*
- Input: Nạp bộ quy chuẩn thương hiệu vào AI
- Output: Khi làm báo cáo → AI tự động vẽ Doanh thu màu Xanh, Chi phí màu Đỏ — **không cần nhắc lại mỗi lần**

*Ví dụ 2 — Chính sách nhân sự:*
- Input: Nạp quy chế lương thưởng, sổ tay nhân sự
- Output: Nhân viên hỏi về nghỉ phép → AI trích xuất theo đúng tài liệu được nạp — **giảm mạnh sai sót, câu trả lời bám vào tài liệu nội bộ; vẫn cần kiểm chứng với quyết định quan trọng**

> Vì RAG không tuyệt đối → buổi 7 chúng ta học Human Checkpoint.

> [!NOTE]
> **Kiến thức nền cho giảng viên (trả lời câu "công ty em có 5.000 tài liệu thì sao?"):**
> - Kéo-thả vài file vào chat như hôm nay thực chất là **context-stuffing** — nhét toàn bộ tài liệu vào context của AI. Cách này chỉ chạy tốt với ít tài liệu, vì **context window có giới hạn**.
> - **RAG đúng nghĩa** = 3 bước: **index/embedding** tài liệu → **retrieval** (truy xuất đúng đoạn liên quan đến câu hỏi) → **generation** (AI trả lời dựa trên đoạn đã truy xuất).
> - Khi kho tài liệu lớn (hàng trăm — hàng nghìn file) → cần **vector database** để index và truy xuất, không thể nạp thẳng vào chat. Với quy mô buổi học (2–3 file) thì kéo-thả là đủ và đúng mục tiêu sư phạm.

**Câu hỏi kiểm tra hiểu bài:**
> "Sự khác biệt giữa AI chung (ChatGPT) và AI có RAG là gì?"  
> → Trả lời đúng: AI có RAG biết luật riêng của công ty bạn.

---

## 📖 Phần 2: Khung CLEAR (25 phút)

### Giới thiệu CLEAR (10 phút)

> *"RAG giúp AI có 'Tri thức'. Nhưng để AI làm ĐÚNG, ta cần ra lệnh chuẩn theo khung CLEAR."*

**Bảng CLEAR đầy đủ (từ slide):**

| Chữ | Tên | Câu hỏi cốt lõi | Cách viết |
|-----|-----|----------------|-----------|
| **C** | Context | Bạn là ai? | Gắn cho AI chức danh chuyên gia + bối cảnh cụ thể → AI dùng đúng tông giọng |
| **L** | Logic | Dữ liệu tính theo luật nào? | Chỉ rõ cách lọc, nhóm hoặc cộng/trừ/nhân/chia số liệu |
| **E** | Expectations | Kết quả trông ra sao? | Miêu tả chính xác "giao diện" và định dạng → không phải sửa lại |
| **A** | Action | Việc cốt lõi AI phải làm là gì? | Dùng động từ mạnh, trực diện, giao 1 nhiệm vụ cụ thể |
| **R** | Restrictions | AI KHÔNG ĐƯỢC làm gì? | Đặt quy tắc cấm → chặn AI tự suy diễn, lan man, sai chuẩn |

**Mẹo giảng dạy CLEAR:**
- Viết tắt CLEAR lên bảng → học viên đọc lại từng chữ
- Yêu cầu học viên liên hệ với MICRO từ buổi 5: "MICRO là JD nhân sự, CLEAR là cách ra lệnh cho họ"
- Nhấn mạnh **Restrictions (R)** — đây là thành phần hay bị bỏ qua nhất, và cũng gây ra lỗi nhiều nhất

---

### Prompt mẫu CLEAR — Alpha Corp (15 phút)

**Chiếu prompt lên màn hình, giải thích từng phần:**

```
[C - Context]
Bạn là Fullstack AI Engineer và Data Analyst của Công ty TNHH Alpha.

[L - Logic]
Xây dựng một Web Dashboard (Single Page) đọc dữ liệu từ file sales_data.xlsx.
Dashboard tự động lấy dữ liệu (polling) mỗi 2 giây để cập nhật biểu đồ và các KPI
(Tổng doanh thu, Tổng chi phí, Lợi nhuận, Số đơn hàng).

[E - Expectations]
Giao diện thiết kế phong cách Glassmorphism (hiệu ứng kính mờ), nền tối (Dark mode) sang trọng.
Gồm: 4 thẻ KPI, 1 biểu đồ cột (Doanh thu vs Chi phí), 1 biểu đồ tròn (Khu vực),
1 biểu đồ đường (Lợi nhuận) và 1 bảng Top Danh mục.
Toàn bộ nội dung hiển thị tiếng Việt có dấu.

[A - Action]
Viết code Python tạo local web server (port 9090) phục vụ API và file dashboard.html.
Tự động thực thi và mở trình duyệt.

[R - Restrictions]
TUYỆT ĐỐI tuân thủ brand_guideline.txt:
Doanh thu dùng màu Xanh Navy (#1E3A8A), Chi phí dùng màu Đỏ San hô (#EF4444).
```

**Giải thích từng phần:**
- **C:** Chức danh cụ thể → AI hiểu mình là ai, viết code ở cấp độ nào
- **L:** "Polling 2 giây" → đây là logic kỹ thuật cốt lõi → Real-time
- **E:** "Glassmorphism + Dark Mode" → từ khóa này AI hiểu style thiết kế
- **A:** "Viết code Python + tự động mở trình duyệt" → 1 lệnh cụ thể, rõ ràng
- **R:** "TUYỆT ĐỐI tuân thủ brand_guideline.txt" → từ khóa mạnh → AI không được tự sáng tạo màu

---

## 🎬 Demo Live: 5 Bước Alpha Corp Dashboard (25 phút)

> ⚠️ Refresh note: hành vi/UI Antigravity có thể thay đổi theo phiên bản — đối chiếu https://antigravity.google/docs và chạy thử demo trước buổi dạy.

> **Giảng viên thực hiện live. Học viên quan sát, KHÔNG làm theo ở bước này.**

### Bước 1: Khởi Tạo Kỹ Năng (Skill — Design Mentor)

**Mục tiêu:** Tạo file `Design_Mentor_Skill.md` — bộ tiêu chuẩn thiết kế.

**Prompt gửi cho AI:**
> "Hãy tạo file Design_Mentor_Skill.md là bộ tiêu chuẩn thiết kế Dashboard hiện đại, bao gồm: Glassmorphism, Dark Mode, KPI layout, phối màu tương phản và hiệu ứng nhảy số Real-time."

**Giảng viên nói:** *"Đây là bước tạo 'Skill' — file .md này sẽ là bộ não chuyên môn về thiết kế mà ta nạp vào AI ở bước sau."*

---

### Bước 2: Nạp Tri Thức (RAG) & Kỹ Năng (Skill)

**Mục tiêu:** Nạp đủ 3 file vào chat mới.

**Thực hiện:**
1. Mở New Chat trong Google Antigravity
2. Kéo thả vào khung chat:
   - `Design_Mentor_Skill.md` (vừa tạo ở bước 1)
   - `sales_data.xlsx` (dữ liệu bán hàng)
   - `brand_guideline.txt` (quy định màu Alpha Corp)

**Giảng viên nói:** *"3 file này = Skill (thiết kế) + Data (số liệu) + Brand (luật màu). AI sẽ đọc cả 3 trước khi làm việc."*

---

### Bước 3: Sử Dụng Prompt CLEAR

**Thực hiện:** Copy & Paste prompt chuẩn CLEAR đã chuẩn bị → gửi.

**Giảng viên nói:** *"Xem cách AI đọc từng phần CLEAR và tự viết toàn bộ code Dashboard."*

**Điểm chờ cho học viên thấy:** AI generate code Python + HTML cùng lúc → không cần tự code.

---

### Bước 4: Trình Diễn "Phép Thuật" Auto-Update ⭐

> Đây là khoảnh khắc WOW nhất — học viên sẽ nhớ cả đời.

**Thực hiện:**
1. Chia đôi màn hình: bên trái `sales_data.xlsx`, bên phải Dashboard đang chạy ở `localhost:9090`
2. Thay đổi một con số Doanh Thu trong Excel → nhấn `Ctrl+S`
3. **Đếm to "1... 2..."** → biểu đồ Dashboard tự động vọt lên mà không cần reload trang

**Giảng viên nói:** *"Đây là real-time polling. AI đã viết code tự đọc file Excel mỗi 2 giây. Quản lý ngồi trong cuộc họp, ai cập nhật Excel → màn hình chiếu tự cập nhật ngay."*

---

### Bước 5: Đóng Gói & Chia Sẻ An Toàn

**Thực hiện:**
1. Yêu cầu AI viết script `export_dashboard.py` → xuất file HTML tĩnh (không cần Python server)
2. Nén bằng WinRAR/7-Zip → đặt mật khẩu tùy chọn
3. Gửi qua Group chat → mở bằng mật khẩu

**Giảng viên nói:** *"File HTML tĩnh = dashboard chạy được bằng cách double-click, không cần Python. An toàn vì nén có mật khẩu."*

---

## ⏸️ Break + Checkpoint (10 phút)

**3 câu checkpoint — học viên tự ghi ra giấy:**

1. RAG là gì? Tại sao cần nạp brand_guideline.txt?
2. CLEAR có mấy thành phần? Kể tên.
3. Polling mỗi 2 giây nghĩa là gì?

**Trả lời chuẩn:** (giảng viên công bố sau break)
1. RAG = tri thức nội bộ → AI bám vào luật của công ty, giảm mạnh việc tự sáng tạo màu sắc sai (không tuyệt đối — vẫn cần kiểm chứng)
2. CLEAR = 5 thành phần: Context, Logic, Expectations, Action, Restrictions
3. Python đọc file Excel mỗi 2 giây → tự động cập nhật biểu đồ không cần F5

---

> [!IMPORTANT]
> **HƯỚNG DẪN DẠY VỚI 1 WORKSPACE XUYÊN SUỐT (BRIDGE LAYER):**
> Nhằm giữ nguyên nội dung Slide chính thức của MindX nhưng vẫn tối ưu hóa hiệu quả tích lũy năng lực của học viên, Giảng viên hướng dẫn lớp thực hành buổi này **trực tiếp bên trong workspace duy nhất của học viên** (`my-workspace` đã setup ở Buổi 1-5).
> - **Cách tổ chức file:** Học viên xây dựng knowledge base cá nhân tại `knowledge-base/` trong `my-workspace/` — đây là thư mục sẽ tích lũy xuyên suốt khóa học.
> - **Cá nhân hóa (Khuyến nghị):** Đối với học viên muốn nạp tri thức thật của doanh nghiệp họ (không phải Beta Solutions), khuyến khích họ mở file [session-06-bridge.md](plans/260710-workspace-bridge/bridge-guides/session-06-bridge.md) để map kịch bản RAG + CLEAR sang tài liệu nội bộ thực tế và xây dựng `knowledge-base/` trong workspace cá nhân.

## 🛠️ Phần Thực Hành: Beta Solutions Dashboard (75 phút)

### Bước 0 bắt buộc — Before/After RAG & Skill (15 phút)

> **Phải làm bước này TRƯỚC khi làm bài chính. Đây là bằng chứng sống về sức mạnh RAG.**

**BEFORE — Không có tri thức:**
1. Mở New Chat **mới** (không nạp file gì)
2. Chỉ nạp `ngan_sach_phong_ban.xlsx`
3. Prompt: *"Vẽ cho tôi dashboard từ file này"*
4. **Quan sát:** AI dùng màu ngẫu nhiên, số tiền không format chuẩn VNĐ, dashboard trông generic

**AFTER — Có đầy đủ tri thức:**
1. Mở New Chat **mới**
2. Nạp đủ 3 file: `ngan_sach_phong_ban.xlsx` + `brand_guideline_beta.txt` + `Design_Mentor_Skill.md`
3. Dùng prompt CLEAR đầy đủ cho Beta Solutions
4. **Quan sát:** Biểu đồ đúng màu Tím `#7C3AED`, Xanh Ngọc `#06B6D4`, format số chuẩn, dashboard chuyên nghiệp

**Kết luận cho học viên:** *"Quá trình này chứng minh AI có thể học và làm theo nội quy doanh nghiệp (RAG) + kỹ năng chuyên môn (Skill) = sản phẩm tùy biến, không rập khuôn."*

---

### Đề bài thực hành chính (60 phút)

**Chủ đề:** Xây dựng Dashboard Quản lý Ngân sách — Công ty Beta Solutions  
**Vai trò học viên:** Trưởng phòng Tài chính kiêm Fullstack Developer

#### File đầu vào:
- `ngan_sach_phong_ban.xlsx`
- `brand_guideline_beta.txt`
- `Design_Mentor_Skill.md` (tạo từ demo)

#### Yêu cầu kỹ thuật:
- **Giao diện:** Web Dashboard nền tối, chuyên nghiệp
- **3 thẻ KPI:** Tổng ngân sách, Tổng chi tiêu, Giao dịch vượt NS
- **Biểu đồ cột ghép:** Ngân sách vs Chi tiêu theo phòng ban
- **Biểu đồ tròn:** Tỷ trọng chi tiêu theo phòng ban
- **Tính năng tương tác:** Nút bấm Lọc theo Quý (Q1/Q2/Q3/Q4) + Lọc theo Phòng ban → cập nhật ngay lập tức
- **Real-time:** Tự động làm mới mỗi 2 giây khi file Excel thay đổi

#### Ràng buộc màu sắc (BẮT BUỘC — kiểm tra kỹ khi nghiệm thu):
| Loại | Màu | Mã hex |
|------|-----|--------|
| Ngân sách | Tím Hoàng Gia | `#7C3AED` |
| Chi tiêu | Xanh Ngọc | `#06B6D4` |
| Vượt ngân sách | Hồng San Hô | `#F43F5E` |

#### Sản phẩm nộp bài:
```
BetaDashboard_[TenHocVien].zip
├── dashboard.html      (chạy được double-click)
└── (mật khẩu ZIP: tùy chọn, ghi lên bài nộp)
```

#### Prompt CLEAR gợi ý cho học viên Beta:
```
[C - Context]
Bạn là Fullstack AI Engineer và Data Analyst của Công ty Beta Solutions.

[L - Logic]
Xây dựng Web Dashboard (Single Page) đọc file ngan_sach_phong_ban.xlsx.
Dashboard polling mỗi 2 giây để cập nhật KPI (Tổng ngân sách, Tổng chi tiêu,
Giao dịch vượt NS) và các biểu đồ.

[E - Expectations]
Giao diện nền tối chuyên nghiệp. Gồm: 3 thẻ KPI, 1 biểu đồ cột ghép
(Ngân sách vs Chi tiêu), 1 biểu đồ tròn (Tỷ trọng phòng ban).
Có nút bấm lọc theo Quý (Q1/Q2/Q3/Q4) và lọc theo Phòng ban.
Format số tiền theo đơn vị Triệu/Tỷ VNĐ. Tiếng Việt có dấu.

[A - Action]
Viết code Python tạo local web server port 9090, tự động mở trình duyệt.
Sau đó viết thêm script export_dashboard.py xuất file HTML tĩnh.

[R - Restrictions]
TUYỆT ĐỐI tuân thủ brand_guideline_beta.txt:
Ngân sách #7C3AED, Chi tiêu #06B6D4, Vượt ngân sách #F43F5E.
KHÔNG dùng màu sắc khác ngoài quy định.
```

---

## ✅ Checklist Nghiệm Thu (7 tiêu chí)

| # | Tiêu chí | Cách kiểm tra |
|---|----------|---------------|
| 1 | Dashboard chạy được bằng double-click file HTML | Mở file → xem được không cần Python |
| 2 | 3 thẻ KPI hiển thị đúng số liệu | So sánh với Excel gốc |
| 3 | Màu Ngân sách đúng Tím `#7C3AED` | Inspect element hoặc xem trực quan |
| 4 | Màu Chi tiêu đúng Xanh Ngọc `#06B6D4` | Inspect element hoặc xem trực quan |
| 5 | Nút lọc Quý hoạt động → biểu đồ cập nhật ngay | Click thử Q1/Q2/Q3/Q4 |
| 6 | Real-time polling: thay đổi Excel → dashboard cập nhật sau 2s | Demo live với giảng viên |
| 7 | File nộp là ZIP có mật khẩu | Mở file ZIP xem có yêu cầu pass không |

> **Ghi chú áp dụng tiêu chí:** Tiêu chí **1 và 7** áp cho **file HTML tĩnh nộp bài** (data đã bundle sẵn, double-click là chạy — không có polling). Tiêu chí **2–6** (KPI, màu sắc, nút lọc, polling 2 giây...) áp cho **bản chạy demo live với server Python** trên máy học viên. Đừng trừ điểm file HTML tĩnh vì "không tự cập nhật 2 giây" — đó là hành vi đúng của bản export.

---

## 🚨 Lỗi Phổ Biến & Cách Can Thiệp

| Lỗi | Dấu hiệu | Can thiệp |
|-----|----------|-----------|
| Python không cài | Terminal báo `command not found` | Cài Python trước, pip install flask pandas openpyxl |
| Port 9090 bị chiếm | `OSError: [Errno 48] Address already in use` | Đổi sang port 9091 hoặc kill process cũ |
| Màu sai | Dashboard dùng màu mặc định (không theo brand) | Kiểm tra `brand_guideline_beta.txt` đã nạp chưa |
| Polling không hoạt động | Biểu đồ không tự cập nhật | AI chưa viết đúng polling interval, yêu cầu sửa lại |
| File Excel bị khóa | Python báo lỗi đọc file | Đóng Excel, chạy lại Python |
| HTML tĩnh blank | Mở file HTML không hiện gì | Script export chưa bundle dữ liệu, yêu cầu AI sửa |
| Số tiền format sai | Hiện 1000000 thay vì 1 triệu | Thêm vào prompt: "format theo đơn vị Triệu VNĐ" |

---

## 🎓 Bài Tập Về Nhà

**Đề bài:** Tạo 1 Dashboard liên quan đến công việc báo cáo hàng ngày của bạn.

**Hướng dẫn:**
1. Chọn 1 loại báo cáo bạn đang làm thủ công (Excel, slide, Word)
2. Export data ra file `.xlsx`
3. Tạo file `brand_guideline_[CongTy].txt` với màu sắc thực tế của công ty bạn
4. Dùng CLEAR + RAG → tạo Dashboard AI thay thế
5. Export HTML tĩnh → ZIP có mật khẩu → nộp Group lớp

**Tiêu chí chấm BTVH:**
- [ ] Dashboard có ít nhất 3 KPI từ dữ liệu thực công ty bạn
- [ ] Có ít nhất 2 loại biểu đồ
- [ ] Màu sắc theo brand guideline thực tế của công ty (tự định nghĩa)
- [ ] File nộp là ZIP có mật khẩu

---

## 📌 Tổng Kết Buổi 6

| Chủ đề | Điểm mấu chốt |
|--------|---------------|
| **Dữ liệu + AI** | Tự động hóa báo cáo trong 5 phút. Không còn mất hàng giờ làm thủ công. |
| **RAG — Tri Thức Nội Bộ** | AI bám theo luật lệ và Guideline của riêng doanh nghiệp — giảm mạnh Hallucination, không loại bỏ hoàn toàn; quyết định quan trọng vẫn cần người kiểm chứng. |
| **Khung CLEAR** | Cách giao tiếp không trượt phát nào với AI. 5 thành phần: Context, Logic, Expectations, Action, Restrictions. |
| **Bảo Mật Thông Minh** | 3 cách chia sẻ: Local, ZIP có pass (khuyên dùng), Intranet/VPN. |

---

## 🔗 Liên kết tiếp theo

- **Buổi 7** → Handoff & Checkpoints — chuyển giao công việc giữa các agent
- File `Design_Mentor_Skill.md` tạo hôm nay → sẽ tiếp tục dùng ở các buổi sau
- Học viên giữ lại Dashboard đã làm → sẽ tích hợp vào hệ thống lớn ở buổi 10–11

---

*Hướng dẫn này đồng bộ với slide gốc: `assets/source-materials/original/MindX_AG_Slide 6.pdf`*

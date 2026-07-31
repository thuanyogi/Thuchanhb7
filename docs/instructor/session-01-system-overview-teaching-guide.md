# Buổi 1 — Tổng Quan Hệ Thống Antigravity: Hướng Dẫn Giảng Dạy Chi Tiết

> **Phase 1 — Operate | Buổi 1 của 11**
> **Chủ đề:** 3 Cấp độ AI + Kiến trúc 7 cấu phần + Thực hành chạy workflow đầu tiên
> **Thời lượng:** 3 giờ | **Artifact đầu ra:** Workspace đầu tiên đã cấu hình + chạy được `/onboard-new-user`
> **Prompt pack:** Riêng: chưa có — dùng các prompt mẫu ngay trong guide này

---

## 1. Mục Tiêu Buổi Học

| # | Mục tiêu (từ slide) | Cách kiểm tra |
|---|---------------------|---------------|
| 1 | **Nhận diện 3 Cấp độ AI** — Phân biệt Cấp 1 (Custom Chatbot), Cấp 2 (Custom GPT/Claude Project), Cấp 3 (Antigravity) và 10 rào cản cốt lõi | Học viên giải thích được sự khác biệt và liệt kê ít nhất 5 rào cản |
| 2 | **Kiến trúc 7 cấu phần Top-Down** — Nắm 4 tầng: Tầng 1 (Tổ chức AI + AI Agent + Quiz), Tầng 2 (Rules + Knowledge Base), Tầng 3 (Workflow + Skills), Tầng 4 (Inputs/Outputs/Artifacts) | Vẽ sơ đồ 4 tầng không nhìn slide |
| 3 | **Vận hành Multi-Agent Workflow** — Chạy `/onboard-new-user`, quan sát AI phối hợp, kiểm tra artifacts/ | Workspace mở được, `/onboard-new-user` chạy thành công, tìm thấy file kết quả |

---

## 2. Cấu Trúc 3 Giờ

```
10 phút  → Khai mạc & Giới thiệu khóa học + survey nhanh 3 cấp độ
30 phút  → Phần 1: 3 Cấp độ AI + 5 rào cản Cấp 1 + 5 điểm mù Cấp 2
40 phút  → Phần 2: Kiến trúc 7 cấu phần (4 tầng, demo cấu trúc file)
10 phút  → Break / Checkpoint nhanh
70 phút  → Phần 3: Thực hành — chọn workspace, /onboard-new-user, observe agents, check artifacts
20 phút  → Tổng kết + Giao bài tập về nhà
```

---

## ⚠️ PHẦN HỌC VIÊN PHẢI CHUẨN BỊ TRƯỚC BUỔI HỌC

> **Đây là buổi đầu tiên — cài đặt đúng = thực hành suôn sẻ. Giảng viên PHẢI xác nhận trước buổi học.**

### Yêu cầu thiết bị & phần mềm

| Hạng mục | Yêu cầu tối thiểu | Ghi chú |
|----------|------------------|---------|
| **Máy tính cá nhân** | RAM 8GB+, macOS 12+ hoặc Windows 10+ | Không dùng máy tính bảng / iPad |
| **Google Antigravity** | Đã tải từ `antigravity.google` | Phiên bản mới nhất |
| **Google Account** | Đang đăng nhập sẵn | Dùng tài khoản cá nhân hoặc trường |
| **Thư mục làm việc** | Đã tạo `Desktop/AgenteAI/` | Không đặt tên có dấu tiếng Việt |
| **Điện thoại** | Đăng nhập Zalo Group lớp | Để nhận link và gửi screenshot bài |

### Checklist gửi Group Zalo trước buổi học

Học viên tự xác nhận trong Group Zalo **tối hôm trước**:

```
□ Đã tải Antigravity về máy (từ antigravity.google)
□ Đã mở và đăng nhập Antigravity thành công
□ Thấy giao diện editor (có khung chat + file explorer bên trái)
□ Google Account đang hoạt động (không bị lỗi đăng nhập)
□ Laptop đầy pin hoặc chuẩn bị sạc
```

### Cách giảng viên xử lý học viên chưa chuẩn bị

| Tình huống | Hành động ngay khi vào lớp |
|-----------|---------------------------|
| Chưa tải Antigravity | Tải trong break đầu (10 phút), cặp đôi với người đã có |
| Chưa có Google Account | Tạo nhanh trong 5 phút — hỗ trợ cặp đôi |
| Máy tính RAM < 8GB | Dùng máy dự phòng hoặc ghép cặp cùng người khác |
| Chưa tạo thư mục | Tạo ngay tại lớp trong 2 phút |

---

## 3. Khai Mạc (10 phút)

### 3.1 Giới thiệu khóa học (3 phút)

Dẫn vào bằng bức tranh toàn khóa:

> "11 buổi học này sẽ đưa các bạn từ người dùng AI bình thường → người **vận hành hệ thống AI chuyên nghiệp** trong doanh nghiệp. Buổi hôm nay là nền móng — mọi thứ chúng ta làm sau này đều xây trên những khái niệm học hôm nay."

Tóm tắt nhanh lộ trình 3 pha:
- **Phase 1 (Buổi 1–4):** Operate — học cách vận hành hệ thống
- **Phase 2 (Buổi 5–9):** Modify — thêm, tùy chỉnh, mở rộng hệ thống
- **Phase 3 (Buổi 10–11):** Create — xây workflow thực cho doanh nghiệp

### 3.2 Survey nhanh 3 cấp độ (4 phút)

Hỏi cả lớp bằng A/B/C (giơ tay hoặc dùng poll Zalo):

> "Bạn đang ở cấp độ nào với AI?"
>
> **A** — Tôi dùng ChatGPT / Gemini mỗi ngày, hỏi đáp bình thường
> **B** — Tôi đã tạo Custom GPT / Claude Project có hướng dẫn riêng
> **C** — Tôi đã dùng công cụ AI có agent, workflow tự động

Ghi lên bảng số người mỗi nhóm. Dùng kết quả này dẫn vào Phần 1:

> "Phần lớn chúng ta đang ở Cấp A hoặc B. Buổi hôm nay tôi sẽ giải thích tại sao Cấp A và B **không đủ** cho bài toán doanh nghiệp thực — và Antigravity (Cấp 3) giải quyết điều đó như thế nào."

### 3.3 Giới thiệu artifact đầu ra (3 phút)

Chiếu nhanh màn hình: workspace đã cấu hình với file explorer đầy đủ + terminal đang chạy `/onboard-new-user`:

> "Cuối buổi hôm nay, mỗi bạn sẽ có workspace cá nhân đầu tiên. Workspace đó không phải folder rỗng — nó là **môi trường AI đang hoạt động**, với agent đã cấu hình sẵn, sẵn sàng làm việc."

---

## 4. Phần 1 — 3 Cấp Độ AI & Các Rào Cản (30 phút)

### 4.1 Tại sao AI phổ thông chưa đủ? (5 phút)

**Dẫn dắt:** Chiếu slide "Bạn có gặp vấn đề này?"

| Tình huống thực tế | Công cụ hiện tại | Kết quả |
|-------------------|-----------------|---------|
| Xử lý 50 email khách hàng mỗi ngày | ChatGPT — hỏi từng email | Mệt mỏi, không nhất quán |
| Tạo báo cáo nội bộ theo template | Custom GPT | Mỗi lần vào lại phải nhắc lại context |
| Phối hợp nhiều phòng ban | Không có công cụ nào làm được | Vẫn làm thủ công |

**Câu hỏi kích thích:**
> "Nếu ChatGPT đang giúp bạn 20% công việc — tại sao chưa phải 80%? Điều gì đang chặn lại?"

### 4.2 Cấp 1 — Custom Chatbot (10 phút)

**Định nghĩa:** AI nhận câu hỏi → trả lời. Không nhớ, không hành động, không phối hợp.

**5 rào cản của Cấp 1:**

| # | Rào cản | Biểu hiện thực tế |
|---|---------|------------------|
| 1 | **Không nhớ context** | Mỗi cuộc chat là bắt đầu lại từ đầu |
| 2 | **Không hành động được** | Chỉ "nói" — không ghi file, không gửi email |
| 3 | **Không tích hợp hệ thống** | Không biết CRM, Sheet, ERP của công ty |
| 4 | **Phụ thuộc người dùng** | Người nào hỏi hay → kết quả tốt; hỏi kém → kết quả kém |
| 5 | **Không mở rộng được** | 10 việc = 10 lần hỏi thủ công |

**Mẹo giảng — kể câu chuyện thực tế:**
> "Nhân viên chăm sóc khách hàng dùng ChatGPT trả lời email — mỗi ngày phải copy-paste context doanh nghiệp vào mỗi cuộc chat. Mất 15 phút chỉ để setup. Đây là Cấp 1 — AI thông minh nhưng **không có bộ nhớ, không có hành động**."

### 4.3 Cấp 2 — Custom GPT / Claude Project (10 phút)

**Định nghĩa:** AI được cấu hình trước với hướng dẫn, knowledge base. Tốt hơn Cấp 1, nhưng vẫn có trần giới hạn.

**5 điểm mù của Cấp 2:**

| # | Điểm mù | Tại sao nguy hiểm |
|---|---------|------------------|
| 1 | **Bị giam trong nền tảng** | Custom GPT của OpenAI — không thoát ra được |
| 2 | **Không phối hợp agent** | Một AI làm tất cả → giới hạn chất lượng |
| 3 | **Không chạy tự động** | Vẫn phải người ngồi trigger từng lần |
| 4 | **Knowledge base tĩnh** | Update tài liệu phải làm thủ công |
| 5 | **Không kiểm soát được output** | Không đảm bảo format, không audit trail |

**Câu hỏi kiểm tra nhanh (2 phút):**
> "Custom GPT tốt hơn ChatGPT thường ở điểm nào? Và điểm nào Custom GPT vẫn không làm được?"

*(Đáp án: Tốt hơn ở context nhất quán, knowledge base; Không làm được: chạy tự động, phối hợp đa agent, tích hợp hệ thống)*

### 4.4 Cấp 3 — Antigravity (5 phút)

**Định nghĩa:** Hệ thống **đa agent**, tự phối hợp, chạy workflow, tích hợp được với hệ thống doanh nghiệp.

**So sánh 3 cấp độ:**

| Tiêu chí | Cấp 1 (Chatbot) | Cấp 2 (Custom GPT) | Cấp 3 (Antigravity) |
|---------|----------------|-------------------|---------------------|
| Bộ nhớ | Không | Giới hạn | Có — trong workspace |
| Hành động | Không | Hạn chế — chỉ qua Actions cấu hình sẵn, không thao tác được file local | Có — ghi file, gọi tool |
| Đa agent | Không | Không | Có — phối hợp nhiều AI |
| Tự động chạy | Không | Không | Có — qua workflow + scheduler ngoài (học ở buổi 4) |
| Kiểm soát output | Không | Một phần | Đầy đủ — audit trail |

**Ẩn dụ giảng viên dùng:**
> "Cấp 1 là nhân viên mới, không biết gì về công ty. Cấp 2 là nhân viên đã đọc sổ tay. Cấp 3 là **đội ngũ nhân sự AI** — mỗi người có chuyên môn, biết phối hợp, tự làm việc."

---

## 5. Phần 2 — Kiến Trúc 7 Cấu Phần (40 phút)

### 5.1 Giới thiệu mô hình 4 tầng (5 phút)

**Dẫn dắt:** Chiếu slide kiến trúc Top-Down.

> "Antigravity không phải một phần mềm đơn thuần — nó là **nền tảng kiến trúc**. Hiểu 4 tầng này = hiểu được cách mọi thứ hoạt động và biết thay đổi ở đâu khi cần."

**Sơ đồ 4 tầng:**

```
┌─────────────────────────────────────────┐
│  TẦNG 1: Nhân Sự AI                     │
│  Cơ cấu tổ chức AI | AI Agent | Quiz    │
├─────────────────────────────────────────┤
│  TẦNG 2: Trí Tuệ & Quy Tắc             │
│  Rules | Knowledge Base                  │
├─────────────────────────────────────────┤
│  TẦNG 3: Khả Năng Hành Động            │
│  Workflow | Skills                       │
├─────────────────────────────────────────┤
│  TẦNG 4: Hạ Tầng Local                 │
│  inputs/ | outputs/ | artifacts/         │
└─────────────────────────────────────────┘
```

### 5.2 Tầng 1 — Nhân Sự AI (10 phút)

**7 cấu phần hệ thống — 3 trong Tầng 1:**

| Cấu phần | Vai trò | Ví dụ thực tế |
|---------|---------|---------------|
| **Cơ cấu tổ chức AI** | Xác định ai báo cáo cho ai, ai điều phối | Coordinator Agent quản lý Content Agent + Review Agent |
| **AI Agent** | Nhân viên AI chuyên biệt với nhiệm vụ cụ thể | Content Agent chỉ viết nội dung; Review Agent chỉ kiểm duyệt |
| **Quiz / Checkpoint** | Cơ chế tự kiểm tra chất lượng đầu ra | Sau khi viết → AI tự hỏi: "Output có đủ tiêu chí không?" |

**Demo tương tác — Chiếu quiz:**
> "Nhìn vào màn hình — trong hệ thống `/onboard-new-user` có 3 agent đang làm việc. Ai làm nhiệm vụ gì?"
>
> - **Coordinator Agent** → Nhận yêu cầu, phân công, giám sát tiến độ
> - **AI Content Agent** → Tạo nội dung hồ sơ người dùng, cấu hình workspace
> - **AI Kiểm Duyệt Agent** → Đọc lại output, kiểm tra đủ tiêu chí, báo lỗi nếu thiếu

**Mẹo giảng:**
> "Hỏi học viên: 'Nếu chỉ có 1 AI làm tất cả — điều gì xảy ra?' → AI bị phân tâm, chất lượng giảm, không chuyên sâu. Đây là lý do cần **phân công chuyên môn** như công ty thực."

### 5.3 Tầng 2 — Trí Tuệ & Quy Tắc (8 phút)

| Cấu phần | Vai trò | Ví dụ thực tế |
|---------|---------|---------------|
| **Rules** | Quy tắc bất biến mà AI phải tuân theo | "Không bao giờ tạo file ngoài thư mục outputs/"; "Luôn viết bằng tiếng Việt" |
| **Knowledge Base** | Kho tài liệu, SOP, template doanh nghiệp | Quy trình onboarding, template email, bảng giá sản phẩm |

**Tại sao Tầng 2 quan trọng:**
> "Rules = **văn hóa công ty**. Knowledge Base = **tài liệu đào tạo**. Không có 2 thứ này, AI agent chỉ là nhân viên thông minh nhưng không biết gì về công ty bạn."

**Ví dụ trực quan:**

| Không có Rules | Có Rules |
|---------------|---------|
| AI viết email bằng tiếng Anh | AI luôn viết bằng tiếng Việt theo quy định |
| AI tự đặt tên file | AI đặt tên theo format `YYYY-MM-DD_tên-file.md` |
| AI xử lý dữ liệu khách hàng không mã hóa | AI luôn ẩn danh hóa trước khi xử lý |

### 5.4 Tầng 3 — Khả Năng Hành Động (8 phút)

| Cấu phần | Vai trò | Ví dụ thực tế |
|---------|---------|---------------|
| **Workflow** | Quy trình có trình tự: bước 1 → bước 2 → bước 3 | `/onboard-new-user`: Hỏi thông tin → Tạo hồ sơ → Cấu hình workspace → Lưu artifacts |
| **Skills** | Kỹ năng đơn lẻ tái sử dụng được | Skill viết email, skill tóm tắt tài liệu, skill chuyển đổi format |

**Khác biệt Workflow vs Skills:**

```
Workflow = Công thức nấu ăn hoàn chỉnh (nhiều bước, có trình tự)
Skills   = Kỹ thuật cắt, xào, nêm nếm (dùng trong nhiều công thức)
```

**Câu hỏi thảo luận nhanh:**
> "Nếu bạn cần AI tóm tắt 10 loại tài liệu khác nhau — bạn nên tạo 1 Skill hay 10 Workflow riêng biệt?"
>
> *(Gợi ý đáp án: 1 Skill tái sử dụng + nhiều Workflow gọi Skill đó theo ngữ cảnh)*

### 5.5 Tầng 4 — Hạ Tầng Local (5 phút)

**3 thư mục cốt lõi:**

| Thư mục | Chứa gì | Ai đặt dữ liệu vào đây |
|---------|---------|------------------------|
| `inputs/` | Tài liệu đầu vào: PDF, DOCX, CSV | Người dùng đặt tay |
| `outputs/` | Kết quả trung gian từ AI xử lý | AI tự tạo trong quá trình chạy |
| `artifacts/` | Sản phẩm hoàn chỉnh cuối cùng | AI tạo khi workflow hoàn tất |

**Ẩn dụ:**
> "`inputs/` = nguyên liệu. `outputs/` = thành phẩm bán thành. `artifacts/` = sản phẩm đóng gói sẵn bán cho khách."

### 5.6 Demo cấu trúc file trực tiếp (4 phút)

> ⚠️ Refresh note: hành vi/UI Antigravity có thể thay đổi theo phiên bản — đối chiếu https://antigravity.google/docs và chạy thử demo trước buổi dạy.

Mở file explorer trong Antigravity, chiếu cho cả lớp thấy:

```
AgenteAI/
├── .antigravity/          ← Cấu hình hệ thống (ĐỪNG SỬA)
├── agents/               ← Định nghĩa AI Agents
│   ├── coordinator.md
│   ├── content-agent.md
│   └── review-agent.md
├── rules/                ← Rules bất biến
│   └── global-rules.md
├── knowledge/            ← Knowledge Base
│   └── company-sop.md
├── workflows/            ← Workflow definitions
│   └── onboard-new-user.md
├── skills/               ← Reusable skills
├── inputs/               ← Tài liệu đầu vào
├── outputs/              ← Kết quả trung gian
└── artifacts/            ← Sản phẩm hoàn chỉnh
```

**Lưu ý giảng viên:**
> Nhấn mạnh: Tầng 1, 2, 3 là **cấu hình** (thay đổi behavior). Tầng 4 là **dữ liệu** (thay đổi nội dung). Học viên Phase 1 chỉ cần hiểu — chưa cần sửa.

---

## 6. Break & Checkpoint (10 phút)

Trong 5 phút đầu break, học viên ghi nhanh vào giấy:

1. "Kể tên 5 rào cản của Cấp 1 AI (Chatbot thông thường)."
2. "Vẽ sơ đồ 4 tầng kiến trúc — không nhìn slide."
3. "Thư mục nào trong Tầng 4 là nơi AI tự tạo file kết quả hoàn chỉnh?"

Giảng viên đi vòng quanh, nhìn nhanh → xác định ai cần hỗ trợ thêm trong phần thực hành.

**Dấu hiệu cần chú ý:**
- Học viên không vẽ được sơ đồ → ngồi gần để hỗ trợ trong Phần 3
- Học viên chưa mở được workspace → chuẩn bị hỗ trợ cài đặt ngay sau break

---

> [!IMPORTANT]
> **HƯỚNG DẪN DẠY VỚI 1 WORKSPACE XUYÊN SUỐT (BRIDGE LAYER):**
> Nhằm giữ nguyên nội dung Slide chính thức của MindX nhưng vẫn tối ưu hóa hiệu quả tích lũy năng lực của học viên, Giảng viên hướng dẫn lớp thực hành buổi này **trực tiếp bên trong workspace duy nhất của học viên** (`my-workspace` được phát từ `workspace-hv-v2/`).
> - **Cách tổ chức file:** Học viên mở thư mục `my-workspace/` trong Antigravity — đây là workspace cá nhân sẽ dùng xuyên suốt 11 buổi, không tạo folder mới trên Desktop.
> - **Cá nhân hóa (Khuyến nghị):** Đối với học viên muốn áp dụng vào lĩnh vực thật của họ ngay tại lớp, khuyến khích họ mở file [session-01-bridge.md](plans/260710-workspace-bridge/bridge-guides/session-01-bridge.md) để làm theo Workspace Checkpoint và điền thông tin thật vào `AGENTS.md` của `my-workspace`.

## 7. Phần 3 — Thực Hành (70 phút)

### Đề bài: Thiết Lập Workspace Đầu Tiên & Chạy `/onboard-new-user`

**Tình huống:**

Bạn vừa gia nhập một công ty và được giao nhiệm vụ thiết lập workspace AI cho phòng của mình. Hệ thống Antigravity đã được IT cài đặt sẵn. Nhiệm vụ của bạn là:

1. Mở workspace đúng thư mục đã chuẩn bị
2. Khám phá cấu trúc file hệ thống
3. Chạy `/onboard-new-user` để khai báo thông tin workspace
4. Quan sát AI phối hợp làm việc
5. Kiểm tra và ghi nhận artifacts được tạo ra

### Cấu trúc 70 phút thực hành:

| Thời gian | Hoạt động | Giảng viên làm gì |
|-----------|-----------|-------------------|
| 0–10 phút | Mở workspace đúng thư mục `Desktop/AgenteAI/` | Đi kiểm tra từng máy — workspace đúng chưa |
| 10–20 phút | Khám phá file explorer: tìm agents/, rules/, workflows/ | Hỏi: "Bạn thấy thư mục nào? Trong đó có gì?" |
| 20–45 phút | Chạy `/onboard-new-user` — trả lời câu hỏi AI đặt ra | Quan sát, ghi chú câu hỏi AI hỏi, không làm thay |
| 45–60 phút | Quan sát agent phối hợp — ai làm gì, theo trình tự nào | Giải thích nếu học viên không nhìn thấy pipeline |
| 60–70 phút | Tìm file kết quả trong `artifacts/` + chụp screenshot | Review kết quả, nhận checklist |

### Hướng dẫn từng bước chi tiết

**Bước 1 — Mở Workspace Đúng Thư Mục:**
- Mở Google Antigravity
- Click **Open Folder** hoặc **Open Workspace**
- Điều hướng đến `Desktop/AgenteAI/`
- **KHÔNG** chọn `Desktop` trực tiếp — phải chọn đúng thư mục `AgenteAI`
- Xác nhận: File explorer bên trái hiện đúng cấu trúc thư mục

**Bước 2 — Khám Phá Cấu Trúc:**
- Mở rộng từng thư mục trong file explorer
- Tìm và mở file `agents/coordinator.md` — đọc 5 dòng đầu
- Tìm `workflows/` — xem có những workflow nào
- Ghi vào giấy: bạn thấy bao nhiêu agent? Bao nhiêu workflow?

**Bước 3 — Chạy `/onboard-new-user`:**
- Click vào **khung chat** (biểu tượng chat ở sidebar nếu chưa thấy)
- Gõ chính xác: `/onboard-new-user`
- Nhấn Enter
- **Đợi AI phản hồi** — AI sẽ hỏi một loạt câu hỏi để khai thác bối cảnh workspace

**Bước 4 — Trả Lời Câu Hỏi AI:**

AI sẽ hỏi các câu hỏi tương tự:
- "Tên công ty / tổ chức của bạn là gì?"
- "Phòng ban bạn thuộc về?"
- "Mục tiêu chính của workspace này là gì?"
- "Ngôn ngữ làm việc chính?"

Học viên trả lời trung thực về bối cảnh thực tế. Nếu chưa có doanh nghiệp thực — dùng bối cảnh giả định hợp lý.

**Bước 5 — Quan Sát AI Phối Hợp:**

Trong khi AI xử lý, quan sát và ghi nhận:
- Agent nào xuất hiện đầu tiên?
- Coordinator nói gì với Content Agent?
- Review Agent kiểm tra những gì?
- Có thông báo nào về tiến độ không?

**Bước 6 — Kiểm Tra Artifacts:**
- Sau khi AI hoàn tất — mở thư mục `artifacts/`
- Tìm file mới nhất được tạo
- Mở file — đọc nội dung: AI đã ghi lại thông tin gì?
- Chụp screenshot màn hình file explorer + file artifacts

### Hỗ trợ học viên bị kẹt

| Tình huống kẹt | Gợi ý giảng viên |
|---------------|--------------------|
| Không thấy khung chat | Click vào biểu tượng chat ở sidebar (hình bong bóng hoặc dấu $ terminal) |
| Workspace báo empty / trống | Đóng lại, mở đúng thư mục `AgenteAI/` — không chọn Desktop trực tiếp |
| `/onboard-new-user` không phản hồi | Kiểm tra kết nối internet; thử F5 reload; kiểm tra đăng nhập Google Account |
| AI hỏi rồi dừng | Cuộn lên xem có câu hỏi chờ trả lời không; thử gõ câu trả lời và nhấn Enter |
| File không xuất hiện trong artifacts/ | Đợi thêm 30 giây; refresh file explorer; kiểm tra workflow có báo lỗi không |
| Antigravity crash | Tắt và mở lại; nếu còn lỗi — cặp đôi với người ngồi cạnh |

---

## 8. Demo Highlight — So Sánh Trước & Sau (trong Phần 3)

**Chiếu cho cả lớp xem trước khi học viên tự thực hành:**

**Trước (Cấp 1 — Thủ công):**
```
HR muốn onboard workspace mới:
1. Mở Word → soạn thảo tài liệu cấu hình → 30 phút
2. Copy thông tin từ email → paste vào từng file → dễ sai
3. Tạo từng thư mục thủ công
4. Gửi email xác nhận
→ Tổng: 45–60 phút, phụ thuộc 1 người
```

**Sau (Cấp 3 — Antigravity):**
```
Chạy /onboard-new-user:
1. AI hỏi → người dùng trả lời → 3–5 phút
2. Coordinator phân công → Content Agent tạo hồ sơ
3. Review Agent kiểm tra → đảm bảo đúng format
4. artifacts/ có đầy đủ file cấu hình
→ Tổng: 5–8 phút, AI tự làm 90%
```

> "Đây không phải tiết kiệm thời gian thông thường — đây là **thay đổi mô hình làm việc**. AI không chỉ nhanh hơn — AI còn nhất quán hơn, không bao giờ quên bước nào."

---

## 9. Tổng Kết & Giao Bài (20 phút)

### 9.1 Review Artifact Chuẩn Buổi 1 (10 phút)

**Artifact hợp lệ sau buổi 1 phải có:**

```
AgenteAI/
├── artifacts/
│   └── onboard-[tên-bạn]-[ngày].md   ← File này phải tồn tại
└── (các thư mục hệ thống còn nguyên vẹn)
```

**Nội dung file artifact tối thiểu:**
- Tên / thông tin workspace đã khai báo
- Timestamp khi workflow chạy
- Danh sách agent đã tham gia xử lý
- Xác nhận workflow hoàn tất

### 9.2 Checklist Nghiệm Thu — 7 Tiêu Chí

Giảng viên đọc từng tiêu chí — học viên tự xác nhận:

- [ ] **1.** Giải thích được sự khác biệt giữa 3 cấp độ AI
- [ ] **2.** Chỉ ra được 5 rào cản của Cấp 1 (không nhìn slide)
- [ ] **3.** Vẽ được sơ đồ 4 tầng kiến trúc (không nhìn slide)
- [ ] **4.** Workspace đã mở và nhìn thấy file explorer đúng cấu trúc
- [ ] **5.** Đã chạy được `/onboard-new-user` thành công
- [ ] **6.** Tìm thấy file kết quả trong thư mục `artifacts/`
- [ ] **7.** Đã chia sẻ screenshot lên Group Zalo

**Điểm chuẩn:** Học viên đạt ≥ 5/7 tiêu chí → đủ điều kiện chuyển buổi 2.

---

## 10. Lỗi Phổ Biến & Cách Can Thiệp

| Lỗi | Dấu hiệu | Cách giảng viên can thiệp |
|-----|---------|--------------------------|
| Antigravity không mở được | Màn hình đen hoặc báo lỗi ngay khi khởi động | Kiểm tra phiên bản macOS (≥12) / Windows (≥10); thử cài lại từ `antigravity.google` |
| Không thấy khung chat | Chỉ thấy file explorer, không thấy nơi nhập lệnh | Click vào biểu tượng chat/terminal ở sidebar trái |
| Workspace báo empty | File explorer trống hoặc không hiện gì | Đóng folder, mở lại đúng `Desktop/AgenteAI/` — không chọn Desktop cha |
| `/onboard-new-user` không phản hồi | Gõ lệnh, nhấn Enter, không có gì xảy ra | Kiểm tra internet; thử F5 reload workspace; đăng xuất và đăng nhập lại Google |
| AI dừng giữa chừng | AI hỏi 1-2 câu rồi im lặng | Gõ câu trả lời rõ ràng hơn; nếu vẫn kẹt thì restart workflow |
| Không tìm thấy file trong artifacts/ | Sau khi AI báo xong, artifacts/ vẫn trống | Refresh file explorer; kiểm tra log lỗi; thử chạy lại workflow |
| Lệnh gõ sai chính tả | `/onboard_new_user` hoặc `/onboard new user` | Gõ chính xác `/onboard-new-user` — có dấu gạch ngang, không có khoảng trắng |

---

## 11. Bài Tập Về Nhà

> **Mục tiêu:** Thực hành độc lập với tài liệu thực của bản thân.

**Bài tập cụ thể:**

Tìm 1 tài liệu nội bộ thực tế của bạn:
- SOP (quy trình vận hành chuẩn)
- Quy định nội bộ phòng ban
- Template email / báo cáo

**Các bước thực hiện:**

1. Đặt tài liệu vào thư mục `inputs/` của workspace
2. Mở khung chat trong Antigravity
3. Nhập lệnh (ngôn ngữ tự nhiên):
   ```
   Đọc file [tên file] trong inputs/, convert sang Markdown
   và lưu kết quả vào outputs/ với tên [tên-file]-markdown.md
   ```
4. Quan sát AI xử lý
5. Kiểm tra file kết quả trong `outputs/`
6. Chụp ảnh: file gốc + file Markdown kết quả

**Nộp bài:** Gửi screenshot vào Group Zalo trước buổi 2. Kèm 1–2 câu mô tả: "Tôi đã convert tài liệu gì? Kết quả như thế nào?"

**Tiêu chí chấm bài về nhà:**

| Tiêu chí | Đạt | Chưa đạt |
|---------|-----|---------|
| Có tài liệu thực trong `inputs/` | File tồn tại đúng thư mục | Không tìm thấy hoặc đặt nhầm chỗ |
| Lệnh gõ rõ ràng, đủ thông tin | AI hiểu và thực hiện ngay | AI hỏi lại nhiều lần vì thiếu thông tin |
| File Markdown tạo ra trong `outputs/` | File tồn tại, đọc được | Không có file hoặc file rỗng |
| Screenshot gửi đúng hạn | Có ảnh trước buổi 2 | Thiếu ảnh |

---

## 12. Câu Hỏi Thảo Luận Dự Phòng

1. "Nếu công ty bạn đang dùng ChatGPT — điều gì xảy ra khi nhân viên giỏi nhất nghỉ việc? Prompt họ viết có còn dùng được không?"
2. "Knowledge Base khác Google Drive như thế nào? Tại sao không dùng Google Drive là xong?"
3. "Trong 4 tầng kiến trúc — tầng nào khó thay đổi nhất? Tại sao?"
4. "Nếu AI Agent sai — lỗi nằm ở tầng nào? Bạn sẽ kiểm tra ở đâu trước?"
5. "Tại sao phải phân chia `inputs/`, `outputs/`, `artifacts/` thay vì để chung 1 thư mục?"

---

## 13. Backup Plans

| Tình huống | Backup |
|-----------|--------|
| Antigravity lỗi kết nối / quota | Demo màn hình giảng viên — học viên quan sát và ghi chép |
| Học viên đông, máy chậm | Chia nhóm 2 người / máy — 1 người thao tác, 1 người quan sát |
| `/onboard-new-user` bị lỗi hệ thống | Dùng slide screenshot của workflow đã chạy trước; giải thích từng bước |
| Kết nối internet yếu | Chuẩn bị offline demo: workspace đã cấu hình sẵn trên máy giảng viên |
| Học viên không có tài liệu nội bộ để làm BTVH | Cung cấp tài liệu mẫu trong `assets/templates/student-antigravity-workspace/sample-data/` — giảng viên tự chuẩn bị sẵn 1 file SOP mẫu tại đây trước buổi học |

---

## 14. Ghi Chú Giảng Viên

### Nhịp độ lớp học

- **Phần lý thuyết (Phần 1 + 2):** Nhịp nhanh — 30+40 phút. Không dừng quá lâu ở 1 khái niệm. Học viên hiểu sâu hơn qua thực hành.
- **Phần thực hành:** Nhịp chậm, kiên nhẫn. Đây là lần đầu tiên học viên chạm vào hệ thống — cảm giác thành công rất quan trọng.
- **Đừng làm thay:** Khi học viên kẹt — gợi ý, đặt câu hỏi dẫn dắt. Không gõ lệnh thay họ.

### Điểm cần nhấn mạnh đặc biệt

> **1. "Không phải công cụ — là nền tảng."**
> Antigravity khác ChatGPT không phải vì thông minh hơn — mà vì **có kiến trúc**. Kiến trúc mới là thứ cho phép mở rộng, kiểm soát, phối hợp.

> **2. "Artifact = bằng chứng AI đã làm việc."**
> Mỗi lần workflow chạy phải tạo ra artifact. Không có artifact = không có bằng chứng = không kiểm soát được chất lượng.

> **3. "Buổi 1 là nền móng — đừng vội."**
> Nếu lớp chậm hơn dự kiến, hy sinh phần Câu hỏi thảo luận hoặc rút ngắn Break. Nhưng đừng rút ngắn phần thực hành — học viên phải tự chạy được `/onboard-new-user` trước khi ra về.

### Checklist giảng viên sau buổi học

- [ ] Đếm số học viên đạt ≥ 5/7 validation criteria
- [ ] Ghi lại lỗi phổ biến nhất trong lớp → cập nhật backup plan
- [ ] Xác nhận ai chưa gửi BTVH trong Group → nhắc nhở trước buổi 2
- [ ] Cập nhật attendance log

---

*Cập nhật lần cuối: 2026-06-10 | Phiên bản: v1.0 — Khởi tạo cho Buổi 1*
*Nguồn: `assets/source-materials/original/MindX_AG_Slide 1.pdf`*
*Raw extract: `assets/source-materials/derived/session-01-raw-extract.txt`*

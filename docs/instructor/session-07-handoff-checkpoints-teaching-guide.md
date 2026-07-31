# Session 07 — Hướng Dẫn Giảng Dạy Chi Tiết
## Quy Tắc Bàn Giao & Kiểm Duyệt (Handoff & Human Checkpoint)

> **Version:** 1.0 · **Buổi:** 7 / 11 · Phase 2 — Modify  
> **Dành cho:** Giảng viên · Không chia sẻ trực tiếp cho học viên  
> **Artifact đầu ra:** App Streamlit chạy được trên cloud + file Excel sạch cho Sales

---

## 📋 Tổng quan nhanh

| Mục | Nội dung |
|-----|----------|
| **Chủ đề** | Handoff tư duy + Human-in-the-Loop + Audit 7 thành tố + Xây AI Lead Scoring với Streamlit + GitHub |
| **Thời lượng** | 3 giờ |
| **Artifact đầu ra** | `app_lead_scoring.py` (Streamlit) + `leads_scored.xlsx` + `lead_scoring_skill.md` |
| **Công cụ cần** | Google Antigravity, Python 3.10+, Streamlit, GitHub, Streamlit Cloud |
| **Điểm nhấn giảng dạy** | Demo 4 giai đoạn liên hoàn — từ Skill → Dữ liệu → App → Deploy live link |

---

## 🎯 Mục tiêu học tập (3 mục tiêu)

1. **Tư duy Handoff** — Phân định ranh giới và điểm chuyển giao trách nhiệm giữa AI và con người
2. **Audit 7 Thành tố** — Áp dụng bộ khung 7 thành tố để đánh giá hệ thống Lead Scoring
3. **Thiết lập Checkpoint** — Xây giao diện Web làm điểm kiểm soát (Human-in-the-Loop)

---

## ⚠️ PHẦN HỌC VIÊN PHẢI CHUẨN BỊ (TRỌNG TÂM)

> **Đây là phần giảng viên cần nhấn mạnh nhất. Nếu học viên không có GitHub + Streamlit Cloud → không deploy được app. Phần này là mục tiêu chính của buổi học.**

### 1. Tài khoản bắt buộc đăng ký trước buổi học

| STT | Tài khoản / Phần mềm | Mục đích | Link | Ghi chú |
|-----|----------------------|----------|------|---------|
| 1 | **GitHub** | Lưu source code, version control | github.com | Miễn phí — đăng ký bằng email |
| 2 | **Streamlit Cloud** | Deploy app lên cloud, tạo link web công khai | share.streamlit.io | Đăng nhập bằng GitHub — KHÔNG tạo tài khoản riêng |
| 3 | **Python 3.10+** | Chạy Streamlit local | python.org | Kiểm tra: `python --version` |
| 4 | **pip packages** | Thư viện Streamlit + xử lý dữ liệu | Terminal | `pip install streamlit pandas openpyxl` |
| 5 | **Google Antigravity** | Tạo Skill và App bằng AI | Đã có từ buổi 1 | Kiểm tra tài khoản còn hoạt động |

**Cách kiểm tra sau khi cài:**
```bash
# Kiểm tra Python
python --version
# Phải hiện: Python 3.10.x trở lên

# Cài thư viện
pip install streamlit pandas openpyxl

# Kiểm tra Streamlit đã cài
streamlit --version
# Phải hiện: Streamlit x.x.x
```

> ⚠️ **CẢNH BÁO:** Không có GitHub + Streamlit = Không deploy được app. Phần này là mục tiêu chính của buổi học. Hãy đăng ký và test đăng nhập trước buổi học!

---

### 2. File dữ liệu cần chuẩn bị

> **Giảng viên cần gửi cho học viên ít nhất 1 ngày trước buổi học:**

#### Cho phần Demo (giảng viên dùng):
| File | Mô tả | Nơi lấy |
|------|-------|---------|
| `khach_hang_bds_500.xlsx` | Dữ liệu 500 khách hàng bất động sản (demo) | Giảng viên cung cấp |
| `tieu_chi_cham_diem.txt` | Tiêu chí chấm điểm Lead Scoring BĐS | Giảng viên cung cấp |

#### Cho phần Thực hành (học viên tự làm):
| File | Mô tả | Nơi lấy |
|------|-------|---------|
| `khach_hang_bds_500.xlsx` | Cùng file — học viên tự nâng cấp bảo mật + UI | Giảng viên cung cấp |
| `tieu_chi_cham_diem.txt` | Cùng file tiêu chí — dùng cho bài thực hành nâng cao | Giảng viên cung cấp |

> **⚠️ Lưu ý:** File `tieu_chi_cham_diem.txt` là **Knowledge Base** của hệ thống. Nếu thiếu file này → AI chấm điểm ngẫu nhiên, sai hoàn toàn. Phải nạp file này vào trước khi chạy app.

**`tieu_chi_cham_diem.txt` — nội dung mẫu (giảng viên chuẩn bị sẵn):**
```
TIÊU CHÍ CHẤM ĐIỂM LEAD SCORING — BẤT ĐỘNG SẢN

1. NGÂN SÁCH (30 điểm)
   - Trên 5 tỷ: 30 điểm
   - 2-5 tỷ: 20 điểm
   - Dưới 2 tỷ: 10 điểm

2. MỨC ĐỘ QUAN TÂM (25 điểm)
   - Đã xem trực tiếp: 25 điểm
   - Đã xem online nhiều lần: 15 điểm
   - Mới tìm hiểu: 5 điểm

3. THỜI GIAN MUA (20 điểm)
   - Trong 1 tháng: 20 điểm
   - Trong 3 tháng: 12 điểm
   - Chưa xác định: 5 điểm

4. NGUỒN KHÁCH (15 điểm)
   - Referral (giới thiệu): 15 điểm
   - Facebook Ads: 8 điểm
   - Walk-in: 5 điểm

5. TƯƠNG TÁC (10 điểm)
   - Gọi lại chủ động: 10 điểm
   - Trả lời đầy đủ: 6 điểm
   - Ít phản hồi: 2 điểm

PHÂN LOẠI:
- 80-100 điểm: HOT LEAD 🔴 — ưu tiên tối đa
- 60-79 điểm: WARM LEAD 🟡 — theo dõi chặt
- Dưới 60 điểm: COLD LEAD 🔵 — nuôi dưỡng dài hạn
```

---

### 3. Checklist học viên tự kiểm tra TRƯỚC buổi học

Gửi danh sách này cho học viên qua Group/Zalo:

```
✅ CHECKLIST CHUẨN BỊ BUỔI 7 — Gửi về group trước 9h tối hôm trước

□ Tài khoản GitHub đã tạo và login OK (github.com)
□ Streamlit Cloud đã kết nối với GitHub (share.streamlit.io → Sign in with GitHub)
□ pip install streamlit pandas openpyxl → thành công (không có lỗi đỏ)
□ streamlit --version → thấy version (không phải "command not found")
□ File dữ liệu khach_hang_bds_500.xlsx đã tải về Desktop/Buoi7/
□ File tiêu chí chấm điểm tieu_chi_cham_diem.txt đã tải về Desktop/Buoi7/
□ Google Antigravity hoạt động (thử đăng nhập)
□ Máy tính có ít nhất 4GB RAM trống
□ Kết nối internet ổn định (cần để push GitHub + deploy Streamlit)
```

---

### 4. Không gian làm việc học viên cần chuẩn bị

Học viên tạo sẵn thư mục:
```
Desktop/
└── Buoi7/
    ├── khach_hang_bds_500.xlsx
    ├── tieu_chi_cham_diem.txt
    ├── lead_scoring_skill.md       ← sẽ tạo trong buổi học
    ├── app_lead_scoring.py         ← sẽ tạo trong buổi học
    └── requirements.txt            ← sẽ tạo trong buổi học
```

> Giảng viên nhắc: Tạo thư mục `Buoi7` trên Desktop trước. Sau khi push GitHub, thư mục này sẽ trở thành repository chính.

---

## 🧯 Backup Plan (giảng viên chuẩn bị)

- Streamlit Cloud hoặc GitHub kẹt (mạng, tài khoản, quota): học viên **chạy app local** (`streamlit run app_lead_scoring.py`) và **quay video 30 giây màn hình** thao tác duyệt + xuất Excel để nộp thay link deploy.
- Giảng viên chuẩn bị sẵn 1 repo GitHub + app đã deploy để demo dự phòng nếu deploy live trong lớp thất bại.
- Deploy cloud với các học viên bị kẹt → chuyển thành BTVH (xem lộ trình đạt tối thiểu ở phần checklist nghiệm thu).

---

## 🕐 Cấu trúc buổi học 3 giờ

| Thời gian | Khối | Nội dung | Ghi chú giảng viên |
|-----------|------|----------|-------------------|
| 0 – 10' | **Khai mạc** | Vấn đề khi handoff kém — "Sai một ly đi một dặm" | Hỏi học viên: "Bạn đã từng nhận bàn giao mà không biết bắt đầu từ đâu?" |
| 10 – 35' | **Phần 1: Tư duy Handoff** | Handoff = Điểm tiếp sức + HITL + 4 mức độ tự chủ | Vẽ sơ đồ lên bảng: A → Handoff Point → B |
| 35 – 70' | **Phần 2: Audit 7 Thành tố** | Ôn tập 7 thành tố + Deep dive Knowledge Base + Memory & GitHub | Dùng bảng 7 thành tố → gán vào hệ thống Lead Scoring |
| 70 – 80' | **Break + Checkpoint** | 3 câu checkpoint nhanh | Học viên tự ghi ra giấy |
| 80 – 150' | **Phần 3: Demo 4 Giai đoạn + Thực hành** | 4 giai đoạn demo + Thực hành nâng cấp Bảo mật + UI | Đây là phần CỐT LÕI — 70 phút thực chiến |
| 150 – 160' | **Kiểm tra Checkpoint** | Tick duyệt, xuất Excel, verify link | Chiếu checklist nghiệm thu |
| 160 – 180' | **Tổng kết + BTVH** | Key takeaways + giao bài về nhà | Học viên chụp màn hình link Streamlit |

---

## 📖 Phần 1: Tư Duy Handoff + HITL + 4 Mức Độ Tự Chủ (25 phút)

### Mở bài — Hook (10 phút)

**Câu chuyện dẫn nhập:**

> *"Năm 1999, NASA mất tàu thăm dò Mars Climate Orbiter vì một lỗi bàn giao đơn giản: khi truyền dữ liệu lực đẩy, phần mềm của Lockheed Martin tính bằng hệ đo Anh (pound-force·giây), còn hệ thống của NASA lại đọc theo hệ mét (newton·giây). Không ai ghi rõ đơn vị trong handoff. Kết quả: tàu bay vào khí quyển Sao Hỏa quá thấp và bị phá hủy. Cả chương trình trị giá 327 triệu đô — đổ vỡ vì thiếu một dòng ghi chú đơn vị khi bàn giao."*

**Câu hỏi mở cho học viên:**
> "Bạn đã từng nhận bàn giao công việc từ đồng nghiệp mà phải mất 1-2 ngày mới hiểu phải làm gì chưa?"

Đợi 2-3 học viên chia sẻ → dẫn vào định nghĩa Handoff.

**3 triệu chứng của Handoff kém:**

| Triệu chứng | Biểu hiện thực tế | Hậu quả |
|-------------|-------------------|---------|
| 🔴 **Thiếu ngữ cảnh** | Nhận file Excel nhưng không biết cột nào nghĩa là gì | Xử lý sai dữ liệu → quyết định lệch |
| 🟡 **Thiếu trạng thái** | Không biết đã xử lý đến đâu, còn lại bao nhiêu | Làm lại từ đầu, lãng phí thời gian |
| 🟠 **Thiếu trách nhiệm** | Không rõ ai quyết định bước tiếp theo | Công việc tắc nghẽn, không ai tiến hành |

---

### Định nghĩa Handoff (5 phút)

**Handoff = Điểm tiếp sức:**

> Công việc, trách nhiệm, và dữ liệu được chuyển từ **A sang B** — có thể là:
> - Người → Người (Sales bàn giao cho Kỹ thuật)
> - AI → Người (AI chấm điểm → Sales duyệt)
> - Người → AI (Sales nhập liệu → AI xử lý)
> - AI → AI (Agent 1 thu thập → Agent 2 phân tích)

**Tiêu chuẩn vàng của Handoff thành công:**
> Người nhận có **đủ ngữ cảnh** để tiếp tục mà **không cần hỏi lại**.

**Giảng viên vẽ lên bảng:**
```
[Agent A] ──→ 📋 Handoff Package ──→ [Agent B]
                    │
                    ├── Dữ liệu (đầy đủ, sạch)
                    ├── Trạng thái (đã làm gì, còn lại gì)
                    ├── Quy tắc (phải làm theo tiêu chí nào)
                    └── Người chịu trách nhiệm tiếp theo
```

**2 hình thức bàn giao trong doanh nghiệp:**

| Hình thức | Dành cho | Ví dụ buổi này |
|-----------|----------|---------------|
| **Bàn giao Dữ liệu** | Sales, Marketing, Quản lý | File `leads_scored.xlsx` → Sales dùng ngay |
| **Bàn giao Hệ thống** | Kỹ thuật, IT, Developer | GitHub repository → Dev clone về chạy |

---

### Human-in-the-Loop (HITL) (5 phút)

**Tại sao AI không nên chạy 100% tự động?**

**Hai nguy cơ chính:**
1. **Hallucination:** AI tự tin nhưng sai — tạo ra dữ liệu không tồn tại
2. **Sai lệch ngữ cảnh:** AI không biết quy định nội bộ, biến động thị trường, lịch sử cá nhân của khách

**Hậu quả:** Mất uy tín với khách hàng, quyết định kinh doanh sai, không phục hồi được nếu không có checkpoint.

**HITL mang lại 2 lợi ích:**

| Lợi ích | Giải thích |
|---------|-----------|
| **An toàn tuyệt đối** | Con người xem xét trước khi hành động — không bao giờ AI tự gửi email cho khách |
| **Đào tạo ngược** | Mỗi lần Sales chỉnh sửa kết quả AI → đó là dữ liệu để huấn luyện AI tốt hơn |

> **Analogie:** Hãy nghĩ HITL như "phòng kiểm duyệt" của tòa soạn báo. AI viết bài nhanh, nhưng biên tập viên phải duyệt trước khi đăng.

---

### 4 Mức Độ Tự Chủ của AI (5 phút)

**Giảng viên vẽ thang đo lên bảng:**

```
Level 1 ──── Level 2 ──── Level 3 ──── Level 4
(Gợi ý)     (Giám sát)   (Bán tự động) (Tự động)
    ↑
Doanh nghiệp
bắt đầu ở đây
```

| Level | Tên | Mô tả | Ví dụ |
|-------|-----|-------|-------|
| **Level 1** | Gợi ý | AI đề xuất, người quyết định 100% | AI gợi ý email → người viết lại từ đầu |
| **Level 2** | Giám sát | AI làm, người review và phê duyệt ✅ | AI chấm điểm Lead → Sales tick duyệt |
| **Level 3** | Bán tự động | AI làm, người chỉ can thiệp khi ngoại lệ | AI tự gửi báo giá, Sales chỉ xem khi phản hồi |
| **Level 4** | Tự động hoàn toàn | AI chạy độc lập, không cần người | Hệ thống giao dịch chứng khoán tự động |

> **Khuyến nghị:** Doanh nghiệp mới áp dụng AI nên bắt đầu Level 2 — giám sát chặt để tạo niềm tin, thu thập dữ liệu chỉnh sửa, tinh chỉnh dần.

**Câu hỏi kiểm tra:**
> "Hệ thống Lead Scoring chúng ta sẽ xây hôm nay thuộc Level mấy?"  
> → Trả lời đúng: **Level 2** — AI chấm điểm, Sales duyệt qua Checkpoint trên Streamlit.

---

## 📖 Phần 2: Audit 7 Thành Tố + Knowledge Base + Memory (35 phút)

### Ôn tập 7 Thành tố (10 phút)

> *"Mọi hệ thống AI đều có thể phân tích bằng 7 thành tố này. Hôm nay ta dùng nó để audit hệ thống Lead Scoring trước khi xây."*

**Bảng 7 thành tố — gán vào hệ thống Lead Scoring:**

| # | Thành tố | Định nghĩa | Trong hệ thống Lead Scoring của chúng ta |
|---|----------|------------|------------------------------------------|
| 1 | **Input** | Dữ liệu đầu vào | File Excel 500 khách hàng BĐS từ Google Sheets |
| 2 | **AI Agent** | Bộ não xử lý | Google Antigravity đọc tiêu chí + chấm điểm |
| 3 | **Tools** | Công cụ sử dụng | Streamlit (UI), Pandas (dữ liệu), GitHub (lưu trữ) |
| 4 | **Knowledge Base** | Tri thức nền tảng | File `tieu_chi_cham_diem.txt` — quy tắc chấm điểm |
| 5 | **Memory** | Bộ nhớ hệ thống | `session_state` (trong session) + GitHub commits (dài hạn) |
| 6 | **Workflow** | Quy trình xử lý | Ingest → Process → Review (Checkpoint) → Handoff |
| 7 | **Output** | Đầu ra | `leads_scored.xlsx` (Sales) + Streamlit link (IT/Manager) |

**Giảng viên yêu cầu học viên:** *"Hãy vẽ bảng này vào vở. Đây là công cụ bạn sẽ dùng để trình bày hệ thống AI cho sếp."*

---

### Deep Dive: Knowledge Base (10 phút)

**Câu hỏi mở:**
> *"Nếu không có `tieu_chi_cham_diem.txt`, điều gì xảy ra khi AI chấm điểm?"*

→ Học viên trả lời → Dẫn đến: AI chấm theo "thường thức" chung, không theo tiêu chí của công ty → Sai hoàn toàn với thực tế.

**Knowledge Base khác với Data như thế nào?**

| Khái niệm | Là gì | Ví dụ |
|-----------|-------|-------|
| **Data (Dữ liệu)** | Thông tin thô cần xử lý | Danh sách 500 khách hàng với tên, SĐT, ngân sách |
| **Knowledge Base (Tri thức)** | Quy tắc, tiêu chuẩn để xử lý dữ liệu | Tiêu chí chấm điểm: "Ngân sách >5 tỷ = 30 điểm" |

**Nguyên tắc xây Knowledge Base hiệu quả:**
1. **Cụ thể và có số:** "Ngân sách trên 5 tỷ" → rõ ràng hơn "ngân sách cao"
2. **Có phân loại đầu ra:** HOT / WARM / COLD với ngưỡng điểm cụ thể
3. **Dạng .txt hoặc .md:** AI đọc được, con người chỉnh sửa được dễ dàng
4. **Cập nhật thường xuyên:** Khi chính sách thay đổi → sửa file .txt → AI tự điều chỉnh

> **Lưu ý giảng dạy:** Đây chính là **"Quy tắc nội bộ"** (Rules) mà ta đã nói từ buổi 5-6. Knowledge Base trong Lead Scoring = Brand Guideline trong Dashboard = Đều là cách đưa tri thức doanh nghiệp vào AI.

---

### Deep Dive: Memory & GitHub (15 phút)

**Hai loại Memory trong hệ thống:**

**1. Short-term Memory — `session_state` của Streamlit:**
```python
import streamlit as st

# Lưu danh sách đã duyệt vào session_state
if 'approved_leads' not in st.session_state:
    st.session_state.approved_leads = []

# Mỗi lần Sales tick duyệt
if st.button("✅ Duyệt khách này"):
    st.session_state.approved_leads.append(customer_id)
```

- **Phạm vi:** Trong một phiên làm việc (1 lần mở app)
- **Mất khi:** Refresh trang hoặc đóng tab
- **Dùng để:** Ghi nhớ trạng thái duyệt trong phiên làm việc

**2. Long-term Memory — GitHub Commits:**
```
Mỗi lần push code lên GitHub = 1 bản snapshot của hệ thống
→ Ai sửa gì, khi nào, tại sao → GitHub lưu hết
→ Có thể quay về bất kỳ thời điểm nào trong lịch sử
```

- **Phạm vi:** Vĩnh viễn (cho đến khi xóa repo)
- **Dùng để:** Version control app, audit trail cho IT
- **Bonus:** Streamlit Cloud đọc trực tiếp từ GitHub → deploy tự động khi push

**GitHub + Streamlit = Bộ đôi Handoff hoàn hảo:**

```
Bàn giao cho Sales:
  → Streamlit link (web app, không cần cài phần mềm)
  → File Excel export từ app

Bàn giao cho Kỹ thuật:
  → GitHub repository (code đầy đủ, có README)
  → requirements.txt (danh sách thư viện)
```

**Giảng viên nói:** *"Đây là lý do vì sao hôm nay ta dùng cả 2 — GitHub để bàn giao cho dev, Streamlit link để bàn giao cho Sales. Hai kênh, hai đối tượng, một sản phẩm."*

---

## ⏸️ Break + Checkpoint (10 phút)

**3 câu checkpoint — học viên tự ghi ra giấy:**

1. Handoff thành công nghĩa là gì? Tiêu chuẩn vàng là gì?
2. 7 Thành tố của hệ thống AI — kể tên 5/7 thành tố.
3. GitHub + Streamlit giúp gì cho việc bàn giao? Mỗi cái dành cho đối tượng nào?

**Trả lời chuẩn:** (giảng viên công bố sau break)
1. Handoff thành công = người nhận có đủ ngữ cảnh, không cần hỏi lại. Tiêu chuẩn vàng: đủ dữ liệu + trạng thái + quy tắc + người chịu trách nhiệm tiếp theo.
2. Input + AI Agent + Tools + Knowledge Base + Memory + Workflow + Output
3. GitHub → bàn giao cho kỹ thuật (source code). Streamlit link → bàn giao cho Sales/Manager (web app không cần cài phần mềm).

---

## 🎬 Demo Live: 4 Giai Đoạn Xây Hệ Thống Lead Scoring (40 phút)

> ⚠️ Refresh note: hành vi/UI Antigravity có thể thay đổi theo phiên bản — đối chiếu https://antigravity.google/docs và chạy thử demo trước buổi dạy.

> **Giảng viên thực hiện live. Học viên quan sát và ghi chép quy trình.**

### Giai đoạn 1: Tạo `lead_scoring_skill.md` bằng Antigravity (8 phút)

**Mục tiêu:** Tạo file Skill — bộ não chuyên môn về Lead Scoring cho AI.

**Prompt gửi cho Antigravity:**
```
Hãy tạo file lead_scoring_skill.md là bộ kỹ năng chấm điểm khách hàng 
tiềm năng (Lead Scoring) cho ngành Bất Động Sản. 

Bao gồm:
- Định nghĩa Lead Scoring và tại sao quan trọng
- Quy trình chấm điểm 5 tiêu chí: Ngân sách, Mức độ quan tâm, 
  Thời gian mua, Nguồn khách, Tương tác
- Cách phân loại HOT/WARM/COLD
- Lưu ý khi AI chấm điểm tự động (giới hạn, rủi ro)
- Giao thức bàn giao kết quả cho Sales
```

**Giảng viên nói:** *"Đây là bước tạo 'Skill' — file .md này định nghĩa AI phải hiểu gì về Lead Scoring trước khi viết code. Đây là thành tố Knowledge Base trong 7 thành tố."*

**Lưu file:** `Desktop/Buoi7/lead_scoring_skill.md`

---

### Giai đoạn 2: Tải Dữ Liệu + Tiêu Chí → Kiểm tra Google Sheets (7 phút)

**Mục tiêu:** Chuẩn bị Input và Knowledge Base — đảm bảo AI đọc được.

**Thực hiện:**
1. Mở file `khach_hang_bds_500.xlsx` → xem cấu trúc cột (tên, SĐT, ngân sách, nguồn, v.v.)
2. Mở file `tieu_chi_cham_diem.txt` → đọc lại nội dung tiêu chí
3. Upload lên Google Sheets → **Bật chế độ Public** (Anyone with link can view)
4. Copy link Google Sheets

**Giảng viên nói:** *"Ta mở public để Streamlit đọc được mà không cần token. Đây là approach đơn giản nhất — phù hợp cho demo. Phần thực hành nâng cao sẽ dùng Service Account bảo mật hơn."*

> ⚠️ Nhắc học viên: **Không bao giờ share token hoặc credentials** trong file code public. Google Sheets public = chỉ đọc, không edit được từ bên ngoài → an toàn cho dữ liệu mẫu.

---

### Giai đoạn 3: Tạo `app_lead_scoring.py` với Streamlit (15 phút)

**Mục tiêu:** Xây giao diện Checkpoint — nơi Sales duyệt kết quả AI.

**Nạp vào Antigravity:**
1. Kéo thả `lead_scoring_skill.md` vào chat
2. Kéo thả `tieu_chi_cham_diem.txt` vào chat
3. Kéo thả `khach_hang_bds_500.xlsx` vào chat (hoặc paste link Sheets)

**Prompt gửi cho Antigravity:**
```
Dựa trên lead_scoring_skill.md và tieu_chi_cham_diem.txt, hãy viết file 
app_lead_scoring.py sử dụng Streamlit.

Yêu cầu:
1. Đọc dữ liệu từ khach_hang_bds_500.xlsx (hoặc Google Sheets link)
2. AI tự động chấm điểm từng khách theo 5 tiêu chí trong tieu_chi_cham_diem.txt
3. Hiển thị bảng dữ liệu bằng st.data_editor — Sales có thể chỉnh sửa điểm
4. Cột "Trạng thái" gồm 3 lựa chọn: HOT / WARM / COLD (tự động gợi ý theo điểm)
5. Nút "✅ Duyệt và Xuất Excel" → export file leads_scored.xlsx chỉ gồm khách đã duyệt
6. Hiển thị metric tổng quan: Tổng khách | HOT | WARM | COLD | Đã duyệt

Tạo thêm file requirements.txt với các thư viện cần thiết.
Tiếng Việt có dấu. Giao diện sạch, chuyên nghiệp.
```

**Điểm chờ học viên quan sát:**
- AI tự viết logic chấm điểm từ `tieu_chi_cham_diem.txt`
- `st.data_editor` → bảng có thể chỉnh sửa trực tiếp trên web
- Export Excel button → đây là điểm **Handoff cho Sales**

**Lưu 2 file:** `Desktop/Buoi7/app_lead_scoring.py` và `Desktop/Buoi7/requirements.txt`

**Chạy thử local:**
```bash
cd Desktop/Buoi7
streamlit run app_lead_scoring.py
```

---

### Giai đoạn 4: Push GitHub → Deploy Streamlit Cloud → Copy Link (10 phút)

**Mục tiêu:** Biến app local thành link web có thể share cho cả team.

> **Lưu ý phân tầng:** Với học viên yếu hoặc kẹt tài khoản GitHub/Streamlit — đạt tối thiểu buổi này = app chạy local + tick duyệt HITL + xuất Excel. Deploy cloud là tiêu chí nâng cao, có thể hoàn thành ở BTVH.

**Bước 4a — Push lên GitHub:**
```bash
# Trong thư mục Desktop/Buoi7
git init
git add .
git commit -m "first commit: lead scoring app"

# Tạo repo mới trên github.com rồi kết nối:
git remote add origin https://github.com/[username]/lead-scoring-bds.git
git push -u origin main
```

> ⚠️ **Nếu lỗi git push:** Kiểm tra `git config --global user.email` và `git config --global user.name` đã thiết lập chưa.

**Bước 4b — Deploy Streamlit Cloud:**
1. Vào `share.streamlit.io` → Đăng nhập GitHub
2. Click **"New app"**
3. Chọn repository `lead-scoring-bds` → Branch `main` → Main file: `app_lead_scoring.py`
4. Click **"Deploy!"** → Chờ 1-3 phút
5. **Copy link** dạng `https://[username]-lead-scoring-bds.streamlit.app`

**Bước 4c — Kiểm tra Checkpoint:**
1. Mở link trên điện thoại (không cần login, không cần cài app)
2. Tick duyệt ít nhất 1 khách hàng trên giao diện Streamlit
3. Click **"✅ Duyệt và Xuất Excel"** → Download file `leads_scored.xlsx`
4. Mở file Excel → xác nhận đúng khách đã tick

**Giảng viên nói:** *"Đây là điểm Handoff hoàn chỉnh: AI chấm điểm → Sales duyệt trên web → nhận Excel sạch. GitHub giữ code, Streamlit giữ link. Ai cũng truy cập được, không cần cài phần mềm."*

---

> [!IMPORTANT]
> **HƯỚNG DẪN DẠY VỚI 1 WORKSPACE XUYÊN SUỐT (BRIDGE LAYER):**
> Nhằm giữ nguyên nội dung Slide chính thức của MindX nhưng vẫn tối ưu hóa hiệu quả tích lũy năng lực của học viên, Giảng viên hướng dẫn lớp thực hành buổi này **trực tiếp bên trong workspace duy nhất của học viên** (`my-workspace` đã setup ở Buổi 1-6).
> - **Cách tổ chức file:** Học viên tạo handoff contract cho workflow cá nhân tại `docs/handoff-contracts.md` trong `my-workspace/` — kết nối với workflow đã xây ở Buổi 4.
> - **Cá nhân hóa (Khuyến nghị):** Đối với học viên muốn thiết kế handoff cho quy trình thật của họ (không phải bài demo trong lớp), khuyến khích họ mở file [session-07-bridge.md](plans/260710-workspace-bridge/bridge-guides/session-07-bridge.md) để map kịch bản multi-agent sang workflow thực tế và viết handoff contract trong workspace cá nhân.

## 🛠️ Phần Thực Hành: Nâng Cấp Bảo Mật + UI (30 phút)

> **Học viên tự thực hành sau khi app cơ bản đã chạy. Giảng viên đi từng bàn hỗ trợ.**

### Thực hành A — Bảo mật: Google Cloud Service Account (15 phút)

**Bối cảnh:** App demo dùng Google Sheets public → không phù hợp cho dữ liệu thực khách hàng.

**Mục tiêu nâng cấp:** Đọc Sheet private bằng Service Account — không cần share public.

**Prompt yêu cầu Antigravity:**
```
Nâng cấp app_lead_scoring.py để đọc Google Sheets private bằng 
Google Cloud Service Account.

Yêu cầu:
1. Hướng dẫn tạo Service Account trong Google Cloud Console
2. Viết code dùng gspread + google-auth để authenticate
3. Đọc Sheet private theo sheet_id (không cần public link)
4. Secrets được lưu trong .streamlit/secrets.toml (không commit lên GitHub)
5. Tạo file .gitignore để loại secrets.toml

Giữ nguyên toàn bộ logic chấm điểm và UI.
```

**Giảng viên giải thích:**
- `secrets.toml` = nơi lưu credentials → KHÔNG commit lên GitHub
- `.gitignore` = danh sách file git bỏ qua khi push
- Streamlit Cloud có phần riêng để nhập Secrets (Settings → Secrets)

---

### Thực hành B — UI Nâng Cao (15 phút)

**Mục tiêu:** Làm app trông chuyên nghiệp hơn — xứng đáng demo cho sếp.

**Prompt yêu cầu Antigravity:**
```
Nâng cấp giao diện app_lead_scoring.py với các tính năng sau:

1. Dashboard header: st.metric hiển thị 4 chỉ số lớn:
   - Tổng khách hàng | HOT Leads | WARM Leads | Tỷ lệ chuyển đổi dự kiến
   
2. Logo và tiêu đề: st.image (logo công ty) + st.title với emoji 🏠

3. CSS custom: nền trắng sạch, HOT row highlight màu đỏ nhạt, 
   WARM row màu vàng nhạt, COLD row màu xanh nhạt

4. Sidebar filter: Lọc theo Nguồn khách (Facebook/Referral/Walk-in) 
   và khoảng ngân sách

5. Thêm cột "Ghi chú Sales" trong st.data_editor để Sales ghi nhận ý kiến

Tiếng Việt, chuyên nghiệp, phù hợp demo cho giám đốc kinh doanh BĐS.
```

---

## ✅ Checklist Nghiệm Thu (6 tiêu chí)

| # | Tiêu chí | Cách kiểm tra |
|---|----------|---------------|
| 1 | Vẽ được sơ đồ 4 bước Workflow (Ingest → Process → Review → Handoff) | Học viên vẽ lên giấy, giảng viên xem |
| 2 | Điền được bảng kiểm tra 7 Thành tố (gán vào hệ thống Lead Scoring) | Học viên điền bảng in sẵn hoặc vở |
| 3 | App Streamlit chạy được trên local (`streamlit run app_lead_scoring.py`) | Mở `localhost:8501` trên máy học viên |
| 4 | Deploy lên Streamlit Cloud → có link web công khai | Share.streamlit.io hiển thị app online |
| 5 | Đã chạy Checkpoint: tick duyệt ít nhất 1 khách hàng trên app | Giảng viên xem trực tiếp trên màn hình học viên |
| 6 | Đã xuất file Excel thành công (`leads_scored.xlsx`) | Mở file → xem có dữ liệu đúng khách đã duyệt |

> **Lộ trình đạt tối thiểu (cho học viên yếu / kẹt tài khoản):** Đạt tối thiểu = **app chạy local + tick duyệt HITL + xuất Excel** (tiêu chí 1, 2, 3, 5, 6). **Deploy Streamlit Cloud (tiêu chí 4) = tiêu chí nâng cao hoặc BTVH** — không bắt buộc hoàn thành ngay trong buổi.

---

## 🚨 Lỗi Phổ Biến & Cách Can Thiệp

| Lỗi | Dấu hiệu | Can thiệp |
|-----|----------|-----------|
| **`streamlit: command not found`** | Terminal báo lỗi khi chạy `streamlit run` | `pip install streamlit` → restart terminal, thử lại |
| **Deploy Streamlit lỗi** | App hiển thị "Error" sau khi deploy | Kiểm tra `requirements.txt` đủ thư viện: `streamlit`, `pandas`, `openpyxl`, `gspread` |
| **GitHub push lỗi authentication** | Terminal hỏi username/password hoặc báo 403 | Dùng GitHub Personal Access Token thay password — tạo tại Settings → Developer Settings → Tokens |
| **Git email/name chưa config** | Lỗi "Please tell me who you are" | `git config --global user.email "email@example.com"` và `git config --global user.name "Ten"` |
| **App không đọc được Sheet** | Lỗi `URLError` hoặc bảng trống | Kiểm tra link Sheets đã bật Public chưa; không dán trực tiếp URL có `/edit` vào |
| **AI chấm điểm sai** | Tất cả khách đều 0 điểm hoặc cùng điểm | Kiểm tra `tieu_chi_cham_diem.txt` đã nạp vào chat trước khi prompt chưa |
| **`st.data_editor` không hiển thị** | Bảng trắng hoặc lỗi AttributeError | Phiên bản Streamlit quá cũ; chạy `pip install --upgrade streamlit` |
| **Secrets.toml bị commit** | GitHub hiển thị file credentials | Xóa ngay: `git rm --cached .streamlit/secrets.toml` → thêm vào `.gitignore` → push lại |
| **App chạy local nhưng Cloud lỗi** | Cloud hiển thị ModuleNotFoundError | Thiếu thư viện trong `requirements.txt` — thêm đủ tên package, mỗi tên 1 dòng |

---

## 🎓 Bài Tập Về Nhà

**Đề bài:** Tạo 1 App quản lý công việc trong ngành của bạn — deploy lên Streamlit Cloud, gửi link Group.

**Hướng dẫn:**
1. Chọn 1 bài toán thực tế trong công việc (quản lý đơn hàng, chấm điểm nhân viên, theo dõi dự án, v.v.)
2. Chuẩn bị file dữ liệu `.xlsx` từ dữ liệu thực hoặc mẫu (tối thiểu 20 dòng)
3. Viết file tiêu chí chấm điểm / phân loại `.txt` theo tiêu chuẩn ngành
4. Dùng Antigravity → tạo Skill .md → tạo App Streamlit → push GitHub → deploy
5. Gửi **link Streamlit** vào Group lớp (không cần gửi code)

**Tiêu chí chấm BTVH:**
- [ ] App có ít nhất 1 chức năng Checkpoint (người duyệt trước khi xuất)
- [ ] Deploy thành công → link mở được không cần đăng nhập
- [ ] Có ít nhất 3 chỉ số (metric) tổng quan
- [ ] Có tính năng xuất Excel hoặc báo cáo
- [ ] Dữ liệu thực từ ngành của học viên (không dùng y chang dữ liệu BĐS mẫu)

**Gợi ý ngành:**

| Ngành | Bài toán gợi ý |
|-------|---------------|
| Giáo dục | Chấm điểm học viên theo tiêu chí + duyệt kết quả |
| Nhà hàng | Phân loại đơn hàng theo ưu tiên + xuất phiếu bếp |
| HR | Sàng lọc CV ứng viên theo tiêu chí + duyệt shortlist |
| Kế toán | Phân loại giao dịch + gắn cờ bất thường để duyệt |
| Logistics | Phân loại đơn vận chuyển theo độ ưu tiên + xuất lộ trình |

---

## 📌 Tổng Kết Buổi 7

| Chủ đề | Điểm mấu chốt |
|--------|---------------|
| **Tư duy Handoff** | Người nhận phải có đủ ngữ cảnh, không cần hỏi lại. 2 kênh: Excel (Sales) và GitHub (IT). |
| **Human-in-the-Loop** | AI không bao giờ chạy 100% tự động ở giai đoạn đầu. Level 2 (Giám sát) là điểm bắt đầu khôn ngoan. |
| **Audit 7 Thành tố** | Công cụ để "giải mã" bất kỳ hệ thống AI nào — từ Lead Scoring đến hệ thống phức tạp. |
| **GitHub + Streamlit** | Bộ đôi handoff hoàn hảo. GitHub lưu code cho dev. Streamlit tạo link web cho mọi người. |

---

## 🔗 Liên kết tiếp theo

- **Buổi 8** → AI Operations & Kiểm toán hệ thống (Org & Audit) — kiến trúc 3 tầng, /audit command, cảnh báo tự động
- File `lead_scoring_skill.md` và `app_lead_scoring.py` tạo hôm nay → sẽ tiếp tục nâng cấp ở buổi 10–11
- Học viên giữ lại GitHub repo → đây là portfolio kỹ thuật đầu tiên của bạn

---

*Hướng dẫn này dành cho giảng viên. Không chia sẻ trực tiếp cho học viên.*  
*Buổi 7 / 11 · Phase 2 — Modify · Thời lượng: 3 giờ*

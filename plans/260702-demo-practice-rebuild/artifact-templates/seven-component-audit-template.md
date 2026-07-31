# Template: Kiểm Toán 7 Thành Phần Workspace (Seven-Component Audit)

> Template này giúp bạn kiểm tra toàn diện workspace AI theo **7 thành phần cốt lõi**, đảm bảo workspace sẵn sàng cho demo và trình bày dự án.

---

## 1. Tổng Quan 7 Thành Phần

Một workspace AI hoàn chỉnh cần đầy đủ 7 thành phần:

```
┌─────────────────────────────────────────────────────────────┐
│                   7 THÀNH PHẦN WORKSPACE                    │
│                                                             │
│   ① Cơ sở Kiến thức    ─── Dữ liệu & thông tin nền tảng   │
│   ② Kỹ năng (Skills)   ─── Khả năng chuyên biệt của AI    │
│   ③ Quy tắc (Rules)    ─── Nguyên tắc hành xử             │
│   ④ Quy trình          ─── Workflow & automation           │
│   ⑤ Tác tử (Agents)    ─── AI agents chuyên biệt          │
│   ⑥ Hợp đồng Bàn giao  ─── Handoff giữa agents           │
│   ⑦ Kiểm toán & Gỡ lỗi ─── Audit trail & debugging       │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Chi Tiết Kiểm Toán Từng Thành Phần

---

### Thành phần 1: Cơ Sở Kiến Thức (Knowledge Base)

> Dữ liệu, tài liệu, và thông tin nền tảng mà AI agent cần để hoạt động.

#### Checklist

- [ ] **KB-01:** Có ít nhất 3 file kiến thức liên quan đến dự án
- [ ] **KB-02:** Kiến thức được tổ chức theo thư mục rõ ràng (không để tất cả ở root)
- [ ] **KB-03:** File kiến thức sử dụng format Markdown, có heading phân cấp
- [ ] **KB-04:** Nội dung kiến thức chính xác, cập nhật, không chứa thông tin lỗi thời
- [ ] **KB-05:** Có file brand voice / identity documentation
- [ ] **KB-06:** Dữ liệu mẫu (sample data) sẵn sàng cho demo
- [ ] **KB-07:** Không chứa thông tin nhạy cảm (mật khẩu, API key, dữ liệu cá nhân thật)

#### Thang điểm

| Điểm | Mô tả |
|------|-------|
| **1 — Thiếu** | Không có file kiến thức nào hoặc chỉ có 1 file sơ sài |
| **2 — Cơ bản** | Có 1-2 file nhưng chưa tổ chức, thiếu nhiều thông tin |
| **3 — Đạt** | Có 3+ file, tổ chức tương đối, đủ thông tin cơ bản |
| **4 — Tốt** | File đầy đủ, cấu trúc rõ ràng, có dữ liệu mẫu |
| **5 — Xuất sắc** | Kiến thức toàn diện, cập nhật, có brand documentation, dữ liệu mẫu phong phú |

#### Bằng chứng cần có

- Screenshot cấu trúc thư mục kiến thức
- 1-2 file kiến thức mẫu mở ra xem nội dung
- Demo AI trả lời câu hỏi dựa trên knowledge base

#### Lỗi thường gặp

- ❌ Để tất cả kiến thức trong 1 file dài → AI khó tìm thông tin
- ❌ Copy-paste từ internet không chỉnh sửa → Không phù hợp ngữ cảnh
- ❌ Quên xóa thông tin nhạy cảm trong dữ liệu mẫu
- ❌ Kiến thức bằng tiếng Anh nhưng output yêu cầu tiếng Việt

---

### Thành phần 2: Kỹ Năng — Skills

> Các khả năng chuyên biệt được lập trình cho AI agent.

#### Checklist

- [ ] **SK-01:** Có ít nhất 2 skill được tạo (trong thư mục `.agents/skills/`)
- [ ] **SK-02:** Mỗi skill có file `SKILL.md` với YAML frontmatter đầy đủ (`name`, `description`)
- [ ] **SK-03:** Skill có hướng dẫn rõ ràng (instructions) cho AI
- [ ] **SK-04:** Skill có ví dụ input/output cụ thể
- [ ] **SK-05:** Skill hoạt động khi test — tạo output đúng như mong đợi
- [ ] **SK-06:** Tên skill dùng kebab-case, mô tả ngắn gọn nhưng đủ ý

#### Thang điểm

| Điểm | Mô tả |
|------|-------|
| **1 — Thiếu** | Không có skill nào được tạo |
| **2 — Cơ bản** | Có 1 skill nhưng thiếu frontmatter hoặc ví dụ |
| **3 — Đạt** | Có 2+ skills, frontmatter đầy đủ, hoạt động cơ bản |
| **4 — Tốt** | Skills hoạt động tốt, có ví dụ chi tiết, output chất lượng |
| **5 — Xuất sắc** | Skills chuyên sâu, có Design Mentor flow, output xuất sắc, tái sử dụng được |

#### Bằng chứng cần có

- File `SKILL.md` mở ra xem cấu trúc
- Demo chạy skill với input thật → xem output
- So sánh output với/không có skill

#### Lỗi thường gặp

- ❌ Skill quá chung chung (ví dụ: "viết bất cứ gì") → Output không chuyên sâu
- ❌ Thiếu YAML frontmatter → Workspace không nhận diện được skill
- ❌ Không có ví dụ → AI không hiểu kỳ vọng output
- ❌ Hướng dẫn mâu thuẫn trong cùng 1 skill

---

### Thành phần 3: Quy Tắc — Rules

> Nguyên tắc hành xử giúp AI hoạt động nhất quán.

#### Checklist

- [ ] **RL-01:** Có file `AGENTS.md` hoặc `GEMINI.md` ở root workspace
- [ ] **RL-02:** Có ít nhất 5 quy tắc được định nghĩa
- [ ] **RL-03:** Mỗi quy tắc có ví dụ đúng (✅) và ví dụ sai (❌)
- [ ] **RL-04:** Quy tắc bao phủ đủ 5 loại: Ngôn ngữ, Định dạng, Dữ liệu, Chất lượng, An toàn
- [ ] **RL-05:** Quy tắc không mâu thuẫn với nhau
- [ ] **RL-06:** AI tuân thủ quy tắc khi test (output khớp với rules)

#### Thang điểm

| Điểm | Mô tả |
|------|-------|
| **1 — Thiếu** | Không có file rules hoặc file trống |
| **2 — Cơ bản** | Có 1-2 quy tắc nhưng thiếu ví dụ |
| **3 — Đạt** | Có 3-5 quy tắc, có ví dụ, bao phủ 3+ loại |
| **4 — Tốt** | 5+ quy tắc, đủ 5 loại, ví dụ rõ ràng |
| **5 — Xuất sắc** | Quy tắc toàn diện, AI tuân thủ 100% khi test, có giải thích lý do |

#### Bằng chứng cần có

- File `AGENTS.md` mở ra xem nội dung quy tắc
- Demo: yêu cầu AI tạo output → kiểm tra AI có tuân thủ rules không
- Ví dụ 1 lần AI vi phạm rule và cách bạn sửa

#### Lỗi thường gặp

- ❌ Quy tắc quá mơ hồ: "Viết cho tốt" (tốt là gì?)
- ❌ Quy tắc mâu thuẫn: Rule A "luôn formal" + Rule B "gần gũi, dùng emoji"
- ❌ Quá nhiều quy tắc (>20) → AI "bối rối", output chậm
- ❌ Không test xem AI có tuân thủ không

---

### Thành phần 4: Quy Trình — Workflows

> Chuỗi các bước tự động hóa để hoàn thành một nhiệm vụ phức tạp.

#### Checklist

- [ ] **WF-01:** Có ít nhất 1 workflow được thiết kế (OIPO hoặc format khác)
- [ ] **WF-02:** Workflow có input/output rõ ràng cho từng bước
- [ ] **WF-03:** Mỗi bước chỉ rõ ai/agent nào thực hiện
- [ ] **WF-04:** Có checkpoint (điểm kiểm tra) giữa các bước
- [ ] **WF-05:** Workflow đã được test end-to-end ít nhất 1 lần
- [ ] **WF-06:** Có ghi nhận kết quả test (Output thực tế vs. mong muốn)

#### Thang điểm

| Điểm | Mô tả |
|------|-------|
| **1 — Thiếu** | Không có workflow nào |
| **2 — Cơ bản** | Có ý tưởng workflow nhưng chưa viết ra cụ thể |
| **3 — Đạt** | Có 1 workflow OIPO đầy đủ, đã thiết kế nhưng chưa test kỹ |
| **4 — Tốt** | Workflow hoạt động, đã test, có kết quả ghi nhận |
| **5 — Xuất sắc** | Workflow đã qua 2+ vòng PDCA cải thiện, hiệu quả rõ rệt |

#### Bằng chứng cần có

- File workflow (OIPO template đã điền)
- Demo chạy workflow từ đầu đến cuối
- Log kết quả test (Output thực tế)

#### Lỗi thường gặp

- ❌ Workflow quá dài (>10 bước) mà không tách thành sub-workflows
- ❌ Không có checkpoint → Lỗi ở bước 2 nhưng chạy đến bước 7 mới phát hiện
- ❌ Không ghi nhận Output thực tế → Không biết cải thiện gì
- ❌ Workflow "trên giấy" — chưa bao giờ test thực tế

---

### Thành phần 5: Tác Tử — Agents

> AI agent chuyên biệt, mỗi agent một vai trò cụ thể.

#### Checklist

- [ ] **AG-01:** Có ít nhất 2 micro-agent được tạo
- [ ] **AG-02:** Mỗi agent có vai trò (role) rõ ràng, không chồng chéo
- [ ] **AG-03:** Mỗi agent có phạm vi (scope): LÀM gì và KHÔNG LÀM gì
- [ ] **AG-04:** Input/Output được định nghĩa tường minh
- [ ] **AG-05:** Agent có quy tắc riêng (constraints)
- [ ] **AG-06:** Có ví dụ tương tác mẫu cho mỗi agent
- [ ] **AG-07:** Agent đã được test và tạo output đúng kỳ vọng

#### Thang điểm

| Điểm | Mô tả |
|------|-------|
| **1 — Thiếu** | Không có agent nào ngoài agent mặc định |
| **2 — Cơ bản** | Có 1 agent nhưng vai trò chung chung, thiếu scope |
| **3 — Đạt** | Có 2+ agents, role rõ ràng, có scope |
| **4 — Tốt** | Agents chuyên biệt, có ví dụ, hoạt động tốt |
| **5 — Xuất sắc** | Agents micro-focused, phối hợp tốt với nhau, output chất lượng cao |

#### Bằng chứng cần có

- File cấu hình agent
- Demo tương tác với từng agent
- So sánh output giữa 2 agent khác nhau cho cùng 1 input

#### Lỗi thường gặp

- ❌ Agent quá rộng: "Trợ lý làm mọi thứ" → Output chung chung
- ❌ 2 agent có phạm vi chồng chéo → Không biết dùng agent nào
- ❌ Thiếu phần "KHÔNG LÀM" → Agent cố làm ngoài khả năng
- ❌ Không test agent trước khi demo

---

### Thành phần 6: Hợp Đồng Bàn Giao — Handoff Contracts

> Quy ước chuyển giao công việc giữa các agent hoặc giữa AI và người.

#### Checklist

- [ ] **HO-01:** Xác định rõ điểm handoff: agent nào chuyển cho agent nào
- [ ] **HO-02:** Format dữ liệu bàn giao được thống nhất (cả 2 bên "nói" cùng format)
- [ ] **HO-03:** Có điều kiện trigger handoff (khi nào chuyển giao?)
- [ ] **HO-04:** Có fallback plan khi handoff thất bại
- [ ] **HO-05:** Đã test handoff giữa ít nhất 1 cặp agent

#### Thang điểm

| Điểm | Mô tả |
|------|-------|
| **1 — Thiếu** | Không có handoff nào — mọi thứ làm thủ công |
| **2 — Cơ bản** | Biết khái niệm handoff nhưng chưa implement |
| **3 — Đạt** | Có 1 handoff được thiết kế, format rõ ràng |
| **4 — Tốt** | Handoff hoạt động, có trigger condition, đã test |
| **5 — Xuất sắc** | Multi-agent handoff chain mượt mà, có fallback, có log |

#### Bằng chứng cần có

- Sơ đồ handoff giữa các agent (ai → ai, khi nào)
- Demo handoff: Agent A output → Agent B nhận và xử lý
- Log handoff cho thấy dữ liệu được chuyển giao đúng

#### Lỗi thường gặp

- ❌ Output agent A không khớp format Input agent B → Handoff fail
- ❌ Không có trigger rõ ràng → Không biết khi nào handoff
- ❌ Handoff 1 chiều — agent B không xác nhận đã nhận
- ❌ Thiếu fallback → Khi handoff lỗi, workflow dừng hoàn toàn

---

### Thành phần 7: Kiểm Toán & Gỡ Lỗi — Audit & Debug

> Khả năng theo dõi, kiểm tra, và sửa lỗi hoạt động của workspace.

#### Checklist

- [ ] **AD-01:** Có log ghi nhận các lần tương tác quan trọng
- [ ] **AD-02:** Có ít nhất 1 chu kỳ PDCA được ghi nhận đầy đủ
- [ ] **AD-03:** Biết cách xem conversation history/transcript
- [ ] **AD-04:** Có ghi nhận lỗi đã gặp và cách sửa
- [ ] **AD-05:** Có before/after comparison cho ít nhất 1 cải thiện
- [ ] **AD-06:** Workspace hoạt động ổn định (không crash, không lỗi lặp)
- [ ] **AD-07:** Biết cách reset/rollback khi cần

#### Thang điểm

| Điểm | Mô tả |
|------|-------|
| **1 — Thiếu** | Không có bất kỳ ghi nhận nào, không biết debug |
| **2 — Cơ bản** | Có ghi chú vài lỗi nhưng không hệ thống |
| **3 — Đạt** | Có 1 PDCA cycle, biết xem log cơ bản |
| **4 — Tốt** | PDCA đầy đủ, log rõ ràng, biết debug khi lỗi |
| **5 — Xuất sắc** | Nhiều PDCA cycles, before/after rõ ràng, debugging thành thạo, có playbook xử lý lỗi |

#### Bằng chứng cần có

- File PDCA log (ít nhất 1 cycle đầy đủ Plan-Do-Check-Act)
- Screenshot hoặc mô tả lỗi đã gặp + cách sửa
- Before/after comparison cho 1 cải thiện

#### Lỗi thường gặp

- ❌ Không ghi log → Không thể truy vết khi lỗi xảy ra
- ❌ PDCA chỉ có Plan + Do, thiếu Check + Act → Không cải thiện được gì
- ❌ Sửa lỗi mà không ghi nhận → Lỗi tương tự lặp lại
- ❌ Không biết cách xem transcript/history khi AI hoạt động sai

---

## 3. Bảng Điểm Tổng Hợp (Summary Scorecard)

Điền điểm từng thành phần sau khi kiểm toán:

| # | Thành phần | Điểm (1-5) | Ghi chú |
|---|-----------|-----------|---------|
| 1 | Cơ sở Kiến thức (Knowledge Base) | __ /5 | |
| 2 | Kỹ năng (Skills) | __ /5 | |
| 3 | Quy tắc (Rules) | __ /5 | |
| 4 | Quy trình (Workflows) | __ /5 | |
| 5 | Tác tử (Agents) | __ /5 | |
| 6 | Hợp đồng Bàn giao (Handoff) | __ /5 | |
| 7 | Kiểm toán & Gỡ lỗi (Audit & Debug) | __ /5 | |
| | **TỔNG ĐIỂM** | **__ /35** | |

### Quy đổi mức độ sẵn sàng

| Tổng điểm | Mức độ | Ý nghĩa |
|-----------|--------|---------|
| **30-35** | 🟢 Xuất sắc | Workspace sẵn sàng cho demo chuyên nghiệp |
| **25-29** | 🟡 Tốt | Workspace hoạt động tốt, cần polish một vài điểm |
| **20-24** | 🟠 Đạt | Workspace đủ cơ bản, cần cải thiện 2-3 thành phần |
| **15-19** | 🔴 Cần cải thiện | Nhiều thành phần thiếu hoặc yếu, cần bổ sung đáng kể |
| **< 15** | ⚫ Chưa sẵn sàng | Workspace chưa đủ điều kiện trình bày, cần xây dựng lại |

---

## 4. Đánh Giá Mức Độ Sẵn Sàng Tổng Thể

Sau khi tính tổng điểm, trả lời các câu hỏi sau:

### Kiểm tra sẵn sàng demo

- [ ] Workspace khởi động không lỗi
- [ ] Có thể demo ít nhất 1 workflow end-to-end trong < 5 phút
- [ ] Output AI nhất quán với brand voice và rules
- [ ] Không có thông tin nhạy cảm trong bất kỳ file nào
- [ ] Có dữ liệu mẫu sẵn sàng (không cần nhập liệu live khi demo)
- [ ] Slide trình bày đã chuẩn bị (nếu yêu cầu)

### Câu hỏi tự đánh giá

1. **Nếu người khác mở workspace này, họ có hiểu cách dùng không?** (Y/N)
2. **Workspace có giải quyết được vấn đề thực tế không?** (Y/N)
3. **Bạn có tự tin demo live không?** (Y/N)
4. **Có điều gì bạn muốn cải thiện nhưng chưa kịp?** (Ghi rõ)

---

## 5. Đề Xuất Cải Thiện

Dựa trên kết quả kiểm toán, lập danh sách cải thiện theo thứ tự ưu tiên:

```markdown
## Danh sách cải thiện

### 🔴 Ưu tiên CAO (cần sửa trước demo)
1. {{Thành phần}} — {{Vấn đề}} — {{Hành động cụ thể}}
2. {{...}}

### 🟡 Ưu tiên TRUNG BÌNH (nên sửa nếu còn thời gian)
1. {{Thành phần}} — {{Vấn đề}} — {{Hành động cụ thể}}
2. {{...}}

### 🟢 Ưu tiên THẤP (cải thiện sau demo)
1. {{Thành phần}} — {{Vấn đề}} — {{Hành động cụ thể}}
2. {{...}}
```

### Ví dụ đề xuất cải thiện

| Ưu tiên | Thành phần | Vấn đề | Hành động |
|---------|-----------|--------|-----------|
| 🔴 Cao | Rules | Chỉ có 2 rules, thiếu Data & Safety | Thêm 3 rules: không bịa số liệu, bảo mật thông tin, format output |
| 🔴 Cao | Audit | Chưa có PDCA nào | Chạy 1 PDCA cycle cho Content Writer Skill |
| 🟡 TB | Handoff | Chưa test handoff giữa agents | Thiết kế handoff: Engagement Analyzer → Content Writer |
| 🟢 Thấp | Knowledge | Dữ liệu mẫu chưa phong phú | Thêm 2 tháng dữ liệu engagement mẫu |

---

## 6. Checklist Hoàn Thành Kiểm Toán

- [ ] Đã kiểm tra đầy đủ 7 thành phần
- [ ] Mỗi thành phần có điểm số (1-5) và ghi chú
- [ ] Bảng điểm tổng hợp đã điền
- [ ] Đánh giá mức độ sẵn sàng đã hoàn thành
- [ ] Danh sách cải thiện đã sắp xếp theo ưu tiên
- [ ] Đã xác định top 3 hành động cần làm ngay

---

## 7. Ghi Chú Cho Sinh Viên

> **💡 Mẹo:** Làm kiểm toán này 2 lần — lần 1 ở giữa dự án (để biết cần bổ sung gì), lần 2 trước khi trình bày (để đảm bảo sẵn sàng).
>
> **⚠️ Lưu ý:** Không cần đạt điểm 5/5 ở mọi thành phần. Mục tiêu là tổng điểm ≥ 25 và không có thành phần nào dưới 2. Điểm 3 (Đạt) là đủ tốt cho hầu hết thành phần.
>
> **🔗 Liên kết template khác:**
> - Thành phần 2 (Skills): Xem `content-writer-skill-template.md`
> - Thành phần 3 (Rules): Xem `clear-rules-template.md`
> - Thành phần 4 (Workflows): Xem `oipo-workflow-template.md`
> - Thành phần 5 (Agents): Xem `micro-agent-template.md`
> - Phân tích dự án tổng thể: Xem `scope-analysis-template.md`
>
> **📊 Tự động kiểm toán:** Bạn có thể tạo một AI agent chuyên kiểm toán workspace bằng cách sử dụng template này làm kiến thức nền. Agent sẽ kiểm tra từng thành phần và báo cáo điểm số.

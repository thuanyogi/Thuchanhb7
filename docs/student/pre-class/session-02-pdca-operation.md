# Pre-class Buổi 2: PDCA Operation

> Đọc tài liệu này trước buổi học để tận dụng tối đa thời gian thực hành trên lớp.

---

## 1. Recap buổi 1 — Tổng quan hệ thống

Buổi trước bạn đã làm quen với:

| Khái niệm | Ý nghĩa |
|-----------|----------|
| Agentic Workspace | Không gian làm việc nơi AI agent thực hiện nhiệm vụ theo quy trình |
| 7 thành tố | Agent, Skill, Knowledge, Rule, Workflow, Handoff, Human Checkpoint |
| 3 cấp độ | Chatbot → Skill → Workspace (tăng dần mức tự chủ) |
| Design Mentor | Agent hướng dẫn bạn thiết kế workspace |

**Kiểm tra nhanh:** Bạn đã tạo được workspace đầu tiên trên Antigravity chưa? Nếu chưa, hoàn thành trước buổi 2.

---

## 2. Preview buổi 2 — PDCA là gì?

PDCA (Plan-Do-Check-Act) là vòng lặp cải tiến liên tục. Thay vì giao một prompt rồi chấp nhận kết quả, bạn sẽ:

```
Plan  → Xác định mục tiêu và tiêu chí đánh giá
Do    → Giao nhiệm vụ cho workspace, chạy thử
Check → So sánh output với tiêu chí
Act   → Giữ cái tốt, sửa cái chưa đạt, lặp lại
```

### Tại sao cần PDCA?

- AI không hoàn hảo ngay lần đầu — cần iteration.
- Mỗi vòng lặp giúp bạn hiểu rõ hơn input nào cho output tốt hơn.
- PDCA biến "thử và sai" thành quy trình có hệ thống.

---

## 3. Case study: HR sàng lọc CV

Buổi 2 sẽ dùng case **sàng lọc CV ứng viên** làm ví dụ chính:

| Yếu tố | Mô tả |
|---------|--------|
| Objective | Lọc CV phù hợp vị trí tuyển dụng |
| Input | Danh sách CV (PDF/text) + Job Description |
| Process | Agent đọc CV → so khớp với JD → xếp hạng |
| Output | Danh sách ứng viên đạt/không đạt + lý do |
| Human Checkpoint | HR review top candidates trước khi mời phỏng vấn |

### Task Queue

Khi workspace xử lý nhiều CV cùng lúc, các nhiệm vụ được xếp vào **Task Queue** (hàng đợi). Mỗi task có trạng thái: pending → in progress → done/failed.

---

## 4. Bài tập chuẩn bị (làm trước buổi học)

### Bài 1: Chọn case cá nhân

Nghĩ về một quy trình lặp lại trong công việc/học tập của bạn mà bạn muốn tự động hóa. Trả lời 4 câu:

1. **Quy trình gì?** (ví dụ: tóm tắt email hàng ngày, phân loại feedback khách hàng)
2. **Input là gì?** (file, text, form, dữ liệu nào?)
3. **Output mong muốn?** (báo cáo, danh sách, bản nháp?)
4. **Ai kiểm duyệt?** (bạn, sếp, đồng nghiệp?)

### Bài 2: Thử viết tiêu chí đánh giá

Với case bạn chọn ở Bài 1, viết 2-3 tiêu chí để đánh giá output "đạt" hay "chưa đạt". Ví dụ:
- CV screening: "Ứng viên đạt phải có ≥3 năm kinh nghiệm trong lĩnh vực liên quan"
- Email summary: "Tóm tắt phải dưới 5 dòng và không bỏ sót action item"

---

## 5. Checklist chuẩn bị workspace

Đảm bảo bạn đã sẵn sàng trước khi vào lớp:

- [ ] Đã đăng nhập được vào Google Antigravity
- [ ] Workspace buổi 1 vẫn hoạt động (thử giao 1 prompt đơn giản)
- [ ] Đã nghĩ ra case cá nhân (Bài 1 ở trên)
- [ ] Đã viết ít nhất 2 tiêu chí đánh giá (Bài 2 ở trên)
- [ ] Có sẵn 2-3 file dữ liệu mẫu cho case cá nhân (nếu có)

---

## 6. Thuật ngữ buổi 2

| Thuật ngữ | Giải thích |
|-----------|-----------|
| PDCA | Plan-Do-Check-Act — vòng lặp cải tiến liên tục |
| Task Queue | Hàng đợi nhiệm vụ, workspace xử lý tuần tự hoặc song song |
| Iteration | Một lần lặp qua vòng PDCA |
| Success Metric | Tiêu chí đo lường output đạt hay chưa |
| `pdca-log.md` | File ghi lại từng vòng cải tiến — artifact chính của buổi 2 |

---

## 7. Câu hỏi suy nghĩ trước

Không cần trả lời bằng văn bản — chỉ cần suy nghĩ:

1. Nếu output lần đầu chỉ đạt 50%, bạn sẽ thay đổi gì: input, rule, hay process?
2. Làm sao biết khi nào nên dừng cải tiến (bao nhiêu vòng PDCA là đủ)?
3. Trong case HR, nếu agent bỏ sót ứng viên tốt, lỗi nằm ở đâu: input (CV format), rule (tiêu chí), hay process (cách so khớp)?

---

## Tài liệu tham khảo

- Student Handbook: `docs/student/student-handbook.md`
- Quickstart: `docs/student/quickstart.md`
- PDCA log template: `assets/templates/student-antigravity-workspace/docs/pdca-log.md`
- Antigravity docs: https://antigravity.google/docs/home

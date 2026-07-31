# Buổi 5 — Prompt Dùng Với Google Antigravity

## Cách dùng nhanh

Copy từng prompt vào Google Antigravity (AGY) theo thứ tự. Sau mỗi bước, yêu cầu AGY tạo artifact hoặc walkthrough để học viên có bằng chứng kiểm tra.

Refresh note: trước khi dạy cohort mới, kiểm tra lại UI/policy của Antigravity theo tài liệu chính thức: `https://codelabs.developers.google.com/getting-started-google-antigravity`.

## Prompt 1 — Tạo Finance Agent Theo MICRO

```text
Bạn là trợ lý thiết kế AI Agent cho buổi học "Triển khai AI Agent như nhân sự chuyên trách".

Hãy tạo Finance Agent theo khung MICRO:
- M — Mission: quản lý và phân loại chi phí doanh nghiệp.
- I — Input: dữ liệu chi tiêu gồm Date, Employee, Item, Amount.
- C — Constraints:
  - Amount > 500000 thì Status = "Cần chứng từ".
  - Item liên quan tiếp khách, khách hàng, di chuyển, công tác thì ưu tiên Category phù hợp và cần ghi chú kiểm tra chứng từ.
  - Nếu thiếu dữ liệu quan trọng, Status = "Cần kiểm tra".
  - Không ra quyết định thanh toán, chỉ phân loại và đề xuất.
- R — Role: Finance Assistant chuyên trách, chính xác, ngắn gọn.
- O — Output: JSON array đúng 7 trường: Date, Employee, Item, Amount, Category, Status, AI Note.

Trả về:
1. Agent definition dạng markdown.
2. 5 dòng dữ liệu mẫu.
3. JSON output mẫu đúng schema.
4. Danh sách rủi ro nếu prompt viết thiếu constraint.
```

## Prompt 2 — Biến Dữ Liệu Thô Thành `data.json`

```text
Bạn là Finance Agent đã được định nghĩa theo MICRO.

Hãy đọc dữ liệu chi tiêu thô dưới đây, phân loại từng dòng, áp dụng rule:
- Amount > 500000 => Status = "Cần chứng từ".
- Item liên quan tiếp khách/khách hàng/công tác/di chuyển => ghi chú cần kiểm tra chứng từ.
- Dữ liệu thiếu Date, Employee, Item hoặc Amount => Status = "Cần kiểm tra".

Dữ liệu thô:
{{PASTE_EXPENSE_ROWS_HERE}}

Yêu cầu output:
- Chỉ xuất JSON array, không giải thích thêm.
- Mỗi object có đúng field: Date, Employee, Item, Amount, Category, Status, AI Note.
- Amount là number, không dùng dấu phẩy.
```

## Prompt 3 — Tạo Apps Script API Cho Google Sheet

```text
Tôi cần tạo Apps Script Web App để nhận dữ liệu JSON expense và ghi vào Google Sheet "Admin Expense Tracker".

Hãy viết file Apps Script có hàm doPost(e), yêu cầu:
- Nhận POST body là JSON array.
- Ghi vào sheet tên "Admin Expense Tracker".
- Header cố định: Date, Employee, Item, Amount, Category, Status, AI Note.
- Append dữ liệu mới xuống cuối sheet, không clear sheet, không ghi đè dữ liệu cũ.
- Nếu sheet chưa có header thì tự tạo header.
- Trả về JSON response: { "success": true, "updatedRows": number }.
- Có try/catch và trả về lỗi JSON nếu request sai.
- Không hardcode credential.

Sau code, thêm checklist triển khai ngắn:
1. Lưu Apps Script.
2. Deploy Web App.
3. Copy URL /exec.
4. Test bằng curl hoặc Python.
```

## Prompt 4 — Tạo `send_to_sheet.py` Gọi API

```text
Hãy viết script Python tên send_to_sheet.py để đọc JSON từ stdin và gửi tới Apps Script Web App.

Biến cần dùng:
- APPS_SCRIPT_EXEC_URL = "{{APPS_SCRIPT_EXEC_URL}}"

Yêu cầu:
- Đọc stdin, parse JSON array.
- Validate mỗi row có đủ field: Date, Employee, Item, Amount, Category, Status, AI Note.
- Gửi POST request bằng requests.
- In response JSON ra terminal.
- Có xử lý lỗi: JSON sai, thiếu field, network error, status code không phải 2xx.
- Không ghi credential vào code.
- Code ngắn, dễ giải thích cho học viên.

Cuối câu trả lời, đưa lệnh chạy:
cat data.json | python send_to_sheet.py
```

## Prompt 5 — Bài Thực Hành Nâng Cao: Sync 2 Google Sheets

```text
Tôi cần script Python đồng bộ dữ liệu từ Google Sheet nhân viên sang Google Sheet admin.

Context:
- Source sheet: Data_Nhan_Vien.
- Admin sheet: Admin Expense Tracker.
- Dùng OAuth 2.0 qua file credentials.json.
- Không dùng API key cho dữ liệu riêng tư.

Yêu cầu script:
1. Kết nối Google Sheets API bằng OAuth 2.0.
2. Đọc các dòng từ Data_Nhan_Vien.
3. Tạo hoặc tìm cột SyncStatus.
4. Chỉ lấy dòng chưa có SyncStatus = "Done".
5. Append dòng mới vào Admin Expense Tracker.
6. Sau khi append thành công, đánh dấu dòng source là "Done".
7. Không xóa dữ liệu cũ, không ghi đè dữ liệu admin.
8. Có dry-run mode để xem sẽ sync bao nhiêu dòng trước khi ghi thật.

Hãy trả về:
- Cấu trúc file cần có.
- Code Python hoàn chỉnh.
- Cách chạy lần đầu.
- Cách kiểm tra chống trùng lặp bằng 2 lần chạy liên tiếp.
- Những lỗi thường gặp và cách sửa.
```

## Prompt 6 — Debug Khi Pipeline Không Chạy

```text
Bạn là debugger cho pipeline buổi 5:
Finance Agent -> data.json -> send_to_sheet.py -> Apps Script API -> Google Sheet.

Triệu chứng lỗi:
{{PASTE_ERROR_OR_SCREENSHOT_DESCRIPTION_HERE}}

Thông tin hiện có:
- Apps Script URL /exec: {{APPS_SCRIPT_EXEC_URL}}
- data.json có tồn tại: {{YES_OR_NO}}
- Python command đã chạy: {{COMMAND_USED}}
- Response terminal: {{TERMINAL_OUTPUT}}
- Google Sheet có cập nhật: {{YES_OR_NO}}

Hãy chẩn đoán theo thứ tự:
1. Lỗi input JSON.
2. Lỗi Python/package/requests.
3. Lỗi URL hoặc deploy Apps Script.
4. Lỗi quyền truy cập Google Sheet.
5. Lỗi ghi sai sheet/header.

Trả về bảng: khả năng lỗi, bằng chứng cần kiểm tra, lệnh/cách kiểm tra, cách sửa.
Không đoán mò nếu thiếu dữ liệu; hãy hỏi đúng thông tin còn thiếu.
```

## Prompt 7 — Tạo Walkthrough Nộp Bài

```text
Hãy tạo walkthrough ngắn cho artifact buổi 5 của tôi.

Artifact cần chứng minh:
- Finance Agent definition theo MICRO.
- data.json đúng 7 field.
- send_to_sheet.py chạy được.
- Apps Script API deploy thành công.
- Google Sheet Admin Expense Tracker có dữ liệu mới.
- Anti-duplication hoạt động nếu làm bài nâng cao.

Output mong muốn:
1. Checklist kiểm tra từng artifact.
2. Ảnh/screenshot nên chụp ở đâu.
3. Cách giải thích pipeline trong 60 giây.
4. 3 lỗi đã gặp và cách sửa.
5. Câu hỏi còn mở nếu có.
```

## Prompt 8 — Coach Cải Thiện MICRO

```text
Hãy review Finance Agent definition dưới đây như giảng viên buổi 5.

Agent definition:
{{PASTE_MICRO_DEFINITION_HERE}}

Chấm theo checklist:
- Mission cụ thể hay còn chung chung?
- Input đủ dữ liệu bắt buộc chưa?
- Constraints có rule định lượng chưa?
- Role có đủ chuyên trách chưa?
- Output có dùng được ngay không?
- Có rủi ro ghi sai dữ liệu hoặc tự quyết định quá mức không?

Trả về:
- Điểm 1-5 cho từng phần MICRO.
- 3 chỉnh sửa ưu tiên.
- Phiên bản MICRO đã sửa, ngắn gọn hơn.
- Câu hỏi còn mở nếu có.
```

## Lưu Ý Cho Giảng Viên

- Cho học viên chạy prompt 1 và 2 trước, chưa đụng API, để kiểm tra tư duy MICRO.
- Prompt 3 và 4 dùng cho demo pipeline đơn giản.
- Prompt 5 dùng cho nhóm nhanh hoặc bài nâng cao.
- Prompt 6 dùng khi lớp bị lỗi hàng loạt, giúp học viên học cách debug có thứ tự.
- Prompt 7 là form nộp bài cuối buổi.
- Luôn nhắc học viên không paste credential, token, hoặc dữ liệu riêng tư vào prompt.

## Câu Hỏi Còn Mở

Không có.

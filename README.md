# AI Lead Scoring & Automation System - Real Estate

Dự án hoàn thiện bài tập xây dựng hệ thống tự động hóa và chấm điểm khách hàng tiềm năng cho ngành Bất Động Sản (Real Estate).

## 🚀 Tính Năng Chính
1. **Google Sheets Connector**: Tự động tải dữ liệu khách hàng từ liên kết Google Sheets (hoặc dán CSV dự phòng).
2. **Dual-Mode Scoring Engine**:
   - **Chế độ Offline (Regex)**: Quy tắc nghiệp vụ cứng theo bộ tiêu chuẩn Việt Nam của `tieu_chi_cham_diem.txt`.
   - **Chế độ Semantic AI (Gemini)**: Phân tích ngữ nghĩa ngôn ngữ tự nhiên từ câu mô tả nhu cầu thực tế của khách hàng (yêu cầu API Key).
3. **Human-in-the-loop Interface**: Giao diện điều khiển, lọc danh sách, hiệu chỉnh thông tin, cập nhật điểm và ghi chú phê duyệt trước khi chốt.
4. **Excel Export**: Xuất báo cáo bàn giao chuyên nghiệp `.xlsx` sử dụng SheetJS.

## 🛠️ Hướng Dẫn Chạy Nhanh

### Phương Án A: Giao Diện Web App HTML/JS (Chạy Cực Nhanh)
Mở trực tiếp file `index.html` trong trình duyệt web, hoặc chạy máy chủ cục bộ bằng lệnh:
```bash
python3 -m http.server 8000
```
Sau đó mở trình duyệt truy cập: `http://localhost:8000`

### Phương Án B: Giao Diện Web App Streamlit (Tối Ưu Hóa Bằng Python)
Cài đặt các thư viện cần thiết và khởi chạy Streamlit bằng lệnh:
```bash
pip install -r requirements.txt
streamlit run app_streamlit.py
```
Ứng dụng sẽ tự động mở trên trình duyệt tại địa chỉ `http://localhost:8501`.

### Phương Án C: Chạy Chấm Điểm Qua CLI Python (Xử Lý Hàng Loạt Offline)
Chạy trực tiếp file script Python để chấm điểm và tự động xuất file Excel:
```bash
python3 app_lead_scoring.py --demo
```


## 📄 Tài Liệu Liên Quan
- Xem hướng dẫn đầy đủ tại: [lead_scoring_skill.md](file:///Users/thuanyogi/Downloads/Thuchanhb7/lead_scoring_skill.md)
- Tiêu chí chấm điểm gốc: [tieu_chi_cham_diem.txt](file:///Users/thuanyogi/Downloads/Thuchanhb7/tieu_chi_cham_diem.txt)

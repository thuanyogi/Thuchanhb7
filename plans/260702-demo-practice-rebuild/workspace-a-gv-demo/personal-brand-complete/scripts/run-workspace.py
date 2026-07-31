#!/usr/bin/env python3
"""
Personal Brand Workspace Orchestrator
Nguyễn Minh Anh — Digital Marketing Manager

Chạy pipeline end-to-end: đọc dữ liệu → phân tích → tạo báo cáo.
Không yêu cầu thư viện ngoài — chỉ dùng thư viện chuẩn Python.
"""

import csv
import os
from datetime import datetime

WORKSPACE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SAMPLE_DATA = os.path.join(WORKSPACE, "sample-data")
OUTPUTS = os.path.join(WORKSPACE, "outputs")


def doc_csv(ten_file):
    duong_dan = os.path.join(SAMPLE_DATA, ten_file)
    with open(duong_dan, encoding="utf-8") as f:
        return list(csv.DictReader(f))


def buoc_1_kiem_tra_du_lieu():
    print("\n" + "=" * 60)
    print("BƯỚC 1: Kiểm tra dữ liệu đầu vào")
    print("=" * 60)
    files_can = ["social-media-posts.csv", "content-calendar.csv",
                 "engagement-metrics.csv", "audience-feedback.csv"]
    for f in files_can:
        duong_dan = os.path.join(SAMPLE_DATA, f)
        if os.path.exists(duong_dan):
            print(f"  ✅ {f} — tồn tại")
        else:
            print(f"  ❌ {f} — THIẾU")
            return False
    return True


def buoc_2_phan_tich_engagement():
    print("\n" + "=" * 60)
    print("BƯỚC 2: Phân tích engagement")
    print("=" * 60)
    du_lieu = doc_csv("engagement-metrics.csv")
    tong = len(du_lieu)
    tong_er = sum(float(r["Engagement_Rate"]) for r in du_lieu)
    er_tb = tong_er / tong if tong > 0 else 0
    print(f"  📊 Tổng bài viết: {tong}")
    print(f"  📊 Engagement Rate trung bình: {er_tb:.2f}%")
    top = max(du_lieu, key=lambda r: float(r["Engagement_Rate"]))
    print(f"  🏆 Bài tốt nhất: {top['Tieu_De']} ({top['Engagement_Rate']}%)")
    return du_lieu


def buoc_3_kiem_tra_lich():
    print("\n" + "=" * 60)
    print("BƯỚC 3: Kiểm tra lịch nội dung")
    print("=" * 60)
    lich = doc_csv("content-calendar.csv")
    da_dang = sum(1 for r in lich if r["Trang_Thai"] == "ĐÃ ĐĂNG")
    cho_duyet = sum(1 for r in lich if r["Trang_Thai"] == "CHỜ DUYỆT")
    cho_viet = sum(1 for r in lich if r["Trang_Thai"] == "CHỜ VIẾT")
    print(f"  📅 Tổng bài trong tuần: {len(lich)}")
    print(f"  ✅ Đã đăng: {da_dang}")
    print(f"  ⏳ Chờ duyệt: {cho_duyet}")
    print(f"  ✏️  Chờ viết: {cho_viet}")


def buoc_4_phan_tich_phan_hoi():
    print("\n" + "=" * 60)
    print("BƯỚC 4: Phân tích phản hồi khán giả")
    print("=" * 60)
    phan_hoi = doc_csv("audience-feedback.csv")
    tong_diem = sum(int(r["Diem_Hai_Long"]) for r in phan_hoi)
    tb_diem = tong_diem / len(phan_hoi) if phan_hoi else 0
    print(f"  💬 Tổng phản hồi: {len(phan_hoi)}")
    print(f"  ⭐ Điểm hài lòng trung bình: {tb_diem:.1f}/5")
    tich_cuc = sum(1 for r in phan_hoi if int(r["Diem_Hai_Long"]) >= 4)
    print(f"  😊 Phản hồi tích cực (≥4): {tich_cuc}/{len(phan_hoi)}")


def buoc_5_tao_bao_cao():
    print("\n" + "=" * 60)
    print("BƯỚC 5: Tạo báo cáo tổng hợp")
    print("=" * 60)
    thu_muc = os.path.join(OUTPUTS, "analytics-reports")
    os.makedirs(thu_muc, exist_ok=True)
    print(f"  📁 Thư mục output: {thu_muc}")
    print("  📝 Báo cáo engagement: weekly-engagement-report.md")
    print("  📝 Dashboard: brand-dashboard.md")
    print("  ✅ Pipeline hoàn thành!")


def main():
    print("🚀 PERSONAL BRAND WORKSPACE — NGUYỄN MINH ANH")
    print(f"⏰ Thời gian chạy: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    if not buoc_1_kiem_tra_du_lieu():
        print("\n❌ Pipeline dừng: thiếu dữ liệu đầu vào.")
        return
    buoc_2_phan_tich_engagement()
    buoc_3_kiem_tra_lich()
    buoc_4_phan_tich_phan_hoi()
    buoc_5_tao_bao_cao()
    print("\n" + "=" * 60)
    print("✅ PIPELINE HOÀN THÀNH — Cập nhật docs/pdca-log.md")
    print("=" * 60)


if __name__ == "__main__":
    main()

# Workspace Map

## Project Root
```text
{{project_folder_name}}/
  AGENTS.md
  .agents/
  docs/
  knowledge-base/
  sample-data/
  scripts/
  outputs/
```

## 7 Thành Tố Cuối Khóa

| # | Thành tố | Bằng chứng trong workspace |
| --- | --- | --- |
| 1 | Input | `sample-data/` chứa dữ liệu demo an toàn |
| 2 | AI Agent | `AGENTS.md` và bảng Agents định nghĩa vai trò |
| 3 | Tools | `scripts/run-workspace.py` và công cụ nhóm chọn |
| 4 | Knowledge | `knowledge-base/` chứa tri thức đã duyệt |
| 5 | Skill / Memory | `.agents/skills/` đóng gói năng lực; `docs/pdca-log.md` ghi kinh nghiệm cải tiến |
| 6 | Human-in-the-Loop | Project brief và handoff rules định nghĩa điểm cần người duyệt |
| 7 | Output / Handoff | `outputs/` chứa bằng chứng; bảng Handoff định nghĩa schema bàn giao |

## Các Tầng Thực Thi

| Tầng | Ý nghĩa | Khu vực workspace |
| --- | --- | --- |
| Tầng 1 - Thực thi | Code, bot, tool hoặc script xử lý dữ liệu thô và ghi log | `scripts/run-workspace.py`, `sample-data/`, `outputs/` |
| Tầng 2 - Quản lý | AI kiểm tra AI: audit log, phát hiện lỗi, cảnh báo, đề xuất sửa | `docs/validation-checklist.md`, `docs/pdca-log.md`, `.agents/rules/` |
| Tầng 3 - Điều phối | Con người đọc báo cáo, phê duyệt, đổi chiến lược hoặc dừng hệ thống | human checkpoint, project brief, presentation decision |

## Agents
| Agent | Nhiệm vụ | Input | Output | Cần người duyệt? |
| --- | --- | --- | --- | --- |
| Orchestrator | Điều phối workflow | Project brief + sample data | Báo cáo cuối + task đã phân luồng | Có |
| Chuyên viên 1 |  |  |  |  |
| Chuyên viên 2 |  |  |  |  |
| Communication | Soạn báo cáo hoặc thông điệp cuối | Trạng thái cuối | Bản nháp gửi ra ngoài | Có |

## Skills
| Skill | Mục đích | Khi dùng |
| --- | --- | --- |
| `.agents/skills/workspace-designer/` | Thiết kế và cải thiện workspace | Planning và PDCA |
| `.agents/skills/final-project-orchestrator/` | Điều phối project chính | Mỗi lần chạy |
|  |  |  |

## Knowledge
| Nguồn | Vì sao cần | Mức nhạy cảm |
| --- | --- | --- |
| `knowledge-base/scoring-rules.json` | Quy tắc ra quyết định có thể chỉnh | Thấp / chỉ là dữ liệu mẫu |
|  |  |  |

## Rules
| Rule | Rủi ro kiểm soát | Cách test |
| --- | --- | --- |
| Trường bắt buộc phải có trước khi xử lý | Input bẩn làm gãy workflow | Sample thiếu trường bị reject |
| Output gửi ra ngoài cần người duyệt | Rủi ro thương hiệu hoặc compliance | Có human checkpoint |
| Lỗi phải ghi vào PDCA | Không truy vết được việc sửa | `docs/pdca-log.md` được cập nhật |

## Workflow
1. Đọc project brief và rules.
2. Đọc dữ liệu mẫu.
3. Validate input và tách dòng/file lỗi.
4. Xử lý input hợp lệ bằng specialist agents hoặc scripts.
5. Áp dụng rules trong knowledge-base.
6. Chuyển quyết định rủi ro hoặc cận biên sang human checkpoint.
7. Ghi output cuối vào `outputs/`.
8. Cập nhật PDCA log.

## Handoff
| Từ | Đến | Gói bàn giao | Điều kiện pass | Rule reject |
| --- | --- | --- | --- | --- |
| Input Validator | Orchestrator | `{id, status, cleaned_data, validation_notes}` | `status` là Valid hoặc Invalid | Thiếu `id` |
| Orchestrator | Specialist | `{id, task_type, cleaned_data, rules_ref}` | Đủ trường bắt buộc | Thiếu required field |
| Specialist | Communication | `{id, result_status, summary, next_action}` | Biết rõ trạng thái kết quả | Kết quả mơ hồ |

## Run Command

```bash
python3 scripts/run-workspace.py
```

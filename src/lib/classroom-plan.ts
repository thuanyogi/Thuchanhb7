import type { CourseSession } from "./course";

interface TimedBlock {
  time: string;
  label: string;
}

interface StudentMission {
  beforeClass: string[];
  labSteps: string[];
  checkpoints: string[];
  stuckHelp: string[];
  submit: string[];
  missionPrompt: string;
}

interface InstructorGuide {
  timing: TimedBlock[];
  opening: string[];
  demoScript: string[];
  watchFor: string[];
  reviewRubric: string[];
  backup: string[];
  afterClass: string[];
}

export interface ClassroomPlan {
  objectives: string;
  demo: string;
  practice: string;
  assignment: string;
  backup: string;
  demoCopy: string;
  practiceCopy: string;
  assignmentCopy: string;
  student: StudentMission;
  instructor: InstructorGuide;
}

export function buildClassroomPlan(session: CourseSession): ClassroomPlan {
  const { guidance } = session;
  const artifact = clean(session.artifact, "artifact thực hành của buổi học");
  const theory = clean(session.theory, guidance.bigIdea);
  const practice = clean(session.practice, `Tạo ${artifact}`);
  const firstCriteria = trimSentenceEnd(guidance.successCriteria[0]);
  const criteriaSummary = guidance.successCriteria.map(trimSentenceEnd).join(" | ");

  const objectives = [
    `**Big idea:** ${guidance.bigIdea}`,
    `**Kết quả cuối buổi:** ${guidance.learnerOutcome}`,
    `**Tiêu chí đạt:**\n${bullets(guidance.successCriteria)}`
  ].join("\n\n");

  const demoSteps = [
    `Mở bằng một tình huống thật: khi nào ${session.topic} giúp công việc bớt rối?`,
    `Giải thích khái niệm chính: ${theory}.`,
    `Làm live demo nhỏ để học viên thấy cách tạo hoặc kiểm tra ${artifact}.`,
    `Dừng tại checkpoint: ${firstCriteria}.`,
    `Cho thấy một lỗi thường gặp và cách sửa: ${guidance.commonMistakes[0]}`
  ];

  const practiceSteps = [
    `Học viên tự làm lại phần chính: ${practice}.`,
    "Dùng dữ liệu demo an toàn, không dùng credential hoặc dữ liệu khách hàng thật.",
    `Tự kiểm theo checklist: ${criteriaSummary}.`,
    "Ghép cặp review 5 phút: một người chạy, một người soi lỗi.",
    "Ghi một insight hoặc câu hỏi còn vướng vào cuối artifact."
  ];

  const assignmentSteps = [
    `Hoàn thiện và nộp ${artifact}.`,
    "Kèm 3-5 dòng mô tả: đã làm gì, output ra sao, còn vướng gì.",
    "Nếu có lỗi live demo, nộp fallback output hoặc screenshot kèm nguyên nhân.",
    "Chuẩn bị một câu hỏi để mở đầu buổi sau."
  ];

  const backupSteps = [
    "Nếu Antigravity hoặc tool live lỗi, chuyển sang walkthrough bằng ảnh minh họa và output mẫu.",
    "Giữ mục tiêu buổi học, không chạy theo việc sửa tool ngay trên lớp quá lâu.",
    `Cho học viên hoàn thành phần giấy/markdown của ${artifact}, rồi bổ sung phần tool sau giờ học.`
  ];

  const missionPrompt = [
    `Bạn là học viên buổi ${session.number}: ${session.topic}.`,
    `Mục tiêu: ${guidance.learnerOutcome}`,
    `Artifact phải nộp: ${artifact}.`,
    "Hãy hướng dẫn tôi làm từng bước, hỏi lại khi thiếu input, và tự kiểm theo checklist cuối buổi."
  ].join("\n");

  return {
    objectives,
    demo: numbered(demoSteps),
    practice: numbered(practiceSteps),
    assignment: numbered(assignmentSteps),
    backup: bullets(backupSteps),
    demoCopy: titledScript("Kịch bản demo", session, demoSteps),
    practiceCopy: titledScript("Bài thực hành", session, practiceSteps),
    assignmentCopy: titledScript("Bài về nhà", session, assignmentSteps),
    student: {
      beforeClass: guidance.preparation,
      labSteps: practiceSteps,
      checkpoints: guidance.successCriteria,
      stuckHelp: [
        `Nếu chưa hiểu mục tiêu, quay lại câu hỏi: "${guidance.bigIdea}"`,
        `Nếu output sai, đối chiếu lỗi thường gặp: ${guidance.commonMistakes.join(" | ")}.`,
        "Nếu tool lỗi, lưu lại input/output hiện có rồi dùng fallback artifact."
      ],
      submit: assignmentSteps,
      missionPrompt
    },
    instructor: {
      timing: [
        { time: "0-10", label: "Chốt mục tiêu, artifact và chuẩn bị" },
        { time: "10-45", label: "Giảng khái niệm bằng ví dụ thật" },
        { time: "45-80", label: "Live demo có checkpoint" },
        { time: "80-90", label: "Kiểm tra hiểu bài nhanh" },
        { time: "90-165", label: "Học viên thực hành, giảng viên gỡ lỗi" },
        { time: "165-180", label: "Review artifact, giao bài và reflection" }
      ],
      opening: [`Nói rõ vì sao buổi này quan trọng: ${guidance.bigIdea}`, `Cho học viên thấy artifact cuối buổi: ${artifact}.`],
      demoScript: demoSteps,
      watchFor: guidance.commonMistakes,
      reviewRubric: guidance.successCriteria,
      backup: backupSteps,
      afterClass: [
        "Ghi lại 3 lỗi học viên gặp nhiều nhất.",
        "Cập nhật tip hoặc checklist nếu demo có điểm gây nhầm.",
        "Chọn 1-2 artifact tốt để mở đầu buổi sau."
      ]
    }
  };
}

function clean(value: string, fallback: string): string {
  return value.trim() || fallback;
}

function trimSentenceEnd(value: string): string {
  return value.trim().replace(/[.!?]+$/, "");
}

function bullets(items: string[]): string {
  return items.map((item) => `- ${item}`).join("\n");
}

function numbered(items: string[]): string {
  return items.map((item, index) => `${index + 1}. ${item}`).join("\n");
}

function titledScript(title: string, session: CourseSession, steps: string[]): string {
  return [`# ${title} — Buổi ${session.number}: ${session.topic}`, "", ...steps.map((step, index) => `${index + 1}. ${step}`)].join("\n");
}

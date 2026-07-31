export interface VideoItem {
  title: string;
  url: string;
  duration?: string;
  description?: string;
}

export interface SessionGuidance {
  heroImage: string;
  imageAlt: string;
  bigIdea: string;
  learnerOutcome: string;
  preparation: string[];
  successCriteria: string[];
  tips: string[];
  commonMistakes: string[];
  videos: VideoItem[];
}

interface SessionInput {
  phase: string;
  topic: string;
  artifact: string;
}

const basePreparation = [
  "Mở Google Antigravity và kiểm tra đăng nhập trước giờ học.",
  "Chuẩn bị một case công việc thật hoặc dữ liệu demo an toàn.",
  "Biết rõ artifact cuối buổi cần nộp để không làm lan man."
];

const baseTips = [
  "Làm từng vòng nhỏ: chạy thử, kiểm tra output, rồi mới mở rộng.",
  "Khi AI trả lời sai, ghi lỗi vào PDCA log thay vì sửa miệng rồi bỏ qua.",
  "Không đưa credential, dữ liệu khách hàng thật, hoặc file nhạy cảm vào demo."
];

const guidanceBySession: Record<number, Omit<SessionGuidance, "heroImage" | "imageAlt" | "videos">> = {
  1: {
    bigIdea: "Nhìn Antigravity như một workspace vận hành công việc, không phải thêm một chatbot.",
    learnerOutcome: "Tạo được workspace đầu tiên và giải thích 7 thành tố cốt lõi bằng ngôn ngữ của mình.",
    preparation: ["Cài và mở được Antigravity.", "Có sẵn một tài liệu nội bộ không nhạy cảm để thử.", "Hiểu lớp học sẽ học bằng artifact, không chỉ nghe lý thuyết."],
    successCriteria: ["Tạo được workspace đầu tiên.", "Nhận diện được agent, skill, workflow, knowledge và rules.", "Nộp reflection ngắn về cách dùng AI theo cấp độ."],
    tips: ["Dạy bằng so sánh 3 cấp độ AI trước khi vào công cụ.", "Luôn hỏi: phần nào là agent, phần nào là skill, phần nào là workflow?", "Nếu UI Antigravity đổi, giữ mục tiêu bài học và dùng walkthrough live."],
    commonMistakes: ["Xem workspace như thư mục chứa file đơn thuần.", "Tạo quá nhiều agent trước khi có objective rõ.", "Nhầm demo thành bài cuối khóa."]
  },
  2: {
    bigIdea: "PDCA là cách biến lỗi AI thành dữ liệu cải tiến.",
    learnerOutcome: "Chạy một task, kiểm tra output và ghi ít nhất một vòng cải tiến vào PDCA log.",
    preparation: ["Chọn một chủ đề thu thập dữ liệu nhỏ.", "Chuẩn bị bảng output mong muốn.", "Mở sẵn template PDCA log."],
    successCriteria: ["Có PDCA log đủ Plan, Do, Check, Act.", "Nêu được output lỗi và cách sửa ở vòng sau.", "So sánh được output trước và sau cải tiến."],
    tips: ["Chỉ sửa một biến mỗi vòng để biết thay đổi nào có tác dụng.", "Check output bằng tiêu chí cụ thể: đúng, đủ, sạch, dùng được.", "Giữ prompt cũ và prompt mới để thấy tiến bộ."],
    commonMistakes: ["Giao việc quá rộng.", "Không lưu output lỗi nên không phân tích được.", "Chỉ hỏi lại AI mà không thay tiêu chí kiểm tra."]
  },
  3: {
    bigIdea: "Skill là cách đóng gói chuyên môn để AI làm ổn định hơn prompt rời.",
    learnerOutcome: "Viết được skill draft có workflow, rules và output chuẩn.",
    preparation: ["Chọn một quy trình lặp lại trong công việc.", "Liệt kê input và output thường gặp.", "Chuẩn bị 2 prompt kiểm tra skill."],
    successCriteria: ["Skill có mục tiêu, input, workflow và output rõ.", "Có ít nhất một ví dụ output mẫu.", "Test skill bằng hai tình huống khác nhau."],
    tips: ["Một skill tốt bắt đầu bằng động từ và bước xử lý rõ.", "Rules nên test được, không viết kiểu khẩu hiệu.", "Output mẫu giúp AI bớt tự sáng tạo sai chỗ."],
    commonMistakes: ["Viết skill như bài mô tả dài.", "Thiếu ví dụ output.", "Không test skill bằng tình huống khác nhau."]
  },
  4: {
    bigIdea: "OIPO giúp workflow có điểm bắt đầu, điểm kết thúc và luồng xử lý kiểm được.",
    learnerOutcome: "Thiết kế workflow spec từ một ý tưởng công việc thật.",
    preparation: ["Chọn một quy trình có đầu vào và đầu ra rõ.", "Xác định người duyệt nếu có rủi ro.", "Chuẩn bị dữ liệu mẫu nhỏ để chạy thử."],
    successCriteria: ["Workflow có Objective, Input, Process và Output.", "Có checkpoint cho điểm rủi ro.", "Output có format nghiệm thu rõ."],
    tips: ["Objective phải đo được.", "Input càng cụ thể, output càng dễ kiểm.", "Process nên có checkpoint ở chỗ rủi ro cao."],
    commonMistakes: ["Biến workflow thành to-do list.", "Không mô tả format output.", "Không có nhánh xử lý khi input thiếu."]
  },
  5: {
    bigIdea: "Agent chỉ hữu ích khi có mission, quyền hạn và output rõ.",
    learnerOutcome: "Thiết lập một AI agent theo MICRO và kết nối được vào pipeline demo.",
    preparation: ["Có Google Sheet hoặc endpoint demo sẵn.", "Chuẩn bị mô tả vai trò agent bằng MICRO.", "Chọn dữ liệu không nhạy cảm để sync."],
    successCriteria: ["Agent có mission và responsibility rõ.", "Pipeline chạy được với dữ liệu demo nhỏ.", "Có cách tránh ghi trùng hoặc sync sai."],
    tips: ["Đặt agent theo trách nhiệm, không theo tên người cho vui.", "Mỗi agent chỉ nên có một mission chính.", "Test API bằng dữ liệu nhỏ trước khi đưa vào workflow."],
    commonMistakes: ["Agent làm quá nhiều việc.", "Không có anti-duplication khi sync.", "Không phân biệt lỗi agent với lỗi API."]
  },
  6: {
    bigIdea: "Knowledge và rules là bộ neo để AI không bịa và không vượt quyền.",
    learnerOutcome: "Tạo knowledge map, viết rules CLEAR và so sánh output trước/sau.",
    preparation: ["Chuẩn bị một file knowledge nhỏ.", "Có guideline hoặc quy định để viết rules.", "Chọn một câu hỏi demo có thể kiểm chứng."],
    successCriteria: ["Knowledge map có nguồn và phạm vi dùng.", "Rules CLEAR ngắn, test được.", "Output sau khi thêm knowledge/rules tốt hơn bản trước."],
    tips: ["Knowledge trả lời câu hỏi 'AI biết gì?'; rules trả lời 'AI được làm gì?'.", "Rules càng ngắn càng dễ audit.", "So sánh before/after để học viên thấy giá trị RAG."],
    commonMistakes: ["Nhồi quá nhiều tài liệu.", "Viết rules mơ hồ.", "Không kiểm tra AI có trích đúng nguồn hay không."]
  },
  7: {
    bigIdea: "Handoff biến việc bàn giao giữa người và agent thành hợp đồng có thể kiểm tra.",
    learnerOutcome: "Viết được handoff contract, checkpoint và checklist bàn giao cho một workflow nhiều bước.",
    preparation: ["Chọn workflow có ít nhất hai vai trò hoặc hai agent.", "Chuẩn bị một output lỗi để luyện bàn giao lại.", "Mở sẵn rubric kiểm tra handoff."],
    successCriteria: ["Handoff contract nói rõ người/agent giao và nhận.", "Checkpoint có điều kiện pass/fail.", "Checklist bàn giao đủ input, output và owner tiếp theo."],
    tips: ["Handoff phải nói rõ ai nhận, nhận gì, kiểm gì và trả về format nào.", "Đặt checkpoint trước bước có rủi ro sửa sai tốn thời gian.", "Cho học viên đổi vai để thấy thông tin nào bị thiếu khi bàn giao."],
    commonMistakes: ["Bàn giao bằng lời nhắn chung chung.", "Không có điều kiện nhận task.", "Checkpoint đặt sau khi output đã hỏng."]
  },
  8: {
    bigIdea: "Organization và audit giúp workspace mở rộng mà vẫn biết ai làm gì, vì sao đúng, vì sao sai.",
    learnerOutcome: "Tạo được audit report ngắn cho agent, skill, rules và output của workflow.",
    preparation: ["Chuẩn bị một workspace mẫu có vài file intentionally messy.", "Có checklist audit 5-7 tiêu chí.", "Chọn một quyết định cần trace nguồn."],
    successCriteria: ["Workspace được sắp xếp theo vai trò tài liệu.", "Audit report có evidence cụ thể.", "Có ít nhất một đề xuất sửa có thể thực hiện ngay."],
    tips: ["Audit theo evidence, không theo cảm giác.", "Bắt đầu từ artifact cuối rồi lần ngược input, rule, skill.", "Tách lỗi naming, lỗi logic và lỗi quyền hạn để sửa đúng chỗ."],
    commonMistakes: ["Audit quá rộng.", "Chỉ sửa tên file mà không sửa workflow.", "Không ghi unresolved questions ở cuối report."]
  },
  9: {
    bigIdea: "Debug agentic workflow là tái hiện lỗi, khoanh vùng nguyên nhân và ghi lại cách phòng lỗi lặp.",
    learnerOutcome: "Lập được debug log có reproduction steps, expected output, actual output và next fix.",
    preparation: ["Chuẩn bị một lỗi thật hoặc lỗi giả lập trong workflow.", "Có mẫu debug log để học viên điền.", "Giới hạn phạm vi debug trong một agent hoặc một skill."],
    successCriteria: ["Debug log có reproduction steps.", "Phân biệt expected output và actual output.", "Có fix nhỏ và bước verify sau fix."],
    tips: ["Bắt đầu bằng reproduction nhỏ nhất.", "So sánh input, instruction, tool call và output theo từng lớp.", "Mỗi fix phải có cách verify lại."],
    commonMistakes: ["Đổi nhiều thứ cùng lúc.", "Debug bằng prompt dài hơn thay vì tìm nguyên nhân.", "Không lưu case lỗi để regression test."]
  },
  10: {
    bigIdea: "SCOPE giúp dự án cuối khóa đủ nhỏ để chạy được nhưng đủ thật để có giá trị kinh doanh.",
    learnerOutcome: "Viết được capstone brief có scope, constraint, output, process và evaluation.",
    preparation: ["Mang một bài toán kinh doanh thật nhưng không chứa dữ liệu nhạy cảm.", "Chuẩn bị 3 output mẫu mong muốn.", "Có tiêu chí cắt scope nếu quá rộng."],
    successCriteria: ["Capstone brief có đủ SCOPE.", "Scope đủ nhỏ để demo trong lớp.", "Evaluation có checklist nghiệm thu."],
    tips: ["Chọn một workflow tạo giá trị rõ trong 1-2 giờ demo.", "Mỗi constraint phải giúp giảm rủi ro hoặc giảm scope creep.", "Evaluation nên kiểm được bằng checklist, không chỉ bằng cảm nhận."],
    commonMistakes: ["Chọn dự án quá tham.", "Không nói rõ dữ liệu đầu vào.", "Không có định nghĩa done cho output cuối."]
  },
  11: {
    bigIdea: "Assembly là ghép các phần đã học thành workflow có kiểm thử, fallback và câu chuyện trình bày.",
    learnerOutcome: "Chạy được workspace cuối khóa từ input đến artifact, kèm validation và backup output.",
    preparation: ["Có capstone brief đã chốt.", "Chuẩn bị dữ liệu demo nhỏ.", "Mở checklist trình bày và checklist nghiệm thu."],
    successCriteria: ["Workflow chạy từ input đến artifact.", "Có validation gate trước output cuối.", "Có screenshot hoặc output fallback cho phần trình bày."],
    tips: ["Tích hợp theo luồng chính trước, tối ưu sau.", "Chụp lại output tốt để phòng demo live lỗi.", "Mỗi nhóm phải biết điểm nào cần người duyệt."],
    commonMistakes: ["Mải polish UI mà workflow chưa chạy.", "Không kiểm edge case.", "Không chuẩn bị fallback cho ngày trình bày."]
  },
  12: {
    bigIdea: "Buổi trình bày chứng minh học viên biết vận hành hệ thống AI, không chỉ tạo được một demo đẹp.",
    learnerOutcome: "Trình bày project với problem, workflow, demo, PDCA evidence, audit note và next steps.",
    preparation: ["Chuẩn bị live demo hoặc video/screenshot fallback.", "Ẩn dữ liệu thật và credential.", "Mở rubric để tự kiểm trước khi trình bày."],
    successCriteria: ["Demo chạy hoặc có fallback hợp lệ.", "Có PDCA evidence và audit note.", "Không lộ credential hoặc dữ liệu nhạy cảm."],
    tips: ["Giới hạn demo trong 5 phút và nói rõ điểm kiểm chứng.", "Cho thấy một lỗi đã được cải thiện qua PDCA.", "Kết thúc bằng next action thực tế sau khóa học."],
    commonMistakes: ["Trình bày như slide sales.", "Không chứng minh workflow thật sự chạy.", "Bỏ qua rủi ro, bảo mật hoặc giới hạn của demo."]
  }
};

const videosBySession: Record<number, VideoItem[]> = {};

export function getSessionGuidance(number: number, input: SessionInput): SessionGuidance {
  const custom = guidanceBySession[number] ?? fallbackGuidance(number, input);
  return {
    heroImage: `/course-images/session-${String(number).padStart(2, "0")}-hero.png`,
    imageAlt: `Minh họa buổi ${number}: ${input.topic}`,
    videos: videosBySession[number] ?? [],
    ...custom
  };
}

function fallbackGuidance(number: number, input: SessionInput): Omit<SessionGuidance, "heroImage" | "imageAlt" | "videos"> {
  return {
    bigIdea: `${input.topic} giúp học viên biến kiến thức thành một phần vận hành được trong workspace.`,
    learnerOutcome: `Hoàn thành artifact: ${input.artifact || "sản phẩm thực hành của buổi học"}.`,
    preparation: phasePreparation(input.phase),
    successCriteria: [input.artifact ? `Hoàn thành ${input.artifact}.` : "Hoàn thành artifact của buổi học.", "Có tiêu chí kiểm tra output.", "Nộp được bằng chứng chạy hoặc fallback output."],
    tips: phaseTips(input.phase),
    commonMistakes: phaseMistakes(number)
  };
}

function phasePreparation(phase: string): string[] {
  if (phase === "Presentation") return ["Chuẩn bị demo run hoặc fallback output.", "Mở rubric trước khi trình bày.", "Ẩn toàn bộ dữ liệu nhạy cảm."];
  if (phase === "Create") return ["Mang case cuối khóa thật.", "Có dữ liệu mẫu đủ nhỏ để test.", "Chuẩn bị tiêu chí đánh giá output."];
  return basePreparation;
}

function phaseTips(phase: string): string[] {
  if (phase === "Create") return ["Thiết kế nhỏ trước, tích hợp sau.", "Luôn có validation gate trước output cuối.", "Checkpoint người duyệt phải đặt trước hành động rủi ro."];
  if (phase === "Presentation") return ["Demo tối đa 5 phút.", "Nói rõ 3 vòng PDCA đã cải thiện gì.", "Có fallback screenshot/output nếu live tool lỗi."];
  return baseTips;
}

function phaseMistakes(number: number): string[] {
  if (number >= 7 && number <= 9) return ["Không ghi handoff contract.", "Audit chỉ đọc bằng mắt, không có checklist.", "Debug theo cảm tính thay vì log và reproduction."];
  if (number >= 10) return ["Scope quá rộng.", "Thiếu dữ liệu edge case.", "Không có tiêu chí nghiệm thu rõ."];
  return ["Làm theo demo nhưng không hiểu artifact.", "Bỏ qua phần kiểm chứng.", "Dùng dữ liệu không phù hợp để thực hành."];
}

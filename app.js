/**
 * AI Lead Scoring & Automation System
 * Core Frontend Logic & Processing Engine
 */

// ==========================================================================
// STATE MANAGEMENT & LOCAL STORAGE
// ==========================================================================
let leads = [];

const DEFAULT_CONFIG = {
  apiKey: '',
  model: 'gemini-1.5-flash',
  useSemanticAi: false
};

let config = { ...DEFAULT_CONFIG };

// Load settings and cached leads from localStorage on boot
function initApp() {
  const savedConfig = localStorage.getItem('lead_scoring_config');
  if (savedConfig) {
    config = { ...config, ...JSON.parse(savedConfig) };
  }
  
  // Set UI inputs to match loaded config
  document.getElementById('geminiKey').value = config.apiKey || '';
  document.getElementById('geminiModel').value = config.model;
  document.getElementById('toggleAIEngine').checked = config.useSemanticAi;
  updateEngineLabel(config.useSemanticAi);

  const savedLeads = localStorage.getItem('lead_scoring_leads');
  if (savedLeads) {
    leads = JSON.parse(savedLeads);
    renderLeads();
    updateKPIs();
    showToast('Tải thành công dữ liệu từ trình duyệt!', 'success');
  } else {
    // Inject initial guide message
    renderEmptyState();
  }
}

// Save config to localStorage
function saveConfig() {
  config.apiKey = document.getElementById('geminiKey').value.trim();
  config.model = document.getElementById('geminiModel').value;
  config.useSemanticAi = document.getElementById('toggleAIEngine').checked;
  
  localStorage.setItem('lead_scoring_config', JSON.stringify(config));
  updateEngineLabel(config.useSemanticAi);
  showToast('Đã lưu cấu hình AI thành công!', 'success');
  closeModal('settingsModal');
}

// Update the label showing which engine is active
function updateEngineLabel(useAI) {
  const label = document.getElementById('scoringEngineLabel');
  if (useAI) {
    label.innerHTML = `<span style="color:var(--accent-primary);"><i class="fa-solid fa-sparkles"></i> Semantic AI (Gemini)</span>`;
  } else {
    label.innerHTML = `<span><i class="fa-solid fa-code"></i> Quy tắc nội bộ (Offline)</span>`;
  }
}

// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = 'fa-info-circle';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'error') icon = 'fa-circle-exclamation';
  
  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  // Trigger animation
  setTimeout(() => toast.classList.add('active'), 50);
  
  // Remove toast after 3.5s
  setTimeout(() => {
    toast.classList.remove('active');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================================================
// MODAL CONTROLLERS
// ==========================================================================
function openModal(modalId) {
  document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

// ==========================================================================
// MOCK DATA GENERATOR
// ==========================================================================
const MOCK_LEADS = [
  {
    name: "Nguyễn Minh Đức",
    phone: "0904561239",
    requirement: "Tìm mua biệt thự đơn lập Phú Mỹ Hưng Quận 7, tài chính khoảng 45 tỷ, yêu cầu sổ hồng riêng pháp lý sạch 100%, muốn đàm phán thương lượng trực tiếp với chủ đầu tư hoặc chính chủ."
  },
  {
    name: "Trần Thị Lan",
    phone: "0918223344",
    requirement: "Cần thuê penthouse Vinhomes Golden River Quận 1 có ban công ven sông thoáng mát. Ngân sách tầm 100-120 triệu/tháng, tài chính mạnh không thành vấn đề. Gặp trực tiếp để ký hợp đồng."
  },
  {
    name: "Phạm Văn Nam",
    phone: "0987654321",
    requirement: "Số điện thoại này nhầm máy rồi nhé, tôi không có nhu cầu mua bất động sản gì hết."
  },
  {
    name: "Lê Hoàng Yến",
    phone: "0903112233",
    requirement: "Cần tìm căn hộ chung cư 2 phòng ngủ dự án Vinhomes Ocean Park Gia Lâm, tài chính tầm 3.2 tỷ, có hỗ trợ vay ngân hàng 70% và ân hạn nợ gốc."
  },
  {
    name: "Vũ Quốc Bảo",
    phone: "0952009887",
    requirement: "Em chào anh chị, em bên công ty bảo hiểm Manulife muốn gửi anh chị gói chăm sóc sức khỏe và bảo vệ tài chính cho gia đình..."
  },
  {
    name: "Đặng Minh Tuấn",
    phone: "0919888777",
    requirement: "Tôi là nhà đầu tư chuyên nghiệp cần tìm mua sỉ quỹ đất công nghiệp diện tích lớn tại Đồng Nai hoặc Bình Dương để xây nhà xưởng, ngân sách trên 80 tỷ."
  },
  {
    name: "Hoàng Ngọc Hoa",
    phone: "0934778899",
    requirement: "Cần mua nhà mặt phố trung tâm Quận 1 hẻm xe hơi, diện tích tầm 100m2 có sân vườn hồ bơi riêng, giá tầm 1.5 - 2 tỷ đồng thôi."
  },
  {
    name: "Lê Thị Mai",
    phone: "0898554433",
    requirement: "Muốn tìm nhà phố mặt đường lớn kinh doanh khu vực Phú Nhuận hoặc Bình Thạnh tầm 8 tỷ. Pháp lý sạch có sổ riêng."
  },
  {
    name: "Nguyễn Khánh",
    phone: "0909090909",
    requirement: "Gọi nhiều lần không liên lạc được, thuê bao quý khách vừa gọi hiện không liên lạc được."
  },
  {
    name: "Công ty BDS Thịnh Vượng",
    phone: "0287300999",
    requirement: "Chào anh/chị, bên em chuyên cung cấp dịch vụ đăng tin quảng cáo bds và marketing chạy lead cam kết giá rẻ nhất thị trường."
  }
];

function injectMockData() {
  leads = MOCK_LEADS.map((lead, idx) => {
    const scored = scoreLeadLocal(lead.requirement);
    return {
      stt: idx + 1,
      name: lead.name,
      phone: lead.phone,
      requirement: lead.requirement,
      ai_score: scored.score,
      ai_category: scored.category,
      ai_reasons: scored.reasons,
      manual_score: null,
      status: 'pending',
      notes: '',
      phone_visible: false
    };
  });
  
  saveLeadsToStorage();
  renderLeads();
  updateKPIs();
  showToast('Đã nạp 10 khách hàng mẫu thành công!', 'success');
}

// ==========================================================================
// SCORING ENGINE: LOCAL RULE-BASED (REGULATION MATCHING)
// ==========================================================================
function scoreLeadLocal(requirement) {
  const reqLower = requirement.toLowerCase();
  
  let score = 50; // Base baseline score
  let category = 'STANDARD';
  let reasons = [];
  
  // --- JUNK DETECTION RULES (TRỪ 50 ĐIỂM -> 0 ĐIỂM) ---
  let isJunk = false;
  let junkReasons = [];

  // Rule 1: Unrealistic expectations (VD: Q1 giá 1-2 tỷ, hồ bơi vài trăm triệu)
  const centralKeywords = ['quận 1', 'q1', 'trung tâm', 'phú mỹ hưng'];
  const cheapPriceKeywords = ['1 tỷ', '2 tỷ', '1-2 tỷ', 'trăm triệu', 'vài trăm triệu'];
  const luxuryHomeKeywords = ['hồ bơi', 'sân vườn', 'biệt thự'];
  
  const hasCentral = centralKeywords.some(k => reqLower.includes(k));
  const hasCheap = cheapPriceKeywords.some(k => reqLower.includes(k));
  const hasLuxury = luxuryHomeKeywords.some(k => reqLower.includes(k));

  if ((hasCentral || hasLuxury) && hasCheap) {
    junkReasons.push("Yêu cầu phi thực tế (Giá trung tâm/biệt thự quá thấp)");
    isJunk = true;
  }

  // Rule 2: Wrong number / No requirement
  const noReqKeywords = ['nhầm số', 'nhầm máy', 'không có nhu cầu', 'dữ liệu cũ', 'nhầm ngành', 'sai số'];
  if (noReqKeywords.some(k => reqLower.includes(k))) {
    junkReasons.push("Không có nhu cầu thực tế / Nhầm số");
    isJunk = true;
  }

  // Rule 3: Not cooperative / Just asking for fun
  const uncooperativeKeywords = ['cho vui', 'hỏi chơi', 'chưa muốn mua', 'chưa có ý định', 'không hợp tác', 'hỏi giá cho vui'];
  if (uncooperativeKeywords.some(k => reqLower.includes(k))) {
    junkReasons.push("Không thiện chí / Hỏi cho vui");
    isJunk = true;
  }

  // Rule 4: Spam / Advertising services
  const spamKeywords = ['bảo hiểm', 'vay vốn', 'mời chào', 'dịch vụ', 'đăng tin', 'chạy lead'];
  if (spamKeywords.some(k => reqLower.includes(k))) {
    junkReasons.push("Spam / Quảng cáo dịch vụ");
    isJunk = true;
  }

  // Rule 5: Failed contacts
  const contactIssueKeywords = ['thuê bao', 'không bắt máy', 'không nghe máy', 'không phản hồi', 'chặn zalo'];
  if (contactIssueKeywords.some(k => reqLower.includes(k))) {
    junkReasons.push("Thông tin liên lạc lỗi / Thuê bao");
    isJunk = true;
  }

  // Apply Junk Score
  if (isJunk) {
    return {
      score: 0,
      category: 'JUNK',
      reasons: junkReasons
    };
  }

  // --- VIP DETECTION RULES (CỘNG 50 ĐIỂM -> 100 ĐIỂM) ---
  let isVIP = false;
  let vipReasons = [];

  // Rule 1: High budget (>= 20 tỷ or key phrases)
  const budgetKeywords = ['tài chính mạnh', 'không thành vấn đề', 'tài chính khủng', 'ngân sách lớn'];
  const budgetRegex = /(\d+)\s*(tỷ|ty|bình)/g;
  let match;
  let maxBudget = 0;
  while ((match = budgetRegex.exec(reqLower)) !== null) {
    const val = parseInt(match[1]);
    if (val > maxBudget) maxBudget = val;
  }
  
  if (maxBudget >= 20 || budgetKeywords.some(k => reqLower.includes(k))) {
    vipReasons.push(`Ngân sách cao (≥20 tỷ hoặc Tài chính mạnh)`);
    isVIP = true;
  }

  // Rule 2: Luxury/Premium types
  const premiumTypes = ['biệt thự đơn lập', 'penthouse', 'shophouse mặt đường', 'shophouse lớn', 'đất công nghiệp', 'sàn văn phòng'];
  premiumTypes.forEach(type => {
    if (reqLower.includes(type)) {
      vipReasons.push(`Loại hình cao cấp: ${type}`);
      isVIP = true;
    }
  });

  // Rule 3: Prime locations
  const primeLocations = ['quận 1', 'q1', 'ven sông', 'ocean park', 'vinhomes ocean', 'phú mỹ hưng'];
  primeLocations.forEach(loc => {
    if (reqLower.includes(loc)) {
      vipReasons.push(`Vị trí đắc địa: ${loc}`);
      isVIP = true;
    }
  });

  // Rule 4: Premium buyers
  const vipClients = ['chủ doanh nghiệp', 'giám đốc', 'nhà đầu tư chuyên nghiệp', 'mua sỉ', 'mua số lượng lớn'];
  vipClients.forEach(client => {
    if (reqLower.includes(client)) {
      vipReasons.push(`Nhà đầu tư/Mua sỉ/VIP`);
      isVIP = true;
    }
  });

  // Rule 5: Urgency & Transparency
  const urgentKeywords = ['pháp lý chuẩn 100%', 'sổ hồng riêng', 'gặp trực tiếp', 'chủ đầu tư', 'gặp chính chủ', 'thương lượng trực tiếp'];
  urgentKeywords.forEach(k => {
    if (reqLower.includes(k)) {
      vipReasons.push(`Yêu cầu minh bạch & Gặp trực tiếp`);
      isVIP = true;
    }
  });

  if (isVIP) {
    return {
      score: 100,
      category: 'VIP',
      reasons: vipReasons
    };
  }

  // Default Standard Category
  return {
    score: 50,
    category: 'STANDARD',
    reasons: ["Khách hàng có nhu cầu cơ bản (nhà chung cư, nhà phố tầm trung, cần vay ngân hàng...)"]
  };
}

// ==========================================================================
// SCORING ENGINE: SEMANTIC AI (GEMINI API)
// ==========================================================================
async function scoreLeadAI(requirement) {
  if (!config.apiKey) {
    showToast('Lỗi: Chưa nhập Gemini API Key trong phần Cấu hình!', 'error');
    // Fallback to local rule engine
    return scoreLeadLocal(requirement);
  }

  const systemPrompt = `
Bạn là Trợ lý AI chuyên nghiệp phân tích Khách hàng tiềm năng (Lead Scoring) cho ngành Bất động sản tại Việt Nam.
Nhiệm vụ của bạn là đánh giá nhu cầu khách hàng từ câu văn mô tả và phân loại chính xác thành 3 nhóm theo bộ tiêu chí sau:

1. Nhóm VIP (100 điểm): Khách hàng VIP/Siêu tiềm năng. Đạt được khi có các yếu tố:
   - Ngân sách lớn: Có từ 20 tỷ trở lên hoặc ghi "tài chính mạnh", "không thành vấn đề".
   - Loại hình cao cấp: Biệt thự đơn lập, Penthouse, Shophouse mặt đường lớn, Quỹ đất công nghiệp, Sàn văn phòng diện tích lớn.
   - Vị trí đắc địa: Quận 1, Ven sông, Vinhomes Ocean Park, Phú Mỹ Hưng.
   - Đối tượng VIP: Chủ doanh nghiệp, Nhà đầu tư chuyên nghiệp, Mua sỉ, Mua số lượng lớn.
   - Cấp thiết & Minh bạch: Yêu cầu pháp lý chuẩn 100%, sổ hồng riêng, muốn thương lượng trực tiếp chủ đầu tư.

2. Nhóm RÁC (0 điểm): Khách hàng Rác/Không tiềm năng. Đạt được khi có các yếu tố:
   - Yêu cầu phi thực tế: Giá rẻ vô lý (Ví dụ: nhà Q1 giá 1-2 tỷ, biệt thự trung tâm vài trăm triệu).
   - Không có nhu cầu: Nhầm số, nhầm máy, dữ liệu cũ, nhầm ngành.
   - Không thiện chí: Hỏi cho vui, chưa có ý định mua, thái độ bất hợp tác.
   - Spam/Quảng cáo: Chào mời bảo hiểm, chào dịch vụ chạy lead, mời vay vốn ngân hàng.
   - Liên lạc lỗi: Thuê bao, gọi nhiều lần không bắt máy, không phản hồi zalo.

3. Nhóm TIỀM NĂNG (50 điểm): Tất cả trường hợp nhu cầu thực tế tầm trung còn lại (mua chung cư 2-3PN, nhà phố 3-10 tỷ, cần vay ngân hàng...).

YÊU CẦU ĐẦU RA:
Bạn chỉ được phép trả về duy nhất 1 chuỗi JSON hợp lệ (không kèm theo markdown code block \`\`\`json), với định dạng sau:
{
  "score": 100 | 50 | 0,
  "category": "VIP" | "STANDARD" | "JUNK",
  "reasons": ["Lý do phân loại 1", "Lý do phân loại 2"]
}

Nội dung khách hàng cần phân tích: "${requirement}"
`;

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${config.model}:generateContent?key=${config.apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: systemPrompt }
            ]
          }
        ],
        generationConfig: {
          responseMimeType: "application/json"
        }
      })
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.error?.message || 'Không thể kết nối đến Gemini API');
    }

    const data = await response.json();
    let text = data.candidates[0].content.parts[0].text.trim();
    
    // Safety clean markdown
    if (text.startsWith("```json")) {
      text = text.replace(/```json/g, "").replace(/```/g, "").trim();
    }
    
    const result = JSON.parse(text);
    
    // Normalize response formats
    return {
      score: parseInt(result.score) ?? 50,
      category: result.category || 'STANDARD',
      reasons: result.reasons || []
    };

  } catch (error) {
    console.error('Lỗi Gemini API:', error);
    showToast(`Lỗi AI: ${error.message}. Chuyển sang chấm điểm bằng Quy tắc nội bộ.`, 'error');
    return scoreLeadLocal(requirement);
  }
}

// ==========================================================================
// DATA INGESTION: GOOGLE SHEETS & CSV PARSER
// ==========================================================================

// Helper to convert typical edit link to CSV export link
function cleanSheetUrl(url) {
  if (!url) return '';
  url = url.trim();
  
  // Regex to extract Spreadsheet ID
  const idRegex = /\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/;
  const match = url.match(idRegex);
  
  if (!match) return url;
  
  const sheetId = match[1];
  
  // Extract GID if present
  let gid = '0';
  const gidRegex = /[#&?]gid=([0-9]+)/;
  const gidMatch = url.match(gidRegex);
  if (gidMatch) {
    gid = gidMatch[1];
  }
  
  return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
}

// Main function to fetch Google Sheets
async function fetchGoogleSheets() {
  const urlInput = document.getElementById('sheetUrl').value.trim();
  if (!urlInput) {
    showToast('Vui lòng nhập đường dẫn Google Sheets!', 'error');
    return;
  }
  
  const csvUrl = cleanSheetUrl(urlInput);
  showToast('Đang kết nối đến Google Sheets...', 'info');
  
  try {
    // We try to fetch the CSV. Because of CORS, this may fail on direct browsers unless published to web.
    // To solve CORS, we can use a free CORS Proxy if direct fetch fails.
    let response;
    try {
      response = await fetch(csvUrl);
    } catch (corsErr) {
      console.warn("CORS blocked direct fetch, trying free proxy...");
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(csvUrl)}`;
      response = await fetch(proxyUrl);
    }

    if (!response.ok) {
      throw new Error(`Mã lỗi HTTP: ${response.status}. Hãy đảm bảo Google Sheet của bạn được đặt ở chế độ công khai.`);
    }

    const csvText = await response.text();
    if (csvText.includes('<!DOCTYPE html>') || csvText.includes('google-signin')) {
      throw new Error("Lỗi quyền truy cập: Tệp này không công khai. Vui lòng chia sẻ chế độ 'Bất kỳ ai có liên kết đều có thể xem'.");
    }
    
    await processDataString(csvText);
    showToast('Đồng bộ dữ liệu Google Sheets thành công!', 'success');
  } catch (error) {
    console.error(error);
    showToast(`Đồng bộ thất bại: ${error.message}`, 'error');
    
    // Open the CSV paste tab automatically as fallback to guide the user
    switchTab('tab-csv');
    showToast('Đã mở Tab Nhập CSV thủ công để bạn dán dữ liệu dự phòng!', 'info');
  }
}

// Process Raw CSV text from paste area
function processRawPaste() {
  const text = document.getElementById('csvPaste').value.trim();
  if (!text) {
    showToast('Vui lòng nhập hoặc dán dữ liệu!', 'error');
    return;
  }
  
  processDataString(text)
    .then(() => showToast('Đã xử lý dữ liệu dán thủ công!', 'success'))
    .catch(err => showToast(`Lỗi xử lý dữ liệu: ${err.message}`, 'error'));
}

// CSV/TSV Parser with dynamic columns mapping
async function processDataString(rawText) {
  // Split into lines
  const lines = rawText.split(/\r?\n/).filter(line => line.trim() !== '');
  if (lines.length === 0) throw new Error("Dữ liệu rỗng");
  
  // Detect separator: Tab or Comma
  const firstLine = lines[0];
  const separator = firstLine.split('\t').length > firstLine.split(',').length ? '\t' : ',';
  
  // Custom CSV parser that respects quotes
  const parseRow = (text) => {
    let row = [];
    let insideQuote = false;
    let entry = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char === '"') {
        insideQuote = !insideQuote;
      } else if (char === separator && !insideQuote) {
        row.push(entry.trim());
        entry = '';
      } else {
        entry += char;
      }
    }
    row.push(entry.trim());
    return row.map(cell => cell.replace(/^"|"$/g, '')); // Strip outer quotes
  };

  const headers = parseRow(lines[0]).map(h => h.toLowerCase().trim());
  
  // Find column indexes dynamically
  let nameIdx = -1;
  let phoneIdx = -1;
  let reqIdx = -1;
  
  const nameHeaders = ['tên', 'họ tên', 'khách hàng', 'name', 'ho ten', 'customer'];
  const phoneHeaders = ['sđt', 'sdt', 'số điện thoại', 'phone', 'dien thoai', 'so dien thoai'];
  const reqHeaders = ['nhu cầu', 'nhu cau', 'mô tả', 'mo ta', 'yêu cầu', 'yeu cau', 'requirement', 'description', 'requirements'];

  headers.forEach((h, idx) => {
    if (nameHeaders.some(k => h.includes(k))) nameIdx = idx;
    else if (phoneHeaders.some(k => h.includes(k))) phoneIdx = idx;
    else if (reqHeaders.some(k => h.includes(k))) reqIdx = idx;
  });

  // Default mapping if headers are not detected
  if (nameIdx === -1) nameIdx = 0;
  if (phoneIdx === -1) phoneIdx = Math.min(1, headers.length - 1);
  if (reqIdx === -1) reqIdx = Math.min(2, headers.length - 1);

  const parsedLeads = [];
  const useAI = config.useSemanticAi;

  showToast(useAI ? 'Đang chấm điểm bằng Semantic AI (Gemini)... Vui lòng đợi.' : 'Đang chấm điểm bằng Quy tắc nội bộ...', 'info');

  for (let i = 1; i < lines.length; i++) {
    const row = parseRow(lines[i]);
    if (row.length === 0 || !row[reqIdx]) continue;
    
    const rawReq = row[reqIdx] || '';
    let scored;
    
    if (useAI && config.apiKey) {
      scored = await scoreLeadAI(rawReq);
    } else {
      scored = scoreLeadLocal(rawReq);
    }

    parsedLeads.push({
      stt: parsedLeads.length + 1,
      name: row[nameIdx] || 'Khách ẩn danh',
      phone: row[phoneIdx] || 'Không có SĐT',
      requirement: rawReq,
      ai_score: scored.score,
      ai_category: scored.category,
      ai_reasons: scored.reasons,
      manual_score: null,
      status: 'pending',
      notes: '',
      phone_visible: false
    });
  }

  leads = parsedLeads;
  saveLeadsToStorage();
  renderLeads();
  updateKPIs();
}

// Cache leads list to local storage
function saveLeadsToStorage() {
  localStorage.setItem('lead_scoring_leads', JSON.stringify(leads));
}

// ==========================================================================
// RENDER UI & INTERACTIVE DASHBOARD
// ==========================================================================
function renderEmptyState() {
  const tbody = document.getElementById('leadTableBody');
  tbody.innerHTML = `
    <tr>
      <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 3rem;">
        <i class="fa-solid fa-cloud-arrow-down" style="font-size: 2.5rem; margin-bottom: 1rem; display:block; color: hsla(217, 30%, 60%, 0.3);"></i>
        Chưa có dữ liệu. Hãy đồng bộ Google Sheets, dán CSV hoặc bấm <strong>"Nạp dữ liệu mẫu"</strong> bên cạnh để bắt đầu chạy thử.
      </td>
    </tr>
  `;
}

function renderLeads() {
  const tbody = document.getElementById('leadTableBody');
  const catFilter = document.getElementById('filterCategory').value;
  const statusFilter = document.getElementById('filterStatus').value;
  
  tbody.innerHTML = '';
  
  const filtered = leads.filter(lead => {
    const activeScore = lead.manual_score !== null ? lead.manual_score : lead.ai_score;
    let activeCat = 'STANDARD';
    if (activeScore === 100) activeCat = 'VIP';
    else if (activeScore === 0) activeCat = 'JUNK';
    
    const matchCat = catFilter === 'all' || activeCat === catFilter;
    const matchStatus = statusFilter === 'all' || lead.status === statusFilter;
    
    return matchCat && matchStatus;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 2rem;">
          Không có khách hàng nào khớp với bộ lọc hiện tại.
        </td>
      </tr>
    `;
    return;
  }

  filtered.forEach((lead) => {
    // Dynamic Score/Category calculation based on Manual review
    const finalScore = lead.manual_score !== null ? lead.manual_score : lead.ai_score;
    const finalCat = finalScore === 100 ? 'VIP' : (finalScore === 50 ? 'STANDARD' : 'JUNK');
    
    let catBadgeClass = 'badge-standard';
    let dotClass = 'standard';
    if (finalCat === 'VIP') { catBadgeClass = 'badge-vip'; dotClass = 'vip'; }
    if (finalCat === 'JUNK') { catBadgeClass = 'badge-junk'; dotClass = 'junk'; }
    
    // Status Badge
    let statusBadgeClass = 'badge-pending';
    let statusText = 'Chờ duyệt';
    if (lead.status === 'approved') { statusBadgeClass = 'badge-vip'; statusText = 'Đã duyệt'; }
    if (lead.status === 'rejected') { statusBadgeClass = 'badge-junk'; statusText = 'Đã loại'; }

    // Highlight text requirements
    const highlightedReq = highlightKeywords(lead.requirement, finalCat);

    // Mask phone number
    const displayPhone = lead.phone_visible 
      ? lead.phone 
      : (lead.phone.length > 6 ? lead.phone.substring(0, 4) + '***' + lead.phone.substring(lead.phone.length - 3) : '***');

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${lead.stt}</td>
      <td>
        <div class="customer-info">
          <span class="customer-name">${lead.name}</span>
          <span class="customer-phone">
            <span>${displayPhone}</span>
            <i class="phone-toggle fa-regular ${lead.phone_visible ? 'fa-eye-slash' : 'fa-eye'}" onclick="togglePhoneVisibility(${lead.stt - 1})"></i>
          </span>
        </div>
      </td>
      <td>
        <div class="requirement-desc">${highlightedReq}</div>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:5px; font-style:italic;">
          * Lý do: ${lead.ai_reasons.join(', ') || 'Nhu cầu phổ thông'}
        </div>
        ${lead.notes ? `<div style="font-size:0.75rem; color:var(--accent-primary); margin-top:3px;"><i class="fa-solid fa-comment-dots"></i> Duyệt: ${lead.notes}</div>` : ''}
      </td>
      <td>
        <div class="score-indicator">
          <span class="score-dot ${dotClass}"></span>
          <span class="score-number">${finalScore}đ</span>
        </div>
        <span class="badge ${catBadgeClass}" style="margin-top: 5px;">${finalCat}</span>
      </td>
      <td>
        <span class="badge ${statusBadgeClass}">${statusText}</span>
      </td>
      <td>
        <div style="display:flex; gap:0.4rem;">
          <button class="btn btn-secondary btn-sm" onclick="editLead(${lead.stt - 1})" title="Chỉnh sửa & Xem xét">
            <i class="fa-solid fa-user-gear"></i>
          </button>
          <button class="btn btn-success btn-sm" onclick="approveLead(${lead.stt - 1})" title="Duyệt nhanh">
            <i class="fa-solid fa-check"></i>
          </button>
          <button class="btn btn-danger btn-sm" onclick="rejectLead(${lead.stt - 1})" title="Loại nhanh">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function updateKPIs() {
  document.getElementById('kpiTotal').innerText = leads.length;
  
  let vip = 0;
  let std = 0;
  let junk = 0;
  
  leads.forEach(lead => {
    const finalScore = lead.manual_score !== null ? lead.manual_score : lead.ai_score;
    if (finalScore === 100) vip++;
    else if (finalScore === 50) std++;
    else if (finalScore === 0) junk++;
  });
  
  document.getElementById('kpiVIP').innerText = vip;
  document.getElementById('kpiStandard').innerText = std;
  document.getElementById('kpiJunk').innerText = junk;
}

// Toggle showing raw phone numbers (Privacy protection feature)
function togglePhoneVisibility(idx) {
  leads[idx].phone_visible = !leads[idx].phone_visible;
  renderLeads();
}

// Highlight positive/negative keywords for quick scanning
function highlightKeywords(text, category) {
  if (!text) return '';
  const vipKeywords = ['biệt thự đơn lập', 'penthouse', 'shophouse', 'quận 1', 'q1', 'ven sông', 'ocean park', 'phú mỹ hưng', 'chủ doanh nghiệp', 'nhà đầu tư', 'mua sỉ', 'pháp lý chuẩn', 'sổ hồng riêng', 'chính chủ', 'không thành vấn đề', 'tài chính mạnh', '45 tỷ', '80 tỷ', 'đất công nghiệp', 'sàn văn phòng'];
  const junkKeywords = ['nhầm số', 'nhầm máy', 'không có nhu cầu', 'dữ liệu cũ', 'nhầm ngành', 'sai số', 'cho vui', 'hỏi chơi', 'không hợp tác', 'bảo hiểm', 'vay vốn', 'mời chào', 'quảng cáo', 'thuê bao', 'không nghe máy', 'không phản hồi', 'chặn zalo'];
  
  let result = text;
  
  if (category === 'VIP') {
    vipKeywords.forEach(kw => {
      const regex = new RegExp(`(${kw})`, 'gi');
      result = result.replace(regex, `<span class="highlight-positive">$1</span>`);
    });
  } else if (category === 'JUNK') {
    junkKeywords.forEach(kw => {
      const regex = new RegExp(`(${kw})`, 'gi');
      result = result.replace(regex, `<span class="highlight-negative">$1</span>`);
    });
  } else {
    // Highlight both lightly
    vipKeywords.forEach(kw => {
      const regex = new RegExp(`(${kw})`, 'gi');
      result = result.replace(regex, `<span class="highlight-positive">$1</span>`);
    });
    junkKeywords.forEach(kw => {
      const regex = new RegExp(`(${kw})`, 'gi');
      result = result.replace(regex, `<span class="highlight-negative">$1</span>`);
    });
  }
  
  return result;
}

// ==========================================================================
// HUMAN-IN-THE-LOOP CONTROL ACTIONS
// ==========================================================================
function editLead(idx) {
  const lead = leads[idx];
  document.getElementById('editLeadIndex').value = idx;
  document.getElementById('editName').value = lead.name;
  document.getElementById('editPhone').value = lead.phone;
  document.getElementById('editRequirement').value = lead.requirement;
  
  document.getElementById('editAIScore').innerText = `${lead.ai_score}đ`;
  
  const aiCatBadge = document.getElementById('editAICategory');
  aiCatBadge.innerText = lead.ai_category;
  aiCatBadge.className = 'badge ' + (lead.ai_category === 'VIP' ? 'badge-vip' : (lead.ai_category === 'JUNK' ? 'badge-junk' : 'badge-standard'));
  
  document.getElementById('editAIMatchedDetails').innerText = `Phát hiện: ${lead.ai_reasons.join(', ')}`;
  
  // Set current choice
  const activeScore = lead.manual_score !== null ? lead.manual_score : lead.ai_score;
  document.getElementById('editManualScore').value = activeScore.toString();
  document.getElementById('editNotes').value = lead.notes || '';
  document.getElementById('editStatus').value = lead.status;
  
  openModal('editModal');
}

function saveLeadReview() {
  const idx = parseInt(document.getElementById('editLeadIndex').value);
  if (isNaN(idx)) return;
  
  leads[idx].name = document.getElementById('editName').value.trim();
  leads[idx].phone = document.getElementById('editPhone').value.trim();
  leads[idx].manual_score = parseInt(document.getElementById('editManualScore').value);
  leads[idx].notes = document.getElementById('editNotes').value.trim();
  leads[idx].status = document.getElementById('editStatus').value;
  
  saveLeadsToStorage();
  renderLeads();
  updateKPIs();
  closeModal('editModal');
  showToast(`Đã lưu kết quả kiểm duyệt cho khách hàng ${leads[idx].name}!`, 'success');
}

function approveLead(idx) {
  leads[idx].status = 'approved';
  // If not manual overridden, auto confirm the AI score
  if (leads[idx].manual_score === null) {
    leads[idx].manual_score = leads[idx].ai_score;
  }
  saveLeadsToStorage();
  renderLeads();
  showToast(`Đã duyệt khách hàng ${leads[idx].name}!`, 'success');
}

function rejectLead(idx) {
  leads[idx].status = 'rejected';
  leads[idx].manual_score = 0; // Force to 0 for junk
  saveLeadsToStorage();
  renderLeads();
  showToast(`Đã loại bỏ khách hàng ${leads[idx].name}!`, 'error');
}

// ==========================================================================
// EXCEL EXPORTER (Using SheetJS CDN)
// ==========================================================================
function exportToExcel() {
  if (leads.length === 0) {
    showToast('Chưa có dữ liệu để xuất Excel!', 'error');
    return;
  }

  // Format data specifically for export
  const exportData = leads.map((lead) => {
    const finalScore = lead.manual_score !== null ? lead.manual_score : lead.ai_score;
    const finalCat = finalScore === 100 ? 'VIP (Siêu Tiềm Năng)' : (finalScore === 50 ? 'TIỀM NĂNG' : 'RÁC (Loại bỏ)');
    
    let statusText = 'Chưa kiểm duyệt';
    if (lead.status === 'approved') statusText = 'Đã duyệt';
    if (lead.status === 'rejected') statusText = 'Đã loại bỏ';

    return {
      'STT': lead.stt,
      'Họ và Tên': lead.name,
      'Số Điện Thoại': lead.phone,
      'Nội dung Nhu Cầu': lead.requirement,
      'Điểm AI ban đầu': lead.ai_score,
      'Lý do AI chấm': lead.ai_reasons.join(', '),
      'Điểm số cuối': finalScore,
      'Phân loại cuối': finalCat,
      'Trạng thái kiểm duyệt': statusText,
      'Ghi chú nghiệp vụ': lead.notes || ''
    };
  });

  // Create sheet & workbook
  const worksheet = XLSX.utils.json_to_sheet(exportData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "KhachHang_Scored");

  // Auto-fit column widths for presentation excellence
  const colWidths = [];
  Object.keys(exportData[0]).forEach((key) => {
    let maxLen = key.length;
    exportData.forEach((row) => {
      const val = row[key] ? row[key].toString() : '';
      if (val.length > maxLen) maxLen = val.length;
    });
    // Cap column width to keep sheet compact
    colWidths.push({ wch: Math.min(maxLen + 2, 45) });
  });
  worksheet['!cols'] = colWidths;

  // Save Excel file
  const dateStr = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(workbook, `BanGiao_AI_LeadScoring_${dateStr}.xlsx`);
  showToast('Đã xuất và tải xuống file Excel bàn giao thành công!', 'success');
}

// ==========================================================================
// TABS SWITCHER
// ==========================================================================
function switchTab(tabId) {
  // Hide all contents
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  
  // Show target
  document.getElementById(tabId).classList.add('active');
  
  // Find matching button to activate
  const event = window.event;
  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  } else {
    // Programmatic activation fallback
    const btnIdx = tabId === 'tab-sheet' ? 0 : 1;
    document.querySelectorAll('.tab-btn')[btnIdx].classList.add('active');
  }
}

// ==========================================================================
// EVENT LISTENERS & SETUP
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initApp();

  // Button hooks
  document.getElementById('btnSettings').addEventListener('click', () => openModal('settingsModal'));
  document.getElementById('btnSaveSettings').addEventListener('click', saveConfig);
  document.getElementById('btnSaveLead').addEventListener('click', saveLeadReview);
  
  document.getElementById('btnFetchSheet').addEventListener('click', fetchGoogleSheets);
  document.getElementById('btnProcessCSV').addEventListener('click', processRawPaste);
  document.getElementById('btnInjectMock').addEventListener('click', injectMockData);
  document.getElementById('btnExportExcel').addEventListener('click', exportToExcel);
  
  // Handle filter changes
  document.getElementById('filterCategory').addEventListener('change', renderLeads);
  document.getElementById('filterStatus').addEventListener('change', renderLeads);

  // Auto engine toggle behavior
  document.getElementById('toggleAIEngine').addEventListener('change', (e) => {
    config.useSemanticAi = e.target.checked;
    updateEngineLabel(config.useSemanticAi);
    localStorage.setItem('lead_scoring_config', JSON.stringify(config));
    
    if (config.useSemanticAi && !config.apiKey) {
      showToast('Hãy cấu hình Gemini API Key để sử dụng Semantic AI!', 'info');
      openModal('settingsModal');
    } else {
      showToast(`Đã chuyển đổi sang chế độ ${config.useSemanticAi ? 'Semantic AI' : 'Quy tắc nội bộ'}`, 'success');
    }
  });
});

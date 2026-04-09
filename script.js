// 内容数据
const contentData = {
    flash: [
        {
            id: 10,
            title: "2026年4月双月度Competitor Study Flash",
            date: "2026-04-09",
            summary: "2026年4月双月度竞争对手研究分析，涵盖Q2市场动态与竞争格局变化。",
            tags: ["双月报告", "竞争分析", "Q2市场", "出海电商"],
            url: "https://amazon.sharepoint.com/:p:/r/sites/YanJiao%27site/Shared%20Documents/Seller%20learning%20AI%20Hub/2026%20F2%20Seller%20Learning%20Bi-monthly%20Report%20%E2%80%93%20April.pptx?d=w218fa3827c0a4798a5890113ab6b2e61&csf=1&web=1&e=frkuoM",
            internal: true
        },
        {
            id: 1,
            title: "2026年1月双月度Competitor Study Flash",
            date: "2026-01-12",
            summary: "2026年1月双月度竞争对手研究分析，包含最新市场趋势和竞争策略分析。",
            tags: ["双月报告", "竞争分析", "市场趋势", "出海电商"],
            url: "https://amazon.sharepoint.com/:b:/r/sites/YanJiao%27site/Shared%20Documents/Seller%20learning%20AI%20Hub/2026%20F2%20Seller%20learning%20bi-monthly%20report%20-%20Jan.pdf?csf=1&web=1&e=u9PDvK",
            internal: true
        },
        {
            id: 5,
            title: "2025年10月双月度Competitor Study Flash",
            date: "2025-10-28",
            summary: "2025年10月双月度竞争对手研究分析，年末购物季前瞻分析。",
            tags: ["双月报告", "竞争分析", "购物季", "促销策略"],
            url: "https://amazon.sharepoint.com/:b:/r/sites/YanJiao%27site/Shared%20Documents/Seller%20learning%20AI%20Hub/2025%20SL%20Seller%20learning%20bi-monthly%20report%20-%20Oct.pdf?csf=1&web=1&e=71pZpm",
            internal: true
        },
        {
            id: 4,
            title: "2025年7月双月度Competitor Study Flash",
            date: "2025-07-11",
            summary: "2025年7月双月度竞争对手研究分析，重点关注中期市场表现。",
            tags: ["双月报告", "竞争分析", "Prime Day", "品牌策略"],
            url: "https://amazon.sharepoint.com/:b:/r/sites/YanJiao%27site/Shared%20Documents/Seller%20learning%20AI%20Hub/2025%20SL%20Seller%20learning%20bi-monthly%20report%20-%20July.pdf?csf=1&web=1&e=mpMDdB",
            internal: true
        },
        {
            id: 3,
            title: "2025年5月双月度Competitor Study Flash",
            date: "2025-05-08",
            summary: "2025年5月双月度竞争对手研究分析，关注夏季销售策略变化。",
            tags: ["双月报告", "竞争分析", "夏季策略", "流量分析"],
            url: "https://amazon.sharepoint.com/:b:/r/sites/YanJiao%27site/Shared%20Documents/Seller%20learning%20AI%20Hub/2025%20SL%20Seller%20learning%20bi-monthly%20report%20-%20May.pdf?csf=1&web=1&e=FCmm9l",
            internal: true
        },
        {
            id: 2,
            title: "2025年3月双月度Competitor Study Flash",
            date: "2025-03-14",
            summary: "2025年3月双月度竞争对手研究分析，深入解析春季市场动态。",
            tags: ["双月报告", "竞争分析", "春季市场", "政策影响"],
            url: "https://amazon.sharepoint.com/:b:/r/sites/YanJiao%27site/Shared%20Documents/Seller%20learning%20AI%20Hub/2025%20SL%20Seller%20learning%20bi-monthly%20report%20-%20March.pdf?csf=1&web=1&e=KWRyOp",
            internal: true
        }
    ],
    reports: [
        {
            id: 743,
            title: "TEMU TikTok Shein business model Brief",
            date: "2025-03-31",
            summary: "深度解析TEMU、TikTok Shop、Shein三大新兴电商平台的商业模式差异与核心竞争力。对比分析各平台的供应链策略、用户获取方式、盈利模式及市场定位，为Amazon制定竞争策略提供参考依据。",
            tags: ["深度研究", "商业模式", "TEMU", "TikTok", "Shein", "竞争分析"],
            url: "https://amazon.sharepoint.com/:p:/r/sites/YanJiao%27site/Shared%20Documents/Seller%20learning%20AI%20Hub/TEMU%20TikTok%20Shein%20business%20model%20Brief.pptx?d=w8e028f624a2047789f005b0b4c8b2e5f&csf=1&web=1&e=OJZeca",
            internal: true
        },
        {
            id: 742,
            title: "品牌多渠道营销分析",
            date: "2025-11-07",
            summary: "深入分析品牌在Amazon、Temu、Shein、TikTok等多个电商平台的营销策略差异，探讨跨平台品牌建设的最佳实践和挑战。研究涵盖流量获取、用户转化、品牌认知度等关键指标的对比分析。",
            tags: ["深度研究", "多渠道营销", "品牌分析", "跨平台策略"],
            url: "https://amazon.sharepoint.com/:b:/r/sites/YanJiao%27site/Shared%20Documents/Seller%20learning%20AI%20Hub/%E5%93%81%E7%89%8C%E5%A4%9A%E6%B8%A0%E9%81%93%E8%90%A5%E9%94%80%E5%88%86%E6%9E%90.pdf?csf=1&web=1&e=f3B5dc",
            internal: true
        },
        {
            id: 741,
            title: "TEMU半托管模式解读及扶持政策",
            date: "2024-04-26",
            summary: "TEMU半托管模式解读及扶持政策",
            tags: ["深度研究", "TEMU", "半托管模式"],
            url: "https://amazon.sharepoint.com/:b:/r/sites/YanJiao%27site/Shared%20Documents/Seller%20learning%20AI%20Hub/TEMU%E5%8D%8A%E6%89%98%E7%AE%A1%E6%A8%A1%E5%BC%8F%E8%A7%A3%E8%AF%BB%E5%8F%8A%E6%89%B6%E6%8C%81%E6%94%BF%E7%AD%96.pdf?csf=1&web=1&e=Q2Gjja",
            internal: true
        },
        {
            id: 6,
            title: "Multi Channel C-return Study",
            date: "2025-11-25",
            summary: "分析对比多渠道(Temu、Shein、TikTok Shop)退货流程，识别最佳实践并提供可行性洞察，帮助降低时尚品类退货率的同时保持客户满意度。重点关注退货率对比分析、卖家情绪研究、成本效益评估，为优化Amazon C-return产品功能提供数据驱动的建议。",
            tags: ["深度研究", "多渠道对比", "退货分析", "时尚品类"],
            url: "https://amazon.sharepoint.com/:b:/r/sites/YanJiao%27site/Shared%20Documents/Seller%20learning%20AI%20Hub/Multi%20Channel%20C-return%20study.pdf?csf=1&web=1&e=laKOuB",
            internal: true
        }
    ]
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    updateVisitCount();
    updateLastUpdateTime();
    renderContent();
    setupNavigation();
    setupSearch();
}

// 更新最后更新时间为最新文件日期
function updateLastUpdateTime() {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0]; // YYYY-MM-DD格式
    
    document.getElementById('lastUpdate').textContent = todayString;
    
    const allContent = [...contentData.flash, ...contentData.reports];
    document.getElementById('contentCount').textContent = allContent.length;
}

// 访问统计
function updateVisitCount() {
    let visits = localStorage.getItem('competitorHubVisits') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('competitorHubVisits', visits);
    document.getElementById('visitCount').textContent = visits.toLocaleString();
}

// 渲染内容
function renderContent() {
    renderFlash();
    renderReports();
}

function renderFlash() {
    const container = document.getElementById('flashGrid');
    container.innerHTML = contentData.flash.map(item => createContentCard(item, 'flash')).join('');
}

function renderReports() {
    const container = document.getElementById('reportsGrid');
    container.innerHTML = contentData.reports.map(item => createContentCard(item, 'report')).join('');
}

function createContentCard(item, type) {
    const typeLabel = type === 'flash' ? 'Bi-monthly Flash' : 'Deep Research';
    const link = item.url || item.file || '#';
    const internalBadge = item.internal ? '<span class="internal-badge">🔒 内网访问</span>' : '';
    
    return `
        <div class="content-card" data-id="${item.id}">
            ${internalBadge}
            <h3>${item.title}</h3>
            <div class="card-meta">
                <span class="card-date">${item.date}</span>
                <span class="card-type">${typeLabel}</span>
            </div>
            <div class="card-summary">${item.summary}</div>
            <div class="card-tags">
                ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="card-actions">
                <a href="${link}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">查看详情</a>
                <button class="btn btn-secondary" onclick="shareContent(${item.id})">分享</button>
            </div>
        </div>
    `;
}

// 导航功能
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 更新导航状态
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // 显示对应内容
            const target = this.getAttribute('href').substring(1);
            showSection(target);
        });
    });
}

function showSection(sectionId) {
    const sections = ['flash', 'reports', 'news', 'search', 'dashboard'];
    
    if (sectionId === 'search') {
        sections.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                section.style.display = id === 'search' ? 'block' : 'none';
            }
        });
    } else {
        sections.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                if (id === sectionId) {
                    section.style.display = 'block';
                    section.scrollIntoView({ behavior: 'smooth' });
                } else if (id !== 'search') {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            }
        });
    }
}

// 搜索功能
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchContent();
        }
    });
}

function searchContent() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultsContainer = document.getElementById('searchResults');
    
    if (!query) {
        resultsContainer.innerHTML = '';
        return;
    }
    
    const allContent = [...contentData.flash, ...contentData.reports];
    const results = allContent.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query))
    );
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="search-result-header">
                <p>未找到包含 "${query}" 的内容</p>
            </div>
        `;
        return;
    }
    
    resultsContainer.innerHTML = `
        <div class="search-result-header">
            <p>找到 ${results.length} 条相关内容</p>
        </div>
        <div class="content-grid">
            ${results.map(item => {
                const type = contentData.flash.includes(item) ? 'flash' : 'report';
                return createContentCard(item, type);
            }).join('')}
        </div>
    `;
}

// 分享功能
function shareContent(itemId) {
    const allContent = [...contentData.flash, ...contentData.reports];
    const item = allContent.find(content => content.id === itemId);
    
    if (navigator.share) {
        navigator.share({
            title: item.title,
            text: item.summary,
            url: window.location.href
        });
    } else {
        // 复制链接到剪贴板
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('链接已复制到剪贴板');
        });
    }
}

// 添加新内容的函数（供后续使用）
function addNewContent(type, contentItem) {
    if (type === 'flash') {
        contentData.flash.unshift(contentItem);
        renderFlash();
    } else if (type === 'report') {
        contentData.reports.unshift(contentItem);
        renderReports();
    }
    
    // 自动更新最后更新时间
    updateLastUpdateTime();
}
// 实时资讯功能 - 竞争对手平台
let newsSources = JSON.parse(localStorage.getItem('newsSources')) || [
    // Temu
    { id: 1, name: 'Temu官方Twitter/X', url: 'https://twitter.com/temu_official', type: 'social', platform: 'temu' },
    { id: 2, name: 'Temu官网', url: 'https://www.temu.com', type: 'official', platform: 'temu' },
    { id: 3, name: 'Temu PR Newswire', url: 'https://www.prnewswire.com/news/temu/', type: 'press', platform: 'temu' },
    // Shein
    { id: 4, name: 'Shein官方Instagram', url: 'https://instagram.com/shein_official', type: 'social', platform: 'shein' },
    { id: 5, name: 'Shein新闻中心', url: 'https://www.shein.com/news', type: 'press', platform: 'shein' },
    { id: 6, name: 'Shein PR Newswire', url: 'https://www.prnewswire.com/news/shein/', type: 'press', platform: 'shein' },
    // TikTok
    { id: 7, name: 'TikTok Shop官方', url: 'https://twitter.com/tiktokshop', type: 'social', platform: 'tiktok' },
    { id: 8, name: 'TikTok商业博客', url: 'https://www.tiktok.com/business/blog', type: 'official', platform: 'tiktok' },
    { id: 9, name: 'TikTok Newsroom', url: 'https://newsroom.tiktok.com', type: 'press', platform: 'tiktok' },
    // Joybuy
    { id: 10, name: 'Joybuy官网', url: 'https://www.joybuy.com', type: 'official', platform: 'joybuy' },
    { id: 11, name: 'JD.com企业新闻', url: 'https://corporate.jd.com', type: 'press', platform: 'joybuy' },
    { id: 12, name: 'Inside Retail Asia', url: 'https://insideretail.asia', type: 'press', platform: 'joybuy' },
    // 跨境电商行业媒体
    { id: 13, name: '雨果跨境', url: 'https://www.cifnews.com', type: 'press', platform: 'temu' },
    { id: 14, name: '亿邦动力', url: 'https://www.ebrun.com', type: 'press', platform: 'shein' },
    { id: 15, name: '36氪出海', url: 'https://36kr.com/motif/327686554113', type: 'press', platform: 'tiktok' },
    { id: 16, name: 'ECDB电商数据', url: 'https://ecdb.com', type: 'press', platform: 'temu' },
    { id: 17, name: 'Retail Technology Hub', url: 'https://retailtechinnovationhub.com', type: 'press', platform: 'joybuy' },
    { id: 18, name: 'Business of Fashion', url: 'https://www.businessoffashion.com', type: 'press', platform: 'shein' },
    { id: 19, name: 'TechCrunch电商', url: 'https://techcrunch.com/category/commerce/', type: 'press', platform: 'tiktok' },
    { id: 20, name: 'Chinesellers Newsletter', url: 'https://chinesellers.substack.com', type: 'press', platform: 'shein' }
];

// 计算时间显示
function formatTimeFromDate(date) {
    var now = new Date();
    var diff = now - date;
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days === 0) return '今天';
    if (days === 1) return '1天前';
    if (days < 30) return days + '天前';
    return Math.floor(days / 30) + '个月前';
}

// ==================== 真实资讯数据 ====================
var newsData = [
  { id: "temu_001", title: "8fig expands e-commerce funding to Temu sellers across US and Canada", content: "8fig expands e-commerce funding to Temu sellers across US and Canada  The Manila Times", source: "The Manila Times", type: "press", platform: "temu", date: new Date("2026-04-09"), url: "https://news.google.com/rss/articles/CBMi1wFBVV95cUxQcmtIeDFNbUx3SzFaZkdnMXZlaWZCWGxSMWVPZmFSakhkRkROcG1pdlFyRmFGWkVQR1BZanAwcnVZTWhud0U5STJPUU9heldIWkozMV8wLVhxLXZZMDhnOXRLNUlORHE4MGlPLU12OEwxN3F6TEprcUdyaFNfZ282R1dpVUxUZzc0SE4wVUNCTGR1bkx4a1FUd0FDNElyT2ZzZjZfV1pIblByMzY0RlNsX1Y2dG4xVkg0X2NDRlhXbDlfblpiY2E5bEpqOTYzSHg3SGVMYnBtUdIB3AFBVV95cUxOVjVYMXNxd296bXo1LU9NcGIwR09wVkYyNlJoaVZFNHBFc2htYXJGNzFJZE1PZllrbmNseHNpbzgwaVR0ZzlOQjluVVpScDB4bF9KWEw1LVhjbC1sZDdQNnotVmk0WS0wenFGUG8xWEd1bjNMUGNCQUVOeEdWZUtCWGYwc3VSam9TeGxpNmtwaTlUS2t3VkRNdW5BS0ZXQW9lNUk4X3R3RWgxemdjTXVCQmxnVkd5TUZIaVF1dWpKU0poSUJtbThMSGpTT0t6bUo2MWhINEg3N2pva1Ri?oc=5" },
  { id: "temu_002", title: "How Temu Gave a Quokka Coffee the Boost It Needed", content: "How Temu Gave a Quokka Coffee the Boost It Needed  channelx.world", source: "channelx.world", type: "press", platform: "temu", date: new Date("2026-04-09"), url: "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNLTI0WnZtMmNNN1hzS3VhcDRzN0FkLWwwWUo3Z2VGdzEyOUlNMUU1MUFPX3l6Rk41QnNYRFpHTGJlV2otclIyYmcxdkZKeFowa0N4Tk5vbmlSYUczaE9feU1ZUlFIWExvcUQxZ2wwckVtdl9YYTNqVktBSG5GcHZZSHR3SC00ME44?oc=5" },
  { id: "temu_003", title: "出海国际化，京东和拼多多踏入同一条河流", content: "出海国际化，京东和拼多多踏入同一条河流  风闻", source: "风闻", type: "press", platform: "temu", date: new Date("2026-04-09"), url: "https://news.google.com/rss/articles/CBMidEFVX3lxTE5hNFc4aWRLaVpnaUhDSVpmdWxTa1Q3ZUZyX0FJMWoybnAwWGZiaUx6U3pzandiMVV3dk4ydlJIaHJ2WkU4NENYXzZ5dnFnMmJ6TVBJZGtqdGgza3RDdzFrRy1kNGhydjNpX1pFU1JpQ3B0Tllf?oc=5" },
  { id: "shein_016", title: "脉脉报告：高薪岗位正加速向“隐形大厂”集中 平均月薪最高近7万", content: "脉脉报告：高薪岗位正加速向“隐形大厂”集中 平均月薪最高近7万  新浪财经", source: "新浪财经", type: "press", platform: "shein", date: new Date("2026-04-09"), url: "https://news.google.com/rss/articles/CBMimAFBVV95cUxNMmpQNlJwSlhxNVlqUGdCY3Y3MHRSMDFfcDZaZUVGU21jajZFN1d5a3E3X2NoU2NnMWFDYkt3czQ0bzJwT2hSOGNxNVdzQktCNEhaalhnSUppQVhSWUtrVDUteDhfSlBZLWxDbHpaV1c0WW9aX09vX2ZFVldGd0dRZzJXTEVGUTFaSDlqdWZJck1XbHIzS3FLRA?oc=5" },
  { id: "tiktok_031", title: "SAMY & L’Oréal Launched TikTok Shop in Spain Together: Here’s What the First Year Taught Them", content: "SAMY & L’Oréal Launched TikTok Shop in Spain Together: Here’s What the First Year Taught Them  Net Influencer", source: "Net Influencer", type: "press", platform: "tiktok", date: new Date("2026-04-09"), url: "https://news.google.com/rss/articles/CBMiugFBVV95cUxONy02ajY5YVVmd3R6b0gwVkFwdGdmR1lSdFloSTZMVHJ1OE5HTlE3NWVmbWc3aVpJY2pxVjZLZm1VSl9CTzZ3dVBJV05GY1dqSFVURmxDTUpEMzJYX2JhLTJCZHZtRmlNcTNLUTItTkZwQkxyVk9xNTRLdWdRNUJlc2NyRHNhWklDY3hJelk2a2pnenNTekhhRWJLbEJNVkpERnRDZmlNejZVTmd5VzFQM0Jva0Y2YjhlcVE?oc=5" },
  { id: "tiktok_032", title: "TikTok Shop加码“一商卖全球”：新增“内容全球分发”和“跨店一键铺品”功能", content: "TikTok Shop加码“一商卖全球”：新增“内容全球分发”和“跨店一键铺品”功能  亿邦动力网", source: "亿邦动力网", type: "press", platform: "tiktok", date: new Date("2026-04-09"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9LbzZhNWVHUVlLd0U1U3E5eWpGQ2RMeEtWNXNnNll2WjVoSWVXdGw5cGNxMWRxaTFPbXlsQkZIaTRWdUlKTzFhNi1RSTVjUlJnSDMyd1hB?oc=5" },
  { id: "tiktok_033", title: "领跑东南亚电商市场，为什么是Shopee？", content: "领跑东南亚电商市场，为什么是Shopee？  新浪财经", source: "新浪财经", type: "press", platform: "tiktok", date: new Date("2026-04-09"), url: "https://news.google.com/rss/articles/CBMipwFBVV95cUxPZERWYXFZUThlaEp6UUltcEpMTVpDMlhIR1FEdkwyenVjQ3NBQTZJRkhIbjAxUkwyb2JmaFBfa1ZuNC1iN2k1dkhrSE8wQWlXWTVpUkdpckNsR2dBRkxrTTk1cTNidFlPaU9SVjBUaDFWWDJHbGRrOThuZlEwQkwtTnN5bGZzaUtzMllYc05PSEFnOEJ2eVlBWExqMldXX3hNeHptY1hfOA?oc=5" },
  { id: "joybuy_046", title: "出海国际化，京东和拼多多踏入同一条河流", content: "出海国际化，京东和拼多多踏入同一条河流  风闻", source: "风闻", type: "press", platform: "joybuy", date: new Date("2026-04-09"), url: "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9USEtESXV2MTRVV2pSdFF1dHQyQjQwV1BTR3F3S0NEN29JU3NycnhXMnJ6cmt6WVh5bU5ENkpTMnYxQzNVbE1TMVV2Vnp5VUpGVXI2c0RQMzdYS1k?oc=5" },
  { id: "joybuy_047", title: "17点聊电商：年销售额增长超5倍京东工业自有品牌带动音飞储存开辟新市场- 栏目", content: "17点聊电商：年销售额增长超5倍京东工业自有品牌带动音飞储存开辟新市场- 栏目  亿邦动力网", source: "亿邦动力网", type: "press", platform: "joybuy", date: new Date("2026-04-09"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9tUWRNaHMxaGpPaUVkcnptZWhQb3pGbVZidVBfRTlDVWJhdTBtcnVzZzMzQ3dEOU1obGhxY0R1MlN4dTNGdnVWRTBiU2NuMXdkTkdoanhB?oc=5" },
  { id: "temu_004", title: "Small Sellers Tap Supplies From Temu to Stand Out in Crowded Markets", content: "Small Sellers Tap Supplies From Temu to Stand Out in Crowded Markets  Gifts & Decorative Accessories", source: "Gifts & Decorative Accessories", type: "press", platform: "temu", date: new Date("2026-04-08"), url: "https://news.google.com/rss/articles/CBMiygJBVV95cUxPQzFycW1Da0huLVI2TDYzcnhTbF9ERl9LZ0NjdDNOc1dDN3NMSlJLb2VOM3pvbS00R3J1cTZiRGoxOHlkX2ZCVDJRS2tCSjFHWmhyQ2JuYTkzTDVLMUQwN2NTZHJOamJLRmJXVmNIRlkyR3pNWXB0R044OW9GalkyQUd1bkN3akFDXzAyVEdpd29qdlA5LUktNFRMd0gwWXBYQ0wwTndkV0xmTHBVYWZxTWVQMHFzWlZBUmdhZGRQeFpkSjBIaHNXdDZjMHNqQ3F2czRqUUZHN0FMTGhkekE4Q0I5ZFBySHBXallOdFBCSzZMNVBQWk1STVhLUzVvRGZTbTZ1elVfemJheThwdFRnYlI5dlF4WktTLVQ2eFMxU3RoaDFZZUs3eWptOEY2NXdla1hhanB0Vk1rTF8zWVpfMTFYR0NXVkFFQ3c?oc=5" },
  { id: "shein_017", title: "箱包出海不内卷！找对赛道，轻松吃151亿美元市场红利丨2026跨境选品内参①", content: "箱包出海不内卷！找对赛道，轻松吃151亿美元市场红利丨2026跨境选品内参①  雨果跨境", source: "雨果跨境", type: "press", platform: "shein", date: new Date("2026-04-08"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9mY2djYWhJNGdLOTNpWnZMUDdiYnBSR2lKWHU1MllpQ2tHb0x2VDIxZDJBTDdWbGVBRkJLRzB1NXpxYzVrajEySUJjWHQ?oc=5" },
  { id: "joybuy_048", title: "京东全球购11周年庆盛大启幕 线上优惠与线下狂欢共同解锁全球风尚", content: "京东全球购11周年庆盛大启幕 线上优惠与线下狂欢共同解锁全球风尚  新浪财经", source: "新浪财经", type: "press", platform: "joybuy", date: new Date("2026-04-08"), url: "https://news.google.com/rss/articles/CBMiiAJBVV95cUxQMEJValNmSXRKU244NUZ4MEVvYUwzV19HSHFMdW50S20xREZmaXM5RlNzRmx0WE5MbmZXaWt5WUJWNXZoTi1uTjZiVjhGX2JyYWNqWEN1SXBTWlNRY0lZR3Q3VTJWQWkxY0o0cTlKUzA3OGVMN2t6bWREdFRjVWdMVEEybGRFZkNSUzBrNFYweUQ0Z2FoQUoybmw1WHFYajBkRWF0aUNId2I1NWFONzF2XzdYSGhhQ3NyRHc3NjFSd0N6aG5ONnpVTUttV3pBVV9SYXZkOW1SMGo0aVRBTVY4ZVphaFh3THZZOUFONVpnOF9Vay1qX1Z0UEFGX3N1azRBUDAxckhkVHA?oc=5" },
  { id: "temu_005", title: "中国发布电子商务发展指导意见 鼓励跨境电商扩大进口", content: "中国发布电子商务发展指导意见 鼓励跨境电商扩大进口  DW.com", source: "DW.com", type: "press", platform: "temu", date: new Date("2026-04-06"), url: "https://news.google.com/rss/articles/CBMi6gJBVV95cUxNRkNud2hLeldNTWNpbl9wZVgxZnRQcDQ2QUpNajhLaUptX1J6WDhOelFUZURfRW9PVmNkRDhPWWIzY2dLdHRPZGJOQ1ZWQW5Ra3ZTR2RlbHJvRlRxdTFURWszaGpab1kwTTVxaUowVjdjcnZLZ3dKdjdWZjFwSTZMSEQtUHFkWkUwaUVjcWdzMmlpSTU0Y3M2RFd6bmFLZXNFZEVNMzNIb0dyLWtaTUN2ZkxJRFFWTEhwNXJacGYxZ05Vd3RuSU0wNUVUazF5QkViN3lmWVlBT3U2dDJvWEpfQm1HOER0VlRsS2VPWFkzZlhUVWs4ZW9iVGQ4Mk1weUc1Sms2bFY0VmtGckR4MzRTaWpBcWd6TllxVWRLM200NVdhQ09Hb0ctQzZ1N051dFhJSG1iRXdDdF80RWhnVTdtU2JFVmxEODVYZkUxclVENnR1TzUwYkpmT0JCQmdJRUp6SE5kRHREaGVJQdIB6gJBVV95cUxPUHZQTUhUamFsQlU3N0xYZ0FodmJqWFRjVUlEVXVsMnZEU3J6bGFyZGlnUVliUy11UUwwTlRMRnVkdXNyTUR3em5WTVBvQ0dhN0tqaVctZHF1aFk0R2ZIWGZiM2wtdWpjeEFUdVIxU0t1X2VaTjNzaUY1Ql82V1RJS2ZxQXV6bzZOdEVNSVZzZlZYNWlUeG9TbUppdlZjWnVYQXdpQVY1dmNEcVZjYlEyV2FLV29yWWpKbFAtZThDeG9YMlpBWV9XZER0b0s2MFBSNUdHTnd0TURqdmNPaS1qalB1Qnp1XzlQNThOOEl6YU1FdktqNlZKaS1rSjNuY3N0Xy1aNzdhRUNURjZnRDQtU3JGajVQNzVtV2pFV0REd04xelpSdXp6NGZIdDBCbXl0VWQ4b0xSUi1HbU9Nejd6RGhHSndUYnpWVXRVa1pXUURLekVvYzViZ19xdGtUMFUwTjFNTkxOUDlfUQ?oc=5" },
  { id: "tiktok_034", title: "TikTok Shop gains traction in Germany - Ecommerce News", content: "TikTok Shop gains traction in Germany  Ecommerce News - Europe", source: "Europe", type: "press", platform: "tiktok", date: new Date("2026-04-02"), url: "https://news.google.com/rss/articles/CBMicEFVX3lxTE1kVzJzYjZsd1VNcnljcHlGVEVoQW1aTlNXNmNRR0lfRGFZbllhZDZZNXdPc2NMdUN2TDFTTkFBUXYyUzRLWjR3aE9ZM1VkTzM1Ylk3ejZIN0ZPdElobjVHNm9zQnlYSHM2V3FpX0c3SG0?oc=5" },
  { id: "temu_006", title: "Does Pitney Bowes’ Temu Integration Signal a Turning Point in Its Ecommerce Strategy (PBI)?", content: "Does Pitney Bowes’ Temu Integration Signal a Turning Point in Its Ecommerce Strategy (PBI)?  simplywall.st", source: "simplywall.st", type: "press", platform: "temu", date: new Date("2026-04-01"), url: "https://news.google.com/rss/articles/CBMi1gFBVV95cUxQTldMUThXa25zY3JNcHhYRHllbUxIRm1GdVB0a3pIVkRuMEdFODZ6Y2hTYTcyZWRpMlRCcnN3VkNocmx2TkZOSDZwTkNtX2RMMkhBRUhLcWJITDZWbEp5SXFVemcwcXhQWjFPNUw3YjZaOU83TzdMZE1YY3FYbmdCU3M3UkMxZWhYQkZQQ2V6RE0tbDRlSVN0b3FEamc5MTNwRmNLSHBGQUxHbFBWbUJEVjFuRm9OVmhNVWFvVkhDUW5weUZobTllMUJ4NzFDODFmbW5ZOGJB0gHbAUFVX3lxTE5pZXFyMGg0TURjbGdNRXY4Y3A4TTZTbldYSXl2S25vSm9WaTlDaGlYeE4zQXB4d0RFZ0h3VFA0UDQxMHFtaHBRQUJGRXB1V2NYYVc5WVd0UHhaUG5ITGdKSDg0bFJVeEs0Y0pfMWNET2Y3WGZuMkZHNU82dWV0LXVUMWxKaTdxNDlnWUxkWmowODgxbUZ1QXR0aE4zVVc4d2E2SDJraTJUX3JBMWNhZWFYSWc0b1V6V0lsdlUzSHlKREZiNlFoQ0lYUzQyaTdGRktuVGtVN2JTYnUwQQ?oc=5" },
  { id: "temu_007", title: "3月跨境电商：京东上线Joybuy TEMU用户直逼1.3亿？欧盟电商强制“一键退货”", content: "3月跨境电商：京东上线Joybuy TEMU用户直逼1.3亿？欧盟电商强制“一键退货”  潮新闻", source: "潮新闻", type: "press", platform: "temu", date: new Date("2026-04-01"), url: "https://news.google.com/rss/articles/CBMic0FVX3lxTE9OVkNHeExaNUZjSXEtUDhMeHVWcGdCU1RvMVJjSE83MGVXSWdSc005dTYzYnJHY0VyaHM2RHgyZ0RFc21BTEdqMXQxbHpJZktMd0RuVjNfb2R5TWtQRkRWQ2RKbU52RE5ndUJ3bXVGNmFSUlE?oc=5" },
  { id: "joybuy_049", title: "3月跨境电商：京东上线Joybuy TEMU用户直逼1.3亿？欧盟电商强制“一键退货”", content: "3月跨境电商：京东上线Joybuy TEMU用户直逼1.3亿？欧盟电商强制“一键退货”  潮新闻", source: "潮新闻", type: "press", platform: "joybuy", date: new Date("2026-04-01"), url: "https://news.google.com/rss/articles/CBMic0FVX3lxTE9OVkNHeExaNUZjSXEtUDhMeHVWcGdCU1RvMVJjSE83MGVXSWdSc005dTYzYnJHY0VyaHM2RHgyZ0RFc21BTEdqMXQxbHpJZktMd0RuVjNfb2R5TWtQRkRWQ2RKbU52RE5ndUJ3bXVGNmFSUlE?oc=5" },
  { id: "temu_008", title: "Pitney Bowes Temu Link Tests ShipAccel Growth And Merchant Stickiness", content: "Pitney Bowes Temu Link Tests ShipAccel Growth And Merchant Stickiness  Yahoo Finance", source: "Yahoo Finance", type: "press", platform: "temu", date: new Date("2026-03-31"), url: "https://news.google.com/rss/articles/CBMinwFBVV95cUxOUk9RcVhGd1JlMXVYXy1hRnE5Yk9hVXEwRjhkTzlhdzl5SFZyWGlqVHZwRkZpcmozVzBINGYtUExwZzdFMWltQ09MRzhFQ1MyV2JBUnFCSkl4SDBPZ2tLYUVIOE9LelV2SjJjTDIzTkRPTGVGVS1JM0lRTEJGTXFkSGVFd0ZmeUw2VUdUVWdCZjNqTWc5Vkt3RFYxaXN6Mlk?oc=5" },
  { id: "tiktok_035", title: "NIQ Perspective: How TikTok Shop Is Reshaping Beauty eCommerce in the U.S.", content: "NIQ Perspective: How TikTok Shop Is Reshaping Beauty eCommerce in the U.S.  NIQ", source: "NIQ", type: "press", platform: "tiktok", date: new Date("2026-03-31"), url: "https://news.google.com/rss/articles/CBMiywFBVV95cUxOUmtIWm1oWFZLTWpYZ2syRHRZMEJ6cUlUOXA3U05obm1FNUNyNE9fal9wNm5xRm82RTlCYTRvTkx0SlZJNDY3Qzd0SE5ITlFCcXV0STdfQ042by1qUS11RTdpdzRzN3VrNHlTeGFYcGxSOWdkd1JQbERDVFpHZHRZUkMxTE1jN1dlM0ppTzI4Q3dzUmZyUWo3X0Zta1hXZS1IOEZRMnpRNkg0ZVhrRWdaTm9JbU1IY2U4aXdJMEROeEFITnZ3SUdWS1V2RQ?oc=5" },
  { id: "joybuy_050", title: "【网经社月报】3月跨境电商：京东上线Joybuy TEMU用户直逼1.3亿？欧盟电商强制“一键退货” 《2025中国跨境电商投诉报告》发布网经社电子商务研究中心电商门户互联网+智库", content: "【网经社月报】3月跨境电商：京东上线Joybuy TEMU用户直逼1.3亿？欧盟电商强制“一键退货” 《2025中国跨境电商投诉报告》发布网经社电子商务研究中心电商门户互联网+智库  网经社", source: "网经社", type: "press", platform: "joybuy", date: new Date("2026-03-31"), url: "https://news.google.com/rss/articles/CBMiU0FVX3lxTE9QZ19ONVJBVnE5Ui1jWTRRT0tFMHY2c0djckNYVlpiMHNTa3Z1MjVRZndROWZXMG9QTnNQSTc4WTJRNVZkM002dV8yUHgwblc4QlNF?oc=5" },
  { id: "temu_009", title: "Pitney Bowes Launches Temu Integration Within ShipAccel®", content: "Pitney Bowes Launches Temu Integration Within ShipAccel®  Business Wire", source: "Business Wire", type: "press", platform: "temu", date: new Date("2026-03-30"), url: "https://news.google.com/rss/articles/CBMisgFBVV95cUxPNXlDZHluZDdaYWltUXI3UUhTeGNENnF2YkVNTjZrSnRuZTFGUURlSTMtZEJkUmtjejlVcjVGY3BTRVo1UUVENFVpVjdXRGMyazBBVU50Ty1peUxLVUdNT3BzLVlFNkt5RVo4enZBWE13N3J3cFVtTHBXNWQ0MElWTmxRbjRNSUZBaEh4WHZUMDktVHBmbE1hX3VudFFFeGpxemJVTzZVUVpVY0x5VjFXNjNn?oc=5" },
  { id: "temu_010", title: "跨境日报：拼多多Temu孵化自营品牌 阿里国际推电商版“龙虾”", content: "跨境日报：拼多多Temu孵化自营品牌 阿里国际推电商版“龙虾”  亿邦动力网", source: "亿邦动力网", type: "press", platform: "temu", date: new Date("2026-03-30"), url: "https://news.google.com/rss/articles/CBMiRkFVX3lxTE1nWTFKcGpZRTBBN21aaklyZWllOTJhQW5oSXVGU1lCTG1CUnNhT1VLSXViRTRoamQwdjQtNVBuNTNaNTREU3c?oc=5" },
  { id: "temu_011", title: "拼多多Temu将孵化自营品牌；阿里国际推电商版“龙虾”丨跨境电商周报", content: "拼多多Temu将孵化自营品牌；阿里国际推电商版“龙虾”丨跨境电商周报  亿邦动力网", source: "亿邦动力网", type: "press", platform: "temu", date: new Date("2026-03-29"), url: "https://news.google.com/rss/articles/CBMiRkFVX3lxTE9DNmFqTXJucEQtSTd1RlhkaGwtenRibWM5QkE4Z3lVczlVVkRaVkwzeTJEQktWVXRMZE5yVkJIUTIyQ2hpZ0E?oc=5" },
  { id: "temu_012", title: "EU is targeting small parcels from Shein, Temu and other Chinese e-commerce sites", content: "EU is targeting small parcels from Shein, Temu and other Chinese e-commerce sites  Le Monde.fr", source: "Le Monde.fr", type: "press", platform: "temu", date: new Date("2026-03-28"), url: "https://news.google.com/rss/articles/CBMi4wFBVV95cUxQSU1BTHNmM1RjNG4zOHk1dEE1anhUQzlNa2tyVnVaVkRwRER6cWRGMzZaZWNLMFp5Z0VhTnBMNUdZTW1XRTFTMnJxZnMxajV3eVpiR09hbUVvUjFxYW80X0xhc1dXMkpVV2YwN042YllLS0oxLVJPUXkwcWJiWEdqVVQtbzA0ejRDUlBBV2JDOHpSTFowbGljSzdBWGxJZkN6dW04YjlEWW9VQzdLXzFFWUo2NVdkbTg0bjFCV19KR3BDTU5zejhvbnBreEtLdDUzUUN1bndTUlhTYUE0WFNqcWtZUQ?oc=5" },
  { id: "temu_013", title: "高盛：Temu进入“变现”期，拼多多增长新拐点已经到来！", content: "高盛：Temu进入“变现”期，拼多多增长新拐点已经到来！  华尔街见闻", source: "华尔街见闻", type: "press", platform: "temu", date: new Date("2026-03-26"), url: "https://news.google.com/rss/articles/CBMiU0FVX3lxTE1YOE04d2l3TnRCLUV1N01NQzhTX1U1ODVqQnJjUkRfUGlsQmdPWlFHT1NTUUh0UnhHemNyTjNLbTZEZ2c1NmFmN1Z5eF9QeTJMMFc4?oc=5" },
  { id: "tiktok_036", title: "Sales from major brands on TikTok Shop nearly doubled in 2025, drawing Ulta and Sally Beauty", content: "Sales from major brands on TikTok Shop nearly doubled in 2025, drawing Ulta and Sally Beauty  Modern Retail", source: "Modern Retail", type: "press", platform: "tiktok", date: new Date("2026-03-26"), url: "https://news.google.com/rss/articles/CBMiywFBVV95cUxPQ19KSFg0VlZZMDBpaDY0a0plTnloZ19TV2xXUUhXWHMwSTI0ckJ2eVExYzd1WVRiQ2V2eTJXN2FOOTJwa2VSU3BMN0tKRE9lNmxDbU5waHRqbFVyczBYNElsaHQweWltcWVMSFlLSzA0TE01VWpURkF3c1M1SFctcWlMOTl2ZTBGTHZUQk9rTF9PbW5QWVVSTTJZcWh6VzRCai1iSjhZcW1nNmxmMzFkVWkwVzNJcDNpZXZXeTJMR0hqeE42MkRfejN0MA?oc=5" },
  { id: "temu_014", title: "Temu partners with Centric Software to streamline seller ops", content: "Temu partners with Centric Software to streamline seller ops  Retail Insight Network", source: "Retail Insight Network", type: "press", platform: "temu", date: new Date("2026-03-25"), url: "https://news.google.com/rss/articles/CBMihwFBVV95cUxQQy05Nm4tUmdPdHBNWmZIRnRKRzUtOVFqM3NQSU9oQjVIcGk3MWo4T0NWa1hjWmQ0SmRCMUJRd2FGcFNzRTdTTWxOdnRLLVBXZDFpMlRpVjhqZ05Sa2drQnhkdkpkWTc3UnNHMU9obmstb1h3MFB1MWkta3dyT0ZWd2pDc1FWZ2M?oc=5" },
  { id: "joybuy_051", title: "JD.com Expands Global Retail Reach With BayMar Deal And Joybuy Launch", content: "JD.com Expands Global Retail Reach With BayMar Deal And Joybuy Launch  Yahoo Finance", source: "Yahoo Finance", type: "press", platform: "joybuy", date: new Date("2026-03-25"), url: "https://news.google.com/rss/articles/CBMimAFBVV95cUxQR2xkbWswR3Z1QjY0c1ppWXpxdXRTUmNQdWVZTE1WVjBWTEsyS1FpSUJrdGUzNnhGeGxKTmNJZmJqWnBFMlJYNmNhTThCY3RpUWh0THd3eF8tX1NReWlCZG9aWjRNbjN1RTdtZXhpNFpFa3ZkTkk0N3FJaGJ1dlJBZFRDUmo4b09ZQ3NpSmxjcDdYWEM2bEVocQ?oc=5" },
  { id: "temu_015", title: "Centric Shoppingfeed Partners With Temu to Enable Scalable Growth for Sellers", content: "Centric Shoppingfeed Partners With Temu to Enable Scalable Growth for Sellers  PR Newswire", source: "PR Newswire", type: "press", platform: "temu", date: new Date("2026-03-24"), url: "https://news.google.com/rss/articles/CBMizgFBVV95cUxNZF9Dam0wQzZxc3N0T0xrRC1oNzRHcDc1WTU2a2xhQ0g2MzEzN3NoWmduRjFkaXF1MVZoNGJtcGMzR3hVUU0zR2szR05Tb3JpTDU0cjBHek05NjZoLUhheXBVaWdCcTJsMWJ2UnJjTDRBZzZhaUF6cVNRRXhaaFpoNlBRUmNOc1NiRHpKVXd2ekpUemg4T2JmTkt1bWRtV0lqeVl6LWV1ekVIeWNEU2lWcDFuSEp1c1B2SVVpQm8xME45ZlJENXZDRmVmM2ItUQ?oc=5" },
  { id: "joybuy_052", title: "JD.com Inc stock faces valuation pressure amid China e-commerce slowdown and global expansion push", content: "JD.com Inc stock faces valuation pressure amid China e-commerce slowdown and global expansion push  AD HOC NEWS", source: "AD HOC NEWS", type: "press", platform: "joybuy", date: new Date("2026-03-23"), url: "https://news.google.com/rss/articles/CBMiywFBVV95cUxNbG9NZi11YU5OOUVwODhSWGpNV1JMX1Q5S1c4ZmZNaVlZNW5vQzVVaHBzU1ZURnI1eURTeFFnRnlsaG1PSURYMTFSc0IwY1lIa1NrdWdueGEyT0dYXzRhZmV3Q2VYV255VkpwYktoSV9oUEw0RWttLWFxRFZIek9DQ3VEdVhBNjNwcDFuNk9rUmlzZnFPMjg3LUtVWXlNT0F0cENNSzBSdlBCX0tOa1NIaFNvYkRETy15ZmRnbms5MzMxZDQzVFE5UmkyMA?oc=5" },
  { id: "shein_018", title: "White & Case Defeats French Push to Shut Down Shein's Online Marketplace", content: "White & Case Defeats French Push to Shut Down Shein's Online Marketplace  Law.com", source: "Law.com", type: "press", platform: "shein", date: new Date("2026-03-22"), url: "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPb0RUOGxaUzl4OGxWbVBoNHhLNHhZaTJZQ1dxc3ZfZTlPVlhlcnl4VHJibUN6VzlaSGtoQ2ZydnlQV0dwMENlaTFZdWZnbFhXVGVrM3ZzVFA5QTdQWlZqUzBqb2FHSFFjZEd4czVKYnl3UzFtQmp4ZDM1S2I3WUluMWFJeHdaSC1pcW44Q0RQOGNmVFI0TDJOM3k0dklKWDJ4Y01jZUNrQS1oX1dsUVBJYnBWbmxtdFNDdlFQWEJ3Z05PTG8?oc=5" },
  { id: "shein_019", title: "Paris appeals court rejects France's attempt to suspend Shein's marketplace", content: "Paris appeals court rejects France's attempt to suspend Shein's marketplace  Reuters", source: "Reuters", type: "press", platform: "shein", date: new Date("2026-03-19"), url: "https://news.google.com/rss/articles/CBMi6AFBVV95cUxOaEtZRlFReVV0MWVlTENacXVNal9JclBlSWdRU2h2NmFMdkNPY1JJMW5TYXhJcWFzUGE3V2lObUI4OFVfbFNuVkRkekJaSHdBMjRGM25rMDYtTWNHX2dOdWd6cW1kVkpyX3V3THNhclFrMGFRbkN6dThqTE0xR2lLV003M1pyMUNyUWFrWVZVS3BCTFE0MUluUTRLbTQyRnIwZ1FSUzEwMWFlOWhobDdrQ1FacXo1NkViSWhzamRwaVR3MURiUDB6TFVqR0VTMTFrZmF4aXJ4YzRlZnBpdWRwUkUya2JUUHZL?oc=5" },
  { id: "shein_020", title: "Shein Wins Appeal as French Court Blocks Attempt to Shut Down Marketplace", content: "Shein Wins Appeal as French Court Blocks Attempt to Shut Down Marketplace  WWD", source: "WWD", type: "press", platform: "shein", date: new Date("2026-03-19"), url: "https://news.google.com/rss/articles/CBMitgFBVV95cUxNT29TRDJ4dXo5MzhKN2J0RVdDSWtYUS15TkdmVHduZG5vNGVXaGMwYVRnWElmNHNaSUtIMmdTTlpxaDBmTEV4WHRBeGpDbnl0ZXlMLVdJTjB1by12YU05WVE2NU9aTVN4SDBGVDlyRGlMOXZYWXBSRzJVZWIwTUlVVEFLcU1NcHVCVjRnb21meENfMzRZd1N5RnJHLUh6OE1Sc0hZbVp2Z0FTdi1BSC1XazVrU1Atdw?oc=5" },
  { id: "shein_021", title: "French court rejects bid to suspend Chinese retailer Shein’s marketplace", content: "French court rejects bid to suspend Chinese retailer Shein’s marketplace  Anadolu Ajansı", source: "Anadolu Ajansı", type: "press", platform: "shein", date: new Date("2026-03-19"), url: "https://news.google.com/rss/articles/CBMisgFBVV95cUxPdzBBUmNfZXhTclpRem9JVVhFY1pQNV9sWlFYOEprSjlBMjhWS0lJWXR3T2xqNER5a1FQSGhCZ0FidHdxd0hVZ1A4QWZaU3l2d1NKdEE3bmFPNlhyMzJCX0JRbHVUc2RnNHBRb0xBWTNyZGw2WWdMaXJkWGlRZW5ubnNMRTVabVp4d3ZFTWVmeGhDVDFHNDBrbndla3NzLU9Xc1B1Um96MWpOT3p1UUdnX2NB?oc=5" },
  { id: "shein_022", title: "Top 10 E-Commerce Marketplaces in 2026", content: "Top 10 E-Commerce Marketplaces in 2026  Marketplace Pulse", source: "Marketplace Pulse", type: "press", platform: "shein", date: new Date("2026-03-19"), url: "https://news.google.com/rss/articles/CBMihwFBVV95cUxOOWoyZ0hpYXV6V3dWMVZnLXUtR1NQNzVXcFNFTTFiMmJlNU5xV3E5T0VYY0R5RkdPZXpTV1dKZE1BbWNMd1lIaEZjYWUwLXZUNGZCWGxLLUpqb1U1dWxmTVg4WHRIQ09ja3lIWUZPYnRxUEdVS1dHenhLVnRpR1NSTzEyYlFIT1k?oc=5" },
  { id: "tiktok_037", title: "Sally Beauty Expands into Social Commerce with Launch on TikTok Shop", content: "Sally Beauty Expands into Social Commerce with Launch on TikTok Shop  PR Newswire", source: "PR Newswire", type: "press", platform: "tiktok", date: new Date("2026-03-19"), url: "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNbFk3WXhuaTZIN0hHMktwN3A0UEkwOUJqY1gxS0lWaU4tdXBvN2FxOXhYTnp5RnJUaDlLYXl2OW9HLVNuT1gzS3ZpOU9BclZVdVc0NDQ4SnZGQWRtaEhyLU51SU5QV3V6Q3dSanhEdXlpZDhDQ3VHLXU3azdZaEYtamNzNFNfd0pvRHNXcXpObkxPbkRIS255TXIwdElNTm9jWXU4MlJZM2lOTmxlWnQyd0UtbWp0c2xzZXpITUpfM3kwZw?oc=5" },
  { id: "tiktok_038", title: "Ulta Beauty debuts on TikTok Shop to ‘drive incremental growth’ via social selling", content: "Ulta Beauty debuts on TikTok Shop to ‘drive incremental growth’ via social selling  Cosmetics Business", source: "Cosmetics Business", type: "press", platform: "tiktok", date: new Date("2026-03-17"), url: "https://news.google.com/rss/articles/CBMilgFBVV95cUxPNVhOQ2hva3d4Y1BUa2VETkhSUklZQWVSa1oyREx4bWl4WVVfVDU4ajRlT3BJREMwLWtnSGZOeFJmbVZXUVZNbFpXdmN2eEYxUmFGUjhoYy12VkxkX1pOc2M0M1JhVzlUb0VMTlgySWZmZkFoeEU4cDM1dHEycXYwSWlyXzMzNzdRbllPNXZmcktYdWRZSnc?oc=5" },
  { id: "tiktok_039", title: "做强品牌，共赢增长！TikTok Shop升级发布美区ACE商家经营方法论", content: "做强品牌，共赢增长！TikTok Shop升级发布美区ACE商家经营方法论  品玩", source: "品玩", type: "press", platform: "tiktok", date: new Date("2026-03-17"), url: "https://news.google.com/rss/articles/CBMiSEFVX3lxTE5KeTN4NnZ2TlJ1dWppOThlLXF3LUV6dmgxbDUyMERyT0kxcWRmVmJBN0NzNnR5X2FpQkNZUy1XV1VVY29leno1UQ?oc=5" },
  { id: "joybuy_053", title: "JD.com challenges Amazon in Europe with launch of 'Joybuy' marketplace", content: "JD.com challenges Amazon in Europe with launch of 'Joybuy' marketplace  MSN", source: "MSN", type: "press", platform: "joybuy", date: new Date("2026-03-16"), url: "https://news.google.com/rss/articles/CBMivwFBVV95cUxNc2NySTljMjN5eTdWanJLSFZyTjNlRlQ0dl82c3hpXzNqclVrSzRnWjJmeTdJYktKc19lb3ptLTI1ZGI5dFNsTGg2bGREUFU1SkJSVVo2cWtPdmxoUXJaSkl4dVVLRHdyU2VvYlIxa211b1VtenBnT1hpcC1obmw3V19FeTRVeFpXZnlpQWNMMHlZZnRzcUMxVi1lVHA4Tk4xVThCWXZab0ZIVjBTVXBxdHFKei1ocEJvS2duMnBhMA?oc=5" },
  { id: "joybuy_054", title: "JD.com Unveils Joybuy in Europe, Taking on Amazon in Global Expansion Race", content: "JD.com Unveils Joybuy in Europe, Taking on Amazon in Global Expansion Race  Modaes", source: "Modaes", type: "press", platform: "joybuy", date: new Date("2026-03-16"), url: "https://news.google.com/rss/articles/CBMixgFBVV95cUxQc2plMGVQSGhfaFFnY0VnSFBNSnloTDB4Qk1yX2pXeExnZjJfT3JzSHpGTE9CeVEzUkpJSnV6M0ljSEJEMGVjYnJMeW9zSVk4M0czUjlLdm5GRGpvZXN0S2gyRktrbF9WMV9zdXAyUWo3ZDNsN0FXTzV0VDdqbFJuY0ZGS2NFcWRJNkc0U1V6UlJKOFQtVkFFRHY5TlN6RFJYNDAzN0VURmxRQ1ZQZTNlbVpoaDdDd1Bnc1ZyV3BkTWpBc1VpYmc?oc=5" },
  { id: "joybuy_055", title: "JD.com Launches Joybuy Marketplace in Europe to Challenge Amazon", content: "JD.com Launches Joybuy Marketplace in Europe to Challenge Amazon  Global Banking & Finance Review®", source: "Global Banking & Finance Review®", type: "press", platform: "joybuy", date: new Date("2026-03-16"), url: "https://news.google.com/rss/articles/CBMikAFBVV95cUxOd3R4ay1oa2J0V3FwdUJtVEVKSWMtU19xejZiWVRSVGlGTE01TmdmZ2kxQTBwd1RUV0s4LXFIb2pwZW1kNnEwTUQ4dXhJckhCQUJQRHgxMWhYa190bHpLd2dlNjVDZTBtYUVDd0NPbTNRT1BPN0VkcnJ6TV9RVEt2bG93MGJSa1FJb3V5S1Z5YVI?oc=5" },
  { id: "joybuy_056", title: "JD.com Launches Joybuy In Europe To Take On Amazon, Alibaba Group's AliExpress And PDD Holdings' Temu", content: "JD.com Launches Joybuy In Europe To Take On Amazon, Alibaba Group's AliExpress And PDD Holdings' Temu  Benzinga", source: "Benzinga", type: "press", platform: "joybuy", date: new Date("2026-03-16"), url: "https://news.google.com/rss/articles/CBMi5gFBVV95cUxNMDFlRWY2bGoyVFppcnMyVEZTVUJiSlZ0ZWtQNVlodzBBaU01clQwZWFXYVBzMzNjWmJLOFpRVEFFV3A0ckZQalU4a3RVeWk5QXVpbjNEbFFfV2U2VGoyLUZWZjZvMDJzdEZPcGtMdEEybUNBeG5fbVZJOEo5blVJWnNWSEpGYXg4dVhWVnh6RnpPcmNtUnBWa0pLVlg4NXh1NzdNRm82Y0NDQ1FxUW5mZU92SUg1YmlhemFOSi1mT25TSjJDZjIwUklCRGxCRXZaZE8tazloR0w5b3pLWmsxcHVBb0dYQQ?oc=5" },
  { id: "joybuy_057", title: "Joybuy上线欧洲六国：茅台出海、机器人热销，京东海外布局全面提速", content: "Joybuy上线欧洲六国：茅台出海、机器人热销，京东海外布局全面提速  每日经济新闻", source: "每日经济新闻", type: "press", platform: "joybuy", date: new Date("2026-03-16"), url: "https://news.google.com/rss/articles/CBMiZkFVX3lxTE9pUjFKNDlkWFBxem5NSnJmNlVkbmpxNU9qRjIxdWFCa3p1enpMejI3VUVkdWxuanNIUnVNNE1Nb083SnhvdU9FblFDYnVDcmR2dlNkLUR1OTRCWDUyeVNwdnF3eFZKQQ?oc=5" },
  { id: "joybuy_058", title: "JD.com takes on Amazon in Europe as China's e-commerce titans expand globally", content: "JD.com takes on Amazon in Europe as China's e-commerce titans expand globally  CNBC", source: "CNBC", type: "press", platform: "joybuy", date: new Date("2026-03-15"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxPUEVUTFdHX3hQS1JWbmhqN3pXTHI2c3RmdnUxcnd3bGl0eGVEeTdEaF94bzE0N2w2SjhTVFllSjRMV0tBekp2NXYtWlFjdHZncm13NnZCMDlISmRkSFJBVllEdTA4SFo3UnAxWEpRb0JPR3ppTHFISzlTaUMxZXg5VzktRzHSAYoBQVVfeXFMTkJKSFBHYTZ1VXdLeUQ5SVdCRkVMR1Fsc3Q2bEhIRW9MTGw5SzRRMk83MFAzLTl3cm9UdzdRX1U3Y0N1UUVpb2ViUTZpZWJ4T2djNmUtS0xlMHlxZXdHUHdTXzlqRU96elM4UWNIYkxNWFV6REVaeE9pNGcwOVE0WmJhcUw3YXpZQTdn?oc=5" },
  { id: "joybuy_059", title: "JD.com launches Joybuy in Europe, targeting Amazon", content: "JD.com launches Joybuy in Europe, targeting Amazon  VnExpress International", source: "VnExpress International", type: "press", platform: "joybuy", date: new Date("2026-03-15"), url: "https://news.google.com/rss/articles/CBMingFBVV95cUxNbUdzY0VDeUJJdlhIVEM2TXd4bmNRb0ZfV0lJS3RXbi1ibDJMdlRrTW9wZzdWYmFLcWFLRU85dEdwRVM3Mm9rSmtvYXFWbHFHclR6ZHpic0ZTNG9qTkliWDF5LUlhX1lJY3YtWUt4RnkwdlI4NFFyNU05c0ZYUHpNM0NyMXlkeWVvaEM0Rm1RVWtDUTFwTlo3M05Mc0ZlQQ?oc=5" },
  { id: "shein_023", title: "SHEIN fashion pop-up starts Thursday in Tempe", content: "SHEIN fashion pop-up starts Thursday in Tempe  Phoenix New Times", source: "Phoenix New Times", type: "press", platform: "shein", date: new Date("2026-03-12"), url: "https://news.google.com/rss/articles/CBMiogFBVV95cUxPMVI0MHRGRFB1TjVrZGxGYXJhd0RMa1Y4V0pqM2dqcHFSdFJNQVZxYXdkSy1lLTNIVU9xaGpKUlFQRXJFdUlycHoyUjk2d2Y0cHFPTDB4MXNFaFo1ckYzTzU0MVRfLVNIOTRWd2FkTU5PWThLOEg2bzNsQlp4WmIzZ2FqMUFVYTR6emVNdy1qRzkzcl9wbzVDSUh6SlhtYnVpbXc?oc=5" },
  { id: "joybuy_060", title: "欧洲版京东即将上线，时隔十年刘强东又回来了", content: "欧洲版京东即将上线，时隔十年刘强东又回来了  新浪财经", source: "新浪财经", type: "press", platform: "joybuy", date: new Date("2026-03-09"), url: "https://news.google.com/rss/articles/CBMiiwJBVV95cUxOQnU3d0VGSkVZb3hJLTdUOEZGLXY4VVBHZ0VmYVhwZ245OGMzVV9qR0g2S1dwQ3VlN2NIeVJUWGthb3FUbFlIaGMzYno2YjFSZUZRUHViOHJPSUlwbXRsVzgtUHVzdDgtNGkxQU5MSHRJcWZnaC1MUWgwUllyWXpORUFobWRLZWhhWnVJd1lJc3YwTUJqRllEQnRIbG9DUDRwUkFxWG4tMUpOZUNYMHM2eEVLUDRMY0piWjI2OHM1cXEybjhPUDRNcjRVcW9IY19VTnJoQ2VMSkdjUVhkODIzcC1XcGI4SGRRNHA3TEtTaUxpdXluUXlRVG0tR0tIQVA2bE50ZGdqdldvQlU?oc=5" },
  { id: "shein_024", title: "中国快时尚公司希音因销售儿童性玩偶正接受欧盟调查", content: "中国快时尚公司希音因销售儿童性玩偶正接受欧盟调查  BBC", source: "BBC", type: "press", platform: "shein", date: new Date("2026-02-18"), url: "https://news.google.com/rss/articles/CBMiZkFVX3lxTE9CTFV5S1NZbDNIV1pibER0c2hrdVFWQVdqQ1k3TVRwVV9tRXJxRTBNc0lHQmxNb25BYkJQaFRnekdGQ3MtQXQ0ajNCQVA5c19iT2xQZHQtQUEtWWlnWWR5dnYyRTdfZ9IBa0FVX3lxTE5hSXdvTWFHajJ5M1ppOGJqdVQwNlNLZmVZTzViRldYeDJVbzJNRExYekNwQno1UURFbWdwOXJsdzQyaDNrZnpUajNPOTlQbzlvdkUtRDBTRFUwN3A5SHVNby1kdmxlUUNsTE5F?oc=5" },
  { id: "tiktok_040", title: "The TikTok Shop Sellers Behind Social Commerce’s $87 Billion Surge", content: "The TikTok Shop Sellers Behind Social Commerce’s $87 Billion Surge  Forbes", source: "Forbes", type: "press", platform: "tiktok", date: new Date("2026-02-16"), url: "https://news.google.com/rss/articles/CBMivAFBVV95cUxPSjVLbG5JaUJzRk5xNGFqMnAyNk5VcFZxdWc2Vnc2UnBqQWZXYU9BaV9TZ1VxZElCdURZLWlqcU9PRjdVdFlzc1JSZVRJWlpldVUwbVMtT3FOZnh3UXNPYU91NEluRXcydXdnR0swcFlIbzhERnlicE9XXzA2akFIc3ZyUkVDNjllOThSdXFFaWFZYUFLQmJIWm03dkhZNGtIeVlqb0FuZ0NSM25ia0wwMFRhbEhhb1RCdUhPMw?oc=5" },
  { id: "shein_025", title: "低价之后，中国电商出海靠什么", content: "低价之后，中国电商出海靠什么  证券时报", source: "证券时报", type: "press", platform: "shein", date: new Date("2026-01-27"), url: "https://news.google.com/rss/articles/CBMiXEFVX3lxTFBFS1g1ZEhkY080UGhpZ0ZtMHpsZzROczZjNHRvdDNEdE1SRnNxX0JHRDF3dkt0Q2xlcW1zUFhPSi0wSHJpclNLSlQzTWhUTVNpODVvVmE3ajBVeU5y?oc=5" },
  { id: "tiktok_041", title: "入驻TikTok跨境电商步骤，TikTok直播带货流程", content: "入驻TikTok跨境电商步骤，TikTok直播带货流程  雨果跨境", source: "雨果跨境", type: "press", platform: "tiktok", date: new Date("2026-01-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9YQk1VbTlEUWQ4dDRGTEEtSENka0JxY3EtdXlGb3ZHNkxhOVdTV2I1dXJhYmFGZUEzVnpkX204Vjkxa1J0Yl84QXpxVnQ?oc=5" },
  { id: "tiktok_042", title: "2026，东南亚电商的“玩法”彻底变了", content: "2026，东南亚电商的“玩法”彻底变了  证券时报", source: "证券时报", type: "press", platform: "tiktok", date: new Date("2026-01-21"), url: "https://news.google.com/rss/articles/CBMiXEFVX3lxTE1nWkxIQlpoeTlsczQtcG5rZ3N5ZVBLTGNzdFNwLWZnaTc2ZzR2cEh6RVp2RUFCVEpXYXQxYk5NWnFjdTN5T2s4ckw0c201ZnpCb1JiQlBkeDdTdnk0?oc=5" },
  { id: "shein_026", title: "SHEIN式赋能驱动传统工厂能力跃升- 跨境电商", content: "SHEIN式赋能驱动传统工厂能力跃升- 跨境电商  亿邦动力网", source: "亿邦动力网", type: "press", platform: "shein", date: new Date("2026-01-14"), url: "https://news.google.com/rss/articles/CBMiRkFVX3lxTFBET1RoekZJRjJNN1Q5QjBoVkF1TGFlZFlDc05PSV9qZXMyMUxrZnotQXVjMWtaMnhmYnhzdEl3cWUtSzFNWmc?oc=5" },
  { id: "tiktok_043", title: "For retail brands, TikTok Shop’s rise brings viral success — and disruption", content: "For retail brands, TikTok Shop’s rise brings viral success — and disruption  Marketing Dive", source: "Marketing Dive", type: "press", platform: "tiktok", date: new Date("2026-01-13"), url: "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQN3c5UndNMUNjcXhPc3RjenFPNHoycmM2Q0FMSG91WEJrUUlzUzVvQ1V4dmVCVVA2QTFheVFVaUF1OGx1RlRJb1NlN2ZBaUx5UXpqbEk3R1AybUpNbnhNUkN3b1BtRHliSGdPMXRld0N2VlJfSElNME40LVppdl9Mb1A5WE0zSERrYktERk1EZ3RleTBydlY5X1hLdFc4NERLUmd1S0cxZUs1dw?oc=5" },
  { id: "tiktok_044", title: "美国直播带货现状，“妈妈”比超模更吃香", content: "美国直播带货现状，“妈妈”比超模更吃香  创业邦", source: "创业邦", type: "press", platform: "tiktok", date: new Date("2026-01-13"), url: "https://news.google.com/rss/articles/CBMiSkFVX3lxTFA3bWxFeFJzSElYa2NDYnFwUXUxQy13VG9jSTM5ak1nY0ZPSTVXZXFrWFNtUGNTZW9CY2xWRllqSTFTaTJmTGF6ZGdR?oc=5" },
  { id: "tiktok_045", title: "2026TikTok跨境无人直播全流程实操：从0到1的变现落地方案", content: "2026TikTok跨境无人直播全流程实操：从0到1的变现落地方案  中华网科技", source: "中华网科技", type: "press", platform: "tiktok", date: new Date("2026-01-06"), url: "https://news.google.com/rss/articles/CBMid0FVX3lxTE1MUmlIRi1Jek9sdlE5SC0yanlZNkRKZnpidGlyU2xYeGs1SFg2d0hLVEpJa3JCTllta1Bsa1lFYTZWVTB5TmJsNFBhMGtqWjB3LS1COXJ0T1U1a3BLSEpQUlBnUFBEeUg1YmJrZFB2eTlSNGN3RXJV?oc=5" },
  { id: "shein_027", title: "快时尚巨头希音中国研发中心和全国运营中心南京揭牌，此前财报真伪存疑引发关注", content: "快时尚巨头希音中国研发中心和全国运营中心南京揭牌，此前财报真伪存疑引发关注  新蓝网", source: "新蓝网", type: "press", platform: "shein", date: new Date("2025-12-08"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTFBDLWQ0VDZ4U1A3UDNaek9na0VRZVVzdkljY2ZuQW5FWHBRRC1SNWdhdE03cG9pR0FiNmw0WldraGJ1bHVYVkZBNXRrMnFsZnM?oc=5" },
  { id: "shein_028", title: "Why is Ken Paxton declaring war on fast fashion?", content: "Why is Ken Paxton declaring war on fast fashion?  Chron", source: "Chron", type: "press", platform: "shein", date: new Date("2025-12-01"), url: "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQVVp5bUkxdU50VnlWcVhpdDhYQzlqaGJxWXhob1pJT3hEZF9CWEtaLVBVV3N1NUV6ckZuMl9hc2c0aWJWZlg3QzBsOS14Q1QwNWl2SkRfNWxPS3VwWEVSS0Nrdk1XSmVKaE14UWRPUkdpa3czQmsycXlTc3NXRWxMR2RiWXRYLWJv?oc=5" },
  { id: "shein_029", title: "E-commerce net sales of shein.se from 2018 to 2024", content: "E-commerce net sales of shein.se from 2018 to 2024  Statista", source: "Statista", type: "press", platform: "shein", date: new Date("2025-11-28"), url: "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPLTNGak5BdlpOMDk0MnRVUVp0UW5xdGw0dVBITVp4d0ttT0JDa1lhVlZkV0VPQjRDbmdXSlQtdkVPTS1rMTdtV2xKMXhISUJVeXZTLUlEd2hPOThkSHAyM3VydXlnQ05jVDlkUTREQkgySzhMcW9BMVFQOUtDZmRCOFI1YkFLY1YxRVM0?oc=5" },
  { id: "shein_030", title: "超快时尚帝国希音的“合规炼狱”", content: "超快时尚帝国希音的“合规炼狱”  QQ News", source: "QQ News", type: "press", platform: "shein", date: new Date("2025-11-15"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBqbm0tS21fNHZ0TFJjZDB1QUM3UXpWVzZRN1lFaHpoVkNyQ0w4blNRdUFRanpYOGcwRXM5aTBlVW9GOGZNZVQyU3I3TTg0ZkQtUTF0Znh3?oc=5" }
];
// 初始化时间显示
newsData.forEach(function(item) { item.time = formatTimeFromDate(item.date); });
newsData.sort(function(a, b) { return b.date - a.date; });

function displayNews(filter = 'all') {
    const newsGrid = document.getElementById('newsGrid');
    const timeFilter = document.getElementById('timeFilter')?.value || 'all';
    let filteredNews = newsData;
    
    // 平台和类型过滤
    if (filter !== 'all') {
        if (['social', 'official', 'press'].includes(filter)) {
            filteredNews = filteredNews.filter(news => news.type === filter);
        } else {
            filteredNews = filteredNews.filter(news => news.platform === filter);
        }
    }
    
    // 时间过滤
    filteredNews = filterNewsByTime(filteredNews, timeFilter);
    
    newsGrid.innerHTML = filteredNews.map(news => `
        <div class="news-item" data-type="${news.type}" data-platform="${news.platform}">
            <div class="news-header">
                <span class="news-source">${news.source}</span>
                <span class="platform-tag platform-${news.platform}">${getPlatformLabel(news.platform)}</span>
                <span class="news-time">${news.time}</span>
            </div>
            <div class="news-title">${news.title}</div>
            <div class="news-content">${news.content}</div>
            <a href="${news.url}" target="_blank" class="news-link">查看原文 →</a>
        </div>
    `).join('');
    
    // 显示结果统计
    updateNewsStats(filteredNews.length, filter, timeFilter);
}

function filterNewsByTime(news, timeFilter) {
    if (timeFilter === 'all') return news;
    
    const now = new Date();
    const cutoffDate = new Date();
    
    switch(timeFilter) {
        case 'today':
            cutoffDate.setHours(0, 0, 0, 0);
            break;
        case 'week':
            cutoffDate.setDate(now.getDate() - 7);
            break;
        case 'month':
            cutoffDate.setMonth(now.getMonth() - 1);
            break;
        case '3months':
            cutoffDate.setMonth(now.getMonth() - 3);
            break;
        case '6months':
            cutoffDate.setMonth(now.getMonth() - 6);
            break;
    }
    
    return news.filter(item => item.date >= cutoffDate);
}

function filterByTime() {
    displayNews(getCurrentFilter());
}

function getCurrentFilter() {
    const activeBtn = document.querySelector('.filter-btn.active');
    if (!activeBtn) return 'all';
    const text = activeBtn.textContent.trim();
    const filterMap = {
        '全部': 'all', 'Temu': 'temu', 'Shein': 'shein', 
        'TikTok': 'tiktok', 'Joybuy': 'joybuy',
        '社交媒体': 'social', '官方网站': 'official', '新闻发布': 'press'
    };
    return filterMap[text] || 'all';
}

function updateNewsStats(count, filter, timeFilter) {
    const existingStats = document.querySelector('.news-stats');
    if (existingStats) existingStats.remove();
    
    const timeLabels = {
        'all': '全部时间',
        'today': '今天',
        'week': '本周',
        'month': '本月',
        '3months': '近3个月',
        '6months': '近6个月'
    };
    
    const statsDiv = document.createElement('div');
    statsDiv.className = 'news-stats';
    statsDiv.innerHTML = `
        <span>显示 ${count} 条资讯</span>
        <span>•</span>
        <span>${timeLabels[timeFilter] || '全部时间'}</span>
    `;
    
    const newsGrid = document.getElementById('newsGrid');
    newsGrid.parentNode.insertBefore(statsDiv, newsGrid);
}

function getPlatformLabel(platform) {
    const labels = {
        'temu': 'Temu',
        'shein': 'Shein',
        'tiktok': 'TikTok',
        'joybuy': 'Joybuy'
    };
    return labels[platform] || platform;
}

function filterNews(type) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    displayNews(type);
}

function openSourceManager() {
    document.getElementById('sourceManagerModal').style.display = 'block';
    displaySources();
}

function closeSourceManager() {
    document.getElementById('sourceManagerModal').style.display = 'none';
}

function displaySources() {
    const sourcesList = document.getElementById('sourcesList');
    sourcesList.innerHTML = newsSources.map(source => `
        <div class="source-item">
            <div class="source-info">
                <div class="source-name">${source.name}</div>
                <div class="source-url">${source.url}</div>
            </div>
            <div class="source-meta">
                <span class="source-type">${getTypeLabel(source.type)}</span>
                <span class="platform-tag platform-${source.platform}">${getPlatformLabel(source.platform)}</span>
            </div>
            <button class="delete-source" onclick="deleteSource(${source.id})">删除</button>
        </div>
    `).join('');
}

function getTypeLabel(type) {
    const labels = {
        'social': '社交媒体',
        'official': '官方网站',
        'press': '新闻发布'
    };
    return labels[type] || type;
}

function addNewsSource() {
    const name = document.getElementById('sourceName').value.trim();
    const url = document.getElementById('sourceUrl').value.trim();
    const type = document.getElementById('sourceType').value;
    const platform = document.getElementById('sourcePlatform').value;
    
    if (!name || !url) {
        alert('请填写完整的资讯源信息');
        return;
    }
    
    const newSource = {
        id: Date.now(),
        name,
        url,
        type,
        platform
    };
    
    newsSources.push(newSource);
    localStorage.setItem('newsSources', JSON.stringify(newsSources));
    
    // 清空表单
    document.getElementById('sourceName').value = '';
    document.getElementById('sourceUrl').value = '';
    document.getElementById('sourceType').value = 'social';
    document.getElementById('sourcePlatform').value = 'temu';
    
    displaySources();
    alert('资讯源添加成功！');
}

function deleteSource(id) {
    if (confirm('确定要删除这个资讯源吗？')) {
        newsSources = newsSources.filter(source => source.id !== id);
        localStorage.setItem('newsSources', JSON.stringify(newsSources));
        displaySources();
    }
}

// 更新资讯 - 调用真实 API
function updateNews() {
    if (typeof updateCompetitorNews === 'function') {
        updateCompetitorNews();
    }
}

// 显示更新通知
function showUpdateNotification(count) {
    // 移除现有通知
    const existingNotification = document.querySelector('.update-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'update-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">🔔</span>
            <span>发现 ${count} 条新资讯</span>
            <button onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // 3秒后自动消失
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// 自动刷新功能
let autoRefreshInterval;
let isAutoRefreshEnabled = true;

function startAutoRefresh() {
    if (isAutoRefreshEnabled) {
        // 每2分钟自动更新一次（演示用，实际可调整为更长间隔）
        autoRefreshInterval = setInterval(() => {
            if (typeof updateCompetitorNews === 'function') {
                updateCompetitorNews();
            } else {
                updateNews();
            }
        }, 120000); // 2分钟
    }
}

function stopAutoRefresh() {
    if (autoRefreshInterval) {
        clearInterval(autoRefreshInterval);
        autoRefreshInterval = null;
    }
}

function toggleAutoRefresh() {
    const btn = document.getElementById('autoRefreshBtn');
    const status = document.querySelector('.refresh-status');
    
    isAutoRefreshEnabled = !isAutoRefreshEnabled;
    
    if (isAutoRefreshEnabled) {
        startAutoRefresh();
        btn.classList.add('active');
        status.innerHTML = '<span class="refresh-indicator"></span><span>自动更新中</span>';
    } else {
        stopAutoRefresh();
        btn.classList.remove('active');
        status.innerHTML = '<span style="width: 8px; height: 8px; border-radius: 50%; background: #dc3545; display: inline-block;"></span><span>已暂停</span>';
    }
}

function manualRefresh() {
    const btn = event.target.closest('.refresh-btn');
    const originalText = btn.innerHTML;
    
    // 显示加载状态
    btn.innerHTML = '<span>⟳</span><span>刷新中...</span>';
    btn.disabled = true;
    
    // 执行刷新
    if (typeof updateCompetitorNews === 'function') {
        updateCompetitorNews();
    } else {
        updateNews();
    }
    
    // 恢复按钮状态
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 1000);
}

// 点击弹窗外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('sourceManagerModal');
    if (event.target === modal) {
        closeSourceManager();
    }
}

// 每5分钟更新一次资讯（模拟）
setInterval(updateNews, 300000);

// 页面加载时初始化资讯显示
document.addEventListener('DOMContentLoaded', function() {
    // 清除旧版缓存的资讯源，确保使用最新列表
    var cachedVersion = localStorage.getItem('newsSourcesVersion');
    if (cachedVersion !== 'v3.2') {
        localStorage.removeItem('newsSources');
        localStorage.setItem('newsSourcesVersion', 'v3.2');
    }
    displayNews();
    renderDashboard();
});


// ==================== 竞对对比仪表盘 ====================
const dashboardData = [
    {
        dimension: '🏢 母公司',
        temu: 'PDD Holdings (拼多多)',
        shein: 'SHEIN Group (独立)',
        tiktok: 'ByteDance (字节跳动)',
        joybuy: 'JD.com (京东)'
    },
    {
        dimension: '🌍 主要市场',
        temu: '北美、欧洲、东南亚、中东',
        shein: '欧美、中东、拉美、东南亚',
        tiktok: '美国、东南亚、英国',
        joybuy: '欧美、东南亚'
    },
    {
        dimension: '📦 商业模式',
        temu: '全托管 + 半托管',
        shein: '自营 + 平台 (Marketplace)',
        tiktok: '直播电商 + 货架电商',
        joybuy: '自营跨境 (京东生态)'
    },
    {
        dimension: '🎯 核心品类',
        temu: '全品类低价商品',
        shein: '快时尚服饰为主',
        tiktok: '服饰、美妆、家居',
        joybuy: '3C数码、家电、品牌商品'
    },
    {
        dimension: '💰 价格策略',
        temu: '极致低价，工厂直供',
        shein: '低价快时尚，小单快反',
        tiktok: '中低价，内容驱动消费',
        joybuy: '中高价，品质导向'
    },
    {
        dimension: '🚚 物流时效',
        temu: '7-15天（部分地区3-5天）',
        shein: '7-12天',
        tiktok: '3-8天（本地仓）',
        joybuy: '5-10天（京东物流）'
    },
    {
        dimension: '📊 卖家佣金',
        temu: '全托管0%（平台定价）',
        shein: '10-20%',
        tiktok: '2-8%',
        joybuy: '3-10%'
    },
    {
        dimension: '📱 获客方式',
        temu: '社交裂变 + 补贴拉新',
        shein: 'KOL/KOC + SEO + 社媒',
        tiktok: '短视频 + 直播 + 算法推荐',
        joybuy: '京东生态导流 + 品牌合作'
    },
    {
        dimension: '⚡ 核心优势',
        temu: '极致供应链效率，价格优势',
        shein: '柔性供应链，快速上新',
        tiktok: '内容生态，兴趣电商',
        joybuy: '品质保障，物流体系'
    },
    {
        dimension: '⚠️ 主要挑战',
        temu: '品质争议，合规压力',
        shein: 'ESG争议，IPO不确定性',
        tiktok: '政策风险，信任建设',
        joybuy: '市场份额小，品牌认知低'
    }
];

function renderDashboard() {
    const tbody = document.getElementById('dashboardBody');
    if (!tbody) return;
    
    tbody.innerHTML = dashboardData.map(row => `
        <tr>
            <td class="dimension-cell">${row.dimension}</td>
            <td>${row.temu}</td>
            <td>${row.shein}</td>
            <td>${row.tiktok}</td>
            <td>${row.joybuy}</td>
        </tr>
    `).join('');
    
    const updateEl = document.getElementById('dashboardUpdate');
    if (updateEl) {
        updateEl.textContent = new Date().toISOString().split('T')[0];
    }
}

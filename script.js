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
  { id: "tiktok_025", title: "Shopee vs TikTok Shop: When Shelves Meet Stories in Southeast Asia", content: "Shopee vs TikTok Shop: When Shelves Meet Stories in Southeast Asia  New Fortune Times", source: "New Fortune Times", type: "press", platform: "tiktok", date: new Date("2026-04-09"), url: "https://news.google.com/rss/articles/CBMinwFBVV95cUxOUzZKX0NyVUZ5WWIya01yaGlrQWt6RlpkRUtGVzNrWkhpSEFDN01qLWNoM24wYkJuLVNtMGlkQ3Vzd0JfanBHQjhuempGakcxSE1QVUdNSjl3SzYxRUoySkxtd3N5dWtROXV6UnZQZ0xRaTF5clprck1LSFVaaGpQXzNZejVyVGRGcFYzSFNZNU9zMVRsLTF3QlRlSWU1Qzg?oc=5" },
  { id: "tiktok_026", title: "SAMY & L’Oréal Launched TikTok Shop in Spain Together: Here’s What the First Year Taught Them", content: "SAMY & L’Oréal Launched TikTok Shop in Spain Together: Here’s What the First Year Taught Them  Net Influencer", source: "Net Influencer", type: "press", platform: "tiktok", date: new Date("2026-04-09"), url: "https://news.google.com/rss/articles/CBMiugFBVV95cUxONy02ajY5YVVmd3R6b0gwVkFwdGdmR1lSdFloSTZMVHJ1OE5HTlE3NWVmbWc3aVpJY2pxVjZLZm1VSl9CTzZ3dVBJV05GY1dqSFVURmxDTUpEMzJYX2JhLTJCZHZtRmlNcTNLUTItTkZwQkxyVk9xNTRLdWdRNUJlc2NyRHNhWklDY3hJelk2a2pnenNTekhhRWJLbEJNVkpERnRDZmlNejZVTmd5VzFQM0Jva0Y2YjhlcVE?oc=5" },
  { id: "tiktok_027", title: "TikTok Shop加码“一商卖全球”：新增“内容全球分发”和“跨店一键铺品”功能|商家|店铺|商品|经营|账号_手机新浪网", content: "TikTok Shop加码“一商卖全球”：新增“内容全球分发”和“跨店一键铺品”功能|商家|店铺|商品|经营|账号_手机新浪网  新浪财经", source: "新浪财经", type: "press", platform: "tiktok", date: new Date("2026-04-09"), url: "https://news.google.com/rss/articles/CBMif0FVX3lxTE1GUlVsLTUxbDBuRm9TWEVGS2pMdWRtbUFWbnVFMmoxYVU4eDNSSFplV25FWTk0S0RTOFRDYUlKdDJ3ZmZwdW9nelpSQy16WFp6c3YyUE8yZFVxUklwZnJVZ1Y5cHRqQ0NLdEkzMWhxZTNidHNqMVEtRkVYb0VXQ0E?oc=5" },
  { id: "tiktok_028", title: "TikTok Shop 美区启动专项治理，严打直播间 \"虚假挂载\" 违规", content: "TikTok Shop 美区启动专项治理，严打直播间 \"虚假挂载\" 违规  白鲸出海", source: "白鲸出海", type: "press", platform: "tiktok", date: new Date("2026-04-09"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE92TDNGdzNqUFh0a25kVlh1Z0lwaTdBYS03bXJkRE9aUkNvS1k0eVlqTFhWWWVjN1JPc1kwMFc2VzhEd05QQ3J1bk0zLXRZTnU4bzN3bEZmQXA?oc=5" },
  { id: "tiktok_053", title: "TikTok Shop加码“一商卖全球”：新增“内容全球分发”和“跨店一键铺品”功能", content: "TikTok Shop加码“一商卖全球”：新增“内容全球分发”和“跨店一键铺品”功能  亿邦动力网", source: "亿邦动力网", type: "press", platform: "tiktok", date: new Date("2026-04-09"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9LbzZhNWVHUVlLd0U1U3E5eWpGQ2RMeEtWNXNnNll2WjVoSWVXdGw5cGNxMWRxaTFPbXlsQkZIaTRWdUlKTzFhNi1RSTVjUlJnSDMyd1hB?oc=5" },
  { id: "tiktok_029", title: "Kixmon Expands Globally TikTok Shop Profit Tracking Platform Beyond the United States", content: "Kixmon Expands Globally TikTok Shop Profit Tracking Platform Beyond the United States  openPR.com", source: "openPR.com", type: "press", platform: "tiktok", date: new Date("2026-04-08"), url: "https://news.google.com/rss/articles/CBMinAFBVV95cUxQRVpEY0RkVUNBVlBaRUxTV2RNUlBHdkJycWpicUN0R1ZFNzl0akFFdjZoRl9nSC1PSzlBNE1HcUNTUThSYnpUVWtaaTJNQ2U3Qm5vMWRaMmlPd3RvRGhUSTZpNWIyV1VuRjJ0WW9tSVFIQlBxX2RMbFE1djhoYXdFbmJTd2hHY2dkOER0bnJnTnlaSTNDb1dGdFJ5ODg?oc=5" },
  { id: "temu_049", title: "集体踩雷！Temu严查资质，大量卖家报告失效", content: "集体踩雷！Temu严查资质，大量卖家报告失效  雨果跨境", source: "雨果跨境", type: "press", platform: "temu", date: new Date("2026-04-08"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9QRWNtb29aREhBQ3JLSGJzV25pdmpzX1A0X1pIUGhPcV9veWR4VWM3elM3VV9MbmpkLWo3VnA4anREUkhMTHB5d1NheVQ?oc=5" },
  { id: "tiktok_030", title: "From wearable AI to TikTok Shop: how beauty is rewriting the retail growth playbook", content: "From wearable AI to TikTok Shop: how beauty is rewriting the retail growth playbook  Barclays Group", source: "Barclays Group", type: "press", platform: "tiktok", date: new Date("2026-04-07"), url: "https://news.google.com/rss/articles/CBMiakFVX3lxTE0tc1JJUFlkRUdBWXlKV1dNU0JNQ3dmT2doSGNFWUQ4WXFLWVQ2RU9IWmZjam03SE1rN3FvQ0dFQ2ZNNExuNWVKd2NpRWhwZHJ4Qnl3bEpWSFVsNUlkWUZBTzdnbExVRHIyQUE?oc=5" },
  { id: "tiktok_031", title: "TikTok Shop墨西哥自运营模式加速：4月开放“美通墨”，急招大件商品|WhatsApp|运营商|商家|发货|上线_手机新浪网", content: "TikTok Shop墨西哥自运营模式加速：4月开放“美通墨”，急招大件商品|WhatsApp|运营商|商家|发货|上线_手机新浪网  新浪财经", source: "新浪财经", type: "press", platform: "tiktok", date: new Date("2026-04-07"), url: "https://news.google.com/rss/articles/CBMif0FVX3lxTE12TkltXzQwUGNVNDdjMTUySXRNWVY0bTMyV0lhcGVvNmJNTnpNRUhDTEhUM0daX2ljOFNTUFY4d1NZSVBYLTc3VXFlRUNVM2t0MlFremxYa1o3Q0xubnFRM1l5QVlnSk1ueHNMNWhidldNUmtQNmJJSGZVUVI2OVE?oc=5" },
  { id: "joybuy_037", title: "JD.com (JD) launches Joybuy marketplace in Europe, acquires Ceconomy to challenge Amazon", content: "JD.com (JD) launches Joybuy marketplace in Europe, acquires Ceconomy to challenge Amazon  MSN", source: "MSN", type: "press", platform: "joybuy", date: new Date("2026-04-06"), url: "https://news.google.com/rss/articles/CBMi-AFBVV95cUxQX2trQUhmWFNtQ1ItNHJZNjItbzUycWpRQW4xMGdKQ2lvR191anF0UC1GVEVQNjZ6VXdxaFI4dS1nTU5GSXk1NE9jSzhleFFRMDhoU1c3RTY4dUQ1bkQxdEppOVpEckdhVS1scEw4VGp2V2RTVEZvQVVRc2F0S1BPaGNIc1k4d0ZaRFQ1RXEwWWZGSmZzNk9WZDVPU3h2S2YzTWtvMDllRUZFVVlBT1h0QktQb0YxRzlWelFHaHJnUTlkUU9mVkI5LVBVMWpsbXp6c0l5N25uUXhoZEhvMVhqMkdaa1lTa2w0SGZWT1AtNW5TYlNDMVl3ZQ?oc=5" },
  { id: "tiktok_032", title: "TikTok Shop turns one in Germany: Gen X drives 37% of sales revenue", content: "TikTok Shop turns one in Germany: Gen X drives 37% of sales revenue  PPC Land", source: "PPC Land", type: "press", platform: "tiktok", date: new Date("2026-04-05"), url: "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOQk1nMXczVm85eFJvbmgwTkFENEgzamQyS1BIeF9Cc0IweHZubWtPNW1SaGRLMGhBWDk1ZUVuNUdsZklUMk1JOHEyNE5kN1hjRlUwcnJhRjRiaDJKWFZTQ2lOZVZPcFh3X0RORk8zUDVjTFE1VEtVLXY4ZTlsWk9JRjhwRTllUXhyVTU4?oc=5" },
  { id: "tiktok_050", title: "又有新玩法？专属TikTok Shop美区跨境POP商家的功能上线", content: "又有新玩法？专属TikTok Shop美区跨境POP商家的功能上线  雨果跨境", source: "雨果跨境", type: "press", platform: "tiktok", date: new Date("2026-04-03"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBJU0V2bTdSdzg3R0d0M3Z2czRmX0xydzJUR2Y1ZUUyLVdNcTNxdDlseHlqTzhTdllVelo3aWdlS2V5dDBnSk1lblZ6Z3I?oc=5" },
  { id: "shein_013", title: "加强物流管控！SHEIN将于4月中上旬限制美区商家自发货功能- 跨境电商", content: "加强物流管控！SHEIN将于4月中上旬限制美区商家自发货功能- 跨境电商  亿邦动力网", source: "亿邦动力网", type: "press", platform: "shein", date: new Date("2026-04-02"), url: "https://news.google.com/rss/articles/CBMiRkFVX3lxTFB5U04tYnFNTHlEQ2sybmV5RXgtNk9qS3RQX1g4emplNFlBaHJZNFdqb0VlNXdnSU5nUWFzeHc4U19QUkFVLXc?oc=5" },
  { id: "shein_014", title: "加强物流管控！SHEIN将于4月中上旬限制美区商家自发货功能", content: "加强物流管控！SHEIN将于4月中上旬限制美区商家自发货功能  新浪网", source: "新浪网", type: "press", platform: "shein", date: new Date("2026-04-02"), url: "https://news.google.com/rss/articles/CBMi-AFBVV95cUxQaVVNSHNtQ256ZDg0dEZ4VlByYVZRTXpVLTN5Ni02V2pEa2RpS2pESEN5WUhTVmJoa3lqMGZmVGJOLVVSN0poZmxPb2Q1NVc0cW1mUnc3MnowTjlnRWJNRjRkTGZBbWtNYnUxdWVVRnRiZ2lZRTNkUll5TjVkVTFVcjUycklITlFtbUlFRkxwcl9nZTlVMkp1VTRESUlTcVNoUExJNUxwdDFfeHBockJGaEZRR1Rqb2M4ektZVWdGdTN6SWhlclBveFdVb1JhckIyWE1nUElESS1NTmstRnRPOUpYWXRXbzViZENEbjdXcGxueVlneVhHdA?oc=5" },
  { id: "shein_015", title: "SHEIN日代新规大揭秘：不跟上节奏，商品就要“下架凉凉”！", content: "SHEIN日代新规大揭秘：不跟上节奏，商品就要“下架凉凉”！  雨果跨境", source: "雨果跨境", type: "press", platform: "shein", date: new Date("2026-04-02"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTE1JNUpTOXBNN1UzdmxSd2Fodmktc3MzZWtPcWt0cW9iYTFWTS1NWkl5YTItNlJJcy1VRk14RHluMzROaWRDQ2hlQVUwQ1FXUkk?oc=5" },
  { id: "tiktok_033", title: "Social Commerce in Beauty: How TikTok, Creators, and Community Are Driving Modern Retail", content: "Social Commerce in Beauty: How TikTok, Creators, and Community Are Driving Modern Retail  BeautyMatter", source: "BeautyMatter", type: "press", platform: "tiktok", date: new Date("2026-04-01"), url: "https://news.google.com/rss/articles/CBMikAFBVV95cUxNLWc4bFNMeEJYYTlxU1NPQV9ONlk3TlotV0hqeFFDWF9ta2hUVnRXTnJiTjdILVB5R0hQZmtxbm5QMmRCRUNBakw2czc5VTluNDYyaUNMWFhYbElkWndaenM2Q2MwbXdyUDBvWEhWVlAxQ2JWbVpmanBNNHllMXRydjNZRzFnTUFGSDU5Rk5EbUw?oc=5" },
  { id: "tiktok_034", title: "TikTok美通墨启动！免佣金60天，美国卖家0成本拓市", content: "TikTok美通墨启动！免佣金60天，美国卖家0成本拓市  雨果跨境", source: "雨果跨境", type: "press", platform: "tiktok", date: new Date("2026-04-01"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE5jOFJoTkJuckZpbkVyaHhLLWR6M1NRd1JTQ1dGV1ZtbDVMN1NndmlaY2lUY0xWdmRlQzlpcHBtUVRtRDAtSG9tbTVSM2M?oc=5" },
  { id: "joybuy_038", title: "3月跨境电商：京东上线Joybuy TEMU用户直逼1.3亿？欧盟电商强制“一键退货”", content: "3月跨境电商：京东上线Joybuy TEMU用户直逼1.3亿？欧盟电商强制“一键退货”  潮新闻", source: "潮新闻", type: "press", platform: "joybuy", date: new Date("2026-04-01"), url: "https://news.google.com/rss/articles/CBMic0FVX3lxTE9OVkNHeExaNUZjSXEtUDhMeHVWcGdCU1RvMVJjSE83MGVXSWdSc005dTYzYnJHY0VyaHM2RHgyZ0RFc21BTEdqMXQxbHpJZktMd0RuVjNfb2R5TWtQRkRWQ2RKbU52RE5ndUJ3bXVGNmFSUlE?oc=5" },
  { id: "temu_001", title: "Pitney Bowes Launches Temu Integration Within ShipAccel®", content: "Pitney Bowes Launches Temu Integration Within ShipAccel®  Business Wire", source: "Business Wire", type: "press", platform: "temu", date: new Date("2026-03-30"), url: "https://news.google.com/rss/articles/CBMisgFBVV95cUxPNXlDZHluZDdaYWltUXI3UUhTeGNENnF2YkVNTjZrSnRuZTFGUURlSTMtZEJkUmtjejlVcjVGY3BTRVo1UUVENFVpVjdXRGMyazBBVU50Ty1peUxLVUdNT3BzLVlFNkt5RVo4enZBWE13N3J3cFVtTHBXNWQ0MElWTmxRbjRNSUZBaEh4WHZUMDktVHBmbE1hX3VudFFFeGpxemJVTzZVUVpVY0x5VjFXNjNn?oc=5" },
  { id: "temu_054", title: "跨境日报：拼多多Temu孵化自营品牌 阿里国际推电商版“龙虾”", content: "跨境日报：拼多多Temu孵化自营品牌 阿里国际推电商版“龙虾”  亿邦动力网", source: "亿邦动力网", type: "press", platform: "temu", date: new Date("2026-03-30"), url: "https://news.google.com/rss/articles/CBMiRkFVX3lxTE1nWTFKcGpZRTBBN21aaklyZWllOTJhQW5oSXVGU1lCTG1CUnNhT1VLSXViRTRoamQwdjQtNVBuNTNaNTREU3c?oc=5" },
  { id: "tiktok_035", title: "Live shopping ROI grows as TikTok leads for brands", content: "Live shopping ROI grows as TikTok leads for brands  ContentGrip", source: "ContentGrip", type: "press", platform: "tiktok", date: new Date("2026-03-28"), url: "https://news.google.com/rss/articles/CBMiakFVX3lxTE02NnZ6QTNfTUY4T041eHFmOWxEU00tNmVuRlVKaDlwSERVX01jQlZESGJpYzBpT0NhQkhVMUpRMG92bnVaRndlVndfejdXQ3BIQjlUMVoyZE50Wkl5RkxvQ0tPM1kxMWxvY1E?oc=5" },
  { id: "temu_051", title: "1000亿的“新拼姆”，是不是Temu自营下的第一步棋", content: "1000亿的“新拼姆”，是不是Temu自营下的第一步棋  雨果跨境", source: "雨果跨境", type: "press", platform: "temu", date: new Date("2026-03-26"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE01bEZ6WUdOc0pEd255WnhKcHJDZ3hZNEdEQ1NPYWVzcy1EeWZwZXZDblFpNXpIVXZHcWhLSnhZOHVoNnpickJqSkxxN3I?oc=5" },
  { id: "temu_002", title: "Temu’s US Business Stabilises After Tariff Blow", content: "Temu’s US Business Stabilises After Tariff Blow  The Business of Fashion", source: "The Business of Fashion", type: "press", platform: "temu", date: new Date("2026-03-25"), url: "https://news.google.com/rss/articles/CBMimAFBVV95cUxQWWtkMXRFMjFRdjBITk8xRHZvbEtyZHVReVhaZDg2SXRoc0VJZnZIdi1BTDFPX2RNdmN0YTRwMDhjMXp3NlZjbE1DYnhNeWxkTnQ0SWIzcFBpMUNhU1gzdGlMdDVvRF9tTjRvZFNRdGh2TEVKd2w2ZEdYRHBOQ2Fod3FKTzRySEQtUnhfSmpfdkhHbGFUQUFzQw?oc=5" },
  { id: "shein_016", title: "How is DHL Helping Shein's Green Supply Chain Transition?", content: "How is DHL Helping Shein's Green Supply Chain Transition?  Supply Chain Digital Magazine", source: "Supply Chain Digital Magazine", type: "press", platform: "shein", date: new Date("2026-03-25"), url: "https://news.google.com/rss/articles/CBMigAFBVV95cUxNalJfZ2RXVHl6dFdxam02M091UktpMjdsalJzN3ZzOEx0UldMbmlNaEU3UDRYS05aNzFZaDFQVGFrZ19oTnZkem4wQlVhMzlSOGs4TWFTa1dJV1ZUaXRXSmo2U09tR2lMaUUwMThPaXIyaUpIR3Y4MTUtZzlDa0hOVA?oc=5" },
  { id: "tiktok_036", title: "一文详解TikTok FBT物流发货流量 解决TikTok Shop美区卖家物流难题", content: "一文详解TikTok FBT物流发货流量 解决TikTok Shop美区卖家物流难题  驱动之家", source: "驱动之家", type: "press", platform: "tiktok", date: new Date("2026-03-25"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTFA5VG11UGRNYmJzbVZudGhZc0s0czBWNzktdnhIZ191RW1ZNTVvSmJpcjFNN1RVNnBJc0hxR2NCYUVKWTZHMVhQRXBMdGdzSFZDTEZfNm14R18?oc=5" },
  { id: "temu_052", title: "拼多多上线“新拼姆”，对TEMU卖家有何影响", content: "拼多多上线“新拼姆”，对TEMU卖家有何影响  雨果跨境", source: "雨果跨境", type: "press", platform: "temu", date: new Date("2026-03-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBXdHctNzFaSlVNWkdHMUdYdXpvbnVTVWNReXZRUmowQzdFNDdMaVlJZ0VqLXdSQ2lfa2NfcGYzQ3llU2VnUDNNakl0Y18?oc=5" },
  { id: "shein_017", title: "DHL快递与SHEIN签署\"绿色航燃\"协议， 共促跨境电商物流更可持续", content: "DHL快递与SHEIN签署\"绿色航燃\"协议， 共促跨境电商物流更可持续  美通社", source: "美通社", type: "press", platform: "shein", date: new Date("2026-03-24"), url: "https://news.google.com/rss/articles/CBMiV0FVX3lxTE1XV1ZLcWNiSUlhSU82djFHT1k1YmU0M3c3cU5WajlBWTE0OHp1T2JvWVkxb2U2SnZmRnV1ajBNZTk0bjVIVGt3WTFHSkpuSkhaQnJjUFgzRQ?oc=5" },
  { id: "joybuy_039", title: "JD.com (JD) Launches Joybuy Marketplace in Europe, Acquires Ceconomy to Challenge Amazon", content: "JD.com (JD) Launches Joybuy Marketplace in Europe, Acquires Ceconomy to Challenge Amazon  Yahoo Finance", source: "Yahoo Finance", type: "press", platform: "joybuy", date: new Date("2026-03-23"), url: "https://news.google.com/rss/articles/CBMilAFBVV95cUxNbzBLRDlSWWdFTWVHMWJfcmEzeVkwRXdmVkNoZ21xN0NrY044Q0QwRkVjUVYzR3FuUndNVjFQYy14dDV1VmZSRDVUYW9nS1JDVERqSXg3dkk3Wmc5LTA5enZlSWkyZjhIVGpSWFhIcmdnWEpoU1YwOVZuaDNQb01kYnQtZ0l0YmR2dE9MLXg5Q2Jsbnk3?oc=5" },
  { id: "temu_003", title: "Top 10 E-Commerce Marketplaces in 2026", content: "Top 10 E-Commerce Marketplaces in 2026  Marketplace Pulse", source: "Marketplace Pulse", type: "press", platform: "temu", date: new Date("2026-03-19"), url: "https://news.google.com/rss/articles/CBMihwFBVV95cUxOOWoyZ0hpYXV6V3dWMVZnLXUtR1NQNzVXcFNFTTFiMmJlNU5xV3E5T0VYY0R5RkdPZXpTV1dKZE1BbWNMd1lIaEZjYWUwLXZUNGZCWGxLLUpqb1U1dWxmTVg4WHRIQ09ja3lIWUZPYnRxUEdVS1dHenhLVnRpR1NSTzEyYlFIT1k?oc=5" },
  { id: "shein_018", title: "Shein第三方卖家平台不会被暂停运营 政府上诉遭巴黎上诉法院驳回 - 法国国际广播电台", content: "Shein第三方卖家平台不会被暂停运营 政府上诉遭巴黎上诉法院驳回 - 法国国际广播电台  茉莉花新闻网", source: "茉莉花新闻网", type: "press", platform: "shein", date: new Date("2026-03-19"), url: "https://news.google.com/rss/articles/CBMivAJBVV95cUxPZTN4QkRjUm9EQ285RjlYYWNoVGpseXZhN2s5bWFkRENGYmQyQUhwbFl0bmh3ckp6SXJ2S2Zyd0p3RUZESmZkcVZJQnRjbDRGMk95NGUtUlBCYjY2RU85aTVhclQ4bERRSXJNTDU1ajlKU1N0eWdUUE94ZU1COEdjVkxRTXBPUkozT2J1Z2J6WF91ZWU1bGhjbmFsNFBBa1A2Y0lYMkdMc1JsOTlkdG03ZmlOTkpNVUJQOGcyZW1tUVNWcnNyMFA3dThtMFFUUDJVVGNDcUtyMmtpMWVpUGZmN1RwODVVdXJPZUVCM1dvRTcwR01uOHkyUEpBNXZKeC1TTlJfaGFOVC1OWFltYTFjVHpmUXZzdE45akd2Y2UxQi1mTG15bTlWWGczQm55UWdsalBqNmFGNmU4NjE0?oc=5" },
  { id: "temu_004", title: "Temu Users Join Customer Push For IEEPA Tariff Refunds", content: "Temu Users Join Customer Push For IEEPA Tariff Refunds  Law360", source: "Law360", type: "press", platform: "temu", date: new Date("2026-03-18"), url: "https://news.google.com/rss/articles/CBMimgFBVV95cUxOS0xsTXc5QWR3TXdqZHV2QzIxWHpyQTB2UktZWXpYellzSjFxNkpJcnV5aTJfMHVQMHRqSkxISXJhUGxwVmpNWEFrX3hoSTc3Mm1vNXlwcVRYVWlkOTRNQXFNenIySTlORGxxc01OZlRBdzRoNUhyYzFkNkNXX0NhcFdNdFlaLXpBUGdjSldtemVXTTIwaGZ2WDJ30gFWQVVfeXFMT0g5a1N4SzRpbjlKT1Z2X0YyZ1ZfQ1VMakJra0RzLWstZmxlOXlfM2phUE1IUGdaTi1YaGRSSU04c05fWGZKYWtsa215V3BIdURwcmhQS0E?oc=5" },
  { id: "shein_019", title: "2026年欧美SHEIN合规运营需要注意什么？妙手ERP一文理清希音商品合规资质", content: "2026年欧美SHEIN合规运营需要注意什么？妙手ERP一文理清希音商品合规资质  news.tom.com", source: "news.tom.com", type: "press", platform: "shein", date: new Date("2026-03-18"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1Dd2Q4VWdwdlZ5WEMxM0lPRkR6R3dOMEZHNlRWZHpvbG9JOXpQejRWRDc5SnJvaUtmLTlSQjJPSktJdWtuS1VZMnNvcTByMGwtblBETjVn?oc=5" },
  { id: "shein_020", title: "Shein tried to shed China. Its IPO now hinges on embracing it", content: "Shein tried to shed China. Its IPO now hinges on embracing it  Tech in Asia", source: "Tech in Asia", type: "press", platform: "shein", date: new Date("2026-03-16"), url: "https://news.google.com/rss/articles/CBMickFVX3lxTE5aZlNnaFBJUUFBY2RHb3J1N2ZiOWdWUTlCTzZTWERXaWFSak5kSHJRbzIxaTR2UHBLOEo5UzNuTHBsbDNTVnBCN0ZRMmNSUl81YkFUbjhRS2hXNkx3TW9QTDAycFVJc3JEcXllVXdib0J6Zw?oc=5" },
  { id: "joybuy_040", title: "JD.com launches Joybuy in Europe, targeting Amazon", content: "JD.com launches Joybuy in Europe, targeting Amazon  Reuters", source: "Reuters", type: "press", platform: "joybuy", date: new Date("2026-03-16"), url: "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPeldOQzVOalZ3bXZPSnZ2Ukd2TmxTZExVNUQ5TFFvbWxmVUZtUjhIbmZKLXNpVEM4N2YtYkY2b3JHZUJHbE1UeGlTTTFfcl9KWE9iR1hZWGtQVlhpOUxyNGVTQVVROThCQzhtY0t5ZXFyTUJHaHhVcFZBQmpCZ0k2WWxKT0ZrNXU3VExCbG1NV3phNnV6SDdUZml5cU1uek1BRS16Tk80OW1vZw?oc=5" },
  { id: "joybuy_041", title: "China’s JD.com Takes On Amazon With Launch Of Joybuy In Europe", content: "China’s JD.com Takes On Amazon With Launch Of Joybuy In Europe  Forbes", source: "Forbes", type: "press", platform: "joybuy", date: new Date("2026-03-16"), url: "https://news.google.com/rss/articles/CBMitgFBVV95cUxOaFNMalQzTDhEZDBIYl9RNVNSNmgwNnc3bEFCRTNvei1XSmJUczNydUlLa3NtQ1lsZ2JIXzdhT3dTSVNPYWZJS2toV1dzTXNQeVExLVZ2T2dEQ1luTGFTU0hodk55UnZhZHFBS0EzbGtPRFV3bzB6WGQxck5OaVgzaWtrekFIQ0Z1R1lxQm9DSTBsV09ZbC1XVTBmMGJiZ2M2M1BTTFVSRkE0cXoxRHA4TzJxTENhdw?oc=5" },
  { id: "joybuy_042", title: "JD.com Unveils Joybuy in Europe, Taking on Amazon in Global Expansion Race", content: "JD.com Unveils Joybuy in Europe, Taking on Amazon in Global Expansion Race  Modaes", source: "Modaes", type: "press", platform: "joybuy", date: new Date("2026-03-16"), url: "https://news.google.com/rss/articles/CBMixgFBVV95cUxQc2plMGVQSGhfaFFnY0VnSFBNSnloTDB4Qk1yX2pXeExnZjJfT3JzSHpGTE9CeVEzUkpJSnV6M0ljSEJEMGVjYnJMeW9zSVk4M0czUjlLdm5GRGpvZXN0S2gyRktrbF9WMV9zdXAyUWo3ZDNsN0FXTzV0VDdqbFJuY0ZGS2NFcWRJNkc0U1V6UlJKOFQtVkFFRHY5TlN6RFJYNDAzN0VURmxRQ1ZQZTNlbVpoaDdDd1Bnc1ZyV3BkTWpBc1VpYmc?oc=5" },
  { id: "joybuy_043", title: "JD.com Targets Amazon, Launches Joybuy In Europe", content: "JD.com Targets Amazon, Launches Joybuy In Europe  StratNews Global", source: "StratNews Global", type: "press", platform: "joybuy", date: new Date("2026-03-16"), url: "https://news.google.com/rss/articles/CBMiigFBVV95cUxOQ2V1ajB4ZG9SRzdhOEJFSXFqTVBuT1ZWS25uQXpjbVh3RlhJRGpjbDYtbnN3NDllVW9jWlpiSDRLaGhtdE5GbnAzcWd4Y2FhQURkMmFkMFRyZTRPZ2tuc2NUQ3RIajlNcGpmUnNQVWtDZUVfNnV3LXpULUlJMHM2dmVoZDFIOFp5TUE?oc=5" },
  { id: "joybuy_044", title: "JD.com launches Joybuy in Europe to rival Amazon", content: "JD.com launches Joybuy in Europe to rival Amazon  Tech in Asia", source: "Tech in Asia", type: "press", platform: "joybuy", date: new Date("2026-03-16"), url: "https://news.google.com/rss/articles/CBMihwFBVV95cUxNeW9pWXlsNHU3MFU0a1JTT0ZYbktHemNkUWl5Z051aWdUdmRjd1NMbXNkLWNvVFlVT21Nal9qc0hxNEliX1RRMHpHWnVOTFpwV1pTd21Jc1FVd09LX1RKQktUdXBPR05LVUdoOVdLdXJEOWNObVNIeWJXR1U3aXFlbXhmSG5zNms?oc=5" },
  { id: "joybuy_045", title: "JD.com Unveils Joybuy Marketplace Across Six European Nations", content: "JD.com Unveils Joybuy Marketplace Across Six European Nations  Evrim Ağacı", source: "Evrim Ağacı", type: "press", platform: "joybuy", date: new Date("2026-03-16"), url: "https://news.google.com/rss/articles/CBMimgFBVV95cUxQdnBvaTdSMnpiZTl4cWtLUXVzNkJMbENVZmM4UDYtckh3NVdlZEthR1M0aEdyN1dvYkNDclZ6UEFibTZjQmFKeXdHNlBZOGdWTWl1VDhyci1lYWNjckNSbjJDTFl1dFNNZXc2Q3FoN3ZPTjhwTDh5UDY0NlQwXzJQSGY5RUV4WFZybXBQd0pCRzVlZkdVSDNCeVdR?oc=5" },
  { id: "joybuy_046", title: "JD.com launches Joybuy marketplace across Europe", content: "JD.com launches Joybuy marketplace across Europe  Yahoo Finance", source: "Yahoo Finance", type: "press", platform: "joybuy", date: new Date("2026-03-16"), url: "https://news.google.com/rss/articles/CBMihwFBVV95cUxPTFhJZWNrZ1lIcE9KR0pzcXp3RVJGMlBRd2VNWlVQSkZka2RqSVVBTUsyVWJ4Q2plU1RPVVNfaV9UamJudDhmaF96bFJFYjJTcDh6TmE1aU9GbnFELUQ5QjFjMVF3WHJQdmw2QjA0TXNJbTVoMnhrYmVxSDhITjRBMm5XWVpwQ2s?oc=5" },
  { id: "joybuy_047", title: "DHL and JD.com Sign Strategic MoU to Bridge German Brands with 600 Million Chinese Consumers - LM", content: "DHL and JD.com Sign Strategic MoU to Bridge German Brands with 600 Million Chinese Consumers  LM - Logistics Manager", source: "Logistics Manager", type: "press", platform: "joybuy", date: new Date("2026-03-16"), url: "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQYUk5ZmV6aE52QkxianJpSnYxd0ZjeDFHbnZ2V2VwMmNpZUdFNklQeFduVndzb2hmRmJaa0owdmVNYmQwOTRMbVFsNDJkWFZaM2w0Y2d3a0xNOHpoM08xNy15YmMzanlMcWdHekozZkdIeERkVG5vWkFqTkpxcnVHaXo1eWZmblhrMTVxLS1NM1pTa0w0UThwUnZ6S0R2SVF1c19vNWd2NlFPRHpRd3FsVG4xajVlVUx0ZE85Sm5icVY?oc=5" },
  { id: "shein_021", title: "Exclusive: Shein Wants Brands to Use Its Supply Chain. Should They?", content: "Exclusive: Shein Wants Brands to Use Its Supply Chain. Should They?  The Business of Fashion", source: "The Business of Fashion", type: "press", platform: "shein", date: new Date("2026-03-12"), url: "https://news.google.com/rss/articles/CBMi7AFBVV95cUxQQWltV2toLVVPOTlWM2FvdE9pZTZUTUpSbUxOVXlGYXhTVzhBaVRadzB3cEN0dDVaOThhdVVJejducHpNV0VEbjI4Y1ktRDc3eUJLYXVkTXFNRnFkYXh2U296M2ltU0wxdDk5bGRNajRlWEl4SlZvMDFjVV9PRXotN3pzSXNvS1YwMlZNTFAtWHpsMklVUjZwem5LLWJxLS01M0t4Rmp6SDFfNTY5dnVVdU1lMWlQWWkyTWtYVEZUTktkbENaU1dhOGc2UnhpaU5GUzZCSzJGeTdIQXdaNjEyWkgyX2pzT2lpYjVNRQ?oc=5" },
  { id: "temu_005", title: "America and China's biggest online shopping platforms send 'delivery warning' to customers in Middle East", content: "America and China's biggest online shopping platforms send 'delivery warning' to customers in Middle East  The Times of India", source: "The Times of India", type: "press", platform: "temu", date: new Date("2026-03-03"), url: "https://news.google.com/rss/articles/CBMikwJBVV95cUxOMGU0Z1ZXcXhvMmxPcVRrbVMycmFyOUZYb09aNWQyUGZoNFhKaWl1TjJNZ1dWQ2l4OUg5enp2WUtWR0VjWHJ3NmNkMGZCZ3BhdzBwdy1PVG81dE9oRjVfRllhU3VTSEFLLVZIVTZFbG5OV2hGLU4wZXFwMVloYUllckllZjFVblA3eno0ZnlYcnBtUEVaZ0FQNVVHNXRwaUczTmRjZ3M0VVY1cFBiaElxMTd5RDRnS3FYbUVzdUZPSzhTaXhiZk5QNnlzc19LQlk1VmRCWEhndXNCNHNrQ3k4NW5mbFJZVHVPM3JiRGljd2lsTlczc0NfcWp4R3czbnhaaVFmQ1kxdk9wcEdzdmk2SUVFSdIBmAJBVV95cUxQeG5TRzFxY3Q0VWdQM0xKX2hRcUxJMlA0T3dEZmlrVjNNNUFjRHpKTGFYUHN5Zll4cFhOR3VjMFdCWWNuOWJSeFJGM3Z4cm1kYnM2ekNiajFIV0MzSWFFVFJnNGptd2JLSUpsWkhjdUpUUVFGS05qa2x5OUlhZEJrYWl3YnNqbGFIN1AyYlRNWGJlTHB0MkE0NFJZWENQQ09lcE5VRXZLUnJmTDdhY3BuWUk0SXBIVGl6eW5GUDUzanhGaUl6dE8zVXpoQVJxOVZUQ1VvanFVNmtKZko4RDZVOVR1MUZQUERlajhrYU5Rb1FSaFFwdGhNOERYc0dHVnpoLVpMQ3p2MHIzUmtVOEVyZkZsTVFmTHNv?oc=5" },
  { id: "temu_006", title: "Yep, the de minimis tariff exemption is still suspended", content: "Yep, the de minimis tariff exemption is still suspended  marketplace.org", source: "marketplace.org", type: "press", platform: "temu", date: new Date("2026-03-03"), url: "https://news.google.com/rss/articles/CBMiowFBVV95cUxOMXZwRU00QVFiVzNERjZaZ002cDdMNlZ6aTJlMGxOangzcHg1cEp2Tmd1Mmk1R05Ka2pxM2tQeE81XzJUU0dYYWt2U0tmSlViM0hkVVp2YXJPV2RLZTlGUGxKM3FkTVJiRlNuQURZbmJNbngxOS03RWZxbVhyWHFGUHpYaWNaaUhvQWE5LWxMYXdLcXZaU1h3Y1VuR25TZVpCMGc0?oc=5" },
  { id: "shein_022", title: "Shein's elusive founder makes first public appearance amid Hong Kong IPO push", content: "Shein's elusive founder makes first public appearance amid Hong Kong IPO push  Campaign Asia", source: "Campaign Asia", type: "press", platform: "shein", date: new Date("2026-02-25"), url: "https://news.google.com/rss/articles/CBMi8AFBVV95cUxQaWJmRHo3djdUVFRQTDYtS015RmZJVkdDSE1BRmtiSFJPUGJkNXIwN2VUUU55RGZCcGdrcTV0Und1dlpBXzl3V2VUa3F6M2p5MHFaYUlJN0RxMGZmc0pUdEJUckxLeEJwUUR3OE90QzRQR0dodk9wT3dtVjF3LW5WeGdhRTUwalBaQnJQbmZkUmVTbHdhU3hUd0ZHSVJDT3NyMFhSeS1HZDVfOGlsY2p2LVZfbEkzUVctT3huZS1kSUNlQzdLWkJDRDhJc0JxbGMyZ3ZIZ1hiOTBVMUR6c2Y5SUlTUjBGM0RCY19TRnV5VlA?oc=5" },
  { id: "shein_023", title: "SHEIN韩国站半托管模式向本地企业开放招商年销售额需达40万美金- 跨境电商", content: "SHEIN韩国站半托管模式向本地企业开放招商年销售额需达40万美金- 跨境电商  亿邦动力网", source: "亿邦动力网", type: "press", platform: "shein", date: new Date("2026-02-25"), url: "https://news.google.com/rss/articles/CBMiRkFVX3lxTFBkT0dYaFEzOEEwZWgwZVdTVXk4MFhCdjZYemhOUXZrb1RWYnUxT2VmSklOUEZuTldsdm5vZ3RsYUlWU1pGWlE?oc=5" },
  { id: "shein_024", title: "Shein Pledges China Supply Chain Upgrade in Bid to Woo Beijing", content: "Shein Pledges China Supply Chain Upgrade in Bid to Woo Beijing  Bloomberg", source: "Bloomberg", type: "press", platform: "shein", date: new Date("2026-02-24"), url: "https://news.google.com/rss/articles/CBMiswFBVV95cUxORzhadEFhM0F2dnFiTEhUcTRpRXB6c2pWX2pRaEd1Y3B5VjFxaGVya1kybDRoNTZzSGNnMjFNVmVoRGZBSGx6WndFMnRZRjgwLVo5Wkh6YzJzN2RVYjNWS1ZhNEowUUhTSXBYTlY4Tjd1NnpMeU1QdFUzZzhSMkttVExHQmUzQnBIQlM3UWNORkxRcVo2Uk1sMm5MOUhEcS1GQmJwT28yREpHeXRZY3lVTVJLYw?oc=5" },
  { id: "temu_007", title: "Temu 的物流速度是比较大的卡点，目前也在参考拼多多经验进化", content: "Temu 的物流速度是比较大的卡点，目前也在参考拼多多经验进化  雪球", source: "雪球", type: "press", platform: "temu", date: new Date("2026-02-23"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE16S2xoaVhDM0xRVWdZR2hBLUpRYVFpM3ZBTHhfM2RFcm5uZ1lXWDdEQmFpQjdkR1RiMXNOVU43emhWNlFPb2hKUWpLbC1HSS1R?oc=5" },
  { id: "temu_008", title: "Consumer Reports Secures Marketplace Safety Improvements from Amazon and Temu", content: "Consumer Reports Secures Marketplace Safety Improvements from Amazon and Temu  Consumers Union", source: "Consumers Union", type: "press", platform: "temu", date: new Date("2026-02-19"), url: "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNUWY1R1lEaUZlajdYcmVBY19OT2E5OXh1a3NxN3hWV3A1SnNXdS1kSXI2SHJ3Wk5hZm9Pd0QxNEFZVWxQdTM0SDQ4bW4zV3ZxRnFTbGtJOFI3NGM2OEJUcGlvc3NLbjV6MXVVNUZ4Ni00Y2ZTU0I5TEphU0VlMGw2enNjRjNBQURPM3hidmVSdE5OZmVIU0l5NHVLRHduYjFzUmkyZXZnNjJTNkgzekxZV0VfbW9ERmhjOGpYMmRPX000eGZNY1lSVA?oc=5" },
  { id: "joybuy_048", title: "JD.com rolls out logistics service JoyExpress across Europe to support its JoyBuy platform", content: "JD.com rolls out logistics service JoyExpress across Europe to support its JoyBuy platform  FashionNetwork USA", source: "FashionNetwork USA", type: "press", platform: "joybuy", date: new Date("2026-02-13"), url: "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQblRPckNvNlAwMlJPZDRiSlF1dTY5emNhNVAtQVY5NFlscmwxekFIaDNzcUtnVG15cE1aMTBEbTdSanp2aTFMXzY5a3RIM2NKVFJwX1paMFgxcEp4ald4OEtydUpyOGxLT1BGVGZGRm9TTU9uUWFfdFd2d0F4VkxvLUc0TDk5QU5sTkwxa0Q3SjdWbGpWcUFFTW9Wc0VtWWZkb1VZbEJYeU1Kcnd6UUNiemtGNDltZERYWXJ4RVhMVlBWdVQtV0pVbEYxNHB2cUIzRFpmSA?oc=5" },
  { id: "temu_009", title: "Temu Partners with DEKRA to Enhance Platform Compliance and Quality Assurance", content: "Temu Partners with DEKRA to Enhance Platform Compliance and Quality Assurance  PR Newswire", source: "PR Newswire", type: "press", platform: "temu", date: new Date("2026-02-11"), url: "https://news.google.com/rss/articles/CBMizgFBVV95cUxNanRCYWZlaWVUdlRSYU9yNTJZbHMtSzdEOHpKOS1FTHo5dTJkSnNCRzRlZkJhVDRWXzlGcVYwSVBDcnNMVF9hSFY2cE9kSVVqa0pPM0tXQ1c1RVQ4TmtxZnVueUR5SkREa3NEbUZSUlZ1Z3ctX0hpSFZicjZaeThlYVJRMTE5WXZpOC0zTjRWSHR0SUhRQ25vNUVWLWdqZzJPaWtYU2N4bzl6dGw5LVBnWVROMlpPa09jdzM4VjQ5ODJlRkZ3RVZ5bjJGT1N1dw?oc=5" },
  { id: "temu_010", title: "Temu发布春节利好政策：首次暂停比价或释放流量与核价体系调整讯号|商品|价格|卖家|高价|商家_手机新浪网", content: "Temu发布春节利好政策：首次暂停比价或释放流量与核价体系调整讯号|商品|价格|卖家|高价|商家_手机新浪网  新浪财经", source: "新浪财经", type: "press", platform: "temu", date: new Date("2026-02-11"), url: "https://news.google.com/rss/articles/CBMi_wFBVV95cUxOcUlOcGhQX0s2VDB3WXdSUEx6azFnMTd1akgxSmhSRnktdWpPWW5Ob0FRSDJLLVhOaEF3eERBU2pGakxvQzd6ck9vYUc4ejJBUVlmcXo3MmNXOGlNUmdrNWREU1RJMXB3TmNsQ0xUYTh0Y2pHbzJUWmhzeE5uZmZCM2djc1R1QlFnTEtqUTVkdXB3dW9xWERnTEdrYjBvOWthNGFqMGxTWFp0UTV6S1U5Z1hCZHlJWTdwSHhrZzJPeUVMTHFSRXp3TDFIUjB1UjFxQWlnTFNRbXBNTVZSU2E2azNqdVlFNU1XMDNaV1dYQ0xKRmF4Y0JOeUxCc3RYb0k?oc=5" },
  { id: "temu_058", title: "中国公司全球化周报｜阿里云出海竞争力增长指数登全球榜首/Temu与匈牙利邮政达成合作", content: "中国公司全球化周报｜阿里云出海竞争力增长指数登全球榜首/Temu与匈牙利邮政达成合作  36kr.com", source: "36kr.com", type: "press", platform: "temu", date: new Date("2026-02-08"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBHTURveDJnN1E5TkxJQ3VIQm1VZjFWQTRZZk5CNDFTR1B4X1YxUVI1Yzh4aUVfenVQWDJzbG1zTGdGZWI5bDdreWxwNXR2UQ?oc=5" },
  { id: "temu_011", title: "Pinduoduo vs Temu: Two Faces of a Chinese eCommerce Giant", content: "Pinduoduo vs Temu: Two Faces of a Chinese eCommerce Giant  Global Sources", source: "Global Sources", type: "press", platform: "temu", date: new Date("2026-02-05"), url: "https://news.google.com/rss/articles/CBMiakFVX3lxTFAzMFV1SlJGSExLMDMtRGpJeVo3aWtCLVdsNUNFVGdpWkcxWHdSeXdFdWR4UHVZOVFlR2lsdFlheGh6cndzSEVqd1RoMWZMSHRDUlZlZXRwdU5wN2txOFM4VGstcDhlMlVPbGc?oc=5" },
  { id: "temu_012", title: "从1%到24%，Temu带着中国供应链走向全球", content: "从1%到24%，Temu带着中国供应链走向全球  qq.com", source: "qq.com", type: "press", platform: "temu", date: new Date("2026-02-05"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBDcU16Rm1XUHA0MTFxbjFmd2hTcmN2RGxfVHpvd1VlOHFubFJ5eU9JYU1ORjlQdFhoa1diampmcHlXSUpVS0s1MDRwclJZNy1ZZjZiRWdn?oc=5" },
  { id: "temu_056", title: "“抄”不动了！Temu卖家新一轮“出清”下的进与退- 跨境电商", content: "“抄”不动了！Temu卖家新一轮“出清”下的进与退- 跨境电商  亿邦动力网", source: "亿邦动力网", type: "press", platform: "temu", date: new Date("2026-02-05"), url: "https://news.google.com/rss/articles/CBMiRkFVX3lxTE9vNVFkUlFVZm5FTlQtdlY4TVgxUEh1c1RzcGhtX0F2cHNpR0JkMlBZVkNwRFh4R3BZelkwRkRxWGxMNktzZlE?oc=5" },
  { id: "temu_055", title: "突发！Temu这一站点暂停跨境销售- 跨境电商", content: "突发！Temu这一站点暂停跨境销售- 跨境电商  亿邦动力网", source: "亿邦动力网", type: "press", platform: "temu", date: new Date("2026-01-29"), url: "https://news.google.com/rss/articles/CBMiRkFVX3lxTE5XT09sWmw2NWVuZVNPODNSaUcxSS1QcmN2UnlMZlNKYVh0RUE3eVRHZnVfUktLR3F1U3hVaXZ5TE0ycGV5WWc?oc=5" },
  { id: "tiktok_059", title: "福建福州冲出一家IPO，做跨境电商服务，依赖Google、TikTok等供应商", content: "福建福州冲出一家IPO，做跨境电商服务，依赖Google、TikTok等供应商  36kr.com", source: "36kr.com", type: "press", platform: "tiktok", date: new Date("2025-12-15"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTE41OHpZakJhdlg5RnJzcHpNek10SWhpMHg3eU9oeFZlbmJwZ19EOWRBaUlwSHI4eEtwUTduR185VUN3S0JOU3Vtc0xuNy13dw?oc=5" },
  { id: "tiktok_060", title: "36氪出海·欧洲｜TikTok Shop入驻政策放宽，敲响欧洲“上车”信号", content: "36氪出海·欧洲｜TikTok Shop入驻政策放宽，敲响欧洲“上车”信号  36kr.com", source: "36kr.com", type: "press", platform: "tiktok", date: new Date("2025-09-29"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1QQzI1enNFUkdheG5zYTZidEJBZ01veVdBQjlzVTRLRkxxaDBzdHp0NWp2TFYtUTJYanVEbUpJWEswQ3J6dkVvSlpqUlJ0UQ?oc=5" }
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

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
    // AliExpress
    { id: 21, name: 'AliExpress官网', url: 'https://www.aliexpress.com', type: 'official', platform: 'aliexpress' },
    { id: 22, name: 'Alibaba Group News', url: 'https://www.alibabagroup.com/en-US/news', type: 'press', platform: 'aliexpress' },
    { id: 23, name: 'AliExpress Blog', url: 'https://sell.aliexpress.com/blog', type: 'official', platform: 'aliexpress' },
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
  { id: "tiktok_025", title: "TikTok Shop4月单量暴涨80%，第三方海外仓支撑极速发货", content: "TikTok Shop爆单狂潮4月单量暴涨80%，第三方海外仓凭什么撑起极速发货", source: "搜狐网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-24"), url: "https://news.google.com/rss/articles/CBMijAFBVV95cUxOVWoteElJclRkYW5sT0cybUZfWDJjNjBXSGRQTmdFMlI5MGJ3SG1WaVBWdk9GZVhvV3Nma0ljVTBEODJ4QXpOY3cxWHR1Y05SdEsxb3BZWkZ4N2tVUlRjM2pvbDN5eUNGMGxUalhoalBULWFJdU1ORGU4X2hSMm5wdWRCNWQ4YU1MWFVVQQ?oc=5" },
  { id: "shein_071", title: "SHEIN以技术+人才双引擎推动服装产业升级", content: "36氪出海·行业｜服装产业升级进行时，链主SHEIN“技术+人才”双引擎加码", source: "36kr.com", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-24"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTE41M181RFp3X2R3MUprcjdKRThCeGNmV0Y1clVGR19BUkR6akxSLWZCdENPdHk4dUttNnRtQ3Q2QS1vdXZRLUZodF9LRWNBdw?oc=5" },
  { id: "shein_013", title: "SHEIN启动大码女装专项招商，诚邀优质供应商", content: "SHEIN启动大码女装专项招商，诚邀优质供应商共拓千亿蓝海", source: "中华网", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-22"), url: "https://news.google.com/rss/articles/CBMibkFVX3lxTE9RRmRWLWh3VG9nS2FsdHBkb0JzRXNJVlZWb3RKd3hnRGhJNlZ3V0sxMUlVaFFjQk1SUGNjUXJLbDhxRXRjdEp1X3lLaUV5Rno3RTBEQ2ZIWUh3bUtleFc0RDhKZ3ZKbEFKajVLcEZn?oc=5" },
  { id: "joybuy_039", title: "京东Joybuy在欧洲六国上线，推当日达服务挑战亚马逊", content: "京东 Joybuy 在欧洲六国上线，推当日达服务挑战亚马逊", source: "白鲸出海", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-04-22"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE42NTBEQzR6d1NnaHQzbHhVckVmZTRNNkNUUkprQzN0Y2RZQk9tYWVzRFZUcTAwaFpCRFNZVnJtdzNpdklRcGVZdnViQUJQSXZJVFJVS2E2VDg?oc=5" },
  { id: "shein_014", title: "SHEIN加强欧洲合规管控，不合规商品面临下架风险", content: "抓紧自查SHEIN加强欧洲合规管控，不合规商品面临下架风险", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-21"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE12T3Y3U3lYN2pkZklGVXp6eGlMdjdOcUtXdTFONm92YmpkcjAyUENwWTRQLWE3bjVVTW5HOGM2c2VXbDFLRml4NWlaSUg?oc=5" },
  { id: "tiktok_026", title: "TikTok Shop全托管上线JIT模式准入与履约新规", content: "TikTok Shop全托管上线JIT模式准入与履约新规", source: "DoNews", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-20"), url: "https://news.google.com/rss/articles/CBMiXkFVX3lxTFBqWFNvM1FLX3d5aUJiYURfa3ZYZ1RzNWJwcDJEMk9mVXZUWlRNbzBnY2R6Q2dYMXZ4ZWhqVkk4aXNzd3l4V1dTWThKSDJXSTFqVE9lZkFqcExqTUx1NXc?oc=5" },
  { id: "tiktok_064", title: "知名大卖三年亏损40亿，TikTok Shop改写美妆电商规则", content: "【跨境早报】知名大卖三年亏损40亿，TikTok Shop改写美妆电商规则", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-14"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE0yN2R2Sld0VUdCNTRpeWFBdURxYUZiVWw0SHhVbGotVkxsTWcxLWVia3AwUkR2UmkzUXZtajlHRjY5dDR0dVVkLVVYbXQ?oc=5" },
  { id: "temu_006", title: "Temu与Shein遭集体诉讼要求退还关税，消费者指控收费不透明", content: "Temu, Shein hit with class actions demanding 关税 refunds", source: "www.cities929.com", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-13"), url: "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQnphYjRVdmdCdHI3Qkxyemt3WTF4MERsOTBHdmVYWEh6VWhpYXpDaEJLazJOWGVOQ3R4dUM5RWc2cEZfcW1TZUk2Mlp1U3JJVXV5TUlFZ0NnSUNVSGRCTnVCbWM3R1FZUjZtZm5MYUVWczJpQktIc2JHbjFOYkN1Q1FvUmxfUUtOLUxXMnRETklodGhlMWRPQ25xWXQ?oc=5" },
  { id: "tiktok_028", title: "TikTok Shop将举办年度卖家日峰会，公布2026年活动路线图", content: "TikTok Shop to Host Annual 卖家 Day Summit With Commerce 策略 Sessions, 2026 Campaign Roadmap Net Influencer", source: "Net Influencer", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-13"), url: "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOVmFlbWdaWF9SWUhsSGtwTWlsM1pwNnNhc2ljdE1KejdISnFwbHJIZmd3SGVWV3MtcFBTd1cwaWdZb2RvNVRHdnRFUTNsQzVGY1NybjI1V3lWVkhZcWVHdmFwcUZObG82cmkzVDVJMFlhclB1QklIVWtiQjBnMEZGOUFFZXFDQks4TE5FaHhXMmdWQXFsZGVzNkFJc2JEN3E0aEFBMlZIb2ZKMEpFdHg2T2tDaHNZMjZfcHo3VkhIYXM3RklaajkwYw?oc=5" },
  { id: "tiktok_029", title: "5月1日起TikTok Shop与Tokopedia对卖家收取物流服务费", content: "5月1日起TikTok Shop与Tokopedia将对卖家收取物流服务费- 快讯", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-13"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE50clJHWU1qb1dFY3J1YWpyNGNyLWp5WDNyaEFHWTBxQklhWFR5blB3Q25Wam51V2ZibmZ3NUg1bG9UaEtzY1haQy13cnZSUUZuNUEycjEyU0c?oc=5" },
  { id: "tiktok_030", title: "谷仓成为TikTok Shop欧洲本地托管业务首批对接合作仓", content: "首批接入谷仓成为TikTok Shop 欧洲本地托管业务对接合作仓", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-13"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBVUk1LNW1TZzFZd0w4Q1g1STUwTEdwbmlaZVE1Rjk5Z3FfcGVVcWdxd1AtZDc3MnpuVmJqeEpWUGJiaTRJR2lGNEZVU0k?oc=5" },
  { id: "aliexpress_062", title: "阿里速卖通品牌出海顶级峰会，仅99个品牌受邀参与", content: "阿里速卖通品牌出海顶级峰会，只有99个品牌受邀参与", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-13"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE4zSEJkMWxCMWdTaTNxakhwT3B2SW1XUUx4dFQzTUJ4aEh5VTJ1bVZTQnVmZklrc1RsMWFYUFRnZlA2Q3lMMUtnSVFLVVo?oc=5" },
  { id: "temu_007", title: "路虎揽胜平价版成2026年畅销车型，月付仅240英镑", content: "Bargain Range Rover lookalike is now on course to be 2026’s best 卖家 – and can be picked up for £240 a month The Sun", source: "The Sun", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-09"), url: "https://news.google.com/rss/articles/CBMiigFBVV95cUxPUWFmSG9rOXhET2xIM3B5aU9xM2R6S1cyZzg4cXhPY3ZEaEo4SWFqUXVOdUtzUmg1b1ZyR2JqUXhVNlJFM0FKWW9FQzU1elF6dDlOeS05MTZNaHBtME5GVkFiY05BSWlZcTBTd0xQMzh3dDhaZXFobGtZakNZNW1TUXFzUmlDVndaUXc?oc=5" },
  { id: "temu_065", title: "Temu严查资质致大量卖家报告失效，集体踩雷资质审核", content: "集体踩雷Temu严查资质，大量卖家报告失效", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-08"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9QRWNtb29aREhBQ3JLSGJzV25pdmpzX1A0X1pIUGhPcV9veWR4VWM3elM3VV9MbmpkLWo3VnA4anREUkhMTHB5d1NheVQ?oc=5" },
  { id: "shein_019", title: "SHEIN半托管模式开放加拿大站招商，拓展北美市场", content: "SHEIN半托管加拿大站招商_新浪新闻", source: "手机新浪网", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-07"), url: "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9OOXpxVGd0aWFtbTF1Q2NUMGlTb3VVdmJTY2o3aU8ycmN4VUdDNmppVnI5QTBqaXpsRDByYUZnY2dDb09WZDdUWTJUNTFPZzIzMGJhNjVVcmpSVk1fSVM4cjdXOA?oc=5" },
  { id: "tiktok_032", title: "AI赋能跨境蓝海，Xpand Boom亮相TikTok Shop官方AI专场", content: "AI赋能跨境蓝海 Xpand Boom亮相TikTok Shop官方出海AI 赋能专场", source: "新华报业网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-07"), url: "https://news.google.com/rss/articles/CBMia0FVX3lxTE42WFRWNnJnSDFMYTZrOXMtMHV2MTRuTGpKODhtckw1c2YwUlVuTmRab3dRTThfVGVHNnRIR1JVUWVhNlVveTN1cnR5VkRYLXh6WXBWR2VGRHV6bl9uRmluUWVXbi1iLUtMWmdj?oc=5" },
  { id: "tiktok_033", title: "TikTok Shop德国上线一周年，X世代贡献37%销售额", content: "TikTok Shop turns one in Germany: Gen X drives 37% of sales 营收 PPC Land", source: "PPC Land", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-05"), url: "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOQk1nMXczVm85eFJvbmgwTkFENEgzamQyS1BIeF9Cc0IweHZubWtPNW1SaGRLMGhBWDk1ZUVuNUdsZklUMk1JOHEyNE5kN1hjRlUwcnJhRjRiaDJKWFZTQ2lOZVZPcFh3X0RORk8zUDVjTFE1VEtVLXY4ZTlsWk9JRjhwRTllUXhyVTU4?oc=5" },
  { id: "tiktok_069", title: "亚马逊Prime Day收费模式变更，TikTok Shop欧日月活破2亿", content: "亚马逊Prime Day收费模式变更；TikTok Shop欧日月活用户破2亿丨跨境电商周报", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-05"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1ZdHZoU0UxV0J3NEx5S2F4bmR5cDJ2S3ZBWjRGbDhlbkJGTlRUUHp4elJ0MFQ3cjJXR3ZpWEl0TTZKeEhXSEhIU1NHZ1FtWmRWcXRtV1pn?oc=5" },
  { id: "aliexpress_050", title: "AliExpress速卖通新手指南：从注册到出单全流程解析", content: "AliExpress速卖通新手指南", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-04"), url: "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBYNTR0MnVJNjRBWnJnSTVGLXZxV3RxdElpU0RKdzVLOG9oRjBSSURaQkdOTUszQXN4UUxacmVXc3ljcVcyYlVpSEVHbUc4alo0NmY3WUNrRnAwdw?oc=5" },
  { id: "shein_020", title: "SHEIN加强物流管控，4月中上旬限制美区商家自发货", content: "加强物流管控SHEIN将于4月中上旬限制美区商家自发货功能- 跨境电商", source: "亿邦动力网", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-02"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1INy1tWEFJZXgtYXhaN0VKQU0zR1drRTJNc19EWU9BMC1JR2otRjdfV01BSTVsM1U5eDlsWnRMUUN6a01OSDRMRkZCYkwyZkZIbnVaS01n?oc=5" },
  { id: "joybuy_043", title: "3月跨境电商京东上线Joybuy TEMU用户直逼1.3亿欧盟强制一键退货", content: "3月跨境电商：京东上线Joybuy TEMU用户直逼1.3亿欧盟电商强制“一键退货”", source: "潮新闻", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-04-01"), url: "https://news.google.com/rss/articles/CBMic0FVX3lxTE9OVkNHeExaNUZjSXEtUDhMeHVWcGdCU1RvMVJjSE83MGVXSWdSc005dTYzYnJHY0VyaHM2RHgyZ0RFc21BTEdqMXQxbHpJZktMd0RuVjNfb2R5TWtQRkRWQ2RKbU52RE5ndUJ3bXVGNmFSUlE?oc=5" },
  { id: "aliexpress_054", title: "全球物流巨头DHL与速卖通加强欧洲物流合作，海外基建再扩容", content: "海外基建再扩容，全球物流巨头DHL与速卖通加强欧洲物流合作", source: "cn156.com", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-03-17"), url: "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5QMUNTRG5hckl3R01tcmU3SGp2Z0I0TnR1cTh3cDRoUE1ITmNBaTNtc3BTRGxQdDlNRjluMm1kSFVlZFBpWWZiZVRoVXZndDlkNUJMS2pOQ3JDeVlM?oc=5" },
  { id: "joybuy_048", title: "京东在欧洲推出Joybuy平台，直接挑战亚马逊市场地位", content: "JD.com 推出 Joybuy in 欧洲, 瞄准 Amazon", source: "Reuters", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-03-16"), url: "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPeldOQzVOalZ3bXZPSnZ2Ukd2TmxTZExVNUQ5TFFvbWxmVUZtUjhIbmZKLXNpVEM4N2YtYkY2b3JHZUJHbE1UeGlTTTFfcl9KWE9iR1hZWGtQVlhpOUxyNGVTQVVROThCQzhtY0t5ZXFyTUJHaHhVcFZBQmpCZ0k2WWxKT0ZrNXU3VExCbG1NV3phNnV6SDdUZml5cU1uek1BRS16Tk80OW1vZw?oc=5" },
  { id: "joybuy_105", title: "京东旗下Joybuy平台进军欧洲市场，与亚马逊展开竞争", content: "China's JD.com 扩展 into 欧洲 with Joybuy 平台", source: "TradingView", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-03-16"), url: "https://news.google.com/rss/articles/CBMisgFBVV95cUxOSnhfNzMyaXNveUxWWVBES1VOdlMwaDlhNXFZTjRqSXdVUFNlcndzRUN0MkprZ09EemI4UDc3aDhSQ2gtS1B6cW9lWUp3OVJaUE16N0V3QTAtcGVQM0E4Nnc0cDBKMERSbG5WMXA4M1BnR3FSRGFDWkwtaml3TEdHX0JxNlRqcFpOOTJ2OHpzU1BGN2o4MEdYNVJqN1ZwcjFQQ1ItWWdTRUFGcTNNbngwY013?oc=5" },
  { id: "joybuy_108", title: "京东推出Joybuy平台进军欧洲，挑战亚马逊全球电商地位", content: "JD.com (JD) Stock: Chinese Giant 推出 Joybuy in 欧洲 to 挑战 Amazon", source: "MEXC", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-03-16"), url: "https://news.google.com/rss/articles/CBMiR0FVX3lxTE5yaHdCakRheVpXRVVscHpnb1YxQXNxRzJXWm54dnJjMTdwRHg4al9yWFFxdDVuLTVJREFUd1FWbG1abjBtZk1J?oc=5" },
  { id: "joybuy_098", title: "京东在欧洲推出Joybuy平台，中国电商巨头加速全球化扩张", content: "JD.com takes on Amazon in 欧洲 as China's 电商 titans 扩展 全球ly", source: "CNBC", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-03-15"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxPUEVUTFdHX3hQS1JWbmhqN3pXTHI2c3RmdnUxcnd3bGl0eGVEeTdEaF94bzE0N2w2SjhTVFllSjRMV0tBekp2NXYtWlFjdHZncm13NnZCMDlISmRkSFJBVllEdTA4SFo3UnAxWEpRb0JPR3ppTHFISzlTaUMxZXg5VzktRzHSAYoBQVVfeXFMTkJKSFBHYTZ1VXdLeUQ5SVdCRkVMR1Fsc3Q2bEhIRW9MTGw5SzRRMk83MFAzLTl3cm9UdzdRX1U3Y0N1UUVpb2ViUTZpZWJ4T2djNmUtS0xlMHlxZXdHUHdTXzlqRU96elM4UWNIYkxNWFV6REVaeE9pNGcwOVE0WmJhcUw3YXpZQTdn?oc=5" },
  { id: "shein_024", title: "Shein希望品牌使用其供应链，是否应该接受引发行业讨论", content: "Exclusive: Shein Wants Brands to Use Its 供应链. Should They The Business of Fashion", source: "The Business of Fashion", type: "press", platform: "shein", dimension: "", date: new Date("2026-03-12"), url: "https://news.google.com/rss/articles/CBMi7AFBVV95cUxQQWltV2toLVVPOTlWM2FvdE9pZTZUTUpSbUxOVXlGYXhTVzhBaVRadzB3cEN0dDVaOThhdVVJejducHpNV0VEbjI4Y1ktRDc3eUJLYXVkTXFNRnFkYXh2U296M2ltU0wxdDk5bGRNajRlWEl4SlZvMDFjVV9PRXotN3pzSXNvS1YwMlZNTFAtWHpsMklVUjZwem5LLWJxLS01M0t4Rmp6SDFfNTY5dnVVdU1lMWlQWWkyTWtYVEZUTktkbENaU1dhOGc2UnhpaU5GUzZCSzJGeTdIQXdaNjEyWkgyX2pzT2lpYjVNRQ?oc=5" },
  { id: "temu_079", title: "SHEIN与Temu在土耳其策略分化：一家建枢纽一家守本土", content: "SHEIN与Temu的土耳其“分岔路”：一家造枢纽、一家守本土", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-03-09"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE5wR2hDVTFMYzV3OENJYjROVnczVDVQWHJFWWJuVzBvZGdGMUlGSWZUTHN2MUFoZEJjeThhRDByVS1MWXdQSEVwLVFwOW4?oc=5" },
  { id: "tiktok_092", title: "TikTok Shop欧洲站推出电商销售功能，卖家可入驻开店", content: "Selling on TikTok Shop 电商 News - 欧洲", source: "Europe", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-03-08"), url: "https://news.google.com/rss/articles/CBMiXEFVX3lxTE1tSkpIMGZ2XzRJa2tMX3pxbkZoOUtPZ1kyZG5fWktnT1AzNmsyVHdlQnc1b3ZvSkpEVlRQMkptWjEyMllnTklQZUNJSFBoMldwb1NBdUUtTWV3bmtB?oc=5" },
  { id: "tiktok_034", title: "TikTok Shop调整物流政策，卖家反应不一引发行业关注", content: "卖家 reactions to TikTok Shop changing stance on 配送 and 履约 Retail Brew", source: "Retail Brew", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-03-05"), url: "https://news.google.com/rss/articles/CBMivgFBVV95cUxPZExEeDNFOXJ6QnBIWW5NUy1TUTNhVGpKcEhGRVJhN01ob2NMZEV1YTJEYzdvSTRJS1d1MVI4Y2RZQzNpRmhmcW5NbEhmdkdTUFNxTXpOWS16b1NWMk14cldVREg3b1V3OHQxQ2ZWX2lfUXZiU2p0ZFJEX0FVVzR5bmN6UFRzMVozZWlmUU5TVl9GQTdETjg1bVloV3dKNVFMWlRKd0tSUnhMU0c5eEVUenQyWllPdmFXdjNZVWFn?oc=5" },
  { id: "temu_011", title: "美国de minimis关税豁免仍暂停，跨境卖家需关注政策变化", content: "Yep, the de minimis 关税 exemption is still suspended", source: "marketplace.org", type: "press", platform: "temu", dimension: "", date: new Date("2026-03-03"), url: "https://news.google.com/rss/articles/CBMiowFBVV95cUxOMXZwRU00QVFiVzNERjZaZ002cDdMNlZ6aTJlMGxOangzcHg1cEp2Tmd1Mmk1R05Ka2pxM2tQeE81XzJUU0dYYWt2U0tmSlViM0hkVVp2YXJPV2RLZTlGUGxKM3FkTVJiRlNuQURZbmJNbngxOS03RWZxbVhyWHFGUHpYaWNaaUhvQWE5LWxMYXdLcXZaU1h3Y1VuR25TZVpCMGc0?oc=5" },
  { id: "tiktok_035", title: "TikTok Shop日本站跨境店铺保证金翻倍，卖家成本增加", content: "TikTok Shop 日本站跨境店铺保证金翻倍", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-02-27"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5rUGJyTGZPZm9DdVZQUmg3ekFoMVVCOG5MXzA5clZ6ODFlNmRBY0F6NllIbTNIMlZORVlzQVp0MFo0WFdPNS1UeDZWRXRzQU5SU1hBMGdocmE?oc=5" },
  { id: "tiktok_036", title: "TikTok Shop日本跨境POP店铺保证金上涨，3月15日起生效", content: "TikTok Shop日本跨境POP店铺保证金上涨3月15日起生效- 跨境电商", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-02-26"), url: "https://news.google.com/rss/articles/CBMiRkFVX3lxTE5rNFdBRTZfMGgxM0s2MHgwRzJlUURWNFdUTHlBZkJ0SmUtazRObm5fblgwOWExTXhFSnJBc2VscXQzUjlBX1E?oc=5" },
  { id: "temu_012", title: "Temu物流速度成主要瓶颈，参考拼多多经验进行优化升级", content: "Temu 的物流速度是比较大的卡点，目前也在参考拼多多经验进化", source: "雪球", type: "press", platform: "temu", dimension: "", date: new Date("2026-02-23"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE16S2xoaVhDM0xRVWdZR2hBLUpRYVFpM3ZBTHhfM2RFcm5uZ1lXWDdEQmFpQjdkR1RiMXNOVU43emhWNlFPb2hKUWpLbC1HSS1R?oc=5" },
  { id: "tiktok_093", title: "TikTok Shop成为亚马逊最强大的电商需求引擎，转化率领先", content: "How TikTok Shop Is Amazon’s Most Powerful Commerce Demand Engine", source: "Forbes", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-02-23"), url: "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQb1pwTnhKX3RPZ29ST1FaSXlTMzM4VUpqejV0eGZEbG1hd1BqSkUwVXRROHUyNlhYYUtUbVVlY0N2dzJqc0ZNNExnZVJfYWVSZVAtWURVRklMaFZNREJoZ2YtNXJ3TGJzajhzOUR1S04yRktiTnRpbXBlaEJsaENHLWUtM0xORHRZdERTc1FJMHl3OVlZSllsZ1F5bVBYbnI1NjEwRTRaeFRqWFFzNThKbmdwMzRNajVmbDFj?oc=5" },
  { id: "tiktok_091", title: "TikTok Shop卖家推动社交电商销售额达870亿美元创历史新高", content: "The TikTok Shop 卖家s Behind 社交电商’s $87 Billion Surge", source: "Forbes", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-02-16"), url: "https://news.google.com/rss/articles/CBMivAFBVV95cUxPSjVLbG5JaUJzRk5xNGFqMnAyNk5VcFZxdWc2Vnc2UnBqQWZXYU9BaV9TZ1VxZElCdURZLWlqcU9PRjdVdFlzc1JSZVRJWlpldVUwbVMtT3FOZnh3UXNPYU91NEluRXcydXdnR0swcFlIbzhERnlicE9XXzA2akFIc3ZyUkVDNjllOThSdXFFaWFZYUFLQmJIWm03dkhZNGtIeVlqb0FuZ0NSM25ia0wwMFRhbEhhb1RCdUhPMw?oc=5" },
  { id: "tiktok_088", title: "美区TikTok Shop履约规则升级终结自发货时代卖家需适应", content: "美区TikTok Shop履约规则升级：自发货时代彻底终结，妙手ERP助您轻松应对", source: "中华网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-01-30"), url: "https://news.google.com/rss/articles/CBMicEFVX3lxTE5uMlE3dUkyMXZGR3ZucFFvRXl5UGc1VnB6dU5VNEp5OW42c0Q3RzQ2MFRoZ19UTzNHM1Uxcjl1aXJ4VmNPeWNYUkduNnNrZWROV0RnYzZHbmpUNXJPUzhtWEJXWVpZdHVJVWxqb2JVUzQ?oc=5" },
  { id: "tiktok_090", title: "TikTok Shop计划在欧洲推出新物流策略拓展市场", content: "TikTok Shop eyes 欧洲 with new 物流 策略 Dao Insights", source: "Dao Insights", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-01-19"), url: "https://news.google.com/rss/articles/CBMiXEFVX3lxTE1PV2VWVnhGeE1fNS1ZVzZ5d0FYdEpTUEkyX1ZrMF9CMlJzZ0VLY0ZvUzQ0S3VJUVVzQmw1TTJaLWphZnFSem81Y2NmdUI1NExBaWdzZ3FTaGdaVVIz?oc=5" },
  { id: "tiktok_073", title: "TikTok Shop在欧洲四国推出本地托管模式助力卖家", content: "中国公司全球化周报｜TikTok Shop在欧洲四国推出本地托管模式/创想三维携手阿里云优化3D打印云服务", source: "36kr.com", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-01-18"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBqUDFNcnQxU3hjNGhKU3NscVBZd3o5N2hjcDU2aUtJMDVJX1dxY2o0S09Pb0syTE5fa2Qyd1hrNElBNlNnUXdXOUdldE8zdw?oc=5" },
  { id: "tiktok_094", title: "2025年12月TikTok Shop收入前十店铺榜单发布", content: "The Top 10 Highest 营收 TikTok Shops In December 2025 Net Influencer", source: "Net Influencer", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-01-16"), url: "https://news.google.com/rss/articles/CBMikAFBVV95cUxPQTNLWmN0LWhqdUdSWnVDU0lEZ2hSaWlBZ2g3cXE5bGZyR1dwWHVaMjVjdG53WUNNam1nZjhaWlk2OEdFS0x6OE9XYjJMYlNwTFpHZ2tmMF9PYjZnZm1fVkV0UktiUF8tV1pzcWZxOU85OVh2dmFMaTNBWGtrYjZuUGI1cVdkSEFKandmRldhZ0g?oc=5" },
  { id: "tiktok_pinned_001", title: "TikTok Shop自1月8日起上调欧盟五国佣金至9%，电子品类享7%优惠", content: "TikTok Shop自2026年1月8日起对德国、法国、意大利、西班牙和爱尔兰五国站点佣金从5%上调至9%。电子产品等部分品类适用7%优惠费率。新入驻商家在15天内上架至少5件商品可享最长60天的4%优惠佣金率。", source: "ecommercenews.eu", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-01-08"), url: "https://ecommercenews.eu/tiktok-shop-raises-seller-fees-in-europe/" },
  { id: "temu_077", title: "Temu卖家销量腰斩陷入流量寒冬，平台流量分配机制引发卖家不满", content: "销量腰斩Temu卖家陷入流量寒冬- 跨境电商", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2025-12-23"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9LM2tHbW5mTTFYMldDMjZfTmxBZEFMOThfZG9ydTFCRUk4Ql9vSjBzbWhBbDQtNVczX0RhdXg1UEo2Y2xrRjFTLW81Y01HXzVXd0QzcDhB?oc=5" },
  { id: "temu_070", title: "TikTok Shop美区销售额暴增108% Temu跃居英国电商访问量第三", content: "TikTok Shop美区销售额暴增108% Temu跃居英国电商访问量第三 | 邦小白跨境周报", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2025-12-22"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE53bDZ4OVM3bFhVYzZSNFRNMXpUZUNFeHRzZ1FUX2s0SDMyZ2NOb2lKSERmQU9hUEV6YlRwbDBOaUliZzJxeGRESGtlM1FHcGdIVmpoc2lB?oc=5" },
  { id: "shein_097", title: "SHEIN在波兰弗罗茨瓦夫开设欧洲物流中心，创造5000个就业岗位", content: "SHEIN Opens State-of-the-Art 欧洲an 物流 Hub in Wrocław, Poland, Lifting Total Jobs Created in Poland to 5,000 SHEIN Group", source: "SHEIN Group", type: "press", platform: "shein", dimension: "", date: new Date("2025-12-22"), url: "https://news.google.com/rss/articles/CBMizAFBVV95cUxOYmRfb1VPRUNBdUNiWHFnbnNmQnF2QlBQd01IT2tKdjJOR2FQdlZ0QnByZ2F6cUNVamdUQ0VVOGhSQi04STBCTUtwaUJ5WVduOWhVVS1ZbTFhSndiVFl5eTAtV3FsWTZQRWF2Q0FhcWlsdEVsV2tRVG9iV3QzanMzbWtNMGdpTU1QSnhYWWt6R0V4WnNRdWZnTTFYMkdaM3diaTBwNG9qcTloN0RsNDVOOElyNi1SazdrSXVwVTlXSUdvbUZyRnNFeE5oRU8?oc=5" },
  { id: "temu_096", title: "欧盟拟对Shein和Temu低价包裹征收新费用，针对中国跨境电商", content: "EU 瞄准 China’s Shein and Temu with new 费用s on low-value parcels South China Morning Post", source: "South China Morning Post", type: "press", platform: "temu", dimension: "", date: new Date("2025-12-13"), url: "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNNzZIay0yaWpHb0JEUHZqNnNFUGFZMkVtcmx5dGVQYm9hcVRPODJHTGxhVW5NdTA0bmpaZWxJQjUzV3MycFJRaXZGNC1RSmhxSk9YZEFTUks4TUQ1STZONjFKQ1VMNmFkd0d0UEFjVmVQci1URkpTUW9XOFJEMEg4bVRLc2k2blY4cEstNEhZcng5aGo5cGJXZ0RsclFUN21CeVg2czJoQkk4aknSAasBQVVfeXFMTkZzLW5lUUVVVEFrRVlldmR2QTFOY1pHZHZORlVXdU80Ti1vMU1HMUlqd1g1OENjYVI0UHN2cFpoQlRIVGhCUzNiMVdXQ21YU2kzT1A3ay1GTjQ1V0xjT2psWDIwbTFDckdtdWhxNkFSVzlRMGtoMWlfRktyWFJlME9yeXYzWXZtTkFYTGRaeVBNLUVNNkY4V3JiMElLU2JjSW1UeFlHZUlGM1lB?oc=5" },
  { id: "temu_109", title: "Temu与比利时邮政bpost合作，提升欧洲电商物流可达性", content: "Temu: Making 电商 Accessible with bpostgroup 供应链 Digital Magazine", source: "Supply Chain Digital Magazine", type: "press", platform: "temu", dimension: "", date: new Date("2025-12-01"), url: "https://news.google.com/rss/articles/CBMifEFVX3lxTFBhbjBwaEw2XzFPNnF3VFU2bFBqS08zaUptdHpFNWlSNVA4T2g1dDdMSGp4OHc2cnI2Q29XQ2lqb09TdnBEMGUwYXh2b1h0TU0yUnVUTzZqckZ6SllLTE5FbkNqUklVNHVZQ09iRDBqNWE3YUNoVVRkTjFqWkk?oc=5" },
  { id: "temu_pinned_001", title: "Temu在欧盟27国推出Y2半托管模式，卖家可从中国直发履约最长21天", content: "Temu于2025年11月底在欧盟27国推出Y2半托管履约模式。该模式允许中国卖家从国内直接发货，无需海外仓备货，降低库存和资金压力。履约时效最长21天。平台提供末端配送和流量支持，主要面向中小卖家。Temu计划将高达80%的欧洲订单转为本地履约。", source: "ChineSellers / YUGUO", type: "press", platform: "temu", dimension: "", date: new Date("2025-11-28"), url: "https://chinesellers.substack.com/p/temus-new-hybrid-logistics-y2-model" },
  { id: "temu_110", title: "Temu与bpost签署协议扩大全球物流合作，提升配送效率", content: "Temu and bpost sign deal to 扩展 全球 物流 合作 Parcel and Postal Technology 国际", source: "Parcel and Postal Technology International", type: "press", platform: "temu", dimension: "", date: new Date("2025-11-28"), url: "https://news.google.com/rss/articles/CBMi1gFBVV95cUxPUTdrVzM3SVN5Y1QyVjRrZUl1THlMNktUdHcwZ1FmYlBRYzAwQWFJLUpORjFaTWliRWFvWkxYYmRrMl9kelkxMTBvaE5scXRNVExyaThnR3N6bDdOTzEzcGQ5WFo3c0Q0SS1GdU9kekRDSGVwZFVLWVp4LU05aHJFOEFjdlk1SVRyRDNvUHI2ZFgyejAwNlhUN1FfZjd4eVZ1S1FKdmNlR1FqemJtZTgzbDllOVpnYUI3dURLR1doYURtQV9PSExtTXh6RXJsR1pVd1V2eTN3?oc=5" },
  { id: "temu_095", title: "Temu扩大欧洲配送网络，与多家物流商合作提升覆盖范围", content: "Temu 扩展 欧洲an delivery network 电商 News - 欧洲", source: "Europe", type: "press", platform: "temu", dimension: "", date: new Date("2025-11-27"), url: "https://news.google.com/rss/articles/CBMidEFVX3lxTE0wNk1BQnEybjRUMnFCT1htbENMTmNOY0VRMkxWb2hWT1ZGVzBfN1VRUk52RnJ3SDBtTDdJWTYzem52TC1TR0FGeFYxZVgzbTczR2dELWpXSW9uUHRxbm5WZGh0TU5HX1lfWEVTNEFuTGZvMUZk?oc=5" },
  { id: "temu_085", title: "Temu与法国邮政达成合作，为消费者和商家提供本地履约服务", content: "Temu与法国邮政达成合作为消费者与商家提供本地履约服务- 跨境电商", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2025-10-16"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5BT01UVXBTemZpRGYwMzZlUkxaeHdyOEFvRjFINS1COGF4NEU4amxqVldBR21ONmZpZm1WNEptaW5aZ0JtTnd2cWVQTjVCWXNYdFFhSC1R?oc=5" },
  { id: "temu_084", title: "SHEIN、Temu、速卖通、TikTok Shop商战，谁的模式更打动海外消费者", content: "商战：SHEIN、TEMU、速卖通、TikTok Shop，谁的模式最能打动海外消费者", source: "物流指闻", type: "press", platform: "temu", dimension: "", date: new Date("2025-09-23"), url: "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9aZ2pzNXFMQ2JuMm83MGJtV3FISFROUUZMWmt1d200YjNaUVk3VVltLU9OV2hzeHlDeVFyV0huYlZPbDlEaU9HT0k3eEJqNGN4TXFOUUN5ZUFMT2JpSExxWVFtWlU?oc=5" },
  { id: "temu_080", title: "Temu在土耳其实施本地化战略，邀请本土库存商家入驻平台", content: "Temu在土耳其实施本地化战略 邀请本土库存商家入驻", source: "网经社", type: "press", platform: "temu", dimension: "", date: new Date("2025-09-05"), url: "https://news.google.com/rss/articles/CBMiU0FVX3lxTFAzZktkb0c4VnRoZ2tHY09UeFRlQk5lTkt3SUE3MkUwdzVXT3VCNHgxRmlIS1BwakNGdEVmSElfWlZ4LTM4VF9xdnZaZEtJZ2N2NVhv?oc=5" },
  { id: "tiktok_101", title: "15000个虚假TikTok Shop域名通过AI驱动诈骗传播恶意软件窃取加密货币", content: "15,000 Fake TikTok Shop Domains Deliver Malware, Steal Crypto via AI-Driven Scam Campaign The Hacker News", source: "The Hacker News", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-08-05"), url: "https://news.google.com/rss/articles/CBMigwFBVV95cUxQSlcyT3hNMTJSOWg5XzBINFBPVUs3S3RJd0FBYk5QRkZkMHBHdThxUVM3MVBxOENTbEd1bXdmakttMTNKeFBxNUhNSTc3aklfcnY1RkI1dC13Y0N5N3A4VmRpTmtXcTh2LV9VWklNem5kZjV2UmJyUHRJOHVvYXhsV3duRQ?oc=5" },
  { id: "tiktok_103", title: "最佳TikTok Shop代理机构助力DTC品牌实现七位数增长", content: "Best TikTok Shop Agency To Scale DTC Brands To 7-Figure 增长 Daily Trust", source: "Daily Trust", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-07-15"), url: "https://news.google.com/rss/articles/CBMijwFBVV95cUxPYnY4d1hURndEdlJld290QmtadzBzLTRibWx0VXRWWkw0dW9OSTdZWTZ5WHRheVZoTFZOUlh2YTdYSklSX1EwbDJMUFhEWUVfQ3N4Yk9wQkxVb2xDRDFkdnhtdTE2MWVyWFNZV2MyMVNhUTA5Wjc1QVllOC1VNXpUY2V2amNOR2psR21zRklXTQ?oc=5" }
];
// 初始化时间显示
newsData.forEach(function(item) { item.time = formatTimeFromDate(item.date); });
newsData.sort(function(a, b) { return b.date - a.date; });

function displayNews(filter = 'all') {
    const newsGrid = document.getElementById('newsGrid');
    const timeFilter = document.getElementById('timeFilter')?.value || 'all';
    const dimensionFilter = document.getElementById('dimensionFilter')?.value || 'all';
    let filteredNews = newsData;
    
    // 平台过滤
    if (filter !== 'all') {
        if (['social', 'official', 'press'].includes(filter)) {
            filteredNews = filteredNews.filter(news => news.type === filter);
        } else {
            filteredNews = filteredNews.filter(news => news.platform === filter);
        }
    }
    
    // 维度过滤
    if (dimensionFilter !== 'all') {
        filteredNews = filteredNews.filter(news => news.dimension === dimensionFilter);
    }
    
    // 时间过滤
    filteredNews = filterNewsByTime(filteredNews, timeFilter);
    
    const dimensionLabels = {
        'logistics': '🚚 物流仓储',
        'investment': '💰 投资扩张',
        'pricing': '🏷️ 价格关税',
        'traffic': '📱 引流营销',
        'compliance': '⚖️ 合规监管',
        'seller': '🏪 卖家生态',
        'returns': '📦 退货售后',
        'brand': '🏢 品牌渠道'
    };
    
    newsGrid.innerHTML = filteredNews.map(news => `
        <div class="news-row" data-type="${news.type}" data-platform="${news.platform}" data-dimension="${news.dimension || ''}">
            <span class="news-row-date">${news.date instanceof Date ? news.date.toISOString().split('T')[0] : news.date}</span>
            <span class="platform-tag platform-${news.platform}">${getPlatformLabel(news.platform)}</span>
            ${news.dimension ? `<span class="dimension-tag">${dimensionLabels[news.dimension] || ''}</span>` : ''}
            <a href="${news.url}" target="_blank" class="news-row-title" title="${news.content}">${news.title}</a>
            <span class="news-row-source">${news.source}</span>
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

function filterByDimension() {
    displayNews(getCurrentFilter());
}

function getCurrentFilter() {
    const activeBtn = document.querySelector('.filter-btn.active');
    if (!activeBtn) return 'all';
    const text = activeBtn.textContent.trim();
    const filterMap = {
        '全部': 'all', 'Temu': 'temu', 'Shein': 'shein', 
        'TikTok': 'tiktok', 'Joybuy': 'joybuy', 'AliExpress': 'aliexpress',
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
        'joybuy': 'Joybuy',
        'aliexpress': 'AliExpress'
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
        joybuy: 'JD.com (京东)',
        aliexpress: 'Alibaba Group (阿里巴巴)'
    },
    {
        dimension: '🌍 主要市场',
        temu: '北美、欧洲、东南亚、中东',
        shein: '欧美、中东、拉美、东南亚',
        tiktok: '美国、东南亚、英国',
        joybuy: '欧洲六国（英法德荷比卢）',
        aliexpress: '俄罗斯、欧洲、拉美、东南亚'
    },
    {
        dimension: '📦 商业模式',
        temu: '全托管 + 半托管',
        shein: '自营 + 平台 (Marketplace)',
        tiktok: '直播电商 + 货架电商',
        joybuy: '品牌导向平台 (京东生态)',
        aliexpress: '第三方平台 + Choice半托管'
    },
    {
        dimension: '🎯 核心品类',
        temu: '全品类低价商品',
        shein: '快时尚服饰为主',
        tiktok: '服饰、美妆、家居',
        joybuy: '3C数码、家电、品牌商品',
        aliexpress: '3C、家居、服饰、全品类'
    },
    {
        dimension: '💰 价格策略',
        temu: '极致低价，工厂直供',
        shein: '低价快时尚，小单快反',
        tiktok: '中低价，内容驱动消费',
        joybuy: '中高价，品质导向',
        aliexpress: '中低价，Choice优选低价'
    },
    {
        dimension: '🚚 物流时效',
        temu: '7-15天（部分地区3-5天）',
        shein: '7-12天',
        tiktok: '3-8天（本地仓）',
        joybuy: '当日/次日达（欧洲自建物流）',
        aliexpress: '7-15天（Choice 5-10天）'
    },
    {
        dimension: '📊 卖家佣金',
        temu: '全托管0%（平台定价）',
        shein: '10-20%',
        tiktok: '6-8%（美区）/ 9%（英区）',
        joybuy: '待公布（品牌合作模式）',
        aliexpress: '5-8%（Choice另有费率）'
    },
    {
        dimension: '📱 获客方式',
        temu: '社交裂变 + 补贴拉新',
        shein: 'KOL/KOC + SEO + 社媒',
        tiktok: '短视频 + 直播 + 算法推荐',
        joybuy: '品牌合作 + 自建物流体验',
        aliexpress: 'Google/FB广告 + 联盟营销'
    },
    {
        dimension: '⚡ 核心优势',
        temu: '极致供应链效率，价格优势',
        shein: '柔性供应链，快速上新',
        tiktok: '内容生态，兴趣电商',
        joybuy: '品质保障，自建物流体系',
        aliexpress: '全球覆盖广，商家生态成熟'
    },
    {
        dimension: '⚠️ 主要挑战',
        temu: '品质争议，合规压力',
        shein: 'ESG争议，IPO不确定性',
        tiktok: '政策风险，信任建设',
        joybuy: '市场份额小，品牌认知低',
        aliexpress: '关税冲击，与Temu内部竞争'
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
            <td>${row.aliexpress}</td>
        </tr>
    `).join('');
    
    const updateEl = document.getElementById('dashboardUpdate');
    if (updateEl) {
        updateEl.textContent = new Date().toISOString().split('T')[0];
    }
}


// ==================== 板块切换 ====================
function switchBoard(board) {
    var competitorSections = document.querySelectorAll('main.container');
    var vosBoard = document.getElementById('vosBoard');
    var pn15Board = document.getElementById('pn15Board');
    var freightBoard = document.getElementById('freightBoard');
    var competitorNav = document.getElementById('competitorNav');
    var btns = document.querySelectorAll('.board-btn');
    
    btns.forEach(function(b) { b.classList.remove('active'); });
    
    // 隐藏所有板块
    competitorSections.forEach(function(s) { s.style.display = 'none'; });
    vosBoard.style.display = 'none';
    pn15Board.style.display = 'none';
    freightBoard.style.display = 'none';
    competitorNav.style.display = 'none';
    
    if (board === 'competitor') {
        competitorSections.forEach(function(s) { s.style.display = 'block'; });
        competitorNav.style.display = 'flex';
        btns[0].classList.add('active');
    } else if (board === 'vos') {
        vosBoard.style.display = 'block';
        btns[1].classList.add('active');
        loadVOSData();
    } else if (board === 'pn15') {
        pn15Board.style.display = 'block';
        btns[2].classList.add('active');
        loadPN15Data();
    } else if (board === 'freight') {
        freightBoard.style.display = 'block';
        btns[3].classList.add('active');
        loadFreightData();
    }
}

// ==================== VOS 卖家热议 ====================
var vosData = [];

function loadVOSData() {
    if (vosData.length > 0) {
        renderVOS();
        return;
    }
    // 从独立仓库加载 VOS 数据
    var vosUrl = 'https://raw.githubusercontent.com/yanjiaoo/vos-social-media/main/vos-data.json';
    fetch(vosUrl)
        .then(function(r) { return r.json(); })
        .then(function(data) {
            vosData = data;
            renderVOS();
        })
        .catch(function(e) {
            console.error('加载VOS数据失败:', e);
            // fallback: 尝试本地文件
            fetch('vos-data.json')
                .then(function(r) { return r.json(); })
                .then(function(data) { vosData = data; renderVOS(); })
                .catch(function() {
                    document.getElementById('vosGrid').innerHTML = '<p style="text-align:center;color:#999;padding:40px;">暂无数据</p>';
                });
        });
}

function renderVOS() {
    var grid = document.getElementById('vosGrid');
    var tocList = document.getElementById('vosTocList');

    // 渲染目录 — 日期 + 标题 + 分类标签（右侧）
    tocList.innerHTML = vosData.map(function(item) {
        var topicLabel = item.topicLabel || '';
        return '<li data-topic="' + (item.topic || '') + '" data-date="' + (item.effectDate || '') + '"><a href="#' + item.id + '"><span class="toc-date">' + item.effectDate + '</span> ' + item.title + '<span class="toc-tag">' + topicLabel + '</span></a></li>';
    }).join('');

    // 渲染详情卡片 — 简洁：TOP rank + 分类 + 来源 + 日期
    grid.innerHTML = vosData.map(function(item) {
        // Source badge (plain, no priority styling)
        var sourceBadge = '<span class="source-badge">' + (item.source || '') + '</span>';

        // 卖家声音
        var voicesHtml = '';
        if (item.sellerVoices && item.sellerVoices.length > 0) {
            voicesHtml = '<div class="vos-voices"><h4>💬 卖家真实反馈</h4><ul>' +
                item.sellerVoices.map(function(v) {
                    return '<li><span class="voice-source">' + v.source + '：</span>"' + v.content + '"</li>';
                }).join('') + '</ul></div>';
        }

        // Before/After 对比表
        var comparisonHtml = '';
        if (item.comparison && item.comparison.length > 0) {
            comparisonHtml = '<div class="vos-compare-wrap"><h4>📊 政策对比</h4>' +
                '<table class="vos-compare"><thead><tr><th>维度</th><th>Before</th><th>After</th></tr></thead><tbody>' +
                item.comparison.map(function(c) {
                    return '<tr><td class="compare-dim">' + c.dimension + '</td><td>' + c.before + '</td><td class="compare-after">' + c.after + '</td></tr>';
                }).join('') + '</tbody></table></div>';
        }

        // 参考链接
        var linksHtml = '';
        if (item.links && item.links.length > 0) {
            linksHtml = '<div class="vos-links"><h4>🔗 参考来源</h4>' +
                item.links.map(function(l) {
                    if (l.url && l.url.startsWith('http')) {
                        return '<a href="' + l.url + '" target="_blank">' + l.label + ' →</a>';
                    }
                    return '<span class="link-no-url">' + l.label + '</span>';
                }).join('') + '</div>';
        }

        return '<div class="vos-card" id="' + item.id + '" data-topic="' + (item.topic || '') + '" data-date="' + (item.effectDate || '') + '">' +
            '<div class="vos-card-header">' +
                '<span class="vos-rank">' + item.rank + '</span>' +
                (item.topicLabel ? '<span class="dimension-tag">' + item.topicLabel + '</span>' : '') +
                sourceBadge +
                '<span class="vos-date">更新于 ' + item.effectDate + '</span>' +
            '</div>' +
            '<h3 class="vos-title">' + item.title + '</h3>' +
            '<div class="vos-summary"><strong>影响说明：</strong>' + item.summary + '</div>' +
            voicesHtml +
            comparisonHtml +
            linksHtml +
        '</div>';
    }).join('');
}

// Helper: determine source priority tier
function getSourcePriority(source) {
    if (!source) return 'low';
    var highSources = ['Reddit r/FulfillmentByAmazon', 'Reddit r/AmazonSeller', '知无不言', 'AMZ123', 'Amazon Seller Central Forums', 'Value Added Resource'];
    var mediumSources = ['卖家之家', '雨果跨境', '微信公众号'];
    var srcLower = source.toLowerCase();
    for (var i = 0; i < highSources.length; i++) {
        if (srcLower.indexOf(highSources[i].toLowerCase()) !== -1 || highSources[i].toLowerCase().indexOf(srcLower) !== -1) return 'high';
    }
    for (var j = 0; j < mediumSources.length; j++) {
        if (srcLower.indexOf(mediumSources[j].toLowerCase()) !== -1 || mediumSources[j].toLowerCase().indexOf(srcLower) !== -1) return 'medium';
    }
    return 'low';
}


// ==================== PN15 模块 ====================
var pn15Data = [];

function loadPN15Data() {
    if (pn15Data.length > 0) { renderPN15(); return; }
    fetch('https://raw.githubusercontent.com/yanjiaoo/pn15/main/pn15-data.json')
        .then(function(r) { return r.json(); })
        .then(function(data) { pn15Data = data; renderPN15(); })
        .catch(function(e) {
            document.getElementById('pn15Grid').innerHTML = '<p style="text-align:center;color:#999;padding:40px;">暂无数据，等待维护者更新</p>';
        });
}

function renderPN15() {
    var grid = document.getElementById('pn15Grid');
    var categoryLabels = {
        'policy': '📜 政策法规', 'tax': '💰 税务影响',
        'seller_voice': '🗣️ 卖家反应', 'enforcement': '🔍 执行动态',
        'guidance': '📋 合规建议'
    };
    grid.innerHTML = pn15Data.map(function(item) {
        var catLabel = categoryLabels[item.category] || item.category || '';
        var detailsHtml = '';
        if (item.details && item.details.length > 0) {
            detailsHtml = '<div class="vos-voices"><h4>📌 要点</h4><ul>' +
                item.details.map(function(d) { return '<li>' + d + '</li>'; }).join('') +
            '</ul></div>';
        }
        var linksHtml = (item.links || []).map(function(l) {
            return '<a href="' + l.url + '" target="_blank">' + l.label + ' →</a>';
        }).join(' ');
        return '<div class="vos-card" id="' + item.id + '">' +
            '<div class="vos-card-header">' +
                '<span class="vos-rank">TOP' + item.rank + '</span>' +
                (catLabel ? '<span class="dimension-tag">' + catLabel + '</span>' : '') +
                '<span class="vos-date">' + item.date + '</span>' +
            '</div>' +
            '<h3 class="vos-title">' + item.title + '</h3>' +
            '<div class="vos-summary">' + item.summary + '</div>' +
            detailsHtml +
            (linksHtml ? '<div class="vos-links"><h4>🔗 参考来源</h4>' + linksHtml + '</div>' : '') +
        '</div>';
    }).join('');
}

// ==================== 头程运费观察 ====================
var freightData = [];

function loadFreightData() {
    if (freightData.length > 0) { renderFreight(); renderFreightCharts(); return; }
    // 数据和图表并行加载
    renderFreightCharts();
    fetch('https://raw.githubusercontent.com/yanjiaoo/freight-watch/main/freight-data.json')
        .then(function(r) { return r.json(); })
        .then(function(data) { freightData = data; renderFreight(); })
        .catch(function(e) {
            document.getElementById('freightGrid').innerHTML = '<p style="text-align:center;color:#999;padding:40px;">暂无数据</p>';
        });
}

function renderFreight() {
    var grid = document.getElementById('freightGrid');
    var routeColors = {
        '中国→美国': '#1a73e8', '中国→欧洲': '#34a853',
        '中国→日本': '#ea4335', '跨大西洋': '#ff6d01',
        '中国→全球': '#9334e6'
    };
    grid.innerHTML = freightData.map(function(item) {
        var routeColor = routeColors[item.route] || '#667eea';
        var linksHtml = (item.links || []).map(function(l) {
            return '<a href="' + l.url + '" target="_blank" class="vos-link">' + l.label + ' →</a>';
        }).join(' ');
        return '<div class="vos-card">' +
            '<div class="vos-card-header">' +
                '<span class="vos-date">' + item.date + '</span>' +
                '<span class="platform-tag" style="background:' + routeColor + '">' + item.route + '</span>' +
                (item.mode ? '<span class="dimension-tag">' + item.mode + '</span>' : '') +
                '<span class="news-row-source">' + (item.source || '') + '</span>' +
            '</div>' +
            '<h3 class="vos-title">' + item.title + '</h3>' +
            '<div class="vos-summary">' + item.summary + '</div>' +
            (linksHtml ? '<div class="vos-links">' + linksHtml + '</div>' : '') +
        '</div>';
    }).join('');
}


// ==================== 运费图表 ====================
var freightChartInstances = {};

function renderFreightCharts() {
    // 按需加载 Chart.js
    if (typeof Chart !== 'undefined') {
        fetchAndDrawCharts();
        return;
    }
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.min.js';
    script.onload = function() { fetchAndDrawCharts(); };
    document.head.appendChild(script);
}

function fetchAndDrawCharts() {
    fetch('https://raw.githubusercontent.com/yanjiaoo/freight-watch/main/freight-chart-data.json')
        .then(function(r) { return r.json(); })
        .then(function(data) { drawFreightCharts(data); renderTransitChart(); })
        .catch(function(e) { console.error('加载图表数据失败:', e); });
}

function drawFreightCharts(data) {
    var labels = data.months;
    var routes = data.routes;
    var colors = {
        '中国→美西 (FBX01)': '#1a73e8',
        '中国→美东 (FBX03)': '#f57c00',
        '中国→北欧 (FBX11)': '#34a853',
        '中国→日本': '#ea4335'
    };

    // 销毁旧图表
    Object.keys(freightChartInstances).forEach(function(k) {
        if (freightChartInstances[k]) freightChartInstances[k].destroy();
    });

    // 海运图表
    var oceanDatasets = [];
    Object.keys(routes).forEach(function(route) {
        var oceanData = routes[route].ocean_fcl_feu || routes[route].ocean_fcl_teu;
        oceanDatasets.push({
            label: route,
            data: oceanData,
            borderColor: colors[route] || '#667eea',
            backgroundColor: (colors[route] || '#667eea') + '20',
            tension: 0.3,
            fill: false,
            pointRadius: 4,
            borderWidth: 2
        });
    });
    freightChartInstances.ocean = new Chart(document.getElementById('oceanChart'), {
        type: 'line',
        data: { labels: labels, datasets: oceanDatasets },
        options: {
            responsive: true,
            plugins: { legend: { position: 'bottom', labels: { font: { size: 12 } } } },
            scales: { y: { title: { display: true, text: '$/FEU (40尺柜)' }, beginAtZero: false } }
        }
    });

    // 空运图表
    var airDatasets = [];
    Object.keys(routes).forEach(function(route) {
        airDatasets.push({
            label: route,
            data: routes[route].air_per_kg,
            borderColor: colors[route] || '#667eea',
            tension: 0.3,
            fill: false,
            pointRadius: 4,
            borderWidth: 2
        });
    });
    freightChartInstances.air = new Chart(document.getElementById('airChart'), {
        type: 'line',
        data: { labels: labels, datasets: airDatasets },
        options: {
            responsive: true,
            plugins: { legend: { position: 'bottom', labels: { font: { size: 12 } } } },
            scales: { y: { title: { display: true, text: '$/kg' }, beginAtZero: false } }
        }
    });

    // 中欧班列图表（仅欧洲航线有数据）
    var railDatasets = [];
    Object.keys(routes).forEach(function(route) {
        var railData = routes[route].rail_per_kg;
        if (railData && railData.some(function(v) { return v !== null; })) {
            railDatasets.push({
                label: route,
                data: railData,
                borderColor: colors[route] || '#667eea',
                tension: 0.3,
                fill: false,
                pointRadius: 4,
                borderWidth: 2
            });
        }
    });
    if (railDatasets.length > 0) {
        freightChartInstances.rail = new Chart(document.getElementById('railChart'), {
            type: 'line',
            data: { labels: labels, datasets: railDatasets },
            options: {
                responsive: true,
                plugins: { legend: { position: 'bottom', labels: { font: { size: 12 } } } },
                scales: { y: { title: { display: true, text: '$/kg' }, beginAtZero: false } }
            }
        });
    } else {
        document.getElementById('railChart').parentElement.querySelector('h4').textContent += '（仅中国→欧洲）';
        freightChartInstances.rail = new Chart(document.getElementById('railChart'), {
            type: 'line',
            data: { labels: labels, datasets: [{ label: '中国→欧洲基本港', data: routes['中国→欧洲基本港'].rail_per_kg, borderColor: '#34a853', tension: 0.3, fill: false, pointRadius: 4, borderWidth: 2 }] },
            options: {
                responsive: true,
                plugins: { legend: { position: 'bottom' } },
                scales: { y: { title: { display: true, text: '$/kg' }, beginAtZero: false } }
            }
        });
    }

    // 更新时间
    var el = document.getElementById('chartLastUpdate');
    if (el) el.textContent = '最后更新：' + data.lastUpdated;
}


// ==================== 时效雷达 ====================
function renderTransitChart() {
    fetch('https://raw.githubusercontent.com/yanjiaoo/freight-watch/main/transit-data.json')
        .then(function(r) { return r.json(); })
        .then(function(data) { drawTransitChart(data); })
        .catch(function(e) { console.error('加载时效数据失败:', e); });
}

function drawTransitChart(data) {
    if (typeof Chart === 'undefined') return;

    var ctx = document.getElementById('transitChart');
    if (!ctx) return;

    var labels = data.months;
    var datasets = [];

    // 船公司时效线
    Object.keys(data.carriers).forEach(function(name) {
        var carrier = data.carriers[name];
        datasets.push({
            label: name,
            data: carrier.days,
            borderColor: carrier.color,
            backgroundColor: carrier.color + '15',
            tension: 0.3,
            fill: false,
            pointRadius: 4,
            borderWidth: 2.5,
        });
    });

    // 异常事件标注线
    var eventAnnotations = {};
    if (data.events) {
        data.events.forEach(function(evt, i) {
            var idx = labels.indexOf(evt.month);
            if (idx >= 0) {
                eventAnnotations['event' + i] = {
                    type: 'line',
                    xMin: idx,
                    xMax: idx,
                    borderColor: '#c0392b',
                    borderWidth: 2,
                    borderDash: [6, 3],
                    label: {
                        display: true,
                        content: evt.label,
                        position: 'start',
                        backgroundColor: '#c0392b',
                        color: '#fff',
                        font: { size: 11 },
                        padding: 4,
                    }
                };
            }
        });
    }

    // 检查是否有 annotation 插件（Chart.js 原生不支持，用 tooltip 替代）
    new Chart(ctx, {
        type: 'line',
        data: { labels: labels, datasets: datasets },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom', labels: { font: { size: 12 } } },
                tooltip: {
                    callbacks: {
                        afterBody: function(context) {
                            var idx = context[0].dataIndex;
                            var month = labels[idx];
                            var evts = (data.events || []).filter(function(e) { return e.month === month; });
                            if (evts.length > 0) {
                                return '⚠️ ' + evts[0].label + ': ' + evts[0].description;
                            }
                            return '';
                        }
                    }
                }
            },
            scales: {
                y: {
                    title: { display: true, text: '天数（港到港）' },
                    beginAtZero: false,
                    min: 8,
                },
                x: {
                    ticks: { font: { size: 11 } }
                }
            }
        },
        plugins: [{
            // 自定义插件：在异常事件月份画竖线
            id: 'eventLines',
            afterDraw: function(chart) {
                var ctx2 = chart.ctx;
                var xAxis = chart.scales.x;
                var yAxis = chart.scales.y;
                (data.events || []).forEach(function(evt) {
                    var idx = labels.indexOf(evt.month);
                    if (idx < 0) return;
                    var x = xAxis.getPixelForValue(idx);
                    ctx2.save();
                    ctx2.beginPath();
                    ctx2.setLineDash([6, 3]);
                    ctx2.strokeStyle = '#c0392b';
                    ctx2.lineWidth = 1.5;
                    ctx2.moveTo(x, yAxis.top);
                    ctx2.lineTo(x, yAxis.bottom);
                    ctx2.stroke();
                    // 标签
                    ctx2.fillStyle = '#c0392b';
                    ctx2.font = '11px sans-serif';
                    ctx2.textAlign = 'center';
                    ctx2.fillText('⚠️' + evt.label, x, yAxis.top - 5);
                    ctx2.restore();
                });
            }
        }]
    });
}


// VOS 议题筛选
var currentTopicFilter = 'all';
var currentVOSTimeFilter = 'all';

function filterVOS(topic) {
    currentTopicFilter = topic;
    document.querySelectorAll('.vos-topic-filters .filter-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    applyVOSFilters();
}

function filterVOSByTime() {
    currentVOSTimeFilter = document.getElementById('vosTimeFilter').value;
    applyVOSFilters();
}

function applyVOSFilters() {
    var now = new Date();
    var cutoff = null;
    if (currentVOSTimeFilter === 'week') { cutoff = new Date(); cutoff.setDate(now.getDate() - 7); }
    else if (currentVOSTimeFilter === 'month') { cutoff = new Date(); cutoff.setDate(now.getDate() - 30); }
    else if (currentVOSTimeFilter === '3months') { cutoff = new Date(); cutoff.setMonth(now.getMonth() - 3); }
    else if (currentVOSTimeFilter === '6months') { cutoff = new Date(); cutoff.setMonth(now.getMonth() - 6); }

    document.querySelectorAll('#vosTocList li').forEach(function(li) {
        var topicMatch = currentTopicFilter === 'all' || li.getAttribute('data-topic') === currentTopicFilter;
        var timeMatch = true;
        if (cutoff) {
            var d = new Date(li.getAttribute('data-date'));
            timeMatch = d >= cutoff;
        }
        li.style.display = (topicMatch && timeMatch) ? '' : 'none';
    });
    document.querySelectorAll('#vosGrid .vos-card').forEach(function(card) {
        var topicMatch = currentTopicFilter === 'all' || card.getAttribute('data-topic') === currentTopicFilter;
        var timeMatch = true;
        if (cutoff) {
            var d = new Date(card.getAttribute('data-date'));
            timeMatch = d >= cutoff;
        }
        card.style.display = (topicMatch && timeMatch) ? '' : 'none';
    });
}


// ==================== 提交文章线索 ====================
function toggleSubmitForm() {
    var form = document.getElementById('submitForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function submitArticle() {
    var title = document.getElementById('submitTitle').value.trim();
    var url = document.getElementById('submitUrl').value.trim();
    var topic = document.getElementById('submitTopic').value;
    var source = document.getElementById('submitSource').value.trim();
    var note = document.getElementById('submitNote').value.trim();

    if (!title || !url) {
        alert('请填写文章标题和链接');
        return;
    }

    var topicLabels = {
        'advertising': '广告', 'promotion': '促销', 'compliance': '合规',
        'brand': '品牌', 'returns': '退货', 'tax': '税务',
        'logistics': '物流', 'trending': '趋势'
    };

    // 生成 GitHub Issue
    var issueTitle = '[VOS线索] ' + title;
    var issueBody = '## 文章线索提交\n\n' +
        '**标题：** ' + title + '\n' +
        '**链接：** ' + url + '\n' +
        '**议题：** ' + (topicLabels[topic] || '未分类') + '\n' +
        '**来源：** ' + (source || '未标注') + '\n' +
        (note ? '**说明：** ' + note + '\n' : '') +
        '\n---\n*通过 Seller Learning Hub 提交*';

    var githubUrl = 'https://github.com/yanjiaoo/vos-social-media/issues/new?' +
        'title=' + encodeURIComponent(issueTitle) +
        '&body=' + encodeURIComponent(issueBody) +
        '&labels=article-submission';

    window.open(githubUrl, '_blank');

    // 清空表单
    document.getElementById('submitTitle').value = '';
    document.getElementById('submitUrl').value = '';
    document.getElementById('submitTopic').value = '';
    document.getElementById('submitSource').value = '';
    document.getElementById('submitNote').value = '';
    document.getElementById('submitForm').style.display = 'none';

    alert('已跳转到 GitHub 创建 Issue，请确认提交。维护者审核后将添加到 VOS 板块。');
}


// VOS 搜索
function searchVOS() {
    var query = (document.getElementById('vosSearchInput') || {}).value || '';
    query = query.toLowerCase().trim();
    
    // Filter TOC
    document.querySelectorAll('#vosTocList li').forEach(function(li) {
        var text = li.textContent.toLowerCase();
        li.style.display = (!query || text.indexOf(query) !== -1) ? '' : 'none';
    });
    
    // Filter cards
    document.querySelectorAll('#vosGrid .vos-card').forEach(function(card) {
        var text = card.textContent.toLowerCase();
        card.style.display = (!query || text.indexOf(query) !== -1) ? '' : 'none';
    });
}

// Competitor 搜索
function searchCompetitorNews() {
    var query = (document.getElementById('competitorSearchInput') || {}).value || '';
    query = query.toLowerCase().trim();
    document.querySelectorAll('#newsGrid .news-card').forEach(function(card) {
        var text = card.textContent.toLowerCase();
        card.style.display = (!query || text.indexOf(query) !== -1) ? '' : 'none';
    });
}

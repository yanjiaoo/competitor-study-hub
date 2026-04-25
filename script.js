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
  { id: "tiktok_001", title: "TikTok Shop自1月8日起上调欧盟五国佣金至9%，电子品类享7%优惠，新卖家可享60天4%费率", content: "TikTok Shop自2026年1月8日起对德国、法国、意大利、西班牙和爱尔兰五国站点佣金从5%上调至9%。电子产品等部分品类适用7%优惠费率。新入驻商家在15天内上架至少5件商品可享最长60天的4%优惠佣金率。", source: "ecommercenews.eu", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-01-08"), url: "https://ecommercenews.eu/tiktok-shop-raises-seller-fees-in-europe/" },
  { id: "temu_002", title: "Temu在欧盟27国推出Y2半托管模式，卖家可从中国直发免去海外仓备货，履约时效最长21天", content: "Temu于2025年11月底在欧盟27国推出Y2半托管履约模式。该模式允许中国卖家从国内直接发货，无需海外仓备货，降低库存和资金压力。履约时效最长21天。平台提供末端配送和流量支持，主要面向中小卖家。", source: "ChineSellers / YUGUO", type: "press", platform: "temu", dimension: "", date: new Date("2025-11-28"), url: "https://chinesellers.substack.com/p/temus-new-hybrid-logistics-y2-model" },
  { id: "tiktok_003", title: "TikTok Shop 4月单量暴涨80%，第三方海外仓支撑极速发货", content: "TikTok Shop在4月迎来爆单狂潮，单量环比暴涨80%。第三方海外仓成为极速发货的关键支撑，助力卖家提升履约效率。", source: "搜狐网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMijAFBVV95cUxOVWoteElJclRkYW5sT0cybUZfWDJjNjBXSGRQTmdFMlI5MGJ3SG1WaVBWdk9GZVhvV3Nma0ljVTBEODJ4QXpOY3cxWHR1Y05SdEsxb3BZWkZ4N2tVUlRjM2pvbDN5eUNGMGxUalhoalBULWFJdU1ORGU4X2hSMm5wdWRCNWQ4YU1MWFVVQQ?oc=5" },
  { id: "shein_004", title: "SHEIN加强欧洲合规管控，不合规商品面临下架风险", content: "SHEIN正在加强欧洲市场的合规管控，卖家需抓紧自查，不合规商品将面临下架风险。此举旨在应对欧盟日益严格的监管要求。", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE12T3Y3U3lYN2pkZklGVXp6eGlMdjdOcUtXdTFONm92YmpkcjAyUENwWTRQLWE3bjVVTW5HOGM2c2VXbDFLRml4NWlaSUg?oc=5" },
  { id: "temu_005", title: "TEMU欧洲站点验证升级：强制对公与视频审核，多数卖家账号受限", content: "TEMU欧洲站点升级卖家验证流程，强制要求对公账户和视频审核，导致多数卖家账号受限。卖家需尽快完成验证以避免业务中断。", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiVEFVX3lxTE8yaUlHOW9yZmtGRURKT01oMU90QkdTV0ZYRGZwVlFvazBZMHJWWFl6ZmF3cnlaQmNUQXhLeWNuVnV0bXNKRzBNcVk3MEMxUV9NNnVQRg?oc=5" },
  { id: "tiktok_006", title: "TikTok Shop全托管上线JIT模式准入与履约新规", content: "TikTok Shop全托管模式推出JIT（Just-In-Time）模式准入与履约新规，旨在提升库存周转效率，降低卖家备货压力。", source: "DoNews", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiXkFVX3lxTFBqWFNvM1FLX3d5aUJiYURfa3ZYZ1RzNWJwcDJEMk9mVXZUWlRNbzBnY2R6Q2dYMXZ4ZWhqVkk4aXNzd3l4V1dTWThKSDJXSTFqVE9lZkFqcExqTUx1NXc?oc=5" },
  { id: "joybuy_007", title: "京东Joybuy在欧洲六国上线，推当日达服务挑战亚马逊", content: "京东旗下电商平台Joybuy在欧洲六国正式上线，并推出当日达配送服务，直接挑战亚马逊在欧洲的物流优势。", source: "白鲸出海", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE42NTBEQzR6d1NnaHQzbHhVckVmZTRNNkNUUkprQzN0Y2RZQk9tYWVzRFZUcTAwaFpCRFNZVnJtdzNpdklRcGVZdnViQUJQSXZJVFJVS2E2VDg?oc=5" },
  { id: "tiktok_008", title: "TikTok Shop与Tokopedia自5月1日起对卖家收取物流服务费", content: "TikTok Shop与Tokopedia宣布自5月1日起，将对卖家收取物流服务费。此举将增加卖家运营成本，卖家需调整定价策略。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE50clJHWU1qb1dFY3J1YWpyNGNyLWp5WDNyaEFHWTBxQklhWFR5blB3Q25Wam51V2ZibmZ3NUg1bG9UaEtzY1haQy13cnZSUUZuNUEycjEyU0c?oc=5" },
  { id: "tiktok_009", title: "谷仓成为TikTok Shop欧洲本地托管业务首批对接合作仓", content: "谷仓海外仓成为TikTok Shop欧洲本地托管业务的首批对接合作仓，将为卖家提供本地仓储和配送服务，提升欧洲市场履约效率。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBVUk1LNW1TZzFZd0w4Q1g1STUwTEdwbmlaZVE1Rjk5Z3FfcGVVcWdxd1AtZDc3MnpuVmJqeEpWUGJiaTRJR2lGNEZVU0k?oc=5" },
  { id: "temu_010", title: "Temu严查卖家资质，大量卖家报告资质失效", content: "Temu正在严查卖家资质，大量卖家报告资质失效，导致账号受限。卖家需及时更新和提交合规资质，避免业务受影响。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9QRWNtb29aREhBQ3JLSGJzV25pdmpzX1A0X1pIUGhPcV9veWR4VWM3elM3VV9MbmpkLWo3VnA4anREUkhMTHB5d1NheVQ?oc=5" },
  { id: "shein_011", title: "SHEIN半托管模式开放加拿大站招商", content: "SHEIN半托管模式正式开放加拿大站招商，卖家可利用本地仓储和配送服务，提升在加拿大市场的竞争力。", source: "手机新浪网", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9OOXpxVGd0aWFtbTF1Q2NUMGlTb3VVdmJTY2o3aU8ycmN4VUdDNmppVnI5QTBqaXpsRDByYUZnY2dDb09WZDdUWTJUNTFPZzIzMGJhNjVVcmpSVk1fSVM4cjdXOA?oc=5" },
  { id: "aliexpress_012", title: "亚马逊欧盟开店需完成VAT增值税登记", content: "亚马逊要求欧盟站点的卖家必须完成VAT增值税登记，否则可能面临账户限制。卖家需尽快完成税务合规。", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTE1tVnFjenA2TWR6Sl83dVZ6M2xoVHNCY0p0dEZYcEpLTnRwOGh4VmRxT2RkN2FNZ21DellCVkJkTGRmRVNlZmJuVUN1QlcxTm8?oc=5" },
  { id: "tiktok_013", title: "TikTok Shop推出跨境POP商家中心APP", content: "TikTok Shop推出跨境POP商家中心APP，方便卖家在移动端管理店铺、查看数据和处理订单，提升运营效率。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTE1tVnFjenA2TWR6Sl83dVZ6M2xoVHNCY0p0dEZYcEpLTnRwOGh4VmRxT2RkN2FNZ21DellCVkJkTGRmRVNlZmJuVUN1QlcxTm8?oc=5" },
  { id: "temu_014", title: "Temu横扫波兰市场，强势登顶流量Top1", content: "Temu在波兰市场表现强劲，流量已登顶当地电商平台Top1，显示其在欧洲市场的快速扩张势头。", source: "新浪财经", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMidEFVX3lxTE80SjB3a01ZRmg5TW5iYkR1eVhFY2VwSjRBNmQ2ZFlFWllUSDJYVjlhNHd1REZEeWF2NTBiWkI3Zi1TbHdrOFZtQVJEWW5DVV9ENGJ1ckZYdExfc0RfajdtTjg1NVl2enVGeERsSTFrdmU5dU9T?oc=5" },
  { id: "tiktok_015", title: "TikTok Shop改写美妆电商规则，知名大卖三年亏损40亿", content: "TikTok Shop在美妆电商领域快速崛起，改写行业规则，导致某知名大卖三年累计亏损40亿元，传统卖家面临转型压力。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE0yN2R2Sld0VUdCNTRpeWFBdURxYUZiVWw0SHhVbGotVkxsTWcxLWVia3AwUkR2UmkzUXZtajlHRjY5dDR0dVVkLVVYbXQ?oc=5" },
  { id: "temu_016", title: "Temu与SHEIN在美国遭集体诉讼，要求退还关税", content: "Temu和SHEIN在美国面临集体诉讼，原告指控其未退还多收的关税，要求赔偿。此案可能影响两家平台的合规成本。", source: "WWD", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMipAFBVV95cUxNY0dobkFGMTg3TW5yRExSZTF4MHQ1dmVRMVVTZUxHX2ZjWVFLSDdVZEtxMW1OV2NsM2ZXNW9FeWduREp6cUI5MHktSzZMX1dkVmVDd1VwdWlxV2NfR3FGQVJDazVXMDB6V2lDY0NFSk1uaXU3VGpmSzk4S2NIQkI4aWZ3MDFJMkRwYk5rSF81U2s2UndUbjdhRlhmY2F5XzBWMUJkTg?oc=5" },
  { id: "aliexpress_017", title: "亚马逊利用更紧密的中国供应链应对关税及SHEIN、Temu竞争", content: "亚马逊通过加强与中国的供应链合作，以抵消关税影响，并应对SHEIN和Temu的竞争压力，提升商品性价比。", source: "South China Morning Post", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQdjVWZU5yNzB6aVdMcHZDRExpNlNLYzRJYjRNelVmOE5leE1IMUlmcm10UjJCblFfSG9zSWFUMVlZTmpxMl9KVmpNZnRjMTNJRmY5S1BvbzBDM1FlVEZkSENaeC05cV93S1ExNHppT2Q1bmJuT3E4cmZ1Qm5OSmNaWG1nR18yUTJUcEl2X2VqVnJNUkU5YkUxVTh2b1V2YUpTYkpqMzNvNWE5d3FfVXRMQ3RXakF6MkRDMUtrZmpqb2ZJRVHSAcMBQVVfeXFMTVE3dHRVRXMxMXVrb0JzMnEzN0Z5MkUtN1FETWMzUmFJNXJPNHNFVng0RUR3LTJQcjNmVTk4UmwyeUZPQW5JNHRjVFlZNXA4b005S1FLVTh5QVBiSlNnNlVLdWRsNTgySE40cVFVVzRhRTY3RHlXY2ZhVV9fdVpLWDAtXzg0U2VCZ2FnY3hRdENXMUwwLVkwRVBmVk5mOEVSSWV4LXlPbXZfMTRwUi1GVjZxckxtckNNcUc4UFZiY3pNV24w?oc=5" },
  { id: "tiktok_018", title: "TikTok Shop举办年度卖家日峰会，发布2026年营销路线图", content: "TikTok Shop将举办年度卖家日峰会，提供电商策略研讨会，并发布2026年营销路线图，助力卖家规划全年运营。", source: "Net Influencer", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOVmFlbWdaWF9SWUhsSGtwTWlsM1pwNnNhc2ljdE1KejdISnFwbHJIZmd3SGVWV3MtcFBTd1cwaWdZb2RvNVRHdnRFUTNsQzVGY1NybjI1V3lWVkhZcWVHdmFwcUZObG82cmkzVDVJMFlhclB1QklIVWtiQjBnMEZGOUFFZXFDQks4TE5FaHhXMmdWQXFsZGVzNkFJc2JEN3E0aEFBMlZIb2ZKMEpFdHg2T2tDaHNZMjZfcHo3VkhIYXM3RklaajkwYw?oc=5" },
  { id: "tiktok_019", title: "TikTok Shop“一商卖全球”再升级，2026年跨境新玩法发布", content: "TikTok Shop升级“一商卖全球”策略，推出2026年跨境新玩法，帮助卖家更高效地拓展全球市场，提升销售效率。", source: "新浪财经", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxQNHNJd3NNT192TWQ0c3pJS0praVlaSzBTdnBNMVVYd2gyQlRkeHRvTWt2SmpEdzh0SHM2M3UzdnBRb3J4bzNjNWxnWUdIZDBXS1JqY2t0XzAtck4tRl9HSFdhNmpvQkJyUmxuLUk4aC1tdWdvNTJ6eVBuRk5taXFJWUhCOG8?oc=5" }
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
    
    if (filter === 'all') {
        // 全部视图：紧凑列表，无摘要
        newsGrid.innerHTML = filteredNews.map(function(news) {
            var dateStr = news.date instanceof Date ? news.date.toISOString().split('T')[0] : news.date;
            return '<div class="news-row" data-type="' + news.type + '" data-platform="' + news.platform + '">' +
                '<span class="news-row-date">' + dateStr + '</span>' +
                '<span class="platform-tag platform-' + news.platform + '">' + getPlatformLabel(news.platform) + '</span>' +
                '<a href="' + news.url + '" target="_blank" class="news-row-title">' + news.title + '</a>' +
                '<span class="news-row-source">' + news.source + '</span>' +
            '</div>';
        }).join('');
    } else {
        // 平台视图：卡片+摘要+参考来源
        newsGrid.innerHTML = filteredNews.map(function(news, idx) {
            var dateStr = news.date instanceof Date ? news.date.toISOString().split('T')[0] : news.date;
            return '<div class="vos-card" data-type="' + news.type + '" data-platform="' + news.platform + '">' +
                '<div class="vos-card-header">' +
                    '<span class="vos-rank">' + (idx + 1) + '</span>' +
                    '<span class="platform-tag platform-' + news.platform + '">' + getPlatformLabel(news.platform) + '</span>' +
                    '<span class="source-badge">' + news.source + '</span>' +
                    '<span class="vos-date">更新于 ' + dateStr + '</span>' +
                '</div>' +
                '<h3 class="vos-title">' + news.title + '</h3>' +
                (news.content ? '<div class="vos-summary"><strong>概览：</strong>' + news.content + '</div>' : '') +
                '<div class="vos-links"><a href="' + news.url + '" target="_blank">🔗 ' + news.source + ' →</a></div>' +
            '</div>';
        }).join('');
    }
    
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
    document.querySelectorAll('#newsGrid .vos-card, #newsGrid .news-row').forEach(function(card) {
        var text = card.textContent.toLowerCase();
        card.style.display = (!query || text.indexOf(query) !== -1) ? '' : 'none';
    });
}

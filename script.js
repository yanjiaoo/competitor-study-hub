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
  { id: "tiktok_025", title: "TikTok Shop爆单狂潮4月单量暴涨80%，第三方海外仓凭什么撑起极速发货", content: "TikTok Shop爆单狂潮4月单量暴涨80%，第三方海外仓凭什么撑起极速发货", source: "搜狐网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-24"), url: "https://news.google.com/rss/articles/CBMijAFBVV95cUxOVWoteElJclRkYW5sT0cybUZfWDJjNjBXSGRQTmdFMlI5MGJ3SG1WaVBWdk9GZVhvV3Nma0ljVTBEODJ4QXpOY3cxWHR1Y05SdEsxb3BZWkZ4N2tVUlRjM2pvbDN5eUNGMGxUalhoalBULWFJdU1ORGU4X2hSMm5wdWRCNWQ4YU1MWFVVQQ?oc=5" },
  { id: "shein_061", title: "2180亿美元市场爆发在即SHEIN这类产品复购率超行业1.8倍", content: "2180亿美元市场爆发在即SHEIN这类产品复购率超行业1.8倍丨2026跨境选品内参⑫", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-24"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9KVDZlSGhza2Fnd3JaenJpcERYSVVfMDBVTnE4d3BSS0JGOW9pRXFGb2FyYmt2R2wzWEZ4N0I4NkRfOGk3cnd0QmlxQ1k?oc=5" },
  { id: "shein_070", title: "行业｜服装产业升级进行时，链主SHEIN“技术+人才”双引擎加码", content: "行业｜服装产业升级进行时，链主SHEIN“技术+人才”双引擎加码", source: "36氪出海", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-24"), url: "https://news.google.com/rss/articles/CBMiRkFVX3lxTFBZWFhLVzUyRVFIWkozMy1oWjR3aWxjN0ozQnkzSEJxOUhhVVY4Y09ObktqdHBmOVZUWWJmUW9iRV9zVHZGb1E?oc=5" },
  { id: "temu_001", title: "TEMU卖家必看凌风工具箱\"流量增长批量申报\"功能大揭秘", content: "TEMU卖家必看凌风工具箱\"流量增长批量申报\"功能大揭秘", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-23"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1GMXhYVTZYbUlfX0xoOTViVE1tYlRheE5KUnFSV2hqUGN5NUpXbzBjcU1TS0pIXzQzczAyZ3VKUWpPSmZJVzZqbmlrWEY?oc=5" },
  { id: "tiktok_026", title: "TikTok Shop faces antitrust complaint in Indonesia over 物流 practices, pricing", content: "TikTok Shop faces antitrust complaint in Indonesia over 物流 practices, pricing", source: "MLex", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-23"), url: "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5GenV6YVZwYkZKRUk5bVNYSUQ5U1pxaVktUlBoYWRpRWxLdmxWRmt2OXlnVzNNcWlOdFNyemFLR2taWWJqWF85MldmbUxodUJTRWxDdG5XR3Y3UdIBWkFVX3lxTE5GenV6YVZwYkZKRUk5bVNYSUQ5U1pxaVktUlBoYWRpRWxLdmxWRmt2OXlnVzNNcWlOdFNyemFLR2taWWJqWF85MldmbUxodUJTRWxDdG5XR3Y3UQ?oc=5" },
  { id: "joybuy_037", title: "OpenClaw X 京东物流“龙虾”智能体如何帮助国际商家出海", content: "OpenClaw X 京东物流“龙虾”智能体如何帮助国际商家出海", source: "新浪财经", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-04-23"), url: "https://news.google.com/rss/articles/CBMidkFVX3lxTE9tRDlSMXlBdzBSMHZiNzRFN2I4TFkzYkVhSlhSNWRaNDRLMGxCaVlxR0JucmRLY0x1dzlNNFJfY3l4NVNxNWJ0ZTJuWURRRXk1SUhaeGRhUXotU2t3NTBxRkZOWWxfQlE0WmZ5Zmt5NWJQWkd0YXc?oc=5" },
  { id: "temu_068", title: "WiseApp Retail：中国电商在韩国市场份额大幅增长速卖通与Temu表现突出- 快讯", content: "WiseApp Retail：中国电商在韩国市场份额大幅增长速卖通与Temu表现突出- 快讯", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-23"), url: "https://news.google.com/rss/articles/CBMiVEFVX3lxTE5yRHB2NTU5MTVscVRWNEhkYU5fODhIZ25hQXZvVVNtRHZCbVI0ekVhelZxeWZreE5iQ19CaWc3VkNXZFd6V3RkM1p3NGRBd0NOa21YMA?oc=5" },
  { id: "shein_013", title: "SHEIN启动大码女装专项招商，诚邀优质供应商共拓千亿蓝海", content: "SHEIN启动大码女装专项招商，诚邀优质供应商共拓千亿蓝海", source: "中华网", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-22"), url: "https://news.google.com/rss/articles/CBMibkFVX3lxTE9RRmRWLWh3VG9nS2FsdHBkb0JzRXNJVlZWb3RKd3hnRGhJNlZ3V0sxMUlVaFFjQk1SUGNjUXJLbDhxRXRjdEp1X3lLaUV5Rno3RTBEQ2ZIWUh3bUtleFc0RDhKZ3ZKbEFKajVLcEZn?oc=5" },
  { id: "joybuy_038", title: "京东 Joybuy 在欧洲六国上线，推当日达服务挑战亚马逊", content: "京东 Joybuy 在欧洲六国上线，推当日达服务挑战亚马逊", source: "白鲸出海", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-04-22"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE42NTBEQzR6d1NnaHQzbHhVckVmZTRNNkNUUkprQzN0Y2RZQk9tYWVzRFZUcTAwaFpCRFNZVnJtdzNpdklRcGVZdnViQUJQSXZJVFJVS2E2VDg?oc=5" },
  { id: "shein_014", title: "抓紧自查SHEIN加强欧洲合规管控，不合规商品面临下架风险", content: "抓紧自查SHEIN加强欧洲合规管控，不合规商品面临下架风险", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-21"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE12T3Y3U3lYN2pkZklGVXp6eGlMdjdOcUtXdTFONm92YmpkcjAyUENwWTRQLWE3bjVVTW5HOGM2c2VXbDFLRml4NWlaSUg?oc=5" },
  { id: "temu_067", title: "TEMU欧洲站点验证升级：强制对公与视频审核多数卖家账号受限- 快讯", content: "TEMU欧洲站点验证升级：强制对公与视频审核多数卖家账号受限- 快讯", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-21"), url: "https://news.google.com/rss/articles/CBMiVEFVX3lxTE8yaUlHOW9yZmtGRURKT01oMU90QkdTV0ZYRGZwVlFvazBZMHJWWFl6ZmF3cnlaQmNUQXhLeWNuVnV0bXNKRzBNcVk3MEMxUV9NNnVQRg?oc=5" },
  { id: "tiktok_029", title: "ByteDance's Overseas 营收 Share Reaches New High in 2025; AI Investment Triggers 70% Net Profit Plunge", content: "ByteDance's Overseas 营收 Share Reaches New High in 2025; AI Investment Triggers 70% Net Profit Plunge | Exclusive", source: "eu.36kr.com", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-20"), url: "https://news.google.com/rss/articles/CBMiU0FVX3lxTE5tUE1NR3hvUEd2Sll2WjVidjR3V3Rhak5qaWFTRVVlV01GSHVMcTJMNWd2TmdRWnFwam1mazNYN0hMT3ppeS1TLVJQdzh0ME1NWk1N?oc=5" },
  { id: "tiktok_031", title: "TikTok电商“一商卖全球”再升级，2026年跨境新玩法来了", content: "TikTok电商“一商卖全球”再升级，2026年跨境新玩法来了", source: "新浪财经", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-20"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxQNHNJd3NNT192TWQ0c3pJS0praVlaSzBTdnBNMVVYd2gyQlRkeHRvTWt2SmpEdzh0SHM2M3UzdnBRb3J4bzNjNWxnWUdIZDBXS1JqY2t0XzAtck4tRl9HSFdhNmpvQkJyUmxuLUk4aC1tdWdvNTJ6eVBuRk5taXFJWUhCOG8?oc=5" },
  { id: "joybuy_041", title: "全球最高标准京东物流斩获国际软件研发“诺贝尔奖”", content: "全球最高标准京东物流斩获国际软件研发“诺贝尔奖”", source: "新浪财经", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-04-18"), url: "https://news.google.com/rss/articles/CBMieEFVX3lxTE9SOGgybmowUzJOWldvUVlKaVFoMXVBQ1pJUS10Z182bjJoczNUYlVFc3pKRnpVNFpTVEZUOGI3ZXVIRzVfOFBBbTJacmExY0NIYXRFenljT01oRWlaU0tkWTRxU2dmN0tuRmZ6QlhPcURaSkRzaEFpbg?oc=5" },
  { id: "temu_002", title: "Temu 仓储 locations explained and how to start selling in 2026", content: "Temu 仓储 locations explained and how to start selling in 2026 INQUIRER.net USA", source: "INQUIRER.net USA", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-17"), url: "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9qRlhlOGsyc250dWdaemY3WjFUZHJwdWlfYTlNVWVRbGxXLUhSZ2o3cWcwUi03emh4U0FwNk5lZ2Z6a2RxZ3gxTkcweTZoVlB5UzJuZ005UlVfWUEwc2NhTnlpSDFOd1k?oc=5" },
  { id: "tiktok_032", title: "AnyMind Group Wins \"TikTok Shop GMV Max Award\" at TikTok for Business Japan Agency Awards 2026", content: "AnyMind Group Wins \"TikTok Shop GMV Max Award\" at TikTok for Business Japan Agency Awards 2026 AnyMind Group", source: "AnyMind Group", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-17"), url: "https://news.google.com/rss/articles/CBMiekFVX3lxTE5pV0JiU3FuVFozZC1jNTIwSXZBckYzN0s2UWYyeHE1dlRHYUtvRHFXQUk0dFctRTlBVDlrbDRxdEJINTc5SnJzRVpRdFRfeFNiaUZ1amt5emRMeFQ0bHh5VWxUTV90d1RGWm0xUXdsOUdIbFFOTV90aXpn?oc=5" },
  { id: "aliexpress_063", title: "“跨境四小龙”激战品牌出海，速卖通要做全新主场", content: "“跨境四小龙”激战品牌出海，速卖通要做全新主场", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-17"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1XaWtXc1B5ZDhuQ2FKWTBKWjBWLUF3d21ra3dqRUJ1VmF6WHZyc050N1RZQTJGdHo5c0JfZ0dGcXZvaUVybW51Mm5yRU4?oc=5" },
  { id: "temu_004", title: "Shein, Temu Face Class-Action Lawsuits Over 关税 Refunds", content: "Shein, Temu Face Class-Action Lawsuits Over 关税 Refunds", source: "WWD", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-16"), url: "https://news.google.com/rss/articles/CBMipAFBVV95cUxNY0dobkFGMTg3TW5yRExSZTF4MHQ1dmVRMVVTZUxHX2ZjWVFLSDdVZEtxMW1OV2NsM2ZXNW9FeWduREp6cUI5MHktSzZMX1dkVmVDd1VwdWlxV2NfR3FGQVJDazVXMDB6V2lDY0NFSk1uaXU3VGpmSzk4S2NIQkI4aWZ3MDFJMkRwYk5rSF81U2s2UndUbjdhRlhmY2F5XzBWMUJkTg?oc=5" },
  { id: "shein_017", title: "Shein turns to Hong Kong for listing amid London IPO hurdles - report", content: "Shein turns to Hong Kong for listing amid London IPO hurdles - report", source: "MSN", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-15"), url: "https://news.google.com/rss/articles/CBMi9wJBVV95cUxPa2gyend3Q2QwTXlhYjhxZmdDaTlEcXVuekkya3JvR1c4UVRmekZORnNHN0NfZ0dSekhmQW0tanlFOTJLNzc2b0NidTVFRzItVWlGbmVEN1RSTkZLLTkzMUdqUldwSUxrZlpHcG9aWlh1TFFvYXRfaFdZYTAzdEJDUm5qLV9HSHdFMEJpQUR0V25KanlMakhDVGU4STRaYUE5aWxDX2RHNUx1V1dSWFViQ2pBQVk0RU5JZ3p2d1lxUTAtdFRwdS14cUp4SDdQVkRoSTJCM2NWVnJSU1FhN0xNdzdNYS13NHBHbktBOVRnYU1ZLWpTRElvdFZoYkZaQkhNNm1Kbmc1ZkIySGhGMmdXdUFMbzVpTk5vVjRwSXZORm1hNUpNNmZWX0ZMM0Nnal80Q1U4OFVxWkpmMzdxOGhBckJXS3FRYi1GY2Y1NU5tRkMxRjJCV1NlYTFMelltQ3NmNzdDZlUwb3BBVUtmV1dwNjcxZ0FYSTA?oc=5" },
  { id: "temu_007", title: "拼多多Temu横扫波兰，强势登顶流量Top1", content: "拼多多Temu横扫波兰，强势登顶流量Top1", source: "新浪财经", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-14"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxQeGd4ME1pY1ZEY1ljVURhV1RlV2hKU05KTi0tUk43NEVBVlhFbDdXX21UMnF1VHhhWmZlaXhnVExUZ01Jblc0bUlla0JBVFJqbGJ4Q0ZBdW5veThwZERudUtCTFlQTWVwRnlxV3VxNVMwdGFLN1ZoTTd6QUotc1kzRHNpS1U?oc=5" },
  { id: "joybuy_042", title: "正面硬刚亚马逊 京东再进军欧洲推行“211”配送，欧洲人买单吗", content: "正面硬刚亚马逊 京东再进军欧洲推行“211”配送，欧洲人买单吗｜欧陆志", source: "新浪财经", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-04-14"), url: "https://news.google.com/rss/articles/CBMihwRBVV95cUxNWFpCMjBBQzRXX1p6Rzd3cnVVaThCZ0lZekhPRUY3elFsY01STWlXemhzeFpqcDJyYjBkWU9ERTQxS1VVa2ZPRnhWQ0tyQmNDQk1sWDMxR2RGeE9YWm80WFloM3BhZFZCSEt3WnMzT3ZKY1MxU0NSQ1B5bEs2RGowOEFOcW1oQjFwLXJFT1YtdGw2YWQ0d2lmLWpjamtVRjM4LWNENUZRVWp6blFOS3c2TFpQNkNocjRoaHFuOElvNEkzQnUwNlExTHRYb3FBMWVJdmJOQTFxU2JLb0p2Q0F6b0VtMXhxWV9EeEhqWUh1dnhfbXU1Tk1LNnIyaGdoWi01Rzc1UmVJWjBock4yVGxLQmhMNHRRN242N0F1bTMyVDBDUDlXNzlldGZkci1ULS1RUmxERkxrVUhLc19kMWU2MmJtcnk5Sjd0ODVXMzJ1VFpLRVpWd1piS1JpMEdSeTU0NE9rTU80ZEF0amV4bjN6LXEtRWpLcnltbXFySHRGNnY1eHpUWjNJOGMta1E0WnI5NUFmMDB6Yk1EdmJjanlwcVExS190YlZCSk02dDJSNGJGa2pDaEhpOG83QmJzYk9UbmYwVklEZ0w1eUJwUmZXVUhvMkFUelB5bW45aDN0YmNpXy1rNTdQbkk4N0wwNWZXc216QUtZRlA2X01scnF4cmlMcGVCaEU?oc=5" },
  { id: "tiktok_033", title: "TikTok Shop to Host Annual 卖家 Day Summit With Commerce 策略 Sessions, 2026 Campaign Roadmap", content: "TikTok Shop to Host Annual 卖家 Day Summit With Commerce 策略 Sessions, 2026 Campaign Roadmap Net Influencer", source: "Net Influencer", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-13"), url: "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOVmFlbWdaWF9SWUhsSGtwTWlsM1pwNnNhc2ljdE1KejdISnFwbHJIZmd3SGVWV3MtcFBTd1cwaWdZb2RvNVRHdnRFUTNsQzVGY1NybjI1V3lWVkhZcWVHdmFwcUZObG82cmkzVDVJMFlhclB1QklIVWtiQjBnMEZGOUFFZXFDQks4TE5FaHhXMmdWQXFsZGVzNkFJc2JEN3E0aEFBMlZIb2ZKMEpFdHg2T2tDaHNZMjZfcHo3VkhIYXM3RklaajkwYw?oc=5" },
  { id: "aliexpress_062", title: "阿里速卖通品牌出海顶级峰会，只有99个品牌受邀参与", content: "阿里速卖通品牌出海顶级峰会，只有99个品牌受邀参与", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-13"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE4zSEJkMWxCMWdTaTNxakhwT3B2SW1XUUx4dFQzTUJ4aEh5VTJ1bVZTQnVmZklrc1RsMWFYUFRnZlA2Q3lMMUtnSVFLVVo?oc=5" },
  { id: "tiktok_034", title: "AI赋能跨境蓝海 Xpand Boom亮相TikTok Shop官方出海AI 赋能专场", content: "AI赋能跨境蓝海 Xpand Boom亮相TikTok Shop官方出海AI 赋能专场", source: "新华报业网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-07"), url: "https://news.google.com/rss/articles/CBMia0FVX3lxTE42WFRWNnJnSDFMYTZrOXMtMHV2MTRuTGpKODhtckw1c2YwUlVuTmRab3dRTThfVGVHNnRIR1JVUWVhNlVveTN1cnR5VkRYLXh6WXBWR2VGRHV6bl9uRmluUWVXbi1iLUtMWmdj?oc=5" },
  { id: "shein_019", title: "加强物流管控SHEIN将于4月中上旬限制美区商家自发货功能- 跨境电商", content: "加强物流管控SHEIN将于4月中上旬限制美区商家自发货功能- 跨境电商", source: "亿邦动力网", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-02"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1INy1tWEFJZXgtYXhaN0VKQU0zR1drRTJNc19EWU9BMC1JR2otRjdfV01BSTVsM1U5eDlsWnRMUUN6a01OSDRMRkZCYkwyZkZIbnVaS01n?oc=5" },
  { id: "joybuy_043", title: "3月跨境电商：京东上线Joybuy TEMU用户直逼1.3亿欧盟电商强制“一键退货”", content: "3月跨境电商：京东上线Joybuy TEMU用户直逼1.3亿欧盟电商强制“一键退货”", source: "潮新闻", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-04-01"), url: "https://news.google.com/rss/articles/CBMic0FVX3lxTE9OVkNHeExaNUZjSXEtUDhMeHVWcGdCU1RvMVJjSE83MGVXSWdSc005dTYzYnJHY0VyaHM2RHgyZ0RFc21BTEdqMXQxbHpJZktMd0RuVjNfb2R5TWtQRkRWQ2RKbU52RE5ndUJ3bXVGNmFSUlE?oc=5" },
  { id: "aliexpress_050", title: "男女服饰行业泛欧独立运营通知-AliExpress速卖通新手指南", content: "【重要】男女服饰行业泛欧独立运营通知-AliExpress速卖通新手指南", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-01"), url: "https://news.google.com/rss/articles/CBMiWkFVX3lxTE8yaGROaXo2QmRNQ2RGY3hFTW1jeGhSMnJacl9taFhSYml6OW1pdUJiVHgtSVJMcGc0NDRIZFBaSWhwbnFwU2F2T1FVbGhTVHpHV0tpVC1hcEpadw?oc=5" },
  { id: "temu_008", title: "Pitney Bowes 推出 Temu 集成 Within ShipAccel®", content: "Pitney Bowes 推出 Temu 集成 Within ShipAccel® Business Wire", source: "Business Wire", type: "press", platform: "temu", dimension: "", date: new Date("2026-03-30"), url: "https://news.google.com/rss/articles/CBMisgFBVV95cUxPNXlDZHluZDdaYWltUXI3UUhTeGNENnF2YkVNTjZrSnRuZTFGUURlSTMtZEJkUmtjejlVcjVGY3BTRVo1UUVENFVpVjdXRGMyazBBVU50Ty1peUxLVUdNT3BzLVlFNkt5RVo4enZBWE13N3J3cFVtTHBXNWQ0MElWTmxRbjRNSUZBaEh4WHZUMDktVHBmbE1hX3VudFFFeGpxemJVTzZVUVpVY0x5VjFXNjNn?oc=5" },
  { id: "tiktok_035", title: "TikTok Shop欧日月活用户突破2亿 跨境POP商家年增长7倍", content: "TikTok Shop欧日月活用户突破2亿 跨境POP商家年增长7倍", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-03-28"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1VZTBKbW83a21PRmZMQWdGakNKZnRUNHFTMGFzQkF2UkNoRUVLZWdKUFU1cG16ZHZzRWNnZTZTT3BQT1VaUTJIVFdZVEVCRUkxdHhKQ1pR?oc=5" },
  { id: "shein_020", title: "How is DHL Helping Shein's Green 供应链 Transition", content: "How is DHL Helping Shein's Green 供应链 Transition 供应链 Digital Magazine", source: "Supply Chain Digital Magazine", type: "press", platform: "shein", dimension: "", date: new Date("2026-03-25"), url: "https://news.google.com/rss/articles/CBMigAFBVV95cUxNalJfZ2RXVHl6dFdxam02M091UktpMjdsalJzN3ZzOEx0UldMbmlNaEU3UDRYS05aNzFZaDFQVGFrZ19oTnZkem4wQlVhMzlSOGs4TWFTa1dJV1ZUaXRXSmo2U09tR2lMaUUwMThPaXIyaUpIR3Y4MTUtZzlDa0hOVA?oc=5" },
  { id: "aliexpress_051", title: "阿里速卖通和奥地利邮政签署MOU，加强欧洲本地履约服务", content: "阿里速卖通和奥地利邮政签署MOU，加强欧洲本地履约服务", source: "cn156.com", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-03-25"), url: "https://news.google.com/rss/articles/CBMiXEFVX3lxTE1wNlFUdEFVbDI4RFRkeDkyS1p6YVBMU1ZuaHFzOHlUcm5NZlhTRzdTWVpFbTFOZjJ2X0pRcENQYkFwZU1oTC1WTmdheFlrM1Jicm9WeDZ2MFBvT3R0?oc=5" },
  { id: "shein_021", title: "DHL快递与SHEIN签署\"绿色航燃\"协议， 共促跨境电商物流更可持续", content: "DHL快递与SHEIN签署\"绿色航燃\"协议， 共促跨境电商物流更可持续", source: "美通社", type: "press", platform: "shein", dimension: "", date: new Date("2026-03-24"), url: "https://news.google.com/rss/articles/CBMibEFVX3lxTE9QZUNHaElLcXgyOFZ2RmNQVURQTWw1bGttLWZsSTdtY2t5MmpwQkRQYk9RTXFMV09aRmk4YkJYM1NMU1QxbzFWWUxZLURITkNEaFV6bHZYbDlxVldiNzBGZmJtVGRTRTNVbEpBSQ?oc=5" },
  { id: "temu_009", title: "Top 10 电商 电商平台s in 2026", content: "Top 10 电商 电商平台s in 2026 电商平台 Pulse", source: "Marketplace Pulse", type: "press", platform: "temu", dimension: "", date: new Date("2026-03-19"), url: "https://news.google.com/rss/articles/CBMihwFBVV95cUxOOWoyZ0hpYXV6V3dWMVZnLXUtR1NQNzVXcFNFTTFiMmJlNU5xV3E5T0VYY0R5RkdPZXpTV1dKZE1BbWNMd1lIaEZjYWUwLXZUNGZCWGxLLUpqb1U1dWxmTVg4WHRIQ09ja3lIWUZPYnRxUEdVS1dHenhLVnRpR1NSTzEyYlFIT1k?oc=5" },
  { id: "joybuy_046", title: "DHL and JD.com Sign Strategic MoU to Bridge German Brands with 600 Million Chinese Consumers - LM", content: "DHL and JD.com Sign Strategic MoU to Bridge German Brands with 600 Million Chinese Consumers LM - 物流 Manager", source: "Logistics Manager", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-03-17"), url: "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQYUk5ZmV6aE52QkxianJpSnYxd0ZjeDFHbnZ2V2VwMmNpZUdFNklQeFduVndzb2hmRmJaa0owdmVNYmQwOTRMbVFsNDJkWFZaM2w0Y2d3a0xNOHpoM08xNy15YmMzanlMcWdHekozZkdIeERkVG5vWkFqTkpxcnVHaXo1eWZmblhrMTVxLS1NM1pTa0w0UThwUnZ6S0R2SVF1c19vNWd2NlFPRHpRd3FsVG4xajVlVUx0ZE85Sm5icVY?oc=5" },
  { id: "aliexpress_052", title: "DHL携手速卖通欧洲物流网络再升级助力跨境电商- 快递圈", content: "DHL携手速卖通欧洲物流网络再升级助力跨境电商- 快递圈", source: "expressboo.com", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-03-17"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5NakZ6RnBHYThXUTRxd0c1MXhJeUh5OUpobHRXWndYZ2ZBXy1jX3lMVUdkQlA4LVExaXdjcE9heGt1UnlaNWJ6S1dSeFZVclR3VWZJQ01JT0c?oc=5" },
  { id: "shein_023", title: "Shein tried to shed China. Its IPO now hinges on embracing it", content: "Shein tried to shed China. Its IPO now hinges on embracing it Tech in Asia", source: "Tech in Asia", type: "press", platform: "shein", dimension: "", date: new Date("2026-03-16"), url: "https://news.google.com/rss/articles/CBMickFVX3lxTE5aZlNnaFBJUUFBY2RHb3J1N2ZiOWdWUTlCTzZTWERXaWFSak5kSHJRbzIxaTR2UHBLOEo5UzNuTHBsbDNTVnBCN0ZRMmNSUl81YkFUbjhRS2hXNkx3TW9QTDAycFVJc3JEcXllVXdib0J6Zw?oc=5" },
  { id: "shein_024", title: "Shein Wants Brands to Use Its 供应链. Should They", content: "Exclusive: Shein Wants Brands to Use Its 供应链. Should They The Business of Fashion", source: "The Business of Fashion", type: "press", platform: "shein", dimension: "", date: new Date("2026-03-12"), url: "https://news.google.com/rss/articles/CBMi7AFBVV95cUxQQWltV2toLVVPOTlWM2FvdE9pZTZUTUpSbUxOVXlGYXhTVzhBaVRadzB3cEN0dDVaOThhdVVJejducHpNV0VEbjI4Y1ktRDc3eUJLYXVkTXFNRnFkYXh2U296M2ltU0wxdDk5bGRNajRlWEl4SlZvMDFjVV9PRXotN3pzSXNvS1YwMlZNTFAtWHpsMklVUjZwem5LLWJxLS01M0t4Rmp6SDFfNTY5dnVVdU1lMWlQWWkyTWtYVEZUTktkbENaU1dhOGc2UnhpaU5GUzZCSzJGeTdIQXdaNjEyWkgyX2pzT2lpYjVNRQ?oc=5" },
  { id: "temu_010", title: "America and China's biggest online shopping 平台s send 'delivery warning' to customers in Middle East", content: "America and China's biggest online shopping 平台s send 'delivery warning' to customers in Middle East The Times of India", source: "The Times of India", type: "press", platform: "temu", dimension: "", date: new Date("2026-03-03"), url: "https://news.google.com/rss/articles/CBMikwJBVV95cUxOMGU0Z1ZXcXhvMmxPcVRrbVMycmFyOUZYb09aNWQyUGZoNFhKaWl1TjJNZ1dWQ2l4OUg5enp2WUtWR0VjWHJ3NmNkMGZCZ3BhdzBwdy1PVG81dE9oRjVfRllhU3VTSEFLLVZIVTZFbG5OV2hGLU4wZXFwMVloYUllckllZjFVblA3eno0ZnlYcnBtUEVaZ0FQNVVHNXRwaUczTmRjZ3M0VVY1cFBiaElxMTd5RDRnS3FYbUVzdUZPSzhTaXhiZk5QNnlzc19LQlk1VmRCWEhndXNCNHNrQ3k4NW5mbFJZVHVPM3JiRGljd2lsTlczc0NfcWp4R3czbnhaaVFmQ1kxdk9wcEdzdmk2SUVFSdIBmAJBVV95cUxQeG5TRzFxY3Q0VWdQM0xKX2hRcUxJMlA0T3dEZmlrVjNNNUFjRHpKTGFYUHN5Zll4cFhOR3VjMFdCWWNuOWJSeFJGM3Z4cm1kYnM2ekNiajFIV0MzSWFFVFJnNGptd2JLSUpsWkhjdUpUUVFGS05qa2x5OUlhZEJrYWl3YnNqbGFIN1AyYlRNWGJlTHB0MkE0NFJZWENQQ09lcE5VRXZLUnJmTDdhY3BuWUk0SXBIVGl6eW5GUDUzanhGaUl6dE8zVXpoQVJxOVZUQ1VvanFVNmtKZko4RDZVOVR1MUZQUERlajhrYU5Rb1FSaFFwdGhNOERYc0dHVnpoLVpMQ3p2MHIzUmtVOEVyZkZsTVFmTHNv?oc=5" },
  { id: "temu_011", title: "Yep, the de minimis 关税 exemption is still suspended", content: "Yep, the de minimis 关税 exemption is still suspended", source: "marketplace.org", type: "press", platform: "temu", dimension: "", date: new Date("2026-03-03"), url: "https://news.google.com/rss/articles/CBMiowFBVV95cUxOMXZwRU00QVFiVzNERjZaZ002cDdMNlZ6aTJlMGxOangzcHg1cEp2Tmd1Mmk1R05Ka2pxM2tQeE81XzJUU0dYYWt2U0tmSlViM0hkVVp2YXJPV2RLZTlGUGxKM3FkTVJiRlNuQURZbmJNbngxOS03RWZxbVhyWHFGUHpYaWNaaUhvQWE5LWxMYXdLcXZaU1h3Y1VuR25TZVpCMGc0?oc=5" },
  { id: "temu_012", title: "Temu 的物流速度是比较大的卡点，目前也在参考拼多多经验进化", content: "Temu 的物流速度是比较大的卡点，目前也在参考拼多多经验进化", source: "雪球", type: "press", platform: "temu", dimension: "", date: new Date("2026-02-23"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE16S2xoaVhDM0xRVWdZR2hBLUpRYVFpM3ZBTHhfM2RFcm5uZ1lXWDdEQmFpQjdkR1RiMXNOVU43emhWNlFPb2hKUWpLbC1HSS1R?oc=5" },
  { id: "temu_074", title: "中国公司全球化周报｜阿里云出海竞争力增长指数登全球榜首/Temu与匈牙利邮政达成合作", content: "中国公司全球化周报｜阿里云出海竞争力增长指数登全球榜首/Temu与匈牙利邮政达成合作", source: "36kr.com", type: "press", platform: "temu", dimension: "", date: new Date("2026-02-08"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBHTURveDJnN1E5TkxJQ3VIQm1VZjFWQTRZZk5CNDFTR1B4X1YxUVI1Yzh4aUVfenVQWDJzbG1zTGdGZWI5bDdreWxwNXR2UQ?oc=5" },
  { id: "temu_066", title: "不再追求爆，而是不死Temu中小卖家在2025年的集体困境", content: "不再追求爆，而是不死Temu中小卖家在2025年的集体困境", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-02-07"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBrTnl1M2ZpQnlIdGNZWHkxYVdobV9GbjFibFhQa1dtb3VTMjd1UXJsRHhRRjB1OGNUUkVId0JjQlM4UHV4TTJ4VG5HVHU?oc=5" },
  { id: "aliexpress_053", title: "速卖通推巴西三大利好：跨境退货保障、本地VIP物流服务、超级单品补贴", content: "速卖通推巴西三大利好：跨境退货保障、本地VIP物流服务、超级单品补贴", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-02-05"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE5NcUZXMVlJUWhRdVlvTWE4LW1JcmptWGlLWlRoaTJNa1dOdC1ZOXFiRnJ0OGpIRy02bE5OV0ZMRWYxcjNBQUtBY3NwLTI?oc=5" },
  { id: "aliexpress_054", title: "Polish food business goes 全球, scaling with SME-friendly online 平台", content: "Polish food business goes 全球, scaling with SME-friendly online 平台", source: "Euractiv", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-01-29"), url: "https://news.google.com/rss/articles/CBMiowFBVV95cUxQRWVMRU9zZEpvNGJOOHUzT2FrWk5OMHJyMXdOUnBRR3dDUWRWV1NDWUFhSktMZl9DcW5JV1JJcmI2NVFteEdtOWxxRE9VdkFJWW9YR1JXTDdudlloQ2M2R2tjYkhlUUFwaEswQ2ZSa0hsZWxMVXpCeE5IWnd2SmJpS1dtcEJmYXNLOXNvdHJ3S2FLTEJOUnRjMlpjS3R3ZFc1WElN?oc=5" },
  { id: "tiktok_064", title: "2026做TikTok Shop，该换玩法了", content: "2026做TikTok Shop，该换玩法了", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-01-28"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1YaDcwcHlSZ2tlZldyZkZzRDRWWEI2N3NrWmlSTFNjblJUdGVGWUNrdmlTMzF5T3lOTGwwUlhXUm1rQUlNbXJWbnBPNnk?oc=5" },
  { id: "tiktok_065", title: "TikTok Shop美区跨境POP重磅发布“TOP计划”", content: "TikTok Shop美区跨境POP重磅发布“TOP计划”", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-01-28"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9La1QxMGlIdHlyTFcwb1U1WmVLcUg0VHIyWEVEMEEtWFVHZ3QxVUI4U2Z6YjlJTnRGdENxdWRHLWswQmZLMGJJeERveFo?oc=5" },
  { id: "aliexpress_073", title: "中国公司全球化周报｜荣耀、倍思、努比亚等50+品牌签约速卖通品牌出海/《明日方舟：终末地》全球公测，阿里云提供技术支撑", content: "中国公司全球化周报｜荣耀、倍思、努比亚等50+品牌签约速卖通品牌出海/《明日方舟：终末地》全球公测，阿里云提供技术支撑", source: "36kr.com", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-01-25"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1fV1pLT0Itc0w4MkJMVVZiLVFwYlBHNFAtMWw1WnpNVlV2VE1TQkhEZU5jX3d5aUU0WUFJYVFoOGV2dkJEV0dyeG1uWEZrQQ?oc=5" },
  { id: "aliexpress_055", title: "New EU 关税 to hit Temu, AliExpress, Shein orders in Hungary from this summer", content: "New EU 关税 to hit Temu, AliExpress, Shein orders in Hungary from this summer Daily News Hungary", source: "Daily News Hungary", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-01-21"), url: "https://news.google.com/rss/articles/CBMifEFVX3lxTFA4dEticWRnM2ItSUFNb3BXa0VCZnlhakhXWWNYVWx2Rjl3ajF1Rklja1M2c2pCbENyVmJWbEZwdkhTOUZXN1pTd3V4V19kUThYelVsdFZqQVc5bVBQeUxpdVltTmtlbV9UVEVDTDZoSVR5YVktY2lHekpIU1Y?oc=5" },
  { id: "tiktok_072", title: "中国公司全球化周报｜TikTok Shop在欧洲四国推出本地托管模式/创想三维携手阿里云优化3D打印云服务", content: "中国公司全球化周报｜TikTok Shop在欧洲四国推出本地托管模式/创想三维携手阿里云优化3D打印云服务", source: "36kr.com", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-01-18"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBqUDFNcnQxU3hjNGhKU3NscVBZd3o5N2hjcDU2aUtJMDVJX1dxY2o0S09Pb0syTE5fa2Qyd1hrNElBNlNnUXdXOUdldE8zdw?oc=5" },
  { id: "aliexpress_056", title: "小米押注阿里速卖通背后：中国品牌出海转向品牌价值争夺战", content: "小米押注阿里速卖通背后：中国品牌出海转向品牌价值争夺战|出海观察", source: "财联社", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-01-06"), url: "https://news.google.com/rss/articles/CBMiSEFVX3lxTE5ieW9pNzg2ZUJrTkxlVkl1NUQ0RU54T1p0ZkpCZFVvNXhIS3dEU1hXRTVyWUJVUU9vejNGcDV2S3lwTlFxWXY1Tg?oc=5" },
  { id: "aliexpress_071", title: "36氪出海·行业｜出海四小龙2025新战事：速卖通攻入亚马逊腹地", content: "36氪出海·行业｜出海四小龙2025新战事：速卖通攻入亚马逊腹地", source: "36kr.com", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-12-03"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5YY1lZd2ZXakxBT3BKX3Q3SDh2anRRdHNBU1hJMkhPa0VaWTJqWi1Uc3Jpb1BWd3JqTlQ2UXFVVEJabXEzT0F6dDNaMS1tdw?oc=5" },
  { id: "aliexpress_057", title: "AliExpress Cleaning Appliances: 85% 增长 Rate from OEM to Overseas Brand 扩张 | The Latest Frontline", content: "AliExpress Cleaning Appliances: 85% 增长 Rate from OEM to Overseas Brand 扩张 | The Latest Frontline", source: "eu.36kr.com", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-11-28"), url: "https://news.google.com/rss/articles/CBMiU0FVX3lxTE43d0dmVHh2VFBOa2dTZFVKTGgtTW1HSDFrWjR6NWxuX1ByaXB2ZzRibEQ0eGEwWnpITm4wVTczVnptNXhoVzRDX0hTNnlTN0VfaDZ3?oc=5" },
  { id: "aliexpress_060", title: "Powering 欧洲's 卖家s: How is AliExpress accelerating 增长 for 欧洲an brands", content: "Powering 欧洲's 卖家s: How is AliExpress accelerating 增长 for 欧洲an brands", source: "Euronews.com", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-11-04"), url: "https://news.google.com/rss/articles/CBMixwFBVV95cUxNNXdENlFPY1FXekVJOUhxbFRETGhFb3ppTTBSM2FQYks0OU9scUNJZ3hsSWQ5MEU1dHR2UVJ5WGNGTGlLaWxQbEFOZWtuZGlKMzhvaXpBMlZPV2JZeVhYcXhHQzgtdTAwd0lVZE1OM1RVeXNOQXE0ZzRUd3ZTeV9QdmN4aVVZZ0p1SW8zZ2tVc0llNnlkd0p6RE54SGVpek1YZ2ZESklra2dBblNMNlB1UHhadlA2d3BHbE1XTlNIM1JmZzhnUUEw?oc=5" }
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

    // AI disclaimer banner
    var disclaimerEl = document.getElementById('vosDisclaimer');
    if (disclaimerEl) {
        disclaimerEl.style.display = 'block';
    }

    // 渲染目录
    tocList.innerHTML = vosData.map(function(item) {
        var verifyIcon = item.verified === 'official' ? '✅' : '⚠️';
        var topicLabel = item.topicLabel || '';
        var layerLabel = item.layerLabel || '';
        var aiIcon = item.aiGenerated ? '🤖' : '';
        return '<li data-topic="' + (item.topic || '') + '" data-layer="' + (item.layer || '') + '"><a href="#' + item.id + '"><span class="toc-date">' + item.effectDate + '</span> ' + verifyIcon + ' ' + aiIcon + ' ' + layerLabel + ' ' + topicLabel + ' ' + item.title + '</a></li>';
    }).join('');

    // 渲染详情卡片
    grid.innerHTML = vosData.map(function(item) {
        var verifyClass = item.verified === 'official' ? 'verify-official' : 'verify-unconfirmed';
        var verifyText = item.verified === 'official' ? '✅ 官方已核实' : '⚠️ 待官方全量公告';

        // Alert level border class
        var alertClass = '';
        var alertBadge = '';
        if (item.alertLevel === 'critical') {
            alertClass = ' vos-alert-critical';
            alertBadge = '<span class="alert-badge alert-critical">⚠️ 紧急</span>';
        } else if (item.alertLevel === 'high') {
            alertClass = ' vos-alert-high';
        }

        // AI generated label
        var aiBadge = item.aiGenerated ? '<span class="ai-badge">🤖 AI 生成</span>' : '';

        // Layer badge
        var layerBadge = item.layerLabel ? '<span class="layer-badge layer-' + (item.layer || '') + '">' + item.layerLabel + '</span>' : '';

        // Sentiment indicator
        var sentimentClass = 'sentiment-neutral';
        if (item.sentiment === 'negative') sentimentClass = 'sentiment-negative';
        else if (item.sentiment === 'positive') sentimentClass = 'sentiment-positive';
        var sentimentDot = item.sentiment ? '<span class="sentiment-dot ' + sentimentClass + '"></span>' : '';

        // Source priority badge
        var sourcePriority = getSourcePriority(item.source);
        var sourceBadge = '<span class="source-badge source-' + sourcePriority + '">' + (item.source || '') + '</span>';

        // Confirmation badge
        var confirmBadge = '';
        if (item.confirmationCount && item.confirmationCount >= 5) {
            confirmBadge = '<span class="confirm-badge">🔥 ' + item.confirmationCount + '人确认</span>';
        }

        // Blind spot badge
        var blindSpotBadge = '';
        if (item.insightType === 'blind_spot') {
            blindSpotBadge = '<span class="blindspot-badge">🔍 盲区发现</span>';
        }

        // Unverified indicator
        var unverifiedBadge = '';
        if (item.aiGenerated && (!item.links || item.links.length === 0 || !item.links.some(function(l) { return l.url && l.url.startsWith('http'); }))) {
            unverifiedBadge = '<span class="unverified-badge">⚠️ 待验证</span>';
        }

        // Intelligence briefing header for multi-source topics
        var briefingHeader = '';
        if (item.crossSourceCount && item.crossSourceCount >= 2) {
            briefingHeader = '<div class="briefing-header">📊 综合情报 | ' + item.crossSourceCount + '个来源</div>';
        }

        // Pain points
        var painPointsHtml = '';
        if (item.painPoints && item.painPoints.length > 0) {
            painPointsHtml = '<div class="vos-painpoints">' +
                item.painPoints.map(function(p) { return '<span class="painpoint-tag">' + p + '</span>'; }).join('') +
            '</div>';
        }

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

        // Source breakdown (collapsible) for briefing cards
        var sourceBreakdownHtml = '';
        if (item.sourceBreakdown && Object.keys(item.sourceBreakdown).length > 0) {
            var breakdownItems = Object.keys(item.sourceBreakdown).map(function(src) {
                return '<li><strong>' + src + '：</strong>' + item.sourceBreakdown[src] + '</li>';
            }).join('');
            sourceBreakdownHtml = '<div class="source-breakdown">' +
                '<h4 class="source-breakdown-toggle" onclick="this.parentElement.classList.toggle(\'expanded\')">📰 来源分析 ▾</h4>' +
                '<ul class="source-breakdown-list">' + breakdownItems + '</ul>' +
            '</div>';
        }

        // Seller consensus
        var consensusHtml = '';
        if (item.sellerConsensus) {
            consensusHtml = '<div class="seller-consensus"><strong>🤝 卖家共识：</strong>' + item.sellerConsensus + '</div>';
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

        var cardClass = 'vos-card' + alertClass;
        if (item.crossSourceCount && item.crossSourceCount >= 2) {
            cardClass += ' vos-briefing-card';
        }

        return '<div class="' + cardClass + '" id="' + item.id + '" data-topic="' + (item.topic || '') + '" data-layer="' + (item.layer || '') + '">' +
            briefingHeader +
            '<div class="vos-card-header">' +
                '<span class="vos-rank">TOP' + item.rank + '</span>' +
                (item.topicLabel ? '<span class="dimension-tag">' + item.topicLabel + '</span>' : '') +
                sourceBadge +
                '<span class="vos-date">' + item.effectDate + '</span>' +
            '</div>' +
            '<h3 class="vos-title">' + item.title + '</h3>' +
            '<div class="vos-summary"><strong>影响说明：</strong>' + item.summary + '</div>' +
            painPointsHtml +
            voicesHtml +
            comparisonHtml +
            sourceBreakdownHtml +
            consensusHtml +
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
var currentLayerFilter = 'all';

function filterVOS(topic) {
    currentTopicFilter = topic;
    // 更新按钮状态
    document.querySelectorAll('.vos-topic-filters .filter-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    applyVOSFilters();
}

function filterVOSLayer(layer) {
    currentLayerFilter = layer;
    // 更新按钮状态
    document.querySelectorAll('.vos-layer-filters .filter-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    applyVOSFilters();
}

function applyVOSFilters() {
    // 筛选目录
    document.querySelectorAll('#vosTocList li').forEach(function(li) {
        var topicMatch = currentTopicFilter === 'all' || li.getAttribute('data-topic') === currentTopicFilter || !li.getAttribute('data-topic');
        var layerMatch = currentLayerFilter === 'all' || li.getAttribute('data-layer') === currentLayerFilter || !li.getAttribute('data-layer');
        li.style.display = (topicMatch && layerMatch) ? '' : 'none';
    });
    // 筛选卡片
    document.querySelectorAll('#vosGrid .vos-card').forEach(function(card) {
        var topicMatch = currentTopicFilter === 'all' || card.getAttribute('data-topic') === currentTopicFilter || !card.getAttribute('data-topic');
        var layerMatch = currentLayerFilter === 'all' || card.getAttribute('data-layer') === currentLayerFilter || !card.getAttribute('data-layer');
        card.style.display = (topicMatch && layerMatch) ? '' : 'none';
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

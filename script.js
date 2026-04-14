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
  { id: "tiktok_025", title: "Singapore’s 电商 平台 market 扩展 by 21%, led by Shopee", content: "Singapore’s 电商 平台 market 扩展 by 21%, led by Shopee The Straits Times", source: "The Straits Times", type: "press", platform: "tiktok", date: new Date("2026-04-14"), url: "https://news.google.com/rss/articles/CBMipgFBVV95cUxObUpGMW40MnBFUTRoWklQS3F5MHF4aFUwdG5VWVNUSHc1MGtfenlfdnV5cnlfTnpuTFVGNnRnb0pWLW16cnpnZ2NneE5OSnlQOXFVNDhiaGlNdFpyWFV0Sjd1OVlKMHhHdlpnSFV3YjIxYm1Gb04yZ01BejJ6YTVEMHRRNml2dHRHaEJ3c3M5cUdLNXZiMm5tUkF2aTNZelA2cDZ4TmZ3?oc=5" },
  { id: "tiktok_026", title: "踩准风口躺赢，TikTok全托管杭州峰会将带来出海好机会", content: "踩准风口躺赢，TikTok全托管杭州峰会将带来出海好机会", source: "雨果跨境", type: "press", platform: "tiktok", date: new Date("2026-04-14"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFA4bm1Hbl95WHR5SmlWMDJ1MF9FSHdDY2FZSXFBcGRPVTRCbnE2UTZBeXI2VTd2cjgzQ2dmX0Rkc0FXNjVJWGRtNHJTRkM?oc=5" },
  { id: "tiktok_027", title: "AI赋能跨境蓝海 Xpand Boom亮相TikTok Shop官方出海AI 赋能专场", content: "AI赋能跨境蓝海 Xpand Boom亮相TikTok Shop官方出海AI 赋能专场", source: "eastday.com", type: "press", platform: "tiktok", date: new Date("2026-04-14"), url: "https://news.google.com/rss/articles/CBMigAFBVV95cUxOWGdTM3JVdnpZVHhreFR5YjVMbkxsWFZTY0ZsUFFIUzF6ZW1XX2lJQVU2WThwaHA4X3RfakpGN2JpSk9LblprWG5ZMHpUbnptWkdxNW8zN2tfWlpNNDEtMmNFbUdDX24wNmdVN0RPaThiUncybk5XckdqZVgxLU5wUg?oc=5" },
  { id: "joybuy_037", title: "正面硬刚亚马逊 京东再进军欧洲推行“211”配送，欧洲人买单吗", content: "正面硬刚亚马逊 京东再进军欧洲推行“211”配送，欧洲人买单吗｜欧陆志", source: "SOHU", type: "press", platform: "joybuy", date: new Date("2026-04-14"), url: "https://news.google.com/rss/articles/CBMijAFBVV95cUxPbHRiUnpIb0tENlhhM0Q5WFpNYWhWcXdFTDcxV3JodHNGUHdUenp4b2gyclJLRjVlU0lrc3pMckxDaXh4bFVUMkp1Um54OW1BcDJXcm1IWVNUUi1oMHY2SGZOVkpXNGluNlpyWE8xMlpNMW9DcHN3Vmd4TzFxNlRCc1hBRm9QQU5HNXZMTA?oc=5" },
  { id: "tiktok_028", title: "SE Asia’s 电商 GMV hit $157.6b in 2025: Momentum Works", content: "SE Asia’s 电商 GMV hit $157.6b in 2025: Momentum Works", source: "DealStreetAsia", type: "press", platform: "tiktok", date: new Date("2026-04-13"), url: "https://news.google.com/rss/articles/CBMifEFVX3lxTFBXUDc4N0JhU2FfRUd6WkZqX0NsM2V5Qi1kQkVqb09qZEVGUHNVVkV3eldqbDBoWmMwUnhMcEZGU0lfLVhuSHlGZWZ0Z2hfWFN4VFpNT3hleUVwb25QZzlEMnRSMExTZVZVMExWTW5qdXVhZVZCcTFIMlNUYnU?oc=5" },
  { id: "tiktok_030", title: "TikTok Shop to Host Annual 卖家 Day Summit With Commerce 策略 Sessions, 2026 Campaign Roadmap", content: "TikTok Shop to Host Annual 卖家 Day Summit With Commerce 策略 Sessions, 2026 Campaign Roadmap Net Influencer", source: "Net Influencer", type: "press", platform: "tiktok", date: new Date("2026-04-13"), url: "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOVmFlbWdaWF9SWUhsSGtwTWlsM1pwNnNhc2ljdE1KejdISnFwbHJIZmd3SGVWV3MtcFBTd1cwaWdZb2RvNVRHdnRFUTNsQzVGY1NybjI1V3lWVkhZcWVHdmFwcUZObG82cmkzVDVJMFlhclB1QklIVWtiQjBnMEZGOUFFZXFDQks4TE5FaHhXMmdWQXFsZGVzNkFJc2JEN3E0aEFBMlZIb2ZKMEpFdHg2T2tDaHNZMjZfcHo3VkhIYXM3RklaajkwYw?oc=5" },
  { id: "tiktok_031", title: "亚马逊加码欧洲市场TikTok Shop升级“一商卖全球” | 邦小白跨境周报|商家|卖家|上线|巴西", content: "亚马逊加码欧洲市场TikTok Shop升级“一商卖全球” | 邦小白跨境周报|商家|卖家|上线|巴西|商品_手机新浪网", source: "新浪财经", type: "press", platform: "tiktok", date: new Date("2026-04-13"), url: "https://news.google.com/rss/articles/CBMivAJBVV95cUxNSUNYVGFpVzJwbUw1bUdEd1ljaDZqeVgwTURKRl9CbnVYaERMLW5UbF9oUm1UV2xCQmQzeFRsWm10SGt0bW1GRnZ2MDZSVEltQndLc2VpaDExX3dOakJDR3FnbUJENURKZ1VlR0pleHNKcy1aeHA0VGk5NHl0MHNZMHR5cU9GV3dKZmpQd2FlMXgxaENmVF8zT1hzYmlVTmtkZTNTTkhfNmtDQ09wNnJnWnNiRTZULUM4WVR1NEZFRThpa1F4dlFsSl92ZXhGcEVORXVKcjJockxTbzhRQjBISEh3MDhlbUhhcXpuQ1phLUd5VmRNeHg1dy1RY29zUnZYMmVvZTYwMVpCdGF5OHhNM1ZzWlVTWmZQTDZMNm1OWjZ6M2pGMXFXWl8yd010UFluMTRSNi1ZOHRLZmlI?oc=5" },
  { id: "shein_013", title: "SHEIN运营新店有考核吗，SHEIN保证金能退吗", content: "SHEIN运营新店有考核吗，SHEIN保证金能退吗", source: "雨果跨境", type: "press", platform: "shein", date: new Date("2026-04-09"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1ib3NlWTJUV25nMEJOMmJPNmRLb3VPbjdMUG84Q2JkdXF3RHNEUWdKSEVGMUZsY0ZaVFVRNHYtMDV6UmIzTmFOVVFxUXg?oc=5" },
  { id: "tiktok_034", title: "TikTok Shop 推出 Product Amplification Program 02/09/2026", content: "TikTok Shop 推出 Product Amplification Program 02/09/2026", source: "MediaPost", type: "press", platform: "tiktok", date: new Date("2026-04-09"), url: "https://news.google.com/rss/articles/CBMirgFBVV95cUxOMW8wcWNmd1BNM19UMm1pZUttUk0wRS1lNXZHRWk2MGR4bmRLWnZCc2loU3dqWGNXVEllUXlBYk9nU3FqVHR3azRrOFVwUWFuTTJSUnl6aUQzVEI3ZFRFaDE3ZjRfVHB6cUlKQ1UwTm05Z0xYbmZ2enU0TjN3dGdYcVBzNEstNVQ0anZlSUo0MEZOUUstRHQ3bEJraEdCT1lrcWliYW9EbXZWOFYzMVE?oc=5" },
  { id: "tiktok_035", title: "TikTok Shop加码“一商卖全球”：新增“内容全球分发”和“跨店一键铺品”功能|商家|店铺|商品|经营", content: "TikTok Shop加码“一商卖全球”：新增“内容全球分发”和“跨店一键铺品”功能|商家|店铺|商品|经营|账号_手机新浪网", source: "新浪财经", type: "press", platform: "tiktok", date: new Date("2026-04-09"), url: "https://news.google.com/rss/articles/CBMif0FVX3lxTE1GUlVsLTUxbDBuRm9TWEVGS2pMdWRtbUFWbnVFMmoxYVU4eDNSSFplV25FWTk0S0RTOFRDYUlKdDJ3ZmZwdW9nelpSQy16WFp6c3YyUE8yZFVxUklwZnJVZ1Y5cHRqQ0NLdEkzMWhxZTNidHNqMVEtRkVYb0VXQ0E?oc=5" },
  { id: "tiktok_036", title: "From wearable AI to TikTok Shop: how beauty is rewriting the retail 增长 playbook", content: "From wearable AI to TikTok Shop: how beauty is rewriting the retail 增长 playbook Barclays Group", source: "Barclays Group", type: "press", platform: "tiktok", date: new Date("2026-04-07"), url: "https://news.google.com/rss/articles/CBMiakFVX3lxTE0tc1JJUFlkRUdBWXlKV1dNU0JNQ3dmT2doSGNFWUQ4WXFLWVQ2RU9IWmZjam03SE1rN3FvQ0dFQ2ZNNExuNWVKd2NpRWhwZHJ4Qnl3bEpWSFVsNUlkWUZBTzdnbExVRHIyQUE?oc=5" },
  { id: "tiktok_055", title: "亚马逊Prime Day收费模式变更；TikTok Shop欧日月活用户破2亿", content: "亚马逊Prime Day收费模式变更；TikTok Shop欧日月活用户破2亿丨跨境电商周报", source: "亿邦动力网", type: "press", platform: "tiktok", date: new Date("2026-04-05"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1ZdHZoU0UxV0J3NEx5S2F4bmR5cDJ2S3ZBWjRGbDhlbkJGTlRUUHp4elJ0MFQ3cjJXR3ZpWEl0TTZKeEhXSEhIU1NHZ1FtWmRWcXRtV1pn?oc=5" },
  { id: "shein_014", title: "加强物流管控SHEIN将于4月中上旬限制美区商家自发货功能- 跨境电商", content: "加强物流管控SHEIN将于4月中上旬限制美区商家自发货功能- 跨境电商", source: "亿邦动力网", type: "press", platform: "shein", date: new Date("2026-04-02"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1INy1tWEFJZXgtYXhaN0VKQU0zR1drRTJNc19EWU9BMC1JR2otRjdfV01BSTVsM1U5eDlsWnRMUUN6a01OSDRMRkZCYkwyZkZIbnVaS01n?oc=5" },
  { id: "shein_015", title: "SHEIN日代新规大揭秘：不跟上节奏，商品就要“下架凉凉”", content: "SHEIN日代新规大揭秘：不跟上节奏，商品就要“下架凉凉”", source: "雨果跨境", type: "press", platform: "shein", date: new Date("2026-04-02"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1yV2hibkhEcVphcV8xcGx0N3ZXWUpBX0pyVXgtX2t1OXRVSU9rSXNxRV9iYzczdktVNUlqTkkwUlFNaTA3ZmIzZU16UGE?oc=5" },
  { id: "joybuy_038", title: "3月跨境电商：京东上线Joybuy TEMU用户直逼1.3亿欧盟电商强制“一键退货”", content: "3月跨境电商：京东上线Joybuy TEMU用户直逼1.3亿欧盟电商强制“一键退货”", source: "潮新闻", type: "press", platform: "joybuy", date: new Date("2026-04-01"), url: "https://news.google.com/rss/articles/CBMic0FVX3lxTE9OVkNHeExaNUZjSXEtUDhMeHVWcGdCU1RvMVJjSE83MGVXSWdSc005dTYzYnJHY0VyaHM2RHgyZ0RFc21BTEdqMXQxbHpJZktMd0RuVjNfb2R5TWtQRkRWQ2RKbU52RE5ndUJ3bXVGNmFSUlE?oc=5" },
  { id: "temu_001", title: "Pitney Bowes 推出 Temu 集成 Within ShipAccel®", content: "Pitney Bowes 推出 Temu 集成 Within ShipAccel® Business Wire", source: "Business Wire", type: "press", platform: "temu", date: new Date("2026-03-30"), url: "https://news.google.com/rss/articles/CBMisgFBVV95cUxPNXlDZHluZDdaYWltUXI3UUhTeGNENnF2YkVNTjZrSnRuZTFGUURlSTMtZEJkUmtjejlVcjVGY3BTRVo1UUVENFVpVjdXRGMyazBBVU50Ty1peUxLVUdNT3BzLVlFNkt5RVo4enZBWE13N3J3cFVtTHBXNWQ0MElWTmxRbjRNSUZBaEh4WHZUMDktVHBmbE1hX3VudFFFeGpxemJVTzZVUVpVY0x5VjFXNjNn?oc=5" },
  { id: "temu_053", title: "拼多多Temu将孵化自营品牌；阿里国际推电商版“龙虾”", content: "拼多多Temu将孵化自营品牌；阿里国际推电商版“龙虾”丨跨境电商周报", source: "亿邦动力网", type: "press", platform: "temu", date: new Date("2026-03-29"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBhalpBckJYWDZGZ0tJdWNKa3cteU9OMjRpek1zR013SUdvNElSV3FjaHhMU3JWUnRoYzB1Q3ZQTzdhRTNNU1FOUTd3c2ZDcG1FMmRiX1l3?oc=5" },
  { id: "shein_016", title: "梅西起诉Temu、Shein等平台中国卖家，纽约法院已受理", content: "梅西起诉Temu、Shein等平台中国卖家，纽约法院已受理 QQ News", source: "QQ News", type: "press", platform: "shein", date: new Date("2026-03-28"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9PLUZtQkE5XzRTOHJTVHdEQUxYYTJBVThEd2FiTWpKMFlmamhHZ1ZiT2MzMDhuSGhUU1czZW81QjdOZEFZOWd5TjU2MkJ0Ym1xRjZtbEFn?oc=5" },
  { id: "tiktok_054", title: "TikTok Shop欧日月活用户突破2亿 跨境POP商家年增长7倍", content: "TikTok Shop欧日月活用户突破2亿 跨境POP商家年增长7倍", source: "亿邦动力网", type: "press", platform: "tiktok", date: new Date("2026-03-28"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1VZTBKbW83a21PRmZMQWdGakNKZnRUNHFTMGFzQkF2UkNoRUVLZWdKUFU1cG16ZHZzRWNnZTZTT3BQT1VaUTJIVFdZVEVCRUkxdHhKQ1pR?oc=5" },
  { id: "shein_017", title: "DHL物流峰会：与SHEIN签署绿色航燃协议，携手晶澳科技、 海尔日日顺深化供应链合作", content: "DHL物流峰会：与SHEIN签署绿色航燃协议，携手晶澳科技、 海尔日日顺深化供应链合作", source: "美通社", type: "press", platform: "shein", date: new Date("2026-03-26"), url: "https://news.google.com/rss/articles/CBMibEFVX3lxTE8zdU9SaXNSNFRIcjZMeXh4WVY0c3EzeWNCNy1kXzhKTmhSbm55OGxHT25ZWV9PZXV5QncwUkVNcWF5Rl9tZTFNQ1BreFZsS056c21wVmE0eXBhRHNUU01IMWZkT3NXYnNoMHZkVA?oc=5" },
  { id: "temu_002", title: "Temu’s US Business Stabilises After 关税 Blow", content: "Temu’s US Business Stabilises After 关税 Blow The Business of Fashion", source: "The Business of Fashion", type: "press", platform: "temu", date: new Date("2026-03-25"), url: "https://news.google.com/rss/articles/CBMimAFBVV95cUxQWWtkMXRFMjFRdjBITk8xRHZvbEtyZHVReVhaZDg2SXRoc0VJZnZIdi1BTDFPX2RNdmN0YTRwMDhjMXp3NlZjbE1DYnhNeWxkTnQ0SWIzcFBpMUNhU1gzdGlMdDVvRF9tTjRvZFNRdGh2TEVKd2w2ZEdYRHBOQ2Fod3FKTzRySEQtUnhfSmpfdkhHbGFUQUFzQw?oc=5" },
  { id: "shein_018", title: "How is DHL Helping Shein's Green 供应链 Transition", content: "How is DHL Helping Shein's Green 供应链 Transition 供应链 Digital Magazine", source: "Supply Chain Digital Magazine", type: "press", platform: "shein", date: new Date("2026-03-25"), url: "https://news.google.com/rss/articles/CBMigAFBVV95cUxNalJfZ2RXVHl6dFdxam02M091UktpMjdsalJzN3ZzOEx0UldMbmlNaEU3UDRYS05aNzFZaDFQVGFrZ19oTnZkem4wQlVhMzlSOGs4TWFTa1dJV1ZUaXRXSmo2U09tR2lMaUUwMThPaXIyaUpIR3Y4MTUtZzlDa0hOVA?oc=5" },
  { id: "shein_019", title: "DHL快递与SHEIN签署\"绿色航燃\"协议，共促跨境电商物流更可持续", content: "DHL快递与SHEIN签署\"绿色航燃\"协议，共促跨境电商物流更可持续", source: "新浪财经", type: "press", platform: "shein", date: new Date("2026-03-24"), url: "https://news.google.com/rss/articles/CBMisgJBVV95cUxNS18tTklPa0E3MVphdGgxcEVodmE5ck4tazg0R1JsYS1CN2swNk5kOXNZeUFQOWhja1RYSXNURUV2ZjJzUXZOR252cWdxOElGSVA3Uk5kWlZUQkY2MVpBTlFEMi0xNENNcEVXdktnTENueFZrOFNweFN0RkdLc1RMMG1uRVN1R2JoaThqaGNsczYtbVhoX1Q4VU1CZ0ZzUVRmUXhlQ21IeXJfS3JKUTBsQ1lPSHZ4bnQ5TDdPVjdTaFZlOTdXUkRwYmxEZmZyVlBRVEc3ZjdyVlpleXpwYkNaeFZQQkpGVks5ZDJuWDFCMDFlWWNocVpwX1B5eUhaRmREVXJQYTNFV2NLMFJ0aE1Oek91Y1Nsc2RvYjZTRXprejVzQ25hRHNxRms0WUY4MEV6a0E?oc=5" },
  { id: "joybuy_039", title: "JD.com (JD) 推出 Joybuy 电商平台 in 欧洲, 收购 Ceconomy to 挑战 Amazon", content: "JD.com (JD) 推出 Joybuy 电商平台 in 欧洲, 收购 Ceconomy to 挑战 Amazon", source: "MSN", type: "press", platform: "joybuy", date: new Date("2026-03-23"), url: "https://news.google.com/rss/articles/CBMi-AFBVV95cUxQX2trQUhmWFNtQ1ItNHJZNjItbzUycWpRQW4xMGdKQ2lvR191anF0UC1GVEVQNjZ6VXdxaFI4dS1nTU5GSXk1NE9jSzhleFFRMDhoU1c3RTY4dUQ1bkQxdEppOVpEckdhVS1scEw4VGp2V2RTVEZvQVVRc2F0S1BPaGNIc1k4d0ZaRFQ1RXEwWWZGSmZzNk9WZDVPU3h2S2YzTWtvMDllRUZFVVlBT1h0QktQb0YxRzlWelFHaHJnUTlkUU9mVkI5LVBVMWpsbXp6c0l5N25uUXhoZEhvMVhqMkdaa1lTa2w0SGZWT1AtNW5TYlNDMVl3ZQ?oc=5" },
  { id: "temu_003", title: "Top 10 电商 电商平台s in 2026", content: "Top 10 电商 电商平台s in 2026 电商平台 Pulse", source: "Marketplace Pulse", type: "press", platform: "temu", date: new Date("2026-03-19"), url: "https://news.google.com/rss/articles/CBMihwFBVV95cUxOOWoyZ0hpYXV6V3dWMVZnLXUtR1NQNzVXcFNFTTFiMmJlNU5xV3E5T0VYY0R5RkdPZXpTV1dKZE1BbWNMd1lIaEZjYWUwLXZUNGZCWGxLLUpqb1U1dWxmTVg4WHRIQ09ja3lIWUZPYnRxUEdVS1dHenhLVnRpR1NSTzEyYlFIT1k?oc=5" },
  { id: "temu_004", title: "Temu Users Join Customer Push For IEEPA 关税 Refunds", content: "Temu Users Join Customer Push For IEEPA 关税 Refunds", source: "Law360", type: "press", platform: "temu", date: new Date("2026-03-18"), url: "https://news.google.com/rss/articles/CBMimgFBVV95cUxOS0xsTXc5QWR3TXdqZHV2QzIxWHpyQTB2UktZWXpYellzSjFxNkpJcnV5aTJfMHVQMHRqSkxISXJhUGxwVmpNWEFrX3hoSTc3Mm1vNXlwcVRYVWlkOTRNQXFNenIySTlORGxxc01OZlRBdzRoNUhyYzFkNkNXX0NhcFdNdFlaLXpBUGdjSldtemVXTTIwaGZ2WDJ30gFWQVVfeXFMT0g5a1N4SzRpbjlKT1Z2X0YyZ1ZfQ1VMakJra0RzLWstZmxlOXlfM2phUE1IUGdaTi1YaGRSSU04c05fWGZKYWtsa215V3BIdURwcmhQS0E?oc=5" },
  { id: "joybuy_048", title: "DHL and JD.com Sign Strategic MoU to Bridge German Brands with 600 Million Chinese Consumers - LM", content: "DHL and JD.com Sign Strategic MoU to Bridge German Brands with 600 Million Chinese Consumers LM - 物流 Manager", source: "Logistics Manager", type: "press", platform: "joybuy", date: new Date("2026-03-16"), url: "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQYUk5ZmV6aE52QkxianJpSnYxd0ZjeDFHbnZ2V2VwMmNpZUdFNklQeFduVndzb2hmRmJaa0owdmVNYmQwOTRMbVFsNDJkWFZaM2w0Y2d3a0xNOHpoM08xNy15YmMzanlMcWdHekozZkdIeERkVG5vWkFqTkpxcnVHaXo1eWZmblhrMTVxLS1NM1pTa0w0UThwUnZ6S0R2SVF1c19vNWd2NlFPRHpRd3FsVG4xajVlVUx0ZE85Sm5icVY?oc=5" },
  { id: "shein_020", title: "Shein Wants Brands to Use Its 供应链. Should They", content: "Exclusive: Shein Wants Brands to Use Its 供应链. Should They The Business of Fashion", source: "The Business of Fashion", type: "press", platform: "shein", date: new Date("2026-03-12"), url: "https://news.google.com/rss/articles/CBMi7AFBVV95cUxQQWltV2toLVVPOTlWM2FvdE9pZTZUTUpSbUxOVXlGYXhTVzhBaVRadzB3cEN0dDVaOThhdVVJejducHpNV0VEbjI4Y1ktRDc3eUJLYXVkTXFNRnFkYXh2U296M2ltU0wxdDk5bGRNajRlWEl4SlZvMDFjVV9PRXotN3pzSXNvS1YwMlZNTFAtWHpsMklVUjZwem5LLWJxLS01M0t4Rmp6SDFfNTY5dnVVdU1lMWlQWWkyTWtYVEZUTktkbENaU1dhOGc2UnhpaU5GUzZCSzJGeTdIQXdaNjEyWkgyX2pzT2lpYjVNRQ?oc=5" },
  { id: "temu_005", title: "America and China's biggest online shopping 平台s send 'delivery warning' to customers in Middle East", content: "America and China's biggest online shopping 平台s send 'delivery warning' to customers in Middle East The Times of India", source: "The Times of India", type: "press", platform: "temu", date: new Date("2026-03-03"), url: "https://news.google.com/rss/articles/CBMikwJBVV95cUxOMGU0Z1ZXcXhvMmxPcVRrbVMycmFyOUZYb09aNWQyUGZoNFhKaWl1TjJNZ1dWQ2l4OUg5enp2WUtWR0VjWHJ3NmNkMGZCZ3BhdzBwdy1PVG81dE9oRjVfRllhU3VTSEFLLVZIVTZFbG5OV2hGLU4wZXFwMVloYUllckllZjFVblA3eno0ZnlYcnBtUEVaZ0FQNVVHNXRwaUczTmRjZ3M0VVY1cFBiaElxMTd5RDRnS3FYbUVzdUZPSzhTaXhiZk5QNnlzc19LQlk1VmRCWEhndXNCNHNrQ3k4NW5mbFJZVHVPM3JiRGljd2lsTlczc0NfcWp4R3czbnhaaVFmQ1kxdk9wcEdzdmk2SUVFSdIBmAJBVV95cUxQeG5TRzFxY3Q0VWdQM0xKX2hRcUxJMlA0T3dEZmlrVjNNNUFjRHpKTGFYUHN5Zll4cFhOR3VjMFdCWWNuOWJSeFJGM3Z4cm1kYnM2ekNiajFIV0MzSWFFVFJnNGptd2JLSUpsWkhjdUpUUVFGS05qa2x5OUlhZEJrYWl3YnNqbGFIN1AyYlRNWGJlTHB0MkE0NFJZWENQQ09lcE5VRXZLUnJmTDdhY3BuWUk0SXBIVGl6eW5GUDUzanhGaUl6dE8zVXpoQVJxOVZUQ1VvanFVNmtKZko4RDZVOVR1MUZQUERlajhrYU5Rb1FSaFFwdGhNOERYc0dHVnpoLVpMQ3p2MHIzUmtVOEVyZkZsTVFmTHNv?oc=5" },
  { id: "temu_006", title: "Yep, the de minimis 关税 exemption is still suspended", content: "Yep, the de minimis 关税 exemption is still suspended", source: "marketplace.org", type: "press", platform: "temu", date: new Date("2026-03-03"), url: "https://news.google.com/rss/articles/CBMiowFBVV95cUxOMXZwRU00QVFiVzNERjZaZ002cDdMNlZ6aTJlMGxOangzcHg1cEp2Tmd1Mmk1R05Ka2pxM2tQeE81XzJUU0dYYWt2U0tmSlViM0hkVVp2YXJPV2RLZTlGUGxKM3FkTVJiRlNuQURZbmJNbngxOS03RWZxbVhyWHFGUHpYaWNaaUhvQWE5LWxMYXdLcXZaU1h3Y1VuR25TZVpCMGc0?oc=5" },
  { id: "shein_022", title: "Shein’s Founder Reaffirms China Roots, Vows Major Guangdong 供应链 Investment", content: "Shein’s Founder Reaffirms China Roots, Vows Major Guangdong 供应链 Investment Yicai 全球", source: "Yicai Global", type: "press", platform: "shein", date: new Date("2026-02-25"), url: "https://news.google.com/rss/articles/CBMi0gFBVV95cUxObnlnQVREenN1TmJiMURPb2ZxTm5tY19pWnBNcDFQZk8zQ3ZsNGlkT1Z3amlyU0Z4blV4LU1ZRmJGZTQ2WG5udzUyQ1BudlB1RmNnNEI2NkdCb0t1QU9LWTlNNjBtY3E1aVYzQVNHcER1NlhtWU82Ym90aF9TVWdqejFjb2NlMVdmYk1DY05BcXZWaVl5YlduT1BJR191UmZqYVZYSUotQVlDY2NBcFI4Q29vVmpvWVR0Y1lvdlgwZVBfelhwZVlyTnRtdkxIRHFzMVE?oc=5" },
  { id: "shein_023", title: "Shein's elusive founder makes first public appearance amid Hong Kong IPO push", content: "Shein's elusive founder makes first public appearance amid Hong Kong IPO push Campaign Asia", source: "Campaign Asia", type: "press", platform: "shein", date: new Date("2026-02-25"), url: "https://news.google.com/rss/articles/CBMi8AFBVV95cUxQaWJmRHo3djdUVFRQTDYtS015RmZJVkdDSE1BRmtiSFJPUGJkNXIwN2VUUU55RGZCcGdrcTV0Und1dlpBXzl3V2VUa3F6M2p5MHFaYUlJN0RxMGZmc0pUdEJUckxLeEJwUUR3OE90QzRQR0dodk9wT3dtVjF3LW5WeGdhRTUwalBaQnJQbmZkUmVTbHdhU3hUd0ZHSVJDT3NyMFhSeS1HZDVfOGlsY2p2LVZfbEkzUVctT3huZS1kSUNlQzdLWkJDRDhJc0JxbGMyZ3ZIZ1hiOTBVMUR6c2Y5SUlTUjBGM0RCY19TRnV5VlA?oc=5" },
  { id: "temu_007", title: "Temu 的物流速度是比较大的卡点，目前也在参考拼多多经验进化", content: "Temu 的物流速度是比较大的卡点，目前也在参考拼多多经验进化", source: "雪球", type: "press", platform: "temu", date: new Date("2026-02-23"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE16S2xoaVhDM0xRVWdZR2hBLUpRYVFpM3ZBTHhfM2RFcm5uZ1lXWDdEQmFpQjdkR1RiMXNOVU43emhWNlFPb2hKUWpLbC1HSS1R?oc=5" },
  { id: "temu_008", title: "Consumer Reports Secures 电商平台 Safety Improvements from Amazon and Temu", content: "Consumer Reports Secures 电商平台 Safety Improvements from Amazon and Temu Consumers Union", source: "Consumers Union", type: "press", platform: "temu", date: new Date("2026-02-19"), url: "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNUWY1R1lEaUZlajdYcmVBY19OT2E5OXh1a3NxN3hWV3A1SnNXdS1kSXI2SHJ3Wk5hZm9Pd0QxNEFZVWxQdTM0SDQ4bW4zV3ZxRnFTbGtJOFI3NGM2OEJUcGlvc3NLbjV6MXVVNUZ4Ni00Y2ZTU0I5TEphU0VlMGw2enNjRjNBQURPM3hidmVSdE5OZmVIU0l5NHVLRHduYjFzUmkyZXZnNjJTNkgzekxZV0VfbW9ERmhjOGpYMmRPX000eGZNY1lSVA?oc=5" },
  { id: "temu_009", title: "Temu Partners with DEKRA to Enhance 平台 合规 and Quality Assurance", content: "Temu Partners with DEKRA to Enhance 平台 合规 and Quality Assurance PR Newswire", source: "PR Newswire", type: "press", platform: "temu", date: new Date("2026-02-11"), url: "https://news.google.com/rss/articles/CBMizgFBVV95cUxNanRCYWZlaWVUdlRSYU9yNTJZbHMtSzdEOHpKOS1FTHo5dTJkSnNCRzRlZkJhVDRWXzlGcVYwSVBDcnNMVF9hSFY2cE9kSVVqa0pPM0tXQ1c1RVQ4TmtxZnVueUR5SkREa3NEbUZSUlZ1Z3ctX0hpSFZicjZaeThlYVJRMTE5WXZpOC0zTjRWSHR0SUhRQ25vNUVWLWdqZzJPaWtYU2N4bzl6dGw5LVBnWVROMlpPa09jdzM4VjQ5ODJlRkZ3RVZ5bjJGT1N1dw?oc=5" },
  { id: "temu_010", title: "Temu发布春节利好政策：首次暂停比价或释放流量与核价体系调整讯号|商品|价格|卖家|高价", content: "Temu发布春节利好政策：首次暂停比价或释放流量与核价体系调整讯号|商品|价格|卖家|高价|商家_手机新浪网", source: "新浪财经", type: "press", platform: "temu", date: new Date("2026-02-11"), url: "https://news.google.com/rss/articles/CBMi_wFBVV95cUxOcUlOcGhQX0s2VDB3WXdSUEx6azFnMTd1akgxSmhSRnktdWpPWW5Ob0FRSDJLLVhOaEF3eERBU2pGakxvQzd6ck9vYUc4ejJBUVlmcXo3MmNXOGlNUmdrNWREU1RJMXB3TmNsQ0xUYTh0Y2pHbzJUWmhzeE5uZmZCM2djc1R1QlFnTEtqUTVkdXB3dW9xWERnTEdrYjBvOWthNGFqMGxTWFp0UTV6S1U5Z1hCZHlJWTdwSHhrZzJPeUVMTHFSRXp3TDFIUjB1UjFxQWlnTFNRbXBNTVZSU2E2azNqdVlFNU1XMDNaV1dYQ0xKRmF4Y0JOeUxCc3RYb0k?oc=5" },
  { id: "temu_058", title: "中国公司全球化周报｜阿里云出海竞争力增长指数登全球榜首/Temu与匈牙利邮政达成合作", content: "中国公司全球化周报｜阿里云出海竞争力增长指数登全球榜首/Temu与匈牙利邮政达成合作", source: "36kr.com", type: "press", platform: "temu", date: new Date("2026-02-08"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBHTURveDJnN1E5TkxJQ3VIQm1VZjFWQTRZZk5CNDFTR1B4X1YxUVI1Yzh4aUVfenVQWDJzbG1zTGdGZWI5bDdreWxwNXR2UQ?oc=5" },
  { id: "temu_011", title: "Pinduoduo vs Temu: Two Faces of a Chinese 电商 Giant", content: "Pinduoduo vs Temu: Two Faces of a Chinese 电商 Giant 全球 Sources", source: "Global Sources", type: "press", platform: "temu", date: new Date("2026-02-05"), url: "https://news.google.com/rss/articles/CBMiakFVX3lxTFAzMFV1SlJGSExLMDMtRGpJeVo3aWtCLVdsNUNFVGdpWkcxWHdSeXdFdWR4UHVZOVFlR2lsdFlheGh6cndzSEVqd1RoMWZMSHRDUlZlZXRwdU5wN2txOFM4VGstcDhlMlVPbGc?oc=5" },
  { id: "temu_012", title: "从1%到24%，Temu带着中国供应链走向全球", content: "从1%到24%，Temu带着中国供应链走向全球 QQ News", source: "QQ News", type: "press", platform: "temu", date: new Date("2026-02-05"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBDcU16Rm1XUHA0MTFxbjFmd2hTcmN2RGxfVHpvd1VlOHFubFJ5eU9JYU1ORjlQdFhoa1diampmcHlXSUpVS0s1MDRwclJZNy1ZZjZiRWdn?oc=5" },
  { id: "tiktok_049", title: "2026做TikTok Shop，该换玩法了", content: "2026做TikTok Shop，该换玩法了", source: "雨果跨境", type: "press", platform: "tiktok", date: new Date("2026-01-28"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1YaDcwcHlSZ2tlZldyZkZzRDRWWEI2N3NrWmlSTFNjblJUdGVGWUNrdmlTMzF5T3lOTGwwUlhXUm1rQUlNbXJWbnBPNnk?oc=5" },
  { id: "tiktok_057", title: "中国公司全球化周报｜TikTok Shop在欧洲四国推出本地托管模式/创想三维携手阿里云优化3D打印云服务", content: "中国公司全球化周报｜TikTok Shop在欧洲四国推出本地托管模式/创想三维携手阿里云优化3D打印云服务", source: "36kr.com", type: "press", platform: "tiktok", date: new Date("2026-01-18"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBqUDFNcnQxU3hjNGhKU3NscVBZd3o5N2hjcDU2aUtJMDVJX1dxY2o0S09Pb0syTE5fa2Qyd1hrNElBNlNnUXdXOUdldE8zdw?oc=5" },
  { id: "temu_056", title: "TikTok Shop美区销售额暴增108% Temu跃居英国电商访问量第三", content: "TikTok Shop美区销售额暴增108% Temu跃居英国电商访问量第三 | 邦小白跨境周报", source: "亿邦动力网", type: "press", platform: "temu", date: new Date("2025-12-22"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE53bDZ4OVM3bFhVYzZSNFRNMXpUZUNFeHRzZ1FUX2s0SDMyZ2NOb2lKSERmQU9hUEV6YlRwbDBOaUliZzJxeGRESGtlM1FHcGdIVmpoc2lB?oc=5" },
  { id: "tiktok_059", title: "福建福州冲出一家IPO，做跨境电商服务，依赖Google、TikTok等供应商", content: "福建福州冲出一家IPO，做跨境电商服务，依赖Google、TikTok等供应商", source: "36kr.com", type: "press", platform: "tiktok", date: new Date("2025-12-15"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTE41OHpZakJhdlg5RnJzcHpNek10SWhpMHg3eU9oeFZlbmJwZ19EOWRBaUlwSHI4eEtwUTduR185VUN3S0JOU3Vtc0xuNy13dw?oc=5" }
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

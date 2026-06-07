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
  { id: "tiktok_new001", title: "美国取消800美元包裹免税，TikTok Shop美区调整履约考核规则", content: "美国拟取消800美元以下包裹免税政策，对跨境电商影响重大。同时TikTok Shop美区调整履约考核规则，加强物流时效要求。卖家需重新评估定价和物流策略，考虑使用海外仓或提高售价以覆盖关税成本。TikTok Shop鼓励卖家使用平台物流以应对变化。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-07-01"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE8zUFVNZFNkWDlJenhpYXZzYjlJdmtueWM2ZkhlX2h0YmpHTnE1Y3dIQnY5MjFoU2pRX0JVbWVpYld6QzJ5c0ZpdXk3Wko?oc=5" },
  { id: "temu_new002", title: "Temu卖家面临直邮取消、佣金上涨、罚款加重的多重压力", content: "Temu近期对卖家政策进行重大调整：取消直邮模式，改为强制使用平台物流；提高佣金费率；加重违规罚款。卖家利润空间被压缩，运营成本上升。建议卖家优化供应链，提高产品附加值，或转向其他平台。Temu仍保持低价策略，但卖家需适应新规则。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2025-07-01"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9TWkhjUVptRk1DWVhDTEs4WkFQUXVzekdaYUNhRHpJWEMzTC1PMkkxWnV6eDg5RWtsdFhxWEpxZC1SelJFZ1Fua1JKZ0o?oc=5" },
  { id: "temu_new003", title: "Temu美国网页流量从去年关税打击中悄然恢复", content: "Temu美国网站流量在经历去年关税政策冲击后，已悄然恢复至接近此前水平。这表明Temu通过调整广告策略和优化供应链，成功应对了关税挑战。卖家可继续利用Temu平台获取美国流量，但需注意关税成本。Temu可能进一步加大美国市场投入。", source: "Sherwood News", type: "press", platform: "temu", dimension: "", date: new Date("2025-07-01"), url: "https://news.google.com/rss/articles/CBMinwFBVV95cUxQM1lWV1Z2VFBUejMtMlJ6UTZZTzVIN3Q5VWtCT3liZmRZRmItcXRoaXNRTzVXM2gwZ3VzNGdVUzFUd0lkUGdJLXNTU19Dak94cEQ5R3kyRDB4UnlQem9ZQWNhVEp4Wm9GYkNRNGk2QXNLWWZWZzAtVmF5bTlPNFdETFpNZUU0SU0xckVNa2dBMXJwd1NHeXFFUEdJZ0JaN0E?oc=5" },
  { id: "shein_new004", title: "SHEIN限制美区半托管和自运营商家自发货，物流管控再收紧", content: "SHEIN进一步收紧美国区物流管控，限制半托管和自运营商家使用自发货模式，要求必须使用平台物流或指定海外仓。此举旨在提升履约效率和客户体验，减少物流纠纷。卖家需调整物流方案，与SHEIN合作或提前备货至美国仓。", source: "亿邦动力网", type: "press", platform: "shein", dimension: "", date: new Date("2025-07-01"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1Da2hZa0lteXg2bS1pMlRYVUVLQzhBaUduY1BfTVdpS3VYaGpyZUxYdlMxdXpOTU9RWE0zTVRLT21YdjVUamdndjNmcDBaTmlzTVlfTDhn?oc=5" },
  { id: "tiktok_new005", title: "TikTok Shop荷兰站正式上线，开放品牌和创作者入驻", content: "TikTok Shop在荷兰正式推出，允许荷兰品牌和创作者在应用内进行电商交易。这是TikTok Shop欧洲扩张的一部分，此前已在英国、德国等地上线。卖家可借此进入荷兰市场，但需遵守当地法规。TikTok Shop提供本地化运营支持，包括物流和支付。", source: "Net Influencer", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-07-01"), url: "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNektYbjZXMFNnU3p3S0Nac0RDYjAwbWtWSEhuSE4tY2ltT2Y1c3VSamtVR1JuN3pmdGNEOUFUYW42OGw1NlJESXRSVDlydVdLdWtaMXBkbmJYeEpFY1ItNEVKN1NCMGZCbTc2cC15a2JpdHhneFlycU5MbUVSTzNLR3RMQVJkbDliQ0dMdlVzX2lIYnhQZHJrNnZNM1NaUEJvMzFxMThrZ3BxTU11b2xjbXlQb0cxOXVYMnJseVl5MmY?oc=5" },
  { id: "tiktok_new006", title: "TikTok Shop波兰站即将上线，从浏览到购买的新体验", content: "TikTok Shop计划在波兰推出电商服务，允许用户直接在应用内购买商品。波兰是欧洲重要市场，TikTok Shop的进入将为卖家提供新渠道。卖家需提前准备波兰语内容和本地化运营。TikTok Shop将提供物流和支付支持，但卖家需关注波兰的税务和合规要求。", source: "xyz.pl", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-07-01"), url: "https://news.google.com/rss/articles/CBMimAFBVV95cUxQLU1seGNwYngwNDM0TE1kSzk3c0hlNExhanpkSXIzR0ZOQ19mdjNCa21aM1JYVC1YQXlUVE8tY21jNnFRajVkaDkwZjZrdnByMXJ5Q2xxQU9udnlDMzVqbnJQRFB5QXRkQ0VJbnE2MU5YZEpZRnphdUt1Qk4tekdLQ0V4UExoQnFKVGx4Uk1TUFBfWGZBcTZsTg?oc=5" },
  { id: "tiktok_new007", title: "TikTok Shop美区跨境POP CBT全新升级，扩大揽收范围并零门槛上门", content: "TikTok Shop美国区对跨境POP CBT模式进行升级，扩大揽收范围，并提供零门槛上门取件服务。卖家可享受更便捷的物流服务，降低运营成本。该升级旨在吸引更多卖家入驻，提升平台商品丰富度。卖家应利用此机会优化物流，提高履约效率。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-07-01"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE94SmpSNVl4eHRvNnd1Rl9xeHBaOWlPNDJDLVY5QzQwMFhUZjViUW1lTkl4emlvTjFOd0xuVHJBNllabFlPQk9RV0pXdUU?oc=5" },
  { id: "temu_new001", title: "Temu在欧盟被罚2亿欧元，因未排查平台违规商品", content: "欧盟对Temu处以2亿欧元罚款，因其未能有效排查平台上的违规商品。这是欧盟加强跨境电商监管的标志性事件。Temu需加强商品合规审核，否则可能面临更高罚款。卖家需确保产品符合欧盟标准，否则可能被下架或封店。平台可能提高入驻门槛和保证金要求。", source: "Caixin Global", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMibkFVX3lxTE5NRFJDVWhwSUFtaTFocHBnTXc3bkxqcDhNQXQyUVlYV1h4bUlBTGJiRlpLeFRKRVJnSGFUTmNXUVlGQW11c3J1NWZZa3pQWjJnLTZPVklJYmJ3TDhhazF0TnVadUxVbUpOeDNVX2tR?oc=5" },
  { id: "shein_new002", title: "SHEIN在法国再被罚2200万欧元，欧洲加大整顿力度", content: "SHEIN因商品合规问题在法国被罚2200万欧元（约1.77亿元人民币），这是继此前罚款后的又一次处罚。欧洲各国正加大对跨境电商的监管力度，SHEIN需加强商品审核和消费者保护。卖家需确保产品符合欧盟法规，否则可能面临下架和罚款。平台可能提高合规要求，增加卖家运营成本。", source: "RFI", type: "press", platform: "shein", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMi4gJBVV95cUxON0ZtWEZMLWJBTXVRVDh0WnFMMy1IRlhJMkxPNm9uc3hwWk83bi1vUXFEQnpkdzZVbjdaQUJ0b0Z1Vml0Tl9VT3FObFZtSUxLc3hVMGM0dWJDSmZkLVA2U0lSUlRHTTVsaTFpWk1SYjlzUG43Mzl3RDJKZ1VvNkV1OVBOMVcyTEF0V2VVUGZrS2xxdmNPSHJGaG1lc0t4eVU3a0lzV05iamY3bnVqM0NLUDhDVW5SRF9UYzdlc2M2Y1MxN3hmWHlkb3RjOWV6cG5VVEtKTmxSemF3RzRKcWg2UF9SYk5ON1plTTRULXl5QWVQeXplenlvRG15NDMwREt1dDNJOVZad1pRYXV5N1A2a3I0OXI1eFo0c3FIM0tQZHIzLUs5MEllakx1MGR6NjVvTkNPVWpmR05xZ2wtM1I2WmtTbDF5RzRpTUVacmRHVFdmUnYwSmg2X3JOVm8zcmt4c0E?oc=5" },
  { id: "tiktok_new003", title: "TikTok Shop美区6月8日起执行物流考核新规，履约时效收紧", content: "TikTok Shop美国区自6月8日起正式执行物流考核新规，对卖家履约时效提出更高要求。新规包括订单处理时间、物流时效等指标，未达标卖家将面临流量限制或罚款。卖家需优化供应链，使用平台物流或海外仓，否则可能影响店铺表现。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9nVzdzNmNlVy1wUWoyZHNYdUtTMHJxd3pFUy1YdTFNa2lwRDFZOU01cUhsWmhfNjBEdkFtVkYtS0d5ajJmVkMtdS1tV3FUT3BibGZ2bTM5Slk?oc=5" },
  { id: "tiktok_new004", title: "TikTok Shop荷兰站点正式上线，开放品牌和创作者入驻", content: "TikTok Shop在荷兰正式上线，向当地品牌和创作者开放应用内购物功能。卖家可通过短视频和直播带货，利用TikTok流量优势拓展市场。荷兰是欧洲重要电商市场，TikTok Shop的进入将加剧与Temu、SHEIN的竞争。卖家需注意荷兰语本地化运营和合规要求。", source: "Net Influencer", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNektYbjZXMFNnU3p3S0Nac0RDYjAwbWtWSEhuSE4tY2ltT2Y1c3VSamtVR1JuN3pmdGNEOUFUYW42OGw1NlJESXRSVDlydVdLdWtaMXBkbmJYeEpFY1ItNEVKN1NCMGZCbTc2cC15a2JpdHhneFlycU5MbUVSTzNLR3RMQVJkbDliQ0dMdlVzX2lIYnhQZHJrNnZNM1NaUEJvMzFxMThrZ3BxTU11b2xjbXlQb0cxOXVYMnJseVl5MmY?oc=5" },
  { id: "tiktok_new005", title: "TikTok Shop波兰站点即将上线，欧洲版图再扩大", content: "TikTok Shop计划在波兰推出，进一步扩大欧洲市场版图。波兰是中东欧重要电商市场，用户基数大。卖家可提前布局波兰市场，利用TikTok流量红利。但需注意波兰语本地化和物流配送问题。TikTok Shop正加速欧洲扩张，与亚马逊、速卖通等竞争。", source: "xyz.pl", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMimAFBVV95cUxQLU1seGNwYngwNDM0TE1kSzk3c0hlNExhanpkSXIzR0ZOQ19mdjNCa21aM1JYVC1YQXlUVE8tY21jNnFRajVkaDkwZjZrdnByMXJ5Q2xxQU9udnlDMzVqbnJQRFB5QXRkQ0VJbnE2MU5YZEpZRnphdUt1Qk4tekdLQ0V4UExoQnFKVGx4Uk1TUFBfWGZBcTZsTg?oc=5" },
  { id: "tiktok_new006", title: "美国取消800美元包裹免税政策，TikTok Shop美区履约规则调整", content: "美国取消800美元以下包裹免税政策，对跨境电商影响重大。TikTok Shop美区同步调整履约考核规则，6月8日起执行新规。卖家需重新评估定价和物流策略，可能面临成本上升。建议卖家使用海外仓或平台物流，以降低关税影响。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTE1GcHpienhUZVM5V3FkQ0Q4Q0tKaVNncm1PVVd5OXl3Ym5zRVlrdDFfOUNlVVl1UmpFMzJ4N1A1aDRvNHJ3Y1E0Z1Jib3pGMnc?oc=5" },
  { id: "temu_new007", title: "Temu卖家面临直邮取消、佣金上涨、罚款严厉等多重压力", content: "Temu平台政策持续收紧，卖家面临直邮模式取消、佣金上涨、罚款严厉等问题。平台正从低价策略转向合规化运营，卖家利润空间被压缩。建议卖家优化供应链，提升产品质量，适应平台新规则。部分卖家可能被迫退出。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9TWkhjUVptRk1DWVhDTEs4WkFQUXVzekdaYUNhRHpJWEMzTC1PMkkxWnV6eDg5RWtsdFhxWEpxZC1SelJFZ1Fua1JKZ0o?oc=5" },
  { id: "temu_new008", title: "英国零售业要求向Temu等平台征收小包税，以保护本土商家", content: "英国零售业呼吁政府向Temu等跨境电商平台征收“小包税”，以抵消低价进口商品对本土零售的冲击。若政策实施，Temu卖家成本将上升，低价优势减弱。卖家需关注英国政策动向，提前调整定价和物流策略。", source: "白鲸出海", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFByZzhLdk9yRzFUX2JVNnZxZ1ZBR25vZV9jRjRMSUVKaHdKNDQydlh0bnp6amlLTWFXQ2pDMWUyb0RjU2RUNlJ4S0M2MGU?oc=5" },
  { id: "tiktok_new009", title: "TikTok Shop英国推出不活跃和休眠店铺政策，清理僵尸账号", content: "TikTok Shop英国站推出新政策，针对不活跃和休眠店铺进行清理。长期无订单或未运营的店铺可能被关闭。卖家需保持店铺活跃，否则可能失去账号。此举旨在提升平台生态质量，对活跃卖家是利好。", source: "channelx.world", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxPX0hjTnJTS2pfSmpiZFBtV2R1LXZWTzlST01wd2xtVkx6Q0d2djdDdk5NVmZhNXl3MENfak5Va2s1YzZyWjB6aExRUzQ2ZTZUNHMxRmJKNzJWZ1NhT0IteDE0QV9GSU1XMDBmYUJYNktiUWlmbmRGdUNtWFFDU1lIU2NVbm0?oc=5" },
  { id: "shein_new010", title: "SHEIN被告事件与低价直邮卖家相关，合规风险上升", content: "SHEIN因商品合规问题被起诉，事件与低价直邮卖家密切相关。平台可能加强商品审核，卖家需确保产品符合目标市场法规，否则可能面临法律风险。建议卖家提升产品质量，避免侵权和不合规问题。", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE5wTGR1S3JRZ29TYVFFTmdPM01fOGpRNUVndTBYSWRaanc4bUplT3B0RmdTNWpxYjRNc1ZEYkI3Um8xcWZMTkdidjdEYnk?oc=5" },
  { id: "aliexpress_new011", title: "速卖通加码美国、韩国、拉美三大核心市场，发布增长计划", content: "速卖通发布美国、韩国、拉美三大核心市场增长计划，加大投入提升市场份额。在美国市场，速卖通将优化物流和用户体验；在韩国，加强本地化运营；在拉美，与当地物流合作。卖家可关注这些市场的机会，但需注意竞争激烈。", source: "36Kr", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTFB2WDBfdkVMQzVTS0pNQzQ0Tm5nbEtyamRDSXdjc3VJY0dmTXlGMXJhbmVRaXhvX1pETjVBYmg1RS1Ba0EyVTdCZHhCLUhnQQ?oc=5" },
  { id: "temu_new001", title: "Temu与马耳他合规计划合作，为卖家简化环保合规流程", content: "Temu与马耳他合规计划合作，旨在简化当地卖家在环保合规方面的流程，包括覆盖废物处理费用。此举是Temu应对欧盟环保法规的一部分，帮助卖家降低合规成本。对马耳他及欧洲卖家而言，这意味着更便捷的合规路径，但可能伴随平台费用调整。", source: "MaltaToday", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMizwFBVV95cUxPa0dvSThyRl9pdlhhRXRIcTVVYS11dlNRcFJmTjVsemtDVGZpbllQc08zdGlrZFNLZzczbXoycUxsQlJzcXNtU1R5LXB6YlhSOUlBTzZrWkkzeUFJUS02RmladDk3UjcxMkxvQkhfQ1JWUFBGNFRWbEtyengzVXJBakRFYVdja0c2QmZqTHBHQ0huZ2NuZF9iTHAxUDFkaC1zSXp4U2JlaEtMdWpDSjV5dFplRmdRSG1uOERqRWNDVUtDWnAtcTdOVDE5X2NFYVU?oc=5" },
  { id: "temu_new002", title: "Temu与马耳他合规计划合作，覆盖卖家废物处理费用", content: "Temu与马耳他合规计划合作，承担卖家在废物处理方面的费用，以简化环保合规。这是Temu在欧洲市场加强合规的举措，可能推广至其他欧盟国家。卖家需关注平台合规要求变化，避免因环保问题受罚。", source: "Times of Malta", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiogFBVV95cUxOU2dPbmtrcDNUU2EtX0Q1V01nM1RFcTRLWHJsSVZDZy1qbWdxdGJaN1AwVnFHOGFEc1VjbXhTbHBrS1lvZGhtSk5QdTJVSWFEdTJoT0lZSHQ2b1dXeWVocHRwYUZDN0tFckgtRFpBcDlXZnhhc3lkQjNHb2FScGdNZlZTUWpDTk5iS2daUDFRTEV4ZkNMR3FPVWhwQkJwcmR1eFE?oc=5" },
  { id: "temu_new003", title: "Temu因销售不合规商品被欧盟罚款2亿欧元，面临合规挑战", content: "Temu因销售不合规商品被欧盟罚款2亿欧元，涉及产品安全、标签等问题。Temu表示将加强合规措施，包括与当地机构合作。此罚款对Temu欧洲业务构成压力，卖家需确保产品符合欧盟标准，否则可能面临下架或罚款。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTE5hdHhHNHE3RC1ZekEyUW9hQXdMYV9aTjNXYjc5ZXEtbXJtYnNsQmxKT1FjOVNSMVo5SFYtQmxlZ1ZleGpyOGxXUFRhcDRnNFE?oc=5" },
  { id: "shein_new004", title: "SHEIN因低价直邮模式被起诉，或影响所有低价直邮卖家", content: "SHEIN因低价直邮模式被起诉，指控其规避关税和合规要求。此案可能波及所有采用低价直邮模式的跨境电商卖家，尤其是美国市场。卖家需关注关税政策变化，考虑转向海外仓或本地化备货以降低风险。", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE5wTGR1S3JRZ29TYVFFTmdPM01fOGpRNUVndTBYSWRaanc4bUplT3B0RmdTNWpxYjRNc1ZEYkI3Um8xcWZMTkdidjdEYnk?oc=5" },
  { id: "tiktok_new005", title: "TikTok Shop英国站更新不活跃和休眠店铺政策，清理僵尸店铺", content: "TikTok Shop英国站发布新政策，针对不活跃和休眠店铺进行清理，要求卖家保持活跃运营。此举旨在提升平台质量，减少僵尸店铺对用户体验的影响。卖家需定期登录并更新商品，否则可能面临店铺关闭风险。", source: "channelx.world", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxPX0hjTnJTS2pfSmpiZFBtV2R1LXZWTzlST01wd2xtVkx6Q0d2djdDdk5NVmZhNXl3MENfak5Va2s1YzZyWjB6aExRUzQ2ZTZUNHMxRmJKNzJWZ1NhT0IteDE0QV9GSU1XMDBmYUJYNktiUWlmbmRGdUNtWFFDU1lIU2NVbm0?oc=5" },
  { id: "tiktok_new006", title: "TikTok Shop欧洲再扩容，新增8国站点正式开放入驻", content: "TikTok Shop宣布欧洲市场再扩容，新增8个国家站点，包括波兰、荷兰、比利时、奥地利等，于6月1日起开放卖家入驻，6月15日正式上线。此举为卖家提供新市场机会，但需注意各国合规要求，如增值税、产品安全等。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTFBMaGFFVWNZU0tERGRyZHhlbmtXeDNzVVMycjFqRUF2eDRDWkVlT0dYV2NKUkszcWlOcml6LVZJeHpzaVFzSkdWVjRKMXdwTmc?oc=5" },
  { id: "aliexpress_new007", title: "速卖通欧洲多个市场本地订单规模反超跨境，本地化备货成趋势", content: "速卖通在欧洲多个市场（如西班牙、法国）本地订单规模已超过跨境订单，显示本地化备货策略成功。卖家需考虑在海外仓备货，以提升履约时效和客户体验，同时降低跨境物流风险。", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTFBHZlpjVlN4dEpweXZWalhJNHIzeFd3ZHFJbEZsY0dESXdSSnF2ZUx6bGhuaGdsOUV4R2FuX2hvOEt4c2lEemdvcGVMZGY5Tlk?oc=5" },
  { id: "temu_new008", title: "Temu调整美国广告策略：X平台支出锐减95%，转向Pinterest与Meta", content: "Temu大幅调整美国广告策略，将X平台广告支出削减95%，转而投向Pinterest和Meta。此举旨在优化获客效率，降低对单一平台的依赖。卖家需关注Temu流量来源变化，调整站外推广策略。", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBmbGRTM3VZcGpFR0RILUhwaHc2bXp6Mzh2TEVkV0ZXcVpuZjJ4Qm5FN0lWSWZnR196Rms1TC1ob0toeldLQU45aV8yOG9zemItR3lnLTV3?oc=5" },
  { id: "shein_new009", title: "SHEIN发布美国市场物流新规，强制平台下单严打虚拟仓", content: "SHEIN发布美国市场物流新规，要求卖家必须使用平台物流发货，严禁虚拟仓模式。此举旨在提升履约时效和用户体验，但增加了卖家物流成本。卖家需调整物流策略，转向平台合作物流或海外仓。", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9WMy01TWhSdXYwWGItV0N2ZnVOaE5NbE5ITFFIY2JjbHJ0RXViQU00TDEyRHVxZU5KRGhaOWp6S0d6azZLcnJvc2FGMHo?oc=5" },
  { id: "shein_new010", title: "SHEIN收紧物流管控，美国区商家被迫转向平台物流", content: "SHEIN进一步收紧美国区物流管控，限制半托管和自运营商家自发货，强制使用平台物流。此举影响大量卖家，尤其是依赖自发货的中小卖家。卖家需尽快对接平台物流，避免订单履约违规。", source: "亿邦动力网", type: "press", platform: "shein", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9OTjF2TFlSUFdrRWNoZkg4SkZGekZPby14YXYtTUVfUlpZdkNaeE9tNm0tNmJteXpYZlZ0dEhPNTk5d2I3M2FVRjMtRDVESEhuQ0JZYWtB?oc=5" },
  { id: "shein_new011", title: "SHEIN在法国再被罚款2200万欧元，欧洲加大整顿跨境电商力度", content: "SHEIN在法国再次被罚款2200万欧元（约1.77亿元人民币），因未充分履行产品合规义务。欧洲各国正加大跨境电商整顿力度，卖家需确保产品符合欧盟安全、标签等法规，否则面临高额罚款。", source: "大纪元", type: "press", platform: "shein", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiZEFVX3lxTE00U2IxcTVwZkU5Yzl5WWtVcjBSVVJoZ1RYVlhjMTNnWnZieXpkMXJBdWVlZHI2ZHpDV1E5MzltVmFUMHlQR1dRRjc3YmhhUVRoTXk0bjFmdXJSN1JGMm1UZEp4eWPSAWRBVV95cUxNNFNiMXE1cGZFOWM5eVlrVXIwUlVSaGdUWFZYYzEzZ1p2Ynl6ZDFyQXVlZWRyNmR6Q1dROTM5bVZhVDB5UEdXUUY3N2JoYVFUaE15NG4xZnVyUjdSRjJtVGRKeHlj?oc=5" },
  { id: "tiktok_new012", title: "TikTok Shop美区6月8日起正式执行物流考核新规", content: "TikTok Shop美区宣布自6月8日起正式执行物流考核新规，对卖家履约时效、取消率等指标进行考核，不达标将受处罚。卖家需优化物流流程，确保订单及时发货，避免影响店铺权重。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9nVzdzNmNlVy1wUWoyZHNYdUtTMHJxd3pFUy1YdTFNa2lwRDFZOU01cUhsWmhfNjBEdkFtVkYtS0d5ajJmVkMtdS1tV3FUT3BibGZ2bTM5Slk?oc=5" },
  { id: "tiktok_new013", title: "TikTok Shop美区跨境POP CBT升级，扩大揽收范围并零门槛上门", content: "TikTok Shop美区跨境POP CBT服务升级，扩大揽收范围，提供零门槛上门取件服务。此举降低卖家物流门槛，提升履约效率。卖家可借此优化物流成本，尤其适合中小卖家。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTFB0ZDk4T1lZM0JVNGtDSVQ1TXRKNzdZQS1pTVBZZVh2YTJibTBkdmJtMEdhcnRsa2hwYU9VSEM0bWpwMDltOWZEQ0k2U3VMeGM?oc=5" },
  { id: "tiktok_new014", title: "美国取消800美元包裹免税政策，TikTok Shop美区调整履约考核规则", content: "美国计划取消800美元以下包裹免税政策，对低价直邮模式造成冲击。TikTok Shop美区同步调整履约考核规则，自6月8日起执行新规。卖家需评估成本影响，考虑海外仓备货或调整定价策略。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTE1GcHpienhUZVM5V3FkQ0Q4Q0tKaVNncm1PVVd5OXl3Ym5zRVlrdDFfOUNlVVl1UmpFMzJ4N1A1aDRvNHJ3Y1E0Z1Jib3pGMnc?oc=5" },
  { id: "temu_new015", title: "Temu在欧盟被罚2亿欧元，因销售不合规商品", content: "Temu因销售不合规商品被欧盟罚款2亿欧元，涉及产品安全、标签等问题。Temu表示将加强合规措施，包括与当地机构合作。此罚款对Temu欧洲业务构成压力，卖家需确保产品符合欧盟标准，否则可能面临下架或罚款。", source: "纽约时报中文网", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMidEFVX3lxTE5ZM25NakRjMFR1SDl6Z3hYRUZpMzJoWVpPbGNoUWdIRG56RGpGWjBqb0p1bFBnOXRPQV80aXloV0d2T2lHUEJZWENWSWVlRXkyaFVjVnYyT3BRUVpDamYyTHJZZ1VxTHQxU2NoS3RCVGJhQlY1?oc=5" },
  { id: "tiktok_new016", title: "TikTok Shop将于6月15日上线波兰、荷兰、比利时及奥地利", content: "TikTok Shop宣布将于6月15日正式上线波兰、荷兰、比利时及奥地利四个欧洲站点，6月1日起开放卖家入驻。卖家可提前布局，但需注意各国增值税、产品合规等要求，以及本地化运营策略。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBOQ2tJcENqdjZuQ3lQR09FcjVQcmo3NzhRZEpCYWNEc1BYT1dIWFVZMnU4UXQ0ZzhJM0tkTGtZcXg5NjdzUUh6V255dzhsa2pVcUcydWVxMW0?oc=5" },
  { id: "temu_new017", title: "Temu卖家面临直邮取消、佣金上涨和罚款加重，运营压力剧增", content: "Temu近期调整政策，取消直邮模式、引入佣金并加重罚款，卖家运营成本大幅上升。卖家需适应新规则，考虑海外仓备货或优化产品定价，以维持利润空间。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-10"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9TWkhjUVptRk1DWVhDTEs4WkFQUXVzekdaYUNhRHpJWEMzTC1PMkkxWnV6eDg5RWtsdFhxWEpxZC1SelJFZ1Fua1JKZ0o?oc=5" },
  { id: "shein_new001", title: "SHEIN收紧美区物流管控，强制平台下单严打虚拟仓发货", content: "SHEIN发布美国市场物流新规，收紧对半托管和自运营商家的自发货限制，强制要求使用平台物流服务。新规旨在打击“虚拟仓”发货模式，提升履约时效和用户体验。受影响的商家需在2025年6月前完成物流切换，否则可能面临店铺限制或罚款。此举将增加商家物流成本，但有助于提升配送稳定性和消费者信任。建议商家提前与SHEIN物流团队对接，优化仓储布局。", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9WMy01TWhSdXYwWGItV0N2ZnVOaE5NbE5ITFFIY2JjbHJ0RXViQU00TDEyRHVxZU5KRGhaOWp6S0d6azZLcnJvc2FGMHo?oc=5" },
  { id: "shein_new002", title: "SHEIN在法国再被罚款2000万欧元，因未充分排查违规商品", content: "法国监管机构对SHEIN处以2000万欧元罚款，原因是平台未有效排查和移除不合规商品，包括假冒伪劣及安全风险产品。这是SHEIN在法国第二次被罚，此前已因类似问题被罚。罚款将影响SHEIN在欧洲的合规成本，并可能促使平台加强商品审核机制。卖家需确保产品符合欧盟CE标志、REACH法规等要求，否则面临下架风险。", source: "大纪元", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiZEFVX3lxTE00U2IxcTVwZkU5Yzl5WWtVcjBSVVJoZ1RYVlhjMTNnWnZieXpkMXJBdWVlZHI2ZHpDV1E5MzltVmFUMHlQR1dRRjc3YmhhUVRoTXk0bjFmdXJSN1JGMm1UZEp4eWPSAWRBVV95cUxNNFNiMXE1cGZFOWM5eVlrVXIwUlVSaGdUWFZYYzEzZ1p2Ynl6ZDFyQXVlZWRyNmR6Q1dROTM5bVZhVDB5UEdXUUY3N2JoYVFUaE15NG4xZnVyUjdSRjJtVGRKeHlj?oc=5" },
  { id: "tiktok_new003", title: "TikTok Shop美区6月8日起执行物流考核新规，严控履约时效", content: "TikTok Shop美国区宣布自2025年6月8日起正式执行物流考核新规，要求商家在订单下达后48小时内完成揽收，72小时内物流信息更新。未达标者将面临流量降权、限制参加平台活动等处罚。新规适用于所有自运营和半托管商家，旨在提升消费者体验。建议卖家优化库存管理，与可靠物流商合作，确保履约时效。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9nVzdzNmNlVy1wUWoyZHNYdUtTMHJxd3pFUy1YdTFNa2lwRDFZOU01cUhsWmhfNjBEdkFtVkYtS0d5ajJmVkMtdS1tV3FUT3BibGZ2bTM5Slk?oc=5" },
  { id: "tiktok_new004", title: "TikTok Shop更新支付周期，缩短卖家回款时间", content: "TikTok Shop宣布更新支付周期，将卖家结算周期从原来的T+15缩短至T+7，即订单完成后7天内到账。新规适用于美国、欧洲等主要市场，旨在改善卖家现金流。同时，平台将根据店铺表现动态调整结算周期，表现优异的卖家可享受T+3快速回款。此举有助于吸引更多卖家入驻，但要求商家保持低退货率和良好信誉。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9xRThZVVJ1TGFDMEJZRWJ1Z0RHZXlSVjVWZG1KLVlrVmpNUlBhSVRiXzZPdHFMSFRZUnhCdnRXMGx4U0xfRXFOdkVjNkxIVTR1cWNETzNNZHo?oc=5" },
  { id: "tiktok_new005", title: "TikTok Shop欧洲新增8国站点，加速泛欧市场布局", content: "TikTok Shop宣布在欧洲新增8个站点，包括荷兰、波兰、西班牙、意大利、法国、德国、瑞典和比利时，使欧洲站点总数达到12个。新站点将开放给本地品牌和跨境卖家，支持本地仓储和跨境直邮两种模式。平台将提供流量扶持和物流补贴，鼓励卖家提前备货至欧洲海外仓。此举标志着TikTok Shop从单一市场向泛欧电商平台演进。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBVTHM5Q0NuZ3ZUQ3dveDhTYURWMGtRSEFfNWtaa0V4enptNGNwamlIbkRoTkthd1Q5RXBiUm9nVlNTQlNMaHFFRi1XQWM?oc=5" },
  { id: "tiktok_new006", title: "TikTok Shop荷兰站正式上线，开放本地品牌和创作者入驻", content: "TikTok Shop在荷兰正式推出，允许荷兰品牌和创作者在应用内直接销售商品。首批入驻商家包括时尚、美妆和家居品类。平台提供零佣金开播激励和流量扶持，并计划与本地物流商合作实现次日达。荷兰是TikTok Shop欧洲扩张的重要一步，预计将吸引大量中小卖家。跨境卖家可通过荷兰海外仓实现本地发货，降低物流成本。", source: "Net Influencer", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNektYbjZXMFNnU3p3S0Nac0RDYjAwbWtWSEhuSE4tY2ltT2Y1c3VSamtVR1JuN3pmdGNEOUFUYW42OGw1NlJESXRSVDlydVdLdWtaMXBkbmJYeEpFY1ItNEVKN1NCMGZCbTc2cC15a2JpdHhneFlycU5MbUVSTzNLR3RMQVJkbDliQ0dMdlVzX2lIYnhQZHJrNnZNM1NaUEJvMzFxMThrZ3BxTU11b2xjbXlQb0cxOXVYMnJseVl5MmY?oc=5" },
  { id: "tiktok_new007", title: "TikTok Shop波兰站即将上线，从浏览到购买一站式体验", content: "TikTok Shop宣布将于2025年6月在波兰正式上线，为当地用户提供应用内购物体验。波兰站将支持本地卖家和跨境卖家，初期聚焦时尚、美妆和电子产品。平台将提供直播带货、短视频购物等功能，并计划与波兰本地物流商合作。波兰是中东欧重要电商市场，此举将帮助卖家拓展新增长点。", source: "xyz.pl", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMimAFBVV95cUxQLU1seGNwYngwNDM0TE1kSzk3c0hlNExhanpkSXIzR0ZOQ19mdjNCa21aM1JYVC1YQXlUVE8tY21jNnFRajVkaDkwZjZrdnByMXJ5Q2xxQU9udnlDMzVqbnJQRFB5QXRkQ0VJbnE2MU5YZEpZRnphdUt1Qk4tekdLQ0V4UExoQnFKVGx4Uk1TUFBfWGZBcTZsTg?oc=5" },
  { id: "temu_new008", title: "Temu因销售不合规商品被欧盟罚款2亿欧元，合规压力升级", content: "欧盟委员会对Temu处以2亿欧元罚款，原因是平台未能有效排查和移除违规商品，包括不安全玩具、假冒化妆品等。这是Temu在欧盟第二次因不合规被罚，此前已因类似问题被罚。罚款将促使Temu加强商品审核和卖家资质审查。卖家需确保产品符合欧盟CE、REACH等标准，否则可能面临下架和账户冻结。", source: "纽约时报中文网", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMidEFVX3lxTE5ZM25NakRjMFR1SDl6Z3hYRUZpMzJoWVpPbGNoUWdIRG56RGpGWjBqb0p1bFBnOXRPQV80aXloV0d2T2lHUEJZWENWSWVlRXkyaFVjVnYyT3BRUVpDamYyTHJZZ1VxTHQxU2NoS3RCVGJhQlY1?oc=5" },
  { id: "temu_new009", title: "Temu取消直邮模式，全面转向半托管和佣金制，卖家成本激增", content: "Temu宣布取消美国市场的直邮模式，全面转向半托管和佣金制。卖家需将商品发往Temu国内仓或海外仓，平台负责尾程配送。同时，Temu引入佣金制度，根据品类收取5%-15%的佣金，并加大罚款力度，对延迟发货、退货率高的卖家处以高额罚款。卖家普遍反映成本大幅上升，利润空间被压缩。建议卖家优化供应链，提高库存周转率。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9TWkhjUVptRk1DWVhDTEs4WkFQUXVzekdaYUNhRHpJWEMzTC1PMkkxWnV6eDg5RWtsdFhxWEpxZC1SelJFZ1Fua1JKZ0o?oc=5" },
  { id: "temu_new010", title: "英国零售业呼吁向Temu等平台征收“小包税”，跨境直邮或受冲击", content: "英国零售业联合呼吁政府向Temu、SHEIN等跨境电商平台征收“小包税”，以弥补因低价进口商品导致的税收损失。该税种针对价值低于135英镑的包裹，预计将增加跨境卖家的物流成本。若实施，直邮模式将受重大冲击，卖家可能需转向海外仓或本地发货。建议卖家提前布局英国海外仓，以规避潜在税负。", source: "白鲸出海", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFByZzhLdk9yRzFUX2JVNnZxZ1ZBR25vZV9jRjRMSUVKaHdKNDQydlh0bnp6amlLTWFXQ2pDMWUyb0RjU2RUNlJ4S0M2MGU?oc=5" },
  { id: "aliexpress_new011", title: "速卖通与巴西邮政签署谅解备忘录，强化拉美物流网络", content: "速卖通与巴西邮政签署谅解备忘录，双方将合作优化巴西境内的包裹配送效率，包括缩短清关时间、提供末端追踪服务等。速卖通还计划在巴西建立更多海外仓，实现本地发货。此举旨在提升巴西消费者的购物体验，降低物流成本。巴西是速卖通核心市场之一，卖家可借此机会拓展拉美业务。", source: "白鲸出海", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1sb1F2NDBHcXpYQ054azdudURoblRGTFFBM1kwbFNCS3gtOWFOMkJaaE5ob0tlSmsxbGhHQ3g1UVVKVEpYMGdub2g1bkZGc21ERmtONS0yU3A?oc=5" },
  { id: "aliexpress_new012", title: "速卖通发布美、韩、拉美增长计划，加码三大核心市场", content: "速卖通发布2025年增长计划，重点聚焦美国、韩国和拉美三大市场。在美国，速卖通将加强本地化运营，包括建立美国海外仓和优化物流时效；在韩国，将加大营销投入和本地支付合作；在拉美，将深化与巴西、墨西哥等国的物流合作。卖家可关注这些市场的选品机会，如3C、家居、美妆等品类。", source: "36Kr", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTFB2WDBfdkVMQzVTS0pNQzQ0Tm5nbEtyamRDSXdjc3VJY0dmTXlGMXJhbmVRaXhvX1pETjVBYmg1RS1Ba0EyVTdCZHhCLUhnQQ?oc=5" },
  { id: "tiktok_new013", title: "亚马逊推出新功能扶持新品，TikTok Shop欧洲扩张加速", content: "亚马逊推出新功能，为新品提供流量扶持和广告折扣，帮助卖家快速起量。同时，TikTok Shop宣布欧洲将新开8个站点，包括荷兰、波兰等。两大平台在欧洲市场的竞争加剧。亚马逊卖家可借助新品扶持计划降低推广成本，而TikTok Shop卖家则需抓住新站点红利期，提前布局本地化运营。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE92WmQ0TVk5S1ZlQThZY2hZMjdUUU9CNl9iNWFhWDlzS0t1VkV3NUVFdWVtVHRsa0VaZjBwUXlBc3ZuMm9sLVFLZElOSFN4VGdodHdWSXBn?oc=5" },
  { id: "tiktok_new014", title: "TikTok Shop美区3C家电选品布局：2026年全域增长实战指南", content: "雨果跨境发布TikTok Shop美区3C家电选品报告，指出2026年该品类将迎来爆发式增长。建议卖家聚焦智能家居、便携充电设备、无线耳机等细分品类，利用短视频和直播展示产品功能。平台将提供流量扶持和佣金优惠。卖家需注意美国FCC认证和能效标准，避免合规风险。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBBMGxORVBDU19PekhIVVExd0lucGdmTDFNdWwtck1IRzRHNjNGZzdIVS1HUERESDhnb2VJclFwWHlTbF9hdlZwbjdTRlI?oc=5" },
  { id: "tiktok_new015", title: "TikTok Shop美区黑五GMV占全年40%，高潜力类目选品策略曝光", content: "TikTok Shop美国区数据显示，黑五期间GMV占全年40%，成为年度最大促销节点。平台公布高潜力类目包括美妆、服饰、3C配件和家居用品。建议卖家提前3个月备货，利用短视频和直播预热，并参与平台大促活动。物流方面需提前与海外仓合作，避免爆仓。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBlcHFldXQxSVRTck5PRlItNGNubWVHOGVjaTJWMmJUQU1IY0loU1BKaFNWQUpXRjIxQzdETXBjZEgtOEpMbWJkeVA5cnk?oc=5" },
  { id: "tiktok_new016", title: "TikTok Shop五大品类夏季选品清单发布，爆款策略全解析", content: "TikTok Shop发布2026年夏季选品清单，涵盖时尚、美妆、家居、3C和运动五大品类。时尚类推荐泳装、防晒衣；美妆类推荐防水化妆品；家居类推荐便携风扇、制冷杯；3C类推荐无线耳机、充电宝；运动类推荐瑜伽服、跑步装备。卖家需结合短视频趋势和达人合作，提升转化率。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1hQ1RFRERVX0dKWkNsQzVCTFRSdW9JM0ZjbVNtTTUtQ0Z6OTJDYk8weldoV09xRnVXQW1YUVlfdGtXYjJvYm1ZMzF2WnU?oc=5" },
  { id: "tiktok_new017", title: "TikTok美国推出独立应用TikTok Pro Events，聚焦世界杯等文化节点", content: "TikTok在美国推出独立应用TikTok Pro Events，专注于体育赛事、音乐节等文化节点的电商活动。该应用将整合直播购物、品牌合作和达人带货功能，首期聚焦2026年世界杯。品牌和卖家可提前布局相关周边产品，如球衣、纪念品等。此举将拓展TikTok的电商场景，吸引更多品牌合作。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE0tajRlTVRLTmNUUFBka3JaVkw2VnNVQllGTE5IZ05ncXQxT3NOdHcyb2QxenRqUER2c1NGNFB3a25vWHRQY0NJNU1zSzNFLWU4WTBiQmJ3?oc=5" },
  { id: "shein_new001", title: "SHEIN收紧美国物流管控，限制半托管和自运营商家自发货", content: "SHEIN发布美国市场物流新规，严格限制半托管和自运营商家使用自发货模式，强制要求使用平台指定物流服务。此举旨在打击“虚拟仓”发货行为，提升履约时效和用户体验。新规适用于所有美国站卖家，尤其是中小卖家需调整物流方案，可能增加物流成本。建议卖家提前与SHEIN官方物流合作，或转向平台仓配服务。", source: "亿邦动力网", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-29"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1Da2hZa0lteXg2bS1pMlRYVUVLQzhBaUduY1BfTVdpS3VYaGpyZUxYdlMxdXpOTU9RWE0zTVRLT21YdjVUamdndjNmcDBaTmlzTVlfTDhn?oc=5" },
  { id: "shein_new002", title: "SHEIN在法国被罚1.77亿元，合规风险持续发酵", content: "SHEIN因在法国市场涉及消费者权益问题，被法国监管机构处以1.77亿元人民币罚款。此前SHEIN已在多国面临合规调查，此次罚款进一步凸显其欧洲市场合规压力。建议SHEIN卖家关注产品合规性，尤其是标签、安全标准等，避免因平台政策调整导致下架或处罚。", source: "财新", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-29"), url: "https://news.google.com/rss/articles/CBMiXEFVX3lxTE1OWWdQSEprLW85WktRcC00SlluMUZBZml1MzVvUVJkenAtTHBsckdVbTQzeThHeW44WXJmeWVyNWNvTk1mazJ6OU5xa2FnY0FsTmZkY0ZZZVR1Z3dD?oc=5" },
  { id: "tiktok_new003", title: "TikTok Shop越南站6月8日全员开放OHC高级功能", content: "TikTok Shop越南商城宣布自6月8日起，向所有卖家开放OHC（Online Home Center）高级功能，该功能可提升商品展示和转化效率。此前OHC仅对部分卖家开放，此次全员开放将降低使用门槛，利好中小卖家。建议卖家及时了解功能细节，优化商品页以提升流量和销量。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-29"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE01TkpDN1hXWG90dlM3eUpuWUd4WDZnR2cyMG44MVAwQ0VhTl91d1pVUTZ5SEFXaXVPdmVhdjZnTVFNVkp6UldSQlZqdEREQmE5V1RIcHQ5dFg?oc=5" },
  { id: "tiktok_new004", title: "TikTok Shop黑五GMV占全年40%，高潜力类目与选品策略发布", content: "TikTok Shop数据显示，黑五期间GMV占全年40%，平台发布高潜力类目与选品策略，涵盖时尚、美妆、家居等。建议卖家提前布局黑五，重点投入高转化品类，利用短视频和直播带货提升销量。同时注意库存管理和物流时效，避免断货或延迟。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBlcHFldXQxSVRTck5PRlItNGNubWVHOGVjaTJWMmJUQU1IY0loU1BKaFNWQUpXRjIxQzdETXBjZEgtOEpMbWJkeVA5cnk?oc=5" },
  { id: "aliexpress_new005", title: "速卖通加码美韩拉美三大核心市场，TikTok巴西月活破1.34亿", content: "速卖通发布美、韩、拉美增长计划，加码三大核心市场投入，包括物流、营销和本地化运营。同时TikTok巴西月活跃用户突破1.34亿，社交电商潜力巨大。建议卖家关注速卖通在这些市场的政策倾斜，如降低佣金、提供流量扶持等，同时可结合TikTok巴西流量布局社交电商。", source: "亿邦动力网", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-05-29"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE55dmhsM284NkRXdTlpRXkwMXFSWEo1cVJ2X0h3WGU4bjNHR19zTkJkZHZMUV9CNFpLS3RvUjNzWDZ0dU1pWTd3T0JRYi1FX2pJVkpIY2d3?oc=5" },
  { id: "tiktok_new006", title: "TikTok Shop欧洲将新开8个站点，加速泛欧市场布局", content: "TikTok Shop宣布在欧洲新增8个站点，包括荷兰、波兰等国家，进一步拓展泛欧市场。此前TikTok Shop已在西班牙、法国等地上线，此次扩张将覆盖更多欧洲消费者。建议卖家提前注册新站点，了解当地合规要求，利用TikTok流量红利抢占市场。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-29"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE92WmQ0TVk5S1ZlQThZY2hZMjdUUU9CNl9iNWFhWDlzS0t1VkV3NUVFdWVtVHRsa0VaZjBwUXlBc3ZuMm9sLVFLZElOSFN4VGdodHdWSXBn?oc=5" },
  { id: "tiktok_new007", title: "亚马逊推新功能扶持新品，严管账号违规行为", content: "亚马逊推出新功能扶持新品推广，同时加强账号违规行为监管，包括刷单、虚假评论等。新功能可能包括流量倾斜、广告优惠等，旨在帮助卖家快速冷启动。建议卖家合规运营，利用新功能提升新品曝光，同时避免触碰平台红线。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-29"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTFBkeUR2OTUxMVZJSmIzRC1qdEowcUl3a25pd3FvVFQwWVdBbUNKdW4wV2tKUExTMXVrYk1za0pxanloSjlfbVZUMkxiQ053cmM?oc=5" },
  { id: "tiktok_new008", title: "TikTok Shop荷兰站点上线，开放品牌和创作者入驻", content: "TikTok Shop在荷兰正式上线，开放品牌和创作者入驻，支持在应用内直接购物。荷兰是TikTok Shop欧洲扩张的重要一站，此前已在西班牙、法国等地上线。建议卖家注册荷兰站点，利用TikTok流量和本地化运营策略抢占市场。", source: "Net Influencer", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-29"), url: "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNektYbjZXMFNnU3p3S0Nac0RDYjAwbWtWSEhuSE4tY2ltT2Y1c3VSamtVR1JuN3pmdGNEOUFUYW42OGw1NlJESXRSVDlydVdLdWtaMXBkbmJYeEpFY1ItNEVKN1NCMGZCbTc2cC15a2JpdHhneFlycU5MbUVSTzNLR3RMQVJkbDliQ0dMdlVzX2lIYnhQZHJrNnZNM1NaUEJvMzFxMThrZ3BxTU11b2xjbXlQb0cxOXVYMnJseVl5MmY?oc=5" },
  { id: "tiktok_new009", title: "TikTok Shop波兰站点即将上线，社交电商再拓新市场", content: "TikTok Shop计划在波兰推出，实现从浏览到购买的无缝体验。波兰是中东欧重要市场，电商增长迅速。建议卖家提前准备波兰语商品信息和本地化营销内容，利用TikTok短视频和直播带货功能开拓新市场。", source: "xyz.pl", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-29"), url: "https://news.google.com/rss/articles/CBMimAFBVV95cUxQLU1seGNwYngwNDM0TE1kSzk3c0hlNExhanpkSXIzR0ZOQ19mdjNCa21aM1JYVC1YQXlUVE8tY21jNnFRajVkaDkwZjZrdnByMXJ5Q2xxQU9udnlDMzVqbnJQRFB5QXRkQ0VJbnE2MU5YZEpZRnphdUt1Qk4tekdLQ0V4UExoQnFKVGx4Uk1TUFBfWGZBcTZsTg?oc=5" },
  { id: "tiktok_new010", title: "TikTok Shop跨境电商新增欧洲8国站点，卖家入驻门槛降低", content: "TikTok Shop跨境电商宣布新增欧洲8国站点，包括荷兰、波兰、瑞典等，进一步扩大欧洲覆盖。新站点将降低卖家入驻门槛，提供流量扶持和物流支持。建议卖家抓住早期红利，快速注册并上架热销品类，如时尚、美妆等。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBVTHM5Q0NuZ3ZUQ3dveDhTYURWMGtRSEFfNWtaa0V4enptNGNwamlIbkRoTkthd1Q5RXBiUm9nVlNTQlNMaHFFRi1XQWM?oc=5" },
  { id: "temu_new011", title: "Temu美国网页流量从去年关税冲击中悄然恢复", content: "Temu美国网页流量已从去年关税政策冲击中悄然恢复，用户访问量回升。Temu通过调整定价策略和优化供应链，维持了市场竞争力。建议卖家关注Temu美国站点的流量变化，及时调整选品和定价策略，利用平台流量红利提升销量。", source: "Sherwood News", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-29"), url: "https://news.google.com/rss/articles/CBMinwFBVV95cUxQM1lWV1Z2VFBUejMtMlJ6UTZZTzVIN3Q5VWtCT3liZmRZRmItcXRoaXNRTzVXM2gwZ3VzNGdVUzFUd0lkUGdJLXNTU19Dak94cEQ5R3kyRDB4UnlQem9ZQWNhVEp4Wm9GYkNRNGk2QXNLWWZWZzAtVmF5bTlPNFdETFpNZUU0SU0xckVNa2dBMXJwd1NHeXFFUEdJZ0JaN0E?oc=5" },
  { id: "shein_new012", title: "SHEIN收购可持续品牌Everlane，拓展环保时尚领域", content: "SHEIN宣布收购美国可持续时尚品牌Everlane，此举旨在提升品牌形象和拓展环保产品线。Everlane以透明定价和可持续材料著称，收购后SHEIN将整合其供应链和设计能力。建议卖家关注SHEIN品类扩张趋势，未来可能增加可持续产品需求。", source: "marketplace.org", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-29"), url: "https://news.google.com/rss/articles/CBMie0FVX3lxTE5aNnhXQmUtRER6UGV3WjhURFNJMlN5Xzd1YTBGeFRVUE16RGZFZUM3UzZEWEtaYTFFbEVaakYyQk1DbTNPR0l2Nk9BRDZaMXVwMER3NFdiNnQwc2dIcjMydmkxdU81Z3hONnZVV3VNUk5Eb21xM2c2M210OA?oc=5" },
  { id: "temu_new013", title: "英国零售业呼吁向Temu等平台征收小包税", content: "英国零售业联合呼吁政府向Temu等跨境电商平台征收“小包税”，以保护本土零售商。该税种针对低价进口商品，可能增加Temu卖家的成本。建议卖家关注英国政策动向，提前调整定价策略，或考虑海外仓备货以降低影响。", source: "白鲸出海", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFByZzhLdk9yRzFUX2JVNnZxZ1ZBR25vZV9jRjRMSUVKaHdKNDQydlh0bnp6amlLTWFXQ2pDMWUyb0RjU2RUNlJ4S0M2MGU?oc=5" },
  { id: "aliexpress_new014", title: "速卖通与巴西邮政签署备忘录，优化拉美物流", content: "速卖通与巴西邮政签署谅解备忘录，合作优化巴西市场物流配送，包括清关、最后一公里等。巴西是速卖通重点市场，此次合作将提升履约时效和用户体验。建议卖家关注速卖通巴西站点的物流政策变化，利用更高效的物流服务拓展拉美市场。", source: "白鲸出海", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-05-29"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1sb1F2NDBHcXpYQ054azdudURoblRGTFFBM1kwbFNCS3gtOWFOMkJaaE5ob0tlSmsxbGhHQ3g1UVVKVEpYMGdub2g1bkZGc21ERmtONS0yU3A?oc=5" },
  { id: "tiktok_new015", title: "TikTok Shop西班牙五分之一电商卖家已入驻", content: "据Ecommerce News报道，西班牙五分之一电商卖家已在TikTok Shop开店，社交电商渗透率快速提升。TikTok Shop在西班牙提供本地化物流和支付支持，吸引大量卖家入驻。建议卖家关注西班牙市场机会，利用TikTok短视频和直播带货功能提升销量。", source: "Ecommerce News - Europe", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-29"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxNVUtzZ2phZll5YjF0VElaUFJvdVB4NDBCUEtHQ0IyRXpzd3JYYUtZajIxQnVWckt1OUpjWGlJc25DNlc4UmlkYTNQZThxLXh1NkRoWndIeWMtbEt0MXl5cUxUR0xEanBRVi1hT3ZWbnFETFlwbVNJMU5fVDJFWHJzR3plYnY?oc=5" },
  { id: "tiktok_new001", title: "TikTok Shop越南商城6月8日起全员开放OHC高级功能", content: "TikTok Shop越南商城宣布自6月8日起向所有卖家开放OHC（Order Handling Center）高级功能。该功能旨在提升订单处理效率，包括自动化分拣、智能库存管理等。越南市场是TikTok Shop在东南亚的重要布局，此次全员开放将降低中小卖家的运营门槛，预计将吸引更多本地卖家入驻。卖家需关注功能使用教程，以优化履约流程。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-05"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE01TkpDN1hXWG90dlM3eUpuWUd4WDZnR2cyMG44MVAwQ0VhTl91d1pVUTZ5SEFXaXVPdmVhdjZnTVFNVkp6UldSQlZqdEREQmE5V1RIcHQ5dFg?oc=5" },
  { id: "tiktok_new002", title: "黑五GMV占全年40%！TikTok Shop高潜力类目与选品策略", content: "据雨果跨境报道，TikTok Shop在黑五期间的GMV占全年40%，凸显大促对平台的重要性。文章分析了高潜力类目，如美妆、服饰、3C配件等，并给出选品策略：利用短视频和直播测款，关注季节性需求，以及结合平台算法推荐。卖家应提前布局黑五，优化内容创作和广告投放，以抓住流量高峰。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-05"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBlcHFldXQxSVRTck5PRlItNGNubWVHOGVjaTJWMmJUQU1IY0loU1BKaFNWQUpXRjIxQzdETXBjZEgtOEpMbWJkeVA5cnk?oc=5" },
  { id: "tiktok_new003", title: "TikTok美国上线酒店景点预订功能，跨境卖家流量逻辑生变", content: "TikTok美国站上线酒店和景点预订功能，标志着平台从电商向本地生活服务拓展。此举将改变流量分配逻辑，本地服务内容可能抢占电商流量。跨境卖家需调整内容策略，避免与本地服务类内容直接竞争，同时可探索与旅游相关的商品推广，如旅行配件、服饰等。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-05"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE5MOWFVUzlCdUNZVjZBZU03Y0JramR2QndsVHozOW82bS1MT3FTVTVuT012OHV5UDJ6QURyNGhvVTVzTnoyT0VzcE0zUEs?oc=5" },
  { id: "aliexpress_new004", title: "阿里出海不再隐身：速卖通加速品牌化与本地化", content: "36氪出海报道，阿里速卖通正从低调转向积极出海，重点布局美、韩、拉美市场。速卖通推出品牌化策略，吸引更多品牌商家入驻，并加强本地化运营，如本地仓储和支付。对卖家而言，品牌化趋势要求提升产品质量和品牌建设，同时可利用速卖通的物流和流量支持拓展新市场。", source: "36氪出海", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-06-05"), url: "https://news.google.com/rss/articles/CBMiRkFVX3lxTE1VTWY1MmxUMDM3MHN3OS01TUpfQ2tqTWZaN3Jvb19JQkp6cnVaaEp1b05HM0R1WUI1alpzV0lVaWtwRTlkS0E?oc=5" },
  { id: "aliexpress_new005", title: "速卖通与巴西邮政签署谅解备忘录，提升拉美物流", content: "速卖通与巴西邮政签署谅解备忘录，旨在优化巴西市场的物流配送。合作将缩短配送时效，降低物流成本，并提升清关效率。巴西是拉美最大电商市场，此举将增强速卖通在该地区的竞争力。卖家可借此机会拓展巴西市场，但需注意巴西的税务和合规要求。", source: "白鲸出海", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-06-05"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1sb1F2NDBHcXpYQ054azdudURoblRGTFFBM1kwbFNCS3gtOWFOMkJaaE5ob0tlSmsxbGhHQ3g1UVVKVEpYMGdub2g1bkZGc21ERmtONS0yU3A?oc=5" },
  { id: "tiktok_new006", title: "TikTok Shop新增开放波兰、荷兰等8个欧洲市场入驻申请", content: "TikTok Shop宣布新增开放波兰、荷兰、比利时、瑞典、葡萄牙、捷克、匈牙利、罗马尼亚8个欧洲市场的入驻申请。至此，TikTok Shop欧洲站点已覆盖大部分欧盟国家。卖家可申请入驻，但需满足本地合规要求，如增值税注册、产品安全认证等。此举为卖家提供了进入欧洲市场的低门槛渠道。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-05"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1majlNYzAyMUhGV0VJQU1oWEk4c0xOX1p3NFZvanBlemhVb3dzUklZYjZfWl9UQzVubEE3bEc0blk2VnlKRC1wTG9RWEFmLTNNUXZpNnplV3E?oc=5" },
  { id: "temu_new007", title: "Temu欧洲运营模式解析：卖家、消费者、规则与责任", content: "RetailDetail EU详细解析Temu在欧洲的运营模式：卖家主要为中国直发，消费者享受低价但面临较长配送时间（7-15天）。Temu承担平台责任，但需遵守欧盟数字服务法（DSA）和产品安全法规。近期Temu因不合规商品被罚，卖家需确保产品符合CE标志、REACH等标准。", source: "RetailDetail EU", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-05"), url: "https://news.google.com/rss/articles/CBMirAFBVV95cUxOM1dESVFoWDlKbmY4X21lTGM0N3pDRkpyU2tIR1VpYnZEcGJib1lTU2treFJ3QzlpaklNUEJ5UGV3TnZseUZncHRtX2pSQkFtSVhMa1ByUGZ1elRUOFBobldTblVOaWhlQThYZ00xcVNjaDljVTEwTk50MENOWFEzLWtCTkFycHE3MXJEQUF4SlNxV0VlY0RQckRyZkJ4TWRXRndmcnZqX2taWUd6?oc=5" },
  { id: "temu_new008", title: "Temu卖家遭遇直邮取消、佣金罚款新规，利润承压", content: "雨果跨境报道，Temu近期调整政策：取消直邮模式，改为平台统一配送；引入佣金制度，并加大罚款力度。卖家反映利润空间被压缩，部分中小卖家面临生存压力。建议卖家优化成本结构，提升产品品质以避免罚款，同时关注平台后续政策变化。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-05"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9TWkhjUVptRk1DWVhDTEs4WkFQUXVzekdaYUNhRHpJWEMzTC1PMkkxWnV6eDg5RWtsdFhxWEpxZC1SelJFZ1Fua1JKZ0o?oc=5" },
  { id: "tiktok_new009", title: "TikTok Shop演变为泛欧市场平台，欧洲电商格局生变", content: "Ecommerce News Europe报道，TikTok Shop正从单一国家站点向泛欧市场平台演进，整合物流、支付和合规体系。卖家可通过一个账号覆盖多个欧洲国家，但需遵守统一规则。此举将加剧与亚马逊、速卖通的竞争，卖家需提前布局多语言内容和本地化运营。", source: "Ecommerce News - Europe", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-05"), url: "https://news.google.com/rss/articles/CBMigwFBVV95cUxNUjBOMjlnMFNMeE14dGhBaDFGdmNHeC1mTGhnT1E2a3JHWWZSeUN6VldtYjAzUmFfNkxTa293a1FFeGxjejRCVVlkV0E3dENTblJqR1JNUi1SNUlKWGpNYW5rbnkzSjA4Skt6TzF1LV9mdHRvYW8yNHNHSGNUMFpJUG9UYw?oc=5" },
  { id: "joybuy_new010", title: "京东Joybuy开放欧洲品牌招商，拟复制211当日达模式", content: "京东旗下Joybuy平台开放欧洲品牌招商，计划复制国内“211当日达”仓配模式，即在欧洲建立本地仓库，实现上午下单、下午送达。此举旨在提升欧洲市场的履约体验，吸引品牌商家入驻。卖家需具备品牌资质和欧洲本地库存能力，以享受物流优势。", source: "亿邦动力网", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-06-05"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBWY0hHb3VvcnBNWlVNaGw5SnV4OE5sclFUTXU3WHNhdzlTcXloX2dJSTFyRTdVSzJkZHc3SXVrUWpFUkFyQm5QQmZKSnV0TTcwSjlEanZB?oc=5" },
  { id: "shein_new011", title: "英国零售业要求向SHEIN、Temu征收“小包税”", content: "英国零售业联合呼吁政府对SHEIN和Temu等跨境电商平台征收“小包税”，以抵消低价进口商品对本土零售的冲击。目前英国对价值低于135英镑的进口商品免征增值税，若征税实施，将提高SHEIN和Temu商品的价格，影响其竞争力。卖家需关注政策动态，调整定价策略。", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2025-06-05"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE82TXp2azcwUzQ5OGt6TlMxalhBWmpGWnhvN3BVbnBqU3hFZU1feXNiallPWDBTQVdGSzF3aUlHZWZaMXFvbnNEcWs2LWk?oc=5" },
  { id: "tiktok_new012", title: "TikTok Shop五大品类选品清单：夏季爆款全解析", content: "雨果跨境发布TikTok Shop夏季选品清单，涵盖美妆、服饰、家居、3C配件、运动户外五大品类。具体爆款包括防晒霜、连衣裙、便携风扇、手机支架、瑜伽服等。建议卖家结合短视频趋势，如#SummerVibes话题，制作创意内容，并利用TikTok广告精准投放。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-05"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1hQ1RFRERVX0dKWkNsQzVCTFRSdW9JM0ZjbVNtTTUtQ0Z6OTJDYk8weldoV09xRnVXQW1YUVlfdGtXYjJvYm1ZMzF2WnU?oc=5" },
  { id: "tiktok_new013", title: "TikTok Shop荷兰站上线，开放品牌和创作者入驻", content: "Net Influencer报道，TikTok Shop在荷兰正式上线，向本地品牌和创作者开放。荷兰是欧洲重要电商市场，此举将丰富TikTok Shop的欧洲版图。卖家可申请入驻，但需提供荷兰本地银行账户和增值税号。建议卖家提前准备荷兰语内容，并利用本地网红推广。", source: "Net Influencer", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-05"), url: "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNektYbjZXMFNnU3p3S0Nac0RDYjAwbWtWSEhuSE4tY2ltT2Y1c3VSamtVR1JuN3pmdGNEOUFUYW42OGw1NlJESXRSVDlydVdLdWtaMXBkbmJYeEpFY1ItNEVKN1NCMGZCbTc2cC15a2JpdHhneFlycU5MbUVSTzNLR3RMQVJkbDliQ0dMdlVzX2lIYnhQZHJrNnZNM1NaUEJvMzFxMThrZ3BxTU11b2xjbXlQb0cxOXVYMnJseVl5MmY?oc=5" },
  { id: "aliexpress_new014", title: "阿里速卖通发布美、韩、拉美增长计划，加速全球化", content: "36氪报道，阿里速卖通发布针对美国、韩国、拉美市场的增长计划，包括本地仓储、支付优化和营销支持。美国市场将加强品牌招商，韩国市场推出韩语客服，拉美市场深化与巴西邮政合作。卖家可借助这些计划拓展高潜力市场，但需注意各国合规差异。", source: "36kr.com", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-06-05"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTFB2WDBfdkVMQzVTS0pNQzQ0Tm5nbEtyamRDSXdjc3VJY0dmTXlGMXJhbmVRaXhvX1pETjVBYmg1RS1Ba0EyVTdCZHhCLUhnQQ?oc=5" },
  { id: "tiktok_new015", title: "亚马逊推新功能扶持新品，TikTok Shop欧洲新开8站", content: "亿邦动力网跨境电商周报显示，亚马逊推出新品扶持功能，如Vine计划优惠、广告折扣等，帮助卖家推广新品。同时TikTok Shop欧洲新开8个站点，加速欧洲布局。卖家应利用亚马逊新品工具提升转化，同时关注TikTok Shop新站点的流量红利。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-05"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE92WmQ0TVk5S1ZlQThZY2hZMjdUUU9CNl9iNWFhWDlzS0t1VkV3NUVFdWVtVHRsa0VaZjBwUXlBc3ZuMm9sLVFLZElOSFN4VGdodHdWSXBn?oc=5" },
  { id: "tiktok_new016", title: "TikTok Shop波兰站即将上线，从浏览到购买一键转化", content: "xyz.pl报道，TikTok Shop即将在波兰上线，允许用户直接在应用内购买。波兰是中东欧最大电商市场，此举将吸引大量本地卖家和品牌。卖家需准备波兰语产品描述和本地支付方式，如Blik。预计初期将有一波流量红利，建议尽早入驻。", source: "xyz.pl", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-05"), url: "https://news.google.com/rss/articles/CBMimAFBVV95cUxQLU1seGNwYngwNDM0TE1kSzk3c0hlNExhanpkSXIzR0ZOQ19mdjNCa21aM1JYVC1YQXlUVE8tY21jNnFRajVkaDkwZjZrdnByMXJ5Q2xxQU9udnlDMzVqbnJQRFB5QXRkQ0VJbnE2MU5YZEpZRnphdUt1Qk4tekdLQ0V4UExoQnFKVGx4Uk1TUFBfWGZBcTZsTg?oc=5" },
  { id: "temu_new017", title: "Temu因销售不合规商品被欧盟罚款2亿欧元", content: "纽约时报中文网报道，欧盟对Temu处以2亿欧元罚款，原因是平台上存在大量不合规商品，如缺乏CE标志、不符合安全标准等。罚款依据欧盟数字服务法（DSA）和产品安全法规。卖家需立即自查产品合规性，否则可能面临下架和罚款。建议聘请第三方合规机构审核。", source: "纽约时报中文网", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-05"), url: "https://news.google.com/rss/articles/CBMidEFVX3lxTE5ZM25NakRjMFR1SDl6Z3hYRUZpMzJoWVpPbGNoUWdIRG56RGpGWjBqb0p1bFBnOXRPQV80aXloV0d2T2lHUEJZWENWSWVlRXkyaFVjVnYyT3BRUVpDamYyTHJZZ1VxTHQxU2NoS3RCVGJhQlY1?oc=5" },
  { id: "temu_new018", title: "Temu年流量飙升56.9%，Y2物流助力卖家稳赢全球", content: "搜狐网报道，Temu年流量同比增长56.9%，主要得益于低价策略和社交裂变。Y2物流作为Temu的合作伙伴，提供从中国直发的物流解决方案，帮助卖家降低物流成本。卖家应优化产品页面和定价，以承接流量增长，同时关注物流时效和客户评价。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-05"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE5ReEVYNkVxMXFsSXVLOS1Fei1GMzBrRXhuRVh3NXBYbWJxY29CckphMEh4V2dnTENqTXdhVkJEYlQwSWRZMk9WemtMSGo4U19x?oc=5" },
  { id: "tiktok_new019", title: "TikTok Shop欧洲市场热销品类：这些商品正在爆单", content: "雨果跨境发布TikTok Shop欧洲市场热销品类，包括美妆（如睫毛膏）、服饰（如运动裤）、家居（如收纳盒）、3C（如无线耳机）、宠物用品等。卖家应关注季节性需求，如夏季泳装、冬季保暖用品。建议利用TikTok广告测试市场反应，并优化本地化内容。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-05"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBWQnNoTmpDd2RzOHo0NzBGTGF2dk90SkJVOXRhTjlfLW5EQWExbGxOSWh3QVhYLVpxbkFOZ3I2Mm00WHUtWVhRQm1nOE4?oc=5" },
  { id: "temu_new001", title: "Temu在欧盟被罚2亿欧元，因销售不合规商品面临合规整改压力", content: "欧盟委员会对Temu处以2.32亿美元（约2亿欧元）罚款，原因是平台销售大量不合规商品，包括不安全玩具、电子产品等。此次处罚依据《数字服务法》（DSA），要求Temu加强卖家审核和商品抽检。Temu需在30天内提交整改方案，否则面临每日罚款。受此影响，Temu欧洲站卖家需提供CE认证、产品检测报告等合规文件，不合规商品将被下架。建议卖家立即自查在售商品，尤其是儿童用品、电子产品和纺织品，避免因违规导致店铺受限。", source: "纽约时报中文网", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-04"), url: "https://news.google.com/rss/articles/CBMidEFVX3lxTE5ZM25NakRjMFR1SDl6Z3hYRUZpMzJoWVpPbGNoUWdIRG56RGpGWjBqb0p1bFBnOXRPQV80aXloV0d2T2lHUEJZWENWSWVlRXkyaFVjVnYyT3BRUVpDamYyTHJZZ1VxTHQxU2NoS3RCVGJhQlY1?oc=5" },
  { id: "temu_new002", title: "Temu取消直邮模式，引入佣金和严格罚款，卖家利润空间压缩", content: "Temu近期调整卖家政策，取消原有直邮模式，改为平台统一配送，同时引入佣金制度（约15%-20%），并加大罚款力度。卖家反馈，新规下利润被大幅压缩，部分品类甚至亏损。例如，因物流延迟或差评，罚款可达订单金额的30%。此外，Temu要求卖家承担退货费用，进一步增加成本。建议卖家重新核算成本，优化定价策略，并关注平台规则更新，避免因违规导致高额罚款。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-04"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9TWkhjUVptRk1DWVhDTEs4WkFQUXVzekdaYUNhRHpJWEMzTC1PMkkxWnV6eDg5RWtsdFhxWEpxZC1SelJFZ1Fua1JKZ0o?oc=5" },
  { id: "temu_new003", title: "Temu美国网页流量从去年关税冲击中悄然恢复，市场韧性显现", content: "据Sherwood News报道，Temu美国网页流量已从去年关税政策调整导致的下跌中恢复，目前接近历史高位。Temu通过优化供应链和增加本地仓储，降低了关税影响。同时，平台加大广告投放，吸引价格敏感消费者。然而，美国监管环境趋严，Temu仍需应对数据安全和消费者保护方面的挑战。卖家应关注Temu美国站流量波动，灵活调整库存和营销策略。", source: "Sherwood News", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-04"), url: "https://news.google.com/rss/articles/CBMinwFBVV95cUxQM1lWV1Z2VFBUejMtMlJ6UTZZTzVIN3Q5VWtCT3liZmRZRmItcXRoaXNRTzVXM2gwZ3VzNGdVUzFUd0lkUGdJLXNTU19Dak94cEQ5R3kyRDB4UnlQem9ZQWNhVEp4Wm9GYkNRNGk2QXNLWWZWZzAtVmF5bTlPNFdETFpNZUU0SU0xckVNa2dBMXJwd1NHeXFFUEdJZ0JaN0E?oc=5" },
  { id: "temu_new004", title: "Temu半托管Y2模式上线，支持卖家自发货，降低库存风险", content: "Temu推出半托管Y2模式，允许卖家从国内直接发货，无需海外仓备货。该模式履约时效为21天（备货8-12个工作日+运输3-9天），平台提供末端配送和流量支持。Y2模式主要面向中小卖家，降低库存和资金压力。但卖家需自行承担头程物流和退货成本。建议有稳定供应链的卖家尝试此模式，同时注意控制退货率，避免额外损失。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-04"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE01TkRJUEswLUpuWFZKLWhIbU83c2pDdDhTaE96Q3V5TkdEaUZHXzVVU2xDU2g1ai1hRlVOZGh5YWxkakEwM1hGMHprRE1BQm12?oc=5" },
  { id: "tiktok_new005", title: "TikTok Shop升级为泛欧市场，6月新开8个欧洲国家站点", content: "TikTok Shop宣布在欧洲市场扩容，6月将在德国、法国、意大利、西班牙、荷兰、波兰、爱尔兰、比利时8国新开站点，实现泛欧覆盖。此前TikTok Shop已在英国、瑞典等地上线。新站点将支持本地卖家入驻，并提供跨境物流解决方案。TikTok Shop还计划推出本地化内容营销工具，帮助卖家触达欧洲消费者。建议卖家提前准备本地化产品描述和合规文件，抓住早期流量红利。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-04"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE13bkJSbVJ6OTViSVZWWUF5RVNISFdTZjR6TGpYM0JrUlo3eG9rZm4tWlV2Tlk5QUlLN3NOcjc3WFJOMlNHNTR6Tkd1ZG5SckVYdmt1a0JiQ00?oc=5" },
  { id: "tiktok_new006", title: "TikTok Shop荷兰站上线，向本地品牌和创作者开放应用内购物", content: "TikTok Shop正式在荷兰推出，允许本地品牌和创作者通过应用内购物功能销售商品。荷兰站支持短视频、直播和商品橱窗等多种购物形式。TikTok Shop还提供物流和支付本地化服务，包括与荷兰邮政合作。此举标志着TikTok Shop加速欧洲本地化布局。卖家可关注荷兰市场，尤其是时尚、美妆和家居品类，利用TikTok的社交属性实现转化。", source: "Net Influencer", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-04"), url: "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNektYbjZXMFNnU3p3S0Nac0RDYjAwbWtWSEhuSE4tY2ltT2Y1c3VSamtVR1JuN3pmdGNEOUFUYW42OGw1NlJESXRSVDlydVdLdWtaMXBkbmJYeEpFY1ItNEVKN1NCMGZCbTc2cC15a2JpdHhneFlycU5MbUVSTzNLR3RMQVJkbDliQ0dMdlVzX2lIYnhQZHJrNnZNM1NaUEJvMzFxMThrZ3BxTU11b2xjbXlQb0cxOXVYMnJseVl5MmY?oc=5" },
  { id: "tiktok_new007", title: "TikTok Shop波兰站即将上线，从浏览到购买无缝转化", content: "TikTok Shop计划在波兰推出，允许用户直接在应用内购买商品。波兰是欧洲增长最快的电商市场之一，TikTok Shop将借助其庞大的用户基础（月活超1000万）推动社交电商。平台将提供本地化支付和物流支持，包括与波兰快递公司合作。卖家可提前布局波兰市场，重点关注时尚、电子产品和美妆品类，利用TikTok的算法推荐实现精准营销。", source: "xyz.pl", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-04"), url: "https://news.google.com/rss/articles/CBMimAFBVV95cUxQLU1seGNwYngwNDM0TE1kSzk3c0hlNExhanpkSXIzR0ZOQ19mdjNCa21aM1JYVC1YQXlUVE8tY21jNnFRajVkaDkwZjZrdnByMXJ5Q2xxQU9udnlDMzVqbnJQRFB5QXRkQ0VJbnE2MU5YZEpZRnphdUt1Qk4tekdLQ0V4UExoQnFKVGx4Uk1TUFBfWGZBcTZsTg?oc=5" },
  { id: "tiktok_new008", title: "TikTok Shop爱尔兰加码全开发，欧洲本地化竞争提速", content: "TikTok Shop在爱尔兰加大投入，推出全托管模式，并招募本地卖家。爱尔兰作为英语国家，是TikTok Shop进入欧洲市场的桥头堡。平台提供本地仓储和配送服务，缩短履约时效。同时，TikTok Shop与爱尔兰企业局合作，支持本地品牌出海。卖家可借助爱尔兰站测试欧洲市场，利用TikTok的社交属性提升品牌知名度。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-04"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE16WGUxNlR1REZIaWJROFBVckVoLVRuQ2pScmVCWENIWmdPNmg4anJOLTNRX0tYaDNYak5nUU0zZmUybk5YZWp0clVqNkk?oc=5" },
  { id: "tiktok_new009", title: "TikTok Shop欧洲热销品类揭晓：时尚、美妆、家居爆单", content: "TikTok Shop欧洲市场热销品类包括时尚（服装、配饰）、美妆（护肤品、彩妆）、家居（小家电、装饰品）等。其中，夏季爆款如防晒衣、泳装、便携风扇等销量激增。TikTok Shop通过短视频和直播驱动转化，卖家需注重内容创意和本地化。建议卖家参考选品清单，结合欧洲消费者偏好（如可持续性、极简设计）优化产品。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-04"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBWQnNoTmpDd2RzOHo0NzBGTGF2dk90SkJVOXRhTjlfLW5EQWExbGxOSWh3QVhYLVpxbkFOZ3I2Mm00WHUtWVhRQm1nOE4?oc=5" },
  { id: "tiktok_new010", title: "TikTok Shop西班牙站渗透率提升，五分之一电商卖家已入驻", content: "据Ecommerce News报道，西班牙五分之一电商卖家已在TikTok Shop开店。TikTok Shop西班牙站自2024年上线以来，通过本地化运营和直播带货迅速增长。平台提供佣金优惠和物流支持，吸引中小卖家。西班牙消费者对社交电商接受度高，时尚和电子产品热销。卖家可考虑入驻西班牙站，利用TikTok的算法推荐获取流量。", source: "Ecommerce News - Europe", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-04"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxNVUtzZ2phZll5YjF0VElaUFJvdVB4NDBCUEtHQ0IyRXpzd3JYYUtZajIxQnVWckt1OUpjWGlJc25DNlc4UmlkYTNQZThxLXh1NkRoWndIeWMtbEt0MXl5cUxUR0xEanBRVi1hT3ZWbnFETFlwbVNJMU5fVDJFWHJzR3plYnY?oc=5" },
  { id: "joybuy_new011", title: "京东Joybuy开放欧洲品牌招商，拟复制“211当日达”仓配模式", content: "京东旗下跨境电商平台Joybuy宣布开放欧洲品牌招商，计划复制国内“211当日达”仓配模式，即在欧洲主要市场建立本地仓储和配送网络，实现下单后当日或次日达。Joybuy将重点招募3C、家电、家居等品类品牌商，并提供流量和营销支持。此举旨在与亚马逊、Temu等竞争。卖家可关注Joybuy的招商政策，利用京东的物流优势提升欧洲市场履约体验。", source: "亿邦动力网", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-06-04"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBWY0hHb3VvcnBNWlVNaGw5SnV4OE5sclFUTXU3WHNhdzlTcXloX2dJSTFyRTdVSzJkZHc3SXVrUWpFUkFyQm5QQmZKSnV0TTcwSjlEanZB?oc=5" },
  { id: "aliexpress_new012", title: "速卖通发布美、韩、拉美增长计划，欧盟合规压力下战略转移", content: "速卖通发布增长计划，重点押注美国、韩国和拉美市场，以应对欧盟日益严格的合规要求。在美国，速卖通将加强本地仓储和配送，提升履约时效；在韩国，与CJ物流合作，推出“次日达”服务；在拉美，与巴西邮政签署MOU，加速物流网络建设。速卖通还计划降低卖家佣金，吸引更多品牌入驻。卖家可关注速卖通在这些市场的扶持政策，调整运营重心。", source: "36氪", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-06-04"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTFB2WDBfdkVMQzVTS0pNQzQ0Tm5nbEtyamRDSXdjc3VJY0dmTXlGMXJhbmVRaXhvX1pETjVBYmg1RS1Ba0EyVTdCZHhCLUhnQQ?oc=5" },
  { id: "shein_new013", title: "英国零售业呼吁向SHEIN、Temu征收“小包税”，跨境卖家面临成本上升", content: "英国零售业联盟向政府施压，要求对SHEIN、Temu等跨境电商平台征收“小包税”，即对价值低于135英镑的进口商品征收增值税和关税。目前，这些平台利用“小额豁免”政策免税进入英国市场，对本土零售商造成冲击。若政策实施，跨境卖家成本将增加20%以上。建议卖家提前调整定价策略，并考虑在英国设立海外仓以规避风险。", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2025-06-04"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE82TXp2azcwUzQ5OGt6TlMxalhBWmpGWnhvN3BVbnBqU3hFZU1feXNiallPWDBTQVdGSzF3aUlHZWZaMXFvbnNEcWs2LWk?oc=5" },
  { id: "shein_new014", title: "SHEIN收购可持续品牌Everlane，交易金额1亿美元，面临环保审查", content: "SHEIN正式宣布收购美国可持续时尚品牌Everlane，交易金额约1亿美元。此举旨在提升SHEIN在可持续领域的形象，但引发外界对其环保承诺的质疑。Everlane以透明供应链和环保材料著称，而SHEIN此前因快时尚模式被批评。收购后，SHEIN计划将Everlane的可持续实践推广至全平台。卖家可关注SHEIN的品类扩张，尤其是环保产品线的机会。", source: "ESG Dive", type: "press", platform: "shein", dimension: "", date: new Date("2025-06-04"), url: "https://news.google.com/rss/articles/CBMieEFVX3lxTE5sNWQxU0FjZUYtcURKZ0JPWFN3dkZMWWxTa1VKUXhzNTVIRmtLeURmaV9iVUlKdkhUTWxMTTBYUkVGUlplamF3OW9ULVhrTks2QmhZRm91U2pGNlE4WWlpVFAwQkd6czd0dWVqWjJldXdfc1Jhb2c4Sg?oc=5" },
  { id: "tiktok_new015", title: "亚马逊推新功能扶持新品，TikTok Shop欧洲将新开8个站点", content: "亚马逊推出新功能，帮助卖家推广新品，包括“新品加速器”和“Vine计划”升级，提供流量和评论支持。同时，TikTok Shop宣布欧洲新开8个站点，加速社交电商布局。亚马逊卖家可借助新功能提升新品曝光，但需注意竞争加剧。TikTok Shop卖家则应抓住欧洲新站点的早期红利，快速布局。", source: "Moomoo", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-04"), url: "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1hdHRMNTd1UWU1bi1wTnVzV2FfbVJ1RFloV1RqdUcza2trZklmSWlMa1FzWGNtc3FTUGlFdEV4SGc0dTRnY3g0RGdESURuMmxSQ1BRcWJpRjdfZw?oc=5" },
  { id: "temu_new016", title: "Temu在越南封禁18个月后蓄力重生，但美国欧洲仍是重点", content: "Temu在越南因合规问题被封禁18个月后，正计划重新进入市场。然而，Temu的核心市场仍是美国和欧洲，贡献了大部分营收。在越南，Temu将采取更严格的卖家审核和本地化策略。卖家应关注Temu在越南的重新开放机会，但需注意东南亚市场的合规风险。建议优先深耕欧美市场，确保业务稳定。", source: "白鲸出海", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-04"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE8yUVJFdWNralBjSThTMVE0ZC1RR3I1YXgzYVdCNFlkVDl2T1JCQ0hHckNkd1FweUhLaEtTbHkzNFhZbXB4OVJSY191bk8?oc=5" },
  { id: "temu_new001", title: "Temu被欧盟罚款2亿欧元，因销售不合规商品面临合规整改压力", content: "欧盟委员会对Temu处以2亿欧元（约2.32亿美元）罚款，原因是平台销售大量不合规商品，包括不安全玩具、假冒化妆品等。此次罚款是欧盟《数字服务法》（DSA）生效后对跨境电商平台的最大处罚之一。Temu需在30天内提交整改方案，否则将面临每日罚款。受此影响，Temu欧洲站卖家需立即下架无CE认证、无合规标签的商品，并加强供应链审核。建议卖家优先完成欧盟合规认证，避免账户冻结。", source: "纽约时报中文网", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMidEFVX3lxTE5ZM25NakRjMFR1SDl6Z3hYRUZpMzJoWVpPbGNoUWdIRG56RGpGWjBqb0p1bFBnOXRPQV80aXloV0d2T2lHUEJZWENWSWVlRXkyaFVjVnYyT3BRUVpDamYyTHJZZ1VxTHQxU2NoS3RCVGJhQlY1?oc=5" },
  { id: "tiktok_new002", title: "TikTok Shop六月新增8个欧洲站点，加速欧洲市场扩张", content: "TikTok Shop宣布将于2025年6月新增8个欧洲国家站点，包括德国、法国、意大利、西班牙、荷兰、比利时、瑞典和波兰。至此，TikTok Shop欧洲站将覆盖超过15个国家。平台同步推出本地化物流方案，与当地邮政合作提供配送服务。卖家需注意各国增值税（VAT）注册要求，并准备本地化商品描述。建议优先布局高需求品类如美妆、服饰和电子产品。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE13bkJSbVJ6OTViSVZWWUF5RVNISFdTZjR6TGpYM0JrUlo3eG9rZm4tWlV2Tlk5QUlLN3NOcjc3WFJOMlNHNTR6Tkd1ZG5SckVYdmt1a0JiQ00?oc=5" },
  { id: "aliexpress_new003", title: "速卖通发布美、韩、拉美增长计划，全面加码三大核心市场", content: "阿里速卖通公布2026年增长计划，将全面加码美国、韩国和拉美三大核心市场。在美国市场，速卖通将加大广告投入并优化物流时效；韩国市场推出Brand+品牌出海计划，今年市场投入同比翻三倍；拉美市场则与巴西邮政签署MOU，加速本地物流网络建设。此举旨在应对欧盟合规压力，分散市场风险。卖家可重点关注美国站品牌化运营、韩国站高客单价品类，以及拉美站物流成本优化。", source: "36kr.com", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTFB2WDBfdkVMQzVTS0pNQzQ0Tm5nbEtyamRDSXdjc3VJY0dmTXlGMXJhbmVRaXhvX1pETjVBYmg1RS1Ba0EyVTdCZHhCLUhnQQ?oc=5" },
  { id: "tiktok_new004", title: "TikTok Shop波兰站即将上线，社交电商进军中东欧市场", content: "TikTok Shop计划在波兰推出电商服务，实现从浏览到购买的闭环。波兰是中东欧最大的电商市场之一，拥有超过3000万互联网用户。TikTok Shop将采用短视频和直播带货模式，初期重点招募本地卖家及跨境卖家。波兰站将支持本地货币结算，并提供波兰语客服。卖家需提前准备波兰语商品描述和本地化营销内容，建议关注时尚、家居和个护品类。", source: "xyz.pl", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMimAFBVV95cUxQLU1seGNwYngwNDM0TE1kSzk3c0hlNExhanpkSXIzR0ZOQ19mdjNCa21aM1JYVC1YQXlUVE8tY21jNnFRajVkaDkwZjZrdnByMXJ5Q2xxQU9udnlDMzVqbnJQRFB5QXRkQ0VJbnE2MU5YZEpZRnphdUt1Qk4tekdLQ0V4UExoQnFKVGx4Uk1TUFBfWGZBcTZsTg?oc=5" },
  { id: "tiktok_new005", title: "TikTok Shop美区直播拍卖时均GMV为普通直播4倍，年中促加码", content: "TikTok Shop美国区在年中大促中加码直播拍卖模式，数据显示直播拍卖的时均GMV是普通直播的4倍。该模式对标美国直播拍卖平台Whatnot，已向中国多品类商家开放，包括卡牌、收藏品、二手奢侈品等。平台提供佣金优惠和流量扶持。卖家可尝试直播拍卖形式，但需注意美国各州对拍卖的法规要求，并准备专业主播团队。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9PMDZUSXVEcWRGSHdaa3BtTmVGaVBfVHVqbnBKWjltNlFVWW5heTZpVmJsUmRVSXl3M2RJd3pycE91UVFrcWtkaGRJOTQ4TGJrU0JiSnNmM1A?oc=5" },
  { id: "shein_new006", title: "SHEIN以1亿美元收购可持续品牌Everlane，引发市场关注", content: "快时尚巨头SHEIN宣布以1亿美元收购美国可持续时尚品牌Everlane。此举被视为SHEIN进军高端市场、改善品牌形象的战略举措。Everlane以透明定价和可持续材料著称，但近年来增长乏力。收购后，SHEIN将保留Everlane独立运营，并利用其供应链优势降低成本。该交易引发对SHEIN可持续性承诺的质疑，但短期内对卖家影响有限。", source: "marketplace.org", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMie0FVX3lxTE5aNnhXQmUtRER6UGV3WjhURFNJMlN5Xzd1YTBGeFRVUE16RGZFZUM3UzZEWEtaYTFFbEVaakYyQk1DbTNPR0l2Nk9BRDZaMXVwMER3NFdiNnQwc2dIcjMydmkxdU81Z3hONnZVV3VNUk5Eb21xM2c2M210OA?oc=5" },
  { id: "tiktok_new007", title: "TikTok Shop欧洲市场热销品类揭晓，美妆服饰领跑", content: "雨果跨境发布TikTok Shop欧洲市场热销品类报告，美妆、服饰、家居用品位列前三。其中，美妆品类占比达35%，尤其是平价彩妆和护肤工具；服饰品类中，运动休闲和快时尚需求旺盛；家居品类中，智能小家电和收纳用品增长迅速。卖家应注重本地化选品，例如欧洲消费者偏好环保材质和极简设计。同时需注意欧盟CE认证和REACH法规。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBWQnNoTmpDd2RzOHo0NzBGTGF2dk90SkJVOXRhTjlfLW5EQWExbGxOSWh3QVhYLVpxbkFOZ3I2Mm00WHUtWVhRQm1nOE4?oc=5" },
  { id: "aliexpress_new008", title: "速卖通Brand+品牌出海计划开放韩国站，市场投入翻三倍", content: "速卖通宣布Brand+品牌出海计划正式开放韩国站，今年市场投入同比翻三倍。该计划为品牌卖家提供专属流量、佣金折扣和本地化营销支持。韩国电商市场规模超2000亿美元，且对中国商品需求旺盛，尤其是美妆、小家电和时尚品类。卖家需注册韩国KC认证，并优化韩语商品详情页。建议优先布局高复购品类。", source: "亿邦动力网", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBTRkJCNm5tVjNqS3RhNlhqYUh6UU91Sk9sM0NMMzRHdmpENVZDLWFZel9CZFU0bTBVWlozdWplTUpvcFVHYVhHeW9YY29nWlV4N3ljSHhB?oc=5" },
  { id: "shein_new009", title: "SHEIN在英国黄金物流三角区自建物流中心，加码本地配送", content: "SHEIN宣布在英国“黄金物流三角区”（考文垂、北安普顿、拉格比）自建物流中心，面积达50万平方英尺。该中心将负责英国及欧洲大陆的订单分拣和配送，预计将配送时效缩短至2-3天。此举是SHEIN本地化战略的重要一步，旨在提升客户体验并降低跨境物流成本。卖家可借助SHEIN的物流网络拓展英国市场，但需注意英国脱欧后的增值税规则。", source: "亿邦动力网", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5ZX0YteGpnLUdvR3pzdG1aZXV6bmlHWTZEM0UyQkg3akpGRHVlcThNMmhNSVc3ZWFIYWI4ellvOWIyVWtLZ0VuRVBGdWthNFpOaExIN2NB?oc=5" },
  { id: "tiktok_new010", title: "TikTok Shop爱尔兰站加码全开发，欧洲本地化竞争提速", content: "TikTok Shop爱尔兰站宣布加大全开发力度，包括开放更多品类、降低入驻门槛、提供本地仓储服务。爱尔兰作为英语国家且税率较低，成为TikTok欧洲本地化的重要据点。平台计划在都柏林设立运营中心，支持卖家快速配送至英国和欧盟。卖家可利用爱尔兰站作为进入欧洲市场的跳板，但需注册爱尔兰VAT并遵守欧盟电商法规。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE16WGUxNlR1REZIaWJROFBVckVoLVRuQ2pScmVCWENIWmdPNmg4anJOLTNRX0tYaDNYak5nUU0zZmUybk5YZWp0clVqNkk?oc=5" },
  { id: "temu_new011", title: "Temu越南封禁18个月后蓄力重生，但美国欧洲仍是重点", content: "Temu在越南因未注册电商服务被禁18个月后，正计划重新进入市场。然而，Temu的核心市场仍在美国和欧洲，越南市场仅作为补充。Temu美国站流量已恢复，欧洲站则面临合规罚款压力。卖家应优先聚焦欧美市场，关注关税和合规动态，越南市场可暂缓布局。", source: "白鲸出海", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE8yUVJFdWNralBjSThTMVE0ZC1RR3I1YXgzYVdCNFlkVDl2T1JCQ0hHckNkd1FweUhLaEtTbHkzNFhZbXB4OVJSY191bk8?oc=5" },
  { id: "joybuy_new012", title: "京东考虑20亿英镑收购英国Very Group，拓展欧洲市场", content: "据Modaes报道，京东（JD.com）正考虑以20亿英镑收购英国电商集团Very Group。Very Group旗下拥有Very.co.uk和Littlewoods等品牌，年营收超20亿英镑。此举将帮助京东快速进入英国及欧洲电商市场，并利用Very的物流网络。若收购成功，中国卖家可通过京东平台进入英国市场，但需注意英国脱欧后的贸易壁垒。", source: "Modaes", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiugFBVV95cUxPeEpQaVVvZ2MybTVZVDQ2QUFpdVRLS3FicFVuZXVmUElUb0pTeWFDWkRtVU5NYjRQNlY2NHBfY3hNaF96UzZRVDVTSkNndVc4cmpOUV91WFMzYk9HZVlORVVQZU9rRUJDZDB4VUxoQ1Nlc2RwSXFWNmJtS081dWFVOTlDWHdaV0ZScGZjdm9Db3V1bmp2R01helNjUERzejVkSk00d1NacFBqR3E2Nl9JUHdUYXMzQzJZb0E?oc=5" },
  { id: "tiktok_new013", title: "TikTok Shop西班牙站五分之一电商卖家已入驻，社交电商渗透加速", content: "据Ecommerce News Europe报道，西班牙五分之一（约20%）的电商卖家已在TikTok Shop开店。西班牙是TikTok Shop欧洲增长最快的市场之一，美妆、服饰和食品品类表现突出。平台提供本地化支付和物流支持，卖家需注册西班牙VAT并遵守消费者保护法。建议卖家利用短视频和直播内容吸引年轻消费者。", source: "Europe", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxNVUtzZ2phZll5YjF0VElaUFJvdVB4NDBCUEtHQ0IyRXpzd3JYYUtZajIxQnVWckt1OUpjWGlJc25DNlc4UmlkYTNQZThxLXh1NkRoWndIeWMtbEt0MXl5cUxUR0xEanBRVi1hT3ZWbnFETFlwbVNJMU5fVDJFWHJzR3plYnY?oc=5" },
  { id: "temu_new014", title: "Temu跻身全球第二大电商网站，仅次于亚马逊", content: "据亿邦动力网报道，Temu已超越eBay和Shopify，成为全球第二大电商网站，仅次于亚马逊。Temu的全球月访问量超过5亿次，其中美国市场贡献最大。然而，欧盟罚款和关税风险仍是挑战。卖家应利用Temu的流量优势，但需注意合规和利润率。建议多平台布局，降低单一平台依赖。", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE85UjlxOEt4N1ZobUNCLXRKVFVkTk5vM2E4ZURSUURHZHkzV0FFQlRRR2dIQTFkY2EtczNONXBmdEw4eXhtYjE1M3Z0eHk3N2VBUVpET0VB?oc=5" },
  { id: "aliexpress_new015", title: "速卖通与巴西邮政签署MOU，加速拉美本地物流网络建设", content: "速卖通与巴西邮政签署谅解备忘录（MOU），合作建设本地物流网络，包括在巴西设立分拣中心和最后一公里配送优化。巴西是拉美最大电商市场，但物流效率低下。此次合作将缩短配送时效至7-10天，并降低物流成本。卖家可借此拓展巴西市场，但需注意巴西复杂的税务和清关流程。建议选择高性价比品类如消费电子和时尚配饰。", source: "新京报", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5GX1J5Mjd0UEo1Q1NwOWdheFYxTlNZbWJiR1pWR3phVlJzNkw0ZVQ0Y1VsV0V2eDgyNHhFRXlwVzNYWlNNUGdHMEVzbGpXX19WSHRZa1VQdGtxOUxFejM4R3BoWmc?oc=5" },
  { id: "tiktok_new016", title: "TikTok Shop欧洲卖家90%亏损，核心原因在于合规和本地化不足", content: "雨果跨境调查显示，90%的TikTok Shop欧洲站卖家处于亏损状态，核心原因包括：未注册VAT导致罚款、商品不合规被下架、本地化内容不足导致转化率低。建议卖家在进入欧洲市场前，务必完成欧盟增值税注册、CE认证和EPR合规。同时，投入本地化内容制作，如聘请当地主播和翻译。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1CdkV4UWI2N2taU2FwWnZQQ0xYLTlDclAwOV81MnFWWTQ2S0phRXVmNXE3ajgxVl96NFJVU29QOWlLNzgtMVBqdEtFZF8?oc=5" },
  { id: "tiktok_new017", title: "TikTok Shop东南亚年度峰会落幕，但欧美仍是重点市场", content: "2026 TikTok Shop东南亚跨境电商年度峰会圆满收官，但平台战略重心仍在欧美市场。东南亚市场虽增长迅速，但竞争激烈且利润率低。TikTok Shop近期在欧洲新增8国站点，并在美国推出直播拍卖等新玩法。卖家应平衡资源分配，优先深耕欧美高客单价市场，东南亚可作为补充。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1zUHliS0I4ZFJWTFJtRFY4SmVEMW94U0FScGF6b1g3YlZqN1M4bkQ0YkhFYVFaa0lXWkE0SmQtS21uQ3hka2o0eXp2VmE?oc=5" },
  { id: "temu_new001", title: "Temu被欧盟重罚2亿欧元，合规转型迫在眉睫", content: "欧盟以销售不合规商品为由对Temu处以2亿欧元（约2.32亿美元）罚款。这是欧盟首次对跨境电商平台开出如此高额罚单，涉及产品安全、标签合规等问题。Temu需在30天内整改并提交合规报告，否则面临每日罚款。此举将迫使Temu加强卖家审核和商品抽检，提高合规成本。对卖家而言，需确保产品符合CE标志、REACH等欧盟标准，否则可能面临下架或封店风险。", source: "QQ News", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBZdG1lSWJGYk1mdVc2OVVobmpjUWdMa01LNGV1RlI5Xy0wVV84MmhSb2Q5NUhuY2FScmFoQ0o4ZlBqVzI4dVJvRl9oU1NRYUJDUkp5VEZR?oc=5" },
  { id: "tiktok_new002", title: "TikTok Shop美容美妆专场活动圆满收官，助力产业带出海", content: "5月29日，“跨境电商+产业带系列活动”（TikTok Shop美容、美妆类专场）圆满收官。该活动旨在帮助中国美妆产业带卖家通过TikTok Shop拓展海外市场，提供选品指导、流量扶持和物流解决方案。TikTok Shop美妆品类在欧美市场增长迅速，尤其护肤、彩妆、工具类产品热销。卖家可借助平台短视频和直播带货模式，提升品牌曝光和转化。", source: "中华网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMibEFVX3lxTE82Skh2R3lFdW5pdW9HNnZJbVFtSXh1d0xLdUhLWVJkVFdGZmRXWl90UHNqck1RQXZBcUs0Q2o5N0g3b2ZsYTJ5MGd3a3ozeXpPOE9SbEZ5VG1sX25NTUZGTFI1UjdfUWVkRi1aQQ?oc=5" },
  { id: "aliexpress_new003", title: "速卖通与巴西邮政签署MOU，加速本地物流网络建设", content: "速卖通与巴西邮政签署谅解备忘录（MOU），共同加速巴西本地物流网络建设。双方将合作优化清关流程、提升末端配送效率，并计划在巴西主要城市实现次日达。速卖通还将在巴西设立更多海外仓，降低卖家物流成本。此举旨在应对巴西市场增长和合规要求，提升消费者体验。卖家可享受更快的物流时效和更低的退换货成本。", source: "新京报", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5GX1J5Mjd0UEo1Q1NwOWdheFYxTlNZbWJiR1pWR3phVlJzNkw0ZVQ0Y1VsV0V2eDgyNHhFRXlwVzNYWlNNUGdHMEVzbGpXX19WSHRZa1VQdGtxOUxFejM4R3BoWmc?oc=5" },
  { id: "tiktok_new004", title: "TikTok Shop扩展至多个欧盟新国家，欧洲市场加速布局", content: "TikTok Shop正式向多个欧盟新国家开放商家入驻，包括西班牙、德国、法国、意大利等。此前TikTok Shop已在英国、爱尔兰运营，此次扩张标志着其欧洲本地化战略提速。平台将提供本地化运营支持、物流解决方案和流量激励。卖家需注意欧盟合规要求，如产品安全、税务、数据隐私等。预计TikTok Shop欧洲GMV将快速增长，成为跨境卖家新增长点。", source: "Social Media Today", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMilwFBVV95cUxQZnlwT0ctTUtFVkRpZ2ZSV004QmV3SmdGNUJXZ3NZbWhScURueC1DNHBZM3pCMGlmVHpGT1l0UW9FVUJ4Z0JLMDRUWV91VE1rUFg5Mkh5Tm5sUFZRM09DUENoSTJjZExWN2dfbmNENlZZRzQwajVvVlR4eDE1WUFucjFLMUZmemcxN2tlMVllQklpSnNCTjZr?oc=5" },
  { id: "temu_new005", title: "Temu半托管Y2模式自发货上线，跨境电商新机遇解析", content: "Temu推出半托管Y2模式，允许卖家自发货，无需提前备货至海外仓。该模式主要面向中小卖家，降低库存风险。卖家需自行处理国内至目的国的物流，平台提供流量支持和末端配送。履约时效约15-21天。此模式适合轻小件、高周转商品，但卖家需承担物流成本和时效压力。Temu此举旨在扩大商品丰富度，吸引更多卖家入驻。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE01TkRJUEswLUpuWFZKLWhIbU83c2pDdDhTaE96Q3V5TkdEaUZHXzVVU2xDU2g1ai1hRlVOZGh5YWxkakEwM1hGMHprRE1BQm12?oc=5" },
  { id: "tiktok_new006", title: "TikTok Shop欧洲市场热销品类揭晓，这些商品正在爆单", content: "雨果跨境发布TikTok Shop欧洲市场热销品类报告，指出美妆、服饰、家居、电子产品等品类增长迅猛。其中，护肤、彩妆、假发、智能家居等商品在西班牙、德国、法国等站点表现突出。平台通过短视频和直播带货模式，帮助卖家快速起量。卖家需关注本地化选品和合规要求，如CE认证、欧代等。建议结合季节性和节日营销，提升转化。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBWQnNoTmpDd2RzOHo0NzBGTGF2dk90SkJVOXRhTjlfLW5EQWExbGxOSWh3QVhYLVpxbkFOZ3I2Mm00WHUtWVhRQm1nOE4?oc=5" },
  { id: "aliexpress_new007", title: "欧盟合规大考前夜，速卖通重押美、韩、拉美市场", content: "面对欧盟日益严格的合规要求，速卖通宣布2026年将全面加码美国、韩国、拉美三大核心市场。速卖通将投入更多资源用于本地化运营、物流建设和市场推广。此举旨在分散欧盟合规风险，同时抓住美国、韩国、拉美等市场的增长机遇。卖家可关注速卖通在这些市场的扶持政策，如佣金减免、流量倾斜等。", source: "白鲸出海", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE5sMllrQUpqTlBDTHdkWnVOaklhOEEwbVllLTNjNGFvUmQtTkZfcWd2ZGJmbi1lSUY3MFozajhYUk1YNDRsNlRPU2JRbU4?oc=5" },
  { id: "tiktok_new008", title: "TikTok Shop跨境电商新增欧洲8国站点，加速扩张", content: "TikTok Shop跨境电商宣布新增欧洲8国站点，包括西班牙、德国、法国、意大利、荷兰、比利时、瑞典、波兰。至此，TikTok Shop欧洲站点覆盖超过10个国家。平台将为新站点卖家提供入驻补贴、流量扶持和物流解决方案。卖家需提前准备欧盟合规资质，如CE标志、欧代、税务登记等。预计TikTok Shop欧洲GMV将迎来爆发式增长。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTE1fekJJVjhIQWdLUEs0dzE5c0wySTNfX0Z6emVPdUF3bHM4M1IxdjE0X1I5UVVhLVpLRDEzbDhWSDg2RlhuTWR3b2hua3IwM0E?oc=5" },
  { id: "tiktok_new009", title: "TikTok Shop东南亚年度峰会收官，出海经营一键加速", content: "2026 TikTok Shop东南亚跨境电商年度峰会圆满收官，峰会聚焦出海经营加速，分享平台最新政策、选品趋势和成功案例。TikTok Shop东南亚市场增长迅速，但竞争也日益激烈。卖家需注重内容创新、本地化运营和供应链效率。平台推出多项工具和服务，如全托管、半托管模式，帮助卖家降低运营门槛。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1zUHliS0I4ZFJWTFJtRFY4SmVEMW94U0FScGF6b1g3YlZqN1M4bkQ0YkhFYVFaa0lXWkE0SmQtS21uQ3hka2o0eXp2VmE?oc=5" },
  { id: "shein_new010", title: "Shein以1亿美元收购可持续品牌Everlane，引发行业关注", content: "快时尚巨头Shein正式宣布以1亿美元收购可持续时尚品牌Everlane。此举被视为Shein向可持续时尚转型的信号，但外界对其环保承诺持怀疑态度。Everlane以透明供应链和环保材料著称，收购后Shein将整合其供应链和品牌资源。卖家需关注Shein在可持续领域的布局，可能影响未来供应链标准和消费者偏好。", source: "marketplace.org", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMie0FVX3lxTE5aNnhXQmUtRER6UGV3WjhURFNJMlN5Xzd1YTBGeFRVUE16RGZFZUM3UzZEWEtaYTFFbEVaakYyQk1DbTNPR0l2Nk9BRDZaMXVwMER3NFdiNnQwc2dIcjMydmkxdU81Z3hONnZVV3VNUk5Eb21xM2c2M210OA?oc=5" },
  { id: "tiktok_new011", title: "TikTok Shop西班牙站：五分之一电商卖家已入驻", content: "据Ecommerce News报道，TikTok Shop西班牙站发展迅速，已有五分之一的西班牙电商卖家入驻。平台通过本地化运营和内容电商模式，吸引大量中小卖家。西班牙市场对时尚、美妆、家居品类需求旺盛。卖家需注意西班牙语本地化、税务合规和物流时效。TikTok Shop西班牙站有望成为欧洲重要增长点。", source: "Ecommerce News - Europe", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxNVUtzZ2phZll5YjF0VElaUFJvdVB4NDBCUEtHQ0IyRXpzd3JYYUtZajIxQnVWckt1OUpjWGlJc25DNlc4UmlkYTNQZThxLXh1NkRoWndIeWMtbEt0MXl5cUxUR0xEanBRVi1hT3ZWbnFETFlwbVNJMU5fVDJFWHJzR3plYnY?oc=5" },
  { id: "temu_new012", title: "Temu在越南封禁18个月后蓄力重启，布局重生局", content: "Temu在越南被封禁18个月后，正蓄力重启业务。Temu与越南政府沟通合规事宜，计划重新上线。越南市场潜力巨大，但合规要求严格。Temu将调整运营模式，确保符合当地法规。卖家若有意越南市场，需关注Temu重启后的入驻政策和合规要求。", source: "白鲸出海", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE8yUVJFdWNralBjSThTMVE0ZC1RR3I1YXgzYVdCNFlkVDl2T1JCQ0hHckNkd1FweUhLaEtTbHkzNFhZbXB4OVJSY191bk8?oc=5" },
  { id: "tiktok_new013", title: "TikTok Shop全面开放爱尔兰卖家入驻，本地化提速", content: "TikTok Shop正式全面开放爱尔兰本地卖家入驻，此前仅限邀请制。平台提供本地化运营支持、物流解决方案和流量激励。爱尔兰作为TikTok欧洲总部，具有战略意义。卖家可借助TikTok的短视频和直播生态，快速触达消费者。需注意欧盟合规要求，如GDPR、产品安全等。", source: "品牌方舟BrandArk", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-29"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9QVk1vR044SExJQlJGcGI1MlpUcVdVandqZmV1ZnNmZUk3UlZtOFhRNnRVM1FPSEFELU5TOTljMFNpWVZWbFBTOUdJR0I?oc=5" },
  { id: "temu_new001", title: "Temu因销售不合规商品被欧盟罚款2亿欧元，创数字法罚款纪录", content: "欧盟委员会依据《数字服务法》对Temu处以2亿欧元（约合2.32亿美元）罚款，原因是平台未能有效阻止不合规商品销售，包括危险玩具和假冒产品。这是欧盟第二次对Temu作出非合规决定，罚款金额超过此前对马斯克旗下X平台的处罚。Temu发言人表示不同意该决定，认为罚款过高。该处罚直接影响Temu在欧盟27国的运营，卖家需加强商品合规审核，否则可能面临下架或封店风险。建议卖家立即自查产品认证（如CE标志），并关注平台后续合规政策调整。", source: "纽约时报中文网", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-01"), url: "https://news.google.com/rss/articles/CBMidEFVX3lxTE5ZM25NakRjMFR1SDl6Z3hYRUZpMzJoWVpPbGNoUWdIRG56RGpGWjBqb0p1bFBnOXRPQV80aXloV0d2T2lHUEJZWENWSWVlRXkyaFVjVnYyT3BRUVpDamYyTHJZZ1VxTHQxU2NoS3RCVGJhQlY1?oc=5" },
  { id: "temu_new002", title: "Temu年流量飙升56.9%，Y2物流模式助力全球扩张", content: "Temu过去一年网站流量同比增长56.9%，主要得益于其Y2半托管物流模式。该模式允许卖家从国内直接发货，无需海外仓备货，履约时效约21天。Temu通过Y2模式降低卖家门槛，同时与意大利邮政、奥地利邮政合作提升欧洲末端配送能力。流量增长表明Temu在欧美市场仍具强劲吸引力，但卖家需注意合规风险，尤其是欧盟新罚款可能影响平台政策。建议卖家利用Y2模式测试新品，同时关注平台对不合规商品的打击力度。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-01"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE5ReEVYNkVxMXFsSXVLOS1Fei1GMzBrRXhuRVh3NXBYbWJxY29CckphMEh4V2dnTENqTXdhVkJEYlQwSWRZMk9WemtMSGo4U19x?oc=5" },
  { id: "temu_new003", title: "Temu美国站网页流量从去年关税冲击中悄然恢复", content: "据Sherwood News报道，Temu美国站网页流量已从去年美国关税政策调整的冲击中逐步恢复。此前关税上调导致部分商品成本上升，但Temu通过优化供应链和补贴策略稳住了用户。流量恢复表明Temu在美国市场仍具韧性，但卖家需关注美国关税政策变化，尤其是针对低价商品的监管。建议卖家调整定价策略，并利用Temu的流量红利期加大广告投入。", source: "Sherwood News", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-01"), url: "https://news.google.com/rss/articles/CBMinwFBVV95cUxQM1lWV1Z2VFBUejMtMlJ6UTZZTzVIN3Q5VWtCT3liZmRZRmItcXRoaXNRTzVXM2gwZ3VzNGdVUzFUd0lkUGdJLXNTU19Dak94cEQ5R3kyRDB4UnlQem9ZQWNhVEp4Wm9GYkNRNGk2QXNLWWZWZzAtVmF5bTlPNFdETFpNZUU0SU0xckVNa2dBMXJwd1NHeXFFUEdJZ0JaN0E?oc=5" },
  { id: "temu_new004", title: "Temu在越南封禁18个月后蓄力重启，或影响全球合规策略", content: "Temu在越南被禁18个月后，正计划重新进入市场。此前因未满足当地合规要求而被封禁，此次重启显示Temu在加强本地化合规。虽然越南不属于欧美日市场，但该事件反映Temu在全球合规上的挑战，可能影响其在欧美市场的合规投入。卖家需注意Temu可能在其他市场加强商品审核，尤其是欧盟新罚款后。建议卖家提前准备产品认证文件。", source: "白鲸出海", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-01"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE8yUVJFdWNralBjSThTMVE0ZC1RR3I1YXgzYVdCNFlkVDl2T1JCQ0hHckNkd1FweUhLaEtTbHkzNFhZbXB4OVJSY191bk8?oc=5" },
  { id: "tiktok_new005", title: "TikTok Shop欧洲市场扩容：六月新开8个国家站点", content: "TikTok Shop宣布将于2025年6月新增8个欧洲国家站点，包括德国、法国、意大利、西班牙、荷兰、比利时、瑞典和波兰。至此，TikTok Shop欧洲站点总数将达13个。新站点开放后，卖家可触达超过3亿欧洲用户。TikTok Shop同时推出本地化运营支持，包括本地仓储和客服。建议卖家提前注册账号，并针对各国语言和消费习惯优化商品列表。注意欧洲合规要求（如GDPR、CE认证）。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-01"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE13bkJSbVJ6OTViSVZWWUF5RVNISFdTZjR6TGpYM0JrUlo3eG9rZm4tWlV2Tlk5QUlLN3NOcjc3WFJOMlNHNTR6Tkd1ZG5SckVYdmt1a0JiQ00?oc=5" },
  { id: "tiktok_new006", title: "TikTok Shop欧洲90%卖家亏损，核心原因在于合规与物流成本", content: "据雨果跨境分析，TikTok Shop欧洲站90%的卖家处于亏损状态，主要原因包括：欧盟合规成本高（如CE认证、EPR）、物流费用昂贵（尤其是跨境退货）、以及广告ROI低。TikTok Shop虽提供流量扶持，但卖家若未做好本地化运营，极易亏损。建议卖家优先选择高利润品类，利用海外仓降低物流成本，并仔细研究各国税务政策。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-01"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1CdkV4UWI2N2taU2FwWnZQQ0xYLTlDclAwOV81MnFWWTQ2S0phRXVmNXE3ajgxVl96NFJVU29QOWlLNzgtMVBqdEtFZF8?oc=5" },
  { id: "aliexpress_new007", title: "速卖通与巴西邮政签署MOU加速本地物流，但重点仍在美韩拉美", content: "速卖通与巴西邮政签署谅解备忘录，旨在加速巴西本地物流网络建设。然而，速卖通总裁惊石表示，2026年增长计划将全面加码美国、韩国、拉美三大核心市场，欧洲市场因合规压力而相对收缩。速卖通正从跨境平台转向B2B2C本地化模式，品牌化是未来方向。建议卖家关注速卖通在美国的海外仓布局，以及韩国市场的快速增长。", source: "新京报", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-06-01"), url: "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5GX1J5Mjd0UEo1Q1NwOWdheFYxTlNZbWJiR1pWR3phVlJzNkw0ZVQ0Y1VsV0V2eDgyNHhFRXlwVzNYWlNNUGdHMEVzbGpXX19WSHRZa1VQdGtxOUxFejM4R3BoWmc?oc=5" },
  { id: "aliexpress_new008", title: "速卖通总裁宣布全面转向B2B2C与本地化，品牌成核心布局", content: "速卖通总裁惊石在公开场合表示，平台将全面转向B2B2C模式，即由品牌方或供应商直接供货，平台提供物流和本地化服务。同时，速卖通将重点布局美国、韩国、拉美市场，欧洲市场因合规成本高而策略性收缩。品牌化是未来核心，速卖通将扶持自有品牌卖家。建议卖家注册品牌商标，并利用速卖通的海外仓服务提升履约时效。", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-06-01"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBidkU3TU4waGRZSjE0T3c0NW5rVnJocXJwQnhEVXJ4d1ViTG1DVi1RaXNuS2t0dnM5Nnd6VkhTRVFUQnVGYk5vSUUxaTI?oc=5" },
  { id: "aliexpress_new009", title: "速卖通2026增长计划：全面加码美国、韩国、拉美三大核心市场", content: "速卖通公布2026年增长计划，将全面加码美国、韩国、拉美三大市场，投入资源包括物流补贴、广告支持和本地化运营。美国市场重点布局海外仓，韩国市场利用K-文化营销，拉美市场则与本地物流商合作。欧洲市场因合规压力而保持现有规模。建议卖家根据自身品类选择重点市场，美国站可优先入驻。", source: "新浪财经", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-06-01"), url: "https://news.google.com/rss/articles/CBMi9AFBVV95cUxQMnVkX0diT0FLS0Z6b1N1VS1fUFFDcU1uWk93RGl2OVhKdVB3MkFKZVBycUJVRnlUUWpDQ0RvbnRfNWtnOFhheGpYQ2dUQTVLM3FSemhheGNTSzUtenRZVWgxc1dHck5FZmxWZ1A5SjBUTUdHRTJsS0trMG90ckpSWVJ1djFmRXM2WnJ2T05sdlFRMzhEY1Jzckg5QjNHcGZSTno0SEN6a1BNXzJmVy1wT3lRTDd2NDdxdTN2RHNhMFRyZHVPSE1yaVl1MG1YYXNuNi1JeWg1T0lzZS1lTy11X2s2dVJSVjREYzREZ0s0b1Fyb1hW?oc=5" },
  { id: "shein_new010", title: "Shein以1亿美元收购可持续品牌Everlane，引发可持续营销质疑", content: "Shein正式宣布以1亿美元收购美国可持续时尚品牌Everlane。该交易引发业界对Shein可持续性承诺的质疑，因为Shein以快时尚和低价著称，而Everlane主打透明供应链和环保材料。收购后，Shein将获得Everlane的品牌资产和客户群，但可能面临环保组织的批评。对卖家而言，Shein可能借此提升品牌形象，但需注意欧美消费者对可持续性的关注度。", source: "ESG Dive", type: "press", platform: "shein", dimension: "", date: new Date("2025-06-01"), url: "https://news.google.com/rss/articles/CBMieEFVX3lxTE5sNWQxU0FjZUYtcURKZ0JPWFN3dkZMWWxTa1VKUXhzNTVIRmtLeURmaV9iVUlKdkhUTWxMTTBYUkVGUlplamF3OW9ULVhrTks2QmhZRm91U2pGNlE4WWlpVFAwQkd6czd0dWVqWjJldXdfc1Jhb2c4Sg?oc=5" },
  { id: "joybuy_new011", title: "京东考虑以20亿英镑收购英国电商Very Group，进军欧洲市场", content: "据Modaes报道，京东正考虑以约20亿英镑收购英国电商集团Very Group，以快速进入欧洲市场。Very Group旗下拥有Very.co.uk和Littlewoods等品牌，年营收约20亿英镑。若收购成功，京东将获得英国数百万用户和物流基础设施。此举显示京东对欧洲市场的野心，但面临亚马逊和本地零售商的竞争。对卖家而言，京东欧洲平台可能带来新渠道，但需等待交易完成。", source: "Modaes", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-06-01"), url: "https://news.google.com/rss/articles/CBMiugFBVV95cUxPeEpQaVVvZ2MybTVZVDQ2QUFpdVRLS3FicFVuZXVmUElUb0pTeWFDWkRtVU5NYjRQNlY2NHBfY3hNaF96UzZRVDVTSkNndVc4cmpOUV91WFMzYk9HZVlORVVQZU9rRUJDZDB4VUxoQ1Nlc2RwSXFWNmJtS081dWFVOTlDWHdaV0ZScGZjdm9Db3V1bmp2R01helNjUERzejVkSk00d1NacFBqR3E2Nl9JUHdUYXMzQzJZb0E?oc=5" },
  { id: "joybuy_new012", title: "Anycubic Kobra X 3D打印机在Joybuy上线，覆盖四个欧洲市场", content: "Anycubic Kobra X 3D打印机现已在京东旗下跨境电商平台Joybuy上线，首批覆盖英国、德国、法国、意大利四个欧洲市场。Joybuy是京东面向欧洲的B2C平台，主打3C电子和家居品类。此次合作显示Joybuy正在扩充品类，吸引中国品牌入驻。建议3C卖家关注Joybuy的招商政策，利用京东的物流优势进入欧洲。", source: "富途牛牛", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-06-01"), url: "https://news.google.com/rss/articles/CBMioAFBVV95cUxQTV83RnRUcDdPT1l0ZWJfVmh2NS00RTYzUkNYZTVLRGFiWnVOZ29IWFA1MTJ6anRXczBNOXhkNk5QR2hoM3Nud1JDVnltRFRlNGo1V1E5RE9nU1YwZ3RtdkpoNGNQZE5ieW54c0hPUjlxd3g4SVVVdS03THRnRlRPenhKX19hUEZMUlZTazM0UlVHNFNKM1R3eG9IeGdfMTdr?oc=5" },
  { id: "temu_new013", title: "Temu半托管Y2模式深度解析：跨境电商新机遇与风险", content: "搜狐网发布深度文章，解析Temu半托管Y2模式。该模式允许卖家从国内直接发货，平台提供末端配送和流量支持，履约时效约21天。Y2模式降低了卖家库存压力，适合中小卖家测试海外市场。但卖家需自行承担退货风险，且平台对商品价格有较强控制权。建议卖家选择高毛利、低退货率品类，并利用Y2模式快速测款。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-01"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE01TkRJUEswLUpuWFZKLWhIbU83c2pDdDhTaE96Q3V5TkdEaUZHXzVVU2xDU2g1ai1hRlVOZGh5YWxkakEwM1hGMHprRE1BQm12?oc=5" },
  { id: "temu_new014", title: "拼多多财报前瞻：Temu能否支撑海外增长故事延续？", content: "TradingKey发布拼多多财报前瞻，分析Temu对拼多多海外增长的关键作用。Temu目前贡献拼多多约30%的营收，但面临欧盟罚款、美国关税等挑战。分析师认为，Temu需在合规和增长之间找到平衡，否则可能拖累母公司业绩。对卖家而言，Temu的补贴政策可能因成本压力而调整，建议关注平台佣金和广告费变化。", source: "TradingKey", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-01"), url: "https://news.google.com/rss/articles/CBMi1wFBVV95cUxPSGlvWFdQNUxib0pBSUtzWnNlSjY1X0ZlbHVJcWdxS0JiX2ZseWJxTzZrWGhCTDFSVlRaMG9tRGhleWdOV3FibVEyNk1EQVh3VkpzM09Hb0xoaFlGZlJYcUxNM3RDbEwtLUszQ0N1a0FIMzlMSjh6a3M5amxKUGEwUjhlUHpzNk9ZX3VLZjAzTHVBbFNpRXVrS3AwVEVxU3FLeUFDMGE1SVBnU3J2ZTI4Y2o4dWFvcWJNSUJ5eUZXSHFxNUFJb0Q5RURxYk00NS1CMGZRTWZkVQ?oc=5" },
  { id: "temu_new001", title: "Temu被欧盟罚款2亿欧元，因销售不合规商品违反数字服务法", content: "欧盟委员会对Temu处以2亿欧元（约合2.32亿美元）罚款，原因是其平台上存在大量不安全及非法商品，违反《数字服务法》。这是Temu在欧盟收到的第二笔巨额罚款，此前已因类似问题被罚。罚款将影响Temu在欧洲市场的合规成本，卖家需加强产品安全认证和资质审核，避免因平台政策收紧导致下架或处罚。", source: "Business Model Analyst", type: "press", platform: "temu", dimension: "", date: new Date("2025-07-31"), url: "https://news.google.com/rss/articles/CBMia0FVX3lxTE51ZGtiR3c5eWFVc2R0emtHTFRyVFFEYzU5RndFUmtZMC1wMG9zUXdxYm9Ld25FYnByLUJvNS1sTWtLWU4zOWJ1a2ozYng1dkhaUEFjSFF3dVNWLVg2Wkh2aVNWNkpGTGgtY044?oc=5" },
  { id: "temu_new002", title: "Temu再遭欧盟罚款2亿欧元，数字服务法合规压力加剧", content: "MLex报道称，Temu因未有效阻止不安全商品销售，被欧盟依据《数字服务法》处以2亿欧元罚款。这是继此前罚款后的第二次非合规决定，凸显欧盟对跨境电商平台监管趋严。卖家需关注产品合规性，尤其是电子、玩具等高风险品类，否则可能面临平台限流或下架风险。", source: "MLex", type: "press", platform: "temu", dimension: "", date: new Date("2025-07-31"), url: "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQa2ZZRFowZkNWa2tXMnNSN1VId1BNR05DMEpYYmZTN0ZrNjIyUlEyVDNWNEZ5eHBCRV9rWjJTSFBPMFBpNmU3V3MtWHZGdE1uckt0MzhYX0JobDZZczMzX3FlNjVDUjNJVmRwcWZabHdvQ0xJR2F3ektuOHp6Tmk4LXVwN1RRSFFWUkxYTEg5Wmdoc1VkYjUtOWh5MWxhWTV0TmJEYUVtUHAyMVJpSER6V1NGeERlTF9CU2VrZmwxaFZBd9IBWkFVX3lxTFBKRFdBa2k1ZDVKQTQ2R0M5amx6UFJzUUdJNF9tN3lJSFAzUDhYUGxCN0hVam4xQWdBWEFqbXh0RXZRR3VsZTliVzNzSGg5OVN6ajhvb1lfT0Fodw?oc=5" },
  { id: "temu_new003", title: "Temu美国网站流量从去年关税冲击中悄然恢复", content: "Sherwood News报道，Temu美国网站流量已从去年关税政策冲击中逐步恢复。此前关税导致物流成本上升，但Temu通过优化供应链和调整定价策略，重新吸引用户。流量恢复表明Temu在美国市场仍具韧性，卖家可关注其流量回升带来的销售机会，但需注意关税政策波动风险。", source: "Sherwood News", type: "press", platform: "temu", dimension: "", date: new Date("2025-07-31"), url: "https://news.google.com/rss/articles/CBMinwFBVV95cUxQM1lWV1Z2VFBUejMtMlJ6UTZZTzVIN3Q5VWtCT3liZmRZRmItcXRoaXNRTzVXM2gwZ3VzNGdVUzFUd0lkUGdJLXNTU19Dak94cEQ5R3kyRDB4UnlQem9ZQWNhVEp4Wm9GYkNRNGk2QXNLWWZWZzAtVmF5bTlPNFdETFpNZUU0SU0xckVNa2dBMXJwd1NHeXFFUEdJZ0JaN0E?oc=5" },
  { id: "temu_new004", title: "Temu推出半托管Y2模式，支持中国卖家自发货至欧盟", content: "搜狐网报道，Temu半托管Y2模式允许中国卖家从国内直接发货至欧盟消费者，无需海外仓备货。该模式降低库存压力，履约时效最长21天（备货8-12个工作日+运输3-9天），平台提供末端配送和流量支持。主要面向中小卖家，有助于扩大Temu欧洲商品丰富度，但卖家需承担更长物流时效带来的退货风险。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2025-07-31"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE01TkRJUEswLUpuWFZKLWhIbU83c2pDdDhTaE96Q3V5TkdEaUZHXzVVU2xDU2g1ai1hRlVOZGh5YWxkakEwM1hGMHprRE1BQm12?oc=5" },
  { id: "shein_new005", title: "Shein以1亿美元收购可持续品牌Everlane，引发ESG质疑", content: "Shein正式宣布以1亿美元收购美国可持续时尚品牌Everlane。此举被解读为Shein试图改善其环保形象，但ESG专家质疑其快时尚模式与Everlane的可持续理念冲突。收购后，Shein可能将Everlane作为独立品牌运营，或整合其供应链。卖家需关注Shein品牌矩阵变化对竞争格局的影响。", source: "ESG Dive", type: "press", platform: "shein", dimension: "", date: new Date("2025-07-31"), url: "https://news.google.com/rss/articles/CBMieEFVX3lxTE5sNWQxU0FjZUYtcURKZ0JPWFN3dkZMWWxTa1VKUXhzNTVIRmtLeURmaV9iVUlKdkhUTWxMTTBYUkVGUlplamF3OW9ULVhrTks2QmhZRm91U2pGNlE4WWlpVFAwQkd6czd0dWVqWjJldXdfc1Jhb2c4Sg?oc=5" },
  { id: "tiktok_new006", title: "TikTok Shop欧洲四国半年GMV约5.7亿美元，高盛报告", content: "高盛报告显示，TikTok Shop在英国、德国、法国、西班牙四国上线半年内GMV约5.7亿美元。其中英国贡献最大，但整体规模仍远低于东南亚。TikTok正加速欧洲本地化，包括开放爱尔兰卖家入驻。卖家可布局欧洲市场，但需注意各国合规差异及物流成本。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-07-31"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1KTGNkTU9wV2VTZFJIMWpBcjJZc1NUTWZCOExsOUJndW5PT2hhZEs4ZzRWSi03SnowbWNHWTZwRmg5T1BXckpKbXYtYzVDaGkzU3hUX1V5Q3A?oc=5" },
  { id: "tiktok_new007", title: "TikTok Shop欧洲市场热销品类：家居、美妆、电子产品爆单", content: "雨果跨境发布TikTok Shop欧洲市场热销品类报告，家居、美妆、电子产品位列前三。英国站家居品类增长最快，德国站美妆需求旺盛。卖家可参考选品，但需注意欧洲各国对产品认证（如CE、UKCA）的要求。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-07-31"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBWQnNoTmpDd2RzOHo0NzBGTGF2dk90SkJVOXRhTjlfLW5EQWExbGxOSWh3QVhYLVpxbkFOZ3I2Mm00WHUtWVhRQm1nOE4?oc=5" },
  { id: "tiktok_new008", title: "TikTok Shop佣金上涨，印尼承诺保护中小企业", content: "VOI.ID报道，TikTok Shop在印尼上调佣金费率，但当地政府承诺保护中小企业利益。虽然此事件发生在东南亚，但可能预示TikTok Shop在全球调整佣金结构的趋势。欧洲卖家需关注平台费率变动，及时调整定价策略。", source: "VOI.ID", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-07-31"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTE81NUx0cDVjYlNuSVJldk1WX1hxNGtnMC1fMU9xLU81eXNiTXNVYmh6Ry15SE94VlBRLVVjYk1KMm1OcXBFdzItbGJvQ0NSM2_SAUJBVV95cUxONVZfVWdwTFQxTjBYdURmM0N5QUhVYXJraG1MZFk5NkFKQ3ZRZjYtUmcwOURxTU9qOEItdGsyVTR6SEE?oc=5" },
  { id: "joybuy_new009", title: "京东考虑以20亿英镑收购英国Very Group，拓展欧洲市场", content: "Modaes报道，京东正考虑以20亿英镑收购英国电商集团Very Group，以加速欧洲扩张。若收购成功，京东将获得英国本地客户和物流网络，与亚马逊竞争。卖家可关注京东欧洲布局带来的新渠道机会，但需等待交易完成。", source: "Modaes", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-07-31"), url: "https://news.google.com/rss/articles/CBMiugFBVV95cUxPeEpQaVVvZ2MybTVZVDQ2QUFpdVRLS3FicFVuZXVmUElUb0pTeWFDWkRtVU5NYjRQNlY2NHBfY3hNaF96UzZRVDVTSkNndVc4cmpOUV91WFMzYk9HZVlORVVQZU9rRUJDZDB4VUxoQ1Nlc2RwSXFWNmJtS081dWFVOTlDWHdaV0ZScGZjdm9Db3V1bmp2R01helNjUERzejVkSk00d1NacFBqR3E2Nl9JUHdUYXMzQzJZb0E?oc=5" },
  { id: "joybuy_new010", title: "Anycubic Kobra X在Joybuy上线，覆盖四个欧洲市场", content: "富途牛牛报道，Anycubic Kobra X 3D打印机已在京东旗下Joybuy平台上线，覆盖英国、德国、法国、西班牙四个欧洲市场。Joybuy正通过引入品牌商品丰富品类，卖家可关注Joybuy的招商政策，拓展欧洲3C品类销售。", source: "富途牛牛", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-07-31"), url: "https://news.google.com/rss/articles/CBMioAFBVV95cUxQTV83RnRUcDdPT1l0ZWJfVmh2NS00RTYzUkNYZTVLRGFiWnVOZ29IWFA1MTJ6anRXczBNOXhkNk5QR2hoM3Nud1JDVnltRFRlNGo1V1E5RE9nU1YwZ3RtdkpoNGNQZE5ieW54c0hPUjlxd3g4SVVVdS03THRnRlRPenhKX19hUEZMUlZTazM0UlVHNFNKM1R3eG9IeGdfMTdr?oc=5" },
  { id: "temu_new001", title: "Temu美国网页流量从去年关税冲击中悄然恢复，增长势头再现", content: "据Sherwood News报道，Temu在美国的网页流量已从去年关税政策冲击中悄然恢复。此前关税调整曾导致Temu流量下滑，但近期数据显示其流量已回升至接近历史高位。这表明Temu通过优化物流和定价策略，成功抵消了关税带来的负面影响。对跨境卖家而言，Temu美国市场的流量恢复意味着竞争加剧，需关注平台流量分配规则和广告成本变化。", source: "Sherwood News", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMinwFBVV95cUxQM1lWV1Z2VFBUejMtMlJ6UTZZTzVIN3Q5VWtCT3liZmRZRmItcXRoaXNRTzVXM2gwZ3VzNGdVUzFUd0lkUGdJLXNTU19Dak94cEQ5R3kyRDB4UnlQem9ZQWNhVEp4Wm9GYkNRNGk2QXNLWWZWZzAtVmF5bTlPNFdETFpNZUU0SU0xckVNa2dBMXJwd1NHeXFFUEdJZ0JaN0E?oc=5" },
  { id: "temu_new002", title: "Temu半托管Y2模式上线，支持中国卖家自发货至欧洲", content: "搜狐网报道，Temu推出半托管Y2模式，允许中国卖家从国内直接发货至欧洲消费者，无需提前备货至海外仓。该模式履约时效为8-12个工作日备货加3-9天运输，最长21天。平台提供末端配送和流量支持，主要面向中小卖家。此举降低了卖家库存和资金压力，但需注意欧洲合规要求，如CE认证和EPR。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE01TkRJUEswLUpuWFZKLWhIbU83c2pDdDhTaE96Q3V5TkdEaUZHXzVVU2xDU2g1ai1hRlVOZGh5YWxkakEwM1hGMHprRE1BQm12?oc=5" },
  { id: "temu_new003", title: "Temu位列全球电商流量第二，仅次于亚马逊", content: "据创业邦和36氪报道，Temu已跻身全球电商流量第二名，仅次于亚马逊。AliExpress也位列前三。这表明中国跨境电商平台在全球市场的渗透率持续提升。对卖家而言，Temu的流量优势意味着更大的曝光机会，但竞争也将更加激烈，需优化产品定价和营销策略。", source: "创业邦", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE5HM29xcHg0ZmpFSXlmR3ZoY0VEaUpPZkRrT1dpYUpzU1VfWVhWT2xrdTlpeXZHM1ctZ1RBdGVYZ1h4aUNhWHFKWkxRVjU4dlQ2?oc=5" },
  { id: "temu_new004", title: "Temu欧洲合规收紧，SHEIN与Temu欧洲再开战", content: "雨果跨境报道，SHEIN与Temu在欧洲市场的竞争加剧，合规成为双方底牌。Temu需应对欧盟数字服务法（DSA）和产品安全法规，而SHEIN则通过收购Everlane强化供应链透明度。对卖家而言，欧洲市场合规成本上升，需确保产品符合CE、REACH等标准，否则面临下架风险。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE56cjhwQlJHXzcyc0staktyQ0cxYV9LNDdDQzh4eFBiQ25vekVYN3N5ZGtSVzEyQ0o3TUlESVlTSmdrUk84NUgzVHJSanY?oc=5" },
  { id: "shein_new005", title: "SHEIN以1亿美元收购可持续品牌Everlane，强化供应链", content: "据多家媒体报道，SHEIN正式以1亿美元收购美国可持续时尚品牌Everlane。此举旨在获取Everlane的供应链透明度和可持续营销能力，应对ESG审查。对卖家而言，SHEIN的品牌化战略可能影响平台流量分配，未来或更倾向支持品牌卖家。", source: "ESG Dive", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMieEFVX3lxTE5sNWQxU0FjZUYtcURKZ0JPWFN3dkZMWWxTa1VKUXhzNTVIRmtLeURmaV9iVUlKdkhUTWxMTTBYUkVGUlplamF3OW9ULVhrTks2QmhZRm91U2pGNlE4WWlpVFAwQkd6czd0dWVqWjJldXdfc1Jhb2c4Sg?oc=5" },
  { id: "shein_new006", title: "SHEIN波兰平台上线一周年，升级本地卖家服务拓展欧洲", content: "亿邦动力网报道，SHEIN波兰平台上线一周年，宣布升级本地卖家服务，包括物流、营销和合规支持，以拓展欧洲市场。对卖家而言，SHEIN在欧洲的本地化布局意味着更多入驻机会，但需满足欧盟合规要求，如CE标志和EPR。", source: "亿邦动力网", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBSYWM0VFIzSkVKRE9YbHlEV29ObllOV2Z6WGxsRjJrLWtISXROWGFxSzhOTm41Tmt2a1ZIdVVhMWZtYmpwNU1Va3owMzMwdUMyVWxvczlndU8?oc=5" },
  { id: "aliexpress_new007", title: "速卖通全面转向B2B2C与本地化，品牌是未来核心布局方向", content: "雨果跨境报道，速卖通总裁惊石宣布平台全面转向B2B2C模式，强化本地化运营，品牌成为核心布局方向。平台将重点扶持品牌卖家，提供专属流量和营销资源。对卖家而言，需注重品牌建设，提升产品质量和售后服务，以获取平台更多支持。", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBidkU3TU4waGRZSjE0T3c0NW5rVnJocXJwQnhEVXJ4d1ViTG1DVi1RaXNuS2t0dnM5Nnd6VkhTRVFUQnVGYk5vSUUxaTI?oc=5" },
  { id: "aliexpress_new008", title: "速卖通发布美巴墨韩增长计划，美国5月GMV涨超50%", content: "雨果跨境报道，速卖通发布美国、巴西、墨西哥、韩国增长计划，其中美国5月GMV同比增长超50%。平台将加大市场投入，优化物流和支付体验。对卖家而言，美国市场增长强劲，但需关注关税政策和竞争加剧。", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9yTmZaUDdDVV85WnFwU3dzYWRKdjY4UnRuVnI0enVSbXNPbFJ6ZldPRTZfX0lXTFF2ekxfRXF0cXVnVTRsYjJQUGN2WlJ6MkE?oc=5" },
  { id: "aliexpress_new009", title: "速卖通解读2026增长计划：全面加码美国、韩国、拉美三大核心市场", content: "新浪财经报道，速卖通解读2026年增长计划，将全面加码美国、韩国、拉美三大核心市场，投入更多资源用于物流、营销和本地化运营。对卖家而言，可重点关注这些市场的选品和运营策略，利用平台扶持政策提升销量。", source: "新浪财经", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMigwJBVV95cUxPbWVhdW5kQ0h5VnFhNUVKMmoxWjEyVkVTakpHLVo0SUdycHRGQ0s1UHdrU1pMa1FWSXRITThZN2wtLXNGc1ZUUFZucFQtek0xSl96R1MzM2lZaXFHUElIRGFUai1oNlVHeGwxbURjal9scFlWR3pOT2N2alAySTBzRUx4UWM0RG9wYldfVmVENjhpV3ItR3ZRRXBNS2lvYlhKeFZjOURzejJ5dWJ5RTR3NDRHS2RLcE1mV3U1SFdPYzdWYlE3eEh6QnVEWTlPOThrMlowNFBoVVlIU2N6c2ZoU1lLRERLbHg3eW96ZXNfNE1DOXNiSjJVbjlVeUdVclo0bk1z?oc=5" },
  { id: "joybuy_new010", title: "京东旗下Joybuy上线Anycubic Kobra X，覆盖四个欧洲市场", content: "富途牛牛报道，京东旗下Joybuy平台上线Anycubic Kobra X 3D打印机，覆盖德国、法国、意大利、西班牙四个欧洲市场。此举标志着京东在欧洲市场的品类扩张。对卖家而言，Joybuy作为新平台，入驻门槛可能较低，但需关注物流和售后要求。", source: "富途牛牛", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMioAFBVV95cUxQTV83RnRUcDdPT1l0ZWJfVmh2NS00RTYzUkNYZTVLRGFiWnVOZ29IWFA1MTJ6anRXczBNOXhkNk5QR2hoM3Nud1JDVnltRFRlNGo1V1E5RE9nU1YwZ3RtdkpoNGNQZE5ieW54c0hPUjlxd3g4SVVVdS03THRnRlRPenhKX19hUEZMUlZTazM0UlVHNFNKM1R3eG9IeGdfMTdr?oc=5" },
  { id: "tiktok_new011", title: "环球音乐与TikTok联手清除未授权AI生成音乐，影响内容创作", content: "亿邦动力网报道，环球音乐集团与TikTok将联手清除平台上的未授权AI生成音乐，以保护版权。此举可能影响TikTok上的音乐类内容创作和带货视频。对卖家而言，需确保使用的背景音乐已获授权，避免侵权风险。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9vRnpEYnhTeTV6VUxRZ0U0dGhjcDZpOEM5c1d4WEhFQU1ISzduWEtwc1pBV0RXZGhKY1RFMmJZeDAyQ2NYZU5JOHFFbnZxV0lzR29hNExB?oc=5" },
  { id: "aliexpress_new012", title: "亚马逊SWOT分析2026：AWS收入1500亿美元，AI投资2000亿美元", content: "Business Model Analyst发布亚马逊2026年SWOT分析，显示AWS年化收入达1500亿美元，AI资本支出达2000亿美元，同时面临FTC反垄断诉讼。对卖家而言，亚马逊的AI投入可能提升广告和物流效率，但FTC诉讼结果可能影响平台规则。", source: "Business Model Analyst", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5BWU1LVWljeTh4T0lNeHpBd3hQdzlkZ0tiemdpaEszUVdwbzlnZ1VxZEx5b0Q2cTBwbG5DbmJWQ01uUjVlNDVZdFBFdUQ3N2ZxN3p2TjZOYjNsNV9kblFwVVRYeEc?oc=5" },
  { id: "shein_new001", title: "Shein以1亿美元收购Everlane，可持续营销策略面临新审视", content: "Shein正式宣布以1亿美元收购美国DTC品牌Everlane，此举标志着快时尚巨头向可持续时尚领域扩张。Everlane以透明定价和可持续供应链著称，收购后其品牌定位与Shein的极速快时尚模式形成冲突，引发对Shein可持续性声明的质疑。分析师认为，Shein可能利用Everlane的供应链经验改善自身ESG形象，但短期内整合挑战巨大。对跨境卖家而言，Shein的品牌矩阵扩展可能加剧美国市场竞争，尤其是中端价位女装品类。建议卖家关注Shein后续的供应链合规要求变化。", source: "ESG Dive", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-21"), url: "https://news.google.com/rss/articles/CBMieEFVX3lxTE5sNWQxU0FjZUYtcURKZ0JPWFN3dkZMWWxTa1VKUXhzNTVIRmtLeURmaV9iVUlKdkhUTWxMTTBYUkVGUlplamF3OW9ULVhrTks2QmhZRm91U2pGNlE4WWlpVFAwQkd6czd0dWVqWjJldXdfc1Jhb2c4Sg?oc=5" },
  { id: "tiktok_new002", title: "TikTok Shop欧洲四国半年GMV达5.7亿美元，增长迅猛", content: "高盛报告显示，TikTok Shop在英国、德国、法国、西班牙四国上线半年内GMV合计约5.7亿美元，其中英国贡献超40%。平台通过本地化运营和内容电商模式快速抢占市场，但90%卖家亏损的现状也引发关注。主要问题包括物流成本高、退货率超30%、以及本地化营销投入大。建议卖家优先选择高客单价、低退货率品类，并利用TikTok的达人带货矩阵降低获客成本。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-21"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9GU1YyX3R3NDlVYmVjZVJxdW13WnU3a09Fb3ZOWUxJdXBUcG1CRndsVW9mZmxhS3ZydllNT0RIckh5dTJudF9NbGo2ZG1RZVh2M25NanlhTG8?oc=5" },
  { id: "aliexpress_new003", title: "速卖通2026增长计划：全面加码美国、韩国、拉美三大市场", content: "速卖通公布2026年战略，将美国、韩国、拉美列为三大核心增长市场，计划投入翻三倍资源。美国市场重点优化物流时效（承诺7日达），韩国站推出Brand+品牌出海计划，拉美则强化本地支付和物流基建。同时，速卖通将加强欧盟合规要求，包括EPR、增值税代扣代缴等。对卖家而言，美国站竞争将加剧，建议提前布局海外仓；韩国站适合品牌型卖家入驻。", source: "新浪财经", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-05-21"), url: "https://news.google.com/rss/articles/CBMigwJBVV95cUxPbWVhdW5kQ0h5VnFhNUVKMmoxWjEyVkVTakpHLVo0SUdycHRGQ0s1UHdrU1pMa1FWSXRITThZN2wtLXNGc1ZUUFZucFQtek0xSl96R1MzM2lZaXFHUElIRGFUai1oNlVHeGwxbURjal9scFlWR3pOT2N2alAySTBzRUx4UWM0RG9wYldfVmVENjhpV3ItR3ZRRXBNS2lvYlhKeFZjOURzejJ5dWJ5RTR3NDRHS2RLcE1mV3U1SFdPYzdWYlE3eEh6QnVEWTlPOThrMlowNFBoVVlIU2N6c2ZoU1lLRERLbHg3eW96ZXNfNE1DOXNiSjJVbjlVeUdVclo0bk1z?oc=5" },
  { id: "joybuy_new004", title: "京东拟20亿英镑收购英国Very Group，加速欧洲扩张", content: "京东正考虑以约20亿英镑收购英国电商集团Very Group，以快速进入英国市场。Very Group旗下拥有Very.co.uk和Littlewoods等品牌，年营收约20亿英镑。若收购成功，京东将获得英国本地仓储物流网络和客户基础，并计划推行“211”限时达服务。此举直接对标亚马逊英国站，但欧洲消费者对配送时效的接受度存疑。对跨境卖家而言，京东入欧可能带来新的分销渠道，但需关注其平台入驻政策和合规要求。", source: "Modaes", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-05-21"), url: "https://news.google.com/rss/articles/CBMiugFBVV95cUxPeEpQaVVvZ2MybTVZVDQ2QUFpdVRLS3FicFVuZXVmUElUb0pTeWFDWkRtVU5NYjRQNlY2NHBfY3hNaF96UzZRVDVTSkNndVc4cmpOUV91WFMzYk9HZVlORVVQZU9rRUJDZDB4VUxoQ1Nlc2RwSXFWNmJtS081dWFVOTlDWHdaV0ZScGZjdm9Db3V1bmp2R01helNjUERzejVkSk00d1NacFBqR3E2Nl9JUHdUYXMzQzJZb0E?oc=5" },
  { id: "shein_new005", title: "Shein在英国“黄金物流三角区”自建物流中心，加码本地履约", content: "Shein宣布在英国考文垂附近的“黄金物流三角区”自建物流中心，面积约50万平方英尺，预计2026年底投入运营。该中心将处理英国及欧洲大陆的订单，实现本地发货，将配送时效缩短至2-3天。此前Shein已与英国皇家邮政合作，自建仓将进一步提升履约效率和成本控制。对卖家而言，Shein的物流升级可能提高平台门槛，建议提前备货至英国仓以享受流量倾斜。", source: "新浪网", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-21"), url: "https://news.google.com/rss/articles/CBMi6gFBVV95cUxNTGFFb18yNkJ1SzVPNU8tZTh1X0ZGR0hOR2pjU0dJMXFtNWlBczRlbGxaeHMwRGRXd0Nzdm1JOTdobWtMY191S0lySGNiZEd4enZGZXYtcWdnWFgxbFZuTnhxTkpiZW5ZU0piaW5aa3FOMUpQSHl2OWQtT3BrSk8ySWFBUzgyZFpldUpqYl90bl9HUGE2MHlOUEY5R1Q1cUtyZG9BZ1cwcDJsdU8xQWZtSG9wd1FOZHo3ZlZDeTcwWDhHaU1UZlNPazFEaG80VW9UNThOZGhlUjMxczBhWUFhYzBPS0VxTFZndGc?oc=5" },
  { id: "shein_new006", title: "SHEIN vs TEMU欧洲再开战：合规成为竞争底牌", content: "SHEIN和Temu在欧洲市场的竞争加剧，双方均加大合规投入以应对欧盟数字服务法（DSA）和产品安全法规。SHEIN已建立专门的合规团队，并承诺产品安全标准；Temu则因低价策略面临更多监管审查。两家平台均要求卖家提供CE认证、REACH报告等文件，不合规产品将被下架。对卖家而言，合规成本上升但也是差异化机会，建议优先选择有认证资质的供应商。", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-21"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE56cjhwQlJHXzcyc0staktyQ0cxYV9LNDdDQzh4eFBiQ25vekVYN3N5ZGtSVzEyQ0o3TUlESVlTSmdrUk84NUgzVHJSanY?oc=5" },
  { id: "temu_new007", title: "Temu在越南封禁18个月后蓄力重启，但合规仍是挑战", content: "Temu在越南被禁18个月后，正筹备重新进入市场。此前因未满足本地化要求（如数据存储、支付牌照）被叫停。此次回归，Temu计划与越南本地物流和支付公司合作，并设立本地办事处。然而，越南电商市场竞争激烈，Shopee、Lazada已占据主导。对卖家而言，Temu重启可能带来新流量，但需注意越南的进口关税和产品认证要求。", source: "白鲸出海", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-21"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE8yUVJFdWNralBjSThTMVE0ZC1RR3I1YXgzYVdCNFlkVDl2T1JCQ0hHckNkd1FweUhLaEtTbHkzNFhZbXB4OVJSY191bk8?oc=5" },
  { id: "joybuy_new008", title: "京东与万事达达成战略合作，拓展全球支付与跨境贸易", content: "京东与万事达宣布战略合作，将整合万事达的支付技术和京东的电商生态，为全球商家提供跨境支付解决方案。合作初期聚焦欧洲和东南亚市场，支持多币种结算和本地支付方式。此举有助于京东国际业务（Joybuy）降低交易成本，提升买家转化率。对卖家而言，支付便利化可能带来更多海外订单，但需关注汇率波动和结算周期。", source: "Retail Asia", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-05-21"), url: "https://news.google.com/rss/articles/CBMivAFBVV95cUxNNzNuSDN1YW9OV0tOOFdudTBvV1E4b3hKZlFwOWdRZW9IRlE5cFllMjFjMUlFVTFTNTVvRzBGTlZKdGd1QnJUMEYzWE1RM1d3Y0R6NnNsYUkzc1ZlQ2kxY0hhQy13VkU1emd2OXAwYW1xbC1FRWs3SXB4WDBfOTdfVi1Za2ZGcy1MUzNpaWN3Zk5rZWJtQVJ6VGh4UEI2eXUwdTBkOXV4ci00YjdiZWkxbXZyQVdKc3hsUTFkNQ?oc=5" },
  { id: "aliexpress_new009", title: "速卖通Brand+品牌出海计划开放韩国站，市场投入同比翻三倍", content: "速卖通宣布Brand+品牌出海计划扩展至韩国站，为品牌卖家提供专属流量、物流补贴和营销支持。2026年韩国市场投入将同比翻三倍，重点招募美妆、时尚、电子品类。韩国电商市场成熟，但竞争激烈，Coupang和Naver占据主导。对卖家而言，速卖通韩国站适合有品牌基础、能提供快速配送（5日内达）的商家，建议提前备货至韩国仓。", source: "亿邦动力网", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-05-21"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBTRkJCNm5tVjNqS3RhNlhqYUh6UU91Sk9sM0NMMzRHdmpENVZDLWFZel9CZFU0bTBVWlozdWplTUpvcFVHYVhHeW9YY29nWlV4N3ljSHhB?oc=5" },
  { id: "temu_new010", title: "Temu海外仓头程欧洲空派DPD专线上线，支持普货液体化妆品", content: "Temu推出欧洲空派DPD专线，支持普货、液体、化妆品等敏感品运输，头程时效3-5天，尾程由DPD派送。该服务主要面向英国、德国、法国等市场，适合高价值、时效敏感的商品。Temu正加速欧洲本地化物流布局，以提升履约体验。对卖家而言，该专线降低了敏感品物流门槛，但成本较高，建议结合产品利润合理选择。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-21"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE1JUzFFOEJqcVROUHhpaUtXNlR1RUxKeVhsTmVMWUpQbGZoYVRZM0dfQ1lBZXc3VHZMMU92SDR6TVpKcTMtSXBOcW1SMkFZZ0s5?oc=5" },
  { id: "aliexpress_new011", title: "全球电商流量前三AliExpress、Temu占两席，出海四小龙合围亚马逊", content: "最新报告显示，全球电商网站流量排名中，亚马逊第一，Temu第二，AliExpress第三，SHEIN和TikTok Shop紧随其后。中国出海平台（四小龙）合计流量已接近亚马逊的60%，尤其在服装、家居、3C品类形成优势。但亚马逊在物流（FBA）和Prime会员粘性上仍具壁垒。对卖家而言，多平台布局成为趋势，建议根据品类特点选择主攻平台，并利用各平台差异化流量红利。", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-05-21"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1JZ0I1ZmtIaVBLTjY5QVUzRTFSemhvOEVVT0JsX2ptbmQwYWhVeExQX1lRS21MUC1BQXhaeWZNaUFpcHFFMGNPdWtWd3I?oc=5" },
  { id: "tiktok_new001", title: "TikTok Shop欧洲四国半年GMV约5.7亿美元，高盛报告揭示增长潜力", content: "高盛最新报告显示，TikTok Shop在英国、德国、法国、西班牙四个欧洲国家上线仅半年，GMV合计约5.7亿美元，其中英国市场贡献最大。该数据表明TikTok Shop在欧洲的电商业务正快速扩张，但相比东南亚仍处于早期阶段。对于跨境卖家，欧洲市场内容电商红利初现，但需注意合规要求（如GPSR、EPR）和本地化运营。建议卖家优先布局英国，利用短视频和达人带货模式测试品类，同时关注平台佣金和物流政策变化。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1KTGNkTU9wV2VTZFJIMWpBcjJZc1NUTWZCOExsOUJndW5PT2hhZEs4ZzRWSi03SnowbWNHWTZwRmg5T1BXckpKbXYtYzVDaGkzU3hUX1V5Q3A?oc=5" },
  { id: "temu_new002", title: "Temu欧洲再开战：合规成为平台与卖家博弈底牌", content: "Temu与SHEIN在欧洲市场的竞争加剧，合规成为关键因素。Temu近期加强产品合规审核，要求卖家提供CE、RoHS等认证，并推出第三方检测认证服务。同时，欧盟数字服务法（DSA）和GPSR对平台提出更高合规要求。对于跨境卖家，合规成本上升但也是长期经营的基础，建议提前准备产品认证文件，选择有资质的检测机构，避免因合规问题导致下架或罚款。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE56cjhwQlJHXzcyc0staktyQ0cxYV9LNDdDQzh4eFBiQ25vekVYN3N5ZGtSVzEyQ0o3TUlESVlTSmdrUk84NUgzVHJSanY?oc=5" },
  { id: "temu_new003", title: "Temu推出第三方检测认证服务，助力卖家合规化运营", content: "Temu宣布为卖家提供第三方产品检测和认证服务，涵盖CE、FCC、RoHS等常见合规要求。该服务旨在帮助卖家降低合规门槛，加速产品上架。对于跨境卖家，尤其是中小卖家，可利用该服务快速获取认证，但需注意费用成本。建议卖家优先选择平台推荐的检测机构，确保认证被认可，同时关注不同国家（如欧盟、美国）的差异化要求。", source: "Chain Store Age", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMilwFBVV95cUxOYlVwNEpZRFFWd29mNWlZaGdobDZ5VkwyazFfSUNfM3Y0Z2ZyXzRvRHliOHBncERmU1lhUU5BTDJKdUhyVFRhRnl1TlVVUlRvZ3ZWcEZRODF4YmdvamhfbGp5d3R4cFFwYnpaaGRoMW1tbFpXV1JvRWR3LXJjSUFaVTVXcGg4QW9wMHJWNHNBODZ6Mm5tLWRz?oc=5" },
  { id: "shein_new004", title: "SHEIN加码英国市场，在黄金物流三角区自建物流中心", content: "SHEIN在英国“黄金物流三角区”（靠近伯明翰、考文垂等核心城市）自建物流中心，以提升配送时效和降低物流成本。该中心将支持本地退货处理和快速配送，进一步巩固SHEIN在英国市场的竞争力。对于跨境卖家，SHEIN的物流基建投入意味着平台对英国市场的重视，卖家可借助平台物流优势提升消费者体验，建议关注SHEIN的本地仓入驻政策。", source: "新浪财经", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMi9AFBVV95cUxNNWRBZkV2R3o1MlRFQWczbE1Wbmh6bnNsVXJTb1ZqTTJIQnIxbWhxRFhMbE4zZWU5NF9VTGVoSmFBb09faWp3c0QxaF9sb1FrYXpWby1BZGhyQ0tBc2xxaUlMaTVTSldXNVRRa0E1ZEQzd0xxWHcwVkJHOFN0cm9wNFVNbmh6dHF5MEhzMXNCLWRzb0NkbnF0Z2xsVHp1blFFUS1weDA5RUl6S0V2djNXamNWSXdFSEtORzM4Z3hMM1N1azZGclYtcFdqUUdIb3RncEl6dVFER29BVnNlTFVGMTFodTZRbmZGdkQ0X0NHX3FTd2lV?oc=5" },
  { id: "shein_new005", title: "SHEIN文具类目流量激增，卖家可关注细分品类机会", content: "SHEIN平台文具类目近期流量激增，成为新的增长点。这一趋势反映了消费者对创意文具、办公用品的需求上升，尤其是在返校季和节日促销期间。对于跨境卖家，文具类目竞争相对较小，利润空间可观，建议开发差异化产品（如IP联名、环保材质），并利用SHEIN的流量扶持政策快速测试市场。", source: "新浪网", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9RMS13U1R1bUJJejJQZEduQmUwNGdXTWIzZ3JKclNMaWNJZU42X1NHcWhCa3FTSWM4TGNCRk1jLWJTWFZ6aWVhbmx1RmV0Z0tjcTBkeDZKM3A4ZVN2LUdZcWVVOA?oc=5" },
  { id: "aliexpress_new006", title: "速卖通Brand+品牌出海计划开放韩国站，今年市场投入同比翻三倍", content: "速卖通Brand+品牌出海计划正式开放韩国站，同时宣布今年在韩国市场的投入同比翻三倍，包括广告补贴、物流补贴和本地化运营支持。该计划旨在吸引中国品牌卖家入驻，提升速卖通在韩国市场的品牌认知度。对于跨境卖家，韩国市场对美妆、3C、时尚品类需求旺盛，但需注意本地化合规（如KC认证）和竞争激烈。建议有品牌基础的卖家优先入驻，利用平台补贴快速建立品牌影响力。", source: "亿邦动力网", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBTRkJCNm5tVjNqS3RhNlhqYUh6UU91Sk9sM0NMMzRHdmpENVZDLWFZel9CZFU0bTBVWlozdWplTUpvcFVHYVhHeW9YY29nWlV4N3ljSHhB?oc=5" },
  { id: "joybuy_new007", title: "京东考虑以20亿英镑收购英国Very Group，加速欧洲扩张", content: "据Modaes报道，京东（JD.com）正考虑以约20亿英镑收购英国电商集团Very Group，以加速其在英国和欧洲市场的扩张。Very Group旗下拥有Very.co.uk和Littlewoods等品牌，主营时尚、家居和电子产品。若收购成功，京东将获得英国本地用户基础和物流网络。对于跨境卖家，京东的欧洲布局可能带来新的平台机会，但需关注收购进展和后续平台政策。", source: "Modaes", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMiugFBVV95cUxPeEpQaVVvZ2MybTVZVDQ2QUFpdVRLS3FicFVuZXVmUElUb0pTeWFDWkRtVU5NYjRQNlY2NHBfY3hNaF96UzZRVDVTSkNndVc4cmpOUV91WFMzYk9HZVlORVVQZU9rRUJDZDB4VUxoQ1Nlc2RwSXFWNmJtS081dWFVOTlDWHdaV0ZScGZjdm9Db3V1bmp2R01helNjUERzejVkSk00d1NacFBqR3E2Nl9JUHdUYXMzQzJZb0E?oc=5" },
  { id: "joybuy_new008", title: "京东与万事达合作拓展全球支付和跨境贸易战略", content: "京东与万事达（Mastercard）达成合作，共同拓展全球支付解决方案和跨境贸易服务。合作内容包括为京东国际用户提供更便捷的支付方式、优化跨境交易流程等。此举有助于京东提升海外用户体验，尤其是欧洲和北美市场。对于跨境卖家，京东的支付合作可能降低交易成本，建议关注京东国际的招商政策，利用其物流和支付优势拓展海外市场。", source: "Retail Asia", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMivAFBVV95cUxNNzNuSDN1YW9OV0tOOFdudTBvV1E4b3hKZlFwOWdRZW9IRlE5cFllMjFjMUlFVTFTNTVvRzBGTlZKdGd1QnJUMEYzWE1RM1d3Y0R6NnNsYUkzc1ZlQ2kxY0hhQy13VkU1emd2OXAwYW1xbC1FRWs3SXB4WDBfOTdfVi1Za2ZGcy1MUzNpaWN3Zk5rZWJtQVJ6VGh4UEI2eXUwdTBkOXV4ci00YjdiZWkxbXZyQVdKc3hsUTFkNQ?oc=5" },
  { id: "joybuy_new009", title: "欧洲版京东即将上线，刘强东时隔十年重返欧洲市场", content: "据新浪财经报道，京东计划推出欧洲版电商平台，刘强东时隔十年再次主导欧洲市场拓展。该平台可能整合京东的供应链和物流优势，主打高品质商品和快速配送。对于跨境卖家，京东欧洲平台可能提供新的销售渠道，但需注意平台定位（可能偏向品牌和品质）和入驻门槛。建议有品牌实力的卖家提前关注，准备欧洲合规资质。", source: "新浪财经", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMigwJBVV95cUxOOWhhRHpKSXZQZkZkMWF3WHlBcmpVYml3MWVpLUM5ZXZJS25zRlBYYUVtZzAwTlJXSFZicU5LWEpLNEt3VHF2QjY1TkdDUS1Lal9oNTZyMmZBVG9acVJnOU1mbHFOZzFObTQzb0lOOTFaQWVFOVpkbFhiZW84YzZaejFLS1RWTVFNWmJYNFRuRlRqb2QyU3ZsU2FWQTZ4dzVuaDY3OWZEbkNsVmRGMmVvS2dTUmpfS2RLaC1jb3Q0NzY0d0RUaVRTa2E3Mm5HMXYwcjZIb05zNlFsTGpDT25DVUM2YWlVMGhmbnJYU3B5aG54Nm9nNldxbXk2ODd4eS04bDAw?oc=5" },
  { id: "tiktok_new010", title: "TikTok Shop多国年中大促提前加码，出海品牌进入内容种草+达人转化关键窗口", content: "TikTok Shop在多个市场（包括美国、欧洲）提前启动年中大促，推出流量扶持、达人合作补贴等政策。平台强调“内容种草+达人转化”模式，鼓励卖家通过短视频和直播提升转化。对于跨境卖家，年中大促是测试内容电商策略的好时机，建议提前布局达人合作，制作本地化内容，并优化商品卡和促销机制。", source: "中华网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMibEFVX3lxTE04bFlQY3BZRGRxMVBQdkwxT2tEcDNnYWR1Uk03alI1dUpqdDVfVlNDVHM5UzZGamxSWnZsbEVlWVpNX0l3UnRHR0NVOEZfb3dJMnFpM2o4Y1dBcWdMTzdCOHA2V1d0X0dMbi11Ug?oc=5" },
  { id: "tiktok_new011", title: "从免费种草到坑位费翻倍，TikTok达人带货三年变天", content: "TikTok达人带货生态在过去三年发生巨变，从早期免费种草到如今头部达人坑位费翻倍，部分达人单条视频报价超10万美元。同时，平台算法调整使得内容曝光不确定性增加。对于跨境卖家，达人营销成本上升，需更精细化选择达人，关注ROI而非单纯曝光。建议卖家建立自有达人库，结合中小达人矩阵和直播带货，降低对头部达人的依赖。", source: "新浪财经", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMif0FVX3lxTE1TeTFzeTN5OHFtU0NWYzNaaktydTktRG1fRGlOSzJLLWdac0hmdUlwVThZaVNhbDFBUGNxWnprdm1iaDRTdHYtU2JZT21OSmlyOFhHREZRMDRFVmluWDlvWWZ2dnZyRFc4VUo2WEd1djNRRnc2YkdiMWJzeHhkenc?oc=5" },
  { id: "shein_new012", title: "SHEIN收购Everlane交易金额1亿美元，标志DTC可持续营销策略终结", content: "据RETAILBOSS报道，SHEIN以1亿美元收购美国DTC品牌Everlane。Everlane曾以“透明定价”和“可持续”为营销核心，但近年来增长乏力。此次收购显示SHEIN通过整合品牌资产拓展中高端市场，同时标志着纯可持续营销策略在DTC领域的失效。对于跨境卖家，品牌化趋势明显，但需平衡可持续理念与成本控制，建议关注SHEIN的品牌化路径。", source: "RETAILBOSS | Substack", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMifkFVX3lxTFBOZ1FUVzMyUEdnRWJVaUZqcFpTM1NvQkxmdEk5cTVMT3IyX3V1WUJTVDFUSXk5ek9BWThlTDBQa2RoaHhBbFRLTzFlZVMzeV82dHplRGFfSlUxeGY2aXVNWElsc0NGYThrQWpPV3N4QTVtSVdjck9lNUc5OHBjUQ?oc=5" },
  { id: "shein_new013", title: "SHEIN与Everlane供应链整合：自有供应链的力量", content: "Vogue文章分析SHEIN收购Everlane后，将整合其供应链优势，提升产品质量和可持续性。SHEIN的柔性供应链能力（小单快反）与Everlane的品牌调性结合，可能产生协同效应。对于跨境卖家，供应链效率是核心竞争力，建议学习SHEIN的数字化供应链管理，同时关注品牌化对供应链提出的新要求（如环保材料、可追溯性）。", source: "Vogue", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMijwFBVV95cUxNR0FsN3hfYzhEazBZR0lxUWZLUWlVeF9Dc09USGZuNlBWNDB1eUN1TGJhWDZGMnpaMUlCLUc4VElwNDFZNURxOHByVTItZlY4WnJqNnZIS0xtc2c3b3BjOW4xc3h0TWxnaV9EUXNDVW1EVDJiMnhUWmdRenU4RHYwMHhhcmJiRFVMRXRMcnJ5OA?oc=5" },
  { id: "temu_new001", title: "Temu跻身全球电商流量第二，仅次于亚马逊主站", content: "根据最新数据，Temu已成为全球访问量第二大的电商网站，仅次于亚马逊主站。这一排名反映了Temu在欧美市场的快速扩张，尤其是其低价策略和社交裂变模式吸引了大量用户。对于跨境卖家而言，Temu的流量红利意味着更多曝光机会，但同时也面临平台佣金和物流成本的变化。建议卖家关注Temu的Y2半托管模式，利用国内直发降低库存风险。", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE4ycXQ3ZjNnWlFuTWQ2Y3VDT0Z2MHdWZzVXTW0wM3hCeUlmc2Q1YnhVMFRyVk9malFRdzI2Q1Zwa3dxdm9Nc0tROWY0ZTQtdkFXbUtTY1Bn?oc=5" },
  { id: "shein_new002", title: "SHEIN在英国“黄金物流三角区”自建物流中心，加码欧洲本地配送", content: "SHEIN宣布在英国“黄金物流三角区”自建物流中心，以提升欧洲市场的配送效率。该区域靠近主要交通枢纽，可覆盖英国及欧洲大陆。此举将缩短履约时效，降低对第三方物流的依赖，并可能推动SHEIN在欧洲的本地化库存布局。对于卖家而言，SHEIN的物流升级意味着更快的退货处理和补货周期，但需注意平台可能调整仓储费用。", source: "新浪财经", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMi9AFBVV95cUxNNWRBZkV2R3o1MlRFQWczbE1Wbmh6bnNsVXJTb1ZqTTJIQnIxbWhxRFhMbE4zZWU5NF9VTGVoSmFBb09faWp3c0QxaF9sb1FrYXpWby1BZGhyQ0tBc2xxaUlMaTVTSldXNVRRa0E1ZEQzd0xxWHcwVkJHOFN0cm9wNFVNbmh6dHF5MEhzMXNCLWRzb0NkbnF0Z2xsVHp1blFFUS1weDA5RUl6S0V2djNXamNWSXdFSEtORzM4Z3hMM1N1azZGclYtcFdqUUdIb3RncEl6dVFER29BVnNlTFVGMTFodTZRbmZGdkQ0X0NHX3FTd2lV?oc=5" },
  { id: "tiktok_new003", title: "TikTok Shop东南亚年度GMV暴增125%，新商内贸占比达40%", content: "TikTok Shop东南亚市场年度GMV同比增长125%，其中新入驻商家中内贸型卖家占比达40%。这表明TikTok Shop正吸引大量传统内贸卖家转型跨境，平台通过内容电商和达人带货模式降低出海门槛。对于欧美卖家，可借鉴东南亚的“内容种草+达人转化”策略，但需注意不同市场的合规要求。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE85ZUFFX1I5LUVRQjZvaXJTWDJCOHVWeXhHUTNWcDNmZlIzV19OY3RQeFF2VWo2YmR5ZkJjWmF4cHg5Qm83eGFwRm5ZX21vdmcycG5ObWNn?oc=5" },
  { id: "tiktok_new004", title: "TikTok Shop爱尔兰全面开放本地商家入驻，创作者数量激增六倍", content: "TikTok Shop在爱尔兰全面开放本地商家入驻，同时平台创作者数量激增六倍。此举旨在拓展欧洲市场，通过本地化内容吸引消费者。对于跨境卖家，爱尔兰可作为进入欧盟市场的跳板，但需遵守欧盟的消费者保护法规（如EPR、GPSR）。建议卖家提前注册EPR号并优化产品合规。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE4yZXJZbFRjYUZvNW1URVpHbDVLdDBRV3IzSVBPdmV6X0hRaXpwa1pPN0UtMVJtX3ZnbDlCMjNGYWNKU3hOZmFyN2VoWjRnODNmdV93ejRB?oc=5" },
  { id: "shein_new005", title: "SHEIN收购Everlane，DTC可持续营销策略终结", content: "SHEIN以1亿美元收购美国DTC品牌Everlane，标志着可持续营销作为DTC增长策略的终结。SHEIN将整合Everlane的供应链和品牌资产，强化其在欧美市场的品牌形象。对于卖家，SHEIN的收购可能带来品类扩张和流量倾斜，但需关注平台对可持续认证的要求变化。", source: "RETAILBOSS | Substack", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMifkFVX3lxTFBOZ1FUVzMyUEdnRWJVaUZqcFpTM1NvQkxmdEk5cTVMT3IyX3V1WUJTVDFUSXk5ek9BWThlTDBQa2RoaHhBbFRLTzFlZVMzeV82dHplRGFfSlUxeGY2aXVNWElsc0NGYThrQWpPV3N4QTVtSVdjck9lNUc5OHBjUQ?oc=5" },
  { id: "shein_new006", title: "SHEIN波兰平台上线一周年，升级本地卖家服务拓展欧洲市场", content: "SHEIN波兰平台上线一周年，宣布升级本地卖家服务，包括更快的物流支持和本地化营销工具。波兰作为中东欧枢纽，SHEIN正通过本地化策略巩固欧洲市场份额。对于卖家，入驻SHEIN波兰站可享受本地仓储和配送优势，但需注意欧盟合规要求。", source: "亿邦动力网", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBSYWM0VFIzSkVKRE9YbHlEV29ObllOV2Z6WGxsRjJrLWtISXROWGFxSzhOTm41Tmt2a1ZIdVVhMWZtYmpwNU1Va3owMzMwdUMyVWxvczlndU8?oc=5" },
  { id: "temu_new007", title: "Temu美国Y2模式上线，跨境卖家可直发无需海外仓", content: "Temu在美国推出Y2半托管模式，允许中国卖家从国内直接发货，无需海外仓备货。该模式履约时效为8-12个工作日备货加3-9天运输，平台提供末端配送和流量支持。这降低了中小卖家的库存压力，但需注意物流时效对转化率的影响。同时，Temu在欧洲也与意大利邮政等合作扩大本地履约能力。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE1LVHZzZndHOHdLT3pJNEtteGVyN1MtUDNROHVTNnFpTFVlX21qZ2JiSjFiRkM5dTk4bWFsV0RfTkp0X3lVZkQ2UVUxUzE5Uldm?oc=5" },
  { id: "joybuy_new008", title: "Mastercard与京东达成战略合作，支持全球支付创新", content: "Mastercard与京东宣布战略合作，通过支付创新支持京东的全球商业扩张，包括跨境支付和B2B贸易。合作将提升京东海外站的支付体验，降低交易摩擦。对于卖家，京东海外站（如Joybuy）可能获得更多流量和支付便利，建议关注京东欧洲站点的开放机会。", source: "TradingView", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMi_AFBVV95cUxOUFJyYjBialEwTG16WWJ6MktzeHhqdFp2bkZ4bGFfeXBISUVNeld1ZjJGd3Y2Z3ZuSXBwZXgyaDBtMmJlM01uQllaS0h0dmZnaHY1clB6N1BDLVdDSzFjWmdibno0cU1KcFlBMTV0SHFmdkJuX0ZzazlicTVzdE1WWU9JcDdkZXREM3FoTldVWERkdUlQTV9pVEhiYm9FR1dYcHJnT3FJUy1WaS1EbHVpZGZ4YXVEbUFXVXlTYjlzNmxyeE5tbG4wT2w1VGpIVUlYU3hnM1pURlc5YUZ1WU41Y1NOVmRYQkxCYlBLOFBsTmlpU29JeXRvWDZRUk4?oc=5" },
  { id: "shein_new001", title: "SHEIN以1亿美元收购Everlane，标志可持续营销作为DTC增长策略终结", content: "SHEIN以1亿美元收购美国DTC品牌Everlane，后者曾以“透明定价”和“可持续时尚”著称。此次收购表明SHEIN正从纯快时尚平台向品牌化转型，同时获取Everlane的供应链透明度和中高端用户群。对跨境卖家而言，SHEIN的品牌化策略可能提高平台入驻门槛，未来或更倾向与有品牌力的卖家合作，纯白牌卖家面临更大竞争压力。", source: "RETAILBOSS | Substack", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMifkFVX3lxTFBOZ1FUVzMyUEdnRWJVaUZqcFpTM1NvQkxmdEk5cTVMT3IyX3V1WUJTVDFUSXk5ek9BWThlTDBQa2RoaHhBbFRLTzFlZVMzeV82dHplRGFfSlUxeGY2aXVNWElsc0NGYThrQWpPV3N4QTVtSVdjck9lNUc5OHBjUQ?oc=5" },
  { id: "tiktok_new002", title: "TikTok Shop佣金上涨，印尼政府承诺保护中小企业", content: "TikTok Shop宣布上调平台佣金，具体涨幅因品类而异，部分类目佣金率提升至5%-10%。印尼通信与信息部（Komdigi）表示将监控调整对中小企业的影响，并承诺提供支持。此次佣金上涨可能影响卖家利润，尤其是低毛利商品。卖家需重新核算成本，优化定价策略，或转向高毛利品类。", source: "VOI.id", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTE81NUx0cDVjYlNuSVJldk1WX1hxNGtnMC1fMU9xLU81eXNiTXNVYmh6Ry15SE94VlBRLVVjYk1KMm1OcXBFdzItbGJvQ0NSM2_SAUJBVV95cUxONVZfVWdwTFQxTjBYdURmM0N5QUhVYXJraG1MZFk5NkFKQ3ZRZjYtUmcwOURxTU9qOEItdGsyVTR6SEE?oc=5" },
  { id: "shein_new003", title: "SHEIN将于4月中上旬限制美区商家自发货功能，强化物流管控", content: "SHEIN宣布自2025年4月中上旬起，限制美国区商家使用自发货功能，要求卖家使用平台指定物流或海外仓履约。此举旨在提升配送时效和用户体验，减少因自发货导致的延迟和罚款。卖家需提前布局海外仓或接入SHEIN物流体系，否则可能面临订单限制。", source: "新浪财经", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMiiAJBVV95cUxPN01naFlDVGU1M1JxS2lTY3ZMM2EzWHI5RXYwQlA3cUE1ajh5LTlpeGt3TGlqcEMySmVMNkowVUY3N1c3SFBrZEJqRWFxSFJsbVZYalg4VDF6cmdVYlUzWjB1a3U0QUo4TTVWSk9rN2xYblBJQ1o3YkpVWE8wbEdsUUd4eXUzNTR0Z1BsOWpQcDRhUndFaV84eGtYcDhUWTJkelVIQ2lYeTdmWF9EMXpjY0ozRFFydVBMYkd2dWpnb3U5ZWtjczR6alVoYXVlSkZzQ2pQaDZLUGkzaWFmVzNITnZlNUdRSFNVYTFyZEIyS2FubXFWTTg0M2ZnTzk0S1NKRkdsWGpNZkM?oc=5" },
  { id: "temu_new004", title: "新拼姆要“改革”Temu，走与Shein截然相反的路", content: "Temu新任CEO（原拼多多高管）计划对平台进行改革，强调从“极致低价”转向“品质与效率平衡”，与Shein的快速时尚模式形成差异化。改革可能包括提高商品质量要求、优化物流体验、调整佣金结构。卖家需关注平台政策变化，提升产品品质以适应新方向。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBvUFprSFIySERFM2hYdU9tMlNKSV8xVkZjUlM0OGxxRWo2NzBEeW8yQlhCLWtHUWtyRWFkMl9KVGpkZ2swVWRhcDlPWkc?oc=5" },
  { id: "shein_new005", title: "SHEIN新建英国物流仓库，强化欧洲本地配送能力", content: "SHEIN在英国新建物流仓库，选址靠近主要交通枢纽，旨在提升欧洲订单的配送速度和降低物流成本。该仓库将支持英国及欧洲大陆的订单履约，预计将配送时效缩短至1-3天。卖家需配合平台将商品备货至英国仓，以享受更快的物流时效和更高的转化率。", source: "物流指闻", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMiXkFVX3lxTE0wbFpUM0VuS25BNGxpdjluakZhRGRhLVRBYjdKZWFJT1M1a0ZmMnRFSEc2VV9zV3ZqRzAyN2xZZVlTaFpvZXUybjFIUVJacmRmRUoxU2E2WkdIczdkWWc?oc=5" },
  { id: "temu_new006", title: "Temu新店铺必须办理EPR，合规要求升级", content: "Temu要求新开店铺必须办理生产者责任延伸（EPR）注册，覆盖德国、法国等欧盟国家。未注册EPR的店铺可能面临商品下架或罚款。卖家需根据销售品类和国别完成EPR注册，并按时申报回收费用。建议卖家提前准备，避免影响店铺运营。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMiSEFVX3lxTE9mV09WU2lwa0xKN0F6c3RDdGJoZUJsTmgzY195cWpueW9fa2prSExIRGdKMmtFNGhpWXN5S0hDbWJVMkRWdC1FQw?oc=5" },
  { id: "shein_new007", title: "SHEIN与Temu在英国庭审中互相攻击，供应链问题成焦点", content: "SHEIN和Temu在英国法院的庭审中互相指责对方供应链存在问题，涉及劳工权益、知识产权等。此次庭审可能影响两家平台在英国及欧洲的声誉和监管审查。卖家需确保自身供应链合规，避免卷入平台纠纷，同时关注法律进展对平台政策的影响。", source: "Bloomberg.com", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMirwFBVV95cUxNbHItUXBmTm1lUTNETlNjcm9vLXNJeDNnZm5JcWtJVkdzVkZIWFVOZnFpc2t4WjVRYTVaaEtwZXdNR3ZzcGdVeTFfREtIa0pMbnFlRUtiX3hoR2N0a2E0QkM5MklnRHpCMzJCSC1DNXV2TzJKY3hYQ3I3aWVpUmI3MmhheWw5aEVKblhXWkl3c3Y3YnE2ck9hNHYxWTRqaWw1V091c0FVMWNyTWpBdVl3?oc=5" },
  { id: "shein_new001", title: "SHEIN在英国“黄金物流三角区”自建物流中心，强化欧洲履约能力", content: "SHEIN宣布在英国考文垂附近的“黄金物流三角区”自建物流中心，该区域连接M6、M69和M1高速公路，可快速覆盖全英及欧洲大陆。此举旨在提升本地配送时效，降低对第三方物流的依赖。此前SHEIN已在美国、波兰等地布局海外仓，此次英国建仓将进一步完善其全球供应链网络。对卖家而言，SHEIN自建物流可能意味着更严格的履约要求，如限制自发货功能（美区已实施），卖家需提前备货至SHEIN仓库以获取流量倾斜。", source: "新浪网", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-22"), url: "https://news.google.com/rss/articles/CBMi-AFBVV95cUxOdjFOT2hmMkppSDB3ZjdSU1R2cUN0VnpxZVdlX1ZnOXlUc0tYXzBVem1pVXlHQ2QzRGhoN21HdHlyQVRmQXlPRDZZM1N1WWtUckVlN1NWUmR1SURGMVppYTlqOXNxQmwxdE5yMThxLS1jaVhTZ05remMyZFk4elcwb3JGU1lHNVNjeEVheHU5X1BjaVpHWGhaWVJjZGxQOVhfWUtTYlNoRmtpQ3E2eHFDWmZLR3RjZjE4RkRHeThfRzlSYmVWLXhTN2RiRUZaZ0JwRGdRTE84aU5VbUZOWHY5N0g3Vy04cGs0WjVNV0w2TEhESUNpZnRFNQ?oc=5" },
  { id: "tiktok_new002", title: "TikTok Shop多国佣金上涨，印尼承诺保护中小企业但卖家成本承压", content: "TikTok Shop在多个市场调整佣金政策，其中印尼站佣金上涨引发中小卖家担忧。印尼通信与信息部（Komdigi）承诺将保护中小企业利益，但具体措施未明。此次佣金调整涉及美区、东南亚等市场，部分类目佣金率提升1-3个百分点。卖家需重新核算成本，尤其是低毛利商品可能面临亏损。建议卖家优化产品组合，转向高附加值品类，并利用TikTok内容营销提升转化率以对冲成本上升。", source: "VOI.id", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-22"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTE81NUx0cDVjYlNuSVJldk1WX1hxNGtnMC1fMU9xLU81eXNiTXNVYmh6Ry15SE94VlBRLVVjYk1KMm1OcXBFdzItbGJvQ0NSM2_SAUJBVV95cUxONVZfVWdwTFQxTjBYdURmM0N5QUhVYXJraG1MZFk5NkFKQ3ZRZjYtUmcwOURxTU9qOEItdGsyVTR6SEE?oc=5" },
  { id: "aliexpress_new003", title: "速卖通品牌化与AI提效双线并进，阿里国际接近盈利", content: "阿里国际数字商业集团财报显示，速卖通通过品牌化转型和AI技术应用推动业务增长，接近实现盈利。速卖通引入更多品牌商家，提升客单价，同时利用AI优化搜索推荐、智能客服和物流预测，降低运营成本。此外，速卖通在欧盟合规方面加码，明确2026年三大增长极：品牌化、本地化、AI驱动。对卖家而言，品牌化趋势要求提升产品质量和品牌建设能力，AI工具可帮助提升运营效率，但需投入更多资源适应平台变化。", source: "新浪财经", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-05-22"), url: "https://news.google.com/rss/articles/CBMif0FVX3lxTE9BV3J1ZTc5eElkNTBzeHZha0l0X1ZRUldEaXIwa0F5dXZFY2ZhWHRqcUgxYUZyTmNiMjRjM243MVZhTC1tbEwyMU9XNHgwVWZ4LTJFMGlZRjhPc21VcDFNYWFNWXV4RFFkaWMzYXVpUnRBbTRxVURsdXFJRng5ZFU?oc=5" },
  { id: "shein_new004", title: "SHEIN限制美区商家自发货功能，加强物流管控", content: "SHEIN宣布自2025年4月中上旬起，限制美国市场商家的自发货功能，要求卖家使用SHEIN的物流服务或提前备货至其海外仓。此举旨在提升履约时效和用户体验，减少因自发货导致的延迟和纠纷。卖家若未及时切换物流模式，可能面临订单取消、罚款或流量降权。建议美区卖家尽快对接SHEIN物流或入驻其海外仓，同时优化库存管理以应对更严格的履约要求。", source: "新浪财经", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-22"), url: "https://news.google.com/rss/articles/CBMiiAJBVV95cUxPN01naFlDVGU1M1JxS2lTY3ZMM2EzWHI5RXYwQlA3cUE1ajh5LTlpeGt3TGlqcEMySmVMNkowVUY3N1c3SFBrZEJqRWFxSFJsbVZYalg4VDF6cmdVYlUzWjB1a3U0QUo4TTVWSk9rN2xYblBJQ1o3YkpVWE8wbEdsUUd4eXUzNTR0Z1BsOWpQcDRhUndFaV84eGtYcDhUWTJkelVIQ2lYeTdmWF9EMXpjY0ozRFFydVBMYkd2dWpnb3U5ZWtjczR6alVoYXVlSkZzQ2pQaDZLUGkzaWFmVzNITnZlNUdRSFNVYTFyZEIyS2FubXFWTTg0M2ZnTzk0S1NKRkdsWGpNZkM?oc=5" },
  { id: "shein_new005", title: "SHEIN湾区智慧产业园交付，预计年内投入使用", content: "SHEIN在广东肇庆的湾区智慧产业园正式交付，预计年内投入使用。该产业园将整合供应链管理、仓储物流、产品研发等功能，提升SHEIN的供应链效率和响应速度。此举有助于SHEIN进一步缩短交货周期，降低物流成本。对卖家而言，产业园的启用可能意味着更高效的备货和退货处理，但同时也要求卖家更紧密地配合SHEIN的供应链节奏。", source: "新浪财经", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-22"), url: "https://news.google.com/rss/articles/CBMilwJBVV95cUxPQmJoeTN3VjU5aEpreTdFQk9ZSWVmSGNybUQwVGlpVV9yVS1NX1BueVlPZzB6SlJaWmNENzRiYl9nWFN0dHVqSkswUVJKWHptQlJlMmNwWXNUeDlVXzhJY3NxWXhzdjI4LTBpTnVFNmZzdHJkOXZtSGZzNWc1dVFOUjh5dnlQT2tSa1Nyd0tTY2JZQWJnN2RFM1hCYWgxMlR6dldiR01OUUhRUkRLVEMtTFhNcnlhSEJrZmtEZDRSVDF6cXY2d2lSTzdLMURXWEt5NnNyUXBlMUF2dE9feFJBdS1yX294N2Q5TXQ5blZVSGJCQUdxUTFyaDVOQmh2MGgxSEh1X1FGUHVvNHAxcS1MM2NtYmlhMUk?oc=5" },
  { id: "tiktok_new006", title: "TikTok Shop多国年中大促提前加码，内容种草+达人转化成关键", content: "TikTok Shop宣布2025年年中大促（6月）将在美国、欧洲等多国提前启动，推出多重营销玩法升级，包括直播间红包、达人专属折扣、品牌挑战赛等。平台强调“内容种草+达人转化”模式，鼓励卖家与达人合作创作短视频和直播内容。对卖家而言，大促期间需提前布局达人合作，储备优质内容素材，并优化广告投放策略。建议卖家关注TikTok Shop的运费政策变化（如6月起运费全包），合理规划促销预算。", source: "中华网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-22"), url: "https://news.google.com/rss/articles/CBMibEFVX3lxTE04bFlQY3BZRGRxMVBQdkwxT2tEcDNnYWR1Uk03alI1dUpqdDVfVlNDVHM5UzZGamxSWnZsbEVlWVpNX0l3UnRHR0NVOEZfb3dJMnFpM2o4Y1dBcWdMTzdCOHA2V1d0X0dMbi11Ug?oc=5" },
  { id: "tiktok_new007", title: "TikTok达人带货成本三年飙升：从免费种草到坑位费翻倍", content: "TikTok达人带货生态在过去三年发生巨变，早期免费寄样即可获得种草内容，如今头部达人坑位费翻倍，中小达人收费也普遍上涨。商家获取达人合作的成本显著增加，ROI面临挑战。平台算法调整使得内容曝光不稳定，达人合作效果难以保证。建议卖家建立达人矩阵，与中腰部达人长期合作，同时加强自有内容创作能力，降低对单一达人的依赖。", source: "新浪财经", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-22"), url: "https://news.google.com/rss/articles/CBMif0FVX3lxTE1TeTFzeTN5OHFtU0NWYzNaaktydTktRG1fRGlOSzJLLWdac0hmdUlwVThZaVNhbDFBUGNxWnprdm1iaDRTdHYtU2JZT21OSmlyOFhHREZRMDRFVmluWDlvWWZ2dnZyRFc4VUo2WEd1djNRRnc2YkdiMWJzeHhkenc?oc=5" },
  { id: "aliexpress_new008", title: "全球电商流量前三：AliExpress、Temu占两席，合围亚马逊", content: "根据最新报告，全球电商网站流量排名中，AliExpress和Temu分别位列第二和第三，仅次于亚马逊。这一格局显示中国跨境电商平台在全球市场的崛起。AliExpress凭借品牌化和AI提效巩固地位，Temu则通过低价和社交裂变快速扩张。对卖家而言，两大平台流量红利明显，但需注意平台规则差异：AliExpress偏向品牌卖家，Temu更注重性价比。建议卖家根据自身产品定位选择主攻平台。", source: "雷峰网", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-05-22"), url: "https://news.google.com/rss/articles/CBMid0FVX3lxTE85RGM0NklxazJTMGpVZjlYOXBJMEUwTTdJdlk4S05oMDdselV1bWs0bXFOa3NXeVZBSHJSLUdJOWVsbjVheE9YeldfV3NmOHhEeDNqb1IzaVc2dHdIUXFxdjM0LXFYQlNQN3hTc19WN2pfU1hpMUlJ?oc=5" },
  { id: "temu_new009", title: "Temu新店铺需办理EPR，合规门槛再提高", content: "Temu要求新开店铺必须完成生产者责任延伸（EPR）注册，涉及包装、电子设备、电池等品类。未注册EPR的店铺可能无法上架产品，或面临平台处罚。EPR费用因品类和国家而异，德国、法国等市场要求尤为严格。卖家需提前准备相关资质文件，并考虑将EPR成本计入定价。建议卖家使用专业合规服务商，确保注册及时准确。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-22"), url: "https://news.google.com/rss/articles/CBMiSEFVX3lxTE9mV09WU2lwa0xKN0F6c3RDdGJoZUJsTmgzY195cWpueW9fa2prSExIRGdKMmtFNGhpWXN5S0hDbWJVMkRWdC1FQw?oc=5" },
  { id: "joybuy_new010", title: "京东物流与万事达卡战略合作，拓展全球支付与跨境贸易", content: "京东物流与万事达卡宣布战略合作，旨在通过支付创新支持跨境贸易增长。合作将整合京东物流的供应链能力和万事达卡的支付网络，为跨境卖家提供更便捷的支付和物流解决方案。此举有助于京东物流拓展海外市场，尤其在欧洲和美国的布局。对卖家而言，可能获得更低的支付手续费和更高效的物流服务，但需关注合作具体落地时间和适用范围。", source: "Retail Asia", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-05-22"), url: "https://news.google.com/rss/articles/CBMivAFBVV95cUxNNzNuSDN1YW9OV0tOOFdudTBvV1E4b3hKZlFwOWdRZW9IRlE5cFllMjFjMUlFVTFTNTVvRzBGTlZKdGd1QnJUMEYzWE1RM1d3Y0R6NnNsYUkzc1ZlQ2kxY0hhQy13VkU1emd2OXAwYW1xbC1FRWs3SXB4WDBfOTdfVi1Za2ZGcy1MUzNpaWN3Zk5rZWJtQVJ6VGh4UEI2eXUwdTBkOXV4ci00YjdiZWkxbXZyQVdKc3hsUTFkNQ?oc=5" },
  { id: "joybuy_new011", title: "京东物流首季非国际财务报告准则利润增40%，物流能力持续增强", content: "京东物流公布2025年第一季度业绩，非国际财务报告准则利润同比增长40%至10.5亿元人民币。增长得益于外部客户收入增加和运营效率提升。京东物流持续投入海外仓和干线网络，强化跨境物流能力。对卖家而言，京东物流的稳定服务和高时效性有助于提升海外客户满意度，但需注意其定价相对较高，适合高客单价或对时效要求高的商品。", source: "AASTOCKS.com", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-05-22"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxPQ3l3R05ORXUxWWlKQlVXN2dBQWZVdGRNU2JyY0pJZ2dadmtSNERma3c1Nm11TXZnNmxlV2RDQ2xXaFh0dWgxOE8wcDdGdEYta05ReHBCQzJTc1FTWnFLRlRKTWRjekszZk1ETjQxdk95Unh5SFU1eWdadG5SeThYRVBucm0?oc=5" },
  { id: "temu_new012", title: "Temu Y2欧洲专线小包物流上线，支持纯电池产品", content: "Temu推出Y2欧洲专线小包物流服务，支持纯电池产品运输。该专线覆盖欧洲主要国家，提供门到门配送，时效约8-12个工作日。Y2模式允许卖家从国内直发，无需海外仓备货，降低库存压力。纯电池产品通常物流受限，此专线为相关卖家提供了新渠道。建议卖家注意电池产品合规要求，如UN38.3认证，并合理规划发货节奏。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-22"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE5ZUkt1VnBIY08yTEVrbTNVbDBnVEtlRUVoUlBKeWtzY3lJdHd3Q19JdC1vbTRpWktvM1BJMDFXUGZsdE9qMVI1d3d2aGV6el9X?oc=5" },
  { id: "temu_new013", title: "Temu美国专线物流支持普货及带电带磁产品", content: "Temu推出美国专线物流服务，支持普货、带电及带磁产品运输。该专线提供稳定的头程和末端配送，时效约7-12个工作日。带电带磁产品通常需要特殊物流渠道，此服务为相关品类卖家提供了合规且经济的运输方案。卖家需确保产品符合美国消费品安全委员会（CPSC）等机构要求，并准备MSDS等文件。建议卖家对比不同物流渠道的成本和时效，选择最优方案。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-22"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTFBpX3RxYWVaQlE3THRydEpSVi1KeGRFVm1EZU4wWkh6OHVFaFJZSWJnMmlybGQ2UjJ5MXZTRG52QmZLcEhVQ1M5VERCdEQ5TTkt?oc=5" },
  { id: "temu_new014", title: "Temu海外仓头程欧洲空派DPD专线，支持液体化妆品", content: "Temu推出海外仓头程欧洲空派DPD专线，支持普货、液体及化妆品运输。该服务利用DPD的欧洲配送网络，提供快速清关和末端派送，时效约5-8个工作日。液体化妆品属于敏感品类，此专线为卖家提供了合规物流选项。卖家需确保产品符合欧盟化妆品法规（如CPNP注册），并注意包装要求。建议卖家提前备货至Temu海外仓，以享受更快的配送时效和流量扶持。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-22"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE1JUzFFOEJqcVROUHhpaUtXNlR1RUxKeVhsTmVMWUpQbGZoYVRZM0dfQ1lBZXc3VHZMMU92SDR6TVpKcTMtSXBOcW1SMkFZZ0s5?oc=5" },
  { id: "tiktok_new015", title: "TikTok Shop 6月起运费全包给卖家？两个月三连涨引关注", content: "TikTok Shop被曝计划从2025年6月起调整运费政策，可能将运费成本转嫁给卖家，即卖家需承担全部或部分运费。此前两个月内，TikTok Shop已连续三次调整费用政策，包括佣金上涨和广告费用增加。此次运费调整将进一步压缩卖家利润空间。建议卖家提前优化物流成本，如选择与TikTok合作的物流商获取折扣，或提高商品售价以覆盖新增成本。同时关注平台官方公告，及时调整运营策略。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-22"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9vbWJxMEptcHFmR3Q1RUdXRFBhaDRQRFhUeElOVjA2dWVpMnEzMHdOY1FzaGkwZ1FiRnIzYkJGQThwRTdWcW9NQU9RTkQ?oc=5" },
  { id: "aliexpress_new016", title: "速卖通从价格战转向品牌战，跨境电商转型信号明确", content: "速卖通财报显示其正从价格驱动转向品牌驱动，通过引入品牌商家、提升客单价和优化用户体验实现增长。平台减少对低价商品的依赖，转而扶持品质和品牌卖家。这一转型信号表明跨境电商竞争进入新阶段，卖家需提升产品差异化和品牌建设能力。建议卖家注册品牌商标、优化产品详情页、参与平台品牌活动，并利用AI工具提升运营效率。同时注意欧盟合规要求，如CE认证、EPR等。", source: "qq.com", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-05-22"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE41Rng1US1pOFF5ekJPU3VIbFZlcGdZNzNKX0J5ZnZkY3ptUWt5MjdZNW9kcnJmR1YyMG0yMVFUWXA1SU5PUUpadjR3WmJUaUVhTXplcENR?oc=5" },
  { id: "aliexpress_new001", title: "阿里国际接近盈利，速卖通品牌化与AI提效双线并进", content: "阿里国际数字商业集团接近盈利，旗下速卖通通过品牌化转型和AI技术提效实现增长。品牌化方面，速卖通引入更多品牌商家，提升客单价；AI方面，利用智能客服、选品推荐等工具优化运营效率。该策略旨在与Temu、SHEIN等竞对形成差异化，吸引中高端消费者。对卖家而言，需关注品牌化趋势，提升产品品质和品牌建设能力，同时利用AI工具降低运营成本。", source: "新浪财经", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-05-16"), url: "https://news.google.com/rss/articles/CBMif0FVX3lxTE9BV3J1ZTc5eElkNTBzeHZha0l0X1ZRUldEaXIwa0F5dXZFY2ZhWHRqcUgxYUZyTmNiMjRjM243MVZhTC1tbEwyMU9XNHgwVWZ4LTJFMGlZRjhPc21VcDFNYWFNWXV4RFFkaWMzYXVpUnRBbTRxVURsdXFJRng5ZFU?oc=5" },
  { id: "temu_new002", title: "Temu跻身全球访问量第二大电商网站，仅次于亚马逊", content: "根据Similarweb数据，Temu已成为全球访问量第二大的电商网站，仅次于亚马逊主站。这一排名反映了Temu在欧美市场的快速扩张，其低价策略和社交裂变模式吸引了大量用户。对卖家而言，Temu的流量红利仍在，但需注意平台对价格和履约的要求日益严格。", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-16"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE4ycXQ3ZjNnWlFuTWQ2Y3VDT0Z2MHdWZzVXTW0wM3hCeUlmc2Q1YnhVMFRyVk9malFRdzI2Q1Zwa3dxdm9Nc0tROWY0ZTQtdkFXbUtTY1Bn?oc=5" },
  { id: "shein_new003", title: "SHEIN湾区智慧产业园正式交付，预计年内进驻使用", content: "SHEIN在广东肇庆的湾区智慧产业园已正式交付，预计2025年内投入使用。该产业园将作为SHEIN的供应链枢纽，整合仓储、物流和加工功能，提升订单处理效率。此举有助于SHEIN缩短履约时效，降低物流成本。对卖家而言，产业园的启用可能带来更快的配送速度和更低的物流费用，但需关注平台对入仓商品的要求。", source: "新浪财经", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-16"), url: "https://news.google.com/rss/articles/CBMilwJBVV95cUxPQmJoeTN3VjU5aEpreTdFQk9ZSWVmSGNybUQwVGlpVV9yVS1NX1BueVlPZzB6SlJaWmNENzRiYl9nWFN0dHVqSkswUVJKWHptQlJlMmNwWXNUeDlVXzhJY3NxWXhzdjI4LTBpTnVFNmZzdHJkOXZtSGZzNWc1dVFOUjh5dnlQT2tSa1Nyd0tTY2JZQWJnN2RFM1hCYWgxMlR6dldiR01OUUhRUkRLVEMtTFhNcnlhSEJrZmtEZDRSVDF6cXY2d2lSTzdLMURXWEt5NnNyUXBlMUF2dE9feFJBdS1yX294N2Q5TXQ5blZVSGJCQUdxUTFyaDVOQmh2MGgxSEh1X1FGUHVvNHAxcS1MM2NtYmlhMUk?oc=5" },
  { id: "tiktok_new004", title: "TikTok达人带货三年变天：从免费种草到坑位费翻倍", content: "TikTok达人带货生态发生显著变化，早期免费种草模式已转向高坑位费合作，部分头部达人坑位费翻倍。同时，商家对达人ROI要求更高，机构介入增多。对卖家而言，需精细化筛选达人，注重内容质量和转化数据，避免盲目投放。建议建立达人矩阵，平衡头部和腰部达人合作。", source: "新浪财经", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-16"), url: "https://news.google.com/rss/articles/CBMif0FVX3lxTE1TeTFzeTN5OHFtU0NWYzNaaktydTktRG1fRGlOSzJLLWdac0hmdUlwVThZaVNhbDFBUGNxWnprdm1iaDRTdHYtU2JZT21OSmlyOFhHREZRMDRFVmluWDlvWWZ2dnZyRFc4VUo2WEd1djNRRnc2YkdiMWJzeHhkenc?oc=5" },
  { id: "aliexpress_new005", title: "出海四小龙合围亚马逊，全球电商流量前三AliExpress、Temu占两席", content: "根据Similarweb数据，全球电商流量排名中，AliExpress和Temu分别位列第二和第三，仅次于亚马逊。加上SHEIN和TikTok Shop，中国出海电商平台形成“四小龙”格局，对亚马逊构成合围。对卖家而言，多平台布局成为趋势，需根据各平台特点制定差异化策略。", source: "雷峰网", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-05-16"), url: "https://news.google.com/rss/articles/CBMid0FVX3lxTE85RGM0NklxazJTMGpVZjlYOXBJMEUwTTdJdlk4S05oMDdselV1bWs0bXFOa3NXeVZBSHJSLUdJOWVsbjVheE9YeldfV3NmOHhEeDNqb1IzaVc2dHdIUXFxdjM0LXFYQlNQN3hTc19WN2pfU1hpMUlJ?oc=5" },
  { id: "aliexpress_new006", title: "从价格战到品牌战：速卖通财报背后的跨境电商转型信号", content: "速卖通最新财报显示，其正在从价格战转向品牌战，通过引入品牌商家和提升服务质量实现增长。这一转型信号表明，跨境电商竞争已从低价竞争转向品牌和用户体验竞争。对卖家而言，需提升品牌意识和产品差异化，避免陷入纯价格竞争。", source: "xw.qq.com", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-05-16"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE41Rng1US1pOFF5ekJPU3VIbFZlcGdZNzNKX0J5ZnZkY3ptUWt5MjdZNW9kcnJmR1YyMG0yMVFUWXA1SU5PUUpadjR3WmJUaUVhTXplcENR?oc=5" },
  { id: "shein_new007", title: "SHEIN vs TEMU欧洲再开战：合规才是底牌", content: "SHEIN和Temu在欧洲市场的竞争加剧，双方在合规方面展开较量。SHEIN面临欧盟数据保护调查，Temu则需应对EPR等环保法规。合规成为平台和卖家在欧洲运营的关键。对卖家而言，需确保产品符合欧盟CE、WEEE、EPR等要求，否则可能面临下架或罚款。", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-16"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE56cjhwQlJHXzcyc0staktyQ0cxYV9LNDdDQzh4eFBiQ25vekVYN3N5ZGtSVzEyQ0o3TUlESVlTSmdrUk84NUgzVHJSanY?oc=5" },
  { id: "tiktok_new008", title: "ShoeZone在TikTok Shop上线，全渠道零售商拥抱社交优先", content: "英国鞋类零售商ShoeZone在TikTok Shop上线，作为其全渠道战略的一部分，强调社交优先的购物体验。此举表明传统零售商正加速布局社交电商。对卖家而言，TikTok Shop的品类和商家生态正在扩大，竞争加剧，需注重内容创新和用户互动。", source: "Retail Technology Innovation Hub", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-16"), url: "https://news.google.com/rss/articles/CBMi5AFBVV95cUxNallUUTVvU1dHaTB4ejhua1ZmWDQtaHlJU2dYX05Kam1UZk9yZzBaY01DQ2hJNWMtWktLQmlXWWxQOElNT1lRWl9jeUdzc0dwY0dDVE8xS0dmQVplRTRZNzgyaUh3UTZDVHpzQVM0Q2Fmam0yZGxZWEhkbjB0a2ZHMmFBZHhMY3NHQmN6VHRQVjhiNVZHV1ZucU1XZ25MRkgxRnp2MzV6eVAwX2VzS0FOSUtPX2xyRDFiVW9fN2dkV1JsQi1ob1ZndXg2dWZNcm8yc0lseWNCQUJ5UkNqWUI0ZUY5NjU?oc=5" },
  { id: "tiktok_new009", title: "TikTok Shop各国年中大促定档6月，多重玩法升级", content: "TikTok Shop宣布2025年各国年中大促定档6月，推出直播挑战赛、达人带货榜、满减优惠等多种玩法。平台将提供流量和补贴支持，鼓励商家参与。对卖家而言，需提前备货和策划内容，利用大促提升销量和品牌曝光。建议关注各站点具体规则和报名时间。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-16"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9BbEtPdnRUbUZiWVNsd2N5aTFZMm9seXBkQWxYbUJKR1ROWnQtZmlEcUhxRk12QXg3OVRYNHFranVzUnhsc1lxVkUtMVAwNTh3UzEzQk1B?oc=5" },
  { id: "joybuy_new010", title: "京东与万事达卡战略合作，拓展全球支付和跨境贸易", content: "京东与万事达卡宣布战略合作，旨在通过支付创新支持业务增长，拓展全球电商和跨境贸易。合作将覆盖支付解决方案、跨境结算等领域。对卖家而言，京东国际业务的支付和物流能力有望提升，为出海提供更多支持。", source: "Plataforma Media", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-05-16"), url: "https://news.google.com/rss/articles/CBMi6gFBVV95cUxQRHN6YUllV3daeE96MHhvd0hJOEJHQ3FueGdfRHhSWXdBRmVWLU1PaXRaY2xKY0xoTFlaYXhRSmI0NXptM2Z4Y1FuRDRRakFINEw3dXRoQ29iZ2JtNFU2YnZuaVlYbFhwVURXdVVuaV8wVVBiVFZKc1otd0U0aHFJaXNOZ0RqcUZoQXZyRW81bVFEWUthVmZRMjM2bzAwY0ZHVWgzdE5LZWdxWU1fSU5wRG5lR2JjWU1sZ21tSy1HUFkwVk5vZ3lHeE5Ta1JST2JWNWY0RUc1Z2I3VS1JQjRVZFBTdG9LX0pwVlE?oc=5" },
  { id: "aliexpress_new011", title: "阿里出海，不再隐身的速卖通", content: "速卖通在阿里国际业务中地位提升，从幕后走向前台，加大品牌推广和商家扶持力度。平台通过优化物流、提升服务质量和引入品牌商家，试图改变低价形象。对卖家而言，速卖通正成为阿里出海的核心平台，需关注其品牌化趋势和流量分配变化。", source: "维科号", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-05-16"), url: "https://news.google.com/rss/articles/CBMiV0FVX3lxTFA4R29lQ2NtQUJXUWdtZC1RRmw1VURnMElvWXRhMzRyT182ZUd6NFRJc0ZoUHlWUktZSDNzay1pQWtrb19qeDBpaW00Q1JiQlNJN0NKeGdZaw?oc=5" },
  { id: "aliexpress_new012", title: "欧盟合规加码，速卖通指明2026三大全新增长极", content: "速卖通在欧盟合规压力下，提出2026年三大增长极：品牌化、本地化和AI驱动。平台将加强合规管理，同时通过本地化运营和AI技术提升竞争力。对卖家而言，需提前适应欧盟法规，如GPSR、EPR等，并关注速卖通在合规方面的支持政策。", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-05-16"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFB0MVlIRzFkRWpKVm5LSFNHMmtMM1RzZGRYMDY5VVRDMVpHY1ZmLXVJSFd2N0lSSE40NzhzYVlLeV9IelkxaGFSa3p1SGM?oc=5" },
  { id: "tiktok_new013", title: "TikTok Shop年中大促集结多重营销热点，引爆全球市场", content: "TikTok Shop年中大促整合多种营销热点，包括节日促销、达人合作和直播挑战赛，旨在引爆全球市场。平台提供流量和补贴支持，鼓励商家参与。对卖家而言，需提前准备内容和库存，利用大促提升销量和品牌曝光。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-16"), url: "https://news.google.com/rss/articles/CBMiRkFVX3lxTE82RHNNQU1WTWVta25yOVlFYzJ1LTNCMExQd2huUm9oM3NBdDNlbzlXSXdsRmptTklkM3pOdXZqeFVqYVlfdlE?oc=5" },
  { id: "tiktok_new014", title: "TikTok在美国上线本地生活服务，亚马逊推30分钟极速配送", content: "TikTok在美国上线本地生活服务，涵盖餐饮、娱乐等品类，与亚马逊的30分钟极速配送形成竞争。此举显示TikTok正从电商向本地生活拓展，而亚马逊则强化物流时效。对卖家而言，需关注TikTok本地生活服务的流量机会，同时亚马逊的极速配送可能提升消费者预期。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-16"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBTdlhWRjR0Z19pMklha0V2VW1zYURGcnFGSTVFOVozb0tOLVRoWWswODBLUHFYcngxYnl2QmdCSm9JbWtaSVhBZmtaVkx1ZWEyWW1GUndR?oc=5" },
  { id: "shein_new015", title: "SHEIN新建英国物流仓库，加强欧洲本地履约能力", content: "SHEIN在英国新建物流仓库，以提升欧洲市场的本地履约能力，缩短配送时效。此举有助于SHEIN应对欧盟合规要求和消费者对配送速度的期待。对卖家而言，SHEIN的本地仓储可能带来更快的退货处理和更低的物流成本。", source: "物流指闻", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-16"), url: "https://news.google.com/rss/articles/CBMiXkFVX3lxTE0wbFpUM0VuS25BNGxpdjluakZhRGRhLVRBYjdKZWFJT1M1a0ZmMnRFSEc2VV9zV3ZqRzAyN2xZZVlTaFpvZXUybjFIUVJacmRmRUoxU2E2WkdIczdkWWc?oc=5" },
  { id: "shein_new016", title: "SHEIN和Temu在英国供应链诉讼中交锋", content: "SHEIN和Temu在英国法院就供应链问题展开诉讼，涉及知识产权和商业机密。此案凸显两家平台在供应链合规方面的竞争。对卖家而言，需确保供应链合法合规，避免卷入法律纠纷，同时关注诉讼结果对平台政策的影响。", source: "Supply Chain Brain", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-16"), url: "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOYUo0TlpOM0RUOXNVbXMxLTNnYjBIUnZZUVpWSEdobGFEVVpldlh5QWdNMTRWdDdNd3JqSlYzVHVxN3MyRDl5RGtRN3hpYXlIRnhFSk02Mm9aUkVBMG1uTmwxMWtabm9XZE1QeUl1VEtQdnhhQlFaRFBrOUtRNkdzWThtaGdzLVQyOTZ5WlVOanV4MU1WakgzNXphUUlyYk9xRW5DMWhBVUJEVXM?oc=5" },
  { id: "temu_new001", title: "Temu跻身全球访问量第二大电商网站，仅次于亚马逊主站", content: "根据最新数据，Temu已成为全球访问量第二大的电商网站，仅次于亚马逊主站。这一排名反映了Temu在欧美市场的快速增长和用户粘性。Temu通过低价策略和社交裂变迅速获取流量，对亚马逊构成直接竞争。对于跨境卖家而言，Temu的流量红利意味着新的销售渠道机会，但同时也面临价格战和合规压力。建议卖家关注Temu的Y2半托管模式，利用其低成本履约优势拓展市场。", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE4ycXQ3ZjNnWlFuTWQ2Y3VDT0Z2MHdWZzVXTW0wM3hCeUlmc2Q1YnhVMFRyVk9malFRdzI2Q1Zwa3dxdm9Nc0tROWY0ZTQtdkFXbUtTY1Bn?oc=5" },
  { id: "shein_new003", title: "SHEIN与Temu欧洲再开战，合规成为竞争底牌", content: "SHEIN和Temu在欧洲市场的竞争加剧，双方均面临欧盟合规新政的压力。SHEIN被调查向中国传输欧盟个人数据问题，而Temu需办理EPR等环保合规。合规成为平台和卖家的关键底牌。建议卖家提前完成EPR注册、数据保护合规，并关注欧盟数字服务法（DSA）要求。合规能力将决定卖家在欧洲市场的长期竞争力。", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9ZaDdMWmZZMWctc1licGFKQ0RDY3ZQX0xTdVVXcTBPVEgtOHNyM3dELUNNdVR3Y2VKYjg5QnEtcmx5UXVLNXBlSXUtd1pWblk?oc=5" },
  { id: "tiktok_new004", title: "TikTok Shop美区调整退货规则，卖家需关注成本变化", content: "TikTok Shop美国区调整退货规则，可能增加卖家退货处理成本。具体调整包括退货窗口缩短或运费承担变化。同时，TikTok Shop运费政策在两个月内三连涨，6月起可能将运费全包给卖家。建议卖家优化退货流程，提高产品质量，并评估运费上涨对利润的影响。可考虑使用海外仓降低退货率。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBkRFB5VU03cjNmTTZHdzN4d25sbmpXZl9RR0hxRVE2WWt6UkVTNFg3Y05MNmx4VmFDVnEtUkRaZXo2NHpoNXFCci1XWmducENIMVJ5eWd3?oc=5" },
  { id: "aliexpress_new005", title: "速卖通升级POP权益帮助商家平稳过渡欧盟合规新政", content: "速卖通升级POP（第三方卖家）权益，以帮助商家应对欧盟合规新政，包括GPSR（通用产品安全法规）和EPR要求。平台提供合规指导、流量倾斜和费用减免。建议卖家尽快完成产品合规认证，利用速卖通的POP权益降低合规成本。合规将成为在欧洲市场长期经营的基础。", source: "亿邦动力网", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9sX0VITUFHZ1NZME1neUhDUEE4VTRiWmFHd0Q5b3E0cHN4b3ZlcWdMblZ5Yk1KTzBINzRLd2MwSS1iWmt2OWs3d2FqbUtEX2xXVHZTZ244Qjg?oc=5" },
  { id: "temu_new006", title: "Temu新店铺必须办理EPR，合规要求进一步收紧", content: "Temu要求新开店铺必须办理EPR（生产者延伸责任）注册，涉及包装、电子设备等品类。该政策适用于欧洲市场，卖家需在德国、法国等国家注册。未合规可能导致产品下架或罚款。建议卖家在开店前完成EPR注册，并关注Temu的合规指引。合规成本虽增加，但也是长期经营的保障。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMiSEFVX3lxTE9mV09WU2lwa0xKN0F6c3RDdGJoZUJsTmgzY195cWpueW9fa2prSExIRGdKMmtFNGhpWXN5S0hDbWJVMkRWdC1FQw?oc=5" },
  { id: "tiktok_new007", title: "TikTok Shop推出产品放大计划，助力卖家提升曝光", content: "TikTok Shop推出Product Amplification Program，帮助卖家通过付费推广和内容合作提升产品曝光。该计划可能涉及广告费用调整和流量分配机制。对于美国市场卖家，建议利用该计划测试新品，同时关注广告投资回报率。TikTok Shop的社交电商属性要求卖家注重内容质量。", source: "MediaPost", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-02-09"), url: "https://news.google.com/rss/articles/CBMirgFBVV95cUxOMW8wcWNmd1BNM19UMm1pZUttUk0wRS1lNXZHRWk2MGR4bmRLWnZCc2loU3dqWGNXVEllUXlBYk9nU3FqVHR3azRrOFVwUWFuTTJSUnl6aUQzVEI3ZFRFaDE3ZjRfVHB6cUlKQ1UwTm05Z0xYbmZ2enU0TjN3dGdYcVBzNEstNVQ0anZlSUo0MEZOUUstRHQ3bEJraEdCT1lrcWliYW9EbXZWOFYzMVE?oc=5" },
  { id: "tiktok_new008", title: "TikTok在美国上线本地生活服务，Booking.com和Expedia首批入驻", content: "TikTok在美国推出本地生活服务TikTok GO，首批入驻包括Booking.com和Expedia。该服务可能为卖家带来本地化营销机会，但主要影响旅游和本地服务类商家。对于电商卖家，可关注TikTok GO是否与电商业务联动，例如通过本地生活内容引流至TikTok Shop。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1QMkQ1T0pRbmtiSGRMZVZXdlp4cnBQbXpvWGs2QkEyMmtsWmYyUC10MVFycFVLaXpZdzY0NDFrS3Y0aUNqRTZuR2FWdTFZWWFHTFBHeWV3?oc=5" },
  { id: "joybuy_new009", title: "京东与万事达卡合作拓展全球支付和跨境贸易", content: "京东与万事达卡宣布战略合作，旨在通过支付创新支持全球商业增长，包括跨境贸易。合作可能涉及京东物流的海外支付解决方案。对于跨境卖家，京东的物流和支付能力可能提供新的履约和收款渠道。建议卖家关注京东的海外仓和物流服务，尤其是在欧洲和美国的布局。", source: "Retail Asia", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMivAFBVV95cUxNNzNuSDN1YW9OV0tOOFdudTBvV1E4b3hKZlFwOWdRZW9IRlE5cFllMjFjMUlFVTFTNTVvRzBGTlZKdGd1QnJUMEYzWE1RM1d3Y0R6NnNsYUkzc1ZlQ2kxY0hhQy13VkU1emd2OXAwYW1xbC1FRWs3SXB4WDBfOTdfVi1Za2ZGcy1MUzNpaWN3Zk5rZWJtQVJ6VGh4UEI2eXUwdTBkOXV4ci00YjdiZWkxbXZyQVdKc3hsUTFkNQ?oc=5" },
  { id: "shein_new010", title: "SHEIN与Temu在英国庭审中互相指责供应链问题", content: "SHEIN和Temu在英国庭审中互相指责供应链违规，涉及劳工标准和数据保护。该事件凸显了跨境电商在欧美面临的合规风险。对于卖家，需确保供应链透明，避免卷入法律纠纷。建议卖家选择合规的供应商，并关注英国和欧盟的供应链尽职调查法规。", source: "Bloomberg.com", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMirwFBVV95cUxNbHItUXBmTm1lUTNETlNjcm9vLXNJeDNnZm5JcWtJVkdzVkZIWFVOZnFpc2t4WjVRYTVaaEtwZXdNR3ZzcGdVeTFfREtIa0pMbnFlRUtiX3hoR2N0a2E0QkM5MklnRHpCMzJCSC1DNXV2TzJKY3hYQ3I3aWVpUmI3MmhheWw5aEVKblhXWkl3c3Y3YnE2ck9hNHYxWTRqaWw1V091c0FVMWNyTWpBdVl3?oc=5" },
  { id: "temu_new011", title: "Temu Y2专线物流如何节省成本，卖家需关注物流策略", content: "Temu推出Y2专线物流，帮助卖家降低物流成本。该模式通过集中发货和优化路线，实现成本节约。建议卖家利用Y2专线物流，尤其是对于小件商品。同时需注意物流时效和跟踪服务，以提升客户满意度。Temu的物流策略变化可能影响卖家的定价和库存管理。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE83UlljaXR2Z1BOY1E3YTFkenQ5czA5X3RaeXN4VkkzVWF5NWQ1cnBLTmw4UnhzOXRmbGJsRDJWR0xqSHhpekxhcW8ydGgzcU5K?oc=5" },
  { id: "temu_new012", title: "Temu模式剧变、合规收紧，卖家面临新机遇与挑战", content: "2026年5月，Temu经历模式剧变，包括Y2半托管模式推广和合规要求收紧。卖家需适应新的履约模式和EPR等合规要求。机遇在于Temu的流量增长和低成本履约，挑战在于价格竞争和合规成本。建议卖家关注Temu的实时政策变化，灵活调整策略。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBuRWFUbjRzTlVDRldZWHpYcENWNjlMRDVVS2NsdVJ0VGJSeWwxWkdsaVVJWnBJNERuenBSa3VvaXRzaXJXeDE3dDNMamo?oc=5" },
  { id: "tiktok_new013", title: "TikTok Shop多国年中大促提前加码，内容种草+达人转化是关键", content: "TikTok Shop在多个国家提前启动年中大促，重点推动内容种草和达人转化。大促玩法升级，包括直播、短视频挑战赛等。对于美国市场卖家，建议提前布局达人合作和内容创作，利用大促流量提升销量。同时需注意大促期间的物流和客服准备。", source: "中华网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMibEFVX3lxTE04bFlQY3BZRGRxMVBQdkwxT2tEcDNnYWR1Uk03alI1dUpqdDVfVlNDVHM5UzZGamxSWnZsbEVlWVpNX0l3UnRHR0NVOEZfb3dJMnFpM2o4Y1dBcWdMTzdCOHA2V1d0X0dMbi11Ug?oc=5" },
  { id: "tiktok_new014", title: "TikTok Shop运费两个月三连涨，6月起或全包给卖家", content: "TikTok Shop运费在两个月内连续上涨三次，6月起可能将运费全部转嫁给卖家。这将增加卖家的物流成本，尤其是小件商品。建议卖家优化包装和物流选择，考虑使用海外仓或与物流商谈判。同时关注TikTok Shop是否提供运费补贴。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9vbWJxMEptcHFmR3Q1RUdXRFBhaDRQRFhUeElOVjA2dWVpMnEzMHdOY1FzaGkwZ1FiRnIzYkJGQThwRTdWcW9NQU9RTkQ?oc=5" },
  { id: "shein_new015", title: "SHEIN与Everlane强调供应链掌控力，跨境电商需借鉴", content: "SHEIN和Everlane在Vogue文章中强调供应链掌控力的重要性。SHEIN通过柔性供应链实现快速反应，Everlane注重透明化。对于跨境卖家，供应链管理是核心竞争力。建议卖家优化供应链流程，提升库存周转效率，并考虑与SHEIN等平台的供应链合作。", source: "Vogue", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMijwFBVV95cUxNR0FsN3hfYzhEazBZR0lxUWZLUWlVeF9Dc09USGZuNlBWNDB1eUN1TGJhWDZGMnpaMUlCLUc4VElwNDFZNURxOHByVTItZlY4WnJqNnZIS0xtc2c3b3BjOW4xc3h0TWxnaV9EUXNDVW1EVDJiMnhUWmdRenU4RHYwMHhhcmJiRFVMRXRMcnJ5OA?oc=5" },
  { id: "aliexpress_new016", title: "阿里出海不再隐身，速卖通加速全球化布局", content: "速卖通作为阿里出海的核心平台，不再隐身，加大在欧美市场的投入。包括升级POP权益、加强合规支持、优化物流体验。对于卖家，速卖通提供稳定的流量和合规保障。建议卖家利用速卖通的品牌背书和物流网络，拓展欧洲和美国市场。", source: "维科号", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-05-27"), url: "https://news.google.com/rss/articles/CBMiV0FVX3lxTFA4R29lQ2NtQUJXUWdtZC1RRmw1VURnMElvWXRhMzRyT182ZUd6NFRJc0ZoUHlWUktZSDNzay1pQWtrb19qeDBpaW00Q1JiQlNJN0NKeGdZaw?oc=5" },
  { id: "tiktok_new001", title: "TikTok Shop美区6月起商家全额承担买家退货运费，成本激增", content: "TikTok Shop美国站宣布自2026年6月起，商家需全额承担买家责任退货运费，此前平台承担部分费用。此举旨在减少退货纠纷，但将显著增加卖家运营成本，尤其是高退货率品类（如服装、鞋类）。卖家需优化产品质量和描述，或调整定价策略以覆盖新增费用。该政策适用于所有跨境POP商家，预计影响数万卖家。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9HQkFaMEVLZ2w5WV82TlZqazRjUEoydHFScWxLV0k5ZHYydkZtdWdKWTFkNkpRb1A0NkdhWGpFeFBHaEJsdlBfa0NDXzM2NzRFZ3lYbzRB?oc=5" },
  { id: "tiktok_new002", title: "TikTok Shop东南亚跨境调整店铺评分规则，7月起AHT替代投诉率", content: "TikTok Shop东南亚跨境将于2026年7月起，用平均处理时间（AHT）替代投诉率作为店铺评分核心指标。AHT衡量商家处理买家问题（如退货、咨询）的平均时长，要求更短响应时间。此举旨在提升用户体验，但卖家需加强客服团队和自动化工具投入。该规则仅影响东南亚市场，但可能预示美区未来调整方向。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1zQWZaWGVsX3NrRmVQNW5JUERid2tjcEh5OVBjY1kyYm4xMnM2cWw3WlFTc0RmanAzSE1QN0k3aVRoTll0MUJrRzlmSzVCMjl2MUd2YUp3?oc=5" },
  { id: "tiktok_new003", title: "TikTok Shop发布跨境POP商家成长服务计划，一价全包未达承诺可赔", content: "TikTok Shop推出跨境POP商家成长服务计划，提供“一价全包”套餐，涵盖流量、物流、客服等，若未达承诺效果（如GMV增长）可获赔偿。该计划针对新入驻及成长型卖家，降低试错成本，但需支付固定服务费。适合缺乏运营经验的卖家，但需仔细评估ROI。", source: "新浪财经", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMif0FVX3lxTE9BNVNSNUJHb2thaDIzSjRlSTlHUHI3ZjgxZk54U3gtWnhWQU1XVGtGUW9neVlzZTJOazZ0Sm1vMDE0TFkxVEpza1JRdXFuRlFRa3VDaFh6dUFNRlhMNUtieDR4MHBES2ZVdGRhTXY0SlJMX0lHMDBGTXhncGlRclE?oc=5" },
  { id: "temu_new004", title: "Temu推出卖家第三方检测认证服务，强化合规降低风险", content: "Temu宣布为卖家提供第三方检测和认证服务，涵盖产品质量、安全、环保等，帮助卖家满足欧盟及美国合规要求。该服务由平台合作机构提供，费用可能由卖家承担，但可减少因不合规导致的罚款和下架风险。此举是Temu应对全球监管趋严的重要举措，尤其针对欧洲市场。", source: "Chain Store Age", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMilwFBVV95cUxOYlVwNEpZRFFWd29mNWlZaGdobDZ5VkwyazFfSUNfM3Y0Z2ZyXzRvRHliOHBncERmU1lhUU5BTDJKdUhyVFRhRnl1TlVVUlRvZ3ZWcEZRODF4YmdvamhfbGp5d3R4cFFwYnpaaGRoMW1tbFpXV1JvRWR3LXJjSUFaVTVXcGg4QW9wMHJWNHNBODZ6Mm5tLWRz?oc=5" },
  { id: "temu_new005", title: "Temu新店铺须办理EPR，欧盟合规要求升级", content: "Temu要求新开店铺必须办理生产者责任延伸（EPR）注册，涵盖包装、电子设备、电池等品类。未注册将面临产品下架或罚款。该政策适用于所有欧盟站点，卖家需在入驻前完成各国EPR登记，增加合规成本但避免法律风险。建议卖家通过专业机构统一办理。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiSEFVX3lxTE9mV09WU2lwa0xKN0F6c3RDdGJoZUJsTmgzY195cWpueW9fa2prSExIRGdKMmtFNGhpWXN5S0hDbWJVMkRWdC1FQw?oc=5" },
  { id: "temu_new006", title: "Temu模式剧变：Y2半托管改革，走与Shein相反路线", content: "Temu正在推进Y2半托管模式改革，允许卖家自主定价、发货，平台仅提供流量和支付支持，与Shein的全托管模式形成鲜明对比。该模式旨在吸引品牌卖家，提升商品差异化，但要求卖家具备物流和运营能力。目前已在部分品类试点，预计2026年下半年全面推广。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBvUFprSFIySERFM2hYdU9tMlNKSV8xVkZjUlM0OGxxRWo2NzBEeW8yQlhCLWtHUWtyRWFkMl9KVGpkZ2swVWRhcDlPWkc?oc=5" },
  { id: "shein_new007", title: "SHEIN新建英国物流仓库，加速欧洲本地化履约", content: "SHEIN在英国新建物流仓库，以缩短配送时效并降低跨境物流成本。该仓库将覆盖英国及西欧市场，支持退货处理。此举是SHEIN欧洲本地化战略的一部分，此前已在波兰、意大利等地建仓。卖家可提前备货至英国仓，提升消费者体验，但需承担仓储费用。", source: "物流指闻", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiXkFVX3lxTE0wbFpUM0VuS25BNGxpdjluakZhRGRhLVRBYjdKZWFJT1M1a0ZmMnRFSEc2VV9zV3ZqRzAyN2xZZVlTaFpvZXUybjFIUVJacmRmRUoxU2E2WkdIczdkWWc?oc=5" },
  { id: "aliexpress_new008", title: "速卖通升级POP权益迎接欧盟合规新政，助商家平稳过渡", content: "速卖通升级POP（第三方卖家）权益，包括合规指导、流量倾斜、费用减免等，以帮助卖家应对2026年欧盟数字服务法（DSA）等新规。平台将提供合规工具和培训，降低卖家违规风险。建议卖家及时了解各国法规，利用平台资源完成合规。", source: "亿邦动力网", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9sX0VITUFHZ1NZME1neUhDUEE4VTRiWmFHd0Q5b3E0cHN4b3ZlcWdMblZ5Yk1KTzBINzRLd2MwSS1iWmt2OWs3d2FqbUtEX2xXVHZTZ244Qjg?oc=5" },
  { id: "joybuy_new009", title: "京东与万事达卡战略合作，拓展全球支付与跨境贸易", content: "京东与万事达卡宣布战略合作，共同推动支付创新和跨境贸易。合作将优化京东海外站点的支付体验，支持更多本地支付方式，并降低交易成本。此举有助于京东拓展欧洲和美国市场，吸引更多国际卖家入驻。卖家可利用京东的支付基础设施提升转化率。", source: "Plataforma Media", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMi6gFBVV95cUxQRHN6YUllV3daeE96MHhvd0hJOEJHQ3FueGdfRHhSWXdBRmVWLU1PaXRaY2xKY0xoTFlaYXhRSmI0NXptM2Z4Y1FuRDRRakFINEw3dXRoQ29iZ2JtNFU2YnZuaVlYbFhwVURXdVVuaV8wVVBiVFZKc1otd0U0aHFJaXNOZ0RqcUZoQXZyRW81bVFEWUthVmZRMjM2bzAwY0ZHVWgzdE5LZWdxWU1fSU5wRG5lR2JjWU1sZ21tSy1HUFkwVk5vZ3lHeE5Ta1JST2JWNWY0RUc1Z2I3VS1JQjRVZFBTdG9LX0pwVlE?oc=5" },
  { id: "joybuy_new010", title: "香奈儿官方旗舰店入驻京东，独家首发美妆礼赠系列", content: "香奈儿官方旗舰店在京东上线，并独家推出美妆礼赠系列，瞄准高端消费市场。此举显示京东在奢侈品电商领域的布局，吸引国际大牌入驻。卖家可关注京东高端品类机会，但需满足品牌授权和品质要求。", source: "JD Corporate Blog", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMixAFBVV95cUxQYVNSVExoWHhpUEZPckg2c216ams2VTZqR25oQXVhZWVrbnNleDVIMldmMTVWcWw4NGJzcWgxWFhuSi1MOUZxUkhRZUgtcDJLbE5ydFRCcnZqdTlvUDVySml4eXRjcjJ1dV93Xy1Pd01nOFEyZkpmMWVHbnhIQnBORllJbmcyX3ZfdVpaX0ZFb1JiU0dkUFo0WUJNTFNRVW1YbVRiWEZTbWt6ajdjUTMtTk9JbWFkaG5sQmhNSWpHVTVYVVBy?oc=5" },
  { id: "joybuy_new011", title: "京东物流目标价获里昂上调至17.8港元，首季业绩超预期", content: "里昂证券将京东物流目标价上调至17.8港元，维持“跑赢大市”评级，主要基于其2026年首季业绩超预期。京东物流在海外仓和跨境物流方面持续投入，支撑其国际业务增长。卖家可关注京东物流的海外仓服务，降低跨境配送成本。", source: "新浪财经", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMilwVBVV95cUxOMGp5cGlDMGdiM1lzYXNFXy1hb3JRd1ZFV2pxRUItdnp2S09VdnVPRnFubUVmaW05M2U0dkRSOEM1QTJEckVTSmhHemdGaVdFOXVoTFpsUkxxNm1sa2l2QlZuTl84RlZ4UHpZcWJwNHM4OWlwQi1uWmliYzRBWExDdlkwNkdZMTlsSkUzQm9VTlQ1cXJBWjlZY0c3RkR3bG1oMXk2c3ZheHEzVGRveXJiZDhHZFczM24zc3JRS0dzX0FGTjhheWQ2VktqOEIxWnQtNWRSTFJkNGlvZWp6T21ESHpqV3NLcVpUY3Y1MGFLeWxUQTNsZEFPYU5jZXBZLTBRZnh2M19RZEpTeDRub0hkWlBIbzhOYk9jME54YTZ1dlk1NVc0U3ZMSEZRYVJwUGJBQ2FlSHhDQXBCY1E2bjJuSkxXQk9Jb3ZSbm1Fc2kzVVBWR1BJSlJZNWEzTVZldFZ1YTNkekZISm1pMVU2MTh0MVkxVm80MlhjdjRJMndIUzctZnBNVzRZcl9sdHVCVnJlNjk4Rzg5bmVCMXU4VlE4TEVwbUNnRDhfelpRTko0ckdPaDBHMTlYclpSTXAyM3JxUkJtcGhtcjNFYjlnTHBsaXN2d0xSamh6ZDlPaGp4ZUdlLVo4UnIxNVlTR2pKZFJSNXVLOWZETS10aXNjNHpoOVZxX2hjYjk5d2tKM2lIS0ZLbzdLM01XYUFlNVpabnNVNXZOcUVWNjJYWUliZmtDc0NJakpwY0ZsLUxSNkV2TmNjRVBQcXlfcXhCMmgtOG5abnZGRGFWSWxFTUNEeHR3TUZuX0pRdE5Xc0NUb01WMkdES3VhMDEyZTI3MEJjc3ptVmswZ2Y0QjlWZU0xVDgzaFlwb1BIb00?oc=5" },
  { id: "joybuy_new012", title: "京东筹备都柏林办公室，加速欧洲市场扩张", content: "京东正筹备在爱尔兰都柏林设立办公室，作为欧洲总部，以拓展本地业务和物流网络。此举将加强京东在欧洲的电商和物流布局，吸引欧洲卖家入驻。卖家可提前了解京东欧洲站点的入驻政策，抓住市场机遇。", source: "The Currency", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPZFVUaWZfN1htUmNyRlFyZGxjWmhEb1V6ZHh4RkVaVHNEcnRVcjdVZDBpa1FUY2J1dkZESTJDc3RyNFZLYVVwWl9ZMHZ1WnBUcEpRRnFhdmpOV2VNeUFfc242UzZDbWRKa3JXSW9BeF9GYzJGY2hGY05qR1BhOXF0cV9CM0VRdFk3YXNKVXZVdnFvak1pR1BDRVJ1TlNEazBGNXRua0tmQkl1ZUlkbTNkRmc2WUdta01tQzM4?oc=5" },
  { id: "tiktok_new013", title: "TikTok Shop强调发现式电商为品牌和中小卖家增长引擎", content: "TikTok Shop在峰会上强调其发现式电商模式，通过算法推荐和短视频内容驱动购买，帮助品牌和中小卖家实现增长。平台提供流量扶持和工具，降低获客成本。卖家应注重内容创作，利用TikTok的推荐机制提升曝光。", source: "Inquirer.net", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMi1wFBVV95cUxPRkVkTDE4ZEtPMm1ONEE0dzhyZU1hZTBScTJkUlBYOF9sOG5lUWZHV0FZNTljZmdXS3R1X0xMZXV3NWhFaS1oZHVjUnoycVpPOUhfSGdFeXNSb1VMaTNSaUdPcFQ0V3l3QVVlNmw0WEZtMVFmNU5aaVR4NGRvUzlOWTY5d2plSTMzT05SMmFRME9yREtkYXFDOHc5SHdjTlZmSGx3UV8tdFNXZHdibE1fM0VpTUt6d0ZqdTBWQWFKNmdMTFFDTzlxWHppMWxEV3JEcW01WnZrZ9IB3AFBVV95cUxQVXpzSlFsREdZY3pMQnBHVEFhcVVQWHpjMUtTbjlfRGZ5UXM3R1o3SjBuSjg3X0dGVTllNUhnQ3drcS1oX0FrSXFxRTdtcEk5NlFOUy1BZmFFRThJQVA5bFl6bG9GZHlqLVdrdG0ySFlTbFNzY1pBZDhiOG1QbnpoSnY1Q1pFcDhoLUNTc3ZFa25zM1lQalRUQXJVYldFUkZHLUtxaTZ2WG0yRTlyMDVZam1aM01SdTRfQU4zQml0cHBLQkliOW1VWVU4UzltbjZUOGduT19UUUo5X0VS?oc=5" },
  { id: "tiktok_new014", title: "Shoezone入驻TikTok Shop，全渠道零售商拥抱社交优先策略", content: "英国鞋类零售商Shoezone正式入驻TikTok Shop，作为其全渠道战略的一部分，通过社交电商触达年轻消费者。Shoezone将利用TikTok的直播和短视频功能推广产品。此举显示传统零售商加速布局社交电商，卖家可借鉴其内容营销策略。", source: "Retail Technology Innovation Hub", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMi5AFBVV95cUxNallUUTVvU1dHaTB4ejhua1ZmWDQtaHlJU2dYX05Kam1UZk9yZzBaY01DQ2hJNWMtWktLQmlXWWxQOElNT1lRWl9jeUdzc0dwY0dDVE8xS0dmQVplRTRZNzgyaUh3UTZDVHpzQVM0Q2Fmam0yZGxZWEhkbjB0a2ZHMmFBZHhMY3NHQmN6VHRQVjhiNVZHV1ZucU1XZ25MRkgxRnp2MzV6eVAwX2VzS0FOSUtPX2xyRDFiVW9fN2dkV1JsQi1ob1ZndXg2dWZNcm8yc0lseWNCQUJ5UkNqWUI0ZUY5NjU?oc=5" },
  { id: "tiktok_new015", title: "TikTok Shop年中大促6月启动，多重玩法升级引爆全球市场", content: "TikTok Shop宣布2026年年中大促将于6月启动，覆盖美、欧、日等主要市场，推出直播挑战赛、优惠券、品牌合作等玩法。平台将提供流量和补贴，鼓励卖家参与。卖家应提前备货和策划内容，抓住大促流量高峰。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9BbEtPdnRUbUZiWVNsd2N5aTFZMm9seXBkQWxYbUJKR1ROWnQtZmlEcUhxRk12QXg3OVRYNHFranVzUnhsc1lxVkUtMVAwNTh3UzEzQk1B?oc=5" },
  { id: "tiktok_new016", title: "TikTok在美国上线本地生活服务，拓展电商边界", content: "TikTok在美国推出本地生活服务，允许用户购买餐饮、娱乐等本地商家优惠券，并可与电商结合。此举将TikTok从纯电商扩展至本地服务，增加用户粘性。卖家可考虑与本地商家合作，通过TikTok引流。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBTdlhWRjR0Z19pMklha0V2VW1zYURGcnFGSTVFOVozb0tOLVRoWWswODBLUHFYcngxYnl2QmdCSm9JbWtaSVhBZmtaVlExZWEyWW1GUndR?oc=5" },
  { id: "tiktok_new017", title: "ShopliveX称美国品牌低估直播电商下一波变革", content: "直播电商平台ShopliveX指出，美国品牌尚未充分认识到直播电商的潜力，尤其是互动式购物体验。该平台预测2026年直播电商将迎来爆发，建议品牌加大投入。卖家可提前布局直播带货，利用TikTok等平台抢占先机。", source: "Net Influencer", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiogFBVV95cUxOUlByaEdsYXZXMjI0THFzMjhYUnZFWnRYMmJ6ZHJWdDR3al9vOV94UHlURXBkYlJiZTJCZ2ZIaUxDSzVaNEVEeHhTRGlPU2cwSnIwcjBFbUZmVnJ5TmlVWS1scUpCWWVKWlhGYURiVjJlVTF5WkdNaU14SUpMd2lYanlTSklYd2wxNkFmekUwbnZadDZfT3lHVFZrMjhmam9XUnc?oc=5" },
  { id: "tiktok_new001", title: "TikTok美国上线本地生活服务，Booking.com和Expedia首批入驻", content: "TikTok在美国正式上线本地生活服务，首批入驻合作伙伴包括Booking.com和Expedia等旅游服务平台。该服务允许用户通过TikTok应用直接预订酒店、机票和旅游体验，标志着TikTok从内容电商向本地服务电商的进一步拓展。对于跨境卖家而言，TikTok本地生活服务可能带来新的流量入口和营销场景，但短期内主要影响旅游相关品类，其他品类卖家可关注后续开放情况。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBTdlhWRjR0Z19pMklha0V2VW1zYURGcnFGSTVFOVozb0tOLVRoWWswODBLUHFYcngxYnl2QmdCSm9JbWtaSVhBZmtaVkx1ZWEyWW1GUndR?oc=5" },
  { id: "aliexpress_new002", title: "亚马逊推出30分钟极速配送，提升美国市场履约竞争力", content: "亚马逊在美国市场推出30分钟极速配送服务，进一步缩短配送时效，以应对Temu、TikTok Shop等新兴平台的竞争。该服务目前覆盖部分城市，主要针对高频快消品。对于跨境卖家，亚马逊的极速配送可能提高消费者对配送时效的预期，卖家需优化库存布局和物流策略，考虑使用亚马逊FBA或海外仓以匹配时效要求。", source: "亿邦动力网", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBTdlhWRjR0Z19pMklha0V2VW1zYURGcnFGSTVFOVozb0tOLVRoWWswODBLUHFYcngxYnl2QmdCSm9JbWtaSVhBZmtaVkx1ZWEyWW1GUndR?oc=5" },
  { id: "joybuy_new003", title: "万事达与京东达成战略合作，推动支付创新支持业务增长", content: "Mastercard与京东宣布建立战略合作伙伴关系，通过支付创新支持业务增长。合作将整合Mastercard的全球支付网络和京东的电商生态，为京东国际业务（包括Joybuy欧洲）提供更便捷的支付解决方案。对于跨境卖家，这意味着京东平台可能推出更多本地化支付方式，降低欧洲消费者的支付门槛，提升转化率。", source: "markets.businessinsider.com", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMi-gFBVV95cUxNY25UVnpxOVBtM1JWX1RqcnZyNVpTdU4yWXRiWmxKLW5rcklpdFNKaXhKUHhoMnYyTGpXaXJhbmUzblhhQXA0WlpwZk9wZ2JGYUtVMGs4LXhCNE5tYi0xOHZSc0lsY2tET0VOektqbGpLdEtUaU5Hb2lBb2YwNE5mUEczcndRSl9hQjR3a1dWTF9fLTdYWWlSZWM5T1BVRlNzeVRhV2F3R0tOYmZuMGVadm9tVlpVWlRFUGNXRG53Y0t0TmJyZ0tRaTVEeEpSbmg4aVdyVkRXS1RVa2xlSGFjM004T29QSXBOS2FUMEtkdVNSd1NUOUUweUNR?oc=5" },
  { id: "temu_new004", title: "Temu新店铺需办理EPR，合规要求升级影响欧洲卖家", content: "Temu要求新开店铺必须办理生产者延伸责任（EPR）注册，涵盖德国、法国等欧盟国家。EPR要求卖家对产品生命周期负责，包括回收和废弃物处理。未注册可能导致产品下架或罚款。对于跨境卖家，需尽快完成EPR注册，尤其是销售电子、电池、包装等品类的卖家，建议通过专业服务商办理以节省时间。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiSEFVX3lxTE9mV09WU2lwa0xKN0F6c3RDdGJoZUJsTmgzY195cWpueW9fa2prSExIRGdKMmtFNGhpWXN5S0hDbWJVMkRWdC1FQw?oc=5" },
  { id: "joybuy_new005", title: "京东加速欧洲扩张，筹备都柏林办公室支持Joybuy业务", content: "京东正在筹备在爱尔兰都柏林设立办公室，作为其欧洲扩张的一部分。京东旗下Joybuy欧洲平台已上线，提供本地化购物体验。京东物流也在欧洲布局，与OpenClaw合作推出智能物流解决方案。对于跨境卖家，京东欧洲平台提供了新的销售渠道，尤其是3C、家居等品类，卖家可关注Joybuy的招商政策和物流支持。", source: "The Currency", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPZFVUaWZfN1htUmNyRlFyZGxjWmhEb1V6ZHh4RkVaVHNEcnRVcjdVZDBpa1FUY2J1dkZESTJDc3RyNFZLYVVwWl9ZMHZ1WnBUcEpRRnFhdmpOV2VNeUFfc242UzZDbWRKa3JXSW9BeF9GYzJGY2hGY05qR1BhOXF0cV9CM0VRdFk3YXNKVXZVdnFvak1pR1BDRVJ1TlNEazBGNXRua0tmQkl1ZUlkbTNkRmc2WUdta01tQzM4?oc=5" },
  { id: "temu_new006", title: "Temu启动新拼姆百亿自营计划，百人团队操盘供应链整合，采用大单慢返模式进军欧美中端市场", content: "Temu正在推行Y2模式改革，从全托管模式向半托管和第三方卖家模式转变，允许卖家自主定价、发货和运营，与Shein的全托管模式形成差异化。Y2模式旨在吸引品牌卖家和高品质商品，提升平台商品丰富度。对于跨境卖家，Y2模式提供了更多自主权，但需承担库存和物流风险，适合有供应链能力的卖家。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBvUFprSFIySERFM2hYdU9tMlNKSV8xVkZjUlM0OGxxRWo2NzBEeW8yQlhCLWtHUWtyRWFkMl9KVGpkZ2swVWRhcDlPWkc?oc=5" },
  { id: "tiktok_new007", title: "TikTok Shop美区调整退货规则，6月起商家全额承担退货运费", content: "TikTok Shop美国市场宣布自2026年6月起，商家需全额承担买家责任退货运费。此前退货运费由平台或买家承担。新规将增加卖家运营成本，尤其是高退货率品类（如服装）。卖家需优化产品质量和描述，减少退货率，同时考虑将运费成本计入定价。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBkRFB5VU03cjNmTTZHdzN4d25sbmpXZl9RR0hxRVE2WWt6UkVTNFg3Y05MNmx4VmFDVnEtUkRaZXo2NHpoNXFCci1XWmducENIMVJ5eWd3?oc=5" },
  { id: "shein_new008", title: "SHEIN遭头部货代索赔2.9亿，对赌失败暴露供应链风险", content: "SHEIN与一家头部货代因对赌协议失败，被索赔2.9亿元。该货代此前为SHEIN提供物流服务，但因SHEIN业务调整导致对赌条件未达成。事件暴露了SHEIN供应链中的合作风险。对于跨境卖家，需谨慎选择物流合作伙伴，避免过度依赖单一服务商，同时关注SHEIN的物流政策变化。", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9vaENKU29qaXV6ck1weE9ZWm5oeXJNcncyTWp3UTBIM0NNTzB5ZjF2Q1dVN2VwaHdKX21IVVlRdkV5YmxLajFuWTF4OFE?oc=5" },
  { id: "shein_new009", title: "SHEIN与Temu在英国对簿公堂，供应链合规成焦点", content: "SHEIN和Temu在英国法院就供应链合规问题展开诉讼，双方互相指责对方存在违规行为。案件聚焦于供应商劳工标准、知识产权和产品安全。对于跨境卖家，此案凸显了欧美市场对供应链合规的严格审查，卖家需确保供应链透明，遵守当地劳动法和产品安全法规，避免卷入法律纠纷。", source: "Bloomberg.com", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMirwFBVV95cUxNbHItUXBmTm1lUTNETlNjcm9vLXNJeDNnZm5JcWtJVkdzVkZIWFVOZnFpc2t4WjVRYTVaaEtwZXdNR3ZzcGdVeTFfREtIa0pMbnFlRUtiX3hoR2N0a2E0QkM5MklnRHpCMzJCSC1DNXV2TzJKY3hYQ3I3aWVpUmI3MmhheWw5aEVKblhXWkl3c3Y3YnE2ck9hNHYxWTRqaWw1V091c0FVMWNyTWpBdVl3?oc=5" },
  { id: "aliexpress_new010", title: "速卖通升级POP权益，帮助商家应对欧盟合规新政", content: "速卖通宣布升级POP（第三方卖家）权益，包括降低佣金、提供合规指导、优化流量分配等，以帮助商家平稳过渡欧盟合规新政。欧盟新规要求卖家提供产品合规文件（如CE标志、EPR注册等）。对于跨境卖家，速卖通的升级政策降低了合规成本，卖家应尽快完成合规准备，利用平台扶持提升欧洲市场销量。", source: "亿邦动力网", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9sX0VITUFHZ1NZME1neUhDUEE4VTRiWmFHd0Q5b3E0cHN4b3ZlcWdMblZ5Yk1KTzBINzRLd2MwSS1iWmt2OWs3d2FqbUtEX2xXVHZTZ244Qjg?oc=5" },
  { id: "tiktok_new011", title: "TikTok Shop东南亚加强跨境内容合规管理，违规最高冻结佣金90天", content: "TikTok Shop东南亚市场加强跨境内容合规管理，对违规内容（如虚假宣传、侵权）实施最高冻结佣金90天的处罚。虽然聚焦东南亚，但可能预示TikTok Shop全球合规趋严。对于跨境卖家，需确保直播和短视频内容符合当地法规，避免使用未授权音乐、图片，以及夸大产品功效。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBxVElsc3gzWUF0SnpuaFptaGlZQzFiLXVqU3dicXBvbEdacVZQdjNHLW5KcmNROGk2cnlYVUZFUF9ic3ZQUjJlQ3B5aHVNVTNrQmU0RG1DR3I?oc=5" },
  { id: "shein_new012", title: "欧盟数据保护委员会调查SHEIN爱尔兰，涉及中国数据传输合规", content: "欧盟数据保护委员会对SHEIN爱尔兰子公司展开调查，涉及向中国传输欧盟个人数据的合规问题。调查可能影响SHEIN在欧洲的数据处理方式。对于跨境卖家，需关注数据合规要求，确保用户数据存储和处理符合GDPR，避免因平台政策变动导致业务中断。", source: "RFI", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMi-ANBVV95cUxORzlzSnBDZ3MwYmtkZlRxLTZtdlZmN3ljN1c5R2xudmtYMGcyeW1fbFRfVG5GMUp2MjNpTXpfTEVzRUVuRThFWHdDRW53d2RLOC1IOWxnajhYSnNRTUZ5R0tqWl9OSVMxQlNkOTl5UHlSU1FqX25RVnYydFlQemxFdWt4Z0FoUUVfMUU5QVJYZTdnT0hfczlveHBNOHdYLUdnWGpMd0dEOW5WSzhJSDhiRmVvRGUwd1N4T1NlclVRN3hleHp0amhsaGVRQ1RURkdMN0t4eHJJTUJyQUFtZFp1WURJSEVEV3U3WXBFT3hYLXFIRzVpVlV5VGRkNVp1QTduRjlsQWJVVGg5aUd4bDF2R19xV2lRcE9Mb2dZb0ZZV2d4N2RvUzJfMUNBM2VMLWJLa2kxSk1zV0FhaW5qWXFEZ3BGZlFtM3ZXUExUV1RmT0FFQkpwMjJ4cGcwR1RiQmp2UVNWMzJfeXE1cFNRSnNvUEVWVFpmd1NYUEJodFlLNDhlX0F0a1ZRRzZYVHVTRzNmU1Bnd0pUc3hzVVNTZEROdGx5THBneVY4Znk0TXdTd2x4ZFJfclVMSzVjRU1SRDJyellqMGxUU0MyTHNyU2c2MUJRbGdwbms0QlJCU3d6WV9ZREJjUnZjUzRabUlVTDB6TFBsOTZJTzU?oc=5" },
  { id: "joybuy_new013", title: "京东物流与OpenClaw合作推出龙虾智能体，助力国际商家出海", content: "京东物流与OpenClaw合作推出“龙虾”智能体，为国际商家提供智能物流解决方案，包括仓储管理、路径优化和实时追踪。该智能体旨在降低商家物流成本，提升履约效率。对于跨境卖家，京东物流的智能体可帮助优化欧洲和美国的物流网络，尤其适合使用京东海外仓的卖家。", source: "新浪财经", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-05-20"), url: "https://news.google.com/rss/articles/CBMidkFVX3lxTE9tRDlSMXlBdzBSMHZiNzRFN2I4TFkzYkVhSlhSNWRaNDRLMGxCaVlxR0JucmRLY0x1dzlNNFJfY3l4NVNxNWJ0ZTJuWURRRXk1SUhaeGRhUXotU2t3NTBxRkZOWWxfQlE0WmZ5Zmt5NWJQWkd0YXc?oc=5" },
  { id: "joybuy_new001", title: "京东与万事达战略合作，支付创新助力跨境业务增长", content: "Mastercard与京东宣布战略合作，通过支付创新支持业务增长。合作将整合Mastercard全球支付网络与京东电商生态，为跨境卖家提供更高效的支付解决方案，降低交易成本，提升资金周转效率。此举有助于京东吸引更多国际品牌入驻，并优化消费者支付体验。", source: "markets.businessinsider.com", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMi-gFBVV95cUxNY25UVnpxOVBtM1JWX1RqcnZyNVpTdU4yWXRiWmxKLW5rcklpdFNKaXhKUHhoMnYyTGpXaXJhbmUzblhhQXA0WlpwZk9wZ2JGYUtVMGs4LXhCNE5tYi0xOHZSc0lsY2tET0VOektqbGpLdEtUaU5Hb2lBb2YwNE5mUEczcndRSl9hQjR3a1dWTF9fLTdYWWlSZWM5T1BVRlNzeVRhV2F3R0tOYmZuMGVadm9tVlpVWlRFUGNXRG53Y0t0TmJyZ0tRaTVEeEpSbmg4aVdyVkRXS1RVa2xlSGFjM004T29QSXBOS2FUMEtkdVNSd1NUOUUweUNR?oc=5" },
  { id: "joybuy_new002", title: "香奈儿官方旗舰店入驻京东，独家美妆产品迎送礼季", content: "香奈儿官方旗舰店在京东上线，推出独家美妆产品以迎接送礼季。此举标志着京东在高端美妆品类的重要突破，吸引更多奢侈品牌入驻。京东为品牌提供全链路营销支持，包括精准流量和物流保障。卖家可关注京东高端品类拓展带来的入驻机会。", source: "JD Corporate Blog", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMixAFBVV95cUxQYVNSVExoWHhpUEZPckg2c216ams2VTZqR25oQXVhZWVrbnNleDVIMldmMTVWcWw4NGJzcWgxWFhuSi1MOUZxUkhRZUgtcDJLbE5ydFRCcnZqdTlvUDVySml4eXRjcjJ1dV93Xy1Pd01nOFEyZkpmMWVHbnhIQnBORllJbmcyX3ZfdVpaX0ZFb1JiU0dkUFo0WUJNTFNRVW1YbVRiWEZTbWt6ajdjUTMtTk9JbWFkaG5sQmhNSWpHVTVYVVBy?oc=5" },
  { id: "joybuy_new003", title: "京东物流首季业绩超预期，里昂上调目标价至17.8港元", content: "里昂证券将京东物流目标价上调至17.8港元，因首季业绩超预期。京东物流持续优化成本效率，海外仓网络扩展助力跨境卖家履约。卖家可利用京东物流的欧洲仓配服务降低物流成本，提升配送时效。", source: "AASTOCKS.com", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMib0FVX3lxTE1jRUx3eklUb0dQanlNTFdlWDBBZlFwbFpKNHhtWUMwNTNvOERDVUxxVFBPcmdrNTJrR19xRnhacmV3Z1hMdkE3QU1nVmlUM24wNXRFNFN4RDhsZGV6TUdzSlgzUmg4X0JtWVpsQ2lvZw?oc=5" },
  { id: "joybuy_new004", title: "京东物流与AI驱动市场增长，有望获重新评级", content: "Seeking Alpha分析指出，京东物流、AI及市场增长有望推动重新评级。京东通过Joybuy欧洲站拓展，结合物流优势，为跨境卖家提供一站式服务。卖家可关注京东欧洲市场的流量扶持和物流补贴政策。", source: "Seeking Alpha", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQNGw2V3dDd3I5TEhZOC1FNUFLX0xqNklsb1JyeUpyeVRSNm9NYnJtUGlLbWREaUVSdkY0S2dYT09vaXpVQ051SXIwb2hlVzJtTnAzS0NLa01qa0tEaUxGVU1fTU1hRnl1ZjJ2b3owVThaVUgwVWtpY0VSYVNJbC1GcTIwTGZWbFZOQWw4QnY1R0t5anNoYWxhZVliZ3lZRkRZVm51UE1yMFZTZw?oc=5" },
  { id: "joybuy_new005", title: "京东筹备都柏林办公室加速欧洲扩张，Joybuy成关键", content: "京东正在筹备都柏林办公室，作为欧洲扩张的一部分。Joybuy欧洲站是重点，通过本地化运营和合规布局，吸引中国卖家入驻。卖家可借助京东的欧洲仓配和品牌背书，拓展欧盟市场。", source: "The Currency", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPZFVUaWZfN1htUmNyRlFyZGxjWmhEb1V6ZHh4RkVaVHNEcnRVcjdVZDBpa1FUY2J1dkZESTJDc3RyNFZLYVVwWl9ZMHZ1WnBUcEpRRnFhdmpOV2VNeUFfc242UzZDbWRKa3JXSW9BeF9GYzJGY2hGY05qR1BhOXF0cV9CM0VRdFk3YXNKVXZVdnFvak1pR1BDRVJ1TlNEazBGNXRua0tmQkl1ZUlkbTNkRmc2WUdta01tQzM4?oc=5" },
  { id: "joybuy_new006", title: "京东依赖服务增长与Joybuy欧洲站支撑利润率", content: "京东正依靠服务收入增长和Joybuy欧洲站来支撑利润率。Joybuy为卖家提供低佣金和物流补贴，吸引跨境卖家入驻。卖家应关注Joybuy的招商政策，尤其是欧洲市场的流量红利。", source: "Yahoo Finance", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMioAFBVV95cUxNbHN5a1k0YmtYMlhSRjVyTVZQVGJSRnVOajZJZGFuSzRydko5dnRwY0dXTDRsT1pZZVp6R05tdUhYb0VkWkRpLXRYaXRwOEx3NzdwNmNuRkdUMEl2MERjR28zaEQ3OUstOVhvT0VycjRKcV9XQ0t0Z1FtSWRpWnd0aGVqVUJXM0pBOUtRR0Z6Z1VBTGF4Vy01REJVMjlVMkJI?oc=5" },
  { id: "temu_new007", title: "Temu在匈牙利被罚13亿福林，因不正当商业行为", content: "匈牙利竞争管理局对Temu处以13亿福林（约合350万欧元）罚款，因其不正当商业行为，消费者将获统一现金补偿。Temu需调整合规策略，卖家需注意平台合规风险，避免因平台问题影响店铺运营。", source: "cnBeta.COM", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9uTm5jY3daRE81bUl3ZHlzQnRNbFpzMHRmWnVzVG5DVlpOcXFnWU9WNEdHVFFRdlV1Y2M4WlRhc2ZKd1hRUmI4ZnB1RHNqNTI0dmp2Sk9EVDFBV2dBaHVSRg?oc=5" },
  { id: "temu_new008", title: "Temu与QIMA合作加强产品测试与平台合规", content: "Temu与质量检测公司QIMA合作，强化产品测试和平台合规。此举旨在提升商品质量，应对欧盟监管。卖家需确保产品符合安全标准，否则可能面临下架风险。建议卖家提前进行合规认证。", source: "PR Newswire", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMiywFBVV95cUxNbV9qX2VtajB2MGNFeTFaZFROenFwN1Y4OTd5M1pVRHNTNHFqU0o3b3dvUGlrMWdIZkRkdl9zanYzZ3QtY1FMNGt0dHJReFRfbU5scmtUZHdfTjg1S0RscG5vUHVZX2FFVXlDN0UwS0RBTHhwamltX2d1UFNmeWFERW44UzR1LTZKQWpoOS04bnJvajdnZ0ZGVUR1bWZHZGlNY2taWWNkY0lYYWVua1pBSUo5XzNKZ2lPRmpVZml6QmQzc3pyR1N2UXlqWQ?oc=5" },
  { id: "temu_new009", title: "Temu Y2专线物流如何节省成本？卖家实操指南", content: "Temu Y2专线物流模式解析：卖家将货物发至国内仓，平台负责国际运输和末端配送。相比海外仓，Y2模式降低仓储成本，适合低客单价商品。卖家需优化包装重量，选择经济线路，可节省20%-30%物流费用。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE83UlljaXR2Z1BOY1E3YTFkenQ5czA5X3RaeXN4VkkzVWF5NWQ1cnBLTmw4UnhzOXRmbGJsRDJWR0xqSHhpekxhcW8ydGgzcU5K?oc=5" },
  { id: "shein_new010", title: "Shein与Temu英国庭审聚焦供应链，双方互揭短板", content: "Shein与Temu在英国庭审中互相指责供应链问题。Shein被指压榨供应商，Temu被指数据违规。庭审暴露两家平台合规风险，卖家需注意供应链透明度和劳工标准，避免卷入法律纠纷。", source: "Bloomberg.com", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMirwFBVV95cUxNbHItUXBmTm1lUTNETlNjcm9vLXNJeDNnZm5JcWtJVkdzVkZIWFVOZnFpc2t4WjVRYTVaaEtwZXdNR3ZzcGdVeTFfREtIa0pMbnFlRUtiX3hoR2N0a2E0QkM5MklnRHpCMzJCSC1DNXV2TzJKY3hYQ3I3aWVpUmI3MmhheWw5aEVKblhXWkl3c3Y3YnE2ck9hNHYxWTRqaWw1V091c0FVMWNyTWpBdVl3?oc=5" },
  { id: "shein_new011", title: "Shein遭爱尔兰数据保护委员会调查，涉中国数据传输合规", content: "爱尔兰数据保护委员会就Shein向中国传输欧盟个人数据合规问题展开调查。Shein需确保数据跨境传输符合GDPR要求。卖家需关注平台数据合规动态，避免因数据问题影响欧洲业务。", source: "RFI", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMi-ANBVV95cUxORzlzSnBDZ3MwYmtkZlRxLTZtdlZmN3ljN1c5R2xudmtYMGcyeW1fbFRfVG5GMUp2MjNpTXpfTEVzRUVuRThFWHdDRW53d2RLOC1IOWxnajhYSnNRTUZ5R0tqWl9OSVMxQlNkOTl5UHlSU1FqX25RVnYydFlQemxFdWt4Z0FoUUVfMUU5QVJYZTdnT0hfczlveHBNOHdYLUdnWGpMd0dEOW5WSzhJSDhiRmVvRGUwd1N4T1NlclVRN3hleHp0amhsaGVRQ1RURkdMN0t4eHJJTUJyQUFtZFp1WURJSEVEV3U3WXBFT3hYLXFIRzVpVlV5VGRkNVp1QTduRjlsQWJVVGg5aUd4bDF2R19xV2lRcE9Mb2dZb0ZZV2d4N2RvUzJfMUNBM2VMLWJLa2kxSk1zV0FhaW5qWXFEZ3BGZlFtM3ZXUExUV1RmT0FFQkpwMjJ4cGcwR1RiQmp2UVNWMzJfeXE1cFNRSnNvUEVWVFpmd1NYUEJodFlLNDhlX0F0a1ZRRzZYVHVTRzNmU1Bnd0pUc3hzVVNTZEROdGx5THBneVY4Znk0TXdTd2x4ZFJfclVMSzVjRU1SRDJyellqMGxUU0MyTHNyU2c2MUJRbGdwbms0QlJCU3d6WV9ZREJjUnZjUzRabUlVTDB6TFBsOTZJTzU?oc=5" },
  { id: "shein_new012", title: "Shein供应链工资问题受关注，平台回应审查", content: "Shein在供应链工资问题上面临审查，平台声称已提高供应商工人工资。此举旨在应对欧美消费者和监管对劳工权益的关注。卖家需确保供应链合规，避免因劳工问题影响品牌形象。", source: "Ecotextile News", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOd21Zb0VydUZjTHFOOXRhLXhBNENGVTBoTkN0ZTZoSFNFejFaekxxT1dreGtkWU02U3MxZnBFa3NhZDZObW5RVG1mQkU5b1hCWGR0NFVNYXlZajB3LVptSE5uWVk0YUZnWGdQeXU5Tm9PR0dEOG1CUGFBYldjdF9zUFdpNzlIU3VLM1dEUlgxemxydmFPWnp2bzBuY3V6Slo5dXh1U2lXXzVCcVhqRzV5MWM2OXZTNUx5?oc=5" },
  { id: "shein_new013", title: "Shein技术+人才双引擎驱动服装产业升级", content: "Shein通过技术投入和人才培养推动服装产业升级，提升供应链效率。平台利用AI预测趋势，缩短生产周期。卖家可借助Shein的供应链能力，实现小批量快速返单，降低库存风险。", source: "36氪出海", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMiRkFVX3lxTFBZWFhLVzUyRVFIWkozMy1oWjR3aWxjN0ozQnkzSEJxOUhhVVY4Y09ObktqdHBmOVZUWWJmUW9iRV9zVHZGb1E?oc=5" },
  { id: "tiktok_new014", title: "TikTok Shop美区直播拍卖向中国多品类商家开放", content: "TikTok Shop美区直播拍卖功能向中国多品类商家开放，对标Whatnot。商家可通过直播拍卖形式销售商品，平台提供流量支持。适合收藏品、二手商品等品类，卖家需熟悉拍卖规则和物流时效。", source: "手机新浪网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMi6gFBVV95cUxQeVJOVG9YdnJONTRoUllsbUlRaE1JQ1JhVGxKYjFJQnFiTnM0U0lNMDZMMzFrVEV5WWFGcDk0aElGTjdISGhVbmhjbGtPSF84alJicUlkY3Z3RWl6TC0tdVJFN0hVR3hBdUVHZnF2YzhzT1BMS1VZaTY5OFgwZmlDN1UwVTNDMWxLeHBBVTJDc3Z6R3lOZFJ1cFV2ZHB6dF9hMjV4TUFYYkt3T0dFR0t1ZnU3RDBtakd6ZHQ5RXNVQ3RXdFk2dV82Y0xGOFFWZV9vMGk0YW0zd3FMVnFFcW5oQVdSQndrX1luanc?oc=5" },
  { id: "tiktok_new015", title: "TikTok Shop美区新规：6月起商家全额承担退货运费", content: "TikTok Shop美区宣布2026年6月起，商家需全额承担买家责任退货运费。此前平台承担部分运费，新规增加卖家成本。卖家需优化产品质量和描述，减少退货率，同时调整定价策略。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-20"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9HQkFaMEVLZ2w5WV82TlZqazRjUEoydHFScWxLV0k5ZHYydkZtdWdKWTFkNkpRb1A0NkdhWGpFeFBHaEJsdlBfa0NDXzM2NzRFZ3lYbzRB?oc=5" },
  { id: "joybuy_new001", title: "京东与万事达达成战略合作，通过支付创新支持业务增长", content: "京东与万事达宣布建立战略合作伙伴关系，旨在通过支付创新推动业务增长。合作将整合万事达的全球支付网络与京东的电商生态，为消费者提供更便捷的支付体验，同时帮助京东拓展国际市场。此举可能涉及跨境支付优化，降低交易成本，提升用户转化率。对卖家而言，支付方式的多样化有助于提高订单完成率，尤其是在海外市场。", source: "JD Corporate Blog", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-06-08"), url: "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPZlowN1hPMGRXUE9PQ1QyNTQ3aXlLRVB5Y0NjSENoS3FMUDlJY2RibV8wZ1dEcUx3Rk5nREVnQ3hhUnJYaHhTTURBV1hmLWtXTVFRbFBmejRoMlJUSkxFY3dhSmRUUU8wSHdOdGFYVnM3enpsaXNScnJxcjUzRmN0alpTODdySWlnMVQtZ01JOVk0QXpEX3JUTlpBNkdrT0VXOWM2MVhaemNBT01iTjFqWlN3YVNFNkFPSDM4ZkVzYklIM2JDZEMyWjFxc19uci1lV0E?oc=5" },
  { id: "joybuy_new002", title: "京东物流获里昂证券上调目标价至17.8港元，首季业绩超预期", content: "里昂证券发布报告，将京东物流目标价从15.5港元上调至17.8港元，维持买入评级。报告指出，京东物流2025年第一季度业绩超出预期，主要得益于供应链解决方案收入增长和成本优化。京东物流持续拓展外部客户，并加强自动化仓储建设，提升履约效率。对卖家而言，京东物流的稳定表现意味着更可靠的物流服务，尤其是在欧洲Joybuy平台上线后，物流能力将成为关键竞争力。", source: "AASTOCKS.com", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-06-08"), url: "https://news.google.com/rss/articles/CBMib0FVX3lxTE5kWHNlR0cySnVoeFNEV0p6OTlySHV1MDdyS25qT0lqdkZHNFJWMmxMTll5bFRROGRqLTBJUUdZM1ZqM3VIbWR2bHUyQVJ1M3NGMTJxbkcyb3k1bUtrenJlbTZycjFtQ2ZGS0tRR0tXZw?oc=5" },
  { id: "joybuy_new003", title: "京东物流、AI及平台增长有望推动估值重估，分析师看好", content: "Seeking Alpha分析文章指出，京东物流、人工智能技术以及平台业务增长有望推动京东估值重估。京东物流持续扩大外部客户，AI技术应用于供应链优化和用户体验提升，同时Joybuy欧洲站即将上线，进一步拓展国际市场。分析师认为，这些因素将提升京东的盈利能力和市场竞争力。对卖家而言，京东的技术和物流投入将带来更高效的运营支持。", source: "Seeking Alpha", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-06-08"), url: "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQNGw2V3dDd3I5TEhZOC1FNUFLX0xqNklsb1JyeUpyeVRSNm9NYnJtUGlLbWREaUVSdkY0S2dYT09vaXpVQ051SXIwb2hlVzJtTnAzS0NLa01qa0tEaUxGVU1fTU1hRnl1ZjJ2b3owVThaVUgwVWtpY0VSYVNJbC1GcTIwTGZWbFZOQWw4QnY1R0t5anNoYWxhZVliZ3lZRkRZVm51UE1yMFZTZw?oc=5" },
  { id: "joybuy_new004", title: "京东欧洲版即将上线，刘强东时隔十年重返欧洲市场", content: "据新浪财经报道，京东计划在欧洲推出新电商平台Joybuy，这标志着刘强东时隔十年后重返欧洲市场。Joybuy将依托京东物流的海外仓网络和供应链能力，提供本地化服务。此前京东已在欧洲布局物流基础设施，此次平台上线将直接与Temu、SHEIN等竞争。对卖家而言，Joybuy可能提供低门槛入驻和物流支持，是拓展欧洲市场的新渠道。", source: "新浪财经", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-06-08"), url: "https://news.google.com/rss/articles/CBMigwJBVV95cUxOOWhhRHpKSXZQZkZkMWF3WHlBcmpVYml3MWVpLUM5ZXZJS25zRlBYYUVtZzAwTlJXSFZicU5LWEpLNEt3VHF2QjY1TkdDUS1Lal9oNTZyMmZBVG9acVJnOU1mbHFOZzFObTQzb0lOOTFaQWVFOVpkbFhiZW84YzZaejFLS1RWTVFNWmJYNFRuRlRqb2QyU3ZsU2FWQTZ4dzVuaDY3OWZEbkNsVmRGMmVvS2dTUmpfS2RLaC1jb3Q0NzY0d0RUaVRTa2E3Mm5HMXYwcjZIb05zNlFsTGpDT25DVUM2YWlVMGhmbnJYU3B5aG54Nm9nNldxbXk2ODd4eS04bDAw?oc=5" },
  { id: "joybuy_new005", title: "京东依赖服务增长和Joybuy欧洲站支撑利润率", content: "Yahoo Finance报道指出，京东正依靠服务业务增长和即将推出的Joybuy欧洲站来支撑利润率。服务业务包括物流、广告和技术服务，利润率高于自营零售。Joybuy欧洲站将采用轻资产模式，吸引第三方卖家入驻，降低库存风险。京东计划通过Joybuy拓展欧洲市场，与Temu和SHEIN竞争。对卖家而言，Joybuy可能提供较低的佣金和物流补贴，是进入欧洲市场的机会。", source: "Yahoo Finance", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-06-08"), url: "https://news.google.com/rss/articles/CBMioAFBVV95cUxNbHN5a1k0YmtYMlhSRjVyTVZQVGJSRnVOajZJZGFuSzRydko5dnRwY0dXTDRsT1pZZVp6R05tdUhYb0VkWkRpLXRYaXRwOEx3NzdwNmNuRkdUMEl2MERjR28zaEQ3OUstOVhvT0VycjRKcV9XQ0t0Z1FtSWRpWnd0aGVqVUJXM0pBOUtRR0Z6Z1VBTGF4Vy01REJVMjlVMkJI?oc=5" },
  { id: "tiktok_new006", title: "TikTok Shop美区直播拍卖已有商家抢先获利，平台全面发力", content: "TikTok Shop在美国市场的直播拍卖功能已吸引部分商家抢先获利，平台计划全面发力该模式。直播拍卖允许卖家实时展示商品并接受竞价，适合收藏品、二手奢侈品等品类。TikTok Shop提供流量扶持和拍卖工具，商家反馈转化率高于常规直播。对卖家而言，直播拍卖是差异化竞争手段，但需具备专业直播能力和供应链支持。", source: "中华网科技", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-08"), url: "https://news.google.com/rss/articles/CBMibkFVX3lxTE5WLXViWHdDZlNJeE1NV0hBQ0V1am5IZk9hUnI0ZTRIZ0IwOHduRGhHN1gyRmJ3RFFuRTREbVZBcXRNZGYxT3pUR3VsRHJsYllLdkVjWlN0RTZPMU8xQVNMRzZ2R2JMX3U4UTRWUWtR?oc=5" },
  { id: "tiktok_new007", title: "TikTok Shop美区调整退货规则，商家成本增加", content: "TikTok Shop美国市场调整退货规则，自2026年6月起，因买家原因产生的退货运费将全部由商家承担。此前，买家责任退货通常由买家支付运费。新规旨在提升购物体验，但直接增加了商家的运营成本。卖家需优化产品描述、图片和质检流程以减少退货，或考虑购买退货保险。同时，平台可能推出运费补贴政策以缓解商家压力。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-08"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9HQkFaMEVLZ2w5WV82TlZqazRjUEoydHFScWxLV0k5ZHYydkZtdWdKWTFkNkpRb1A0NkdhWGpFeFBHaEJsdlBfa0NDXzM2NzRFZ3lYbzRB?oc=5" },
  { id: "tiktok_new008", title: "TikTok Shop推出成长服务，帮助有货但不会运营的卖家提升GMV", content: "TikTok Shop推出商家成长服务，针对有货源但缺乏运营能力的卖家，提供从账号搭建、内容创作到广告投放的全托管服务。该服务承诺帮助卖家提升GMV，并可能按效果收费。首批面向美国市场跨境卖家。对中小卖家而言，该服务降低了运营门槛，但需注意服务费用和合同条款。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-06-08"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1PUFpaSExDLXY1V2FpWGs2SklXUkZObHJsaFJrU25xWS1jSG9xbVY1TU02LUQ3c28yU09fOWw1c1pBdUhxWlJWRFotYk4?oc=5" },
  { id: "temu_new009", title: "Temu保姆级攻略：从入驻到运营到Y2物流最全干货", content: "搜狐网发布Temu运营攻略，详细介绍了从商家入驻、选品上架到Y2半托管物流模式的完整流程。Y2模式允许卖家从国内直发，无需海外仓，履约时效约15-21天。攻略还涵盖了定价策略、广告投放和合规要求。对新手卖家而言，该攻略提供了实操指导，但需注意Temu平台规则频繁更新。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-08"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTFBwY2F3cUVwWnRXUTBrUVRtcUZDSDdVS0Jzblc1cENHckpCX2RFSkRWWWVsZzFnWGZfR0hKUDF6c0JIVjI2dUdVRFNZREZIdkxt?oc=5" },
  { id: "temu_new010", title: "Temu欧盟上线Y2模式：税务与合规全景解析", content: "Temu在欧盟27国正式上线Y2半托管模式，允许中国卖家从国内直接发货，无需海外仓。文章详细解析了Y2模式下的税务和合规要求，包括增值税（VAT）代扣代缴、产品合规认证（如CE标志）以及数据隐私法规（GDPR）。卖家需确保产品符合欧盟标准，否则面临下架风险。Y2模式降低了库存压力，但物流时效较长（最长21天）。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-08"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE12ODdHSE9aZHplbHU0eUFieEFJVzV1OTlubnBrVWZGSXFlSWFtTEhxc3otaWo5YWZsYWQ3b3ZZRG1wVTVDNnoteEFlQkgyMkYy?oc=5" },
  { id: "temu_new011", title: "Temu因不正当商业行为被匈牙利竞争管理局重罚13亿福林", content: "匈牙利竞争管理局（GVH）对Temu处以13亿福林（约合350万欧元）罚款，原因是Temu存在不正当商业行为，包括误导性折扣、虚假库存信息以及不公平合同条款。消费者将获得统一现金补偿。Temu表示将调整运营以符合当地法规。此事件提醒卖家，Temu在欧洲面临监管压力，平台规则可能收紧，需关注合规风险。", source: "cnBeta.COM", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-08"), url: "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9uTm5jY3daRE81bUl3ZHlzQnRNbFpzMHRmWnVzVG5DVlpOcXFnWU9WNEdHVFFRdlV1Y2M4WlRhc2ZKd1hRUmI4ZnB1RHNqNTI0dmp2Sk9EVDFBV2dBaHVSRg?oc=5" },
  { id: "temu_new012", title: "Temu向卖家提供第三方测试和认证服务", content: "Temu宣布为卖家提供第三方产品测试和认证服务，帮助卖家确保商品符合美国、欧盟等市场的安全标准。服务涵盖电子、玩具、服装等品类，卖家可通过平台直接预约检测，费用由Temu补贴部分。此举旨在提升平台商品质量，减少合规风险。对卖家而言，可降低认证成本，但需注意检测周期可能影响上架速度。", source: "Chain Store Age", type: "press", platform: "temu", dimension: "", date: new Date("2025-06-08"), url: "https://news.google.com/rss/articles/CBMilwFBVV95cUxOYlVwNEpZRFFWd29mNWlZaGdobDZ5VkwyazFfSUNfM3Y0Z2ZyXzRvRHliOHBncERmU1lhUU5BTDJKdUhyVFRhRnl1TlVVUlRvZ3ZWcEZRODF4YmdvamhfbGp5d3R4cFFwYnpaaGRoMW1tbFpXV1JvRWR3LXJjSUFaVTVXcGg4QW9wMHJWNHNBODZ6Mm5tLWRz?oc=5" },
  { id: "shein_new013", title: "SHEIN遭头部货代索赔2.9亿，对赌失败被封杀", content: "据雨果跨境报道，一家头部货代因与SHEIN对赌失败，被SHEIN封杀并索赔2.9亿元人民币。该货代曾为SHEIN提供物流服务，但因未达到约定的KPI（如时效、成本控制），触发对赌条款。此事件反映SHEIN对物流合作伙伴要求严苛，卖家在选择物流商时需谨慎评估其与SHEIN的合作关系。同时，SHEIN可能进一步收紧物流合作标准。", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2025-06-08"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9vaENKU29qaXV6ck1weE9ZWm5oeXJNcncyTWp3UTBIM0NNTzB5ZjF2Q1dVN2VwaHdKX21IVVlRdkV5YmxLajFuWTF4OFE?oc=5" },
  { id: "tiktok_new001", title: "TikTok Shop美区退货规则调整：2026年起商家全额承担退货运费", content: "TikTok Shop美区发布新规，自2026年6月起，买家责任退货运费将全部由商家承担。此前运费由平台补贴或买家承担，新规旨在减少平台成本，但将增加卖家负担。商家需评估退货率影响，优化产品描述和质检流程，或通过提高售价分摊成本。该政策适用于所有美区跨境卖家。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBiQW9xdldPOXhiVFJDRjhMQWVpeVEwY0VDMEdqV29ZT2YtWnVGaEFyM2Y4emkzZTlIeHV0WXMtM1pnMEZqaVpDMXd4T0pwNWU4bUhhdU5R?oc=5" },
  { id: "tiktok_new002", title: "TikTok GO本地生活服务在美国上线，Booking.com和Expedia首批入驻", content: "TikTok GO在美国推出本地生活服务，首批入驻合作伙伴包括Booking.com和Expedia，用户可通过TikTok直接预订酒店、旅游等服务。此举拓展了TikTok的电商生态，从实物商品延伸至服务类目。对跨境卖家而言，可探索与本地生活相关的商品或服务联动，但需注意合规要求。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1QMkQ1T0pRbmtiSGRMZVZXdlp4cnBQbXpvWGs2QkEyMmtsWmYyUC10MVFycFVLaXpZdzY0NDFrS3Y0aUNqRTZuR2FWdTFZWWFHTFBHeWV3?oc=5" },
  { id: "tiktok_new003", title: "TikTok发布全新AI广告解决方案，覆盖全营销链路", content: "TikTok推出系列AI广告工具，覆盖从创意生成、定向投放到效果优化的全链路，包括AI生成视频、智能出价、自动受众扩展等功能。该方案旨在提升广告ROI，降低卖家投放门槛。美区卖家可优先试用，预计将提高广告竞争度，建议尽早测试以获取流量红利。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE0yaDcwd3RrQ21vVGE3dmo0Z2NQVHVPbVpJWHhLa1NMcDg2UjZiY2x1eXBnbHNNSElocnhnbE83RDNEczJjYVBQTU1GOVhrMUVtemVlTnZB?oc=5" },
  { id: "temu_new004", title: "Temu推出Y2半托管模式，走与Shein截然相反的路", content: "Temu正在测试Y2半托管模式，允许卖家自行管理物流和库存，平台仅提供流量和交易支持，与Shein的全托管模式形成差异。该模式旨在吸引有物流能力的成熟卖家，降低平台履约成本。首批开放美国市场，卖家需具备海外仓或自发货能力，适合有供应链优势的商家。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBvUFprSFIySERFM2hYdU9tMlNKSV8xVkZjUlM0OGxxRWo2NzBEeW8yQlhCLWtHUWtyRWFkMl9KVGpkZ2swVWRhcDlPWkc?oc=5" },
  { id: "shein_new005", title: "Shein遭头部货代索赔2.9亿，对赌失败引发供应链震荡", content: "一家头部货代因与Shein对赌失败被索赔2.9亿元，Shein已封杀该货代。事件暴露Shein对物流合作伙伴的严格考核机制，要求时效和成本达标。对卖家而言，需关注物流商稳定性，避免因合作方问题影响发货。同时Shein可能加强物流管控，卖家应提前备选方案。", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9vaENKU29qaXV6ck1weE9ZWm5oeXJNcncyTWp3UTBIM0NNTzB5ZjF2Q1dVN2VwaHdKX21IVVlRdkV5YmxLajFuWTF4OFE?oc=5" },
  { id: "shein_new006", title: "Shein与THG Fulfil合作，提升英国市场卖家物流服务", content: "Shein与英国物流公司THG Fulfil达成合作，为英国市场卖家提供仓储、配送等履约服务，旨在提升本地化物流体验。该合作将帮助Shein卖家缩短配送时效、降低退货成本。对英国站卖家而言，可借助THG Fulfil的本地仓实现更快交付，建议评估合作条款以优化成本。", source: "Retail Gazette", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMitwFBVV95cUxNY2V1MTBZMjNfbFNRZkZzLU9uN1lDeGduVFVIeHhpSkU4RGdHUWRISnZUNGVfQl8xbFVNNzFZRG5wa1FISUYwenVzSjJiWmhObFVWd1RwYk13N2gwQTdKSTlHVTJlazAwYml5WE15SzMzdzZYeVoyQTYtb0J4SWk2aVFuQlJHQXJublFkSVZSTHM4a3F4aV9zeUNDek5KOFAzemx6ZWFLSlhDSzNmSUlzUHZNMU44amM?oc=5" },
  { id: "shein_new007", title: "Shein在供应链工资问题上受到审查，平台回应称已改善", content: "Shein因供应链工资问题受到媒体和监管关注，平台回应称已提高供应商工人工资并加强审计。该事件可能影响Shein在欧美市场的品牌形象，卖家需确保自身供应链合规，避免因劳工问题被牵连。建议卖家选择有认证的供应商，并保留合规记录。", source: "Ecotextile News", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOd21Zb0VydUZjTHFOOXRhLXhBNENGVTBoTkN0ZTZoSFNFejFaekxxT1dreGtkWU02U3MxZnBFa3NhZDZObW5RVG1mQkU5b1hCWGR0NFVNYXlZajB3LVptSE5uWVk0YUZnWGdQeXU5Tm9PR0dEOG1CUGFBYldjdF9zUFdpNzlIU3VLM1dEUlgxemxydmFPWnp2bzBuY3V6Slo5dXh1U2lXXzVCcVhqRzV5MWM2OXZTNUx5?oc=5" },
  { id: "shein_new008", title: "Shein和Temu在英国庭审中互相指责，供应链问题成焦点", content: "Shein与Temu在英国法庭上互相指控，涉及供应链违规、知识产权等问题。庭审暴露两家平台在合规方面的竞争压力，可能影响其英国市场策略。对卖家而言，需关注平台合规要求变化，避免因平台纠纷导致店铺受限。建议同时布局多平台以分散风险。", source: "Bloomberg.com", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMirwFBVV95cUxNbHItUXBmTm1lUTNETlNjcm9vLXNJeDNnZm5JcWtJVkdzVkZIWFVOZnFpc2t4WjVRYTVaaEtwZXdNR3ZzcGdVeTFfREtIa0pMbnFlRUtiX3hoR2N0a2E0QkM5MklnRHpCMzJCSC1DNXV2TzJKY3hYQ3I3aWVpUmI3MmhheWw5aEVKblhXWkl3c3Y3YnE2ck9hNHYxWTRqaWw1V091c0FVMWNyTWpBdVl3?oc=5" },
  { id: "joybuy_new009", title: "京东物流目标价升至17.8港元，里昂给予“跑赢大市”评级", content: "里昂证券将京东物流目标价从16.5港元上调至17.8港元，维持“跑赢大市”评级，主要基于首季业绩超预期及物流效率提升。京东物流在海外仓、自动化方面持续投入，利好跨境卖家。卖家可关注京东物流的海外仓服务，降低履约成本。", source: "Sina finance", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMilgFBVV95cUxPVmRRd1lVUzRRaVp2T3YxdGZoa2xDeElvTTdvNWhmZUwwT0cxVkt3SVpWQ0thVzQ1UC1TYU8yemJfczNyT1dyTllrcDVwVDVESldJcV9yUEFaZFBoemJ4RHpDMXZndFpoZUM3bU8yUGx2Vm5hdWREaEJPRml5dDVZQXhFM1diSzd2SnlPejl6eDgxTkRzWHc?oc=5" },
  { id: "joybuy_new010", title: "京东物流、AI和平台增长有望推动估值重估", content: "Seeking Alpha分析指出，京东物流的扩张、AI技术应用及平台业务增长将推动估值重估。京东物流在海外仓和自动化方面持续投入，AI优化供应链效率。对卖家而言，京东物流的海外仓服务可提升配送时效，适合高价值、大件商品。", source: "Seeking Alpha", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQNGw2V3dDd3I5TEhZOC1FNUFLX0xqNklsb1JyeUpyeVRSNm9NYnJtUGlLbWREaUVSdkY0S2dYT09vaXpVQ051SXIwb2hlVzJtTnAzS0NLa01qa0tEaUxGVU1fTU1hRnl1ZjJ2b3owVThaVUgwVWtpY0VSYVNJbC1GcTIwTGZWbFZOQWw4QnY1R0t5anNoYWxhZVliZ3lZRkRZVm51UE1yMFZTZw?oc=5" },
  { id: "temu_new011", title: "394家店铺被告！亚马逊、Temu卖家需紧急自查", content: "近期394家亚马逊和Temu店铺因侵权、售假等问题被起诉，涉及商标、专利等知识产权。平台加强执法，卖家需立即自查产品合规性，避免使用未授权品牌图片或关键词。建议注册自有商标、购买知识产权保险，并保留供应商授权文件。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE13bndVaVl2b0xDS1RNSlBwSnhDeXh0U0o3RjdlaEw1VE1PQW9jRi1aTENDYWtuUGxDREVVVEtxeEEzUktpcTRIYmRwODI?oc=5" },
  { id: "temu_new001", title: "Temu改革Y2模式走与Shein相反路线，中国卖家可国内直发", content: "Temu正在推进Y2模式改革，走与Shein截然相反的道路。Y2模式允许中国卖家从国内直接发货，无需海外仓备货，履约时效最长21天（备货8-12个工作日+运输3-9天）。平台提供末端配送和流量支持，主要面向中小卖家。此举旨在降低卖家库存和资金压力，同时扩大商品丰富度。与Shein的本地化备货模式形成鲜明对比，Temu试图通过轻资产模式快速扩张。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBvUFprSFIySERFM2hYdU9tMlNKSV8xVkZjUlM0OGxxRWo2NzBEeW8yQlhCLWtHUWtyRWFkMl9KVGpkZ2swVWRhcDlPWkc?oc=5" },
  { id: "tiktok_new002", title: "TikTok Shop美区直播拍卖向中国多品类商家开放，对标Whatnot", content: "TikTok Shop在美国市场正式开放直播拍卖功能，面向中国多品类商家，包括收藏品、二手奢侈品、艺术品等。该模式对标美国直播拍卖平台Whatnot，允许卖家在直播间实时竞拍商品。TikTok提供流量扶持和工具支持，已有商家抢先获利。此举旨在丰富平台内容生态，提升用户粘性和交易额。卖家需注意合规要求，避免侵权和虚假宣传。", source: "手机新浪网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMi6gFBVV95cUxQeVJOVG9YdnJONTRoUllsbUlRaE1JQ1JhVGxKYjFJQnFiTnM0U0lNMDZMMzFrVEV5WWFGcDk0aElGTjdISGhVbmhjbGtPSF84alJicUlkY3Z3RWl6TC0tdVJFN0hVR3hBdUVHZnF2YzhzT1BMS1VZaTY5OFgwZmlDN1UwVTNDMWxLeHBBVTJDc3Z6R3lOZFJ1cFV2ZHB6dF9hMjV4TUFYYkt3T0dFR0t1ZnU3RDBtakd6ZHQ5RXNVQ3RXdFk2dV82Y0xGOFFWZV9vMGk0YW0zd3FMVnFFcW5oQVdSQndrX1luanc?oc=5" },
  { id: "tiktok_new003", title: "TikTok Shop美区退货新规：2026年起买家责任运费商家全额承担", content: "TikTok Shop美国站发布新规，自2026年1月1日起，因买家原因产生的退货运费将全部由商家承担。此前，买家责任退货通常由买家支付运费或平台补贴。新规将增加卖家运营成本，尤其是高退货率品类。卖家需优化产品质量和描述，减少退货率，同时考虑调整定价策略。该政策与亚马逊等平台的退货政策趋同，旨在提升买家体验。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMiRkFVX3lxTFBfZ3Ywbl9VZVExLVRNbDhXcnl4SlpSVFhZR21VdjhRb3ZRbXFpQllDZk00XzFHT1lvQlhVYTFfd3BQNkhpR3c?oc=5" },
  { id: "temu_new004", title: "Temu Y2模式全解析：中国跨境卖家新机遇，国内直发免海外仓", content: "Temu Y2模式允许中国卖家从国内直接发货至欧美消费者，无需提前备货至海外仓。该模式履约时效为8-12个工作日备货+3-9天运输，最长21天。平台提供末端配送和流量支持，适合中小卖家测试市场。Y2模式降低了库存风险，但要求卖家具备快速响应和物流管理能力。目前该模式已在欧盟27国上线，未来可能扩展至美国。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE5hZVJxcUhVM0szLUo2QnVkUW9TN2dVeEhfaXNPd0ZaWFUtV3c3WWhQcmcxQWpVYUNjaGhTTTVicUhiSUlzU1A4VndDUUpOQ3ls?oc=5" },
  { id: "tiktok_new005", title: "TikTok Shop美区运费政策调整：6月起卖家或全额承担运费", content: "TikTok Shop美国站运费政策面临调整，有消息称从2025年6月起，平台可能将运费全部转嫁给卖家。此前TikTok Shop已连续两个月上调运费，卖家成本持续攀升。若政策落地，卖家需重新评估物流成本，可能转向使用TikTok官方物流FBT或优化包装重量。该政策旨在提升平台盈利能力，但可能引发中小卖家不满。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9vbWJxMEptcHFmR3Q1RUdXRFBhaDRQRFhUeElOVjA2dWVpMnEzMHdOY1FzaGkwZ1FiRnIzYkJGQThwRTdWcW9NQU9RTkQ?oc=5" },
  { id: "tiktok_new006", title: "TikTok Shop美区调整退货规则，2026年商家全额承担退货运费", content: "TikTok Shop美国站正式调整退货规则，自2026年6月起，因买家原因产生的退货运费将由商家全额承担。此前，买家责任退货费用由买家或平台承担。新规适用于所有跨境卖家，预计将增加卖家运营成本。建议卖家优化产品描述和质检流程，降低退货率，同时考虑将运费成本纳入定价。该政策与亚马逊FBA退货政策类似。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9HQkFaMEVLZ2w5WV82TlZqazRjUEoydHFScWxLV0k5ZHYydkZtdWdKWTFkNkpRb1A0NkdhWGpFeFBHaEJsdlBfa0NDXzM2NzRFZ3lYbzRB?oc=5" },
  { id: "tiktok_new007", title: "TikTok Shop东南亚推出亿元直通车，每月最高1.5万美元货补", content: "TikTok Shop东南亚市场推出“亿元直通车”计划，招募大卖入驻，每月最高提供1.5万美元货补。该计划旨在吸引头部卖家，提升平台商品丰富度和GMV。虽然主要针对东南亚，但可能影响卖家资源分配，间接影响美国市场。卖家需评估自身能力，抓住补贴机会，同时注意合规要求。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5jSkMwQmVwclpUbXNrUjU2Z2ZOeHFhMjhnZF9yNFJ5OGpPSHJYSk5FeENsNndSTzI2N05qSUtXd3J4Q1ZsMWRiUDJrcHF3YTR2TWdZaE5R?oc=5" },
  { id: "shein_new008", title: "SHEIN与Temu在英对簿公堂，供应链问题成焦点", content: "SHEIN和Temu在英国法院展开法律交锋，双方互相指控供应链违规。SHEIN指责Temu销售假冒商品，Temu则反击SHEIN垄断供应商。该诉讼凸显两大平台在供应链合规上的竞争。对卖家而言，需确保供应链透明，避免卷入纠纷。英国市场对知识产权保护严格，卖家应加强自查。", source: "Bloomberg.com", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMirwFBVV95cUxNbHItUXBmTm1lUTNETlNjcm9vLXNJeDNnZm5JcWtJVkdzVkZIWFVOZnFpc2t4WjVRYTVaaEtwZXdNR3ZzcGdVeTFfREtIa0pMbnFlRUtiX3hoR2N0a2E0QkM5MklnRHpCMzJCSC1DNXV2TzJKY3hYQ3I3aWVpUmI3MmhheWw5aEVKblhXWkl3c3Y3YnE2ck9hNHYxWTRqaWw1V091c0FVMWNyTWpBdVl3?oc=5" },
  { id: "shein_new009", title: "SHEIN面临爱尔兰DPC调查，聚焦欧盟用户数据跨境传输", content: "爱尔兰数据保护委员会（DPC）对SHEIN展开调查，重点关注其将欧盟用户数据传输至中国的合规性。SHEIN在爱尔兰设有欧洲总部，需遵守GDPR。若违规，可能面临巨额罚款。该调查影响SHEIN在欧洲的运营，卖家需关注数据合规要求，确保自身业务符合GDPR。", source: "安全内参", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1CUHlZTThCWnZRb1BOcDAyZE9GTmJRTks5dW1FS3VDemFuY21veFBVaW5GZGpRLURnb3ZtaG5TLWJ5RUdwMWFiQ24xa0kyZw?oc=5" },
  { id: "tiktok_new010", title: "TikTok Shop美区发布新规：买家责任退货运费改由商家全额承担", content: "TikTok Shop美国站正式发布新规，自2026年6月起，因买家原因产生的退货运费将全部由商家承担。此前，该费用由买家或平台承担。新规适用于所有跨境卖家，预计将增加运营成本。卖家需优化产品描述和质检，降低退货率，同时考虑调整定价。该政策与亚马逊FBA退货政策一致，旨在提升买家体验。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBiQW9xdldPOXhiVFJDRjhMQWVpeVEwY0VDMEdqV29ZT2YtWnVGaEFyM2Y4emkzZTlIeHV0WXMtM1pnMEZqaVpDMXd4T0pwNWU4bUhhdU5R?oc=5" },
  { id: "tiktok_new011", title: "TikTok Shop推出跨境POP商家成长服务，一价全包未达承诺可赔偿", content: "TikTok Shop发布跨境POP商家成长服务计划，提供一价全包服务，包括运营指导、流量扶持、物流优惠等。若未达到承诺的GMV增长，平台将给予赔偿。该计划旨在吸引更多跨境卖家入驻，尤其是缺乏运营经验的商家。卖家需评估自身需求，抓住机会提升销量。", source: "新浪财经", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMif0FVX3lxTE9BNVNSNUJHb2thaDIzSjRlSTlHUHI3ZjgxZk54U3gtWnhWQU1XVGtGUW9neVlzZTJOazZ0Sm1vMDE0TFkxVEpza1JRdXFuRlFRa3VDaFh6dUFNRlhMNUtieDR4MHBES2ZVdGRhTXY0SlJMX0lHMDBGTXhncGlRclE?oc=5" },
  { id: "aliexpress_new012", title: "速卖通发布POP商家长效经营指南，迎接欧盟合规新政", content: "速卖通发布POP商家长效经营指南，帮助卖家应对欧盟合规新政，包括GPSR、数字服务法案等。指南涵盖产品合规、税务、物流等方面，并提供升级权益，如优先审核、流量扶持等。卖家需尽快熟悉新规，确保产品符合欧盟标准，避免下架风险。", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE5NSG52WmR0d1BQOHYzVDhrZHNJNmNNVVV0WGJoYmYzUGRkZUJTbmxjMk1yLUV5aFZidWZybHZjWjFkNEZ0U1NQQlJoeks?oc=5" },
  { id: "shein_new013", title: "SHEIN峰会与亚马逊春耕大会同步亮相，锦联国际提供跨境物流方案", content: "锦联国际在SHEIN峰会和亚马逊春耕大会上同步亮相，提供跨境物流一站式解决方案。该方案涵盖头程运输、海外仓、尾程配送等，帮助卖家降低物流成本。随着SHEIN和亚马逊对物流效率要求提高，卖家需选择可靠的物流合作伙伴。", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE11d2trZGtaUVh0ZTN2akpTTzJRbUR1UjVsVWJtSEJCekVSU2RpV2VKcWZaYlRYVUxmZC1pUVNveXgtc2tKdkhNQS1FSF8?oc=5" },
  { id: "joybuy_new014", title: "京东物流目标价升至17.8港元，首季业绩胜预期", content: "里昂证券将京东物流目标价上调至17.8港元，给予“跑赢大市”评级，原因是首季业绩超预期。京东物流在跨境物流领域持续布局，为京东国际和第三方卖家提供一体化服务。卖家可关注京东物流的海外仓和配送能力，作为备选物流方案。", source: "Sina finance", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-05-27"), url: "https://news.google.com/rss/articles/CBMilgFBVV95cUxPVmRRd1lVUzRRaVp2T3YxdGZoa2xDeElvTTdvNWhmZUwwT0cxVkt3SVpWQ0thVzQ1UC1TYU8yemJfczNyT1dyTllrcDVwVDVESldJcV9yUEFaZFBoemJ4RHpDMXZndFpoZUM3bU8yUGx2Vm5hdWREaEJPRml5dDVZQXhFM1diSzd2SnlPejl6eDgxTkRzWHc?oc=5" },
  { id: "tiktok_new001", title: "TikTok Shop美区6月起商家全额承担买家责任退货运费", content: "TikTok Shop美区发布新规，自2026年6月起，买家责任退货运费将改由商家全额承担。此前该费用由平台或买家承担，新规将增加商家运营成本。商家需优化产品质量和描述以减少退货率，同时调整定价策略。该政策适用于所有美区跨境卖家，预计将影响退货率较高的品类如服装、电子配件等。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-14"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBiQW9xdldPOXhiVFJDRjhMQWVpeVEwY0VDMEdqV29ZT2YtWnVGaEFyM2Y4emkzZTlIeHV0WXMtM1pnMEZqaVpDMXd4T0pwNWU4bUhhdU5R?oc=5" },
  { id: "tiktok_new002", title: "TikTok Shop美区调整退货规则，商家成本上升", content: "TikTok Shop美区宣布调整退货规则，自2026年6月起，买家责任退货运费由商家全额承担。此前平台承担部分费用，新规旨在减少滥用退货政策。商家需关注退货率管理，建议优化产品页面和客服流程。该政策影响所有美区跨境卖家，尤其是高退货率品类。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-14"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBkRFB5VU03cjNmTTZHdzN4d25sbmpXZl9RR0hxRVE2WWt6UkVTNFg3Y05MNmx4VmFDVnEtUkRaZXo2NHpoNXFCci1XWmducENIMVJ5eWd3?oc=5" },
  { id: "tiktok_new003", title: "TikTok Shop发布跨境POP商家成长服务计划，一价全包", content: "TikTok Shop推出跨境POP商家成长服务计划，提供一价全包服务，包括运营指导、流量支持和物流优惠。若未达承诺GMV增长，商家可获赔偿。该计划面向美区跨境卖家，旨在降低运营门槛，提升商家留存率。", source: "新浪财经", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-14"), url: "https://news.google.com/rss/articles/CBMif0FVX3lxTE9BNVNSNUJHb2thaDIzSjRlSTlHUHI3ZjgxZk54U3gtWnhWQU1XVGtGUW9neVlzZTJOazZ0Sm1vMDE0TFkxVEpza1JRdXFuRlFRa3VDaFh6dUFNRlhMNUtieDR4MHBES2ZVdGRhTXY0SlJMX0lHMDBGTXhncGlRclE?oc=5" },
  { id: "temu_new004", title: "Temu Y2模式全解析：中国跨境新机遇", content: "Temu推出Y2半托管履约模式，允许中国卖家从国内直接发货至欧盟消费者，无需海外仓备货。履约时效最长21天，平台提供末端配送和流量支持。该模式降低库存风险，适合中小卖家试水欧洲市场。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-14"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE5hZVJxcUhVM0szLUo2QnVkUW9TN2dVeEhfaXNPd0ZaWFUtV3c3WWhQcmcxQWpVYUNjaGhTTTVicUhiSUlzU1A4VndDUUpOQ3ls?oc=5" },
  { id: "temu_new005", title: "Temu本地卖家计划2026更新：支持区域市场销售", content: "Temu更新本地卖家计划，允许卖家从本地仓库发货并拓展至区域市场。该计划旨在提升履约速度和降低跨境物流成本。卖家需在目标市场有库存，平台提供流量倾斜。", source: "Digital Commerce 360", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-14"), url: "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQV0tUbnN5Y1FkbHhqNU1QbDZfNVNlRG9YWHZERWpJdjM3YXJNS0h3YUJkdG10aVRBYVdDMEZMQ1BJamx6Qm5KSVRMNzUycVA2NGNwMTNSdHFSNGlfQVNSaVNCQjJvNlNfR2tQclBaa2FtbFRCS3F0UnlKRTN4YXlkb3Q3LU5aQnc1THUtX2FqQTk4TnhHaHJac2FwZkw0aHQ0UWp6YU1vc3NuaTZsNUFiblFZaXZWQTZIcFUyVGt4Ny1CZFg2NkhrV1lKLWJIY3JxZlVycNIB2gFBVV95cUxNMU1ObVVoWUNqeGM5RTU3MEFsbjlZWFlxYkkzejl2VThOU2dXek1oM3YxZ1F4WnMyLXFoZnpkeUlKU0tXd3Uya2poakxxLU55WnZkaVlfdlJCN2dqOWExZGR0UHVfbFVRNGVmN2o3VzZ6TjRqVTc3QzN3bHJpWHZwdm1qR3dNUXg2dVlzMVBIcXBUZno4UmZodzlXZDcxUmFTbjRMUU5LZjhFcF9qUzkzdDNTQUlSMlRGM0FOMmMxWTVqcWJlMUJqa0hOZWlyMG1lOXJjVmFFSUtoQQ?oc=5" },
  { id: "shein_new006", title: "SHEIN与DHL合作扩大可持续航空燃料战略，降低空运碳排放", content: "SHEIN与DHL签署协议，扩大可持续航空燃料（SAF）使用，以降低空运碳排放。此举是SHEIN应对环保审查的一部分，可能增加物流成本，但有助于提升品牌形象。卖家需关注供应链可持续性要求。", source: "ESG News", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-14"), url: "https://news.google.com/rss/articles/CBMikgFBVV95cUxOUmFVU0xSX2RJUldRTDhyUGxMSTlRenBIYUx4eDRoa1FrajluN3NlMmhlY0Jfa2Q0ODBsODNXMHM3Y0NVU2FxWEhqM3VKQlR6M1Iza29jT3FjZUFFWU9KZElSNFczWlY2ZXdyMVFuTjVVUlFUR0hxWnIxRjh2M0liS2piNVZFUjlFNDZvcTA2cDhLZw?oc=5" },
  { id: "shein_new007", title: "SHEIN遭爱尔兰DPC调查，聚焦欧盟用户数据跨境传输合规", content: "爱尔兰数据保护委员会（DPC）对SHEIN展开调查，重点审查其将欧盟用户数据传输至中国的合规性。若违规，SHEIN可能面临巨额罚款。卖家需关注数据保护要求，确保业务符合GDPR。", source: "安全内参", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-14"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1CUHlZTThCWnZRb1BOcDAyZE9GTmJRTks5dW1FS3VDemFuY21veFBVaW5GZGpRLURnb3ZtaG5TLWJ5RUdwMWFiQ24xa0kyZw?oc=5" },
  { id: "shein_new008", title: "SHEIN在供应链审查中强调工资水平", content: "SHEIN公开其供应链工资数据，以回应外界对劳工权益的质疑。公司声称已提高供应商工人工资，并加强审计。此举旨在改善品牌形象，但卖家需配合合规要求，确保工厂符合标准。", source: "Ecotextile News", type: "press", platform: "shein", dimension: "", date: new Date("2026-05-14"), url: "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOd21Zb0VydUZjTHFOOXRhLXhBNENGVTBoTkN0ZTZoSFNFejFaekxxT1dreGtkWU02U3MxZnBFa3NhZDZObW5RVG1mQkU5b1hCWGR0NFVNYXlZajB3LVptSE5uWVk0YUZnWGdQeXU5Tm9PR0dEOG1CUGFBYldjdF9zUFdpNzlIU3VLM1dEUlgxemxydmFPWnp2bzBuY3V6Slo5dXh1U2lXXzVCcVhqRzV5MWM2OXZTNUx5?oc=5" },
  { id: "joybuy_new009", title: "京东物流首季非国际财务报告准则利润增40%至10.5亿人民币", content: "京东物流2026年第一季度非国际财务报告准则利润同比增长40%，达10.5亿人民币。增长得益于物流效率提升和外部客户拓展。对跨境卖家而言，京东物流的海外仓服务可能成为备选方案。", source: "AASTOCKS.com", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-05-14"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxPQ3l3R05ORXUxWWlKQlVXN2dBQWZVdGRNU2JyY0pJZ2dadmtSNERma3c1Nm11TXZnNmxlV2RDQ2xXaFh0dWgxOE8wcDdGdEYta05ReHBCQzJTc1FTWnFLRlRKTWRjekszZk1ETjQxdk95Unh5SFU1eWdadG5SeThYRVBucm0?oc=5" },
  { id: "tiktok_new010", title: "TikTok Shop美区直播拍卖模式已有商家获利", content: "TikTok Shop美区全面发力直播拍卖模式，已有商家通过该模式实现高转化。直播拍卖结合限时抢购和互动，适合高客单价商品。卖家可尝试此模式，但需注意平台规则和退货风险。", source: "中华网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-05-14"), url: "https://news.google.com/rss/articles/CBMibEFVX3lxTE9fc1lMOER2QTJLUzlHai00RjYzRHd1YU5HOUVPckt6U0YwaW15ZlBmcTFyeG4tNWZQWTJpUXNwY25BbjNUWjJMUVVuX2lDalB3U2FxdFB6bS1uWFl6MzJDQkVNSEN2OXhuWVdWOQ?oc=5" },
  { id: "temu_new011", title: "Temu被匈牙利竞争管理局罚款13亿福林", content: "Temu因存在不当商业行为被匈牙利竞争管理局罚款13亿福林（约合350万欧元）。罚款涉及误导性促销和不公平条款。卖家需注意平台合规风险，避免因平台问题影响业务。", source: "xindb.com", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-14"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxNM1Y4ZXJCNnhMRmt6TmJ0UGpFTlVNWEFOR0NmTlJGZFQ0cTNCUHlsT1lQTDloRUktY1NncXd1VERiQ2xaN09ud2psTEc4dHNqQlRhT0FZbHpuaV9pb3lfSjRCdVdfLUJ0YUN3MDdKMkFGbzhfN2lBYUdmS1p5bjVNaVRPSm4?oc=5" },
  { id: "temu_new012", title: "394家店铺因侵权被告，亚马逊和Temu卖家需自查", content: "近期394家亚马逊和Temu店铺因销售侵权商品被起诉，涉及多个品类。平台加强知识产权执法，卖家需立即自查产品，避免使用未授权品牌或设计。建议注册品牌并获取授权。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-05-14"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE13bndVaVl2b0xDS1RNSlBwSnhDeXh0U0o3RjdlaEw1VE1PQW9jRi1aTENDYWtuUGxDREVVVEtxeEEzUktpcTRIYmRwODI?oc=5" },
  { id: "shein_new001", title: "Shein与Temu英国对簿公堂，供应链透明度成焦点", content: "Shein和Temu在英国法院展开法律交锋，案件聚焦于供应链透明度问题。Shein指控Temu存在不正当竞争行为，而Temu则反诉Shein。此次诉讼可能影响两家平台在英国市场的运营策略，尤其是供应链合规要求。卖家需关注自身供应链透明度，避免卷入类似纠纷。", source: "Bloomberg.com", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-28"), url: "https://news.google.com/rss/articles/CBMirwFBVV95cUxNbHItUXBmTm1lUTNETlNjcm9vLXNJeDNnZm5JcWtJVkdzVkZIWFVOZnFpc2t4WjVRYTVaaEtwZXdNR3ZzcGdVeTFfREtIa0pMbnFlRUtiX3hoR2N0a2E0QkM5MklnRHpCMzJCSC1DNXV2TzJKY3hYQ3I3aWVpUmI3MmhheWw5aEVKblhXWkl3c3Y3YnE2ck9hNHYxWTRqaWw1V091c0FVMWNyTWpBdVl3?oc=5" },
  { id: "tiktok_new002", title: "TikTok Shop美区新规：2026年6月起商家全额承担退货运费", content: "TikTok Shop美国市场发布新规，自2026年6月起，因买家原因产生的退货运费将改由商家全额承担。此前该费用由平台或买家承担。此举将增加卖家运营成本，尤其是高退货率品类。建议卖家优化产品质量和描述，减少退货率，并重新评估定价策略。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-28"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9HQkFaMEVLZ2w5WV82TlZqazRjUEoydHFScWxLV0k5ZHYydkZtdWdKWTFkNkpRb1A0NkdhWGpFeFBHaEJsdlBfa0NDXzM2NzRFZ3lYbzRB?oc=5" },
  { id: "tiktok_new003", title: "TikTok Shop美区调整退货规则，卖家成本上升", content: "TikTok Shop美国区调整退货规则，买家责任退货运费改由商家全额承担，新规将于2026年6月生效。此举旨在提升买家体验，但增加了卖家负担。卖家需关注退货率数据，优化商品质量，并考虑将运费成本纳入定价。同时，平台可能推出退货保险等增值服务。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-28"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBiQW9xdldPOXhiVFJDRjhMQWVpeVEwY0VDMEdqV29ZT2YtWnVGaEFyM2Y4emkzZTlIeHV0WXMtM1pnMEZqaVpDMXd4T0pwNWU4bUhhdU5R?oc=5" },
  { id: "tiktok_new004", title: "TikTok Shop推出跨境POP商家成长服务，一价全包未达承诺可赔", content: "TikTok Shop发布跨境POP商家成长服务计划，提供一价全包服务，包括运营指导、流量支持等，若未达承诺效果可获赔偿。该计划旨在帮助有货但缺乏运营能力的卖家提升GMV。卖家可借此降低试错成本，但需注意服务条款细节。", source: "新浪财经", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-28"), url: "https://news.google.com/rss/articles/CBMif0FVX3lxTE9BNVNSNUJHb2thaDIzSjRlSTlHUHI3ZjgxZk54U3gtWnhWQU1XVGtGUW9neVlzZTJOazZ0Sm1vMDE0TFkxVEpza1JRdXFuRlFRa3VDaFh6dUFNRlhMNUtieDR4MHBES2ZVdGRhTXY0SlJMX0lHMDBGTXhncGlRclE?oc=5" },
  { id: "joybuy_new005", title: "欧洲版京东即将上线，刘强东回归欧洲市场", content: "京东创始人刘强东时隔十年重返欧洲市场，计划推出欧洲版京东。京东将利用其强大的物流和供应链能力，在欧洲提供快速配送服务。此举可能改变欧洲电商格局，卖家可提前布局京东欧洲平台，享受其物流红利。", source: "新浪财经", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-05-28"), url: "https://news.google.com/rss/articles/CBMimgJBVV95cUxNZXNCdE5hU1NWYXdpTE53VDU1Ry1YdUdLY1VNWkFHeFBNX3d6b1BsWjg3bllrVEhqdGVJU3o0RDV1UERHcURsOFdRbklWQWRHVTV0OUY2a05QaHlwWFRkb1cwaVlpUmhiWDloUHptdEhjdXA2eFlzSk1UbUY2SUFsbE1RVDkxb0dTSlhwMEZJTFF1R3k3c2ROM1RpbEh5WmdoVjZrZFBGcGpkeTlOWi15WXFTT2FGNkJiVEVnemRxR3N0V3AzZDlsZnA5bTlpRDZBWmZtUTd1bHlCU29tcVE5VFVZeXl4alhkWFVxY1pxd3BEd0lVMmk3U1lPdHVld3pfQ294Y1N0Rm4zakFNb0F0eTBFWDN1Q3RYUkE?oc=5" },
  { id: "shein_new006", title: "Shein与THG Fulfil合作提升英国市场卖家服务", content: "Shein与英国履约服务商THG Fulfil合作，旨在提升其英国市场的卖家服务能力，包括仓储、配送和退货处理。此举有助于Shein在英国提供更快的配送和更好的买家体验。卖家可借助Shein的物流网络拓展英国市场。", source: "Retail Gazette", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-28"), url: "https://news.google.com/rss/articles/CBMitwFBVV95cUxNY2V1MTBZMjNfbFNRZkZzLU9uN1lDeGduVFVIeHhpSkU4RGdHUWRISnZUNGVfQl8xbFVNNzFZRG5wa1FISUYwenVzSjJiWmhObFVWd1RwYk13N2gwQTdKSTlHVTJlazAwYml5WE15SzMzdzZYeVoyQTYtb0J4SWk2aVFuQlJHQXJublFkSVZSTHM4a3F4aV9zeUNDek5KOFAzemx6ZWFLSlhDSzNmSUlzUHZNMU44amM?oc=5" },
  { id: "shein_new007", title: "Shein在供应链工资问题上受到审查，平台强调薪酬透明度", content: "Shein因其供应链工资问题受到外界审查，公司强调其供应商工厂的薪酬透明度和合规性。此举可能影响Shein在欧美市场的品牌形象。卖家需确保供应链合规，避免因劳工问题影响销售。", source: "Ecotextile News", type: "press", platform: "shein", dimension: "", date: new Date("2025-05-28"), url: "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOd21Zb0VydUZjTHFOOXRhLXhBNENGVTBoTkN0ZTZoSFNFejFaekxxT1dreGtkWU02U3MxZnBFa3NhZDZObW5RVG1mQkU5b1hCWGR0NFVNYXlZajB3LVptSE5uWVk0YUZnWGdQeXU5Tm9PR0dEOG1CUGFBYldjdF9zUFdpNzlIU3VLM1dEUlgxemxydmFPWnp2bzBuY3V6Slo5dXh1U2lXXzVCcVhqRzV5MWM2OXZTNUx5?oc=5" },
  { id: "aliexpress_new008", title: "速卖通升级POP权益，迎接欧盟合规新政", content: "速卖通升级POP（第三方卖家）权益，帮助商家平稳过渡欧盟合规新政。新规包括产品安全、环保要求等。速卖通提供合规指导和支持，卖家需及时更新产品信息，确保符合欧盟标准。", source: "亿邦动力网", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-05-28"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9sX0VITUFHZ1NZME1neUhDUEE4VTRiWmFHd0Q5b3E0cHN4b3ZlcWdMblZ5Yk1KTzBINzRLd2MwSS1iWmt2OWs3d2FqbUtEX2xXVHZTZ244Qjg?oc=5" },
  { id: "tiktok_new009", title: "TikTok Shop欧洲布局再提速，6月1日新增3站", content: "TikTok Shop加速欧洲扩张，计划于6月1日新增3个欧洲站点。此举将扩大卖家覆盖范围，但需应对各国合规要求。卖家可提前准备本地化产品和营销策略。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-28"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTFAxYlBfSlhBTEUwZktIcWhXSjJFNUhEUzNaMFY5anhXWXo1NnZwNGl4ZGQyeUxpUGx4TXdwYmkxNldhWkRvRUJKZ1VMOTh6NUk?oc=5" },
  { id: "temu_new010", title: "亚马逊推出智能仓库应对Temu和Shein竞争", content: "亚马逊推出智能仓库技术，以应对Temu和Shein的低价竞争。智能仓库将提高履约效率，降低成本。卖家可受益于更快的配送服务，但需适应亚马逊的仓储要求。", source: "Notebookcheck", type: "press", platform: "temu", dimension: "", date: new Date("2025-05-28"), url: "https://news.google.com/rss/articles/CBMinAFBVV95cUxPWU5KQnpmOHpYZ21penN1Zno3RmNVb25IMmJGUC1KX2hmckVGUUF2SldRbGpEVlZFRXVrYjFUeGtvSVh2WUhEM1lJVXpqbFNDNGE1WXJ0Nlo0TUdGOEZCSGZUZXQwRFpkRHl1TmJXcWlCOHRfa0Z3QVI1RXh6TlN5Ty1IaUJXcnAtLVlidFZ1Vjk3V0g2elZzUFRLQlY?oc=5" },
  { id: "tiktok_new011", title: "TikTok Shop月活突破20亿，进入正规军时代", content: "TikTok Shop月活跃用户突破20亿，标志着其从快速增长进入规范化运营阶段。平台将加强合规和卖家管理。卖家需适应更严格的规则，同时利用庞大用户基础提升销量。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-05-28"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFB1Q1RCSGl6M3g1VmEwMFJrblQ0MEEtNk1FVmtwZFJEZ0FaTWFqdFVSRk42LU90YlhDVElwOENpRTZFeEtXMXpRb0xBZW81SGtEd3ZHak1B?oc=5" },
  { id: "tiktok_new001", title: "TikTok Shop发布跨境POP商家成长服务计划：一价全包、未达承诺可享赔偿", content: "TikTok Shop推出跨境POP商家成长服务计划，采用一价全包模式，若未达承诺可享赔偿。该计划旨在帮助有货但缺乏运营能力的商家提升GMV，涵盖流量扶持、运营指导等。适用于美区及欧洲市场卖家，具体赔偿标准及服务细节需关注平台公告。建议卖家积极报名参与，利用平台资源降低运营门槛。", source: "手机新浪网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-03-27"), url: "https://news.google.com/rss/articles/CBMi-AFBVV95cUxPcjJQSnpKTEowT0l3ekVFOVVkeDJ5RXNtX0xWYjNSV3NxWDdXNlFsQzl2OGhxeUMtWTNOT18zcHVmSjY0VTNORmQtc3hjVUw0OENickMzWE5Cbmg4aDRncU50TjBBTGFSVy1xVW9kQ002YTZCOGpxVFJiOXBkcWNnOGNBZHRfMzg2azdFRHVlZmUzSFlXQ1ZTM25QR0xCZEd3Q0dqV2Y4aHJvUDFNUjZaaUR4d1NYVXpJYUdMRDF1RzBKZ3YwckE4cDdadE04QUR1MGZVYWw1blc0a2V2NGlSdXN3QUdoSmZHUjEzYVB4eGNBVV9VRVdpZw?oc=5" },
  { id: "tiktok_new002", title: "TikTok Shop东南亚推出“亿元直通车”计划：招募大卖每月最高1.5万美元货补", content: "TikTok Shop在东南亚推出“亿元直通车”计划，招募大卖家，每月最高提供1.5万美元货补。该计划旨在吸引头部卖家入驻，提升平台商品丰富度。涉及东南亚市场，但可能间接影响美欧卖家竞争格局。建议卖家关注平台政策动态，评估自身是否适合参与。", source: "新浪财经", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-03-27"), url: "https://news.google.com/rss/articles/CBMiiAJBVV95cUxNblVqTnJXaUNUVWliMXNhV0RPa0piS19ZVXRBN2t3M3Z1S1c3NkpRc2JzRHduR1RlRlR5VEJXZ1hRUVZPdGdZOERKRkJnVUE3Z3puellHTkpPRGlZZ1RiTW1DOHYzWll3N01yVmw0NThXTWR6cGZQZk0xeTRZODVxZkxSRVJBVzBhYWt1S0NqNG5OLVpEbmVaUmtyNHQ4ZHdQZkRueWt4Y2hRd3Z2R2V0U0pDTUtHMUUyN0hlcmZuSzR1TjFROExjSjM4QzRrT2JRbDJEVUU1cm16Nks0OGd5U0FYNHQ5eTQzdnctRkYtM2doNDBsZ3AxNHo5eW03RXJuYjI5WFduakE?oc=5" },
  { id: "tiktok_new003", title: "6月起TikTok美区买家退货运费卖家承担：新规影响成本", content: "TikTok Shop美区发布新规，自2026年6月起，买家责任退货运费改由商家全额承担。此前运费由平台或买家承担，新规将增加卖家运营成本，尤其是高退货率品类。建议卖家优化产品质量、完善描述，并评估退货率对利润的影响，必要时调整定价策略。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-03-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1zbkRNYl9UMlN6QklUX1hmWnhra1hERFNLQ2hJMmtXS0FoTWNsTldZVGExZnNjc1lxUWZCRkhSODBSbFpKWVcwSmVhYXg?oc=5" },
  { id: "joybuy_new004", title: "欧洲版京东即将上线：时隔十年刘强东重返欧洲市场", content: "京东计划推出欧洲版平台，时隔十年刘强东重返欧洲市场。此举将加剧欧洲电商竞争，对Temu、SHEIN、亚马逊等构成挑战。京东凭借物流和供应链优势，可能主打品质和时效。建议卖家关注京东欧洲站招商政策，评估入驻机会。", source: "新浪财经", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-03-27"), url: "https://news.google.com/rss/articles/CBMimgJBVV95cUxNZXNCdE5hU1NWYXdpTE53VDU1Ry1YdUdLY1VNWkFHeFBNX3d6b1BsWjg3bllrVEhqdGVJU3o0RDV1UERHcURsOFdRbklWQWRHVTV0OUY2a05QaHlwWFRkb1cwaVlpUmhiWDloUHptdEhjdXA2eFlzSk1UbUY2SUFsbE1RVDkxb0dTSlhwMEZJTFF1R3k3c2ROM1RpbEh5WmdoVjZrZFBGcGpkeTlOWi15WXFTT2FGNkJiVEVnemRxR3N0V3AzZDlsZnA5bTlpRDZBWmZtUTd1bHlCU29tcVE5VFVZeXl4alhkWFVxY1pxd3BEd0lVMmk3U1lPdHVld3pfQ294Y1N0Rm4zakFNb0F0eTBFWDN1Q3RYUkE?oc=5" },
  { id: "temu_new005", title: "Temu与QIMA合作加强产品测试和平台合规：第三方检测服务上线", content: "Temu宣布与QIMA合作，为卖家提供第三方测试和认证服务，以加强产品合规。此举旨在应对监管压力，提升商品质量。涉及所有市场，尤其是欧美市场。卖家需配合平台合规要求，提前准备产品检测报告，避免下架风险。", source: "PR Newswire", type: "press", platform: "temu", dimension: "", date: new Date("2025-03-27"), url: "https://news.google.com/rss/articles/CBMiywFBVV95cUxNbV9qX2VtajB2MGNFeTFaZFROenFwN1Y4OTd5M1pVRHNTNHFqU0o3b3dvUGlrMWdIZkRkdl9zanYzZ3QtY1FMNGt0dHJReFRfbU5scmtUZHdfTjg1S0RscG5vUHVZX2FFVXlDN0UwS0RBTHhwamltX2d1UFNmeWFERW44UzR1LTZKQWpoOS04bnJvajdnZ0ZGVUR1bWZHZGlNY2taWWNkY0lYYWVua1pBSUo5XzNKZ2lPRmpVZml6QmQzc3pyR1N2UXlqWQ?oc=5" },
  { id: "temu_new006", title: "Temu在匈牙利被罚13亿福林：因不当商业行为遭竞争管理局处罚", content: "Temu因存在不当商业行为被匈牙利竞争管理局罚款13亿福林（约合人民币2600万元）。具体违规行为包括误导性营销等。该事件凸显欧洲监管趋严，卖家需确保合规运营，避免因平台问题牵连店铺。", source: "xindb.com", type: "press", platform: "temu", dimension: "", date: new Date("2025-03-27"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxNM1Y4ZXJCNnhMRmt6TmJ0UGpFTlVNWEFOR0NmTlJGZFQ0cTNCUHlsT1lQTDloRUktY1NncXd1VERiQ2xaN09ud2psTEc4dHNqQlRhT0FZbHpuaV9pb3lfSjRCdVdfLUJ0YUN3MDdKMkFGbzhfN2lBYUdmS1p5bjVNaVRPSm4?oc=5" },
  { id: "temu_new007", title: "Temu本地卖家计划详解：2026年更新支持本地及区域市场销售", content: "Temu更新本地卖家计划，允许卖家本地销售并拓展区域市场。该计划旨在提升履约时效和降低物流成本，吸引本地卖家入驻。涉及美国及欧洲市场。建议卖家评估本地仓备货模式，利用平台流量支持。", source: "Digital Commerce 360", type: "press", platform: "temu", dimension: "", date: new Date("2025-03-27"), url: "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQV0tUbnN5Y1FkbHhqNU1QbDZfNVNlRG9YWHZERWpJdjM3YXJNS0h3YUJkdG10aVRBYVdDMEZMQ1BJamx6Qm5KSVRMNzUycVA2NGNwMTNSdHFSNGlfQVNSaVNCQjJvNlNfR2tQclBaa2FtbFRCS3F0UnlKRTN4YXlkb3Q3LU5aQnc1THUtX2FqQTk4TnhHaHJac2FwZkw0aHQ0UWp6YU1vc3NuaTZsNUFiblFZaXZWQTZIcFUyVGt4Ny1CZFg2NkhrV1lKLWJIY3JxZlVycNIB2gFBVV95cUxNMU1ObVVoWUNqeGM5RTU3MEFsbjlZWFlxYkkzejl2VThOU2dXek1oM3YxZ1F4WnMyLXFoZnpkeUlKU0tXd3Uya2poakxxLU55WnZkaVlfdlJCN2dqOWExZGR0UHVfbFVRNGVmN2o3VzZ6TjRqVTc3QzN3bHJpWHZwdm1qR3dNUXg2dVlzMVBIcXBUZno4UmZodzlXZDcxUmFTbjRMUU5LZjhFcF9qUzkzdDNTQUlSMlRGM0FOMmMxWTVqcWJlMUJqa0hOZWlyMG1lOXJjVmFFSUtoQQ?oc=5" },
  { id: "shein_new008", title: "SHEIN和Temu面临集体诉讼：因关税相关涨价被消费者起诉", content: "SHEIN和Temu因关税相关价格调整面临美国消费者集体诉讼。原告指控平台未透明告知关税影响，导致价格上涨。该诉讼可能影响平台定价策略和卖家成本。建议卖家关注诉讼进展，合理规划定价。", source: "Global Cosmetics News", type: "press", platform: "shein", dimension: "", date: new Date("2025-03-27"), url: "https://news.google.com/rss/articles/CBMirwFBVV95cUxOY0hCcmV4eS1NMk9sbnRvZzZ1Wmg2amQxZ1JGM2k0Q3JOQThyd1VsQ1IwMGxXcHNiMzVnbmprSVVJVEU1cWdTQ0dGcWIwbzNVN1Fqb1dLZzhzeWxzeTBPVHJITEJ5UTNRU0hDM1pTN0ZPN0RHVVRjZFN0VEdkcUpFWW5FdVZFd25QNmhJNzJieFBFVkVJUkNESW9WbUdZaE40WW1OeDVMa2xDTWlGVnE4?oc=5" },
  { id: "shein_new009", title: "爱尔兰DPC调查SHEIN：聚焦欧盟用户数据跨境传输合规", content: "爱尔兰数据保护委员会（DPC）对SHEIN展开调查，重点审查其将欧盟用户数据传输至中国的合规性。此举可能影响SHEIN在欧洲的运营，卖家需关注数据合规要求，确保自身业务符合GDPR。", source: "安全内参", type: "press", platform: "shein", dimension: "", date: new Date("2025-03-27"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1CUHlZTThCWnZRb1BOcDAyZE9GTmJRTks5dW1FS3VDemFuY21veFBVaW5GZGpRLURnb3ZtaG5TLWJ5RUdwMWFiQ24xa0kyZw?oc=5" },
  { id: "temu_new010", title: "2026亚马逊会员日提前开跑：Temu合规加码", content: "亚马逊2026年Prime Day提前启动，同时Temu加强合规要求。亚马逊会员日提前可能带动销售高峰，卖家需提前备货。Temu合规加码要求卖家完善产品认证。建议卖家关注两大平台动态，优化运营策略。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2025-03-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9xSjBuTWFyMlJ4LWZBelA4SmxuNFNJazJkUkNQSkxmMlllM19LQlV5U1ZjMjA0b1JCV0hRa2JXeHpPT1JsOXdoM0hVTEg?oc=5" },
  { id: "aliexpress_new011", title: "速卖通发布POP商家长效经营指南：合规即机会", content: "速卖通发布POP商家长效经营指南，强调合规经营的重要性。指南涵盖产品合规、税务、知识产权等，帮助卖家规避风险。涉及欧洲、美国等市场。建议卖家仔细研读指南，确保运营合规，以获取平台更多支持。", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-03-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE5NSG52WmR0d1BQOHYzVDhrZHNJNmNNVVV0WGJoYmYzUGRkZUJTbmxjMk1yLUV5aFZidWZybHZjWjFkNEZ0U1NQQlJoeks?oc=5" },
  { id: "aliexpress_new012", title: "速卖通“海外版TOPTALK”释放信号：品牌出海新主场", content: "速卖通举办“海外版TOPTALK”活动，强调其作为品牌出海主场的定位。平台将加大品牌扶持力度，提供流量和工具支持。涉及欧美市场。建议品牌卖家关注速卖通品牌入驻政策，利用平台资源提升海外知名度。", source: "亿邦动力网", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-03-27"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE45bndrMnZ1eVNTc2tISmNubGd1ek15V3V6a2FKbjRQT2dJcF9pbzVqQy0xYjB2OTNSZGVlOHgwZ29RSWM5WWw3MUZZeVNKUm1LUnpTRFlB?oc=5" },
  { id: "aliexpress_new013", title: "“跨境四小龙”激战品牌出海：速卖通要做全新主场", content: "速卖通、Temu、SHEIN、TikTok Shop等“跨境四小龙”在品牌出海领域竞争加剧。速卖通宣布要做全新主场，强化品牌服务。卖家需根据平台特点选择主攻方向，速卖通适合品牌化运营，Temu适合低价走量。", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-03-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1XaWtXc1B5ZDhuQ2FKWTBKWjBWLUF3d21ra3dqRUJ1VmF6WHZyc050N1RZQTJGdHo5c0JfZ0dGcXZvaUVybW51Mm5yRU4?oc=5" },
  { id: "shein_new014", title: "SHEIN峰会+亚马逊春耕大会：锦联国际提供跨境物流一站式方案", content: "锦联国际在SHEIN峰会和亚马逊春耕大会上亮相，提供跨境物流一站式解决方案。物流服务涵盖头程、清关、尾程配送，适用于欧美市场。卖家可借此优化物流成本，提升履约效率。", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2025-03-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE11d2trZGtaUVh0ZTN2akpTTzJRbUR1UjVsVWJtSEJCekVSU2RpV2VKcWZaYlRYVUxmZC1pUVNveXgtc2tKdkhNQS1FSF8?oc=5" },
  { id: "temu_new015", title: "Temu新店铺流量扶持政策：新入驻商家享多项福利", content: "Temu为新入驻商家提供流量扶持政策，包括曝光位、补贴等。具体扶持力度因类目而异，旨在吸引新卖家。涉及美国及欧洲市场。建议新卖家抓住窗口期，快速上架产品并优化Listing。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2025-03-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9OUHlUUHU2M0FpTTRIVUFLMmoxUjVDZUZYSWliY2I4cXVOVi1rTWltd0g0NFFJT1YyNlZaamlSMVFXYXp4MDV4d21uRFg?oc=5" },
  { id: "joybuy_new016", title: "京东全球购两周年：中国跨境电商崛起，物流与AI驱动增长", content: "京东全球购上线两周年，中国跨境电商持续增长。京东凭借物流和AI技术提升效率，推动平台发展。涉及欧洲、美国市场。卖家可借助京东全球购拓展海外市场，利用其物流优势。", source: "JD Corporate Blog", type: "press", platform: "joybuy", dimension: "", date: new Date("2025-03-27"), url: "https://news.google.com/rss/articles/CBMisAFBVV95cUxNbFExOF9PcS1HcGNWNFdyVkxpTEhkb3p2bWFqLVFHeWFLNW9xbFE1blFiNjcxQWhoTnVMVWdQU3pKSE5LQWh6WXJJbFI0aGNsOThmT2Nra1Fmd05JTWFBN0FodE1oWUhkTVZoYVRGQUxoTGdlUVAwbWdsN2g1YzM5cndQeV92RGdmR3ZMcGZVeHYyUFVWTEdfOTJJVE93bmJRRlR0ajZRY19zalhDN05WRQ?oc=5" },
  { id: "temu_new017", title: "亚马逊智能仓库应对Temu和SHEIN：技术升级提升履约效率", content: "亚马逊推出智能仓库技术，以应对Temu和SHEIN的竞争。智能仓库通过自动化和AI提升分拣、包装效率，降低物流成本。卖家可受益于更快的配送时效，但需适应平台新规。", source: "Notebookcheck", type: "press", platform: "temu", dimension: "", date: new Date("2025-03-27"), url: "https://news.google.com/rss/articles/CBMinAFBVV95cUxPWU5KQnpmOHpYZ21penN1Zno3RmNVb25IMmJGUC1KX2hmckVGUUF2SldRbGpEVlZFRXVrYjFUeGtvSVh2WUhEM1lJVXpqbFNDNGE1WXJ0Nlo0TUdGOEZCSGZUZXQwRFpkRHl1TmJXcWlCOHRfa0Z3QVI1RXh6TlN5Ty1IaUJXcnAtLVlidFZ1Vjk3V0g2elZzUFRLQlY?oc=5" },
  { id: "shein_new018", title: "SHEIN强调供应链工资增长：应对劳工审查压力", content: "SHEIN对外宣称其供应链工资有所增长，以回应外界对劳工权益的审查。此举旨在改善品牌形象，但可能增加供应商成本。卖家需关注供应链合规要求，确保符合国际劳工标准。", source: "Ecotextile News", type: "press", platform: "shein", dimension: "", date: new Date("2025-03-27"), url: "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOd21Zb0VydUZjTHFOOXRhLXhBNENGVTBoTkN0ZTZoSFNFejFaekxxT1dreGtkWU02U3MxZnBFa3NhZDZObW5RVG1mQkU5b1hCWGR0NFVNYXlZajB3LVptSE5uWVk0YUZnWGdQeXU5Tm9PR0dEOG1CUGFBYldjdF9zUFdpNzlIU3VLM1dEUlgxemxydmFPWnp2bzBuY3V6Slo5dXh1U2lXXzVCcVhqRzV5MWM2OXZTNUx5?oc=5" },
  { id: "tiktok_new001", title: "TikTok Shop东南亚推出亿元直通车计划，大卖每月最高1.5万美元货补", content: "TikTok Shop东南亚宣布推出“亿元直通车”计划，旨在招募大卖入驻，每月最高可获1.5万美元货补。该计划主要面向东南亚市场，但可能吸引部分美国卖家关注。货补将直接补贴商品成本，降低卖家运营压力。建议卖家关注平台后续细则，评估参与门槛与回报。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-01-01"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5jSkMwQmVwclpUbXNrUjU2Z2ZOeHFhMjhnZF9yNFJ5OGpPSHJYSk5FeENsNndSTzI2N05qSUtXd3J4Q1ZsMWRiUDJrcHF3YTR2TWdZaE5R?oc=5" },
  { id: "tiktok_new002", title: "TikTok Shop美区新规：2026年6月起商家全额承担买家责任退货运费", content: "TikTok Shop美区发布新规，自2026年6月起，买家责任退货运费将由商家全额承担。此前，平台可能承担部分或全部费用。此举将增加卖家退货成本，尤其对高退货率品类影响显著。卖家需优化产品质量和描述，减少退货率，同时调整定价策略以覆盖新增成本。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-01-01"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBiQW9xdldPOXhiVFJDRjhMQWVpeVEwY0VDMEdqV29ZT2YtWnVGaEFyM2Y4emkzZTlIeHV0WXMtM1pnMEZqaVpDMXd4T0pwNWU4bUhhdU5R?oc=5" },
  { id: "tiktok_new003", title: "TikTok Shop推出成长服务，助力卖家提升GMV", content: "TikTok Shop推出成长服务，针对有货但缺乏运营能力的卖家，提供从内容创作、直播带货到广告投放的全链路支持。该服务旨在帮助卖家快速提升GMV，尤其适合中小卖家。服务可能包括免费培训、流量扶持和专属运营指导。卖家可借此降低运营门槛，但需注意服务条款和费用。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-01-01"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1PUFpaSExDLXY1V2FpWGs2SklXUkZObHJsaFJrU25xWS1jSG9xbVY1TU02LUQ3c28yU09fOWw1c1pBdUhxWlJWRFotYk4?oc=5" },
  { id: "temu_new004", title: "Temu推出第三方检测认证服务，强化平台合规", content: "Temu宣布为卖家提供第三方检测和认证服务，帮助卖家确保产品符合目标市场标准。该服务覆盖美国、欧洲等主要市场，涉及电子、玩具、服装等品类。卖家可通过平台直接对接检测机构，简化合规流程。此举旨在减少因产品不合规导致的退货和罚款，提升买家信任。", source: "Chain Store Age", type: "press", platform: "temu", dimension: "", date: new Date("2026-01-01"), url: "https://news.google.com/rss/articles/CBMilwFBVV95cUxOYlVwNEpZRFFWd29mNWlZaGdobDZ5VkwyazFfSUNfM3Y0Z2ZyXzRvRHliOHBncERmU1lhUU5BTDJKdUhyVFRhRnl1TlVVUlRvZ3ZWcEZRODF4YmdvamhfbGp5d3R4cFFwYnpaaGRoMW1tbFpXV1JvRWR3LXJjSUFaVTVXcGg4QW9wMHJWNHNBODZ6Mm5tLWRz?oc=5" },
  { id: "temu_new005", title: "Temu Y2物流服务商推荐：北美卖家如何选对供应链伙伴", content: "Temu发布2026年Y2物流服务商推荐指南，帮助北美跨境卖家选择供应链伙伴。Y2模式允许卖家从国内直发，无需海外仓。指南建议卖家关注物流时效、成本、清关能力等。Temu正优化物流网络，卖家可借此降低库存风险，但需注意履约时效和买家体验。", source: "邢台网", type: "press", platform: "temu", dimension: "", date: new Date("2026-01-01"), url: "https://news.google.com/rss/articles/CBMiZkFVX3lxTE9ldWZpNmdUM1pkZ1FjVFlWQW5sbVFPV2luaTY3U09qaDY1TmxhejVCd0FPaWJYU3NqYUdKdDMtc0FCa2tubFNaaEtWWl9PY2F1bDlhQmk4Vms1eGRZWmZGWmQ4d2hZQQ?oc=5" },
  { id: "tiktok_new006", title: "TikTok Shop美区发布经营方法论白皮书，指导卖家增长", content: "TikTok Shop美区发布2026年商家经营方法论白皮书，涵盖内容电商、直播带货、广告投放等策略。白皮书强调通过短视频和直播提升转化，并给出具体数据指标。卖家可参考白皮书优化运营，但需结合自身品类和资源。平台正推动卖家从铺货向品牌化转型。", source: "财富号", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-01-01"), url: "https://news.google.com/rss/articles/CBMia0FVX3lxTFBfcWV6U3Bic0tFRFJ1WXhOWThBNGNCMU5oVmNYSEtxMU1qNlZkRVgxQXdEWGQ5VjJDQXM0TUI3dkU3VHIxdzJOR1dQMkQ4dGpYUldtdHAzd1lmalBRcXY0SnlfNHZpV0NxY2c4?oc=5" },
  { id: "temu_new007", title: "Temu与QIMA合作加强产品测试和平台合规", content: "Temu与质量检测机构QIMA合作，为卖家提供产品测试和合规服务。合作覆盖美国、欧洲等市场，重点针对服装、电子、玩具等品类。卖家可通过QIMA获得测试报告，确保产品符合当地法规。此举有助于减少因质量问题导致的退货和罚款，提升平台信誉。", source: "PR Newswire", type: "press", platform: "temu", dimension: "", date: new Date("2026-01-01"), url: "https://news.google.com/rss/articles/CBMiywFBVV95cUxNbV9qX2VtajB2MGNFeTFaZFROenFwN1Y4OTd5M1pVRHNTNHFqU0o3b3dvUGlrMWdIZkRkdl9zanYzZ3QtY1FMNGt0dHJReFRfbU5scmtUZHdfTjg1S0RscG5vUHVZX2FFVXlDN0UwS0RBTHhwamltX2d1UFNmeWFERW44UzR1LTZKQWpoOS04bnJvajdnZ0ZGVUR1bWZHZGlNY2taWWNkY0lYYWVua1pBSUo5XzNKZ2lPRmpVZml6QmQzc3pyR1N2UXlqWQ?oc=5" },
  { id: "shein_new008", title: "SHEIN面临欧盟用户数据跨境传输合规调查", content: "爱尔兰数据保护委员会（DPC）对SHEIN展开调查，聚焦其向中国传输欧盟用户数据的合规性。SHEIN需证明数据跨境传输符合GDPR要求。若违规，可能面临巨额罚款。卖家需关注SHEIN的合规进展，评估对供应链和销售的影响。数据合规将成为跨境电商的重要议题。", source: "安全内参", type: "press", platform: "shein", dimension: "", date: new Date("2026-01-01"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1CUHlZTThCWnZRb1BOcDAyZE9GTmJRTks5dW1FS3VDemFuY21veFBVaW5GZGpRLURnb3ZtaG5TLWJ5RUdwMWFiQ24xa0kyZw?oc=5" },
  { id: "tiktok_new009", title: "TikTok Shop东南亚加强跨境内容合规，违规最高冻结佣金90天", content: "TikTok Shop东南亚宣布加强跨境内容合规管理，对违规内容（如虚假宣传、侵权）将采取严厉处罚，最高冻结佣金90天。该政策主要针对东南亚市场，但可能预示美区也将跟进。卖家需确保直播和短视频内容合规，避免使用未授权素材。建议建立内容审核流程。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-01-01"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBxVElsc3gzWUF0SnpuaFptaGlZQzFiLXVqU3dicXBvbEdacVZQdjNHLW5KcmNROGk2cnlYVUZFUF9ic3ZQUjJlQ3B5aHVNVTNrQmU0RG1DR3I?oc=5" },
  { id: "temu_new010", title: "Temu被匈牙利竞争管理局罚款13亿福林，因不当商业行为", content: "Temu因存在不当商业行为被匈牙利竞争管理局罚款13亿福林（约合350万欧元）。处罚涉及误导性促销、不公平条款等。Temu需调整在匈牙利的运营策略。卖家需关注平台合规动态，避免因平台违规影响自身业务。此事件可能促使Temu加强欧洲市场合规投入。", source: "xindb.com", type: "press", platform: "temu", dimension: "", date: new Date("2026-01-01"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxNM1Y4ZXJCNnhMRmt6TmJ0UGpFTlVNWEFOR0NmTlJGZFQ0cTNCUHlsT1lQTDloRUktY1NncXd1VERiQ2xaN09ud2psTEc4dHNqQlRhT0FZbHpuaV9pb3lfSjRCdVdfLUJ0YUN3MDdKMkFGbzhfN2lBYUdmS1p5bjVNaVRPSm4?oc=5" },
  { id: "shein_new011", title: "SHEIN和Temu因关税涨价面临集体诉讼", content: "SHEIN和Temu因关税相关价格上涨面临集体诉讼。原告指控平台未充分告知消费者关税成本，导致商品价格不合理上涨。诉讼可能影响平台定价策略和消费者信任。卖家需关注诉讼进展，评估对销售和利润的影响。建议保持价格透明度，避免类似纠纷。", source: "Global Cosmetics News", type: "press", platform: "shein", dimension: "", date: new Date("2026-01-01"), url: "https://news.google.com/rss/articles/CBMirwFBVV95cUxOY0hCcmV4eS1NMk9sbnRvZzZ1Wmg2amQxZ1JGM2k0Q3JOQThyd1VsQ1IwMGxXcHNiMzVnbmprSVVJVEU1cWdTQ0dGcWIwbzNVN1Fqb1dLZzhzeWxzeTBPVHJITEJ5UTNRU0hDM1pTN0ZPN0RHVVRjZFN0VEdkcUpFWW5FdVZFd25QNmhJNzJieFBFVkVJUkNESW9WbUdZaE40WW1OeDVMa2xDTWlGVnE4?oc=5" },
  { id: "temu_new012", title: "Temu用户量再超Allegro，波兰电商市场格局生变", content: "Temu在波兰的用户量再次超过本土电商Allegro，显示其欧洲扩张势头强劲。Temu凭借低价策略和补贴吸引大量用户，但面临合规和物流挑战。卖家可借此机会进入波兰市场，但需注意平台政策变化和竞争加剧。建议关注Temu在欧洲的本地化策略。", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2026-01-01"), url: "https://news.google.com/rss/articles/CBMiRkFVX3lxTE4zbW5FRWwzWFVhX2FfUWpCYlJNOXBidVFHaUFFT0k0a3dtajFrVGFkVjBLUE1Zanh4M3MwSXV3RVRoLW5xUHc?oc=5" },
  { id: "temu_new013", title: "亚马逊会员日提前开跑，TEMU合规加码", content: "2026年亚马逊Prime会员日提前启动，同时TEMU加强合规要求。亚马逊会员日将提供更多流量和促销机会，卖家需提前备货和优化广告。TEMU则要求卖家提供更多合规文件，如产品检测报告。卖家需平衡两个平台的投入，确保合规以规避风险。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-01-01"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9xSjBuTWFyMlJ4LWZBelA4SmxuNFNJazJkUkNQSkxmMlllM19LQlV5U1ZjMjA0b1JCV0hRa2JXeHpPT1JsOXdoM0hVTEg?oc=5" },
  { id: "temu_new014", title: "Temu本地卖家计划详解：支持本地销售并拓展区域市场", content: "Temu更新本地卖家计划，允许卖家在本地销售并拓展区域市场。该计划面向美国、欧洲等地的本地卖家，提供物流和流量支持。卖家可借助Temu的本地化网络降低跨境成本，但需注意平台佣金和竞争。建议有本地库存的卖家积极申请。", source: "Digital Commerce 360", type: "press", platform: "temu", dimension: "", date: new Date("2026-01-01"), url: "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQV0tUbnN5Y1FkbHhqNU1QbDZfNVNlRG9YWHZERWpJdjM3YXJNS0h3YUJkdG10aVRBYVdDMEZMQ1BJamx6Qm5KSVRMNzUycVA2NGNwMTNSdHFSNGlfQVNSaVNCQjJvNlNfR2tQclBaa2FtbFRCS3F0UnlKRTN4YXlkb3Q3LU5aQnc1THUtX2FqQTk4TnhHaHJac2FwZkw0aHQ0UWp6YU1vc3NuaTZsNUFiblFZaXZWQTZIcFUyVGt4Ny1CZFg2NkhrV1lKLWJIY3JxZlVycNIB2gFBVV95cUxNMU1ObVVoWUNqeGM5RTU3MEFsbjlZWFlxYkkzejl2VThOU2dXek1oM3YxZ1F4WnMyLXFoZnpkeUlKU0tXd3Uya2poakxxLU55WnZkaVlfdlJCN2dqOWExZGR0UHVfbFVRNGVmN2o3VzZ6TjRqVTc3QzN3bHJpWHZwdm1qR3dNUXg2dVlzMVBIcXBUZno4UmZodzlXZDcxUmFTbjRMUU5LZjhFcF9qUzkzdDNTQUlSMlRGM0FOMmMxWTVqcWJlMUJqa0hOZWlyMG1lOXJjVmFFSUtoQQ?oc=5" },
  { id: "shein_new015", title: "SHEIN在美国校园招聘供应链人才，强化本地化", content: "SHEIN在美国启动校园招聘，招募供应链管理、物流等人才，以加强本地化运营。此举旨在应对美国市场对供应链透明度的要求，并提升履约效率。卖家可关注SHEIN的本地化进展，可能带来新的合作机会。同时，SHEIN的合规压力可能传导至供应商。", source: "TipRanks", type: "press", platform: "shein", dimension: "", date: new Date("2026-01-01"), url: "https://news.google.com/rss/articles/CBMitAFBVV95cUxNNjJwNmZBSmQtTW1WVVp6TXZ0dVF0UW1OdnFzdWkxNDBlTjBaMmgtVmZXZkRlbC1IUWNCakpFOFpRVmZBYWVoLTh1NTAxZnVNMTduX2MyMlBfaXFETG5BajhmVnM0OGRHV2Q5b3RDcXhYOTQ1UE82Wk5WSFEtY0hEd2RWeDJPTElhbXV0ckFESm9ickVOZmdPX0RWVEthS2Zaa2VfeUdhbnVFZHNBVldWeUtrVEQ?oc=5" },
  { id: "shein_new016", title: "SHEIN强调供应链工资问题，应对审查", content: "SHEIN公开强调其供应链中的工资水平，以应对外界对劳工权益的审查。SHEIN声称已提高供应商工人工资，并加强审计。此举旨在改善品牌形象，避免监管处罚。卖家需关注SHEIN的供应链合规要求，确保自身工厂符合标准，否则可能被淘汰。", source: "Ecotextile News", type: "press", platform: "shein", dimension: "", date: new Date("2026-01-01"), url: "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOd21Zb0VydUZjTHFOOXRhLXhBNENGVTBoTkN0ZTZoSFNFejFaekxxT1dreGtkWU02U3MxZnBFa3NhZDZObW5RVG1mQkU5b1hCWGR0NFVNYXlZajB3LVptSE5uWVk0YUZnWGdQeXU5Tm9PR0dEOG1CUGFBYldjdF9zUFdpNzlIU3VLM1dEUlgxemxydmFPWnp2bzBuY3V6Slo5dXh1U2lXXzVCcVhqRzV5MWM2OXZTNUx5?oc=5" },
  { id: "shein_new017", title: "SHEIN技术+人才双引擎加码服装产业升级", content: "SHEIN通过技术和人才双引擎推动服装产业升级，包括数字化供应链和人才培养。SHEIN投资AI设计、智能仓储等技术，并联合高校培养人才。卖家可借助SHEIN的数字化工具提升效率，但需适应其快速反应的供应链模式。建议关注SHEIN的技术开放合作机会。", source: "36氪", type: "press", platform: "shein", dimension: "", date: new Date("2026-01-01"), url: "https://news.google.com/rss/articles/CBMiTkFVX3lxTE41M181RFp3X2R3MUprcjdKRThCeGNmV0Y1clVGR19BUkR6akxSLWZCdENPdHk4dUttNnRtQ3Q2QS1vdXZRLUZodF9LRWNBdw?oc=5" },
  { id: "temu_new018", title: "TEMU新店铺流量扶持政策解读", content: "TEMU为新入驻商家提供流量扶持政策，包括首页推荐、搜索加权和活动资源。新店铺在入驻初期可获得额外曝光，但需满足平台考核指标。卖家应利用扶持期快速积累销量和评价，同时注意合规运营。扶持政策可能随平台策略调整，需持续关注。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-01-01"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9OUHlUUHU2M0FpTTRIVUFLMmoxUjVDZUZYSWliY2I4cXVOVi1rTWltd0g0NFFJT1YyNlZaamlSMVFXYXp4MDV4d21uRFg?oc=5" },
  { id: "aliexpress_new001", title: "速卖通发布POP商家长效经营指南，强调合规即机会", content: "速卖通发布POP商家长效经营指南，强调合规经营是平台长期发展的核心。指南涵盖商品合规、知识产权保护、税务合规等方面，要求卖家严格遵守欧盟及美国市场法规。平台将加大对不合规商品的处罚力度，包括下架、扣分甚至关闭店铺。卖家需及时自查产品资质，确保符合CE、FDA等认证要求。此举旨在提升平台信誉，吸引更多优质买家，同时为合规卖家创造更公平的竞争环境。", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-04-14"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE5NSG52WmR0d1BQOHYzVDhrZHNJNmNNVVV0WGJoYmYzUGRkZUJTbmxjMk1yLUV5aFZidWZybHZjWjFkNEZ0U1NQQlJoeks?oc=5" },
  { id: "temu_new002", title: "Temu为卖家提供第三方检测认证服务，强化合规体系", content: "Temu宣布与QIMA合作，为卖家提供第三方产品检测和认证服务，帮助卖家确保商品符合美国及欧盟安全标准。该服务接入卖家中心，卖家可在线提交检测申请，平台提供补贴优惠。此举旨在减少因产品不合规导致的退货和罚款，提升消费者信任。Temu正加速从低价策略转向合规化运营，以应对欧美市场监管压力。", source: "Chain Store Age", type: "press", platform: "temu", dimension: "", date: new Date("2025-04-14"), url: "https://news.google.com/rss/articles/CBMilwFBVV95cUxOYlVwNEpZRFFWd29mNWlZaGdobDZ5VkwyazFfSUNfM3Y0Z2ZyXzRvRHliOHBncERmU1lhUU5BTDJKdUhyVFRhRnl1TlVVUlRvZ3ZWcEZRODF4YmdvamhfbGp5d3R4cFFwYnpaaGRoMW1tbFpXV1JvRWR3LXJjSUFaVTVXcGg4QW9wMHJWNHNBODZ6Mm5tLWRz?oc=5" },
  { id: "tiktok_new003", title: "TikTok Shop东南亚加强跨境内容合规，违规冻结佣金90天", content: "TikTok Shop东南亚市场加强跨境内容合规管理，对发布违规内容（如虚假宣传、侵权、不实信息）的卖家，最高冻结佣金90天。平台将利用AI技术审核直播和短视频内容，重点监控美妆、保健品等高风险品类。卖家需确保推广内容符合当地法规，避免使用绝对化用语或未经证实的功效声明。此举旨在提升平台内容质量，保护消费者权益。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-04-14"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBxVElsc3gzWUF0SnpuaFptaGlZQzFiLXVqU3dicXBvbEdacVZQdjNHLW5KcmNROGk2cnlYVUZFUF9ic3ZQUjJlQ3B5aHVNVTNrQmU0RG1DR3I?oc=5" },
  { id: "tiktok_new004", title: "TikTok Shop升级跨境POP商家中心APP，覆盖经营全场景", content: "TikTok Shop推出跨境POP商家中心APP，整合商品管理、订单处理、数据分析、广告投放等功能，支持卖家移动端全场景经营。APP提供实时销售数据、流量分析及合规提醒，帮助卖家快速响应市场变化。该工具面向美国及欧洲市场卖家，旨在提升运营效率，降低管理成本。TikTok Shop正加速完善卖家基础设施，以吸引更多品牌入驻。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-04-14"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1YYldJcmtKZmxQM3VzOVhUY0NkY0YxWVNxMElEMkdTWkVJUGJnbzJZM0J2YXFjMGZZbldqWTRoTjNMVURuZ2lBclhGVW4?oc=5" },
  { id: "temu_new005", title: "Temu携手QIMA强化合规检测服务，接入卖家中心", content: "Temu与QIMA合作，将第三方检测服务直接接入卖家中心，卖家可在线申请产品测试，涵盖电子、玩具、纺织品等品类。平台提供费用补贴，降低卖家合规成本。此举旨在应对欧美市场对产品安全的严格监管，减少因质量问题导致的退货和罚款。Temu正从低价扩张转向合规化运营，以提升平台信誉和长期竞争力。", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2025-04-14"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9fUG1NeDl0aUFHZVdyRlExRXhKYkpSWkVQT01tejdDVGNZaE9GX2hGV3lxTF9XUHloV1ZXbjBIZ2JjTWdwaUoxeF93cW9EbGp2Q2NEal9B?oc=5" },
  { id: "temu_new006", title: "Temu推出本地卖家计划，助力卖家拓展区域市场", content: "Temu更新本地卖家计划，允许卖家从本地仓库发货，缩短配送时间至2-5天，并支持区域市场定向销售。该计划面向美国、欧洲等主要市场，卖家可灵活选择半托管或全托管模式。平台提供流量倾斜和物流补贴，鼓励卖家备货至本地仓。此举旨在提升履约时效和消费者体验，与亚马逊Prime竞争。", source: "Digital Commerce 360", type: "press", platform: "temu", dimension: "", date: new Date("2025-04-14"), url: "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQV0tUbnN5Y1FkbHhqNU1QbDZfNVNlRG9YWHZERWpJdjM3YXJNS0h3YUJkdG10aVRBYVdDMEZMQ1BJamx6Qm5KSVRMNzUycVA2NGNwMTNSdHFSNGlfQVNSaVNCQjJvNlNfR2tQclBaa2FtbFRCS3F0UnlKRTN4YXlkb3Q3LU5aQnc1THUtX2FqQTk4TnhHaHJac2FwZkw0aHQ0UWp6YU1vc3NuaTZsNUFiblFZaXZWQTZIcFUyVGt4Ny1CZFg2NkhrV1lKLWJIY3JxZlVycNIB2gFBVV95cUxNMU1ObVVoWUNqeGM5RTU3MEFsbjlZWFlxYkkzejl2VThOU2dXek1oM3YxZ1F4WnMyLXFoZnpkeUlKU0tXd3Uya2poakxxLU55WnZkaVlfdlJCN2dqOWExZGR0UHVfbFVRNGVmN2o3VzZ6TjRqVTc3QzN3bHJpWHZwdm1qR3dNUXg2dVlzMVBIcXBUZno4UmZodzlXZDcxUmFTbjRMUU5LZjhFcF9qUzkzdDNTQUlSMlRGM0FOMmMxWTVqcWJlMUJqa0hOZWlyMG1lOXJjVmFFSUtoQQ?oc=5" },
  { id: "tiktok_new007", title: "TikTok Shop与Tokopedia5月起对卖家收取物流服务费", content: "TikTok Shop与Tokopedia宣布自2025年5月1日起，对卖家收取物流服务费，具体费率根据商品重量和配送距离计算。该费用适用于印尼市场，但可能影响TikTok Shop全球物流策略。卖家需调整定价策略，将物流成本纳入考量。平台表示费用将用于提升配送时效和扩大物流网络。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-04-14"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE50clJHWU1qb1dFY3J1YWpyNGNyLWp5WDNyaEFHWTBxQklhWFR5blB3Q25Wam51V2ZibmZ3NUg1bG9UaEtzY1haQy13cnZSUUZuNUEycjEyU0c?oc=5" },
  { id: "shein_new008", title: "SHEIN半托管加拿大站招商，拓展北美市场", content: "SHEIN启动加拿大站半托管模式招商，允许卖家自主管理库存和物流，平台提供流量支持和支付服务。半托管模式降低卖家运营成本，适合有海外仓的卖家。加拿大是SHEIN北美扩张的重要一步，此前已在美国推出半托管。卖家需确保产品符合加拿大安全标准和关税要求。", source: "新浪网", type: "press", platform: "shein", dimension: "", date: new Date("2025-04-14"), url: "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9OOXpxVGd0aWFtbTF1Q2NUMGlTb3VVdmJTY2o3aU8ycmN4VUdDNmppVnI5QTBqaXpsRDByYUZnY2dDb09WZDdUWTJUNTFPZzIzMGJhNjVVcmpSVk1fSVM4cjdXOA?oc=5" },
  { id: "tiktok_new009", title: "TikTok Shop举办年度卖家峰会，公布2026营销路线图", content: "TikTok Shop将举办年度卖家峰会，公布2026年营销路线图，包括广告产品升级、流量扶持计划和新兴市场拓展策略。峰会聚焦美国、欧洲等核心市场，提供与平台高管交流机会。卖家可了解最新政策变化和最佳实践，优化运营策略。TikTok Shop正通过峰会加强与卖家关系，推动GMV增长。", source: "Net Influencer", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-04-14"), url: "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOVmFlbWdaWF9SWUhsSGtwTWlsM1pwNnNhc2ljdE1KejdISnFwbHJIZmd3SGVWV3MtcFBTd1cwaWdZb2RvNVRHdnRFUTNsQzVGY1NybjI1V3lWVkhZcWVHdmFwcUZObG82cmkzVDVJMFlhclB1QklIVWtiQjBnMEZGOUFFZXFDQks4TE5FaHhXMmdWQXFsZGVzNkFJc2JEN3E0aEFBMlZIb2ZKMEpFdHg2T2tDaHNZMjZfcHo3VkhIYXM3RklaajkwYw?oc=5" },
  { id: "temu_new010", title: "Temu品牌备案全流程上线，助力卖家轻松上架", content: "Temu发布品牌备案全流程指南，帮助卖家完成商标注册、品牌授权和产品备案。备案后产品可获得品牌标识和流量扶持，提升转化率。流程包括提交资质文件、平台审核和备案成功。Temu正鼓励品牌化运营，以区别于低价白牌商品，提升平台形象。卖家需确保品牌资质真实有效。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2025-04-14"), url: "https://news.google.com/rss/articles/CBMiSEFVX3lxTE5XbElpWmppdUg4QWxlOUdFX0lnSWp0UjZwbVBjeS1VaXhpWmlmd3p0UVRSSHRHWkhwdnBZUi1ReG84R1ZlcEZGUg?oc=5" },
  { id: "temu_new011", title: "Temu新店铺享流量扶持，平台公布多项入驻优惠政策", content: "Temu为新入驻商家提供流量扶持政策，包括首页推荐位、搜索加权和广告补贴。新店铺在前30天可享受额外曝光，平台还提供运营指导和物流优惠。此举旨在吸引更多卖家入驻，丰富商品品类。卖家需注意平台规则，避免违规导致扶持取消。Temu正通过激励政策加速卖家增长。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2025-04-14"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9OUHlUUHU2M0FpTTRIVUFLMmoxUjVDZUZYSWliY2I4cXVOVi1rTWltd0g0NFFJT1YyNlZaamlSMVFXYXp4MDV4d21uRFg?oc=5" },
  { id: "aliexpress_new012", title: "阿里速卖通品牌出海峰会仅限99个品牌参与，聚焦高端化", content: "阿里速卖通举办品牌出海顶级峰会，仅邀请99个品牌参与，聚焦品牌化、高端化战略。峰会提供一对一咨询、资源对接和平台政策解读。速卖通正从低价平台转型为品牌出海主渠道，帮助中国品牌拓展欧美市场。参与品牌需具备一定规模和资质，平台将提供专属流量和营销支持。", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-04-14"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE4zSEJkMWxCMWdTaTNxakhwT3B2SW1XUUx4dFQzTUJ4aEh5VTJ1bVZTQnVmZklrc1RsMWFYUFRnZlA2Q3lMMUtnSVFLVVo?oc=5" },
  { id: "aliexpress_new013", title: "阿里速卖通年销千万美金品牌数量增64%，助2000品牌翻倍", content: "阿里速卖通宣布年销千万美金品牌数量同比增长64%，平台计划帮助2000个品牌实现翻倍增长。速卖通通过品牌扶持计划、海外仓服务和精准营销，推动品牌出海。重点市场包括美国、欧洲和日本。卖家可申请品牌入驻，享受流量倾斜和物流补贴。速卖通正加速品牌化转型，提升客单价。", source: "亿邦动力网", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-04-14"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBPRlN1ZTl6NnZ0WldvUWhjbXMzOExyaWRwR1QydGZlLUVjZ2lBZThTbVRsMzdrVU84SzY2Q3VPU0RfX0VsYmFEWUd0eUE0WHdVNExrZFF3?oc=5" },
  { id: "shein_new014", title: "SHEIN启动大码女装专项招商，拓展千亿蓝海市场", content: "SHEIN启动大码女装专项招商，诚邀优质供应商合作，覆盖美国、欧洲等市场。大码女装是快速增长品类，SHEIN计划通过数据驱动设计，提供多样化尺码选择。供应商需具备柔性生产能力，快速响应订单。SHEIN将提供流量支持和专属营销活动，帮助卖家抓住市场机会。", source: "中华网", type: "press", platform: "shein", dimension: "", date: new Date("2025-04-14"), url: "https://news.google.com/rss/articles/CBMibkFVX3lxTE9RRmRWLWh3VG9nS2FsdHBkb0JzRXNJVlZWb3RKd3hnRGhJNlZ3V0sxMUlVaFFjQk1SUGNjUXJLbDhxRXRjdEp1X3lLaUV5Rno3RTBEQ2ZIWUh3bUtleFc0RDhKZ3ZKbEFKajVLcEZn?oc=5" },
  { id: "temu_new015", title: "美国TEMU仓半托管头程物流FEDEX双清包税到门", content: "Temu美国仓推出半托管头程物流服务，与FEDEX合作提供双清包税到门方案。卖家只需将货物发至Temu国内仓，后续物流、清关、配送由平台负责。该模式降低卖家物流门槛，适合中小卖家。半托管模式下，卖家可自主定价和营销，平台提供物流支持。Temu正通过灵活模式吸引更多卖家。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2025-04-14"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE9IOWN5V2dORHZDcE9mb3BSOTBHZG05eWE3LUUteVlScXpvRVJLZThFbHFadmVjR09QbFdmSnUzQ3VRc0RJWGxqcVM4VURFM3hR?oc=5" },
  { id: "tiktok_new016", title: "TikTok Shop进入正规军时代，20亿月活支撑电商增长", content: "TikTok Shop运营五年后，凭借20亿月活用户，正式进入“正规军”时代。平台加强合规管理、完善物流体系、推出商家工具，从社交娱乐向综合电商转型。美国、欧洲市场成为增长引擎，GMV持续攀升。卖家需适应平台规则变化，注重品牌建设和内容质量。TikTok Shop正挑战亚马逊地位。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-04-14"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFB1Q1RCSGl6M3g1VmEwMFJrblQ0MEEtNk1FVmtwZFJEZ0FaTWFqdFVSRk42LU90YlhDVElwOENpRTZFeEtXMXpRb0xBZW81SGtEd3ZHak1B?oc=5" },
  { id: "temu_new001", title: "Temu携手QIMA强化合规检测，卖家中心接入第三方服务", content: "Temu宣布与全球质量检测机构QIMA合作，将第三方产品测试和认证服务直接接入卖家中心。卖家可通过平台一站式完成合规检测，降低因商品不合规导致的罚款和下架风险。该服务覆盖美国、欧洲等主要市场，尤其针对电子产品、儿童玩具等高风险品类。此举旨在应对欧盟《数字服务法》和美国消费品安全委员会（CPSC）的监管压力，同时提升平台商品质量信誉。卖家需关注检测费用分摊机制，建议优先对高退货率品类进行合规预检。", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9fUG1NeDl0aUFHZVdyRlExRXhKYkpSWkVQT01tejdDVGNZaE9GX2hGV3lxTF9XUHloV1ZXbjBIZ2JjTWdwaUoxeF93cW9EbGp2Q2NEal9B?oc=5" },
  { id: "temu_new002", title: "Temu推出本地卖家计划，支持区域市场销售", content: "Temu更新本地卖家计划，允许卖家从本地仓库发货并拓展至区域市场。该计划于2026年升级，卖家可灵活选择本地履约或跨境直发，平台提供流量倾斜和物流补贴。目前覆盖美国、欧洲主要国家，卖家需满足本地库存和时效要求（美国2-5天，欧洲3-7天）。此举旨在缩短配送时效、降低退货率，并规避关税风险。建议有海外仓资源的卖家优先加入，利用本地发货提升转化率。", source: "Digital Commerce 360", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQV0tUbnN5Y1FkbHhqNU1QbDZfNVNlRG9YWHZERWpJdjM3YXJNS0h3YUJkdG10aVRBYVdDMEZMQ1BJamx6Qm5KSVRMNzUycVA2NGNwMTNSdHFSNGlfQVNSaVNCQjJvNlNfR2tQclBaa2FtbFRCS3F0UnlKRTN4YXlkb3Q3LU5aQnc1THUtX2FqQTk4TnhHaHJac2FwZkw0aHQ0UWp6YU1vc3NuaTZsNUFiblFZaXZWQTZIcFUyVGt4Ny1CZFg2NkhrV1lKLWJIY3JxZlVycNIB2gFBVV95cUxNMU1ObVVoWUNqeGM5RTU3MEFsbjlZWFlxYkkzejl2VThOU2dXek1oM3YxZ1F4WnMyLXFoZnpkeUlKU0tXd3Uya2poakxxLU55WnZkaVlfdlJCN2dqOWExZGR0UHVfbFVRNGVmN2o3VzZ6TjRqVTc3QzN3bHJpWHZwdm1qR3dNUXg2dVlzMVBIcXBUZno4UmZodzlXZDcxUmFTbjRMUU5LZjhFcF9qUzkzdDNTQUlSMlRGM0FOMmMxWTVqcWJlMUJqa0hOZWlyMG1lOXJjVmFFSUtoQQ?oc=5" },
  { id: "tiktok_new003", title: "TikTok Shop东南亚调整店铺评分规则，AHT替代投诉率", content: "TikTok Shop东南亚跨境自2026年7月起，将用平均处理时间（AHT）替代投诉率作为店铺评分核心指标。AHT衡量卖家处理买家问题（如退货、咨询）的平均时长，目标值≤24小时。评分影响流量分配和活动报名资格。卖家需优化客服响应流程，建议设置自动回复和分层处理机制，避免因AHT超标导致店铺降权。该规则仅限东南亚市场，但可能为欧美市场规则调整提供参考。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1zQWZaWGVsX3NrRmVQNW5JUERid2tjcEh5OVBjY1kyYm4xMnM2cWw3WlFTc0RmanAzSE1QN0k3aVRoTll0MUJrRzlmSzVCMjl2MUd2YUp3?oc=5" },
  { id: "tiktok_new004", title: "TikTok Shop德国一周年：X世代贡献37%销售额", content: "TikTok Shop德国站上线一周年数据显示，X世代（45-60岁）用户贡献了37%的销售额，成为核心消费群体。平台通过本地化内容和直播带货吸引中年用户，美妆、家居、健康品类表现突出。TikTok Shop计划2026年扩大欧洲市场，包括法国、意大利等站点。卖家应针对X世代偏好调整选品和营销策略，例如强调产品实用性和性价比，并利用TikTok广告精准触达该群体。", source: "PPC Land", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOQk1nMXczVm85eFJvbmgwTkFENEgzamQyS1BIeF9Cc0IweHZubWtPNW1SaGRLMGhBWDk1ZUVuNUdsZklUMk1JOHEyNE5kN1hjRlUwcnJhRjRiaDJKWFZTQ2lOZVZPcFh3X0RORk8zUDVjTFE1VEtVLXY4ZTlsWk9JRjhwRTllUXhyVTU4?oc=5" },
  { id: "shein_new005", title: "SHEIN加强欧洲合规管控，不合规商品面临下架", content: "SHEIN宣布加强欧洲市场合规管控，重点审查产品标签、成分声明、安全认证等。不合规商品将被强制下架，卖家需在5月31日前完成自查。涉及品类包括服装、化妆品、电子产品等。此举与欧盟《数字服务法》和《通用产品安全法规》要求一致。卖家应立即检查产品合规文件，特别是CE标志、REACH认证等，建议委托第三方机构进行预审，避免损失。", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE12T3Y3U3lYN2pkZklGVXp6eGlMdjdOcUtXdTFONm92YmpkcjAyUENwWTRQLWE3bjVVTW5HOGM2c2VXbDFLRml4NWlaSUg?oc=5" },
  { id: "shein_new006", title: "SHEIN关闭美国站自发货功能，4月起仅支持平台物流", content: "SHEIN宣布自2026年4月起，美国站关闭卖家自发货功能，所有订单必须使用SHEIN平台物流。此举旨在统一履约时效、提升用户体验，并降低关税风险。卖家需将库存转入SHEIN美国仓库或使用合作物流商。平台物流费用可能高于自发货，但可享受更快的配送（2-5天）和更高的转化率。建议卖家评估成本影响，优化库存布局。", source: "亿邦动力网", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1taVUyWTQ2WU9na2QzaDY5MmVleXVvemgxei1tdmwxUjVwN1ZHcWdkMzYwSnp0a3dpRnhiSHBBOVV3MjJhUXhLNFozYllxRFJ1ZndtWg?oc=5" },
  { id: "shein_new007", title: "SHEIN启动大码女装专项招商，诚邀供应商拓千亿市场", content: "SHEIN宣布启动大码女装专项招商，面向美国、欧洲市场招募优质供应商。大码女装市场年增长超20%，SHEIN计划通过独立品类页和流量扶持打造爆款。供应商需具备快速反应能力（7-15天交货）和合规资质。卖家可借此机会切入蓝海品类，但需注意大码女装的版型设计和面料要求，建议与专业工厂合作。", source: "中华网", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMibkFVX3lxTE9RRmRWLWh3VG9nS2FsdHBkb0JzRXNJVlZWb3RKd3hnRGhJNlZ3V0sxMUlVaFFjQk1SUGNjUXJLbDhxRXRjdEp1X3lLaUV5Rno3RTBEQ2ZIWUh3bUtleFc0RDhKZ3ZKbEFKajVLcEZn?oc=5" },
  { id: "temu_new008", title: "Temu横扫波兰市场，强势登顶流量Top1", content: "Temu在波兰市场流量超越本土电商Allegro，成为访问量第一的购物平台。波兰是Temu欧洲扩张的重要站点，凭借低价策略和本地化运营（波兰语客服、本地支付）快速获客。Temu在波兰的日均访问量超500万，主要品类为家居、服饰、电子配件。卖家可关注波兰市场机会，但需注意欧盟合规要求和物流时效（通常7-12天）。", source: "新浪财经", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxQeGd4ME1pY1ZEY1ljVURhV1RlV2hKU05KTi0tUk43NEVBVlhFbDdXX21UMnF1VHhhWmZlaXhnVExUZ01Jblc0bUlla0JBVFJqbGJ4Q0ZBdW5veThwZERudUtCTFlQTWVwRnlxV3VxNVMwdGFLN1ZoTTd6QUotc1kzRHNpS1U?oc=5" },
  { id: "temu_new009", title: "Temu与QIMA合作强化产品测试和平台合规", content: "Temu宣布与全球质量检测机构QIMA建立战略合作，共同强化产品测试和平台合规体系。合作内容包括：为卖家提供第三方检测服务、建立合规数据库、实时更新各国法规要求。首批覆盖美国、欧盟、日本市场，重点检测电子、玩具、纺织品等品类。卖家可通过卖家中心直接预约检测，检测报告将影响商品流量权重。建议卖家主动参与，避免因合规问题导致下架。", source: "PR Newswire", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMiywFBVV95cUxNbV9qX2VtajB2MGNFeTFaZFROenFwN1Y4OTd5M1pVRHNTNHFqU0o3b3dvUGlrMWdIZkRkdl9zanYzZ3QtY1FMNGt0dHJReFRfbU5scmtUZHdfTjg1S0RscG5vUHVZX2FFVXlDN0UwS0RBTHhwamltX2d1UFNmeWFERW44UzR1LTZKQWpoOS04bnJvajdnZ0ZGVUR1bWZHZGlNY2taWWNkY0lYYWVua1pBSUo5XzNKZ2lPRmpVZml6QmQzc3pyR1N2UXlqWQ?oc=5" },
  { id: "temu_new010", title: "Temu和SHEIN面临集体诉讼，要求退还关税", content: "Temu和SHEIN在美国面临多起集体诉讼，指控其利用“微量豁免”规则规避关税，导致消费者支付了隐性费用。原告要求平台退还因关税调整产生的额外费用。诉讼可能影响平台定价策略和合规成本。卖家需关注关税政策变化，特别是美国拟取消800美元以下免税条款。建议调整定价模型，预留关税风险缓冲。", source: "WWD", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMipAFBVV95cUxNY0dobkFGMTg3TW5yRExSZTF4MHQ1dmVRMVVTZUxHX2ZjWVFLSDdVZEtxMW1OV2NsM2ZXNW9FeWduREp6cUI5MHktSzZMX1dkVmVDd1VwdWlxV2NfR3FGQVJDazVXMDB6V2lDY0NFSk1uaXU3VGpmSzk4S2NIQkI4aWZ3MDFJMkRwYk5rSF81U2s2UndUbjdhRlhmY2F5XzBWMUJkTg?oc=5" },
  { id: "tiktok_new011", title: "TikTok Shop升级“一商卖全球”，亚马逊加码欧洲", content: "TikTok Shop推出“一商卖全球”升级计划，允许卖家一个店铺同时运营多个国家站点，统一管理商品、订单和物流。首批覆盖美国、英国、德国、法国。同时亚马逊宣布加码欧洲市场，投资物流和本地化服务。卖家可利用TikTok的跨站点管理功能降低运营成本，但需注意各国合规差异（如德国包装法、法国EPR）。建议优先选择高潜力品类如美妆、3C配件。", source: "新浪财经", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMilwJBVV95cUxONHp6LXp5YklBSGt3SDZWS1ZsaWVGTEtnVUFHSFF2a01RNVdsaW9UTWFneXA4ZGlyWGZMR2plVmNTQXVXYkF3Sy1YZ084N3N3dDB2cmRyeFl3X0I3ajJwMERLZnNld0VmSWRXZkhTdmMzQm9tOTVydDh5M1NMX29Hd2hwSTM0WF90QU5MeFlCTmk4TXE2UmZxTFJia21SQV96c29Cc0piLXB6dWZqU2hjZ1NHMEFDZTZBeTZxSmVfNEFFaUVkUkctZFQ3Q0hQaklUY0syV1dta2xsODZ2YjVUR3Q3NjZDbjNDZlZNWEd4Ti1jT25CeGZ3TDJ2ZWRkYjVZbzNTcWxYam9UNHJ2cWl5ZnRFQTEzU2M?oc=5" },
  { id: "tiktok_new012", title: "TikTok Shop跨境POP商家中心APP上线，覆盖全场景", content: "TikTok Shop推出跨境POP商家中心APP，支持卖家在移动端完成店铺管理、订单处理、数据分析、客服沟通等全场景操作。APP已在美国、英国、德国上线，支持多语言。卖家可实时接收平台通知、处理退货请求、查看销售报表。建议卖家下载使用，提升运营效率，特别是处理紧急客户问题时。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1YYldJcmtKZmxQM3VzOVhUY0NkY0YxWVNxMElEMkdTWkVJUGJnbzJZM0J2YXFjMGZZbldqWTRoTjNMVURuZ2lBclhGVW4?oc=5" },
  { id: "shein_new013", title: "SHEIN半托管加拿大站招商，卖家可自主履约", content: "SHEIN启动加拿大站半托管模式招商，卖家可自行负责仓储和配送，平台提供流量支持和销售渠道。半托管模式适合有加拿大本地仓或物流能力的卖家，履约时效要求2-5天。SHEIN将提供专属活动位和广告补贴。卖家需注意加拿大关税政策（$150以下免税）和双语（英语/法语）客服要求。建议有北美物流基础的卖家优先尝试。", source: "新浪网", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9OOXpxVGd0aWFtbTF1Q2NUMGlTb3VVdmJTY2o3aU8ycmN4VUdDNmppVnI5QTBqaXpsRDByYUZnY2dDb09WZDdUWTJUNTFPZzIzMGJhNjVVcmpSVk1fSVM4cjdXOA?oc=5" },
  { id: "temu_new014", title: "Temu卖家利润承压，选品与成本控制成破局关键", content: "雨果跨境分析指出，Temu平台卖家面临低利润和高内卷困境，原因包括平台压价、物流成本上升、退货率高。破局建议：聚焦高毛利品类（如家居装饰、宠物用品），优化供应链降低成本，利用Temu的流量扶持政策（如新品曝光）。同时，卖家应关注平台合规要求，避免罚款。建议通过差异化选品和精细化运营提升利润。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9lcmtUcTlUTkZwcnhPc0Y0NDdkZENjRlMtUHV4cDNGWnF3VXlDOGRJbktSOWdCM2sxZFR6TTRxTGk2eEQ1VVVYbVY0R1A?oc=5" },
  { id: "temu_new015", title: "Temu品牌备案全流程指南，助力卖家轻松上架", content: "雨果跨境发布Temu品牌备案详细流程，包括注册品牌、提交资质、审核周期（3-7个工作日）等。品牌备案后可享受流量加权、活动优先参与、防跟卖保护等权益。卖家需提供商标注册证、品牌授权书等文件。建议有品牌或打算创建品牌的卖家尽快备案，以提升产品溢价和竞争力。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMiSEFVX3lxTE5XbElpWmppdUg4QWxlOUdFX0lnSWp0UjZwbVBjeS1VaXhpWmlmd3p0UVRSSHRHWkhwdnBZUi1ReG84R1ZlcEZGUg?oc=5" },
  { id: "temu_new016", title: "Temu新店铺流量扶持政策详解，新卖家可享红利", content: "Temu为新入驻卖家提供流量扶持政策，包括：新品曝光位、搜索加权、专属活动报名资格等。扶持期通常为30天，期间平台会给予更多曝光机会。卖家需注意：保持高评分（≥4.5）、快速发货（≤48小时）、避免违规。建议新卖家利用扶持期快速起量，同时优化产品描述和图片，提升转化率。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9OUHlUUHU2M0FpTTRIVUFLMmoxUjVDZUZYSWliY2I4cXVOVi1rTWltd0g0NFFJT1YyNlZaamlSMVFXYXp4MDV4d21uRFg?oc=5" },
  { id: "temu_new017", title: "Temu美国仓半托管头程物流支持FEDEX双清包税", content: "Temu美国仓半托管模式推出头程物流服务，支持FEDEX国际快递双清包税到门。卖家只需将货物发至Temu国内仓，后续物流、清关、配送由平台合作物流商完成。费用按重量计费，时效5-8天。该服务降低了卖家的物流操作复杂度，适合小批量、高价值商品。建议卖家计算成本，对比自发货模式。", source: "搜狐网", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE9IOWN5V2dORHZDcE9mb3BSOTBHZG05eWE3LUUteVlScXpvRVJLZThFbHFadmVjR09QbFdmSnUzQ3VRc0RJWGxqcVM4VURFM3hR?oc=5" },
  { id: "temu_new018", title: "Temu仓库位置及2026年卖家入驻指南", content: "INQUIRER.net详解Temu仓库位置（美国、欧洲、日本等）及2026年卖家入驻流程。卖家可选择本地仓发货或跨境直发，本地仓可缩短配送时效（美国2-3天，欧洲3-5天）。入驻需提供企业资质、产品清单、品牌授权等。建议卖家根据目标市场选择仓库位置，优先使用本地仓以提升用户体验。", source: "INQUIRER.net USA", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9qRlhlOGsyc250dWdaemY3WjFUZHJwdWlfYTlNVWVRbGxXLUhSZ2o3cWcwUi03emh4U0FwNk5lZ2Z6a2RxZ3gxTkcweTZoVlB5UzJuZ005UlVfWUEwc2NhTnlpSDFOd1k?oc=5" },
  { id: "tiktok_new019", title: "TikTok Shop爆单狂潮：4月单量暴涨80%，海外仓支撑极速发货", content: "TikTok Shop美国站4月单量环比暴涨80%，主要得益于直播带货和短视频引流。第三方海外仓成为极速发货的关键，支持2-5天送达。卖家需提前备货至海外仓，避免断货。建议利用TikTok的广告工具（如Spark Ads）和达人合作扩大曝光，同时优化库存管理以应对爆单。", source: "搜狐网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMijAFBVV95cUxOVWoteElJclRkYW5sT0cybUZfWDJjNjBXSGRQTmdFMlI5MGJ3SG1WaVBWdk9GZVhvV3Nma0ljVTBEODJ4QXpOY3cxWHR1Y05SdEsxb3BZWkZ4N2tVUlRjM2pvbDN5eUNGMGxUalhoalBULWFJdU1ORGU4X2hSMm5wdWRCNWQ4YU1MWFVVQQ?oc=5" },
  { id: "shein_new020", title: "SHEIN在供应链工资问题上受到审查，强调合规", content: "SHEIN在面临供应链工资和劳工权益审查时，强调其供应商已提高工资并改善工作条件。公司发布透明度报告，显示其欧洲和美国供应商的工资水平高于当地最低标准。此举旨在应对欧盟《企业可持续发展尽职调查指令》和美国海关的强迫劳动禁令。卖家需确保供应链合规，提供劳工权益证明，避免被列入黑名单。", source: "Ecotextile News", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-27"), url: "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOd21Zb0VydUZjTHFOOXRhLXhBNENGVTBoTkN0ZTZoSFNFejFaekxxT1dreGtkWU02U3MxZnBFa3NhZDZObW5RVG1mQkU5b1hCWGR0NFVNYXlZajB3LVptSE5uWVk0YUZnWGdQeXU5Tm9PR0dEOG1CUGFBYldjdF9zUFdpNzlIU3VLM1dEUlgxemxydmFPWnp2bzBuY3V6Slo5dXh1U2lXXzVCcVhqRzV5MWM2OXZTNUx5?oc=5" },
  { id: "temu_new001", title: "Temu与QIMA合作强化产品检测，合规体系接入卖家中心", content: "Temu宣布与全球质量检测机构QIMA合作，将产品测试和合规服务接入卖家中心。卖家可直接在平台内提交检测申请，覆盖欧盟CE、REACH、美国CPC等标准。此举旨在应对欧美市场监管趋严，尤其针对欧盟GPSR合规要求。卖家需注意，不合规商品可能面临下架风险，建议提前完成产品检测。", source: "PR Newswire", type: "press", platform: "temu", dimension: "", date: new Date("2025-03-28"), url: "https://news.google.com/rss/articles/CBMiywFBVV95cUxNbV9qX2VtajB2MGNFeTFaZFROenFwN1Y4OTd5M1pVRHNTNHFqU0o3b3dvUGlrMWdIZkRkdl9zanYzZ3QtY1FMNGt0dHJReFRfbU5scmtUZHdfTjg1S0RscG5vUHVZX2FFVXlDN0UwS0RBTHhwamltX2d1UFNmeWFERW44UzR1LTZKQWpoOS04bnJvajdnZ0ZGVUR1bWZHZGlNY2taWWNkY0lYYWVua1pBSUo5XzNKZ2lPRmpVZml6QmQzc3pyR1N2UXlqWQ?oc=5" },
  { id: "temu_new002", title: "Temu波兰用户量超本土龙头Allegro，登顶流量第一", content: "Temu在波兰市场用户量首次超过本土电商Allegro，成为流量第一的电商平台。数据显示，Temu波兰月活用户已接近1300万，占波兰电商用户近60%。Temu通过低价策略和本地化运营（如波兰语客服、本地支付）快速抢占市场。对卖家而言，波兰市场潜力巨大，但需注意欧盟合规要求及物流时效。", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2025-03-28"), url: "https://news.google.com/rss/articles/CBMiRkFVX3lxTE4zbW5FRWwzWFVhX2FfUWpCYlJNOXBidVFHaUFFT0k0a3dtajFrVGFkVjBLUE1Zanh4M3MwSXV3RVRoLW5xUHc?oc=5" },
  { id: "shein_new003", title: "SHEIN将于4月中上旬限制美区商家自发货功能", content: "SHEIN宣布自2025年4月中上旬起，限制美国市场商家使用自发货功能，要求卖家使用平台物流或合作海外仓。此举旨在提升履约时效和用户体验，但将增加卖家物流成本。建议卖家提前布局美国海外仓，或转向SHEIN半托管模式。", source: "亿邦动力网", type: "press", platform: "shein", dimension: "", date: new Date("2025-03-28"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1INy1tWEFJZXgtYXhaN0VKQU0zR1drRTJNc19EWU9BMC1JR2otRjdfV01BSTVsM1U5eDlsWnRMUUN6a01OSDRMRkZCYkwyZkZIbnVaS01n?oc=5" },
  { id: "temu_new004", title: "Temu与Centric Software合作，简化卖家运营流程", content: "Temu与产品生命周期管理（PLM）软件商Centric Software合作，为卖家提供产品开发、合规管理、供应链协同工具。卖家可通过Centric平台管理产品数据、检测报告，并直接同步至Temu后台。此举有助于卖家提高运营效率，尤其适合多品类、多站点卖家。", source: "Retail Insight Network", type: "press", platform: "temu", dimension: "", date: new Date("2025-03-28"), url: "https://news.google.com/rss/articles/CBMihwFBVV95cUxQQy05Nm4tUmdPdHBNWmZIRnRKRzUtOVFqM3NQSU9oQjVIcGk3MWo4T0NWa1hjWmQ0SmRCMUJRd2FGcFNzRTdTTWxOdnRLLVBXZDFpMlRpVjhqZ05Sa2drQnhkdkpkWTc3UnNHMU9obmstb1h3MFB1MWkta3dyT0ZWd2pDc1FWZ2M?oc=5" },
  { id: "temu_new005", title: "Temu美国业务在关税冲击后趋于稳定", content: "据The Business of Fashion报道，Temu美国业务在经历关税调整后已趋于稳定。此前美国取消800美元以下免税政策，Temu通过调整定价、优化供应链（如增加海外仓备货）应对。目前Temu美国订单量已恢复至关税调整前水平，但利润空间受压缩。卖家需关注关税政策变化，考虑海外仓备货。", source: "The Business of Fashion", type: "press", platform: "temu", dimension: "", date: new Date("2025-03-28"), url: "https://news.google.com/rss/articles/CBMimAFBVV95cUxQWWtkMXRFMjFRdjBITk8xRHZvbEtyZHVReVhaZDg2SXRoc0VJZnZIdi1BTDFPX2RNdmN0YTRwMDhjMXp3NlZjbE1DYnhNeWxkTnQ0SWIzcFBpMUNhU1gzdGlMdDVvRF9tTjRvZFNRdGh2TEVKd2w2ZEdYRHBOQ2Fod3FKTzRySEQtUnhfSmpfdkhHbGFUQUFzQw?oc=5" },
  { id: "aliexpress_new006", title: "亚马逊欧洲站强制执行COO原产国信息，卖家需及时更新", content: "亚马逊欧洲站要求卖家在2025年4月前为所有商品提供原产国（COO）信息，否则将限制销售。该政策适用于所有欧洲站点，涉及FBA和自发货卖家。卖家需在后台填写COO代码，否则商品可能被下架。建议卖家尽快检查并更新产品信息。", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2025-03-28"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBqR0dvVWVTdUpQRFpJM3B1bzJEU18zRkg4RTIwdXNEbjdqSkxfLWlpaWliRTY1TG5wOUJQNlItaUVTeHc4NExPcm1KSWU?oc=5" },
  { id: "tiktok_new007", title: "TikTok Shop在德国上线一周年，X世代贡献37%销售额", content: "TikTok Shop德国站上线一周年，数据显示X世代（45-60岁）用户贡献了37%的销售额，成为主要消费群体。平台通过直播带货和短视频内容吸引用户，卖家可针对该群体调整选品和营销策略。TikTok Shop计划2026年进一步扩大欧洲市场。", source: "PPC Land", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-03-28"), url: "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOQk1nMXczVm85eFJvbmgwTkFENEgzamQyS1BIeF9Cc0IweHZubWtPNW1SaGRLMGhBWDk1ZUVuNUdsZklUMk1JOHEyNE5kN1hjRlUwcnJhRjRiaDJKWFZTQ2lOZVZPcFh3X0RORk8zUDVjTFE1VEtVLXY4ZTlsWk9JRjhwRTllUXhyVTU4?oc=5" },
  { id: "temu_new008", title: "Temu推出本地卖家计划，支持卖家进入区域市场", content: "Temu更新本地卖家计划，允许卖家在本地仓库备货并配送至区域市场。该计划面向美国、欧洲卖家，支持半托管模式，卖家可自主定价和履约。Temu提供流量扶持和物流补贴，旨在提升配送时效和降低退货率。卖家需评估本地仓储成本与收益。", source: "Digital Commerce 360", type: "press", platform: "temu", dimension: "", date: new Date("2025-03-28"), url: "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQV0tUbnN5Y1FkbHhqNU1QbDZfNVNlRG9YWHZERWpJdjM3YXJNS0h3YUJkdG10aVRBYVdDMEZMQ1BJamx6Qm5KSVRMNzUycVA2NGNwMTNSdHFSNGlfQVNSaVNCQjJvNlNfR2tQclBaa2FtbFRCS3F0UnlKRTN4YXlkb3Q3LU5aQnc1THUtX2FqQTk4TnhHaHJac2FwZkw0aHQ0UWp6YU1vc3NuaTZsNUFiblFZaXZWQTZIcFUyVGt4Ny1CZFg2NkhrV1lKLWJIY3JxZlVycNIB2gFBVV95cUxNMU1ObVVoWUNqeGM5RTU3MEFsbjlZWFlxYkkzejl2VThOU2dXek1oM3YxZ1F4WnMyLXFoZnpkeUlKU0tXd3Uya2poakxxLU55WnZkaVlfdlJCN2dqOWExZGR0UHVfbFVRNGVmN2o3VzZ6TjRqVTc3QzN3bHJpWHZwdm1qR3dNUXg2dVlzMVBIcXBUZno4UmZodzlXZDcxUmFTbjRMUU5LZjhFcF9qUzkzdDNTQUlSMlRGM0FOMmMxWTVqcWJlMUJqa0hOZWlyMG1lOXJjVmFFSUtoQQ?oc=5" },
  { id: "shein_new009", title: "SHEIN半托管模式开放加拿大站招商", content: "SHEIN宣布半托管模式开放加拿大站招商，卖家可自主定价、备货至加拿大本地仓库，SHEIN负责配送和售后。该模式适合有加拿大本地库存或物流能力的卖家，可降低关税风险并提升履约时效。SHEIN提供流量扶持和佣金优惠。", source: "新浪网", type: "press", platform: "shein", dimension: "", date: new Date("2025-03-28"), url: "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9OOXpxVGd0aWFtbTF1Q2NUMGlTb3VVdmJTY2o3aU8ycmN4VUdDNmppVnI5QTBqaXpsRDByYUZnY2dDb09WZDdUWTJUNTFPZzIzMGJhNjVVcmpSVk1fSVM4cjdXOA?oc=5" },
  { id: "temu_new010", title: "Temu新店铺流量扶持政策详解，助力新商家起步", content: "Temu为新入驻商家提供流量扶持政策，包括新店前30天搜索加权、首页推荐位、专属活动资源等。同时，平台提供0佣金入驻、免费培训等支持。但卖家需注意，Temu竞争激烈，需优化选品和定价策略以维持利润。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2025-03-28"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9OUHlUUHU2M0FpTTRIVUFLMmoxUjVDZUZYSWliY2I4cXVOVi1rTWltd0g0NFFJT1YyNlZaamlSMVFXYXp4MDV4d21uRFg?oc=5" },
  { id: "temu_new011", title: "Temu品牌备案全流程上线，助力卖家保护知识产权", content: "Temu推出品牌备案流程，卖家可提交商标、专利等资料进行品牌备案，获得品牌保护、跟卖拦截、专属活动等权益。备案后产品可显示“品牌”标签，提升转化率。建议有品牌的卖家尽快完成备案，避免侵权风险。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2025-03-28"), url: "https://news.google.com/rss/articles/CBMiSEFVX3lxTE5XbElpWmppdUg4QWxlOUdFX0lnSWp0UjZwbVBjeS1VaXhpWmlmd3p0UVRSSHRHWkhwdnBZUi1ReG84R1ZlcEZGUg?oc=5" },
  { id: "temu_new012", title: "Temu与SHEIN遭集体诉讼，要求退还关税相关费用", content: "Temu和SHEIN在美国面临集体诉讼，指控其在关税调整后未退还消费者多收的关税费用。原告称平台在取消800美元免税政策后，仍按原价收取关税，涉嫌不当得利。若败诉，平台可能面临巨额赔偿。卖家需关注诉讼进展，调整定价策略。", source: "WWD", type: "press", platform: "temu", dimension: "", date: new Date("2025-03-28"), url: "https://news.google.com/rss/articles/CBMipAFBVV95cUxNY0dobkFGMTg3TW5yRExSZTF4MHQ1dmVRMVVTZUxHX2ZjWVFLSDdVZEtxMW1OV2NsM2ZXNW9FeWduREp6cUI5MHktSzZMX1dkVmVDd1VwdWlxV2NfR3FGQVJDazVXMDB6V2lDY0NFSk1uaXU3VGpmSzk4S2NIQkI4aWZ3MDFJMkRwYk5rSF81U2s2UndUbjdhRlhmY2F5XzBWMUJkTg?oc=5" },
  { id: "tiktok_new013", title: "TikTok Shop举办年度卖家峰会，公布2026年营销路线图", content: "TikTok Shop宣布将于2025年4月举办年度卖家峰会，公布2026年营销路线图，包括新市场拓展、广告工具升级、内容电商策略等。峰会还将提供选品、直播、投流等实操培训。卖家可关注峰会获取最新政策，提前布局。", source: "Net Influencer", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-03-28"), url: "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOVmFlbWdaWF9SWUhsSGtwTWlsM1pwNnNhc2ljdE1KejdISnFwbHJIZmd3SGVWV3MtcFBTd1cwaWdZb2RvNVRHdnRFUTNsQzVGY1NybjI1V3lWVkhZcWVHdmFwcUZObG82cmkzVDVJMFlhclB1QklIVWtiQjBnMEZGOUFFZXFDQks4TE5FaHhXMmdWQXFsZGVzNkFJc2JEN3E0aEFBMlZIb2ZKMEpFdHg2T2tDaHNZMjZfcHo3VkhIYXM3RklaajkwYw?oc=5" },
  { id: "shein_new014", title: "SHEIN加强供应链工资透明度，应对劳工审查", content: "SHEIN公布供应链工资数据，声称其供应商工人工资高于当地最低工资标准，并计划进一步透明化。此举旨在回应欧美对快时尚行业劳工权益的审查。SHEIN还推出供应商培训计划，提升合规水平。卖家需确保供应链合规，避免品牌声誉受损。", source: "Ecotextile News", type: "press", platform: "shein", dimension: "", date: new Date("2025-03-28"), url: "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOd21Zb0VydUZjTHFOOXRhLXhBNENGVTBoTkN0ZTZoSFNFejFaekxxT1dreGtkWU02U3MxZnBFa3NhZDZObW5RVG1mQkU5b1hCWGR0NFVNYXlZajB3LVptSE5uWVk0YUZnWGdQeXU5Tm9PR0dEOG1CUGFBYldjdF9zUFdpNzlIU3VLM1dEUlgxemxydmFPWnp2bzBuY3V6Slo5dXh1U2lXXzVCcVhqRzV5MWM2OXZTNUx5?oc=5" },
  { id: "temu_new015", title: "Temu携手QIMA强化合规体系，检测服务接入卖家中心", content: "Temu与QIMA合作，将产品检测服务直接接入卖家中心，卖家可在线提交检测申请，覆盖欧盟CE、美国CPC等标准。此举旨在帮助卖家应对欧美市场监管，降低合规风险。卖家需及时上传检测报告，避免商品下架。", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2025-03-28"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9fUG1NeDl0aUFHZVdyRlExRXhKYkpSWkVQT01tejdDVGNZaE9GX2hGV3lxTF9XUHloV1ZXbjBIZ2JjTWdwaUoxeF93cW9EbGp2Q2NEal9B?oc=5" },
  { id: "tiktok_new016", title: "亚马逊加码欧洲市场，TikTok Shop升级“一商卖全球”", content: "亚马逊宣布加大欧洲市场投入，包括物流网络扩建和本地化服务。同时，TikTok Shop升级“一商卖全球”计划，允许卖家一个店铺覆盖多国市场，简化运营流程。卖家可借此机会拓展欧洲业务，但需注意各国合规差异。", source: "新浪财经", type: "press", platform: "tiktok", dimension: "", date: new Date("2025-03-28"), url: "https://news.google.com/rss/articles/CBMilwJBVV95cUxONHp6LXp5YklBSGt3SDZWS1ZsaWVGTEtnVUFHSFF2a01RNVdsaW9UTWFneXA4ZGlyWGZMR2plVmNTQXVXYkF3Sy1YZ084N3N3dDB2cmRyeFl3X0I3ajJwMERLZnNld0VmSWRXZkhTdmMzQm9tOTVydDh5M1NMX29Hd2hwSTM0WF90QU5MeFlCTmk4TXE2UmZxTFJia21SQV96c29Cc0piLXB6dWZqU2hjZ1NHMEFDZTZBeTZxSmVfNEFFaUVkUkctZFQ3Q0hQaklUY0syV1dta2xsODZ2YjVUR3Q3NjZDbjNDZlZNWEd4Ti1jT25CeGZ3TDJ2ZWRkYjVZbzNTcWxYam9UNHJ2cWl5ZnRFQTEzU2M?oc=5" },
  { id: "temu_new017", title: "Temu波兰用户量超Allegro，登顶流量Top1", content: "Temu在波兰市场用户量首次超越本土电商Allegro，成为流量第一平台。数据显示，Temu波兰月活用户接近1300万，占波兰电商用户近60%。Temu通过低价策略和本地化运营快速抢占市场，对卖家而言，波兰市场潜力巨大，但需注意欧盟合规要求。", source: "新浪财经", type: "press", platform: "temu", dimension: "", date: new Date("2025-03-28"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxQeGd4ME1pY1ZEY1ljVURhV1RlV2hKU05KTi0tUk43NEVBVlhFbDdXX21UMnF1VHhhWmZlaXhnVExUZ01Jblc0bUlla0JBVFJqbGJ4Q0ZBdW5veThwZERudUtCTFlQTWVwRnlxV3VxNVMwdGFLN1ZoTTd6QUotc1kzRHNpS1U?oc=5" },
  { id: "shein_new018", title: "SHEIN美国供应链人才招聘，加强本地化运营", content: "SHEIN启动美国校园招聘，招募供应链、物流、运营等岗位人才，以加强本地化运营能力。此举旨在提升美国市场履约效率和客户体验，应对关税和物流挑战。卖家可关注SHEIN本地化政策变化，调整合作模式。", source: "TipRanks", type: "press", platform: "shein", dimension: "", date: new Date("2025-03-28"), url: "https://news.google.com/rss/articles/CBMitAFBVV95cUxNNjJwNmZBSmQtTW1WVVp6TXZ0dVF0UW1OdnFzdWkxNDBlTjBaMmgtVmZXZkRlbC1IUWNCakpFOFpRVmZBYWVoLTh1NTAxZnVNMTduX2MyMlBfaXFETG5BajhmVnM0OGRHV2Q5b3RDcXhYOTQ1UE82Wk5WSFEtY0hEd2RWeDJPTElhbXV0ckFESm9ickVOZmdPX0RWVEthS2Zaa2VfeUdhbnVFZHNBVldWeUtrVEQ?oc=5" },
  { id: "temu_new019", title: "Temu美国半托管头程物流升级，FEDEX双清包税到门", content: "Temu美国仓半托管模式升级头程物流，与FEDEX合作提供双清包税到门服务。卖家可将货物发至Temu美国仓，由平台负责清关和末端配送，降低物流复杂度。该服务适合中小卖家，但需注意关税成本。", source: "Sohu", type: "press", platform: "temu", dimension: "", date: new Date("2025-03-28"), url: "https://news.google.com/rss/articles/CBMiUEFVX3lxTE9IOWN5V2dORHZDcE9mb3BSOTBHZG05eWE3LUUteVlScXpvRVJLZThFbHFadmVjR09QbFdmSnUzQ3VRc0RJWGxqcVM4VURFM3hR?oc=5" },
  { id: "temu_new001", title: "Temu与QIMA合作强化产品测试与平台合规，卖家需关注审核新规", content: "Temu宣布与质量检测机构QIMA合作，旨在加强平台产品测试和合规管理。此次合作将覆盖Temu平台上的所有品类，特别是针对欧洲和美国市场的电子产品、玩具、纺织品等高风险品类。QIMA将为Temu提供第三方检测服务，确保商品符合当地安全标准和法规要求。对于卖家而言，这意味着产品上架前可能需要提交更多的合规文件，如CE认证、FDA注册等。建议卖家提前与供应商沟通，确保产品具备相关认证，避免因合规问题导致下架或罚款。该合作预计在2026年第二季度全面实施。", source: "PR Newswire", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiywFBVV95cUxNbV9qX2VtajB2MGNFeTFaZFROenFwN1Y4OTd5M1pVRHNTNHFqU0o3b3dvUGlrMWdIZkRkdl9zanYzZ3QtY1FMNGt0dHJReFRfbU5scmtUZHdfTjg1S0RscG5vUHVZX2FFVXlDN0UwS0RBTHhwamltX2d1UFNmeWFERW44UzR1LTZKQWpoOS04bnJvajdnZ0ZGVUR1bWZHZGlNY2taWWNkY0lYYWVua1pBSUo5XzNKZ2lPRmpVZml6QmQzc3pyR1N2UXlqWQ?oc=5" },
  { id: "shein_new002", title: "Shein与THG Fulfil合作提升英国市场卖家服务，强化本地履约能力", content: "Shein宣布与英国物流公司THG Fulfil达成合作，以提升其英国市场卖家服务。THG Fulfil将为Shein提供仓储、拣货和配送服务，帮助卖家实现更快的本地发货。该合作旨在缩短英国消费者的收货时间，从原来的7-10天缩短至3-5天。Shein计划在2026年将英国市场的本地发货比例提升至50%以上。对于卖家而言，这意味着需要将库存提前备至THG Fulfil的英国仓库，但可享受更低的物流成本和更高的转化率。建议卖家评估自身产品在英国市场的需求，合理规划库存。", source: "Retail Gazette", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMitwFBVV95cUxNY2V1MTBZMjNfbFNRZkZzLU9uN1lDeGduVFVIeHhpSkU4RGdHUWRISnZUNGVfQl8xbFVNNzFZRG5wa1FISUYwenVzSjJiWmhObFVWd1RwYk13N2gwQTdKSTlHVTJlazAwYml5WE15SzMzdzZYeVoyQTYtb0J4SWk2aVFuQlJHQXJublFkSVZSTHM4a3F4aV9zeUNDek5KOFAzemx6ZWFLSlhDSzNmSUlzUHZNMU44amM?oc=5" },
  { id: "shein_new003", title: "Shein面临供应链工资审查，或影响欧美市场合规成本", content: "Shein近期因供应链工资问题受到媒体和监管机构关注。据Ecotextile News报道，Shein正在宣传其供应链工资水平，但与此同时，其供应商工厂的工人待遇仍面临质疑。欧盟和美国市场对供应链透明度要求日益严格，Shein可能面临更严格的合规审查。如果Shein被认定存在工资违规，可能导致罚款或市场准入限制。对于Shein卖家而言，需要确保自身供应链符合当地劳动法规，否则可能面临产品下架风险。建议卖家关注Shein的供应商合规要求，提前准备相关文件。", source: "Ecotextile News", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOd21Zb0VydUZjTHFOOXRhLXhBNENGVTBoTkN0ZTZoSFNFejFaekxxT1dreGtkWU02U3MxZnBFa3NhZDZObW5RVG1mQkU5b1hCWGR0NFVNYXlZajB3LVptSE5uWVk0YUZnWGdQeXU5Tm9PR0dEOG1CUGFBYldjdF9zUFdpNzlIU3VLM1dEUlgxemxydmFPWnp2bzBuY3V6Slo5dXh1U2lXXzVCcVhqRzV5MWM2OXZTNUx5?oc=5" },
  { id: "tiktok_new004", title: "TikTok Shop推出产品放大计划，助力卖家提升美国市场曝光", content: "TikTok Shop于2026年2月9日推出产品放大计划（Product Amplification Program），旨在帮助卖家通过付费推广和内容合作提升产品曝光。该计划将向美国市场卖家开放，参与卖家可获得流量扶持和转化率提升。具体包括：广告费用补贴、达人合作匹配、以及搜索排名优化。预计参与卖家的平均曝光量可提升30%以上。建议卖家积极报名，尤其是新品和季节性产品，可借此快速起量。同时需注意广告投入产出比，合理设置预算。", source: "MediaPost", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-02-09"), url: "https://news.google.com/rss/articles/CBMirgFBVV95cUxOMW8wcWNmd1BNM19UMm1pZUttUk0wRS1lNXZHRWk2MGR4bmRLWnZCc2loU3dqWGNXVEllUXlBYk9nU3FqVHR3azRrOFVwUWFuTTJSUnl6aUQzVEI3ZFRFaDE3ZjRfVHB6cUlKQ1UwTm05Z0xYbmZ2enU0TjN3dGdYcVBzNEstNVQ0anZlSUo0MEZOUUstRHQ3bEJraEdCT1lrcWliYW9EbXZWOFYzMVE?oc=5" },
  { id: "tiktok_new005", title: "亚马逊与TikTok正式联手，跨境电商进入货找人新纪元", content: "据雨果跨境报道，亚马逊与TikTok正式达成合作，用户可在TikTok内直接购买亚马逊商品，无需跳转。这一合作将亚马逊的供应链优势与TikTok的流量优势结合，实现“货找人”模式。目前该功能已在美国市场测试，预计2026年全面开放。对于卖家而言，这意味着可以通过TikTok内容引流至亚马逊店铺，但需注意广告投放和内容合规。建议卖家提前布局TikTok内容营销，与达人合作制作种草视频。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBOLTVyX2lsRzdMelFzT1M0RERPeFpTZ1lZY0xKSXFkc0RYdmZGQlpDRDdrTFdhS09kdXJ5Q1VZbFI3Z0FNbTV5WGNPczQ?oc=5" },
  { id: "tiktok_new007", title: "TikTok Shop美国夏季大促战报：GMV增长显著，卖家需关注备货", content: "TikTok Shop公布美国夏季大促战报，数据显示大促期间GMV环比增长120%，订单量增长80%。热销品类包括美妆、服饰和电子产品。大促期间，平台通过直播带货和短视频挑战赛拉动销售。对于卖家而言，夏季大促是重要的增长节点，建议提前2-3个月备货，并优化直播内容。同时注意物流时效，避免因发货延迟导致差评。TikTok Shop美国站目前支持海外仓和国内直发，建议使用海外仓以提升履约速度。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE13bWFBcExxMWdCeGxBdFlkRWE3VHhUT01LZURNLVhrTDk5LXBQSVlwczZIbElXOGxxeDFGdnY1RzFMSC1jRkFLZHc0V1YzMzdiSzBvejRaS3Q?oc=5" },
  { id: "aliexpress_new008", title: "亚马逊广告AI营销工具升级，卖家可更精准投放美国市场", content: "亚马逊升级其广告AI营销工具，新增自动优化出价、智能关键词推荐和受众细分功能。该工具利用机器学习分析用户行为，帮助卖家提高广告转化率。新工具已在美国站上线，预计2026年第三季度推广至欧洲站。对于卖家而言，AI工具可降低广告运营成本，提升ROI。建议卖家尽快熟悉新功能，调整广告策略。同时注意广告预算控制，避免因自动出价导致成本超支。", source: "亿邦动力网", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5rMXlhc1FEV1VpbGxSeFl5TnAwM0RpMzI4SjhxSUE1aUU0OThNNzdha28wRDBNR2tVMWNDS3hGcmgxZWV4eDJsSFI5SHFnRDR0dTBidzF3?oc=5" },
  { id: "joybuy_new009", title: "京东物流强化知识产权保护，助力品牌出海美国欧洲", content: "京东发布知识产权保护新举措，为品牌商家提供侵权监测、投诉和维权服务。该服务覆盖京东国际业务，包括美国、欧洲等市场。京东利用AI技术监测商品链接，自动识别疑似侵权商品，并协助品牌方下架。对于卖家而言，需确保所售商品不侵犯他人知识产权，否则可能面临封店风险。建议卖家在选品时进行专利和商标查询，避免使用未授权图片或设计。京东还提供品牌备案服务，通过后可获得更多保护。", source: "JD Corporate Blog", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMimwFBVV95cUxPQUxXb3ZPNmhzMGFpYnZ6SHo3aWEzQVQwdVdDcElUcFdHT2d6emMzZVc1VXFUQ0VIOWNyZDhmNzd6ZkY1V3lHaXBRLU9waVlXZFI4Q3N5b2lRTHpDQUQzSVp4MnNndnQ1S01KVzhJRUVJUkJ2Vi15YXprTTFqdDlGVVpPRkE1dE9KOEE2T3RoMUhRakZFT2F1RUlzMA?oc=5" },
  { id: "temu_new010", title: "意大利VAT税号大规模失效，Temu欧洲审核新规影响卖家", content: "据雨果跨境报道，意大利VAT税号出现大规模失效问题，导致Temu平台上的卖家无法正常销售。Temu随即加强欧洲审核，要求卖家提供有效的VAT税号和公司文件。此次事件主要影响使用虚假或无效VAT的卖家，预计将有数千个账号被限制。对于合规卖家，建议立即检查VAT税号有效性，并确保与平台信息一致。同时，Temu可能要求卖家进行视频验证，以确认公司真实性。建议卖家提前准备营业执照、法人身份证等文件。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTE54YXpNV3hRN2FWZ1lYYS1RaW9JOTJtV3lXc2FIVzNTUURYcWJSVXJfRmxYdXplTnlwVlFZdHU3am13RklLempYbUNvejg0V0U?oc=5" },
  { id: "tiktok_new011", title: "TikTok Shop全托管上线JIT模式准入与履约新规，卖家需调整备货", content: "TikTok Shop全托管模式上线JIT（Just-In-Time）模式，允许卖家无需提前备货至平台仓库，而是根据订单实时发货。该模式适用于美国市场，旨在降低卖家库存压力。但平台同时出台履约新规：卖家需在48小时内发货，否则将面临罚款。JIT模式适合高周转、轻小件商品，但要求卖家有稳定的供应链和快速发货能力。建议卖家评估自身履约能力，选择适合的模式。对于无法满足时效的卖家，仍建议使用全托管备货模式。", source: "DoNews", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiXkFVX3lxTFBqWFNvM1FLX3d5aUJiYURfa3ZYZ1RzNWJwcDJEMk9mVXZUWlRNbzBnY2R6Q2dYMXZ4ZWhqVkk4aXNzd3l4V1dTWThKSDJXSTFqVE9lZkFqcExqTUx1NXc?oc=5" },
  { id: "temu_new012", title: "Temu仓库布局详解：2026年如何开始在美国欧洲销售", content: "INQUIRER.net USA发布Temu仓库布局指南，介绍Temu在美国和欧洲的仓库网络。Temu在美国拥有超过10个仓库，主要分布在加州、德州、新泽西等地；在欧洲则与当地物流商合作，在德国、波兰、意大利等地设有分拣中心。卖家可通过Temu全托管模式将商品发往国内仓，由平台负责国际物流和本地配送。2026年，Temu计划进一步扩大海外仓规模，提升履约时效。建议卖家关注Temu的仓库地址和收货要求，确保商品符合入库标准。", source: "INQUIRER.net USA", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9qRlhlOGsyc250dWdaemY3WjFUZHJwdWlfYTlNVWVRbGxXLUhSZ2o3cWcwUi03emh4U0FwNk5lZ2Z6a2RxZ3gxTkcweTZoVlB5UzJuZ005UlVfWUEwc2NhTnlpSDFOd1k?oc=5" },
  { id: "aliexpress_new013", title: "亚马逊智能仓库应对Temu和Shein竞争，提升美国履约效率", content: "亚马逊推出智能仓库计划，通过自动化和机器人技术提升仓储效率，以应对Temu和Shein的低价竞争。该计划将在美国多个仓库部署，预计将订单处理时间缩短30%。亚马逊还计划降低部分品类的配送费，以吸引卖家使用FBA。对于卖家而言，智能仓库意味着更快的发货速度和更低的物流成本。建议卖家评估FBA与自发货的利弊，对于高周转商品优先使用FBA。同时注意亚马逊的库存管理政策，避免长期仓储费。", source: "Notebookcheck", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMinAFBVV95cUxPWU5KQnpmOHpYZ21penN1Zno3RmNVb25IMmJGUC1KX2hmckVGUUF2SldRbGpEVlZFRXVrYjFUeGtvSVh2WUhEM1lJVXpqbFNDNGE1WXJ0Nlo0TUdGOEZCSGZUZXQwRFpkRHl1TmJXcWlCOHRfa0Z3QVI1RXh6TlN5Ty1IaUJXcnAtLVlidFZ1Vjk3V0g2elZzUFRLQlY?oc=5" },
  { id: "shein_new014", title: "Shein和Temu面临关税退税集体诉讼，卖家需关注合规风险", content: "Shein和Temu在美国面临集体诉讼，指控其未向消费者退还多收的关税。诉讼称，两家平台利用小额包裹免税政策，但实际向消费者收取了高于应缴的关税。如果败诉，平台可能面临巨额赔偿，并可能调整定价策略。对于卖家而言，需确保商品申报价值准确，避免因低报或高报引发法律风险。建议卖家与平台沟通，了解关税计算方式，并保留相关凭证。同时关注诉讼进展，及时调整运营策略。", source: "WWD", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMipAFBVV95cUxNY0dobkFGMTg3TW5yRExSZTF4MHQ1dmVRMVVTZUxHX2ZjWVFLSDdVZEtxMW1OV2NsM2ZXNW9FeWduREp6cUI5MHktSzZMX1dkVmVDd1VwdWlxV2NfR3FGQVJDazVXMDB6V2lDY0NFSk1uaXU3VGpmSzk4S2NIQkI4aWZ3MDFJMkRwYk5rSF81U2s2UndUbjdhRlhmY2F5XzBWMUJkTg?oc=5" },
  { id: "joybuy_new015", title: "京东国际自营入驻指南发布，助力中国卖家开拓美国欧洲市场", content: "京东国际自营平台发布入驻指南，面向中国卖家开放美国、欧洲等市场。京东国际自营模式要求卖家将商品发往京东海外仓，由京东负责销售和配送。入驻条件包括：公司注册满1年、有品牌授权或自有品牌、产品符合目标市场标准。京东提供流量扶持和营销支持，佣金约为8-15%。对于卖家而言，京东国际自营可降低运营门槛，但需承担库存风险。建议有品牌和供应链优势的卖家优先考虑，尤其是电子产品、家居等品类。", source: "新浪财经", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxOdWlURkNPQmo3OU5US0VmaGh0OWpQclRKb3o4ZUlMRGVCUzZkX1BKVHR5STRCaXFDTG1oTHhtUzltelhMa3M1M09xU2FuX3VnUFl1a2x4Q3c1YWlaRG5fUVZTMUZoQ1hieEZrOXZDYUczR0pnSmVXalU2cUtubHRUamJPUmo?oc=5" },
  { id: "tiktok_new016", title: "TikTok Shop与Tokopedia将于5月1日起对卖家收取物流服务费", content: "TikTok Shop与Tokopedia宣布自2026年5月1日起，对卖家收取物流服务费。该费用适用于使用平台物流服务的订单，费率根据商品重量和目的地计算，预计每单增加0.5-2美元。此次调整主要影响美国市场（TikTok Shop）和印尼市场（Tokopedia），但TikTok Shop美国站卖家需注意成本上升。建议卖家优化包装重量，或选择自有物流以降低成本。同时关注平台是否提供补贴或优惠期。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE50clJHWU1qb1dFY3J1YWpyNGNyLWp5WDNyaEFHWTBxQklhWFR5blB3Q25Wam51V2ZibmZ3NUg1bG9UaEtzY1haQy13cnZSUUZuNUEycjEyU0c?oc=5" },
  { id: "temu_000", title: "Temu与意大利邮政、奥地利邮政签署合作备忘录，扩大欧洲本地分拣能力支持Local-to-Local模式", content: "Temu近日与意大利邮政、奥地利邮政及其旗下Express One和Aras Kargo签署合作备忘录，旨在加强欧洲物流网络布局。此次合作将扩大分拣能力，支持Local-to-Local物流模式发展，并提升整体服务质量，为欧洲消费者和卖家提供更高效的履约体验。新合作有望简化当地卖家订单履约流程，缩短配送时间，降低物流成本。", source: "DoNews", type: "press", platform: "temu", dimension: "", date: new Date("2025-11-25"), url: "https://www.donews.com/news/detail/4/6270495.html" },
  { id: "tiktok_001", title: "TikTok Shop自1月8日起上调欧盟五国佣金至9%，电子品类享7%优惠，新卖家可享60天4%费率", content: "TikTok Shop自2026年1月8日起对德国、法国、意大利、西班牙和爱尔兰五国站点佣金从5%上调至9%。电子产品等部分品类适用7%优惠费率。新入驻商家在15天内上架至少5件商品可享最长60天的4%优惠佣金率。", source: "ecommercenews.eu", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-01-08"), url: "https://ecommercenews.eu/tiktok-shop-raises-seller-fees-in-europe/" },
  { id: "temu_002", title: "Temu在欧盟27国推出Y2半托管模式，卖家可从中国直发免去海外仓备货，履约时效最长21天", content: "Temu于2025年11月底在欧盟27国推出Y2半托管履约模式。该模式允许中国卖家从国内直接发货，无需海外仓备货，降低库存和资金压力。履约时效最长21天。平台提供末端配送和流量支持，主要面向中小卖家。", source: "ChineSellers / YUGUO", type: "press", platform: "temu", dimension: "", date: new Date("2025-11-28"), url: "https://chinesellers.substack.com/p/temus-new-hybrid-logistics-y2-model" },
  { id: "tiktok_003", title: "亚马逊与TikTok联手推出“货找人”新模式，跨境电商格局生变", content: "亚马逊与TikTok正式达成合作，将推出“货找人”新购物模式，通过短视频和直播推荐商品，实现流量与电商的深度融合。该模式预计首先在美国市场试点，允许卖家在TikTok上直接挂载亚马逊商品链接，用户点击后跳转至亚马逊完成购买。此举将大幅降低卖家获客成本，提升转化率。对卖家而言，需尽快布局短视频内容营销，优化商品展示页以适应社交电商场景。同时，亚马逊可能调整广告竞价规则，优先扶持参与该模式的卖家。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBOLTVyX2lsRzdMelFzT1M0RERPeFpTZ1lZY0xKSXFkc0RYdmZGQlpDRDdrTFdhS09kdXJ5Q1VZbFI3Z0FNbTV5WGNPczQ?oc=5" },
  { id: "temu_004", title: "Temu停止中美直邮服务，新关税规则下转向本地仓模式", content: "受美国新关税规则影响，Temu宣布停止从中国直接向美国消费者发货，转而要求卖家使用美国本地仓库进行配送。此举将增加卖家仓储和物流成本，但可规避关税风险。Temu已在美国多地租赁仓库，并推出半托管模式，鼓励卖家备货至美国仓。卖家需评估自身资金和库存能力，尽快调整供应链布局，否则可能面临订单下降风险。", source: "MSN", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMipwNBVV95cUxQS3VYUkJ6NGZRWjNqbzc2NWY0NVdtZ0MySG93cURGV1NPZm14QXh0Wm1NR2M4ODdva1pmSkhwX3F0UHNJUGFOTnhqbDZhWjY5Sm5OSmtya3dKSXZrZC15b1ptbWtDNXBFSW5rMzJvS3MtZmx5X0Y0dFVycUROVlQ1S1R3VmZCSFpjWldWd0RyTWR4V0pveVo0OEZyMmZZbHMwYlktWWVoMklaY3YxUGZIR0M2ZjFsbXBVSllwQklYWW1zM2lYUXNubk5qcjNjbzBQR2tneE9yV2Q4bDNuQkN4ZmNydjFOUFpTRS1nS2FJQ0tBUHZzWXBESThRTUNlUzNFQWE5aTlXWlJ5ck16UGFLaUNWNGswbEVjaHpJUnRhSUx1Rk9ITWdWRjdGa3ZJR1gtbWRNaV9pWkl5Vm95SFo2SG9sVFdadVdKNjhCOWRtWUhFbExVZDJqVnZldmVxZWRCaW5ISE5jT0NjU0RseVdyY0dmVFVPSl90a2IyYWEzX0t3TG1fVXlvOTRnMzYtZUtnX1RvSExwbl8yRjN3NjEtVEZfdmtKYm8?oc=5" },
  { id: "tiktok_005", title: "TikTok Shop美国夏季大促战报：单量暴涨80%，第三方海外仓成关键", content: "TikTok Shop公布美国夏季大促战报，4月单量环比暴涨80%，其中使用第三方海外仓的卖家发货时效缩短至2天内，退货率降低15%。平台数据显示，家居、美妆、电子产品品类增长最快。TikTok Shop正加速推进全托管和半托管模式，要求卖家提升履约能力。建议卖家优先接入海外仓，优化库存管理，并利用TikTok的短视频和直播流量红利。", source: "搜狐网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMijAFBVV95cUxOVWoteElJclRkYW5sT0cybUZfWDJjNjBXSGRQTmdFMlI5MGJ3SG1WaVBWdk9GZVhvV3Nma0ljVTBEODJ4QXpOY3cxWHR1Y05SdEsxb3BZWkZ4N2tVUlRjM2pvbDN5eUNGMGxUalhoalBULWFJdU1ORGU4X2hSMm5wdWRCNWQ4YU1MWFVVQQ?oc=5" },
  { id: "temu_006", title: "Temu波兰用户量超本土龙头，欧洲市场扩张加速", content: "Temu在波兰的用户量已超过本土电商平台Allegro，成为波兰流量第一的电商平台。Temu通过低价策略和本地化运营（如波兰语客服、本地支付）迅速占领市场。目前Temu在欧洲多国推行半托管模式，要求卖家备货至欧洲仓。卖家需关注欧洲合规要求（如CE认证、EPR），并优化物流成本以维持利润。", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5rMXlhc1FEV1VpbGxSeFl5TnAwM0RpMzI4SjhxSUE1aUU0OThNNzdha28wRDBNR2tVMWNDS3hGcmgxZWV4eDJsSFI5SHFnRDR0dTBidzF3?oc=5" },
  { id: "temu_007", title: "Temu欧洲站点验证升级：强制对公与视频审核，多数卖家账号受限", content: "Temu欧洲站点升级卖家验证流程，要求卖家提供对公银行账户信息并接受视频审核。未完成验证的卖家账号将被限制提现和上新。此举旨在打击虚假注册和税务违规，但导致大量中小卖家账号受限。卖家需尽快准备营业执照、法人身份证明等材料，并安排法人参与视频面审。建议提前联系Temu招商经理获取指导。", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiVEFVX3lxTE8yaUlHOW9yZmtGRURKT01oMU90QkdTV0ZYRGZwVlFvazBZMHJWWFl6ZmF3cnlaQmNUQXhLeWNuVnV0bXNKRzBNcVk3MEMxUV9NNnVQRg?oc=5" },
  { id: "shein_009", title: "SHEIN加强欧洲合规管控，不合规商品面临下架风险", content: "SHEIN宣布加强欧洲市场合规管控，要求所有在售商品必须符合欧盟CE认证、REACH法规和WEEE指令。平台将启动系统排查，对未上传合规文件或信息不符的商品进行下架处理。涉及品类包括电子电器、玩具、纺织品等。卖家需尽快自查产品合规性，联系供应商获取认证文件，并在后台及时上传。否则可能面临罚款和店铺限制。", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE12T3Y3U3lYN2pkZklGVXp6eGlMdjdOcUtXdTFONm92YmpkcjAyUENwWTRQLWE3bjVVTW5HOGM2c2VXbDFLRml4NWlaSUg?oc=5" },
  { id: "shein_010", title: "SHEIN将于4月中上旬限制美区商家自发货功能，转向平台物流", content: "SHEIN宣布自2026年4月中上旬起，限制美国站商家使用自发货功能，要求所有订单必须通过SHEIN官方物流或合作海外仓配送。此举旨在提升履约时效和用户体验，但将增加卖家物流成本。卖家需提前对接SHEIN物流系统，或备货至SHEIN美国仓库。建议评估自身库存和资金情况，选择适合的物流方案，避免订单延误。", source: "亿邦动力网", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1INy1tWEFJZXgtYXhaN0VKQU0zR1drRTJNc19EWU9BMC1JR2otRjdfV01BSTVsM1U5eDlsWnRMUUN6a01OSDRMRkZCYkwyZkZIbnVaS01n?oc=5" },
  { id: "tiktok_011", title: "TikTok Shop全托管上线JIT模式准入与履约新规，卖家需快速响应", content: "TikTok Shop全托管模式上线JIT（Just-In-Time）模式准入与履约新规，要求卖家在接到订单后48小时内完成发货，否则将面临罚款和流量降权。该模式适用于美国、欧洲站点，旨在减少库存压力但要求卖家具备快速响应能力。卖家需优化供应链流程，与供应商建立快速反应机制，或使用海外仓备货以缩短履约时间。", source: "DoNews", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiXkFVX3lxTFBqWFNvM1FLX3d5aUJiYURfa3ZYZ1RzNWJwcDJEMk9mVXZUWlRNbzBnY2R6Q2dYMXZ4ZWhqVkk4aXNzd3l4V1dTWThKSDJXSTFqVE9lZkFqcExqTUx1NXc?oc=5" },
  { id: "tiktok_012", title: "TikTok Shop推出跨境POP商家中心APP，提升卖家管理效率", content: "TikTok Shop正式推出跨境POP（Point of Purchase）商家中心APP，支持卖家在移动端完成订单管理、商品上架、数据分析和客服回复。该APP目前面向美国、欧洲站点卖家开放，支持多语言界面。卖家可实时查看店铺数据，快速响应客户咨询。建议卖家下载使用，提升运营效率，同时注意保护账号安全。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE8zZUVpcU11YmJWY2lDZ0FpVGFpU3R6dk9UbjBGenFYbkpDOVdDU2UzWFg3Q3lFcVVDWkE3N1pQek5DRHc3X3FVQjlJaGo?oc=5" },
  { id: "shein_013", title: "SHEIN启动大码女装专项招商，诚邀优质供应商共拓千亿蓝海", content: "SHEIN宣布启动大码女装专项招商，面向美国、欧洲市场招募优质供应商。SHEIN数据显示，大码女装复购率是行业平均的1.8倍，市场潜力达2180亿美元。平台将提供流量扶持、专属活动资源和供应链支持。供应商需具备快速反应生产能力，支持小批量多款式。建议有相关产能的卖家积极入驻，抓住细分市场增长机会。", source: "中华网", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMibkFVX3lxTE9RRmRWLWh3VG9nS2FsdHBkb0JzRXNJVlZWb3RKd3hnRGhJNlZ3V0sxMUlVaFFjQk1SUGNjUXJLbDhxRXRjdEp1X3lLaUV5Rno3RTBEQ2ZIWUh3bUtleFc0RDhKZ3ZKbEFKajVLcEZn?oc=5" },
  { id: "shein_014", title: "SHEIN半托管加拿大站招商，卖家可自主定价和履约", content: "SHEIN宣布开放加拿大站半托管模式招商，卖家可自主定价、管理库存和选择物流方式，平台提供流量支持和支付服务。该模式适合有海外仓或本地配送能力的卖家。SHEIN加拿大站用户增长迅速，家居、服饰品类需求旺盛。卖家需注意加拿大税务和合规要求，如GST/HST登记。建议提前评估物流成本，制定有竞争力的定价策略。", source: "手机新浪网", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9OOXpxVGd0aWFtbTF1Q2NUMGlTb3VVdmJTY2o3aU8ycmN4VUdDNmppVnI5QTBqaXpsRDByYUZnY2dDb09WZDdUWTJUNTFPZzIzMGJhNjVVcmpSVk1fSVM4cjdXOA?oc=5" },
  { id: "temu_015", title: "Temu用户量逼近1.3亿，欧盟电商强制“一键退货”政策影响卖家", content: "Temu全球用户量已逼近1.3亿，其中欧洲用户占比超40%。与此同时，欧盟拟推行强制“一键退货”政策，要求电商平台为消费者提供便捷退货入口，卖家需承担退货成本。该政策预计2026年下半年生效，将增加卖家退货处理费用。建议卖家优化产品描述和图片，减少退货率，同时与物流商协商退货处理方案。", source: "潮新闻", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMic0FVX3lxTE9OVkNHeExaNUZjSXEtUDhMeHVWcGdCU1RvMVJjSE83MGVXSWdSc005dTYzYnJHY0VyaHM2RHgyZ0RFc21BTEdqMXQxbHpJZktMd0RuVjNfb2R5TWtQRkRWQ2RKbU52RE5ndUJ3bXVGNmFSUlE?oc=5" },
  { id: "joybuy_016", title: "京东国际自营入驻指南发布，开启中国跨境市场黄金通道", content: "京东国际自营发布最新入驻指南，面向海外品牌和卖家开放。入驻商家可享受京东物流、营销和数据分析支持，商品将打上“京东自营”标签提升信任度。京东国际自营覆盖美妆、母婴、保健品等品类，要求卖家提供品牌授权和合规文件。建议有品牌资源的卖家优先入驻，利用京东的供应链和用户基础拓展中国市场。", source: "新浪财经", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxOdWlURkNPQmo3OU5US0VmaGh0OWpQclRKb3o4ZUlMRGVCUzZkX1BKVHR5STRCaXFDTG1oTHhtUzltelhMa3M1M09xU2FuX3VnUFl1a2x4Q3c1YWlaRG5fUVZTMUZoQ1hieEZrOXZDYUczR0pnSmVXalU2cUtubHRUamJPUmo?oc=5" },
  { id: "aliexpress_017", title: "阿里速卖通品牌出海顶级峰会仅99个品牌受邀，聚焦欧美市场", content: "阿里速卖通宣布将于2026年5月举办品牌出海顶级峰会，仅邀请99个品牌参与，重点聚焦欧美市场。峰会主题包括品牌建设、本地化营销和合规策略。受邀品牌将获得速卖通流量扶持、专属运营指导和市场推广资源。速卖通正加速从低价平台向品牌化转型，卖家需提升产品品质和品牌形象，以获取更多平台资源。", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE4zSEJkMWxCMWdTaTNxakhwT3B2SW1XUUx4dFQzTUJ4aEh5VTJ1bVZTQnVmZklrc1RsMWFYUFRnZlA2Q3lMMUtnSVFLVVo?oc=5" },
  { id: "aliexpress_018", title: "速卖通男女服饰行业泛欧独立运营通知，卖家需调整运营策略", content: "速卖通发布男女服饰行业泛欧独立运营通知，要求卖家针对欧洲不同国家进行独立运营，包括独立定价、库存管理和营销活动。平台将根据各国消费者偏好和法规差异，提供定制化工具。卖家需分析各国市场数据，制定差异化策略，同时注意欧洲税务和合规要求。建议使用速卖通的数据分析工具优化选品和定价。", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiWkFVX3lxTE8yaGROaXo2QmRNQ2RGY3hFTW1jeGhSMnJacl9taFhSYml6OW1pdUJiVHgtSVJMcGc0NDRIZFBaSWhwbnBwU2F2T1FVbGhTVHpHV0tpVC1hcEpadw?oc=5" },
  { id: "temu_019", title: "亚马逊推出智能仓库应对Temu和SHEIN竞争，提升履约效率", content: "亚马逊宣布推出智能仓库系统，通过AI和机器人技术提升仓储和分拣效率，以应对Temu和SHEIN的低价竞争。新系统可将订单处理时间缩短30%，降低仓储成本。该仓库首先在美国上线，未来扩展至欧洲。卖家可受益于更快的配送速度和更低的仓储费用，但需适应新的入库和库存管理流程。建议卖家优化库存周转，减少滞销品。", source: "Notebookcheck", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMinAFBVV95cUxPWU5KQnpmOHpYZ21penN1Zno3RmNVb25IMmJGUC1KX2hmckVGUUF2SldRbGpEVlZFRXVrYjFUeGtvSVh2WUhEM1lJVXpqbFNDNGE1WXJ0Nlo0TUdGOEZCSGZUZXQwRFpkRHl1TmJXcWlCOHRfa0Z3QVI1RXh6TlN5Ty1IaUJXcnAtLVlidFZ1Vjk3V0g2elZzUFRLQlY?oc=5" }
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
            scales: {
                y: {
                    title: { display: true, text: '$/FEU (40尺柜)' },
                    beginAtZero: false,
                    grace: '10%'
                }
            }
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
            scales: {
                y: {
                    title: { display: true, text: '$/kg' },
                    beginAtZero: false,
                    grace: '10%'
                }
            }
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

    // 原油价格图表
    if (data.oilPrice) {
        var oilDatasets = [
            {
                label: 'Brent (布伦特)',
                data: data.oilPrice.brent,
                borderColor: '#1a1a1a',
                backgroundColor: '#1a1a1a20',
                tension: 0.3,
                fill: false,
                pointRadius: 4,
                borderWidth: 2
            },
            {
                label: 'WTI (西德克萨斯)',
                data: data.oilPrice.wti,
                borderColor: '#e65100',
                backgroundColor: '#e6510020',
                tension: 0.3,
                fill: false,
                pointRadius: 4,
                borderWidth: 2
            }
        ];
        freightChartInstances.oil = new Chart(document.getElementById('oilChart'), {
            type: 'line',
            data: { labels: labels, datasets: oilDatasets },
            options: {
                responsive: true,
                plugins: { legend: { position: 'bottom', labels: { font: { size: 12 } } } },
                scales: {
                    y: {
                        title: { display: true, text: '$/barrel' },
                        beginAtZero: false,
                        grace: '10%'
                    }
                }
            }
        });
    }
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

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
  { id: "k2", title: "TikTok Shop墨西哥市场开放自运营模式，启动60天免佣金招商", content: "TikTok Shop加速拉美布局，4月开放美国至墨西哥跨境通道，启动60天免佣金政策吸引卖家入驻，重点招募大件商品卖家。", source: "新浪财经 / 雨果跨境", type: "press", platform: "tiktok", dimension: "investment", date: new Date("2026-04-07"), url: "https://www.cifnews.com" },
  { id: "j6", title: "Joybuy采用Competera AI定价平台，优化欧洲市场价格竞争力", content: "京东Joybuy与Competera定价平台合作，利用AI驱动的动态定价策略优化欧洲市场的价格竞争力，实现实时价格调整。", source: "Retail Tech Hub", type: "press", platform: "joybuy", dimension: "pricing", date: new Date("2026-04-07"), url: "https://retailtechinnovationhub.com" },
  { id: "s1", title: "SHEIN将于4月限制美区商家自发货功能，强化官方物流管控", content: "SHEIN宣布2026年4月中上旬限制美区商家自发货功能，要求更多订单通过SHEIN官方物流渠道履约，以提升配送时效和服务一致性。", source: "亿邦动力", type: "press", platform: "shein", dimension: "logistics", date: new Date("2026-04-02"), url: "https://www.ebrun.com" },
  { id: "k7", title: "TikTok Shop德国市场运营满一年，X世代贡献37%销售额", content: "TikTok Shop德国运营一周年，X世代（1965-1980年出生）贡献37%销售收入，打破TikTok仅服务年轻用户的认知，用户群体正在扩展。", source: "Ecommerce News Europe", type: "press", platform: "tiktok", dimension: "traffic", date: new Date("2026-04-02"), url: "https://ecommercenews.eu" },
  { id: "t10", title: "Temu因关税上调面临美国消费者集体诉讼，要求退还多收关税", content: "美国消费者对Temu和Shein提起集体诉讼，要求退还因de minimis规则取消后多收的关税费用。平台此前已宣布对美国市场进行价格调整。", source: "WWD", type: "press", platform: "temu", dimension: "compliance", date: new Date("2026-04-01"), url: "https://wwd.com/sourcing-journal/trade/shein-temu-class-action-lawsuit-ieepa-tariff-refund-1238917787/" },
  { id: "t1", title: "Temu推出VMI预入仓与JIT即时发货两种履约模式，加速本地化配送", content: "Temu为卖家提供VMI（预入仓至Temu仓库）和JIT（下单后发货至仓库）两种履约方案。标准配送5-10个工作日，快速配送3-8个工作日。美国、欧洲等市场已启用本地仓发货。", source: "ShipBob", type: "press", platform: "temu", dimension: "logistics", date: new Date("2026-03-30"), url: "https://www.shipbob.com/blog/temu-shipping-guide/" },
  { id: "t2", title: "Pitney Bowes与Temu达成物流集成合作，接入ShipAccel配送平台", content: "物流服务商Pitney Bowes将Temu集成至其ShipAccel平台，为Temu卖家提供更多配送选项和物流管理工具，降低跨境物流成本。", source: "Business Wire", type: "press", platform: "temu", dimension: "logistics", date: new Date("2026-03-30"), url: "https://www.businesswire.com" },
  { id: "t9", title: "Temu孵化自营品牌，从纯平台模式向自营+平台混合模式转型", content: "拼多多旗下Temu开始孵化自营品牌，标志着从纯第三方平台模式向自营+平台混合模式转型，可能改变其供应链控制力和利润结构。", source: "亿邦动力", type: "press", platform: "temu", dimension: "investment", date: new Date("2026-03-30"), url: "https://www.ebrun.com" },
  { id: "t8", title: "Temu和Shein广告投放呈间歇性特征，大规模投放与暂停交替影响竞价市场", content: "2026年Temu和Shein广告投放呈明显间歇性：大规模投放与暂停交替进行，导致广告竞价市场剧烈波动，对其他电商平台的广告成本和流量获取产生连锁影响。", source: "DAC Group", type: "press", platform: "temu", dimension: "traffic", date: new Date("2026-03-28"), url: "https://www.dacgroup.com/insights/blog/paid-media/temu-shein-2026-ad-auction-volatility-media-buyers/" },
  { id: "k4", title: "TikTok Shop占美国社交电商18.2%份额，Ulta和L'Oréal等大品牌入驻", content: "TikTok Shop占美国社交电商总GMV的18.2%。Ulta Beauty、Sally Beauty、L'Oréal等大品牌纷纷入驻，直播购物ROI持续增长。", source: "eMarketer", type: "press", platform: "tiktok", dimension: "brand", date: new Date("2026-03-26"), url: "https://synder.com/blog/tiktok-shop-fees/" },
  { id: "k6", title: "TikTok Shop升级FBT物流方案，为美区跨境卖家提供一站式履约", content: "TikTok Shop优化FBT（Fulfilled by TikTok）物流服务，为美区跨境POP商家提供仓储、拣货、包装和配送一站式方案，缩短配送时效。", source: "驱动之家", type: "press", platform: "tiktok", dimension: "logistics", date: new Date("2026-03-25"), url: "https://www.mydrivers.com" },
  { id: "s7", title: "SHEIN全球活跃用户超2.5亿，C2M模式驱动每日上新约2000个SKU", content: "SHEIN通过C2M模式驱动产品策略，每日新增约2000个SKU，小批量100-200件测试后根据实时数据决定是否规模化。全球活跃用户超2.5亿。", source: "Accio", type: "press", platform: "shein", dimension: "traffic", date: new Date("2026-03-20"), url: "https://www.accio.com/business/shein-package" },
  { id: "a6", title: "AliExpress标准配送15-45天，Choice优选商品缩短至7-15天", content: "AliExpress标准配送时效为15-45天，高级配送7-15天。Choice标签商品通过菜鸟物流网络保证10-12天送达，配送时效差距正在缩小但仍落后于Amazon。", source: "Consumoteca", type: "press", platform: "aliexpress", dimension: "logistics", date: new Date("2026-03-20"), url: "https://consumoteca.com.co/articles/en/aliexpress-late-delivery-what-to-do-stepbystep-complete-2026-guide" },
  { id: "a1", title: "AliExpress Choice项目升级：严选卖家和商品，承诺欧洲7-15天达", content: "AliExpress Choice项目2026年升级，基于履约速度、质量一致性和客户反馈严选卖家和商品。Choice标签商品承诺欧洲7-15天送达、满20欧元免运费、90天退货窗口。", source: "AD HOC NEWS", type: "press", platform: "aliexpress", dimension: "logistics", date: new Date("2026-03-18"), url: "https://www.ad-hoc-news.de/news/ueberblick/aliexpress-choice-alibaba-s-new-premium-product-selection-revolutionizes/68943805" },
  { id: "s8", title: "SHEIN在法国新增5家线下门店，加速欧洲线下零售布局", content: "继巴黎首店后，SHEIN在法国5个城市新开门店。线下渠道有助于降低退货率、提升品牌信任度，并规避部分跨境物流成本。", source: "Modaes", type: "press", platform: "shein", dimension: "brand", date: new Date("2026-03-17"), url: "https://www.modaes.com/global/topics/shein" },
  { id: "k8", title: "TikTok Shop升级美区ACE商家经营方法论，强化品牌运营体系", content: "TikTok Shop发布升级版美区ACE商家经营方法论，帮助品牌商家系统化运营，涵盖内容策略、达人合作和广告投放的全链路指导。", source: "品玩", type: "press", platform: "tiktok", dimension: "brand", date: new Date("2026-03-17"), url: "https://www.pingwest.com" },
  { id: "s4", title: "SHEIN IPO进程受阻，战略重心转向亚洲市场应对监管压力", content: "SHEIN的IPO计划因中国背景和ESG争议持续面临不确定性。公司正将战略重心向亚洲市场倾斜，同时加强与中国政府的关系以获取政策支持。", source: "Tech in Asia", type: "press", platform: "shein", dimension: "investment", date: new Date("2026-03-16"), url: "https://www.techinasia.com" },
  { id: "j1", title: "京东Joybuy登陆欧洲六国，首批10万+商品，JoyExpress提供当日达", content: "京东于2026年3月16日在英、法、德、荷、比、卢六国推出Joybuy。首批上线超10万商品，通过JoyExpress物流网络为1700万人提供当日达服务，同步推出JoyPlus订阅会员。", source: "Reuters / Inside Retail", type: "press", platform: "joybuy", dimension: "investment", date: new Date("2026-03-16"), url: "https://insideretail.asia/2026/03/16/targeting-amazon-jd-to-launch-joybuy-in-europe/" },
  { id: "j3", title: "京东以约22亿欧元收购Ceconomy，获取MediaMarkt线下渠道和欧洲供应链", content: "京东通过约22亿欧元收购Ceconomy（MediaMarkt母公司），获得欧洲最大消费电子零售网络的线下渠道、仓储物流基础设施和本地供应链能力。", source: "CryptoRank", type: "press", platform: "joybuy", dimension: "investment", date: new Date("2026-03-16"), url: "https://cryptorank.io/ru/news/feed/17e4b-chinas-jd-com-expands-into-europe-with-joybuy-platform" },
  { id: "j4", title: "DHL与京东签署战略合作，为德国品牌对接6亿中国消费者", content: "DHL与京东签署战略谅解备忘录，利用DHL欧洲物流网络和京东中国市场渠道，帮助德国品牌通过京东跨境平台进入中国市场。", source: "Logistics Manager", type: "press", platform: "joybuy", dimension: "logistics", date: new Date("2026-03-16"), url: "https://www.logisticsmanager.com" },
  { id: "j5", title: "Joybuy定位品牌导向平台，与Temu低价模式形成差异化竞争", content: "Joybuy官方定位为品牌导向平台，与国际和欧洲本地品牌合作提供全品类商品。与Temu极致低价策略不同，Joybuy强调品质和品牌信任度，配合自建物流实现快速配送。", source: "Joybuy Official", type: "press", platform: "joybuy", dimension: "brand", date: new Date("2026-03-16"), url: "https://about.joybuy.com/about/" },
  { id: "t4", title: "美国取消de minimis免税规则，Temu和Shein面临120%-145%关税", content: "美国取消800美元以下包裹免税政策后，Temu和Shein跨境直邮商品面临120%-145%关税。原价10美元商品关税后成本升至24.5美元，直接冲击低价模式根基。", source: "WWD", type: "press", platform: "temu", dimension: "pricing", date: new Date("2026-03-15"), url: "https://wwd.com/sourcing-journal/trade/shein-temu-class-action-lawsuit-ieepa-tariff-refund-1238917787/" },
  { id: "a5", title: "AliExpress 2026年品类结构转型：从3C数码转向家居健康和可修复电子产品", content: "AliExpress热销品类正在转型，模块化家居健康工具、可修复电子产品和本地化时尚配饰取代传统蓝牙耳机和LED灯具，成为新增长品类。", source: "Alibaba Insights", type: "press", platform: "aliexpress", dimension: "investment", date: new Date("2026-03-15"), url: "https://www.alibaba.com/product-insights/aliexpress-top-selling-products-2026-market-shifts-profit-margins-winning-strategies.html" },
  { id: "t7", title: "Temu收紧卖家入驻标准，引入AI商品健康评分和欧盟EPR合规要求", content: "Temu加强卖家审核，要求面向欧盟市场的卖家完成EPR注册，并在卖家后台嵌入AI驱动的商品健康评分系统，提升商品质量管控。", source: "Alibaba Insights", type: "press", platform: "temu", dimension: "seller", date: new Date("2026-03-14"), url: "https://www.alibaba.com/product-insights/detailed-temu-store-setup-steps-2026.html" },
  { id: "s9", title: "SHEIN向外部品牌开放供应链服务，邀请品牌使用其柔性供应链能力", content: "SHEIN通过Xcelerator项目向外部品牌开放其按需生产和物流服务，帮助品牌实现小单快反。此举将SHEIN从纯零售商转型为供应链服务平台。", source: "Business of Fashion", type: "press", platform: "shein", dimension: "brand", date: new Date("2026-03-12"), url: "https://www.businessoffashion.com/articles/sustainability/exclusive-inside-sheins-xcelerator-an-on-demand-supply-chain-and-logistics-service-open-to-brands/" },
  { id: "s2", title: "SHEIN投资14.5亿美元建设华南智能供应链，开放Xcelerator服务给外部品牌", content: "SHEIN在华南投资超14.5亿美元建设智能供应链系统，并向外部品牌开放Xcelerator按需供应链和物流服务，将自身供应链能力商业化。", source: "Business of Fashion", type: "press", platform: "shein", dimension: "logistics", date: new Date("2026-03-10"), url: "https://www.businessoffashion.com/articles/sustainability/exclusive-inside-sheins-xcelerator-an-on-demand-supply-chain-and-logistics-service-open-to-brands/" },
  { id: "k5", title: "TikTok Shop在东南亚市场份额升至22%，成为印尼第二大电商平台", content: "TikTok Shop在印尼市场份额从2023年5%跃升至2025年约22%，仅次于Shopee，在东南亚对Shopee和Lazada构成实质性竞争威胁。", source: "SocialEcho", type: "press", platform: "tiktok", dimension: "traffic", date: new Date("2026-03-10"), url: "https://www.socialecho.net/en/blog/docs/tiktok-shop-2026-guide" },
  { id: "a3", title: "AliExpress同样受美国de minimis取消冲击，部分品类关税升至145%", content: "美国取消de minimis免税规则后，AliExpress卖家面临最高145%的关税。平台正调整定价策略，卖家需重新评估美国市场的利润空间。", source: "DSers", type: "press", platform: "aliexpress", dimension: "pricing", date: new Date("2026-03-10"), url: "https://www.dsers.com/blog/us-tariffs-aliexpress-dropshipping/" },
  { id: "k1", title: "TikTok Shop佣金费率稳定在6%-8%，新卖家享3%优惠期", content: "2026年TikTok Shop美区标准佣金6%（部分品类8%），英区9%。另收约2%-3%支付处理费。新卖家入驻前期可享3%优惠佣金率，相比2023年1.8%补贴期已大幅上升。", source: "Printify", type: "press", platform: "tiktok", dimension: "seller", date: new Date("2026-03-08"), url: "https://printify.com/blog/tiktok-shop-fees/" },
  { id: "s6", title: "SHEIN欧盟月活用户达1.56亿，但增速从11.6%放缓至6.9%", content: "SHEIN在欧盟月均活跃用户约1.56亿（2025.8-2026.1），同比增长6.9%，较此前11.6%的增速明显放缓。欧洲市场趋于饱和，用户增长进入平台期。", source: "Chinesellers", type: "press", platform: "shein", dimension: "traffic", date: new Date("2026-03-07"), url: "https://chinesellers.substack.com/p/sheins-eu-momentum-slows-as-market" },
  { id: "t6", title: "Temu半托管模式费率更新：平台承担仓储、履约、客服和退货物流", content: "Temu半托管模式下，平台负责仓储、区域配送中心履约、多语言客服和退货物流。卖家专注供货和定价，平台抽取佣金。该模式正在欧美市场加速推广。", source: "Alibaba Insights", type: "press", platform: "temu", dimension: "seller", date: new Date("2026-03-03"), url: "https://www.alibaba.com/product-insights/temu-semi-managed-model-fee-structure-2026.html" },
  { id: "t5", title: "欧盟将于2026年7月取消150欧元以下包裹免税，征收3欧元固定关税", content: "欧盟理事会批准取消150欧元以下包裹免关税政策，自2026年7月1日起征收3欧元固定关税。2024年约46亿件低价包裹进入欧盟，91%来自中国。", source: "EU Consilium", type: "press", platform: "temu", dimension: "pricing", date: new Date("2026-03-01"), url: "https://www.minderest.com/blog/3-euro-tariff-eu-ecommerce-2026" },
  { id: "s5", title: "欧盟依据DSA对SHEIN启动合规调查，违规最高罚款全球营收6%", content: "欧盟委员会依据《数字服务法》对SHEIN启动正式调查程序，审查其平台合规性。若认定违规，SHEIN可能面临高达全球年营业额6%的罚款。", source: "Lewis Silkin", type: "press", platform: "shein", dimension: "compliance", date: new Date("2026-02-27"), url: "https://www.lewissilkin.com/insights/2026/02/27/digital-services-act-shein-becomes-the-latest-vlop-to-face-formal-proceedings-102mkps" },
  { id: "j2", title: "京东推出JoyExpress欧洲物流服务，运营60+仓库覆盖四国", content: "京东为Joybuy配套推出JoyExpress物流服务，在英、德、荷、法运营超60个仓库和配送站点，配备卡车、货车和电动自行车车队，提供当日达和次日达。", source: "JD Corporate Blog", type: "press", platform: "joybuy", dimension: "logistics", date: new Date("2026-02-11"), url: "https://jdcorporateblog.com/jd-com-announces-joyexpress-a-new-delivery-service-for-europe" },
  { id: "a2", title: "AliExpress Choice采用全托管模式，结合菜鸟物流实现订单量同比增长60%", content: "AliExpress Choice定位为全托管服务，结合阿里巴巴集团物流能力（菜鸟网络），为卖家简化运营流程，为消费者提供优选商品和快速配送。该模式推动订单量同比增长60%。", source: "Alibaba Group / PR Newswire", type: "press", platform: "aliexpress", dimension: "seller", date: new Date("2026-02-01"), url: "https://www.alibabagroup.com/document-1696296090350911488" },
  { id: "t3", title: "Temu加速欧洲本地化：建立本地仓储网络应对欧盟关税新政", content: "面对欧盟即将实施的关税新政，Temu在多个欧洲国家建立本地仓储，将部分商品从跨境直邮转为本地发货，以规避关税并缩短配送时间。", source: "Lengow", type: "press", platform: "temu", dimension: "logistics", date: new Date("2026-01-30"), url: "https://blog.lengow.com/temus-localization-strategy-in-europe/" },
  { id: "a7", title: "AliExpress与Temu同属中国跨境电商阵营，面临内部流量竞争压力", content: "AliExpress（阿里系）与Temu（拼多多系）在欧美市场形成直接竞争。两者均依赖中国供应链和低价策略，在关税政策收紧背景下面临相似挑战，同时争夺同一批卖家和消费者。", source: "European Conservative", type: "press", platform: "aliexpress", dimension: "traffic", date: new Date("2026-01-01"), url: "https://europeanconservative.com/articles/news/eu-tariffs-shein-temu-aliexpress-china-dumping-safety-competition/" }
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
    
    // 渲染目录
    tocList.innerHTML = vosData.map(function(item) {
        var verifyIcon = item.verified === 'official' ? '✅' : '⚠️';
        return '<li><a href="#' + item.id + '">' + verifyIcon + ' TOP' + item.rank + '：' + item.title + '</a></li>';
    }).join('');
    
    // 渲染详情卡片
    grid.innerHTML = vosData.map(function(item) {
        var verifyClass = item.verified === 'official' ? 'verify-official' : 'verify-unconfirmed';
        var verifyText = item.verified === 'official' ? '✅ 官方已核实' : '⚠️ 待官方全量公告';
        
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
                    return '<a href="' + l.url + '" target="_blank">' + l.label + ' →</a>';
                }).join('') + '</div>';
        }
        
        return '<div class="vos-card" id="' + item.id + '">' +
            '<div class="vos-card-header">' +
                '<span class="vos-rank">TOP' + item.rank + '</span>' +
                '<span class="verify-tag ' + verifyClass + '">' + verifyText + '</span>' +
                '<span class="vos-date">生效/发生时间：' + item.effectDate + '</span>' +
            '</div>' +
            '<h3 class="vos-title">' + item.title + '</h3>' +
            '<div class="vos-summary"><strong>影响说明：</strong>' + item.summary + '</div>' +
            voicesHtml +
            comparisonHtml +
            linksHtml +
        '</div>';
    }).join('');
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
    grid.innerHTML = pn15Data.map(function(item) {
        var linksHtml = (item.links || []).map(function(l) {
            return '<a href="' + l.url + '" target="_blank" class="vos-link">' + l.label + ' →</a>';
        }).join(' ');
        return '<div class="vos-card">' +
            '<div class="vos-card-header">' +
                '<span class="vos-date">' + item.date + '</span>' +
                '<span class="news-row-source">' + (item.source || '') + '</span>' +
            '</div>' +
            '<h3 class="vos-title">' + item.title + '</h3>' +
            '<div class="vos-summary">' + item.summary + '</div>' +
            (linksHtml ? '<div class="vos-links">' + linksHtml + '</div>' : '') +
        '</div>';
    }).join('');
}

// ==================== 头程运费观察 ====================
var freightData = [];

function loadFreightData() {
    if (freightData.length > 0) { renderFreight(); renderFreightCharts(); return; }
    fetch('https://raw.githubusercontent.com/yanjiaoo/freight-watch/main/freight-data.json')
        .then(function(r) { return r.json(); })
        .then(function(data) { freightData = data; renderFreight(); renderFreightCharts(); })
        .catch(function(e) {
            document.getElementById('freightGrid').innerHTML = '<p style="text-align:center;color:#999;padding:40px;">暂无数据，等待维护者更新</p>';
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
    fetch('https://raw.githubusercontent.com/yanjiaoo/freight-watch/main/freight-chart-data.json')
        .then(function(r) { return r.json(); })
        .then(function(data) { drawFreightCharts(data); })
        .catch(function(e) { console.error('加载图表数据失败:', e); });
}

function drawFreightCharts(data) {
    var labels = data.months;
    var routes = data.routes;
    var colors = {
        '中国→美西': '#1a73e8',
        '中国→美东': '#4285f4',
        '中国→欧洲基本港': '#34a853',
        '中国→日本': '#ea4335'
    };

    // 销毁旧图表
    Object.keys(freightChartInstances).forEach(function(k) {
        if (freightChartInstances[k]) freightChartInstances[k].destroy();
    });

    // 海运图表
    var oceanDatasets = [];
    Object.keys(routes).forEach(function(route) {
        oceanDatasets.push({
            label: route,
            data: routes[route].ocean_fcl_teu,
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
            scales: { y: { title: { display: true, text: '$/TEU' }, beginAtZero: false } }
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

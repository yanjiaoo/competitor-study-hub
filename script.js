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
  { id: "tiktok_invest_02", title: "TikTok Shop推出内容全球分发和跨店一键铺品功能，加速一商卖全球", content: "TikTok Shop新增内容全球分发和跨店一键铺品功能，允许卖家将一个市场的内容和商品快速复制到其他市场，降低多市场运营成本。", source: "亿邦动力", type: "press", platform: "tiktok", date: new Date("2026-04-09"), url: "https://www.ebrun.com" },
  { id: "tiktok_invest_01", title: "TikTok Shop墨西哥市场开放自运营模式，4月启动美通墨跨境通道", content: "TikTok Shop加速拉美市场布局，4月开放美国至墨西哥的跨境通道（美通墨），启动60天免佣金政策吸引卖家入驻，重点招募大件商品卖家。", source: "新浪财经 / 雨果跨境", type: "press", platform: "tiktok", date: new Date("2026-04-07"), url: "https://www.cifnews.com" },
  { id: "shein_logistics_01", title: "SHEIN将于4月限制美区商家自发货功能，加强物流管控", content: "SHEIN宣布将于2026年4月中上旬限制美区商家的自发货功能，要求更多订单通过SHEIN官方物流渠道履约，以提升配送时效和服务一致性。", source: "亿邦动力", type: "press", platform: "shein", date: new Date("2026-04-02"), url: "https://www.ebrun.com" },
  { id: "tiktok_invest_03", title: "TikTok Shop德国市场运营满一年，X世代贡献37%销售额", content: "TikTok Shop在德国运营一周年，数据显示X世代（1965-1980年出生）贡献了37%的销售收入，打破了TikTok仅服务年轻用户的认知，用户群体正在扩展。", source: "Ecommerce News Europe", type: "press", platform: "tiktok", date: new Date("2026-04-02"), url: "https://ecommercenews.eu" },
  { id: "temu_logistics_01", title: "Temu推出两种履约模式：VMI预入仓与JIT即时发货，加速本地化配送", content: "Temu为卖家提供VMI（预入仓至Temu仓库）和JIT（下单后发货至仓库）两种履约方案。标准配送5-10个工作日，快速配送3-8个工作日。美国、欧洲、加拿大等市场已启用本地仓发货。", source: "ShipBob", type: "press", platform: "temu", date: new Date("2026-03-30"), url: "https://www.shipbob.com/blog/temu-shipping-guide/" },
  { id: "temu_logistics_02", title: "Pitney Bowes与Temu达成物流集成合作，接入ShipAccel平台", content: "物流服务商Pitney Bowes宣布将Temu集成至其ShipAccel平台，为Temu卖家提供更多配送选项和物流管理工具，降低跨境物流成本。", source: "Business Wire", type: "press", platform: "temu", date: new Date("2026-03-30"), url: "https://www.businesswire.com" },
  { id: "temu_invest_03", title: "Temu孵化自营品牌，从纯平台模式向自营+平台混合模式转型", content: "拼多多旗下Temu开始孵化自营品牌，标志着其从纯第三方平台模式向自营+平台混合模式转型。此举可能改变Temu的供应链控制力和利润结构。", source: "亿邦动力", type: "press", platform: "temu", date: new Date("2026-03-30"), url: "https://www.ebrun.com" },
  { id: "temu_traffic_01", title: "Temu和Shein广告投放策略波动加剧，间歇性大规模投放重塑竞价市场", content: "2026年Temu和Shein的广告投放呈现明显的间歇性特征：大规模投放与暂停交替进行，导致广告竞价市场剧烈波动。这种策略对其他电商平台的广告成本和流量获取产生连锁影响。", source: "DAC Group", type: "press", platform: "temu", date: new Date("2026-03-28"), url: "https://www.dacgroup.com/insights/blog/paid-media/temu-shein-2026-ad-auction-volatility-media-buyers/" },
  { id: "tiktok_traffic_01", title: "TikTok Shop占美国社交电商18.2%份额，直播购物ROI持续增长", content: "TikTok Shop目前占美国社交电商总GMV的18.2%。直播购物的品牌ROI持续增长，大型品牌如Ulta Beauty、Sally Beauty、L'Oréal等纷纷入驻TikTok Shop。", source: "eMarketer / Synder", type: "press", platform: "tiktok", date: new Date("2026-03-26"), url: "https://synder.com/blog/tiktok-shop-fees/" },
  { id: "tiktok_logistics_01", title: "TikTok Shop升级FBT物流方案，解决美区卖家跨境履约难题", content: "TikTok Shop优化FBT（Fulfilled by TikTok）物流服务，为美区跨境POP商家提供仓储、拣货、包装和配送一站式解决方案，缩短配送时效并降低物流成本。", source: "驱动之家", type: "press", platform: "tiktok", date: new Date("2026-03-25"), url: "https://www.mydrivers.com" },
  { id: "shein_traffic_02", title: "SHEIN全球活跃用户超2.5亿，每日上新约2000个SKU", content: "SHEIN通过C2M（消费者到制造商）模式驱动产品策略，每日新增约2000个SKU，小批量100-200件测试后根据实时数据决定是否规模化生产。全球活跃用户超2.5亿。", source: "Accio / BusinessofApps", type: "press", platform: "shein", date: new Date("2026-03-20"), url: "https://www.accio.com/business/shein-package" },
  { id: "shein_logistics_03", title: "SHEIN在法国新增5家线下门店，加速欧洲线下零售布局", content: "继巴黎首店成功后，SHEIN在法国利摩日、昂热、第戎、格勒诺布尔和兰斯新开5家门店。线下渠道有助于降低退货率、提升品牌信任度，并规避部分跨境物流成本。", source: "Modaes", type: "official", platform: "shein", date: new Date("2026-03-17"), url: "https://www.modaes.com/global/topics/shein" },
  { id: "shein_invest_01", title: "SHEIN IPO进程受阻，战略重心转向亚洲市场以应对监管压力", content: "SHEIN的IPO计划因中国背景和ESG争议持续面临不确定性。公司正将战略重心向亚洲市场倾斜，同时加强与中国政府的关系以获取政策支持。", source: "Tech in Asia", type: "press", platform: "shein", date: new Date("2026-03-16"), url: "https://www.techinasia.com" },
  { id: "joybuy_invest_01", title: "京东Joybuy正式登陆欧洲六国，首批上线超10万商品，提供当日达服务", content: "京东于2026年3月16日在英国、法国、德国、荷兰、比利时和卢森堡推出Joybuy平台。首批上线超10万商品，通过JoyExpress物流网络为1700万人提供当日达配送服务。同时推出JoyPlus订阅会员服务。", source: "Reuters / Inside Retail Asia", type: "press", platform: "joybuy", date: new Date("2026-03-16"), url: "https://insideretail.asia/2026/03/16/targeting-amazon-jd-to-launch-joybuy-in-europe/" },
  { id: "joybuy_invest_02", title: "京东以约22亿欧元收购Ceconomy，获取MediaMarkt线下渠道和欧洲供应链", content: "京东通过约22亿欧元收购Ceconomy（MediaMarkt母公司），获得欧洲最大消费电子零售网络的线下渠道、仓储物流基础设施和本地供应链能力，为Joybuy提供线上线下融合基础。", source: "CryptoRank / MSN", type: "press", platform: "joybuy", date: new Date("2026-03-16"), url: "https://cryptorank.io/ru/news/feed/17e4b-chinas-jd-com-expands-into-europe-with-joybuy-platform" },
  { id: "joybuy_logistics_02", title: "DHL与京东签署战略合作备忘录，为德国品牌对接6亿中国消费者", content: "DHL与京东签署战略谅解备忘录，利用DHL的欧洲物流网络和京东的中国市场渠道，帮助德国品牌通过京东跨境平台进入中国市场，服务6亿消费者。", source: "Logistics Manager", type: "press", platform: "joybuy", date: new Date("2026-03-16"), url: "https://www.logisticsmanager.com" },
  { id: "joybuy_invest_03", title: "Joybuy定位品牌导向平台，与Temu低价模式形成差异化竞争", content: "Joybuy官方定位为品牌导向平台，与国际和欧洲本地品牌合作，提供全品类商品。与Temu的极致低价策略不同，Joybuy强调品质和品牌信任度，配合自建物流实现快速配送。", source: "Joybuy Official", type: "official", platform: "joybuy", date: new Date("2026-03-16"), url: "https://about.joybuy.com/about/" },
  { id: "temu_pricing_01", title: "美国取消de minimis免税规则，Temu和Shein面临120%-145%关税冲击", content: "美国取消800美元以下包裹免税政策后，Temu和Shein的跨境直邮商品面临120%-145%的关税。原价10美元的商品关税后成本升至24.5美元，直接冲击其低价模式根基。", source: "WWD / Resale Certificate", type: "press", platform: "temu", date: new Date("2026-03-15"), url: "https://resalecertificate.org/articles/temu-shein-resellers-need-resale-certificate-2026/" },
  { id: "temu_invest_02", title: "Temu收紧卖家入驻标准，引入AI商品健康评分和欧盟EPR合规要求", content: "Temu加强卖家审核，要求面向欧盟市场的卖家完成EPR（生产者延伸责任）注册，并在卖家后台嵌入AI驱动的商品健康评分系统，提升平台商品质量管控。", source: "Alibaba Insights", type: "press", platform: "temu", date: new Date("2026-03-14"), url: "https://www.alibaba.com/product-insights/detailed-temu-store-setup-steps-2026.html" },
  { id: "shein_logistics_02", title: "SHEIN投资14.5亿美元建设华南智能供应链系统，开放Xcelerator服务", content: "SHEIN计划在华南地区投资超14.5亿美元建设智能供应链系统，并向外部品牌开放其Xcelerator按需供应链和物流服务，将自身供应链能力商业化。", source: "Business of Fashion", type: "press", platform: "shein", date: new Date("2026-03-10"), url: "https://www.businessoffashion.com/articles/sustainability/exclusive-inside-sheins-xcelerator-an-on-demand-supply-chain-and-logistics-service-open-to-brands/" },
  { id: "tiktok_traffic_02", title: "TikTok Shop在东南亚市场份额升至22%，成为印尼第二大电商平台", content: "TikTok Shop在印尼的市场份额从2023年的5%跃升至2025年的约22%，仅次于Shopee。在东南亚整体市场对Shopee和Lazada构成实质性竞争威胁。", source: "SocialEcho", type: "press", platform: "tiktok", date: new Date("2026-03-10"), url: "https://www.socialecho.net/en/blog/docs/tiktok-shop-2026-guide" },
  { id: "tiktok_pricing_01", title: "TikTok Shop佣金费率稳定在6%-8%，新卖家享3%优惠期", content: "2026年TikTok Shop美区标准佣金费率为6%（部分品类8%），英区为9%。另收约2%-3%支付处理费。新卖家入驻前期可享3%优惠佣金率。相比2023-2024年1.8%的补贴期费率已大幅上升。", source: "Printify / SocialTale", type: "press", platform: "tiktok", date: new Date("2026-03-08"), url: "https://printify.com/blog/tiktok-shop-fees/" },
  { id: "shein_traffic_01", title: "SHEIN欧盟月活用户达1.56亿，但增速从11.6%放缓至6.9%", content: "SHEIN在欧盟的月均活跃用户约1.56亿（2025年8月至2026年1月），同比增长6.9%，较此前11.6%的增速明显放缓。欧洲市场趋于饱和，用户增长进入平台期。", source: "Chinesellers", type: "press", platform: "shein", date: new Date("2026-03-07"), url: "https://chinesellers.substack.com/p/sheins-eu-momentum-slows-as-market" },
  { id: "temu_invest_01", title: "Temu半托管模式费率结构更新：平台承担仓储、履约和售后", content: "Temu半托管模式（SMM）下，平台负责仓储、区域配送中心履约、多语言客服和退货物流。卖家专注供货和定价，平台抽取佣金。该模式正在欧美市场加速推广。", source: "Alibaba Insights", type: "press", platform: "temu", date: new Date("2026-03-03"), url: "https://www.alibaba.com/product-insights/temu-semi-managed-model-fee-structure-2026.html" },
  { id: "temu_pricing_02", title: "欧盟将于2026年7月取消150欧元以下包裹免税，对每件征收3欧元关税", content: "欧盟理事会批准取消150欧元以下包裹免关税政策，自2026年7月1日起对低价包裹征收3欧元固定关税。2024年约46亿件低价包裹进入欧盟，其中91%来自中国。此举直接影响Temu、Shein等平台的欧洲定价策略。", source: "EU Consilium / Minderest", type: "press", platform: "temu", date: new Date("2026-03-01"), url: "https://www.minderest.com/blog/3-euro-tariff-eu-ecommerce-2026" },
  { id: "shein_invest_02", title: "欧盟对SHEIN启动DSA合规调查，违规最高罚款全球营收6%", content: "欧盟委员会依据《数字服务法》对SHEIN启动正式调查程序，审查其平台合规性。若认定违规，SHEIN可能面临高达全球年营业额6%的罚款。", source: "Lewis Silkin", type: "press", platform: "shein", date: new Date("2026-02-27"), url: "https://www.lewissilkin.com/insights/2026/02/27/digital-services-act-shein-becomes-the-latest-vlop-to-face-formal-proceedings-102mkps" },
  { id: "joybuy_logistics_01", title: "京东推出JoyExpress欧洲物流服务，运营60+仓库覆盖四国", content: "京东为Joybuy配套推出JoyExpress物流服务，在英国、德国、荷兰和法国运营超过60个仓库和配送站点，配备卡车、货车和电动自行车车队，提供当日达和次日达服务。", source: "JD Corporate Blog", type: "official", platform: "joybuy", date: new Date("2026-02-11"), url: "https://jdcorporateblog.com/jd-com-announces-joyexpress-a-new-delivery-service-for-europe" },
  { id: "temu_pricing_03", title: "Temu欧洲本地化策略：建立本地仓储网络应对关税新政", content: "面对欧盟即将实施的关税新政，Temu加速欧洲本地化布局，在多个欧洲国家建立本地仓储，将部分商品从跨境直邮转为本地发货，以规避关税并缩短配送时间。", source: "Lengow", type: "press", platform: "temu", date: new Date("2026-01-30"), url: "https://blog.lengow.com/temus-localization-strategy-in-europe/" }
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

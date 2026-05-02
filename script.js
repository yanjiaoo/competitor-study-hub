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
  { id: "temu_new001", title: "Temu携手QIMA强化合规检测，卖家需关注产品测试新要求", content: "Temu与全球质量检测机构QIMA达成合作，将产品测试和合规检测服务接入卖家中心。该合作旨在加强平台对商品质量、安全及合规性的管控，尤其针对欧盟和美国市场的法规要求。卖家需通过QIMA进行产品测试，以确保符合Temu的平台标准。此举可能增加卖家的合规成本，但有助于降低因不合规导致的罚款和退货风险。建议卖家及时了解QIMA的测试流程和费用，提前准备相关认证文件。", source: "PR Newswire", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiywFBVV95cUxNbV9qX2VtajB2MGNFeTFaZFROenFwN1Y4OTd5M1pVRHNTNHFqU0o3b3dvUGlrMWdIZkRkdl9zanYzZ3QtY1FMNGt0dHJReFRfbU5scmtUZHdfTjg1S0RscG5vUHVZX2FFVXlDN0UwS0RBTHhwamltX2d1UFNmeWFERW44UzR1LTZKQWpoOS04bnJvajdnZ0ZGVUR1bWZHZGlNY2taWWNkY0lYYWVua1pBSUo5XzNKZ2lPRmpVZml6QmQzc3pyR1N2UXlqWQ?oc=5" }
  { id: "temu_new002", title: "Temu半托管开放欧洲主体入驻，卖家可本地化运营", content: "Temu半托管模式正式向欧洲主体开放入驻，允许卖家在欧洲本地进行仓储和配送。该模式旨在提升履约时效和客户体验，降低跨境物流成本。卖家需在欧洲注册公司并拥有本地仓库，平台提供流量支持和订单管理工具。此举有助于卖家规避关税风险，并提高配送速度。建议有欧洲本地资源的卖家积极入驻，利用半托管模式扩大市场份额。", source: "白鲸出海", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE45cjlnUFRaaWlQdW9xSThHM2dxcUoyWmhra3ZnNmViRF9QcGhROXJrUUVRZVowVnQ1czdySDZmTm5PVTlvbDFkWG42THVkWWxjVld1aFhmWGg?oc=5" }
  { id: "temu_new003", title: "Temu停止中国直发美国服务，关税新规迫使物流调整", content: "受美国新关税规则影响，Temu已停止从中国直接发货至美国的服务。此前，Temu利用800美元以下小额包裹免税政策，但新规取消了这一豁免。卖家需将商品提前备货至美国海外仓或使用Temu本地仓库，以维持履约时效。此举将增加卖家的库存成本和资金压力，但有助于提升配送速度和客户满意度。建议卖家尽快调整供应链，布局美国本地仓储。", source: "MSN", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiigNBVV95cUxOUWFZdDVGaFdHNExkd1R3OGZiNnU0bUZTMnpnWWdjam9WRjllOFlKWDNSZ2xoWnB4MlQwUXRRenZLcFBPTnZPLTdZNzl1a3NsZWVhMEN5SGhad2tLNkFTUVdQZW52Y1ZHc0hNLWZTYVlyZ24yR1NaS1ZETXFzUzBwV0NlelNERmlLSF9zalNuSmQ3VUZia2F4clNoNHVkYlE2dm1LQy1DZzE2Q3RzbHp1d1lrdmNtWnhtVFNEczJrdlZ3QUF2TDl5NW1QNi12MG1kRjFVMUxYbVhLZmMzUkdtNEdYd0hHejlmemZxX1h3clNrY3dIb1lnSk1NMWNaTGVrbTRBeWxUeUFZSEpVejZ0MVhLSFRqSU1GNGk2MWJYOUJaT0x2MlVZRG1MZV9RTG83X2FHQUpOUGcyRk53X3pLUjlHOHZXVUdnc3BTZmtKZnVIbmpTMkJpQkRWWUlkcDE5QXg3M2VTRVlCS1ExNEVjR0ZYTUU2Y3RXQm1mZmlheVc3Q1ktaU9UbUxn?oc=5" }
  { id: "temu_new004", title: "Temu新店铺流量扶持政策解析，入驻商家享多重福利", content: "Temu为新入驻商家提供流量扶持政策，包括新品曝光、搜索加权和活动资源位。具体措施：新店前30天享有专属流量池，参与平台大促可获额外补贴。此外，平台还提供运营指导、选品建议和物流补贴。该政策旨在吸引优质卖家，丰富商品供给。建议新卖家利用扶持期快速起量，优化产品 listing 和定价策略。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9OUHlUUHU2M0FpTTRIVUFLMmoxUjVDZUZYSWliY2I4cXVOVi1rTWltd0g0NFFJT1YyNlZaamlSMVFXYXp4MDV4d21uRFg?oc=5" }
  { id: "shein_new005", title: "SHEIN半托管加拿大站招商，卖家可本地发货提升时效", content: "SHEIN半托管模式正式开放加拿大站招商，允许卖家在加拿大本地仓储发货。该模式要求卖家拥有加拿大公司主体和本地仓库，平台提供流量和订单支持。加拿大作为北美重要市场，半托管模式可缩短配送时间至2-5天，提升客户满意度。建议有加拿大资源的卖家入驻，利用本地优势拓展业务。", source: "新浪网", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9OOXpxVGd0aWFtbTF1Q2NUMGlTb3VVdmJTY2o3aU8ycmN4VUdDNmppVnI5QTBqaXpsRDByYUZnY2dDb09WZDdUWTJUNTFPZzIzMGJhNjVVcmpSVk1fSVM4cjdXOA?oc=5" }
  { id: "shein_new006", title: "SHEIN限制美区商家自发货功能，加强物流管控", content: "SHEIN宣布将于4月中上旬限制美国区商家的自发货功能，要求卖家使用平台合作的物流服务或海外仓。此举旨在提升履约时效和客户体验，减少因自发货导致的延迟和纠纷。卖家需提前切换物流模式，否则可能影响店铺权重。建议卖家尽快对接SHEIN官方物流或备货至美国仓。", source: "亿邦动力网", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1INy1tWEFJZXgtYXhaN0VKQU0zR1drRTJNc19EWU9BMC1JR2otRjdfV01BSTVsM1U5eDlsWnRMUUN6a01OSDRMRkZCYkwyZkZIbnVaS01n?oc=5" }
  { id: "shein_new007", title: "SHEIN运营新店考核标准及保证金退还政策详解", content: "SHEIN对新店铺设有考核期，通常为90天，考核指标包括订单量、退货率、客户评分等。通过考核后，卖家可享受更多资源。关于保证金，SHEIN在卖家退出平台且无违规情况下可退还，但需扣除相关费用。建议新卖家注重产品质量和服务，避免违规导致保证金损失。", source: "雨果跨境", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE1ib3NlWTJUV25nMEJOMmJPNmRLb3VPbjdMUG84Q2JkdXF3RHNEUWdKSEVGMUZsY0ZaVFVRNHYtMDV6UmIzTmFOVVFxUXg?oc=5" }
  { id: "tiktok_new008", title: "TikTok Shop美国夏季大促战报：GMV增长显著", content: "TikTok Shop公布美国夏季大促战报，数据显示GMV环比增长超过200%，其中美妆、服饰和家居品类表现突出。大促期间，平台通过直播带货、短视频挑战赛和优惠券吸引用户。卖家参与大促可获得流量扶持和佣金减免。建议卖家提前规划选品和内容策略，利用TikTok的社交属性提升转化。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE13bWFBcExxMWdCeGxBdFlkRWE3VHhUT01LZURNLVhrTDk5LXBQSVlwczZIbElXOGxxeDFGdnY1RzFMSC1jRkFLZHc0V1YzMzdiSzBvejRaS3Q?oc=5" }
  { id: "tiktok_new009", title: "TikTok Shop推出跨境POP商家中心APP，卖家管理更便捷", content: "TikTok Shop推出跨境POP（Platform Open Plan）商家中心APP，支持卖家在移动端管理店铺、处理订单、查看数据。该APP提供实时通知、客服沟通和营销工具，提升运营效率。目前支持iOS和Android系统。建议卖家下载使用，以便及时响应客户和平台动态。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE8zZUVpcU11YmJWY2lDZ0FpVGFpU3R6dk9UbjBGenFYbkpDOVdDU2UzWFg3Q3lFcVVDWkE3N1pQek5DRHc3X3FVQjlJaGo?oc=5" }
  { id: "tiktok_new010", title: "TikTok Shop美通墨启动免佣金60天，美国卖家0成本拓市", content: "TikTok Shop在美国、加拿大和墨西哥市场启动新卖家免佣金60天活动，吸引卖家入驻。活动期间，卖家无需支付平台佣金，仅需承担支付处理费。此举旨在扩大卖家基础，丰富商品供给。建议有意拓展北美市场的卖家抓住机会，利用免佣期测试产品和流量。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE5jOFJoTkJuckZpbkVyaHhLLWR6M1NRd1JTQ1dGV1ZtbDVMN1NndmlaY2lUY0xWdmRlQzlpcHBtUVRtRDAtSG9tbTVSM2M?oc=5" }
  { id: "tiktok_new011", title: "TikTok Shop举办年度卖家峰会，发布2026营销路线图", content: "TikTok Shop将举办年度卖家峰会，提供电商策略课程和2026年营销路线图。峰会涵盖直播带货技巧、广告投放优化、内容创作等议题。卖家可了解平台最新政策和工具，与行业专家交流。建议卖家报名参加，获取前沿信息，提升运营能力。", source: "Net Influencer", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOVmFlbWdaWF9SWUhsSGtwTWlsM1pwNnNhc2ljdE1KejdISnFwbHJIZmd3SGVWV3MtcFBTd1cwaWdZb2RvNVRHdnRFUTNsQzVGY1NybjI1V3lWVkhZcWVHdmFwcUZObG82cmkzVDVJMFlhclB1QklIVWtiQjBnMEZGOUFFZXFDQks4TE5FaHhXMmdWQXFsZGVzNkFJc2JEN3E0aEFBMlZIb2ZKMEpFdHg2T2tDaHNZMjZfcHo3VkhIYXM3RklaajkwYw?oc=5" }
  { id: "aliexpress_new012", title: "亚马逊广告AI营销工具升级，助力卖家精准投放", content: "亚马逊升级广告AI营销工具，新增自动竞价、受众洞察和创意优化功能。新工具利用机器学习分析用户行为，提升广告ROI。同时，亚马逊加强欧盟VAT合规要求，卖家需完成增值税登记。建议卖家利用AI工具优化广告策略，并确保税务合规。", source: "亿邦动力网", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5rMXlhc1FEV1VpbGxSeFl5TnAwM0RpMzI4SjhxSUE1aUU0OThNNzdha28wRDBNR2tVMWNDS3hGcmgxZWV4eDJsSFI5SHFnRDR0dTBidzF3?oc=5" }
  { id: "aliexpress_new013", title: "阿里速卖通品牌出海峰会仅99个品牌受邀，聚焦高价值卖家", content: "阿里速卖通举办品牌出海顶级峰会，仅邀请99个品牌参与，聚焦高价值卖家。峰会提供专属资源、定制化运营方案和全球市场洞察。速卖通计划帮助2000个品牌实现翻倍增长，年销千万美金品牌数量增加64%。建议品牌卖家积极申请，获取平台支持。", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE4zSEJkMWxCMWdTaTNxakhwT3B2SW1XUUx4dFQzTUJ4aEh5VTJ1bVZTQnVmZklrc1RsMWFYUFRnZlA2Q3lMMUtnSVFLVVo?oc=5" }
  { id: "aliexpress_new014", title: "阿里速卖通年销千万美金品牌数量增64%，助力2000品牌翻倍", content: "阿里速卖通公布数据，年销千万美金品牌数量同比增长64%，并计划帮助2000个品牌实现翻倍增长。平台通过AI选品、物流升级和本地化运营支持卖家。建议品牌卖家利用速卖通的全球物流网络和营销工具，拓展欧美市场。", source: "亿邦动力网", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBPRlN1ZTl6NnZ0WldvUWhjbXMzOExyaWRwR1QydGZlLUVjZ2lBZThTbVRsMzdrVU84SzY2Q3VPU0RfX0VsYmFEWUd0eUE0WHdVNExrZFF3?oc=5" }
  { id: "aliexpress_new015", title: "京东物流AI与市场增长驱动估值重估，卖家受益于高效履约", content: "京东物流、AI技术和平台增长被分析师认为将驱动估值重估。京东物流的智能仓储和配送网络提升履约效率，AI用于选品和定价优化。卖家可利用京东的物流和AI工具提升运营效率，降低退货率。建议关注京东的开放平台机会。", source: "Seeking Alpha", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQNGw2V3dDd3I5TEhZOC1FNUFLX0xqNklsb1JyeUpyeVRSNm9NYnJtUGlLbWREaUVSdkY0S2dYT09vaXpVQ051SXIwb2hlVzJtTnAzS0NLa01qa0tEaUxGVU1fTU1hRnl1ZjJ2b3owVThaVUgwVWtpY0VSYVNJbC1GcTIwTGZWbFZOQWw4QnY1R0t5anNoYWxhZVliZ3lZRkRZVm51UE1yMFZTZw?oc=5" }
  { id: "joybuy_new016", title: "Joybuy与亚马逊对比分析，新平台挑战零售巨头", content: "Money Saving Expert发布Joybuy与亚马逊的对比分析，指出Joybuy在价格和新兴品类上有优势，但物流和客户服务不及亚马逊。Joybuy作为新平台，通过低价策略吸引用户，但面临品牌信任和履约挑战。建议卖家根据自身优势选择平台，Joybuy适合价格敏感型商品。", source: "Money Saving Expert", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiekFVX3lxTE5TQjhrY1U3TnoyVjkxcjF3LTlSSGJqVXZIc2wtLWtEX2R4NVhEZXRpYS00T1pxNVpNS3BPRnp5ekR4STlfUzJWcklEbjV0SzJmTWdRV1k3X2hWdDRGR2FYY0M1c3BvTGFhWnZlMHJIR3RfdEJWWl9CN2pR?oc=5" }
  { id: "temu_new017", title: "Temu与Shein面临集体诉讼，要求退还关税", content: "Temu和Shein在美国面临集体诉讼，指控其利用小额包裹免税政策逃避关税，要求退还消费者支付的关税。诉讼可能影响平台的定价和物流策略。卖家需关注法律进展，调整定价策略以应对潜在成本增加。建议卖家咨询法律顾问，评估风险。", source: "WWD", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMipAFBVV95cUxNY0dobkFGMTg3TW5yRExSZTF4MHQ1dmVRMVVTZUxHX2ZjWVFLSDdVZEtxMW1OV2NsM2ZXNW9FeWduREp6cUI5MHktSzZMX1dkVmVDd1VwdWlxV2NfR3FGQVJDazVXMDB6V2lDY0NFSk1uaXU3VGpmSzk4S2NIQkI4aWZ3MDFJMkRwYk5rSF81U2s2UndUbjdhRlhmY2F5XzBWMUJkTg?oc=5" },
  { id: "temu_new001", title: "Temu携手QIMA强化合规检测，卖家中心接入新服务", content: "Temu与全球质量检测机构QIMA达成合作，将产品测试和合规检测服务直接接入卖家中心。此举旨在加强平台对商品质量的管控，尤其针对欧洲和美国市场的合规要求。卖家需通过QIMA提交产品检测报告，否则可能面临下架风险。该服务覆盖纺织品、电子、玩具等品类，检测费用由卖家承担。建议卖家提前了解目标市场的认证标准，如欧盟CE、美国CPC等，并选择QIMA认可的实验室进行检测，以避免合规问题导致的账号受限。", source: "PR Newswire", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiywFBVV95cUxNbV9qX2VtajB2MGNFeTFaZFROenFwN1Y4OTd5M1pVRHNTNHFqU0o3b3dvUGlrMWdIZkRkdl9zanYzZ3QtY1FMNGt0dHJReFRfbU5scmtUZHdfTjg1S0RscG5vUHVZX2FFVXlDN0UwS0RBTHhwamltX2d1UFNmeWFERW44UzR1LTZKQWpoOS04bnJvajdnZ0ZGVUR1bWZHZGlNY2taWWNkY0lYYWVua1pBSUo5XzNKZ2lPRmpVZml6QmQzc3pyR1N2UXlqWQ?oc=5" }
  { id: "temu_new002", title: "Temu波兰用户量超本土龙头，流量登顶欧洲市场", content: "Temu在波兰市场用户量超越本土电商平台Allegro，成为流量第一的购物平台。数据显示，Temu波兰月活跃用户数已突破1500万，占波兰总人口的40%以上。这一增长主要得益于Temu的低价策略和本地化运营，包括波兰语客服、本地支付方式以及快速配送服务。Temu还计划在波兰设立海外仓，进一步缩短配送时效。对于卖家而言，波兰市场潜力巨大，但需注意欧盟合规要求，如CE认证和增值税登记。", source: "新浪财经", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxQeGd4ME1pY1ZEY1ljVURhV1RlV2hKU05KTi0tUk43NEVBVlhFbDdXX21UMnF1VHhhWmZlaXhnVExUZ01Jblc0bUlla0JBVFJqbGJ4Q0ZBdW5veThwZERudUtCTFlQTWVwRnlxV3VxNVMwdGFLN1ZoTTd6QUotc1kzRHNpS1U?oc=5" }
  { id: "temu_new003", title: "Temu欧洲站点验证升级：强制对公与视频审核，卖家账号受限", content: "Temu对欧洲站点卖家进行强制验证升级，要求卖家提供对公银行账户信息并完成视频审核。未通过验证的卖家账号将受到功能限制，包括无法提现、无法上新商品等。此举旨在打击虚假注册和违规经营，提升平台合规性。卖家需在30天内完成验证，否则账号将被冻结。建议卖家提前准备营业执照、法人身份证、对公账户证明等材料，并确保视频审核时法人本人出镜。", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiVEFVX3lxTE8yaUlHOW9yZmtGRURKT01oMU90QkdTV0ZYRGZwVlFvazBZMHJWWFl6ZmF3cnlaQmNUQXhLeWNuVnV0bXNKRzBNcVk3MEMxUV9NNnVQRg?oc=5" }
  { id: "temu_new004", title: "Temu停止直接中国至美国小包直邮，应对关税新规", content: "Temu宣布停止直接从中国向美国消费者发送小包裹，以应对美国取消800美元以下商品免税政策的新规。此前，Temu利用de minimis规则实现低价直邮，新规下每件包裹需缴纳关税，导致成本上升。Temu将转向美国本地仓发货模式，鼓励卖家备货至美国海外仓。此举将影响依赖直邮的卖家，需调整供应链策略，考虑使用Temu合作的海外仓或第三方物流。", source: "MSN", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiigNBVV95cUxOUWFZdDVGaFdHNExkd1R3OGZiNnU0bUZTMnpnWWdjam9WRjllOFlKWDNSZ2xoWnB4MlQwUXRRenZLcFBPTnZPLTdZNzl1a3NsZWVhMEN5SGhad2tLNkFTUVdQZW52Y1ZHc0hNLWZTYVlyZ24yR1NaS1ZETXFzUzBwV0NlelNERmlLSF9zalNuSmQ3VUZia2F4clNoNHVkYlE2dm1LQy1DZzE2Q3RzbHp1d1lrdmNtWnhtVFNEczJrdlZ3QUF2TDl5NW1QNi12MG1kRjFVMUxYbVhLZmMzUkdtNEdYd0hHejlmemZxX1h3clNrY3dIb1lnSk1NMWNaTGVrbTRBeWxUeUFZSEpVejZ0MVhLSFRqSU1GNGk2MWJYOUJaT0x2MlVZRG1MZV9RTG83X2FHQUpOUGcyRk53X3pLUjlHOHZXVUdnc3BTZmtKZnVIbmpTMkJpQkRWWUlkcDE5QXg3M2VTRVlCS1ExNEVjR0ZYTUU2Y3RXQm1mZmlheVc3Q1ktaU9UbUxn?oc=5" }
  { id: "shein_new005", title: "Shein与Temu遭集体诉讼，要求退还关税涨价费用", content: "Shein和Temu在美国面临多起集体诉讼，指控其在关税政策调整后不合理涨价，并要求退还多收的费用。原告称，平台利用关税变动作为借口提高商品价格，但实际关税成本并未完全转嫁。诉讼可能影响平台定价策略和消费者信任。卖家需关注诉讼进展，若败诉可能面临赔偿或价格调整压力。建议卖家合理定价，保留成本凭证，避免类似纠纷。", source: "Global Cosmetics News", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMirwFBVV95cUxOY0hCcmV4eS1NMk9sbnRvZzZ1Wmg2amQxZ1JGM2k0Q3JOQThyd1VsQ1IwMGxXcHNiMzVnbmprSVVJVEU1cWdTQ0dGcWIwbzNVN1Fqb1dLZzhzeWxzeTBPVHJITEJ5UTNRU0hDM1pTN0ZPN0RHVVRjZFN0VEdkcUpFWW5FdVZFd25QNmhJNzJieFBFVkVJUkNESW9WbUdZaE40WW1OeDVMa2xDTWlGVnE4?oc=5" }
  { id: "shein_new006", title: "Shein与THG Fulfil合作，提升英国市场卖家物流服务", content: "Shein与英国物流公司THG Fulfil达成合作，为英国市场卖家提供仓储、拣货和配送服务。THG Fulfil将负责Shein英国本地卖家的订单履约，实现次日达或两日达。此举旨在提升Shein在英国市场的竞争力，缩短配送时效，吸引更多本地卖家入驻。卖家可利用THG Fulfil的物流网络降低运营成本，但需支付仓储和配送费用。建议英国卖家评估自身产品与THG Fulfil的适配性。", source: "Retail Gazette", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMitwFBVV95cUxNY2V1MTBZMjNfbFNRZkZzLU9uN1lDeGduVFVIeHhpSkU4RGdHUWRISnZUNGVfQl8xbFVNNzFZRG5wa1FISUYwenVzSjJiWmhObFVWd1RwYk13N2gwQTdKSTlHVTJlazAwYml5WE15SzMzdzZYeVoyQTYtb0J4SWk2aVFuQlJHQXJublFkSVZSTHM4a3F4aV9zeUNDek5KOFAzemx6ZWFLSlhDSzNmSUlzUHZNMU44amM?oc=5" }
  { id: "shein_new007", title: "Shein美国校园招聘供应链人才，强化本地化运营", content: "Shein在美国启动校园招聘，重点招募供应链管理、物流和数据分析人才。此举旨在加强美国本地供应链能力，应对关税和物流挑战。Shein计划在美国建立更完善的仓储和配送网络，减少对中国直邮的依赖。对于卖家而言，Shein的本地化布局可能带来更快的配送和更低的退货率，但同时也意味着更严格的本地合规要求。", source: "TipRanks", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMitAFBVV95cUxNNjJwNmZBSmQtTW1WVVp6TXZ0dVF0UW1OdnFzdWkxNDBlTjBaMmgtVmZXZkRlbC1IUWNCakpFOFpRVmZBYWVoLTh1NTAxZnVNMTduX2MyMlBfaXFETG5BajhmVnM0OGRHV2Q5b3RDcXhYOTQ1UE82Wk5WSFEtY0hEd2RWeDJPTElhbXV0ckFESm9ickVOZmdPX0RWVEthS2Zaa2VfeUdhbnVFZHNBVldWeUtrVEQ?oc=5" }
  { id: "tiktok_new008", title: "TikTok Shop美国夏季大促战报：单量暴涨80%", content: "TikTok Shop公布美国夏季大促战报，活动期间单量环比增长80%，GMV增长超过100%。热销品类包括美妆、服饰、家居和电子产品。大促期间，TikTok Shop通过短视频和直播带货实现高转化，其中直播GMV占比超过40%。平台还推出了满减优惠券和运费补贴。卖家应抓住TikTok Shop的流量红利，优化短视频内容和直播策略，同时注意备货和物流时效。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE13bWFBcExxMWdCeGxBdFlkRWE3VHhUT01LZURNLVhrTDk5LXBQSVlwczZIbElXOGxxeDFGdnY1RzFMSC1jRkFLZHc0V1YzMzdiSzBvejRaS3Q?oc=5" }
  { id: "tiktok_new009", title: "TikTok Shop推出跨境POP商家中心APP，赋能卖家运营", content: "TikTok Shop正式推出跨境POP（Platform Open Plan）商家中心APP，支持卖家在移动端管理店铺、查看数据、处理订单和客服。该APP适用于美国、欧洲等市场的跨境卖家，提供实时销售数据、商品推荐和营销工具。卖家可通过APP快速响应客户咨询和订单变化。建议卖家下载并使用该APP，提升运营效率，但需注意数据安全和隐私合规。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE8zZUVpcU11YmJWY2lDZ0FpVGFpU3R6dk9UbjBGenFYbkpDOVdDU2UzWFg3Q3lFcVVDWkE3N1pQek5DRHc3X3FVQjlJaGo?oc=5" }
  { id: "tiktok_new010", title: "TikTok Shop与Tokopedia对卖家收取物流服务费，5月1日起生效", content: "TikTok Shop与印尼电商平台Tokopedia联合宣布，自2026年5月1日起，将对卖家收取物流服务费。该费用适用于使用平台物流服务的订单，费率根据商品重量和配送距离计算。此举旨在优化物流成本，提升配送效率。卖家需调整定价策略，将物流费用纳入成本。建议卖家对比平台物流和第三方物流的成本，选择最优方案。", source: "亿邦动力网", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE50clJHWU1qb1dFY3J1YWpyNGNyLWp5WDNyaEFHWTBxQklhWFR5blB3Q25Wam51V2ZibmZ3NUg1bG9UaEtzY1haQy13cnZSUUZuNUEycjEyU0c?oc=5" }
  { id: "tiktok_new011", title: "TikTok Shop举办年度卖家日峰会，公布2026营销路线图", content: "TikTok Shop宣布将于2026年举办年度卖家日峰会，届时将公布2026年营销路线图和商业策略。峰会内容包括平台政策更新、广告工具升级、选品趋势分析和成功案例分享。卖家可参与线下或线上会议，获取最新平台动态。建议卖家关注峰会日程，提前准备问题，并利用峰会资源优化店铺运营。", source: "Net Influencer", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOVmFlbWdaWF9SWUhsSGtwTWlsM1pwNnNhc2ljdE1KejdISnFwbHJIZmd3SGVWV3MtcFBTd1cwaWdZb2RvNVRHdnRFUTNsQzVGY1NybjI1V3lWVkhZcWVHdmFwcUZObG82cmkzVDVJMFlhclB1QklIVWtiQjBnMEZGOUFFZXFDQks4TE5FaHhXMmdWQXFsZGVzNkFJc2JEN3E0aEFBMlZIb2ZKMEpFdHg2T2tDaHNZMjZfcHo3VkhIYXM3RklaajkwYw?oc=5" }
  { id: "aliexpress_new012", title: "亚马逊广告AI营销工具升级，强化竞对应对能力", content: "亚马逊升级广告AI营销工具，新增自动竞价、智能关键词推荐和受众定向功能。该工具旨在帮助卖家更高效地投放广告，提升ROI，应对Temu和Shein的低价竞争。新功能支持跨品类广告投放和动态预算调整。卖家应利用AI工具优化广告策略，但需注意广告成本控制，避免过度依赖自动化。", source: "亿邦动力网", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5rMXlhc1FEV1VpbGxSeFl5TnAwM0RpMzI4SjhxSUE1aUU0OThNNzdha28wRDBNR2tVMWNDS3hGcmgxZWV4eDJsSFI5SHFnRDR0dTBidzF3?oc=5" }
  { id: "aliexpress_new013", title: "亚马逊欧盟开店需完成VAT增值税登记，合规要求升级", content: "亚马逊要求欧盟站点的卖家必须完成VAT增值税登记，否则将面临账号限制。新规适用于所有在欧盟销售的卖家，无论是否使用FBA。卖家需在各国税务机构注册VAT，并按时申报和缴税。亚马逊将配合税务机关进行合规审查。建议卖家尽快联系税务代理完成VAT注册，避免账号受限。", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE8zZUVpcU11YmJWY2lDZ0FpVGFpU3R6dk9UbjBGenFYbkpDOVdDU2UzWFg3Q3lFcVVDWkE3N1pQek5DRHc3X3FVQjlJaGo?oc=5" }
  { id: "aliexpress_new014", title: "亚马逊利用中国供应链优势应对关税与Temu、Shein竞争", content: "亚马逊通过加强与中国的供应链合作，以抵消关税影响并应对Temu和Shein的低价竞争。具体措施包括扩大中国直采、优化跨境物流和降低采购成本。亚马逊还计划在中国设立更多采购中心，缩短供应链环节。对于卖家而言，亚马逊的供应链整合可能带来更低的采购成本和更快的配送，但需注意合规和知识产权问题。", source: "South China Morning Post", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQdjVWZU5yNzB6aVdMcHZDRExpNlNLYzRJYjRNelVmOE5leE1IMUlmcm10UjJCblFfSG9zSWFUMVlZTmpxMl9KVmpNZnRjMTNJRmY5S1BvbzBDM1FlVEZkSENaeC05cV93S1ExNHppT2Q1bmJuT3E4cmZ1Qm5OSmNaWG1nR18yUTJUcEl2X2VqVnJNUkU5YkUxVTh2b1V2YUpTYkpqMzNvNWE5d3FfVXRMQ3RXakF6MkRDMUtrZmpqb2ZJRVHSAcMBQVVfeXFMTVE3dHRVRXMxMXVrb0JzMnEzN0Z5MkUtN1FETWMzUmFJNXJPNHNFVng0RUR3LTJQcjNmVTk4UmwyeUZPQW5JNHRjVFlZNXA4b005S1FLVTh5QVBiSlNnNlVLdWRsNTgySE40cVFVVzRhRTY3RHlXY2ZhVV9fdVpLWDAtXzg0U2VCZ2FnY3hRdENXMUwwLVkwRVBmVk5mOEVSSWV4LXlPbXZfMTRwUi1GVjZxckxtckNNcUc4UFZiY3pNV24w?oc=5" }
  { id: "aliexpress_new015", title: "亚马逊智能仓库布局，应对Temu和Shein物流挑战", content: "亚马逊加速智能仓库建设，引入自动化机器人和AI系统，提升仓储和分拣效率。此举旨在降低物流成本，缩短配送时效，以应对Temu和Shein的低价和快速配送竞争。亚马逊计划在美国和欧洲主要市场部署更多智能仓库。卖家可受益于更快的FBA配送，但需注意仓储费用调整。建议卖家优化库存管理，避免长期仓储费。", source: "Notebookcheck", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMinAFBVV95cUxPWU5KQnpmOHpYZ21penN1Zno3RmNVb25IMmJGUC1KX2hmckVGUUF2SldRbGpEVlZFRXVrYjFUeGtvSVh2WUhEM1lJVXpqbFNDNGE1WXJ0Nlo0TUdGOEZCSGZUZXQwRFpkRHl1TmJXcWlCOHRfa0Z3QVI1RXh6TlN5Ty1IaUJXcnAtLVlidFZ1Vjk3V0g2elZzUFRLQlY?oc=5" }
  { id: "aliexpress_new016", title: "阿里速卖通品牌出海峰会仅99个品牌受邀，聚焦高端出海", content: "阿里速卖通举办品牌出海顶级峰会，仅邀请99个品牌参与，聚焦中国品牌高端出海。峰会内容包括平台战略、品牌营销、物流解决方案和成功案例。速卖通将为重点品牌提供专属流量、补贴和运营支持。卖家需具备品牌实力和海外市场经验。建议有品牌基础的卖家关注速卖通品牌扶持计划，但需注意平台竞争激烈。", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE4zSEJkMWxCMWdTaTNxakhwT3B2SW1XUUx4dFQzTUJ4aEh5VTJ1bVZTQnVmZklrc1RsMWFYUFRnZlA2Q3lMMUtnSVFLVVo?oc=5" },
  { id: "temu_new001", title: "Temu与Shein面临38亿美元关税漏洞关闭，低价进口受冲击", content: "据OkDiario报道，Shein和Temu因美国海关 loophole 关闭面临38亿美元关税问题。该 loophole 此前允许低价商品免税进口，关闭后导致成本上升，可能转嫁给消费者或压缩卖家利润。涉及美国市场，对依赖低价策略的卖家影响显著。建议卖家调整定价策略，关注合规成本变化。", source: "OkDiario", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMi7gFBVV95cUxPZ252aGhUNGNWWkdiYWNWLWNmQ2RJQUo1NWVtdWl1Wk9OUHNGam8wWlQyTmdtbGFyRXVENVdtTmc4SnBxQ1VpdWtVY2pSeUdDclZNQXVzbkp1NFVwbGJXTjhBVjdJQjVCWVJBemgzdVNDVDRCUlJmQWNiSjdpLTczOU9lYWlySTRPTi1HcVVrMnhIRF9YT2gyaHVyVlBTc3FwVFdOU2pDaHY4VmpqZjlfa204Q3oxTmdFaGs4MXNURXFJQzdHYUsyX0xmR3JiTHdOQ3BtU3NPMG11OHdibl8xSmljMS1VYm1jMkRNZVNB?oc=5" }
  { id: "temu_new002", title: "Temu与QIMA合作加强产品测试与平台合规，提升商品质量", content: "Temu宣布与质量检测机构QIMA合作，强化产品测试和平台合规性。此举旨在应对美国及欧洲市场对商品安全与合规的严格要求，涉及所有跨境卖家。合作将覆盖服装、电子、家居等品类，要求卖家提供更严格的质量检测报告。建议卖家提前准备合规文件，避免因检测不通过导致下架。", source: "PR Newswire", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiywFBVV95cUxNbV9qX2VtajB2MGNFeTFaZFROenFwN1Y4OTd5M1pVRHNTNHFqU0o3b3dvUGlrMWdIZkRkdl9zanYzZ3QtY1FMNGt0dHJReFRfbU5scmtUZHdfTjg1S0RscG5vUHVZX2FFVXlDN0UwS0RBTHhwamltX2d1UFNmeWFERW44UzR1LTZKQWpoOS04bnJvajdnZ0ZGVUR1bWZHZGlNY2taWWNkY0lYYWVua1pBSUo5XzNKZ2lPRmpVZml6QmQzc3pyR1N2UXlqWQ?oc=5" }
  { id: "shein_new003", title: "Shein与THG Fulfil合作提升英国市场卖家服务，强化物流履约", content: "Shein与英国物流公司THG Fulfil合作，旨在提升英国市场卖家服务能力。合作将优化仓储、配送及退货处理，缩短履约时效。涉及英国站卖家，尤其是时尚品类。Shein计划通过本地化物流增强竞争力，卖家可借助该服务降低跨境物流成本，提高客户满意度。", source: "Retail Gazette", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMitwFBVV95cUxNY2V1MTBZMjNfbFNRZkZzLU9uN1lDeGduVFVIeHhpSkU4RGdHUWRISnZUNGVfQl8xbFVNNzFZRG5wa1FISUYwenVzSjJiWmhObFVWd1RwYk13N2gwQTdKSTlHVTJlazAwYml5WE15SzMzdzZYeVoyQTYtb0J4SWk2aVFuQlJHQXJublFkSVZSTHM4a3F4aV9zeUNDek5KOFAzemx6ZWFLSlhDSzNmSUlzUHZNMU44amM?oc=5" }
  { id: "shein_new004", title: "Shein宣传供应链工资提升以应对审查，劳工合规成焦点", content: "Shein近期强调其供应链工资提升举措，以回应外界对劳工权益的审查。公司声称已提高中国及东南亚供应商工人工资，并加强工作条件监管。此举涉及美国及欧洲市场，旨在缓解监管压力。卖家需关注供应链合规要求，确保自身供应商符合劳工标准，避免因关联风险被平台限制。", source: "Ecotextile News", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOd21Zb0VydUZjTHFOOXRhLXhBNENGVTBoTkN0ZTZoSFNFejFaekxxT1dreGtkWU02U3MxZnBFa3NhZDZObW5RVG1mQkU5b1hCWGR0NFVNYXlZajB3LVptSE5uWVk0YUZnWGdQeXU5Tm9PR0dEOG1CUGFBYldjdF9zUFdpNzlIU3VLM1dEUlgxemxydmFPWnp2bzBuY3V6Slo5dXh1U2lXXzVCcVhqRzV5MWM2OXZTNUx5?oc=5" }
  { id: "temu_new005", title: "Temu停止直接中国至美国发货，新关税规则下调整物流模式", content: "据MSN报道，Temu已停止直接中国至美国的发货，以应对新关税规则。此前Temu主要采用直邮模式，新规下需转向海外仓或半托管模式。涉及美国市场所有卖家，尤其是依赖低价直邮的品类。建议卖家尽快布局美国海外仓，或参与Temu半托管计划，避免物流中断。", source: "MSN", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMipgNBVV95cUxNT0J5eTJ6Um5QYXdaRjJ4ek9kSWdOTHB6dURvZDZ4ZFU3QWp5YXFCWDUzemVqX04xUURLS1h3QTlhMW1obWFOVjZBYzg2WWVZWDEwMVNoRjJ5ZFFodUNpNHJmR20wMUlzT0RVNktzODNVcDN3bjRZNzZfWGJhQ3JqSEcyemsxcVFtSjVVeGdYNndtbDZndC1qakNQaDlBbjgtN0JNYjBMX1pJcG9MbnQwSXFNdkpvWFBsajFzcmtQN08zQjVNeHpqRVBzUzlHMlZ1NkVhWmZBR3d5MmkxSlJ3S0ZXSnRDbTdtUTJ5Q0FIYkJWa1J3d2otaHA0ZGxpS0ZKX0lxVVhwcVI1aThoVjJmNWpMVDZvendheW5ZUnhIQm1scjFVU1hoWm5TY3ZpZmRsRmhKbWNfUUg3WlY2czRvRXBrbFVPdXBERThNZlpoOE1xZi1SajZlUktDN0lRRGtZTHJBTFVBaF9mRjlaekJjT18xc0NWb1N3cERDNXpOQXdvQzFXdEdBcGRGQnpMcThwdGt6RDdZS01hd1VBeDd6b2l3VVZxQQ?oc=5" }
  { id: "temu_new006", title: "Temu半托管模式开放欧洲主体入驻，拓展本地化履约", content: "Temu半托管模式正式开放欧洲主体入驻，允许卖家使用欧洲本地仓库发货，提升履约时效。涉及欧盟27国市场，要求卖家在欧洲有公司主体或合作海外仓。该模式降低物流成本，提高客户体验，适合有欧洲库存的卖家。建议卖家评估自身仓储能力，抓住欧洲市场增长机会。", source: "白鲸出海", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE45cjlnUFRaaWlQdW9xSThHM2dxcUoyWmhra3ZnNmViRF9QcGhROXJrUUVRZVowVnQ1czdySDZmTm5PVTlvbDFkWG42THVkWWxjVld1aFhmWGg?oc=5" }
  { id: "temu_new007", title: "Temu波兰用户量超越本土龙头，欧洲市场扩张加速", content: "据亿邦动力网报道，Temu在波兰的用户量已超过本土电商平台，成为流量第一。Temu通过低价策略和本地化运营快速占领市场，涉及波兰及周边欧洲国家。卖家可关注波兰市场选品机会，尤其是家居、服饰等品类。但需注意欧洲合规要求，如CE认证和税务。", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5rMXlhc1FEV1VpbGxSeFl5TnAwM0RpMzI4SjhxSUE1aUU0OThNNzdha28wRDBNR2tVMWNDS3hGcmgxZWV4eDJsSFI5SHFnRDR0dTBidzF3?oc=5" }
  { id: "shein_new008", title: "Shein与Temu面临集体诉讼，要求退还关税涨价款项", content: "Shein和Temu在美国面临多起集体诉讼，消费者指控平台因关税调整而涨价，要求退还多收费用。诉讼涉及美国市场所有消费者，可能影响平台定价策略和卖家利润。若败诉，平台可能被迫调整价格或补偿消费者，卖家需关注后续政策变化，合理定价。", source: "Global Cosmetics News", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMirwFBVV95cUxOY0hCcmV4eS1NMk9sbnRvZzZ1Wmg2amQxZ1JGM2k0Q3JOQThyd1VsQ1IwMGxXcHNiMzVnbmprSVVJVEU1cWdTQ0dGcWIwbzNVN1Fqb1dLZzhzeWxzeTBPVHJITEJ5UTNRU0hDM1pTN0ZPN0RHVVRjZFN0VEdkcUpFWW5FdVZFd25QNmhJNzJieFBFVkVJUkNESW9WbUdZaE40WW1OeDVMa2xDTWlGVnE4?oc=5" }
  { id: "temu_new009", title: "Temu欧洲站点验证升级，强制对公与视频审核限制卖家账号", content: "Temu欧洲站点升级卖家验证流程，强制要求对公账户验证和视频审核，多数卖家账号因此受限。涉及欧洲站所有卖家，需提交营业执照、法人身份证明等材料。审核周期可能延长，建议卖家提前准备资料，避免账号冻结影响运营。", source: "亿邦动力网", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiVEFVX3lxTE8yaUlHOW9yZmtGRURKT01oMU90QkdTV0ZYRGZwVlFvazBZMHJWWFl6ZmF3cnlaQmNUQXhLeWNuVnV0bXNKRzBNcVk3MEMxUV9NNnVQRg?oc=5" }
  { id: "shein_new010", title: "Shein启动大码女装专项招商，拓展千亿蓝海市场", content: "Shein启动大码女装专项招商，面向全球供应商招募优质大码女装产品。该品类复购率高于行业平均水平，市场潜力巨大。涉及美国、欧洲等市场，要求供应商具备快速反应能力和质量把控。卖家可抓住细分市场机会，提供差异化产品，但需注意尺码标准和版型设计。", source: "中华网", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMibkFVX3lxTE9RRmRWLWh3VG9nS2FsdHBkb0JzRXNJVlZWb3RKd3hnRGhJNlZ3V0sxMUlVaFFjQk1SUGNjUXJLbDhxRXRjdEp1X3lLaUV5Rno3RTBEQ2ZIWUh3bUtleFc0RDhKZ3ZKbEFKajVLcEZn?oc=5" }
  { id: "shein_new011", title: "Shein将于4月中上旬限制美区商家自发货功能，加强物流管控", content: "Shein宣布自4月中上旬起，限制美国市场商家自发货功能，要求使用平台物流或合作海外仓。此举旨在提升履约时效和客户体验，涉及所有美区卖家。卖家需提前切换物流模式，避免订单无法处理。建议与Shein推荐物流商合作，或自建美国海外仓。", source: "亿邦动力网", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1INy1tWEFJZXgtYXhaN0VKQU0zR1drRTJNc19EWU9BMC1JR2otRjdfV01BSTVsM1U5eDlsWnRMUUN6a01OSDRMRkZCYkwyZkZIbnVaS01n?oc=5" }
  { id: "aliexpress_new012", title: "亚马逊利用中国供应链优势应对关税及Shein、Temu竞争", content: "据南华早报报道，亚马逊加强与中国供应商合作，通过更紧密的供应链整合来应对关税挑战和Shein、Temu的竞争。亚马逊可能降低对中国卖家的费率或提供物流补贴。涉及美国市场，中国卖家可关注亚马逊的优惠政策，同时优化供应链成本以保持竞争力。", source: "South China Morning Post", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQdjVWZU5yNzB6aVdMcHZDRExpNlNLYzRJYjRNelVmOE5leE1IMUlmcm10UjJCblFfSG9zSWFUMVlZTmpxMl9KVmpNZnRjMTNJRmY5S1BvbzBDM1FlVEZkSENaeC05cV93S1ExNHppT2Q1bmJuT3E4cmZ1Qm5OSmNaWG1nR18yUTJUcEl2X2VqVnJNUkU5YkUxVTh2b1V2YUpTYkpqMzNvNWE5d3FfVXRMQ3RXakF6MkRDMUtrZmpqb2ZJRVHSAcMBQVVfeXFMTVE3dHRVRXMxMXVrb0JzMnEzN0Z5MkUtN1FETWMzUmFJNXJPNHNFVng0RUR3LTJQcjNmVTk4UmwyeUZPQW5JNHRjVFlZNXA4b005S1FLVTh5QVBiSlNnNlVLdWRsNTgySE40cVFVVzRhRTY3RHlXY2ZhVV9fdVpLWDAtXzg0U2VCZ2FnY3hRdENXMUwwLVkwRVBmVk5mOEVSSWV4LXlPbXZfMTRwUi1GVjZxckxtckNNcUc4UFZiY3pNV24w?oc=5" }
  { id: "joybuy_new013", title: "京东国际自营开放入驻，助力品牌进入中国市场", content: "京东国际自营发布入驻指南，开放海外品牌通过京东自营模式进入中国市场。涉及日本、美国、欧洲等市场，要求品牌具备海外资质和供应链能力。京东提供仓储、物流、营销等一站式服务，适合有品牌力的卖家。建议关注京东国际的招商政策，利用其物流优势拓展中国市场。", source: "新浪财经", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxOdWlURkNPQmo3OU5US0VmaGh0OWpQclRKb3o4ZUlMRGVCUzZkX1BKVHR5STRCaXFDTG1oTHhtUzltelhMa3M1M09xU2FuX3VnUFl1a2x4Q3c1YWlaRG5fUVZTMUZoQ1hieEZrOXZDYUczR0pnSmVXalU2cUtubHRUamJPUmo?oc=5" }
  { id: "joybuy_new014", title: "京东物流与OpenClaw合作推出龙虾智能体，助力国际商家出海", content: "京东物流与OpenClaw合作推出“龙虾”智能体，为国际商家提供智能物流解决方案。该智能体整合仓储、配送、清关等环节，提升出海效率。涉及美国、欧洲市场，适合跨境电商卖家。京东物流通过技术赋能，降低物流成本，卖家可借助该工具优化供应链管理。", source: "新浪财经", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMidkFVX3lxTE9tRDlSMXlBdzBSMHZiNzRFN2I4TFkzYkVhSlhSNWRaNDRLMGxCaVlxR0JucmRLY0x1dzlNNFJfY3l4NVNxNWJ0ZTJuWURRRXk1SUhaeGRhUXotU2t3NTBxRkZOWWxfQlE0WmZ5Zmt5NWJQWkd0YXc?oc=5" }
  { id: "joybuy_new015", title: "京东物流优势成股价新增长点，跨境物流能力受关注", content: "AD HOC NEWS分析京东物流的竞争优势，认为其物流网络可能推动股价上涨。京东物流在中国及海外布局仓储，提供高效配送服务。涉及跨境卖家，京东物流的海外仓和干线运输能力可帮助卖家降低物流成本，提升履约时效。建议卖家评估京东物流的跨境服务。", source: "AD HOC NEWS", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMixgFBVV95cUxQbEVFQV9lc1l4Y1lVZTM2bW95WmQwMVVTUkhhTFRvdkkyWDNNTmxzX2ZRTm52dGFCRUd3SHo2SlM1NHI4bUx5WlY4ZEY2UHh2ejB6MDZ1VEsycUs5WWhCQUZJc29tRWE4UkllOGNEc3ZDNmc0aXpEa0tTYzlqaG55UGdyNXJSY25QYmstYmQzUlZsMGJYN3U5Zk5ZQmVEU0hJWXpnM3ZoR3I4a2UxaFcwNENNT1R2dVBCdnkwZVh3TGVWZktGOFE?oc=5" }
  { id: "aliexpress_new016", title: "阿里速卖通举办品牌出海顶级峰会，仅99个品牌受邀", content: "阿里速卖通举办品牌出海顶级峰会，仅邀请99个品牌参与，聚焦品牌化战略。涉及全球市场，尤其是欧洲和美洲。速卖通将提供流量扶持和营销资源，帮助品牌提升海外知名度。卖家可关注速卖通的品牌化趋势，提升产品品质和品牌形象，争取平台资源。", source: "雨果跨境", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE4zSEJkMWxCMWdTaTNxakhwT3B2SW1XUUx4dFQzTUJ4aEh5VTJ1bVZTQnVmZklrc1RsMWFYUFRnZlA2Q3lMMUtnSVFLVVo?oc=5" }
  { id: "temu_new017", title: "Temu卖家利润承压，选品与利润破局点分析", content: "雨果跨境分析Temu卖家面临低利润、高内卷困境，提出选品与利润破局策略。建议卖家聚焦高附加值品类，优化供应链成本，利用Temu的流量红利。涉及美国、欧洲市场，尤其是标品卖家。卖家需精细化运营，避免价格战，关注平台补贴政策。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTE9lcmtUcTlUTkZwcnhPc0Y0NDdkZENjRlMtUHV4cDNGWnF3VXlDOGRJbktSOWdCM2sxZFR6TTRxTGk2eEQ1VVVYbVY0R1A?oc=5" }
  { id: "shein_new018", title: "Shein半托管加拿大站招商，拓展北美市场", content: "Shein半托管模式开放加拿大站招商，允许卖家使用加拿大本地仓库发货。涉及加拿大市场，要求卖家有本地库存或合作海外仓。半托管模式降低物流成本，提升配送时效，适合有北美仓储的卖家。建议卖家评估加拿大市场需求，尤其是服饰、家居品类。", source: "手机新浪网", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9OOXpxVGd0aWFtbTF1Q2NUMGlTb3VVdmJTY2o3aU8ycmN4VUdDNmppVnI5QTBqaXpsRDByYUZnY2dDb09WZDdUWTJUNTFPZzIzMGJhNjVVcmpSVk1fSVM4cjdXOA?oc=5" },
  { id: "temu_new001", title: "Temu与QIMA合作强化产品测试与平台合规，卖家需关注审核新规", content: "Temu宣布与质量检测机构QIMA合作，旨在加强平台产品测试和合规管理。此次合作将覆盖Temu平台上的所有品类，特别是针对欧洲和美国市场的电子产品、玩具、纺织品等高风险品类。QIMA将为Temu提供第三方检测服务，确保商品符合当地安全标准和法规要求。对于卖家而言，这意味着产品上架前可能需要提交更多的合规文件，如CE认证、FDA注册等。建议卖家提前与供应商沟通，确保产品具备相关认证，避免因合规问题导致下架或罚款。该合作预计在2026年第二季度全面实施。", source: "PR Newswire", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiywFBVV95cUxNbV9qX2VtajB2MGNFeTFaZFROenFwN1Y4OTd5M1pVRHNTNHFqU0o3b3dvUGlrMWdIZkRkdl9zanYzZ3QtY1FMNGt0dHJReFRfbU5scmtUZHdfTjg1S0RscG5vUHVZX2FFVXlDN0UwS0RBTHhwamltX2d1UFNmeWFERW44UzR1LTZKQWpoOS04bnJvajdnZ0ZGVUR1bWZHZGlNY2taWWNkY0lYYWVua1pBSUo5XzNKZ2lPRmpVZml6QmQzc3pyR1N2UXlqWQ?oc=5" }
  { id: "shein_new002", title: "Shein与THG Fulfil合作提升英国市场卖家服务，强化本地履约能力", content: "Shein宣布与英国物流公司THG Fulfil达成合作，以提升其英国市场卖家服务。THG Fulfil将为Shein提供仓储、拣货和配送服务，帮助卖家实现更快的本地发货。该合作旨在缩短英国消费者的收货时间，从原来的7-10天缩短至3-5天。Shein计划在2026年将英国市场的本地发货比例提升至50%以上。对于卖家而言，这意味着需要将库存提前备至THG Fulfil的英国仓库，但可享受更低的物流成本和更高的转化率。建议卖家评估自身产品在英国市场的需求，合理规划库存。", source: "Retail Gazette", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMitwFBVV95cUxNY2V1MTBZMjNfbFNRZkZzLU9uN1lDeGduVFVIeHhpSkU4RGdHUWRISnZUNGVfQl8xbFVNNzFZRG5wa1FISUYwenVzSjJiWmhObFVWd1RwYk13N2gwQTdKSTlHVTJlazAwYml5WE15SzMzdzZYeVoyQTYtb0J4SWk2aVFuQlJHQXJublFkSVZSTHM4a3F4aV9zeUNDek5KOFAzemx6ZWFLSlhDSzNmSUlzUHZNMU44amM?oc=5" }
  { id: "shein_new003", title: "Shein面临供应链工资审查，或影响欧美市场合规成本", content: "Shein近期因供应链工资问题受到媒体和监管机构关注。据Ecotextile News报道，Shein正在宣传其供应链工资水平，但与此同时，其供应商工厂的工人待遇仍面临质疑。欧盟和美国市场对供应链透明度要求日益严格，Shein可能面临更严格的合规审查。如果Shein被认定存在工资违规，可能导致罚款或市场准入限制。对于Shein卖家而言，需要确保自身供应链符合当地劳动法规，否则可能面临产品下架风险。建议卖家关注Shein的供应商合规要求，提前准备相关文件。", source: "Ecotextile News", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOd21Zb0VydUZjTHFOOXRhLXhBNENGVTBoTkN0ZTZoSFNFejFaekxxT1dreGtkWU02U3MxZnBFa3NhZDZObW5RVG1mQkU5b1hCWGR0NFVNYXlZajB3LVptSE5uWVk0YUZnWGdQeXU5Tm9PR0dEOG1CUGFBYldjdF9zUFdpNzlIU3VLM1dEUlgxemxydmFPWnp2bzBuY3V6Slo5dXh1U2lXXzVCcVhqRzV5MWM2OXZTNUx5?oc=5" }
  { id: "tiktok_new004", title: "TikTok Shop推出产品放大计划，助力卖家提升美国市场曝光", content: "TikTok Shop于2026年2月9日推出产品放大计划（Product Amplification Program），旨在帮助卖家通过付费推广和内容合作提升产品曝光。该计划将向美国市场卖家开放，参与卖家可获得流量扶持和转化率提升。具体包括：广告费用补贴、达人合作匹配、以及搜索排名优化。预计参与卖家的平均曝光量可提升30%以上。建议卖家积极报名，尤其是新品和季节性产品，可借此快速起量。同时需注意广告投入产出比，合理设置预算。", source: "MediaPost", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-02-09"), url: "https://news.google.com/rss/articles/CBMirgFBVV95cUxOMW8wcWNmd1BNM19UMm1pZUttUk0wRS1lNXZHRWk2MGR4bmRLWnZCc2loU3dqWGNXVEllUXlBYk9nU3FqVHR3azRrOFVwUWFuTTJSUnl6aUQzVEI3ZFRFaDE3ZjRfVHB6cUlKQ1UwTm05Z0xYbmZ2enU0TjN3dGdYcVBzNEstNVQ0anZlSUo0MEZOUUstRHQ3bEJraEdCT1lrcWliYW9EbXZWOFYzMVE?oc=5" }
  { id: "tiktok_new005", title: "亚马逊与TikTok正式联手，跨境电商进入货找人新纪元", content: "据雨果跨境报道，亚马逊与TikTok正式达成合作，用户可在TikTok内直接购买亚马逊商品，无需跳转。这一合作将亚马逊的供应链优势与TikTok的流量优势结合，实现“货找人”模式。目前该功能已在美国市场测试，预计2026年全面开放。对于卖家而言，这意味着可以通过TikTok内容引流至亚马逊店铺，但需注意广告投放和内容合规。建议卖家提前布局TikTok内容营销，与达人合作制作种草视频。", source: "雨果跨境", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBOLTVyX2lsRzdMelFzT1M0RERPeFpTZ1lZY0xKSXFkc0RYdmZGQlpDRDdrTFdhS09kdXJ5Q1VZbFI3Z0FNbTV5WGNPczQ?oc=5" }
  { id: "temu_new006", title: "Temu半托管开放欧洲主体入驻，卖家可自主定价履约", content: "Temu半托管模式正式向欧洲主体开放入驻，允许拥有欧洲公司资质的卖家自主定价、自主履约（从欧洲本地发货）。该模式适用于已在欧洲有库存的卖家，可降低物流成本并提升时效。目前开放的国家包括德国、法国、意大利、西班牙等。卖家需提供欧洲公司注册证明和VAT税号。半托管模式下，平台收取较低佣金（约5%），但卖家需自行承担物流和售后。建议有欧洲本地库存的卖家积极入驻，以获取更多流量和利润空间。", source: "白鲸出海", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE45cjlnUFRaaWlQdW9xSThHM2dxcUoyWmhra3ZnNmViRF9QcGhROXJrUUVRZVowVnQ1czdySDZmTm5PVTlvbDFkWG42THVkWWxjVld1aFhmWGg?oc=5" }
  { id: "tiktok_new007", title: "TikTok Shop美国夏季大促战报：GMV增长显著，卖家需关注备货", content: "TikTok Shop公布美国夏季大促战报，数据显示大促期间GMV环比增长120%，订单量增长80%。热销品类包括美妆、服饰和电子产品。大促期间，平台通过直播带货和短视频挑战赛拉动销售。对于卖家而言，夏季大促是重要的增长节点，建议提前2-3个月备货，并优化直播内容。同时注意物流时效，避免因发货延迟导致差评。TikTok Shop美国站目前支持海外仓和国内直发，建议使用海外仓以提升履约速度。", source: "白鲸出海", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiWEFVX3lxTE13bWFBcExxMWdCeGxBdFlkRWE3VHhUT01LZURNLVhrTDk5LXBQSVlwczZIbElXOGxxeDFGdnY1RzFMSC1jRkFLZHc0V1YzMzdiSzBvejRaS3Q?oc=5" }
  { id: "aliexpress_new008", title: "亚马逊广告AI营销工具升级，卖家可更精准投放美国市场", content: "亚马逊升级其广告AI营销工具，新增自动优化出价、智能关键词推荐和受众细分功能。该工具利用机器学习分析用户行为，帮助卖家提高广告转化率。新工具已在美国站上线，预计2026年第三季度推广至欧洲站。对于卖家而言，AI工具可降低广告运营成本，提升ROI。建议卖家尽快熟悉新功能，调整广告策略。同时注意广告预算控制，避免因自动出价导致成本超支。", source: "亿邦动力网", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5rMXlhc1FEV1VpbGxSeFl5TnAwM0RpMzI4SjhxSUE1aUU0OThNNzdha28wRDBNR2tVMWNDS3hGcmgxZWV4eDJsSFI5SHFnRDR0dTBidzF3?oc=5" }
  { id: "joybuy_new009", title: "京东物流强化知识产权保护，助力品牌出海美国欧洲", content: "京东发布知识产权保护新举措，为品牌商家提供侵权监测、投诉和维权服务。该服务覆盖京东国际业务，包括美国、欧洲等市场。京东利用AI技术监测商品链接，自动识别疑似侵权商品，并协助品牌方下架。对于卖家而言，需确保所售商品不侵犯他人知识产权，否则可能面临封店风险。建议卖家在选品时进行专利和商标查询，避免使用未授权图片或设计。京东还提供品牌备案服务，通过后可获得更多保护。", source: "JD Corporate Blog", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMimwFBVV95cUxPQUxXb3ZPNmhzMGFpYnZ6SHo3aWEzQVQwdVdDcElUcFdHT2d6emMzZVc1VXFUQ0VIOWNyZDhmNzd6ZkY1V3lHaXBRLU9waVlXZFI4Q3N5b2lRTHpDQUQzSVp4MnNndnQ1S01KVzhJRUVJUkJ2Vi15YXprTTFqdDlGVVpPRkE1dE9KOEE2T3RoMUhRakZFT2F1RUlzMA?oc=5" }
  { id: "temu_new010", title: "意大利VAT税号大规模失效，Temu欧洲审核新规影响卖家", content: "据雨果跨境报道，意大利VAT税号出现大规模失效问题，导致Temu平台上的卖家无法正常销售。Temu随即加强欧洲审核，要求卖家提供有效的VAT税号和公司文件。此次事件主要影响使用虚假或无效VAT的卖家，预计将有数千个账号被限制。对于合规卖家，建议立即检查VAT税号有效性，并确保与平台信息一致。同时，Temu可能要求卖家进行视频验证，以确认公司真实性。建议卖家提前准备营业执照、法人身份证等文件。", source: "雨果跨境", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiT0FVX3lxTE54YXpNV3hRN2FWZ1lYYS1RaW9JOTJtV3lXc2FIVzNTUURYcWJSVXJfRmxYdXplTnlwVlFZdHU3am13RklLempYbUNvejg0V0U?oc=5" }
  { id: "tiktok_new011", title: "TikTok Shop全托管上线JIT模式准入与履约新规，卖家需调整备货", content: "TikTok Shop全托管模式上线JIT（Just-In-Time）模式，允许卖家无需提前备货至平台仓库，而是根据订单实时发货。该模式适用于美国市场，旨在降低卖家库存压力。但平台同时出台履约新规：卖家需在48小时内发货，否则将面临罚款。JIT模式适合高周转、轻小件商品，但要求卖家有稳定的供应链和快速发货能力。建议卖家评估自身履约能力，选择适合的模式。对于无法满足时效的卖家，仍建议使用全托管备货模式。", source: "DoNews", type: "press", platform: "tiktok", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiXkFVX3lxTFBqWFNvM1FLX3d5aUJiYURfa3ZYZ1RzNWJwcDJEMk9mVXZUWlRNbzBnY2R6Q2dYMXZ4ZWhqVkk4aXNzd3l4V1dTWThKSDJXSTFqVE9lZkFqcExqTUx1NXc?oc=5" }
  { id: "temu_new012", title: "Temu仓库布局详解：2026年如何开始在美国欧洲销售", content: "INQUIRER.net USA发布Temu仓库布局指南，介绍Temu在美国和欧洲的仓库网络。Temu在美国拥有超过10个仓库，主要分布在加州、德州、新泽西等地；在欧洲则与当地物流商合作，在德国、波兰、意大利等地设有分拣中心。卖家可通过Temu全托管模式将商品发往国内仓，由平台负责国际物流和本地配送。2026年，Temu计划进一步扩大海外仓规模，提升履约时效。建议卖家关注Temu的仓库地址和收货要求，确保商品符合入库标准。", source: "INQUIRER.net USA", type: "press", platform: "temu", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9qRlhlOGsyc250dWdaemY3WjFUZHJwdWlfYTlNVWVRbGxXLUhSZ2o3cWcwUi03emh4U0FwNk5lZ2Z6a2RxZ3gxTkcweTZoVlB5UzJuZ005UlVfWUEwc2NhTnlpSDFOd1k?oc=5" }
  { id: "aliexpress_new013", title: "亚马逊智能仓库应对Temu和Shein竞争，提升美国履约效率", content: "亚马逊推出智能仓库计划，通过自动化和机器人技术提升仓储效率，以应对Temu和Shein的低价竞争。该计划将在美国多个仓库部署，预计将订单处理时间缩短30%。亚马逊还计划降低部分品类的配送费，以吸引卖家使用FBA。对于卖家而言，智能仓库意味着更快的发货速度和更低的物流成本。建议卖家评估FBA与自发货的利弊，对于高周转商品优先使用FBA。同时注意亚马逊的库存管理政策，避免长期仓储费。", source: "Notebookcheck", type: "press", platform: "aliexpress", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMinAFBVV95cUxPWU5KQnpmOHpYZ21penN1Zno3RmNVb25IMmJGUC1KX2hmckVGUUF2SldRbGpEVlZFRXVrYjFUeGtvSVh2WUhEM1lJVXpqbFNDNGE1WXJ0Nlo0TUdGOEZCSGZUZXQwRFpkRHl1TmJXcWlCOHRfa0Z3QVI1RXh6TlN5Ty1IaUJXcnAtLVlidFZ1Vjk3V0g2elZzUFRLQlY?oc=5" }
  { id: "shein_new014", title: "Shein和Temu面临关税退税集体诉讼，卖家需关注合规风险", content: "Shein和Temu在美国面临集体诉讼，指控其未向消费者退还多收的关税。诉讼称，两家平台利用小额包裹免税政策，但实际向消费者收取了高于应缴的关税。如果败诉，平台可能面临巨额赔偿，并可能调整定价策略。对于卖家而言，需确保商品申报价值准确，避免因低报或高报引发法律风险。建议卖家与平台沟通，了解关税计算方式，并保留相关凭证。同时关注诉讼进展，及时调整运营策略。", source: "WWD", type: "press", platform: "shein", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMipAFBVV95cUxNY0dobkFGMTg3TW5yRExSZTF4MHQ1dmVRMVVTZUxHX2ZjWVFLSDdVZEtxMW1OV2NsM2ZXNW9FeWduREp6cUI5MHktSzZMX1dkVmVDd1VwdWlxV2NfR3FGQVJDazVXMDB6V2lDY0NFSk1uaXU3VGpmSzk4S2NIQkI4aWZ3MDFJMkRwYk5rSF81U2s2UndUbjdhRlhmY2F5XzBWMUJkTg?oc=5" }
  { id: "joybuy_new015", title: "京东国际自营入驻指南发布，助力中国卖家开拓美国欧洲市场", content: "京东国际自营平台发布入驻指南，面向中国卖家开放美国、欧洲等市场。京东国际自营模式要求卖家将商品发往京东海外仓，由京东负责销售和配送。入驻条件包括：公司注册满1年、有品牌授权或自有品牌、产品符合目标市场标准。京东提供流量扶持和营销支持，佣金约为8-15%。对于卖家而言，京东国际自营可降低运营门槛，但需承担库存风险。建议有品牌和供应链优势的卖家优先考虑，尤其是电子产品、家居等品类。", source: "新浪财经", type: "press", platform: "joybuy", dimension: "", date: new Date("2026-04-25"), url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxOdWlURkNPQmo3OU5US0VmaGh0OWpQclRKb3o4ZUlMRGVCUzZkX1BKVHR5STRCaXFDTG1oTHhtUzltelhMa3M1M09xU2FuX3VnUFl1a2x4Q3c1YWlaRG5fUVZTMUZoQ1hieEZrOXZDYUczR0pnSmVXalU2cUtubHRUamJPUmo?oc=5" }
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

// 内容数据
const contentData = {
    flash: [
        {
            id: 1,
            title: "2026年1月双月度Competitor Study Flash",
            date: "2026-01-12",
            summary: "2026年1月双月度竞争对手研究分析，包含最新市场趋势和竞争策略分析。",
            tags: ["双月报告", "竞争分析", "市场趋势", "出海电商"],
            file: "files/2026 F2 Seller learning bi-monthly report - Jan.pdf"
        },
        {
            id: 2,
            title: "2025年3月双月度Competitor Study Flash",
            date: "2025-03-14",
            summary: "2025年3月双月度竞争对手研究分析，深入解析春季市场动态。",
            tags: ["双月报告", "竞争分析", "春季市场", "政策影响"],
            file: "files/2025 SL Seller learning bi-monthly report - March.pdf"
        },
        {
            id: 3,
            title: "2025年5月双月度Competitor Study Flash",
            date: "2025-05-08",
            summary: "2025年5月双月度竞争对手研究分析，关注夏季销售策略变化。",
            tags: ["双月报告", "竞争分析", "夏季策略", "流量分析"],
            file: "files/2025 SL Seller learning bi-monthly report - May.pdf"
        },
        {
            id: 4,
            title: "2025年7月双月度Competitor Study Flash",
            date: "2025-07-11",
            summary: "2025年7月双月度竞争对手研究分析，重点关注中期市场表现。",
            tags: ["双月报告", "竞争分析", "Prime Day", "品牌策略"],
            file: "files/2025 SL Seller learning bi-monthly report - July.pdf"
        },
        {
            id: 5,
            title: "2025年10月双月度Competitor Study Flash",
            date: "2025-10-28",
            summary: "2025年10月双月度竞争对手研究分析，年末购物季前瞻分析。",
            tags: ["双月报告", "竞争分析", "购物季", "促销策略"],
            file: "files/2025 SL Seller learning bi-monthly report - Oct.pdf"
        }
    ],
    reports: [
        {
            id: 741,
            title: "TEMU半托管模式解读及扶持政策",
            date: "2024-04-26",
            summary: "TEMU半托管模式解读及扶持政策",
            tags: ["深度研究", "TEMU", "半托管模式"],
            file: "files/TEMU半托管模式解读及扶持政策.pdf"
        },
        {
            id: 6,
            title: "Multi Channel C-return Study",
            date: "2025-11-25",
            summary: "分析对比多渠道(Temu、Shein、TikTok Shop)退货流程，识别最佳实践并提供可行性洞察，帮助降低时尚品类退货率的同时保持客户满意度。重点关注退货率对比分析、卖家情绪研究、成本效益评估，为优化Amazon C-return产品功能提供数据驱动的建议。",
            tags: ["深度研究", "多渠道对比", "退货分析", "时尚品类"],
            file: "files/Multi Channel C-return study.pdf"
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
    const allContent = [...contentData.flash, ...contentData.reports];
    const latestDate = allContent.reduce((latest, item) => {
        return new Date(item.date) > new Date(latest) ? item.date : latest;
    }, allContent[0].date);
    
    document.getElementById('lastUpdate').textContent = latestDate;
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
    
    return `
        <div class="content-card" data-id="${item.id}">
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
                <a href="${item.file}" class="btn btn-primary" target="_blank">查看详情</a>
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
    const sections = ['flash', 'reports', 'news', 'search'];
    
    if (sectionId === 'search') {
        // 只显示搜索结果
        sections.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                section.style.display = id === 'search' ? 'block' : 'none';
            }
        });
    } else {
        // 显示所有内容区域，但突出显示选中的
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
        
        // 滚动到对应区域
        if (sectionId === 'flash') {
            document.getElementById('flash').scrollIntoView({ behavior: 'smooth' });
        } else if (sectionId === 'reports') {
            document.getElementById('reports').scrollIntoView({ behavior: 'smooth' });
        }
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
    // Temu资讯源
    {
        id: 1,
        name: 'Temu官方Twitter',
        url: 'https://twitter.com/temu_official',
        type: 'social',
        platform: 'temu'
    },
    {
        id: 2,
        name: 'Temu官网新闻',
        url: 'https://www.temu.com/news',
        type: 'official',
        platform: 'temu'
    },
    // Shein资讯源
    {
        id: 3,
        name: 'Shein官方Instagram',
        url: 'https://instagram.com/shein_official',
        type: 'social',
        platform: 'shein'
    },
    {
        id: 4,
        name: 'Shein新闻中心',
        url: 'https://www.shein.com/news',
        type: 'press',
        platform: 'shein'
    },
    // TikTok资讯源
    {
        id: 5,
        name: 'TikTok Shop官方',
        url: 'https://twitter.com/tiktokshop',
        type: 'social',
        platform: 'tiktok'
    },
    {
        id: 6,
        name: 'TikTok商业博客',
        url: 'https://www.tiktok.com/business/blog',
        type: 'official',
        platform: 'tiktok'
    },
    // Joybuy资讯源
    {
        id: 7,
        name: 'Joybuy官方微博',
        url: 'https://weibo.com/joybuy',
        type: 'social',
        platform: 'joybuy'
    },
    {
        id: 8,
        name: 'Joybuy官网公告',
        url: 'https://www.joybuy.com/news',
        type: 'official',
        platform: 'joybuy'
    }
];

let newsData = [
    {
        id: 1,
        title: 'Temu推出全新物流服务',
        content: 'Temu宣布在北美地区推出48小时快速配送服务，进一步提升用户购物体验，与Amazon Prime形成直接竞争...',
        source: 'Temu官方Twitter',
        type: 'social',
        platform: 'temu',
        time: '1小时前',
        url: 'https://twitter.com/temu_official/status/example'
    },
    {
        id: 2,
        title: 'Shein扩展欧洲市场布局',
        content: 'Shein宣布在德国和法国建立新的配送中心，预计将大幅缩短欧洲用户的收货时间，加强本地化运营...',
        source: 'Shein新闻中心',
        type: 'press',
        platform: 'shein',
        time: '3小时前',
        url: 'https://www.shein.com/news/example'
    },
    {
        id: 3,
        title: 'TikTok Shop直播带货新功能',
        content: 'TikTok Shop推出AI智能推荐系统，帮助创作者更精准地向观众推荐商品，预计将提升转化率30%...',
        source: 'TikTok Shop官方',
        type: 'social',
        platform: 'tiktok',
        time: '5小时前',
        url: 'https://twitter.com/tiktokshop/status/example'
    },
    {
        id: 4,
        title: 'Joybuy春节促销活动启动',
        content: 'Joybuy宣布启动为期一个月的春节大促活动，涵盖电子产品、家居用品等多个品类，最高优惠达70%...',
        source: 'Joybuy官方微博',
        type: 'social',
        platform: 'joybuy',
        time: '8小时前',
        url: 'https://weibo.com/joybuy/example'
    }
];

function displayNews(filter = 'all') {
    const newsGrid = document.getElementById('newsGrid');
    let filteredNews = newsData;
    
    if (filter !== 'all') {
        if (['social', 'official', 'press'].includes(filter)) {
            filteredNews = newsData.filter(news => news.type === filter);
        } else {
            filteredNews = newsData.filter(news => news.platform === filter);
        }
    }
    
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

// 模拟实时更新资讯
function updateNews() {
    const platforms = ['temu', 'shein', 'tiktok', 'joybuy'];
    const randomPlatform = platforms[Math.floor(Math.random() * platforms.length)];
    
    const mockNews = {
        temu: [
            'Temu推出新的卖家激励计划',
            'Temu在欧洲市场份额持续增长',
            'Temu与本地物流公司达成合作'
        ],
        shein: [
            'Shein发布2025年可持续发展报告',
            'Shein推出AR试衣功能',
            'Shein扩展家居用品类目'
        ],
        tiktok: [
            'TikTok Shop推出新的创作者分成计划',
            'TikTok直播带货功能全面升级',
            'TikTok Shop与品牌方深度合作'
        ],
        joybuy: [
            'Joybuy优化跨境物流网络',
            'Joybuy推出会员专享服务',
            'Joybuy加强与京东生态整合'
        ]
    };
    
    const titles = mockNews[randomPlatform];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    
    const newNewsItem = {
        id: `${randomPlatform}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        title: randomTitle,
        content: `${randomTitle}的详细内容，展示${getPlatformLabel(randomPlatform)}平台的最新动态和发展趋势...`,
        source: `${getPlatformLabel(randomPlatform)}官方`,
        type: ['social', 'official', 'press'][Math.floor(Math.random() * 3)],
        platform: randomPlatform,
        time: '刚刚',
        url: '#',
        isNew: true
    };
    
    newsData.unshift(newNewsItem);
    if (newsData.length > 50) {
        newsData = newsData.slice(0, 50); // 保持最新50条
    }
    
    displayNews();
    showUpdateNotification(1);
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
    displayNews();
    startAutoRefresh(); // 启动自动刷新
    
    // 页面卸载时停止自动刷新
    window.addEventListener('beforeunload', stopAutoRefresh);
});

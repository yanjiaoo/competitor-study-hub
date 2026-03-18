// 从JSON文件加载数据
let contentData = { flash: [], studies: [] };

// 加载内容数据
async function loadContent() {
    try {
        const response = await fetch('content.json');
        const allContent = await response.json();
        
        contentData.flash = allContent.filter(item => item.type === 'flash');
        contentData.studies = allContent.filter(item => item.type === 'study');
        
        renderContent();
    } catch (error) {
        console.error('加载内容失败:', error);
    }
}

// 渲染内容函数
function renderContent() {
    renderFlash();
    renderStudies();
}

function renderFlash() {
    const container = document.querySelector('.flash-grid');
    container.innerHTML = contentData.flash.map(item => createContentCard(item)).join('');
}

function renderStudies() {
    const container = document.querySelector('.study-grid');
    container.innerHTML = contentData.studies.map(item => createContentCard(item)).join('');
}

function createContentCard(item) {
    return `
        <div class="content-card">
            <h4>${item.title}</h4>
            <div class="date">${item.date}</div>
            <div class="summary">${item.summary}</div>
            <div class="tags">
                ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="${encodeURI(item.file)}" class="btn" target="_blank">查看详情</a>
        </div>
    `;
}

// 搜索功能
function searchContent() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    
    if (!query.trim()) {
        resultsContainer.innerHTML = '<p>请输入搜索关键词</p>';
        return;
    }
    
    const allContent = [...contentData.flash, ...contentData.studies];
    const results = allContent.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query))
    );
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>未找到相关内容</p>';
        return;
    }
    
    resultsContainer.innerHTML = `
        <h4>搜索结果 (${results.length}条)</h4>
        <div class="report-grid">
            ${results.map(item => createContentCard(item)).join('')}
        </div>
    `;
}

// 平滑滚动导航
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 搜索框回车事件
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchContent();
    }
});

// 页面加载完成后渲染内容
document.addEventListener('DOMContentLoaded', function() {
    loadContent();
    updateVisitCount();
});

// 访问统计功能
function updateVisitCount() {
    // 使用localStorage存储访问次数
    let visitCount = localStorage.getItem('competitorStudyVisits') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('competitorStudyVisits', visitCount);
    
    // 显示访问次数
    document.getElementById('count').textContent = visitCount;
    
    // 可选：发送到外部统计服务
    // 这里使用一个免费的计数API作为示例
    fetch('https://api.countapi.xyz/hit/competitor-study-hub/visits')
        .then(response => response.json())
        .then(data => {
            if (data.value) {
                document.getElementById('count').textContent = data.value;
            }
        })
        .catch(error => {
            console.log('外部统计服务不可用，使用本地计数');
        });
}

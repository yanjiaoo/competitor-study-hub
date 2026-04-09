// 竞争对手真实资讯 - 静态数据 + RSS增量更新
class CompetitorNewsAPI {
    constructor() {
        this.rss2jsonBase = 'https://api.rss2json.com/v1/api.json';
        this.cache = {};
        this.cacheExpiry = 10 * 60 * 1000;
    }

    // 加载本地静态资讯数据（主要数据源）
    async fetchStaticNews() {
        try {
            const response = await fetch('news-data.json');
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            return data.map(item => ({
                ...item,
                date: new Date(item.date),
                time: this.formatTime(item.date)
            }));
        } catch (error) {
            console.warn('加载静态资讯数据失败:', error.message);
            return [];
        }
    }

    // 尝试从 RSS 获取增量更新（bonus，失败不影响主流程）
    async fetchRSSUpdates() {
        const feeds = [
            { url: 'https://techcrunch.com/feed/', platform: null },
            { url: 'https://www.retaildive.com/feeds/news.xml', platform: null }
        ];

        const allItems = [];
        for (const feed of feeds) {
            try {
                const apiUrl = `${this.rss2jsonBase}?rss_url=${encodeURIComponent(feed.url)}&count=10`;
                const response = await fetch(apiUrl);
                if (!response.ok) continue;
                const data = await response.json();
                if (data.status !== 'ok' || !data.items) continue;

                for (const item of data.items) {
                    const title = this.stripHTML(item.title);
                    const text = (title + ' ' + (item.description || '')).toLowerCase();
                    const platform = this.detectPlatform(text);
                    if (!platform) continue;

                    allItems.push({
                        id: `rss_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
                        title: title,
                        content: this.stripHTML(item.description || '').substring(0, 200),
                        source: data.feed?.title || 'RSS',
                        type: 'press',
                        platform: platform,
                        date: new Date(item.pubDate),
                        time: this.formatTime(item.pubDate),
                        url: item.link || '#'
                    });
                }
            } catch (e) {
                // RSS失败静默忽略
            }
        }
        return allItems;
    }

    detectPlatform(text) {
        if (/temu|拼多多/.test(text)) return 'temu';
        if (/shein/.test(text)) return 'shein';
        if (/tiktok.?shop|tiktok.?commerc/.test(text)) return 'tiktok';
        if (/joybuy|jd\.com.?international|京东国际/.test(text)) return 'joybuy';
        return null;
    }

    stripHTML(html) {
        if (!html) return '';
        return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').trim();
    }

    // 获取所有资讯：静态数据为主，RSS为辅
    async fetchAllCompetitorNews() {
        const [staticNews, rssNews] = await Promise.all([
            this.fetchStaticNews(),
            this.fetchRSSUpdates().catch(() => [])
        ]);

        // 合并去重
        const seen = new Set();
        const allNews = [...rssNews, ...staticNews].filter(item => {
            if (seen.has(item.title)) return false;
            seen.add(item.title);
            return true;
        });

        return allNews.sort((a, b) => b.date - a.date);
    }

    formatTime(dateString) {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return '未知时间';
        const now = new Date();
        const diff = now - date;
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);
        if (minutes < 1) return '刚刚';
        if (minutes < 60) return `${minutes}分钟前`;
        if (hours < 24) return `${hours}小时前`;
        if (days < 30) return `${days}天前`;
        return `${Math.floor(days / 30)}个月前`;
    }
}

const competitorNewsAPI = new CompetitorNewsAPI();
let isLoadingNews = false;

async function updateCompetitorNews() {
    if (isLoadingNews) return;
    isLoadingNews = true;

    const newsGrid = document.getElementById('newsGrid');
    if (newsGrid && newsGrid.children.length === 0) {
        newsGrid.innerHTML = '<div class="news-loading">⏳ 正在获取最新资讯...</div>';
    }

    try {
        const latestNews = await competitorNewsAPI.fetchAllCompetitorNews();

        if (latestNews.length > 0) {
            if (typeof newsData !== 'undefined' && newsData.length > 0) {
                const existingTitles = new Set(newsData.map(item => item.title));
                const newItems = latestNews.filter(item => !existingTitles.has(item.title));
                if (newItems.length > 0) {
                    newItems.forEach(item => item.isNew = true);
                    newsData = [...newItems, ...newsData].slice(0, 100);
                } else {
                    newsData = latestNews.slice(0, 100);
                }
            } else {
                newsData = latestNews.slice(0, 100);
            }
            if (typeof displayNews === 'function') displayNews();
        }
    } catch (error) {
        console.error('更新资讯失败:', error);
    } finally {
        isLoadingNews = false;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => { updateCompetitorNews(); }, 500);
});

// 竞争对手真实资讯抓取 - 使用 RSS + Google News
class CompetitorNewsAPI {
    constructor() {
        // RSS2JSON 免费 API（无需 key，每天 10000 次）
        this.rss2jsonBase = 'https://api.rss2json.com/v1/api.json';
        this.cache = {};
        this.cacheExpiry = 10 * 60 * 1000; // 10分钟缓存
    }

    // 各平台的搜索关键词配置
    getKeywords() {
        return {
            temu: ['Temu', 'Temu电商', 'Temu跨境', 'PDD+Holdings'],
            shein: ['Shein', 'SHEIN', 'Shein跨境', 'Shein电商'],
            tiktok: ['TikTok+Shop', 'TikTok电商', 'TikTok+commerce'],
            joybuy: ['Joybuy', '京东国际', 'JD+international']
        };
    }

    // Google News RSS 源（最可靠的免费资讯源）
    getGoogleNewsRSS(query, lang = 'en') {
        const hl = lang === 'zh' ? 'zh-CN' : 'en';
        const gl = lang === 'zh' ? 'CN' : 'US';
        return `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=${hl}&gl=${gl}&ceid=${gl}:${hl}`;
    }

    // 跨境电商中文媒体 RSS 源
    getChineseMediaSources() {
        return [
            // 雨果跨境相关
            { name: '雨果跨境', url: 'https://news.google.com/rss/search?q=site:cifnews.com+OR+%E9%9B%A8%E6%9E%9C%E8%B7%A8%E5%A2%83&hl=zh-CN&gl=CN&ceid=CN:zh-Hans', type: 'press' },
            // 36氪出海
            { name: '36氪出海', url: 'https://news.google.com/rss/search?q=site:36kr.com+%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86&hl=zh-CN&gl=CN&ceid=CN:zh-Hans', type: 'press' },
            // 亿邦动力
            { name: '亿邦动力', url: 'https://news.google.com/rss/search?q=site:ebrun.com+%E8%B7%A8%E5%A2%83&hl=zh-CN&gl=CN&ceid=CN:zh-Hans', type: 'press' }
        ];
    }

    // 通过 rss2json 获取 RSS 内容
    async fetchRSS(rssUrl) {
        // 检查缓存
        const cacheKey = rssUrl;
        if (this.cache[cacheKey] && (Date.now() - this.cache[cacheKey].time < this.cacheExpiry)) {
            return this.cache[cacheKey].data;
        }

        try {
            const apiUrl = `${this.rss2jsonBase}?rss_url=${encodeURIComponent(rssUrl)}&count=15`;
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            
            if (data.status === 'ok' && data.items) {
                this.cache[cacheKey] = { data: data.items, time: Date.now() };
                return data.items;
            }
            return [];
        } catch (error) {
            console.warn(`RSS fetch failed for ${rssUrl}:`, error.message);
            return [];
        }
    }

    // 清理 HTML 标签
    stripHTML(html) {
        if (!html) return '';
        return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').trim();
    }

    // 获取单个平台的资讯
    async fetchPlatformNews(platform) {
        const keywords = this.getKeywords()[platform];
        if (!keywords) return [];

        const allItems = [];
        const seenTitles = new Set();

        // 英文 Google News
        for (const keyword of keywords.slice(0, 2)) {
            const rssUrl = this.getGoogleNewsRSS(keyword, 'en');
            const items = await this.fetchRSS(rssUrl);
            
            for (const item of items) {
                const title = this.stripHTML(item.title);
                if (seenTitles.has(title)) continue;
                seenTitles.add(title);
                
                allItems.push({
                    id: `${platform}_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
                    title: title,
                    content: this.stripHTML(item.description || item.content || '').substring(0, 200),
                    source: item.author || this.extractSource(item.title) || 'Google News',
                    type: 'press',
                    platform: platform,
                    date: new Date(item.pubDate),
                    time: this.formatTime(item.pubDate),
                    url: item.link || '#'
                });
            }
        }

        // 中文 Google News
        const zhKeyword = keywords.find(k => /[\u4e00-\u9fa5]/.test(k)) || keywords[0];
        const zhRssUrl = this.getGoogleNewsRSS(zhKeyword, 'zh');
        const zhItems = await this.fetchRSS(zhRssUrl);
        
        for (const item of zhItems) {
            const title = this.stripHTML(item.title);
            if (seenTitles.has(title)) continue;
            seenTitles.add(title);
            
            allItems.push({
                id: `${platform}_zh_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
                title: title,
                content: this.stripHTML(item.description || item.content || '').substring(0, 200),
                source: item.author || this.extractSource(item.title) || '中文资讯',
                type: 'press',
                platform: platform,
                date: new Date(item.pubDate),
                time: this.formatTime(item.pubDate),
                url: item.link || '#'
            });
        }

        return allItems;
    }

    // 从 Google News 标题中提取来源（格式通常是 "标题 - 来源"）
    extractSource(title) {
        if (!title) return null;
        const parts = title.split(' - ');
        return parts.length > 1 ? parts[parts.length - 1].trim() : null;
    }

    // 获取跨境电商行业资讯
    async fetchIndustryNews() {
        const sources = this.getChineseMediaSources();
        const allItems = [];
        const seenTitles = new Set();

        for (const source of sources) {
            const items = await this.fetchRSS(source.url);
            for (const item of items) {
                const title = this.stripHTML(item.title);
                if (seenTitles.has(title)) continue;
                seenTitles.add(title);

                // 判断属于哪个平台
                const platform = this.detectPlatform(title + ' ' + (item.description || ''));
                if (!platform) continue;

                allItems.push({
                    id: `industry_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
                    title: title,
                    content: this.stripHTML(item.description || '').substring(0, 200),
                    source: source.name,
                    type: source.type,
                    platform: platform,
                    date: new Date(item.pubDate),
                    time: this.formatTime(item.pubDate),
                    url: item.link || '#'
                });
            }
        }
        return allItems;
    }

    // 从内容中检测平台
    detectPlatform(text) {
        const lower = text.toLowerCase();
        if (/temu|拼多多海外/.test(lower)) return 'temu';
        if (/shein/.test(lower)) return 'shein';
        if (/tiktok|抖音电商海外/.test(lower)) return 'tiktok';
        if (/joybuy|京东国际/.test(lower)) return 'joybuy';
        return null;
    }

    // 获取所有竞争对手资讯
    async fetchAllCompetitorNews() {
        const allNews = [];
        
        try {
            const [temuNews, sheinNews, tiktokNews, joybuyNews, industryNews] = await Promise.all([
                this.fetchPlatformNews('temu'),
                this.fetchPlatformNews('shein'),
                this.fetchPlatformNews('tiktok'),
                this.fetchPlatformNews('joybuy'),
                this.fetchIndustryNews()
            ]);

            allNews.push(...temuNews, ...sheinNews, ...tiktokNews, ...joybuyNews, ...industryNews);
        } catch (error) {
            console.error('获取竞争对手资讯失败:', error);
        }

        // 去重并按时间排序
        const seen = new Set();
        return allNews
            .filter(item => {
                if (seen.has(item.title)) return false;
                seen.add(item.title);
                return true;
            })
            .sort((a, b) => b.date - a.date);
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

// 实例化 API
const competitorNewsAPI = new CompetitorNewsAPI();

// 全局资讯加载状态
let isLoadingNews = false;

// 更新竞争对手资讯（供 script.js 调用）
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
            // 合并到全局 newsData
            if (typeof newsData !== 'undefined') {
                const existingTitles = new Set(newsData.map(item => item.title));
                const newItems = latestNews.filter(item => !existingTitles.has(item.title));
                
                if (newItems.length > 0) {
                    newItems.forEach(item => item.isNew = true);
                    newsData = [...newItems, ...newsData].slice(0, 100);
                    
                    if (typeof displayNews === 'function') {
                        displayNews();
                    }
                    if (typeof showUpdateNotification === 'function') {
                        showUpdateNotification(newItems.length);
                    }
                }
            } else {
                window.newsData = latestNews.slice(0, 100);
                if (typeof displayNews === 'function') {
                    displayNews();
                }
            }
        } else if (newsGrid) {
            // 如果没有获取到真实数据，显示提示
            const existingLoading = newsGrid.querySelector('.news-loading');
            if (existingLoading) {
                existingLoading.innerHTML = '⚠️ 暂时无法获取实时资讯，显示缓存数据。请稍后刷新重试。';
            }
        }
    } catch (error) {
        console.error('更新竞争对手资讯失败:', error);
    } finally {
        isLoadingNews = false;
    }
}

// 页面加载时自动获取真实资讯
document.addEventListener('DOMContentLoaded', function() {
    // 延迟1秒后开始获取真实资讯，让页面先渲染模拟数据
    setTimeout(() => {
        updateCompetitorNews();
    }, 1000);
});

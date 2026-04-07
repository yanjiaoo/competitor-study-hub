// 竞争对手平台资讯API集成
class CompetitorNewsAPI {
    constructor() {
        this.sources = JSON.parse(localStorage.getItem('newsSources')) || [];
        this.apiKeys = {
            twitter: process.env.TWITTER_API_KEY || '',
            reddit: process.env.REDDIT_API_KEY || '',
            news: process.env.NEWS_API_KEY || ''
        };
    }

    // 获取Temu相关资讯
    async fetchTemuNews() {
        const temuKeywords = ['temu', 'pdd holdings', 'pinduoduo'];
        return await this.fetchNewsFromMultipleSources(temuKeywords, 'temu');
    }

    // 获取Shein相关资讯
    async fetchSheinNews() {
        const sheinKeywords = ['shein', 'fast fashion', 'shein marketplace'];
        return await this.fetchNewsFromMultipleSources(sheinKeywords, 'shein');
    }

    // 获取TikTok相关资讯
    async fetchTikTokNews() {
        const tiktokKeywords = ['tiktok shop', 'tiktok commerce', 'bytedance commerce'];
        return await this.fetchNewsFromMultipleSources(tiktokKeywords, 'tiktok');
    }

    // 获取Joybuy相关资讯
    async fetchJoybuyNews() {
        const joybuyKeywords = ['joybuy', 'jd.com international', 'jingdong global'];
        return await this.fetchNewsFromMultipleSources(joybuyKeywords, 'joybuy');
    }

    // 从多个源获取资讯
    async fetchNewsFromMultipleSources(keywords, platform) {
        const allNews = [];
        
        try {
            // 从新闻API获取
            const newsResults = await this.fetchFromNewsAPI(keywords);
            allNews.push(...newsResults);

            // 从Reddit获取
            const redditResults = await this.fetchFromReddit(keywords);
            allNews.push(...redditResults);

            // 从RSS源获取
            const rssResults = await this.fetchFromRSS(keywords, platform);
            allNews.push(...rssResults);

        } catch (error) {
            console.error(`获取${platform}资讯失败:`, error);
        }

        return allNews.map(item => ({
            ...item,
            platform,
            id: `${platform}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        }));
    }

    // 从News API获取资讯
    async fetchFromNewsAPI(keywords) {
        if (!this.apiKeys.news) {
            return this.getMockNewsData(keywords);
        }

        try {
            const query = keywords.join(' OR ');
            const response = await fetch(
                `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&language=en&pageSize=10`,
                {
                    headers: {
                        'X-API-Key': this.apiKeys.news
                    }
                }
            );
            
            const data = await response.json();
            
            return data.articles?.map(article => ({
                title: article.title,
                content: article.description || article.content?.substring(0, 200) + '...',
                source: article.source.name,
                type: 'press',
                time: this.formatTime(article.publishedAt),
                url: article.url
            })) || [];
        } catch (error) {
            console.error('News API请求失败:', error);
            return this.getMockNewsData(keywords);
        }
    }

    // 从Reddit获取资讯
    async fetchFromReddit(keywords) {
        try {
            const subreddits = ['ecommerce', 'business', 'technology', 'retail'];
            const allPosts = [];

            for (const subreddit of subreddits) {
                const response = await fetch(`https://www.reddit.com/r/${subreddit}/search.json?q=${keywords.join(' OR ')}&sort=new&limit=5`);
                const data = await response.json();
                
                data.data?.children?.forEach(post => {
                    allPosts.push({
                        title: post.data.title,
                        content: post.data.selftext?.substring(0, 200) + '...' || '点击查看详情',
                        source: `Reddit r/${subreddit}`,
                        type: 'social',
                        time: this.formatTime(new Date(post.data.created_utc * 1000)),
                        url: `https://reddit.com${post.data.permalink}`
                    });
                });
            }

            return allPosts;
        } catch (error) {
            console.error('Reddit API请求失败:', error);
            return [];
        }
    }

    // 从RSS源获取资讯
    async fetchFromRSS(keywords, platform) {
        const rssSources = {
            temu: [
                'https://feeds.feedburner.com/TechCrunch',
                'https://www.retaildive.com/feeds/'
            ],
            shein: [
                'https://fashionunited.com/rss',
                'https://www.businessoffashion.com/feed'
            ],
            tiktok: [
                'https://techcrunch.com/feed/',
                'https://www.socialmediatoday.com/rss.xml'
            ],
            joybuy: [
                'https://www.retaildive.com/feeds/',
                'https://feeds.feedburner.com/venturebeat/SZYF'
            ]
        };

        const sources = rssSources[platform] || [];
        const allItems = [];

        for (const rssUrl of sources) {
            try {
                // 使用RSS2JSON服务解析RSS
                const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&count=5`);
                const data = await response.json();
                
                data.items?.forEach(item => {
                    // 检查标题或描述是否包含关键词
                    const text = (item.title + ' ' + item.description).toLowerCase();
                    if (keywords.some(keyword => text.includes(keyword.toLowerCase()))) {
                        allItems.push({
                            title: item.title,
                            content: item.description?.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
                            source: data.feed?.title || 'RSS源',
                            type: 'official',
                            time: this.formatTime(item.pubDate),
                            url: item.link
                        });
                    }
                });
            } catch (error) {
                console.error(`RSS源 ${rssUrl} 请求失败:`, error);
            }
        }

        return allItems;
    }

    // 获取模拟数据（当API不可用时）
    getMockNewsData(keywords) {
        const mockData = {
            temu: [
                {
                    title: 'Temu扩展全球市场，新增10个国家服务',
                    content: 'Temu宣布将服务扩展至更多国家，包括东南亚和拉美市场，预计将覆盖全球80%的电商用户...',
                    source: 'Temu官方公告',
                    type: 'official',
                    time: '2小时前',
                    url: 'https://www.temu.com/news/expansion'
                }
            ],
            shein: [
                {
                    title: 'Shein推出可持续时尚计划',
                    content: 'Shein宣布启动可持续发展计划，承诺在2025年前实现碳中和，并推出环保材料服装线...',
                    source: 'Shein新闻中心',
                    type: 'press',
                    time: '4小时前',
                    url: 'https://www.shein.com/sustainability'
                }
            ],
            tiktok: [
                {
                    title: 'TikTok Shop直播销售额创新高',
                    content: 'TikTok Shop在黑五期间直播销售额同比增长300%，成为增长最快的社交电商平台...',
                    source: 'TikTok商业博客',
                    type: 'official',
                    time: '6小时前',
                    url: 'https://www.tiktok.com/business/blog/black-friday-success'
                }
            ],
            joybuy: [
                {
                    title: 'Joybuy与京东物流深度整合',
                    content: 'Joybuy宣布与京东物流进行深度整合，为海外用户提供更快的配送服务，预计配送时间缩短50%...',
                    source: 'Joybuy官网',
                    type: 'official',
                    time: '8小时前',
                    url: 'https://www.joybuy.com/logistics-integration'
                }
            ]
        };

        const platform = keywords.includes('temu') ? 'temu' :
                        keywords.includes('shein') ? 'shein' :
                        keywords.includes('tiktok') ? 'tiktok' : 'joybuy';
        
        return mockData[platform] || [];
    }

    // 获取所有竞争对手资讯
    async fetchAllCompetitorNews() {
        const allNews = [];
        
        try {
            const [temuNews, sheinNews, tiktokNews, joybuyNews] = await Promise.all([
                this.fetchTemuNews(),
                this.fetchSheinNews(),
                this.fetchTikTokNews(),
                this.fetchJoybuyNews()
            ]);

            allNews.push(...temuNews, ...sheinNews, ...tiktokNews, ...joybuyNews);
        } catch (error) {
            console.error('获取竞争对手资讯失败:', error);
        }

        return allNews.sort((a, b) => new Date(b.time) - new Date(a.time));
    }

    formatTime(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diff = now - date;
        
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);
        
        if (minutes < 60) return `${minutes}分钟前`;
        if (hours < 24) return `${hours}小时前`;
        return `${days}天前`;
    }
}

// 实例化API
const competitorNewsAPI = new CompetitorNewsAPI();

// 更新竞争对手资讯
async function updateCompetitorNews() {
    try {
        const latestNews = await competitorNewsAPI.fetchAllCompetitorNews();
        
        // 合并新资讯到现有数据
        const existingIds = new Set(window.newsData.map(item => item.id));
        const newItems = latestNews.filter(item => !existingIds.has(item.id));
        
        if (newItems.length > 0) {
            // 添加新更新标记
            newItems.forEach(item => item.isNew = true);
            window.newsData = [...newItems, ...window.newsData].slice(0, 50); // 保持最新50条
            displayNews();
            
            // 显示更新通知
            showUpdateNotification(newItems.length);
        }
    } catch (error) {
        console.error('更新竞争对手资讯失败:', error);
    }
}

// 显示更新通知
function showUpdateNotification(count) {
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

// 导出供主脚本使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CompetitorNewsAPI, updateCompetitorNews };
}

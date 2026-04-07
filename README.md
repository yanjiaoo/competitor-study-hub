# Amazon Competitor Study Hub

致力于为亚马逊AM及leaders提供全方位的市场分析与趋势洞察。通过系统性的数据分析与调研，解读宏观市场趋势、跨境平台动态及行业重要新闻。

## 🆕 最新更新

### 竞争对手实时资讯功能
- **Temu**: 实时跟踪Temu平台动态、政策更新、市场表现
- **Shein**: 监控Shein的时尚趋势、供应链变化、全球扩张
- **TikTok**: 关注TikTok Shop的功能更新、创作者政策、电商发展
- **Joybuy**: 追踪Joybuy与京东生态整合、跨境业务进展

### 核心功能
- 📊 **双月度Flash报告**: 定期市场分析和竞争洞察
- 🔍 **深度研究报告**: 专项调研和战略分析
- 📰 **实时资讯更新**: 多平台资讯聚合，支持自动刷新
- 🎯 **智能过滤**: 按平台、类型、时间筛选资讯
- ⚙️ **资讯源管理**: 可自定义添加新的资讯源
- 🔔 **更新通知**: 实时提醒新资讯到达

## 🚀 快速开始

### 本地运行
```bash
# 克隆仓库
git clone https://github.com/yanjiaoo/amazon-competitor-study-hub.git

# 进入目录
cd amazon-competitor-study-hub

# 使用本地服务器运行（推荐）
python -m http.server 8000
# 或使用Node.js
npx serve .

# 访问 http://localhost:8000
```

### 部署到GitHub Pages
```bash
# 运行部署脚本
./deploy.sh
```

## 📋 资讯源配置

### 当前支持的平台
- **Temu**: 官方Twitter、官网新闻
- **Shein**: 官方Instagram、新闻中心
- **TikTok**: TikTok Shop官方、商业博客
- **Joybuy**: 官方微博、官网公告

### 添加新资讯源
1. 点击"管理资讯源"按钮
2. 填写资讯源信息：
   - 名称：如"Temu官方Twitter"
   - 链接：资讯源URL
   - 类型：社交媒体/官方网站/新闻发布
   - 平台：选择对应的竞争对手平台
3. 点击"添加资讯源"

## 🔧 高级配置

### API集成
为了获取真实的实时数据，可以配置以下API：

```javascript
// 在news-api.js中配置API密钥
const apiKeys = {
    twitter: 'your_twitter_api_key',
    reddit: 'your_reddit_api_key',
    news: 'your_news_api_key'
};
```

### 自动刷新设置
```javascript
// 在script.js中调整刷新间隔（毫秒）
const REFRESH_INTERVAL = 120000; // 2分钟
```

## 📊 数据来源

### 官方渠道
- 各平台官方网站和新闻中心
- 官方社交媒体账号
- 公司财报和公告

### 第三方资讯
- 行业媒体报道
- 分析师报告
- Reddit等社区讨论
- RSS新闻源

## 🎯 使用场景

### 对于AM (Account Manager)
- 了解竞争对手最新动态
- 获取市场趋势洞察
- 制定应对策略
- 向卖家提供市场信息

### 对于Leaders
- 监控行业发展趋势
- 评估竞争威胁
- 制定战略决策
- 团队培训材料

## 🔄 更新频率

- **实时资讯**: 每2分钟自动检查更新
- **双月度Flash**: 每两个月发布
- **深度研究**: 根据市场热点不定期发布

## 📱 移动端支持

网站采用响应式设计，完美支持：
- 📱 手机浏览
- 📱 平板访问
- 💻 桌面端使用

## 🤝 贡献指南

欢迎提交新的资讯源、功能建议或bug报告：

1. Fork本仓库
2. 创建功能分支
3. 提交更改
4. 发起Pull Request

## 📞 联系方式

如有问题或建议，请联系：
- 项目维护者：yanjiaoo
- GitHub Issues：[提交问题](https://github.com/yanjiaoo/amazon-competitor-study-hub/issues)

## 📄 许可证

本项目仅供Amazon内部使用。

---

**最后更新**: 2026-01-12  
**版本**: v2.0.0 - 竞争对手实时资讯版本

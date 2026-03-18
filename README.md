# Competitor Domain Hub

## 🎯 项目概述
专为competitor domain owner设计的内容管理和展示平台，用于分享Flash和深度报告。

## ✨ 功能特性
- **内容分类**: Flash分享 + 深度报告
- **搜索功能**: 支持标题、内容、标签搜索
- **访问统计**: 本地访问计数
- **响应式设计**: 支持桌面和移动设备
- **分享功能**: 内容分享和链接复制
- **导航切换**: 平滑的内容区域切换

## 📁 文件结构
```
competitor-hub-final/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 功能脚本
├── files/              # PDF文件存储
│   ├── 2026 F2 Seller learning bi-monthly report - Jan.pdf
│   ├── 2025 SL Seller learning bi-monthly report - March.pdf
│   ├── 2025 SL Seller learning bi-monthly report - May.pdf
│   ├── 2025 SL Seller learning bi-monthly report - July.pdf
│   ├── 2025 SL Seller learning bi-monthly report - Oct.pdf
│   └── Multi Channel C-return study.pdf
└── README.md           # 项目说明
```

## 🚀 本地测试
1. 打开 `index.html` 文件
2. 或运行本地服务器: `python -m http.server 8000`
3. 访问: http://localhost:8000

## 🔄 添加新内容
在 `script.js` 中的 `contentData` 对象添加新条目，格式如下：

```javascript
{
    id: 7,
    title: "新内容标题",
    date: "2025-01-15",
    summary: "内容摘要描述",
    tags: ["标签1", "标签2"],
    file: "files/新文件.pdf"
}
```

## 🎨 设计特点
- 现代化渐变设计
- 卡片式内容布局
- 平滑动画效果
- 直观的用户界面

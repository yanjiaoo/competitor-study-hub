---
inclusion: auto
---

# Seller Learning Hub 项目指南

## 项目概述
这是亚马逊内部的 Seller Learning Hub，部署在 GitHub Pages：
https://yanjiaoo.github.io/competitor-study-hub/

包含两个板块：
- Competitor Study：竞对研究（Temu/Shein/TikTok/Joybuy/AliExpress）
- VOS From Social Media：卖家社媒热议（独立仓库维护）

## 仓库架构

| 仓库 | 用途 | 维护者 |
|------|------|--------|
| competitor-study-hub（本仓库）| 主站 + Competitor Study | 你 |
| vos-social-media | VOS 数据 | 协作者 |

## 核心文件说明

- `index.html` — 主页面，包含两个板块的 HTML 结构
- `script.js` — 所有前端逻辑，包含 Competitor 资讯数据（newsData）、仪表盘数据、VOS 加载逻辑
- `styles.css` — 全站样式
- `news-data.json` — Competitor 资讯原始数据（fetch 脚本生成）
- `scripts/fetch-news.py` — 竞对资讯抓取脚本（Google News RSS）
- `scripts/inject-news.py` — 将资讯注入 script.js（含翻译、去重、清洗）
- `.github/workflows/update-news.yml` — GitHub Actions 每天自动抓取竞对资讯

## Competitor Study 资讯维度（8个）
物流仓储、投资扩张、价格关税、引流营销、合规监管、卖家生态、退货售后、品牌渠道

## 竞对平台（5个）
Temu、Shein、TikTok Shop、Joybuy、AliExpress

## VOS 数据加载
VOS 数据从独立仓库加载：
`https://raw.githubusercontent.com/yanjiaoo/vos-social-media/main/vos-data.json`
本仓库的 vos-data.json 仅作为 fallback。

## Bi-monthly Flash 和 Deep Research
报告链接指向 SharePoint 内部链接，需要内网访问。
数据在 script.js 的 contentData 对象中，手动维护。

## 部署
- 推送到 main 分支后 GitHub Pages 自动部署（1-2分钟）
- 强制刷新浏览器缓存：Ctrl+Shift+R

## Git 操作
本机 git 路径：`C:\Users\yanjiaoo\AppData\Local\GitHubDesktop\app-3.5.7\resources\app\git\cmd\git.exe`
需要用 HTTP header 认证绕过 Windows Credential Manager 缓存。

## 编辑规范
- 资讯标题：中文、陈述式、核心信息前置、无问句叹号
- 资讯内容：聚焦对 Amazon 生意和卖家的影响
- 每条资讯需标注 platform 和 dimension 字段
- 去重：同一事件只保留一条

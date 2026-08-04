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
| vos-social-media | VOS pipeline + 数据（唯一来源）| 协作者 |

**VOS 只有一条 pipeline，住在 `vos-social-media` 仓库。**
本仓库不再有 `vos-pipeline/` 和 VOS workflow（2026-08-04 下线）。
以前两个仓库各跑一份 pipeline，数据分叉成 587 条 vs 85 条，且本仓库那份把防编造校验删掉了。
本仓库的 `vos-data.json` 只是 fetch 失败时的静态 fallback，不会自动更新，不要往里写数据。

## 核心文件说明

- `index.html` — 主页面，包含两个板块的 HTML 结构
- `script.js` — 所有前端逻辑，包含 Competitor 资讯数据（newsData）、仪表盘数据、VOS 加载逻辑
- `styles.css` — 全站样式
- `news-data.json` — Competitor 资讯原始数据（fetch 脚本生成）
- `scripts/fetch-news.py` — 竞对资讯抓取脚本（Google News RSS）
- `scripts/inject-news.py` — 将资讯注入 script.js（含翻译、去重、清洗）
- `.github/workflows/update-news.yml` — GitHub Actions 每天自动抓取竞对资讯（本仓库唯一的 workflow）

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
本机 git 路径：`C:\Users\yanjiaoo\AppData\Local\GitHubDesktop\app-3.5.8\resources\app\git\cmd\git.exe`
（GitHub Desktop 升级后 app-x.x.x 目录会变，路径失效时先列目录确认版本号）
需要用 HTTP header 认证绕过 Windows Credential Manager 缓存。
Actions 每天自动 push，改动前必须先 `fetch origin` + `reset --hard origin/main`，否则 push 被 reject。

## 日期规则（踩过两次坑）
DeepSeek 不知道当前是哪一年，它自己填的 date 完全不可信，会把 2026 年的资讯写成 2025 年。
- **日期只能从 RSS 素材的 pubDate 回溯**（按 URL 匹配 `news-data.json` 里的条目）
- 匹配不到素材的条目直接丢弃（同时也是防编造校验）
- 兜底：任何情况下都不允许出现晚于今天的日期
- 相关实现：`scripts/inject-news.py` 的 `resolve_real_date()` / `build_url_index()`

## 防编造校验（VOS）
`vos-social-media` 仓库的 `vos-pipeline/fetch_vos.py` 要求 AI 话题的 URL 必须存在于 RSS 素材中，且标题与素材有关键词重叠。
注意中文标题没有空格，**不能用 `.split()` 分词**，否则重叠数永远为 0、所有中文话题会被全部拒掉
（曾导致 vos-social-media 仓库从 5/20 到 8/4 完全停更）。用 `title_tokens()` 按中文 2 字滑窗切词。

## 排查 Actions 是否真的在更新
workflow 显示 success ≠ 数据有更新。要同时确认：
1. workflow run 的 conclusion 是 success
2. 目标数据文件确实有新 commit（`/commits?path=script.js`）
3. 数据里最新日期接近今天（未来日期、年份错误都算异常）

## 编辑规范
- 所有信息必须来自真实的公开来源，严禁编造任何内容
- 每条资讯、卖家反馈、数据点都必须有可点击的原文链接
- 日期必须是原文的实际发布日期，不是搜索时的日期
- 如果找不到原文链接，不要放上去
- 资讯标题：中文、陈述式、核心信息前置、无问句叹号
- 资讯内容：聚焦对 Amazon 生意和卖家的影响
- 每条资讯需标注 platform 和 dimension 字段
- 去重：同一事件只保留一条

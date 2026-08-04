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

## 手动触发 Actions
本机 PAT 只有 contents:write，没有 actions:write，所以 `workflow_dispatch` 的 API 会返回 403。
两个 workflow 都加了 `repository_dispatch: types: [run-now]`，用 dispatches 接口触发（只需 contents:write）：
```
POST https://api.github.com/repos/{owner}/{repo}/dispatches
body: {"event_type": "run-now"}
```
competitor 约 2 分钟跑完，VOS 约 1 分钟。

## 数据可信度原则（2026-08-04 事故后确立）
曾经出现过：模型凭印象生成运价数字 → 同一个提交里同时写上"⭐⭐⭐⭐⭐ Freightos 官方指数"的标注
→ 配套的更新脚本因 bug 从未跑通 → 编造的占位数据挂着权威标注在页面上待了 3 个半月。
2025年5月 美西运价标 $6,000，真实值 $2,492，偏差 2.4 倍。

硬规则：
1. **不许凭模型记忆生成任何数字**。取不到就留空，宁缺勿假。
2. **数据来源标注只能描述"这个数字实际是从哪来的"**，不能描述"打算用什么源"。
3. 每个数值必须能溯源到原始发布方，把日期 + 原文链接记进数据文件（如 `monthlySources`）。核不动的就是错的。
4. **写完抓取脚本必须验证它真的写入了数据**，不能只看 Actions 是否 success。
   success 只代表退出码 0，"成功地什么都没做"也是 success。
5. 无公开数据源的指标不要硬做图表。已因此移除：中国→日本航线、中欧班列费率、海运时效月度曲线。

## 头程运费观察（freight-watch 仓库）
- `update-chart.py` 更新月度运价图表，`fetch-oil.py` 更新原油月均价，`fetch-freight.py` 更新运费动态列表
- **原油**：EIA 官方月度现货均价，解析 `https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?n=PET&s=RBRTE&f=M`（Brent）与 `s=RWTC`（WTI）的 HTML 年份表。注意 FRED 在本机网络不可达（超时），不要用 FRED
- EIA 滞后约1个月发布，未发布月份写 null
- 每周一/三/五 + 每月1号跑，约13期读数/月
- **海运**：`https://fbx.freightos.com/` 页面内嵌的官方 ticker JSON（`window.frProductIntroTickerData`），机器可读
- **空运**：Freightos 官方周报，走 WordPress REST API `www.freightos.com/wp-json/wp/v2/posts`
- 不要用 Google News RSS：它的 `<description>` 只是标题重复，没有运价数字，正则永远匹配不到（旧版就是这个 bug，从上线起没成功写入过一次）
- 不要解析普通周报的散文正文：`$1,000/FEU` 可能是涨幅也可能是水平值，语序还两种混着来，会静默写错数字。只认 `(FBX01 Weekly)` 结构化句式和 `to/at $X/kg` 的空运水平值
- 机制：当月读数先进 `pendingReadings`，月份结束后算术平均写入图表；`monthlySources` 记录每月用了哪几期周报（可点开原文核对）
- 三条保护：`locked=true` 的月份不动；已有数据的月份不回头覆盖；缺读数的月份补月份标签但值留 null（保证时间轴连续、不插值）
- 图表 dataset 用 `spanGaps: true`：缺数据的月份不显示数据点，但曲线跨过去，避免断成两段
- 现存 3 条航线（美西 FBX01 / 美东 FBX03 / 北欧 FBX11）× 2 个字段（`ocean_fcl_feu` / `air_per_kg`）+ oilPrice，全部可溯源

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

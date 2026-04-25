#!/usr/bin/env python3
"""
Competitor 资讯注入器（VOS 模式）
读取 news-data.json（RSS素材）→ DeepSeek 生成话题（标题+摘要）→ 增量合并 → 注入 script.js

核心逻辑：
1. RSS 素材作为上下文喂给 DeepSeek
2. DeepSeek 基于素材生成结构化资讯（中文标题+100字摘要+平台分类）
3. 增量模式：已有资讯不变，只追加新的不重复内容
4. 黑名单过滤 + 市场限制（只看美欧日）
"""
import json
import os
import re
import urllib.request


# ==================== 黑名单 ====================
BLACKLIST = [
    '直播购物指南', '直播销售步骤', 'live shopping guide',
    '苹果降低', 'App Store佣金', 'Apple cuts App Store',
    '福建福州', '服务商IPO', '冲刺IPO',
    'DHL and JD.com Sign Strategic MoU', 'DHL与京东签署',
    '十大电商平台排名', '市场格局将变', 'top 10 ecommerce',
    '诺贝尔奖', 'GMV Max奖', 'AnyMind Group',
    '韩国市场份额', 'WiseApp',
    '正面硬刚亚马逊',
    '印尼遭反垄断', 'antitrust complaint in Indonesia',
    '中东客户发出配送警告', 'delivery warnings to Middle East',
    '速卖通推巴西', '巴西三大利好',
    'SHEIN产品复购率', 'SHEIN复购率', '复购率超行业', '2180亿美元',
    'Two Years After JD Worldwide Launch',
    '凌风工具箱', '东南亚跨境电商年度峰会', '泰国站宣布上调佣金',
    'Smart Warehouse智能仓储', 'Pitney Bowes', 'ShipAccel',
    'Consumer Reports', '京东全球购上线两年',
    'eBay在澳大利亚', '澳大利亚', 'Bol.com', '荷兰电商平台',
    '速卖通在巴西', '巴西跨境退货',
    '路虎', '揽胜', 'Range Rover', '土耳其', 'turkey',
]

# ==================== 手动固定资讯 ====================
PINNED_ARTICLES = [
    {
        "title": "TikTok Shop自1月8日起上调欧盟五国佣金至9%，电子品类享7%优惠，新卖家可享60天4%费率",
        "content": "TikTok Shop自2026年1月8日起对德国、法国、意大利、西班牙和爱尔兰五国站点佣金从5%上调至9%。电子产品等部分品类适用7%优惠费率。新入驻商家在15天内上架至少5件商品可享最长60天的4%优惠佣金率。",
        "source": "ecommercenews.eu",
        "platform": "tiktok",
        "date": "2026-01-08",
        "url": "https://ecommercenews.eu/tiktok-shop-raises-seller-fees-in-europe/"
    },
    {
        "title": "Temu在欧盟27国推出Y2半托管模式，卖家可从中国直发免去海外仓备货，履约时效最长21天",
        "content": "Temu于2025年11月底在欧盟27国推出Y2半托管履约模式。该模式允许中国卖家从国内直接发货，无需海外仓备货，降低库存和资金压力。履约时效最长21天。平台提供末端配送和流量支持，主要面向中小卖家。",
        "source": "ChineSellers / YUGUO",
        "platform": "temu",
        "date": "2025-11-28",
        "url": "https://chinesellers.substack.com/p/temus-new-hybrid-logistics-y2-model"
    },
]


def is_blacklisted(title):
    t = title.lower()
    return any(kw.lower() in t for kw in BLACKLIST)


def detect_platform(text):
    t = text.lower()
    if 'temu' in t: return 'temu'
    if 'shein' in t or '希音' in t: return 'shein'
    if 'tiktok' in t and ('shop' in t or '电商' in t or '带货' in t): return 'tiktok'
    if 'joybuy' in t or '京东国际' in t or 'jd.com' in t: return 'joybuy'
    if 'aliexpress' in t or '速卖通' in t: return 'aliexpress'
    return None


# ==================== DeepSeek 生成资讯 ====================
def generate_news_deepseek(rss_items):
    """用 DeepSeek 基于 RSS 素材生成结构化资讯（标题+摘要+分类）"""
    api_key = os.environ.get("DEEPSEEK_API_KEY", "")
    if not api_key:
        print("  [DeepSeek] 无 API KEY，跳过")
        return []

    # 构建素材上下文（最多40条）
    context = ""
    for i, item in enumerate(rss_items[:40]):
        context += f"\n{i+1}. [{item.get('source','')}] {item['title']}"
        if item.get('url'):
            context += f"\n   URL: {item['url']}"
        if item.get('content'):
            context += f"\n   摘要: {item['content'][:200]}"

    prompt = f"""你是跨境电商竞争情报分析师。请基于以下RSS素材，生成15-20条结构化竞对资讯。

**素材：**
{context}

**优先抓取以下类型的资讯（按优先级排序）：**
1. 卖家政策变更：佣金调整、费率变化、入驻门槛、保证金、罚款规则
2. 费用政策：配送费、仓储费、广告费、退货处理费等费用变动
3. 欧洲/美国/日本市场拓展：新站点开放、本地化策略、合规要求
4. 物流策略：海外仓布局、本地配送、半托管模式、履约时效变化
5. 流量与获客：广告投放策略、用户增长数据、社交电商玩法
6. 平台策略：商业模式调整、品类扩张、与竞对的差异化策略

**生成要求：**
1. 每条资讯必须基于上面的素材，不可编造
2. title: 中文标题，35-42字，陈述式，核心信息前置，包含平台名+具体数字/政策/影响
3. content: 中文摘要，80-120字，概括核心事件、影响范围和关键数据，数据必须来自素材
4. platform: 从 temu/shein/tiktok/joybuy/aliexpress 中选择
5. source: 使用素材中的原始来源名称
6. date: 使用素材的发布日期（YYYY-MM-DD），如不确定用2026-04-25
7. url: 必须使用素材中的原始URL，严禁编造
8. 只保留美国、欧洲、日本市场相关内容，排除东南亚/韩国/中东/巴西等
9. 排除工具推广、IPO、排名预测、非电商内容
10. 标题示例："Temu在欧盟27国推出Y2半托管模式，卖家可从中国直发免去海外仓备货，履约时效最长21天"

请以JSON格式返回：{{"articles": [{{title, content, platform, source, date, url}}, ...]}}"""

    payload = json.dumps({
        "model": "deepseek-chat",
        "messages": [
            {"role": "system", "content": "你是跨境电商竞争情报分析师。基于提供的RSS素材生成结构化资讯。每条必须有真实URL。严格返回JSON格式。"},
            {"role": "user", "content": prompt},
        ],
        "temperature": 0.3,
        "max_tokens": 8000,
        "response_format": {"type": "json_object"},
    }).encode("utf-8")

    req = urllib.request.Request(
        "https://api.deepseek.com/chat/completions",
        data=payload,
        headers={"Content-Type": "application/json", "Authorization": f"Bearer {api_key}"},
        method="POST",
    )

    try:
        with urllib.request.urlopen(req, timeout=90) as resp:
            result = json.loads(resp.read().decode("utf-8"))
        content = result["choices"][0]["message"]["content"]
        data = json.loads(content)
        articles = data.get("articles", [])
        print(f"  [DeepSeek] 生成 {len(articles)} 条资讯")

        # 过滤：必须有URL、必须有平台、不在黑名单
        valid = []
        for a in articles:
            if not a.get("url", "").startswith("http"):
                continue
            if not a.get("platform") or a["platform"] not in ("temu", "shein", "tiktok", "joybuy", "aliexpress"):
                # Try to detect platform
                p = detect_platform(a.get("title", "") + " " + a.get("content", ""))
                if p:
                    a["platform"] = p
                else:
                    continue
            if is_blacklisted(a.get("title", "")):
                continue
            a.setdefault("date", "2026-04-25")
            a.setdefault("source", "行业媒体")
            a["type"] = "press"
            a["dimension"] = ""
            valid.append(a)

        print(f"  [DeepSeek] 有效资讯: {len(valid)} 条")
        return valid
    except Exception as e:
        print(f"  [DeepSeek] 失败: {e}")
        return []


# ==================== 主流程 ====================
def main():
    # 1. 读取 RSS 素材
    with open('news-data.json', 'r', encoding='utf-8') as f:
        rss_items = json.load(f)
    print(f'RSS素材: {len(rss_items)} 条')

    if not rss_items:
        print('无素材，跳过')
        return

    # 2. DeepSeek 生成结构化资讯
    print('DeepSeek 生成资讯...')
    new_articles = generate_news_deepseek(rss_items)

    # 3. 加入固定资讯
    all_new = list(PINNED_ARTICLES) + new_articles

    # 4. 读取 script.js 中已有的 newsData
    with open('script.js', 'r', encoding='utf-8') as f:
        js_content = f.read()

    pattern = r'var newsData = \[[\s\S]*?\];'
    match = re.search(pattern, js_content)
    if not match:
        print('ERROR: newsData not found in script.js')
        return

    # 解析已有标题用于去重
    existing_block = match.group(0)
    existing_titles = set()
    for m in re.finditer(r'title: "([^"]+)"', existing_block):
        t = re.sub(r'[\s\W]', '', m.group(1)).lower()
        existing_titles.add(t)
    print(f'已有 {len(existing_titles)} 条资讯')

    # 5. 筛选新的不重复资讯
    new_js_items = []
    added = 0
    for item in all_new:
        title = item.get('title', '')
        t = re.sub(r'[\s\W]', '', title).lower()
        if t in existing_titles or len(t) < 5:
            continue
        if is_blacklisted(title):
            continue
        existing_titles.add(t)

        # 生成 JS 对象
        esc_title = title.replace('"', '\\"').replace('\n', ' ')
        esc_content = item.get('content', '').replace('"', '\\"').replace('\n', ' ')
        esc_source = item.get('source', '').replace('"', '\\"')
        esc_url = item.get('url', '').replace('"', '\\"')
        platform = item.get('platform', 'temu')
        date = item.get('date', '2026-04-25')
        dimension = item.get('dimension', '')

        js_obj = (
            f'  {{ id: "{platform}_{added+1:03d}", title: "{esc_title}", '
            f'content: "{esc_content}", '
            f'source: "{esc_source}", type: "press", '
            f'platform: "{platform}", '
            f'dimension: "{dimension}", '
            f'date: new Date("{date}"), '
            f'url: "{esc_url}" }}'
        )
        new_js_items.append(js_obj)
        added += 1

    print(f'新增 {added} 条不重复资讯')

    # 6. 合并：新的在前 + 已有的（过滤黑名单）
    existing_items = re.findall(r'  \{[^}]+\}', existing_block)
    kept_existing = []
    for ei in existing_items:
        if not is_blacklisted(ei):
            kept_existing.append(ei.strip())

    all_items = new_js_items + kept_existing
    js_array = 'var newsData = [\n' + ',\n'.join(all_items) + '\n];'

    new_content = js_content[:match.start()] + js_array + js_content[match.end():]
    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f'注入完成: 新增 {added} 条，总计 {len(all_items)} 条')


if __name__ == '__main__':
    main()

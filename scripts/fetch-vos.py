#!/usr/bin/env python3
"""
抓取亚马逊卖家社媒热议话题，生成 vos-data.json
数据源：Google News RSS 索引的卖家论坛、社媒、大V内容
聚焦：亚马逊政策变动、FBA/FBM运营、广告、账号安全、合规等卖家核心关注点
"""
import urllib.request
import xml.etree.ElementTree as ET
import json
import re
import html
from datetime import datetime, timezone
from urllib.parse import quote

# ==================== 搜索关键词 ====================
# 按数据源分组，确保覆盖所有目标渠道

QUERIES = [
    # --- 亚马逊官方卖家论坛 ---
    {'q': 'Amazon seller forum policy change 2026', 'lang': 'en', 'source_hint': 'Amazon Seller Forum'},
    {'q': 'Amazon seller central announcement 2026', 'lang': 'en', 'source_hint': 'Amazon Seller Central'},

    # --- Reddit r/FBA ---
    {'q': 'site:reddit.com/r/FulfillmentByAmazon Amazon FBA 2026', 'lang': 'en', 'source_hint': 'Reddit r/FBA'},
    {'q': 'site:reddit.com Amazon seller policy fee change', 'lang': 'en', 'source_hint': 'Reddit'},

    # --- 知无不言 ---
    {'q': '知无不言 亚马逊 卖家 政策 OR 变动 OR 热议', 'lang': 'zh', 'source_hint': '知无不言'},
    {'q': '知无不言 亚马逊 FBA OR 广告 OR 账号 OR 合规', 'lang': 'zh', 'source_hint': '知无不言'},

    # --- 卖家之家 ---
    {'q': '卖家之家 亚马逊 政策 OR 公告 OR 变动', 'lang': 'zh', 'source_hint': '卖家之家'},
    {'q': 'site:mjzj.com 亚马逊 卖家', 'lang': 'zh', 'source_hint': '卖家之家'},

    # --- AMZ123 ---
    {'q': 'AMZ123 亚马逊 政策 OR 热议 OR 卖家', 'lang': 'zh', 'source_hint': 'AMZ123'},
    {'q': 'site:amz123.com 亚马逊 2026', 'lang': 'zh', 'source_hint': 'AMZ123'},

    # --- 跨境大V / 行业媒体 ---
    {'q': '亚马逊卖家 热议 OR 吐槽 OR 政策变动 2026', 'lang': 'zh', 'source_hint': '行业媒体'},
    {'q': '亚马逊 FBA费用 OR 广告费 OR 佣金 调整 2026', 'lang': 'zh', 'source_hint': '行业媒体'},
    {'q': '亚马逊 账号安全 OR 封号 OR 申诉 2026', 'lang': 'zh', 'source_hint': '行业媒体'},
    {'q': '亚马逊 物流 OR 仓储 OR 库存 政策 2026', 'lang': 'zh', 'source_hint': '行业媒体'},

    # --- 微信公众号 ---
    {'q': '亚马逊卖家 政策 OR 热议 site:mp.weixin.qq.com', 'lang': 'zh', 'source_hint': '公众号'},
    {'q': '亚马逊 FBA OR 广告 变动 site:mp.weixin.qq.com', 'lang': 'zh', 'source_hint': '公众号'},

    # --- 英文行业媒体 ---
    {'q': 'Amazon seller policy update FBA fee 2026', 'lang': 'en', 'source_hint': 'Industry Media'},
    {'q': 'Amazon marketplace seller complaint issue 2026', 'lang': 'en', 'source_hint': 'Industry Media'},
]

# 相关性关键词（必须命中至少一个）
RELEVANCE_KEYWORDS = [
    # 政策/规则
    'policy', 'rule', 'update', 'change', 'announcement', 'new rule',
    '政策', '规则', '公告', '变动', '调整', '更新', '新规',
    # 费用/佣金
    'fee', 'commission', 'cost', 'charge', 'pricing',
    '费用', '佣金', '成本', '收费', '涨价',
    # FBA/物流
    'FBA', 'fulfillment', 'inventory', 'warehouse', 'shipping', 'logistics',
    '物流', '仓储', '库存', '配送', '入仓',
    # 广告
    'PPC', 'advertising', 'ad spend', 'ACoS', 'campaign',
    '广告', 'PPC', 'ACoS', '投放', '竞价',
    # 账号/合规
    'account', 'suspension', 'appeal', 'compliance', 'violation',
    '账号', '封号', '申诉', '合规', '违规', '审核',
    # 运营
    'listing', 'review', 'ranking', 'conversion', 'BSR',
    '运营', 'listing', '评价', '排名', '转化',
    # 促销/活动
    'deal', 'promotion', 'Prime Day', 'coupon', 'lightning deal',
    '促销', '秒杀', '大促', '活动', 'Prime Day',
    # 卖家情绪
    'seller', 'complaint', 'issue', 'problem', 'frustrat',
    '卖家', '热议', '吐槽', '问题', '困扰',
]

EXCLUDE_KEYWORDS = [
    'how to sell on amazon', 'beginner guide', 'amazon prime video',
    'amazon stock price', 'buy amazon shares',
    '新手教程', '入门指南', 'Prime Video', '股价',
]


def fetch_rss(query, lang='en', max_items=8):
    hl = 'zh-CN' if lang == 'zh' else 'en'
    gl = 'CN' if lang == 'zh' else 'US'
    ceid = 'CN:zh-Hans' if lang == 'zh' else 'US:en'
    url = f'https://news.google.com/rss/search?q={quote(query)}&hl={hl}&gl={gl}&ceid={ceid}'

    items = []
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (compatible; VOSBot/1.0)'})
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
        root = ET.fromstring(data)
        for item in root.findall('.//item')[:max_items]:
            title_raw = item.findtext('title', '')
            parts = title_raw.rsplit(' - ', 1)
            title = html.unescape(parts[0].strip())
            source = parts[1].strip() if len(parts) > 1 else ''
            desc = re.sub(r'<[^>]+>', '', html.unescape(item.findtext('description', ''))).strip()[:300]
            pub_date = item.findtext('pubDate', '')
            link = item.findtext('link', '')
            try:
                dt = datetime.strptime(pub_date, '%a, %d %b %Y %H:%M:%S %Z')
            except Exception:
                dt = datetime.now(timezone.utc)
            items.append({
                'title': title,
                'content': desc,
                'source': source,
                'date': dt.strftime('%Y-%m-%d'),
                'url': link,
            })
    except Exception as e:
        print(f'  [WARN] {e}')
    return items


def is_relevant(title, content):
    text = (title + ' ' + content).lower()
    for kw in EXCLUDE_KEYWORDS:
        if kw.lower() in text:
            return False
    for kw in RELEVANCE_KEYWORDS:
        if kw.lower() in text:
            return True
    return False


def main():
    print('=== 抓取 VOS of Social Media 卖家热议 ===')
    all_items = []
    seen_titles = set()

    for q_config in QUERIES:
        query = q_config['q']
        lang = q_config['lang']
        source_hint = q_config['source_hint']
        print(f'  [{source_hint}] {query[:50]}...')

        for item in fetch_rss(query, lang, 8):
            if item['title'] in seen_titles:
                continue
            if not is_relevant(item['title'], item['content']):
                continue
            seen_titles.add(item['title'])
            # 用 source_hint 补充来源信息
            if not item['source']:
                item['source'] = source_hint
            all_items.append(item)

    # 按日期排序，取最新的
    all_items.sort(key=lambda x: x['date'], reverse=True)
    all_items = all_items[:30]  # 保留最新30条

    # 转为 VOS 格式
    vos_items = []
    for i, item in enumerate(all_items):
        vos_items.append({
            'id': f'vos_auto_{i+1:03d}',
            'rank': i + 1,
            'title': item['title'],
            'verified': 'unconfirmed',
            'effectDate': item['date'],
            'summary': item['content'],
            'sellerVoices': [],
            'comparison': [],
            'links': [{'label': item['source'] or '查看原文', 'url': item['url']}],
        })

    # 写入 JSON
    with open('vos-data.json', 'w', encoding='utf-8') as f:
        json.dump(vos_items, f, ensure_ascii=False, indent=2)

    print(f'\n=== 完成！共 {len(vos_items)} 条卖家热议 ===')


if __name__ == '__main__':
    main()

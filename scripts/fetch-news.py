#!/usr/bin/env python3
"""
抓取竞争对手最新资讯，生成 news-data.json
聚焦：卖家政策、招商政策、运营策略、流量变化、供应链、仓储物流、市场份额、合规监管
数据源：Google News RSS（无需 API key）
"""
import urllib.request
import xml.etree.ElementTree as ET
import json
import re
import html
from datetime import datetime, timezone
from urllib.parse import quote

# ==================== 聚焦业务相关的搜索关键词 ====================
PLATFORMS = {
    'temu': {
        'queries_en': [
            'Temu seller policy OR merchant policy OR commission',
            'Temu logistics OR warehouse OR fulfillment OR shipping',
            'Temu marketplace strategy OR business model',
            'Temu tariff OR regulation OR compliance',
            'Temu Europe OR US seller fee OR commission rate change',
        ],
        'queries_zh': [
            'Temu 卖家政策 OR 招商 OR 佣金',
            'Temu 物流 OR 仓储 OR 供应链 OR 半托管',
            'Temu 运营策略 OR 流量 OR 市场份额',
            'Temu 欧洲 OR 美国 费率 OR 佣金 OR 上调',
        ],
    },
    'shein': {
        'queries_en': [
            'Shein marketplace seller OR merchant policy',
            'Shein supply chain OR logistics OR warehouse',
            'Shein IPO OR regulation OR compliance OR ESG',
            'Shein market share OR revenue OR growth strategy',
            'Shein Europe OR US seller fee OR commission OR cost',
        ],
        'queries_zh': [
            'SHEIN 卖家 OR 招商 OR 平台政策',
            'SHEIN 供应链 OR 物流 OR 柔性供应链',
            'SHEIN 市场份额 OR 营收 OR 合规',
            'SHEIN 欧洲 OR 美国 费率 OR 佣金 OR 成本',
        ],
    },
    'tiktok': {
        'queries_en': [
            'TikTok Shop seller policy OR merchant OR commission',
            'TikTok Shop logistics OR fulfillment OR warehouse',
            'TikTok Shop GMV OR market share OR growth',
            'TikTok Shop live commerce OR social commerce strategy',
            'TikTok Shop Europe fee OR commission rate OR seller fees',
            'TikTok Shop US fee OR commission change OR seller cost',
        ],
        'queries_zh': [
            'TikTok Shop 卖家政策 OR 招商 OR 佣金',
            'TikTok Shop 物流 OR 仓储 OR 履约',
            'TikTok Shop 直播电商 OR 运营 OR 流量',
            'TikTok Shop 欧洲 OR 美国 佣金 OR 费率 OR 上调',
        ],
    },
    'joybuy': {
        'queries_en': [
            'Joybuy JD.com Europe OR international expansion',
            'Joybuy seller OR merchant OR marketplace policy',
            'JD.com international logistics OR cross-border',
        ],
        'queries_zh': [
            'Joybuy 京东国际 OR 欧洲 OR 跨境',
            '京东国际 卖家 OR 招商 OR 物流',
        ],
    },
    'aliexpress': {
        'queries_en': [
            'AliExpress Choice seller policy OR commission OR fee',
            'AliExpress logistics OR warehouse OR Cainiao fulfillment',
            'AliExpress tariff OR regulation OR compliance',
            'AliExpress marketplace strategy OR growth OR expansion',
            'AliExpress Europe OR US seller fee OR commission change',
        ],
        'queries_zh': [
            'AliExpress 速卖通 卖家政策 OR 招商 OR 佣金',
            'AliExpress 速卖通 物流 OR 仓储 OR 菜鸟 OR Choice',
            '速卖通 市场份额 OR 运营 OR 合规',
            '速卖通 欧洲 OR 美国 费率 OR 佣金 OR 上调',
        ],
    },
}

# 跨境行业媒体专项搜索（雨果跨境、亿邦动力、36氪等）
INDUSTRY_QUERIES_ZH = [
    '雨果跨境 Temu OR Shein OR TikTok OR 京东国际 OR 速卖通',
    '亿邦动力 跨境电商 Temu OR Shein OR TikTok OR AliExpress',
    '36氪 跨境电商 出海 Temu OR Shein OR TikTok OR 速卖通',
]

# 跨境知名公众号/自媒体搜索
WECHAT_KOL_QUERIES = [
    '跨境电商 卖家政策 Temu OR Shein OR TikTok OR AliExpress site:mp.weixin.qq.com',
    '跨境电商 招商 运营 Temu OR Shein OR 速卖通 site:mp.weixin.qq.com',
    '出海电商 供应链 物流 TikTok OR Temu OR AliExpress site:mp.weixin.qq.com',
]

# 相关性过滤关键词（标题或内容必须包含至少一个）
RELEVANCE_KEYWORDS = [
    # 卖家/招商
    'seller', 'merchant', 'vendor', '卖家', '招商', '入驻', '商家',
    # 政策/佣金
    'policy', 'commission', 'fee', '政策', '佣金', '费率', '规则',
    # 运营/流量
    'strategy', 'traffic', 'GMV', 'revenue', 'growth', 'market share',
    '运营', '流量', '营收', '增长', '市场份额', 'GMV',
    # 供应链/物流/仓储
    'supply chain', 'logistics', 'warehouse', 'fulfillment', 'shipping',
    '供应链', '物流', '仓储', '履约', '配送', '海外仓',
    # 合规/监管
    'regulation', 'compliance', 'tariff', 'customs', 'IPO', 'ESG',
    '合规', '监管', '关税', '海关', '审查',
    # 商业模式
    'business model', 'marketplace', 'platform', 'expansion', 'launch',
    '商业模式', '平台', '扩张', '上线', '出海', '跨境',
    # 竞争
    'compete', 'rival', 'challenge', 'vs', '竞争', '对手', '挑战',
    # 直播/社交电商
    'live commerce', 'social commerce', 'live shopping',
    '直播', '社交电商', '带货',
    # 公众号/自媒体标识
    'mp.weixin.qq.com',
]

# 排除无关内容的关键词
EXCLUDE_KEYWORDS = [
    'coupon code', 'promo code', 'discount code', 'haul video',
    '优惠券', '折扣码', '开箱', '穿搭分享',
    'stock price prediction', 'buy or sell stock',
    'best products to sell', 'trending products',
    'how to sell on', 'beginner guide', '新手教程',
    'top 10 best selling', 'top 15',
    # 排除非美欧日市场
    'thailand', 'indonesia', 'vietnam', 'philippines', 'malaysia',
    'brazil', 'mexico', 'nigeria', 'india market',
    'south korea', 'korea market',
    '泰国站', '印尼站', '越南站', '菲律宾站', '马来西亚站',
    '东南亚峰会', '东南亚跨境', '巴西站', '墨西哥站',
    '韩国市场', '韩国站',
    '中东市场', '中东客户', 'middle east',
    # 排除工具推广/软件广告/无关内容
    '工具箱', '大揭秘', '必看', '功能介绍', '软件推荐',
    '冲刺IPO', '诺贝尔奖', 'GMV Max奖',
    '服务商IPO', '跨境电商服务商',
]


def fetch_article_content(url, max_chars=400):
    """尝试抓取文章原文的前几百字作为摘要上下文"""
    if not url or not url.startswith('http'):
        return ''
    try:
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        with urllib.request.urlopen(req, timeout=8) as resp:
            raw = resp.read()
            try:
                page = raw.decode('utf-8')
            except UnicodeDecodeError:
                page = raw.decode('latin-1', errors='ignore')
        paragraphs = re.findall(r'<p[^>]*>(.*?)</p>', page, re.DOTALL)
        text_parts = []
        for p in paragraphs:
            clean = re.sub(r'<[^>]+>', '', html.unescape(p)).strip()
            if len(clean) > 30:
                text_parts.append(clean)
            if sum(len(t) for t in text_parts) > max_chars:
                break
        return ' '.join(text_parts)[:max_chars]
    except Exception:
        return ''


def fetch_google_news_rss(query, lang='en', max_items=8):
    """通过 Google News RSS 抓取资讯"""
    hl = 'zh-CN' if lang == 'zh' else 'en'
    gl = 'CN' if lang == 'zh' else 'US'
    ceid = 'CN:zh-Hans' if lang == 'zh' else 'US:en'

    url = (
        f'https://news.google.com/rss/search?q={quote(query)}'
        f'&hl={hl}&gl={gl}&ceid={ceid}'
    )

    items = []
    try:
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (compatible; NewsBot/1.0)'
        })
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()

        root = ET.fromstring(data)
        for item in root.findall('.//item')[:max_items]:
            title_raw = item.findtext('title', '')
            parts = title_raw.rsplit(' - ', 1)
            title = html.unescape(parts[0].strip())
            source = parts[1].strip() if len(parts) > 1 else 'Google News'

            desc = item.findtext('description', '')
            desc_clean = re.sub(r'<[^>]+>', '', html.unescape(desc)).strip()[:200]

            pub_date = item.findtext('pubDate', '')
            link = item.findtext('link', '')

            try:
                dt = datetime.strptime(pub_date, '%a, %d %b %Y %H:%M:%S %Z')
            except Exception:
                dt = datetime.now(timezone.utc)

            items.append({
                'title': title,
                'content': desc_clean,
                'source': source,
                'date': dt.strftime('%Y-%m-%d'),
                'url': link,
            })
    except Exception as e:
        print(f'  [WARN] Failed: {e}')

    # Enrich: fetch article content for items with short descriptions
    for item in items:
        if len(item['content']) < 80:
            article_text = fetch_article_content(item['url'])
            if article_text:
                item['content'] = article_text

    return items


def is_relevant(title, content):
    """检查资讯是否与业务相关"""
    text = (title + ' ' + content).lower()

    # 排除无关内容
    for kw in EXCLUDE_KEYWORDS:
        if kw.lower() in text:
            return False

    # 必须包含至少一个相关关键词
    for kw in RELEVANCE_KEYWORDS:
        if kw.lower() in text:
            return True

    return False


def detect_platform_from_text(text):
    """从文本中检测平台"""
    t = text.lower()
    if 'temu' in t or '拼多多海外' in t:
        return 'temu'
    if 'shein' in t or '希音' in t:
        return 'shein'
    if 'tiktok' in t and ('shop' in t or '电商' in t or '带货' in t or 'commerce' in t):
        return 'tiktok'
    if 'joybuy' in t or '京东国际' in t or ('jd.com' in t and ('international' in t or 'europe' in t)):
        return 'joybuy'
    if 'aliexpress' in t or '速卖通' in t or ('alibaba' in t and ('cross' in t or '跨境' in t)):
        return 'aliexpress'
    return None


def fetch_platform_news(platform, config):
    """抓取单个平台的资讯"""
    all_items = []
    seen = set()

    for q in config['queries_en']:
        print(f'  EN: {q[:60]}...')
        for item in fetch_google_news_rss(q, 'en', 8):
            if item['title'] not in seen and is_relevant(item['title'], item['content']):
                seen.add(item['title'])
                all_items.append(item)

    for q in config['queries_zh']:
        print(f'  ZH: {q[:60]}...')
        for item in fetch_google_news_rss(q, 'zh', 6):
            if item['title'] not in seen and is_relevant(item['title'], item['content']):
                seen.add(item['title'])
                all_items.append(item)

    all_items.sort(key=lambda x: x['date'], reverse=True)
    return all_items[:12]


def fetch_industry_and_wechat_news():
    """抓取行业媒体和公众号资讯"""
    all_items = []
    seen = set()

    # 行业媒体
    print('\n[行业媒体: 雨果跨境/亿邦动力/36氪]')
    for q in INDUSTRY_QUERIES_ZH:
        print(f'  ZH: {q[:60]}...')
        for item in fetch_google_news_rss(q, 'zh', 8):
            if item['title'] not in seen:
                seen.add(item['title'])
                platform = detect_platform_from_text(item['title'] + ' ' + item['content'])
                if platform:
                    item['platform'] = platform
                    item['source_type'] = 'industry'
                    all_items.append(item)

    # 公众号推文
    print('\n[跨境公众号推文]')
    for q in WECHAT_KOL_QUERIES:
        print(f'  ZH: {q[:60]}...')
        for item in fetch_google_news_rss(q, 'zh', 6):
            if item['title'] not in seen:
                seen.add(item['title'])
                platform = detect_platform_from_text(item['title'] + ' ' + item['content'])
                if platform:
                    item['platform'] = platform
                    item['source_type'] = 'wechat'
                    all_items.append(item)

    return all_items


def main():
    print('=== 开始抓取竞争对手资讯（聚焦业务相关） ===')
    all_news = []
    idx = 0

    # 各平台资讯
    for platform, config in PLATFORMS.items():
        print(f'\n[{platform.upper()}]')
        items = fetch_platform_news(platform, config)
        print(f'  => {len(items)} relevant items')

        for item in items:
            idx += 1
            all_news.append({
                'id': f'{platform}_{idx:03d}',
                'title': item['title'],
                'content': item['content'],
                'source': item['source'],
                'type': 'press',
                'platform': platform,
                'date': item['date'],
                'url': item['url'],
            })

    # 行业媒体 + 公众号
    industry_items = fetch_industry_and_wechat_news()
    print(f'\n  => {len(industry_items)} industry/wechat items')
    for item in industry_items:
        idx += 1
        source_label = item['source']
        if item.get('source_type') == 'wechat':
            source_label = f"📱 {item['source']}"
        all_news.append({
            'id': f'{item["platform"]}_{idx:03d}',
            'title': item['title'],
            'content': item['content'],
            'source': source_label,
            'type': 'press',
            'platform': item['platform'],
            'date': item['date'],
            'url': item['url'],
        })

    # 去重 + 排序
    seen = set()
    deduped = []
    for item in all_news:
        if item['title'] not in seen:
            seen.add(item['title'])
            deduped.append(item)
    deduped.sort(key=lambda x: x['date'], reverse=True)

    with open('news-data.json', 'w', encoding='utf-8') as f:
        json.dump(deduped, f, ensure_ascii=False, indent=2)

    print(f'\n=== 完成！共 {len(deduped)} 条业务相关资讯 ===')


if __name__ == '__main__':
    main()

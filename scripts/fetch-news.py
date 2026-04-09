#!/usr/bin/env python3
"""
抓取竞争对手最新资讯，生成 news-data.json
数据源：Google News RSS（无需 API key）
"""
import urllib.request
import xml.etree.ElementTree as ET
import json
import re
import html
from datetime import datetime, timezone
from urllib.parse import quote

PLATFORMS = {
    'temu': {
        'queries_en': ['Temu ecommerce', 'Temu marketplace'],
        'queries_zh': ['Temu 跨境电商', 'Temu 拼多多海外'],
    },
    'shein': {
        'queries_en': ['Shein fashion ecommerce', 'Shein marketplace'],
        'queries_zh': ['Shein 跨境电商', 'SHEIN 快时尚'],
    },
    'tiktok': {
        'queries_en': ['TikTok Shop ecommerce', 'TikTok Shop commerce'],
        'queries_zh': ['TikTok Shop 电商', 'TikTok 直播带货'],
    },
    'joybuy': {
        'queries_en': ['Joybuy JD international', 'JD.com international ecommerce'],
        'queries_zh': ['京东国际 Joybuy', '京东跨境电商'],
    },
}

def fetch_google_news_rss(query, lang='en', max_items=10):
    """通过 Google News RSS 抓取资讯"""
    if lang == 'zh':
        hl, gl, ceid = 'zh-CN', 'CN', 'CN:zh-Hans'
    else:
        hl, gl, ceid = 'en', 'US', 'US:en'

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
            # Google News 标题格式: "标题 - 来源"
            parts = title_raw.rsplit(' - ', 1)
            title = html.unescape(parts[0].strip())
            source = parts[1].strip() if len(parts) > 1 else 'Google News'

            desc = item.findtext('description', '')
            # 清理 HTML
            desc_clean = re.sub(r'<[^>]+>', '', html.unescape(desc)).strip()
            desc_clean = desc_clean[:200]

            pub_date = item.findtext('pubDate', '')
            link = item.findtext('link', '')

            # 解析日期
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
        print(f'  [WARN] Failed to fetch "{query}" ({lang}): {e}')

    return items


def fetch_platform_news(platform, config):
    """抓取单个平台的资讯"""
    all_items = []
    seen_titles = set()

    # 英文资讯
    for q in config['queries_en']:
        print(f'  Fetching EN: {q}')
        for item in fetch_google_news_rss(q, 'en', 8):
            if item['title'] not in seen_titles:
                seen_titles.add(item['title'])
                all_items.append(item)

    # 中文资讯
    for q in config['queries_zh']:
        print(f'  Fetching ZH: {q}')
        for item in fetch_google_news_rss(q, 'zh', 5):
            if item['title'] not in seen_titles:
                seen_titles.add(item['title'])
                all_items.append(item)

    # 按日期排序，取最新15条
    all_items.sort(key=lambda x: x['date'], reverse=True)
    return all_items[:15]


def main():
    print('=== 开始抓取竞争对手资讯 ===')
    all_news = []
    idx = 0

    for platform, config in PLATFORMS.items():
        print(f'\n[{platform.upper()}]')
        items = fetch_platform_news(platform, config)
        print(f'  Got {len(items)} items')

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

    # 按日期排序
    all_news.sort(key=lambda x: x['date'], reverse=True)

    # 写入 JSON
    output_path = 'news-data.json'
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(all_news, f, ensure_ascii=False, indent=2)

    print(f'\n=== 完成！共 {len(all_news)} 条资讯，已写入 {output_path} ===')


if __name__ == '__main__':
    main()

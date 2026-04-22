#!/usr/bin/env python3
"""
读取 news-data.json → 翻译标题为中文 → 深度去重 → 清洗风格 → 注入 script.js
目标受众：Amazon leaders / 竞对研究 POC
风格：新闻播报式，理性客观，核心信息前置
"""
import json
import re
import urllib.request
import urllib.parse


# ==================== 英译中：Google Translate 免费接口 ====================
def translate_to_chinese(text):
    """将英文标题翻译为中文 - 使用本地规则，不依赖外部API"""
    if not text or not text.strip():
        return text
    # 如果已经主要是中文，跳过
    cn_chars = len(re.findall(r'[\u4e00-\u9fff]', text))
    if cn_chars > len(text) * 0.3:
        return text

    # 常见电商/跨境术语翻译词典
    translations = {
        'launches': '推出', 'launch': '推出', 'launched': '推出',
        'expands': '扩展', 'expand': '扩展', 'expansion': '扩张',
        'targets': '瞄准', 'targeting': '瞄准', 'target': '目标',
        'challenges': '挑战', 'challenge': '挑战',
        'marketplace': '电商平台', 'platform': '平台',
        'seller': '卖家', 'sellers': '卖家', 'merchant': '商家',
        'logistics': '物流', 'fulfillment': '履约',
        'warehouse': '仓储', 'shipping': '配送',
        'supply chain': '供应链', 'cross-border': '跨境',
        'tariff': '关税', 'tariffs': '关税',
        'regulation': '监管', 'compliance': '合规',
        'revenue': '营收', 'growth': '增长',
        'market share': '市场份额',
        'commission': '佣金', 'fee': '费用',
        'policy': '政策', 'strategy': '策略',
        'e-commerce': '电商', 'ecommerce': '电商',
        'live commerce': '直播电商', 'live shopping': '直播购物',
        'social commerce': '社交电商',
        'Europe': '欧洲', 'European': '欧洲',
        'global': '全球', 'international': '国际',
        'integration': '集成', 'partnership': '合作',
        'acquisition': '收购', 'acquires': '收购',
    }

    result = text
    for en, zh in translations.items():
        result = re.sub(re.escape(en), zh, result, flags=re.IGNORECASE)

    return result


# ==================== 标题清洗 ====================
def clean_title(title):
    """去除情绪化字眼，保持新闻播报风格"""
    t = title.strip()
    # 去除问号、叹号
    t = re.sub(r'[?？!！]+', '', t)
    # 去除 emoji
    t = re.sub(r'[\U0001F300-\U0001FAFF\U00002702-\U000027B0]+', '', t)
    # 去除营销前缀
    t = re.sub(r'^(重磅|突发|独家|最新|速看|必看|震惊|刚刚|快讯|深度|盘点|揭秘|警惕|注意)[：:|\s]*', '', t)
    t = re.sub(r'^(Breaking|BREAKING|Exclusive|EXCLUSIVE|Hot|HOT|Alert)[：:|\s]*', '', t, flags=re.IGNORECASE)
    # 去除【】标签
    t = re.sub(r'【[^】]*】\s*', '', t)
    # 去除末尾来源标注
    t = re.sub(r'\s*[|丨｜—]\s*[\w\u4e00-\u9fff]+\s*$', '', t)
    # 去除多余空格
    t = re.sub(r'\s+', ' ', t).strip()
    return t


def clean_content(content):
    """清洗摘要内容"""
    c = content.strip()
    # 去除重复的标题+来源格式（Google News RSS 常见）
    # 例如 "标题  来源名" 这种格式
    c = re.sub(r'^(.{10,}?)\s{2,}\S+$', r'\1', c)
    c = re.sub(r'[?？!！]+', '', c)
    c = re.sub(r'\s+', ' ', c).strip()
    return c[:200]


# ==================== 深度去重 ====================
def extract_key_phrases(title):
    """提取标题中的核心关键词用于语义去重"""
    t = title.lower()
    # 去除标点和常见虚词
    t = re.sub(r'[^\w\u4e00-\u9fff]', ' ', t)
    stopwords = {
        'the', 'a', 'an', 'in', 'on', 'at', 'to', 'for', 'of', 'with',
        'and', 'or', 'is', 'are', 'was', 'were', 'be', 'been', 'has', 'have',
        'its', 'it', 'as', 'by', 'from', 'that', 'this', 'new', 'how', 'why',
        'what', 'does', 'will', 'can', 'into', 'up', 'out', 'about',
        '的', '了', '在', '是', '和', '与', '将', '为', '等', '也', '已',
        '对', '从', '到', '被', '让', '把', '向', '又', '再', '还',
    }
    words = [w for w in t.split() if w and w not in stopwords and len(w) > 1]
    return set(words)


def semantic_dedup(items):
    """语义级别去重：同一事件只保留一条（优先保留中文来源）"""
    result = []
    seen_phrases = []

    # 核心实体词（翻译变体统一）
    normalize_map = {
        '京东': 'jd', 'jd.com': 'jd', 'jdcom': 'jd',
        'joybuy': 'joybuy', '欧洲': 'europe', 'europe': 'europe',
        '亚马逊': 'amazon', 'amazon': 'amazon',
        '推出': 'launch', 'launch': 'launch', 'launches': 'launch',
        'unveils': 'launch', 'debuts': 'launch', '上线': 'launch',
        '挑战': 'challenge', 'challenge': 'challenge', 'challenges': 'challenge',
        'targets': 'challenge', 'targeting': 'challenge', '瞄准': 'challenge',
        'marketplace': 'marketplace', '市场': 'marketplace', '平台': 'platform',
        '扩张': 'expand', 'expansion': 'expand', 'expand': 'expand',
        'temu': 'temu', 'shein': 'shein', 'tiktok': 'tiktok',
        '供应链': 'supplychain', 'supply': 'supplychain', 'chain': 'supplychain',
        '物流': 'logistics', 'logistics': 'logistics',
        '卖家': 'seller', 'seller': 'seller', 'sellers': 'seller',
        '政策': 'policy', 'policy': 'policy',
        '合规': 'compliance', 'compliance': 'compliance', 'regulation': 'compliance',
    }

    def normalize_phrases(title):
        t = title.lower()
        t = re.sub(r'[^\w\u4e00-\u9fff]', ' ', t)
        words = t.split()
        normalized = set()
        for w in words:
            if w in normalize_map:
                normalized.add(normalize_map[w])
            elif len(w) > 1:
                normalized.add(w)
        return normalized

    for item in items:
        phrases = normalize_phrases(item['title'])
        if not phrases or len(phrases) < 2:
            continue

        is_dup = False
        for existing_phrases in seen_phrases:
            if not existing_phrases:
                continue
            overlap = phrases & existing_phrases
            smaller = min(len(phrases), len(existing_phrases))
            if smaller > 0 and len(overlap) / smaller > 0.35:
                is_dup = True
                break

        if not is_dup:
            seen_phrases.append(phrases)
            result.append(item)

    # 额外步骤：同一天同一平台只保留一条同主题新闻
    final = []
    seen_day_platform = {}
    for item in result:
        key = f"{item.get('date', '')}_{item.get('platform', '')}"
        phrases = normalize_phrases(item['title'])
        if key not in seen_day_platform:
            seen_day_platform[key] = [phrases]
            final.append(item)
        else:
            is_dup_day = False
            for existing in seen_day_platform[key]:
                overlap = phrases & existing
                smaller = min(len(phrases), len(existing))
                if smaller > 0 and len(overlap) / smaller > 0.25:
                    is_dup_day = True
                    break
            if not is_dup_day:
                seen_day_platform[key].append(phrases)
                final.append(item)

    return final


# ==================== 质量过滤 ====================
def is_low_quality(item):
    """过滤低质量/无关内容"""
    text = (item.get('title', '') + ' ' + item.get('content', '')).lower()

    bad_patterns = [
        'stock price', 'buy or sell', 'stock forecast', 'trading volume',
        '股价预测', '买入评级', '目标价',
        '招聘', '薪资', '月薪', 'hiring', 'salary', 'job opening',
        'coupon', 'promo code', 'haul', '优惠券', '折扣码', '开箱',
        'best products to sell', 'trending products', '新手教程',
        'beginner guide', 'how to sell on', 'top 10 best',
    ]
    # 如果匹配排除词且不含业务关键词，则过滤
    has_bad = any(p in text for p in bad_patterns)
    has_good = any(p in text for p in [
        'policy', 'launch', 'expand', 'regulation', 'tariff',
        '政策', '上线', '扩张', '监管', '关税', '合规',
        'supply chain', '供应链', 'logistics', '物流',
        'marketplace', 'seller', '卖家', '商家',
    ])
    if has_bad and not has_good:
        return True
    if len(item.get('title', '')) < 8:
        return True
    return False


# ==================== 主流程 ====================
def main():
    with open('news-data.json', 'r', encoding='utf-8') as f:
        news = json.load(f)

    if not news:
        print('news-data.json is empty, skipping')
        return

    print(f'原始条目: {len(news)}')

    # 1. 过滤低质量
    news = [item for item in news if not is_low_quality(item)]
    print(f'质量过滤后: {len(news)}')

    # 2. 翻译标题为中文
    print('翻译标题...')
    for i, item in enumerate(news):
        original = item['title']
        item['title'] = translate_to_chinese(original)
        item['title'] = clean_title(item['title'])
        # 摘要也翻译
        if item.get('content'):
            item['content'] = translate_to_chinese(item['content'])
            item['content'] = clean_content(item['content'])
        if (i + 1) % 10 == 0:
            print(f'  已翻译 {i + 1}/{len(news)}')

    print(f'翻译完成')

    # 3. 深度去重
    news = semantic_dedup(news)
    print(f'去重后: {len(news)}')

    # 4. 按日期排序
    news.sort(key=lambda x: x.get('date', ''), reverse=True)

    # 5. 生成 JS
    js_items = []
    for item in news:
        title = item['title'].replace('"', '\\"').replace('\n', ' ')
        content = item.get('content', '').replace('"', '\\"').replace('\n', ' ')
        source = item.get('source', '').replace('"', '\\"')
        url = item.get('url', '').replace('"', '\\"')

        js_items.append(
            f'  {{ id: "{item["id"]}", title: "{title}", '
            f'content: "{content}", '
            f'source: "{source}", type: "{item["type"]}", '
            f'platform: "{item["platform"]}", '
            f'dimension: "{item.get("dimension", "")}", '
            f'date: new Date("{item["date"]}"), '
            f'url: "{url}" }}'
        )

    js_array = 'var newsData = [\n' + ',\n'.join(js_items) + '\n];'

    with open('script.js', 'r', encoding='utf-8') as f:
        content = f.read()

    pattern = r'var newsData = \[[\s\S]*?\];'
    match = re.search(pattern, content)
    if not match:
        print('ERROR: Could not find newsData in script.js')
        return

    new_content = content[:match.start()] + js_array + content[match.end():]

    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f'注入完成: {len(news)} 条资讯')


if __name__ == '__main__':
    main()

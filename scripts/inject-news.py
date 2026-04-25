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


# ==================== 英译中：DeepSeek API 批量翻译 ====================
def translate_titles_deepseek(items):
    """用 DeepSeek 批量翻译+重写标题为中文，35-42字高信息密度"""
    import os
    api_key = os.environ.get("DEEPSEEK_API_KEY", "")
    if not api_key:
        print("  [翻译] 无 DEEPSEEK_API_KEY，使用本地规则翻译")
        for item in items:
            item['title'] = translate_to_chinese_local(item['title'])
        return items

    batch_size = 15
    for start in range(0, len(items), batch_size):
        batch = items[start:start+batch_size]
        titles_text = "\n".join([
            f"{i+1}. 标题: {item['title']}\n   摘要: {item.get('content', '')[:200]}"
            for i, item in enumerate(batch)
        ])

        prompt = f"""你是跨境电商新闻编辑。请将以下资讯重写为中文标题，严格要求：

1. 每个标题必须35-42个中文字符（这是硬性要求，不够长就从摘要中补充关键信息）
2. 从原标题和摘要中提取具体信息：平台名、数字、百分比、日期、国家/地区、政策名称
3. 标题中的所有数字和数据必须来自原文，严禁编造
4. 陈述式语气，严禁使用：问句、叹号、"重磅"、"必看"、"速看"、"揭秘"、"狂潮"等营销词
5. 保留平台名原文：Temu/Shein/TikTok Shop/AliExpress/Joybuy
6. 好标题示例（40字）："Temu在美国推出半托管模式允许卖家自主定价，佣金费率降至8%并开放本地仓发货"
7. 坏标题示例（太短20字）："Temu推出半托管模式" — 信息量太少
8. 坏标题示例（营销词）："重磅！Temu半托管模式来了！卖家必看"

原始资讯：
{titles_text}

请以JSON格式返回：{{"titles": ["重写后标题1", "重写后标题2", ...]}}
数量必须与输入一一对应。"""

        payload = json.dumps({
            "model": "deepseek-chat",
            "messages": [
                {"role": "system", "content": "你是专业的跨境电商新闻编辑。你的核心任务是将标题重写为35-42个中文字符的高信息密度标题。每个标题必须至少35个字符。如果原标题信息不够，从摘要中补充关键数据。严格返回JSON格式。"},
                {"role": "user", "content": prompt},
            ],
            "temperature": 0.3,
            "max_tokens": 4000,
            "response_format": {"type": "json_object"},
        }).encode("utf-8")

        req = urllib.request.Request(
            "https://api.deepseek.com/chat/completions",
            data=payload,
            headers={"Content-Type": "application/json", "Authorization": f"Bearer {api_key}"},
            method="POST",
        )

        try:
            with urllib.request.urlopen(req, timeout=60) as resp:
                result = json.loads(resp.read().decode("utf-8"))
            content = result["choices"][0]["message"]["content"]
            data = json.loads(content)
            new_titles = data.get("titles", [])
            if len(new_titles) == len(batch):
                for i, item in enumerate(batch):
                    if new_titles[i] and len(new_titles[i]) >= 10:
                        item['title'] = new_titles[i]
                print(f"  [翻译] DeepSeek 翻译 {start+1}-{start+len(batch)} 完成")
            else:
                print(f"  [翻译] 数量不匹配 ({len(new_titles)} vs {len(batch)})，跳过此批")
        except Exception as e:
            print(f"  [翻译] DeepSeek 失败: {e}，使用本地规则")
            for item in batch:
                item['title'] = translate_to_chinese_local(item['title'])

    return items


def translate_to_chinese_local(text):
    """本地规则翻译（DeepSeek 不可用时的降级方案）"""
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
        'aliexpress': 'aliexpress', '速卖通': 'aliexpress', 'cainiao': 'cainiao', '菜鸟': 'cainiao',
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
            if smaller > 0 and len(overlap) / smaller > 0.55:
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
                if smaller > 0 and len(overlap) / smaller > 0.45:
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

    # 2. 翻译标题为中文（DeepSeek 优先，本地规则降级）
    print('翻译标题...')
    news = translate_titles_deepseek(news)
    for item in news:
        item['title'] = clean_title(item['title'])
        if item.get('content'):
            item['content'] = translate_to_chinese_local(item['content'])
            item['content'] = clean_content(item['content'])

    print(f'翻译完成')

    # 3. 深度去重
    news = semantic_dedup(news)
    print(f'去重后: {len(news)}')

    # 4. 按日期排序
    news.sort(key=lambda x: x.get('date', ''), reverse=True)

    # 4b. 黑名单过滤（永久删除不想要的资讯）
    BLACKLIST = [
        '直播购物指南', '直播销售步骤', 'live shopping guide',
        '苹果降低', 'App Store佣金', 'Apple cuts App Store',
        '福建福州', '服务商IPO', '冲刺IPO',
        'DHL and JD.com Sign Strategic MoU', 'DHL与京东签署',
        '十大电商平台排名', '市场格局将变', 'top 10 ecommerce',
        '诺贝尔奖', 'GMV Max奖', 'AnyMind Group',
        '韩国市场份额', 'WiseApp',
        '正面硬刚亚马逊', '211',
        '印尼遭反垄断', 'antitrust complaint in Indonesia',
        '中东客户发出配送警告', 'delivery warnings to Middle East',
        '速卖通推巴西', '巴西三大利好',
        'SHEIN产品复购率超行业',
        'Two Years After JD Worldwide Launch',
        '凌风工具箱',
        '东南亚跨境电商年度峰会',
        '泰国站宣布上调佣金',
    ]
    before_bl = len(news)
    news = [item for item in news if not any(kw.lower() in item.get('title', '').lower() for kw in BLACKLIST)]
    if len(news) < before_bl:
        print(f'黑名单过滤: {before_bl} -> {len(news)}')

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

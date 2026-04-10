#!/usr/bin/env python3
"""
读取 news-data.json，清洗标题、去重、注入 script.js
目标受众：Amazon leaders / 竞对研究 POC
标题风格：新闻播报式，理性客观，无问句/叹号/营销语
"""
import json
import re
import unicodedata


def clean_title(title):
    """清洗标题：去除问句、叹号、营销语，改为新闻播报风格"""
    t = title.strip()

    # 去除末尾的问号、叹号（中英文）
    t = re.sub(r'[?？!！]+\s*$', '', t)

    # 去除开头的 emoji
    t = re.sub(r'^[\U0001F300-\U0001FAFF\U00002702-\U000027B0\U0000FE00-\U0000FE0F\u200d]+\s*', '', t)

    # 去除常见营销前缀
    clickbait_prefixes = [
        r'^(Breaking|BREAKING|Exclusive|EXCLUSIVE|Hot|HOT|重磅|突发|独家|最新|速看|必看|震惊|刚刚)[：:!！\s]*',
        r'^【[^】]*】\s*',
    ]
    for pat in clickbait_prefixes:
        t = re.sub(pat, '', t)

    # 问句开头改为陈述句
    question_starts = [
        (r'^(How|Why|What|Does|Is|Are|Can|Will|Should)\s+', ''),
        (r'^(为什么|怎么|如何|是否)\s*', ''),
    ]
    for pat, repl in question_starts:
        if re.match(pat, t, re.IGNORECASE):
            # 只去掉问号，保留内容
            t = re.sub(r'\?$', '', t)
            break

    # 去除末尾的来源标注（如 "| 36氪" "丨雨果跨境"）
    t = re.sub(r'\s*[|丨｜]\s*[\w\u4e00-\u9fff]+\s*$', '', t)

    # 去除多余空格
    t = re.sub(r'\s+', ' ', t).strip()

    return t


def normalize_for_dedup(title):
    """标准化标题用于去重比较"""
    t = title.lower().strip()
    # 去除标点
    t = re.sub(r'[^\w\u4e00-\u9fff]', '', t)
    return t


def is_low_quality(item):
    """过滤低质量/无关内容"""
    title = item.get('title', '').lower()
    content = item.get('content', '').lower()
    text = title + ' ' + content

    # 排除纯股价/投资建议
    stock_patterns = [
        'stock price', 'buy or sell', 'stock forecast',
        'trading volume', '股价预测', '买入评级',
    ]
    if any(p in text for p in stock_patterns) and not any(
        k in text for k in ['launch', 'expand', 'policy', '政策', '上线', '扩张']
    ):
        return True

    # 排除纯招聘/薪资
    if any(p in text for p in ['招聘', '薪资', '月薪', 'hiring', 'salary']):
        return True

    # 排除纯消费者购物内容
    if any(p in text for p in ['coupon', 'promo code', 'haul', '优惠券', '折扣码', '开箱']):
        return True

    # 标题太短（可能是垃圾数据）
    if len(item.get('title', '')) < 10:
        return True

    return False


def deduplicate(items):
    """智能去重：基于标准化标题 + 内容相似度"""
    seen = {}
    result = []

    for item in items:
        norm = normalize_for_dedup(item['title'])

        # 完全重复
        if norm in seen:
            continue

        # 子串重复（一个标题包含另一个）
        is_dup = False
        for existing_norm in list(seen.keys()):
            if len(norm) > 10 and len(existing_norm) > 10:
                if norm in existing_norm or existing_norm in norm:
                    is_dup = True
                    break

        if not is_dup:
            seen[norm] = True
            result.append(item)

    return result


def main():
    with open('news-data.json', 'r', encoding='utf-8') as f:
        news = json.load(f)

    if not news:
        print('news-data.json is empty, skipping')
        return

    # 1. 过滤低质量内容
    news = [item for item in news if not is_low_quality(item)]

    # 2. 清洗标题
    for item in news:
        item['title'] = clean_title(item['title'])

    # 3. 去重
    news = deduplicate(news)

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

    print(f'Injected {len(news)} cleaned & deduplicated items into script.js')


if __name__ == '__main__':
    main()

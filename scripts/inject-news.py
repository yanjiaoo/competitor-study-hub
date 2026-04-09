#!/usr/bin/env python3
"""
读取 news-data.json，更新 script.js 中的 newsData 数组
"""
import json
import re

def main():
    # 读取抓取的资讯
    with open('news-data.json', 'r', encoding='utf-8') as f:
        news = json.load(f)

    if not news:
        print('news-data.json is empty, skipping injection')
        return

    # 生成 JS 数组内容
    js_items = []
    for item in news:
        # 转义双引号
        title = item['title'].replace('"', '\\"')
        content = item['content'].replace('"', '\\"')
        source = item['source'].replace('"', '\\"')
        url = item['url'].replace('"', '\\"')

        js_items.append(
            f'  {{ id: "{item["id"]}", title: "{title}", '
            f'content: "{content}", '
            f'source: "{source}", type: "{item["type"]}", '
            f'platform: "{item["platform"]}", '
            f'date: new Date("{item["date"]}"), '
            f'url: "{url}" }}'
        )

    js_array = 'var newsData = [\n' + ',\n'.join(js_items) + '\n];'

    # 读取 script.js
    with open('script.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # 替换 newsData 数组（从 "var newsData = [" 到 "];"）
    pattern = r'var newsData = \[[\s\S]*?\];'
    match = re.search(pattern, content)

    if not match:
        print('ERROR: Could not find newsData array in script.js')
        return

    new_content = content[:match.start()] + js_array + content[match.end():]

    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f'Successfully injected {len(news)} news items into script.js')


if __name__ == '__main__':
    main()

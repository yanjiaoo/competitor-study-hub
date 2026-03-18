#!/bin/bash

# 添加新内容的脚本
# 使用方法: ./add-content.sh

echo "=== Competitor Study 内容添加工具 ==="
echo ""

# 获取用户输入
read -p "标题: " title
read -p "日期 (YYYY-MM-DD): " date
read -p "摘要: " summary
read -p "标签 (用逗号分隔): " tags_input
read -p "类型 (flash/study): " type
read -p "文件路径 (相对于网站根目录): " file_path

# 处理标签
IFS=',' read -ra TAGS <<< "$tags_input"
tags_json="["
for i in "${!TAGS[@]}"; do
    tag=$(echo "${TAGS[$i]}" | xargs)  # 去除空格
    if [ $i -eq 0 ]; then
        tags_json="$tags_json\"$tag\""
    else
        tags_json="$tags_json, \"$tag\""
    fi
done
tags_json="$tags_json]"

# 生成新的ID
max_id=$(jq '[.[].id] | max' content.json)
new_id=$((max_id + 1))

# 创建新条目
new_entry=$(cat <<EOF
{
  "id": $new_id,
  "title": "$title",
  "date": "$date",
  "summary": "$summary",
  "tags": $tags_json,
  "type": "$type",
  "file": "$file_path"
}
EOF
)

# 添加到JSON文件
jq ". += [$new_entry]" content.json > temp.json && mv temp.json content.json

echo ""
echo "✅ 内容已成功添加到网站!"
echo "📁 请确保文件已上传到: $file_path"

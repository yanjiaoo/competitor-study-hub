# 内容更新指南

## 方法1: 使用脚本添加 (推荐)

运行添加脚本：
```bash
./add-content.sh
```

按提示输入信息即可自动添加到网站。

## 方法2: 手动编辑JSON文件

直接编辑 `content.json` 文件，添加新条目：

```json
{
  "id": 4,
  "title": "新内容标题",
  "date": "2024-04-01",
  "summary": "内容摘要描述",
  "tags": ["标签1", "标签2"],
  "type": "report",
  "file": "reports/new-file.pdf"
}
```

## 文件上传步骤

1. 将PPT/PDF文件放入对应文件夹：
   - `reports/` - 定期简报
   - `flash/` - Flash分享  
   - `studies/` - 深度研究

2. 使用上述方法添加内容信息

3. 刷新网页即可看到新内容

## 类型说明

- `flash`: 定期Flash
- `study`: 深度研究

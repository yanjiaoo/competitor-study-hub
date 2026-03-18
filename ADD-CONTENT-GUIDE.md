# 📝 添加新内容超简单指南

## 🎯 只需要2步操作：

### 步骤1: 上传PDF文件
1. 访问: https://github.com/你的用户名/仓库名
2. 点击 `files` 文件夹
3. 点击 "Add file" > "Upload files"
4. 拖拽新的PDF文件
5. 点击 "Commit changes"

### 步骤2: 更新内容列表
1. 点击 `script.js` 文件
2. 点击编辑按钮（铅笔图标）
3. 找到对应的数组（flash 或 reports）
4. 在最前面添加新条目：

**Flash示例：**
```javascript
{
    id: 7,
    title: "2025年XX月双月度Competitor Study Flash",
    date: "2025-XX-XX",
    summary: "简短描述...",
    tags: ["双月报告", "竞争分析", "其他标签"],
    file: "files/新文件名.pdf"
},
```

**Deep Research示例：**
```javascript
{
    id: 8,
    title: "研究标题",
    date: "2025-XX-XX", 
    summary: "研究描述...",
    tags: ["深度研究", "其他标签"],
    file: "files/新文件名.pdf"
},
```

5. 点击 "Commit changes"

## ✅ 完成！
网站会自动更新，新内容立即可见。

## 💡 小贴士：
- ID号码要递增（当前最大是6）
- 日期格式：YYYY-MM-DD
- 文件名要和上传的PDF完全一致
- 记得在新条目后面加逗号

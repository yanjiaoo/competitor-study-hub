# 部署到GitHub Pages指南

## 🚀 快速部署步骤

### 1. 运行部署脚本
```bash
# Windows
deploy-to-github.bat

# 或手动执行
git init
git add .
git commit -m "Initial commit: Competitor Study Hub"
```

### 2. 创建GitHub仓库
1. 登录GitHub
2. 点击 "New repository"
3. 仓库名称: `competitor-study-hub`
4. 设为Public (免费用户需要public才能使用GitHub Pages)
5. 不要初始化README

### 3. 连接并推送
```bash
git remote add origin https://github.com/你的用户名/competitor-study-hub.git
git branch -M main
git push -u origin main
```

### 4. 启用GitHub Pages
1. 进入仓库 Settings > Pages
2. Source 选择 "Deploy from a branch"
3. Branch 选择 "main"
4. 点击 Save

### 5. 访问网站
几分钟后网站将在以下地址可用:
`https://你的用户名.github.io/competitor-study-hub`

## 📊 访问统计功能

网站包含两种访问统计:
- **本地计数**: 基于浏览器localStorage
- **全局计数**: 使用免费API服务 (countapi.xyz)

## 🔄 更新内容

1. 编辑 `content.json` 添加新内容
2. 提交并推送到GitHub:
```bash
git add .
git commit -m "添加新内容"
git push
```

网站会自动更新！

## 🔒 访问控制 (可选)

如果需要限制访问，可以考虑:
- 使用私有仓库 + GitHub Pro
- 部署到AWS S3 + CloudFront + Cognito
- 使用Netlify的密码保护功能

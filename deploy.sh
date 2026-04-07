#!/bin/bash

# 竞争对手资讯网站部署脚本
echo "🚀 开始部署Amazon Competitor Study Hub..."

# 进入项目目录
cd amazon-competitor-study-hub

# 检查Git状态
echo "📋 检查Git状态..."
git status

# 添加所有更改
echo "➕ 添加文件更改..."
git add .

# 提交更改
echo "💾 提交更改..."
git commit -m "feat: 添加Temu、Shein、TikTok、Joybuy竞争对手实时资讯功能

- 新增四大竞争对手平台的资讯源配置
- 实现实时资讯更新和自动刷新功能
- 添加平台标签和过滤器
- 优化资讯源管理界面
- 增强响应式设计和用户体验
- 支持手动刷新和自动更新控制"

# 推送到GitHub
echo "🌐 推送到GitHub..."
git push origin main

echo "✅ 部署完成！"
echo "🔗 网站地址: https://yanjiaoo.github.io/amazon-competitor-study-hub/"
echo ""
echo "📝 更新内容："
echo "   • 添加了Temu、Shein、TikTok、Joybuy四个竞争对手平台"
echo "   • 实现了实时资讯更新功能"
echo "   • 支持按平台和资讯类型过滤"
echo "   • 可以添加自定义资讯源"
echo "   • 自动刷新和手动刷新功能"
echo "   • 更新通知提醒"
echo ""
echo "🎯 下一步建议："
echo "   • 配置真实的API密钥以获取实时数据"
echo "   • 根据需要调整自动刷新间隔"
echo "   • 添加更多竞争对手平台"

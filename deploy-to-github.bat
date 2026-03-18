@echo off
echo 正在初始化Git仓库并推送到GitHub...
echo.

REM 初始化Git仓库
git init
git add .
git commit -m "Initial commit: Competitor Study Hub"

echo.
echo 请按以下步骤完成部署:
echo.
echo 1. 在GitHub上创建新仓库 (建议名称: competitor-study-hub)
echo 2. 复制仓库URL
echo 3. 运行以下命令:
echo    git remote add origin [你的仓库URL]
echo    git branch -M main
echo    git push -u origin main
echo.
echo 4. 在GitHub仓库设置中启用GitHub Pages
echo    - 进入 Settings ^> Pages
echo    - Source 选择 "Deploy from a branch"
echo    - Branch 选择 "main"
echo    - 点击 Save
echo.
echo 5. 几分钟后你的网站将在以下地址可用:
echo    https://[你的用户名].github.io/competitor-study-hub
echo.
pause

@echo off
echo 启动 Competitor Study 网站...
echo 网站将在 http://localhost:8000 打开
echo 按 Ctrl+C 停止服务器
echo.

cd /d "%~dp0"
python -m http.server 8000

#!/bin/sh
echo "构建开始..."
echo "开始前端构建..."
git pull
cd ./client
npm install
npm run build
echo "前端构建完毕..."

echo "开始更新静态资源..."
rm -rf ../server/public
cp -r build ../server/public
echo "静态资源更新完毕..."

echo "重启node服务..."
cd ../server
npm install
pm2 delete app.js
pm2 start app.js
echo "node服务重启完毕..."
echo "发布完成..."
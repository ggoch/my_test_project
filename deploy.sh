#!/user/bin/env sh

# 發生錯誤時停止腳本
set -e

#打包
npm run build

#移動到打包後的目錄
cd dist

git init  //因為dist資料夾預設是被ignore的，因此在進入dist資料夾後初始化git
git add -A
git commit -m 'deploy'

# 部署到 https://github.com/ggoch/my_test_project.git 分支為 gh-pages
git push -f https://github.com/ggoch/my_test_project.git master:gh-pages

cd -

rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@gitee.com:jiangtao0323/gulu-ui-website.git &&
git push -f -u origin master &&
cd -
echo https://jiangtao0323.gitee.io/gulu-ui-website

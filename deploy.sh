rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@gitee.com:KTFootball_Teachers/gulu-ui-website.git &&
git push -f -u origin master &&
cd -
echo https://yjjtt.top/gulu-ui-website/index.html

npm install
npm run build
git checkout pages
git add *
currentDate="`date +'%Y-%m-%d %H:%M:%S'`"
gitmsg="Build: $currentDate"
git commit -m "$gitmsg"
git push -u origin pages --force
git checkout main --force
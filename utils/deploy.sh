mkdir ../public
cp -r ../src/* ../public/
git checkout --orphan gh-pages
git reset
git add ../.github/*
git add ../public/*
git commit -m "Build"
git push -u origin gh-pages --force
git checkout main --force
git branch -D gh-pages
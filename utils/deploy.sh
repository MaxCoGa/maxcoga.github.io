mkdir ../public
cp -r ../src/* ../public/
git checkout --orphan build
git reset
git add ../public/*
git commit -m "Build"
git push -u origin build
git checkout dev --force
git branch -D build
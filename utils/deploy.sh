# npm run build
# run from root
mkdir ../public
cp ../src/* ../public/
# cd ..
git checkout --orphan build
git reset
git add ../public/*
git commit -m "Build"
git push -u origin build
git checkout dev --force
git branch build --delete

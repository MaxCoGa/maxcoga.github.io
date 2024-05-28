# npm run build
# run from root
mkdir ../public
cp src/* ../public/
cd ..
git switch --orphan build
git add ./public/*
git commit -m "Build"
git push -u origin build
git checkout dev
git branch build --delete

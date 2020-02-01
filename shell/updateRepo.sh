#!/bin/sh
git reset --hard HEAD
git pull --rebase origin master -X theirs
rm -rf node_modules/
npm i
npm run build
pm2 restart build/bundle.js
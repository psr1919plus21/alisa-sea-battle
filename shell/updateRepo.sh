#!/bin/sh
git reset --hard HEAD
git pull --rebase origin master -X theirs
npm run build
pm2 restart server
#!/bin/sh
git reset --hard HEAD
git pull --rebase origin master -X theirs
pm2 restart server
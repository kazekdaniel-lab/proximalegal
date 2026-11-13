#!/bin/sh
# Wypycha dist-pages/ na gałąź gh-pages repo kazekdaniel-lab/proximalegal (GitHub Pages).
# Jeśli systemowy DNS nie rozwiązuje github.com, adres bierzemy z 1.1.1.1.
set -e
cd "$(dirname "$0")/../dist-pages"
RESOLVE=""
if ! host github.com >/dev/null 2>&1; then
  IP=$(dig +short +time=3 +tries=1 @1.1.1.1 github.com | grep -E '^[0-9.]+$' | head -1)
  [ -n "$IP" ] && RESOLVE="-c http.curloptResolve=github.com:443:$IP"
fi
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.name="kazekdaniel-lab" -c user.email="kazekdaniel-lab@users.noreply.github.com" commit -q -m "Podgląd strony $(date '+%Y-%m-%d %H:%M')"
git $RESOLVE push -q -f https://github.com/kazekdaniel-lab/proximalegal.git gh-pages
rm -rf .git
echo "Wypchnięte. Podgląd: https://kazekdaniel-lab.github.io/proximalegal/"

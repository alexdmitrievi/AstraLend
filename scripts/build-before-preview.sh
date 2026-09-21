#!/usr/bin/env bash
# Кладёт рядом с сайтом копию версии, какой лендинг был до сентябрьского
# редизайна, чтобы её можно было открыть и сравнить.
#
# Пересобирать нечего: на том коммите статический экспорт был закоммичен
# в репозиторий, так что берём ровно тот билд.
#
# Использование: scripts/build-before-preview.sh [префикс] [куда]
set -euo pipefail

REF="eed389e879ed324ed148dee3e6d664b851d525d5"   # chore: добавить WebP-файлы в статический экспорт out/
PREFIX="${1:-/AstraLend/before}"
DEST="${2:-out/before}"

if ! git cat-file -e "$REF^{commit}" 2>/dev/null; then
  echo "Коммит $REF недоступен. В CI нужен actions/checkout с fetch-depth: 0." >&2
  exit 1
fi

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT
git archive "$REF" out | tar -x -C "$tmp" --strip-components=1

# Экспорт Next ссылается на ассеты абсолютными путями от корня сайта, а превью
# живёт на подпути. Переписываем только вхождения после кавычки: иначе под
# замену попал бы абсолютный URL https://a-stra.ru/astra_main.png в метатегах.
find "$tmp" -type f \( -name '*.html' -o -name '*.txt' -o -name '*.js' \
     -o -name '*.css' -o -name '*.json' -o -name '*.xml' \) -print0 \
  | xargs -0 -r sed -i \
      -e "s#\"/_next/#\"${PREFIX}/_next/#g" \
      -e "s#'/_next/#'${PREFIX}/_next/#g" \
      -e "s#\"/astra_main#\"${PREFIX}/astra_main#g" \
      -e "s#\"/clients/#\"${PREFIX}/clients/#g" \
      -e "s#\"/privacy-policy#\"${PREFIX}/privacy-policy#g" \
      -e "s#href=\"/\"#href=\"${PREFIX}/\"#g"

rm -rf "$DEST"
mkdir -p "$(dirname "$DEST")"
mv "$tmp" "$DEST"
trap - EXIT

echo "Превью версии до редизайна собрано в $DEST (префикс $PREFIX)"

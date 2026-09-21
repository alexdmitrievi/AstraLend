# АСТРА — лендинг мастерской мягкой мебели

Статический сайт мастерской мягкой мебели «АСТРА» (Омск): главная страница
с коллекциями, объектами и заявкой + каталог с фильтрами.

## Стек
- Next.js (App Router) в режиме статического экспорта (`output: "export"`), TypeScript
- Tailwind CSS v4 — токены живут в `@theme` внутри `app/globals.css`
- Framer Motion
- react-hook-form + zod
- yet-another-react-lightbox

## Структура
```
app/
  page.tsx              главная: Hero → Коллекции → Материалы → Объекты →
                        Клиенты → Мастерская → Отзывы → Заявка → Футер
  catalog/page.tsx      каталог с фильтрами (коллекция / материал / помещение)
  privacy-policy/       политика обработки персональных данных (ФЗ-152)
components/
  sections/             секции главной страницы
  catalog/              сетка каталога и строки фильтров
lib/
  catalog.ts            коллекции, позиции, фильтры — единственный источник данных
  clients.ts            логотипы клиентов для маркизы
  cases.ts              кейсы по объектам (ЗАГЛУШКИ — ждут фактуру от владельца)
  asset.ts              basePath для GitHub Pages
  media.ts              наличие медиа в public/ проверяется во время сборки
  validators.ts         zod-схема лид-формы
```

## Запуск
```bash
npm install
npm run dev       # разработка
npm run build     # статическая сборка в out/
npx serve out     # посмотреть собранную версию
```

`out/` и `.next/` не хранятся в репозитории — собираются локально и в CI.

## Переменные окружения
- `NEXT_PUBLIC_LEAD_ENDPOINT` — приёмник лид-формы
  (по умолчанию FormSubmit → `mebel@a-stra.ru`)
- `GITHUB_PAGES` / `NEXT_PUBLIC_BASE_PATH` — выставляются только в CI Pages,
  см. ниже

Форма отправляется из браузера, серверного кода нет.

## Публикация

### GitHub Pages (превью)
Workflow `.github/workflows/pages.yml` собирает сайт при пуше в `main`
и публикует его. Project Pages живут на подпути, поэтому сборка идёт
с `GITHUB_PAGES=true` и `NEXT_PUBLIC_BASE_PATH=/AstraLend` — Next
подставляет `basePath: "/AstraLend"`, а локальные картинки из `public/`
подключаются через `asset()` из `lib/asset.ts`.

Pages включён, источник — **GitHub Actions**. После зелёного прогона сайт
доступен по адресу <https://alexdmitrievi.github.io/AstraLend/>.

Если понадобится настроить Pages заново: **Settings → Pages → Source =
GitHub Actions**. Автоматизировать это шагом `actions/configure-pages`
с `enablement: true` нельзя — `GITHUB_TOKEN` умеет деплоить в Pages, но
не создавать сам Pages-сайт, и шаг падает с
`Resource not accessible by integration`.

### Боевой домен
Обычная сборка (`npm run build`, без `GITHUB_PAGES`) даёт статику без
`basePath` — её можно выкладывать в корень `a-stra.ru` или на любой хостинг
статики.

## Медиа-ассеты

Все три файла лежат в `public/` и подключаются через `lib/media.ts`:
он проверяет наличие файла во время сборки, и если файла нет — компонент
получает `null` и рендерит фолбэк вместо битой ссылки.

| Файл | Где используется | Вес |
| --- | --- | --- |
| `public/material.mp4` | фон полосы «Материалы» | 459 КБ, 1280×720, 5 с |
| `public/texture-dark.webp` | фактура секций «Объекты» и «Заявка» | 73 КБ, 1344×752 |
| `public/workshop.webp` | кадр 4:5 в секции «Мастерская» | 111 КБ, 896×1120 |

Первый экран статичный — видео живёт только в полосе «Материалы».

Если будете заменять ассеты, команды сжатия:

```bash
# видео: H.264, без звука. crf 24 — на тёмном материале меньше бандинга,
# чем на 30, и всё равно вчетверо под лимитом 2 МБ.
# Масштаб не задаём: исходник 1280×720, апскейл только раздует файл.
ffmpeg -i material-src.mp4 -an -c:v libx264 -crf 24 -preset slow \
       -pix_fmt yuv420p -movflags +faststart public/material.mp4

# картинки: webp q80. Апскейла быть не должно — если исходник уже
# уже целевой ширины, просто перекодируйте без -resize.
cwebp -q 80 -resize 1600 0 texture-src.png -o public/texture-dark.webp
cwebp -q 80 -resize 1200 0 workshop-src.png -o public/workshop.webp
```

## Что ещё не заполнено
`lib/cases.ts`: город, название и коллекция трёх объектов взяты из макета,
а обложки и тексты задача / решение / результат владельцем не переданы.
Секция «Объекты» честно показывает плашки «фото готовится» с подсказкой,
какой нужен кадр, и не рендерит строки `<dl>` без текста. Чтобы кейсы ожили,
заполните `cover`, `task`, `solution`, `result`.

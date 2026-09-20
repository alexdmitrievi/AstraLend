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
  page.tsx              главная: Hero → Коллекции → Объекты → Клиенты →
                        Мастерская → Отзывы → Заявка → Футер
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

Один раз нужно включить: **Settings → Pages → Source = GitHub Actions**.
После зелёного прогона сайт доступен по адресу
<https://alexdmitrievi.github.io/AstraLend/>.

### Боевой домен
Обычная сборка (`npm run build`, без `GITHUB_PAGES`) даёт статику без
`basePath` — её можно выкладывать в корень `a-stra.ru` или на любой хостинг
статики.

## Что ещё не заполнено
`lib/cases.ts` содержит три пустых кейса. Секция «Объекты» честно показывает
плашки «фото готовится» и не рендерит строки без текста. Чтобы кейсы ожили,
нужно заполнить `cover`, `city`, `title`, `collection`, `task`, `solution`,
`result`.

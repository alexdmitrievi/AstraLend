/**
 * Кейсы по объектам.
 *
 * Город, название и коллекция взяты из утверждённого макета
 * (design/redesign-reference.dc.html). Обложки и тексты
 * задача / решение / результат владельцем пока не переданы — здесь
 * сознательно пустые строки, ничего не выдумываем. Секция рендерит
 * честную заглушку вместо фото и пропускает строки <dl> без текста.
 *
 * Чтобы кейс ожил, заполните `cover`, `task`, `solution` и `result`.
 */

export type ProjectCase = {
  id: string;
  city: string;
  title: string;
  /** id коллекции из lib/catalog.ts; пустая строка прячет ссылку «Модели объекта». */
  collection: string;
  /** путь к обложке в public/ или пустая строка. */
  cover: string;
  /** подсказка фотографу, если обложки ещё нет. */
  coverHint: string;
  task: string;
  solution: string;
  result: string;
};

export const cases: ProjectCase[] = [
  {
    id: "chateau",
    city: "Омск",
    title: "Ресторан «Шато»",
    collection: "sofas",
    cover: "",
    coverHint: "Фото зала «Шато» — вертикальный кадр",
    task: "",
    solution: "",
    result: "",
  },
  {
    id: "pinebar",
    city: "Омск",
    title: "Pine Bar",
    collection: "benches",
    cover: "",
    coverHint: "Фото Pine Bar — вертикальный кадр",
    task: "",
    solution: "",
    result: "",
  },
  {
    id: "nova",
    city: "Омск",
    title: "Апарт-отель Nova",
    collection: "beds",
    cover: "",
    coverHint: "Фото номера Nova — вертикальный кадр",
    task: "",
    solution: "",
    result: "",
  },
];

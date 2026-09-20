/**
 * Кейсы по объектам.
 *
 * ВНИМАНИЕ: фактура (фото обложек, город, название объекта, задача/решение/
 * результат) пока не передана владельцем. Здесь сознательно оставлены пустые
 * строки — ничего не выдумываем. Секция рендерит честные заглушки и
 * пропускает строки, для которых нет текста.
 *
 * Чтобы кейс ожил, заполните поля ниже. `collection` — id из lib/catalog.ts
 * (sofas | armchairs | beds | benches | business); если он пуст, ссылка
 * «Модели объекта» не рендерится.
 */

export type ProjectCase = {
  id: string;
  city: string;
  title: string;
  collection: string;
  cover: string;
  task: string;
  solution: string;
  result: string;
};

export const cases: ProjectCase[] = [
  {
    id: "case-1",
    city: "",
    title: "",
    collection: "",
    cover: "",
    task: "",
    solution: "",
    result: "",
  },
  {
    id: "case-2",
    city: "",
    title: "",
    collection: "",
    cover: "",
    task: "",
    solution: "",
    result: "",
  },
  {
    id: "case-3",
    city: "",
    title: "",
    collection: "",
    cover: "",
    task: "",
    solution: "",
    result: "",
  },
];

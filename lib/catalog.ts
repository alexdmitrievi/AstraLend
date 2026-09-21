/**
 * Единственный источник данных каталога.
 * Раньше массив жил прямо в app/page.tsx — вынесен, чтобы главная
 * и /catalog/ читали одни и те же позиции.
 *
 * Теги материалов и помещений заданы явно по утверждённому макету
 * (design/redesign-reference.dc.html) — он источник истины. Выводить их
 * регуляркой из поля `material` нельзя: макет, например, не считает
 * латунные гвозди металлом.
 */

export type MaterialTag = "leather" | "fabric" | "wood" | "metal";
export type RoomTag = "home" | "office" | "horeca";

export type Collection = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type CatalogItem = {
  id: string;
  collection: string;
  title: string;
  material: string;
  image: string;
  materials: MaterialTag[];
  rooms: RoomTag[];
};

export const materialLabels: Record<MaterialTag, string> = {
  leather: "Кожа",
  fabric: "Ткань и велюр",
  wood: "Массив дерева",
  metal: "Металл",
};

export const roomLabels: Record<RoomTag, string> = {
  home: "Дом",
  office: "Офис и лобби",
  horeca: "Отели и рестораны",
};

const IMG = {
  modular: "https://i.postimg.cc/28YBLJs8/06864f01252556d06a45281bffd903ed-1770245125.png",
  chester: "https://i.postimg.cc/7L9TV6D1/a3ce72d274c2a75847a8fe18b32b1091-1770241389.png",
  lounge: "https://i.postimg.cc/1XKmqyQy/196f01ad-e165-4ff4-83c9-eedd43b4d7d1.png",
  minimal: "https://i.postimg.cc/tRF7tkbW/771f0af22663800624a9fc8c4300639e-1770247764.png",
  corner: "https://i.postimg.cc/jSDTsHLw/38246aa2-9ced-4ea6-9a5a-32de4b893e25.png",
  carved: "https://i.postimg.cc/ZnbB2vFd/17091dd7206c2c4550150e55426f61ad-1770240229.png",
  wheels: "https://i.postimg.cc/cJSQh23G/1c51eec6e84c002d0d9310cb10b26ec0-1770243052.png",
  classic: "https://i.postimg.cc/KzvGxWVV/photo-2026-02-09-00-33-28.jpg",
  bedArch: "https://i.postimg.cc/k41M1Y0N/720490c15029dad280131423b2d53b27-1770732955.png",
  bedQuilt: "https://i.postimg.cc/jjnFnLfH/15cf1e42e21d4141d4ec6a52abbedb2f-1770652377.png",
  bench: "https://i.postimg.cc/W1rKYd9w/0f154305120eb542bd0b0ce9e9d04798-1770247952.png",
  pouf: "https://i.postimg.cc/GpdMMqT4/eddeff193c92e25e89c1018110825040-1770247153.png",
  meeting: "https://i.postimg.cc/k55tTbsm/d29350da0f0e5772c0e15acbc1dae661-1770245979.png",
} as const;

export const catalogItems: CatalogItem[] = [
  /* ─── Диваны ─── */
  {
    id: "sofa-modular",
    collection: "sofas",
    title: "Модульный архитектурный диван",
    material: "Велюр, высокоэластичный ППУ",
    image: IMG.modular,
    materials: ["fabric"],
    rooms: ["home"],
  },
  {
    id: "sofa-chesterfield",
    collection: "sofas",
    title: "Современный Chesterfield-диван",
    material: "Натуральная кожа, металлическое основание",
    image: IMG.chester,
    materials: ["leather", "metal"],
    rooms: ["home", "horeca"],
  },
  {
    id: "sofa-lounge",
    collection: "sofas",
    title: "Лаунж-диван с цилиндрическими валиками",
    material: "Бархат, массив дерева",
    image: IMG.lounge,
    materials: ["fabric", "wood"],
    rooms: ["horeca"],
  },
  {
    id: "sofa-minimal",
    collection: "sofas",
    title: "Минималистичный диван для гостиной",
    material: "Ткань премиум-класса, металл",
    image: IMG.minimal,
    materials: ["fabric", "metal"],
    rooms: ["home"],
  },
  {
    id: "sofa-corner",
    collection: "sofas",
    title: "Угловой диван представительского класса",
    material: "Натуральная кожа, массив дерева",
    image: IMG.corner,
    materials: ["leather", "wood"],
    rooms: ["office", "home"],
  },

  /* ─── Кресла ─── */
  {
    id: "armchair-heritage-carved",
    collection: "armchairs",
    title: "Резное кожаное кресло Heritage",
    material: "Натуральная кожа, массив дерева, латунные гвозди",
    image: IMG.carved,
    materials: ["leather", "wood"],
    rooms: ["home"],
  },
  {
    id: "armchair-heritage-castors",
    collection: "armchairs",
    title: "Кресло Heritage на колёсной базе",
    material: "Натуральная кожа, массив дерева, металлическая крестовина",
    image: IMG.wheels,
    materials: ["leather", "wood", "metal"],
    rooms: ["office"],
  },
  {
    id: "armchair-heritage-classic",
    collection: "armchairs",
    title: "Кресло Heritage Classic",
    material: "Натуральная кожа, массив дерева, латунные гвозди",
    image: IMG.classic,
    materials: ["leather", "wood"],
    rooms: ["horeca"],
  },

  /* ─── Кровати ─── */
  {
    id: "bed-architectural",
    collection: "beds",
    title: "Кровать с мягким архитектурным изголовьем",
    material: "Велюр, МДФ, металл",
    image: IMG.bedArch,
    materials: ["fabric", "metal"],
    rooms: ["home"],
  },
  {
    id: "bed-vertical-quilt",
    collection: "beds",
    title: "Современная кровать с вертикальной простёжкой",
    material: "Текстиль, массив дерева",
    image: IMG.bedQuilt,
    materials: ["fabric", "wood"],
    rooms: ["home"],
  },

  /* ─── Банкетки и пуфы ─── */
  {
    id: "bench-metal-base",
    collection: "benches",
    title: "Банкетка на металлическом основании",
    material: "Ткань, массив дерева, хромированный металл",
    image: IMG.bench,
    materials: ["fabric", "wood", "metal"],
    rooms: ["home", "horeca"],
  },
  {
    id: "pouf-soft",
    collection: "benches",
    title: "Мягкий пуф для интерьера",
    material: "Ткань, ППУ",
    image: IMG.pouf,
    materials: ["fabric"],
    rooms: ["home", "horeca"],
  },

  /* ─── Мебель для бизнеса ─── */
  {
    id: "business-meeting-sofa",
    collection: "business",
    title: "Диван для переговорной зоны",
    material: "Натуральная кожа, металл",
    image: IMG.meeting,
    materials: ["leather", "metal"],
    rooms: ["office"],
  },
  {
    id: "business-executive-chair",
    collection: "business",
    title: "Кресло для кабинета руководителя",
    material: "Натуральная кожа, массив дерева",
    image: IMG.wheels,
    materials: ["leather", "wood"],
    rooms: ["office"],
  },
];

export const collections: Collection[] = [
  {
    id: "sofas",
    title: "Диваны",
    description:
      "Прямые, угловые и модульные диваны архитектурного и представительского уровня",
    image: IMG.modular,
  },
  {
    id: "armchairs",
    title: "Кресла",
    description:
      "Акцентные кресла для интерьеров, кабинетов и общественных пространств",
    image: IMG.carved,
  },
  {
    id: "beds",
    title: "Кровати",
    description: "Кровати с мягким изголовьем и архитектурным характером",
    image: IMG.bedArch,
  },
  {
    id: "benches",
    title: "Банкетки и пуфы",
    description:
      "Функциональные элементы для спален, холлов и общественных зон",
    image: IMG.bench,
  },
  {
    id: "business",
    title: "Мебель для бизнеса",
    description: "Решения для офисов, переговорных, лобби и частных кабинетов",
    image: IMG.meeting,
  },
];

function dedupeByImage(items: CatalogItem[]): CatalogItem[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.image)) return false;
    seen.add(item.image);
    return true;
  });
}

/** Позиции без повторов по фото — часть моделей делит один кадр. */
export function uniqueItems(): CatalogItem[] {
  return dedupeByImage(catalogItems);
}

export type CatalogFilter = {
  collection?: string;
  material?: MaterialTag | "";
  room?: RoomTag | "";
};

/**
 * Фильтры комбинируются по «И». Дедуп по фото делается уже после фильтрации,
 * поэтому внутри коллекции не теряется ни одна позиция.
 */
export function filterItems(filter: CatalogFilter = {}): CatalogItem[] {
  const { collection, material, room } = filter;

  const matched = catalogItems.filter((item) => {
    if (collection && item.collection !== collection) return false;
    if (material && !item.materials.includes(material)) return false;
    if (room && !item.rooms.includes(room)) return false;
    return true;
  });

  return dedupeByImage(matched);
}

export function countByCollection(collectionId: string): number {
  return catalogItems.filter((item) => item.collection === collectionId).length;
}

/** «1 модель», «2 модели», «5 моделей». */
export function modelsPlural(count: number): string {
  const mod100 = count % 100;
  if (mod100 >= 11 && mod100 <= 14) return "моделей";
  switch (count % 10) {
    case 1:
      return "модель";
    case 2:
    case 3:
    case 4:
      return "модели";
    default:
      return "моделей";
  }
}

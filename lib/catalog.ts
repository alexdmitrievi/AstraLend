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
  /** Натуральные размеры фото (для width/height у <img>: без них карточки
   *  дёргаются при ленивой загрузке, а на мобилке нечем задать пропорцию). */
  imageWidth: number;
  imageHeight: number;
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
  modular: "/catalog/modular.webp",
  chester: "/catalog/chester.webp",
  lounge: "/catalog/lounge.webp",
  minimal: "/catalog/minimal.webp",
  corner: "/catalog/corner.webp",
  carved: "/catalog/carved.webp",
  wheels: "/catalog/wheels.webp",
  classic: "/catalog/classic.webp",
  bedArch: "/catalog/bedArch.webp",
  bedQuilt: "/catalog/bedQuilt.webp",
  bench: "/catalog/bench.webp",
  pouf: "/catalog/pouf.webp",
  meeting: "/catalog/meeting.webp",
} as const;

export const catalogItems: CatalogItem[] = [
  /* ─── Диваны ─── */
  {
    id: "sofa-modular",
    collection: "sofas",
    title: "Модульный архитектурный диван",
    material: "Велюр, высокоэластичный ППУ",
    image: IMG.modular,
    imageWidth: 1280,
    imageHeight: 960,
    materials: ["fabric"],
    rooms: ["home"],
  },
  {
    id: "sofa-chesterfield",
    collection: "sofas",
    title: "Современный Chesterfield-диван",
    material: "Натуральная кожа, металлическое основание",
    image: IMG.chester,
    imageWidth: 1280,
    imageHeight: 960,
    materials: ["leather", "metal"],
    rooms: ["home", "horeca"],
  },
  {
    id: "sofa-lounge",
    collection: "sofas",
    title: "Лаунж-диван с цилиндрическими валиками",
    material: "Бархат, массив дерева",
    image: IMG.lounge,
    imageWidth: 1280,
    imageHeight: 853,
    materials: ["fabric", "wood"],
    rooms: ["horeca"],
  },
  {
    id: "sofa-minimal",
    collection: "sofas",
    title: "Минималистичный диван для гостиной",
    material: "Ткань премиум-класса, металл",
    image: IMG.minimal,
    imageWidth: 1280,
    imageHeight: 960,
    materials: ["fabric", "metal"],
    rooms: ["home"],
  },
  {
    id: "sofa-corner",
    collection: "sofas",
    title: "Угловой диван представительского класса",
    material: "Натуральная кожа, массив дерева",
    image: IMG.corner,
    imageWidth: 800,
    imageHeight: 800,
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
    imageWidth: 1280,
    imageHeight: 960,
    materials: ["leather", "wood"],
    rooms: ["home"],
  },
  {
    id: "armchair-heritage-castors",
    collection: "armchairs",
    title: "Кресло Heritage на колёсной базе",
    material: "Натуральная кожа, массив дерева, металлическая крестовина",
    image: IMG.wheels,
    imageWidth: 1280,
    imageHeight: 960,
    materials: ["leather", "wood", "metal"],
    rooms: ["office"],
  },
  {
    id: "armchair-heritage-classic",
    collection: "armchairs",
    title: "Кресло Heritage Classic",
    material: "Натуральная кожа, массив дерева, латунные гвозди",
    image: IMG.classic,
    imageWidth: 533,
    imageHeight: 800,
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
    imageWidth: 1280,
    imageHeight: 960,
    materials: ["fabric", "metal"],
    rooms: ["home"],
  },
  {
    id: "bed-vertical-quilt",
    collection: "beds",
    title: "Современная кровать с вертикальной простёжкой",
    material: "Текстиль, массив дерева",
    image: IMG.bedQuilt,
    imageWidth: 1280,
    imageHeight: 960,
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
    imageWidth: 1280,
    imageHeight: 960,
    materials: ["fabric", "wood", "metal"],
    rooms: ["home", "horeca"],
  },
  {
    id: "pouf-soft",
    collection: "benches",
    title: "Мягкий пуф для интерьера",
    material: "Ткань, ППУ",
    image: IMG.pouf,
    imageWidth: 1280,
    imageHeight: 960,
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
    imageWidth: 1280,
    imageHeight: 960,
    materials: ["leather", "metal"],
    rooms: ["office"],
  },
  {
    id: "business-executive-chair",
    collection: "business",
    title: "Кресло для кабинета руководителя",
    material: "Натуральная кожа, массив дерева",
    image: IMG.wheels,
    imageWidth: 1280,
    imageHeight: 960,
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

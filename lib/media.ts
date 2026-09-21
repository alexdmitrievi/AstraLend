/**
 * Сгенерированные медиа-ассеты редизайна.
 *
 * ВНИМАНИЕ: модуль читает файловую систему, поэтому импортировать его можно
 * только из серверных компонентов (app/page.tsx). Клиентские компоненты
 * получают готовые пути пропсами.
 *
 * Проверка существования делается во время сборки: пока файла нет в public/,
 * компонент получает null и рендерит корректный фолбэк (постер hero,
 * тёмная секция без фактуры, плашка «фото готовится»). Как только файл
 * появится — он подключится сам, без правок кода.
 *
 * Где взять файлы и чем пережать — см. README, раздел «Медиа-ассеты».
 */
import { existsSync } from "node:fs";
import { join } from "node:path";
import { asset } from "./asset";

export const mediaFiles = {
  materialVideo: "/material.mp4",
  textureDark: "/texture-dark.webp",
  workshop: "/workshop.webp",
} as const;

export type MediaKey = keyof typeof mediaFiles;
export type ResolvedMedia = Record<MediaKey, string | null>;

export function resolveMedia(): ResolvedMedia {
  const publicDir = join(process.cwd(), "public");

  const entries = (Object.keys(mediaFiles) as MediaKey[]).map((key) => {
    const file = mediaFiles[key];
    return [key, existsSync(join(publicDir, file)) ? asset(file) : null] as const;
  });

  return Object.fromEntries(entries) as ResolvedMedia;
}

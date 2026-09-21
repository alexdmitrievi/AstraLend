/**
 * basePath для GitHub Pages (проект живёт на подпути /AstraLend/).
 *
 * next/image с `unoptimized: true` отдаёт src как есть и basePath не
 * подставляет, поэтому локальные файлы из public/ подключаются через asset().
 * Внешних ссылок (postimg) это не касается.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

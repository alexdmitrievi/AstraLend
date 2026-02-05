type PlaceholderInput = {
  width: number;
  height: number;
  fill: string;
};

export function createPlaceholder({ width, height, fill }: PlaceholderInput) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="${fill}"/></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

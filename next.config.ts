import type { NextConfig } from "next";

// GitHub Pages для project-репозитория отдаёт сайт с подпути /AstraLend/.
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isPages ? "/AstraLend" : undefined,
  assetPrefix: isPages ? "/AstraLend/" : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "postimg.cc",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

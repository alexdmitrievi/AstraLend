import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // If you have basePath, add it here
  // basePath: "",
};

export default nextConfig;

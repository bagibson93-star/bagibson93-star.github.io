import type { NextConfig } from "next";

// For GitHub Pages project sites (https://USER.github.io/REPO), set
// NEXT_PUBLIC_BASE_PATH=/REPO when building. Leave empty for Vercel,
// Cloudflare Pages, custom domains, or USER.github.io root sites.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;

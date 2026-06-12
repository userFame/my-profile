import type { NextConfig } from "next";

// Repo name on GitHub — the site is served at https://<user>.github.io/my-profile
const basePath = "/my-profile";

const nextConfig: NextConfig = {
  output: "export",              // emits plain HTML/CSS/JS into ./out
  images: { unoptimized: true }, // GitHub Pages can't run the image optimizer
  basePath,
  env: {
    // for plain <a href> links that basePath doesn't rewrite automatically
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/my-project',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

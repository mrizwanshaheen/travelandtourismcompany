import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/travelandtourismcompany",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

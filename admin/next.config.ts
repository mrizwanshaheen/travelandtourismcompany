import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/travelandtourismcompany/admin",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Uncomment for GitHub Pages static export if needed. 
  // However, Vercel supports standard build nicely.
  // For 'localhost' and Vercel, standard is fine.
  images: {
    unoptimized: true, // Required for static export (GitHub Pages) if using next/image
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
};

export default nextConfig;

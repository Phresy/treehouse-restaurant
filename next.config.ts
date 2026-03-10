import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'googleusercontent.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
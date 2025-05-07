import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["framerusercontent.com"], // Add the domain here
  },
};

export default nextConfig;

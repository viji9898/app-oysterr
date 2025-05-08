import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["framerusercontent.com", "metana.io"], // Add the domain here
  },
  // Add source map configuration
  productionBrowserSourceMaps: true,
  webpack: (config, { dev }) => {
    // Enable source maps in development
    if (dev) {
      config.devtool = "source-map";
    }
    return config;
  },
};

export default nextConfig;

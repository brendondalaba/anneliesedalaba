import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static export for GitHub Pages
  trailingSlash: true,  // Add trailing slashes for better static hosting compatibility
  images: {
    unoptimized: true,  // Disable image optimization for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "d3e54v103j8qbb.cloudfront.net",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;

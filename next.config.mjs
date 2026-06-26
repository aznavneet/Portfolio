/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app"
      },
      {
        protocol: "https",
        hostname: "github.com"
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com"
      }
    ]
  }
};

export default nextConfig;

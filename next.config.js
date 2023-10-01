/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;

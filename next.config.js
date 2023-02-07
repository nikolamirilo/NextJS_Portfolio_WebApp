/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "venturebeat.com",
      },
    ],
  },
};

module.exports = nextConfig;

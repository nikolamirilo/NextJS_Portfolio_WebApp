/** @type {import('next').NextConfig} */

const nextConfig = {
  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
  images: {
    remotePatterns: [
      { hostname: "images.credly.com" },
      { hostname: "th.bing.com" },
      { hostname: "www.lexpressproperty.com" },
    ],
  },
};

export default nextConfig;

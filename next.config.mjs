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
  env: {
    MONGODB_URI:
      "mongodb+srv://nikolamirilo:veslanje123@cluster0.6kvwzdu.mongodb.net/?retryWrites=true&w=majority",
  },
};

export default nextConfig;

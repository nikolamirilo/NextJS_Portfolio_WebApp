/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
  env: {
    MONGODB_URI: "mongodb+srv://nikolamirilo:veslanje123@cluster0.6kvwzdu.mongodb.net/?retryWrites=true&w=majority",
    WEB_APP_URL: "https://mirilo-nikola.netlify.app",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lp-cms-production.imgix.net",
      },
      {
        protocol: "https",
        hostname: "cdn.britannica.com",
      },
      {
        protocol: "https",
        hostname: "www.logixshapers.com",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
  env: {
    MONGODB_URI: "mongodb+srv://nikolamirilo:veslanje123@cluster0.6kvwzdu.mongodb.net/?retryWrites=true&w=majority",
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/", query: { __nextDefaultLocale: "en" } },
      "/about": { page: "/about", query: { __nextDefaultLocale: "en" } },
      "/contact": { page: "/contact", query: { __nextDefaultLocale: "en" } },
      "/projects/[id]": { page: "/projects/[id]", query: { __nextDefaultLocale: "en" } },
    };
  },
};

export default nextConfig;

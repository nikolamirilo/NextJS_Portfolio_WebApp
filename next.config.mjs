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
      { hostname: "beautybyclaire.rs" },
      { hostname: "instagram.fbeg2-1.fna.fbcdn.net" },
      { hostname: "www.ultra-tim-s.com" },
      { hostname: "is4-ssl.mzstatic.com" },
      { hostname: "webuyindubai.com" },
    ],
  },
};

export default nextConfig;

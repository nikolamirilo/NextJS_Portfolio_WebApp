// import { customWebpackConfig } from "./webpack.config";
/** @type {import('next').NextConfig} */

const nextConfig = {
  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
  env: {
    MONGODB_URI:
      "mongodb+srv://nikolamirilo:veslanje123@cluster0.6kvwzdu.mongodb.net/?retryWrites=true&w=majority",
    WEB_APP_URL: "https://mirilo-nikola.netlify.app/",
    // WEB_APP_URL: "http://localhost:3000",
  },
};

export default nextConfig;

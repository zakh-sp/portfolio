import type { NextConfig } from "next";

const repoName = "portfolio";
const isProd = process.env.NODE_ENV === "production";

const lessLoader = {
  loader: "less-loader",
  options: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
};

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "/",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : "",
  },
  turbopack: {
    rules: {
      "*.module.less": {
        loaders: [lessLoader],
        as: "*.module.css",
      },
      "*.less": {
        condition: { not: { path: /\.module\.less$/ } },
        loaders: [lessLoader],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const repoName = "portfolio";

const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? `/${repoName}` : "",
    assetPrefix: process.env.NODE_ENV === 'production' ? `/${repoName}/` : "/",
    turbopack: {
        rules: {
            "*.less": {
                loaders: [
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
                as: "*.css",
            },
        },
    },
};

export default nextConfig;

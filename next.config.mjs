/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: false,
    },
    turbopack: {
        rules: {
            "*.svg": {
                loaders: ["@svgr/webpack"],
                as: "*.js",
            },
        },
    },
};

export default nextConfig;

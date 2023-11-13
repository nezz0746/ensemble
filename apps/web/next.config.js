/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["wagmi-config"],
  webpack: (config) => {
    config.externals.push("pino-pretty");
    return config;
  },
};

module.exports = nextConfig;

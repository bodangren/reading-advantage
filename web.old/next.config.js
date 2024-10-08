/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-international", "international-types"],
  reactStrictMode: false,
  swcMinify: false,
  // eslint: {
  //     ignoreDuringBuilds: true,
  // },
  // typescript: {
  //     ignoreBuildErrors: true,
  // },
  // Uncomment to set base path
  // basePath: '/base',
  // Uncomment to use Static Export
  // output: 'export',
  images: {
    domains: [
      "storage.googleapis.com",
      "lh3.googleusercontent.com",
      "lh4.googleusercontent.com",
      "lh5.googleusercontent.com",
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // future: {
  //     webpack5: true,
  // },
};

module.exports = nextConfig;

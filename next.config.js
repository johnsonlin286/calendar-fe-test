/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ENVIROMENT: process.env.ENVIROMENT,
  },
};

module.exports = nextConfig;

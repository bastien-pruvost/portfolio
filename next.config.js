/** @type {import('next').NextConfig} */

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    // typedRoutes: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig

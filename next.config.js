/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const withBundleAnalyzer = require('@next/bundle-analyzer')

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    appDir: true,
    optimizeCss: true,
    typedRoutes: true,
  },
  redirects() {
    return [{ source: '/', destination: '/profile', permanent: true }]
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig

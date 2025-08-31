/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lottie-react']
  },
  images: {
    domains: ['acquire.com'],
    unoptimized: true
  },
  async rewrites() {
    return [
      {
        source: '/assets/:path*',
        destination: '/assets/:path*'
      }
    ]
  }
}

module.exports = nextConfig
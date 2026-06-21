/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@openmf/core'],
  devIndicators: false,
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/static-micro-apps/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@micro-frontend/platform-sdk'],
  devIndicators: false,
  images: {
    unoptimized: true,
  },
}

export default nextConfig

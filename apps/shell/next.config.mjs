/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@openmf/core'],
  devIndicators: false,
  images: {
    unoptimized: true,
  },
}

export default nextConfig

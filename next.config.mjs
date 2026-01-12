/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Project-Portfolio',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

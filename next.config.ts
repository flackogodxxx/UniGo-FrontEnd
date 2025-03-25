/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV === 'development'
  }
};

export default nextConfig;

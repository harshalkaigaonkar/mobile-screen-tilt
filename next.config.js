/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.loom.com', 'quriverse.com']
  },
}

module.exports = nextConfig

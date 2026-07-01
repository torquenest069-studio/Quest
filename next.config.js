/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // For better Lighthouse during export if needed, or stick to default for production
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com', 
      'randomuser.me', 
      'via.placeholder.com'
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Optimize output
  compress: true,
  poweredByHeader: false,
  // Internationalization
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_NAME: 'Tronraft Africa Limited',
  },
  // Configure webpack if needed
  webpack(config) {
    return config;
  },
};

module.exports = nextConfig;

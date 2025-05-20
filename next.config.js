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
  // Configure webpack properly for CSS
  webpack: (config) => {
    // Fix for CSS modules
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use));

    // Remove generator with filename property
    rules.forEach((rule) => {
      if (rule.use && Array.isArray(rule.use)) {
        rule.use.forEach((moduleLoader) => {
          if (moduleLoader.loader && moduleLoader.loader.includes('css-loader') && 
              moduleLoader.options && moduleLoader.options.modules) {
            delete moduleLoader.options.modules.generator;
          }
        });
      }
    });

    return config;
  },
};

module.exports = nextConfig;

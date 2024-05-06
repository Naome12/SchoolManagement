/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      domains: ['images.unsplash.com'],
    },
    experimental: {
        clientRouterFilter: false,
      },
  };


export default nextConfig;

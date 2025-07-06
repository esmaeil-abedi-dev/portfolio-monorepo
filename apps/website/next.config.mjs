/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@esmaeilabedi/ui", "@esmaeilabedi/types"],
  experimental: {
    serverComponentsExternalPackages: ["@esmaeilabedi/database"],
  },
  images: {
    domains: ['images.unsplash.com', 'picsum.photos', 'via.placeholder.com'],
  },
};

export default nextConfig;

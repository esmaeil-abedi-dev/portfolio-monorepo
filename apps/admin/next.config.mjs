/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@esmaeilabedi/ui", "@esmaeilabedi/types"],
  serverExternalPackages: ["@esmaeilabedi/database"],
  images: {
    domains: ['images.unsplash.com', 'picsum.photos', 'via.placeholder.com'],
  },
};

export default nextConfig;

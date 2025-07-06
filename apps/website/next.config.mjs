/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@esmaeilabedi/ui", "@esmaeilabedi/types"],
  images: {
    domains: ['images.unsplash.com', 'picsum.photos', 'via.placeholder.com'],
  },
};

export default nextConfig;

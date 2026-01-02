/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.ctfassets.net" },
      { protocol: "https", hostname: "cdn.sanity.io" }
    ],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;

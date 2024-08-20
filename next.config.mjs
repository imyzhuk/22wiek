/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ytimg.com',
          },
          {
            protocol: 'https',
            hostname: 'cdn21vek.by',
          },
        ],
    },
};

export default nextConfig;

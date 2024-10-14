/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'hyperhire.in',
            port: '',
            search: '',
          },
        ],
      },
};

export default nextConfig;

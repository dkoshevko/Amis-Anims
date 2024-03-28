/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'amis-anims.fr',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;

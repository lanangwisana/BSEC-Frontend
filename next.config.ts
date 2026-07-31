import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
    return [
      {
        source: '/',
        destination: '/bsec-landingpage',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/kits/getting-started/:path*",
        destination: "/kits/mvp/:path*",
        permanent: true,
      },
      {
        source: "/kits/intermediate/:path*",
        destination: "/kits/cvp/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["vectorlab.in", "i.pinimg.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vectorlab.in",
        pathname: "/images/Vector.png",
      },
      // You can add more remotePatterns if needed
    ],
  },
};

export default nextConfig;

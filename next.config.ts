import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "vectorlab.in",
      "i.pinimg.com",
      "dor5tbfyod.ufs.sh",
      "cdn.sanity.io",
      "ycbvuadlnh.ufs.sh",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vectorlab.in",
        pathname: "/images/Vector.png",
      },
      {
        protocol: "https",
        hostname: "ycbvuadlnh.ufs.sh",
      },
      // You can add more remotePatterns if needed
    ],
  },
};

export default nextConfig;

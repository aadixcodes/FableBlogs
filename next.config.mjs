/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // 👈 allows all external URLs, no domain config needed
  },
};

export default nextConfig;

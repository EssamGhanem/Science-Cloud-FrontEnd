/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:false,
  images: {

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', 
        pathname: '/df1wfblbw/**', 
      }
    ]
  },
};


export default nextConfig;

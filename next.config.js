/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, 
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              port: '',
              pathname: '/ibcf/**',  // Replace "your-cloud-name" with your Cloudinary cloud name
            },
          ],
    },
}

module.exports = nextConfig

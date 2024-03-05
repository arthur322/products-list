/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Testing product images
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'down-br.img.susercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'griffecompany.com.br',
        port: '',
      },
    ],
  },
}

export default nextConfig

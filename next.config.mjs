/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Увімкнення строгого режиму React
  images: {
    formats: ['image/webp'],
    domains: [
      
      'shoping-tdfr.vercel.app', // Ваш основний домен
      //'cdn.example.com',         // Приклад CDN, якщо використовується
      //'images.unsplash.com',     // Інший приклад зовнішнього домену

    ],
  },
};

export default nextConfig;

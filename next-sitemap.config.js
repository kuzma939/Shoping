module.exports = {
    siteUrl: 'https://shoping-tdfr.vercel.app/', // Ваш основний домен
    generateRobotsTxt: true,                    // Генерація robots.txt
    sitemapSize: 5000,                          // Максимальна кількість URL
    additionalPaths: async (config) => {
      return [
        {
          loc: '/contact',                      // Шлях до сторінки
          lastmod: new Date().toISOString(),    // Дата останньої модифікації
        },
      ];
    },
  };
  
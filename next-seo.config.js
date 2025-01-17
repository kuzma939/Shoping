const seoConfig = { 
  contact: {
    title: "Контакти | Магазин жіночого одягу",
    description: "Контактна сторінка для запитів та зв'язку.",
    openGraph: {
      url: "https://shoping-tdfr.vercel.app/contact",
      title: "Контакти | Магазин жіночого одягу",
      description: "Отримайте контактну інформацію для вашого запиту.",
      type: "website",
      images: [
        { 
          url: "https://shoping-tdfr.vercel.app/images/contact-preview.jpg" 
        }
      ]
    },
    canonical: "https://shoping-tdfr.vercel.app/contact",
    robots: "index, follow"
  },

  offers: {
    title: "Спеціальні пропозиції | Магазин жіночого одягу",
    description: "Спеціальні пропозиції та акції для покупців.",
    openGraph: {
      url: "https://yourdomain.com/offers",
      title: "Спеціальні пропозиції | Магазин жіночого одягу",
      description: "Дізнайтеся про наші акції та спеціальні знижки.",
      images: [
        { 
          url: "https://yourdomain.com/preview-offers-image.jpg" 
        }
      ]
    },
    canonical: "https://yourdomain.com/offers",
    robots: "index, follow"
  },

  topProducts: {
    title: "Топ продукти | Магазин жіночого одягу",
    description: "Дивіться наші найкращі товари та популярні колекції.",
    openGraph: {
      url: "https://yourdomain.com/top-products",
      title: "Топ продукти | Магазин жіночого одягу",
      description: "Наші найкращі товари для стильних образів.",
      images: [
        { 
          url: "https://yourdomain.com/preview-top-products-image.jpg" 
        }
      ]
    },
    canonical: "https://yourdomain.com/top-products",
    robots: "index, follow"
  },

  conditions: {
    title: "Умови користування | Магазин жіночого одягу",
    description: "Перегляньте наші умови користування та політику конфіденційності.",
    openGraph: {
      url: "https://yourdomain.com/conditions",
      title: "Умови користування | Магазин жіночого одягу",
      description: "Важлива інформація щодо умов користування сервісом.",
      images: [
        { 
          url: "https://yourdomain.com/preview-conditions-image.jpg" 
        }
      ]
    },
    canonical: "https://yourdomain.com/conditions",
    robots: "index, follow"
  },

  allProducts: {
    title: "Всі товари | Магазин жіночого одягу",
    description: "Перегляньте всі доступні товари нашого магазину.",
    openGraph: {
      url: "https://yourdomain.com/all-products",
      title: "Всі товари | Магазин жіночого одягу",
      description: "Дізнайтеся більше про наші колекції жіночого одягу.",
      images: [
        { 
          url: "https://yourdomain.com/preview-all-products-image.jpg" 
        }
      ]
    },
    canonical: "https://yourdomain.com/all-products",
    robots: "index, follow"
  }
};

export default seoConfig;

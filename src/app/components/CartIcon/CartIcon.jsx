"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useLanguage } from "../../Functions/useLanguage"; // Імпорт хука для мови

export default function CartIcon() {
  const [cartCount, setCartCount] = useState(0);
  const { language } = useLanguage(); // Отримуємо поточну мову

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const sessionId = localStorage.getItem("sessionId");
        if (!sessionId) {
          console.error("SessionId не знайдено");
          return;
        }

        const userId = localStorage.getItem("userId");
        const res = await fetch(
          `/api/cart?userId=${userId || ""}&sessionId=${sessionId}&lang=${language}`
        );
        const data = await res.json();

        if (res.ok) {
          // Підраховуємо загальну кількість товарів
          const totalCount = data.cart.reduce((sum, item) => sum + item.quantity, 0);
          setCartCount(totalCount);
        } else {
          console.error("Помилка у відповіді API:", data.message);
        }
      } catch (error) {
        console.error("Помилка завантаження кількості товарів:", error);
      }
    };

    fetchCartCount();
  }, [language]); // Виконується при зміні мови

  return (
    <li className="relative p-1 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg" role="menuitem">
      <Link href="/Cart" aria-label="View your cart">
        <FaShoppingCart size={16} />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>
    </li>
  );
}

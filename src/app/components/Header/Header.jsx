
"use client";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaMoon, FaSun, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { useHeaderState } from "../../hooks/useHeader";
import { useLanguage } from "../../Functions/useLanguage";
import CartIcon from "../CartIcon/CartIcon";
import AuthPopup from "../AuthPopup/AuthPopup"; // Імпортуємо модальне вікно

const Header = React.memo(({ isDarkMode, toggleDarkMode }) => {
  const { translateList, language, setLanguage } = useLanguage();
  const menuItems = translateList("home", "header"); // Повертаємо до попереднього стану
  const { isMenuOpen, toggleMenu, closeMenu } = useHeaderState();
  const router = useRouter();

  // Стан авторизації та модального вікна
  const [isAuth, setIsAuth] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setIsAuth(!!token);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsAuth(false);
    router.push("/");
  };

  return (
    <header
      className={` top-0 left-0 w-full flex items-center justify-between px-4 py-2 shadow-md z-50
      ${isDarkMode ? "bg-black text-white shadow-gray-800" : "bg-white text-black shadow-gray-300"}`}
      role="banner"
    >
      {/* Логотип */}
      <div className="flex-shrink-0 ml-0 sm:ml-8">
        <Head>
          <link rel="preload" as="image" href="/light-logo.avif" type="image/avif" media="(max-width: 480px)" />
        </Head>
        <Link href="/" aria-label="Home">
          <h1 className="sr-only">Latore Atelier</h1>
          <Image
            src="/light-logo.avif"
            alt="Latore Atelier Logo – High-Quality Clothing"
            width={128}
            height={69}
            quality={90}
            sizes="(max-width: 480px) 50px, (max-width: 768px) 80px, (max-width: 1200px) 100px, 128px"
            className={`w-16 h-auto sm:w-24 md:w-32 lg:w-40 ${isDarkMode ? "filter invert" : ""}`}
            priority
          />
        </Link>
      </div>

      {/* Навігація */}
      <nav aria-label="Main Navigation" className="flex items-center space-x-4 lg:space-x-6">
        <button
          onClick={toggleMenu}
          aria-label="Open Menu"
          aria-expanded={isMenuOpen ? "true" : "false"}
          className="lg:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <FaBars className="sm:xl md:text-2xl lg:text-3xl" />
        </button>

        <ul className="hidden lg:flex space-x-4 text-xs sm:text-sm md:text-base lg:text-lg" role="menubar">
          <li className="min-w-[80px] text-center" role="menuitem">
            <Link href="/" aria-label={`Go to ${menuItems[0]} page`}>
              {menuItems[0]}
            </Link>
          </li>
          <li className="min-w-[80px] text-center" role="menuitem">
            <Link href="/All-products" aria-label={`Go to ${menuItems[1]} page`}>
              {menuItems[1]}
            </Link>
          </li>
          <li className="min-w-[80px] text-center" role="menuitem">
            <Link href="/#about" aria-label={`Learn more ${menuItems[2]}`}>
              {menuItems[2]}
            </Link>
          </li>
          <li className="min-w-[80px] text-center" role="menuitem">
            <Link href="/contact" aria-label={`Go to ${menuItems[3]} page`}>
              {menuItems[3]}
            </Link>
          </li>
          <li className="min-w-[80px] text-center" role="menuitem">
            <Link href="/Conditions" aria-label={`View ${menuItems[4]}`}>
              {menuItems[4]}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Панель іконок */}
      <div className="hidden lg:flex items-center space-x-4">
        <ul className="flex space-x-4">
          {/* Іконка профілю */}
          <li role="menuitem">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300"
              aria-label={isAuth ? "Особистий кабінет" : "Вхід/Реєстрація"}
            >
              <FaUser size={16} />
            </button>
          </li>

          {/* Іконка кошика */}
          <CartIcon />
        </ul>

        {/* Перемикач мови */}
        <button
          onClick={() => setLanguage(language === "EN" ? "FR" : language === "FR" ? "UA" : "EN")}
          aria-label="Toggle Language"
          className="p-1 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300"
        >
          {language === "EN" ? "🇬🇧 EN" : language === "FR" ? "🇫🇷 FR" : "🇺🇦 UA"}
        </button>

        {/* Перемикач теми */}
        <button
          onClick={() => toggleDarkMode(!isDarkMode)}
          aria-label="Toggle Dark Mode"
          className="p-1 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Модальне вікно для входу/виходу */}
      <AuthPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} isAuth={isAuth} handleLogout={handleLogout} />

      {/* Мобільне меню */}
      {isMenuOpen && (
        <nav
          className={`fixed top-0 left-0 h-full w-1/2 sm:w-1/3 bg-white dark:bg-black shadow-lg z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
          aria-label="Mobile Menu"
        >
          <button onClick={closeMenu} aria-label="Close Menu" className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-gray-500">
            <FaTimes />
          </button>
          <div className="flex items-center justify-start space-x-4 px-6 py-4 border-b border-gray-300 dark:border-gray-600">
            <button
              onClick={() => setLanguage(language === "EN" ? "FR" : language === "FR" ? "UA" : "EN")}
              aria-label="Toggle Language"
              className="p-1 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300"
            >
              {language === "EN" ? "🇬🇧 EN" : language === "FR" ? "🇫🇷 FR" : "🇺🇦 UA"}
            </button>
            <button
              onClick={() => toggleDarkMode(!isDarkMode)}
              aria-label="Toggle Dark Mode"
              className="p-1 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            <ul className="flex space-x-4">
          {/* Іконка профілю */}
          <li role="menuitem">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300"
              aria-label={isAuth ? "Особистий кабінет" : "Вхід/Реєстрація"}
            >
              <FaUser size={16} />
            </button>
          </li>

          {/* Іконка кошика */}
          <CartIcon />
        </ul>
          </div>
          <ul className="flex flex-col items-start space-y-4 p-6 text-xs sm:text-sm md:text-base lg:text-lg" role="menubar">
            <li className="text-center" role="menuitem"><Link href="/">{menuItems[0]}</Link></li>
            <li className="text-center" role="menuitem"><Link href="/All-products">{menuItems[1]}</Link></li>
            <li className="text-center" role="menuitem"><Link href="/#about">{menuItems[2]}</Link></li>
            <li className="text-center" role="menuitem"><Link href="/contact">{menuItems[3]}</Link></li>
            <li className="text-center" role="menuitem"><Link href="/Conditions">{menuItems[4]}</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
});

Header.displayName = "Header";

export default Header;

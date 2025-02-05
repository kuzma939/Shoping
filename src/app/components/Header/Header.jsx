"use client"; 
import Head from "next/head";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMoon, FaSun, FaBars, FaTimes, FaUser, FaShoppingCart } from "react-icons/fa";
import { useHeaderState } from "../../hooks/useHeader"; 
import { useLanguage } from "../../Functions/useLanguage"; 


const Header = React.memo(({ isDarkMode, toggleDarkMode }) => {
  const { translateList, language, setLanguage } = useLanguage();
  const menuItems = translateList("home", "header");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "EN" ? "FR" : prevLanguage === "FR" ? "UA" : "EN"
    );
  };

  const { isMenuOpen, toggleMenu, closeMenu } = useHeaderState();
 
  return (
    <header className={`flex items-center justify-between px-4 py-1 shadow-md
   ${isDarkMode ? "bg-black text-white shadow-gray-800" : "bg-white text-black shadow-gray-300"}`} role="banner">
      <div className="flex-shrink-0 ml-0 sm:ml-8">
      <Head>
  {/* Попереднє завантаження зображення */}
  <link rel="preload" as="image" href="/light-logo.avif" type="image/avif" media="(max-width: 480px)"/>
</Head>
<Link href="/" aria-label="Home">
  <h1 className="sr-only">Latore Atelier</h1>
  <Image
    src="/light-logo.avif"
    alt="Latore Atelier Logo – High-Quality Clothing"
    layout="intrinsic"
    width={128} // Зберігає співвідношення ширини
    height={69} // Зберігає співвідношення висоти
    quality={90}
    sizes="(max-width: 480px) 50px, (max-width: 768px) 80px, (max-width: 1200px) 100px, 128px"
    className={`w-16 h-auto sm:w-24 md:w-32 lg:w-40 ${
    isDarkMode ? "filter invert" : ""
  }`}
    priority
  />
</Link>
      </div>
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

      <div className="hidden lg:flex items-center space-x-2">
        <ul>
        <li className="p-1 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg" role="menuitem">
    <Link href="/Register" aria-label={`View terms and conditions on the  page`}>
    <FaUser  className="h-5 w-5 text-gray-500" />
    </Link>
  </li>
  <li className="p-1 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg" role="menuitem">
    <Link href="/Cart" aria-label={`View terms and conditions on the  page`}>
   
    <FaShoppingCart size={24} style={{ color: 'blec' }} />
    </Link>
  </li>
        </ul>
        <button
          onClick={toggleLanguage}
          aria-label="Toggle Language"
          className="p-1 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg flex items-center justify-center"
        >
          {language === "EN" ? "🇬🇧 EN" : language === "FR" ? "🇫🇷 FR" : "🇺🇦 UA"}
        </button>
        <button
          onClick={() => toggleDarkMode(!isDarkMode)}
          aria-label="Toggle Dark Mode"
          className="p-1 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
        >
          {isDarkMode ? (
            <FaSun className="text-xs sm:text-sm md:text-base lg:text-lg" />
          ) : (
            <FaMoon className="text-xs sm:text-sm md:text-base lg:text-lg" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          aria-hidden="true"
          onClick={closeMenu}
          role="presentation"
        ></div>
      )}
      <nav
        className={`${isMenuOpen ? "translate-x-0" : "-translate-x-full"} fixed top-0 left-0 h-full w-1/2 sm:w-1/3 bg-white dark:bg-black shadow-lg z-50 transition-transform duration-300 ease-in-out lg:hidden`}
        aria-label="Mobile Menu"
      >
     
        <button
          onClick={closeMenu}
          aria-label="Close Menu"
          className="absolute top-4 right-4 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 hover:text-gray-500"
        >
          <FaTimes />
        </button>
        <div className="flex items-center justify-start space-x-4 px-6 py-4 border-b border-gray-300 dark:border-gray-600">
          <button
            onClick={toggleLanguage}
           // aria-label="Toggle Language"
            aria-label={`Switch language, current language is ${language}`}
            className="p-1 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg flex items-center justify-center"
          >
            {language === "EN" ? "🇬🇧 EN" : language === "FR" ? "🇫🇷 FR" : "🇺🇦 UA"}
          </button>
          <button
            onClick={() => toggleDarkMode(!isDarkMode)}
            aria-label="Toggle Dark Mode"
            className="p-1 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
          >
            {isDarkMode ? (
              <FaSun className="text-xs sm:text-sm md:text-base lg:text-lg" />
            ) : (
              <FaMoon className="text-xs sm:text-sm md:text-base lg:text-lg" />
            )}
          </button>
          <ul>
        <li className="text-center" role="menuitem">
    <Link href="/Register" aria-label={`View terms and conditions on the  page`}>
    <FaUser  className="h-5 w-5 text-gray-500" />
    </Link>
  </li>
        </ul>
        </div>
        <ul className="flex flex-col items-start space-y-4 p-6 text-xs sm:text-sm md:text-base lg:text-lg" role="menubar">
  <li className="text-center" role="menuitem">
    <Link href="/" aria-label={`Navigate to ${menuItems[0]} page`}>
      {menuItems[0]}
    </Link>
  </li>
  <li className="text-center" role="menuitem">
    <Link href="/All-products" aria-label={`Navigate to ${menuItems[1]} page`}>
      {menuItems[1]}
    </Link>
  </li>
  <li className="text-center" role="menuitem">
    <Link href="/#about" aria-label={`Learn more about ${menuItems[2]}`}>
      {menuItems[2]}
    </Link>
  </li>
  <li className="text-center" role="menuitem">
    <Link href="/contact" aria-label={`Navigate to ${menuItems[3]} page`}>
      {menuItems[3]}
    </Link>
  </li>
  <li className="text-center" role="menuitem">
    <Link href="/Conditions" aria-label={`View terms and conditions on the ${menuItems[4]} page`}>
      {menuItems[4]}
    </Link>
  </li>

</ul>
      </nav>
    </header>
  );
});

Header.displayName = "Header";

export default Header;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "../../Functions/useLanguage";

const Header = React.memo(({ isDarkMode, setIsDarkMode }) => {
  const { language, setLanguage, translateList } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = translateList("home", "header") || [];

  const toggleLanguage = () => {
    const newLanguage = language === "EN" ? "FR" : "EN";
    setLanguage(newLanguage);
    localStorage.setItem("appLanguage", newLanguage);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`section-container flex items-center justify-between px-4 py-4 shadow-md ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Гамбургер-меню */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Лого */}
      <div className="lg:w-1/3 text-left">
        <Image
          src="/light-logo.avif"
          alt="Latore Atelier Logo"
          width={130}
          height={120}
          className={isDarkMode ? "filter invert" : ""}
        />
      </div>

      {/* Центрована навігація */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white dark:bg-black lg:static lg:block lg:w-1/3 lg:flex lg:justify-center`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-6 items-center">
          {menuItems.map((item, index) => (
            <li key={index} className="py-2 lg:py-0">
              <a
                href={item.path || `#${item.id}`}
                className="block text-lg hover:text-gray-500 dark:hover:text-gray-300"
              >
                {item.label || item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Темна тема і перемикач мови */}
      <div className="flex items-center space-x-4 lg:w-1/3 lg:justify-end">
        <button
          onClick={toggleLanguage}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300"
        >
          {language === "EN" ? "🇬🇧 EN" : "🇫🇷 FR"}
        </button>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
});

export default Header;

import Image from "next/image";
import { FaMoon, FaSun } from "react-icons/fa";
import { useLanguage } from "../../Functions/useLanguage"; // Import the custom hook

export default function Header({ isDarkMode, setIsDarkMode }) {
    console.log("Header is rendering");
  const { language, setLanguage, translateList } = useLanguage(); // Use the hook

  // Get translated menu items for the header
  const menuItems = translateList("home", "header");

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "FR" : "EN");
  };

  return (
    <header
      className={`flex items-center justify-between px-4 py-4 shadow-md ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center ml-10">
     
        <Image
          src="" // Replace with your logo path
          alt="Latore Atelier Logo"
          width={130}
          height={120}
          className={isDarkMode ? "filter invert" : ""} // Invert logo for dark mode
        />
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-6">
        {menuItems.map((item, index) => (
          <a key={index} href="#" className="hover:opacity-80">
            {item}
          </a>
        ))}
      </nav>

      {/* Theme & Language Toggle */}
      <div className="flex items-center space-x-4">
      <button
          onClick={toggleLanguage}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
        >
          {language === "EN" ? "🇬🇧 EN" : "🇫🇷 FR"}
        </button>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

      </div>
    </header>
  );
}

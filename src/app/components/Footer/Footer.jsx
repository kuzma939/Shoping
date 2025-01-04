
import { FaFacebook, FaInstagram, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { useLanguage } from "../../Functions/useLanguage"; 

export default function Footer() {
  const {  translateList } = useLanguage(); 
  
  const menuItems = translateList("home", "about");
  return (
    <footer className="bg-black text-white section-container">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold mb-8 text-left px-4 sm:px-6">Latore Atelier</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t border-gray-300">
          <div className="border-b sm:border-b-0 md:border-r border-gray-300 px-4 sm:px-6 py-6">
            <p className="text-sm mb-2">
              <a href="tel:1234567890" className="hover:underline">
                123-456-78999
              </a>
            </p>
            <p className="text-sm">
              <a href="mailto:info@mysite.com" className="hover:underline">
                info@mysite.com
              </a>
            </p>
          </div>
          <div className="border-b sm:border-b-0 md:border-r border-gray-300 px-4 sm:px-6 py-6">
            <p className="text-sm">
            Poltavskyi Shliakh St, 144 А<br />
            Torhovyy Tsentr "Kyyivsʹkyy"
            </p>
          </div>
          <div className="flex justify-start sm:justify-end md:justify-center items-center space-x-4 px-4 sm:px-6 py-6">
            <a href="https://www.facebook.com/share/18h6VtZV6k/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6 text-white hover:text-gray-400" />
            </a>
            <a href="https://www.instagram.com/latore.atelier?igsh=Y3RvbWZhZW12Zmxj" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 text-white hover:text-gray-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6 text-white hover:text-gray-400" />
            </a>
            <a href="https://telegram.me/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className="w-6 h-6 text-white hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

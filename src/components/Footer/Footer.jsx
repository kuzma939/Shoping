import { FaFacebook, FaInstagram, FaTwitter, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white section-container">
      <div className=" space-y-4">
        <h3 className="text-2xl font-bold mb-8">Latore Atelier</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
  
          <div className="border-r border-gray-300 px-6 py-6">
            <p className="text-sm mb-2">
              <a href="tel:1234567890" className="hover:underline">
                123-456-7890
              </a>
            </p>
            <p className="text-sm">
              <a href="mailto:info@mysite.com" className="hover:underline">
                info@mysite.com
              </a>
            </p>
          </div>
          <div className="border-r border-gray-300 px-6 py-6">
            <p className="text-sm">
              500 Terry Francine Street, 6th Floor, <br />
              San Francisco, CA 94158
            </p>
          </div>
          <div className="flex items-center space-x-4 px-6 py-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6 text-white hover:text-gray-700" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 text-white hover:text-gray-700" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6 text-white hover:text-gray-700" />
            </a>
            <a href="https://telegram.me/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className="w-6 h-6 text-white hover:text-gray-700" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

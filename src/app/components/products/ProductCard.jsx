import React from "react";
import { useLanguage } from '../../Functions/useLanguage'; // Adjust the import path if necessary

/**
 * Component to display a product card with an image, translated details, and basic information.
 * @param {Object} props - Properties passed to the component.
 * @param {Object} props.product - The product object containing details like name, image, price, size, and category.
 * @param {Function} props.onClick - Callback function triggered when the product card is clicked.
 */
const ProductCard = ({ product, onClick }) => {
  const { language } = useLanguage(); // Retrieve the current language using a custom hook.

  // Translate the product name based on the current language.
  const translatedName = product.translations?.[language]?.name || product.name;

  return (
    <div
      className="bg-[#fcfaf3c6]  dark:bg-[#0f172a] p-3 sm:p-4 rounded group cursor-pointer"
      onClick={onClick} // Handle the click event for the card.
    >
      {/* Container for the product image */}
      <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded relative">
      
        <img
          src={product.image || `https://via.placeholder.com/150?text=${translatedName}`}
          alt={translatedName} // Use the translated product name for the alt attribute.
          className="object-cover w-full h-full rounded transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        {/* Overlay effect that appears on hover */}
        <div className="absolute inset-0 bg-black dark:bg-[#0f172a] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded"></div>
      </div>

      {/* Container for product details */}
      <div className="mt-2 sm:mt-4">
        <h3 className="text-sm sm:text-lg font-medium">{translatedName}</h3>
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">Price: {product.price}₴</p>
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">Size: {product.size}</p>
        <p className="text-sm text-gray-700 dark:text-gray-400">Category: {product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;

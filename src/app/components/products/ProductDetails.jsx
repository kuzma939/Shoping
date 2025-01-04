import React from "react";
import { useLanguage } from '../../Functions/useLanguage';

/**
 * Component to display product details, including translated fields, if available.
 * The component does not render if the form is submitted or if no product data is provided.
 * @param {Object} props - Properties passed to the component.
 * @param {Object} props.productData - The data of the product to be displayed.
 * @param {boolean} props.formSubmitted - Flag indicating whether the form has been submitted.
 */
const ProductDetails = ({ productData, formSubmitted }) => {
  const { language } = useLanguage(); // Retrieve the current language using a custom hook.

  // Get the translated product name based on the current language, with fallback to default or placeholder.
  const translatedName = productData.translations?.[language]?.name || productData.name || "Unnamed Product";

  // Get the translated product description based on the current language, with fallback to default or placeholder.
  const translatedDescription = productData.translations?.[language]?.description || productData.description || "No Description";

  // Do not render the component if the form is submitted or if no product data is provided.
  if (formSubmitted || !productData) return null;

  return (
    <div className="  bg-[#e4d0b8] dark:bg-gray-900 text-gray-950 dark:text-white p-4 sm:p-6 rounded-lg shadow-lg">
      {/* Display the product name */}
      <h2 className="text-xl sm:text-2xl font-bold mb-2">
        Product: {translatedName}
      </h2>
      <p className="text-sm sm:text-base">Price: {productData.price}</p>
      <p className="text-sm sm:text-base">Color: {productData.color}</p>
      <p className="text-sm sm:text-base">Size: {productData.size}</p>
      <p className="text-sm sm:text-base">Quantity: {productData.quantity}</p>
      <p className="text-sm sm:text-base">SKU: {productData.sku}</p>
      <p className="text-sm sm:text-base">Description: {translatedDescription}</p>
    </div>
  );
};

export default ProductDetails;

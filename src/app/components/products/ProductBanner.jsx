import React, { useState, useEffect } from "react";
import Image from "next/image";
import InfoForm from "../../Functions/InfoForm";
import { useLanguage } from "../../Functions/useLanguage"; 

/**
 * Component to display a product banner with an image, translated details, and an info form.
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.selectedProduct - The currently selected product.
 * @param {Object} props.descriptionRef - A reference to the product description element.
 * @param {Function} props.handleContactButtonClick - Callback function triggered when the contact button is clicked.
 */
const ProductBanner = ({
  selectedProduct,
  descriptionRef,
  handleContactButtonClick,
}) => {
  const { language } = useLanguage(); // Retrieve the current language setting from the custom hook.

  // State to manage the currently displayed product image.
  const [currentImage, setCurrentImage] = useState(
    selectedProduct?.image || "/4.jpg"
  );

  // Translate the product name and description based on the current language.
  const translatedName =
    selectedProduct?.translations?.[language]?.name || selectedProduct?.name;
  const translatedDescription =
    selectedProduct?.translations?.[language]?.description ||
    selectedProduct?.description;

  // Effect to update the current image whenever the selected product changes.
  useEffect(() => {
    setCurrentImage(selectedProduct?.image || "/4.jpg");
  }, [selectedProduct]);

  /**
   * Handle thumbnail image click by updating the current image and cycling the images array.
   * @param {string} image - The image URL clicked by the user.
   */
  const handleThumbnailClick = (image) => {
    const updatedImages = selectedProduct.images.map((img) =>
      img === image ? currentImage : img
    );
    setCurrentImage(image);
  };

  return (
    <div
      ref={descriptionRef}
      className={`relative w-full bg-[#fcf8f3] dark:bg-black overflow-hidden rounded-lg mb-8 transition-all duration-300 ease-in-out ${
        selectedProduct ? "p-4" : "h-72 sm:h-96"
      }`}
    >
      {/* If no product is selected, show a placeholder image */}
      {!selectedProduct && (
        <Image
          src="/4.jpg"
          alt="Category Banner"
          layout="fill"
          objectFit="cover"
          className="object-cover shadow-lg transition-transform duration-300 ease-in-out"
        />
      )}
      {/* If a product is selected, display its details */}
      {selectedProduct && (
        <div className="relative flex flex-col sm:flex-row items-start">
          {/* Main product image section */}
          <div className="w-full relative h-42 sm:h-74">
            <Image
              src={currentImage}
              alt={translatedName} // Display the translated product name as the alt text.
              layout="responsive"
              width={800}
              height={600}
              className="object-cover rounded-lg"
            />
            {/* Display thumbnail images if more than one image is available */}
            {selectedProduct.images && selectedProduct.images.length > 1 && (
              <div className="flex mt-4 gap-2 justify-center">
                {selectedProduct.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${translatedName} thumbnail ${index + 1}`} // Display the translated product name in the alt text.
                    className={`w-12 h-12 object-cover border rounded cursor-pointer hover:scale-105 transition-transform ${
                      image === currentImage
                        ? "border-lime-500"
                        : "border-gray-500"
                    }`}
                    onClick={() => handleThumbnailClick(image)}
                  />
                ))}
              </div>
            )}
          </div>
          {/* Product information section */}
          <div className="w-full dark:bg-black bg-opacity-75 p-6 text:bg-black dark:text-white rounded-lg">
            <InfoForm
              product={{
                ...selectedProduct,
                name: translatedName, // Pass the translated product name.
                description: translatedDescription, // Pass the translated product description.
                image: currentImage,
              }}
              colors={selectedProduct.colors}
              sizes={selectedProduct.sizes}
              descriptionRef={descriptionRef}
              onContactClick={handleContactButtonClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductBanner;

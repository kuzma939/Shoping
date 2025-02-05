"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import InfoForm from "../../Functions/InfoForm";
import { useLanguage } from "../../Functions/useLanguage";
import ThumbnailCarousel from "../../components/ThumbnailCarousel/ThumbnailCarousel";

const ProductBanner = ({
  selectedProduct,
  descriptionRef,
  handleContactButtonClick,
}) => {
  const { language } = useLanguage();
  const [currentImage, setCurrentImage] = useState(selectedProduct?.image || "/4.jpg");
  const [isScrollable, setIsScrollable] = useState(false);

  const translatedName =
    selectedProduct?.translations?.[language]?.name || selectedProduct?.name;
  const translatedDescription =
    selectedProduct?.translations?.[language]?.description || selectedProduct?.description;

  useEffect(() => {
    setCurrentImage(selectedProduct?.image || "/4.jpg");
  }, [selectedProduct]);

  const handleAddToCart = async (product) => {
    if (!product?.id) {
      alert("Ідентифікатор продукту відсутній!");
      return;
    }
    try {
      const sessionId = localStorage.getItem("sessionId");
      const userId = localStorage.getItem("userId");
      const body = JSON.stringify({
        id: product.id,
        quantity: 1,
        userId: userId || null,
        sessionId: sessionId || null,
      });
  
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
  
      const data = await res.json();
      if (res.ok) {
        alert("Товар додано до корзини!");
      } else {
        alert(data.message || "Не вдалося додати до корзини.");
      }
    } catch (error) {
      console.error("Помилка:", error);
      alert("Сталася помилка при додаванні до корзини.");
    }
  };
  const handleImageClick = () => {
    setIsScrollable(!isScrollable);
  };
  
  return (
    <div
      ref={descriptionRef}
      className={`relative w-full bg-[#fcf8f3] dark:bg-black overflow-hidden rounded-lg mb-8 transition-all duration-300 ease-in-out ${
        selectedProduct ? "p-4" : "h-72 sm:h-96"
      }`}
    >
      {/* Забираємо непотрібний блок */}
      {!selectedProduct && (
        <div
          className={`relative w-full h-72 sm:h-96 ${
            isScrollable ? "overflow-scroll cursor-grab" : ""
          }`}
          style={{ position: "relative" }}
          onClick={handleImageClick}
        >
          <Image
            src="/4.jpg"
            alt="Category Banner"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            style={{
              objectFit: "cover", 
              objectPosition: "center 50%", 
            }}
            className="rounded-lg "
          />
        </div>
      )}

      {selectedProduct && (
        <div className="relative flex flex-col sm:flex-row items-start">
          <div className="w-full relative h-42 sm:h-74">
            <Image
              src={currentImage}
              alt={translatedName}
              width={800}
              height={600}
              style={{ objectFit: "cover" }} 
              className="rounded-lg"
            />
            <ThumbnailCarousel
              images={selectedProduct.images}
              onImageSelect={(image) => setCurrentImage(image)}
              visibleThumbnails={5}
            />
          </div>

          <div className="w-full dark:bg-black bg-opacity-75 p-6 text-bg-black dark:text-white rounded-lg">
            <InfoForm
              product={{
                ...selectedProduct,
                name: translatedName,
                description: translatedDescription,
                image: currentImage,
              }}
              colors={selectedProduct.colors}
              sizes={selectedProduct.sizes}
              descriptionRef={descriptionRef}
              onContactClick={handleContactButtonClick}
            />

            {/* Додаємо кнопку для корзини */}
            {selectedProduct?.id ? (
  <button
    onClick={() => handleAddToCart(selectedProduct)}
    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
  >
    Додати до корзини
  </button>
) : (
  <p className="text-red-500">Продукт недоступний для додавання.</p>
)}

          </div>
        </div>
      )}
    </div>
  );
};

export default ProductBanner;

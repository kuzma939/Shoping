"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { handleContactButtonClick } from "../utils/products";
import { useLanguage } from "./useLanguage";
import SizeChart from "../components/SizeChart/SizeChart"
export default function InfoForm({ product, showDiscount = false }) {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [colorError, setColorError] = useState("");
  const [sizeError, setSizeError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [showSizeChart, setShowSizeChart] = useState(false);
  const { language } = useLanguage();
  const translatedName = product.translations?.[language]?.name || product.name;
  const translatedDescription = product.translations?.[language]?.description || product.description;

  const handleContactClick = (e) => {
    e.preventDefault();
    let hasError = false;

    // Перевірка обраного кольору
    if (!selectedColor) {
      setColorError("Please select a color.");
      hasError = true;
    }
    // Перевірка обраного розміру
    if (!selectedSize) {
      setSizeError("Please select a size.");
      hasError = true;
    }
    // Перевірка кількості товару
    if (quantity <= 0) {
      setQuantityError("Please select a valid quantity.");
      hasError = true;
    }

    if (!hasError) {
      setColorError("");
      setSizeError("");
      setQuantityError("");
      handleContactButtonClick(router, product, selectedColor, selectedSize, quantity, language);
    }
  };

  const handleColorChange = (value) => {
    setSelectedColor(value);
    if (value) setColorError("");
  };

  const handleSizeChange = (value) => {
    setSelectedSize(value);
    if (value) setSizeError("");
  };

  const handleQuantityChange = (value) => {
    const validQuantity = Math.max(1, Number(value));
    setQuantity(validQuantity);
    if (validQuantity > 0) setQuantityError("");
  };

  return (
    <div className="flex flex-col px-4 md:px-0">
      <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-center md:text-left">
        {translatedName}
      </h1>
      <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base mb-2 text-center md:text-left">
        Category: <span className="font-semibold">{product.category || "Unknown Category"}</span>
      </p>
      <p className="text-gray-800 dark:text-gray-500 text-xs md:text-sm mb-4 text-center md:text-left">
        SKU: {product.sku}
      </p>

      {/* Ціна продукту */}
      <div className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
        {showDiscount && product.discountPrice ? (
          <>
            <span className="text-red-600">{product.discountPrice}₴</span>
            <span className="line-through text-gray-500 ml-4">{product.price}₴</span>
          </>
        ) : (
          <span>{product.price}₴</span>
        )}
      </div>

      {/* Color Selector */}
      <div className="mb-6 md:mb-8">
        <label htmlFor="color" className="block text-sm font-medium mb-2 text-center md:text-left">
          Color
        </label>
        <select
          id="color"
          value={selectedColor}
          onChange={(e) => handleColorChange(e.target.value)}
          className={`w-full md:w-1/2 p-2 border ${colorError ? "border-red-500" : "border-gray-300"} bg-[#f5e7da] rounded dark:bg-gray-800 dark:text-gray-300`}
        >
          <option value="">Select</option>
          {product.colors?.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
        {colorError && <p className="text-red-500 text-sm mt-2">{colorError}</p>}
      </div>

      {/* Size Selector */}
      <div className="mb-6 md:mb-8">
        <label htmlFor="size" className="block text-sm font-medium mb-2 text-center md:text-left">
          Size
        </label>
        <select
          id="size"
          value={selectedSize}
          onChange={(e) => handleSizeChange(e.target.value)}
          className={`w-full md:w-1/2 p-2 border ${sizeError ? "border-red-500" : "border-gray-300"} bg-[#f5e7da] rounded dark:bg-gray-800 dark:text-gray-300`}
        >
          <option value="">Select</option>
          {product.sizes?.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        {sizeError && <p className="text-red-500 text-sm mt-2">{sizeError}</p>}
      </div>

      {/* Quantity Selector */}
      <div className="mb-6 md:mb-8">
        <label htmlFor="quantity" className="block text-sm font-medium mb-2 text-center md:text-left">
          Quantity
        </label>
        <div className="flex items-center w-full md:w-1/4 bg-[#f5e7da] dark:bg-gray-700 rounded">
          <button
            type="button"
            onClick={() => handleQuantityChange(quantity - 1)}
            className="p-2 bg-[#f5e7da] dark:bg-gray-700 dark:text-white rounded-l dark:hover:bg-gray-600"
          >
            -
          </button>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => handleQuantityChange(e.target.value)}
            min="1"
            className={`w-full p-2 text-center ${quantityError ? "border-red-500" : ""}`}
          />
          <button
            type="button"
            onClick={() => handleQuantityChange(quantity + 1)}
            className="p-2 bg-[#f5e7da] dark:bg-gray-700 dark:text-white rounded-r dark:hover:bg-gray-600"
          >
            +
          </button>
        </div>
        {quantityError && <p className="text-red-500 text-sm mt-2">{quantityError}</p>}
      </div>

      {/* Contact Button */}
      <button
        onClick={handleContactClick}
        className="w-full md:w-1/2 bg-[#4a3825] hover:bg-[#2e1f14] text-white dark:bg-lime-500 dark:hover:bg-lime-600 dark:text-black font-semibold py-2 rounded transition duration-300"
      >
        Contact Us
      </button>

      <div className="mb-6 md:mb-2 mt-4">
  {/* Розмірна сітка */}
  <button
    onClick={() => setShowSizeChart(true)}
    className="text-xl text-black dark:text-white underline transition-colors duration-300 hover:text-blue-500 focus-visible:text-blue-500 dark:hover:text-blue-300 dark:focus-visible:text-blue-300 focus-visible:outline-none"
  >
    Розмірна сітка
  </button>

  {showSizeChart && <SizeChart onClose={() => setShowSizeChart(false)} />}
</div>

      {/* Product Info */}
      <div className="mt-10">
        <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white mb-4 text-center md:text-left">
          PRODUCT INFO
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base text-center md:text-left">
          {translatedDescription}
        </p>
      </div>
    </div>
  );
}


"use client";
// Компонент формы информации о продукте
// Принимает `product` для отображения информации о выбранном продукте 
// и `onContactClick` для обработки нажатия кнопки "Contact Us"
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { handleContactButtonClick } from "../utils/products"; // Імпорт функції
import { useLanguage } from './useLanguage'; // Adjust the import path as necessary

export default function InfoForm({ product }) {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { language } = useLanguage(); // Get the current language
 
  // Get the translated name based on the current language
  const translatedName = product.translations?.[language]?.name || product.name;
  // Get the translated description based on the current language
  const translatedDescription = product.translations?.[language]?.description || product.description;
  const handleContactClick = () => {
    handleContactButtonClick(router, product, selectedColor, selectedSize, quantity, language);
  };


  if (!product) {
    return <p className="text-gray-500">No product selected.</p>;
  }

  return (
    <div className="flex flex-col px-4 md:px-0">
      {/* Product Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text:bg-black dark:text-white mb-2 text-center md:text-left">
        {translatedName}
      </h1>
      <p className="text-gray-800 dark:text-gray-500 text-xs md:text-sm mb-4 text-center md:text-left">
        SKU: {product.sku}
      </p>
      <p className="text-xl md:text-2xl font-bold text:bg-black dark:text-white mb-4 text-center md:text-left">
        {product.price}₴
      </p>
      {/* Size Selector */}
<div className="mb-6 md:mb-8">
  <label
    htmlFor="size"
    className="block text-sm font-medium mb-2 text-center md:text-left"
  >
    Size
  </label>
  <select
    id="size"
    value={selectedSize}
    onChange={(e) => setSelectedSize(e.target.value)}
    className="w-full md:w-1/2 p-2 border bg-[#f5e7da] dark:border-gray-700 rounded dark:bg-gray-800 dark:text-gray-300"
  >
    <option value="">Select</option>
    {product.sizes?.map((size) => (
      <option key={size} value={size}>
        {size}
      </option>
    ))}
  </select>
</div>

{/* Color Selector */}
<div className="mb-6 md:mb-8 ">
  <label
    htmlFor="color"
    className="block text-sm font-medium mb-2 text-center md:text-left"
  >
    Color
  </label>
  <select
    id="color"
    value={selectedColor}
    onChange={(e) => setSelectedColor(e.target.value)}
    className="w-full md:w-1/2 p-2 border bg-[#f5e7da] dark:border-gray-700 rounded dark:bg-gray-800 dark:text-gray-300"
  >
    <option value="">Select</option>
    {product.colors?.map((color) => (
      <option key={color} value={color}>
        {color}
      </option>
    ))}
  </select>
</div>

{/* Quantity Selector */}
<div className="mb-6 md:mb-8">
        <label
          htmlFor="quantity"
          className="block text-sm font-medium mb-2 text-center md:text-left"
        >
          Quantity
        </label>
        <div className="flex items-center w-full md:w-1/4  bg-[#f5e7da] dark:bg-gray-700 dark:text-white rounded-l dark:hover:bg-gray-600  ">
          <button
            type="button"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="p-2 bg-[#f5e7da] dark:bg-gray-700 dark:text-white rounded-l dark:hover:bg-gray-600"
          >
            -
          </button>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            min="1"
            className="w-full p-2 border-t border-b border-gray-700 bg-gray-800 text-center text-gray-300"
          />
          <button
            type="button"
            onClick={() => setQuantity((prev) => prev + 1)}
            className="p-2 bg-[#f5e7da] dark:bg-gray-700 dark:text-white rounded-l dark:hover:bg-gray-600"
          >
            +
          </button>
        </div>
      </div>

      {/* Contact Button */}
      <button
        onClick={handleContactClick}
        className="w-full md:w-1/2 bg-[#4a3825] hover:bg-[#2e1f14] text-white dark:bg-lime-500 dark:hover:bg-lime-600 dark:text-black font-semibold py-2 rounded transition duration-300"
      >
        Contact Us
      </button>

      {/* Product Info */}
      <div className="mt-10">
        <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white mb-4 text-center md:text-left">
          PRODUCT INFO
        </h2>
        <p className="text:gray-500 dark:text-gray-400 text-sm md:text-base text-center md:text-left">
          {translatedDescription}
        </p>
      </div>
    </div>
  );
}

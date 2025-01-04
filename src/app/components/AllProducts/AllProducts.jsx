"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import FilterSidebar from "../../Functions/FilterSidebar";
import SortMenu from "../../Functions/SortMenu";
import ProductBanner from "../../components/products/ProductBanner";
import ProductCard from "../../components/products/ProductCard";
import {
  handleSizeSelect,
  handleCategorySelect,
  filterAndSortProducts,
  handleContactButtonClick,
  handleProductClick,
} from "../../utils/products";
import products from "../../data/productsAll";
import { useLanguage } from "../../Functions/useLanguage";

export default function AllProducts() {
  const { translateList, language } = useLanguage();
  const router = useRouter();

  const [maxPrice, setMaxPrice] = useState(5000);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [sortOrder, setSortOrder] = useState("recommended");
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const descriptionRef = useRef(null);

  const filteredProducts = filterAndSortProducts(
    products,
    { maxPrice, selectedSize, selectedColor, selectedCategory },
    sortOrder
  );
  const onProductClick = (product) => {
    console.log("Clicked Product:", product); // Перевірте, чи продукт має `name`
    handleProductClick(product, setSelectedProduct, descriptionRef);
  };

  const onContactClick = (selectedColor, selectedSize, quantity) => {
    handleContactButtonClick(
      router,
      selectedProduct,
      selectedColor,
      selectedSize,
      quantity,
      language
      
    );
  };

  return (
    <div className="bg-[#fcf8f3] text-black dark:text-white min-h-screen dark:bg-black ">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 py-4">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <FilterSidebar
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            selectedSize={selectedSize}
            handleSizeSelect={(size) => handleSizeSelect(size, setSelectedSize)}
            selectedCategory={selectedCategory}
            handleCategorySelect={(category) =>
              handleCategorySelect(category, setSelectedCategory)
            }
          >
            <SortMenu
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              isSortMenuOpen={isSortMenuOpen}
              toggleSortMenu={() => setIsSortMenuOpen(!isSortMenuOpen)}
            />
          </FilterSidebar>

          <div className="w-full md:w-3/4 flex flex-col">
            <ProductBanner
              selectedProduct={selectedProduct}
              descriptionRef={descriptionRef}
              handleContactButtonClick={onContactClick}
            />

            <h1 className="text-3xl sm:text-4xl font-bold mb-6">All Products</h1>
            <p className="text-gray-700 dark:text-gray-400 mb-4">
              Explore our diverse range of products tailored to your needs.
            </p>
            <p className="text-gray-700 dark:text-gray-400 mt-4 pb-4">
              {filteredProducts.length} products
            </p>

            <main className="w-full bg-[#f5e7da] dark:bg-black  max-h-[800px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => onProductClick(product)}
                  />
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

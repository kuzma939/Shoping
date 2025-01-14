"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import FilterSidebar from "../../Functions/FilterSidebar";
import SortMenu from "../../Functions/SortMenu";
import ProductBanner from "../../components/products/ProductBanner";
import PaginatedProducts from "../../components/PaginatedProducts/PaginatedProducts"; // Імпортуємо компонент пагінації
import {
  handleSizeSelect,
  handleCategorySelect,
  filterAndSortProducts,
  handleContactButtonClick,
  handleProductClick,
} from "../../utils/products";
import products from "../../data/products";
import { useLanguage } from "../../Functions/useLanguage";

export default function AllProducts() {
  const { translateList, language } = useLanguage();
  const router = useRouter();

  const [maxPrice, setMaxPrice] = useState(5500);
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
    console.log("Clicked Product:", product);
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
    <section className="bg-[#fcf8f3] text-black dark:text-white min-h-screen dark:bg-black">
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

          <main className="w-full md:w-3/4 flex flex-col">
            <section aria-labelledby="banner-section">
              <ProductBanner
                selectedProduct={selectedProduct}
                descriptionRef={descriptionRef}
                handleContactButtonClick={onContactClick}
              />
            </section>

            <section aria-labelledby="product-header" className="w-full mx-auto px-4 sm:px-6 md:px-8 py-4">
              <h1 id="product-header" className="text-3xl sm:text-4xl font-bold mb-6">
                All Products
              </h1>
              <p className="text-gray-700 dark:text-gray-400 mb-4">
                Explore our diverse range of products tailored to your needs.
              </p>
              <p className="text-gray-700 dark:text-gray-400 mt-4 pb-4">
                {filteredProducts.length} products
              </p>
            </section>
            <section aria-labelledby="product-list" aria-live="polite" className="w-full">
  <h2 id="product-list" className="sr-only">Product List</h2>
  <PaginatedProducts
    products={filteredProducts}
    productsPerPage={12}
    onProductClick={onProductClick} 
  />
</section>

          </main>
        </div>
      </div>
    </section>
  );
}

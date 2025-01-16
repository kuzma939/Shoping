"use client";
import React, { useState } from "react";
import ProductCard from "../products/ProductCard";

const PaginatedProducts = ({ products, productsPerPage = 12, onProductClick }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Загальна кількість сторінок
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Товари для поточної сторінки
  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full">
      {/* Список товарів */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => onProductClick(product)} // Передаємо функцію кліку
          />
        ))}
      </div>

      {/* Пагінація */}
      <div className="flex justify-center mt-6">
        <ul className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li key={page}>
              <button
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded border font-semibold transition ${
                  currentPage === page
                    ? "bg-[#4a3825] text-white border-[#4a3825] dark:bg-blue-500 dark:border-blue-500 dark:text-white" // Активна кнопка
                    : "bg-[#f5e7da] text-black border-[#d4b59e] hover:bg-[#e6d4c2] dark:bg-[#1e293b] dark:text-[#60a5fa] dark:border-[#334155] dark:hover:bg-[#2563eb]" // Неактивна кнопка
                }`}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Кнопки "Prev" та "Next" */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded border font-semibold transition ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed dark:bg-[#1e293b] dark:text-[#475569] dark:border-[#334155]" // Вимкнена кнопка
              : "bg-[#f5e7da] text-black border-[#d4b59e] hover:bg-[#e6d4c2] dark:bg-[#1e293b] dark:text-[#60a5fa] dark:border-[#334155] dark:hover:bg-[#2563eb]" // Активна кнопка
          }`}
        >
          Prev
        </button>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded border font-semibold transition ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed dark:bg-[#1e293b] dark:text-[#475569] dark:border-[#334155]" // Вимкнена кнопка
              : "bg-[#f5e7da] text-black border-[#d4b59e] hover:bg-[#e6d4c2] dark:bg-[#1e293b] dark:text-[#60a5fa] dark:border-[#334155] dark:hover:bg-[#2563eb]" // Активна кнопка
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedProducts;

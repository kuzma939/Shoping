import React, { useState } from "react";
// Компонент боковой панели фильтров
export default function FilterSidebar({
 // showColorFilter = true,
  showSizeFilter = true,
  maxPrice,
  setMaxPrice,
 // selectedColor,
 // setSelectedColor,
  selectedSize,
  handleSizeSelect,
  selectedCategory,
  handleCategorySelect,
  children,
}) {
  //const [isColorOpen, setIsColorOpen] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  //const colors = ["Red", "Blue", "Green"];
   // Предопределённые значения для размеров и категорий
  const sizes = ["All", "S", "M", "L", "XL"];
  const categories = ["All", "Costumes", "Suits", "Dress", "Shorts", "T-shirt", "Jeans", "Jacket"];
   // Обработчики изменения цены, размера, категории
  const handlePriceChange = (e) => {
    setMaxPrice(parseFloat(e.target.value));
  };
  
 // const toggleColorMenu = () => setIsColorOpen(!isColorOpen);
  const toggleSizeMenu = () => setIsSizeOpen(!isSizeOpen);
  const toggleCategoryMenu = () => setIsCategoryOpen(!isCategoryOpen);
  return (
    <aside className="w-full md:w-1/4 bg-[#f5e7da]  p-4 sm:p-6 rounded shadow-lg dark:bg-[#0f172a]">
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 border-b border-gray-900 dark:border-gray-700 pb-2">
          Browse by
        </h2>
        <ul className="text-gray-950 dark:text-gray-300 space-y-2">
          <li>
            <a href="#" className="hover:text-grey dark:hover:text-white underline">
              All Products
            </a>
          </li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-4 border-b border-gray-950 dark:border-gray-700 pb-2">
          Filter by
        </h2>

        <div className="text-gray dark:text-gray-300 space-y-6">
          {/* Price Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Price
            </label>
            <div className="flex items-center justify-between text-sm sm:text-base mb-2">
              <span>100₴</span>
              <span>{maxPrice}₴</span>
            </div>
            <input
              type="range"
              min="100"
              max="5000"
              step="10"
              value={maxPrice}
              onChange={handlePriceChange}
              className="w-full h-1 bg-gray-800 dark:bg-gray-700 rounded-lg appearance-none focus:outline-none"
            />
          </div>
          
          {/* Color Filter */}
         {/*  {showColorFilter && (
            <div className="relative">
              <div
                className="flex justify-between items-center cursor-pointer border-b border-gray-700 pb-2"
                onClick={toggleColorMenu}
              >
                <label className="block text-sm font-medium">Color</label>
                <span className={`text-gray-400 text-lg ${isColorOpen ? "-" : "+"}`}></span>
              </div>
             {isColorOpen && (
                <div className="mt-2 bg-gray-700 rounded p-2">
                  {colors.map((color) => (
                    <div
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className="cursor-pointer p-1 hover:bg-gray-600 rounded"
                    >
                      {color}
                    </div>
                  ))}
                </div>
              )}
              {selectedColor && (
                <div className="text-sm mt-1 text-gray-300">Selected: {selectedColor}</div>
              )} 
            </div>
          )}
 */}
 {/* Size Filter */}
{showSizeFilter && (
  <div className="relative">
    <div
      className="flex justify-between items-center cursor-pointer border-b border-gray-800 dark:border-gray-700 pb-2"
      onClick={toggleSizeMenu}
    >
      <label className="block text-sm font-medium">Size</label>
      <span className={`text-gray-400 text-lg ${isSizeOpen ? "-" : "+"}`}></span>
    </div>
    {isSizeOpen && (
      <div className="mt-2 bg-[#2e1f1453] dark:bg-gray-700 rounded p-2">
        {sizes.map((size) => (
          <div
            key={size}
            onClick={() => handleSizeSelect(size)} // Викликаємо handleSizeSelect
            className={`cursor-pointer p-1 rounded ${
              selectedSize === size || (size === "All" && selectedSize === "")
                ? "dark:bg-blue-500 text-gray dark:text-white"
                : "hover:bg-gray-600 text-gray bg-[#e2d0c2]  dark:text-gray-300"
            }`}
          >
            {size}
          </div>
        ))}
      </div>
    )}
    <div className="text-sm mt-1 dark:text-gray-300">
      Selected: {selectedSize || "All"}
    </div>
  </div>
)}

{/* Category Filter */}
<div className="relative">
  <div
    className="flex justify-between items-center cursor-pointer border-b border-gray-700 pb-2"
    onClick={toggleCategoryMenu}
  >
    <label className="block text-sm font-medium">Category</label>
    <span className={`text-gray-600 dark:text-gray-400 text-lg ${isCategoryOpen ? "-" : "+"}`}></span>
  </div>
  {isCategoryOpen && (
    <div className="mt-2 bg-[#2e1f1453] dark:bg-gray-700 rounded p-2">
      {categories.map((category) => (
        <div
          key={category}
          onClick={() => handleCategorySelect(category)}
          className={`cursor-pointer p-1 rounded ${
            selectedCategory === category || (category === "All" && selectedCategory === "")
                       ? "dark:bg-blue-500 text-gray dark:text-white"
                : "hover:bg-gray-600 text-gray bg-[#e2d0c2]  dark:text-gray-300"
           
          }`}
        >
          {category}
        </div>
      ))}
    </div>
  )}
  <div className="text-sm mt-1 text:gray dark:text-gray-300">
    Selected: {selectedCategory || "All"}
  </div>
</div>
   {/* Sort Menu */}
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </aside>
  );
}

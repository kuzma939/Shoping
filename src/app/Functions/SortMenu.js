import React from 'react';

// Component to display a sorting menu
export default function SortMenu({
  sortOrder, // Current sorting order
  setSortOrder, // Function to set the sorting order
  isSortMenuOpen, // State for the open/close status of the sorting menu
  toggleSortMenu, // Function to toggle the menu's state
}) {
  return (
    <div className="relative inline-block text-left ml-auto">
      {/* Button to toggle the sorting menu */}
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border dark:border-gray-700 shadow-sm px-4 py-2 bg-[#2e1f14] dark:bg-gray-800 text-sm font-medium text-white hover:bg-[#4a3825] dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#2e1f14] dark:focus:ring-offset-gray-900 focus:ring-[#4a3825] dark:focus:ring-gray-600"
        
        onClick={toggleSortMenu}
      >
        Sort by:{' '}
        {/* Display the current sorting order */}
        {sortOrder === 'recommended'
          ? 'Recommended'
          : sortOrder === 'priceAsc'
          ? 'Price: Low to High'
          : 'Price: High to Low'}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown menu for sorting options */}
      {isSortMenuOpen && (
        <div
       
          className="position:fixed origin-top-right sm:absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#4a3825]  dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {/* Button for "Recommended" sorting */}
            <button
              className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#3a2719] dark:hover:bg-gray-700"
              role="menuitem"
              tabIndex="-1"
              onClick={() => {
                setSortOrder('recommended');
                toggleSortMenu(); 
              }}
              
            >
              Recommended
            </button>
            {/* Button for "Price: Low to High" sorting */}
            <button
              className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#3a2719] dark:hover:bg-gray-700"
              role="menuitem"
              tabIndex="-1"
              onClick={() => {
                setSortOrder('priceAsc');
                toggleSortMenu(); 
              }}
            
            >
              Price: Low to High
            </button>
            {/* Button for "Price: High to Low" sorting */}
            <button
              className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#3a2719] dark:hover:bg-gray-700"
              role="menuitem"
              tabIndex="-1"
              onClick={() => {
                setSortOrder('priceAsc');
                toggleSortMenu();
              }}
             
            >
              Price: High to Low
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

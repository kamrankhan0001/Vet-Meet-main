// src/components/HenloProductListing.jsx
import React, { useEffect, useState } from 'react';
import henloProductsData from '../data/henloProducts.json'; // Ensure this path is correct

const HenloProductListing = () => {
  const [products, setProducts] = useState([]);
  const [filtersOpen, setFiltersOpen] = useState(false); // State for mobile filter sidebar

  useEffect(() => {
    setProducts(henloProductsData);
  }, []);

  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-Nunito">
      {/* Top Header/Breadcrumb area */}
      <div className="bg-white py-4 px-4 shadow-sm">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button className="md:hidden text-gray-700" onClick={toggleFilters}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <h1 className="text-xl font-bold text-gray-800 md:text-2xl">Buy Henlo</h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* You can add sorting/popularity dropdown here if needed */}
            <span className="text-gray-600 text-sm md:text-base">{products.length} products</span>
            <select className="border border-gray-300 rounded-md px-3 py-1 text-sm md:text-base focus:outline-none">
              <option>POPULARITY</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row py-6 px-4">
        {/* Filters Sidebar - Desktop */}
        <div className="hidden md:block w-full md:w-1/4 lg:w-1/5 bg-white p-6 rounded-lg shadow-md h-fit sticky top-20">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-800">FILTERS</h2>
            <button className="text-sm text-gray-500 hover:text-gray-700">Clear all</button>
          </div>

          {/* Individual Filter Sections */}
          {/* Flavor Filter */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="font-semibold text-gray-700 mb-2">Flavor</h3>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Chicken (30)</span>
            </label>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Eggs (6)</span>
            </label>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Multiple (4)</span>
            </label>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Lamb (1)</span>
            </label>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Milk (1)</span>
            </label>
          </div>

          {/* Life Stage Filter */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="font-semibold text-gray-700 mb-2">Life Stage</h3>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Adult (21)</span>
            </label>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Puppy (29)</span>
            </label>
          </div>

          {/* Price Filter */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="font-semibold text-gray-700 mb-2">Price</h3>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>₹0</span>
              <span>₹10000</span>
            </div>
            <input
              type="range"
              min="0"
              max="10000"
              value="5000" // Example value
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-orange"
            />
          </div>

          {/* Product Type Filter */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="font-semibold text-gray-700 mb-2">Product Type</h3>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Dry Food (23)</span>
            </label>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Jerky Treats (20)</span>
            </label>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Training Treats (11)</span>
            </label>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Wet Food (9)</span>
            </label>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Healthy Treats (8)</span>
            </label>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Dental Treats (4)</span>
            </label>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Skin & Joint Care (4)</span>
            </label>
          </div>

          {/* Veg/Non-Veg Filter */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="font-semibold text-gray-700 mb-2">Veg/Non-Veg</h3>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Veg (30)</span>
            </label>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Non-Veg (76)</span>
            </label>
          </div>

          {/* Pet Type Filter */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="font-semibold text-gray-700 mb-2">Pet Type</h3>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Dogs (76)</span>
            </label>
          </div>

          {/* Brand Filter */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="font-semibold text-gray-700 mb-2">Brand</h3>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Henlo (76)</span>
            </label>
          </div>

          {/* Tags Filter */}
          <div className="pb-4 mb-4">
            <h3 className="font-semibold text-gray-700 mb-2">Tags</h3>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Recommended for your Pet (6)</span>
            </label>
            <label className="flex items-center mb-1 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
              <span className="ml-2">Lightning Deal (1)</span>
            </label>
          </div>
        </div>

        {/* Filters Sidebar - Mobile (Drawer) */}
        <div className={`fixed inset-0 z-50 transform ${
          filtersOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-black bg-opacity-50 md:hidden`}
        onClick={toggleFilters}>
          <div className="bg-white w-3/4 h-full p-6 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-800">FILTERS</h2>
              <button onClick={toggleFilters} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            {/* Replicate filter sections here for mobile */}
            {/* Individual Filter Sections */}
            {/* Flavor Filter */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h3 className="font-semibold text-gray-700 mb-2">Flavor</h3>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Chicken (30)</span>
              </label>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Eggs (6)</span>
              </label>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Multiple (4)</span>
              </label>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Lamb (1)</span>
              </label>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Milk (1)</span>
              </label>
            </div>

            {/* Life Stage Filter */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h3 className="font-semibold text-gray-700 mb-2">Life Stage</h3>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Adult (21)</span>
              </label>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Puppy (29)</span>
              </label>
            </div>

            {/* Price Filter */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h3 className="font-semibold text-gray-700 mb-2">Price</h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>₹0</span>
                <span>₹10000</span>
              </div>
              <input
                type="range"
                min="0"
                max="10000"
                value="5000" // Example value
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-orange"
              />
            </div>

            {/* Product Type Filter */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h3 className="font-semibold text-gray-700 mb-2">Product Type</h3>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Dry Food (23)</span>
              </label>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Jerky Treats (20)</span>
              </label>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Training Treats (11)</span>
              </label>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Wet Food (9)</span>
              </label>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Healthy Treats (8)</span>
              </label>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Dental Treats (4)</span>
              </label>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Skin & Joint Care (4)</span>
              </label>
            </div>

            {/* Veg/Non-Veg Filter */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h3 className="font-semibold text-gray-700 mb-2">Veg/Non-Veg</h3>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Veg (30)</span>
              </label>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Non-Veg (76)</span>
              </label>
            </div>

            {/* Pet Type Filter */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h3 className="font-semibold text-gray-700 mb-2">Pet Type</h3>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Dogs (76)</span>
              </label>
            </div>

            {/* Brand Filter */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h3 className="font-semibold text-gray-700 mb-2">Brand</h3>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Henlo (76)</span>
              </label>
            </div>

            {/* Tags Filter */}
            <div className="pb-4 mb-4">
              <h3 className="font-semibold text-gray-700 mb-2">Tags</h3>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Recommended for your Pet (6)</span>
              </label>
              <label className="flex items-center mb-1 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded" />
                <span className="ml-2">Lightning Deal (1)</span>
              </label>
            </div>
            <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors duration-300" onClick={toggleFilters}>
              Apply Filters
            </button>
          </div>
        </div>

        {/* Product Listing Grid */}
        <div className="w-full md:w-3/4 lg:w-4/5 md:pl-6">
        
        {/* Ad Banner - Example from image */}
          <div className="bg-orange-400 border border-yellow-300 p-4 rounded-lg mb-6 text-center text-lg font-semibold text-white">
            ICICI Bank Extra 5% off On ICICI Bank Credit/Debit Cards & EMI* T&C
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-4 flex-grow flex flex-col">
                  {/* Rating and Reviews */}
                  {product.rating && product.reviews && (
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <span className="flex items-center text-yellow-400">
                        {'★'.repeat(Math.floor(product.rating))}
                        {'☆'.repeat(5 - Math.floor(product.rating))}
                      </span>
                      <span className="ml-1 text-gray-500">({product.reviews})</span>
                    </div>
                  )}
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 min-h-[50px]">{product.name}</h2> {/* Added min-height for consistent card height */}

                  {/* Price and Discount */}
                  <div className="flex items-baseline mb-3">
                    <span className="text-xl font-bold text-gray-900">{product.currentPrice}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                    )}
                    {product.discount && (
                      <span className="text-sm text-green-600 font-medium ml-2">{product.discount}</span>
                    )}
                  </div>

                  {/* Weight Options */}
                  {product.weightOptions && product.weightOptions.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700">Weight Options:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {product.weightOptions.map((option, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full border border-gray-200">
                            {option}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <button className="mt-auto w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors duration-300">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed "USE CODE: HENLO" Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-yellow-500 text-black text-center py-3 text-lg font-bold z-40 md:hidden flex justify-center items-center space-x-2">
        <img src="https://cdn.shopify.com/s/files/1/0530/5095/0603/files/Henlo_Logo_30x.png?v=1708453245" alt="Henlo Logo" className="h-6" />
        <span>USE CODE: HENLO</span>
        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">33% OFF</span>
      </div>

      {/* Add custom CSS for the range input thumb color if needed */}
      <style jsx>{`
        .range-orange::-webkit-slider-thumb {
          background-color: #f97316; /* Tailwind orange-500 */
        }
        .range-orange::-moz-range-thumb {
          background-color: #f97316; /* Tailwind orange-500 */
        }
      `}</style>
    </div>
  );
};

export default HenloProductListing;
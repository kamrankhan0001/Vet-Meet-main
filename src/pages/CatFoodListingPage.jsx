import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import catProductsData from '../data/catProducts.json'; 




const CatFoodListingPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  // Use the imported data directly or manage it with state if filtering/sorting is implemented later
  const productsToDisplay = catProductsData; 

  /*
    Regarding "efficiently handling thousands of products":
    
    1.  Server-Side Pagination/Infinite Scroll:
        For truly thousands of products, you would typically NOT load all of them
        into a single JSON file and then into the client's memory. Instead,
        you would fetch products from an API in smaller chunks (e.g., 20-50 per page).
        
        Example (conceptual, requires a backend API):
        const [products, setProducts] = useState([]);
        const [page, setPage] = useState(1);
        const [loading, setLoading] = useState(false);
        const [hasMore, setHasMore] = useState(true);

        useEffect(() => {
          const fetchProducts = async () => {
            setLoading(true);
            try {
              const response = await fetch(`/api/cat-products?page=${page}&limit=20`);
              const data = await response.json();
              setProducts(prevProducts => [...prevProducts, ...data.products]);
              setHasMore(data.hasMore); // Backend tells us if there are more pages
            } catch (error) {
              console.error("Failed to fetch products:", error);
            } finally {
              setLoading(false);
            }
          };
          fetchProducts();
        }, [page]); // Fetch new page when 'page' state changes

        // Then in your render:
        {products.map((product) => (...))}
        {hasMore && <button onClick={() => setPage(prev => prev + 1)}>Load More</button>}
        {loading && <p>Loading...</p>}

    2.  Virtualization (for very long single lists):
        If you absolutely must have a very long list on the client (e.g., all 1000 items
        are filtered/sorted client-side), you'd use libraries like `react-window` or
        `react-virtualized` to only render the items visible in the viewport, improving
        performance significantly.

    3.  Image Lazy Loading:
        For image-heavy listings, use `loading="lazy"` on image tags or a dedicated
        React lazy-load component to defer image loading until they are near the viewport.
        (This is a good practice even for moderate lists).
  */


  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Best Cat Food for Cats - Vet&Meet</title>
        <meta
          name="description"
          content="Shop for the best cat food for your beloved feline. Explore a wide range of dry food, wet food, and more with Vet&Meet."
        />
      </Helmet>

      {/* Mobile Filter Toggle Bar */}
      <div className="sm:hidden bg-white shadow-sm p-4 sticky top-0 z-10 flex justify-between items-center">
        <h1 className="text-lg font-bold">Cat Food</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="bg-teal-700 text-white px-4 py-2 rounded-md text-sm"
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row gap-6">
        {/* Filters Sidebar */}
        <aside
          className={`w-full sm:w-1/4 bg-white p-6 rounded-lg shadow-md ${
            showFilters ? 'block' : 'hidden'
          } sm:block`}
        >
          <h2 className="text-xl font-bold mb-4 border-b pb-2">FILTERS</h2>

          {/* Search Filter (from image) */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Flavor Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Flavor</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Chicken (514)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Fish (271)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Tuna (201)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Multiple (169)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Salmon (169)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Seafood (146)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Crab (60)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Vegetables (57)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Mackerel (26)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Bonito (22)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Lamb (18)
                </label>
              </li>
            </ul>
          </div>

          {/* Life Stage Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Life Stage</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Kitten (1504)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Puppy (1002)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Adult (601)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Senior (297)
                </label>
              </li>
            </ul>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Price</h3>
            <input
              type="range"
              min="0"
              max="20000"
              value="19000"
              className="w-full"
            />
            <div className="flex justify-between text-sm mt-1">
              <span>₹0</span>
              <span>₹19000</span>
            </div>
          </div>

          {/* Breed Size Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Breed Size</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Mini (63)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Medium (35)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Small (24)
                </label>
              </li>
            </ul>
          </div>

          {/* Product Type Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Product Type</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Wet Food (318)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Kitten Food (230)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Dry Food (220)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Creamy Treats (207)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Beds (180)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Jerky Treats (172)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Indoor Toys (158)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> T-Shirts and Shirts (148)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Skin & Coat Care (147)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Bowl (124)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Shampoos & Conditioners (100)
                </label>
              </li>
            </ul>
          </div>

          {/* Veg/Non-Veg Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Veg/Non-Veg</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Non-Veg (726)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Veg (123)
                </label>
              </li>
            </ul>
          </div>

          {/* Pet Type Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Pet Type</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Cats (2342)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Dogs (1892)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Birds (9)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Rabbits (2)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Hamsters & Guinea Pigs (1)
                </label>
              </li>
            </ul>
          </div>

          {/* Brand Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Brand</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Skatrs (206)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> PAWFYTS (147)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> N&D (136)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Sheba (96)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Savavet (87)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Whiskas (86)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Me-O (83)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Drools (76)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Royal Canin (73)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Basil (64)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Fofos (64)
                </label>
              </li>
            </ul>
          </div>

          {/* Tags Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Tags</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Supertails' Choice (86)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Vet Recommended (14)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Recommended for Your Pet (6)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Lightning Deal (1)
                </label>
              </li>
            </ul>
          </div>
        </aside>

        {/* Product Listing */}
        <main className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 hidden sm:block">
             Best Cat Food for Cats
          </h1>
          <div className="flex justify-between items-center mb-4">
            {/* Display count based on loaded products */}
            <span className="text-gray-600 text-sm sm:text-base">{productsToDisplay.length} products</span>
            <div className="flex items-center space-x-2">
              <label htmlFor="sort" className="text-gray-600 text-sm">
                Sort by:
              </label>
              <select
                id="sort"
                className="border border-gray-300 rounded-md p-1 text-sm"
              >
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
          </div>


          <div className="bg-yellow-100 border border-yellow-300 p-3 rounded-lg mb-6 text-center text-sm font-semibold text-yellow-800">
            ICICI Bank Extra 5% off On ICICI Bank Credit/Debit Cards & EMI* T&C
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productsToDisplay.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Product Image Section */}
                <div className="relative pt-[100%]">
                  <img
                    src={product.image}
                    alt={product.name}
                    // Add loading="lazy" for better performance with many images
                    loading="lazy" 
                    className="absolute top-0 left-0 w-full h-full object-contain p-4"
                  />
                  {product.discount && ( // Only show discount if it exists
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10">
                      {product.discount}
                    </span>
                  )}
                </div>

                {/* Product Info Section */}
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1 leading-tight line-clamp-2"> {/* Use line-clamp for consistent height */}
                    {product.name}
                  </h3>
                  <div className="flex items-center text-xs text-gray-600 mb-2">
                    <span className="text-yellow-500 mr-1">⭐ {product.rating}</span>
                    <span>({product.reviews} Reviews)</span>
                  </div>
                  <div className="flex items-baseline mb-2">
                    <span className="text-lg font-bold text-gray-900 mr-2">
                      {product.currentPrice}
                    </span>
                    {product.originalPrice && ( // Only show original price if it exists
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    {product.weightOptions && product.weightOptions.length > 0 && ( // Only show select if options exist
                        <select className="w-full text-xs border border-gray-300 rounded-md p-1 focus:ring-teal-500 focus:border-teal-500">
                            {product.weightOptions.map((option, idx) => (
                                <option key={idx} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    )}
                  </div>
                  <button className="w-full bg-amber-400 text-black py-2 rounded-md font-semibold text-sm hover:bg-amber-500 transition-colors duration-200">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner - "Use Code: KITTY?" */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between mt-8 text-white text-center md:text-left">
            <div className="md:w-3/4">
              <h2 className="text-2xl font-bold mb-2">USE CODE: KITTY?</h2>
              <p className="text-lg">To get extra % off on Sheba products above ₹3000</p>
            </div>
            <div className="md:w-1/4 mt-4 md:mt-0 flex justify-center">
              <img
                src="https://placehold.co/150x150/FF69B4/FFFFFF?text=Cat+Discount" // Placeholder for discount image
                alt="Discount illustration"
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CatFoodListingPage;
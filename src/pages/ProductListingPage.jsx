import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useCart } from '../context/CartContext';

import product2 from '../assets/Products/product2.png';
import product3 from '../assets/Products/product3.png';
import product4 from '../assets/Products/product4.png';
import product5 from '../assets/Products/product5.png'; 
import product6 from '../assets/Products/product6.png'; 
import product7 from '../assets/Products/product7.png';
import product8 from '../assets/Products/product8.png'; 

// Placeholder for product data
const products = [
  {
    id: 1,
    name: 'Henlo Chicken & Vegtables Baked Dry Food for Adult Dogs | 100% Human Grade Ingredients', 
    rating: 4.8,
    reviews: 71,
    currentPrice: '₹6,075',
    originalPrice: '₹7,500',
    discount: '19% OFF',
    image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame1707486864_483269fd-a1e8-4d02-9693-79277af5e8ab.png?v=1750138226&width=300&height=300&crop=center&fit=crop',
    weightOptions: ['8.4kg (3x2.8kg)', '14kg (5x2.8kg)', '5.6kg (2x2.8kg)', '2.8kg' , '800g' , '100g']
  }
    ,

  {
    id: 2,
    name: 'Royal Canin Maxi Puppy Dog Dry Food',
    rating: 4.7,
    reviews: 58,
    currentPrice: '₹7,008',
    originalPrice: '₹8,000',
    discount: '12% OFF',
    image: product2, 
    weightOptions: ['10kg', '20kg', '4kg', '1kg' , '220g']
  },
  {
    id: 3,
    name: 'Pedigree chicken & Vegetables Adult Dog Dry Food',
    rating: 4.7,
    reviews: 69,
    currentPrice: '₹3,393',
    originalPrice: '₹3,900',
    discount: '13% OFF',
    image: product3, 
    weightOptions: ['20kg', '15kg', '10kg' , '5.5kg' , '2.8kg' , '1kg' , '370g']
  },
  {
    id: 4,
    name: 'Drools Reals Chicken & Chicken Liver Chunks In Gravy Adult Dog Wet Food',
    rating: 4.6,
    reviews: 57,
    currentPrice: '₹3,060',
    originalPrice: '₹3,600',
    discount: '15% OFF',
    image: product4, 
    weightOptions: ['90x150g', '75x150g', '60x150g', '45x150g' , '30x150g' , '15x150g']
  },
  {
    id: 5,
    name: 'Pro Plan chicken Large Breed Adult dog Dry Food(New Improved Formula)',
    rating: 4.9,
    reviews: 144,
    currentPrice: '₹8,670',
    originalPrice: '₹10,450',
    discount: '17% OFF',
    image: product5, 
    weightOptions: ['15kg', '9kg (3x3kg)', '6kg (2x3kg)' , '3kg']
  },
  {
    id: 6,
    name: 'Bark Out Loud Salmon & Turkey Adult Dog Dry Food',
    rating: 4.7,
    reviews: 71,
    currentPrice: '₹5,376',
    originalPrice: '₹6,400',
    discount: '16% OFF',
    image: product6, 
    weightOptions: ['8kg (4x2kg)', '4kg (2x2kg)', '6kg (3x2kg)' , '2kg']
  },
  {
    id: 7,
    name: 'Farmina N&D Pumpkin Lamb & Blueberry Grain Free Adult Medium Maxi Dog Dry Food',
    rating: 4.9,
    reviews: 144,
    currentPrice: '₹9,847',
    originalPrice: '₹10,990',
    discount: '10% OFF',
    image: product7, 
    weightOptions: ['12kg', '5kg (2x2.5kg)', '2.5g']
  },
  {
    id: 8,
    name: 'Signature Grain Zero Chicken Chunks Gravy Adult Dog Wet Food',
    rating: 4.7,
    reviews: 71,
    currentPrice: '₹4,60',
    originalPrice: '₹5,00',
    discount: '8% OFF',
    image: product8, 
    weightOptions: ['10+2x150g', '5+1x150g', '40+8x150g' , '20+4x150']
  },
];

const ProductListingPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  
  //onst [selectedWeight, setSelectedWeight] = useState(products.weightOptions[0]); // Default to the first weight option
 const [selectedWeight, setSelectedWeight] = useState(products[0].weightOptions[0]); // Default to the first weight option of the first product
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
  const cleanedPrice = parseFloat(product.currentPrice.replace(/[^0-9.]/g, ''));
  
  const productToAdd = {
    id: product.id,
    name: product.name,
    image: product.image,
    price: cleanedPrice, 
    
    quantity: 1,
  };

  addToCart(productToAdd);
  alert(`${product.name} added to cart!`);
};



  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Dog Food: Best Dog Food for Dogs - Vet&Meet</title>
        <meta
          name="description"
          content="Shop for the best dog food for your beloved canine. Explore a wide range of dry food, wet food, and more with Vet&Meet."
        />
      </Helmet>

      {/* Header for mobile view with toggle */}
      <div className="sm:hidden bg-white shadow-sm p-4 sticky top-0 z-10 flex justify-between items-center">
        <h1 className="text-lg font-bold">Dog Food</h1>
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

          {/* Search Filter */}
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
                  <input type="checkbox" className="mr-2" /> Chicken (638)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Mutton (24)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Vegetables (136)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Lamb (70)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Fruits (71)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Eggs (53)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Fish (51)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Milk (52)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Duck (24)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Cheese (20)
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
                  <input type="checkbox" className="mr-2" /> Puppy (534)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Adult (411)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Senior (27)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Kitten (12)
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
              max="15000"
              value="12500" // Example value
              className="w-full"
            />
            <div className="flex justify-between text-sm mt-1">
              <span>₹0</span>
              <span>₹12500</span>
            </div>
          </div>

          {/* Breed Size Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Breed Size</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Mini (409)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Small (408)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Medium (394)
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
                  <input type="checkbox" className="mr-2" /> Dry Dog Food (395)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Puppy Food (378)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Chews & Bones (235)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Healthy Treats (234)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Wet Dog Food (189)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Jerky Treats (169)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Training Aids (100)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Dental Treats (83)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Biscuits & Cookies (78)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Food Supplements (59)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Creamy Treats (28)
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
                  <input type="checkbox" className="mr-2" /> Non-Veg (1076)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Veg (32)
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
                  <input type="checkbox" className="mr-2" /> Dog (1232)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Cats (31)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Rabbits (2)
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
                  <input type="checkbox" className="mr-2" /> Jerhigh (101)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Royal Canin (91)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Pedigree (86)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Chip Chops (86)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Drools (62)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Farmina N&D (61)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> HomeoPet (58)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> SmartHeart (48)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Growlies (46)
                </label>
              </li>
            </ul>
          </div>
        </aside>

        {/* Product Listing */}
        <main className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 hidden sm:block">
            Best Dog Food for Dogs
          </h1>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 text-sm sm:text-base">1232 products</span>
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

          {/* Ad Banner - Example from image */}
          <div className="bg-orange-400 border border-yellow-300 p-4 rounded-lg mb-6 text-center text-lg font-semibold text-white">
            ICICI Bank Extra 5% off On ICICI Bank Credit/Debit Cards & EMI* T&C
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 relative overflow-hidden" // Added hover effects and better shadow
              >
                {/* Product Image Section */}
                <div className="relative pt-[100%]"> 
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"

                    className="absolute top-0 left-0 w-full h-full object-contain p-4" 
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10">
                    {product.discount}
                  </span>
                </div>

                {/* Product Info Section */}
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1 leading-tight truncate"> {/* Added truncate */}
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
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <div className="mb-3">
                    <select onChange={(e) => setSelectedWeight(e.target.value)} className="w-full text-xs border border-gray-300 rounded-md p-1 focus:ring-teal-500 focus:border-teal-500" > 
                      {product.weightOptions.map((option, idx) => (
                        <option key={idx} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button onClick={() => handleAddToCart(product, selectedWeight)} className="w-full bg-amber-400 text-black py-2 rounded-md font-semibold text-sm hover:bg-amber-500 transition-colors duration-200">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductListingPage;
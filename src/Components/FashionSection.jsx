// src/components/FashionSection.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import banner2 from '../assets/Fashion/banner2.png';
import product4 from '../assets/Fashion/product4.png';
import product6 from '../assets/Fashion/product6.png';
import product1 from '../assets/Fashion/product1.png';
import product2 from '../assets/Fashion/product2.png';
import product3 from '../assets/Fashion/product3.png';
import product5 from '../assets/Fashion/product5.png';
import product7 from '../assets/Fashion/product7.png';


const FashionSection = () => {
  const navigate = useNavigate();

  const fashionCategories = [
    {
      image: product1, // Placeholder for Raincoats
      title: 'Raincoats',
      discount: '60% off',
    },
    {
      image: product2, 
      title: 'Shoes & socks',
      discount: '30% off',
    },
    {
      image: product3, 
      title: 'Jackets & hoodies',
      discount: '60% off',
    },
    {
      image: product4, 
      title: 'Ethnic wear',
      discount: '60% off',
    },
    {
      image: product5, // Placeholder for Shirts & t-shirts
      title: 'Shirts & t-shirts',
      discount: '60% off',
    },
    {
      image: product6, // Placeholder for Premium clothing
      title: 'Premium clothing',
      discount: '50% off',
    },
    {
      image: product7, 
      title: 'Frocks',
      discount: '42% off',
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <Helmet>
        <title>Fashion - Vet&Meet</title>
        <meta name="description" content="Paws up for fashion! Shop the latest pet clothing trends at Vet&Meet." />
      </Helmet>

      {/* Hero Section */}
<section className="relative bg-gradient-to-br from-cyan-50 via-cyan-100 to-cyan-200 py-16 px-6 md:px-12 overflow-hidden flex items-center justify-center">
  {/* Decorative blurred background circles */}
  <div className="absolute -top-10 -left-10 w-60 h-60 bg-pink-200 opacity-30 rounded-full blur-3xl z-0"></div>
  <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-200 opacity-30 rounded-full blur-3xl z-0"></div>

  <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
    {/* Text Content */}
    <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-gray-800 drop-shadow-lg">
        Paws up <br className="hidden sm:inline" /> for <span className="text-orange-400">Fashion!</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 font-medium mb-6">
        Up to <span className="font-bold text-blue-600">60% Off</span> on pet clothing this season.
      </p>
      <button className="px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-xl shadow-md transition-all">
        Shop Now
      </button>
    </div>

    {/* Pet Image */}
    <div className="md:w-1/2 flex justify-center md:justify-end ">
      <img
        src= {banner2}
        alt="Dog in fashion"
        className="w-auto h-60 sm:h-72 md:h-80 object-contain drop-shadow-2xl rounded-2xl"
      />
    </div>
  </div>
</section>

      {/* Product Category Grid */}
<section className="py-10 px-4 sm:px-6 bg-gradient-to-br from-[#fdf6f0] to-[#f3f7fb]">
  <div className="w-full">
    <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">Shop by Fashion Category</h2>

    <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-2 sm:px-4">
      {fashionCategories.map((category, index) => (
        <div
          key={index}
          className="flex-shrink-0 bg-white rounded-2xl shadow-lg w-40 sm:w-48 text-center border-4 border-pink-400 transition-all duration-300 hover:scale-105 group"
        >
          {/* Discount Badge */}
          <div className="relative w-full">
            <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-bold px-1 py-0.5 rounded-full shadow-sm z-10">
              {category.discount}
            </span>

            {/* Product Image */}
            <div className="w-full h-36 flex items-center justify-center p-4 bg-white rounded-t-2xl">
              <img
                src={category.image}
                alt={category.title}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>

          {/* Category Title */}
          <div className="p-3">
            <h3 className="text-sm sm:text-base font-semibold text-gray-800 leading-snug">
              {category.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default FashionSection;
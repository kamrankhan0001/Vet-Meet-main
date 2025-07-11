import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import banner1 from '../assets/henlo/banner1.png'; 
import product1 from '../assets/henlo/product1.png';
import product2 from '../assets/henlo/product2.png';
import product3 from '../assets/henlo/product3.png';
import product4 from '../assets/henlo/product4.png';
import product5 from '../assets/henlo/product5.png';
import product6 from '../assets/henlo/product6.png'; 

const HenloSection = () => {
  const navigate = useNavigate();

  const productsData = [
    {
      image: product1,
      title: 'Treats',
      discount: 'Up to 32% off',
    },
    {
      image: product2,
      title: 'Trial packs',
      discount: 'Starts @ ₹120',
    },
    {
      image: product3,
      title: 'Puppy food',
      discount: 'Up to 25% off',
    },
    {
      image: product4,
      title: 'Chicken & egg',
      discount: 'Up to 23% off',
    },
    {
      image: product5,
      title: 'Chicken and veg',
      discount: 'Up to 22% off',
    },
    {
      image: product6,
      title: 'Nutrition topper',
      discount: 'Up to 24% off',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200 font-inter rounded-2xl shadow-lg overflow-hidden">
      <Helmet>
        <title>Henlo - Vet&Meet</title>
        <meta name="description" content="Discover Henlo products: baked to keep it real, more protein, more crunch, more taste." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-yellow-300 py-12 px-4 overflow-hidden flex items-center min-h-[400px] md:min-h-[300px]">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between relative z-10 gap-10">
          
          {/* Dog Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative md:absolute md:right-0 md:top-0 md:h-full md:overflow-hidden">
            <img
              src={banner1}
              alt="Henlo Dog Banner"
              className="w-full max-w-xs sm:max-w-sm md:h-full md:w-auto object-cover object-top md:object-right-top transform scale-105 md:scale-100 "
              loading="lazy"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)',
                WebkitClipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)',
              }}
           />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left z-20 px-2 sm:px-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              <span className="bg-white py-3 px-5 rounded-b-xl inline-block">henlo</span>
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-3 text-gray-800">
              baked to keep it real
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700">
              More protein. More crunch. More taste.
            </p>
            <button
              onClick={() => navigate('/henlo-products')}
              className="bg-orange-400 text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-orange-500 transition-transform transform hover:scale-105"
            >
              Shop now
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
<section className="py-12 px-4 bg-yellow-300 mt-2">
  <div className="container mx-auto">
    <h2 className="text-3xl font-extrabold text-gray-800 mb-10 text-center">
      Shop by Category
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {productsData.map((product, index) => (
        <div
          key={index}
          className="group bg-gray-50 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 flex flex-col items-center text-center p-4 cursor-pointer"
        >
          {/* Image */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center bg-white rounded-full shadow-inner mb-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>

          {/* Info */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              {product.title}
            </h3>
            <p className="text-sm text-orange-600 font-medium">
              {product.discount}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default HenloSection;

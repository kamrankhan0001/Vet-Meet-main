import React from 'react';
import { Helmet } from 'react-helmet';
import product1 from '../assets/Offer/product1.png';
import product2 from '../assets/Offer/product2.png';
import product3 from '../assets/Offer/product3.png';
import product4 from '../assets/Offer/product4.png';
import product5 from '../assets/Offer/product5.png';
import product6 from '../assets/Offer/product6.png';

const OfferPage = () => {
  const offersData = [
    { image: product3 },
    { image: product1 },
    { image: product2 },
    { image: product4 },
    { image: product5 },
    { image: product6 },
    
    // Add more products if needed
  ];

  return (
    <div className="min-h-[300px] bg-gray-100 font-inter py-10">
      <Helmet>
        <title>Offers - Vet&Meet</title>
        <meta name="description" content="Discover never-seen-before offers on pet products at Vet&Meet." />
      </Helmet>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          Never-seen before offers
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {offersData.map((offer, index) => (
            <div
              key={index}
              className="w-full max-w-[180px] mx-auto"
            >
              <img
                src={offer.image}
                alt={`Offer ${index + 1}`}
                className="w-full h-auto object-contain rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OfferPage;

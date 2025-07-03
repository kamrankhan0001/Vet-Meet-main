import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Pharmacy1 from '../assets/Pharmacy/Pharmacy1.png';
import Pharmacy2 from '../assets/Pharmacy/Pharmacy2.png';
import Pharmacy3 from '../assets/Pharmacy/Pharmacy3.png';
import Pharmacy4 from '../assets/Pharmacy/Pharmacy4.png';
import Pharmacy5 from '../assets/Pharmacy/Pharmacy5.png';
import Health1 from '../assets/Pharmacy/Health1.png';
import Health2 from '../assets/Pharmacy/Health2.png';
import Health3 from '../assets/Pharmacy/Health3.png';
import Health4 from '../assets/Pharmacy/Health4.png';
import Health5 from '../assets/Pharmacy/Health5.png';
import Health6 from '../assets/Pharmacy/Health6.png';
import Health7 from '../assets/Pharmacy/Health7.png';
import Health8 from '../assets/Pharmacy/Health8.png';
import Health9 from '../assets/Pharmacy/Health9.png';
import Health10 from '../assets/Pharmacy/Health10.png';
import Health11 from '../assets/Pharmacy/Health11.png';
import Health12 from '../assets/Pharmacy/Health12.png';
import Health13 from '../assets/Pharmacy/Health13.png';
import Health14 from '../assets/Pharmacy/Health14.png';
import Health15 from '../assets/Pharmacy/Health15.png';
import Prevent1 from '../assets/Pharmacy/Prevent1.png';
import Prevent2 from '../assets/Pharmacy/Prevent2.png';
import Prevent3 from '../assets/Pharmacy/Prevent3.png';
import Prevent5 from '../assets/Pharmacy/Prevent5.png';
import Prevent6 from '../assets/Pharmacy/Prevent6.png';
import Prevent7 from '../assets/Pharmacy/Prevent7.png';
import Prevent8 from '../assets/Pharmacy/Prevent8.png';
import Banner1 from '../assets/Pharmacy/Banner1.png';
import sup1 from '../assets/Pharmacy/sup1.png';
import sup2 from '../assets/Pharmacy/sup2.png';
import sup3 from '../assets/Pharmacy/sup3.png';
import sup4 from '../assets/Pharmacy/sup4.png';
import sup5 from '../assets/Pharmacy/sup5.png';
import sup6 from '../assets/Pharmacy/sup6.png';
import sup7 from '../assets/Pharmacy/sup7.png';
import sup8 from '../assets/Pharmacy/sup8.png';

const PharmacySection = () => {
  const navigate = useNavigate();

  const categoryBannersData = [
    {name: 'Skin care', image: Health1 },
    {name: 'Joint Care', image: Health2 },
    {name: 'Digestive Care', image: Health3 },
    {name: 'Kidney', image: Health4 },
    {name: 'Cardiac care', image: Health5 },
    {name: 'Eye & Ear care', image: Health6 },
    {name: 'Liver care', image: Health7 },
    {name: 'Pain relief', image: Health8 },
    {name: 'Respiratory care', image: Health9 },
    {name: 'Endocrine', image: Health10 },
    {name: 'Neuro care', image: Health11 },
    {name: 'Oral care', image: Health12 },
    {name: 'Wound care', image: Health13 },
    {name: 'Antibiotics', image: Health14 },
    {name: 'Combo' , image: Health15 },

    
  ];
  
  const categoryPreventiveData = [
    {name: 'Dewormers', image: Prevent1 },
    {name: 'Probiotic', image: Prevent2 },
    {name: 'Tick & Flea', image: Prevent3 },
    {name: 'Anti-anxiety', image: Prevent5 },
    {name: 'Ear Cleanser', image: Prevent6 },
    {name: 'Supplements', image: Prevent7 },
    {name: 'Immunity boosters', image: Prevent8 },
    {name: 'Antibiotics', image: Health14 }

  ];

  const supplements = [
            { name: 'Appetite stimulant', image: sup8 },
            { name: 'Skin & Coat', image: sup1 },   
            { name: 'Multivitamin', image: sup2 },
            { name: 'Calcium', image: sup3 },
            { name: 'Immunity', image: sup4 },
            { name: 'Platelet Booster', image: sup5 },
            { name: 'Weaning Supplement', image: sup6 },
            { name: 'Calming', image: sup7 },
  ];


  const highlightsData = [
    {
      icon: (
        <svg className="w-10 h-10 text-teal-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Authentic Products',
      description: 'Guaranteed genuine medicines and health products from trusted brands.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-teal-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2zM21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Vet Recommended',
      description: 'Products curated and recommended by our experienced veterinary team.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-teal-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13M12 6.253C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery services to ensure your pet gets what they need, when they need it.',
    },
  ];

  const CategoryCard = ({ name, image }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
      <div className="relative pt-[75%]">
        <img src={image} alt={name} className="absolute top-0 left-0 w-full h-full object-cover" />
      </div>
      <div className="p-3 text-center">
        <h3 className="text-base md:text-lg text-gray-800 font-medium">{name}</h3>
      </div>
    </div>
  );



  const ProductTypeSectionContent = ({ title, description, categories }) => (
    <section className="py-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Pharmacy - Vet&Meet</title>
        <meta name="description" content="Vet&Meet Pharmacy: Trusted online pet pharmacy for supplements and health products." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-52 h-52 bg-teal-400 opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-700 opacity-20 rounded-full translate-x-1/2 translate-y-1/2"></div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between z-10 relative">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">Your Pet's Health, Our Priority</h1>
            <p className="text-lg md:text-xl mb-6">Authentic medicines & supplements delivered to your doorstep.</p>

            <div className="flex justify-center md:justify-start gap-4">
              <button className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition-transform hover:scale-105">Shop Now</button>
              <button className="border border-white text-white font-semibold px-4 py-2 rounded-full hover:bg-white hover:text-teal-700 transition-transform hover:scale-105">Consult a Vet</button>
            </div>
          </div>
          
          {/* Placeholder Illustration */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img 
                src="https://placehold.co/400x300/4CAF50/FFFFFF?text=Pet+Pharmacy+Illustration" 
                alt="Pet Pharmacy" 
                className="max-w-sm rounded-lg shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300 cursor-pointer" />
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        
    <div className='bg-blue-100 w-full'>
       <ProductTypeSectionContent
          title="Tick & Flea"
          description="Protect your pet from parasites with our effective tick and flea solutions."
          categories={[
             
            { name: 'Spray', image: Pharmacy1 },
            {name: 'Tablet', image: Pharmacy2},
            { name: 'Powders', image: Pharmacy3 },
            { name: 'Shampoo', image: Pharmacy4 },
            { name: 'Spot-on', image: Pharmacy5 },

          ]}
        />
        </div>

        

 <section className="mb-10">
  <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Preventive care</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
    {categoryPreventiveData.map((category, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer"
      >
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-24 md:h-32 object-cover rounded-t-xl"
        />
        <p className="text-center text-sm md:text-base font-semibold text-gray-700 py-2">
          {category.name}
        </p>
      </div>
    ))}
  </div>
</section>

{/* Adding banner image */}
        <section className="mb-10">
            <img
                src={Banner1}
                alt="Pharmacy Banner"
                className="w-full h-auto rounded-lg shadow-lg mb-6"
            />
            
        </section>

<section className="mb-10">
  <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Prescription Diet</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
    {categoryPreventiveData.map((category, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer"
      >
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-24 md:h-32 object-cover rounded-t-xl"
        />
        <p className="text-center text-sm md:text-base font-semibold text-gray-700 py-2">
          {category.name}
        </p>
      </div>
    ))}
  </div>
</section>

      <section className="mb-10 bg-amber-400 p-6 rounded-lg shadow-lg text-white">
      <Helmet>
        <title>Supplement Corner - Vet&Meet</title>
      </Helmet>
      <h2 className="text-4xl font-extrabold text-center text-black mb-10">
        <div className="flex justify-center items-center gap-3">
          <span className="text-5xl">💊</span>
          <span>Supplement corner</span>
          <span className="text-5xl">🍼</span>
        </div>
      </h2>
      <div className="flex overflow-x-auto hide-scrollbar gap-4 pb-3 scrollbar-hide">
        {supplements.map((category, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 md:w-40 bg-white rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-24 md:h-32 object-cover rounded-t-xl"
            />
            <p className="text-center text-sm md:text-base font-semibold text-gray-700 py-2">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>


        {/* Pharmacy Highlights Section */}
         <section className="py-12 bg-white rounded-lg shadow-md mb-8">          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Why choose Vet&Meet Pharmacy?</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {highlightsData.map((highlight, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                {highlight.icon}
                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>

         {/* Info Banner Section */}
        <section className="bg-gradient-to-r from-orange-400 to-amber-500 text-white py-10 px-4 rounded-lg shadow-xl text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Trusted by 1000+ happy pet parents!
          </h2>
          <p className="text-lg opacity-90">
            Join our growing family and experience the best in pet care.
          </p>
          <button className="mt-6 bg-white text-orange-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
            Read Our Stories
          </button>
        </section>

        {/* Additional Product Sections and Highlights */}
        {/* ...reuse ProductTypeSectionContent and add Pharmacy Highlights here as above... */}
      </main>
    </div>
  );
};

export default PharmacySection;

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
import prs1 from '../assets/Pharmacy/prs1.png';
import prs2 from '../assets/Pharmacy/prs2.png';
import prs3 from '../assets/Pharmacy/prs3.png';
import prs4 from '../assets/Pharmacy/prs4.png';
import prs5 from '../assets/Pharmacy/prs5.png';
import prs6 from '../assets/Pharmacy/prs6.png';
import prs7 from '../assets/Pharmacy/prs7.png';
import prs8 from '../assets/Pharmacy/prs8.png';
import concern1 from '../assets/Pharmacy/concern1.png';
import concern2 from '../assets/Pharmacy/concern2.png';
import concern3 from '../assets/Pharmacy/concern3.png';
import concern4 from '../assets/Pharmacy/concern4.png';
import concern5 from '../assets/Pharmacy/concern5.png';
import img1 from '../assets/Pharmacy/img1.png';
import img2 from '../assets/Pharmacy/img2.png';
import img3 from '../assets/Pharmacy/img3.png';
import img4 from '../assets/Pharmacy/img4.png';
import img5 from '../assets/Pharmacy/img5.png';
import img6 from '../assets/Pharmacy/img6.png';
import img7 from '../assets/Pharmacy/img7.png';
import img8 from '../assets/Pharmacy/img8.png';
import brand1 from '../assets/Pharmacy/brand1.png';
import brand2 from '../assets/Pharmacy/brand2.png';
import brand3 from '../assets/Pharmacy/brand3.png';
import brand4 from '../assets/Pharmacy/brand4.png';
import brand5 from '../assets/Pharmacy/brand5.png';
import brand6 from '../assets/Pharmacy/brand6.png';
import brand7 from '../assets/Pharmacy/brand7.png';
import brand8 from '../assets/Pharmacy/brand8.png';
import brand9 from '../assets/Pharmacy/brand9.png';
import brand10 from '../assets/Pharmacy/brand10.png';
import { Navigate } from 'react-router-dom';

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

  const categoryPrescriptionData = [
    
    { name: 'Skin & coat care', image: prs2 },
    {name: 'Joint care', image: prs3 },
    { name: 'Kidney care', image: prs1 },
    { name: 'Liver care', image: prs4 },
    { name: 'Growth support', image: prs5 },
    {name: 'Diabetic support', image: prs7 },
    { name: 'Digestive care', image: prs6 },
    {name: 'Weight management', image: prs8 },
  
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

  const brandsInFocusData = [
    { image: brand10, alt: 'ROYAL CANIN' },
    { image: brand6, alt: 'Natural' }, 
    { image: brand7, alt: 'Carniwel' },
    { image: brand2, alt: 'Farmina Brand' },
    { image: brand1, alt: 'Vetoquinol Brand' },
    { image: brand4, alt: 'Talking Dog Club Brand' },   
    { image: brand3, alt: 'Bark Out Loud Brand' },
    { image: brand8, alt: 'Virbac' },
    { image: brand9, alt: 'SAVAVET' },
    { image: brand5, alt: 'Veko Brand' },
    
  ];

  const highlightsData = [
    {
      icon: (
        <svg className="w-10 h-10 text-orange-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Authentic Products',
      description: 'Guaranteed genuine medicines and health products from trusted brands.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-orange-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2zM21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Vet Recommended',
      description: 'Products curated and recommended by our experienced veterinary team.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-orange-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="absolute top-0 left-0 w-52 h-32 bg-teal-400 opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-44 bg-teal-700 opacity-20 rounded-full translate-x-1/2 translate-y-1/2"></div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between z-10 relative">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">Your Pet's Health, Our Priority</h1>
            <p className="text-lg md:text-xl mb-6">Authentic medicines & supplements delivered to your doorstep.</p>

            <div className="flex justify-center md:justify-start gap-4">
              <button className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition-transform hover:scale-105">Shop Now</button>
              <button onClick={() => navigate('/consult')} className="border border-white text-white font-semibold px-4 py-2 rounded-full hover:bg-white hover:text-teal-700 transition-transform hover:scale-105">Consult a Vet</button>
            </div>
          </div>
          
          {/* Placeholder Illustration */}
       <div className="w-full md:w-1/4 flex justify-center md:justify-end mt-8 md:mt-0 px-4">
       <img
    src={img1}
    alt="Pet Pharmacy"
    className="w-4/5 sm:w-3/5 md:w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 md:rotate-3 md:hover:rotate-0"
    loading="lazy"
  />
</div>

        </div>
      </section>

      
        
    <div className='bg-blue-200 w-full'>
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

  <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Healthcare</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
    {categoryBannersData.map((category, index) => (
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
    {categoryPrescriptionData.map((category, index) => (
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

    
    {/* NEW SECTION: Brands in focus */}
<section className="py-12 mb-10 bg-gray-50">
  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-10 text-center">
    Brands in Focus
  </h2>

  <div className="flex overflow-x-auto hide-scrollbar gap-4 px-4 sm:px-6 pb-6 scroll-smooth scrollbar-hide">
    {brandsInFocusData.map((brand, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-38 h-44 sm:w-56 sm:h-64 bg-white rounded-3xl shadow-xl border-4 
                   border-orange-400 transition-all duration-300 cursor-pointer flex items-center justify-center overflow-hidden"
        style={{
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
        }}
      >
        <img
          src={brand.image}
          alt={brand.alt}
          className="w-full h-full p-2 sm:p-2 transition-transform duration-300 hover:scale-105 rounded-2xl"
          loading='lazy'
        />
      </div>
    ))}
  </div>
</section>



    <section className="mb-8 px-2 md:px-6 lg:px-20 bg-blue-300 py-10 rounded-t-2xl shadow-lg">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
    Shop by Concern
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
    {[
      { name: "Shedding", img: concern4 },
      { name: "Loose Stool", img: concern1 },
      { name: "Itching", img: concern2 },
      { name: "Scooting", img: concern3 },
      { name: "Limping", img: concern5 },
    ].map((concern, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center pt-6 pb-4 "
      >
        {/* Image */}
        <div className="h-40 w-40 flex justify-center items-center">
          <img
            src={concern.img}
            alt={concern.name}
            className="h-full w-full object-contain rounded-t-full shadow-md hover:scale-105 transition-transform duration-300"
            loading="lazy"

          />
        </div>

        <p className="font-bold text-center text-gray-700 text-sm mt-4">
          {concern.name}
        </p>
      </div>
    ))}
  </div>
</section>

 {/* Pharmacy Highlights Section */}
<section className="container mx-auto px-4 py-6">
  <div className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory -mx-4 px-4">
    <div className="flex gap-4">
      {[img2, img3, img4, img5, img6, img7, img8].map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Pharmacy ${idx + 2}`}
          className="w-72 sm:w-80 md:w-96 h-auto rounded-2xl shadow-lg flex-shrink-0 snap-start object-cover transition-transform duration-300 hover:scale-105"
        />
      ))}
    </div>
  </div>
</section>


        
         <section className="py-12 bg-white rounded-lg shadow-md mb-8">          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Why choose Vet&Meet Pharmacy?</h2>
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
        <section className="bg-orange-400 text-white py-5 px-4 rounded-lg shadow-xl text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Trusted by 1000+ happy pet parents!
          </h2>
          <p className="text-lg opacity-90">
            Join our growing family and experience the best in pet care.
          </p>
          <button 
          onClick={() => navigate("/our-story")}
          className="mt-4 bg-white text-orange-400 font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
            Read Our Stories
          </button>
        </section>      
    </div>
  );
};

export default PharmacySection;

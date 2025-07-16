import React from 'react';
import { Helmet } from 'react-helmet';
import hdfc from '../assets/Offer/hdfc-logo.png';
import upi from '../assets/Offer/upi.png';
import icici from '../assets/Offer/icici.png';
import axis from '../assets/Offer/axis.png';
import sbi2 from '../assets/Offer/sbi2.png';
import image1 from '../assets/Offer/image1.png';
import image2 from '../assets/Offer/image2.png';
import image3 from '../assets/Offer/image3.png';
import image4 from '../assets/Offer/image4.png';
import image5 from '../assets/Offer/image5.png';
import image6 from '../assets/Offer/image6.png';
//import image4 from '../assets/Offer/image4.png';

const OfferCardSection = () => {

  const bankOffers = [
    {
      logo: upi,
      text: '₹50 Instant Discount',
      subText: 'With UPI transactions',
      bgColor: 'bg-gradient-to-r from-gray-100 to-gray-300',
      textColor: 'text-black',
    },
    {
      logo: icici,
      text: '8% Instant Discount',
      subText: 'With ICICI credit cards',
      bgColor: 'bg-gradient-to-r from-orange-300 to-orange-500',
      textColor: 'text-white',
    },
    {
      logo: hdfc,
      text: '8% Instant Discount',
      subText: 'With HDFC credit cards',
      bgColor: 'bg-gradient-to-r from-blue-300 to-blue-600',
      textColor: 'text-white',
    },
    {
      logo: axis,
      text: '5% Instant Discount',
      subText: 'With AXIS credit cards',
      bgColor: 'bg-gradient-to-r from-[#AE265F] to-[#AE275F]',
      textColor: 'text-white',
    },
    {
      logo: sbi2,
      text: '10% Instant Discount',
      subText: 'With SBI credit cards',
      bgColor: 'bg-gradient-to-r from-indigo-300 to-indigo-600',
      textColor: 'text-white',
    },
  ];

  const brandOffers = [
    {
      logo: image1,
      discount: '7%',
      condition: 'on order above 2500',
      code: 'ZOOMIE7',
      bgColor: 'bg-yellow-500',
      textColor: 'text-black',
    },
    
    {
      logo: image4,
      discount: '8%',
      condition: 'on order above 2000',
      code: 'ROYAL9',
      bgColor: 'bg-red-600',
      textColor: 'text-white',
    },
    {
      logo: image3,
      discount: '4%',
      condition: 'on order above 2500',
      code: 'FARMINA',
      bgColor: 'bg-blue-600',
      textColor: 'text-white',
    },
    {
      logo: image5,
      discount: '5%',
      condition: 'on order above 1000',
      code: 'KENNEL8',
      bgColor: 'bg-pink-200',
      textColor: 'text-black',
    },
    {
      logo: image6,
      discount: '5%',
      condition: 'on order above 1500',
      code: 'HENLO',
      bgColor: 'bg-yellow-300',
      textColor: 'text-black',
    },
    {
      logo: image2,
      discount: '5%',
      condition: 'on order above 1000',
      code: 'DROOLS5',
      bgColor: 'bg-red-600',
      textColor: 'text-white',
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied "${text}" to clipboard!`);
    }).catch(err => {
      console.error('Failed to copy: ', err);
      alert('Failed to copy the code. Please copy manually.');
    });
  };

  return (
    <div className="bg-white py-4 font-sans">
      <Helmet>
        <title>Offers & Savings - Vet&Meet</title>
        <meta name="description" content="Unlock extra savings with bank offers and brand discounts at Vet&Meet." />
      </Helmet>

      {/* Bank Offers Section */}
<section className="container mx-auto px-4 overflow-x-auto mb-10 scrollbar-hide ml-0 max-w-full">
  <div className="flex gap-4 w-full">
    {bankOffers.map((offer, index) => (
      <div
        key={index}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow 
                    ${offer.bgColor} ${offer.textColor} 
                    min-w-[90%] sm:min-w-[200px] md:min-w-[33.33%]`}
      >
        <img src={offer.logo} alt="Bank Logo" className="w-20 sm:w-24" />
        <div className='ml-10'>
          {offer.text && <p className="font-bold text-sm sm:text-xl">{offer.text}</p>}
          {offer.subText && <p className="text-xs sm:text-sm">{offer.subText}</p>}
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
        Unlock Extra Savings Now
      </h2>

      {/* Brand Offers Section */}
<section className="container mx-auto px-4 overflow-x-auto mb-10 scrollbar-hide ml-0 max-w-full">
  <div className="flex gap-4 w-full max-h-34">
    {brandOffers.map((offer, index) => (
      <div
        key={index}
        className={`flex items-center rounded-xl shadow-md 
                    px-4 py-5 ${offer.bgColor} ${offer.textColor} 
                    min-w-[90%] sm:min-w-[300px] md:min-w-[33.33%] lg:min-w-[350px]`}
      >
        {/* Logo - Bigger and centered */}
        <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-none rounded-lg p-2">
          <img
            src={offer.logo}
            alt="Brand Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Info */}
        <div className="flex flex-col items-start pl-20 flex-1">
          {offer.discount && (
            <p className="text-base sm:text-lg font-bold mb-1">
             <span>Extra</span> <br />
              <span className="text-2xl">{offer.discount}</span> Off
            </p>
          )}
          {offer.condition && (
            <p className="text-xs sm:text-sm mb-2">{offer.condition}</p>
          )}
          {offer.code && (
            <button
              onClick={() => copyToClipboard(offer.code)}
              className="bg-white text-black font-semibold text-sm px-3 py-1 rounded-md border border-gray-300
                         flex items-center hover:bg-gray-100 cursor-pointer w-fit"
            >
              {offer.code}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="gray"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5
                     a2 2 0 012-2h2a2 2 0 012 2m0 
                     0h2a2 2 0 012 2v3m-6 4l-3 3m0 
                     0l-3-3m3 3V9"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
</section>


    </div>
  );
};

export default OfferCardSection;

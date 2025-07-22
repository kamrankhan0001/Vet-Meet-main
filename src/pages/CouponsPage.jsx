// src/pages/CouponsAndOffersPage.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; // Icon for accordion

const CouponsAndOffersPage = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null); // State to manage open/close of accordion items

  const faqData = [
    {
      question: 'How do I apply a coupon to my order?',
      answer: 'You can apply a coupon code during the checkout process. Look for the "Apply Coupon" or "Promo Code" field and enter your valid code there before proceeding to payment.',
    },
    {
      question: 'Where can I check the coupons/offers for my order?',
      answer: 'All available coupons and offers can be found on our "Offers" page, in your account dashboard, or sometimes directly on product pages. Keep an eye on your email for exclusive deals!',
    },
    {
      question: 'My coupon is not working',
      answer: 'If your coupon is not working, please check the terms and conditions of the coupon (e.g., minimum order value, validity period, applicable products). If the issue persists, contact customer support.',
    },
    {
      question: 'How do Bank Offers work?',
      answer: 'Bank offers provide instant discounts or cashback when you pay using specific bank credit/debit cards or UPI. These offers are usually applied automatically at checkout if your payment method qualifies.',
    },
    {
      question: 'Can I get brand-level offers?',
      answer: 'Yes, we frequently have special offers directly from brands. These can include discounts, freebies, or bundle deals. Check the "Offers" page or specific brand pages for details.',
    },
  ];

  
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <Helmet>
        <title>Coupons & Offers - Help - Vet&Meet</title>
        <meta name="description" content="Find answers to frequently asked questions about coupons, discounts, and offers at Vet&Meet." />
      </Helmet>

      {/* Top Bar with Back Button and Title */}
      <div className="bg-white p-4 shadow-sm flex items-center sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="mr-4 text-gray-600 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Coupons & Discount</h1>
      </div>

      <main className="container mx-auto px-4 py-6 md:py-10">
        <div className="space-y-4 mb-8">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <button
                className="flex justify-between items-center w-full p-4 text-left font-semibold text-lg text-gray-800 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <FaChevronDown
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-600 border-t border-gray-100">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        
      </main>
    </div>
  );
};

export default CouponsAndOffersPage;
// src/pages/GeneralEnquiryPage.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; // Icon for accordion

const GeneralEnquiryPage = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null); // State to manage open/close of accordion items

  const faqData = [
    {
      question: 'How do I create an account on Vet&Meet?',
      answer: 'You can create an account by clicking on the "Profile" icon in the top right corner and selecting "Sign Up". Follow the prompts to enter your details and set up your account.',
    },
    {
      question: 'Is Vet&Meet available across the country?',
      answer: 'Currently, Vet&Meet services are available in select cities. Please enter your pincode on the homepage to check if we deliver to your location.',
    },
    {
      question: 'What is a Platform Fee?',
      answer: 'A Platform Fee is a small charge applied to certain transactions to help cover the operational costs of maintaining our platform and providing seamless service.',
    },
    {
      question: 'Is the Platform Fee refundable?',
      answer: 'The Platform Fee is generally non-refundable. Please refer to our Terms & Conditions for specific details regarding refunds.',
    },
    {
      question: 'What is a Delivery Fee?',
      answer: 'A Delivery Fee is a charge applied to your order to cover the cost of shipping products to your doorstep. This fee may vary based on your location and order value.',
    },
    {
      question: 'Is the Delivery Fee refundable?',
      answer: 'Delivery fees are typically non-refundable once the delivery process has begun. In cases of order cancellation before dispatch, a refund may be applicable.',
    },
    {
      question: 'Are there any extra charges for my cash on delivery order?',
      answer: 'No, there are no extra charges for Cash on Delivery (COD) orders. The total amount payable will be as displayed at checkout.',
    },
    {
      question: 'How do I update contact details on my account?',
      answer: 'You can update your contact details by logging into your account and navigating to your "Profile" or "Account Settings" section.',
    },
    {
      question: 'How do I update my Shipping details?',
      answer: 'Shipping details can be updated in your "Profile" or during the checkout process before confirming your order. For an active order, please contact customer support immediately.',
    },
    {
      question: 'How do I update my Email address?',
      answer: 'To update your email address, please log in to your account and go to your "Profile Settings". If you face any issues, contact our support team.',
    },
    {
      question: 'Can I modify my shipping address after placing an order?',
      answer: 'Modifying the shipping address after placing an order is generally not possible. Please contact our customer support immediately if you need to request a change, and we will assist if the order has not yet been dispatched.',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <Helmet>
        <title>General Enquiry - Help - Vet&Meet</title>
        <meta name="description" content="Find answers to frequently asked questions about general inquiries, account, and platform fees at Vet&Meet." />
      </Helmet>

      {/* Top Bar with Back Button and Title */}
      <div className="bg-white p-4 shadow-sm flex items-center sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="mr-4 text-gray-600 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-800">General Enquiry</h1>
      </div>

      <main className="container mx-auto px-4 py-6 md:py-10">
        <div className="space-y-4">
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

export default GeneralEnquiryPage;
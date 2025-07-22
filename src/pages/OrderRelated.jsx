// src/pages/OrderRelatedPage.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; // Icon for accordion

const OrderRelatedPage = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null); // State to manage open/close of accordion items

  const faqData = [
    {
      question: 'How to place an order?',
      answer: 'You can place an order by browsing our products, adding them to your cart, and proceeding to checkout. Follow the on-screen instructions to complete your purchase.',
    },
    {
      question: 'How do I track my order?',
      answer: 'You can track your order by logging into your account and visiting the "My Orders" section. A tracking link will also be provided in your shipping confirmation email.',
    },
    {
      question: 'Can I modify my order once it is placed?',
      answer: 'Unfortunately, orders cannot be modified once placed. If you need to make changes, please cancel the existing order and place a new one, or contact customer support immediately.',
    },
    {
      question: 'Items are missing from my order',
      answer: 'If items are missing from your order, please contact our customer support with your order number and details of the missing items. We will investigate and resolve the issue promptly.',
    },
    {
      question: 'Items are damaged/defective?',
      answer: 'In case you receive damaged or defective items, please provide clear photos and your order number to our customer support within 24 hours of delivery for a replacement or refund.',
    },
    {
      question: 'Items received are different from what I ordered?',
      answer: 'If you received incorrect items, please contact us with your order number and details of the discrepancy. We will arrange for the correct items to be sent to you.',
    },
    {
      question: 'How do I determine the correct size for my pet?',
      answer: 'Please refer to the size guide available on each product page. If you need further assistance, our customer support can help you choose the right size.',
    },
    {
      question: 'Size mismatch Issue?',
      answer: 'If there is a size mismatch, please initiate a return or exchange request through your order history or contact customer support for assistance.',
    },
    {
      question: 'Not happy with the quality of the product?',
      answer: 'Your satisfaction is our priority. If you are not happy with the product quality, please reach out to our customer support with your feedback and order details.',
    },
    {
      question: 'My order is marked delivered but not delivered.',
      answer: 'If your order is marked delivered but you have not received it, please check with your neighbors or building management. If still not found, contact our customer support immediately for investigation.',
    },
    {
      question: 'Why is my order split?',
      answer: 'Orders may be split due to items being shipped from different warehouses or availability. You will receive separate tracking information for each shipment.',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <Helmet>
        <title>Order Related - Help - Vet&Meet</title>
        <meta name="description" content="Find answers to frequently asked questions about orders at Vet&Meet." />
      </Helmet>

      {/* Top Bar with Back Button and Title */}
      <div className="bg-white p-4 shadow-sm flex items-center sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="mr-4 text-gray-600 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Order Related</h1>
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

export default OrderRelatedPage;
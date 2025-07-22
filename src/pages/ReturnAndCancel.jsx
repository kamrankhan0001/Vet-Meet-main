// src/pages/ReturnsAndCancellationsPage.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; // Icon for accordion

const ReturnsAndCancellationsPage = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null); // State to manage open/close of accordion items

  const faqData = [
    {
      question: 'How & when can I return my product?',
      answer: 'You can return most products within 7 days of delivery, provided they are unused, in original packaging, and meet our return policy criteria. Please initiate a return request through your order history or contact customer support for detailed instructions.',
    },
    {
      question: 'I want to cancel my order',
      answer: 'You can cancel your order before it has been dispatched from our warehouse. To cancel, go to "My Orders" in your profile and select the option to cancel. If the order is already dispatched, you may need to refuse delivery or initiate a return after receiving it.',
    },
  ];

  
  
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <Helmet>
        <title>Returns & Cancellations - Help - Vet&Meet</title>
        <meta name="description" content="Find answers to frequently asked questions about returns and cancellations at Vet&Meet." />
      </Helmet>

      {/* Top Bar with Back Button and Title */}
      <div className="bg-white p-4 shadow-sm flex items-center sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="mr-4 text-gray-600 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Returns & Cancellations</h1>
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

export default ReturnsAndCancellationsPage;
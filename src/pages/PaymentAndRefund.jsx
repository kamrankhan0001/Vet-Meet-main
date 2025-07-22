// src/pages/PaymentsAndRefundsPage.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; // Icon for accordion

const PaymentsAndRefundsPage = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null); // State to manage open/close of accordion items

  const faqData = [
    {
      question: 'Unable to make payments',
      answer: 'If you are unable to make payments, please ensure your internet connection is stable, your card details are correct, and you have sufficient funds. You can also try an alternative payment method or contact your bank.',
    },
    {
      question: 'Modes of payment',
      answer: 'We accept various modes of payment including credit/debit cards (Visa, Mastercard, Amex), Net Banking, UPI, and Cash on Delivery (COD) for eligible orders.',
    },
    {
      question: 'What happens in case of a payment failure?',
      answer: 'In case of a payment failure, please do not try to make the payment again immediately. Check your bank statement or wallet. If the amount is debited, it will usually be reversed within 5-7 business days. You can try placing the order again or contact support.',
    },
    {
      question: 'My money got debited but the order did not get confirmed',
      answer: 'If your money was debited but the order did not confirm, it is likely a payment gateway issue. The amount is usually refunded automatically within 5-7 business days. Please contact our support team with your transaction details for assistance.',
    },
    {
      question: 'When will I get my refund?',
      answer: 'Refunds are typically processed within 5-7 business days after the return or cancellation is confirmed. The time it takes for the refund to reflect in your account may vary depending on your bank.',
    },
    {
      question: 'How do I get a refund for my COD order?',
      answer: 'For Cash on Delivery (COD) orders, refunds are usually processed via bank transfer. You will be asked to provide your bank account details for the refund process.',
    },
  ];

  

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <Helmet>
        <title>Payments & Refunds - Help - Vet&Meet</title>
        <meta name="description" content="Find answers to frequently asked questions about payments, refunds, and transactions at Vet&Meet." />
      </Helmet>

      {/* Top Bar with Back Button and Title */}
      <div className="bg-white p-4 shadow-sm flex items-center sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="mr-4 text-gray-600 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Payments & Refunds</h1>
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

export default PaymentsAndRefundsPage;
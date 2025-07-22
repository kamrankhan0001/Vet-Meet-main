// src/pages/contactUs.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import LoginWithOTP from "../pages/ProfilePage"; 

import {
  FaUser,
  FaTruck,
  FaUndo,
  FaCommentMedical,
  FaClipboardList,
  FaCreditCard,
  FaTag,
  FaArrowRight,
  FaCommentDots,
} from 'react-icons/fa';

const ContactUsPage = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const quickLinks = [
    {
      icon: <FaTruck className="text-orange-600 text-2xl" />,
      title: 'Track Order',
      description: 'Check the status of your recent orders',
      path: '/track-order',
    },
    {
      icon: <FaUndo className="text-orange-600 text-2xl" />,
      title: 'Return Order',
      description: 'Return items or view return status',
      path: '/return-order',
    },
    {
      icon: <FaCommentMedical className="text-orange-600 text-2xl" />,
      title: 'Chat with a Vet',
      description: 'Talk to a vet for your pet concerns',
      action: () => window.open('https://wa.me/917059400392', '_blank'), // ✅ country code +91
}
  ];

  const browseTopics = [
    {
      icon: <FaClipboardList className="text-orange-600 text-2xl" />,
      title: 'Order Related',
      path: '/help/order',
    },
    {
      icon: <FaUndo className="text-orange-600 text-2xl" />,
      title: 'Returns & Cancellations',
      path: '/help/returns',
    },
    {
      icon: <FaCreditCard className="text-orange-600 text-2xl" />,
      title: 'Payments & Refunds',
      path: '/help/payments',
    },
    {
      icon: <FaTag className="text-orange-600 text-2xl" />,
      title: 'Coupons & Offers',
      path: '/help/coupons',
    },
    {
      icon: <FaCommentDots className="text-orange-600 text-2xl" />,
      title: 'General Query',
      path: '/help/general',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <Helmet>
        <title>Contact Us - Vet&Meet</title>
        <meta
          name="description"
          content="Get help with orders, returns, vet consultation, and more at Vet&Meet."
        />
      </Helmet>

      {/* Mobile Top Bar */}
      <div className="bg-white p-4 shadow-sm md:hidden">
        <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>
      </div>

      <main className="container mx-auto px-4 py-6 md:py-10">
        {/* Sign In Section */}
        <section className="bg-white rounded-2xl border border-orange-100 shadow-md p-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-orange-100">
                <FaUser className="text-orange-600 text-2xl" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                  Getting help is easy
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Sign in to view and manage your recent orders.
                </p>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <button
                onClick={toggleLoginModal}
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 text-sm md:text-base font-semibold rounded-lg shadow-md transition-all duration-200"
              >
                <FaUser className="text-white text-base" />
                SIGN IN
              </button>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h2>
          <div className="flex flex-col gap-4">
            {quickLinks.map((link, index) => (
              <div
                key={index}
                onClick={() => {
                  if (link.action) {
                   link.action(); // open WhatsApp or other external action
                 } else {
                  navigate(link.path); // internal routing
              }
          }}
                className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4">
                  {link.icon}
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">{link.title}</h3>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </div>
                </div>
                <FaArrowRight className="text-orange-600 text-xl" />
              </div>
            ))}
          </div>
        </section>

        {/* Browse Topics Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Browse Topics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {browseTopics.map((topic, index) => (
              <div
                key={index}
                onClick={() => navigate(topic.path)}
                className="flex flex-col items-start gap-2 bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
              >
                {topic.icon}
                <h3 className="text-base font-semibold text-gray-800">
                  {topic.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        
        {/* Contact Info */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Get in touch</h2>
          <p className="text-sm text-gray-600 mb-4 font-semibold">
            If you have any inquiries, feel free to:
          </p>

          {/* Call */}
          <div
            onClick={() => window.open('tel:1800-5723-575')}
            className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-4 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.658l1.26 3.36a1 1 0 01-.21 1.07L9.41 9.41a16.016 16.016 0 006.19 6.19l1.322-1.322a1 1 0 011.07-.21l3.36 1.26a1 1 0 01.658.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-md font-medium text-gray-800">
                Call us at <span className="font-bold">1800-5723-575</span>
              </span>
            </div>
            <FaArrowRight className="text-orange-600 text-xl" />
          </div>


          {/* Email */}
          <div
            onClick={() => window.open('mailto:support@vetnmeet.com')}
            className="flex items-center justify-between bg-white rounded-xl border border-orange-100 shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow mb-4"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-white">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="text-md font-medium text-gray-800 block">Email us at</span>
                <span className="text-sm font-bold text-gray-900">support@vetnmeet.com</span>
              </div>
            </div>
            <FaArrowRight className="text-orange-600 text-xl" />
          </div>
        </section>

        {/* Become a Seller Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Become a seller</h2>
          <div
            onClick={() => navigate('/sell')}
            className="flex items-center justify-between bg-white rounded-xl border border-orange-100 shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-white">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v3a5 5 0 0010 0V5a2 2 0 00-2-2H4zm12 2v3a7 7 0 01-14 0V5a4 4 0 014-4h4a4 4 0 014 4zm0 8a1 1 0 011 1v3h-6v-3a1 1 0 011-1h4z" />
                </svg>
              </div>
              <div>
                <span className="text-md font-medium text-gray-800 block">List all your products on</span>
                <span className="text-sm font-bold text-gray-900">Vet&Meet</span>
              </div>
            </div>
            <FaArrowRight className="text-orange-600 text-xl" />
          </div>
        </section>
      </main>



      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={toggleLoginModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl"
            >
              &times;
            </button>
            <LoginWithOTP onClose={toggleLoginModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUsPage;

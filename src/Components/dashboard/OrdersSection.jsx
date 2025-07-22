// src/components/dashboard/OrdersSection.jsx
import React from 'react';
import { FaBox } from 'react-icons/fa'; // Icon for order

const OrdersSection = () => {
  const mockOrders = [
    {
      id: 'ST171067312507',
      status: 'Returned to Supertails',
      date: 'Thu, 10th Jul',
      image: 'https://placehold.co/100x100/ADD8E6/000000?text=Product', // Placeholder image
    },
    // Add more mock orders here if desired for scrolling/testing
    {
      id: 'ST171067312508',
      status: 'Delivered on',
      date: 'Wed, 9th Jul',
      image: 'https://placehold.co/100x100/A7F3D0/000000?text=Product2',
    },
    {
      id: 'ST171067312509',
      status: 'Shipped on',
      date: 'Tue, 8th Jul',
      image: 'https://placehold.co/100x100/FFDDC1/000000?text=Product3',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Orders</h2>
      <div className="space-y-4">
        {mockOrders.map((order) => (
          <div key={order.id} className="bg-gray-50 rounded-lg shadow-sm p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <FaBox className="text-orange-500 mr-2" />
                <span className="font-semibold text-gray-800">Order #{order.id}</span>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              {order.status} on <span className="font-medium">{order.date}</span>
            </p>
            <div className="flex items-center">
              <img src={order.image} alt="Product" className="w-16 h-16 object-cover rounded-md mr-4" />
              {/* More product details would go here if available */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersSection;
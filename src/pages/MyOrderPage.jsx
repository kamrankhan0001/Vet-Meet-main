
import React from 'react';
import { FaBoxes, FaTruck, FaUndo, FaStar } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 

const MyOrders = () => {
  
  const orders = [
    {
      id: 'VM123456789',
      date: '10 June 2025',
      status: 'Delivered',
      items: [
        { name: 'Pedigree Adult Dog Food', price: 999, qty: 1, img: 'https://via.placeholder.com/60/FFD700/000000?text=DogFood' },
        { name: 'Whiscas Wet Cat Food', price: 150, qty: 3, img: 'https://via.placeholder.com/60/ADD8E6/000000?text=CatFood' },
      ],
      deliveryDate: '12 June 2025',
      amount: 1449,
    },
    {
      id: 'VM987654321',
      date: '05 June 2025',
      status: 'Cancelled',
      items: [
        { name: 'Dental Chews for Dogs', price: 450, qty: 1, img: 'https://via.placeholder.com/60/90EE90/000000?text=DogTreat' },
      ],
      amount: 450,
    },
    {
      id: 'VM112233445',
      date: '01 June 2025',
      status: 'Processing',
      items: [
        { name: 'Cat Litter Scoop', price: 200, qty: 1, img: 'https://via.placeholder.com/60/DDA0DD/000000?text=Litter' },
        { name: 'Fish Aquarium', price: 2500, qty: 1, img: 'https://via.placeholder.com/60/F0E68C/000000?text=Aquarium' },
      ],
      amount: 2700,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'text-green-600';
      case 'Cancelled': return 'text-red-600';
      case 'Processing': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 border-b pb-3">My Orders</h1>

        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-6">
          <div className="flex flex-col items-center p-3 border rounded-md shadow-sm bg-blue-50 text-blue-700">
            <FaBoxes className="text-xl sm:text-2xl mb-1" />
            <span className="text-sm sm:text-base font-medium">All Orders</span>
          </div>
          <div className="flex flex-col items-center p-3 border rounded-md shadow-sm bg-orange-50 text-orange-700">
            <FaTruck className="text-xl sm:text-2xl mb-1" />
            <span className="text-sm sm:text-base font-medium">Shipped</span>
          </div>
          <div className="flex flex-col items-center p-3 border rounded-md shadow-sm bg-red-50 text-red-700">
            <FaUndo className="text-xl sm:text-2xl mb-1" />
            <span className="text-sm sm:text-base font-medium">Returns/Cancellations</span>
          </div>
          <div className="flex flex-col items-center p-3 border rounded-md shadow-sm bg-purple-50 text-purple-700">
            <FaStar className="text-xl sm:text-2xl mb-1" />
            <span className="text-sm sm:text-base font-medium">Reviews</span>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.length > 0 ? (
            orders.map((order) => (
              <div key={order.id} className="border border-gray-200 rounded-lg shadow-sm p-4 bg-white">
                {/* Order Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b pb-3 mb-3">
                  <div className="mb-2 sm:mb-0">
                    <span className="text-gray-500 text-xs sm:text-sm">Order ID: </span>
                    <span className="font-semibold text-sm sm:text-base text-gray-800">{order.id}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 text-xs sm:text-sm mr-2">Status:</span>
                    <span className={`font-semibold text-sm sm:text-base ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                </div>

                {/* Order Items */}
                <div className="mb-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center mb-2 last:mb-0">
                      <img src={item.img} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-md mr-3 object-cover border" />
                      <div className="flex-grow">
                        <p className="font-medium text-gray-800 text-sm sm:text-base">{item.name}</p>
                        <p className="text-gray-600 text-xs sm:text-sm">₹{item.price} x {item.qty}</p>
                      </div>
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">₹{item.price * item.qty}</p>
                    </div>
                  ))}
                </div>

                {/* Order Footer */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-t pt-3 mt-3 text-sm">
                  <div className="mb-2 sm:mb-0 text-gray-600">
                    Order Date: <span className="font-medium">{order.date}</span>
                    {order.deliveryDate && (
                      <>
                        <br className="sm:hidden" /> {/* Line break on mobile */}
                        Delivered on: <span className="font-medium">{order.deliveryDate}</span>
                      </>
                    )}
                  </div>
                  <div className="font-bold text-gray-800 text-base sm:text-lg">
                    Total: ₹{order.amount}
                  </div>
                  <div className="flex space-x-2 mt-3 sm:mt-0">
                    <button className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700 transition duration-200">
                      View Details
                    </button>
                    {order.status === 'Delivered' && (
                        <button className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700 transition duration-200">
                            Rate
                        </button>
                    )}
                     {order.status === 'Processing' && (
                        <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition duration-200">
                            Track Order
                        </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-600 py-10">
              <p className="text-lg mb-2">You haven't placed any orders yet!</p>
              <Link to="/" className="text-blue-600 hover:underline">Start Shopping</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
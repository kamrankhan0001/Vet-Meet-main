import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotalPrice } = useCart();
  const navigate = useNavigate();

  const [orderPlaced, setOrderPlaced] = useState(false);

  // Check if order was placed via checkout
  useEffect(() => {
    const isOrderPlaced = localStorage.getItem('orderPlaced') === 'true';
    if (isOrderPlaced) {
      setOrderPlaced(true);
      localStorage.removeItem('orderPlaced'); // cleanup
    }
  }, []);

  // ✅ 1. Show Order Confirmation (cart is empty + order was placed)
  if (orderPlaced && cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md w-full">
          <svg
            className="mx-auto h-24 w-24 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h2 className="text-3xl font-bold text-gray-800 mt-6 mb-3">Order Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been placed successfully.
            You will receive an email confirmation shortly.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-orange-500 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-orange-600 transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  // ✅ 2. Show Empty Cart Message (cart is empty, but no order placed)
  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="container mx-auto p-6 text-center mt-16">
        <h2 className="text-3xl font-bold mb-3 text-gray-800">Your Cart is Empty</h2>
        <p className="text-gray-600">Looks like you haven't added anything yet.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-all duration-300"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  // ✅ 3. Show Cart Items and Checkout
  const handleProceedToCheckout = () => {
    localStorage.setItem('orderPlaced', 'true');
    navigate('/checkout'); // simulate order placement
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Your Shopping Cart</h2>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center sm:items-start border rounded-lg shadow p-4 gap-4"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
              <img
                src={item.image || 'https://placehold.co/100x100/CCCCCC/FFFFFF?text=Product'}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg border"
              />
            </div>

            <div className="flex-1 w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600 hidden sm:block">
                  ₹{Number(item.price).toFixed(2)}
                </p>
              </div>

              <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center sm:justify-between">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-gray-200 px-3 py-1 rounded-l hover:bg-gray-300"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border border-gray-300 rounded text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-200 px-3 py-1 rounded-r hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-3 sm:mt-0 text-red-500 hover:text-red-600 flex items-center text-sm"
                >
                  <FaTrash className="mr-1" /> Remove
                </button>
              </div>
            </div>

            {/* Price: Mobile */}
            <div className="block sm:hidden text-right text-gray-800 font-semibold">
              ₹{(Number(item.price) * item.quantity).toFixed(2)}
            </div>

            {/* Price: Desktop */}
            <div className="hidden sm:block text-xl font-bold text-gray-800">
              ₹{(Number(item.price) * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      {/* Total and Checkout */}
      <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-2xl font-bold text-gray-800">
          Total: ₹{getCartTotalPrice().toFixed(2)}
        </div>
        <button
          onClick={handleProceedToCheckout}
          className="bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 w-full sm:w-auto"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;

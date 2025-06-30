import React from 'react';
import { useCart } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotalPrice } = useCart();
    const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-6 text-center mt-16">
        <h2 className="text-3xl font-bold mb-3 text-gray-800">Your Cart is Empty</h2>
        <p className="text-gray-600">Looks like you haven't added anything yet.</p>
        <button
          onClick={() => window.history.back()}
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-all duration-300"
        >
          Continue Shopping
        </button>
      </div>
    );
  }
const handleProceedToCheckout = () => {
    navigate('/checkout'); // Navigate to the new payment gateway page
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl ">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Your Shopping Cart</h2>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center sm:items-start border rounded-lg shadow p-4 gap-4"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
              <img
                src={item.image || '/placeholder.jpeg'}
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

            {/* Price (for mobile) */}
            <div className="block sm:hidden text-right text-gray-800 font-semibold">
              ₹{(Number(item.price) * item.quantity).toFixed(2)}
            </div>

            {/* Price (for desktop) */}
            <div className="hidden sm:block text-xl font-bold text-gray-800">
              ₹{(Number(item.price) * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      {/* Cart Total Section */}
      <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-2xl font-bold text-gray-800">
          Total: ₹{getCartTotalPrice().toFixed(2)}
        </div>
        <button onClick={handleProceedToCheckout} className="bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 w-full sm:w-auto">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;

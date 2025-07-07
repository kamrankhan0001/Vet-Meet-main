import React from "react";
import { FaStar } from "react-icons/fa";

export default function ConsultationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-sans grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left - Image & Steps */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
          alt="Doctor on video call"
          className="rounded-xl w-full shadow-lg"
        />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center bg-gray-50 p-4 rounded-lg">
          <div>
            <p className="font-semibold">Pay & Book the consultation</p>
          </div>
          <div>
            <p className="font-semibold">Choose Video or Teleconsultation</p>
          </div>
          <div>
            <p className="font-semibold">Receive prescription after the call</p>
          </div>
        </div>
      </div>

      {/* Right - Info & Pricing */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-orange-600 font-semibold">Services</h2>
          <div className="flex items-center bg-white shadow px-2 py-1 rounded-full">
            <FaStar className="text-yellow-500 mr-1" />
            <span className="font-bold text-sm">5</span>
          </div>
        </div>

        <h1 className="text-xl font-bold">
          Instant Consultation <span className="text-sm">(10 AM to 7 PM)</span>
        </h1>

        <div className="border border-orange-400 rounded-lg p-4">
          <p className="text-gray-700 text-sm mb-1 font-semibold">
            Book Consultation
          </p>
          <div className="flex items-baseline">
            <span className="text-xl font-bold text-green-600 mr-2">₹299</span>
            <span className="line-through text-gray-500">₹499</span>
            <span className="ml-2 text-green-600 font-semibold text-sm">
              40% OFF
            </span>
          </div>
        </div>

        <div className="border border-gray-200 p-4 rounded-lg text-sm">
          <div className="flex justify-between">
            <span className="font-semibold">Bank Offers and coupons</span>
            <button className="text-orange-500 font-medium">
              Check offers
            </button>
          </div>
        </div>

        <ul className="text-gray-600 text-sm space-y-1">
          <li>
            🚫 Currently, cash on delivery is not available on this product.
          </li>
          <li>🚚 Free delivery on orders above ₹599</li>
        </ul>

        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold shadow">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
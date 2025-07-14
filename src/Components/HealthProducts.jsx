import React from "react";
import { useNavigate } from "react-router-dom";

import health1 from "../assets/Health/Health1.png";
import health9 from "../assets/Health/Health9.png";
import health3 from "../assets/Health/Health3.png";
import health11 from "../assets/Health/Health11.png";
import health10 from "../assets/Health/Health10.png";
import health12 from "../assets/Health/Health12.png";
import health8 from "../assets/Health/Health8.png";
import heath13 from "../assets/Health/Health13.png";

const healthcareItems = [
  { title: "Dewormer", image: health1, discount: "20% off" },
  { title: "Tick & fleas", image: health9, discount: "20% off" },
  { title: "Skin & coat", image: health3, discount: "20% off" },
  { title: "Joint care", image: health11, discount: "10% off" },
  { title: "Gut health", image: health10, discount: "20% off" },
  { title: "Supplements", image: health12, discount: "50% off" },
  { title: "Eye care", image: health8, discount: "10% off" },
  { title: "Oral care", image: heath13, discount: "5% off" },
];

const HealthProducts = () => {
  const navigate = useNavigate(); // ✅ Correct hook usage

  return (
    <div className="bg-cyan-50 py-10">
      {/* Header Section */}
      <div className="text-center px-4">
        <h2 className="text-5xl font-extrabold text-green-900 mb-2">Pharmacy Store</h2>
        <p className="inline-block bg-blue-500 text-white font-semibold text-3xl px-4 py-1 rounded-lg">
          Up to 50% off
        </p>
        <p className="text-sm text-gray-700 mt-1">
          co-powered by <span className="font-semibold text-black">Vivaldis</span>
        </p>
      </div>

      {/* Horizontal Scroll Product Cards */}
      <div className="mt-10 overflow-x-auto px-4 scrollbar-hide">
        <div className="flex gap-5 md:gap-8 w-max">
          {healthcareItems.map((item, index) => (
            <div
              key={index}
              className="relative w-[200px] min-w-[200px] bg-white rounded-2xl shadow-md p-4 flex-shrink-0 hover:shadow-xl transition duration-300"
            >
              {/* Discount Badge */}
              <span className="absolute top-1 left-3 bg-orange-400 text-white text-xs font-semibold px-2 py-0.5 rounded-md shadow-sm">
                {item.discount}
              </span>

              {/* Product Image */}
              <div className="h-44 flex items-center justify-center mb-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Product Title */}
              <p className="text-center text-base font-semibold text-black">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/pharmacy")}
          className="bg-orange-400 text-white font-bold text-lg px-5 py-2 rounded-lg hover:bg-orange-500 transition duration-300"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HealthProducts;

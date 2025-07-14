import React from "react";
import toy1 from "../assets/Toys/toy1.png";
import toy2 from "../assets/Toys/toy2.png";
import toy3 from "../assets/Toys/toy3.png";
import toy4 from "../assets/Toys/toy4.png";
import toy5 from "../assets/Toys/toy5.png";
import toy6 from "../assets/Toys/toy6.png";
import toy7 from "../assets/Toys/toy7.png";
import toy8 from "../assets/Toys/toy8.png"; 

const toyItems = [
  { title: "Squeaky Toy", image: toy1, discount: "60% off" },
    { title: "Chew Toy", image: toy2, discount: "50% off" },
    { title: "Interactive Toy", image: toy3, discount: "40% off" }, 
    { title: "Plush Toy", image: toy4, discount: "30% off" },
    { title: "Dog Soft Toy", image: toy5, discount: "25% off" },
    { title: "Petgoof Interactive Toy", image: toy6, discount: "25% off" },
    { title: "Robotic Dog Toy", image: toy7, discount: "20% off" },
    { title: "Foodies Toy", image: toy8, discount: "5% off" },   
];

const ToysProducts = () => {
  return (
    <div className="bg-blue-100 py-10">
      {/* Header Section */}
      <div className="text-center px-4">
        <h1 className="text-5xl font-extrabold text-green-900 mb-2">Toys Sale</h1>
        <p className="inline-block bg-blue-400 text-white font-semibold text-xl px-4 py-1 rounded-xl">
          Up to 60% off
        </p>
        <p className="text-sm text-gray-600 mt-1">
          co-powered by <span className="font-semibold text-blue-600">barkbutler</span>
        </p>
      </div>

      {/* Scrollable Cards */}
      <div className="mt-10 overflow-x-auto px-4 scrollbar-hide">
        <div className="flex gap-3 md:gap-4 w-max">
          {toyItems.map((item, index) => (
            <div
              key={index}
              className="relative w-[200px] min-w-[200px] bg-white rounded-2xl shadow-md p-4 flex-shrink-0 hover:shadow-xl transition duration-300"
            >
              {/* Discount Badge */}
              <span className="absolute top-3 left-3 bg-orange-400 text-white text-xs font-semibold px-2 py-0.5 rounded-md shadow-sm">
                {item.discount}
              </span>

              {/* Product Image */}
              <div className="h-40 flex items-center justify-center mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-[200%] object-contain"
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
      <div className="text-center mt-5">
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-lg shadow-md transition">
          Shop Now 
        </button>
      </div>
    </div>
  );
};

export default ToysProducts;



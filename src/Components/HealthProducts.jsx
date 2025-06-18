import React from "react";
import health1 from "../assets/Health/Health1.png";
import health2 from "../assets/Health/Health2.png";
import health3 from "../assets/Health/Health3.png";
import health4 from "../assets/Health/Health4.png";
import health5 from "../assets/Health/Health5.png";
import health6 from "../assets/Health/Health6.png";
import health7 from "../assets/Health/Health7.png";

const healthcareItems = [
  { title: "Vitamins", image: health1 },
  { title: "Supplements", image: health2 },
  { title: "First Aid", image: health3 },
  { title: "Skin Care", image: health4 },
  { title: "Joint Care", image: health5 },
  { title: "Eye & Ear Care", image: health6 },
  { title: "Dental Care", image: health7 },
];

const HealthProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold mb-6 text-center">Healthcare</h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 md:gap-6">
        {healthcareItems.map((item, index) => (
          <div
            key={index}
            className={`overflow-hidden hover:scale-105 transition-transform duration-200 ${
              index === 6 ? "hidden sm:block" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-50 object-cover rounded-2xl"
            />
            <div className="p-2 text-center">
              <p className="text-sm font-bold font-serif">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthProducts;

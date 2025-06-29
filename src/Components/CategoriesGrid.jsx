import React from "react";
import { Link } from "react-router-dom";

// Import images
import food1 from "../assets/Food/Food1.png";
import food2 from "../assets/Food/Food2.png";
import food3 from "../assets/Food/Food3.png";
import food4 from "../assets/Food/Food4.png";
import food5 from "../assets/Food/Food5.png";
import food6 from "../assets/Food/Food6.png";
import food7 from "../assets/Food/Food7.png";
import food8 from "../assets/Food/Food8.png";
import food9 from "../assets/Food/Food9.png";
import food10 from "../assets/Food/Food10.png";
import food11 from "../assets/Food/Food11.png";
import food12 from "../assets/Food/Food12.png";
import food13 from "../assets/Food/Food13.png";
import food14 from "../assets/Food/Food14.png";
import Food15 from "../assets/Food/Food15.png";
//import Food16 from "../assets/Food/Food16.png";
import food17 from "../assets/Food/Food17.png"; 
import food18 from "../assets/Food/Food18.png"; 
import food19 from "../assets/Food/Food19.png";

const categories = [
  { title: "Dog Food", image: food1, link: "/products/dog-food" }, 
  { title: "Cat Food", image: food2, link: "/products/cat-food" }, 
  { title: "Dog Treats", image: food3 },
  { title: "Cat Treats", image: food4 },
  { title: "Fresh Food", image: food5 },
  { title: "Dry Food", image: food18, link: "/products/pet-food" }, 
  { title: "Ice Creams", image: food6 },
  { title: "Prescription Diet", image: food7 },
  { title: "Premium Food", image: food8 },
  { title: "Litter Supplies", image: food9 },
  { title: "Toys", image: food10 },
  { title: "Accessories", image: food11 },
  { title: "Fashion Corner", image: food12 },
  { title: "Pet Cleaning Wipes", image: food13 },
  { title: "Grooming Product", image: food14 },
  { title: "Dog Travel Bag", image: Food15 },
  { title: "Health Care", image: food17 },
  { title: "Walking Essentials", image: food19, link: "/products/pet-pharmacy" },
];

const CategoriesGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 bg-gradient-to-b from-yellow-50 to-white rounded-3xl">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800 font-[Gotham Rounded]">
        🐾 Popular Categories
      </h2>

      {/* Mobile view: only 9 items */}
      <div className="grid grid-cols-3 gap-2 sm:hidden">
        {categories.slice(0, 18).map((category, index) => (
          <Link
            to={category.link || "#"}
            key={index}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:scale-[1.07] transition duration-300 ease-in-out transform hover:shadow-xl"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-36 object-cover rounded-t-2xl"
            />
            <div className="p-2 text-center">
              <p className="text-xs font-bold font-serif text-gray-700">
                {category.title}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop & Tablet view: all items */}
      <div className="hidden sm:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {categories.map((category, index) => (
          <Link
            to={category.link || "#"}
            key={index}
            className="bg-white shadow-md rounded-3xl overflow-hidden hover:scale-105 transition duration-300 ease-in-out transform hover:shadow-lg"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-46 object-cover rounded-t-3xl"
            />
            <div className="py-3 text-center bg-white">
              <p className="text-sm font-semi-bold text-gray-800 font-Nunito">
                {category.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesGrid;

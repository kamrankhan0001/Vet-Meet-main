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

const categories = [
  { title: "Dog Food", image: food1, link: "/products/dog-food" }, 
  { title: "Cat Food", image: food2, link: "/products/cat-food" }, 
  { title: "Dog Treats", image: food3 },
  { title: "Cat Treats", image: food4 },
  { title: "Fresh Food", image: food5 },
  { title: "Ice Creams", image: food6 },
  { title: "Prescription Diet", image: food7 },
  { title: "Premium Food", image: food8 },
  { title: "Litter Supplies", image: food9 },
  { title: "Toys", image: food10 },
  { title: "Grooming", image: food11 },
  { title: "Health Care", image: food12 },
  { title: "Walk & Travel", image: food13 },
  { title: "Accessories", image: food14 },
];

const CategoriesGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-6 text-center">
        Popular categories
      </h2>

      {/* Mobile view: only 9 items */}
      <div className="grid grid-cols-3 gap-2 sm:hidden">
        {categories.slice(0, 9).map((category, index) => (
          <Link // Use Link here
            to={category.link || "#"} // Navigate to category.link or '#' if not defined
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition transform duration-200 "
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-46 object-cover"
            />
            <div className="p-2 text-center">
              <p className="text-sm font-bold font-serif">{category.title}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop & Tablet view: all items */}
      <div className="hidden sm:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-10 ">
        {categories.map((category, index) => (
          <Link // Use Link here
            to={category.link || "#"} // Navigate to category.link or '#' if not defined
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition transform duration-200"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-46 object-cover"
            />
            <div className="p-2 text-center">
              <p className="text-sm font-bold font-Nunito">{category.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesGrid;

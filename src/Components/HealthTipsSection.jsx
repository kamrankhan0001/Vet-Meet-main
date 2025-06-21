import React from "react";
import { Link } from "react-router-dom"; 

import Tip1 from "../assets/Health/HealthTip1.png";
import Tip2 from "../assets/Health/HealthTip2.png";
import Tip3 from "../assets/Health/HealthTip3.png";
import Tip4 from "../assets/Health/HealthTip4.png";
import Tip5 from "../assets/Health/HealthTip5.png";

const articles = [
  {
    title: "Understanding Castration in Pets: A Complete Guide",
    image: Tip1,
    button: "READ NOW",
  },
  {
    title: "Multivitamins for Pets: Why They’re Important for Your Dog",
    image: Tip2,
    button: "READ NOW",
  },
  {
    title: "Dog Bandanas - Stylish Dog Bandanas for All Occasions | Zigly",
    image: Tip3,
    button: "READ NOW",
  },
  {
    title: "Best Grooming Tools for Your Cat and Dog in 2025",
    image: Tip4,
    button: "READ NOW",
  },
  {
    title: "How to Choose the Right Food for Your Pet’s Age",
    image: Tip5,
    button: "READ NOW",
  },
  {
    title: "5 Signs Your Pet Needs a Vet Visit Immediately",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202412/vet-132001148-16x9_0.jpg?VersionId=fNjoETDdYXeM8EWz8u9Ujad6.VZqQW43&size=690:388",
    button: "READ NOW",
  },
];

const HealthTipsSection = () => {
  // Helper to create a URL-friendly slug from the title
  const createSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  };

  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">
        🐾 Health Tips by Experts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-amber-300 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-50 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {article.title}
            </h3>
            
            <Link
              to={`/health-tips/${createSlug(article.title)}`} 
              className="inline-block mt-2 bg-orange-400 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
            >
              {article.button}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="text-orange-600 underline hover:text-orange-800 font-medium">
          View More →
        </button>
      </div>
    </div>
  );
};

export default HealthTipsSection;


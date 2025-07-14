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
  const createSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  };

  return (
    <section className="bg-gradient-to-br from-[#fffdf4] to-[#fff9ee] py-14 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-orange-600 mb-10">
        🐾 Health Tips by Experts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-snug mb-2">
              {article.title}
            </h3>
            <Link
              to={`/health-tips/${createSlug(article.title)}`}
              className="inline-block mt-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-md transition"
            >
              {article.button}
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="text-orange-500 hover:text-orange-600 font-medium underline text-base">
          View More →
        </button>
      </div>
    </section>
  );
};

export default HealthTipsSection;

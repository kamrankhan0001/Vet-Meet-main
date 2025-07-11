import React from "react";
import b1 from "../assets/banner/b1.jpeg";

const SecondBanner = () => {
  return (
    <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] mt-1 flex items-center justify-center relative overflow-hidden rounded-lg">
      {/* Decorative Circles */}
      <div className="absolute w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-white opacity-10 rounded-full -top-6 -left-6"></div>
      <div className="absolute w-12 h-12 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-white opacity-10 rounded-full -bottom-6 -right-6"></div>

      {/* Responsive Image */}
      <img
        src={b1}
        alt="Responsive Banner"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default SecondBanner;

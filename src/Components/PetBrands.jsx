import React from "react";
import { motion } from "framer-motion";

import image1 from "../assets/Brands/brand1.png";
import image2 from "../assets/Brands/brand2.png";
import image3 from "../assets/Brands/brand3.png";
import image4 from "../assets/Brands/brand4.png";
import image5 from "../assets/Brands/brand5.png";
import image6 from "../assets/Brands/brand6.png";
import image7 from "../assets/Brands/brand7.png";
import image8 from "../assets/Brands/brand8.png";

function PetBrands() {
  const products = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
    { id: 7, image: image7 },
    { id: 8, image: image8 },
  ];

  return (
    <div className="overflow-x-auto bg-[#f7fafc] py-10 px-4 md:px-6 lg:px-6">
      <h2 className="text-center font-extrabold text-3xl md:text-4xl text-gray-800 font-[Gotham Rounded] mb-8">
        Brands in Focus
      </h2>

      <div className="flex gap-4 overflow-x-auto whitespace-nowrap px-4 md:px-10 py-2 mx-0.5 md:mx-2">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="w-[230px] h-[230px] flex-shrink-0 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-3"
          >
            <img
              src={product.image}
              alt={`Brand ${product.id}`}
              className="w-full h-auto object-contain rounded-2xl"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default PetBrands;

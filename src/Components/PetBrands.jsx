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
import image9 from "../assets/Brands/brand9.png";
import image10 from "../assets/Brands/brand10.png";

const PetBrands = () => {
  const products = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
    { id: 7, image: image7 },
    { id: 8, image: image8 },
    { id: 9, image: image9 },
    { id: 10, image: image10 },
  ];

  return (
    <div className="bg-white py-10 px-4 md:px-10">
      <h2 className="text-center font-bold text-3xl md:text-4xl text-gray-900 mb-8">
        Brands in focus
      </h2>

      <div className="flex gap-3 overflow-x-auto scrollbar-hide"> 
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="w-[180px] h-[240px] flex-shrink-0 border-[6px] border-orange-400 rounded-[30px] bg-white shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={`Brand ${product.id}`}
              className="w-full h-full object-cover rounded-[26px]"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PetBrands;





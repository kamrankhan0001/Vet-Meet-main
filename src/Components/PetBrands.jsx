import React from "react";
import { motion } from "framer-motion";

import image1 from "../assets/Brands/brand1.png";
import image2 from "../assets/Brands/brand2.png";
import image3 from "../assets/Brands/brand3.png";
import image4 from "../assets/Brands/brand4.png";
import image5 from "../assets/Brands/brand5.png";
import image6 from "../assets/Brands/brand6.png";

function PetBrands() {
  const products = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
  ];

  return (
    <div className="overflow-x-auto">
      <h1 className="text-center font-bold text-[35px] font-[Gotham Rounded] mt-6 mb-2">
        Brands in Focus
      </h1>
      <div className="flex gap-4 overflow-x-auto whitespace-nowrap px-4 py-1 mx-0.5 md:mx-2">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w-[230px] flex-shrink-0 rounded-lg flex flex-col items-center p-4"
          >
            <img
              src={product.image}
              alt={`Brand ${product.id}`}
              className="w-full h-60 object-cover rounded-[30px] mb-3"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default PetBrands;

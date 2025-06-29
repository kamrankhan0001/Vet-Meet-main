import React from "react";

import dog2 from "../assets/Dogs/Dog2.png";
import dog3 from "../assets/Dogs/Dog3.png";
import dog4 from "../assets/Dogs/Dog4.png";
import dog5 from "../assets/Dogs/Dog5.png";
import dog12 from "../assets/Dogs/Dog12.png";
import dog6 from "../assets/Dogs/Dog6.png";
import dog7 from "../assets/Dogs/Dog7.jpg";
import dog10 from "../assets/Dogs/Dog10.png";
import dog11 from "../assets/Dogs/Dog11.png";


const dogImages = [
  { src: dog2, title: "Happy Hound" },
  { src: dog3, title: "Curious Canine" },
  { src: dog4, title: "Loyal Friend" },
  { src: dog5, title: "Sunny Stroll" },
  { src: dog12, title: "Labrador Retriever"},
  { src: dog6, title: "Park Explorer" },
  { src: dog7, title: "Puppy Eyes" },
  { src: dog10, title: "Pug Breed" },
  { src: dog11, title: "French Bulldog" },

];

const DogBreeds = () => {
  return (
 
    <div className="p-4 md:p-6 mx-2 md:mx-15">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
        Explore by Pets
      </h1>

      <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide">
        <div className="flex space-x-2 md:space-x-8 mx-2 md:mx-2">
          {dogImages.map((dog, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-56 md:w-[195px] rounded-xl overflow-hidden shadow-lg "
            >
              <img
                src={dog.src}
                alt={dog.title}
                className="w-full h-65 md:h-60 object-cover"
              />
              <div className="p-2 text-center font-semibold text-sm text-gray-700">
                {dog.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default DogBreeds;

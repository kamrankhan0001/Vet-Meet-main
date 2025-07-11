import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

import card1 from "../assets/banner/card1.jpeg";
import card2 from "../assets/banner/card2.jpeg";
import card3 from "../assets/banner/card3.jpeg";
import card4 from "../assets/banner/card4.jpeg";
import card5 from "../assets/banner/card5.jpeg";
import card6 from "../assets/banner/card6.jpeg";
import card7 from "../assets/banner/card7.jpeg";
import card8 from "../assets/banner/card8.jpeg";

function BannerSection() {
  const banners = [card1, card2, card3, card4, card5, card6, card7, card8];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextBanner();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: nextBanner,
    onSwipedRight: prevBanner,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="relative mt-5" {...handlers}>
      <div className="w-full relative overflow-hidden flex items-center justify-center rounded-lg">
        {/* Image as actual element (dynamic height) */}
        <img
          src={banners[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          loading="lazy"
          className="w-full h-auto object-cover max-h-[500px]" // sets height based on image size
        />

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <button
            className="bg-white text-black p-2 rounded-full shadow-lg"
            onClick={prevBanner}
            aria-label="Previous Banner"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="bg-white text-black p-2 rounded-full shadow-lg"
            onClick={nextBanner}
            aria-label="Next Banner"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
              aria-label={`Go to banner ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BannerSection;

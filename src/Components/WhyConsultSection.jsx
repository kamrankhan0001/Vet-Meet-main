import React from "react";
import {
  FaMobileAlt,
  FaWhatsapp,
  FaUserTie,
  FaHandsHelping,
  FaDog,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: <FaMobileAlt className="text-2xl text-blue-600" />,
    text: (
      <>
        Book easily from <br />
        <span className="font-semibold">anywhere</span>
      </>
    ),
  },
  {
    icon: <FaWhatsapp className="text-2xl text-green-600" />,
    text: (
      <>
        Booking details will be <br />
        <span className="font-semibold">shared on WhatsApp</span>
      </>
    ),
  },
  {
    icon: <FaUserTie className="text-2xl text-indigo-600" />,
    text: (
      <>
        Get connected with your <br />
        <span className="font-semibold">Pet Relationship Manager</span>
      </>
    ),
  },
  {
    icon: <FaHandsHelping className="text-2xl text-orange-600" />,
    text: (
      <>
        Your <span className="font-semibold">PRM</span> will guide you <br />
        through the process
      </>
    ),
  },
  {
    icon: <FaDog className="text-2xl text-pink-600" />,
    text: (
      <>
        A <span className="font-semibold">healthy pet</span> and <br />a happy
        pet parent
      </>
    ),
  },
];

const WhyConsultSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-yellow-100 py-14 px-6 md:px-20 text-center">
      <h3 className="text-lg text-gray-700 mb-4">
        Join 10,330+ pet parents in improving your pet's health
      </h3>
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold mb-10">
        <Link to="/BookConsult">Consult now</Link>
      </button>

      <h2 className="text-2xl md:text-3xl font-bold text-black mb-12">
        Why consult with Vet&Meet?
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4 relative">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative">
            <div className="w-24 h-24 rounded-full border-4 border-blue-200 flex items-center justify-center bg-white shadow-md hover:scale-105 transition-all duration-300">
              {step.icon}
            </div>
            <p className="text-sm text-gray-700 mt-4">{step.text}</p>

            {/* Dotted line connector (only on desktop) */}
            {index !== steps.length - 1 && (
              <div className="hidden md:block absolute top-12 right-[-22px] w-10 h-0 border-t-2 border-dotted border-gray-400"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyConsultSection;
import React, { useEffect, useRef } from "react";
import bannerImage from "../assets/consult/new.jpg";
import { Link } from "react-router-dom";

// Doctor images
import ashitha from "../assets/consult/Doctor1.jpg";
import rashmi from "../assets/consult/Doctor2.jpg";
import anu from "../assets/consult/Doctor3.jpeg";
import bandhanpreet from "../assets/consult/Doctor4.jpg";

// Icons
import {
  FaUserCheck,
  FaCommentDots,
  FaTruck,
  FaStethoscope,
  FaDog,
  FaAllergies,
  FaBone,
  FaPaw,
  FaTooth,
  FaEye,
  FaBaby,
  FaAppleAlt,
  FaDeaf,
} from "react-icons/fa";

// Placeholder components
import WhyConsultSection from "./WhyConsultSection";
import PetHealthSection from "./PetHealthSection";

const PetConsultation = () => {
  const contentRef = useRef(null);

  const handleScroll = () => {
    const section = document.getElementById("consult-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      content.classList.add("opacity-0");
      setTimeout(() => {
        content.classList.remove("opacity-0");
        content.classList.add("opacity-100");
      }, 100);
    }
  }, []);

  const doctors = [
    {
      name: "Dr. Ashitha Suresh",
      specialty: "Gynaecology & Obstetrics",
      experience: "8+ Years",
      degree: "Veterinarian, MVSc PhD",
      image: ashitha,
      buttonText: "Book Consultation",
      buttonLink: "/BookConsult",
    },
    {
      name: "Dr. Rashmi S",
      specialty: "Gynaecology & Obstetrics",
      experience: "6+ Years",
      degree: "MVSc PhD",
      image: rashmi,
      buttonText: "Book Consultation",
      buttonLink: "/BookConsult",
    },
    {
      name: "Dr. Anu GS",
      specialty: "General Medicine",
      experience: "3+ Years",
      degree: "Associate Veterinarian, MVSc",
      image: anu,
      buttonText: "Book Consultation",
      buttonLink: "/BookConsult",
    },
    {
      name: "Dr. Bandhanpreet Kaur",
      specialty: "Parasitology",
      experience: "6+ Years",
      degree: "MVSc",
      image: bandhanpreet,
      buttonText: "Book Consultation",
      buttonLink: "/BookConsult",
    },
  ];

  const features = [
    {
      icon: <FaUserCheck className="text-blue-600 text-3xl mb-2" />,
      title: "Verified Doctors",
    },
    {
      icon: <FaCommentDots className="text-blue-600 text-3xl mb-2" />,
      title: "Free Follow-up",
    },
    {
      icon: <FaTruck className="text-blue-600 text-3xl mb-2" />,
      title: "Medicine Delivery",
    },
  ];

  const categories = [
    { label: "General Checkup", icon: <FaStethoscope /> },
    { label: "New Pet Parent", icon: <FaDog /> },
    { label: "Skin Issues", icon: <FaAllergies /> },
    { label: "Digestive Issues", icon: <FaBone /> },
    { label: "Paws & Limbs", icon: <FaPaw /> },
    { label: "Dental Issues", icon: <FaTooth /> },
    { label: "Ear Issues", icon: <FaDeaf /> },
    { label: "Eye Issues", icon: <FaEye /> },
    { label: "Reproduction", icon: <FaBaby /> },
    { label: "Nutrition", icon: <FaAppleAlt /> },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        <div
          ref={contentRef}
          className="relative z-10 text-center px-6 md:px-10 max-w-2xl transition-opacity duration-1000 ease-in-out"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug">
            Instant & complete vet care, wherever you are
          </h1>
          <p className="text-lg text-white mt-4">
            <span className="bg-blue-100 text-black px-2 py-1 rounded">
              At only ₹299 <br />
            </span>
            get end-to-end support from our vets.
          </p>
          <Link
            to="/BookConsult"
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full flex items-center space-x-2 transition mx-auto w-fit"
          >
            <span>Consult Now</span>
            <span>➔</span>
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="w-full bg-blue-100 py-8 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex-1 bg-white rounded-xl p-6 shadow-md w-full"
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <h3 className="mt-2 text-lg font-semibold text-gray-700">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="py-10 px-6 md:px-20 bg-white" id="consult-section">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Get trusted advice on your pet’s health
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-blue-50 text-blue-700 rounded-full h-32 w-32 mx-auto hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-center text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Doctors */}
      <div className="bg-white py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Meet Our Expert Vets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-56 object-cover rounded-t-xl"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {doc.name}
                </h3>
                <p className="text-blue-600 font-medium">{doc.specialty}</p>
                <p className="text-sm text-gray-500">{doc.experience}</p>
                <p className="text-sm text-gray-600 mt-1">{doc.degree}</p>
                <Link
                  to={doc.buttonLink}
                  className="inline-block mt-4 bg-orange-500 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-orange-600"
                >
                  {doc.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WhyConsultSection />
      <PetHealthSection />
    </>
  );
};

export default PetConsultation;
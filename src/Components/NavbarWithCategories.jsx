import React, { useState } from "react";
import VetAndMeetPage from "../pages/VetAndMeetPage"; // Adjust the path as needed
import {
  FaUser,
  FaShoppingCart,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";


import LoginWithOTP from "../pages/ProfilePage"; 
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    name: "Cats",
    subCategories: [
      <h3 className="font-bold mb-2 ">Cat Food</h3>,

      "  Dry Food",
      "  Wet Food",
      "  Kitten Food",
      "  Premium Food",

      <h3 className="font-bold mb-2">Cat Treats</h3>,
      "  Creamy Treats",
      "  Jerky Treats",
      "  Crunchy Treats",
      "  Kitty Licks",
      "  Kittos",

      "Cat Litter Supplies",
      "  Litter",
      "  Litter Boxes & Toilets",
      "  Cleaning & Deodorizers",
      "  Scooper & Waste Disposal",
      "  Scented Litter",

      "Cat Toys",
      "  Cat Teasers",
      "  Ball & Chaser Toys",
      "  Catnip Toys",
      "  Plush Toys",
      "  Cat Trees & Scratchers",
      "  Smart & Interactive Toys",

      "Pharmacy",
      "  Dewormer",
      "  Tick & Fleas",
      "  Skin Care",
      "  Joint Care",
      "  Gut Health",
      "  Cardiac Care",
      "  Kidney Care",
      "  Liver Care",

      "Cat Walk & Travel Supplies",
      "  GPS Tracker",
      "  Collars",
      "  Leashes",
      "  Harnesses",
      "  Bells & Tags",

      "Cat Clothing",
      "  Summer Clothing",
      "  IPL Jerseys New",
      "  Tshirts & Shirts",
      "  Bandanas & Bowties",
      "  Bells & Tags",
      "  Kurtas",
      "  Dresses",
      "  Lehangas",
      "  Jackets & Sweaters",
      "  Hoodies",

      "Bowls & Feeders",
      "  Water Fountain",
      "  Food & Water Dispenser",
      "  Steel Bowls",
      "  Printed Bowls",
      "  Plastic Bowls",
      "  Slow Feeders & Licky mats",

      "Cat Grooming",
      "  Shampoos & Conditioners",
      "  Brushes & Combs",
      "  Paw & Nail Care",
      "  Ear & eye care",
      "  Trimmers & Nail Clippers",
      "  Grooming Tools",
      "  Towels & Wipes",
      "  Deodorants & Perfumes",
      "  Anti tick & flea",

      "Health & Wellness",
      "  Supplements",
      "  Anti Tick & Fleas",
      "  Calming Aids",
      "  Health Care Aids",
      "  Deworming",
      "  Prescription Diet",
    ],
  },

  {
    name: "Dogs",
    subCategories: [
      "Dog Food",
      "  Dry Food",
      "  Wet Food",
      "  Puppy Food",
      "  Premium Food",

      "Dog Treats",
      "  Creamy Treats",
      "  Jerky Treats",
      "  Crunchy Treats",
      "  Doggy Licks",
      "  Doggos",

      "Dog Litter Supplies",
      "  Litter",
      "  Litter Boxes & Toilets",
      "  Cleaning & Deodorizers",
      "  Scooper & Waste Disposal",
      "  Scented Litter",

      "Dog Toys",
      "  Dog Teasers",
      "  Ball & Chaser Toys",
      "  Dognip Toys",
      "  Plush Toys",
      "  Dog Trees & Scratchers",
      "  Smart & Interactive Toys",

      "Pharmacy",
      "  Dewormer",
      "  Tick & Fleas",
      "  Skin Care",
      "  Joint Care",
      "  Gut Health",
      "  Cardiac Care",
      "  Kidney Care",
      "  Liver Care",

      "Dog Walk & Travel Supplies",
      "  GPS Tracker",
      "  Collars",
      "  Leashes",
      "  Harnesses",
      "  Bells & Tags",

      "Dog Clothing",
      "  Summer Clothing",
      "  IPL Jerseys New",
      "  Tshirts & Shirts",
      "  Bandanas & Bowties",
      "  Bells & Tags",
      "  Kurtas",
      "  Dresses",
      "  Lehangas",
      "  Jackets & Sweaters",
      "  Hoodies",

      "Bowls & Feeders",
      "  Water Fountain",
      "  Food & Water Dispenser",
      "  Steel Bowls",
      "  Printed Bowls",
      "  Plastic Bowls",
      "  Slow Feeders & Licky mats",

      "Dog Grooming",
      "  Shampoos & Conditioners",
      "  Brushes & Combs",
      "  Paw & Nail Care",
      "  Ear & eye care",
      "  Trimmers & Nail Clippers",
      "  Grooming Tools",
      "  Towels & Wipes",
      "  Deodorants & Perfumes",
      "  Anti tick & flea",

      "Health & Wellness",
      "  Supplements",
      "  Anti Tick & Fleas",
      "  Calming Aids",
      "  Health Care Aids",
      "  Deworming",
      "  Prescription Diet",
    ],
  },

  {
    name: "Pharmacy",
    subCategories: [
      "Multivitamins",
      "Calcium supplements",
      "Skin & coat supplements",
      "Weaning Supplement",
      "Calming & Anxiety",
      "Immunity Boosters",
      "Appetite Stimulants",
      "Hematinic & Platelet boosters",
      "Weight Management",
      "Food Supplement",

      "Prescription Diet",

      "Gastro Intestinal",
      "Cardiac",
      "Weight Management",
      "Joint & Mobility",
      "Skin & Coat",
      "Urinary",
      "Recovery",
      "Hypoallergenic",
      "Prescription Diet",

      "System wise Care",

      "Skin care",
      "Eye & ear care",
      "Joint care",
      "Liver care",
      "Cardiac care",
      "Kidney care",
      "Digestive care",
      "Respiratory care",
      "Endocrine care",
      "Preventive care",
      "Oral Care",
      "Wound Care",
      "Pain Medication",

      "Parasite Control",
      "Tick & Flea",
      "Dewormers",
      "Anti-tick & flea",

      "Antibiotics",

      "Dewormer",
      "Tick & Flea",
      "Skin Care",
      "Joint Care",
      "Digestive Care",
      "Cardiac Care",
      "Kidney Care",
      "Liver Care",
      "Eye & Ear",
      "Food Supplement",
      "Pain Medication",
      "Prescription Diet",
      "Anti-biotics",
      "Oral Care",
      "Wound Care",

      "Dewormer",
      "Tick & Flea",
      "Skin Care",
      "Joint Care",
      "Digestive Care",
      "Cardiac Care",
      "Kidney Care",
      "Liver Care",
      "Ear & Eye Care",
      "Respiratory",
      "Supplement",
      "Prescription Diet",
      "Calming & Anxiety",
      "Oral Care",
    ],
  },

  { name: "Henlo", subCategories: ["Bird Feed", "Accessories"] },

  { name: "Shop By Breed", subCategories: ["Labrador", "Persian Cat"] },
  { 
    name: "Consult a Vet",
    subCategories: [
      
    { name: "Book Appointment", path: "/consult-a-vet?action=book" }, 
    { name: "Online Chat", path: "/consult-a-vet?action=chat" } 
] 
 },
  { name: "Vet&Meet Clinic ", subCategories: ["Health Plans", "Checkups"] },
  { name: "Summer Sale", subCategories: ["Discounted Items", "Bundles"] },
];

export default function NavbarWithCategories() {
  const [showModal, setShowModal] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleModal = () => setShowModal(!showModal);
  const toggleAppointmentModal = () =>
    setShowAppointmentModal(!showAppointmentModal);

 
  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
    if (drawerOpen) {
      setDrawerOpen(false); 
    }
  };


  const toggleDrawer = () => setDrawerOpen(!drawerOpen); 

  const toggleCategory = (index) =>
    setOpenIndex(openIndex === index ? null : index);

 
  const handleSubCategoryClick = (item) => {
    if (typeof item === "object") {
      if (item.name === "Book Appointment" && item.action === "openBookAppointmentModal") {
         // This is for opening the modal directly from a specific sub-category click
         toggleAppointmentModal();
         setDrawerOpen(false);
      } else if (item.path) { // If a sub-category has a path, navigate there
        navigate(item.path);
        setDrawerOpen(false); // Close the drawer after navigation
      } else {
        console.log(`Clicked on object: ${item.name}`);
        setDrawerOpen(false);
      }
    } else {
      // This handles plain string sub-categories
      console.log(`Clicked on string: ${item}`);
      setDrawerOpen(false);
    }
  };
  return (
    <>
      {/* TOP NAVBAR */}
      <div
        style={{ backgroundColor: "#FFA500" }}
        className="shadow-md p-4 flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 md:space-x-4 sticky top-0 z-50 font-Nunito"
      >
        {/* Left: Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <button
            onClick={toggleDrawer} 
            className="md:hidden mr-4 focus:outline-none"
            aria-label="Open Menu"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-white">Vet&Meet</h1>
        </div>

        {/* Middle: Search */}
        <div className="relative flex items-center w-full md:w-1/2 px-2">
          <input
            type="search"
            placeholder="Search for products & brands"
            className="w-full border border-black bg-white rounded-md px-4 py-2 pl-10 focus:outline-none"
          />
          <svg
            className="absolute left-5 w-5 h-5 text-gray-500"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42" />
          </svg>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex justify-around w-full md:w-auto space-x-6 md:space-x-4">
          <button onClick={toggleLoginModal} className="flex flex-col items-center text-lg text-white hover:text-black cursor-pointer">

            <FaUser className="text-xl" />
            <span>Profile</span>
          </button>
          <button
            onClick={toggleModal}
            className="flex flex-col items-center text-lg text-white hover:text-black cursor-pointer relative"
          >
            <FaMapMarkerAlt className="text-xl" />
            <span>Delivery</span>
          </button>
          <a
            href="tel:+18001026886"
            className="flex flex-col items-center text-lg text-white hover:text-black"
          >
            <FaPhoneAlt className="text-xl" />
            <span>Call</span>
          </a>
          <button className="flex flex-col items-center text-lg text-white hover:text-black relative cursor-pointer">
            <FaShoppingCart className="text-xl" />
            <span>Cart</span>
            <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
              0
            </span>
          </button>
        </div>
      </div>

      {/* CATEGORY NAVBAR - DESKTOP */}

      <nav className="bg-white shadow-md sticky top-0 z-50 hidden md:block">
        <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex space-x-12 text-gray-800 font-medium relative mx-25 ">
            {categories.map((cat, index) => (
              <div key={index} className="relative group">
                {/* If the main category itself should navigate to the base page */}
    {cat.name === "Consult a Vet" ? (
      <button
        onClick={() => navigate("/consult-a-vet")} // Direct navigation for "Consult a Vet"
        className="hover:text-blue-600 text-xl font-bold"
      >
        {cat.name}
      </button>
    ) : (
      <button className="hover:text-blue-600 text-xl font-bold">
        {cat.name}
      </button>
    )}

               
                {["Cats", "Dogs", "Pharmacy"].includes(cat.name) &&
                  cat.subCategories?.length > 0 && (
                    <div className="absolute left-0 top-full w-[1150px] h-[500px] bg-white border-t border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 overflow-y-auto rounded-lg">
                      <div className="grid grid-cols-5 gap-2 px-8 py-6">
                        {cat.subCategories.map((item, subIndex) => (
                          <div
                            key={subIndex}
                            className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
                            onClick={() => handleSubCategoryClick(item)}
                          >
                            {typeof item === "object" ? item.name : item}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* CATEGORY DRAWER - MOBILE */}
      <div
        className={`fixed inset-0 z-50 transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-amber-500 bg-opacity-40 md:hidden`}
        onClick={toggleDrawer}
      >
        <div
          className="bg-white w-72 h-full p-6 overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <nav>
            {categories.map((cat, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleCategory(index)}
                  className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-blue-600"
                >
                  {cat.name}
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openIndex === index && (
                  <ul className="mt-2 pl-4 space-y-1 text-gray-700">
                    {cat.subCategories.map((sub, i) => (
                      <li
                        key={i}
                        className="cursor-pointer hover:text-blue-600"
                        onClick={() => handleSubCategoryClick(sub)}
                      >
                        {typeof sub === "object" ? sub.name : sub}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* DELIVERY MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-80">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Enter Pincode</h2>
              <button onClick={toggleModal} className="text-red-500 text-xl">
                &times;
              </button>
            </div>
            <input
              type="number"
              placeholder="Enter Pincode"
              className="w-full border border-orange-500 rounded-md px-4 py-2"
            />
            <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md">
              Submit
            </button>
          </div>
        </div>
      )}


      {/* LOGIN WITH OTP MODAL */}
      {showLoginModal && <LoginWithOTP onClose={toggleLoginModal} />}
    </>
  );
}
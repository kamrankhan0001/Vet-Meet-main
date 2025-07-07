import React, { useState, useEffect } from "react";
import ashitha from "../assets/consult/Doctor1.jpg";
import rashmi from "../assets/consult/Doctor2.jpg";
import anu from "../assets/consult/Doctor3.jpeg";
import bandhanpreet from "../assets/consult/Doctor4.jpg";
import Doctorimage from "../assets/consult/Doctor2.jpg";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaDog,
  FaGraduationCap,
  FaStar,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import WhyConsultSection from "./WhyConsultSection";

const timeSlots = [
  { time: "9:00 AM", status: "available" },
  { time: "11:00 AM", status: "available" },
  { time: "3:00 PM", status: "available" },
  { time: "6:00 PM", status: "available" },
];

const BookConsult = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedFee, setSelectedFee] = useState("599");

  const discountedTotal = parseInt(selectedFee) - 100;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const getStatusColor = (status) => {
    if (status === "available") return "bg-green-100 text-green-700";
    if (status === "booked") return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  const handlePayment = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select date and time");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded. Please try again later.");
      return;
    }

    const options = {
      key: "rzp_live_cJVS9HwRfhBXk3", // Use test key if needed
      amount: discountedTotal * 100,
      currency: "INR",
      name: "Vet&Meet",
      description: "Pet Consultation Booking",
      image: "https://yourdomain.com/logo.png",
      handler: function (response) {
        alert(
          "Payment successful! Payment ID: " + response.razorpay_payment_id
        );
      },
      prefill: {
        name: "Pet Owner",
        email: "test@example.com",
        contact: "9876543210",
      },
      notes: {
        booking_time: selectedTime,
        booking_date: selectedDate,
        fee: `₹${discountedTotal}`,
      },
      theme: {
        color: "#f97316",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

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

  return (
    <div className="bg-white text-gray-800 font-sans">
      <div className="flex flex-col md:flex-row gap-8 p-6 md:p-12">
        {/* Left Section */}
        <div className="md:w-1/2">
          <div className="bg-blue-100 rounded-lg p-4 mb-4 text-center grid grid-cols-3 gap-2 text-sm font-medium text-gray-700">
            <div>Pay & Book</div>
            <div>Choose Video/Phone</div>
            <div>Get Prescription</div>
          </div>
          <img
            src={Doctorimage}
            alt="Doctor"
            className="rounded-xl w-full object-cover shadow"
          />
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <FaMapMarkerAlt className="text-orange-500" />
              <span>Bangalore, Hyderabad</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaBriefcase className="text-blue-600" />
              <span>6 Years of Experience</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaDog className="text-lime-600" />
              <span>Specialist in Pets</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaGraduationCap className="text-purple-600" />
              <span>MVSc in Veterinary Sciences</span>
            </div>
          </div>
          <div className="mt-6 text-sm text-gray-700">
            <p className="mb-2 text-blue-500 font-semibold">
              Dr. Pawsome is a compassionate and skilled veterinarian with years
              of experience in treating pets across various conditions.
            </p>
            <p className="mb-2 text-blue-500 font-semibold">
              Known for personalized care and clear communication, she ensures
              both pets and their owners feel supported.
            </p>
            <p className="text-blue-500 font-semibold">
              Her expertise in general checkups, chronic illnesses, and
              preventive care has helped countless furry friends live healthier
              lives.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h3 className="text-orange-600 font-semibold text-sm mb-1">
              Specialist in Pets
            </h3>
            <h1 className="text-2xl font-bold mb-2">
              Dr. Pawsome – 6 Years Experience
            </h1>
            <div className="text-sm text-gray-600 mb-2">
              Languages: Telugu, Hindi, Kannada, English
            </div>
            <div className="flex items-center gap-1 text-yellow-500 mb-4">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="text-gray-600 ml-2">(4.0)</span>
            </div>

            {/* Fee Selection */}
            <div className="border border-orange-400 rounded-md p-4 mb-4">
              <h2 className="text-lg font-semibold mb-2">Select Fee</h2>
              <select
                value={selectedFee}
                onChange={(e) => setSelectedFee(e.target.value)}
                className="w-full border p-2 rounded-md"
              >
                <option value="599">₹599 - Starter Consultation</option>
                <option value="799">₹799 - Full Treatment Plan</option>
              </select>
            </div>

            {/* Date Picker */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                <FaCalendarAlt className="inline-block mr-1" />
                Choose a Date
              </label>
              <input
                type="date"
                className="border w-full p-2 rounded-md"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>

            {/* Time Slots */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">
                <FaClock className="inline-block mr-1" />
                Select Time Slot
              </label>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((slot, i) => (
                  <div key={i} className="flex flex-col items-start">
                    <button
                      disabled={slot.status !== "available"}
                      onClick={() => setSelectedTime(slot.time)}
                      className={`text-sm px-3 py-2 rounded-md w-full text-left ${
                        selectedTime === slot.time
                          ? "bg-orange-500 text-white"
                          : getStatusColor(slot.status)
                      } ${
                        slot.status === "available"
                          ? "hover:bg-orange-100"
                          : "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      {slot.time}
                    </button>
                    <span className="text-xs mt-1 text-gray-500 ml-1">
                      ({slot.status})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Summary */}
            <div className="mb-6 border border-gray-300 p-4 rounded-md shadow-sm">
              <h2 className="text-lg font-semibold mb-2">Payment Summary</h2>
              <div className="flex justify-between">
                <span>Consultation Fee</span>
                <span>₹{selectedFee}</span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>Discount</span>
                <span>- ₹100</span>
              </div>
              <div className="flex justify-between mt-2 font-bold text-blue-600 border-t pt-2">
                <span>Total</span>
                <span>₹{discountedTotal}</span>
              </div>
              <button
                onClick={handlePayment}
                className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              >
                Pay with UPI / Card / Netbanking
              </button>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/9390627367?text=Hello%2C%20I%20want%20to%20book%20a%20consultation%20on%20${selectedDate}%20at%20${selectedTime}%20for%20₹${selectedFee}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 bg-orange-500 text-white text-lg font-semibold py-3 rounded-md shadow text-center transition hover:bg-orange-600 ${
              !selectedTime || !selectedDate
                ? "opacity-50 pointer-events-none"
                : ""
            }`}
          >
            Proceed to WhatsApp
          </a>
        </div>
      </div>

      {/* Meet Our Vets Section */}
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
    </div>
  );
};

export default BookConsult;
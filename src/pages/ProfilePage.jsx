import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; 
import flag from '../assets/Logos/Flag_of_India.png';

const LoginWithOTP = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isRobot, setIsRobot] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Requesting OTP for:', phoneNumber);
    console.log('I am not a robot:', isRobot);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[100] p-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl sm:text-3xl font-light cursor-pointer"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-800">Login with OTP</h2>
        <p className="text-gray-600 text-sm sm:text-base text-center mb-4 sm:mb-6">Enter your log in details</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 sm:mb-6">
            <label htmlFor="phone-number" className="sr-only">Phone number</label>
            <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-orange-500">
              <div className="flex items-center bg-gray-100 px-2 sm:px-3 border-r border-gray-300">
                <img
                  src={flag} 
                  alt="Indian Flag"
                  className="h-4 w-6 sm:w-8 mr-1 sm:mr-2"
                />
                <span className="text-gray-700 text-sm sm:text-base">+91</span>
              </div>
              <input
                type="tel"
                id="phone-number"
                className="w-full p-2 sm:p-3 focus:outline-none text-sm sm:text-base"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className={`w-full py-2 sm:py-3 rounded-md text-sm sm:text-lg font-semibold transition duration-300 flex items-center justify-center ${
              isRobot ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!isRobot}
          >
            Request OTP <span className="ml-2 text-lg sm:text-xl">&rarr;</span>
          </button>

          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-between bg-gray-200 py-2 px-5 rounded-md space-y-2 sm:space-y-0">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="i-am-not-robot"
                className="form-checkbox h-5 w-5 text-blue-600 rounded-md focus:ring-blue-500"
                checked={isRobot}
                onChange={(e) => setIsRobot(e.target.checked)}
              />
              <label htmlFor="i-am-not-robot" className="ml-2 text-gray-700 text-sm">I'm not a robot</label>
            </div>
            <div className="flex flex-col items-end text-xs text-gray-500">
              <div className="flex items-center">
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="h-8 w-8 mr-1" />
                <span>reCAPTCHA</span>
              </div>
              <div className="mt-1">
                <span className="underline mr-1">Privacy</span> - <span className="underline ml-1">Terms</span>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center my-6 sm:my-8">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-2 text-gray-500 text-sm">Or Login Using</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button
            type="button"
            className="w-full bg-green-500 text-white py-2 sm:py-3 rounded-md text-sm sm:text-lg font-semibold hover:bg-green-600 transition duration-300 flex items-center justify-center"
          >
            <FaWhatsapp className="mr-2 text-xl" /> WhatsApp
          </button>

          <p className="text-center text-gray-500 text-xs mt-4 sm:mt-6">
            I accept that I have read & understood
            <br />
            <span className="underline cursor-pointer">Privacy Policy</span> and <span className="underline cursor-pointer">T&Cs</span>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginWithOTP;

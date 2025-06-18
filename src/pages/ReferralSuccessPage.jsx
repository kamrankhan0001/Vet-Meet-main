
import React, { useState } from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';
import { BsMessenger } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import terms from '../assets/banner/refers-and-save.png';


const ReferralSuccessPage = () => {
    const location = useLocation();
    const [referralLink, setReferralLink] = useState(location.state?.referralLink || 'https://Vet&Meet.refr.cc/default/u/placeholder?s=esp&t=cp');

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink)
      .then(() => {
        alert('Referral link copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md text-center">
        <div className="mb-8">
                  <img
                    src={terms} 
                    alt="Refer and Save"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Spread the love and get 10% off.
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          It's a win-win!
        </p>

        {/* Steps section */}
        <div className="flex justify-around items-center mb-10 text-gray-600">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-3 mb-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg> {/* Chat bubble icon */}
            </div>
            <span className="text-sm">Invite your Friend</span>
          </div>
          <div className="flex-grow border-t-2 border-dashed border-gray-300 mx-4"></div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-3 mb-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> {/* Gift icon - using clock as placeholder*/}
            </div>
            <span className="text-sm">They get<br />10% OFF</span>
          </div>
          <div className="flex-grow border-t-2 border-dashed border-gray-300 mx-4"></div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-3 mb-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5.9a2 2 0 011.838 1.134l3.9 7a2 2 0 01-.115 2.11L14 20h-3a2 2 0 01-2-2v-5l-2-2V7z"></path></svg> {/* Discount tag icon */}
            </div>
            <span className="text-sm">You get<br />10% OFF</span>
          </div>
        </div>

        {/* Referral Link Box */}
        <div className="border border-orange-400 p-4 rounded-lg mb-6 bg-orange-50">
          <p className="text-orange-700 break-words">
            {referralLink}
          </p>
        </div>

        <button
          onClick={handleCopyLink}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 mb-8"
        >
          COPY LINK
        </button>

        <p className="text-gray-700 text-lg mb-4">Share on social media</p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-600 text-4xl hover:opacity-80 transition duration-200" />
          </a>
          <a href={`fb-messenger://share/?link=${encodeURIComponent(referralLink)}`} target="_blank" rel="noopener noreferrer">
           <BsMessenger className="text-blue-500 text-4xl hover:opacity-80 transition duration-200" />
          </a>
          <a href={`https://wa.me/?text=${encodeURIComponent('Check out this amazing offer from Vet&Meet! ' + referralLink)}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-green-500 text-4xl hover:opacity-80 transition duration-200" />
          </a>
          <a href={`https://www.instagram.com/?url=${encodeURIComponent(referralLink)}`} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-600 text-4xl hover:opacity-80 transition duration-200" />
          </a>
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Get 10% off on Vet&Meet! ' + referralLink)}`} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-400 text-4xl hover:opacity-80 transition duration-200" />
          </a>
        </div>

        <p className="text-gray-500 text-sm italic">
          Don't worry! You'll see a preview before you post.
        </p>
      </div>
    </div>
  );
};

export default ReferralSuccessPage;
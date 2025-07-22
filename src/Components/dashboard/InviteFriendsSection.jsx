// src/components/dashboard/InviteFriendsSection.jsx
import React, { useState } from 'react';
import { FaShareAlt, FaWhatsapp, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const InviteFriendsSection = () => {
  const [copied, setCopied] = useState(false);
  const shareLink = 'https://Vet&Meet.com/'; // Replace with actual dynamic link if available

  const handleCopyClick = () => {
    navigator.clipboard.writeText(shareLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "Copied!" message after 2 seconds
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy the link. Please copy manually.'); // Fallback alert
    });
  };

  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Invite Friends to Vet&Meet!',
          text: 'Check out Vet&Meet for all your pet needs and get rewards!',
          url: shareLink,
        });
        console.log('Content shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
        alert('Failed to share. Please use the copy link or social media options.');
      }
    } else {
      // Fallback for browsers that do not support Web Share API
      alert('Web Share API is not supported in this browser. Please use the copy link or social media options.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Invite Friends</h2>
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 text-center">
        {/* Illustration */}
        <div className="mb-6 rounded-lg overflow-hidden">
          <img
            src="https://placehold.co/600x250/F0F8FF/000000?text=Friends+with+Pets+Illustration" // Placeholder illustration
            alt="Friends with pets"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Shareable Link Input */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <input
            type="text"
            readOnly
            value={shareLink}
            className="w-full sm:w-auto flex-grow p-3 border border-orange-300 rounded-lg text-gray-700 text-sm bg-gray-50 focus:outline-none"
          />
          <button
            onClick={handleCopyClick}
            className={`flex-shrink-0 px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-200 ${
              copied ? 'bg-green-500' : 'bg-orange-500 hover:bg-orange-600'
            }`}
          >
            {copied ? 'Copied!' : 'Copy!'}
          </button>
          <button
            onClick={handleShareClick}
            className="flex items-center justify-center flex-shrink-0 px-6 py-3 rounded-lg font-semibold bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200"
          >
            <FaShareAlt className="mr-2" /> Share
          </button>
        </div>

        {/* Social Media Sharing */}
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Share on social media</h3>
        <div className="flex justify-center space-x-4">
          <a
            href={`https://wa.me/?text=${encodeURIComponent('Check out Vet&Meet: ' + shareLink)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
            aria-label="Share on WhatsApp"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            aria-label="Share on Facebook"
          >
            <FaFacebookF className="text-2xl" />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareLink)}&title=${encodeURIComponent('Invite Friends to Vet&Meet!')}&summary=${encodeURIComponent('Check out Vet&Meet for all your pet needs and get rewards!')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
            aria-label="Share on LinkedIn"
          >
            <FaLinkedinIn className="text-2xl" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareLink)}&text=${encodeURIComponent('Check out Vet&Meet for all your pet needs and get rewards!')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors"
            aria-label="Share on Twitter"
          >
            <FaTwitter className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InviteFriendsSection;
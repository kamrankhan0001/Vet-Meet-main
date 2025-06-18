
import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import terms from '../assets/banner/refers-and-save.png'; 

const ReferAndSavePage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd perform client-side validation first,
    // then send email and name to your backend API to generate the referral link.
    // For this example, we simulate a link generation directly.

    
    if (!email) {
      alert('Please enter your email address.'); 
      return;
    }
    
    const userSlug = name ? name.toLowerCase().replace(/[^a-z0-9]/g, '') : 'user';
    const generatedLink = `https://Vet&Meet.refr.cc/default/u/${userSlug}?s=esp&t=cp`;

    
    navigate('/referral-success', { state: { referralLink: generatedLink } });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
        {/* Image Section */}
        <div className="mb-8">
          <img
            src={terms} 
            alt="Refer and Save"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
              Your Email
            </label>
            <p className="text-gray-500 text-xs mb-2">
              Referral info and updates will be sent to your email.
            </p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ilovepets@Vet&Meet.com"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
              Your Name (optional)
            </label>
            <p className="text-gray-500 text-xs mb-2">
              To create a personalized invitation link
            </p>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Max"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200"
          >
            GET INVITE LINK
          </button>
        </form>

        <p className="text-center text-gray-500 text-xs mt-6">
          This site is protected by reCAPTCHA and the Google{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Privacy Policy
          </a> and{' '}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Terms of Service
          </a> apply.
        </p>
      </div>
    </div>
  );
};

export default ReferAndSavePage;
import React, { useState } from 'react';

const DeliveryModal = ({ onClose, onSubmitPincode }) => {
  const [pincode, setPincode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pincode.length !== 6) {
      alert('Please enter a valid 6-digit pincode.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await res.json();

      if (data[0].Status === 'Success') {
        const postOffice = data[0].PostOffice[0];
        const city = postOffice.District;
        const state = postOffice.State;

        // Pass the formatted location instead of just the pincode, we can add state also if needed
        onSubmitPincode(`${city}`);
        onClose();
      } else {
        alert('Invalid Pincode. No data found.');
      }
    } catch (error) {
      console.error('Error fetching location:', error);
      alert('Failed to fetch location. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[100] p-4">
      <div className="bg-white p-6 rounded-md w-80 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-light cursor-pointer"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-lg font-medium mb-4 text-center">Enter Pincode</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Enter Pincode"
            className="w-full border border-orange-500 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors duration-200"
          >
            {loading ? 'Checking...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryModal;

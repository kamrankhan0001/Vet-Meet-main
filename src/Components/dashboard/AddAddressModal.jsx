import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';

const AddAddressModal = ({ onClose, onSaveAddress, initialData }) => {
  const [addressData, setAddressData] = useState(initialData || {
    fullName: '',
    mobileNo: '',
    emailId: '',
    houseNo: '',
    roadName: '',
    landmark: '',
    pincode: '',
    townCity: '',
    state: 'Select State',
    isDefault: false,
  });

  const [isSaved, setIsSaved] = useState(false); // ✅ Track if address is saved

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAddressData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      fullName, mobileNo, houseNo, roadName, pincode, townCity, state
    } = addressData;

    if (!fullName || !mobileNo || !houseNo || !roadName || !pincode || !townCity || !state) {
      alert('Please fill in all required fields.');
      return;
    }
    onSaveAddress(addressData);

    setIsSaved(true); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[100] p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative overflow-hidden">
        {/* Header */}
        <div className="bg-white p-4 shadow-sm flex items-center border-b border-gray-200">
          <button onClick={onClose} className="mr-4 text-gray-600 hover:text-gray-800" aria-label="Go Back">
            <FaChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-bold text-gray-800">Add New Address</h2>
        </div>

        {/* Conditional Rendering */}
        {isSaved ? (
          <div className="p-6 text-gray-800 space-y-3">
            <h3 className="text-lg font-semibold">Saved Address</h3>
            <p><strong>Name:</strong> {addressData.fullName}</p>
            <p><strong>Mobile:</strong> {addressData.mobileNo}</p>
            {addressData.emailId && <p><strong>Email:</strong> {addressData.emailId}</p>}
            <p><strong>Address:</strong> {`${addressData.houseNo}, ${addressData.roadName}, ${addressData.landmark}`}</p>
            <p><strong>City:</strong> {addressData.townCity}</p>
            <p><strong>State:</strong> {addressData.state}</p>
            <p><strong>Pincode:</strong> {addressData.pincode}</p>
            <p><strong>Default:</strong> {addressData.isDefault ? 'Yes' : 'No'}</p>

            <button
              onClick={() => setIsSaved(false)} // Allow editing again
              className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Edit Address
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto max-h-[80vh]">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact details</h3>
            <input type="text" name="fullName" value={addressData.fullName} onChange={handleInputChange} placeholder="Full Name*" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            <input type="tel" name="mobileNo" value={addressData.mobileNo} onChange={handleInputChange} placeholder="Mobile No.*" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            <input type="email" name="emailId" value={addressData.emailId} onChange={handleInputChange} placeholder="Email Id (Optional)" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Address</h3>
            <input type="text" name="houseNo" value={addressData.houseNo} onChange={handleInputChange} placeholder="House/Flat/Office No.*" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            <input type="text" name="roadName" value={addressData.roadName} onChange={handleInputChange} placeholder="Road name/Area/Colony*" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            <input type="text" name="landmark" value={addressData.landmark} onChange={handleInputChange} placeholder="Landmark (Optional)" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="pincode" value={addressData.pincode} onChange={handleInputChange} placeholder="Pincode*" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required maxLength="6" />
              <input type="text" name="townCity" value={addressData.townCity} onChange={handleInputChange} placeholder="Town/City*" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            </div>

            <select name="state" value={addressData.state} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white" required>
            <option value="">Select State</option>
            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
              
            
            </select>

            <div className="flex items-center mt-4">
              <input type="checkbox" name="isDefault" id="isDefault" checked={addressData.isDefault} onChange={handleInputChange} className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" />
              <label htmlFor="isDefault" className="ml-2 block text-sm text-gray-900">Set Default Address</label>
            </div>

            <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors mt-6">Save</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddAddressModal;

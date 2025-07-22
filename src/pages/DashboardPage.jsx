// src/pages/DashboardPage.jsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {
  FaBox,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaQuestionCircle,
  FaCog,
  FaSignOutAlt,
  FaEdit,
  FaTrash
} from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';

import OrdersSection from '../Components/dashboard/OrdersSection';
import InviteFriendsSection from '../Components/dashboard/InviteFriendsSection';
import AccountSettingsSection from '../Components/dashboard/AccountSection';
import AddAddressModal from '../Components/dashboard/AddAddressModal';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('orders');
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [savedAddress, setSavedAddress] = useState(null);
  const [editAddressData, setEditAddressData] = useState(null); // <-- holds address when editing

  const handleSaveAddress = (addressData) => {
    setSavedAddress(addressData);
    setShowAddressModal(false);
    setEditAddressData(null); // reset edit state
  };

  const handleEditAddress = () => {
    setEditAddressData(savedAddress);
    setShowAddressModal(true);
  };

  const handleDeleteAddress = () => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      setSavedAddress(null);
      setEditAddressData(null);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/profile');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully!');
      navigate('/profile');
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Failed to log out. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-700">Loading dashboard...</p>
      </div>
    );
  }

  if (!user) return null;

  const displayName = user.displayName || 'User';
  const email = user.email || 'email';

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>Dashboard - Vet&Meet</title>
      </Helmet>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="md:w-1/4 w-full border-r border-gray-200 px-4 py-6">
          <h1 className="text-2xl font-bold mb-1">Hi {displayName}</h1>
          <p className="text-sm text-gray-500 mb-6">Logged in via {email}</p>

          <nav className="space-y-2">
            <SidebarItem label="Orders" icon={<FaBox className="text-orange-500" />} active={activeTab === 'orders'} onClick={() => setActiveTab('orders')} />
            <SidebarItem label="Address" icon={<FaMapMarkerAlt />} active={activeTab === 'address'} onClick={() => setActiveTab('address')} />
            <SidebarItem label="Subscription" icon={<FaCalendarAlt />} active={activeTab === 'subscription'} onClick={() => setActiveTab('subscription')} />
            <SidebarItem label="Invite friends" icon={<FaUserFriends />} active={activeTab === 'invite-friends'} onClick={() => setActiveTab('invite-friends')} />
            <SidebarItem label="FAQ/ Contact Us" icon={<FaQuestionCircle />} onClick={() => navigate('/contact-us')} />
            <SidebarItem label="Account Settings" icon={<FaCog />} active={activeTab === 'account-settings'} onClick={() => setActiveTab('account-settings')} />
            <SidebarItem label="Log Out" icon={<FaSignOutAlt className="text-red-600" />} onClick={handleLogout} textColor="text-red-600" hoverColor="hover:bg-red-50" />
          </nav>
        </aside>

        {/* Main Section */}
        <main className="md:w-3/4 w-full px-6 py-8">
          {activeTab === 'orders' && <OrdersSection />}
          {activeTab === 'address' && (
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-4">My Address</h1>
              {savedAddress ? (
                <div className="bg-white border rounded-lg p-4 shadow-md text-gray-800 space-y-1 relative">
                  <p><strong>Name:</strong> {savedAddress.fullName}</p>
                  <p><strong>Mobile:</strong> {savedAddress.mobileNo}</p>
                  <p><strong>Email:</strong> {savedAddress.emailId || 'N/A'}</p>
                  <p><strong>Address:</strong> {`${savedAddress.houseNo}, ${savedAddress.roadName}, ${savedAddress.landmark || ''}`}</p>
                  <p><strong>City:</strong> {savedAddress.townCity}</p>
                  <p><strong>State:</strong> {savedAddress.state}</p>
                  <p><strong>Pincode:</strong> {savedAddress.pincode}</p>
                  <p><strong>Default Address:</strong> {savedAddress.isDefault ? 'Yes' : 'No'}</p>

                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={handleEditAddress}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      <FaEdit /> Edit
                    </button>
                    <button
                      onClick={handleDeleteAddress}
                      className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">No address added yet.</p>
              )}

              <button
                onClick={() => {
                  setShowAddressModal(true);
                  setEditAddressData(null); // reset edit
                }}
                className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
              >
                Add New Address
              </button>

              {showAddressModal && (
                <AddAddressModal
                  onClose={() => {
                    setShowAddressModal(false);
                    setEditAddressData(null);
                  }}
                  onSaveAddress={handleSaveAddress}
                  initialData={editAddressData} // pass address for editing
                />
              )}
            </div>
          )}
          {activeTab === 'subscription' && <div>Subscription coming soon...</div>}
          {activeTab === 'invite-friends' && <InviteFriendsSection />}
          {activeTab === 'account-settings' && <AccountSettingsSection />}
        </main>
      </div>
    </div>
  );
};

const SidebarItem = ({ label, icon, active, onClick, textColor = 'text-gray-700', hoverColor = 'hover:bg-gray-50' }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full justify-between px-4 py-3 rounded-md text-left ${textColor} ${hoverColor} ${active ? 'bg-orange-100 text-orange-600 font-semibold' : ''} transition`}
    >
      <span className="flex items-center space-x-3">
        {icon}
        <span>{label}</span>
      </span>
      <FiChevronRight className="text-gray-400" />
    </button>
  );
};

export default DashboardPage;

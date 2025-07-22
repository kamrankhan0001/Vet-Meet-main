// src/components/dashboard/AccountSettingsSection.jsx
import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import {
  updateProfile,
  updateEmail,
  updatePassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { FaPencilAlt, FaSave } from 'react-icons/fa';

const AccountSettingsSection = () => {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('N/A');
  const [newPassword, setNewPassword] = useState('');

  const [editingField, setEditingField] = useState(null); // 'name', 'email', 'password'
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setDisplayName(currentUser.displayName || '');
        setEmail(currentUser.email || '');
        setPhone(currentUser.phoneNumber || 'N/A');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSave = async (field) => {
    try {
      setMessage('');
      setError('');
      if (field === 'name') {
        await updateProfile(user, { displayName });
        setMessage('Name updated successfully.');
      } else if (field === 'email') {
        await updateEmail(user, email);
        setMessage('Email updated successfully.');
      } else if (field === 'password') {
        await updatePassword(user, newPassword);
        setMessage('Password updated successfully.');
        setNewPassword('');
      }
      setEditingField(null);
    } catch (err) {
      setError(err.message);
    }
  };

  if (!user) {
    return (
      <div className="text-red-500 text-center p-4">
        <p>User not logged in.</p>
        <p>Please ensure you are logged in.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h2>

      {message && <p className="text-green-600 mb-4">{message}</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="space-y-6">
        {/* Name */}
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
          <div className="flex items-center justify-between">
            {editingField === 'name' ? (
              <>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="border p-2 rounded-md w-full mr-3"
                />
                <button
                  onClick={() => handleSave('name')}
                  className="text-green-600 hover:text-green-800"
                >
                  <FaSave />
                </button>
              </>
            ) : (
              <>
                <span className="text-gray-900 text-lg font-semibold">{displayName}</span>
                <button
                  onClick={() => setEditingField('name')}
                  className="text-orange-500 hover:text-orange-600"
                  aria-label="Edit Name"
                >
                  <FaPencilAlt />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <label className="block text-gray-700 text-sm font-medium mb-1">Email address</label>
          <div className="flex items-center justify-between">
            {editingField === 'email' ? (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border p-2 rounded-md w-full mr-3"
                />
                <button
                  onClick={() => handleSave('email')}
                  className="text-green-600 hover:text-green-800"
                >
                  <FaSave />
                </button>
              </>
            ) : (
              <>
                <span className="text-gray-900 text-lg font-semibold">{email}</span>
                <button
                  onClick={() => setEditingField('email')}
                  className="text-orange-500 hover:text-orange-600"
                  aria-label="Edit Email"
                >
                  <FaPencilAlt />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Phone (read-only) */}
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <label className="block text-gray-700 text-sm font-medium mb-1">Mobile Number</label>
          <span className="text-gray-900 text-lg font-semibold">{phone}</span>
        </div>

        {/* Password */}
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <label className="block text-gray-700 text-sm font-medium mb-1">Change Password</label>
          <div className="flex items-center justify-between">
            {editingField === 'password' ? (
              <>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New Password"
                  className="border p-2 rounded-md w-full mr-3"
                />
                <button
                  onClick={() => handleSave('password')}
                  className="text-green-600 hover:text-green-800"
                >
                  <FaSave />
                </button>
              </>
            ) : (
              <>
                <span className="text-gray-600">••••••••••</span>
                <button
                  onClick={() => setEditingField('password')}
                  className="text-orange-500 hover:text-orange-600"
                  aria-label="Edit Password"
                >
                  <FaPencilAlt />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsSection;

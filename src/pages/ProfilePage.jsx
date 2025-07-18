import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; 
//import flag from '../assets/Logos/flag.png';
import flag from '../assets/logos/flag.png';




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


// // src/pages/ProfilePage.jsx (or LoginWithOTP.jsx)
// import React, { useState, useEffect, useRef} from 'react';
// import { FaWhatsapp } from 'react-icons/fa';
// import flag from '../assets/logos/flag.png'; // Ensure this path is correct

// // Import Firebase services from your centralized firebase.js file
// import { auth } from '../firebase'; // <--- IMPORTANT CHANGE
// import { RecaptchaVerifier, signInWithPhoneNumber, signInWithCustomToken, signInAnonymously } from 'firebase/auth';


// const LoginWithOTP = ({ onClose }) => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [confirmationResult, setConfirmationResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [recaptchaResolved, setRecaptchaResolved] = useState(false);

//   // Use a ref for RecaptchaVerifier to manage its lifecycle
//   const recaptchaVerifierRef = useRef(null);

//   useEffect(() => {
//     // Authenticate Firebase (anonymous or custom token) - moved here from main firebase.js init
//     // This part should ideally be handled by an AuthContext higher up
//     // but for a standalone component that needs auth state, it can be here.
//     const authenticateFirebase = async () => {
//       try {
//         // Only sign in if not already authenticated
//         if (!auth.currentUser) {
//           if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
//             await signInWithCustomToken(auth, __initial_auth_token);
//             console.log("Firebase: Signed in with custom token.");
//           } else {
//             await signInAnonymously(auth);
//             console.log("Firebase: Signed in anonymously.");
//           }
//         }
//       } catch (e) {
//         console.error("Firebase authentication error during init:", e);
//         setError("Failed to initialize Firebase authentication: " + e.message);
//       }
//     };

//     authenticateFirebase();


//     // Setup reCAPTCHA Verifier
//     // Ensure auth is available before setting up RecaptchaVerifier
//     if (auth && !recaptchaVerifierRef.current) {
//       recaptchaVerifierRef.current = new RecaptchaVerifier(auth, 'recaptcha-container', {
//         'size': 'invisible',
//         'callback': (response) => {
//           setRecaptchaResolved(true);
//           setError('');
//           console.log("reCAPTCHA resolved:", response);
//         },
//         'expired-callback': () => {
//           setRecaptchaResolved(false);
//           setError('reCAPTCHA expired. Please try again.');
//           console.log("reCAPTCHA expired.");
//         },
//         'error-callback': (error) => {
//           setRecaptchaResolved(false);
//           setError('reCAPTCHA error. Please refresh and try again.');
//           console.error("reCAPTCHA error:", error);
//         }
//       });
//       // Render the reCAPTCHA widget immediately after setup
//       recaptchaVerifierRef.current.render();
//     }

//     // Cleanup reCAPTCHA when component unmounts
//     return () => {
//       if (recaptchaVerifierRef.current) {
//         recaptchaVerifierRef.current.clear();
//         recaptchaVerifierRef.current = null;
//       }
//     };
//   }, []); // Empty dependency array means this runs once on mount

//   const handleRequestOtp = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     if (phoneNumber.length !== 10) {
//       setError('Please enter a valid 10-digit phone number.');
//       setLoading(false);
//       return;
//     }

//     if (!recaptchaResolved) {
//       setError('Please complete the "I\'m not a robot" verification.');
//       setLoading(false);
//       return;
//     }

//     // Ensure recaptchaVerifierRef.current is available
//     if (!recaptchaVerifierRef.current) {
//       setError("reCAPTCHA verifier not initialized. Please refresh the page.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const result = await signInWithPhoneNumber(auth, `+91${phoneNumber}`, recaptchaVerifierRef.current);
//       setConfirmationResult(result);
//       setOtpSent(true);
//       setLoading(false);
//       alert('OTP has been sent to your phone number!'); // Replace with custom modal
//     } catch (err) {
//       console.error("Error sending OTP:", err);
//       setError(`Failed to send OTP: ${err.message}`);
//       setLoading(false);
//       setRecaptchaResolved(false); // Reset reCAPTCHA on error
//       if (recaptchaVerifierRef.current) {
//         recaptchaVerifierRef.current.render().then(function(widgetId) {
//           window.grecaptcha.reset(widgetId);
//         });
//       }
//     }
//   };

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     if (!confirmationResult) {
//       setError('No OTP request initiated. Please request OTP first.');
//       setLoading(false);
//       return;
//     }

//     if (otp.length !== 6) { // Assuming 6-digit OTP
//       setError('Please enter a 6-digit OTP.');
//       setLoading(false);
//       return;
//     }

//     try {
//       await confirmationResult.confirm(otp);
//       setLoading(false);
//       alert('Successfully logged in!'); // Replace with custom modal
//       onClose(); // Close the modal on successful login
//       // You might want to navigate the user or update global user state here
//     } catch (err) {
//       console.error("Error verifying OTP:", err);
//       setError(`Failed to verify OTP: ${err.message}`);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[100] p-4">
//       <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-md relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl sm:text-3xl font-light cursor-pointer"
//           aria-label="Close"
//         >
//           &times;
//         </button>

//         <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-800">Login with OTP</h2>
//         <p className="text-gray-600 text-sm sm:text-base text-center mb-4 sm:mb-6">Enter your log in details</p>

//         <form onSubmit={otpSent ? handleVerifyOtp : handleRequestOtp}>
//           <div className="mb-4 sm:mb-6">
//             <label htmlFor="phone-number" className="sr-only">Phone number</label>
//             <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-orange-500">
//               <div className="flex items-center bg-gray-100 px-2 sm:px-3 border-r border-gray-300">
//                 <img
//                   src={flag}
//                   alt="Indian Flag"
//                   className="h-4 w-6 sm:w-8 mr-1 sm:mr-2"
//                 />
//                 <span className="text-gray-700 text-sm sm:text-base">+91</span>
//               </div>
//               <input
//                 type="tel"
//                 id="phone-number"
//                 className="w-full p-2 sm:p-3 focus:outline-none text-sm sm:text-base"
//                 placeholder="Phone number"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 required
//                 disabled={otpSent || loading} // Disable if OTP is sent or loading
//               />
//             </div>
//           </div>

//           {otpSent && (
//             <div className="mb-4 sm:mb-6">
//               <label htmlFor="otp" className="sr-only">OTP</label>
//               <input
//                 type="text"
//                 id="otp"
//                 className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
//                 placeholder="Enter OTP"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 required
//                 disabled={loading} // Disable if loading
//               />
//             </div>
//           )}

//           {error && (
//             <p className="text-red-500 text-sm text-center mb-4">{error}</p>
//           )}

//           {/* reCAPTCHA container - Firebase will render the widget here */}
//           {!otpSent && ( // Only show reCAPTCHA container before OTP is sent
//             <div id="recaptcha-container" className="mb-4"></div>
//           )}


//           <button
//             type="submit"
//             className={`w-full py-2 sm:py-3 rounded-md text-sm sm:text-lg font-semibold transition duration-300 flex items-center justify-center ${
//               loading
//                 ? 'bg-blue-400 text-white cursor-not-allowed'
//                 : (recaptchaResolved && !otpSent) || (otpSent && otp.length === 6)
//                   ? 'bg-orange-500 text-white hover:bg-orange-600'
//                   : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//             }`}
//             disabled={loading || ((!recaptchaResolved || phoneNumber.length !== 10) && !otpSent) || (otpSent && otp.length !== 6)}
//           >
//             {loading ? (
//               'Loading...'
//             ) : otpSent ? (
//               <>Verify OTP <span className="ml-2 text-lg sm:text-xl">&rarr;</span></>
//             ) : (
//               <>Request OTP <span className="ml-2 text-lg sm:text-xl">&rarr;</span></>
//             )}
//           </button>

//           <div className="relative flex items-center justify-center my-6 sm:my-8">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <span className="flex-shrink mx-2 text-gray-500 text-sm">Or Login Using</span>
//             <div className="flex-grow border-t border-gray-300"></div>
//           </div>

//           <button
//             type="button"
//             className="w-full bg-green-500 text-white py-2 sm:py-3 rounded-md text-sm sm:text-lg font-semibold hover:bg-green-600 transition duration-300 flex items-center justify-center"
//           >
//             <FaWhatsapp className="mr-2 text-xl" /> WhatsApp
//           </button>

//           <p className="text-center text-gray-500 text-xs mt-4 sm:mt-6">
//             I accept that I have read & understood
//             <br />
//             <span className="underline cursor-pointer">Privacy Policy</span> and <span className="underline cursor-pointer">T&Cs</span>.
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginWithOTP;


// import React, { useState } from 'react';
// import { FaWhatsapp } from 'react-icons/fa';
// import { auth } from '../firebase'; // your firebase.js path
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
// import flag from '../assets/logos/flag.png';

// const LoginWithOTP = ({ onClose }) => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOtp] = useState('');
//   const [confirmationResult, setConfirmationResult] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const setupRecaptcha = () => {
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
//         size: 'invisible',
//         callback: (response) => {
//           // reCAPTCHA solved - will proceed
//         },
//         'expired-callback': () => {
//           setError('reCAPTCHA expired. Please try again.');
//         },
//       });
//     }
//   };

//   const handleSendOTP = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       setupRecaptcha();
//       const appVerifier = window.recaptchaVerifier;
//       const fullPhone = `+91${phoneNumber}`;
//       const result = await signInWithPhoneNumber(auth, fullPhone, appVerifier);
//       setConfirmationResult(result);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVerifyOTP = async (e) => {
//     e.preventDefault();
//     if (!confirmationResult) return;

//     try {
//       await confirmationResult.confirm(otp);
//       alert('Phone number verified!');
//       onClose(); // close modal or redirect
//     } catch (err) {
//       setError('Invalid OTP. Please try again.');
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[100] p-4">
//       <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-md relative">
//         <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-3xl">
//           &times;
//         </button>

//         <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Login with OTP</h2>

//         <form onSubmit={confirmationResult ? handleVerifyOTP : handleSendOTP}>
//           {/* Phone Number Input */}
//           {!confirmationResult && (
//             <>
//               <div className="mb-4">
//                 <div className="flex border border-gray-300 rounded-md overflow-hidden">
//                   <div className="flex items-center bg-gray-100 px-3 border-r border-gray-300">
//                     <img src={flag} alt="flag" className="w-5 h-4 mr-2" />
//                     <span>+91</span>
//                   </div>
//                   <input
//                     type="tel"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     placeholder="Enter phone number"
//                     className="w-full p-3 focus:outline-none"
//                     required
//                   />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition"
//               >
//                 {loading ? 'Sending...' : 'Request OTP'}
//               </button>
//             </>
//           )}

//           {/* OTP Input */}
//           {confirmationResult && (
//             <>
//               <div className="mb-4 mt-4">
//                 <input
//                   type="text"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   placeholder="Enter OTP"
//                   className="w-full p-3 border border-gray-300 rounded-md"
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition"
//               >
//                 Verify OTP
//               </button>
//             </>
//           )}
//         </form>

//         {error && <p className="text-red-500 mt-4 text-center text-sm">{error}</p>}

//         {/* Invisible recaptcha */}
//         <div id="recaptcha-container"></div>
//       </div>
//     </div>
//   );
// };

// export default LoginWithOTP;

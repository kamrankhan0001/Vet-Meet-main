// import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import { useCart } from '../context/CartContext'; 
// import { useNavigate } from 'react-router-dom'; 

// const PaymentGatewayPage = () => {
//   const { cartItems, getCartTotalPrice } = useCart();
//   const navigate = useNavigate();

//   // State for form fields
//   const [email, setEmail] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [address, setAddress] = useState('');
//   const [apartment, setApartment] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('Bihar'); // Default state
//   const [pincode, setPincode] = useState('');
//   const [phone, setPhone] = useState('');
//   const [saveInfo, setSaveInfo] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState('razorpay'); // 'razorpay' or 'cod'
//   const [useSameBillingAddress, setUseSameBillingAddress] = useState(true);

//   // Redirect to cart if no items in cart
//   useEffect(() => {
//     if (cartItems.length === 0) {
//       navigate('/cart');
//     }
//   }, [cartItems, navigate]);

//   // Calculate order summary details
//   const subtotal = getCartTotalPrice();
//   const deliveryFee = 0; 
//   const platformFee = 10; 
//   const totalAmount = subtotal + deliveryFee + platformFee;

//   const handlePayNow = () => {
//     // In a real application, you would integrate with Razorpay or your payment gateway here.
//     // This is a placeholder for the payment processing logic.
  

//     alert('Redirecting to payment gateway');
//     console.log('Order Details:', {
//       contact: email,
//       delivery: {
//         firstName, lastName, address, apartment, city, state, pincode, phone
//       },
//       paymentMethod,
//       cartItems,
//       totalAmount
//     });
//     // For a real app, after successful payment, you'd clear the cart
//     // and navigate to an order confirmation page.
//      clearCart(); // If you add a clearCart function to your context
//     // navigate('/order-confirmation');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 font-Inter">
//       <Helmet>
//         <title>Checkout - Vet&Meet</title>
//         <meta name="description" content="Complete your purchase at Vet&Meet." />
//       </Helmet>

//       {/* Top Header */}
//       <div className="bg-white shadow-sm p-4 sticky top-0 z-10 flex justify-between items-center border-b border-gray-200">
//         <button onClick={() => navigate('/cart')} className="text-gray-600 hover:text-gray-800">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
//           </svg>
//         </button>
//         <h1 className="text-xl font-bold text-gray-800">Checkout - Vet&Meet</h1>
//         <div className="flex items-center space-x-2">
//           {/* Add bookmark/share icons if desired */}
//         </div>
//       </div>

//       <div className="container mx-auto p-4 lg:flex lg:space-x-6">
//         {/* Left Section: Contact & Delivery */}
//         <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-md mb-6 lg:mb-0">
//           {/* Total Savings - Top Banner */}
//           <div className="bg-green-100 text-green-700 px-4 py-2 rounded-md mb-6 font-semibold">
//             Your total Savings ₹132
//           </div>

//           {/* Order Progress Indicator (Cart -> Address -> Payment) */}
//           <div className="flex justify-between items-center mb-8 px-4 relative">
//             <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>
//             <div className="flex flex-col items-center z-10">
//               <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
//               <span className="text-sm text-gray-700 mt-1">Cart</span>
//             </div>
//             <div className="flex flex-col items-center z-10">
//               <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
//               <span className="text-sm text-gray-700 mt-1">Address</span>
//             </div>
//             <div className="flex flex-col items-center z-10">
//               <div className="bg-gray-300 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
//               <span className="text-sm text-gray-500 mt-1">Payment</span>
//             </div>
//           </div>

//           {/* Contact Information */}
//           <div className="mb-8 pb-6 border-b border-gray-200">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold text-gray-800">Contact</h3>
//               <button className="text-blue-600 text-sm">Log in</button>
//             </div>
//             <label className="block mb-4">
//               <span className="text-gray-700 text-sm">Email (for Order Updates)</span>
//               <input
//                 type="email"
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </label>
//             <label className="flex items-center text-gray-700 text-sm">
//               <input
//                 type="checkbox"
//                 className="form-checkbox h-4 w-4 text-orange-500 rounded"
//                 checked={saveInfo}
//                 onChange={(e) => setSaveInfo(e.target.checked)}
//               />
//               <span className="ml-2">Send me order updates, news and offers on Email and WhatsApp</span>
//             </label>
//           </div>

//           {/* Delivery Information */}
//           <div className="mb-8 pb-6 border-b border-gray-200">
//             <h3 className="text-xl font-bold text-gray-800 mb-4">Delivery</h3>
//             <span className="block text-gray-700 text-sm mb-2">Delivery/Region India</span>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <input
//                 type="text"
//                 placeholder="First name"
//                 className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="Last name"
//                 className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//             </div>
//             <input
//               type="text"
//               placeholder="Address"
//               className="block w-full border border-gray-300 rounded-md shadow-sm p-2 mb-4 focus:ring-orange-500 focus:border-orange-500"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Apartment, suite, etc. (optional)"
//               className="block w-full border border-gray-300 rounded-md shadow-sm p-2 mb-4 focus:ring-orange-500 focus:border-orange-500"
//               value={apartment}
//               onChange={(e) => setApartment(e.target.value)}
//             />
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//               <input
//                 type="text"
//                 placeholder="City"
//                 className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//               />
//               <select
//                 className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500"
//                 value={state}
//                 onChange={(e) => setState(e.target.value)}
//               >
//                 <option value="Bihar">Bihar</option>
//                 <option value="Karnataka">Karnataka</option>
//                 <option value="Delhi">Delhi</option>
//                 {/* Add more states as needed */}
//               </select>
//               <input
//                 type="text"
//                 placeholder="PIN code"
//                 className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500"
//                 value={pincode}
//                 onChange={(e) => setPincode(e.target.value)}
//               />
//             </div>
//             <input
//               type="tel"
//               placeholder="Phone"
//               className="block w-full border border-gray-300 rounded-md shadow-sm p-2 mb-4 focus:ring-orange-500 focus:border-orange-500"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             <label className="flex items-center text-gray-700 text-sm">
//               <input
//                 type="checkbox"
//                 className="form-checkbox h-4 w-4 text-orange-500 rounded"
//                 checked={saveInfo} // Re-using saveInfo for delivery details too
//                 onChange={(e) => setSaveInfo(e.target.checked)}
//               />
//               <span className="ml-2">Save this information for next time</span>
//             </label>
//           </div>

//           {/* Choose your payment method */}
//           <div className="mb-8 pb-6 border-b border-gray-200">
//             <h3 className="text-xl font-bold text-gray-800 mb-4">Choose your payment method</h3>
//             <p className="text-sm text-gray-600 mb-4">Enter your shipping address to view available shipping methods.</p>

//             <div className="text-sm text-gray-600 mb-4">
//               All transactions are secure and encrypted.
//             </div>

//             {/* Payment Options */}
//             <div className="border border-gray-300 rounded-md mb-4 overflow-hidden">
//               <label className="flex items-center p-4 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="paymentMethod"
//                   value="razorpay"
//                   checked={paymentMethod === 'razorpay'}
//                   onChange={(e) => setPaymentMethod(e.target.value)}
//                   className="form-radio h-4 w-4 text-orange-500 focus:ring-orange-500"
//                 />
//                 <span className="ml-3 font-semibold text-gray-800">Razorpay Secure (UPI, Cards, Wallets, NetBanking)</span>
//                 <div className="ml-auto flex items-center space-x-2">
//                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/UPI-Logo-Vector.svg/1200px-UPI-Logo-Vector.svg.png" alt="UPI" className="h-4" />
//                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4" />
//                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-4" />
//                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/RuPay_card_logo.svg/1200px-RuPay_card_logo.svg.png" alt="RuPay" className="h-4" />
//                   <span className="text-gray-500 ml-2 cursor-pointer">+15</span>
//                 </div>
//               </label>
//               {paymentMethod === 'razorpay' && (
//                 <div className="bg-gray-50 p-4 border-t border-gray-200 text-sm text-gray-700">
//                   After clicking "Pay now", you will be redirected to Razorpay Secure (UPI, Cards, Wallets, NetBanking) to complete your purchase securely.
//                 </div>
//               )}
//             </div>

//             <div className="border border-gray-300 rounded-md overflow-hidden">
//               <label className="flex items-center p-4 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="paymentMethod"
//                   value="cod"
//                   checked={paymentMethod === 'cod'}
//                   onChange={(e) => setPaymentMethod(e.target.value)}
//                   className="form-radio h-4 w-4 text-orange-500 focus:ring-orange-500"
//                 />
//                 <span className="ml-3 font-semibold text-gray-800">Cash on Delivery (COD)</span>
//               </label>
//               {paymentMethod === 'cod' && (
//                 <div className="bg-gray-50 p-4 border-t border-gray-200 text-sm text-gray-700">
//                   Pay with cash when your order is delivered.
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Billing address */}
//           <div>
//             <h3 className="text-xl font-bold text-gray-800 mb-4">Billing address</h3>
//             <label className="flex items-center text-gray-700 text-sm mb-4">
//               <input
//                 type="checkbox"
//                 className="form-checkbox h-4 w-4 text-orange-500 rounded"
//                 checked={useSameBillingAddress}
//                 onChange={(e) => setUseSameBillingAddress(e.target.checked)}
//               />
//               <span className="ml-2">Same as shipping address</span>
//             </label>
//             {/* Additional billing address fields would go here if useSameBillingAddress is false */}
//             {!useSameBillingAddress && (
//               <div className="mt-4 border p-4 rounded-md bg-gray-50">
//                 <p className="font-semibold mb-2">Enter separate billing address:</p>
//                 {/* Replicate address input fields here */}
//                 <input type="text" placeholder="Billing Address" className="block w-full border border-gray-300 rounded-md shadow-sm p-2 mb-2" />
//                 {/* ... more fields */}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Section: Order Summary */}
//         <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md h-fit">
//           <h3 className="text-xl font-bold text-gray-800 mb-4">Order summary</h3>
//           {cartItems.map(item => (
//             <div key={item.id} className="flex justify-between items-center mb-4">
//               <div className="flex items-center">
//                 <div className="relative mr-3">
//                   <img
//                     src={item.image || 'placeholder.jpeg'}
//                     alt={item.name}
//                     className="w-12 h-12 object-cover rounded-md border border-gray-200"
//                   />
//                   <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                     {item.quantity}
//                   </span>
//                 </div>
//                 <div className="text-sm">
//                   <p className="font-semibold text-gray-800">{item.name}</p>
//                   <p className="text-gray-600">Size - {item.selectedWeight || 'N/A'}</p>
//                 </div>
//               </div>
//               <span className="text-gray-800 font-semibold">₹{(item.price * item.quantity).toFixed(2)}</span>
//             </div>
//           ))}

//           {/* Discount/Gift card */}
//           <div className="flex items-center border-t border-b border-gray-200 py-4 my-4">
//             <input
//               type="text"
//               placeholder="Discount code or gift card"
//               className="flex-grow border border-gray-300 rounded-md p-2 mr-2 focus:ring-orange-500 focus:border-orange-500"
//             />
//             <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
//               Apply
//             </button>
//           </div>

//           {/* Price Details */}
//           <h4 className="text-lg font-semibold text-gray-800 mb-3">Price Details ({cartItems.length} Item)</h4>
//           <div className="space-y-2 text-sm text-gray-700 mb-4">
//             <div className="flex justify-between">
//               <span>Total MRP</span>
//               <span>₹{subtotal.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Discount On MRP</span>
//               <span className="text-green-600">- ₹132</span> {/* Hardcoded discount from image */}
//             </div>
//             <div className="flex justify-between">
//               <span>Delivery Fee</span>
//               <span className="text-green-600">FREE</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Platform Fee</span>
//               <span>₹{platformFee.toFixed(2)}</span>
//             </div>
//           </div>

//           <div className="flex justify-between items-center border-t pt-4 font-bold text-gray-900 text-lg">
//             <span>Total Amount</span>
//             <span>₹{totalAmount.toFixed(2)}</span>
//           </div>

//           {/* Pay now button - Fixed at bottom on mobile, inline on desktop */}
//           <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg z-20 border-t border-gray-200">
//              <button
//                 onClick={handlePayNow}
//                 className="w-full bg-orange-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition duration-300"
//              >
//                 Pay now
//              </button>
//           </div>
//           <div className="hidden lg:block mt-6">
//              <button
//                 onClick={handlePayNow}
//                 className="w-full bg-orange-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition duration-300"
//              >
//                 Pay now
//              </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentGatewayPage;




// src/pages/PaymentGatewayPage.jsx (Modified part)
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const PaymentGatewayPage = () => {
  const { cartItems, getCartTotalPrice } = useCart();
  const navigate = useNavigate();

  // ... (your existing state variables)

  // Redirect to cart if no items in cart
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [cartItems, navigate]);

  const subtotal = getCartTotalPrice();
  const deliveryFee = 0;
  const platformFee = 10;
  const totalAmount = subtotal + deliveryFee + platformFee;
 

  const handlePayNow = () => {
    // Navigate to the new Razorpay payment page
    navigate('/payment');
    // In a real application, you would pass order details to this page or a global state
    // For now, we rely on CartContext for total amount.
  };

  


  return (
    <div className="min-h-screen bg-gray-100 font-Inter">
      <Helmet>
        <title>Checkout - Vet&Meet</title>
        <meta name="description" content="Complete your purchase at Vet&Meet." />
      </Helmet>

      {/* Top Header */}
      <div className="bg-white shadow-sm p-4 sticky top-0 z-10 flex justify-between items-center border-b border-gray-200">
        <button onClick={() => navigate('/cart')} className="text-gray-600 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 className="text-xl font-bold text-gray-800">Checkout - Vet&Meet</h1>
        <div className="flex items-center space-x-2">
          {/* Add bookmark/share icons if desired */}
        </div>
      </div>

      <div className="container mx-auto p-4 lg:flex lg:space-x-6">
        {/* Left Section: Contact & Delivery */}
        <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-md mb-6 lg:mb-0">
          {/* Total Savings - Top Banner */}
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-md mb-6 font-semibold">
            Your total Savings ₹132
          </div>

          {/* Order Progress Indicator (Cart -> Address -> Payment) */}
          <div className="flex justify-between items-center mb-8 px-4 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>
            <div className="flex flex-col items-center z-10">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
              <span className="text-sm text-gray-700 mt-1">Cart</span>
            </div>
            <div className="flex flex-col items-center z-10">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
              <span className="text-sm text-gray-700 mt-1">Address</span>
            </div>
            <div className="flex flex-col items-center z-10">
              <div className="bg-gray-300 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
              <span className="text-sm text-gray-500 mt-1">Payment</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Contact</h3>
              <button className="text-blue-600 text-sm">Log in</button>
            </div>
            <label className="block mb-4">
              <span className="text-gray-700 text-sm">Email (for Order Updates)</span>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500"
                value="" // Managed by state in a real app
                onChange={() => {}}
              />
            </label>
            <label className="flex items-center text-gray-700 text-sm">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-orange-500 rounded"
                checked={true} // Managed by state in a real app
                onChange={() => {}}
              />
              <span className="ml-2">Send me order updates, news and offers on Email and WhatsApp</span>
            </label>
          </div>

          {/* Delivery Information */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Delivery</h3>
            <span className="block text-gray-700 text-sm mb-2">Delivery/Region India</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First name"
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2 mb-4 focus:ring-orange-500 focus:border-orange-500"
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2 mb-4 focus:ring-orange-500 focus:border-orange-500"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="City"
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <select
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="Bihar">Bihar</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Delhi">Delhi</option>
                {/* Add more states as needed */}
              </select>
              <input
                type="text"
                placeholder="PIN code"
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone"
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2 mb-4 focus:ring-orange-500 focus:border-orange-500"
            />
            <label className="flex items-center text-gray-700 text-sm">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-orange-500 rounded"
              />
              <span className="ml-2">Save this information for next time</span>
            </label>
          </div>

          {/* Choose your payment method */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Choose your payment method</h3>
            <p className="text-sm text-gray-600 mb-4">Enter your shipping address to view available shipping methods.</p>

            <div className="text-sm text-gray-600 mb-4">
              All transactions are secure and encrypted.
            </div>

            {/* Payment Options */}
            <div className="border border-gray-300 rounded-md mb-4 overflow-hidden">
              <label className="flex items-center p-4 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="razorpay"
                  checked={true}
                  onChange={(e) => {}}
                  className="form-radio h-4 w-4 text-orange-500 focus:ring-orange-500"
                />
                
                <span className="ml-3 font-semibold text-gray-800">Razorpay Secure (UPI, Cards, Wallets, NetBanking)</span>
                <div className="ml-auto flex items-center space-x-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/UPI-Logo-Vector.svg/1200px-UPI-Logo-Vector.svg.png" alt="UPI" className="h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/RuPay_card_logo.svg/1200px-RuPay_card_logo.svg.png" alt="RuPay" className="h-4" />
                  <span className="text-gray-500 ml-2">+15</span>
                </div>
              </label>
              <div className="bg-gray-50 p-4 border-t border-gray-200 text-sm text-gray-700">
                After clicking "Pay now", you will be redirected to Razorpay Secure (UPI, Cards, Wallets, NetBanking) to complete your purchase securely.
              </div>
            </div>

            <div className="border border-gray-300 rounded-md overflow-hidden">
              <label className="flex items-center p-4 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={false} // Assuming Razorpay is default selected
                  onChange={(e) => {}}
                  className="form-radio h-4 w-4 text-orange-500 focus:ring-orange-500"
                />
                <span className="ml-3 font-semibold text-gray-800">Cash on Delivery (COD)</span>
              </label>
            </div>
          </div>

          {/* Billing address */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Billing address</h3>
            <label className="flex items-center text-gray-700 text-sm mb-4">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-orange-500 rounded"
                checked={true} // Assuming same as shipping is default
                onChange={() => {}}
              />
              <span className="ml-2">Same as shipping address</span>
            </label>
          </div>
        </div>

        {/* Right Section: Order Summary */}
        <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md h-fit">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Order summary</h3>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="relative mr-3">
                  <img
                    src={item.image || 'https://placehold.co/48x48/CCCCCC/FFFFFF?text=Product'}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md border border-gray-200"
                  />
                  <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {item.quantity}
                  </span>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-gray-600">Size - {item.selectedWeight || 'N/A'}</p>
                </div>
              </div>
              <span className="text-gray-800 font-semibold">₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          {/* Discount/Gift card */}
          <div className="flex items-center border-t border-b border-gray-200 py-4 my-4">
            <input
              type="text"
              placeholder="Discount code or gift card"
              className="flex-grow border border-gray-300 rounded-md p-2 mr-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
              Apply
            </button>
          </div>

          {/* Price Details */}
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Price Details ({cartItems.length} Item)</h4>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <div className="flex justify-between">
              <span>Total MRP</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount On MRP</span>
              <span className="text-green-600">- ₹132</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="text-green-600">FREE</span>
            </div>
            <div className="flex justify-between">
              <span>Platform Fee</span>
              <span>₹{platformFee.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex justify-between items-center border-t pt-4 font-bold text-gray-900 text-lg">
            <span>Total Amount</span>
            <span>₹{totalAmount.toFixed(2)}</span>
          </div>

          {/* Pay now button - Fixed at bottom on mobile, inline on desktop */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg z-20 border-t border-gray-200">
             <button
                onClick={handlePayNow}
                className="w-full bg-orange-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition duration-300"
             >
                Pay now
             </button>
          </div>
          <div className="hidden lg:block mt-6">
             <button
                onClick={handlePayNow}
                className="w-full bg-orange-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition duration-300"
             >
                Pay now
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGatewayPage;
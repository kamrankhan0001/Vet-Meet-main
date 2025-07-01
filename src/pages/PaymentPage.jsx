import React from "react";

// Dummy cart items (You can replace this with actual state/context logic)
const cartItem = JSON.parse(localStorage.getItem("cartArr")) || [];

const totalPriceFunc = () => {
  return cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

const PaymentPage = () => {
  const handlePayment = () => {
    const options = {
      key: "rzp_test_PV1oQ0oMtgXOsq",
      amount: totalPriceFunc() * 100,
      currency: "INR",
      name: "MyShop Checkout",
      description: "This is your order",
      image:
        "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
      theme: {
        color: "#000",
      },
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        // Clear cart
        localStorage.removeItem("cartArr");
        // Optionally trigger a re-render or navigate
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "7059400392",
      },
    };

    const rzpy1 = new window.Razorpay(options);
    rzpy1.open();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Complete Your Payment</h2>
        <img
          src="https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg"
          alt="checkout"
          className="w-32 h-32 mx-auto mb-4 rounded-full"
        />
        <p className="mb-4 text-gray-600">
          Total Price: <strong>₹{totalPriceFunc()}</strong>
        </p>
        <button
          onClick={handlePayment}
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
        >
          Pay Now
        </button>
      </div>
    </div>
 );
};

export default PaymentPage;

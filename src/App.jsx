import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarWithCategories from "./Components/NavbarWithCategories";
import HomePage from "./pages/HomePage";
import MyOrderPage from "./pages/MyOrderPage";
import ArticleDetailPage from "./pages/ArticleDetailPage"; 
import BlogPage from "./pages/BlogPage";
import BlogPostDetailPage from "./pages/BlogPostDetailPage"; 
import RefundPolicyPage from "./pages/RefundPolicyPage";
import ReturnPolicyPage from "./pages/ReturnPolicyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import ReferAndSavePage from "./pages/ReferAndSavePage";
import ReferralSuccessPage from "./pages/ReferralPage";
import OutStoryPage from "./pages/OurStoryPage";
import Tip1 from "./assets/Health/HealthTip1.png";
import Tip2 from "./assets/Health/HealthTip2.png";
import Tip3 from "./assets/Health/HealthTip3.png";
import Tip4 from "./assets/Health/HealthTip4.png";
import Tip5 from "./assets/Health/HealthTip5.png";
import ProductListingPage from "./pages/ProductListingPage";
import CatFoodListingPage from "./pages/CatFoodListingPage";
//import VetAndMeetPage from './pages/VetAndMeetPage';
import HenloProductListing from './Components/HenloProductListing'; 
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";
import PaymentGatewayPage from './pages/PaymentGatewayPage';
import PharmacySection from "./Components/PharmacySection"; 
import Footer from "./Components/Footer"; 
import PetConsultation from "./Components/PetConsultation";
import BookConsult from "./Components/BookConsult";
import ClinicPage from './pages/ClinicPage'; 
import OfferPage from "./Components/OfferPage";
import HenloSection from "./Components/HenloSection";
import FashionSection from "./Components/FashionSection";
import OfferCardSection from "./Components/OfferCardSection";
import OrderRelated from './pages/OrderRelated';
import GeneralEnquiryPage from "./pages/GeneralEnquiry";
import ContactUsPage from './pages/ContactUs';
import CouponsAndOffersPage from "./pages/CouponsPage";
import PaymentsAndRefundsPage from "./pages/PaymentAndRefund";
import ReturnsAndCancellationsPage from "./pages/ReturnAndCancel";
import DashboardPage from "./pages/DashboardPage";
import './firebase';

const allArticles = [
  {
    title: "Understanding Castration in Pets: A Complete Guide",
    image: Tip1,
    button: "READ NOW",
  },
  {
    title: "Multivitamins for Pets: Why They’re Important for Your Dog",
    image: Tip2,
    button: "READ NOW",
  },
  {
    title: "Dog Bandanas - Stylish Dog Bandanas for All Occasions | Zigly",
    image: Tip3,
    button: "READ NOW",
  },
  {
    title: "Best Grooming Tools for Your Cat and Dog in 2025",
    image: Tip4,
    button: "READ NOW",
  },
  {
    title: "How to Choose the Right Food for Your Pet’s Age",
    image: Tip5,
    button: "READ NOW",
  },
  {
    title: "5 Signs Your Pet Needs a Vet Visit Immediately",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202412/vet-132001148-16x9_0.jpg?VersionId=fNjoETDdYXeM8EWz8u9Ujad6.VZqQW43&size=690:388",
    button: "READ NOW",
  },
];


const App = () => {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const toggleAppointmentModal = () => {
    setShowAppointmentModal(!showAppointmentModal);
  };

  return (
    <Router>
      <CartProvider>
      
      <NavbarWithCategories />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-orders" element={<MyOrderPage />} />
        
        <Route
          path="/health-tips/:title"
          element={<ArticleDetailPage articles={allArticles} />} 
        />
        
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostDetailPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/retun-policy" element={<ReturnPolicyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        <Route path="/refer-and-save" element={<ReferAndSavePage />} />
        <Route path="/referral-success" element={<ReferralSuccessPage />} />
        <Route path="/our-story" element={<OutStoryPage />} />
        <Route path="/products/dog-food" element={<ProductListingPage />} />
        <Route path="/products/cat-food" element={<CatFoodListingPage />} />
        <Route path="/help/order" element={<OrderRelated />} />
        <Route path="/help/general" element={<GeneralEnquiryPage />} />
        <Route path="/help/coupons" element={<CouponsAndOffersPage />} />
        <Route path="/help/payments" element={<PaymentsAndRefundsPage />} />
        <Route path="/help/returns" element={<ReturnsAndCancellationsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

       
        {/* <Route
            path="/consult-a-vet"
            element={<VetAndMeetPage toggleAppointmentModal={toggleAppointmentModal} />}
          /> */}

          <Route path="/henlo-products" element={<HenloProductListing />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<PaymentGatewayPage />} />
          <Route path="/pharmacy" element={<PharmacySection />} />
          <Route path="/consult" element={<PetConsultation />} />
          <Route path="/BookConsult" element={<BookConsult />} />
          <Route path="/clinic" element={<ClinicPage  toggleAppointmentModal={toggleAppointmentModal}/>} />
          <Route path="/offers" element={<OfferPage />} />
          <Route path="/henlo" element={<HenloSection />} />
          <Route path="/fashion" element={<FashionSection />} /> 
          <Route path="/offers-card" element={<OfferCardSection />} />

          <Route path="/contact-us" element={<ContactUsPage />} />
                   
      </Routes>

      {/* BOOK APPOINTMENT MODAL - Moved here to be controlled by App's state */}
      {showAppointmentModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-blue-400 p-6 rounded-md w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-black font-bold">Book Your Appointment</h2>
              <button
                onClick={toggleAppointmentModal}
                className="text-white text-xl cursor-pointer"
              >
                &times;
              </button>
            </div>
            <form className="align-center justify-center items-center">
              <div className="mb-4">
                
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 bg-white"
                  required
                />
              </div>
              <div className="mb-4">
              
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email ID"
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 bg-white"
                  required
                />
              </div>
              <div className="mb-4">
                
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 bg-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-[40%] bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600 transition duration-200 cursor-pointer align-center mx-auto block"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
</CartProvider>
    </Router>
  );
};

export default App;
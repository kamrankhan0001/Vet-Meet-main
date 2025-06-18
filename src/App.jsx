import React from "react";
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
  return (
    <Router>
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
         
      </Routes>
    </Router>
  );
};

export default App;

import React, {useEffect} from "react";
import BannerSection from "../Components/BannerSection"; 
import CategoriesGrid from "../Components/CategoriesGrid";
import HealthProducts from "../Components/HealthProducts";
import HealthTipsSection from "../Components/HealthTipsSection";
import PetFoodList from "../Components/PetFoodList";
import Footer from "../Components/Footer";
import DogBreeds from "../Components/DogBreeds";
import PetBrands from "../Components/PetBrands";
import SingleBanner from "../Components/SingleBanner";
import PetSuppliesSection from "../Components/PetSupplies";
import SecondBanner from "../Components/SecondBanner";
import ToysProducts from "../Components/ToysProducts";

const HomePage = () => {
  // window.scrollTo(0, 0); // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0, { behavior: 'smooth' });
  }, []);

  return (
    <>
      <BannerSection />     
      <PetBrands />
      <CategoriesGrid />
      <SecondBanner />
      <DogBreeds />
      <HealthProducts />
      <SingleBanner />
      <PetFoodList />
      <ToysProducts />
      <HealthTipsSection />     
      <PetSuppliesSection /> 
      <Footer />
      
    </>
  );
};

export default HomePage;
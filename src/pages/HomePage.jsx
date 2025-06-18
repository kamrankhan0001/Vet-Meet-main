
import React from "react";
import BannerSection from "../Components/BannerSection"; 
import CategoriesGrid from "../Components/CategoriesGrid";
import HealthProducts from "../Components/HealthProducts";
import HealthTipsSection from "../Components/HealthTipsSection";
import PetFoodList from "../Components/PetFoodList";
import Footer from "../Components/Footer";
import DogBreeds from "../Components/DogBreeds";
import PetBrands from "../Components/PetBrands";
import SingleBanner from "../Components/SingleBanner";

const HomePage = () => {
  return (
    <>
      <BannerSection />
      
      <PetBrands />
      <CategoriesGrid />
      <DogBreeds />
      <HealthProducts />
      <SingleBanner />
      <PetFoodList />
      <HealthTipsSection />
      <PetFoodList /> 
      <Footer />
      
    </>
  );
};

export default HomePage;
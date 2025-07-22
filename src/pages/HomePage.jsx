import React, {useEffect} from "react";
import BannerSection from "../Components/BannerSection"; 
import CategoriesGrid from "../Components/CategoriesGrid";
import HealthProducts from "../Components/HealthProducts";
import HealthTipsSection from "../Components/HealthTipsSection";
import PetFoodList from "../Components/PetFoodList";
//import Footer from "../Components/Footer";
import DogBreeds from "../Components/DogBreeds";
import PetBrands from "../Components/PetBrands";
import SingleBanner from "../Components/SingleBanner";
import PetSuppliesSection from "../Components/PetSupplies";
import SecondBanner from "../Components/SecondBanner";
import ToysProducts from "../Components/ToysProducts";
import OfferPage from "../Components/OfferPage";
import HenloSection from "../Components/HenloSection";
import FashionSection from "../Components/FashionSection";
import OfferCardSection from "../Components/OfferCardSection";

const HomePage = () => {
  
  return (
    <>
      <BannerSection />     
      <PetBrands />
      <CategoriesGrid />
      <SecondBanner />
      <FashionSection />
      <OfferCardSection />
      <OfferPage />
      <HenloSection />
      <DogBreeds />
      <HealthProducts />
      <SingleBanner />
      <PetFoodList />
      <ToysProducts />
      <HealthTipsSection />     
      <PetSuppliesSection /> 
            
    </>
  );
};

export default HomePage;
import React from 'react';
import { Helmet } from 'react-helmet';
import storyImage from '../assets/Story/story1.png';
import storyImage2 from '../assets/Story/story2.png'; 


const OutStoryPage = () => {
  return (
    <div>
      <Helmet>
        <title>Our Story - Vet&Meet</title>
        <meta
          name="description"
          content="Learn about Vet&Meet's journey and mission to provide comprehensive pet care."
        />
      </Helmet>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold text-teal-700 text-center mb-8">
            Our Story
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <img
                src={storyImage}
                alt="Founder with pet"
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                As responsible pet parents ourselves, we understand the joy and
                the moments of uncertainty that come with caring for our beloved
                animals. Vet&Meet was born from the idea that pet parenting
                should be a supported journey, filled with expert guidance and
                accessible resources. We envisioned a community where pet
                lovers and veterinary professionals come together to ensure the
                well-being of every pet.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                A Network of Experts
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We've built Vet&Meet as more than just a marketplace. It's a
                carefully curated network of experienced veterinarians,
                behaviorists, nutritionists, and other pet care specialists.
                Our goal is to provide you with a holistic support system,
                whether you need advice on your pet's diet, help with
                behavioral challenges, or access to trusted veterinary
                services.
              </p>
            </div>
            <div>
              <img
                src={storyImage2}
                alt="Cat and Dog"
                className="rounded-lg shadow-md"
                
              />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-teal-700 mb-4">
              Our Promise
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Vet&Meet, we are committed to enhancing the lives of pets and
              their families. We strive to offer a seamless and trustworthy
              platform where you can find the products, services, and
              information you need to give your pet the best possible care. We
              want your experience as a pet family to be full of joyous moments,
              and nothing else.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OutStoryPage;



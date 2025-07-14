// src/pages/ClinicPage.jsx
import React,{useState} from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Doctor1 from '../assets/VetDoctor/doctor1.png';
import Clinic1 from '../assets/Clinic/clinic1.png';
import Clinic3 from '../assets/Clinic/clinic3.png'; 
import Clinic2 from '../assets/Clinic/clinic2.png';
import Clinic6 from '../assets/Clinic/clinic6.png'; 
import Clinic4 from '../assets/Clinic/clinic4.png';
import Clinic5 from '../assets/Clinic/clinic5.png'; 
import Clinic7 from '../assets/Clinic/clinic7.png';
import Clinic8 from '../assets/Clinic/clinic8.png';
import Clinic9 from '../assets/Clinic/clinic9.png'; 
import Clinic10 from '../assets/Clinic/clinic10.png'; 
import Clinic11 from '../assets/Clinic/clinic11.png';
import Clinic12 from '../assets/Clinic/clinic12.png';
import Clinic13 from '../assets/Clinic/clinic13.png'; 
import Clinic14 from '../assets/Clinic/clinic14.png'; 

const ClinicPage = ({ toggleAppointmentModal }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const navigate = useNavigate();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const features = [
    {
      icon: (
        // Placeholder for a 3D-style head/brain icon with a checkmark
        <svg className="w-16 h-16 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          <path fill="url(#gradient1)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: 'Thoughtfully designed spaces',
      description: 'Pet-friendly interiors, separate spaces for cats & dogs, safe anti-slip floors',
    },
    {
      icon: (
        // Placeholder for a 3D-style heart with a paw print
        <svg className="w-16 h-16 text-red-500 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          <path fill="url(#gradient2)" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          <circle cx="10" cy="12" r="1.5" fill="#fff" />
          <circle cx="14" cy="12" r="1.5" fill="#fff" />
          <circle cx="12" cy="10" r="1.5" fill="#fff" />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: 'Experts who love pets',
      description: 'Fear-free certified, our compassionate team makes pet care feel stress-free and personal',
    },
    {
      icon: (
        // Placeholder for a 3D-style document/records icon with a paw print
        <svg className="w-16 h-16 text-green-500 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
          <path fill="url(#gradient3)" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
          <circle cx="12" cy="14" r="2" fill="#fff" />
          <path d="M14 16h-4v-4h4v4z" fill="#fff" />
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22C55E" />
              <stop offset="100%" stopColor="#16A34A" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: 'Digital records',
      description: 'Easily accessible records (in-app), because you’ve got enough to juggle',
    },
    {
      icon: (
        // Placeholder for a 3D-style house icon with a checkmark
        <svg className="w-16 h-16 text-yellow-500 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          <path fill="url(#gradient4)" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          <circle cx="18" cy="6" r="3" fill="#fff" />
          <path d="M17 7l1.41 1.41L21 5.83l-1.41-1.41L17 7z" fill="#fff" />
          <defs>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: 'No rushed checkups',
      description: 'We spend 3x longer with your pet, for real, comprehensive care.',
    },
  ];

  // Data for sections
  const clinicFeatures = [
    {
      icon: (
        <svg className="w-12 h-12 text-orange-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
      ),
      title: 'Experienced Vets',
      description: 'Our team consists of highly qualified and compassionate veterinarians dedicated to your pet\'s well-being.',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-orange-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
        </svg>
      ),
      title: 'Modern Facilities',
      description: 'Equipped with state-of-the-art technology for accurate diagnostics and effective treatments.',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-orange-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: 'Timely Appointments',
      description: 'Easy booking and flexible scheduling to fit your busy life and your pet\'s needs.',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-orange-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      ),
      title: 'Compassionate Care',
      description: 'We treat every pet with the love and attention they deserve, ensuring a comfortable experience.',
    },
  ];

  const clinicServices = [
    {
    image: Clinic12,
    title: 'General Consultation',
    description: 'Routine check-ups, health assessments, and expert advice for your pet.',
    //points: ['Routine check-ups', 'Health assessments', 'Expert advice'], // Add this
    buttonText: 'Book Now',
  },
  {
    image: Clinic11,
    title: 'Vaccination & Deworming',
    description: 'Essential vaccinations and deworming protocols to protect against common diseases.',
    //points: ['Core vaccinations', 'Custom schedules', 'Regular deworming'],
    buttonText: 'Book Now',
  },
    {
      image: Clinic10,
      title: 'Surgical Procedures',
      description: 'Safe and effective surgical solutions for various conditions, performed by skilled surgeons.',
    },
    {
      image: Clinic13,
      title: 'Dental Care',
      description: 'Comprehensive dental services to maintain your pet\'s oral hygiene and prevent issues.',
    },
    {
      image: Clinic9,
      title: 'Diagnostic Services',
      description: 'In-house lab tests, X-rays, and ultrasound for quick and accurate diagnosis.',
    },
    {
      image: Clinic14,
      title: 'Nutrition & Diet Plans',
      description: 'Personalized diet plans and nutritional advice for optimal health and weight management.',
    },
  ];

  const faqData = [
    {
      question: 'What services does Vet&Meet Clinic offer?',
      answer: 'We offer a wide range of services including general consultations, vaccinations, deworming, surgical procedures, dental care, diagnostic services, and nutrition counseling.',
    },
    {
      question: 'How can I book an appointment?',
      answer: 'You can easily book an appointment online through our website, via our mobile app, or by calling our clinic directly.',
    },
    {
      question: 'What are your clinic hours?',
      answer: 'Our clinic hours are Monday to Saturday, 9 AM to 6 PM. We are closed on Sundays and public holidays.',
    },
    {
      question: 'Do you handle emergencies?',
      answer: 'For emergencies, please call us immediately. We will guide you on the best course of action or direct you to the nearest emergency facility if needed.',
    },
  ];

  // New data for "Care at Clinic" section (from the image)
  const careAtClinicServices = [
    { name: 'Consultation', icon: Clinic1 },
    { name: 'Vaccination', icon: Clinic2 },
    { name: 'Grooming', icon: Clinic3 },
    { name: 'Deworming', icon: Clinic4 },
    { name: 'Surgery', icon: Clinic5 },
    { name: 'Diagnostics', icon: Clinic6 },
  ];

  // New data for "Online pet solutions" section (from the image)
  const onlinePetSolutions = [
    { name: 'Tele Consultation', icon: Clinic7 },
    { name: 'Quick Meds', icon: Clinic8 },
  ];

  // New data for "Vet care at home" section (from the image)
  const vetCareAtHome = [
    { name: 'Consultation', icon: Clinic1 },
    { name: 'Vaccination', icon: Clinic2 },
  ];

  
  const ServiceCard = ({ name, icon, size = "default" }) => {
  const imageSize = size === "large" ? "w-20 h-20" : "w-16 h-16";

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200">
      <img src={icon} alt={name} className={`${imageSize} mb-2 rounded-full`} />
      <p className="text-sm font-semibold text-gray-800 text-center">{name}</p>
    </div>
  );
};


  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Helmet>
        <title>Clinic - Vet&Meet Clinic</title>
        <meta name="description" content="Vet&Meet Clinic: Your trusted partner for comprehensive pet healthcare services." />
      </Helmet>

      {/* Hero Section */}
         <section className="relative bg-blue-300 text-gray-800 py-10 md:py-8 overflow-hidden">
           <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
             <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              Expert Care for Your Beloved Pet
            </h1>
               <p className="text-lg md:text-xl mb-8 opacity-90">
              At Vet&Meet Clinic, we provide compassionate and comprehensive veterinary services to ensure your furry friend lives a happy, healthy life.
            </p>
               <button
                 onClick={toggleAppointmentModal}
                 className="bg-orange-400 text-white hover:bg-orange-500 font-bold py-3 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
               >
                 Book an Appointment
               </button>
               
             </div>
             <div className="md:w-1/2 flex justify-center">
               <img src={Doctor1} alt="Vet Consultation" className="rounded-lg w-full max-w-sm"
                  loading="lazy"
               
               />

             </div>
           </div>
           <div className="absolute top-0 left-0 w-full h-full">
             <div className="absolute w-60 h-60 bg-teal-400 rounded-full -top-10 -left-20 opacity-30"></div>
             <div className="absolute w-80 h-80 bg-teal-600 rounded-full -bottom-20 -right-20 opacity-20"></div>
           </div>
         </section>

{/* Clinic Contact Info Section */}
 <section className="bg-white">
  <div className="container mx-auto px-4 py-16">
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
        Pet Clinic <span className="text-gray-600">|</span> Pharmacy <span className="text-gray-600">|</span> Grooming
      </h2>

      <p className="text-lg sm:text-xl text-gray-700 font-medium">
        Call Us: <span className="font-bold text-gray-800">1800-5723-575</span>
      </p>

      <div className="pt-4">
        <a
          href="tel:18005723575"
          className="inline-block bg-orange-400 hover:bg-orange-500 text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          Call Us Now
        </a>
      </div>
    </div>
  </div>
</section>
    
    
      {/* NEW SECTION: Care at Clinic */}
<section className="py-8 bg-blue-300 rounded-2xl shadow-lg">
  <div className="container mx-auto px-4">
    <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 text-center">
      Care at Clinic
    </h2>
    <p className="text-gray-600 text-center mb-6">Stress-free services</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {careAtClinicServices.map((service, index) => (
        <ServiceCard key={index} name={service.name} icon={service.icon} size="large" />
      ))}
    </div>
  </div>
</section>


      <section className="py-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Left Column: Online Pet Solutions */}
      <div className="bg-green-50 p-6 rounded-lg shadow">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
          Online pet solutions
        </h2>
        <p className="text-gray-600 text-center mb-6">Vet services at a glance</p>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {onlinePetSolutions.map((service, index) => (
            <ServiceCard key={index} name={service.name} icon={service.icon} />
          ))}
        </div>
      </div>

      {/* Right Column: Vet Care at Home */}
      <div className="bg-yellow-50 p-6 rounded-lg shadow">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
          Vet care at home
        </h2>
        <p className="text-gray-600 text-center mb-6">Stress-free services</p>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {vetCareAtHome.map((service, index) => (
            <ServiceCard key={index} name={service.name} icon={service.icon} />
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center">
      Experience stress-free pet care
    </h2>
    <p className="text-lg sm:text-xl text-gray-700 font-medium text-center mb-10">
      Vet services at a glance
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {clinicServices.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all flex flex-col"
        >
          {/* Image - Top */}
          <div className="relative h-full">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <img
              src="https://placehold.co/60x20/FFFFFF/000000?text=FearFree"
              alt="FearFree Certified"
              className="absolute top-3 left-3 h-5"
              loading="lazy"
            />
          </div>

          {/* Text & Button - Bottom */}
          <div className="flex flex-col justify-between p-4 h-48">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              {service.points?.length > 0 ? (
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-sm">{service.description}</p>
              )}
            </div>

            {/* Button - Right aligned */}
            <div className="flex justify-end mt-4">
              <button
                onClick={toggleAppointmentModal}
                className="bg-orange-500 text-white font-semibold text-sm py-2 px-4 rounded hover:bg-orange-600 transition-transform transform hover:scale-105"
              >
                {service.buttonText || 'Book Now'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center">
          Designed for what pets truly need
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 text-center">
          Backed by fear-free certified expert care
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section className="py-14 bg-gradient-to-br from-[#f9fbff] to-[#fff] shadow-inner">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-10">
      Why Choose <span className="text-blue-600">Vet&Meet Clinic?</span>
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
      {clinicFeatures.map((feature, index) => (
        <div
          key={index}
          className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-transform hover:scale-[1.02] text-center"
        >
          <div className="w-12 h-6 mx-auto mb-3 flex items-center justify-center rounded-full bg-white shadow-inner ">
            {feature.icon}
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
            {feature.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Call to Action / Booking Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Give Your Pet the Best Care?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Schedule an appointment with our expert veterinarians today.
          </p>
          <button
            onClick={toggleAppointmentModal}
            className="bg-orange-500 text-white font-semibold px-10 py-4 rounded-full shadow-lg text-lg hover:bg-orange-600 transition-colors transform hover:scale-105"
          >
            Book Your Appointment Now
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-1400px">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-5 text-left font-semibold text-lg text-gray-800 focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {openFaqIndex === index && (
                  <div className="p-5 pt-0 text-gray-600 border-t border-gray-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClinicPage;




import React, { useState } from "react";
import { FaAllergies, FaBug, FaCloud } from "react-icons/fa";
import petImage from "../assets/consult/Petbannernew.jpg";
import image1 from "../assets/consult/image1.jpeg";
import image2 from "../assets/consult/image2.png";
import image3 from "../assets/consult/image3.jpeg";

const PetHealthSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const moreFaqs = [
   {
  question: "What can I expect from Vet&Meet online vet consultation?",
  answer: "Get expert veterinary care from the comfort of your home with Vet&Meet. Here’s how it works: Book your slot – Easily schedule a consultation via our website or app at a time that suits you and your pet. Get a call from a vet – One of our certified vets will call you within 15 minute of your scheduled consultation time. They'll discuss your pet’s symptoms and offer expert guidance. Receive prescription + exclusive discount – If needed, you'll get a prescription on WhatsApp with a special link to order medicines at 10% off from our pharmacy partner. Same-day medicine delivery – Your pet’s health can’t wait — we ensure fast, same-day delivery of prescribed medicines right to your door."
},

    {
      question: "What happens after consultation with the vet?",
      answer:
        "You will receive a summary and any necessary prescriptions or follow-up steps.",
    },
    {
      question: "Can online vet consultations diagnose my pet's condition accurately?",
      answer:
        "Yes, for common and visible symptoms. For complex cases, an in-person visit may be recommended.",
    },
    {
      question: "Can I get a second opinion through an online veterinary consultation?",
      answer: "Yes, second opinions are available from different veterinarians.",
    },
    {
      question: "I have a minor query to ask the doctor. Do I still have to book a consultation?",
      answer:
        "Yes, even minor queries require booking to ensure professional attention and record-keeping.",
    },
    {
      question: "My pet is difficult to handle. How will I medicate it at home?",
      answer:
        "Vets can guide you with step-by-step methods and recommend suitable techniques or aids.",
    },
    {
      question: "Are online veterinary consultations suitable for behavioural issues in pets?",
      answer:
        "Yes, they are often ideal for behavioral assessments and advice.",
    },
    {
      question: "Is online veterinary consultation available for all pets?",
      answer:
        "Yes, most common pets like dogs, cats, rabbits, and birds are covered.",
    },
    {
      question: "Are veterinary consultations covered by pet insurance?",
      answer:
        "Some insurers do cover online consultations. Please check with your provider.",
    },
  ];

  return (
    <div className="bg-[#f0fffc] py-10 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Are these issues affecting your pet?
      </h2>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left - Image with tags */}
        <div className="relative flex-1 bg-white shadow-md rounded-xl overflow-hidden max-w-[550px] mx-auto">
          <img src={petImage} alt="Pets" className="w-full object-cover" />

          {/* Shedding Tag */}
          <div className="absolute bottom-10 left-4 bg-[#d1edf1] px-4 py-2 rounded-md flex items-center space-x-2">
            <FaCloud className="text-black text-lg" />
            <span className="font-medium">Shedding</span>
          </div>

          {/* Kennel Cough Tag */}
          <div className="absolute top-10 left-[20%] bg-[#d1edf1] px-4 py-2 rounded-md flex items-center space-x-2">
            <FaAllergies className="text-black text-lg" />
            <span className="font-medium">Kennel Cough</span>
          </div>

          {/* Fleas Tag */}
          <div className="absolute bottom-10 right-4 bg-[#d1edf1] px-4 py-2 rounded-md flex items-center space-x-2">
            <FaBug className="text-black text-lg" />
            <span className="font-medium">Fleas</span>
          </div>
        </div>

        {/* Right - Articles */}
        <div className="flex-1 space-y-6">
          <h3 className="text-xl font-semibold">Explore solutions by our experts</h3>

          {[image1, image2, image3].map((img, index) => {
            const titles = [
              "Everything you need to know about vaccinating your pet?",
              "How to identify and remove ticks from your dog?",
              "3 best ways to improve the dental health of your pet?",
            ];
            return (
              <div key={index} className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
                <img src={img} alt={`Dog ${index + 1}`} className="w-20 h-20 object-cover rounded-md" />
                <div>
                  <p className="font-medium text-gray-700">{titles[index]}</p>
                  <a href="#" className="text-black font-semibold hover:underline">Read more</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-12">
        <h2 className="text-center text-2xl font-bold mb-6">Frequently asked questions</h2>
        <div className="max-w-1400 mx-auto">
          {moreFaqs.map((item, i) => (
            <div
              key={i}
              onClick={() => toggleAccordion(i)}
              className="bg-white px-5 py-4 mb-4 rounded-md shadow cursor-pointer transition-all duration-200"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{item.question}</span>
                <span className="bg-orange-500 text-white font-bold w-7 h-7 rounded-full flex items-center justify-center text-lg">
                  {openIndex === i ? "-" : "+"}
                </span>
              </div>
              {openIndex === i && (
                <p className="text-gray-600 mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PetHealthSection;

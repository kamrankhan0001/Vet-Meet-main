import React, { useState, useEffect } from 'react';
import Doctor1 from '../assets/VetDoctor/doctor1.png';
import Doctor2 from '../assets/VetDoctor/doctor2.png';

const VetAndMeetPage = ({ toggleAppointmentModal }) => {
  const [veterinarians, setVeterinarians] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  

  const moreFaqs = [
    {
      question: 'What can I expect from Vet&Meet online vet consultation?',
      answer: 'You can expect expert advice, detailed diagnosis, and guidance on next steps for your pet.'
    },
    {
      question: 'What happens after consultation with the vet?',
      answer: 'You will receive a summary and any necessary prescriptions or follow-up steps.'
    },
    {
      question: "Can online vet consultations diagnose my pet's condition accurately?",
      answer: 'Yes, for common and visible symptoms. For complex cases, an in-person visit may be recommended.'
    },
    {
      question: 'Can I get a second opinion through an online veterinary consultation?',
      answer: 'Yes, second opinions are available from different veterinarians.'
    },
    {
      question: 'I have a minor query to ask the doctor. Do I still have to book a consultation?',
      answer: 'Yes, even minor queries require booking to ensure professional attention and record-keeping.'
    },
    {
      question: 'My pet is difficult to handle. How will I medicate it at home?',
      answer: 'Vets can guide you with step-by-step methods and recommend suitable techniques or aids.'
    },
    {
      question: 'Are online veterinary consultations suitable for behavioural issues in pets?',
      answer: 'Yes, they are often ideal for behavioral assessments and advice.'
    },
    {
      question: 'Is online veterinary consultation available for all pets?',
      answer: 'Yes, most common pets like dogs, cats, rabbits, and birds are covered.'
    },
    {
      question: 'Are veterinary consultations covered by pet insurance?',
      answer: 'Some insurers do cover online consultations. Please check with your provider.'
    }
  ];

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const apiData = await response.json();

        const onlineDoctors = apiData.slice(0, 4).map((user, index) => ({
          id: user.id + 100,
          name: `Dr. ${user.name}`,
          specialty: 'Online Vet',
          experience: `${2 + index}+ Years`,
          degree: 'DVM',
          image: Doctor2, // Alternate between two images
          online: true,
          available: true,
        }));

        setVeterinarians(onlineDoctors);
        setError(null);
      } catch (err) {
        console.error("Error fetching doctors:", err);
        setError("Failed to load doctors. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative bg-teal-500 text-white py-10 md:py-8 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Consult a Vet Online
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Get expert advice from certified veterinarians from the comfort of your home.
            </p>
            <button
              onClick={toggleAppointmentModal}
              className="bg-white text-teal-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
            >
              Book an Appointment
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={Doctor1} alt="Vet Consultation" className="rounded-lg w-full max-w-sm" />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-60 h-60 bg-teal-400 rounded-full -top-10 -left-20 opacity-30"></div>
          <div className="absolute w-80 h-80 bg-teal-600 rounded-full -bottom-20 -right-20 opacity-20"></div>
        </div>
      </section>

      {/* Vets Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Access our expert vets from anywhere
          </h2>
          {loading ? (
            <p className="text-center text-gray-600 text-lg">Loading veterinarians...</p>
          ) : error ? (
            <p className="text-center text-red-600 text-lg">{error}</p>
          ) : veterinarians.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {veterinarians.map((vet) => (
                <div key={vet.id} className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img
                      src={vet.image}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '';
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">{vet.name}</h3>
                  <p className="text-teal-600 font-medium mb-1">
                    {vet.specialty} | {vet.experience}
                  </p>
                  <p className="text-gray-600 text-sm">{vet.degree}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg">No veterinarians found.</p>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "General Consultation",
                desc: "Discuss overall health, diet, and behavior with our vets.",
              },
              {
                title: "Behavioral Issues",
                desc: "Get help with anxiety, aggression, and other behavioral concerns.",
              },
              {
                title: "Nutrition Advice",
                desc: "Tailored diet plans for your pet's specific needs.",
              },
              {
                title: "Post-Surgery Care",
                desc: "Guidance for proper recovery and wound management.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-200"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 text-white py-16 md:py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to give your pet the best care?
          </h2>
          <button
            onClick={toggleAppointmentModal}
            className="bg-white text-teal-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
          >
            Book Your First Consultation Now
          </button>
        </div>
      </section>

    <section style={{ padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2rem' }}>More Questions</h2>
        <div style={{ maxWidth: '1400px', margin: 'auto' }}>
          {moreFaqs.map((item, i) => (
            <div
              key={i}
              onClick={() => toggleAccordion(i)}
              style={{
                background: '#fff',
                padding: '15px 20px',
                borderBottom: '1px solid #eee',
                borderRadius: '8px',
                marginBottom: '10px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{item.question}</span>
                <span
                  style={{
                    background: '#e0f7f4',
                    color: '#00897b',
                    borderRadius: '50%',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                  }}
                >
                  {openIndex === i ? '-' : '+'}
                </span>
              </div>
              {openIndex === i && (
                <div style={{ marginTop: '10px', color: '#555' }}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default VetAndMeetPage;

import React from 'react'; 
import supply1 from '../assets/Supplies/supply1.png';
import supply2 from '../assets/Supplies/supply2.png';
import supply3 from '../assets/Supplies/supply3.png';
import supply4 from '../assets/Supplies/supply4.png';

const PetSuppliesSection = () => {
  const items = [
    {
      image: supply1,
      title: '24hr Delivery',
      subtitle: 'In 24 cities',
    },
    {
      image: supply2,
      title: '50,000+',
      subtitle: 'Happy pet parents',
    },
    {
      image: supply3,
      title: 'Complimentary vet consult',
      subtitle: 'For every new member',
    },
    {
      image: supply4,
      title: 'Pet Pharmacy',
      subtitle: 'Exclusive',
    },
  ];

  return (
    
    <section className="bg-gray-200 py-6 px-4 sm:px-6 lg:px-20 mt-5">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-full max-w-[160px] sm:max-w-[180px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-14 h-14 object-contain mb-3 rounded-full"
            />
            <p className="text-orange-400 text-sm font-semibold">{item.title}</p>
            <p className="text-orange-400 text-xs font-semibold">{item.subtitle}</p>
          </div>
        ))}
      </div>
     
    </section>
    
  );
};

export default PetSuppliesSection;


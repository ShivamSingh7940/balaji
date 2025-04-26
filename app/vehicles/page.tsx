'use client';
import React, { useState } from 'react';
import Link from "next/link";


const getCategoryTitle = (category) => {
  switch (category) {
    case 'service': return 'Services';
    case 'sales': return 'Vehicle Sales';
    default: return 'Welcome to Honda';
  }
};

const getCategoryDescription = (category) => {
  switch (category) {
    case 'service':
      return 'Find answers to your questions about vehicle service, parts, and maintenance.';
    case 'sales':
      return 'Learn more about our vehicle lineup, pricing, and offers.';
    default:
      return 'Your trusted destination for everything Honda.';
  }
};

const vehicles = [
  {
    name: 'All New Amaze',
    brochureUrl: 'All New Amaze_new3Dec.pdf',
    // h1:"You are the chase",
    img: 'https://res.cloudinary.com/djy15bn9n/image/upload/v1744385404/WhatsApp_Image_2025-04-11_at_8.58.35_PM_kzciua.jpg',
    price: '₹7,99,900',
    mileage: '18.4 km/l',
    fueltype: 'Petrol/Diesel',
    description: "The all-new Honda Amaze is a compact sedan that blends style, performance, and practicality, offering a refined driving experience with its 1.2L i-VTEC petrol engine. It features a new design, advanced safety technologies like ADAS, and a modern infotainment system, elevating the driving experience. The Amaze prioritizes fuel efficiency, spacious interiors, and a comfortable cabin, making it a well-rounded choice for Indian car buyers"
  },
  {
    name: 'All New Elevate',
    img: 'https://capitalhonda.in/uploads/common/20232308169277182864e5a5f4767f8.png',
    price: '₹11,91,000',
    mileage: '15.31 km/l',
    brochureUrl:'Honda Elevate Brochure_dated Feb 25.pdf',
    description: "The Honda Elevate is a compact SUV with a focus on comfort, space, quality, and safety, offering a 1.5-liter petrol engine and a choice between a manual or automatic transmission. It is known for its bold, masculine design, good fuel efficiency, and various safety features like Level 2 ADAS"
  },
  {
    name: 'City 5-Gen',
    img: 'https://capitalhonda.in/uploads/common/202307031678189043640721f346fd3.jpg',
    price: '₹12,08,100',
    mileage: '18.4 km/l',
    brochureUrl: 'Honda City Brochure dated Feb 25.pdf',
    description: "The Honda City 5th generation is known for its stylish exterior and well-designed interior. It features a sporty front grille, 3D LED tail lamps, and R16 diamond-cut alloy wheels. The interior is spacious and incorporates features like a dynamic view instrument panel and a cutting-edge technology suite"
  },  
  {
    name: 'Amaze-2nd Gen',
    img: 'https://res.cloudinary.com/djy15bn9n/image/upload/v1744371026/WhatsApp_Image_2025-04-11_at_5.00.12_PM_iu5xzd.jpg',
    price: '₹7,19,500',
    mileage: '18 km/l',
    description: 'The Honda Amaze 2nd generation is a subcompact sedan known for its fuel efficiency and comfortable ride. It features a 1.2-liter petrol engine with manual or automatic CVT transmission options. The car is equipped with safety features like ABS, EBD, and airbags. It also offers a range of convenience features such as an 8-inch touchscreen, Android Auto/Apple CarPlay, and a wireless charger. ',
    brochureUrl: 'Honda Amaze Reinforced Safety Brochure April 2024_new12.pdf'
  },
  {
    name: 'City eHEV',
    img: 'https://capitalhonda.in/uploads/common/202307031678188777640720e9d61b4.jpg',
    price: '₹20,55,100',
    mileage: '27 km/l',
    brochureUrl: 'Honda City Brochure dated Feb 25.pdf',
    description: 'The Honda City e:HEV is a hybrid electric vehicle (HEV) that combines a 1.5-liter Atkinson-cycle petrol engine with a dual electric motor system, offering a strong hybrid electric powertrain. The vehicle boasts a claimed fuel efficiency of 26.5 kmpl and is equipped with features like regenerative braking, idle start/stop, and a suite of safety technologies'
  }
];

const Page = () => {
  const activeCategory = 'service';
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const toggleCard = (index) => {
    setExpandedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[300px] bg-gray-800 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1578659258511-4a4e7dee7344?w=600&auto=format&fit=crop&q=60"
            alt="Honda vehicles lineup"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {getCategoryTitle(activeCategory)}
              </h1>
              <p className="text-lg text-white">
                {getCategoryDescription(activeCategory)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Honda Vehicles */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">All Honda Vehicles</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    {vehicles.map((vehicle, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <img src={vehicle.img} alt={vehicle.name} className="w-full h-48 object-cover" />
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{vehicle.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{vehicle.description}</p>
            <p className="text-sm text-gray-800"><strong>Price:</strong> {vehicle.price}</p>
            <p className="text-sm text-gray-800 mb-4"><strong>Mileage:</strong> {vehicle.mileage}</p>
          </div>
          <div className="flex justify-end gap-4">
          <Link href="/book-test-drive">
  <button className="mt-auto px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition duration-200">
    Book Test Drive
  </button>
</Link>

            <a
              href={vehicle.brochureUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition duration-200 cursor-pointer"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default Page;

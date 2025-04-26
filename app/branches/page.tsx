import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen py-10 px-6 md:px-20 bg-white">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#E10A17] uppercase tracking-wide">
        Our Branches
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Urapakkam Branch */}
        <div className="border border-gray-200 rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-bold text-[#E10A17] mb-2">Branch 1: Urapakkam</h2>
          <p>Balaji Honda – ES</p>
          <p className="text-green-600 font-semibold mb-1">Open Now</p>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Showroom & Workshop</h3>

          {/* 3.7 Star Rating */}
          <div className="flex items-center gap-1 mb-2">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
            <span className="text-yellow-400 text-xl">☆</span>
            <span className="text-gray-700 ml-2 text-sm font-medium">(3.7/5)</span>
          </div>
          <p className="text-sm text-blue-600 underline cursor-pointer mb-4">Read Reviews</p>

          <p className="text-gray-600 mb-2 text-lg">
            Address: No 693, GST Main Road, Urapakkam, Nr Indian Oil Petrol Pump, Abhirami Nagar, Kanchipuram - 603210
          </p>
          <p className="text-gray-600">Contact: <span className="font-medium text-black">sales.cpt@balajihonda.in</span></p>
        </div>

        {/* Kancheepuram Branch */}
        <div className="border border-gray-200 rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-bold text-[#E10A17] mb-2">Branch 2: Kancheepuram</h2>
          <p>Balaji Honda – ES</p>
          <p className="text-green-600 font-semibold mb-1">Open Now</p>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Extended Outlet (Showroom)</h3>

          {/* 4.6 Star Rating */}
          <div className="flex items-center gap-1 mb-2">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
            <span className="text-yellow-400 text-xl">☆</span>
            <span className="text-gray-700 ml-2 text-sm font-medium">(4.6/5)</span>
          </div>
          <p className="text-sm text-blue-600 underline cursor-pointer mb-4">Read Reviews</p>

          <p className="text-lg text-gray-600 mb-2">
            Address: Ground Floor, Chetiarpettai, Nr Meenakshi Medical College, Enathur, Kancheepuram 631651
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;

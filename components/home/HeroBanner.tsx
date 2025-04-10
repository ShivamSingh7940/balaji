import { Link } from "wouter";

const HeroBanner = () => {
  return (
    <section className="relative">
      <div className="w-full h-[500px] bg-gray-800 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1578659258511-4a4e7dee7344?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Honda Civic front view" 
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience The Joy of Honda</h1>
            <p className="text-xl text-white mb-8">Discover our range of innovative, reliable and fuel-efficient vehicles.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/vehicles" className="bg-[#E10A17] hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium text-center transition-all duration-300">Explore Vehicles</Link>
              <Link href="/book-test-drive" className="bg-white hover:bg-gray-100 text-[#E10A17] px-8 py-3 rounded-md font-medium text-center transition-all duration-300">Book a Test Drive</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

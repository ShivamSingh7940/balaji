import { Link } from "wouter";

const AboutShowroom = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Visit Our Showroom</h2>
            <p className="text-gray-600 mb-6">Balaji Honda is one of the premier authorized Honda car dealerships in the region. Our state-of-the-art showroom offers a comfortable experience to explore the latest Honda models.</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Why Choose Balaji Honda ?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#E10A17] rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Award-Winning</h4>
                    <p className="text-gray-600 text-sm">Recognized for excellence in customer service</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#E10A17] rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0">
                    <i className="fas fa-user-tie"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Expert Staff</h4>
                    <p className="text-gray-600 text-sm">Trained professionals to assist you</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#E10A17] rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0">
                    <i className="fas fa-hand-holding-usd"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Financing Options</h4>
                    <p className="text-gray-600 text-sm">Flexible payment plans available</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#E10A17] rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0">
                    <i className="fas fa-tools"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Complete Service</h4>
                    <p className="text-gray-600 text-sm">End-to-end vehicle care solutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/showroom" className="bg-[#E10A17] hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 text-center">
                Explore Showroom
              </Link>
              <Link href="/contact" className="border-2 border-[#E10A17] text-[#E10A17] hover:bg-[#E10A17] hover:text-white px-6 py-3 rounded-md font-medium transition-all duration-300 text-center">
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560253414-2b82a2eba9a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Capital Honda Showroom Interior" 
              className="w-full h-auto rounded-lg shadow-lg"
            /> */}
            {/* <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center mb-2">
                <i className="fas fa-map-marker-alt text-[#E10A17] mr-2"></i>
                <h4 className="font-bold">Our Location</h4>
              </div>
              <p className="text-gray-600 text-sm mb-2">123 Auto Plaza, Main Highway Road, City - 110001</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[#E10A17] text-sm font-medium hover:underline flex items-center">
                Get Directions <i className="fas fa-external-link-alt ml-1"></i>
              </a>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutShowroom;

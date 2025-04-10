const LocationMap = () => {
  return (
    <section className="bg-white">
      <div className="h-96 w-full bg-gray-300 relative">
        {/* Google Map integration would be added here */}
        <div className="flex items-center justify-center h-full bg-gray-200">
          <div className="text-center">
            <i className="fas fa-map-marker-alt text-[#E10A17] text-5xl mb-4"></i>
            {/* <h3 className="text-xl font-bold">Google Maps Integration</h3> */}
            {/* <p className="text-gray-600">Capital Honda Dealership Location</p> */}
            {/* <p className="text-gray-600 mt-2">123 Auto Plaza, Main Highway Road, City - 110001</p> */}
            {/* <a 
              href="https://maps.google.com/?q=Capital+Honda+Dealership" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 inline-block bg-[#E10A17] text-white px-4 py-2 rounded hover:bg-red-700 transition-all duration-300"
            >
              Get Directions
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;

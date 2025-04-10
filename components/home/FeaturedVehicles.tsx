import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import VehicleCard from "../vehicles/VehicleCard";
import SectionHeading from "../common/SectionHeading";
import { Vehicle } from "@shared/schema";

const FeaturedVehicles = () => {
  const { data: vehicles, isLoading, error } = useQuery<Vehicle[]>({
    queryKey: ['/api/vehicles/featured'],
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Featured Vehicles" 
          description="Explore our selection of the latest Honda models, designed with innovation, reliability and efficiency in mind."
        />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-pulse">
                <div className="h-56 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="flex justify-between mb-4">
                    <div>
                      <div className="h-3 bg-gray-200 rounded w-20 mb-1"></div>
                      <div className="h-5 bg-gray-200 rounded w-24"></div>
                    </div>
                    <div className="text-right">
                      <div className="h-3 bg-gray-200 rounded w-16 mb-1"></div>
                      <div className="h-5 bg-gray-200 rounded w-20"></div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-6 bg-gray-200 rounded w-16"></div>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <div className="h-5 bg-gray-200 rounded w-24"></div>
                    <div className="h-8 bg-gray-200 rounded w-32"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-500">Failed to load vehicles. Please try again later.</p>
          </div>
        ) : vehicles && vehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No featured vehicles available at the moment.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/vehicles" className="inline-block border-2 border-[#E10A17] text-[#E10A17] hover:bg-[#E10A17] hover:text-white px-8 py-3 rounded-md font-medium transition-all duration-300">
            View All Vehicles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;

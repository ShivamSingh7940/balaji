import { Settings, BookOpen, PenToolIcon as Tool, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServiceSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h4 className="text-red-600 font-medium mb-2">OUR SERVICES</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Honda Care</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Capital Honda, we offer comprehensive services to ensure your Honda runs at its best. Our factory-trained
            technicians use genuine Honda parts for all services and repairs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
              <Settings className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold mb-3">Service & Maintenance</h3>
            <p className="text-gray-600 mb-4">
              Regular maintenance and service by Honda experts to keep your vehicle running perfectly.
            </p>
            {/* <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 w-full">
              Book Service
            </Button> */}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold mb-3">Extended Warranty</h3>
            <p className="text-gray-600 mb-4">
              Additional coverage beyond the standard warranty for extra peace of mind.
            </p>
            {/* <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 w-full">
              Learn More
            </Button> */}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
              <Tool className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold mb-3">Genuine Parts</h3>
            <p className="text-gray-600 mb-4">
              Original Honda parts designed specifically for your vehicle to ensure optimal performance.
            </p>
            {/* <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 w-full">
              Order Parts
            </Button> */}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold mb-3">Insurance Services</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive insurance solutions tailored for Honda owners with hassle-free claims.
            </p>
            {/* <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 w-full">
              Get Quote
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client";
import {
  services, type Service, type InsertService,
} from "@shared/schema";
import React from "react";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const categories = [
    { id: "all", label: "All Services" },
    { id: "maintenance", label: "Maintenance" },
    { id: "repairs", label: "Repairs" },
    { id: "bodyshop", label: "Body Shop" },
    { id: "parts", label: "Genuine Parts" },
  ];

  const sampleServices = [
    {
      name: "Regular Maintenance",
      slug: "maintenance",
      description:
        "Keep your Honda running at its best with our comprehensive maintenance services.",
      icon: "fa-tools",
      features: [
        "Oil and filter changes",
        "Multi-point inspections",
        "Brake services",
        "Tire rotations and alignments",
      ],
      category: "maintenance",
    },
    {
      name: "Body Shop & Repairs",
      slug: "bodyshop",
      description:
        "Our body shop offers collision repairs and body work to restore your Honda.",
      icon: "fa-car-crash",
      features: [
        "Dent removals",
        "Paint matching",
        "Structural repairs",
        "Insurance assistance",
      ],
      category: "bodyshop",
    },
    {
      name: "Genuine Parts",
      slug: "genuine-parts",
      description:
        "Only genuine Honda parts designed for optimal performance and longevity.",
      icon: "fa-cogs",
      features: [
        "Factory-approved parts",
        "Original quality",
        "Comprehensive warranty",
        "Parts ordering service",
      ],
      category: "parts",
    },
    {
      name: "Engine Repair",
      slug: "engine-repair",
      description: "Expert engine issue diagnosis and repair.",
      icon: "fa-wrench",
      features: [
        "Engine diagnostics",
        "Engine overhaul",
        "Timing belt replacement",
        "Cooling system service",
      ],
      category: "repairs",
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? sampleServices
      : sampleServices.filter((s) => s.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Service Solutions
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Experience premium service and maintenance for your Honda vehicles with our trained professionals.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center space-x-4 mt-8">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`?category=${cat.id}`}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === cat.id
                  ? "bg-[#E10A17] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {cat.label}
            </a>
          ))}
        </div>

        {/* Services List */}
        <div className="container mx-auto px-4 mt-12">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-[#E10A17] rounded-full flex items-center justify-center text-white mb-6">
                    <i className={`fas ${service.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <i className="fas fa-check text-[#E10A17] mr-2"></i>{" "}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg mt-10">
              <i className="fas fa-tools text-gray-400 text-5xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">No Services Found</h3>
              <p className="text-gray-600">
                There are no services available in this category at the moment.
              </p>
            </div>
          )}
        </div>
      </section>
      

      {/* Service Process Section */}
      <section className="container mx-auto px-4 text-center mt-16">
        <h2 className="text-3xl font-bold mb-2">Our Service Process</h2>
        <p className="text-gray-600 mb-8">
          Experience a hassle-free process designed for your convenience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "Appointment", desc: "Schedule online or by phone." },
            { step: "Inspection", desc: "Initial assessment & planning." },
            { step: "Service", desc: "Expert technicians handle the work." },
            { step: "Delivery", desc: "Final quality check & handover." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md text-center relative"
            >
              <div className="w-16 h-16 bg-[#E10A17] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                {idx + 1}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.step}</h3>
              <p className="text-gray-600">{item.desc}</p>
              {idx < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <i className="fas fa-chevron-right text-[#E10A17] text-xl"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Book Appointment Section */}
      <section className="container mx-auto px-4 mt-20 bg-white rounded-lg shadow-md py-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl font-bold mb-4">Book a Service Appointment</h3>
            <p className="text-gray-600 mb-6">
              Schedule online and our Honda-certified technicians will take care of your vehicle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <div className="flex items-center mb-2">
                  <i className="fas fa-clock text-[#E10A17] mr-2"></i>
                  <span className="font-semibold">Service Hours</span>
                </div>
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-600">Sunday: Open</p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <i className="fas fa-phone-alt text-[#E10A17] mr-2"></i>
                  <span className="font-semibold">Contact</span>
                </div>
                <p className="text-gray-600">+91 9040534567</p>
              </div>
            </div>
            {/* <a
              href="/book-appointment"
              className="inline-block bg-[#E10A17] text-white px-6 py-3 rounded-full font-semibold"
            >
              Book Now
            </a> */}
          </div>
          
            <img
              src=" data:image/jpeg;base64,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"
                alt="Honda Service Center" 
                className="w-full h-full object-cover"
              />
              
        </div>
      </section>
    </div>
  );
};

export default Page;

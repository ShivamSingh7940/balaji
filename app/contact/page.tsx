import React from 'react'

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[300px] bg-gray-800 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Honda Dealership Contact"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
              <p className="text-lg text-white">
                We're here to answer any questions you have about our vehicles, services, or dealership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Visit Us */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
  <div className="w-16 h-16 bg-[#E10A17] rounded-full flex items-center justify-center text-white mx-auto mb-6">
  <i className="fas fa-map-marker-alt text-2xl"></i>
  </div>
  <h3 className="text-xl font-bold mb-3">Visit Us</h3>
  <div className="text-gray-600 leading-relaxed space-y-2 text-left inline-block">
    <p className="flex items-center"><i className="fas fa-home text-[#E10A17] mr-2 w-5"></i>Flat No.: 99/4BT</p>
    <p className="flex items-center"><i className="fas fa-building text-[#E10A17] mr-2 w-5"></i>BALAJI AUTO CARE</p>
    <p className="flex items-center"><i className="fas fa-road text-[#E10A17] mr-2 w-5"></i>PERUMUGAI VILLAGE</p>
    <p className="flex items-center"><i className="fas fa-city text-[#E10A17] mr-2 w-5"></i>Vellore</p>
    <p className="flex items-center"><i className="fas fa-map text-[#E10A17] mr-2 w-5"></i>District: Vellore</p>
    <p className="flex items-center"><i className="fas fa-flag text-[#E10A17] mr-2 w-5"></i>Tamil Nadu</p>
    <p className="flex items-center"><i className="fas fa-mail-bulk text-[#E10A17] mr-2 w-5"></i>PIN Code: 632009</p>
  </div>
</div>


            {/* Call Us */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#E10A17] rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <i className="fas fa-phone-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">Service: +91 98406 12345</p>
              <a
                href="tel:+919876543210"
                className="text-[#E10A17] font-medium hover:underline inline-flex items-center"
              >
                Call Sales Now <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#E10A17] rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <i className="fas fa-clock text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Saturday: 9:00 AM - 7:00 PM<br />
                Sunday: 10:00 AM - 5:00 PM
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-600 mb-12">
            Find answers to common questions about contacting us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* FAQ Item */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <i className="fas fa-question-circle text-[#E10A17] mr-2"></i>
                What are your showroom hours?
              </h3>
              <p className="text-gray-600">
                Our showroom is open Monday to Saturday from 9:00 AM to 7:00 PM,
                and on Sundays from 10:00 AM to 5:00 PM. Our service department is open
                Monday to Saturday from 8:00 AM to 6:00 PM.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <i className="fas fa-question-circle text-[#E10A17] mr-2"></i>
                How do I schedule a test drive?
              </h3>
              <p className="text-gray-600">
                You can schedule a test drive by calling our sales department,
                using our online booking form, or visiting our showroom in person.
                We recommend booking in advance to ensure your preferred vehicle is available.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <i className="fas fa-question-circle text-[#E10A17] mr-2"></i>
                How can I get a quote for a new Honda?
              </h3>
              <p className="text-gray-600">
                You can request a quote by filling out our contact form, calling our sales team,
                or visiting our dealership. Please specify the model and variant you're interested in
                for an accurate quote.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <i className="fas fa-question-circle text-[#E10A17] mr-2"></i>
                How can I check the status of my service?
              </h3>
              <p className="text-gray-600">
                You can check your service status by calling our service department
                or using your service tracking number on our website. Our service advisors
                also provide regular updates via SMS or email.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page

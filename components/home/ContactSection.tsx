import ContactForm from "../common/ContactForm";

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              We're here to answer any questions you may have about our
              vehicles, services, or dealership. Feel free to reach out to us.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#E10A17] rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Visit Our Dealership</h4>
                  <p className="text-gray-600"></p>
                  <p className="text-gray-600">
                    Building No./Flat No.: 99/4BT 
                    <br />Name Of Premises/Building:
                   <br /> BALAJI AUTO CARE Street: PERUMUGAI VILLAGE
                   <br /> City: VELLORE District: Vellore <br />State: Tamil
                    Nadu 
                    <br />PIN CODE:632009
                  </p>
                  
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#E10A17] rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <p className="text-gray-600">Sales: +91 9043007633</p>
                  <p className="text-gray-600">Service: +91 9040534567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#E10A17] rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Us</h4>
                  <p className="text-gray-600">sm@balajihonda.in</p>
                  <p className="text-gray-600">ophead@balajihonda.in</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#E10A17] rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 7:00 PM
                  </p>
                  <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              {/* <h4 className="font-bold text-xl mb-4">Follow Us</h4> */}
              {/* <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-[#E10A17] rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all duration-300"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#E10A17] rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all duration-300"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#E10A17] rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all duration-300"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#E10A17] rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all duration-300"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div> */}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

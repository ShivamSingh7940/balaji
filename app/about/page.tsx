import Head from "next/head";
// import SectionHeading from "../components/common/SectionHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faBullseye } from "@fortawesome/free-solid-svg-icons";


const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Balaji Honda</title>
        <meta name="description" content="Learn about Balaji Honda, your trusted Honda car dealership providing high-quality vehicles and exceptional service." />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" defer></script>
      </Head>

      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[300px] bg-gray-800 overflow-hidden">
          <img 
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJ49ovJpeIwGZOW3diVPLeIHjvDmTGWj2q-UKFOMcQjwcD1LXE" 
            alt="Honda Dealership" 
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About Balaji Honda</h1>
              <p className="text-lg text-white">Your trusted Honda dealership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* <SectionHeading 
            title="About Us" 
            description="Balaji Honda has been serving customers with quality Honda vehicles and exceptional service for over two decades."
          /> */}

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start px-4 lg:px-16 py-12">
  {/* Text Side */}
  <div className="text-center lg:text-left">
    <h2 className="text-3xl font-bold mb-6">ABOUT US</h2>

    <p className="text-gray-600 mb-6">
      Established in 2025, Balaji Honda has been proudly serving as the authorized Honda Cars dealership for the city of Vellore. With a state-of-the-art 3S facility – encompassing Sales, Service, and Spare Parts – we are committed to delivering a complete and satisfying automotive experience to every customer.
    </p>

    <p className="text-gray-600 mb-6">
      Driven by a passion for excellence and customer satisfaction, Balaji Honda has steadily expanded its presence beyond Vellore. We now proudly operate branches in Urapakkam, Kancheepuram, and Tiruvanamalai, bringing world-class Honda services closer to customers across the region.
    </p>

    <p className="text-gray-600 mb-8">
      At Balaji Honda, we believe in building lasting relationships by offering dependable products, professional service, and a customer-first approach. Whether you're purchasing a new Honda, servicing your vehicle, or looking for genuine parts, our experienced team is here to assist you at every step.
    </p>

    <div className="flex items-start mb-6">
      <div className="w-12 h-12 bg-[#E10A17] rounded-full flex items-center justify-center text-white mr-4">
        <i className="fas fa-eye"></i>
      </div>
      <div>
        <h4 className="font-bold text-lg">Our Vision</h4>
        <p className="text-gray-600">To be the most trusted and preferred automotive destination in the region.</p>
      </div>
    </div>

    <div className="flex items-start">
      <div className="w-12 h-12 bg-[#E10A17] rounded-full flex items-center justify-center text-white mr-4">
        <i className="fas fa-bullseye"></i>
      </div>
      <div>
        <h4 className="font-bold text-lg">Our Mission</h4>
        <p className="text-gray-600">To provide exceptional automotive solutions that exceed customer expectations through quality products, honest service, and continuous innovation.</p>
      </div>
    </div>
  </div>

  {/* Image Side */}
  <div>
    <div className="flex justify-center lg:justify-end mb-6">
      <img 
        src="https://res.cloudinary.com/djy15bn9n/image/upload/v1744370522/WhatsApp_Image_2025-04-11_at_4.51.15_PM_2_jeelde.jpg" 
        alt="Balaji Honda Dealership Building" 
        className="rounded-lg shadow-lg w-full max-w-md object-cover"
      />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <img 
        src="https://res.cloudinary.com/djy15bn9n/image/upload/v1744370522/WhatsApp_Image_2025-04-11_at_4.51.16_PM_ugsomj.jpg" 
        alt="Balaji Honda Showroom Interior" 
        className="rounded-lg shadow-md w-full h-48 object-cover"
      />
      <img 
        src="https://res.cloudinary.com/djy15bn9n/image/upload/v1744370931/WhatsApp_Image_2025-04-11_at_4.58.29_PM_eeqmsg.jpg" 
        alt="Balaji Honda Service Center" 
        className="rounded-lg shadow-md w-full h-48 object-cover"
      />
    </div>
  </div>
</div>

        </div>
      </section>

      {/* Achievements / Business Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* <SectionHeading 
            title="Our Business Information" 
            description="Here’s our official business registration detail for your reference."
          /> */}

          <div className="bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#E10A17]">GST Number</h3>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">GSTIN:</span> 33AAGCB0332B1ZL
            </p>
            <p className="text-sm text-gray-500 mt-2">Issued by the Government of India</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#E10A17]">MSME Number</h3>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold"></span> 
              MSME number: TN30E0031349 <br />
              MSME Phone: 9444068666
            </p>
            <p className="text-sm text-gray-500 mt-2">Issued by the Government of India</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

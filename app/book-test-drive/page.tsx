'use client';
import React, { useState } from 'react';
import {
  Info,
  Clock,
  CalendarClock,
  Users,
  BadgeCheck,
} from 'lucide-react';

const page = () => {
  const [form, setForm] = useState({
    fullName: '',
    address: '',
    vehicle: '',
    date: '',
    time: '',
    info: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    // You can send form data to backend here
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRKYzHdnmkmccSyF8KUBLXt5EiSxAJ1zqjQ&s"
          alt="Car background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a Test Drive</h1>
          <p className="text-lg md:text-xl max-w-xl">
            Experience your dream Honda vehicle before you make it yours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center">Schedule your test drive</h2>
  <div className="flex flex-col lg:flex-row gap-8 items-start">
    {/* Form */}
    <form onSubmit={handleSubmit} className="flex-1 space-y-6 bg-white p-6 shadow-md rounded-xl w-full">
      <div>
        <label className="block font-medium mb-1">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Address</label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Select Vehicle</label>
        <select
          name="vehicle"
          value={form.vehicle}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          required
        >
          <option value="">-- Choose Vehicle --</option>
          <option value="Honda City">Honda City</option>
          <option value="Honda Amaze">Honda Amaze</option>
          <option value="Honda Elevate">Honda Elevate</option>
          <option value="Honda WR-V">Honda WR-V</option>
          <option value="Honda Jazz">Honda Jazz</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <label className="block font-medium mb-1">Preferred Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>

        <div className="w-full">
          <label className="block font-medium mb-1">Preferred Time</label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>
      </div>

      <div>
        <label className="block font-medium mb-1">Additional Information</label>
        <textarea
          name="info"
          value={form.info}
          onChange={handleChange}
          rows="4"
          className="w-full border rounded px-4 py-2"
          placeholder="Any specific request or note..."
        />
      </div>

      <button
        type="submit"
        className="bg-[#E10A17] text-white px-6 py-3 rounded-md hover:bg-[#c10913] transition"
      >
        Book Test Drive
      </button>
    </form>

    {/* Image + Info */}
    <div className="flex-1 w-full space-y-6">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRKYzHdnmkmccSyF8KUBLXt5EiSxAJ1zqjQ&s"
        alt="Test drive info"
        className="rounded-xl w-full object-cover"
      />
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm space-y-4">
        <h3 className="text-xl font-semibold">What to Expect During Your Test Drive</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <strong>Personalized Experience:</strong> Our sales consultant will tailor the test drive to your preferences and needs.
          </li>
          <li>
            <strong>Feature Demonstration:</strong> Learn about the vehicle's features, technology, and safety systems.
          </li>
          <li>
            <strong>Various Driving Conditions:</strong> Experience the vehicle in different road conditions to assess performance.
          </li>
          <li>
            <strong>Q&A Session:</strong> Get all your questions answered by our knowledgeable team.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* Important Information Section */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
          <Info className="w-6 h-6 text-[#E10A17]" /> Important Information
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <BadgeCheck className="w-6 h-6 text-[#E10A17] mt-1" />
            <p>Please bring a valid driving license for the test drive.</p>
          </li>
          <li className="flex items-start gap-3">
            <Clock className="w-6 h-6 text-[#E10A17] mt-1" />
            <p>Test drives typically last 30-45 minutes.</p>
          </li>
          <li className="flex items-start gap-3">
            <CalendarClock className="w-6 h-6 text-[#E10A17] mt-1" />
            <p>We recommend booking at least 24 hours in advance.</p>
          </li>
          <li className="flex items-start gap-3">
            <Users className="w-6 h-6 text-[#E10A17] mt-1" />
            <p>You may bring family members to experience the vehicle as well.</p>
          </li>
        </ul>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-600">
      Find answers to common questions about contacting us.
    </p>
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <i className="fas fa-question-circle text-[#E10A17] mr-2"></i>
                What are your showroom hours?
              </h3>
              <p className="text-gray-600">Our showroom is open Monday to Saturday from 9:00 AM to 7:00 PM, and on Sundays from 10:00 AM to 5:00 PM. Our service department is open Monday to Saturday from 8:00 AM to 6:00 PM.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <i className="fas fa-question-circle text-[#E10A17] mr-2"></i>
                How do I schedule a test drive?
              </h3>
              <p className="text-gray-600">You can schedule a test drive by calling our sales department, using our online booking form, or visiting our showroom in person. We recommend booking in advance to ensure your preferred vehicle is available.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <i className="fas fa-question-circle text-[#E10A17] mr-2"></i>
                How can I get a quote for a new Honda?
              </h3>
              <p className="text-gray-600">You can request a quote by filling out our contact form, calling our sales team, or visiting our dealership. Please specify the model and variant you're interested in for an accurate quote.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <i className="fas fa-question-circle text-[#E10A17] mr-2"></i>
                How can I check the status of my service?
              </h3>
              <p className="text-gray-600">You can check your service status by calling our service department or using your service tracking number on our website. Our service advisors also provide regular updates via SMS or email.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

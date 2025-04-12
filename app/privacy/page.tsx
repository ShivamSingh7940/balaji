import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 font-montserrat">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#E10A17]">Privacy Policy</h1>
      <p className="text-sm mb-2 text-center">Effective Date: <strong>11th April, 2025</strong></p>
      <p className="text-sm mb-6 text-center">
        Company Name: <strong>BALAJI AUTO CARE PRIVATE LIMITED</strong><br />
        Website: <a href="https://www.balajihonda.in" className="text-blue-600 hover:underline" target="_blank">https://www.balajihonda.in</a>
      </p>

      <p className="mb-6">
        BALAJI AUTO CARE PRIVATE LIMITED ("we", "our", "us") respects your privacy and is committed to protecting the personal information you provide. This Privacy Policy explains how we collect, use, and protect your data when you use our website and services.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Personal Information:</strong> Name, email, phone number, address, vehicle preferences, etc.</li>
          <li><strong>Transactional Information:</strong> Service history, booking/purchase details, payment info (excluding card numbers unless required).</li>
          <li><strong>Device Information:</strong> IP address, browser type, OS, visited pages, time on site (via cookies or analytics).</li>
          <li><strong>Communication Records:</strong> Emails, inquiries, feedback, and call logs.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>To process vehicle bookings, purchases, and appointments.</li>
          <li>To communicate about updates, offers, and promotions.</li>
          <li>To send service reminders and important notifications.</li>
          <li>To improve our website, services, and customer experience.</li>
          <li>To comply with legal obligations and prevent fraud.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Sharing of Information</h2>
        <p>We do not sell or rent your personal data. We may share it with:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Authorized Honda Partners</strong> for service and warranty support.</li>
          <li><strong>Service Providers</strong> (SMS, email, analytics, CRM) under confidentiality agreements.</li>
          <li><strong>Government Authorities</strong> when required by law or for legal protection.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Cookies & Tracking</h2>
        <p>We use cookies and analytics tools (like Google Analytics) to enhance user experience and track engagement. You can disable cookies in your browser settings, but some functionality may be affected.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
        <p>We implement industry-standard measures to protect your data. However, no digital system is completely secure.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Data Retention</h2>
        <p>We retain your data only as long as necessary for the purposes outlined or as required by law.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Access or correct your personal data.</li>
          <li>Request data deletion (as permitted by law).</li>
          <li>Opt-out of marketing communications.</li>
        </ul>
        <p className="mt-2">To exercise these rights, contact us at <a href="mailto:sm@balajihonda.in" className="text-blue-600 hover:underline">sm@balajihonda.in</a>.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Third-Party Links</h2>
        <p>Our site may link to third-party websites. We are not responsible for their privacy practices and encourage reviewing their privacy policies.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Updates to This Policy</h2>
        <p>We may update this Privacy Policy. Updates will be posted on this page with a new "Effective Date". Continued use after changes indicates acceptance.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p>
          <strong>BALAJI AUTO CARE PRIVATE LIMITED</strong><br />
          No. 99/4 B1, Perumugai, Vellore - 632009, Tamil Nadu, India<br />
          📞 +91 98406 12345<br />
          ✉️ <a href="mailto:sm@balajihonda.in" className="text-blue-600 hover:underline">sm@balajihonda.in</a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;

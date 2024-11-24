
// pages/contact.tsx
"use client"
import { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
     
      <div className="min-h-screen bg-gray-100 flex items-center justify-center text-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4 animate__animated animate__fadeIn">
            Contact Us
          </h1>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transform transition duration-300 ease-in-out">
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-lg text-gray-700 animate__animated animate__fadeIn">
              <p>Thank you for contacting us! We will get back to you soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

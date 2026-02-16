
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-poppins text-gray-800">Get In Touch</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We'd love to hear from you! Reach out with any questions or to schedule a tour of our campus.
        </p>
      </div>

      <div className="mt-12 max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-soft">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"></textarea>
          </div>
          <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3 px-4 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-soft">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
